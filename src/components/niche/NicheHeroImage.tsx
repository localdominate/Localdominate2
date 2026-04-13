import salonHero from "@/assets/niche/salon-hero.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

interface Props {
  alt: string;
}

const badgeText: Record<string, string> = {
  de: "Professioneller Salon-Auftritt",
  en: "Professional Salon Presence",
  ar: "حضور احترافي للصالون",
};

const NicheHeroImage = ({ alt }: Props) => {
  const { language } = useLanguage();

  return (
    <div className="relative mt-12 max-w-3xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20 ring-1 ring-primary/5">
        <img
          src={salonHero}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          loading="eager"
          decoding="sync"
        />
      </div>
      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent rounded-b-2xl" />
      {/* Professional badge */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border/50 rounded-full px-6 py-2.5 shadow-lg flex items-center gap-2.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--success))] animate-pulse" />
        <span className="text-sm font-semibold text-foreground whitespace-nowrap">
          {badgeText[language] || badgeText.de}
        </span>
      </div>
    </div>
  );
};

export default NicheHeroImage;
