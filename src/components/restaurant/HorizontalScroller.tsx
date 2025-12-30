import { ReactNode, useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  snapToItems?: boolean;
}

const HorizontalScroller = ({
  children,
  className = "",
  showArrows = true,
  showDots = true,
  autoScroll = false,
  autoScrollInterval = 4000,
  snapToItems = true,
}: HorizontalScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll('[data-scroll-item]');
    setItemCount(items.length);

    const updateScrollState = () => {
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );

      // Calculate active index
      const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      const newIndex = Math.round(scrollPercentage * (items.length - 1));
      setActiveIndex(Math.max(0, Math.min(items.length - 1, newIndex)));
    };

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener("scroll", updateScrollState);
  }, [children]);

  // Auto scroll
  useEffect(() => {
    if (!autoScroll || itemCount === 0) return;

    const interval = setInterval(() => {
      scrollToIndex((activeIndex + 1) % itemCount);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, activeIndex, itemCount]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll('[data-scroll-item]');
    const targetItem = items[index] as HTMLElement;
    if (targetItem) {
      container.scrollTo({
        left: targetItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 ${
          snapToItems ? "snap-x snap-mandatory" : ""
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => scrollBy("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-10 h-10 rounded-full bg-menu-cream/10 border border-menu-gold/30
              flex items-center justify-center text-menu-gold
              transition-all duration-300 backdrop-blur-sm
              ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}
              hover:bg-menu-gold/20 hover:border-menu-gold/50`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-10 h-10 rounded-full bg-menu-cream/10 border border-menu-gold/30
              flex items-center justify-center text-menu-gold
              transition-all duration-300 backdrop-blur-sm
              ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}
              hover:bg-menu-gold/20 hover:border-menu-gold/50`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && itemCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${
                  index === activeIndex
                    ? "bg-menu-gold w-6"
                    : "bg-menu-gold/30 hover:bg-menu-gold/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Wrapper for individual scroll items
export const ScrollItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    data-scroll-item
    className={`flex-shrink-0 snap-center ${className}`}
  >
    {children}
  </div>
);

export default HorizontalScroller;
