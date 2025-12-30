import { useState } from "react";
import { Sparkles } from "lucide-react";

interface PricingToggleProps {
  onBillingChange?: (isYearly: boolean) => void;
}

const PricingToggle = ({ onBillingChange }: PricingToggleProps) => {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onBillingChange?.(yearly);
  };

  const monthlyPrice = 49;
  const yearlyPrice = 39;
  const yearlySavings = (monthlyPrice - yearlyPrice) * 12;

  return (
    <div className="space-y-6">
      {/* Toggle Buttons */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-full bg-[hsl(40_22%_90%)] border border-[hsl(42_35%_82%)]">
          <button
            onClick={() => handleToggle(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !isYearly
                ? "bg-white text-[hsl(30_25%_18%)] shadow-sm"
                : "text-[hsl(30_12%_50%)] hover:text-[hsl(30_20%_35%)]"
            }`}
          >
            Monatlich
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              isYearly
                ? "bg-white text-[hsl(30_25%_18%)] shadow-sm"
                : "text-[hsl(30_12%_50%)] hover:text-[hsl(30_20%_35%)]"
            }`}
          >
            Jährlich
            {isYearly && (
              <span className="pricing-bonus-tag text-xs">
                Spart {yearlySavings}€
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Price Display */}
      <div className="text-center space-y-3">
        {/* Anchor Price */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-[hsl(30_12%_50%)]">Agentur-Preis:</span>
          <span className="text-lg text-[hsl(30_12%_55%)] line-through decoration-[hsl(0_50%_50%)/0.5]">
            1.800€/Jahr
          </span>
        </div>

        {/* Current Price */}
        <div className="relative inline-block">
          {isYearly && (
            <div className="absolute -top-4 -right-4 flex items-center gap-1 pricing-bonus-tag">
              <Sparkles className="w-3 h-3" />
              <span>Empfohlen</span>
            </div>
          )}
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-6xl md:text-7xl font-['Cormorant_Garamond',serif] font-bold text-[hsl(30_25%_18%)]">
              {isYearly ? yearlyPrice : monthlyPrice}€
            </span>
            <span className="text-xl text-[hsl(30_12%_50%)] font-['Cormorant_Garamond',serif]">
              /Monat
            </span>
          </div>
        </div>

        {/* Billing Info */}
        <p className="text-sm text-[hsl(30_12%_50%)]">
          {isYearly ? (
            <>
              Jährliche Abrechnung: <span className="font-semibold text-[hsl(30_20%_30%)]">{yearlyPrice * 12}€</span>
              <span className="text-[hsl(42_70%_42%)]"> (statt {monthlyPrice * 12}€)</span>
            </>
          ) : (
            <>Monatliche Abrechnung, jederzeit kündbar</>
          )}
        </p>
      </div>
    </div>
  );
};

export default PricingToggle;
