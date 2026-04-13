import { getArticleConclusion } from "@/data/articleConclusions";
import { useLanguage } from "@/i18n/LanguageContext";
import { CheckCircle, ArrowRight, Lightbulb } from "lucide-react";

interface ArticleConclusionProps {
  slug: string;
}

/**
 * Renders a structured conclusion block at the end of article content.
 * Includes a summary paragraph and actionable next-step recommendations.
 */
const ArticleConclusion = ({ slug }: ArticleConclusionProps) => {
  const { language } = useLanguage();
  const conclusion = getArticleConclusion(slug, language);

  if (!conclusion) return null;

  const headingText = language === "de" ? "Fazit & nächste Schritte" : "Summary & Next Steps";
  const summaryLabel = language === "de" ? "Zusammenfassung" : "Summary";
  const nextStepsLabel = language === "de" ? "Deine nächsten Schritte" : "Your Next Steps";

  return (
    <section className="mt-12 mb-8 not-prose" aria-label={headingText}>
      <div className="bg-card border-2 border-primary/20 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 px-6 py-4 flex items-center gap-3">
          <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />
          <h2 className="text-xl font-bold text-foreground m-0">{headingText}</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {summaryLabel}
            </p>
            <p className="text-base leading-relaxed text-foreground">
              {conclusion.summary}
            </p>
          </div>

          {/* Next Steps */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {nextStepsLabel}
            </p>
            <ol className="space-y-3">
              {conclusion.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleConclusion;
