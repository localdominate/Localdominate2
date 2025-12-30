import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = ""
}: UseAnimatedCounterOptions) => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for natural feel (ease-out-expo)
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      const currentValue = startValue + (end - startValue) * easeOutExpo;
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const formattedValue = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return { value, formattedValue, ref, isVisible };
};

export default useAnimatedCounter;
