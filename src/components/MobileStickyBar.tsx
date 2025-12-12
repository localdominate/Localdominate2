import { Button } from "@/components/ui/button";

const MobileStickyBar = () => {
  const currentMonth = new Date().toLocaleString('de-DE', { month: 'long' });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-foreground border-t-2 border-highlight px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-background text-sm font-bold">
          Nur noch <span className="text-highlight">2 Plätze</span> für {currentMonth}
        </p>
        <Button 
          variant="ctaSecondary" 
          size="sm" 
          className="shrink-0 bg-highlight text-foreground hover:bg-highlight/90 shadow-none animate-none font-black"
        >
          Jetzt sichern
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
