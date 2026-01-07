import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/LanguageSwitch";
import AuthorBox from "./AuthorBox";
import RelatedArticles from "./RelatedArticles";
import SocialShare from "./SocialShare";
import ReadingProgress from "./ReadingProgress";
import StickyTableOfContents from "./StickyTableOfContents";
import { ResolvedBlogArticle, getRelatedArticles } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface ArticleLayoutProps {
  article: ResolvedBlogArticle;
  children: ReactNode;
  additionalSchema?: object;
  tocItems?: TOCItem[];
}

const ArticleLayout = ({ article, children, additionalSchema, tocItems }: ArticleLayoutProps) => {
  const { language } = useLanguage();
  const relatedArticles = getRelatedArticles(article.slug, 3, language);
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Local Dominator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator",
      "url": "https://localdominator.de"
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://localdominator.de/blog/${article.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://localdominator.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://localdominator.de/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://localdominator.de/blog/${article.slug}`
      }
    ]
  };

  const combinedSchema = additionalSchema 
    ? [articleSchema, breadcrumbSchema, additionalSchema]
    : [articleSchema, breadcrumbSchema];

  const readingTimeText = language === "de" ? "Min. Lesezeit" : "min read";
  const updatedText = language === "de" ? "Aktualisiert" : "Updated";
  const dateLocale = language === "de" ? "de-DE" : "en-US";

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      
      {/* Sticky TOC for Desktop */}
      {tocItems && tocItems.length > 0 && (
        <StickyTableOfContents items={tocItems} />
      )}
      
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalUrl={`https://localdominator.de/blog/${article.slug}`}
        keywords={article.keywords.join(", ")}
        jsonLd={combinedSchema}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-4xl py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Local Dominator
          </Link>
        </div>
      </header>
      
      <LanguageSwitch />

      <main className="container max-w-4xl py-8 px-4">
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
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {article.readingTime} {readingTimeText}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishedAt).toLocaleDateString(dateLocale)}
            </span>
            {article.updatedAt !== article.publishedAt && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {updatedText}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-li:text-muted-foreground">
          {children}
        </article>

        {/* Social Share */}
        <div className="my-8 py-6 border-t border-b border-border">
          <SocialShare 
            url={`https://localdominator.de/blog/${article.slug}`}
            title={article.title}
            description={article.metaDescription}
          />
        </div>

        <AuthorBox />
        <RelatedArticles articles={relatedArticles} />
      </main>

      <Footer />
    </div>
  );
};

export default ArticleLayout;
