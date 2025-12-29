import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import AnimatedPriceCounter from "@/components/AnimatedPriceCounter";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { trackButtonClick } from "@/lib/dataLayer";

const OfferSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  
  const handleCtaClick = () => {
    trackButtonClick("offer_cta", "offer_section", 299);
  };

  return (
    <section className="bg-background-alt section-padding px-4">
      <div ref={ref} className="container max-w-4xl">
        {/* Section header */}
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.offer.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.offer.headline}
          </h2>
        </div>
        
        {/* Offer box */}
        <div className={`card-premium p-6 md:p-10 lg:p-12 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Benefits */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t.offer.benefitsTitle}
              </h3>
              <ul className="space-y-4">
                {t.offer.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right: Pricing */}
            <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 rounded-2xl border border-primary/20">
              <p className="text-muted-foreground text-sm mb-2">
                {t.offer.agencyPrice}
              </p>
              <p className="text-3xl text-muted-foreground/50 line-through mb-4">
                <AnimatedPriceCounter from={1500} to={1500} duration={0} />
              </p>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                {t.offer.yourPrice}
              </p>
              <p className="text-6xl md:text-7xl font-bold text-foreground mb-2">
                <AnimatedPriceCounter from={1500} to={299} duration={2000} />
              </p>
              <p className="text-muted-foreground mb-6">
                {t.offer.oneTime}
              </p>
              
              <Button variant="cta" size="cta" className="w-full group cta-pulse" onClick={handleCtaClick}>
                {t.offer.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <TrustBadges />
              
              {/* Countdown Timer */}
              <div className="mt-4 w-full">
                <CountdownTimer />
              </div>
            </div>
          </div>
          
          {/* Bonus strip */}
          <div className="mt-10 bg-highlight/10 border border-highlight/30 p-4 rounded-xl text-center">
            <p className="font-semibold text-foreground">
              {t.offer.bonus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
