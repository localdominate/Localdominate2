import { lazy, Suspense, useEffect, useState } from "react";
import type { ReactNode } from "react";
import HeroAIVisibility from "@/components/HeroAIVisibility";
import { initDataLayer, trackPageView } from "@/lib/dataLayer";
import ErrorBoundary from "@/components/ErrorBoundary";

// Critical components loaded immediately
import AnnouncementBar from "@/components/AnnouncementBar";
import LanguageSwitch from "@/components/LanguageSwitch";

// Lazy load non-critical above-the-fold components
const RankingComparison = lazy(() => import("@/components/RankingComparison"));
const PainSection = lazy(() => import("@/components/PainSection"));
const StatisticsBar = lazy(() => import("@/components/StatisticsBar"));

// AI Visibility (GEO) sections
const AISearchPreviewSection = lazy(() => import("@/components/ai/AISearchPreviewSection"));
const AIVisibilityIndexSection = lazy(() => import("@/components/ai/AIVisibilityIndexSection"));

// Lazy load below-the-fold components
const ComparisonTable = lazy(() => import("@/components/ComparisonTable"));
const SolutionSection = lazy(() => import("@/components/SolutionSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ValueStackSection = lazy(() => import("@/components/ValueStackSection"));
const OfferSection = lazy(() => import("@/components/OfferSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const ExpertSection = lazy(() => import("@/components/ExpertSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Lazy load UI enhancement components (non-critical for FCP/LCP)
const MobileStickyBar = lazy(() => import("@/components/MobileStickyBar"));
const StickyHeader = lazy(() => import("@/components/StickyHeader"));
const ScrollProgress = lazy(() => import("@/components/ScrollProgress"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const BackToTop = lazy(() => import("@/components/BackToTop"));
const SocialProofToast = lazy(() => import("@/components/SocialProofToast"));
const CookieBanner = lazy(() => import("@/components/CookieBanner"));
const HeatmapTracker = lazy(() => import("@/components/HeatmapTracker"));

const shouldLoadHeatmap = () => {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("heatmap") === "true";
};

const shouldLoadAdvancedTracking = () => {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("analytics") === "true";
};

// Lazy load providers (defer DB calls)
const AutoOptimizerProvider = lazy(() => 
  import("@/components/AutoOptimizerProvider").then(m => ({ default: m.AutoOptimizerProvider }))
);
const AdvancedTrackingProvider = lazy(() => 
  import("@/components/AdvancedTrackingProvider").then(m => ({ default: m.AdvancedTrackingProvider }))
);
const TrackedSection = lazy(() => 
  import("@/components/TrackedSection").then(m => ({ default: m.default }))
);

// Minimal loading fallback - invisible to prevent layout shift
const SectionFallback = () => <div className="min-h-[100px]" />;
const NullFallback = () => null;

const DeferredHomeContent = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const showContent = () => setIsReady(true);
    if ("requestIdleCallback" in window && "cancelIdleCallback" in window) {
      const idleWindow = window as Window & {
        requestIdleCallback: (callback: () => void, options?: { timeout: number }) => number;
        cancelIdleCallback: (id: number) => void;
      };
      const idleId = idleWindow.requestIdleCallback(showContent, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(showContent, 900);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  if (!isReady) return null;
  return <>{children}</>;
};

type TrackedSectionName = "pain" | "solution" | "offer" | "testimonials" | "faq" | "cta";

const ConditionalTrackedSection = ({
  enabled,
  sectionName,
  children,
}: {
  enabled: boolean;
  sectionName: TrackedSectionName;
  children: ReactNode;
}) => {
  if (!enabled) return <>{children}</>;

  return <TrackedSection sectionName={sectionName}>{children}</TrackedSection>;
};

// Hooks must be called unconditionally, so we create wrapper components
const TrackingInitializer = () => {
  // Dynamic import hooks only after initial render
  useEffect(() => {
    // Defer non-critical tracking initialization
    const initTracking = async () => {
      const { default: useScrollDepthTracking } = await import("@/hooks/useScrollDepthTracking");
      const { default: useAnalyticsSession } = await import("@/hooks/useAnalyticsSession");
    };
    
    // Delay tracking initialization by 2 seconds for better FCP
    const timer = setTimeout(initTracking, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return null;
};

const Index = () => {
  const [isHeatmapEnabled] = useState(shouldLoadHeatmap);
  const [isAdvancedTrackingEnabled] = useState(shouldLoadAdvancedTracking);

  useEffect(() => {
    initDataLayer();
    trackPageView("/", "Local Dominator - Home");
  }, []);

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Critical Above-the-Fold Content - No Suspense wrapping */}
      <AnnouncementBar />
      <LanguageSwitch />
      <HeroAIVisibility />
      
      <DeferredHomeContent>
        {/* Statistics Bar - E-E-A-T data signals */}
        <Suspense fallback={<NullFallback />}>
          <StatisticsBar />
        </Suspense>

        {/* AI Search Preview — GEO repositioning */}
        <Suspense fallback={<SectionFallback />}>
          <AISearchPreviewSection />
        </Suspense>

        {/* AI Visibility Index™ scorecard */}
        <Suspense fallback={<SectionFallback />}>
          <AIVisibilityIndexSection />
        </Suspense>
      </DeferredHomeContent>
      
      {/* Initialize tracking after critical content */}
      <TrackingInitializer />
      
      <DeferredHomeContent>
        {/* Lazy-loaded Global UI Components - Deferred */}
        <Suspense fallback={<NullFallback />}>
          <ScrollProgress />
          <StickyHeader />
          {/* <ExitIntentPopup /> */}
          <SocialProofToast />
        </Suspense>
      </DeferredHomeContent>
      
      <DeferredHomeContent>
        <ErrorBoundary fallback={<SectionFallback />}>
          <Suspense fallback={<SectionFallback />}>
            <AutoOptimizerProvider>
              {isAdvancedTrackingEnabled ? (
                <AdvancedTrackingProvider>
                  <HomeConversionSections trackingEnabled={isAdvancedTrackingEnabled} />
                </AdvancedTrackingProvider>
              ) : (
                <HomeConversionSections trackingEnabled={isAdvancedTrackingEnabled} />
              )}
              
              <Suspense fallback={<SectionFallback />}>
                <Footer />
              </Suspense>
              
              {/* Mobile/Bottom Components inside provider - MobileStickyBar needs AutoOptimizerContext */}
              <Suspense fallback={<NullFallback />}>
                <MobileStickyBar />
              </Suspense>
            </AutoOptimizerProvider>
          </Suspense>
        </ErrorBoundary>
      </DeferredHomeContent>
      
      <DeferredHomeContent>
        {/* Components that don't need AutoOptimizerContext */}
        <Suspense fallback={<NullFallback />}>
          <BackToTop />
          <CookieBanner />
          {isHeatmapEnabled && <HeatmapTracker enabled showOverlay />}
        </Suspense>
      </DeferredHomeContent>
    </main>
  );
};

export default Index;
