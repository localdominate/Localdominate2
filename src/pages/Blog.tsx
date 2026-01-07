import { Link } from "react-router-dom";
import { ChevronRight, BookOpen } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/blog/ArticleCard";
import { blogArticles } from "@/data/blogArticles";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Local Dominator Blog",
    "description": "Expertenwissen für lokale Suchmaschinenoptimierung",
    "url": "https://localdominator.de/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator"
    }
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Local SEO Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertenwissen für mehr lokale Sichtbarkeit. Praktische Tipps und Strategien für Google Maps, Bewertungen und lokale Suchmaschinenoptimierung.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogArticles.map((article) => (
            <ArticleCard 
              key={article.slug} 
              article={article} 
              featured={article.featured}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
