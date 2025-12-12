import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-pain py-20 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pain-foreground mb-6">
          {t.finalCta.headline} <span className="text-primary">{t.finalCta.headlineIf}</span>{t.finalCta.headlineMid} <span className="text-primary">{t.finalCta.headlineWhen}</span> {t.finalCta.headlineEnd}
        </h2>
        
        <p className="text-xl text-pain-foreground/80 max-w-2xl mx-auto mb-10">
          {t.finalCta.subheadline}
        </p>
        
        <div className="flex justify-center">
          <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto max-w-md">
            <span className="hidden sm:inline">{t.finalCta.ctaFull}</span>
            <span className="sm:hidden">{t.finalCta.ctaShort}</span>
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <TrustBadges />
        
        <p className="text-pain-foreground/60 text-sm mt-4">
          {t.finalCta.footer}
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
