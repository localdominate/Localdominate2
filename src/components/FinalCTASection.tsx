import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";

const FinalCTASection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const handleCtaClick = () => {
    trackButtonClick("final_cta", "final_cta_section", 299);
    openStripeCheckout("standard", "final_cta_section", t.finalCta.ctaFull);
  };

  return (
    <section className="bg-pain section-padding px-4">
      <div ref={ref} className="container max-w-4xl text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-pain-foreground mb-6 reveal ${isVisible ? 'visible' : ''}`}>
          {t.finalCta.headline} <span className="text-gradient">{t.finalCta.headlineIf}</span>{t.finalCta.headlineMid} <span className="text-gradient">{t.finalCta.headlineWhen}</span> {t.finalCta.headlineEnd}
        </h2>
        
        <p className={`text-xl text-pain-foreground/80 max-w-2xl mx-auto mb-10 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t.finalCta.subheadline}
        </p>
        
        <div className={`flex justify-center reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto max-w-md cta-pulse" onClick={handleCtaClick}>
            <span className="hidden sm:inline">{t.finalCta.ctaFull}</span>
            <span className="sm:hidden">{t.finalCta.ctaShort}</span>
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className={`reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <TrustBadges />
        </div>
        
        <p className={`text-pain-foreground/60 text-sm mt-4 reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          {t.finalCta.footer}
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
