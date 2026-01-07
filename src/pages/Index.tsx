import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import RankingComparison from "@/components/RankingComparison";
import PainSection from "@/components/PainSection";

import ComparisonTable from "@/components/ComparisonTable";
import SolutionSection from "@/components/SolutionSection";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueStackSection from "@/components/ValueStackSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ExpertSection from "@/components/ExpertSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import LanguageSwitch from "@/components/LanguageSwitch";
import StickyHeader from "@/components/StickyHeader";
import ScrollProgress from "@/components/ScrollProgress";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProofToast from "@/components/SocialProofToast";
import CookieBanner from "@/components/CookieBanner";
import HeatmapTracker from "@/components/HeatmapTracker";
import useScrollDepthTracking from "@/hooks/useScrollDepthTracking";
import useAnalyticsSession from "@/hooks/useAnalyticsSession";
import { useEffect } from "react";
import { initDataLayer, trackPageView } from "@/lib/dataLayer";

const Index = () => {
  // Initialize tracking
  useScrollDepthTracking();
  useAnalyticsSession();
  
  useEffect(() => {
    initDataLayer();
    trackPageView("/", "Local Dominator - Home");
  }, []);

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Global UI Components */}
      <ScrollProgress />
      <StickyHeader />
      <ExitIntentPopup />
      <SocialProofToast />
      
      {/* Page Content */}
      <AnnouncementBar />
      <LanguageSwitch />
      <HeroSection />
      <RankingComparison />
      <PainSection />
      <ComparisonTable />
      <SolutionSection />
      <ROICalculator />
      <TestimonialsSection />
      <ValueStackSection />
      <OfferSection />
      <GuaranteeSection />
      <ExpertSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      
      {/* Mobile/Bottom Components */}
      <MobileStickyBar />
      <CookieBanner />
      
      {/* Analytics Tracking */}
      <HeatmapTracker enabled={true} />
    </main>
  );
};

export default Index;
