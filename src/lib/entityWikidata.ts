/**
 * Wikidata entity mapping for AI-search (GEO) entity disambiguation.
 *
 * Why this exists: ChatGPT, Perplexity, Google AI Overviews and Claude
 * resolve topics by entity ID, not by keyword. Linking concepts mentioned
 * in our articles to their Wikidata QID lets LLMs unambiguously connect
 * our content to the right entity in their knowledge graph — which
 * directly improves citation likelihood.
 *
 * Tokens are matched case-insensitively against article title +
 * metaDescription + excerpt + keywords. Each match adds a schema.org
 * `Thing` with `sameAs` pointing to Wikidata into the Article schema's
 * `mentions` array.
 */

export interface WikidataEntity {
  /** Canonical entity name used in JSON-LD output */
  name: string;
  /** Schema.org @type — defaults to "Thing" */
  type?: string;
  /** Wikidata QID URL */
  sameAs: string;
  /** Lowercased tokens that trigger a match (incl. variants) */
  tokens: string[];
}

export const WIKIDATA_ENTITIES: WikidataEntity[] = [
  // Core local-SEO concepts
  { name: "Search engine optimization", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q180711", tokens: ["seo", "suchmaschinenoptimierung", "search engine optimization"] },
  { name: "Local search", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q6664108", tokens: ["local seo", "lokale seo", "local search", "lokale suche"] },
  { name: "Google Business Profile", type: "Brand", sameAs: "https://www.wikidata.org/wiki/Q26937639", tokens: ["google business profile", "gbp", "google my business", "gmb", "google unternehmensprofil"] },
  { name: "Google Maps", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q12013", tokens: ["google maps", "google karten"] },
  { name: "Google Search", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q9366", tokens: ["google search", "google suche", "google-suche"] },
  { name: "Backlink", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q828581", tokens: ["backlink", "backlinks", "rückverweis"] },
  { name: "Keyword research", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q6401405", tokens: ["keyword research", "keyword-recherche", "keywordrecherche"] },
  { name: "Search engine results page", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1444471", tokens: ["serp", "serps", "suchergebnisseite"] },
  { name: "Schema.org", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q17084006", tokens: ["schema.org", "schema markup", "structured data", "strukturierte daten"] },
  { name: "Sitemap", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1059831", tokens: ["sitemap", "xml-sitemap", "xml sitemap"] },
  { name: "robots.txt", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q345027", tokens: ["robots.txt", "robots txt"] },

  // Reviews & ratings
  { name: "Online review", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q7090022", tokens: ["bewertung", "bewertungen", "online review", "kundenbewertung", "google rezension", "google bewertung", "rezensionen"] },
  { name: "Trustpilot", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q2510786", tokens: ["trustpilot"] },
  { name: "Yelp", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q218510", tokens: ["yelp"] },

  // AI / LLM landscape
  { name: "ChatGPT", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q115564437", tokens: ["chatgpt", "chat gpt"] },
  { name: "Perplexity AI", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q124313688", tokens: ["perplexity", "perplexity ai"] },
  { name: "Google Gemini", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q123697403", tokens: ["gemini", "google gemini", "bard"] },
  { name: "Claude", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q121948589", tokens: ["claude", "anthropic claude"] },
  { name: "Large language model", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q115305900", tokens: ["large language model", "llm", "sprachmodell"] },
  { name: "Generative artificial intelligence", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q117328917", tokens: ["generative ai", "generative ki", "geo", "generative engine optimization"] },

  // Platforms / channels
  { name: "Meta Platforms", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q380", tokens: ["facebook", "meta platforms"] },
  { name: "Instagram", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q209330", tokens: ["instagram"] },
  { name: "TikTok", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q19711102", tokens: ["tiktok"] },
  { name: "LinkedIn", type: "Organization", sameAs: "https://www.wikidata.org/wiki/Q67311", tokens: ["linkedin"] },
  { name: "YouTube", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q866", tokens: ["youtube"] },
  { name: "WhatsApp", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q2347135", tokens: ["whatsapp"] },

  // Verticals / professions (DACH-relevant)
  { name: "Restaurant", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q11707", tokens: ["restaurant", "gastronomie", "gastro"] },
  { name: "Lawyer", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q40348", tokens: ["anwalt", "rechtsanwalt", "kanzlei", "lawyer"] },
  { name: "Physician", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q39631", tokens: ["arzt", "ärzte", "praxis", "physician", "doctor"] },
  { name: "Dentist", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q27349", tokens: ["zahnarzt", "zahnärzte", "dentist"] },
  { name: "Physiotherapy", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q186005", tokens: ["physio", "physiotherapie", "physiotherapy"] },
  { name: "Hairdresser", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q55187", tokens: ["friseur", "frisör", "hairdresser", "salon"] },
  { name: "Craftsperson", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1294787", tokens: ["handwerk", "handwerker", "craftsman", "tradesperson"] },
  { name: "Plumbing", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q380782", tokens: ["klempner", "sanitär", "plumber"] },
  { name: "Real estate agent", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1240788", tokens: ["makler", "immobilienmakler", "real estate agent"] },
  { name: "Coaching", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1525564", tokens: ["coach", "coaching", "berater"] },
  { name: "Fitness centre", type: "Thing", sameAs: "https://www.wikidata.org/wiki/Q1322323", tokens: ["fitness", "fitnessstudio", "gym"] },

  // Web / analytics
  { name: "Google Analytics", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q1571831", tokens: ["google analytics", "ga4"] },
  { name: "Google Search Console", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q60531184", tokens: ["search console", "google search console", "gsc"] },
  { name: "WordPress", type: "SoftwareApplication", sameAs: "https://www.wikidata.org/wiki/Q13166", tokens: ["wordpress"] },
  { name: "General Data Protection Regulation", type: "Legislation", sameAs: "https://www.wikidata.org/wiki/Q1322322", tokens: ["dsgvo", "gdpr", "datenschutz-grundverordnung"] },
];

const ESCAPE = /[.*+?^${}()|[\]\\]/g;

const PATTERNS = WIKIDATA_ENTITIES.map((entity) => ({
  entity,
  regex: new RegExp(
    `(?:^|[^\\p{L}\\p{N}])(${entity.tokens
      .map((t) => t.replace(ESCAPE, "\\$&"))
      .join("|")})(?=$|[^\\p{L}\\p{N}])`,
    "iu"
  ),
}));

/**
 * Returns Wikidata-linked entities mentioned anywhere in the provided text.
 * Deduplicates by entity name. Result is capped at `limit` (default 10) to
 * keep JSON-LD lean.
 */
export function detectWikidataEntities(text: string, limit = 10): WikidataEntity[] {
  if (!text) return [];
  const hay = text.toLowerCase();
  const matched: WikidataEntity[] = [];
  const seen = new Set<string>();
  for (const { entity, regex } of PATTERNS) {
    if (matched.length >= limit) break;
    if (seen.has(entity.name)) continue;
    if (regex.test(hay)) {
      matched.push(entity);
      seen.add(entity.name);
    }
  }
  return matched;
}