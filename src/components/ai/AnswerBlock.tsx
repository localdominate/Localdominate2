import { useLanguage } from "@/i18n/LanguageContext";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface Props {
  question: string;
  children: ReactNode;
  source?: string;
  className?: string;
}

/**
 * AnswerBlock — AI-retrievable, quotable answer card.
 * Annotated with data-ai-summary + speakable selectors so LLMs (ChatGPT,
 * Gemini, Perplexity, Claude) and Google AI Overviews can extract a
 * compact, attributable answer.
 */
const AnswerBlock = ({ question, children, source = "Local Dominator", className = "" }: Props) => {
  const isEn = useLanguage().language === "en";
  return (
    <div
      className={`rounded-2xl border border-primary/15 bg-primary/[0.03] p-5 md:p-6 ${className}`}
      data-ai-answer="true"
      data-ai-summary={question}
      itemScope
      itemType="https://schema.org/Question"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span itemProp="name">{question}</span>
      </div>
      <div
        className="text-sm md:text-base text-foreground leading-relaxed speakable"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <div itemProp="text">{children}</div>
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        {isEn ? "Source:" : "Quelle:"} <span className="font-medium text-foreground">{source}</span> · localdominate.org
      </p>
    </div>
  );
};

export default AnswerBlock;