import { Gift, FileText, Instagram, Zap } from "lucide-react";

const BonusStack = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Google Maps Ranking Cheat Sheet",
      value: "97€",
      description: "Top 3 in 30 Tagen"
    },
    {
      icon: Instagram,
      title: "50 Instagram Reel-Ideen",
      value: "47€",
      description: "Für Restaurants optimiert"
    },
    {
      icon: Zap,
      title: "Erster Monat GRATIS",
      value: "49€",
      description: "Bei Jahres-Abo",
      highlight: true
    }
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-5 h-5 text-[hsl(var(--menu-gold))]" />
        <span className="text-lg font-serif font-semibold text-[hsl(var(--menu-brown))]">
          Exklusive Boni
        </span>
        <span className="text-xs bg-[hsl(var(--menu-gold))]/20 text-[hsl(var(--menu-gold))] px-2 py-1 rounded-full">
          GRATIS
        </span>
      </div>

      {bonuses.map((bonus, index) => {
        const Icon = bonus.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
              bonus.highlight
                ? "bg-gradient-to-r from-[hsl(var(--menu-gold))]/15 to-[hsl(var(--menu-gold))]/5 border-2 border-[hsl(var(--menu-gold))]/40 bonus-glow"
                : "bg-[hsl(var(--menu-cream))]/30 border border-[hsl(var(--menu-gold))]/10"
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              bonus.highlight 
                ? "bg-[hsl(var(--menu-gold))]" 
                : "bg-[hsl(var(--menu-gold))]/20"
            }`}>
              <Icon className={`w-5 h-5 ${
                bonus.highlight 
                  ? "text-[hsl(var(--menu-cream))]" 
                  : "text-[hsl(var(--menu-gold))]"
              }`} />
            </div>
            <div className="flex-1">
              <p className={`font-medium ${
                bonus.highlight 
                  ? "text-[hsl(var(--menu-brown))]" 
                  : "text-[hsl(var(--menu-brown))]/80"
              }`}>
                {bonus.title}
              </p>
              <p className="text-xs text-[hsl(var(--menu-brown))]/60">
                {bonus.description}
              </p>
            </div>
            <div className={`text-sm font-semibold ${
              bonus.highlight 
                ? "text-[hsl(var(--menu-gold))]" 
                : "text-[hsl(var(--menu-brown))]/50"
            }`}>
              Wert: {bonus.value}
            </div>
          </div>
        );
      })}

      <div className="text-center mt-4 pt-4 border-t border-dashed border-[hsl(var(--menu-gold))]/30">
        <span className="text-sm text-[hsl(var(--menu-brown))]/60">Bonus-Gesamtwert: </span>
        <span className="text-lg font-bold text-[hsl(var(--menu-gold))]">193€</span>
      </div>
    </div>
  );
};

export default BonusStack;
