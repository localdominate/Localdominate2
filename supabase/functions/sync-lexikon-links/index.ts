import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting configuration
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // 5 calls per hour
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

// All SEO Lexikon terms with searchable keywords
const LEXIKON_TERMS = [
  { term: "Alt-Text", slug: "alt-text", keywords: ["alt-text", "alternativtext", "bild-beschreibung"] },
  { term: "Anchor Text", slug: "anchor-text", keywords: ["anchor text", "ankertext", "link-text", "linktext"] },
  { term: "Backlinks", slug: "backlinks", keywords: ["backlinks", "backlink", "eingehende links", "externe links"] },
  { term: "Bounce Rate", slug: "bounce-rate", keywords: ["bounce rate", "absprungrate", "absprungraten"] },
  { term: "Citations", slug: "citations", keywords: ["citations", "citation", "brancheneinträge"] },
  { term: "Canonical URL", slug: "canonical-url", keywords: ["canonical", "canonical url", "canonical tag"] },
  { term: "Core Web Vitals", slug: "core-web-vitals", keywords: ["core web vitals", "cwv", "lcp", "inp", "cls"] },
  { term: "Crawling", slug: "crawling", keywords: ["crawling", "crawler", "googlebot", "crawl"] },
  { term: "Domain Authority", slug: "domain-authority", keywords: ["domain authority", "da", "domain autorität"] },
  { term: "Duplicate Content", slug: "duplicate-content", keywords: ["duplicate content", "doppelte inhalte", "duplikate"] },
  { term: "E-E-A-T", slug: "e-e-a-t", keywords: ["e-e-a-t", "eeat", "expertise", "experience", "authority", "trust"] },
  { term: "Featured Snippet", slug: "featured-snippet", keywords: ["featured snippet", "position 0", "antwortbox"] },
  { term: "Google Business Profile", slug: "google-business-profile", keywords: ["google business profile", "gbp", "google my business", "gmb", "google unternehmensprofil"] },
  { term: "Geo-Targeting", slug: "geo-targeting", keywords: ["geo-targeting", "geo targeting", "standort-targeting"] },
  { term: "Indexierung", slug: "indexierung", keywords: ["indexierung", "index", "indexiert", "indexieren"] },
  { term: "Internal Linking", slug: "internal-linking", keywords: ["internal linking", "interne verlinkung", "interne links"] },
  { term: "JSON-LD", slug: "json-ld", keywords: ["json-ld", "jsonld", "json ld", "strukturierte daten"] },
  { term: "Keywords", slug: "keywords", keywords: ["keywords", "keyword", "schlüsselwörter", "suchbegriffe"] },
  { term: "Link Building", slug: "link-building", keywords: ["link building", "linkbuilding", "linkaufbau"] },
  { term: "Local Pack", slug: "local-pack", keywords: ["local pack", "3-pack", "map pack", "kartenpaket"] },
  { term: "Long-Tail Keywords", slug: "long-tail-keywords", keywords: ["long-tail", "longtail", "long tail keywords"] },
  { term: "Mobile First Index", slug: "mobile-first-index", keywords: ["mobile first", "mobile-first", "mobile first index"] },
  { term: "NAP", slug: "nap", keywords: ["nap", "name address phone", "nap-daten", "nap-konsistenz"] },
  { term: "Off-Page SEO", slug: "off-page-seo", keywords: ["off-page", "offpage", "off page seo"] },
  { term: "On-Page SEO", slug: "on-page-seo", keywords: ["on-page", "onpage", "on page seo"] },
  { term: "Organic Traffic", slug: "organic-traffic", keywords: ["organic traffic", "organischer traffic", "organische besucher"] },
  { term: "PageSpeed", slug: "pagespeed", keywords: ["pagespeed", "page speed", "ladezeit", "ladegeschwindigkeit"] },
  { term: "Proximity", slug: "proximity", keywords: ["proximity", "nähe", "standortnähe", "entfernung"] },
  { term: "Reviews", slug: "reviews", keywords: ["reviews", "bewertungen", "rezensionen", "google bewertungen"] },
  { term: "Rich Snippets", slug: "rich-snippets", keywords: ["rich snippets", "rich results", "erweiterte snippets"] },
  { term: "Robots.txt", slug: "robots-txt", keywords: ["robots.txt", "robots", "crawling-anweisungen"] },
  { term: "Schema Markup", slug: "schema-markup", keywords: ["schema markup", "schema.org", "strukturierte daten", "schema"] },
  { term: "Search Intent", slug: "search-intent", keywords: ["search intent", "suchintention", "nutzerabsicht"] },
  { term: "SERP", slug: "serp", keywords: ["serp", "suchergebnisseite", "search engine results"] },
  { term: "Sitemap", slug: "sitemap", keywords: ["sitemap", "xml-sitemap", "xml sitemap"] },
  { term: "Technical SEO", slug: "technical-seo", keywords: ["technical seo", "technisches seo", "technische optimierung"] },
  { term: "Title Tag", slug: "title-tag", keywords: ["title tag", "seitentitel", "title", "meta title"] },
  { term: "URL-Struktur", slug: "url-struktur", keywords: ["url-struktur", "url struktur", "url aufbau"] },
  { term: "User Experience", slug: "user-experience", keywords: ["user experience", "ux", "nutzererfahrung", "benutzererfahrung"] },
  { term: "Voice Search", slug: "voice-search", keywords: ["voice search", "sprachsuche", "sprachassistent"] },
  { term: "Webmaster Tools", slug: "webmaster-tools", keywords: ["webmaster tools", "search console", "google search console"] },
  { term: "XML-Sitemap", slug: "xml-sitemap", keywords: ["xml-sitemap", "xml sitemap", "sitemap.xml"] },
  { term: "YMYL", slug: "ymyl", keywords: ["ymyl", "your money your life"] },
  { term: "Zero-Click Search", slug: "zero-click-search", keywords: ["zero-click", "zero click search", "null-klick"] },
];

