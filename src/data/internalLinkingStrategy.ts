/**
 * Internal Linking Strategy Engine
 * 
 * Provides SEO-optimized anchor text recommendations, cross-link maps,
 * and audit functions ensuring every article links to ≥1 pillar + ≥2 hub siblings.
 */

import {
  HUB_DEFINITIONS,
  PILLAR_PAGES,
  getHubsForArticle,
  getPillarForArticle,
  getPrimaryHub,
  type HubDefinition,
  type PillarDefinition,
} from "./internalLinkRegistry";

// ============================================================
// 1. SEO ANCHOR TEXT RECOMMENDATIONS
// ============================================================

export interface AnchorTextRecommendation {
  slug: string;
  path: string;
  /** Primary keyword-rich anchor (use most often) */
  primaryAnchor: string;
  /** Variation anchors to avoid over-optimization */
  variations: string[];
  /** Branded/natural anchor for diversity */
  naturalAnchor: string;
}

/**
 * Curated anchor text map: keyword-rich primary + 2 variations + 1 natural.
 * Rule: max 2 uses of exact-match anchor per site → rotate variations.
 */
const ANCHOR_TEXT_MAP: Record<string, Omit<AnchorTextRecommendation, "slug" | "path">> = {
  // === PILLAR PAGES ===
  "lokale-suchmaschinenoptimierung-2026": {
    primaryAnchor: "lokale Suchmaschinenoptimierung 2026",
    variations: ["Local SEO Komplettguide", "Leitfaden für lokale SEO"],
    naturalAnchor: "unser umfassender Local-SEO-Guide",
  },
  "ultimate-guide-local-seo": {
    primaryAnchor: "Ultimate Guide Local SEO",
    variations: ["der komplette Local-SEO-Leitfaden", "Local SEO von A bis Z"],
    naturalAnchor: "alles über Local SEO in einem Guide",
  },
  "technisches-local-seo-guide": {
    primaryAnchor: "technisches Local SEO",
    variations: ["Technical Local SEO Guide", "technische SEO-Grundlagen für lokale Unternehmen"],
    naturalAnchor: "unser technischer SEO-Guide",
  },

  // === HUB PAGES ===
  "google-business-profil-hub": {
    primaryAnchor: "Google Business Profil Guides",
    variations: ["alle GBP-Anleitungen", "Google Business Hub"],
    naturalAnchor: "unsere GBP-Artikelsammlung",
  },
  "local-seo-branchen-hub": {
    primaryAnchor: "Local SEO Branchen-Guides",
    variations: ["branchenspezifische SEO-Anleitungen", "SEO-Guides nach Branche"],
    naturalAnchor: "alle Branchen-Guides im Überblick",
  },
  "local-seo-staedte-hub": {
    primaryAnchor: "Local SEO Städte-Guides",
    variations: ["stadtspezifische SEO-Anleitungen", "lokale SEO-Guides nach Stadt"],
    naturalAnchor: "Guides für deine Stadt",
  },
  "bewertungen-reputation-hub": {
    primaryAnchor: "Google Bewertungen & Reputation",
    variations: ["Bewertungsmanagement-Guides", "alle Bewertungs-Anleitungen"],
    naturalAnchor: "unsere Bewertungs-Guides",
  },
  "technisches-seo-hub": {
    primaryAnchor: "technisches SEO Hub",
    variations: ["Technical SEO Guides", "alle technischen SEO-Artikel"],
    naturalAnchor: "unsere technischen Guides",
  },
  "content-marketing-hub": {
    primaryAnchor: "Content Marketing für lokale Unternehmen",
    variations: ["lokale Content-Strategie", "Content & Marketing Hub"],
    naturalAnchor: "unsere Marketing-Guides",
  },
  "tools-ressourcen-hub": {
    primaryAnchor: "SEO-Tools & Ressourcen",
    variations: ["kostenlose SEO-Tools", "Tools & Ressourcen Hub"],
    naturalAnchor: "unsere Tool-Empfehlungen",
  },
  "ai-zukunft-hub": {
    primaryAnchor: "AI & Local SEO",
    variations: ["KI-Optimierung für lokale Suche", "AI & Zukunft Hub"],
    naturalAnchor: "unsere AI-SEO-Guides",
  },
  "troubleshooting-hub": {
    primaryAnchor: "Local SEO Problemlösungen",
    variations: ["GBP-Fehlerbehebung", "Troubleshooting Hub"],
    naturalAnchor: "Hilfe bei SEO-Problemen",
  },

  // === KEY ARTICLES ===
  "google-my-business-optimieren": {
    primaryAnchor: "Google Business Profil optimieren",
    variations: ["GBP-Optimierung Schritt für Schritt", "Google My Business einrichten"],
    naturalAnchor: "unser GBP-Optimierungsguide",
  },
  "google-bewertungen-bekommen": {
    primaryAnchor: "mehr Google-Bewertungen bekommen",
    variations: ["Google-Bewertungen generieren", "Bewertungsstrategie für lokale Unternehmen"],
    naturalAnchor: "unser Bewertungs-Guide",
  },
  "google-maps-ranking-verbessern": {
    primaryAnchor: "Google Maps Ranking verbessern",
    variations: ["Maps-Ranking optimieren", "besser auf Google Maps ranken"],
    naturalAnchor: "unser Maps-Ranking-Guide",
  },
  "nap-konsistenz-local-seo": {
    primaryAnchor: "NAP-Konsistenz für Local SEO",
    variations: ["Name-Adresse-Telefon optimieren", "NAP-Daten korrekt pflegen"],
    naturalAnchor: "unser NAP-Guide",
  },
  "schema-markup-local-seo": {
    primaryAnchor: "Schema Markup für Local SEO",
    variations: ["strukturierte Daten für lokale Unternehmen", "JSON-LD für Local SEO"],
    naturalAnchor: "unser Schema-Markup-Guide",
  },
  "local-seo-keywords-finden": {
    primaryAnchor: "lokale Keywords finden",
    variations: ["Keyword-Recherche für Local SEO", "die richtigen lokalen Suchbegriffe"],
    naturalAnchor: "unser Keyword-Guide",
  },
  "local-seo-audit-checkliste": {
    primaryAnchor: "Local SEO Audit Checkliste",
    variations: ["SEO-Audit für lokale Unternehmen", "Local-SEO-Analyse durchführen"],
    naturalAnchor: "unsere Audit-Checkliste",
  },
  "kostenloses-seo-guide": {
    primaryAnchor: "kostenloses SEO lernen",
    variations: ["SEO für Einsteiger", "Gratis-SEO-Guide 2026"],
    naturalAnchor: "unser kostenloser SEO-Einstieg",
  },
  "local-seo-fehler": {
    primaryAnchor: "häufige Local-SEO-Fehler",
    variations: ["typische SEO-Fehler vermeiden", "die größten Local-SEO-Fehler"],
    naturalAnchor: "die Fehler, die du vermeiden solltest",
  },
  "core-web-vitals-local-seo": {
    primaryAnchor: "Core Web Vitals für Local SEO",
    variations: ["Ladegeschwindigkeit optimieren", "Page Speed für lokale Rankings"],
    naturalAnchor: "unser Core-Web-Vitals-Guide",
  },
  "mobile-local-seo": {
    primaryAnchor: "Mobile Local SEO",
    variations: ["mobile Optimierung für lokale Suche", "Local SEO auf dem Smartphone"],
    naturalAnchor: "unser Mobile-SEO-Guide",
  },
  "local-content-marketing": {
    primaryAnchor: "lokales Content Marketing",
    variations: ["Content-Strategie für lokale Unternehmen", "lokale Inhalte erstellen"],
    naturalAnchor: "unser Content-Marketing-Guide",
  },
  "local-link-building": {
    primaryAnchor: "Local Link Building",
    variations: ["lokale Backlinks aufbauen", "Linkbuilding für lokale Unternehmen"],
    naturalAnchor: "unser Linkbuilding-Guide",
  },
  "local-citations-2025": {
    primaryAnchor: "Local Citations 2026",
    variations: ["Branchenverzeichnisse für Local SEO", "Citation-Strategie"],
    naturalAnchor: "unser Citations-Guide",
  },
  "google-maps-seo-ranking-faktoren": {
    primaryAnchor: "Google Maps Ranking-Faktoren",
    variations: ["Maps-SEO-Ranking-Signale", "wie Google Maps Rankings bestimmt"],
    naturalAnchor: "unser Ranking-Faktoren-Artikel",
  },
  "negative-google-bewertungen": {
    primaryAnchor: "negative Google-Bewertungen",
    variations: ["mit schlechten Bewertungen umgehen", "negative Rezensionen managen"],
    naturalAnchor: "unser Guide zu negativen Bewertungen",
  },
  "local-seo-fuer-restaurants": {
    primaryAnchor: "Local SEO für Restaurants",
    variations: ["Restaurant-SEO-Guide", "SEO-Strategie für die Gastronomie"],
    naturalAnchor: "unser Restaurant-SEO-Guide",
  },
  "local-seo-handwerker": {
    primaryAnchor: "Local SEO für Handwerker",
    variations: ["SEO für Handwerksbetriebe", "Handwerker bei Google sichtbar machen"],
    naturalAnchor: "unser Handwerker-SEO-Guide",
  },
  "local-seo-aerzte-praxen": {
    primaryAnchor: "Local SEO für Ärzte",
    variations: ["SEO für Arztpraxen", "Online-Sichtbarkeit für Mediziner"],
    naturalAnchor: "unser Ärzte-SEO-Guide",
  },
  "e-e-a-t-lokale-unternehmen": {
    primaryAnchor: "E-E-A-T für lokale Unternehmen",
    variations: ["Expertise und Vertrauen aufbauen", "Google E-E-A-T lokal umsetzen"],
    naturalAnchor: "unser E-E-A-T-Guide",
  },
  "google-ai-overviews-local-seo": {
    primaryAnchor: "Google AI Overviews und Local SEO",
    variations: ["AI Overviews für lokale Suche", "wie KI die lokale Suche verändert"],
    naturalAnchor: "unser AI-Overviews-Guide",
  },
  "ki-tools-local-seo": {
    primaryAnchor: "KI-Tools für Local SEO",
    variations: ["AI-Tools für lokales SEO", "künstliche Intelligenz im Local SEO"],
    naturalAnchor: "unser KI-Tools-Guide",
  },
  "local-seo-reporting-template": {
    primaryAnchor: "Local SEO Reporting Template",
    variations: ["SEO-Report erstellen", "Reporting-Vorlage für Local SEO"],
    naturalAnchor: "unsere Reporting-Vorlage",
  },
  "localbusiness-schema-implementierung": {
    primaryAnchor: "LocalBusiness Schema implementieren",
    variations: ["JSON-LD für lokale Unternehmen", "Schema.org LocalBusiness einrichten"],
    naturalAnchor: "unser Schema-Implementierungsguide",
  },
  "review-schema-implementierung": {
    primaryAnchor: "Review Schema implementieren",
    variations: ["Bewertungs-Schema einrichten", "Rich Snippets für Bewertungen"],
    naturalAnchor: "unser Review-Schema-Guide",
  },
};

