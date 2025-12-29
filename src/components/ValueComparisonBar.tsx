import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ValueComparisonBarProps {
  totalValue: number;
  yourPrice: number;
}

const ValueComparisonBar = ({ totalValue, yourPrice }: ValueComparisonBarProps) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const content = {
    de: {
      totalValue: "Gesamtwert",
      yourPrice: "Dein Preis",
      savings: "Du sparst",
    },
    en: {
      totalValue: "Total Value",
      yourPrice: "Your Price",
      savings: "You Save",
    },
  };

  const t = content[language];
  const savings = totalValue - yourPrice;
  const pricePercentage = (yourPrice / totalValue) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate to full width
            setTimeout(() => setProgress(100), 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-md mx-auto space-y-4 p-6 rounded-2xl bg-card/50 border border-border">
      {/* Total Value Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t.totalValue}</span>
          <span className="font-bold text-foreground">{totalValue}€+</span>
        </div>
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-success/60 to-success rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Your Price Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t.yourPrice}</span>
          <span className="font-bold text-primary">{yourPrice}€</span>
        </div>
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full transition-all duration-1000 ease-out delay-300"
            style={{ width: `${(progress * pricePercentage) / 100}%` }}
          />
        </div>
      </div>

      {/* Savings Callout */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <span className="text-sm text-muted-foreground">{t.savings}:</span>
        <span className="text-lg font-bold text-success">{savings}€+</span>
        <span className="text-xs text-success bg-success/10 px-2 py-0.5 rounded-full">
          {Math.round((savings / totalValue) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default ValueComparisonBar;
