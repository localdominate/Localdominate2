import { ReactNode, useRef, useState, useEffect } from "react";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  stickyClassName?: string;
  offsetTop?: number; // Distance from top when sticky
  fadeIn?: boolean;
}

const StickySection = ({
  children,
  className = "",
  stickyClassName = "",
  offsetTop = 0,
  fadeIn = true,
}: StickySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyProgress, setStickyProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const shouldBeSticky = rect.top <= offsetTop;
      setIsSticky(shouldBeSticky);

      // Calculate how "into" sticky mode we are (for animations)
      if (shouldBeSticky) {
        const progress = Math.min(1, Math.abs(rect.top - offsetTop) / 100);
        setStickyProgress(progress);
      } else {
        setStickyProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetTop]);

  return (
    <div
      ref={containerRef}
      className={`sticky ${className}`}
      style={{
        top: offsetTop,
        zIndex: isSticky ? 40 : "auto",
      }}
    >
      <div
        className={`transition-all duration-300 ${isSticky ? stickyClassName : ""}`}
        style={{
          opacity: fadeIn ? 0.7 + stickyProgress * 0.3 : 1,
          transform: fadeIn
            ? `scale(${0.98 + stickyProgress * 0.02})`
            : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StickySection;
