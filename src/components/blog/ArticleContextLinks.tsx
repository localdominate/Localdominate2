import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, BookOpen, Layers } from "lucide-react";
import {
  getHubsForArticle,
  getPillarForArticle,
  getSiblingArticles,
} from "@/data/internalLinkRegistry";
import { blogArticles, resolveArticle } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

interface ArticleContextLinksProps {
  articleSlug: string;
}

/**
 * Dynamic contextual navigation block rendered on every article.
 * Shows: parent pillar → parent hub(s) → sibling articles.
 * Strengthens internal link equity and aids topical authority.
 */
const ArticleContextLinks = ({ articleSlug }: ArticleContextLinksProps) => {
  const { language } = useLanguage();
  const hubs = getHubsForArticle(articleSlug);
  const pillar = getPillarForArticle(articleSlug);
  const siblingsSlugs = getSiblingArticles(articleSlug, 4);

  const resolve = (slug: string) => {
    const article = blogArticles.find((a) => a.slug === slug);
    return article ? resolveArticle(article, language as Language) : null;
  };

  if (hubs.length === 0 && !pillar) return null;

  const isDE = language === "de";

  return (
    <nav
      aria-label={isDE ? "Weiterführende Inhalte" : "Related content"}
      className="my-8 rounded-xl border border-border bg-muted/30 p-6 space-y-6"
    >
      {/* Pillar link */}
      {pillar && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            {isDE ? "Pillar-Guide" : "Pillar Guide"}
          </p>
          <Link
            to={pillar.path}
            className="group flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
          >
            <span className="text-2xl">{pillar.icon}</span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                {pillar.title}
              </span>
            </div>
            <ArrowUp className="w-4 h-4 text-primary flex-shrink-0" />
          </Link>
        </div>
      )}

      {/* Hub links */}
      {hubs.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {isDE
              ? `Dieser Artikel gehört zu ${hubs.length > 1 ? "diesen Hubs" : "diesem Hub"}`
              : `Part of ${hubs.length > 1 ? "these hubs" : "this hub"}`}
          </p>
          <div className="flex flex-wrap gap-2">
            {hubs.map((hub) => (
              <Link
                key={hub.slug}
                to={hub.path}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
              >
                <span>{hub.icon}</span>
                {hub.title}
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sibling articles */}
      {siblingsSlugs.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {isDE ? "Verwandte Artikel" : "Related Articles"}
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {siblingsSlugs.map((slug) => {
              const resolved = resolve(slug);
              if (!resolved) return null;
              return (
                <Link
                  key={slug}
                  to={`/blog/${slug}`}
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-card transition-colors"
                >
                  <span className="text-lg flex-shrink-0">{resolved.icon}</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {resolved.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ArticleContextLinks;
