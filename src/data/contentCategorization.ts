/**
 * Content Categorization System
 * 
 * Centralized mapping of all articles to their hubs, content tiers,
 * and topical clusters. Provides utility functions for querying
 * article relationships across the site architecture.
 */

// ─── Content Tier Definitions ────────────────────────────────────────
export type ContentTier = "pillar" | "hub" | "cluster" | "supporting";

export type HubId =
  | "google-maps-seo"
  | "google-business-profil"
  | "bewertungen-reputation"
  | "ai-zukunft"
  | "technisches-seo"
  | "content-marketing"
  | "tools-ressourcen"
  | "branchen"
  | "staedte"
  | "troubleshooting";

export interface HubDefinition {
  id: HubId;
  label: string;
  icon: string;
  href: string;
  description: string;
  pillarSlugs: string[];
}

export interface ArticleCategorization {
  slug: string;
  tier: ContentTier;
  primaryHub: HubId;
  secondaryHubs: HubId[];
  /** Sub-topic within the hub (matches group titles) */
  cluster: string;
}

// ─── Hub Definitions ─────────────────────────────────────────────────

export const HUB_DEFINITIONS: Record<HubId, HubDefinition> = {
  "google-maps-seo": {
    id: "google-maps-seo",
    label: "Google Maps SEO",
    icon: "📍",
    href: "/blog/google-maps-seo-hub",
    description: "Rankings, Optimierung und Troubleshooting für Google Maps",
    pillarSlugs: ["ultimate-guide-local-seo", "lokale-suchmaschinenoptimierung-2026"],
  },
  "google-business-profil": {
    id: "google-business-profil",
    label: "Google Business Profil",
    icon: "🏢",
    href: "/blog/google-business-profil-hub",
    description: "Profil-Optimierung, Bewertungen, Insights und erweiterte Funktionen",
    pillarSlugs: ["ultimate-guide-local-seo", "google-my-business-optimieren"],
  },
  "bewertungen-reputation": {
    id: "bewertungen-reputation",
    label: "Bewertungen & Reputation",
    icon: "⭐",
    href: "/blog/bewertungen-reputation-hub",
    description: "Bewertungs-Generierung, Management und technische Implementierung",
    pillarSlugs: ["ultimate-guide-local-seo"],
  },
  "ai-zukunft": {
    id: "ai-zukunft",
    label: "AI & Zukunft",
    icon: "🤖",
    href: "/blog/ai-zukunft-hub",
    description: "AI Overviews, ChatGPT-Optimierung, KI-Tools und Voice Search",
    pillarSlugs: ["ai-suche-lokale-unternehmen", "lokale-suchmaschinenoptimierung-2026"],
  },
  "technisches-seo": {
    id: "technisches-seo",
    label: "Technisches SEO",
    icon: "⚙️",
    href: "/blog/technisches-seo-hub",
    description: "Schema Markup, Core Web Vitals, NAP und technische Grundlagen",
    pillarSlugs: ["technisches-local-seo-guide", "ultimate-guide-local-seo"],
  },
  "content-marketing": {
    id: "content-marketing",
    label: "Content & Marketing",
    icon: "✍️",
    href: "/blog/content-marketing-hub",
    description: "Content-Strategie, Link Building, Keywords und Starter-Guides",
    pillarSlugs: ["ultimate-guide-local-seo"],
  },
  "tools-ressourcen": {
    id: "tools-ressourcen",
    label: "Tools & Ressourcen",
    icon: "🧰",
    href: "/blog/tools-ressourcen-hub",
    description: "SEO-Tools, Checklisten, Templates und kostenlose Guides",
    pillarSlugs: ["ultimate-guide-local-seo"],
  },
  "branchen": {
    id: "branchen",
    label: "Branchen-Guides",
    icon: "🏭",
    href: "/blog/local-seo-branchen-hub",
    description: "Branchenspezifische Local SEO Strategien",
    pillarSlugs: ["ultimate-guide-local-seo"],
  },
  "staedte": {
    id: "staedte",
    label: "Städte-Guides",
    icon: "🏙️",
    href: "/blog/staedte-hub",
    description: "Stadtspezifische Local SEO Guides für den DACH-Raum",
    pillarSlugs: ["ultimate-guide-local-seo", "lokale-suchmaschinenoptimierung-2026"],
  },
  "troubleshooting": {
    id: "troubleshooting",
    label: "Troubleshooting",
    icon: "🔧",
    href: "/blog/troubleshooting-hub",
    description: "Problemlösungen für GBP, Rankings und Bewertungen",
    pillarSlugs: ["ultimate-guide-local-seo"],
  },
};

