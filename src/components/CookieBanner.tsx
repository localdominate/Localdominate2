import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: any[];
    loadGA4?: () => void;
  }
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadGA4 = () => {
    // Trigger GA4 loading via the global function defined in index.html
    if (typeof window !== "undefined" && window.loadGA4) {
      window.loadGA4();
    } else if (typeof window !== "undefined") {
      // Fallback: manually trigger if the function exists
      const event = new StorageEvent('storage', {
        key: 'cookieConsent',
        newValue: 'all'
      });
      window.dispatchEvent(event);
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    
    // Load GA4
    loadGA4();
    
    // Push consent event to dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent",
        consent_type: "all"
      });
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    
    // Push consent event to dataLayer (no GA4 loading)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent",
        consent_type: "essential"
      });
    }
    setIsVisible(false);
  };

  const content = {
    de: {
      title: "Cookie-Einstellungen",
      text: "Wir nutzen Cookies, um dein Erlebnis zu verbessern. Mit deiner Zustimmung verwenden wir auch Google Analytics, um die Seite zu optimieren.",
      acceptAll: "Alle akzeptieren",
      essentialOnly: "Nur notwendige",
      privacyLink: "Datenschutz",
      moreInfo: "Mehr erfahren"
    },
    en: {
      title: "Cookie Settings",
      text: "We use cookies to improve your experience. With your consent, we also use Google Analytics to optimize the site.",
      acceptAll: "Accept All",
      essentialOnly: "Essential Only",
      privacyLink: "Privacy Policy",
      moreInfo: "Learn more"
    }
  };

  const t = content[language];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-[60] p-3 md:p-6 animate-fade-in">
      <div className="container max-w-4xl mx-auto">
        <div className="glass bg-card/98 rounded-2xl shadow-2xl border border-border p-5 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            {/* Icon */}
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 hidden md:flex">
              <Cookie className="w-6 h-6 text-primary" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary md:hidden" />
                {t.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t.text}{" "}
                <Link 
                  to="/datenschutz"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {t.privacyLink}
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto text-sm"
              >
                {t.essentialOnly}
              </Button>
              <Button 
                variant="cta" 
                size="sm"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto text-sm"
              >
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Small button to re-open cookie settings (for footer/settings)
export const CookieSettingsButton = () => {
  const { language } = useLanguage();
  
  const handleClick = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };

  return (
    <button 
      onClick={handleClick}
      className="text-pain-foreground/60 hover:text-primary transition-colors text-sm flex items-center gap-1"
    >
      <Settings className="w-3 h-3" />
      {language === "de" ? "Cookie-Einstellungen" : "Cookie Settings"}
    </button>
  );
};

export default CookieBanner;
