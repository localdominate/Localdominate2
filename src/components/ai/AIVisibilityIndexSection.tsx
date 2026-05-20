import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, ShieldCheck, Network, Star, FileCode2, Bot } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const content = {
  de: {
    eyebrow: "AI Visibility Index™",
    headline: "Wie sichtbar ist dein Geschäft in der AI-Suche?",
    sub: "Unser proprietärer AI Visibility Index™ misst, ob LLMs dein Unternehmen finden, verstehen und zitieren. Basierend auf fünf Signalen, die in der Local Authority Density Score™-Methode aggregiert werden.",
    cta: "Kostenloser AI-Sichtbarkeits-Audit",
    sample: "Beispiel-Auswertung",
    score: "AI Visibility Score",
    legend: "Branchendurchschnitt: 41/100",
    metrics: [
      { icon: Network, label: "Entity Authority", value: 78, hint: "Wie klar das LLM dein Unternehmen als Entität erkennt." },
      { icon: ShieldCheck, label: "Citation Density", value: 62, hint: "Konsistenz von NAP über das Web." },
      { icon: Star, label: "Review Velocity", value: 84, hint: "Geschwindigkeit & Aktualität von Bewertungen." },
      { icon: FileCode2, label: "Schema Coverage", value: 91, hint: "Maschinenlesbarkeit deiner Seite (LocalBusiness, FAQ, HowTo)." },
      { icon: Bot, label: "AI Retrievability", value: 56, hint: "Wie gut LLMs deine Antworten extrahieren können." },
    ],
  },
  en: {
    eyebrow: "AI Visibility Index™",
    headline: "How visible is your business in AI search?",
    sub: "Our proprietary AI Visibility Index™ measures whether LLMs find, understand and cite your business. Built on five signals aggregated through the Local Authority Density Score™ method.",
    cta: "Free AI Visibility Audit",
    sample: "Sample report",
    score: "AI Visibility Score",
    legend: "Industry average: 41/100",
    metrics: [
      { icon: Network, label: "Entity Authority", value: 78, hint: "How clearly the LLM recognizes your business as an entity." },
      { icon: ShieldCheck, label: "Citation Density", value: 62, hint: "NAP consistency across the web." },
      { icon: Star, label: "Review Velocity", value: 84, hint: "Recency and pace of reviews." },
      { icon: FileCode2, label: "Schema Coverage", value: 91, hint: "Machine-readability (LocalBusiness, FAQ, HowTo)." },
      { icon: Bot, label: "AI Retrievability", value: 56, hint: "How well LLMs can extract your answers." },
    ],
  },
  ar: {
    eyebrow: "™AI Visibility Index",
    headline: "ما مدى ظهور نشاطك في البحث بالذكاء الاصطناعي؟",
    sub: "يقيس مؤشر AI Visibility Index™ الخاص بنا ما إذا كانت نماذج LLM تجد نشاطك التجاري وتفهمه وتستشهد به. يعتمد على خمس إشارات يتم تجميعها عبر منهجية Local Authority Density Score™.",
    cta: "تدقيق مجاني للظهور في الذكاء الاصطناعي",
    sample: "تقرير نموذجي",
    score: "نتيجة الظهور في الذكاء الاصطناعي",
    legend: "متوسط الصناعة: 41/100",
    metrics: [
      { icon: Network, label: "سلطة الكيان", value: 78, hint: "مدى وضوح تعرّف الذكاء الاصطناعي على نشاطك ككيان." },
      { icon: ShieldCheck, label: "كثافة الاستشهادات", value: 62, hint: "اتساق الاسم والعنوان والهاتف عبر الويب." },
      { icon: Star, label: "سرعة المراجعات", value: 84, hint: "حداثة ووتيرة المراجعات." },
      { icon: FileCode2, label: "تغطية Schema", value: 91, hint: "قابلية القراءة الآلية (LocalBusiness، FAQ، HowTo)." },
      { icon: Bot, label: "قابلية الاسترجاع بالذكاء الاصطناعي", value: 56, hint: "مدى قدرة LLM على استخراج إجاباتك." },
    ],
  },
};

const AIVisibilityIndexSection = () => {
  const { language } = useLanguage();
  const t = content[language] || content.de;
  const total = Math.round(t.metrics.reduce((s, m) => s + m.value, 0) / t.metrics.length);

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              {t.eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              {t.headline}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {t.sub}
            </p>
            <Button variant="cta" size="ctaLarge" className="group" asChild>
              <a href="#offer">
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right: scorecard */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.sample}
                </p>
                <p className="text-sm font-semibold text-foreground">{t.score}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-primary tabular-nums">{total}</div>
                <p className="text-[11px] text-muted-foreground">/100</p>
              </div>
            </div>

            {/* Gauge bar */}
            <div className="relative h-2 rounded-full bg-muted overflow-hidden mb-2">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                style={{ width: `${total}%` }}
              />
            </div>
            <p className="text-[11px] text-muted-foreground mb-6 flex items-center gap-1.5">
              <Gauge className="w-3 h-3" /> {t.legend}
            </p>

            {/* Metrics */}
            <ul className="space-y-4">
              {t.metrics.map(({ icon: Icon, label, value, hint }) => (
                <li key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold text-foreground truncate">{label}</span>
                    </div>
                    <span className="text-sm font-bold text-foreground tabular-nums">{value}</span>
                  </div>
                  <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary/80"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">{hint}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVisibilityIndexSection;