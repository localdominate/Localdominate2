import React, { useEffect, forwardRef } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  lang?: "de" | "en";
  jsonLd?: object;
}

const SEOHead = forwardRef<HTMLDivElement, SEOHeadProps>(({
  title,
  description,
  canonicalUrl,
  ogImage = "https://localdominator.de/og-image.png",
  ogType = "website",
  keywords,
  noindex = false,
  lang = "de",
  jsonLd,
}, _ref) => {
  const fullTitle = title.includes("Local Dominator") 
    ? title 
    : `${title} | Local Dominator`;

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

    // Update html lang
    document.documentElement.lang = lang;

    // Basic meta tags
    updateMeta("description", description);
    updateMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph
    updateMeta("og:type", ogType, true);
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:locale", lang === "de" ? "de_DE" : "en_US", true);
    if (canonicalUrl) updateMeta("og:url", canonicalUrl, true);

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

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

    // JSON-LD
    const existingJsonLd = document.querySelector('script[data-seo-jsonld]');
    if (jsonLd) {
      if (existingJsonLd) {
        existingJsonLd.textContent = JSON.stringify(jsonLd);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Cleanup function
    return () => {
      const jsonLdScript = document.querySelector('script[data-seo-jsonld]');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, keywords, noindex, lang, jsonLd]);

  return null;
});

SEOHead.displayName = "SEOHead";

export default SEOHead;