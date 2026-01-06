import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    // Enable all tracking
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "cookie_consent",
        consent_type: "all"
      });
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    // Only essential cookies
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "cookie_consent",
        consent_type: "essential"
      });
    }
    setIsVisible(false);
  };

  const content = {
    de: {
      title: "Cookie-Einstellungen",
      text: "Wir nutzen Cookies, um dein Erlebnis zu verbessern und unsere Dienste zu optimieren. Mit deiner Zustimmung helfen uns auch Analyse-Cookies dabei, die Seite noch besser zu machen.",
      acceptAll: "Alle akzeptieren",
      essentialOnly: "Nur notwendige",
      privacyLink: "Datenschutzerklärung"
    },
    en: {
      title: "Cookie Settings",
      text: "We use cookies to improve your experience and optimize our services. With your consent, analytics cookies also help us make the site even better.",
      acceptAll: "Accept All",
      essentialOnly: "Essential Only",
      privacyLink: "Privacy Policy"
    }
  };

  const t = content[language];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-[60] p-3 md:p-6 animate-fade-in">
      <div className="container max-w-4xl mx-auto">
        <div className="glass bg-card/98 rounded-2xl shadow-2xl border border-border p-6">
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
                <a 
                  href="https://www.e-recht24.de/muster-datenschutzerklaerung.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t.privacyLink}
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto"
              >
                {t.essentialOnly}
              </Button>
              <Button 
                variant="cta" 
                size="sm"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto"
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

export default CookieBanner;