/** Get SEO-optimized anchor text for a slug */
export function getAnchorText(slug: string): AnchorTextRecommendation | null {
  const entry = ANCHOR_TEXT_MAP[slug];
  if (!entry) return null;
  
  const isHub = HUB_DEFINITIONS.some(h => h.slug === slug);
  const isPillar = Object.values(PILLAR_PAGES).some(p => p.slug === slug);
  const path = isPillar
    ? Object.values(PILLAR_PAGES).find(p => p.slug === slug)!.path
    : isHub
      ? HUB_DEFINITIONS.find(h => h.slug === slug)!.path
      : `/blog/${slug}`;

  return { slug, path, ...entry };
}

/** Get a rotated anchor variation (avoids over-optimization) */
export function getRotatedAnchor(slug: string, index: number = 0): string {
  const rec = getAnchorText(slug);
  if (!rec) return slug;
  
  const allAnchors = [rec.primaryAnchor, ...rec.variations, rec.naturalAnchor];
  return allAnchors[index % allAnchors.length];
}

// ============================================================
// 2. CROSS-LINK RECOMMENDATIONS
// ============================================================

export interface CrossLinkRecommendation {
  targetSlug: string;
  targetPath: string;
  anchor: string;
  reason: string;
  linkType: "pillar" | "hub" | "sibling" | "lateral";
}

/**
 * Generate the minimum required internal links for any article.
 * Ensures: ≥1 pillar link + ≥2 hub/sibling links + lateral recommendations.
 */
export function getRequiredLinks(articleSlug: string): CrossLinkRecommendation[] {
  const links: CrossLinkRecommendation[] = [];
  
  // 1. Pillar link (mandatory)
  const pillar = getPillarForArticle(articleSlug);
  if (pillar) {
    const anchor = getAnchorText(pillar.slug);
    links.push({
      targetSlug: pillar.slug,
      targetPath: pillar.path,
      anchor: anchor?.primaryAnchor ?? pillar.title,
      reason: "Pillar-Verlinkung stärkt thematische Autorität",
      linkType: "pillar",
    });
  }

  // 2. Hub links (≥1 from primary hub)
  const hubs = getHubsForArticle(articleSlug);
  for (const hub of hubs.slice(0, 2)) {
    const anchor = getAnchorText(hub.slug);
    links.push({
      targetSlug: hub.slug,
      targetPath: hub.path,
      anchor: anchor?.primaryAnchor ?? hub.title,
      reason: `Hub-Verlinkung zu "${hub.title}"`,
      linkType: "hub",
    });
  }

  // 3. Sibling articles (≥2 from same hub)
  const primaryHub = getPrimaryHub(articleSlug);
  if (primaryHub) {
    const siblings = primaryHub.articleSlugs
      .filter(s => s !== articleSlug)
      .slice(0, 3);
    
    for (const sib of siblings) {
      const anchor = getAnchorText(sib);
      links.push({
        targetSlug: sib,
        targetPath: `/blog/${sib}`,
        anchor: anchor?.primaryAnchor ?? sib,
        reason: `Geschwister-Artikel im "${primaryHub.title}"`,
        linkType: "sibling",
      });
    }
  }

  // 4. Lateral links (cross-hub connections for topical breadth)
  const lateralMap: Record<string, string[]> = {
    "google-my-business-optimieren": ["local-seo-keywords-finden", "nap-konsistenz-local-seo", "google-maps-ranking-verbessern"],
    "google-bewertungen-bekommen": ["negative-google-bewertungen", "review-schema-implementierung", "e-e-a-t-lokale-unternehmen"],
    "local-seo-keywords-finden": ["local-content-marketing", "local-seo-audit-checkliste"],
    "schema-markup-local-seo": ["localbusiness-schema-implementierung", "review-schema-implementierung", "core-web-vitals-local-seo"],
    "nap-konsistenz-local-seo": ["local-citations-2025", "google-my-business-optimieren"],
    "local-seo-fehler": ["local-seo-audit-checkliste", "ranking-ploetzlich-verschwunden"],
    "google-maps-ranking-verbessern": ["google-maps-seo-ranking-faktoren", "google-bewertungen-bekommen"],
    "core-web-vitals-local-seo": ["mobile-local-seo", "schema-markup-local-seo"],
    "local-content-marketing": ["local-link-building", "e-e-a-t-lokale-unternehmen", "local-seo-keywords-finden"],
    "local-link-building": ["local-citations-2025", "local-content-marketing", "e-e-a-t-lokale-unternehmen"],
  };

  const laterals = lateralMap[articleSlug] ?? [];
  for (const lat of laterals.slice(0, 2)) {
    if (!links.some(l => l.targetSlug === lat)) {
      const anchor = getAnchorText(lat);
      links.push({
        targetSlug: lat,
        targetPath: `/blog/${lat}`,
        anchor: anchor?.variations[0] ?? lat,
        reason: "Laterale Verlinkung für thematische Breite",
        linkType: "lateral",
      });
    }
  }

  return links;
}

