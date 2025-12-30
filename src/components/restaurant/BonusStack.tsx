import { Gift, FileText, Camera, Sparkles } from "lucide-react";

const BonusStack = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Google Maps Ranking Cheat Sheet",
      description: "Die 7 Geheimnisse für Top-Platzierungen",
      value: "97€",
    },
    {
      icon: Camera,
      title: "50 Instagram Reel-Ideen",
      description: "Content-Vorlagen speziell für Restaurants",
      value: "47€",
    },
    {
      icon: Sparkles,
      title: "Erster Monat GRATIS",
      description: "Bei Jahres-Abo ohne Risiko starten",
      value: "49€",
      highlight: true,
    },
  ];

  const totalBonusValue = bonuses.reduce((sum, b) => sum + parseInt(b.value), 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-center gap-3">
        <Gift className="w-5 h-5 text-[hsl(42_65%_42%)]" />
        <h4 className="pricing-bonus-header text-base font-['Cormorant_Garamond',serif] font-semibold text-[hsl(30_30%_18%)] uppercase tracking-[0.15em]">
          Exklusive Boni
        </h4>
        <span className="pricing-bonus-tag">GRATIS</span>
      </div>

      <div className="pricing-divider">
        <span className="text-[hsl(42_55%_55%)]">✦</span>
      </div>

      {/* Bonus Items */}
      <div className="space-y-3">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
              bonus.highlight
                ? "bg-gradient-to-r from-[hsl(42_70%_55%_/_0.12)] to-[hsl(42_70%_55%_/_0.04)] border border-[hsl(42_50%_68%)]"
                : "bg-[hsl(40_25%_94%)] border border-[hsl(42_35%_82%)]"
            }`}
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
              bonus.highlight
                ? "bg-[hsl(42_65%_48%)] text-white"
                : "bg-[hsl(42_40%_82%)] text-[hsl(42_55%_38%)]"
            }`}>
              <bonus.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className={`text-sm font-semibold ${
                bonus.highlight ? "text-[hsl(30_30%_18%)]" : "text-[hsl(30_28%_22%)]"
              }`}>
                {bonus.title}
              </h5>
              <p className="pricing-bonus-description text-xs text-[hsl(30_20%_42%)] mt-0.5">
                {bonus.description}
              </p>
            </div>
            <div className={`text-right flex-shrink-0`}>
              <span className="pricing-bonus-value-label text-[10px] uppercase tracking-wide text-[hsl(30_18%_48%)]">Wert</span>
              <p className={`pricing-bonus-value text-sm font-semibold ${
                bonus.highlight ? "text-[hsl(42_65%_38%)]" : "text-[hsl(30_25%_28%)]"
              }`}>
                {bonus.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Bonus Value */}
      <div className="text-center pt-3 border-t border-dashed border-[hsl(42_40%_75%)]">
        <p className="pricing-total-label text-sm text-[hsl(30_22%_42%)]">
          Bonus-Gesamtwert: <span className="pricing-total-value font-bold text-[hsl(42_65%_38%)]">{totalBonusValue}€</span>
        </p>
      </div>
    </div>
  );
};

export default BonusStack;