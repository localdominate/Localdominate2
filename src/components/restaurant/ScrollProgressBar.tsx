import { usePageScrollProgress } from "@/hooks/useScrollProgress";

interface ScrollProgressBarProps {
  className?: string;
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

const ScrollProgressBar = ({
  className = "",
  height = 3,
}: ScrollProgressBarProps) => {
  const progress = usePageScrollProgress();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] ${className}`}
      style={{ height }}
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-menu-dark/50 backdrop-blur-sm" />
      
      {/* Progress bar */}
      <div
        className="h-full bg-gradient-to-r from-menu-gold via-menu-gold-light to-menu-gold relative overflow-hidden transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
      
      {/* Glow effect at the end */}
      <div
        className="absolute top-0 h-full w-4 bg-menu-gold/50 blur-sm transition-all duration-150"
        style={{ left: `calc(${progress * 100}% - 8px)` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
