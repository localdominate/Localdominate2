import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const MobileStickyBar = () => {
  const { language, t } = useLanguage();
  const currentMonth = new Date().toLocaleString(language === "de" ? "de-DE" : "en-US", { month: "long" });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass bg-card/95 border-t border-border px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-foreground text-sm font-semibold">
          {t.mobileBar.spotsLeft} <span className="text-primary">{t.mobileBar.spotsCount}</span> {t.mobileBar.spotsFor} {currentMonth}
        </p>
        <Button 
          variant="cta" 
          size="sm" 
          className="shrink-0"
        >
          {t.mobileBar.cta}
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
