import { useState } from "react";
import { Star, Sparkles } from "lucide-react";

interface PricingToggleProps {
  onBillingChange?: (isYearly: boolean) => void;
}

const PricingToggle = ({ onBillingChange }: PricingToggleProps) => {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onBillingChange?.(yearly);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Toggle Buttons */}
      <div className="flex items-center gap-1 p-1 bg-[hsl(var(--menu-cream))]/50 rounded-full border border-[hsl(var(--menu-gold))]/20">
        <button
          onClick={() => handleToggle(false)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !isYearly
              ? "bg-[hsl(var(--menu-gold))] text-[hsl(var(--menu-cream))] shadow-lg"
              : "text-[hsl(var(--menu-brown))]/70 hover:text-[hsl(var(--menu-brown))]"
          }`}
        >
          Monatlich
        </button>
        <button
          onClick={() => handleToggle(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            isYearly
              ? "bg-[hsl(var(--menu-gold))] text-[hsl(var(--menu-cream))] shadow-lg"
              : "text-[hsl(var(--menu-brown))]/70 hover:text-[hsl(var(--menu-brown))]"
          }`}
        >
          Jährlich
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            isYearly 
              ? "bg-[hsl(var(--menu-cream))]/20" 
              : "bg-[hsl(var(--menu-gold))]/20 text-[hsl(var(--menu-gold))]"
          }`}>
            -20%
          </span>
        </button>
      </div>

      {/* Price Display */}
      <div className="text-center">
        {/* Anchor Price */}
        <div className="text-sm text-[hsl(var(--menu-brown))]/50 mb-2">
          <span className="line-through">Agentur-Preis: 1.800€/Jahr</span>
        </div>

        {/* Main Price */}
        <div className="relative">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl md:text-7xl font-serif font-bold text-[hsl(var(--menu-gold))] price-glow">
              {isYearly ? "39" : "49"}€
            </span>
            <span className="text-xl text-[hsl(var(--menu-brown))]/70">/Monat</span>
          </div>
          
          {isYearly && (
            <div className="absolute -top-2 -right-4 md:-right-8">
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium animate-bounce-subtle">
                <Star className="w-3 h-3 fill-current" />
                Spart 120€/Jahr
              </div>
            </div>
          )}
        </div>

        {/* Billing Info */}
        <p className="text-sm text-[hsl(var(--menu-brown))]/60 mt-2">
          {isYearly ? (
            <>Einmalig <span className="font-semibold text-[hsl(var(--menu-gold))]">468€/Jahr</span> (statt 588€)</>
          ) : (
            <>Monatlich kündbar • Keine versteckten Kosten</>
          )}
        </p>

        {/* Recommended Badge */}
        {isYearly && (
          <div className="mt-3 inline-flex items-center gap-1 bg-[hsl(var(--menu-gold))]/10 text-[hsl(var(--menu-gold))] px-3 py-1 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Beliebteste Wahl
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingToggle;
