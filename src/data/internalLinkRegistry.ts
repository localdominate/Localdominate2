/**
 * Dynamic Internal Link Registry
 * 
 * Central source of truth mapping every article slug to its parent hub(s),
 * pillar page, and sibling articles. Used by ArticleContextLinks to auto-render
 * contextual navigation on every blog article.
 */

export interface HubDefinition {
  slug: string;
  title: string;
  icon: string;
  path: string;
  pillarSlug: string;
  /** All article slugs belonging to this hub */
  articleSlugs: string[];
}

export interface PillarDefinition {
  slug: string;
  title: string;
  icon: string;
  path: string;
}

// === PILLAR PAGES ===
export const PILLAR_PAGES: Record<string, PillarDefinition> = {
  "lokale-seo-2026": {
    slug: "lokale-suchmaschinenoptimierung-2026",
    title: "Lokale SEO 2026 – Der Komplettguide",
    icon: "🏆",
    path: "/blog/lokale-suchmaschinenoptimierung-2026",
  },
  "ultimate-guide": {
    slug: "ultimate-guide-local-seo",
    title: "Ultimate Guide: Local SEO",
    icon: "🏆",
    path: "/blog/ultimate-guide-local-seo",
  },
  "technisches-seo": {
    slug: "technisches-local-seo-guide",
    title: "Technisches Local SEO Guide",
    icon: "⚙️",
    path: "/blog/technisches-local-seo-guide",
  },
};

// === HUB PAGES ===
export const HUB_DEFINITIONS: HubDefinition[] = [
  {
    slug: "google-maps-seo-hub",
    title: "Google Maps SEO Hub",
    icon: "🗺️",
    path: "/blog/google-maps-seo-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "google-maps-ranking-verbessern",
      "google-maps-seo-ranking-faktoren",
      "local-seo-vs-maps-seo",
      "google-my-business-optimieren",
      "google-business-kategorien-guide",
      "google-business-produkte-services",
      "gbp-fotos-optimieren",
      "gbp-attribute-richtig-nutzen",
      "gbp-oeffnungszeiten-sondertage",
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
      "review-schema-implementierung",
      "google-business-insights-verstehen",
      "local-seo-reporting-template",
      "local-seo-audit-checkliste",
      "google-posts-ranking-faktor",
      "google-business-messaging",
      "gbp-mehrere-standorte",
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
      "ranking-ploetzlich-verschwunden",
      "google-maps-spam-erkennen",
    ],
  },
  {
    slug: "google-business-profil-hub",
    title: "Google Business Profil Hub",
    icon: "🏢",
    path: "/blog/google-business-profil-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "google-my-business-optimieren",
      "google-business-kategorien-guide",
      "google-business-produkte-services",
      "gbp-fotos-optimieren",
      "gbp-attribute-richtig-nutzen",
      "gbp-oeffnungszeiten-sondertage",
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
      "review-schema-implementierung",
      "google-business-insights-verstehen",
      "google-maps-ranking-verbessern",
      "google-maps-seo-ranking-faktoren",
      "local-seo-reporting-template",
      "google-posts-ranking-faktor",
      "google-business-messaging",
      "gbp-mehrere-standorte",
      "local-seo-mehrstufig-unternehmen",
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
      "ranking-ploetzlich-verschwunden",
    ],
  },
  {
    slug: "local-seo-branchen-hub",
    title: "Branchen-Guides",
    icon: "🏭",
    path: "/blog/local-seo-branchen-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "local-seo-fuer-restaurants",
      "local-seo-baeckerei",
      "local-seo-doener-kebab-imbiss",
      "seo-ferienwohnungen",
      "local-seo-hotels",
      "local-seo-aerzte-praxen",
      "local-seo-zahnarzt",
      "local-seo-physiotherapie",
      "local-seo-apotheken",
      "local-seo-tierarzt",
      "local-seo-optiker",
      "local-seo-handwerker",
      "local-seo-autowerkstatt",
      "local-seo-elektrotechnik",
      "local-seo-anwaelte-kanzleien",
      "local-seo-steuerberater",
      "local-seo-immobilienmakler",
      "local-seo-fotograf",
      "local-seo-friseursalon-beauty",
      "local-seo-tattoo-studios",
      "local-seo-yoga-studios",
      "local-seo-fitness",
    ],
  },
  {
    slug: "local-seo-staedte-hub",
    title: "Städte-Guides",
    icon: "🏙️",
    path: "/blog/local-seo-staedte-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "local-seo-berlin",
      "local-seo-hamburg",
      "local-seo-muenchen",
      "local-seo-koeln",
      "local-seo-frankfurt",
      "local-seo-duesseldorf",
      "local-seo-stuttgart",
      "local-seo-hannover",
      "local-seo-wien",
      "local-seo-schweiz",
      "local-seo-zuerich",
      "local-seo-basel",
    ],
  },
  {
    slug: "bewertungen-reputation-hub",
    title: "Bewertungen & Reputation Hub",
    icon: "⭐",
    path: "/blog/bewertungen-reputation-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
      "review-schema-implementierung",
      "schema-markup-local-seo",
      "google-maps-seo-ranking-faktoren",
      "google-maps-ranking-verbessern",
      "local-seo-reporting-template",
    ],
  },
  {
    slug: "technisches-seo-hub",
    title: "Technisches Local SEO Hub",
    icon: "⚙️",
    path: "/blog/technisches-seo-hub",
    pillarSlug: "technisches-seo",
    articleSlugs: [
      "schema-markup-local-seo",
      "localbusiness-schema-implementierung",
      "review-schema-implementierung",
      "core-web-vitals-local-seo",
      "mobile-local-seo",
      "nap-konsistenz-local-seo",
      "local-citations-2025",
      "local-seo-vs-maps-seo",
      "google-maps-seo-ranking-faktoren",
      "local-seo-audit-checkliste",
      "local-seo-reporting-template",
      "local-seo-keywords-finden",
    ],
  },
  {
    slug: "content-marketing-hub",
    title: "Content & Marketing Hub",
    icon: "✍️",
    path: "/blog/content-marketing-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "local-content-marketing",
      "lokale-events-marketing",
      "e-e-a-t-lokale-unternehmen",
      "local-link-building",
      "local-citations-2025",
      "nap-konsistenz-local-seo",
      "local-seo-keywords-finden",
      "local-seo-notdienst-keywords",
      "local-seo-vs-maps-seo",
      "lokale-seo-fuer-neugruender",
      "kostenloses-seo-guide",
      "local-seo-fehler",
      "local-seo-case-study-baecker",
    ],
  },
  {
    slug: "tools-ressourcen-hub",
    title: "Tools & Ressourcen Hub",
    icon: "🧰",
    path: "/blog/tools-ressourcen-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "seo-toolbox-kostenlose-ressourcen",
      "ki-tools-local-seo",
      "local-seo-audit-checkliste",
      "local-seo-reporting-template",
      "bewertungs-antworten-vorlagen",
      "kostenloses-seo-guide",
      "lokale-seo-fuer-neugruender",
      "local-seo-case-study-baecker",
    ],
  },
  {
    slug: "ai-zukunft-hub",
    title: "AI & Zukunft Hub",
    icon: "🤖",
    path: "/blog/ai-zukunft-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "google-ai-overviews-local-seo",
      "ai-search-optimization-2026",
      "website-content-ai-suchmaschinen",
      "ki-tools-local-seo",
      "local-seo-voice-search",
      "e-e-a-t-lokale-unternehmen",
    ],
  },
  {
    slug: "troubleshooting-hub",
    title: "Troubleshooting Hub",
    icon: "🔧",
    path: "/blog/troubleshooting-hub",
    pillarSlug: "lokale-seo-2026",
    articleSlugs: [
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
      "ranking-ploetzlich-verschwunden",
      "local-seo-fehler",
      "gbp-bewertung-loeschen-anleitung",
      "negative-google-bewertungen",
      "google-maps-spam-erkennen",
    ],
  },
];

