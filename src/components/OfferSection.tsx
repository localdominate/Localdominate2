import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import AnimatedPriceCounter from "@/components/AnimatedPriceCounter";
import AddOnsSection from "@/components/AddOnsSection";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout, calculateTotalPrice, type AddOnId } from "@/lib/stripe";
import { useAutoOptimizerContext } from "@/components/AutoOptimizerProvider";
import { CTA_COLOR_VARIANTS, PRICE_DISPLAY_VARIANTS } from "@/lib/autoOptimizerConfig";
import { useABTestConversion } from "@/hooks/useABTestConversion";
import useCtaHoverTracking from "@/hooks/useCtaHoverTracking";
import usePriceHoverTracking from "@/hooks/usePriceHoverTracking";
import { useAdvancedTrackingContext } from "@/components/AdvancedTrackingProvider";
import { convertPrice, getCurrencyPrefix, getCurrencySuffix, formatPrice } from "@/lib/currency";

const OfferSection = () => {
  const { language, t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const { getEffectiveValue } = useAutoOptimizerContext();
  const { trackCtaClick, trackCheckoutStart } = useABTestConversion();
  const { trackClick } = useAdvancedTrackingContext();
  const ctaHoverProps = useCtaHoverTracking("offer_cta");
  const priceHoverProps = usePriceHoverTracking();
  
  // Add-ons state
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnId[]>([]);
  
  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id as AddOnId) 
        ? prev.filter(a => a !== id) 
        : [...prev, id as AddOnId]
    );
  };
  
  // Calculate total price (in EUR base)
  const basePrice = 299;
  const totalPrice = calculateTotalPrice("standard", selectedAddOns);
  
  // Currency-aware prices
  const displayBasePrice = convertPrice(basePrice, language);
  const displayTotalPrice = convertPrice(totalPrice, language);
  const displayAnchorPrice = convertPrice(1500, language);
  const currencyPrefix = getCurrencyPrefix(language);
  const currencySuffix = getCurrencySuffix(language);
  
  // Get optimized values
  const ctaColor = getEffectiveValue('cta_color', 'all_ctas', 'primary');
  const ctaText = getEffectiveValue('cta_text', 'offer_cta', t.offer.ctaButton);
  const priceDisplay = getEffectiveValue('price_display', 'offer', 'standard');
  
  // Get button variant from color
  const buttonVariant = CTA_COLOR_VARIANTS[ctaColor] || 'cta';
  
  // Get price display badge
  const priceDisplayText = PRICE_DISPLAY_VARIANTS[priceDisplay]?.[language] || t.offer.oneTime;
  
  const handleCtaClick = async () => {
    // Track for dataLayer
    trackButtonClick("offer_cta", "offer_section", totalPrice);
    
    // Track click for engagement
    trackClick("offer_cta", true);
    
    // Track for A/B testing
    await trackCtaClick("offer_section", ctaText, totalPrice);
    await trackCheckoutStart(totalPrice);
    
    // Open checkout with add-ons
    openStripeCheckout("standard", "offer_section", ctaText, selectedAddOns);
  };

  // Render price section based on variant
  const renderPriceSection = () => {
    switch (priceDisplay) {
      case 'daily':
        return (
          <div 
            onMouseEnter={priceHoverProps.onMouseEnter}
            onMouseLeave={priceHoverProps.onMouseLeave}
          >
            <p className="text-muted-foreground text-sm mb-2">
              {t.offer.agencyPrice}
            </p>
            <p className="text-3xl text-muted-foreground/50 line-through mb-4">
              <AnimatedPriceCounter from={1500} to={1500} duration={0} />
            </p>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              {priceDisplayText}
            </p>
            <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              &lt;1€
            </p>
            <p className="text-muted-foreground mb-6">
              {language === 'de' ? 'pro Tag für ein Jahr' : 'per day for a year'}
            </p>
          </div>
        );
      case 'savings':
        return (
          <div 
            onMouseEnter={priceHoverProps.onMouseEnter}
            onMouseLeave={priceHoverProps.onMouseLeave}
          >
            <p className="text-muted-foreground text-sm mb-2">
              {t.offer.agencyPrice}
            </p>
            <p className="text-3xl text-muted-foreground/50 line-through mb-4">
              <AnimatedPriceCounter from={1500} to={1500} duration={0} />
            </p>
            <p className="text-sm font-semibold text-success uppercase tracking-widest mb-2">
              {priceDisplayText}
            </p>
            <p className="text-6xl md:text-7xl font-bold text-foreground mb-2">
              <AnimatedPriceCounter from={1500} to={299} duration={2000} />
            </p>
            <p className="text-muted-foreground mb-6">
              {t.offer.oneTime}
            </p>
          </div>
        );
      case 'comparison':
        return (
          <div 
            onMouseEnter={priceHoverProps.onMouseEnter}
            onMouseLeave={priceHoverProps.onMouseLeave}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              {priceDisplayText}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl text-muted-foreground/50 line-through">1.500€+</p>
                <p className="text-xs text-muted-foreground">{language === 'de' ? 'Agentur' : 'Agency'}</p>
              </div>
              <span className="text-2xl">→</span>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-foreground">299€</p>
                <p className="text-xs text-primary font-semibold">Local Dominator</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.offer.oneTime}
            </p>
          </div>
        );
      case 'roi':
        return (
          <div 
            onMouseEnter={priceHoverProps.onMouseEnter}
            onMouseLeave={priceHoverProps.onMouseLeave}
          >
            <p className="text-muted-foreground text-sm mb-2">
              {t.offer.agencyPrice}
            </p>
            <p className="text-3xl text-muted-foreground/50 line-through mb-4">
              <AnimatedPriceCounter from={1500} to={1500} duration={0} />
            </p>
            <p className="text-6xl md:text-7xl font-bold text-foreground mb-2">
              <AnimatedPriceCounter from={1500} to={299} duration={2000} />
            </p>
            <p className="text-sm font-semibold text-success uppercase tracking-widest mb-6">
              {priceDisplayText}
            </p>
          </div>
        );
      default: // 'standard'
        return (
          <div 
            onMouseEnter={priceHoverProps.onMouseEnter}
            onMouseLeave={priceHoverProps.onMouseLeave}
          >
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
          </div>
        );
    }
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
            
            {/* Right: Pricing - Dynamic based on A/B test */}
            <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 rounded-2xl border border-primary/20">
              {renderPriceSection()}
              
              {/* Dynamic total if add-ons selected */}
              {selectedAddOns.length > 0 && (
                <div className="w-full mb-4 p-3 bg-success/10 border border-success/30 rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      {language === 'de' ? 'Basispaket' : 'Base package'}
                    </span>
                    <span className="font-medium">{basePrice}€</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-muted-foreground">
                      {selectedAddOns.length} Add-On{selectedAddOns.length > 1 ? 's' : ''}
                    </span>
                    <span className="font-medium text-success">+{totalPrice - basePrice}€</span>
                  </div>
                  <div className="border-t border-success/30 mt-2 pt-2 flex justify-between items-center">
                    <span className="font-semibold text-foreground">
                      {language === 'de' ? 'Gesamt' : 'Total'}
                    </span>
                    <span className="font-bold text-lg text-primary">{totalPrice}€</span>
                  </div>
                </div>
              )}
              
              <Button 
                variant={buttonVariant} 
                size="cta" 
                className="w-full group cta-pulse" 
                onClick={handleCtaClick}
                onMouseEnter={ctaHoverProps.onMouseEnter}
                onMouseLeave={ctaHoverProps.onMouseLeave}
              >
                {selectedAddOns.length > 0 
                  ? `${language === 'de' ? 'Jetzt kaufen' : 'Buy now'} (${totalPrice}€)`
                  : ctaText
                }
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <TrustBadges />
              
              {/* Countdown Timer */}
              <div className="mt-4 w-full">
                <CountdownTimer />
              </div>
            </div>
          </div>
          
          {/* Add-Ons Section */}
          <div className="mt-10 pt-10 border-t border-border">
            <AddOnsSection 
              selectedAddOns={selectedAddOns} 
              onToggleAddOn={handleToggleAddOn}
              showHeader={true}
            />
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
