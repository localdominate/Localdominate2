import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, ExternalLink, FileText, CheckSquare, Lightbulb } from "lucide-react";
import HubNavigationBar from "@/components/blog/HubNavigationBar";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { resolveArticle, blogArticles } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

export interface HubArticleGroup {
  title: string;
  description: string;
  icon: string;
  slugs: string[];
}

export interface HubSummary {
  text: string;
  stats: { label: string; value: string }[];
}

export interface HubComparisonRow {
  label: string;
  cells: string[];
}

export interface HubComparisonTable {
  title: string;
  headers: string[];
  rows: HubComparisonRow[];
  footnote?: string;
}

export interface HubResource {
  label: string;
  href: string;
  type: "pillar" | "tool" | "checklist" | "guide";
}

interface TopicHubLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  heroIcon: React.ReactNode;
  groups: HubArticleGroup[];
  pillarLink?: { label: string; href: string };
  relatedHubs?: { label: string; href: string }[];
  jsonLd?: object;
  summary?: HubSummary;
  comparisonTable?: HubComparisonTable;
  resources?: HubResource[];
}

const resourceIcon = (type: HubResource["type"]) => {
  switch (type) {
    case "pillar": return <BookOpen className="w-4 h-4" />;
    case "tool": return <ExternalLink className="w-4 h-4" />;
    case "checklist": return <CheckSquare className="w-4 h-4" />;
    case "guide": return <FileText className="w-4 h-4" />;
  }
};

const resourceLabel = (type: HubResource["type"]) => {
  switch (type) {
    case "pillar": return "Pillar";
    case "tool": return "Tool";
    case "checklist": return "Checkliste";
    case "guide": return "Guide";
  }
};

const TopicHubLayout = ({
  title,
  metaTitle,
  metaDescription,
  heroDescription,
  heroIcon,
  groups,
  pillarLink,
  relatedHubs,
  jsonLd,
  summary,
  comparisonTable,
  resources,
}: TopicHubLayoutProps) => {
  const { language } = useLanguage();

  const resolveSlug = (slug: string) => {
    const article = blogArticles.find((a) => a.slug === slug);
    return article ? resolveArticle(article, language as Language) : null;
  };

  const totalArticles = groups.reduce((sum, g) => sum + g.slugs.length, 0);

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <StickyHeader />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <SiteBreadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: title },
              ]}
              includeSchema
            />
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {heroIcon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                  {heroDescription}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> {totalArticles} Artikel
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Zuletzt aktualisiert: März 2026
              </span>
            </div>
          </div>
        </section>

        {/* Summary */}
        {summary && (
          <section className="border-b border-border bg-card">
            <div className="container mx-auto px-4 max-w-5xl py-8">
              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{summary.text}</p>
              </div>
              {summary.stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {summary.stats.map((stat, i) => (
                    <div key={i} className="bg-background rounded-lg border border-border p-3 text-center">
                      <p className="text-xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Quick navigation */}
        <nav className="border-b border-border sticky top-16 bg-background/95 backdrop-blur z-30">
          <div className="container mx-auto px-4 max-w-5xl overflow-x-auto">
            <div className="flex gap-1 py-2">
              {groups.map((group, i) => (
                <a
                  key={i}
                  href={`#group-${i}`}
                  className="whitespace-nowrap px-3 py-1.5 text-sm rounded-full border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {group.icon} {group.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Article groups */}
        <div className="container mx-auto px-4 max-w-5xl py-12 space-y-16">
          {groups.map((group, gi) => (
            <section key={gi} id={`group-${gi}`} className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <span>{group.icon}</span> {group.title}
                </h2>
                <p className="text-muted-foreground mt-1">{group.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {group.slugs.map((slug) => {
                  const article = resolveSlug(slug);
                  if (!article) return null;
                  return (
                    <Link key={slug} to={`/blog/${slug}`}>
                      <Card className="h-full hover:border-primary/40 hover:shadow-md transition-all group">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">{article.icon}</span>
                            <div className="min-w-0">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                                {article.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {article.excerpt}
                              </p>
                              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                <span>{article.readingTime} Min.</span>
                                <span className="text-primary flex items-center gap-0.5 group-hover:gap-1 transition-all">
                                  Lesen <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Comparison table */}
          {comparisonTable && (
            <section className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {comparisonTable.title}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border min-w-[140px]">
                        {comparisonTable.headers[0]}
                      </th>
                      {comparisonTable.headers.slice(1).map((h, i) => (
                        <th key={i} className="text-left p-3 font-semibold text-foreground border-b border-border min-w-[120px]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="p-3 font-medium text-foreground border-b border-border/50">
                          {row.label}
                        </td>
                        {row.cells.map((cell, ci) => (
                          <td key={ci} className="p-3 text-muted-foreground border-b border-border/50">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {comparisonTable.footnote && (
                <p className="text-xs text-muted-foreground mt-2 italic">{comparisonTable.footnote}</p>
              )}
            </section>
          )}

          {/* Internal resource list */}
          {resources && resources.length > 0 && (
            <section className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                📚 Weiterführende Ressourcen
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {resources.map((res, i) => (
                  <Link
                    key={i}
                    to={res.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {resourceIcon(res.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-1">
                        {res.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{resourceLabel(res.type)}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related hubs */}
          {relatedHubs && relatedHubs.length > 0 && (
            <section className="border-t border-border pt-12">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Verwandte Topic Hubs
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedHubs.map((hub, i) => (
                  <Link
                    key={i}
                    to={hub.href}
                    className="px-4 py-2 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                  >
                    {hub.label} →
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TopicHubLayout;
