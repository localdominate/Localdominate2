import React, { createContext, useContext, ReactNode } from "react";
import useAdvancedABTracking from "@/hooks/useAdvancedABTracking";
import { useAutoOptimizerContext } from "@/components/AutoOptimizerProvider";

type SectionName = "hero" | "pain" | "solution" | "offer" | "testimonials" | "faq" | "cta";

interface AdvancedTrackingContextType {
  trackCtaHover: (ctaId: string, isEnter: boolean) => void;
  trackCtaHoverDuration: (durationMs: number) => void;
  trackPriceHover: (durationMs: number) => void;
  trackSectionView: (sectionName: SectionName) => void;
  trackClick: (elementId: string, isCta?: boolean) => void;
  trackCheckoutStart: () => void;
  trackCheckoutComplete: () => void;
  getEngagementScore: () => number;
  getIntentScore: () => number;
  sessionId: string;
}

const AdvancedTrackingContext = createContext<AdvancedTrackingContextType | null>(null);

export const useAdvancedTrackingContext = () => {
  const context = useContext(AdvancedTrackingContext);
  if (!context) {
    // Return no-op functions when not wrapped in provider
    return {
      trackCtaHover: () => {},
      trackCtaHoverDuration: () => {},
      trackPriceHover: () => {},
      trackSectionView: () => {},
      trackClick: () => {},
      trackCheckoutStart: () => {},
      trackCheckoutComplete: () => {},
      getEngagementScore: () => 0,
      getIntentScore: () => 0,
      sessionId: "",
    };
  }
  return context;
};

interface AdvancedTrackingProviderProps {
  children: ReactNode;
}

export const AdvancedTrackingProvider = ({ children }: AdvancedTrackingProviderProps) => {
  // Get the current test ID and variant from the AutoOptimizer
  const { currentTest, userVariant } = useAutoOptimizerContext();
  
  const testId = currentTest?.testId || "default_test";
  const variant = userVariant || "A";
  
  const {
    trackCtaHover,
    trackCtaHoverDuration,
    trackPriceHover,
    trackSectionView,
    trackClick,
    trackCheckoutStart,
    trackCheckoutComplete,
    getEngagementScore,
    getIntentScore,
    sessionId,
  } = useAdvancedABTracking(testId, variant);

  return (
    <AdvancedTrackingContext.Provider
      value={{
        trackCtaHover,
        trackCtaHoverDuration,
        trackPriceHover,
        trackSectionView,
        trackClick,
        trackCheckoutStart,
        trackCheckoutComplete,
        getEngagementScore,
        getIntentScore,
        sessionId,
      }}
    >
      {children}
    </AdvancedTrackingContext.Provider>
  );
};
