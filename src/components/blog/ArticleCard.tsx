import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { ResolvedBlogArticle } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

interface ArticleCardProps {
  article: ResolvedBlogArticle;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const { language } = useLanguage();
  
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`group block bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{article.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {article.readingTime} {language === "de" ? "Min. Lesezeit" : "min read"}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
          <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
            {language === "de" ? "Artikel lesen" : "Read article"}
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
