/**
 * Centralized review metadata for all articles.
 * Maps article slugs to their last-reviewed date and reviewer name.
 * This data powers the LastReviewedBadge auto-display in ArticleLayout
 * and feeds into schema.org dateModified/reviewedBy signals.
 */

export interface ArticleReviewMeta {
  lastReviewedAt: string;    // ISO date string
  lastReviewedBy: string;    // Reviewer name/team
  reviewCycle?: 'monthly' | 'quarterly' | 'biannual'; // How often this article should be reviewed
}

/**
 * YMYL articles get specialist reviewers; standard articles get the editorial team.
 */
const YMYL_REVIEWER = "Fachredaktion YMYL";
const EDITORIAL_TEAM = "Local Dominator Redaktion";
const TECH_REVIEWER = "Technische Redaktion";

export const articleReviewDates: Record<string, ArticleReviewMeta> = {
  // === PILLAR PAGES (quarterly review) ===
  "ultimate-guide-local-seo": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-strategie-kleine-unternehmen": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-ranking-faktoren-erklaert": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "ai-suche-lokale-unternehmen": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "local-link-building-blueprint": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-checkliste-komplett": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "technisches-local-seo-guide": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },

  // === HUB PAGES (quarterly review) ===
  "google-maps-seo-hub": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-business-profil-hub": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-branchen-hub": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-staedte-hub": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "bewertungen-reputation-hub": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },

  // === FEATURED / STRATEGY ===
  "kostenloses-seo-guide": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-keywords-finden": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "google-maps-ranking-verbessern": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-bewertungen-bekommen": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "google-my-business-optimieren": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "lokale-suchmaschinenoptimierung-2026": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "nap-konsistenz-local-seo": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-audit-checkliste": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-link-building": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "negative-google-bewertungen": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-content-marketing": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-fehler": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },

  // === YMYL ARTICLES (monthly review) ===
  "local-seo-aerzte-praxen": { lastReviewedAt: "2026-03-01", lastReviewedBy: "Dr. med. Fachredaktion", reviewCycle: "monthly" },
  "local-seo-anwaelte-kanzleien": { lastReviewedAt: "2026-03-01", lastReviewedBy: "Rechtsanwalt Fachredaktion", reviewCycle: "monthly" },
  "local-seo-steuerberater": { lastReviewedAt: "2026-03-01", lastReviewedBy: "Steuerberater Fachredaktion", reviewCycle: "monthly" },
  "local-seo-apotheken": { lastReviewedAt: "2026-02-20", lastReviewedBy: YMYL_REVIEWER, reviewCycle: "monthly" },

  // === BRANCHEN GUIDES (biannual review) ===
  "local-seo-fuer-restaurants": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-handwerker": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-hotels": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-fitness": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-doener-kebab-imbiss": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-friseursalon-beauty": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-immobilienmakler": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-autowerkstatt": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-tierarzt": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-fotograf": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-yoga-studios": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-tattoo-studios": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-fahrschule": { lastReviewedAt: "2026-02-20", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-hochzeitsdienstleister": { lastReviewedAt: "2026-02-26", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-umzugsunternehmen": { lastReviewedAt: "2026-03-04", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-reinigungsunternehmen": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-sprachschule": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-baeckerei-konditorei": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-cafe-coffeeshop": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-zahnarzt": { lastReviewedAt: "2026-02-15", lastReviewedBy: YMYL_REVIEWER, reviewCycle: "monthly" },
  "local-seo-optiker": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-elektrotechnik": { lastReviewedAt: "2026-02-18", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-maler-lackierer": { lastReviewedAt: "2026-02-22", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-sanitaer-heizung": { lastReviewedAt: "2026-02-26", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-baeckerei": { lastReviewedAt: "2026-02-16", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-physiotherapie": { lastReviewedAt: "2026-02-08", lastReviewedBy: YMYL_REVIEWER, reviewCycle: "monthly" },

  // === TECHNIK (quarterly review) ===
  "schema-markup-local-seo": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "mobile-local-seo": { lastReviewedAt: "2026-02-15", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "google-maps-seo-ranking-faktoren": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "core-web-vitals-local-seo": { lastReviewedAt: "2026-02-15", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "local-seo-voice-search": { lastReviewedAt: "2026-02-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "google-posts-ranking-faktor": { lastReviewedAt: "2026-02-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "lokale-landing-pages": { lastReviewedAt: "2026-02-10", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "multi-location-seo": { lastReviewedAt: "2026-02-22", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "lokale-keyword-kannibalisierung": { lastReviewedAt: "2026-03-06", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "ai-overviews-local-seo": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "local-seo-tracking-kpis": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "localbusiness-schema-implementierung": { lastReviewedAt: "2026-03-05", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "review-schema-implementierung": { lastReviewedAt: "2026-03-05", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "entity-seo-guide": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "semantic-seo-topical-authority": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "website-content-ai-suchmaschinen": { lastReviewedAt: "2026-03-05", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "schema-strategie-dokument": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "wie-google-maps-ranking-funktioniert": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },

  // === REGIONEN (biannual review) ===
  "local-seo-schweiz": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-zuerich": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-muenchen": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-hamburg": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-frankfurt": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-berlin": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-koeln": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-wien": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-stuttgart": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-duesseldorf": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-basel": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-hannover": { lastReviewedAt: "2026-02-16", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-nuernberg": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-leipzig-dresden": { lastReviewedAt: "2026-03-02", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },

  // === CASE STUDIES (biannual review) ===
  "local-seo-case-study-baecker": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-zahnarzt": { lastReviewedAt: "2026-03-07", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-restaurant-reservierungen": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-handwerker-anfragen": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-fitnessstudio-corona": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-hotel-direktbuchungen": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "case-study-friseur-stadtteile": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },

  // === TOOLS & RESSOURCEN (quarterly review) ===
  "google-maps-audit-template": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "citation-tracking-template": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-keyword-research-template": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-monthly-checklist": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-maps-ranking-tracker": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-strategy-planner": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-roadmap-90-tage": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "ki-tools-local-seo": { lastReviewedAt: "2026-02-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "seo-toolbox-kostenlose-ressourcen": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-reporting-template": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-statistiken-daten": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },

  // === TRENDS (monthly review — fast-changing) ===
  "google-ai-overviews-local-seo": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "monthly" },
  "ai-search-optimization-2026": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "monthly" },
  "local-seo-trends-2027": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "monthly" },
  "zero-click-searches-local-pack": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "monthly" },
  "google-sge-lokale-suche": { lastReviewedAt: "2026-03-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "monthly" },

  // === GOOGLE BUSINESS (quarterly review) ===
  "google-business-kategorien-guide": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "lokale-events-marketing": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-business-produkte-services": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-business-insights-verstehen": { lastReviewedAt: "2026-02-20", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "gbp-fotos-optimieren": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "google-business-messaging": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "gbp-oeffnungszeiten-sondertage": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "gbp-attribute-richtig-nutzen": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "gbp-mehrere-standorte": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "bewertungs-antworten-vorlagen": { lastReviewedAt: "2026-02-16", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "bewertungs-qr-codes": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },

  // === STRATEGIE (biannual review) ===
  "wettbewerbsanalyse-local-seo": { lastReviewedAt: "2026-02-10", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "citation-strategie-verzeichnisse": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "bewertungs-automation": { lastReviewedAt: "2026-02-15", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-vs-organisch": { lastReviewedAt: "2026-02-21", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "saisonales-local-seo": { lastReviewedAt: "2026-02-27", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-budget-planen": { lastReviewedAt: "2026-03-05", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "diy-local-seo": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "lokales-social-media-marketing": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "lokale-pr-pressearbeit": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "google-business-fotos": { lastReviewedAt: "2026-03-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "lokale-influencer-kooperationen": { lastReviewedAt: "2026-02-24", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-jahresplanung": { lastReviewedAt: "2026-02-28", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "local-seo-mehrstufig-unternehmen": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "e-e-a-t-lokale-unternehmen": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "quarterly" },
  "lokale-seo-fuer-neugruender": { lastReviewedAt: "2026-02-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-notdienst-keywords": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-seo-vs-maps-seo": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "local-citations-2025": { lastReviewedAt: "2026-02-08", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
  "seo-ferienwohnungen": { lastReviewedAt: "2026-02-25", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },

  // === TROUBLESHOOTING (quarterly review) ===
  "gbp-suspendiert-reaktivieren": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "gbp-verifizierung-fehlgeschlagen": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "duplicate-listing-entfernen": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "gbp-bewertung-loeschen-anleitung": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "ranking-ploetzlich-verschwunden": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "gbp-nicht-in-suche-sichtbar": { lastReviewedAt: "2026-02-08", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },

  // === GOOGLE MAPS DEEP DIVES ===
  "google-maps-spam-erkennen": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "google-maps-konkurrenzanalyse": { lastReviewedAt: "2026-03-01", lastReviewedBy: TECH_REVIEWER, reviewCycle: "quarterly" },
  "google-maps-ranking-case-studies": { lastReviewedAt: "2026-03-01", lastReviewedBy: EDITORIAL_TEAM, reviewCycle: "biannual" },
};

/**
 * Get review metadata for a given article slug.
 * Returns undefined if no review data exists.
 */
export const getArticleReviewMeta = (slug: string): ArticleReviewMeta | undefined => {
  return articleReviewDates[slug];
};

/**
 * Check if an article is overdue for review based on its review cycle.
 */
export const isReviewOverdue = (slug: string): boolean => {
  const meta = articleReviewDates[slug];
  if (!meta) return true;

  const lastReviewed = new Date(meta.lastReviewedAt);
  const now = new Date();
  const daysSinceReview = Math.floor((now.getTime() - lastReviewed.getTime()) / (1000 * 60 * 60 * 24));

  switch (meta.reviewCycle) {
    case 'monthly': return daysSinceReview > 30;
    case 'quarterly': return daysSinceReview > 90;
    case 'biannual': return daysSinceReview > 180;
    default: return daysSinceReview > 90;
  }
};