// ============================================================
// 3. AUDIT: CHECK LINKING COVERAGE
// ============================================================

export interface LinkingAuditResult {
  slug: string;
  hasPillarLink: boolean;
  hubLinksCount: number;
  siblingLinksCount: number;
  totalLinks: number;
  missingPillar: boolean;
  missingHubLinks: number; // how many more hub links needed (min 0)
  score: number; // 0-100
  recommendations: string[];
}

/** Audit a single article's linking coverage */
export function auditArticleLinking(articleSlug: string): LinkingAuditResult {
  const required = getRequiredLinks(articleSlug);
  const pillarLinks = required.filter(l => l.linkType === "pillar");
  const hubLinks = required.filter(l => l.linkType === "hub");
  const siblingLinks = required.filter(l => l.linkType === "sibling");
  
  const hasPillar = pillarLinks.length > 0;
  const hubCount = hubLinks.length;
  const sibCount = siblingLinks.length;
  const total = required.length;

  const recommendations: string[] = [];
  
  if (!hasPillar) {
    recommendations.push("⚠️ Keine Pillar-Verlinkung gefunden — füge einen Link zum Pillar-Guide hinzu");
  }
  if (hubCount < 1) {
    recommendations.push("⚠️ Keine Hub-Verlinkung — verlinke mindestens einen Topic Hub");
  }
  if (sibCount < 2) {
    recommendations.push(`⚠️ Nur ${sibCount} Geschwister-Links — mindestens 2 verwandte Artikel verlinken`);
  }
  if (total < 5) {
    recommendations.push("💡 Weniger als 5 interne Links — erwäge laterale Verlinkungen hinzuzufügen");
  }

  // Score: pillar=30pts, hubs=30pts (15 each, max 2), siblings=30pts (10 each, max 3), lateral=10pts
  let score = 0;
  if (hasPillar) score += 30;
  score += Math.min(hubCount, 2) * 15;
  score += Math.min(sibCount, 3) * 10;
  score += Math.min(required.filter(l => l.linkType === "lateral").length, 2) * 5;

  return {
    slug: articleSlug,
    hasPillarLink: hasPillar,
    hubLinksCount: hubCount,
    siblingLinksCount: sibCount,
    totalLinks: total,
    missingPillar: !hasPillar,
    missingHubLinks: Math.max(0, 1 - hubCount),
    score: Math.min(100, score),
    recommendations,
  };
}

