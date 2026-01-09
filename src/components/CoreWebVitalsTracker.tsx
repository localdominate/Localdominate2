import { useEffect } from "react";
import { useCoreWebVitals } from "@/hooks/useCoreWebVitals";

interface CoreWebVitalsTrackerProps {
  trackToDatabase?: boolean;
}

/**
 * Invisible component that tracks Core Web Vitals site-wide.
 * Include this component once in your app (e.g., in App.tsx or a layout component).
 */
const CoreWebVitalsTracker = ({ trackToDatabase = false }: CoreWebVitalsTrackerProps) => {
  // Initialize the Core Web Vitals tracking
  useCoreWebVitals(trackToDatabase);

  // Log when tracking is initialized
  useEffect(() => {
    console.log("[Core Web Vitals] Tracking initialized", { trackToDatabase });
  }, [trackToDatabase]);

  // This component doesn't render anything visible
  return null;
};

export default CoreWebVitalsTracker;
