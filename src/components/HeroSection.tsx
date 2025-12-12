import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Eyebrow */}
            <p className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-6 animate-pulse">
              {t.hero.eyebrow}
            </p>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] mb-6">
              {t.hero.headline}{" "}
              <span className="text-primary">{t.hero.headlineHighlight}</span> {t.hero.headlineEnd}
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {t.hero.subheadline} <span className="font-bold text-foreground">{t.hero.invisible}</span>
              {t.hero.subheadlineMid} <span className="font-bold text-foreground">{t.hero.stopIt}</span>
              {" "}{t.hero.subheadlineEnd}
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center md:items-start gap-2 w-full max-w-md mx-auto md:mx-0">
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
            <div className="mt-8 inline-block bg-highlight/20 border-2 border-highlight px-6 py-3">
              <p className="text-sm font-bold text-foreground">
                {t.hero.urgency} <span className="text-primary">{t.hero.spotsLeft}</span> {t.hero.urgencyEnd}
              </p>
            </div>
          </div>
          
          {/* Phone Mockup Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={heroPhoneMockup} 
              alt="Google Maps Top 3 Ranking" 
              className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
