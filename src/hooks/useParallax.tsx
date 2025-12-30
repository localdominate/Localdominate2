import { useState, useEffect, useRef, RefObject } from "react";

interface UseParallaxOptions {
  speed?: number; // 0 = no movement, 1 = normal scroll speed, 0.5 = half speed
  direction?: "up" | "down";
  disabled?: boolean;
}

interface ParallaxResult {
  ref: RefObject<HTMLDivElement>;
  style: React.CSSProperties;
  progress: number;
}

export const useParallax = (options: UseParallaxOptions = {}): ParallaxResult => {
  const { speed = 0.5, direction = "up", disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is through the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate progress (0 = element entering, 1 = element leaving)
      const elementProgress = 1 - (rect.top / (windowHeight + rect.height));
      setProgress(Math.max(0, Math.min(1, elementProgress)));
      
      // Calculate parallax offset
      const parallaxOffset = distanceFromCenter * speed;
      const finalOffset = direction === "up" ? -parallaxOffset : parallaxOffset;
      
      setOffset(finalOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  const style: React.CSSProperties = disabled
    ? {}
    : {
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      };

  return { ref, style, progress };
};

// Hook for multiple parallax layers
interface ParallaxLayer {
  speed: number;
  direction?: "up" | "down";
}

export const useMultiLayerParallax = (layers: ParallaxLayer[]) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return layers.map((layer) => ({
    transform: `translateY(${scrollY * layer.speed * (layer.direction === "down" ? 1 : -1)}px)`,
    willChange: "transform" as const,
  }));
};

export default useParallax;
