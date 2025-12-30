import { useState, useEffect, useRef, RefObject } from "react";

interface UseScrollProgressOptions {
  threshold?: number; // When to start tracking (0-1)
  offset?: number; // Offset from viewport edge in pixels
}

interface ScrollProgressResult {
  progress: number; // 0-1, how far through the page/element
  isVisible: boolean;
  hasScrolledPast: boolean;
  ref: RefObject<HTMLDivElement>;
}

// Track scroll progress of entire page
export const usePageScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.max(0, Math.min(1, scrollPercent)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

// Track scroll progress of specific element
export const useElementScrollProgress = (
  options: UseScrollProgressOptions = {}
): ScrollProgressResult => {
  const { threshold = 0, offset = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is visible
      const isInView = rect.top < windowHeight - offset && rect.bottom > offset;
      setIsVisible(isInView);
      
      // Check if scrolled past
      setHasScrolledPast(rect.bottom < offset);
      
      // Calculate progress through element
      const elementStart = windowHeight - offset;
      const elementEnd = -rect.height + offset;
      const currentPosition = rect.top;
      
      const elementProgress = (elementStart - currentPosition) / (elementStart - elementEnd);
      setProgress(Math.max(0, Math.min(1, elementProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, offset]);

  return { progress, isVisible, hasScrolledPast, ref };
};

// Get scroll direction
export const useScrollDirection = (): "up" | "down" | null => {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("up");
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
};

export default usePageScrollProgress;
