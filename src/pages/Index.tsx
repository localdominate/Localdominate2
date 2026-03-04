import { lazy, Suspense, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { initDataLayer, trackPageView } from "@/lib/dataLayer";

// Critical components loaded immediately
import AnnouncementBar from "@/components/AnnouncementBar";
import LanguageSwitch from "@/components/LanguageSwitch";

// Lazy load non-critical above-the-fold components
const RankingComparison = lazy(() => import("@/components/RankingComparison"));
const PainSection = lazy(() => import("@/components/PainSection"));

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
  useEffect(() => {
    initDataLayer();
    trackPageView("/", "Local Dominator - Home");
  }, []);

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Critical Above-the-Fold Content - No Suspense wrapping */}
      <AnnouncementBar />
      <LanguageSwitch />
      <HeroSection />
      
      {/* Initialize tracking after critical content */}
      <TrackingInitializer />
      
      {/* Lazy-loaded Global UI Components - Deferred */}
      <Suspense fallback={<NullFallback />}>
        <ScrollProgress />
        <StickyHeader />
        {/* <ExitIntentPopup /> */}
        <SocialProofToast />
      </Suspense>
      
      {/* Below-the-fold content - Lazy loaded with providers */}
      <Suspense fallback={<SectionFallback />}>
        <AutoOptimizerProvider>
          <AdvancedTrackingProvider>
            <Suspense fallback={<SectionFallback />}>
              <RankingComparison />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="pain">
                <PainSection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <ComparisonTable />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="solution">
                <SolutionSection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <ROICalculator />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="testimonials">
                <TestimonialsSection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <ValueStackSection />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="offer">
                <OfferSection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <GuaranteeSection />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <ExpertSection />
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="faq">
                <FAQSection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <TrackedSection sectionName="cta">
                <FinalCTASection />
              </TrackedSection>
            </Suspense>
            
            <Suspense fallback={<SectionFallback />}>
              <Footer />
            </Suspense>
            
            {/* Mobile/Bottom Components inside provider - MobileStickyBar needs AutoOptimizerContext */}
            <Suspense fallback={<NullFallback />}>
              <MobileStickyBar />
            </Suspense>
          </AdvancedTrackingProvider>
        </AutoOptimizerProvider>
      </Suspense>
      
      {/* Components that don't need AutoOptimizerContext */}
      <Suspense fallback={<NullFallback />}>
        <BackToTop />
        <CookieBanner />
        <HeatmapTracker enabled={true} />
      </Suspense>
    </main>
  );
};

export default Index;
