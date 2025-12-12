import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const MobileStickyBar = () => {
  const { language, t } = useLanguage();
  const currentMonth = new Date().toLocaleString(language === "de" ? "de-DE" : "en-US", { month: "long" });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-foreground border-t-2 border-highlight px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-background text-sm font-bold">
          {t.mobileBar.spotsLeft} <span className="text-highlight">{t.mobileBar.spotsCount}</span> {t.mobileBar.spotsFor} {currentMonth}
        </p>
        <Button 
          variant="ctaSecondary" 
          size="sm" 
          className="shrink-0 bg-highlight text-foreground hover:bg-highlight/90 shadow-none animate-none font-black"
        >
          {t.mobileBar.cta}
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
