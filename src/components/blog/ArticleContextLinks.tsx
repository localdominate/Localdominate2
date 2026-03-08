import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, BookOpen, Layers, Link2 } from "lucide-react";
import {
  getHubsForArticle,
  getPillarForArticle,
  getSiblingArticles,
} from "@/data/internalLinkRegistry";
import {
  getAnchorText,
  getRotatedAnchor,
  getRequiredLinks,
} from "@/data/internalLinkingStrategy";
import { blogArticles, resolveArticle } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

interface ArticleContextLinksProps {
  articleSlug: string;
}

/**
 * Dynamic contextual navigation block rendered on every article.
 * Shows: parent pillar → parent hub(s) → sibling articles → lateral links.
 * Uses SEO-optimized anchor text from the linking strategy engine.
 */
const ArticleContextLinks = ({ articleSlug }: ArticleContextLinksProps) => {
  const { language } = useLanguage();
  const hubs = getHubsForArticle(articleSlug);
  const pillar = getPillarForArticle(articleSlug);
  const requiredLinks = getRequiredLinks(articleSlug);

  const resolve = (slug: string) => {
    const article = blogArticles.find((a) => a.slug === slug);
    return article ? resolveArticle(article, language as Language) : null;
  };

  if (hubs.length === 0 && !pillar) return null;

  const isDE = language === "de";

  // Group links by type
  const pillarLinks = requiredLinks.filter((l) => l.linkType === "pillar");
  const hubLinks = requiredLinks.filter((l) => l.linkType === "hub");
  const siblingLinks = requiredLinks.filter((l) => l.linkType === "sibling");
  const lateralLinks = requiredLinks.filter((l) => l.linkType === "lateral");

  return (
    <nav
      aria-label={isDE ? "Weiterführende Inhalte" : "Related content"}
      className="my-8 rounded-xl border border-border bg-muted/30 p-6 space-y-6"
    >
      {/* Pillar link */}
      {pillarLinks.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            {isDE ? "Pillar-Guide" : "Pillar Guide"}
          </p>
          {pillarLinks.map((link) => (
            <Link
              key={link.targetSlug}
              to={link.targetPath}
              className="group flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <span className="text-2xl">🏆</span>
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {link.anchor}
                </span>
              </div>
              <ArrowUp className="w-4 h-4 text-primary flex-shrink-0" />
            </Link>
          ))}
        </div>
      )}

      {/* Hub links */}
      {hubLinks.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {isDE
              ? `Dieser Artikel gehört zu ${hubLinks.length > 1 ? "diesen Hubs" : "diesem Hub"}`
              : `Part of ${hubLinks.length > 1 ? "these hubs" : "this hub"}`}
          </p>
          <div className="flex flex-wrap gap-2">
            {hubLinks.map((link) => {
              const hub = hubs.find((h) => h.slug === link.targetSlug);
              return (
                <Link
                  key={link.targetSlug}
                  to={link.targetPath}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                >
                  <span>{hub?.icon ?? "📂"}</span>
                  {link.anchor}
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Sibling + Lateral articles */}
      {(siblingLinks.length > 0 || lateralLinks.length > 0) && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
            <Link2 className="w-3.5 h-3.5" />
            {isDE ? "Verwandte Artikel" : "Related Articles"}
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[...siblingLinks, ...lateralLinks].slice(0, 5).map((link) => {
              const resolved = resolve(link.targetSlug);
              if (!resolved) return null;
              return (
                <Link
                  key={link.targetSlug}
                  to={link.targetPath}
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-card transition-colors"
                  title={link.anchor}
                >
                  <span className="text-lg flex-shrink-0">{resolved.icon}</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {link.anchor}
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
