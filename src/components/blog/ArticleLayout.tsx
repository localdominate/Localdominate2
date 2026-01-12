import { ReactNode, useEffect, useRef, useState } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { getSessionId } from "@/lib/sessionManager";
import { useArticleEngagement } from "@/hooks/useArticleEngagement";
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
  additionalSchema?: object | object[];
  tocItems?: TOCItem[];
  /** For YMYL articles - adds reviewedBy schema */
  reviewedBy?: {
    name: string;
    credentials: string;
    reviewDate: string;
  };
  /** Article type for specialized schema */
  articleType?: 'standard' | 'medical' | 'legal' | 'financial';
}

const ArticleLayout = ({ 
  article, 
  children, 
  additionalSchema, 
  tocItems,
  reviewedBy,
  articleType = 'standard'
}: ArticleLayoutProps) => {
  const { language } = useLanguage();
  const relatedArticles = getRelatedArticles(article.slug, 3, language);
  const hasTrackedView = useRef(false);
  const [viewId, setViewId] = useState<string | null>(null);
  
  // Use engagement tracking hook
  useArticleEngagement(viewId, article.readingTime);
  
  // Track article view and get view ID for engagement tracking
  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    
    const sessionId = getSessionId();
    const device = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';
    
    supabase.from('blog_article_views').insert({
      article_slug: article.slug,
      article_title: article.title,
      session_id: sessionId,
      page_path: window.location.pathname,
      referrer: document.referrer || null,
      device
    })
    .select('id')
    .single()
    .then(({ data, error }) => {
      if (error) {
        console.error('[ArticleView] Error tracking view:', error);
      } else {
        console.log(`[ArticleView] Tracked view for: ${article.slug}, ID: ${data?.id}`);
        if (data?.id) {
          setViewId(data.id);
        }
      }
    });
  }, [article.slug, article.title]);
  
  // Dynamic OG Image based on article slug
  const getOgImage = (slug: string): string => {
    const imageMap: Record<string, string> = {
      'google-maps-ranking-verbessern': 'https://localdominator.de/assets/blog/google-maps-ranking.jpg',
      'google-bewertungen-bekommen': 'https://localdominator.de/assets/blog/google-bewertungen.jpg',
      'google-my-business-optimieren': 'https://localdominator.de/assets/blog/google-my-business.jpg',
      'local-seo-audit-checkliste': 'https://localdominator.de/assets/blog/local-seo-audit.jpg',
      'local-seo-handwerker': 'https://localdominator.de/assets/blog/local-seo-handwerker.jpg',
      'local-seo-keywords-finden': 'https://localdominator.de/assets/blog/local-seo-keywords.jpg',
      'local-seo-fuer-restaurants': 'https://localdominator.de/assets/blog/local-seo-restaurant.jpg',
      'lokale-suchmaschinenoptimierung-2026': 'https://localdominator.de/assets/blog/lokale-seo-2026.jpg',
      'nap-konsistenz-local-seo': 'https://localdominator.de/assets/blog/nap-konsistenz.jpg',
    };
    return imageMap[slug] || 'https://localdominator.de/og-image.png';
  };

  const articleOgImage = getOgImage(article.slug);
  
  // Author/Organization Schema
  const authorSchema = {
    "@type": "Organization",
    "@id": "https://localdominator.de/#organization",
    "name": "Local Dominator",
    "url": "https://localdominator.de",
    "logo": {
      "@type": "ImageObject",
      "url": "https://localdominator.de/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/localdominator",
      "https://linkedin.com/company/localdominator"
    ]
  };

  // Expert reviewer for YMYL articles
  const reviewerSchema = reviewedBy ? {
    "@type": "Person",
    "name": reviewedBy.name,
    "jobTitle": reviewedBy.credentials,
    "worksFor": authorSchema
  } : null;

  // Determine WebPage type based on article type
  const getWebPageType = () => {
    switch (articleType) {
      case 'medical': return 'MedicalWebPage';
      case 'legal': return 'WebPage';
      case 'financial': return 'WebPage';
      default: return 'WebPage';
    }
  };

  // Enhanced Article Schema for AI Systems (ChatGPT, Perplexity, etc.)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": articleType === 'medical' ? 'MedicalWebPage' : 'Article',
    "@id": `https://localdominator.de/blog/${article.slug}#article`,
    "headline": article.title,
    "name": article.title,
    "description": article.metaDescription,
    "articleBody": article.excerpt,
    "wordCount": article.readingTime * 200,
    "author": authorSchema,
    "publisher": {
      "@type": "Organization",
      "@id": "https://localdominator.de/#organization",
      "name": "Local Dominator",
      "url": "https://localdominator.de",
      "logo": {
        "@type": "ImageObject",
        "url": "https://localdominator.de/logo.png"
      }
    },
    ...(reviewerSchema && {
      "reviewedBy": reviewerSchema,
      "lastReviewed": reviewedBy?.reviewDate
    }),
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://localdominator.de/blog/${article.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": articleOgImage,
      "width": 1200,
      "height": 630
    },
    "inLanguage": language === "de" ? "de-DE" : "en-US",
    "isPartOf": {
      "@id": "https://localdominator.de/#website"
    },
    "about": {
      "@type": "Thing",
      "name": article.category
    },
    "keywords": article.keywords.join(", "),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".article-intro", "meta[name='description']"]
    },
    "citation": article.keywords.slice(0, 3).map(keyword => ({
      "@type": "CreativeWork",
      "name": keyword
    }))
  };

  // WebPage Schema for the article page (uses specialized type for YMYL)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": getWebPageType(),
    "@id": `https://localdominator.de/blog/${article.slug}#webpage`,
    "url": `https://localdominator.de/blog/${article.slug}`,
    "name": article.title,
    "description": article.metaDescription,
    "isPartOf": {
      "@id": "https://localdominator.de/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": articleOgImage
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    ...(reviewerSchema && {
      "reviewedBy": reviewerSchema,
      "lastReviewed": reviewedBy?.reviewDate
    }),
    "breadcrumb": {
      "@id": `https://localdominator.de/blog/${article.slug}#breadcrumb`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".article-intro", "meta[name='description']"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://localdominator.de/blog/${article.slug}#breadcrumb`,
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

  // Combine all schemas, flatten arrays from additionalSchema
  const buildCombinedSchema = () => {
    const baseSchemas = [articleSchema, webPageSchema, breadcrumbSchema];
    
    if (!additionalSchema) return baseSchemas;
    
    // If additionalSchema is an array, spread it; otherwise add as single item
    if (Array.isArray(additionalSchema)) {
      return [...baseSchemas, ...additionalSchema];
    }
    return [...baseSchemas, additionalSchema];
  };

  const combinedSchema = buildCombinedSchema();

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
        ogImage={articleOgImage}
        keywords={article.keywords.join(", ")}
        jsonLd={combinedSchema}
        ogType="article"
        articlePublishedTime={article.publishedAt}
        articleModifiedTime={article.updatedAt}
        articleSection={article.category}
        lang={language}
        alternateUrls={{
          de: `https://localdominator.de/blog/${article.slug}`,
          en: `https://localdominator.de/blog/${article.slug}?lang=en`
        }}
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
          <LanguageSwitch variant="inline" showBlogLink={false} />
        </div>
      </header>

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
