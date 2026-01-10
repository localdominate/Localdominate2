import React, { useEffect, useRef, ReactNode } from "react";
import { useAdvancedTrackingContext } from "@/components/AdvancedTrackingProvider";

type SectionName = "hero" | "pain" | "solution" | "offer" | "testimonials" | "faq" | "cta";

interface TrackedSectionProps {
  sectionName: SectionName;
  children: ReactNode;
  className?: string;
}

const TrackedSection = ({ sectionName, children, className }: TrackedSectionProps) => {
  const { trackSectionView } = useAdvancedTrackingContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Track when section is >50% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionName);
          }
          // Also track on any visibility to update current section
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
          }
        });
      },
      {
        threshold: [0.1, 0.5],
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, trackSectionView]);

  return (
    <div ref={sectionRef} className={className} data-section={sectionName}>
      {children}
    </div>
  );
};

export default TrackedSection;
