import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Track event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "sticky_header_cta_click"
      });
    }
    // Scroll to offer section
    const offerSection = document.getElementById("offer") || 
                         document.querySelector('section:nth-of-type(7)');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
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
      <div className="glass bg-background/95 border-b border-border shadow-lg">
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
