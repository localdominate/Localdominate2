import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const StatisticsBar = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const content = {
    de: { source: "Quelle:", labels: ["aller Google-Suchen sind lokal", "kontaktieren innerhalb 24h", "besuchen am selben Tag", "klicken auf Top 3 Ergebnisse"] },
    en: { source: "Source:", labels: ["of all Google searches are local", "contact a business within 24 hours", "visit on the same day", "click one of the top 3 results"] },
    ar: { source: "المصدر:", labels: ["من عمليات بحث Google محلية", "يتواصلون مع نشاط تجاري خلال 24 ساعة", "يزورون النشاط في اليوم نفسه", "ينقرون على إحدى النتائج الثلاث الأولى"] },
  }[language];
  const stats = ["46%", "88%", "76%", "78%"].map((value, index) => ({ value, label: content.labels[index] }));

  return (
    <section className="bg-primary/5 border-y border-primary/10 py-8 md:py-10">
      <div
        ref={ref}
        className={`container max-w-6xl reveal ${isVisible ? "visible" : ""}`}
      >
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6 font-semibold">
          {content.source} Google/Ipsos & BrightLocal 2025
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
