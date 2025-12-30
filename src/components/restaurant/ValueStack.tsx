import { Check } from "lucide-react";

interface ValueItem {
  feature: string;
  value: string;
  highlight?: boolean;
}

const ValueStack = () => {
  const items: ValueItem[] = [
    { feature: "Premium Hosting & Wartung", value: "29€" },
    { feature: "Monatliche Updates & Optimierung", value: "49€" },
    { feature: "Persönlicher Support (Mo-Sa)", value: "99€", highlight: true },
    { feature: "Google Maps Monitoring", value: "39€" },
    { feature: "Speisekarten-Änderungen inkl.", value: "25€" },
    { feature: "Technischer Notfall-Service", value: "∞", highlight: true },
  ];

  const totalValue = "241€";

  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="text-center mb-5">
        <h4 className="text-base font-['Cormorant_Garamond',serif] font-semibold text-[hsl(30_25%_18%)] uppercase tracking-[0.15em]">
          Was Sie erhalten
        </h4>
        <div className="pricing-divider mt-2">
          <span className="text-[hsl(42_50%_65%)]">◆</span>
        </div>
      </div>

      {/* Feature List */}
      <div className="space-y-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`pricing-feature-item ${
              item.highlight ? "bg-[hsl(42_60%_55%_/_0.08)] -mx-2 px-2 rounded-lg" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.highlight 
                  ? "bg-[hsl(42_70%_50%)] text-white" 
                  : "bg-[hsl(42_45%_82%)] text-[hsl(42_60%_35%)]"
              }`}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className={`text-sm ${
                item.highlight 
                  ? "font-semibold text-[hsl(30_25%_18%)]" 
                  : "text-[hsl(30_18%_30%)]"
              }`}>
                {item.feature}
              </span>
            </div>
            <span className={`text-sm italic ${
              item.highlight 
                ? "text-[hsl(42_70%_40%)] font-medium not-italic" 
                : "text-[hsl(30_10%_55%)]"
            }`}>
              {item.value}/Monat
            </span>
          </div>
        ))}
      </div>

      {/* Total Value */}
      <div className="pt-4 mt-3 border-t-2 border-[hsl(42_45%_78%)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-['Cormorant_Garamond',serif] font-semibold text-[hsl(30_25%_18%)] uppercase tracking-wide">
            Gesamtwert
          </span>
          <span className="text-2xl font-['Cormorant_Garamond',serif] font-bold text-[hsl(42_70%_42%)]">
            {totalValue}/Monat
          </span>
        </div>
      </div>
    </div>
  );
};

export default ValueStack;
