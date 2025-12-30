import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import { trackButtonClick } from "@/lib/dataLayer";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const handleCtaClick = () => {
    trackButtonClick("hero_cta", "hero_section", 299);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-16 md:py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1 animate-fade-in-up">
            {/* Eyebrow */}
            <p className="text-sm md:text-base font-semibold tracking-widest text-primary uppercase mb-6">
              {t.hero.eyebrow}
            </p>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {t.hero.headline}{" "}
              <span className="text-gradient">{t.hero.headlineHighlight}</span> {t.hero.headlineEnd}
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {t.hero.subheadline} <span className="font-semibold text-foreground">{t.hero.invisible}</span>
              {t.hero.subheadlineMid} <span className="font-semibold text-foreground">{t.hero.stopIt}</span>
              {" "}{t.hero.subheadlineEnd}
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-md mx-auto md:mx-0">
              <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto" onClick={handleCtaClick}>
                <span className="hidden sm:inline">{t.hero.ctaFull}</span>
                <span className="sm:hidden">{t.hero.ctaShort}</span>
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Trust Bullets */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  {t.hero.trustBullets.fixedPrice}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  {t.hero.trustBullets.noSubscription}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  {t.hero.trustBullets.provenResults}
                </span>
              </div>
              
              {/* Trust text */}
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                <span className="inline-block w-3 h-3 bg-success rounded-full"></span>
                {t.hero.guarantee}
              </p>
              
              {/* Trust Badges */}
              <TrustBadges />
            </div>
            
            {/* Urgency element */}
            <div className="mt-8 inline-block bg-primary/5 border border-primary/20 rounded-xl px-6 py-3">
              <p className="text-sm font-semibold text-foreground">
                {t.hero.urgency} <span className="text-primary">{t.hero.spotsLeft}</span> {t.hero.urgencyEnd}
              </p>
            </div>
          </div>
          
          {/* Phone Mockup Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img 
              src={heroPhoneMockup} 
              alt="Google Maps Top 3 Ranking Vorher-Nachher Vergleich - Local SEO Optimierung für lokale Unternehmen" 
              className="w-64 md:w-80 lg:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