// ─── Article-to-Hub Mapping ──────────────────────────────────────────

export const ARTICLE_CATEGORIZATIONS: ArticleCategorization[] = [
  // ── Pillar Pages ──────────────────────────────────────────────
  { slug: "ultimate-guide-local-seo", tier: "pillar", primaryHub: "google-maps-seo", secondaryHubs: ["google-business-profil", "bewertungen-reputation", "technisches-seo", "content-marketing"], cluster: "Master Pillar" },
  { slug: "lokale-suchmaschinenoptimierung-2026", tier: "pillar", primaryHub: "google-maps-seo", secondaryHubs: ["ai-zukunft", "staedte"], cluster: "Master Pillar" },
  { slug: "technisches-local-seo-guide", tier: "pillar", primaryHub: "technisches-seo", secondaryHubs: [], cluster: "Master Pillar" },
  { slug: "local-seo-ranking-faktoren-erklaert", tier: "pillar", primaryHub: "google-maps-seo", secondaryHubs: ["bewertungen-reputation"], cluster: "Ranking-Faktoren" },
  { slug: "ai-suche-lokale-unternehmen", tier: "pillar", primaryHub: "ai-zukunft", secondaryHubs: [], cluster: "AI Search" },
  { slug: "local-seo-checkliste-komplett", tier: "pillar", primaryHub: "tools-ressourcen", secondaryHubs: ["google-maps-seo"], cluster: "Checklisten" },
  { slug: "kostenloses-seo-guide", tier: "pillar", primaryHub: "content-marketing", secondaryHubs: ["tools-ressourcen"], cluster: "Starter & Grundlagen" },
  { slug: "local-seo-statistiken", tier: "pillar", primaryHub: "google-maps-seo", secondaryHubs: [], cluster: "Statistiken" },

  // ── Google Maps SEO Hub ───────────────────────────────────────
  { slug: "google-maps-ranking-verbessern", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: [], cluster: "Google Maps Ranking & Optimierung" },
  { slug: "google-maps-seo-ranking-faktoren", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: ["technisches-seo", "bewertungen-reputation"], cluster: "Google Maps Ranking & Optimierung" },
  { slug: "local-seo-vs-maps-seo", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: ["content-marketing", "technisches-seo"], cluster: "Google Maps Ranking & Optimierung" },
  { slug: "wie-google-maps-ranking-funktioniert", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: [], cluster: "Google Maps Ranking & Optimierung" },
  { slug: "google-maps-konkurrenzanalyse", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: [], cluster: "Analyse & Reporting" },
  { slug: "google-maps-spam-erkennen", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: ["troubleshooting"], cluster: "Troubleshooting" },
  { slug: "google-maps-ranking-case-studies", tier: "cluster", primaryHub: "google-maps-seo", secondaryHubs: [], cluster: "Case Studies" },

  // ── Google Business Profil Hub ────────────────────────────────
  { slug: "google-my-business-optimieren", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "google-business-kategorien-guide", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "google-business-produkte-services", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "gbp-fotos-optimieren", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "gbp-attribute-richtig-nutzen", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "gbp-oeffnungszeiten-sondertage", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Profil-Optimierung" },
  { slug: "google-posts-ranking-faktor", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Erweiterte Funktionen" },
  { slug: "google-business-messaging", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Erweiterte Funktionen" },
  { slug: "gbp-mehrere-standorte", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Erweiterte Funktionen" },
  { slug: "local-seo-mehrstufig-unternehmen", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: [], cluster: "Erweiterte Funktionen" },
  { slug: "google-business-insights-verstehen", tier: "cluster", primaryHub: "google-business-profil", secondaryHubs: ["google-maps-seo"], cluster: "Insights & Performance" },

  // ── Bewertungen & Reputation Hub ──────────────────────────────
  { slug: "google-bewertungen-bekommen", tier: "cluster", primaryHub: "bewertungen-reputation", secondaryHubs: ["google-business-profil", "google-maps-seo"], cluster: "Bewertungen generieren" },
  { slug: "bewertungs-antworten-vorlagen", tier: "cluster", primaryHub: "bewertungen-reputation", secondaryHubs: ["google-business-profil", "google-maps-seo", "tools-ressourcen"], cluster: "Bewertungen generieren" },
  { slug: "negative-google-bewertungen", tier: "cluster", primaryHub: "bewertungen-reputation", secondaryHubs: ["google-business-profil", "google-maps-seo", "troubleshooting"], cluster: "Negative Bewertungen managen" },
  { slug: "gbp-bewertung-loeschen-anleitung", tier: "cluster", primaryHub: "bewertungen-reputation", secondaryHubs: ["google-business-profil", "troubleshooting"], cluster: "Negative Bewertungen managen" },
  { slug: "review-schema-implementierung", tier: "cluster", primaryHub: "bewertungen-reputation", secondaryHubs: ["technisches-seo", "google-business-profil"], cluster: "Technische Implementierung" },

  // ── AI & Zukunft Hub ──────────────────────────────────────────
  { slug: "google-ai-overviews-local-seo", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: [], cluster: "AI Search & Sichtbarkeit" },
  { slug: "ai-search-optimization-2026", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: [], cluster: "AI Search & Sichtbarkeit" },
  { slug: "website-content-ai-suchmaschinen", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: ["content-marketing"], cluster: "AI Search & Sichtbarkeit" },
  { slug: "entity-seo-guide", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: ["technisches-seo"], cluster: "AI Search & Sichtbarkeit" },
  { slug: "semantic-seo-topical-authority", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: ["content-marketing", "technisches-seo"], cluster: "AI Search & Sichtbarkeit" },
  { slug: "ki-tools-local-seo", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: ["tools-ressourcen"], cluster: "KI-Tools für SEO" },
  { slug: "local-seo-voice-search", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: [], cluster: "Voice Search & neue Kanäle" },
  { slug: "e-e-a-t-lokale-unternehmen", tier: "cluster", primaryHub: "ai-zukunft", secondaryHubs: ["content-marketing", "technisches-seo"], cluster: "Voice Search & neue Kanäle" },

  // ── Technisches SEO Hub ───────────────────────────────────────
  { slug: "schema-markup-local-seo", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: ["bewertungen-reputation"], cluster: "Schema Markup & Strukturierte Daten" },
  { slug: "localbusiness-schema-implementierung", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: [], cluster: "Schema Markup & Strukturierte Daten" },
  { slug: "schema-strategie-dokument", tier: "supporting", primaryHub: "technisches-seo", secondaryHubs: [], cluster: "Schema Markup & Strukturierte Daten" },
  { slug: "core-web-vitals-local-seo", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: [], cluster: "Core Web Vitals & Performance" },
  { slug: "mobile-local-seo", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: [], cluster: "Core Web Vitals & Performance" },
  { slug: "nap-konsistenz-local-seo", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: ["content-marketing", "google-maps-seo"], cluster: "Lokale Ranking-Faktoren" },
  { slug: "local-citations-2025", tier: "cluster", primaryHub: "technisches-seo", secondaryHubs: ["content-marketing", "google-maps-seo"], cluster: "Lokale Ranking-Faktoren" },

  // ── Content & Marketing Hub ───────────────────────────────────
  { slug: "local-content-marketing", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: [], cluster: "Content-Strategie" },
  { slug: "lokale-events-marketing", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: [], cluster: "Content-Strategie" },
  { slug: "lokale-influencer-kooperationen", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: [], cluster: "Content-Strategie" },
  { slug: "local-link-building", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: ["technisches-seo"], cluster: "Link Building & Citations" },
  { slug: "local-seo-keywords-finden", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: ["technisches-seo"], cluster: "Keyword-Strategie" },
  { slug: "local-seo-notdienst-keywords", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: [], cluster: "Keyword-Strategie" },
  { slug: "lokale-seo-fuer-neugruender", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: ["tools-ressourcen"], cluster: "Starter & Grundlagen" },
  { slug: "local-seo-fehler", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: ["troubleshooting"], cluster: "Starter & Grundlagen" },
  { slug: "local-seo-case-study-baecker", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: ["branchen"], cluster: "Starter & Grundlagen" },
  { slug: "local-seo-strategie-kleine-unternehmen", tier: "cluster", primaryHub: "content-marketing", secondaryHubs: [], cluster: "Starter & Grundlagen" },

  // ── Tools & Ressourcen Hub ────────────────────────────────────
  { slug: "seo-toolbox-kostenlose-ressourcen", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: [], cluster: "SEO-Tools & Software" },
  { slug: "google-maps-ranking-tracker", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: ["google-maps-seo"], cluster: "SEO-Tools & Software" },
  { slug: "local-seo-audit-checkliste", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: ["technisches-seo", "google-maps-seo"], cluster: "Checklisten & Templates" },
  { slug: "local-seo-reporting-template", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: ["google-business-profil", "bewertungen-reputation", "technisches-seo"], cluster: "Checklisten & Templates" },
  { slug: "google-maps-audit-template", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: ["google-maps-seo"], cluster: "Checklisten & Templates" },
  { slug: "citation-tracking-template", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: [], cluster: "Checklisten & Templates" },
  { slug: "local-keyword-research-template", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: ["content-marketing"], cluster: "Checklisten & Templates" },
  { slug: "local-seo-monthly-checklist", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: [], cluster: "Checklisten & Templates" },
  { slug: "local-seo-strategy-planner", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: [], cluster: "Checklisten & Templates" },
  { slug: "local-seo-roadmap-90-tage", tier: "cluster", primaryHub: "tools-ressourcen", secondaryHubs: [], cluster: "Checklisten & Templates" },
  { slug: "local-link-building-blueprint", tier: "supporting", primaryHub: "tools-ressourcen", secondaryHubs: ["content-marketing"], cluster: "Checklisten & Templates" },

  // ── Branchen Hub ──────────────────────────────────────────────
  { slug: "local-seo-fuer-restaurants", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gastronomie & Food" },
  { slug: "local-seo-baeckerei", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gastronomie & Food" },
  { slug: "local-seo-doener-kebab-imbiss", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gastronomie & Food" },
  { slug: "seo-ferienwohnungen", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gastronomie & Food" },
  { slug: "local-seo-hotels", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gastronomie & Food" },
  { slug: "local-seo-aerzte-praxen", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-zahnarzt", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-physiotherapie", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-apotheken", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-tierarzt", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-optiker", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Gesundheit & Wellness" },
  { slug: "local-seo-handwerker", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Handwerk & Technik" },
  { slug: "local-seo-autowerkstatt", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Handwerk & Technik" },
  { slug: "local-seo-elektrotechnik", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Handwerk & Technik" },
  { slug: "local-seo-sanitaer-heizung", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Handwerk & Technik" },
  { slug: "local-seo-anwaelte-kanzleien", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Dienstleistungen & Freiberufler" },
  { slug: "local-seo-steuerberater", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Dienstleistungen & Freiberufler" },
  { slug: "local-seo-immobilienmakler", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Dienstleistungen & Freiberufler" },
  { slug: "local-seo-fotograf", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Dienstleistungen & Freiberufler" },
  { slug: "local-seo-friseursalon-beauty", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Beauty, Fitness & Lifestyle" },
  { slug: "local-seo-tattoo-studios", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Beauty, Fitness & Lifestyle" },
  { slug: "local-seo-yoga-studios", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Beauty, Fitness & Lifestyle" },
  { slug: "local-seo-fitness", tier: "cluster", primaryHub: "branchen", secondaryHubs: [], cluster: "Beauty, Fitness & Lifestyle" },

  // ── Städte Hub ────────────────────────────────────────────────
  { slug: "local-seo-berlin", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-hamburg", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-muenchen", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-koeln", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-frankfurt", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-duesseldorf", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-stuttgart", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-hannover", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Deutschland – Großstädte" },
  { slug: "local-seo-wien", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Österreich" },
  { slug: "local-seo-schweiz", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Schweiz" },
  { slug: "local-seo-zuerich", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Schweiz" },
  { slug: "local-seo-basel", tier: "cluster", primaryHub: "staedte", secondaryHubs: [], cluster: "Schweiz" },

  // ── Troubleshooting Hub ───────────────────────────────────────
  { slug: "gbp-suspendiert-reaktivieren", tier: "cluster", primaryHub: "troubleshooting", secondaryHubs: ["google-business-profil", "google-maps-seo"], cluster: "Google Business Profil Probleme" },
  { slug: "gbp-verifizierung-fehlgeschlagen", tier: "cluster", primaryHub: "troubleshooting", secondaryHubs: ["google-business-profil", "google-maps-seo"], cluster: "Google Business Profil Probleme" },
  { slug: "gbp-nicht-in-suche-sichtbar", tier: "cluster", primaryHub: "troubleshooting", secondaryHubs: ["google-business-profil", "google-maps-seo"], cluster: "Google Business Profil Probleme" },
  { slug: "duplicate-listing-entfernen", tier: "cluster", primaryHub: "troubleshooting", secondaryHubs: ["google-business-profil", "google-maps-seo"], cluster: "Google Business Profil Probleme" },
  { slug: "ranking-ploetzlich-verschwunden", tier: "cluster", primaryHub: "troubleshooting", secondaryHubs: ["google-maps-seo"], cluster: "Ranking & Sichtbarkeit" },
];

// ─── Lookup Index (built once) ───────────────────────────────────────

const _slugIndex = new Map<string, ArticleCategorization>();
const _hubIndex = new Map<HubId, ArticleCategorization[]>();
const _tierIndex = new Map<ContentTier, ArticleCategorization[]>();

function buildIndexes() {
  if (_slugIndex.size > 0) return;
  for (const entry of ARTICLE_CATEGORIZATIONS) {
    _slugIndex.set(entry.slug, entry);

    // Primary hub
    if (!_hubIndex.has(entry.primaryHub)) _hubIndex.set(entry.primaryHub, []);
    _hubIndex.get(entry.primaryHub)!.push(entry);

    // Secondary hubs
    for (const hub of entry.secondaryHubs) {
      if (!_hubIndex.has(hub)) _hubIndex.set(hub, []);
      _hubIndex.get(hub)!.push(entry);
    }

    // Tier
    if (!_tierIndex.has(entry.tier)) _tierIndex.set(entry.tier, []);
    _tierIndex.get(entry.tier)!.push(entry);
  }
}

// ─── Utility Functions ───────────────────────────────────────────────

/** Get the categorization for a single article slug */
export function getArticleCategorization(slug: string): ArticleCategorization | undefined {
  buildIndexes();
  return _slugIndex.get(slug);
}

/** Get all articles belonging to a hub (primary + secondary) */
export function getArticlesForHub(hubId: HubId): ArticleCategorization[] {
  buildIndexes();
  return _hubIndex.get(hubId) ?? [];
}

/** Get all articles of a specific content tier */
export function getArticlesByTier(tier: ContentTier): ArticleCategorization[] {
  buildIndexes();
  return _tierIndex.get(tier) ?? [];
}

/** Get the primary hub definition for an article */
export function getArticlePrimaryHub(slug: string): HubDefinition | undefined {
  const cat = getArticleCategorization(slug);
  return cat ? HUB_DEFINITIONS[cat.primaryHub] : undefined;
}

/** Get all hubs an article belongs to (primary + secondary) */
export function getArticleHubs(slug: string): HubDefinition[] {
  const cat = getArticleCategorization(slug);
  if (!cat) return [];
  return [cat.primaryHub, ...cat.secondaryHubs].map(id => HUB_DEFINITIONS[id]);
}

/** Get sibling articles (same primary hub & cluster) */
export function getSiblingArticles(slug: string): ArticleCategorization[] {
  const cat = getArticleCategorization(slug);
  if (!cat) return [];
  return getArticlesForHub(cat.primaryHub).filter(
    a => a.slug !== slug && a.cluster === cat.cluster && a.primaryHub === cat.primaryHub
  );
}

/** Get related articles across hubs (shares at least one hub) */
export function getRelatedArticlesAcrossHubs(slug: string, limit = 6): ArticleCategorization[] {
  const cat = getArticleCategorization(slug);
  if (!cat) return [];
  
  const allHubs = [cat.primaryHub, ...cat.secondaryHubs];
  const seen = new Set<string>([slug]);
  const results: ArticleCategorization[] = [];

  for (const hubId of allHubs) {
    for (const article of getArticlesForHub(hubId)) {
      if (!seen.has(article.slug)) {
        seen.add(article.slug);
        results.push(article);
      }
      if (results.length >= limit) return results;
    }
  }
  return results;
}

/** Get all hub definitions as an array */
export function getAllHubs(): HubDefinition[] {
  return Object.values(HUB_DEFINITIONS);
}

/** Count articles per hub */
export function getHubArticleCounts(): Record<HubId, number> {
  buildIndexes();
  const counts = {} as Record<HubId, number>;
  for (const hubId of Object.keys(HUB_DEFINITIONS) as HubId[]) {
    counts[hubId] = (_hubIndex.get(hubId) ?? []).length;
  }
  return counts;
}

/** Count articles per tier */
export function getTierCounts(): Record<ContentTier, number> {
  buildIndexes();
  const tiers: ContentTier[] = ["pillar", "hub", "cluster", "supporting"];
  const counts = {} as Record<ContentTier, number>;
  for (const tier of tiers) {
    counts[tier] = (_tierIndex.get(tier) ?? []).length;
  }
  return counts;
}

/** Get uncategorized slugs (articles in blogArticles but not in categorization) */
export function findUncategorizedSlugs(allSlugs: string[]): string[] {
  buildIndexes();
  return allSlugs.filter(slug => !_slugIndex.has(slug));
}
