import { Sparkles } from "lucide-react";

interface QuickAnswerBoxProps {
  /** The direct answer (40-80 words ideal for AI Overviews / Perplexity / ChatGPT). */
  answer: string;
  /** Optional H1 / topic the answer responds to — used as aria-label. */
  topic?: string;
}

/**
 * "Answer-first" block rendered at the top of every article.
 *
 * Built for Generative Engine Optimization (GEO):
 *  - First content node AI crawlers (GPTBot, PerplexityBot, ClaudeBot,
 *    Google-Extended) encounter inside the article body.
 *  - Marked `data-speakable` + `itemProp="abstract"` so it's picked up
 *    by SpeakableSpecification and Article schema.
 *  - 1-3 sentence direct answer matching the Featured Snippet length
 *    (~40-80 words) that AI Overviews extract verbatim.
 */
const QuickAnswerBox = ({ answer, topic }: QuickAnswerBoxProps) => {
  if (!answer) return null;

  return (
    <aside
      className="not-prose my-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] via-background to-background p-5 md:p-6"
      data-ai-summary="quick-answer"
      data-speakable="true"
      aria-label={topic ? `Schnellantwort: ${topic}` : "Schnellantwort"}
      itemProp="abstract"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Direkte Antwort
        </span>
      </div>
      <p className="text-base md:text-[17px] leading-relaxed text-foreground font-medium">
        {answer}
      </p>
    </aside>
  );
};

export default QuickAnswerBox;
