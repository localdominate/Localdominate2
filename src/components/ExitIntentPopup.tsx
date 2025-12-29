import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackPopupInteraction } from "@/lib/dataLayer";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const { language } = useLanguage();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exitIntentShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
        trackPopupInteraction("exit_intent_33_discount", "view");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  // Countdown timer logic
  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          trackPopupInteraction("exit_intent_33_discount", "close");
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "exit_intent_expired",
              discount: "33%"
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClose = () => {
    setIsVisible(false);
    trackPopupInteraction("exit_intent_33_discount", "close");
  };

  const handleClaim = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "exit_intent_claim",
        discount: "33%",
        time_remaining: timeLeft
      });
    }
    trackPopupInteraction("exit_intent_33_discount", "cta_click");
    
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    de: {
      headline: "STOPP! Einmaliges Angebot",
      subheadline: "Du sparst 100€ – aber nur, wenn du JETZT handelst.",
      urgencyText: "Dein Timer läuft. Diese Chance kommt nicht wieder.",
      discount: "33% RABATT",
      originalPrice: "299€",
      newPrice: "199€",
      savings: "Du sparst 100€",
      cta: "JA, ich will 33% sparen!",
      noThanks: "Nein danke, ich zahle lieber 100€ mehr"
    },
    en: {
      headline: "STOP! One-time Offer",
      subheadline: "You save $100 – but only if you act NOW.",
      urgencyText: "Your timer is running. This chance won't come again.",
      discount: "33% OFF",
      originalPrice: "$299",
      newPrice: "$199",
      savings: "You save $100",
      cta: "YES, I want to save 33%!",
      noThanks: "No thanks, I prefer paying $100 more"
    }
  };

  const t = content[language];
  const isUrgent = timeLeft <= 60;
  const isCritical = timeLeft <= 30;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-pain/90 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border-2 border-primary">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Timer - Prominent at top */}
        <div className={`flex items-center justify-center gap-2 mb-4 py-3 px-4 rounded-lg ${
          isCritical ? "bg-destructive/20 text-destructive" : 
          isUrgent ? "bg-orange-500/20 text-orange-500" : 
          "bg-primary/10 text-primary"
        } ${isUrgent ? "animate-pulse" : ""}`}>
          <Clock className="w-5 h-5" />
          <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
        </div>

        {/* Gift icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-success/20 rounded-full flex items-center justify-center">
            <Gift className="w-7 h-7 text-success" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {t.headline}
          </h3>
          <p className="text-lg font-semibold text-primary mb-1">
            {t.subheadline}
          </p>
          <p className="text-sm text-muted-foreground mb-5 italic">
            {t.urgencyText}
          </p>

          {/* Discount badge */}
          <div className="inline-block bg-success/15 border-2 border-success rounded-xl px-6 py-4 mb-5">
            <p className="text-success font-bold text-xl mb-1">{t.discount}</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-muted-foreground line-through text-lg">{t.originalPrice}</span>
              <span className="text-3xl font-bold text-foreground">{t.newPrice}</span>
            </div>
            <p className="text-success font-medium text-sm mt-1">{t.savings}</p>
          </div>

          {/* CTA */}
          <Button 
            variant="cta" 
            size="cta" 
            className="w-full group mb-4 text-lg"
            onClick={handleClaim}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Dismiss link */}
          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
          >
            {t.noThanks}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
