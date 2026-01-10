import { useEffect, useRef, useCallback, useState } from "react";
import { getSessionId, getVariant } from "@/lib/sessionManager";
import { supabase } from "@/integrations/supabase/client";

interface HeatmapPoint {
  x: number;
  y: number;
  value: number;
  timestamp: number;
  type: "click" | "move" | "scroll";
  path: string;
}

interface HeatmapTrackerProps {
  enabled?: boolean;
  showOverlay?: boolean;
  storageKey?: string;
  maxPoints?: number;
}

const HeatmapTracker = ({
  enabled = true,
  showOverlay = false,
  storageKey = "heatmap_data",
  maxPoints = 5000,
}: HeatmapTrackerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<HeatmapPoint[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(showOverlay);
  const lastMoveTime = useRef(0);
  const moveThrottle = 100; // ms
  
  // Use central session manager
  const sessionId = useRef(getSessionId());
  const variant = useRef(getVariant());

  // Check URL parameter for admin overlay
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("heatmap") === "true") {
      setIsOverlayVisible(true);
    }
  }, []);

  // Load existing data
  useEffect(() => {
    if (!enabled) return;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as HeatmapPoint[];
        setPoints(parsed);
      }
    } catch (e) {
      console.warn("Failed to load heatmap data:", e);
    }
  }, [enabled, storageKey]);

  // Save data locally and optionally to Supabase
  const savePoint = useCallback(
    async (point: HeatmapPoint) => {
      setPoints((prev) => {
        const newPoints = [...prev, point].slice(-maxPoints);
        try {
          localStorage.setItem(storageKey, JSON.stringify(newPoints));
        } catch (e) {
          console.warn("Failed to save heatmap data:", e);
        }
        return newPoints;
      });
      
      // Track clicks to Supabase with session and variant
      if (point.type === "click") {
        try {
          await supabase.from("analytics_heatmap_enhanced").insert({
            session_id: sessionId.current,
            x_percent: (point.x / window.innerWidth) * 100,
            y_percent: (point.y / document.documentElement.scrollHeight) * 100,
            interaction_type: point.type,
            element_selector: point.path,
            page_path: window.location.pathname,
            ab_variant: variant.current,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            device: window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop",
          });
        } catch (e) {
          console.warn("Failed to track heatmap to Supabase:", e);
        }
      }
    },
    [maxPoints, storageKey]
  );

  // Click handler
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const className = typeof target.className === "string" ? target.className : "";
      const point: HeatmapPoint = {
        x: e.pageX,
        y: e.pageY,
        value: 10,
        timestamp: Date.now(),
        type: "click",
        path: target.tagName + (className ? `.${className.split(" ")[0]}` : ""),
      };
      savePoint(point);
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, [enabled, savePoint]);

  // Mouse move handler (throttled)
  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMoveTime.current < moveThrottle) return;
      lastMoveTime.current = now;

      const point: HeatmapPoint = {
        x: e.pageX,
        y: e.pageY,
        value: 1,
        timestamp: now,
        type: "move",
        path: "",
      };
      savePoint(point);
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMove);
  }, [enabled, savePoint]);

  // Scroll depth tracking
  useEffect(() => {
    if (!enabled) return;

    let lastScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Only track at 25% intervals
      const milestone = Math.floor(scrollPercent / 25) * 25;
      if (milestone > lastScrollDepth && milestone <= 100) {
        lastScrollDepth = milestone;
        const point: HeatmapPoint = {
          x: window.innerWidth / 2,
          y: scrollTop + window.innerHeight / 2,
          value: 5,
          timestamp: Date.now(),
          type: "scroll",
          path: `scroll_${milestone}%`,
        };
        savePoint(point);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, savePoint]);

  // Render heatmap overlay
  useEffect(() => {
    if (!isOverlayVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = document.documentElement.scrollWidth;
    canvas.height = document.documentElement.scrollHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw heatmap points
    points.forEach((point) => {
      const radius = point.type === "click" ? 30 : point.type === "scroll" ? 50 : 15;
      const alpha = point.type === "click" ? 0.3 : point.type === "scroll" ? 0.2 : 0.05;

      const gradient = ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        radius
      );

      if (point.type === "click") {
        gradient.addColorStop(0, `rgba(255, 0, 0, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(255, 100, 0, ${alpha * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 200, 0, 0)");
      } else if (point.type === "scroll") {
        gradient.addColorStop(0, `rgba(0, 255, 0, ${alpha})`);
        gradient.addColorStop(1, "rgba(0, 255, 0, 0)");
      } else {
        gradient.addColorStop(0, `rgba(0, 100, 255, ${alpha})`);
        gradient.addColorStop(1, "rgba(0, 100, 255, 0)");
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [isOverlayVisible, points]);

  // Export function
  const exportData = () => {
    const dataStr = JSON.stringify(points, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `heatmap_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Clear function
  const clearData = () => {
    localStorage.removeItem(storageKey);
    setPoints([]);
  };

  if (!enabled) return null;

  return (
    <>
      {isOverlayVisible && (
        <>
          <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[9998]"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div className="fixed bottom-4 right-4 z-[9999] flex gap-2 rounded-lg bg-black/80 p-3 text-white shadow-lg">
            <div className="mr-2 text-sm">
              <span className="font-bold">{points.length}</span> Punkte
              <div className="mt-1 flex gap-2 text-xs">
                <span className="text-red-400">● Klicks</span>
                <span className="text-blue-400">● Bewegung</span>
                <span className="text-green-400">● Scroll</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                Session: {sessionId.current.substring(0, 15)}...
              </div>
              <div className="text-xs text-gray-400">
                Variante: {variant.current}
              </div>
            </div>
            <button
              onClick={exportData}
              className="rounded bg-emerald-600 px-3 py-1 text-sm hover:bg-emerald-700"
            >
              Export
            </button>
            <button
              onClick={clearData}
              className="rounded bg-red-600 px-3 py-1 text-sm hover:bg-red-700"
            >
              Löschen
            </button>
            <button
              onClick={() => setIsOverlayVisible(false)}
              className="rounded bg-gray-600 px-3 py-1 text-sm hover:bg-gray-700"
            >
              ×
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default HeatmapTracker;
