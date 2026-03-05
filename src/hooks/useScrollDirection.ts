import { useState, useEffect, useRef } from "react";

interface ScrollDirectionState {
  direction: "up" | "down" | "idle";
  scrollY: number;
  scrollPercent: number;
  isScrollingUp: boolean;
  velocity: number; // px per frame, positive = down
}

export function useScrollDirection(threshold = 10): ScrollDirectionState {
  const [state, setState] = useState<ScrollDirectionState>({
    direction: "idle",
    scrollY: 0,
    scrollPercent: 0,
    isScrollingUp: false,
    velocity: 0,
  });
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? y / docHeight : 0;
      const delta = y - lastY.current;

      if (Math.abs(delta) > threshold) {
        setState({
          direction: delta > 0 ? "down" : "up",
          scrollY: y,
          scrollPercent: percent,
          isScrollingUp: delta < 0,
          velocity: delta,
        });
        lastY.current = y;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
