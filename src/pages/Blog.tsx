import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/LanguageSwitch";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { getAllArticles, getCategories, getArticleCountByCategory } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const Blog = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const allArticles = useMemo(() => getAllArticles(language), [language]);
  const categories = useMemo(() => getCategories(language), [language]);
  const articleCounts = useMemo(() => getArticleCountByCategory(language), [language]);
  
  const filteredArticles = useMemo(() => {
    if (!activeCategory) return allArticles;
    return allArticles.filter(a => a.category === activeCategory);
  }, [activeCategory, allArticles]);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const otherArticles = filteredArticles.filter(a => a.slug !== featuredArticle?.slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Local Dominator Blog",
    "description": language === "de" 
      ? "Expertenwissen für lokale Suchmaschinenoptimierung"
      : "Expert knowledge for local search engine optimization",
    "url": "https://localdominator.de/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator"
    },
    "blogPost": allArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "datePublished": article.publishedAt,
      "dateModified": article.updatedAt,
      "url": `https://localdominator.de/blog/${article.slug}`
    }))
  };

  const texts = {
    de: {
      pageTitle: "Blog - Local SEO Tipps & Strategien | Local Dominator",
      pageDescription: "Expertenwissen für lokale Suchmaschinenoptimierung. Google Maps Ranking, Bewertungen, Local SEO Tipps für mehr lokale Kunden.",
      heroTitle: "Local SEO Blog",
      heroDescription: "Expertenwissen für mehr lokale Sichtbarkeit. Praktische Tipps und Strategien für Google Maps, Bewertungen und lokale Suchmaschinenoptimierung.",
      articlesAvailable: "Artikel verfügbar",
      featured: "Featured",
      readingTime: "Min. Lesezeit",
      noArticles: "Keine Artikel in dieser Kategorie gefunden.",
    },
    en: {
      pageTitle: "Blog - Local SEO Tips & Strategies | Local Dominator",
      pageDescription: "Expert knowledge for local search engine optimization. Google Maps ranking, reviews, local SEO tips for more local customers.",
      heroTitle: "Local SEO Blog",
      heroDescription: "Expert knowledge for more local visibility. Practical tips and strategies for Google Maps, reviews, and local search engine optimization.",
      articlesAvailable: "articles available",
      featured: "Featured",
      readingTime: "min read",
      noArticles: "No articles found in this category.",
    }
  };

  const t = texts[language];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t.pageTitle}
        description={t.pageDescription}
        canonicalUrl="https://localdominator.de/blog"
        keywords="local seo blog, google maps tips, local seo strategies"
        jsonLd={blogSchema}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-5xl py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Local Dominator
          </Link>
          <LanguageSwitch variant="inline" showBlogLink={false} />
        </div>
      </header>

      <main className="container max-w-5xl py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            {t.heroDescription}
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            {allArticles.length} {t.articlesAvailable}
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          articleCounts={articleCounts}
        />

        {/* Featured Article */}
        {featuredArticle && !activeCategory && (
          <div className="mb-8">
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="group block bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {t.featured}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {featuredArticle.category}
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-5xl">{featuredArticle.icon}</span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-3">{featuredArticle.excerpt}</p>
                  <span className="text-sm text-primary font-medium">
                    {featuredArticle.readingTime} {t.readingTime} →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory ? filteredArticles : otherArticles).map((article) => (
            <ArticleCard 
              key={article.slug} 
              article={article}
            />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.noArticles}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
