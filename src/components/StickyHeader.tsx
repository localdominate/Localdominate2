import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const halfwayPoint = documentHeight * 0.5;
      
      // Show between 400px and 50% of page
      setIsVisible(scrollY > 400 && scrollY < halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackButtonClick("sticky_header_cta", "sticky_header", 299);
    openStripeCheckout("standard", "sticky_header", t.cta);
  };

  const content = {
    de: {
      brand: "Local Dominator",
      cta: "Jetzt starten"
    },
    en: {
      brand: "Local Dominator",
      cta: "Get Started"
    }
  };

  const t = content[language];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-background border-b border-border shadow-lg">
        <div className="container max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground text-lg hidden sm:block">
                {t.brand}
              </span>
            </div>

            {/* CTA Button */}
            <Button 
              variant="cta" 
              size="sm" 
              className="group"
              onClick={handleClick}
            >
              {t.cta}
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
