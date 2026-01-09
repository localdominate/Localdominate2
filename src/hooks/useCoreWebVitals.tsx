import { useEffect, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

interface WebVitalMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
}

interface CoreWebVitals {
  LCP: number | null; // Largest Contentful Paint
  FID: number | null; // First Input Delay
  CLS: number | null; // Cumulative Layout Shift
  FCP: number | null; // First Contentful Paint
  TTFB: number | null; // Time to First Byte
  INP: number | null; // Interaction to Next Paint
}

const getVitalsRating = (name: string, value: number): WebVitalMetric["rating"] => {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500],
  };
  
  const [good, poor] = thresholds[name] || [1000, 3000];
  
  if (value <= good) return "good";
  if (value <= poor) return "needs-improvement";
  return "poor";
};

export const useCoreWebVitals = (trackToDatabase = false) => {
  const vitalsRef = useRef<CoreWebVitals>({
    LCP: null,
    FID: null,
    CLS: null,
    FCP: null,
    TTFB: null,
    INP: null,
  });
  
  const sessionId = useRef<string>(
    sessionStorage.getItem("analytics_session_id") || crypto.randomUUID()
  );

  const trackVital = useCallback(async (metric: WebVitalMetric) => {
    // Store in ref
    vitalsRef.current = {
      ...vitalsRef.current,
      [metric.name]: metric.value,
    };
    
    // Store in localStorage for dashboard
    const storedVitals = JSON.parse(localStorage.getItem("core_web_vitals") || "[]");
    storedVitals.push({
      ...metric,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      sessionId: sessionId.current,
    });
    
    // Keep last 100 entries
    if (storedVitals.length > 100) {
      storedVitals.splice(0, storedVitals.length - 100);
    }
    localStorage.setItem("core_web_vitals", JSON.stringify(storedVitals));
    
    // Optionally track to database
    if (trackToDatabase) {
      try {
        await supabase.from("analytics_events").insert({
          session_id: sessionId.current,
          event_type: "web_vital",
          event_name: metric.name,
          event_data: {
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
          },
          page_path: window.location.pathname,
        });
      } catch (error) {
        console.error("Error tracking web vital:", error);
      }
    }
  }, [trackToDatabase]);

  useEffect(() => {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const value = lastEntry.startTime;
        trackVital({
          name: "LCP",
          value,
          rating: getVitalsRating("LCP", value),
          delta: value,
          id: crypto.randomUUID(),
        });
      }
    });
    
    try {
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEventTiming) => {
        const value = entry.processingStart - entry.startTime;
        trackVital({
          name: "FID",
          value,
          rating: getVitalsRating("FID", value),
          delta: value,
          id: crypto.randomUUID(),
        });
      });
    });
    
    try {
      fidObserver.observe({ type: "first-input", buffered: true });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
    });
    
    try {
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      // CLS not supported
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          const value = entry.startTime;
          trackVital({
            name: "FCP",
            value,
            rating: getVitalsRating("FCP", value),
            delta: value,
            id: crypto.randomUUID(),
          });
        }
      });
    });
    
    try {
      fcpObserver.observe({ type: "paint", buffered: true });
    } catch (e) {
      // FCP not supported
    }

    // Time to First Byte
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (navigationEntries.length > 0) {
      const ttfb = navigationEntries[0].responseStart;
      trackVital({
        name: "TTFB",
        value: ttfb,
        rating: getVitalsRating("TTFB", ttfb),
        delta: ttfb,
        id: crypto.randomUUID(),
      });
    }

    // Report CLS on page hide
    const reportCLS = () => {
      if (clsValue > 0) {
        trackVital({
          name: "CLS",
          value: clsValue,
          rating: getVitalsRating("CLS", clsValue),
          delta: clsValue,
          id: crypto.randomUUID(),
        });
      }
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        reportCLS();
      }
    });

    window.addEventListener("pagehide", reportCLS);

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      document.removeEventListener("visibilitychange", reportCLS);
      window.removeEventListener("pagehide", reportCLS);
    };
  }, [trackVital]);

  return vitalsRef.current;
};

export const getCoreWebVitalsHistory = () => {
  return JSON.parse(localStorage.getItem("core_web_vitals") || "[]");
};

export const clearCoreWebVitalsHistory = () => {
  localStorage.removeItem("core_web_vitals");
};
