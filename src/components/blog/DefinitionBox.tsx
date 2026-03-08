import { BookOpen } from "lucide-react";
import LexikonLink from "./LexikonLink";

interface DefinitionBoxProps {
  term: string;
  definition: string;
  examples?: string[];
  linkToLexikon?: boolean;
}

/**
 * A featured-snippet-optimized definition box for key SEO terms.
 * Uses concise paragraph form (40-60 words) starting with "[Term] ist/bezeichnet..."
 * Renders with data-featured-snippet and data-speakable for AI/voice extraction.
 */
const DefinitionBox = ({ term, definition, examples, linkToLexikon = true }: DefinitionBoxProps) => {
  return (
    <aside
      className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5 my-8 not-prose"
      role="definition"
      data-featured-snippet="true"
      data-speakable="true"
      data-ai-summary="true"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="h-5 w-5 text-primary shrink-0" />
        <h4 className="font-bold text-sm uppercase tracking-wide text-primary" itemProp="name">
          {linkToLexikon ? <LexikonLink term={term}>{`Definition: ${term}`}</LexikonLink> : `Definition: ${term}`}
        </h4>
      </div>
      <p
        className="text-foreground/90 text-[0.95rem] leading-relaxed mb-0"
        itemProp="description"
        data-featured-snippet="true"
        data-speakable="true"
      >
        {definition}
      </p>
      {examples && examples.length > 0 && (
        <ul className="mt-3 space-y-1">
          {examples.map((ex, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default DefinitionBox;