// === LOOKUP FUNCTIONS ===

/** Get all hubs that contain a given article slug */
export function getHubsForArticle(articleSlug: string): HubDefinition[] {
  return HUB_DEFINITIONS.filter((hub) =>
    hub.articleSlugs.includes(articleSlug)
  );
}

/** Get the primary hub for an article (first match) */
export function getPrimaryHub(articleSlug: string): HubDefinition | null {
  return HUB_DEFINITIONS.find((hub) =>
    hub.articleSlugs.includes(articleSlug)
  ) ?? null;
}

/** Get the pillar page for an article (via its primary hub) */
export function getPillarForArticle(articleSlug: string): PillarDefinition | null {
  const hub = getPrimaryHub(articleSlug);
  if (!hub) return null;
  return PILLAR_PAGES[hub.pillarSlug] ?? null;
}

/** Get sibling articles from the same hub group */
export function getSiblingArticles(
  articleSlug: string,
  maxSiblings: number = 4
): string[] {
  const hub = getPrimaryHub(articleSlug);
  if (!hub) return [];
  
  // Find which group the article belongs to, return nearby slugs
  const allSlugs = hub.articleSlugs.filter((s) => s !== articleSlug);
  
  // Return shuffled subset for variety
  const shuffled = [...allSlugs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, maxSiblings);
}

/** Get all hubs as navigation items */
export function getAllHubs(): { title: string; icon: string; path: string }[] {
  return HUB_DEFINITIONS.map((h) => ({
    title: h.title,
    icon: h.icon,
    path: h.path,
  }));
}

/** Check if a slug is a hub page */
export function isHubPage(slug: string): boolean {
  return HUB_DEFINITIONS.some((h) => h.slug === slug);
}

/** Check if a slug is a pillar page */
export function isPillarPage(slug: string): boolean {
  return Object.values(PILLAR_PAGES).some((p) => p.slug === slug);
}
