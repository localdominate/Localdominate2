import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { blogArticles, getCategories, getArticleCountByCategory } from "@/data/blogArticles";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = useMemo(() => getCategories(), []);
  const articleCounts = useMemo(() => getArticleCountByCategory(), []);
  
  const filteredArticles = useMemo(() => {
    if (!activeCategory) return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const otherArticles = filteredArticles.filter(a => a.slug !== featuredArticle?.slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Local Dominator Blog",
    "description": "Expertenwissen für lokale Suchmaschinenoptimierung",
    "url": "https://localdominator.de/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator"
    },
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "datePublished": article.publishedAt,
      "dateModified": article.updatedAt,
      "url": `https://localdominator.de/blog/${article.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog - Local SEO Tipps & Strategien | Local Dominator"
        description="Expertenwissen für lokale Suchmaschinenoptimierung. Google Maps Ranking, Bewertungen, Local SEO Tipps für mehr lokale Kunden."
        canonicalUrl="https://localdominator.de/blog"
        keywords="local seo blog, google maps tipps, lokale seo strategien"
        jsonLd={blogSchema}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-5xl py-4">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Local Dominator
          </Link>
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
            Local SEO Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Expertenwissen für mehr lokale Sichtbarkeit. Praktische Tipps und Strategien für Google Maps, Bewertungen und lokale Suchmaschinenoptimierung.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            {blogArticles.length} Artikel verfügbar
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
                  Featured
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
                    {featuredArticle.readingTime} Min. Lesezeit →
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
            <p className="text-muted-foreground">Keine Artikel in dieser Kategorie gefunden.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;