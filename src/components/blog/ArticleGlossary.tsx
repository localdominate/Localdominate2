import { getGlossaryTerms } from "@/data/articleDefinitions";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleGlossaryProps {
  slug: string;
}

/**
 * Renders a mini-glossary of key terms at the end of an article.
 * Uses DefinedTerm schema for each term and links to lexikon where available.
 * Designed for AI extraction with data-ai-summary and data-speakable attributes.
 */
const ArticleGlossary = ({ slug }: ArticleGlossaryProps) => {
  const terms = getGlossaryTerms(slug);
  if (terms.length === 0) return null;

  return (
    <section
      className="my-10 not-prose"
      data-ai-summary="glossary"
      data-speakable="true"
      aria-label="Glossar der wichtigsten Begriffe"
    >
      <div className="border border-border rounded-xl overflow-hidden">
        <div className="bg-primary/5 border-b border-border px-5 py-3 flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground text-sm">Glossar: Wichtige Begriffe</h3>
          <span className="ml-auto text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {terms.length} Begriffe
          </span>
        </div>
        <dl className="divide-y divide-border">
          {terms.map((t, i) => (
            <div
              key={i}
              className="px-5 py-3 flex flex-col sm:flex-row sm:gap-4"
              itemScope
              itemType="https://schema.org/DefinedTerm"
            >
              <dt className="font-semibold text-foreground text-sm sm:w-44 shrink-0" itemProp="name">
                {t.lexikonSlug ? (
                  <Link
                    to={`/lexikon/${t.lexikonSlug}`}
                    className="text-primary hover:underline"
                  >
                    {t.term}
                  </Link>
                ) : (
                  t.term
                )}
              </dt>
              <dd className="text-sm text-muted-foreground leading-relaxed" itemProp="description">
                {t.definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ArticleGlossary;
