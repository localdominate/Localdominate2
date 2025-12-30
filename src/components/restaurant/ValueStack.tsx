import { Check, Sparkles } from "lucide-react";

interface ValueItem {
  feature: string;
  value: string;
  highlight?: boolean;
}

const ValueStack = () => {
  const items: ValueItem[] = [
    { feature: "Premium Hosting & SSL-Zertifikat", value: "29€" },
    { feature: "Monatliche Updates & Backups", value: "49€" },
    { feature: "Persönlicher WhatsApp-Support", value: "99€", highlight: true },
    { feature: "Google Maps Optimierung", value: "39€" },
    { feature: "Unbegrenzte Speisekarten-Änderungen", value: "25€" },
    { feature: "Technischer Notfall-Service 24/7", value: "∞", highlight: true },
  ];

  const totalValue = "241€";

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
            item.highlight
              ? "bg-[hsl(var(--menu-gold))]/10 border border-[hsl(var(--menu-gold))]/30"
              : "bg-[hsl(var(--menu-cream))]/30"
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              item.highlight 
                ? "bg-[hsl(var(--menu-gold))]" 
                : "bg-[hsl(var(--menu-gold))]/20"
            }`}>
              <Check className={`w-4 h-4 ${
                item.highlight 
                  ? "text-[hsl(var(--menu-cream))]" 
                  : "text-[hsl(var(--menu-gold))]"
              }`} />
            </div>
            <span className={`text-sm md:text-base ${
              item.highlight 
                ? "text-[hsl(var(--menu-brown))] font-medium" 
                : "text-[hsl(var(--menu-brown))]/80"
            }`}>
              {item.feature}
            </span>
          </div>
          <span className={`text-sm font-medium ${
            item.highlight 
              ? "text-[hsl(var(--menu-gold))]" 
              : "text-[hsl(var(--menu-brown))]/60"
          }`}>
            Wert: {item.value}/Monat
          </span>
        </div>
      ))}

      {/* Total Value Line */}
      <div className="mt-6 pt-4 border-t-2 border-dashed border-[hsl(var(--menu-gold))]/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[hsl(var(--menu-gold))]" />
            <span className="text-lg font-serif font-semibold text-[hsl(var(--menu-brown))]">
              Gesamtwert:
            </span>
          </div>
          <span className="text-xl font-bold text-[hsl(var(--menu-gold))]">
            {totalValue}/Monat
          </span>
        </div>
      </div>
    </div>
  );
};

export default ValueStack;
