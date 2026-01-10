import { useCallback, useRef } from "react";
import { useAdvancedTrackingContext } from "@/components/AdvancedTrackingProvider";

interface UseCtaHoverTrackingReturn {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const useCtaHoverTracking = (ctaId: string): UseCtaHoverTrackingReturn => {
  const { trackCtaHover, trackCtaHoverDuration } = useAdvancedTrackingContext();
  const hoverStartTime = useRef<number | null>(null);

  const onMouseEnter = useCallback(() => {
    hoverStartTime.current = Date.now();
    trackCtaHover(ctaId, true);
  }, [ctaId, trackCtaHover]);

  const onMouseLeave = useCallback(() => {
    if (hoverStartTime.current) {
      const duration = Date.now() - hoverStartTime.current;
      trackCtaHoverDuration(duration);
      hoverStartTime.current = null;
    }
    trackCtaHover(ctaId, false);
  }, [ctaId, trackCtaHover, trackCtaHoverDuration]);

  return { onMouseEnter, onMouseLeave };
};

export default useCtaHoverTracking;
