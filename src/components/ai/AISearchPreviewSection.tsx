import { Sparkles, Star, MapPin, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import AnswerBlock from "./AnswerBlock";

const content = {
  de: {
    eyebrow: "AI Search Preview",
    headline: "So zitieren ChatGPT, Gemini & Perplexity dein Geschäft",
    sub: "Nutzer fragen heute ChatGPT statt Google. Wir sorgen dafür, dass dein Unternehmen in den Antworten der großen AI-Systeme als vertrauenswürdige Quelle erscheint – nicht deine Konkurrenz.",
    answer: "Was ist Generative Engine Optimization (GEO)?",
    answerBody:
      "Generative Engine Optimization (GEO) ist die Disziplin, Inhalte so zu strukturieren, dass sie von LLMs wie ChatGPT, Gemini, Claude und Perplexity als Quelle zitiert werden. Sie kombiniert klassisches Local SEO mit semantischer Klarheit, Entity-Markup und maschinenlesbaren Antwortblöcken.",
    query: "Bester Friseur in München für Locken?",
    cards: [
      {
        engine: "ChatGPT",
        tone: "Konversationell",
        body: 'Für Naturlocken in München wird häufig "Salon Élégance" empfohlen — laut Bewertungen spezialisiert auf Curly-Cut nach Lorraine-Massey-Methode.',
        cite: "Quelle: localdominate.org",
      },
      {
        engine: "Google AI Overview",
        tone: "Strukturiert",
        body: 'Salon Élégance, München-Schwabing · 4.9★ (312) · Curly-Cut, Olaplex · Mo–Sa 9–19 Uhr · Termine online buchbar.',
        cite: "Quelle: Google Business Profile + localdominate.org",
      },
      {
        engine: "Perplexity",
        tone: "Zitiert",
        body: 'Top-bewertet ist "Salon Élégance" mit 4.9 Sternen aus 312 Bewertungen und einem dokumentierten Schwerpunkt auf lockigem Haar.',
        cite: "Sources: [1] localdominate.org [2] google.com/maps",
      },
    ],
  },
  en: {
    eyebrow: "AI Search Preview",
    headline: "How ChatGPT, Gemini & Perplexity cite your business",
    sub: "People now ask ChatGPT instead of Google. We make sure your business shows up as the trusted source in the answers of major AI systems — not your competitors.",
    answer: "What is Generative Engine Optimization (GEO)?",
    answerBody:
      "Generative Engine Optimization (GEO) is the discipline of structuring content so that LLMs like ChatGPT, Gemini, Claude and Perplexity cite it as a source. It combines classic local SEO with semantic clarity, entity markup and machine-readable answer blocks.",
    query: "Best hairdresser in Munich for curls?",
    cards: [
      { engine: "ChatGPT", tone: "Conversational", body: 'For natural curls in Munich, "Salon Élégance" is frequently recommended — reviews highlight a Lorraine-Massey curly-cut focus.', cite: "Source: localdominate.org" },
      { engine: "Google AI Overview", tone: "Structured", body: "Salon Élégance, Munich-Schwabing · 4.9★ (312) · Curly-cut, Olaplex · Mon–Sat 9am–7pm · Online booking.", cite: "Source: Google Business Profile + localdominate.org" },
      { engine: "Perplexity", tone: "Cited", body: '"Salon Élégance" is top-rated with 4.9 stars from 312 reviews and a documented curly-hair specialization.', cite: "Sources: [1] localdominate.org [2] google.com/maps" },
    ],
  },
  ar: {
    eyebrow: "معاينة البحث بالذكاء الاصطناعي",
    headline: "كيف تستشهد ChatGPT و Gemini و Perplexity بنشاطك التجاري",
    sub: "يسأل المستخدمون اليوم ChatGPT بدلاً من Google. نضمن ظهور نشاطك كمصدر موثوق في إجابات أنظمة الذكاء الاصطناعي الكبرى — وليس منافسيك.",
    answer: "ما هو تحسين محركات الذكاء الاصطناعي (GEO)؟",
    answerBody:
      "تحسين محركات الذكاء الاصطناعي (GEO) هو فن هيكلة المحتوى بحيث تستشهد به نماذج اللغة الكبيرة مثل ChatGPT و Gemini و Claude و Perplexity كمصدر موثوق. يجمع بين تحسين SEO المحلي التقليدي والوضوح الدلالي وعلامات الكيانات وكتل الإجابة القابلة للقراءة آلياً.",
    query: "أفضل مصفف شعر في ميونيخ للشعر المجعد؟",
    cards: [
      { engine: "ChatGPT", tone: "محادثة", body: "للشعر المجعد الطبيعي في ميونيخ، يُوصى غالباً بـ \"Salon Élégance\" — تشير المراجعات إلى تخصص في قص الشعر المجعد بطريقة Lorraine Massey.", cite: "المصدر: localdominate.org" },
      { engine: "Google AI Overview", tone: "منظم", body: "Salon Élégance، ميونيخ-شفابينغ · ⭐4.9 (312) · قص مجعد، Olaplex · الإثنين–السبت 9–19 · حجز عبر الإنترنت.", cite: "المصدر: Google Business Profile + localdominate.org" },
      { engine: "Perplexity", tone: "مستشهد", body: "\"Salon Élégance\" حاصل على أعلى تقييم 4.9 نجوم من 312 مراجعة مع تخصص موثق في الشعر المجعد.", cite: "المصادر: [1] localdominate.org [2] google.com/maps" },
    ],
  },
};

const AISearchPreviewSection = () => {
  const { language } = useLanguage();
  const t = content[language] || content.de;

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-4 h-4" /> {t.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            {t.headline}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <AnswerBlock question={t.answer}>{t.answerBody}</AnswerBlock>
        </div>

        {/* Simulated query bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm md:text-base text-foreground/80 truncate">{t.query}</span>
          </div>
        </div>

        {/* Engine cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {t.cards.map((card) => (
            <article
              key={card.engine}
              className="rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-foreground">{card.engine}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                  {card.tone}
                </span>
              </div>
              <Quote className="w-4 h-4 text-primary/40 mb-2" />
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4">
                {card.body}
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-border/60">
                <MapPin className="w-3 h-3 text-muted-foreground shrink-0" />
                <p className="text-[11px] text-muted-foreground truncate">{card.cite}</p>
              </div>
              <div className="flex items-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISearchPreviewSection;