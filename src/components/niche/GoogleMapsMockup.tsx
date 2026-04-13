import { MapPin, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Props {
  serviceName: string;
  city: string;
}

const translations: Record<string, {
  beforeAfter: string;
  competitorA: string;
  competitorB: string;
  competitorC: string;
  your: string;
}> = {
  de: {
    beforeAfter: "Vorher → Nachher",
    competitorA: "Mitbewerber A",
    competitorB: "Mitbewerber B",
    competitorC: "Mitbewerber C",
    your: "Dein",
  },
  en: {
    beforeAfter: "Before → After",
    competitorA: "Competitor A",
    competitorB: "Competitor B",
    competitorC: "Competitor C",
    your: "Your",
  },
  ar: {
    beforeAfter: "قبل ← بعد",
    competitorA: "منافس أ",
    competitorB: "منافس ب",
    competitorC: "منافس ج",
    your: "نشاطك:",
  },
};

const GoogleMapsMockup = ({ serviceName, city }: Props) => {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const isRTL = language === 'ar';

  return (
    <div className="max-w-md mx-auto mt-10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-xs text-muted-foreground text-center mb-2 font-medium uppercase tracking-wider">
        {t.beforeAfter}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {/* Before */}
        <div className="bg-card border border-border/50 rounded-xl p-4 opacity-60">
          <div className="text-xs text-muted-foreground mb-2" dir="ltr">Google Maps</div>
          <div className="space-y-2">
            {[t.competitorA, t.competitorB, t.competitorC].map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/30">
              <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              <span className="text-xs text-muted-foreground line-through">{t.your} {serviceName}</span>
            </div>
          </div>
        </div>
        {/* After */}
        <div className="bg-card border-2 border-primary/30 rounded-xl p-4">
          <div className="text-xs text-primary font-semibold mb-2" dir="ltr">Google Maps</div>
          <div className="space-y-2">
            <div className={`flex items-center gap-2 bg-primary/5 rounded-lg p-1.5 -mx-1.5`}>
              <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
              <span className="text-xs font-bold text-primary">{t.your} {serviceName}</span>
              <div className={`flex ${isRTL ? 'mr-auto' : 'ml-auto'}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-[hsl(var(--highlight))] text-[hsl(var(--highlight))]" />
                ))}
              </div>
            </div>
            {[t.competitorA, t.competitorB].map((name, i) => (
              <div key={i} className="flex items-center gap-2 opacity-50">
                <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsMockup;
