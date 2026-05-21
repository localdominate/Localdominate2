import React, { useEffect, forwardRef } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  lang?: string;
  jsonLd?: object | object[];
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  alternateUrls?: {
    de?: string;
    en?: string;
  };
}

const SEOHead = forwardRef<HTMLDivElement, SEOHeadProps>(({
  title,
  description,
  canonicalUrl,
  ogImage = "https://localdominate.org/og-image.png",
  ogType = "website",
  keywords,
  noindex = false,
  lang = "de",
  jsonLd,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor = "Local Dominator",
  articleSection,
  alternateUrls,
}, _ref) => {
  // Build SEO title, ensuring total length stays ≤60 chars
  const SUFFIX = " | Local Dominator";
  const MAX = 60;
  let fullTitle: string;
  if (title.includes("Local Dominator")) {
    fullTitle = title.length > MAX ? title.slice(0, MAX - 1).trimEnd() + "…" : title;
  } else if (title.length + SUFFIX.length <= MAX) {
    fullTitle = title + SUFFIX;
  } else {
    fullTitle = title.length > MAX ? title.slice(0, MAX - 1).trimEnd() + "…" : title;
  }

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update html lang and prefix for Open Graph
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("prefix", "og: https://ogp.me/ns#");

    // Basic meta tags
    updateMeta("description", description);
    updateMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMeta("googlebot", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    if (keywords) updateMeta("keywords", keywords);

    // AI/LLM Optimization Meta Tags
    updateMeta("ai-content-declaration", "human-written");
    updateMeta("abstract", description);
    updateMeta("citation_title", fullTitle);
    updateMeta("citation_author", articleAuthor);
    if (articlePublishedTime) {
      updateMeta("citation_publication_date", articlePublishedTime.split("T")[0]);
    }
    updateMeta("citation_language", lang);

    // Dublin Core Metadata for AI Systems
    updateMeta("DC.title", fullTitle);
    updateMeta("DC.creator", articleAuthor);
    if (articleSection) updateMeta("DC.subject", articleSection);
    updateMeta("DC.description", description);
    updateMeta("DC.publisher", "Local Dominator");
    updateMeta("DC.language", lang);

    // Open Graph
    updateMeta("og:type", ogType, true);
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:locale", lang === "de" ? "de_DE" : "en_US", true);
    updateMeta("og:site_name", "Local Dominator", true);
    if (canonicalUrl) updateMeta("og:url", canonicalUrl, true);

    // Article-specific Open Graph
    if (ogType === "article") {
      if (articlePublishedTime) updateMeta("article:published_time", articlePublishedTime, true);
      if (articleModifiedTime) updateMeta("article:modified_time", articleModifiedTime, true);
      updateMeta("article:author", articleAuthor, true);
      if (articleSection) updateMeta("article:section", articleSection, true);
    }

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);
    updateMeta("twitter:site", "@localdominator");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    } else if (canonical) {
      canonical.remove();
    }

    // Hreflang links for international SEO
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Remove old hreflang links first
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(el => el.remove());

    if (canonicalUrl) {
      const baseUrl = canonicalUrl.replace(/\?.*$/, '');
      const deUrl = alternateUrls?.de || baseUrl;
      const enUrl = alternateUrls?.en || `${baseUrl}?lang=en`;
      
      updateHreflang("de", deUrl);
      updateHreflang("en", enUrl);
      updateHreflang("x-default", deUrl);
    }

    // JSON-LD - Handle single object or array
    const existingJsonLd = document.querySelectorAll('script[data-seo-jsonld]');
    existingJsonLd.forEach(el => el.remove());
    
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema, index) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", `true-${index}`);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup function
    return () => {
      const jsonLdScripts = document.querySelectorAll('script[data-seo-jsonld]');
      jsonLdScripts.forEach(script => script.remove());
      const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
      hreflangLinks.forEach(link => link.remove());
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, keywords, noindex, lang, jsonLd, articlePublishedTime, articleModifiedTime, articleAuthor, articleSection, alternateUrls]);

  return null;
});

SEOHead.displayName = "SEOHead";

// Default export for import SEOHead from "@/components/SEOHead"
export default SEOHead;