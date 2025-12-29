import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackExitIntentABTest } from "@/lib/dataLayer";
import { useExitIntentABTest } from "@/hooks/useExitIntentABTest";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const { language } = useLanguage();
  const { variant, isLoaded } = useExitIntentABTest();

  useEffect(() => {
    if (!isLoaded) return;
    
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
        trackExitIntentABTest(variant, "view");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown, isLoaded, variant]);

  // Countdown timer logic
  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          trackExitIntentABTest(variant, "expired");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible, timeLeft, variant]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClose = () => {
    setIsVisible(false);
    trackExitIntentABTest(variant, "close");
  };

  const handleClaim = () => {
    trackExitIntentABTest(variant, "click");
    
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // Variant A: Discount Content
  const discountContent = {
    de: {
      headline: "STOPP! Einmaliges Angebot",
      subheadline: "Du sparst 100€ – aber nur, wenn du JETZT handelst.",
      urgencyText: "Dein Timer läuft. Diese Chance kommt nicht wieder.",
      badge: "33% RABATT",
      originalPrice: "299€",
      newPrice: "199€",
      valueText: "Du sparst 100€",
      cta: "JA, ich will 33% sparen!",
      noThanks: "Nein danke, ich zahle lieber 100€ mehr"
    },
    en: {
      headline: "STOP! One-time Offer",
      subheadline: "You save $100 – but only if you act NOW.",
      urgencyText: "Your timer is running. This chance won't come again.",
      badge: "33% OFF",
      originalPrice: "$299",
      newPrice: "$199",
      valueText: "You save $100",
      cta: "YES, I want to save 33%!",
      noThanks: "No thanks, I prefer paying $100 more"
    }
  };

  // Variant B: Bonus Content
  const bonusContent = {
    de: {
      headline: "STOPP! Exklusiver Bonus",
      subheadline: "Sichere dir jetzt ein kostenloses Strategie-Gespräch.",
      urgencyText: "Nur für die nächsten 3 Minuten verfügbar!",
      badge: "GRATIS BONUS",
      bonusName: "1:1 Strategie-Session",
      bonusValue: "Wert: 149€",
      valueText: "Komplett kostenlos für dich",
      cta: "JA, ich will den Gratis-Bonus!",
      noThanks: "Nein danke, ich verzichte auf 149€ Bonus"
    },
    en: {
      headline: "STOP! Exclusive Bonus",
      subheadline: "Get a free strategy call included with your purchase.",
      urgencyText: "Only available for the next 3 minutes!",
      badge: "FREE BONUS",
      bonusName: "1:1 Strategy Session",
      bonusValue: "Value: $149",
      valueText: "Completely free for you",
      cta: "YES, I want the free bonus!",
      noThanks: "No thanks, I'll pass on the $149 bonus"
    }
  };

  const isUrgent = timeLeft <= 60;
  const isCritical = timeLeft <= 30;

  // Render Variant A: Discount
  if (variant === "discount") {
    const t = discountContent[language];
    
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-pain/90 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        />
        
        <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border-2 border-success">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className={`flex items-center justify-center gap-2 mb-4 py-3 px-4 rounded-lg ${
            isCritical ? "bg-destructive/20 text-destructive" : 
            isUrgent ? "bg-orange-500/20 text-orange-500" : 
            "bg-success/10 text-success"
          } ${isUrgent ? "animate-pulse" : ""}`}>
            <Clock className="w-5 h-5" />
            <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-success/20 rounded-full flex items-center justify-center">
              <Gift className="w-7 h-7 text-success" />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t.headline}
            </h3>
            <p className="text-lg font-semibold text-success mb-1">
              {t.subheadline}
            </p>
            <p className="text-sm text-muted-foreground mb-5 italic">
              {t.urgencyText}
            </p>

            <div className="inline-block bg-success/15 border-2 border-success rounded-xl px-6 py-4 mb-5">
              <p className="text-success font-bold text-xl mb-1">{t.badge}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-muted-foreground line-through text-lg">{t.originalPrice}</span>
                <span className="text-3xl font-bold text-foreground">{t.newPrice}</span>
              </div>
              <p className="text-success font-medium text-sm mt-1">{t.valueText}</p>
            </div>

            <Button 
              variant="cta" 
              size="cta" 
              className="w-full group mb-4 text-lg bg-success hover:bg-success/90"
              onClick={handleClaim}
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <button
              onClick={handleClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.noThanks}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Variant B: Bonus
  const t = bonusContent[language];
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-pain/90 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border-2 border-amber-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`flex items-center justify-center gap-2 mb-4 py-3 px-4 rounded-lg ${
          isCritical ? "bg-destructive/20 text-destructive" : 
          isUrgent ? "bg-orange-500/20 text-orange-500" : 
          "bg-amber-500/10 text-amber-500"
        } ${isUrgent ? "animate-pulse" : ""}`}>
          <Clock className="w-5 h-5" />
          <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
            <Star className="w-7 h-7 text-amber-500" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {t.headline}
          </h3>
          <p className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-1">
            {t.subheadline}
          </p>
          <p className="text-sm text-muted-foreground mb-5 italic">
            {t.urgencyText}
          </p>

          <div className="inline-block bg-amber-500/20 border-2 border-amber-600 rounded-xl px-6 py-4 mb-5">
            <p className="text-amber-700 dark:text-amber-300 font-bold text-xl mb-1">{t.badge}</p>
            <p className="text-2xl font-bold text-foreground mb-1">{t.bonusName}</p>
            <p className="text-amber-700 dark:text-amber-400 font-semibold">{t.bonusValue}</p>
            <p className="text-amber-800 dark:text-amber-300 font-medium text-sm mt-1">{t.valueText}</p>
          </div>

          <Button 
            variant="cta" 
            size="cta" 
            className="w-full group mb-4 text-lg bg-amber-500 hover:bg-amber-600 text-white"
            onClick={handleClaim}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.noThanks}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
