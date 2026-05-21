import { MapPin, User, CalendarClock, Clock, Languages, BookOpen } from "lucide-react";

interface KeyFactsBlockProps {
  topic: string;
  category: string;
  author: string;
  updatedAt: string;
  readingTime: number;
  language: "de" | "en" | "ar";
  areaServed?: string;
}

/**
 * Scannable, AI-extractable "Auf einen Blick" fact strip.
 *
 * Built for Generative Engine Optimization (GEO):
 *  - Short, atomic facts that AI Overviews / Perplexity / ChatGPT can cite verbatim.
 *  - `data-speakable="true"` so it's eligible for SpeakableSpecification.
 *  - Each fact carries an `itemProp` that maps to Schema.org Article fields,
 *    reinforcing the JSON-LD with on-page microdata.
 */
const LABELS = {
  de: {
    heading: "Auf einen Blick",
    topic: "Thema",
    region: "Region",
    author: "Autor",
    updated: "Aktualisiert",
    reading: "Lesezeit",
    language: "Sprache",
    minutes: "Min.",
    lang: "Deutsch",
  },
  en: {
    heading: "At a glance",
    topic: "Topic",
    region: "Region",
    author: "Author",
    updated: "Updated",
    reading: "Reading time",
    language: "Language",
    minutes: "min",
    lang: "English",
  },
  ar: {
    heading: "نظرة سريعة",
    topic: "الموضوع",
    region: "المنطقة",
    author: "الكاتب",
    updated: "آخر تحديث",
    reading: "وقت القراءة",
    language: "اللغة",
    minutes: "د",
    lang: "العربية",
  },
} as const;

const KeyFactsBlock = ({
  topic,
  category,
  author,
  updatedAt,
  readingTime,
  language,
  areaServed,
}: KeyFactsBlockProps) => {
  const t = LABELS[language] ?? LABELS.de;

  const items: { icon: typeof MapPin; label: string; value: string; itemProp?: string }[] = [
    { icon: BookOpen, label: t.topic, value: category, itemProp: "about" },
    ...(areaServed ? [{ icon: MapPin, label: t.region, value: areaServed, itemProp: "areaServed" as const }] : []),
    { icon: User, label: t.author, value: author, itemProp: "author" },
    { icon: CalendarClock, label: t.updated, value: updatedAt, itemProp: "dateModified" },
    { icon: Clock, label: t.reading, value: `${readingTime} ${t.minutes}`, itemProp: "timeRequired" },
    { icon: Languages, label: t.language, value: t.lang, itemProp: "inLanguage" },
  ];

  return (
    <aside
      className="not-prose my-6 rounded-2xl border border-border bg-muted/30 p-4 md:p-5"
      data-ai-summary="key-facts"
      data-speakable="true"
      aria-label={`${t.heading}: ${topic}`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        {t.heading}
      </div>
      <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-start gap-2 min-w-0">
              <Icon className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </dt>
                <dd
                  className="text-sm font-medium text-foreground truncate"
                  itemProp={item.itemProp}
                  title={item.value}
                >
                  {item.value}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </aside>
  );
};

export default KeyFactsBlock;