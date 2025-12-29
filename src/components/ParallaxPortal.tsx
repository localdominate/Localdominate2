import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxPortalProps {
  children: ReactNode;
}

const ParallaxPortal = ({ children }: ParallaxPortalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when element enters view, 1 when it's centered
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Progress from 0 (element at bottom of viewport) to 1 (element passed top)
      const progress = 1 - (rect.top / windowHeight);
      
      // Clamp between 0 and 1, but we want the effect to complete before full scroll
      const clampedProgress = Math.max(0, Math.min(1, progress * 1.5 - 0.25));
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Frame scales up and fades out as you scroll "into" it
  const frameScale = 1 + scrollProgress * 0.15;
  const frameOpacity = Math.max(0, 1 - scrollProgress * 1.2);
  
  // Content has subtle parallax movement
  const contentTranslate = scrollProgress * -30;

  return (
    <div ref={containerRef} className="relative">
      {/* Portal Frame - the "screen" you scroll into */}
      <div 
        className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-center h-screen"
        style={{
          opacity: frameOpacity,
          transform: `scale(${frameScale})`,
          transition: "opacity 0.1s ease-out",
        }}
      >
        <div className="relative w-[90vw] max-w-5xl aspect-[16/10]">
          {/* Outer frame - tablet/monitor look */}
          <div 
            className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] border-[12px] md:border-[20px] border-foreground/10 bg-transparent shadow-2xl"
            style={{
              boxShadow: `
                0 0 0 2px hsl(var(--border)),
                0 25px 50px -12px rgba(0,0,0,0.25),
                inset 0 0 30px rgba(0,0,0,0.1)
              `,
            }}
          >
            {/* Camera dot */}
            <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/20" />
            
            {/* Screen bezel reflection */}
            <div className="absolute inset-4 md:inset-6 rounded-xl md:rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Actual content with parallax */}
      <div 
        style={{
          transform: `translateY(${contentTranslate}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxPortal;
