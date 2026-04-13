import { getArticleHook } from "@/data/articleHooks";
import { useLanguage } from "@/i18n/LanguageContext";

interface ArticleHookProps {
  slug: string;
}

/**
 * Renders a compelling intro hook paragraph above the article content.
 * Pulls from centralized articleHooks data. Styled as a bold lead paragraph
 * with larger font and primary accent border.
 */
const ArticleHook = ({ slug }: ArticleHookProps) => {
  const { language } = useLanguage();
  const hook = getArticleHook(slug, language);

  if (!hook) return null;

  return (
    <div 
      className="article-intro-hook mb-8 pl-4 border-l-4 border-primary bg-primary/5 rounded-r-lg py-4 pr-4"
      data-speakable="true"
      data-ai-summary="true"
    >
      <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground m-0">
        {hook}
      </p>
    </div>
  );
};

export default ArticleHook;
