import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackButtonClick } from "@/lib/dataLayer";

const COPY = {
  de: {
    badge: "AI Visibility Index: Hohe Nachfrage",
    h1a: "Während du das liest,",
    h1b: "empfiehlt die KI",
    h1c: "deinen Wettbewerber.",
    sub: "Dein Unternehmen ist für LLMs aktuell unsichtbar. Wir bauen die Infrastruktur, damit du bei ChatGPT, Gemini und Perplexity die erste Empfehlung wirst.",
    primary: "AI-Sichtbarkeits-Audit",
    secondary: "Demo ansehen",
    sim: "AI Search Simulation",
    recommend: "Empfehlung: [Dein Wettbewerber]",
    trust: "Indiziert & zitiert von",
    rating: "4,9 / 5 aus 127 Bewertungen",
    guarantee: "30-Tage Geld-zurück-Garantie",
  },
  en: {
    badge: "AI Visibility Index: High Demand",
    h1a: "While you're reading this,",
    h1b: "AI is recommending",
    h1c: "your competitor.",
    sub: "Your business is invisible to LLMs. We provide the infrastructure so your brand becomes the first choice on ChatGPT, Gemini and Perplexity.",
    primary: "AI Visibility Audit",
    secondary: "View Demo",
    sim: "AI Search Simulation",
    recommend: "Recommend: [Your Competitor]",
    trust: "Indexed & cited by",
    rating: "4.9 / 5 from 127 reviews",
    guarantee: "30-day money-back guarantee",
  },
  ar: {
    badge: "مؤشر الظهور في الذكاء الاصطناعي: طلب مرتفع",
    h1a: "بينما تقرأ هذا،",
    h1b: "يوصي الذكاء الاصطناعي بـ",
    h1c: "منافسك.",
    sub: "نشاطك التجاري غير مرئي لنماذج LLM. نوفر البنية التحتية لتصبح علامتك التجارية الخيار الأول في ChatGPT وGemini وPerplexity.",
    primary: "تدقيق الظهور في AI",
    secondary: "شاهد العرض",
    sim: "محاكاة بحث الذكاء الاصطناعي",
    recommend: "التوصية: [منافسك]",
    trust: "مُفهرس ومستشهد به من",
    rating: "4.9 / 5 من 127 تقييمًا",
    guarantee: "ضمان استرداد الأموال لمدة 30 يومًا",
  },
} as const;

const ENGINES = ["ChatGPT", "Gemini", "Perplexity", "Claude", "Google AI"];

const HeroAIVisibility = () => {
  const { language } = useLanguage();
  const t = COPY[language as keyof typeof COPY] || COPY.de;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background px-4 py-16 md:py-24 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-5xl w-full flex flex-col items-center text-center">
        {/* AI Visibility Index Badge */}
        <div className="mb-7 flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest">
            {t.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {t.h1a}
          <br className="hidden sm:block" />{" "}
          {t.h1b} <span className="text-primary">{t.h1c}</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
          {t.sub}
        </p>

        {/* AI Search Preview Card */}
        <div className="w-full max-w-2xl mb-10 bg-card border border-border rounded-2xl shadow-xl shadow-primary/5 overflow-hidden text-left">
          <div className="px-4 py-3 bg-muted/40 border-b border-border flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              {t.sim}
            </span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-md bg-primary flex-shrink-0 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="space-y-3 w-full">
                <div className="h-3.5 bg-muted rounded w-3/4" />
                <div className="h-3.5 bg-muted rounded w-5/6" />
                <div className="h-7 bg-primary/10 rounded flex items-center px-3 w-fit max-w-full">
                  <span className="text-[11px] text-primary font-semibold whitespace-nowrap">
                    {t.recommend}
                  </span>
                </div>
                <div className="h-3.5 bg-muted rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14 w-full sm:w-auto">
          <Link
            to="/ai-visibility-audit"
            onClick={() => trackButtonClick("hero_ai_audit", "hero_section", 0)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            {t.primary}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#offer"
            onClick={() => trackButtonClick("hero_demo", "hero_section", 0)}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-card text-foreground font-semibold rounded-lg border border-border hover:bg-muted/50 transition-all"
          >
            {t.secondary}
          </a>
        </div>

        {/* Trust microline — social proof + risk reversal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5" dir="ltr">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-medium text-foreground">{t.rating}</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="font-medium text-foreground">{t.guarantee}</span>
          </div>
        </div>

        {/* Trust Row */}
        <div className="w-full pt-8 border-t border-border">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
            {t.trust}
          </p>
          <div
            className="flex flex-wrap justify-center gap-x-10 sm:gap-x-12 gap-y-4 grayscale opacity-60 hover:opacity-90 transition-opacity"
            dir="ltr"
          >
            {ENGINES.map((e) => (
              <span
                key={e}
                className="text-sm font-semibold text-foreground tracking-tight"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAIVisibility;