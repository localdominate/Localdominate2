import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/LanguageSwitch";
import AuthorBox from "./AuthorBox";
import { getArticleAuthor } from "@/data/authorProfiles";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";
import ArticleContextLinks from "./ArticleContextLinks";
import RelatedArticles from "./RelatedArticles";
import MobileArticleCTA from "./MobileArticleCTA";
import SocialShare from "./SocialShare";
import ReadingProgress from "./ReadingProgress";
import StickyTableOfContents from "./StickyTableOfContents";
import LastReviewedBadge from "./LastReviewedBadge";
import ArticleHook from "./ArticleHook";
import { ResolvedBlogArticle, getRelatedArticles } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { getSessionId } from "@/lib/sessionManager";
import { useArticleEngagement } from "@/hooks/useArticleEngagement";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  article: ResolvedBlogArticle;
  children: ReactNode;
  additionalSchema?: object | object[];
  tocItems?: TOCItem[];
  /** FAQ items for FAQPage schema generation */
  faqItems?: FAQItem[];
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
  faqItems,
  reviewedBy,
  articleType = 'standard'
}: ArticleLayoutProps) => {
  const { language } = useLanguage();
  const relatedArticles = getRelatedArticles(article.slug, 6, language);
  const hasTrackedView = useRef(false);
  const [viewId, setViewId] = useState<string | null>(null);
  const articleContentRef = useRef<HTMLElement>(null);
  const [autoTocItems, setAutoTocItems] = useState<TOCItem[]>([]);
  const [activeTocId, setActiveTocId] = useState<string>("");
  
  // Use engagement tracking hook
  useArticleEngagement(viewId, article.readingTime);

  // Auto-generate TOC from h2 headings if no tocItems provided
  useEffect(() => {
    if (tocItems && tocItems.length > 0) return;
    if (!articleContentRef.current) return;
    
    const headings = articleContentRef.current.querySelectorAll('h2[id], section[id] > h2');
    const items: TOCItem[] = [];
    headings.forEach((heading) => {
      const id = heading.id || heading.parentElement?.id;
      if (id) {
        items.push({ id, title: heading.textContent?.replace(/^[^\w\s]*\s*/, '') || '' });
      }
    });
    if (items.length > 2) setAutoTocItems(items);
  }, [children, tocItems]);

  // Active section tracking for inline TOC
  const effectiveTocItems = tocItems && tocItems.length > 0 ? tocItems : autoTocItems;
  
  useEffect(() => {
    if (effectiveTocItems.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const closest = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveTocId(closest.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    effectiveTocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [effectiveTocItems]);

  // Auto-inject AI-readability attributes on all article sections
  useEffect(() => {
    if (!articleContentRef.current) return;
    const sections = articleContentRef.current.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (!section.hasAttribute('data-ai-summary')) {
        section.setAttribute('data-ai-summary', 'true');
      }
    });
    sections.forEach((section) => {
      const firstP = section.querySelector('p');
      if (firstP && !firstP.hasAttribute('data-speakable')) {
        firstP.setAttribute('data-speakable', 'true');
      }
    });
  }, [children]);
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
  
  // Dynamic OG Image - auto-generate from slug, fallback to default
  const getOgImage = (slug: string): string => {
    // Try the slug directly as image filename
    const possibleImage = `https://localdominate.org/images/blog/${slug}.jpg`;
    return possibleImage;
  };

  const articleOgImage = getOgImage(article.slug);
  
  // Author Profile & Schema
  const articleAuthor = getArticleAuthor(article.slug);
  const authorSchema = {
    "@type": "Person" as const,
    "@id": `https://localdominate.org/#person-${articleAuthor.slug}`,
    "name": articleAuthor.name,
    "jobTitle": articleAuthor.schemaOrg.jobTitle,
    "worksFor": {
      "@type": "Organization",
      "@id": "https://localdominate.org/#organization",
      "name": "Local Dominator",
      "url": "https://localdominate.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://localdominate.org/logo.png",
        "width": 512,
        "height": 512
      }
    },
    "knowsAbout": articleAuthor.schemaOrg.knowsAbout,
    "sameAs": articleAuthor.schemaOrg.sameAs,
  };

  const publisherSchema = {
    "@type": "Organization",
    "@id": "https://localdominate.org/#organization",
    "name": "Local Dominator",
    "url": "https://localdominate.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://localdominate.org/logo.png"
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
    "worksFor": publisherSchema
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
    "@id": `https://localdominate.org/blog/${article.slug}#article`,
    "headline": article.title,
    "name": article.title,
    "description": article.metaDescription,
    "articleBody": article.excerpt,
    "wordCount": article.readingTime * 200,
    "author": authorSchema,
    "publisher": publisherSchema,
    ...(reviewerSchema && {
      "reviewedBy": reviewerSchema,
      "lastReviewed": reviewedBy?.reviewDate
    }),
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    ...(article.lastReviewedAt && { "lastReviewed": article.lastReviewedAt }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://localdominate.org/blog/${article.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": articleOgImage,
      "width": 1200,
      "height": 630
    },
    "inLanguage": language === "de" ? "de-DE" : "en-US",
    "isPartOf": {
      "@id": "https://localdominate.org/#website"
    },
    "about": {
      "@type": "Thing",
      "name": article.category
    },
    "keywords": article.keywords.join(", "),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1", 
        ".key-takeaways",
        ".article-intro",
        "[data-speakable='true']"
      ],
      "xpath": [
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "usageInfo": "https://localdominate.org/llms.txt",
    "creditText": "Quelle: Local Dominator (localdominate.org)",
    "copyrightNotice": "© Local Dominator - Zitieren mit Quellenangabe erlaubt",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "acquireLicensePage": "https://localdominate.org/llms.txt",
    "citation": article.keywords.slice(0, 3).map(keyword => ({
      "@type": "CreativeWork",
      "name": keyword
    }))
  };

  // WebPage Schema for the article page (uses specialized type for YMYL)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": getWebPageType(),
    "@id": `https://localdominate.org/blog/${article.slug}#webpage`,
    "url": `https://localdominate.org/blog/${article.slug}`,
    "name": article.title,
    "description": article.metaDescription,
    "isPartOf": {
      "@id": "https://localdominate.org/#website"
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
      "@id": `https://localdominate.org/blog/${article.slug}#breadcrumb`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".article-intro", "meta[name='description']"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://localdominate.org/blog/${article.slug}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://localdominate.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://localdominate.org/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://localdominate.org/blog/${article.slug}`
      }
    ]
  };

  // FAQPage Schema - auto-generated when faqItems are provided
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // LocalBusiness reference schema - auto-generated for all articles
  // Connects articles to the local business context they discuss
  const localBusinessReferenceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://localdominate.org/#localbusiness",
    "name": "Local Dominator",
    "description": "Local SEO Experten für lokale Unternehmen im DACH-Raum",
    "url": "https://localdominate.org",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://twitter.com/localdominator",
      "https://linkedin.com/company/localdominator"
    ]
  };

  // Combine all schemas, flatten arrays from additionalSchema
  const buildCombinedSchema = () => {
    const baseSchemas: object[] = [articleSchema, webPageSchema, breadcrumbSchema, localBusinessReferenceSchema];
    
    if (faqSchema) baseSchemas.push(faqSchema);
    
    if (!additionalSchema) return baseSchemas;
    
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
        canonicalUrl={`https://localdominate.org/blog/${article.slug}`}
        ogImage={articleOgImage}
        keywords={article.keywords.join(", ")}
        jsonLd={combinedSchema}
        ogType="article"
        articlePublishedTime={article.publishedAt}
        articleModifiedTime={article.updatedAt}
        articleSection={article.category}
        lang={language}
        alternateUrls={{
          de: `https://localdominate.org/blog/${article.slug}`,
          en: `https://localdominate.org/blog/${article.slug}?lang=en`
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
        <SiteBreadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: article.title },
          ]}
        />

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
                {updatedText}: {new Date(article.updatedAt).toLocaleDateString(dateLocale)}
              </span>
            )}
            {article.lastReviewedAt && (
              <LastReviewedBadge 
                reviewDate={article.lastReviewedAt} 
                reviewerName={article.lastReviewedBy || "Local Dominator Team"}
                variant="compact"
              />
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>
          {/* Author byline */}
          <AuthorBox articleSlug={article.slug} compact />
        </header>

        {/* Auto-rendered inline Table of Contents (mobile + tablet) */}
        {effectiveTocItems.length > 2 && (
          <nav id="auto-toc-nav" className={cn(
            "bg-muted/50 border border-border rounded-xl p-5 mb-8 not-prose",
            tocItems && tocItems.length > 0 ? "xl:hidden" : "" // Hide on desktop only when sticky TOC exists
          )} aria-label="Inhaltsverzeichnis">
            <div className="flex items-center gap-2 mb-4">
              <List className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground text-base">Inhaltsverzeichnis</h2>
            </div>
            <ol className="space-y-1">
              {(() => {
                let mainIdx = 0;
                return effectiveTocItems.map((item) => {
                  const isActive = activeTocId === item.id;
                  const isSub = item.level === 3;
                  if (!isSub) mainIdx++;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(item.id);
                          if (el) {
                            const pos = el.getBoundingClientRect().top + window.pageYOffset - 100;
                            window.scrollTo({ top: pos, behavior: "smooth" });
                          }
                        }}
                        className={cn(
                          "text-left text-sm w-full px-3 py-1.5 rounded-lg transition-all duration-200",
                          "hover:bg-primary/10 hover:text-primary",
                          isSub && "ml-4",
                          isActive
                            ? "bg-primary/15 text-primary font-medium"
                            : isSub ? "text-muted-foreground" : "text-foreground"
                        )}
                      >
                        {!isSub && <span className="text-primary mr-2">{mainIdx}.</span>}
                        {item.title}
                      </button>
                    </li>
                  );
                });
              })()}
            </ol>
          </nav>
        )}

        {/* Article Content - AI-optimized wrapper */}
        <article 
          ref={articleContentRef}
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-li:text-muted-foreground"
          data-article-slug={article.slug}
          data-ai-content="true"
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="article-intro" data-speakable="true" data-ai-summary="true">
            {children}
          </div>
        </article>

        {/* Dynamic Internal Links: Pillar → Hub → Siblings */}
        <ArticleContextLinks articleSlug={article.slug} />

        {/* Social Share */}
        <div className="my-8 py-6 border-t border-b border-border">
          <SocialShare 
            url={`https://localdominate.org/blog/${article.slug}`}
            title={article.title}
            description={article.metaDescription}
          />
        </div>

        <AuthorBox articleSlug={article.slug} />
        <RelatedArticles articles={relatedArticles} />
      </main>

      <Footer />
      
      {/* Mobile floating CTA - appears on scroll for all blog articles */}
      <MobileArticleCTA articleSlug={article.slug} />
    </div>
  );
};

export default ArticleLayout;
