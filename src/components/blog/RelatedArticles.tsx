import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlogArticle } from "@/data/blogArticles";

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Weitere Artikel</h2>
      <div className="grid gap-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="group flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="text-2xl">{article.icon}</span>
            <div className="flex-1">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground">{article.readingTime} Min. Lesezeit</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
