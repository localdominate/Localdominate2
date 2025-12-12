import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import { useLanguage } from "@/i18n/LanguageContext";

const OfferSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-muted py-20 px-4">
      <div className="container max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            {t.offer.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            {t.offer.headline}
          </h2>
        </div>
        
        {/* Offer box */}
        <div className="bg-background shadow-offer p-6 md:p-8 lg:p-12 border-4 border-foreground">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Benefits */}
            <div>
              <h3 className="text-xl font-black text-foreground mb-6 uppercase">
                {t.offer.benefitsTitle}
              </h3>
              <ul className="space-y-4">
                {t.offer.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-success-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right: Pricing */}
            <div className="flex flex-col justify-center items-center text-center bg-card p-6 md:p-8 border-2 border-dashed border-border">
              <p className="text-muted-foreground text-sm mb-2">
                {t.offer.agencyPrice}
              </p>
              <p className="text-3xl text-muted-foreground line-through mb-4">
                1.500€
              </p>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                {t.offer.yourPrice}
              </p>
              <p className="text-6xl md:text-7xl font-black text-foreground mb-2">
                299€
              </p>
              <p className="text-muted-foreground mb-6">
                {t.offer.oneTime}
              </p>
              
              <Button variant="cta" size="cta" className="w-full group">
                {t.offer.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <TrustBadges />
            </div>
          </div>
          
          {/* Bonus strip */}
          <div className="mt-10 bg-highlight/20 border-2 border-highlight p-4 text-center">
            <p className="font-bold text-foreground">
              {t.offer.bonus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
