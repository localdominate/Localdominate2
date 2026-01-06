import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";

const MobileStickyBar = () => {
  const { language, t } = useLanguage();
  const currentMonth = new Date().toLocaleString(language === "de" ? "de-DE" : "en-US", { month: "long" });

  const handleClick = () => {
    trackButtonClick("mobile_sticky_cta", "mobile_sticky_bar", 299);
    openStripeCheckout("standard");
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass bg-card/95 border-t border-border px-4 py-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-foreground text-sm font-semibold leading-tight">
          {t.mobileBar.spotsLeft} <span className="text-primary">{t.mobileBar.spotsCount}</span> {t.mobileBar.spotsFor} {currentMonth}
        </p>
        <Button 
          variant="cta" 
          size="sm" 
          className="shrink-0 group"
          onClick={handleClick}
        >
          {t.mobileBar.cta}
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
