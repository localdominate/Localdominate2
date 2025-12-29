import { useState, useEffect } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem("exitIntentShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves at the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Add delay before enabling exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaim = () => {
    // Track event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "exit_intent_claim",
        discount: "10%"
      });
    }
    // Scroll to offer section
    const offerSection = document.querySelector('[class*="OfferSection"]') || 
                         document.querySelector('section:has([class*="299"])');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    de: {
      headline: "Warte! Bevor du gehst...",
      subheadline: "Sichere dir jetzt 10% Rabatt auf dein Local Dominator Paket",
      discount: "10% RABATT",
      originalPrice: "299€",
      newPrice: "269€",
      cta: "Rabatt sichern",
      noThanks: "Nein danke, ich zahle lieber den vollen Preis"
    },
    en: {
      headline: "Wait! Before you go...",
      subheadline: "Get 10% off your Local Dominator package right now",
      discount: "10% OFF",
      originalPrice: "$299",
      newPrice: "$269",
      cta: "Claim Discount",
      noThanks: "No thanks, I prefer paying full price"
    }
  };

  const t = content[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-pain/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border border-border">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Gift icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
            <Gift className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {t.headline}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t.subheadline}
          </p>

          {/* Discount badge */}
          <div className="inline-block bg-success/10 border border-success/30 rounded-xl px-6 py-3 mb-6">
            <p className="text-success font-bold text-lg">{t.discount}</p>
            <div className="flex items-center justify-center gap-3 mt-1">
              <span className="text-muted-foreground line-through">{t.originalPrice}</span>
              <span className="text-2xl font-bold text-foreground">{t.newPrice}</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="cta" 
            size="cta" 
            className="w-full group mb-4"
            onClick={handleClaim}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Dismiss link */}
          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
          >
            {t.noThanks}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
