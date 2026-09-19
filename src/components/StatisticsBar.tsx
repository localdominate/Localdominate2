import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const StatisticsBar = () => {
  const { t } = useLanguage();
  const isEn = useLanguage().language === "en";
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: "46%", label: isEn ? "of all Google searches are local" : "aller Google-Suchen sind lokal" },
    { value: "88%", label: isEn ? "contact a business within 24 hours" : "kontaktieren innerhalb 24h" },
    { value: "76%", label: isEn ? "visit on the same day" : "besuchen am selben Tag" },
    { value: "78%", label: isEn ? "click one of the top 3 results" : "klicken auf Top 3 Ergebnisse" },
  ];

  return (
    <section className="bg-primary/5 border-y border-primary/10 py-8 md:py-10">
      <div
        ref={ref}
        className={`container max-w-6xl reveal ${isVisible ? "visible" : ""}`}
      >
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6 font-semibold">
          {isEn ? "Source:" : "Quelle:"} Google/Ipsos & BrightLocal 2025
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBar;
