import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import { CTA_COLOR_VARIANTS, HEADLINE_VARIANTS, URGENCY_VARIANTS } from "@/lib/autoOptimizerConfig";
import CountdownTimer from "@/components/CountdownTimer";
import TrustBadges from "@/components/TrustBadges";

// Light version without heavy context dependencies for faster FCP
const HeroSection = () => {
  const { language, t } = useLanguage();
  
  // Use static defaults for initial render - no DB calls needed
  // These can be optimized later by the AutoOptimizer after hydration
  const ctaColor = 'primary';
  const ctaText = t.hero.ctaFull;
  const headlineStyle = 'emotional';
  // Cast to string to allow comparisons in renderUrgencyElement
  const urgencyType = 'spots' as string;
  
  // Get button variant from color
  const buttonVariant = CTA_COLOR_VARIANTS[ctaColor] || 'cta';
  
  // Get headline content based on style
  const headlineContent = HEADLINE_VARIANTS[headlineStyle]?.[language] || t.hero.headline;
  
  // Get urgency content
  const urgencyContent = URGENCY_VARIANTS[urgencyType]?.[language] || '';
  
  const handleCtaClick = async () => {
    // Track for dataLayer
    trackButtonClick("hero_cta", "hero_section", 299);
    
    // Open checkout
    openStripeCheckout("standard", "hero_section", ctaText);
  };

  // Render urgency element based on type
  const renderUrgencyElement = () => {
    if (urgencyType === 'none' || !urgencyContent) return null;
    
    if (urgencyType === 'countdown') {
      return (
        <div className="mt-6 md:mt-8 inline-block bg-primary/5 border border-primary/20 rounded-xl px-4 md:px-6 py-2 md:py-3">
          <p className="text-xs md:text-sm font-semibold text-foreground mb-2">
            {urgencyContent}
          </p>
          <CountdownTimer />
        </div>
      );
    }
    
    return (
      <div className="mt-6 md:mt-8 inline-block bg-primary/5 border border-primary/20 rounded-xl px-4 md:px-6 py-2 md:py-3">
        <p className="text-xs md:text-sm font-semibold text-foreground">
          {urgencyContent}
        </p>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-12 md:py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1 animate-fade-in-up">
            {/* Eyebrow */}
            <p className="text-xs md:text-base font-semibold tracking-widest text-primary uppercase mb-4 md:mb-6">
              {t.hero.eyebrow}
            </p>
            
            {/* Main Headline - Static for faster FCP */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-4 md:mb-6">
              {headlineStyle === 'emotional' ? (
                <>
                  {t.hero.headline}{" "}
                  <span className="text-gradient">{t.hero.headlineHighlight}</span> {t.hero.headlineEnd}
                </>
              ) : (
                headlineContent
              )}
            </h1>
            
            {/* Subheadline */}
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
              {t.hero.subheadline} <span className="font-semibold text-foreground">{t.hero.invisible}</span>
              {t.hero.subheadlineMid} <span className="font-semibold text-foreground">{t.hero.stopIt}</span>
              {" "}{t.hero.subheadlineEnd}
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-md mx-auto md:mx-0">
              <Button 
                variant={buttonVariant} 
                size="ctaLarge" 
                className="group w-full sm:w-auto" 
                onClick={handleCtaClick}
              >
                <span className="hidden sm:inline">{ctaText}</span>
                <span className="sm:hidden">{t.hero.ctaShort}</span>
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Trust Bullets - vertical on mobile */}
              <div className="flex flex-col items-center md:items-start gap-2 md:gap-0 md:flex-row md:flex-wrap md:justify-start sm:gap-5 mt-3 text-xs md:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  {t.hero.trustBullets.fixedPrice}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  {t.hero.trustBullets.noSubscription}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  {t.hero.trustBullets.provenResults}
                </span>
              </div>
              
              {/* Trust text */}
              <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2 mt-2">
                <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-success rounded-full flex-shrink-0"></span>
                {t.hero.guarantee}
              </p>
              
              {/* Trust Badges */}
              <TrustBadges />
            </div>
            
            {/* Urgency element */}
            {renderUrgencyElement()}
          </div>
          
          {/* Phone Mockup Image - LCP Element with explicit dimensions to prevent CLS */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img 
              src={heroPhoneMockup} 
              alt="Google Maps Top 3 Ranking Vorher-Nachher Vergleich - Local SEO Optimierung für lokale Unternehmen" 
              className="w-48 sm:w-56 md:w-80 lg:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              width={384}
              height={768}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
