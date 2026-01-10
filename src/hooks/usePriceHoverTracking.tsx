import { useCallback, useRef } from "react";
import { useAdvancedTrackingContext } from "@/components/AdvancedTrackingProvider";

interface UsePriceHoverTrackingReturn {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const usePriceHoverTracking = (): UsePriceHoverTrackingReturn => {
  const { trackPriceHover } = useAdvancedTrackingContext();
  const hoverStartTime = useRef<number | null>(null);

  const onMouseEnter = useCallback(() => {
    hoverStartTime.current = Date.now();
  }, []);

  const onMouseLeave = useCallback(() => {
    if (hoverStartTime.current) {
      const duration = Date.now() - hoverStartTime.current;
      trackPriceHover(duration);
      hoverStartTime.current = null;
    }
  }, [trackPriceHover]);

  return { onMouseEnter, onMouseLeave };
};

export default usePriceHoverTracking;