/** Audit all articles in the registry and return sorted by score */
export function auditAllArticles(): LinkingAuditResult[] {
  const allSlugs = new Set<string>();
  
  for (const hub of HUB_DEFINITIONS) {
    for (const slug of hub.articleSlugs) {
      allSlugs.add(slug);
    }
  }
  
  return Array.from(allSlugs)
    .map(slug => auditArticleLinking(slug))
    .sort((a, b) => a.score - b.score);
}

/** Get overall linking health score (0-100) */
export function getSiteLinkingHealth(): {
  overallScore: number;
  totalArticles: number;
  articlesWithPillar: number;
  articlesWithMinHubs: number;
  articlesWithMinSiblings: number;
  weakArticles: LinkingAuditResult[];
} {
  const audits = auditAllArticles();
  const total = audits.length;
  
  const withPillar = audits.filter(a => a.hasPillarLink).length;
  const withHubs = audits.filter(a => a.hubLinksCount >= 1).length;
  const withSiblings = audits.filter(a => a.siblingLinksCount >= 2).length;
  
  const avgScore = audits.reduce((sum, a) => sum + a.score, 0) / (total || 1);
  
  return {
    overallScore: Math.round(avgScore),
    totalArticles: total,
    articlesWithPillar: withPillar,
    articlesWithMinHubs: withHubs,
    articlesWithMinSiblings: withSiblings,
    weakArticles: audits.filter(a => a.score < 60),
  };
}
