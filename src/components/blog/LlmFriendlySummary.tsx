import { useLanguage } from "@/i18n/LanguageContext";
import { getLlmSummary } from "@/data/llmPageSummaries";
import { Bot, BookOpen, Users, HelpCircle, Quote, Hash, Link as LinkIcon } from "lucide-react";

interface LlmFriendlySummaryProps {
  slug: string;
}

/**
 * LLM-friendly structured summary at the end of long pages.
 * Designed for AI crawlers (GPTBot, PerplexityBot, Google-Extended) to extract
 * clean, structured information for citations and answers.
 * Hidden from visual UI but accessible to screen readers and crawlers.
 * Also rendered visually as a collapsible "AI Summary" block for transparency.
 */
const LlmFriendlySummary = ({ slug }: LlmFriendlySummaryProps) => {
  const isEn = useLanguage().language === "en";
  const summary = getLlmSummary(slug);
  if (!summary) return null;

  return (
    <>
      {/* Hidden structured data for AI crawlers — semantic HTML, not display:none */}
      <div
        className="sr-only"
        data-ai-summary="structured"
        data-speakable="true"
        itemScope
        itemType="https://schema.org/Article"
        aria-label="AI-readable page summary"
      >
        <meta itemProp="headline" content={summary.primaryQuestion} />
        <div itemProp="abstract">{summary.directAnswer}</div>
        <div itemProp="description">{summary.summary}</div>
        <ul>
          {summary.keyFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Visible summary block */}
      <section
        className="my-10 not-prose"
        data-ai-summary="page-summary"
        aria-label={isEn ? "Page summary for AI systems" : "Seitenzusammenfassung für AI-Systeme"}
      >
        <div className="border border-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500/10 via-primary/5 to-violet-500/10 border-b border-border px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base">📋 {isEn ? "Page Summary" : "Seitenzusammenfassung"}</h3>
                <p className="text-xs text-muted-foreground">Strukturiert für AI-Systeme, Voice Search & Schnellübersicht</p>
              </div>
              <span className="ml-auto text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {summary.pageType}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* Primary Q&A — the most important part for AI extraction */}
            <div className="bg-muted/40 rounded-xl p-4" data-speakable="true">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground text-sm">{isEn ? "Core Question" : "Kernfrage"}</h4>
              </div>
              <p className="text-sm font-medium text-foreground mb-2">
                {summary.primaryQuestion}
              </p>
              <div className="bg-background border border-border rounded-lg p-3">
                <p className="text-sm text-foreground leading-relaxed">
                  {summary.directAnswer}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground text-sm">{isEn ? "Summary" : "Zusammenfassung"}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {summary.summary}
              </p>
            </div>

            {/* Key Facts */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-foreground text-sm">{isEn ? "Key Facts" : "Kernfakten"}</h4>
              </div>
              <ul className="space-y-1.5">
                {summary.keyFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Quote className="w-3 h-3 text-emerald-500 mt-1 shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta row */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-card border border-border rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-foreground">{isEn ? "Target Audience" : "Zielgruppe"}</span>
                </div>
                <p className="text-xs text-muted-foreground">{summary.targetAudience}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <LinkIcon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-foreground">Verwandte Themen</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {summary.relatedTopics.map((topic, i) => (
                    <span key={i} className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LlmFriendlySummary;
