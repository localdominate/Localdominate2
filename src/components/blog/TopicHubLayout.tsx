import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
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
}

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
            {pillarLink && (
              <Link
                to={pillarLink.href}
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-4"
              >
                ← {pillarLink.label}
              </Link>
            )}
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
