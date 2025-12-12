import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ComparisonTable from "@/components/ComparisonTable";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import LanguageSwitch from "@/components/LanguageSwitch";

const Index = () => {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <AnnouncementBar />
      <LanguageSwitch />
      <HeroSection />
      <PainSection />
      <ComparisonTable />
      <SolutionSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <MobileStickyBar />
    </main>
  );
};

export default Index;
