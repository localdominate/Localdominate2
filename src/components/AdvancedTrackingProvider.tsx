import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import useAdvancedABTracking from "@/hooks/useAdvancedABTracking";
import { useAutoOptimizerContext } from "@/components/AutoOptimizerProvider";
import { setTestId } from "@/lib/sessionManager";

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
  const { currentTest, userVariant, isLoading } = useAutoOptimizerContext();
  
  // Track if we've determined the test ID
  const [effectiveTestId, setEffectiveTestId] = useState<string>("no_test");
  const [effectiveVariant, setEffectiveVariant] = useState<string>("A");
  
  // Update test ID when currentTest changes (wait for AutoOptimizer to load)
  useEffect(() => {
    if (!isLoading) {
      const testId = currentTest?.testId || "no_test";
      const variant = userVariant || "A";
      
      setEffectiveTestId(testId);
      setEffectiveVariant(variant);
      
      // Update central session manager
      if (testId !== "no_test") {
        setTestId(testId);
        console.log('[AdvancedTrackingProvider] Set test ID:', testId, 'variant:', variant);
      }
    }
  }, [currentTest, userVariant, isLoading]);
  
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
  } = useAdvancedABTracking(effectiveTestId, effectiveVariant);

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
