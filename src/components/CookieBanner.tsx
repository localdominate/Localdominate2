import { forwardRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const updateConsent = (settings: Record<string, string>) => {
    const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
    analyticsWindow.gtag?.('consent', 'update', settings);
  };

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

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    
    // Update Google Consent Mode V2
    if (typeof window !== "undefined") {
      updateConsent({
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted'
      });
    }
    
    // Push consent event to dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        consent_analytics: true,
        consent_marketing: true
      });
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    
    // Keep consent denied for tracking, only allow functionality
    if (typeof window !== "undefined") {
      updateConsent({
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied'
      });
    }
    
    // Push consent event to dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        consent_analytics: false,
        consent_marketing: false
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
    },
    ar: {
      title: "إعدادات ملفات تعريف الارتباط",
      text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بموافقتك، نستخدم أيضًا Google Analytics لتحسين الموقع.",
      acceptAll: "قبول الكل",
      essentialOnly: "الضرورية فقط",
      privacyLink: "سياسة الخصوصية",
      moreInfo: "اعرف المزيد"
    }
  };

  const t = content[language] || content.de;

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
export const CookieSettingsButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const { language } = useLanguage();
  
  const handleClick = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };

  return (
    <button 
      ref={ref}
      onClick={handleClick}
      aria-label={language === "ar" ? "إعدادات ملفات تعريف الارتباط" : language === "de" ? "Cookie-Einstellungen" : "Cookie settings"}
      className="text-pain-foreground/60 hover:text-primary transition-colors text-sm flex items-center gap-1"
    >
      <Settings className="w-3 h-3" />
      {language === "ar" ? "إعدادات ملفات تعريف الارتباط" : language === "de" ? "Cookie-Einstellungen" : "Cookie Settings"}
    </button>
  );
});

CookieSettingsButton.displayName = "CookieSettingsButton";

export default CookieBanner;
