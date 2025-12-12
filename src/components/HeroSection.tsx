import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
      <div className="container max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-6 animate-pulse">
          {t.hero.eyebrow}
        </p>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
          {t.hero.headline}{" "}
          <span className="text-primary">{t.hero.headlineHighlight}</span> {t.hero.headlineEnd}
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.hero.subheadline} <span className="font-bold text-foreground">{t.hero.invisible}</span>
          {t.hero.subheadlineMid} <span className="font-bold text-foreground">{t.hero.stopIt}</span>
          {" "}{t.hero.subheadlineEnd}
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
          <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto">
            <span className="hidden sm:inline">{t.hero.ctaFull}</span>
            <span className="sm:hidden">{t.hero.ctaShort}</span>
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Trust text */}
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
            <span className="inline-block w-4 h-4 bg-success rounded-full"></span>
            {t.hero.guarantee}
          </p>
          
          {/* Trust Badges */}
          <TrustBadges />
        </div>
        
        {/* Urgency element */}
        <div className="mt-12 inline-block bg-highlight/20 border-2 border-highlight px-6 py-3">
          <p className="text-sm font-bold text-foreground">
            {t.hero.urgency} <span className="text-primary">{t.hero.spotsLeft}</span> {t.hero.urgencyEnd}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
