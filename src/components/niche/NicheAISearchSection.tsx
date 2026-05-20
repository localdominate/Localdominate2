import { Sparkles, MessageSquareQuote, MapPin, BarChart3 } from "lucide-react";
import type { NicheConfig } from "@/data/nicheConfigs";
import SectionFadeIn from "./SectionFadeIn";

interface Props {
  config: NicheConfig;
}

/**
 * AI Visibility / GEO section for niche landing pages.
 * Renders an AnswerBlock-style speakable summary, local entity grounding,
 * AI-search query examples and local benchmarks — optimized for retrieval
 * by ChatGPT, Gemini, Perplexity and Google AI Overviews.
 */
const NicheAISearchSection = ({ config: c }: Props) => {
  if (!c.aiSearch) return null;
  const { queries, localEntities, aiOverviewAnswer, benchmarks } = c.aiSearch;

  return (
    <SectionFadeIn>
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI Visibility für {c.nicheLabel} in {c.city}
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
              So wirst du in ChatGPT, Gemini & Google AI Overviews gefunden
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Klassisches Google-Ranking reicht 2026 nicht mehr. Wir optimieren deine Sichtbarkeit
              auch in AI-generierten Antworten.
            </p>
          </div>

          {/* AI Overview answer block — speakable, schema-tagged for retrieval */}
          <div
            data-ai-answer="true"
            itemScope
            itemType="https://schema.org/Question"
            className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 mb-10 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <MessageSquareQuote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span itemProp="name" className="font-semibold text-sm md:text-base text-muted-foreground">
                Wie ranken {c.nicheLabel} in {c.city} in AI-Suchergebnissen?
              </span>
            </div>
            <div
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text" className="speakable text-base md:text-lg leading-relaxed text-foreground">
                {aiOverviewAnswer}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* AI-search queries */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Typische AI-Suchanfragen
              </h3>
              <ul className="space-y-3">
                {queries.map((q, i) => (
                  <li key={i} className="text-sm md:text-base text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    „{q}"
                  </li>
                ))}
              </ul>
            </div>

            {/* Local entities */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Lokale Entitäten in {c.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {localEntities.map((e, i) => (
                  <span
                    key={i}
                    className="bg-primary/8 text-primary text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Diese Stadtteile & Landmarks nutzen wir, um deine Praxis semantisch zu verankern – ein
                Schlüsselsignal für AI-Retrieval.
              </p>
            </div>
          </div>

          {/* Local benchmarks */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Lokale AI-Visibility-Benchmarks für {c.nicheLabel} in {c.city}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benchmarks.map((b, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-muted/30">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{b.value}</div>
                  <div className="text-xs text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Illustrative Benchmarks auf Basis interner Auswertungen. Genaue Werte für deine
              Praxis erhältst du im kostenlosen Audit.
            </p>
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
};

export default NicheAISearchSection;