// All blog articles
const BLOG_ARTICLES = [
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: Der ultimative Guide" },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
  { slug: "google-my-business-optimieren", title: "Google My Business optimieren" },
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale SEO Trends 2026" },
  { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz Guide" },
  { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants" },
  { slug: "local-seo-handwerker", title: "Local SEO für Handwerker" },
  { slug: "local-seo-keywords-finden", title: "Lokale Keywords finden" },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
  { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
  { slug: "mobile-local-seo", title: "Mobile Local SEO" },
  { slug: "local-link-building", title: "Local Link Building Strategien" },
  { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
  { slug: "local-content-marketing", title: "Local Content Marketing" },
  { slug: "negative-google-bewertungen", title: "Negative Bewertungen managen" },
  { slug: "local-seo-aerzte", title: "Local SEO für Ärzte" },
  { slug: "local-seo-anwaelte", title: "Local SEO für Anwälte" },
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz" },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich" },
  { slug: "local-seo-muenchen", title: "Local SEO München" },
  { slug: "local-seo-berlin", title: "Local SEO Berlin" },
  { slug: "local-seo-hamburg", title: "Local SEO Hamburg" },
  { slug: "local-seo-frankfurt", title: "Local SEO Frankfurt" },
  { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
  { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
  { slug: "local-seo-autohaeuser", title: "Local SEO für Autohäuser" },
  { slug: "local-seo-fitness", title: "Local SEO für Fitnessstudios" },
  { slug: "local-seo-hotels", title: "Local SEO für Hotels" },
  { slug: "local-seo-immobilienmakler", title: "Local SEO für Immobilienmakler" },
  { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater" },
  { slug: "local-seo-friseur", title: "Local SEO für Friseure" },
  { slug: "local-seo-doenerladen", title: "Local SEO für Dönerläden" },
  { slug: "local-seo-case-study", title: "Local SEO Case Study" },
];

// Map of which terms are likely relevant to which articles
const TERM_ARTICLE_MAPPING: Record<string, string[]> = {
  "alt-text": ["kostenloses-seo-guide", "mobile-local-seo"],
  "anchor-text": ["local-link-building", "kostenloses-seo-guide"],
  "backlinks": ["local-link-building", "google-maps-ranking-verbessern", "kostenloses-seo-guide"],
  "bounce-rate": ["core-web-vitals-local-seo", "kostenloses-seo-guide"],
  "citations": ["nap-konsistenz-local-seo", "local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "canonical-url": ["local-seo-fehler", "schema-markup-local-seo"],
  "core-web-vitals": ["core-web-vitals-local-seo", "mobile-local-seo", "kostenloses-seo-guide"],
  "crawling": ["local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "domain-authority": ["local-link-building", "google-maps-ranking-verbessern"],
  "duplicate-content": ["local-seo-fehler", "kostenloses-seo-guide"],
  "e-e-a-t": ["local-seo-aerzte", "local-seo-anwaelte", "google-bewertungen-bekommen", "lokale-suchmaschinenoptimierung-2026"],
  "featured-snippet": ["kostenloses-seo-guide", "lokale-suchmaschinenoptimierung-2026"],
  "google-business-profile": ["google-my-business-optimieren", "local-seo-fuer-restaurants", "local-seo-handwerker", "local-seo-aerzte", "google-maps-ranking-verbessern"],
  "geo-targeting": ["local-seo-schweiz", "local-seo-zuerich", "local-seo-muenchen", "local-seo-berlin", "local-seo-hamburg", "local-seo-frankfurt"],
  "indexierung": ["local-seo-audit-checkliste", "kostenloses-seo-guide", "local-seo-fuer-restaurants"],
  "internal-linking": ["local-content-marketing", "kostenloses-seo-guide"],
  "json-ld": ["schema-markup-local-seo"],
  "keywords": ["local-seo-keywords-finden", "kostenloses-seo-guide", "local-content-marketing"],
  "link-building": ["local-link-building", "kostenloses-seo-guide"],
  "local-pack": ["google-maps-ranking-verbessern", "google-maps-ranking-faktoren", "google-bewertungen-bekommen", "google-my-business-optimieren"],
  "long-tail-keywords": ["local-seo-keywords-finden", "kostenloses-seo-guide"],
  "mobile-first-index": ["mobile-local-seo", "core-web-vitals-local-seo"],
  "nap": ["nap-konsistenz-local-seo", "local-seo-fehler", "local-seo-audit-checkliste"],
  "off-page-seo": ["local-link-building", "kostenloses-seo-guide"],
  "on-page-seo": ["kostenloses-seo-guide", "local-seo-audit-checkliste"],
  "organic-traffic": ["kostenloses-seo-guide", "local-seo-case-study"],
  "pagespeed": ["core-web-vitals-local-seo", "mobile-local-seo"],
  "proximity": ["google-maps-ranking-faktoren", "google-maps-ranking-verbessern"],
  "reviews": ["google-bewertungen-bekommen", "negative-google-bewertungen", "google-my-business-optimieren"],
  "rich-snippets": ["schema-markup-local-seo", "local-seo-fuer-restaurants"],
  "robots-txt": ["local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "schema-markup": ["schema-markup-local-seo", "local-seo-fuer-restaurants", "local-seo-audit-checkliste"],
  "search-intent": ["local-seo-keywords-finden", "local-content-marketing"],
  "serp": ["google-maps-ranking-verbessern", "local-seo-keywords-finden"],
  "sitemap": ["local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "technical-seo": ["local-seo-audit-checkliste", "mobile-local-seo", "core-web-vitals-local-seo"],
  "title-tag": ["kostenloses-seo-guide", "local-seo-audit-checkliste"],
  "url-struktur": ["local-seo-fehler", "kostenloses-seo-guide"],
  "user-experience": ["core-web-vitals-local-seo", "mobile-local-seo"],
  "voice-search": ["lokale-suchmaschinenoptimierung-2026", "mobile-local-seo"],
  "webmaster-tools": ["local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "xml-sitemap": ["local-seo-audit-checkliste", "kostenloses-seo-guide"],
  "ymyl": ["local-seo-aerzte", "local-seo-anwaelte"],
  "zero-click-search": ["lokale-suchmaschinenoptimierung-2026"],
};

function calculateRelevanceScore(termSlug: string, articleSlug: string): number {
  const mappedArticles = TERM_ARTICLE_MAPPING[termSlug] || [];
  
  // Base score if term is mapped to this article
  if (mappedArticles.includes(articleSlug)) {
    // Higher score for first articles in the mapping (more relevant)
    const position = mappedArticles.indexOf(articleSlug);
    return Math.max(90 - position * 10, 60);
  }
  
  return 0;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Apply rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.log(`[sync-lexikon-links] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429 
      }
    );
  }

  const startTime = Date.now();
  
  try {
    console.log('[sync-lexikon-links] Starting sync...');
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    let newLinksCreated = 0;
    let linksUpdated = 0;
    const linksToUpsert: Array<{
      term_name: string;
      term_slug: string;
      article_slug: string;
      article_title: string;
      link_type: string;
      relevance_score: number;
    }> = [];
    
    // Generate all links based on mapping
    for (const term of LEXIKON_TERMS) {
      const mappedArticles = TERM_ARTICLE_MAPPING[term.slug] || [];
      
      for (const articleSlug of mappedArticles) {
        const article = BLOG_ARTICLES.find(a => a.slug === articleSlug);
        if (!article) continue;
        
        const relevanceScore = calculateRelevanceScore(term.slug, articleSlug);
        if (relevanceScore > 0) {
          linksToUpsert.push({
            term_name: term.term,
            term_slug: term.slug,
            article_slug: article.slug,
            article_title: article.title,
            link_type: 'auto',
            relevance_score: relevanceScore,
          });
        }
      }
    }
    
    console.log(`[sync-lexikon-links] Generated ${linksToUpsert.length} potential links`);
    
    // Upsert all links
    for (const link of linksToUpsert) {
      const { data: existing } = await supabase
        .from('lexikon_article_links')
        .select('id, relevance_score')
        .eq('term_slug', link.term_slug)
        .eq('article_slug', link.article_slug)
        .maybeSingle();
      
      if (existing) {
        // Update if relevance changed
        if (existing.relevance_score !== link.relevance_score) {
          await supabase
            .from('lexikon_article_links')
            .update({ relevance_score: link.relevance_score, updated_at: new Date().toISOString() })
            .eq('id', existing.id);
          linksUpdated++;
        }
      } else {
        // Insert new link
        const { error } = await supabase
          .from('lexikon_article_links')
          .insert(link);
        
        if (!error) {
          newLinksCreated++;
        } else {
          console.error(`[sync-lexikon-links] Error inserting link: ${error.message}`);
        }
      }
    }
    
    const durationMs = Date.now() - startTime;
    
    // Log the sync run
    await supabase.from('lexikon_sync_log').insert({
      new_links_created: newLinksCreated,
      links_updated: linksUpdated,
      articles_scanned: BLOG_ARTICLES.length,
      terms_processed: LEXIKON_TERMS.length,
      duration_ms: durationMs,
      status: 'completed',
    });
    
    console.log(`[sync-lexikon-links] Sync completed: ${newLinksCreated} new, ${linksUpdated} updated in ${durationMs}ms`);
    
    return new Response(
      JSON.stringify({
        success: true,
        new_links_created: newLinksCreated,
        links_updated: linksUpdated,
        articles_scanned: BLOG_ARTICLES.length,
        terms_processed: LEXIKON_TERMS.length,
        duration_ms: durationMs,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[sync-lexikon-links] Error:', errorMessage);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      await supabase.from('lexikon_sync_log').insert({
        status: 'error',
        error_message: errorMessage,
        duration_ms: Date.now() - startTime,
      });
    }
    
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});