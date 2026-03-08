import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ResolvedBlogArticle } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

interface RelatedArticlesProps {
  articles: ResolvedBlogArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  const { language } = useLanguage();
  
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        {language === "de" ? "Weiterführende Artikel" : "Related Articles"}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        {language === "de"
          ? "Diese Artikel könnten dich auch interessieren"
          : "You might also find these articles helpful"}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <Link key={article.slug} to={`/blog/${article.slug}`} className="group">
            <Card className="h-full hover:border-primary/40 hover:shadow-md transition-all">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0">{article.icon}</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2 flex-1">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime} {language === "de" ? "Min." : "min"}
                  </span>
                  <span className="text-primary flex items-center gap-0.5 group-hover:gap-1 transition-all font-medium">
                    {language === "de" ? "Lesen" : "Read"}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
