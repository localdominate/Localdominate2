import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting configuration
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 10; // 10 calls per hour (sitemap is requested more often)
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

interface BlogArticle {
  slug: string;
  title: string;
  updatedAt: string;
  featured: boolean;
  category: string;
  hasImage: boolean;
}

interface ScheduledPost {
  slug: string;
  title: string;
  scheduled_at: string;
  status: string;
}

// Complete blog articles list - synchronized with src/data/blogArticles.ts
const staticBlogArticles: BlogArticle[] = [
  // Featured Articles
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: Der ultimative Guide für Einsteiger 2026", updatedAt: "2026-01-09", featured: true, category: "Strategie", hasImage: true },
  { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden: Der komplette Keyword-Recherche Guide", updatedAt: "2026-01-07", featured: true, category: "Strategie", hasImage: true },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern: Der ultimative Guide", updatedAt: "2026-01-07", featured: true, category: "Local SEO", hasImage: true },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert", updatedAt: "2026-01-07", featured: true, category: "Trends", hasImage: true },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste: 50+ Punkte für mehr Sichtbarkeit", updatedAt: "2026-01-07", featured: true, category: "Strategie", hasImage: true },
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz: Der komplette Leitfaden für KMUs", updatedAt: "2026-01-10", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich: So dominierst du den Zürcher Markt", updatedAt: "2026-01-12", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-muenchen", title: "Local SEO München: Der Guide für bayerische Unternehmen", updatedAt: "2026-01-14", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-berlin", title: "Local SEO Berlin: Der Hauptstadt-Guide", updatedAt: "2026-01-09", featured: true, category: "Regionen", hasImage: false },
  
  // Regular Articles - Google Business
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen: 7 bewährte Strategien", updatedAt: "2026-01-07", featured: false, category: "Bewertungen", hasImage: true },
  { slug: "google-my-business-optimieren", title: "Google My Business optimieren: Schritt-für-Schritt Anleitung", updatedAt: "2026-01-07", featured: false, category: "Google Business", hasImage: true },
  { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren 2026", updatedAt: "2026-01-09", featured: false, category: "Local SEO", hasImage: false },
  { slug: "negative-google-bewertungen", title: "Negative Google Bewertungen professionell behandeln", updatedAt: "2026-01-09", featured: false, category: "Bewertungen", hasImage: false },
  { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews für Local SEO", updatedAt: "2026-01-11", featured: false, category: "Trends", hasImage: true },
  { slug: "ki-tools-local-seo", title: "KI-Tools für Local SEO", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: true },
  { slug: "google-business-kategorien-guide", title: "Google Business Kategorien: Der komplette Guide", updatedAt: "2026-01-11", featured: false, category: "Google Business", hasImage: true },
  { slug: "google-business-produkte-services", title: "Google Business Produkte & Services optimal nutzen", updatedAt: "2026-01-11", featured: false, category: "Google Business", hasImage: true },
  { slug: "bewertungs-antworten-vorlagen", title: "Bewertungs-Antworten Vorlagen", updatedAt: "2026-01-11", featured: false, category: "Bewertungen", hasImage: true },
  { slug: "google-business-insights-verstehen", title: "Google Business Insights verstehen und nutzen", updatedAt: "2026-01-11", featured: false, category: "Google Business", hasImage: true },
  { slug: "google-business-messaging", title: "Google Business Messaging einrichten", updatedAt: "2026-01-11", featured: false, category: "Google Business", hasImage: false },
  { slug: "gbp-fotos-optimieren", title: "Google Business Fotos optimieren", updatedAt: "2026-01-11", featured: false, category: "Google Business", hasImage: false },
  { slug: "e-e-a-t-lokale-unternehmen", title: "E-E-A-T für lokale Unternehmen", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: false },
  { slug: "local-seo-mehrstufig-unternehmen", title: "Local SEO für mehrstufige Unternehmen", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: true },
  { slug: "local-seo-neugruender", title: "Local SEO für Neugründer", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: true },
  
  // Regular Articles - NAP & Technical
  { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten", updatedAt: "2026-01-07", featured: false, category: "Local SEO", hasImage: true },
  { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: true },
  { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: false },
  { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: false },
  { slug: "local-content-marketing", title: "Local Content Marketing Strategien", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: true },
  { slug: "local-link-building", title: "Local Link Building Strategien", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: true },
  { slug: "local-seo-case-study", title: "Local SEO Case Study", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
  { slug: "local-seo-fehler", title: "Die 10 häufigsten Local SEO Fehler", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
  { slug: "local-seo-notdienst-keywords", title: "Notdienst-Keywords für Local SEO", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: true },
  { slug: "lokale-events-marketing", title: "Lokale Events für SEO nutzen", updatedAt: "2026-01-11", featured: false, category: "Strategie", hasImage: true },
  { slug: "local-citations-2025", title: "Local Citations 2025: Der komplette Guide", updatedAt: "2026-01-12", featured: false, category: "Local SEO", hasImage: true },
  
  // GBP Troubleshooting Articles
  { slug: "gbp-suspendiert-reaktivieren", title: "GBP suspendiert: Reaktivierung Schritt für Schritt", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "gbp-verifizierung-fehlgeschlagen", title: "GBP Verifizierung fehlgeschlagen: Lösungen", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "duplicate-listing-entfernen", title: "Duplicate Listings entfernen: Anleitung", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "ranking-ploetzlich-verschwunden", title: "Ranking plötzlich verschwunden: Soforthilfe", updatedAt: "2026-01-12", featured: false, category: "Local SEO", hasImage: true },
  { slug: "gbp-nicht-in-suche-sichtbar", title: "GBP nicht in Suche sichtbar: Diagnose", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "local-seo-vs-maps-seo", title: "Local SEO vs Maps SEO: Die Unterschiede", updatedAt: "2026-01-12", featured: false, category: "Strategie", hasImage: true },
  { slug: "gbp-bewertung-loeschen-anleitung", title: "GBP Bewertung löschen: Anleitung", updatedAt: "2026-01-12", featured: false, category: "Bewertungen", hasImage: true },
  { slug: "gbp-mehrere-standorte", title: "GBP mehrere Standorte verwalten", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "gbp-oeffnungszeiten-sondertage", title: "GBP Öffnungszeiten & Sondertage", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "gbp-attribute-richtig-nutzen", title: "GBP Attribute richtig nutzen", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: true },
  { slug: "google-posts-ranking-faktor", title: "Google Posts als Ranking-Faktor", updatedAt: "2026-01-12", featured: false, category: "Google Business", hasImage: false },
  { slug: "local-seo-voice-search", title: "Local SEO für Voice Search", updatedAt: "2026-01-12", featured: false, category: "Trends", hasImage: false },
  
  // Regular Articles - Industries
  { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants: Mehr Gäste durch Google", updatedAt: "2026-01-07", featured: false, category: "Gastronomie", hasImage: true },
  { slug: "local-seo-handwerker", title: "Local SEO für Handwerker: Mehr Aufträge durch Google", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte & Praxen", updatedAt: "2026-01-18", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte & Kanzleien", updatedAt: "2026-01-19", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater", updatedAt: "2026-01-20", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-friseur", title: "Local SEO für Friseure", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-doenerladen", title: "Local SEO für Dönerläden", updatedAt: "2026-01-07", featured: false, category: "Gastronomie", hasImage: false },
  { slug: "local-seo-autowerkstatt", title: "Local SEO für Autowerkstätten", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-fitness", title: "Local SEO für Fitnessstudios", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-hotels", title: "Local SEO für Hotels", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-immobilienmakler", title: "Local SEO für Immobilienmakler", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-physiotherapie", title: "Local SEO für Physiotherapie-Praxen", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-zahnarzt", title: "Local SEO für Zahnärzte", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-optiker", title: "Local SEO für Optiker", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-elektrotechnik", title: "Local SEO für Elektrotechniker", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-tattoo", title: "Local SEO für Tattoo-Studios", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-tierarzt", title: "Local SEO für Tierärzte", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-yoga", title: "Local SEO für Yoga-Studios", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-apotheke", title: "Local SEO für Apotheken", updatedAt: "2026-01-11", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-fotograf", title: "Local SEO für Fotografen", updatedAt: "2026-01-12", featured: false, category: "Branchen", hasImage: false },
  
  // Regular Articles - Regions
  { slug: "local-seo-hamburg", title: "Local SEO Hamburg", updatedAt: "2026-01-09", featured: false, category: "Regionen", hasImage: false },
  { slug: "local-seo-frankfurt", title: "Local SEO Frankfurt", updatedAt: "2026-01-09", featured: false, category: "Regionen", hasImage: false },
  { slug: "local-seo-koeln", title: "Local SEO Köln", updatedAt: "2026-01-11", featured: false, category: "Regionen", hasImage: true },
  { slug: "local-seo-duesseldorf", title: "Local SEO Düsseldorf", updatedAt: "2026-01-11", featured: false, category: "Regionen", hasImage: true },
  { slug: "local-seo-stuttgart", title: "Local SEO Stuttgart", updatedAt: "2026-01-11", featured: false, category: "Regionen", hasImage: true },
  { slug: "local-seo-wien", title: "Local SEO Wien", updatedAt: "2026-01-11", featured: false, category: "Regionen", hasImage: true },
  { slug: "local-seo-basel", title: "Local SEO Basel", updatedAt: "2026-01-11", featured: false, category: "Regionen", hasImage: true },
];

// Image mapping for articles that have blog images
const imageMap: Record<string, string> = {
  'google-maps-ranking-verbessern': 'google-maps-ranking.jpg',
  'google-bewertungen-bekommen': 'google-bewertungen.jpg',
  'google-my-business-optimieren': 'google-my-business.jpg',
  'local-seo-audit-checkliste': 'local-seo-audit.jpg',
  'local-seo-handwerker': 'local-seo-handwerker.jpg',
  'local-seo-keywords-finden': 'local-seo-keywords.jpg',
  'local-seo-fuer-restaurants': 'local-seo-restaurant.jpg',
  'lokale-suchmaschinenoptimierung-2026': 'lokale-seo-2026.jpg',
  'nap-konsistenz-local-seo': 'nap-konsistenz.jpg',
  'kostenloses-seo-guide': 'seo-toolbox.jpg',
  'google-ai-overviews-local-seo': 'google-ai-overviews.jpg',
  'ki-tools-local-seo': 'ki-tools-local-seo.jpg',
  'local-seo-physiotherapie': 'local-seo-physiotherapie.jpg',
  'local-seo-zahnarzt': 'local-seo-zahnarzt.jpg',
  'local-seo-optiker': 'local-seo-optiker.jpg',
  'local-seo-elektrotechnik': 'local-seo-elektrotechnik.jpg',
  'local-seo-notdienst-keywords': 'local-seo-notdienst-keywords.jpg',
  'lokale-events-marketing': 'lokale-events-marketing.jpg',
  'google-business-kategorien-guide': 'google-business-kategorien.jpg',
  'google-business-produkte-services': 'google-business-produkte.jpg',
  'bewertungs-antworten-vorlagen': 'bewertungs-antworten-vorlagen.jpg',
  'google-business-insights-verstehen': 'google-business-insights.jpg',
  'local-seo-koeln': 'local-seo-koeln.jpg',
  'local-seo-duesseldorf': 'local-seo-duesseldorf.jpg',
  'local-seo-stuttgart': 'local-seo-stuttgart.jpg',
  'local-seo-wien': 'local-seo-wien.jpg',
  'local-seo-basel': 'local-seo-basel.jpg',
  'local-seo-tattoo': 'local-seo-tattoo.jpg',
  'local-seo-tierarzt': 'local-seo-tierarzt.jpg',
  'local-seo-yoga': 'local-seo-yoga.jpg',
  'local-seo-apotheke': 'local-seo-apotheke.jpg',
  'gbp-suspendiert-reaktivieren': 'gbp-suspendiert.jpg',
  'gbp-verifizierung-fehlgeschlagen': 'gbp-verifizierung.jpg',
  'duplicate-listing-entfernen': 'duplicate-listing.jpg',
  'ranking-ploetzlich-verschwunden': 'ranking-verschwunden.jpg',
  'gbp-nicht-in-suche-sichtbar': 'gbp-nicht-sichtbar.jpg',
  'local-seo-vs-maps-seo': 'local-vs-maps-seo.jpg',
  'gbp-bewertung-loeschen-anleitung': 'gbp-bewertung-loeschen.jpg',
  'gbp-mehrere-standorte': 'gbp-mehrere-standorte.jpg',
  'gbp-oeffnungszeiten-sondertage': 'gbp-oeffnungszeiten.jpg',
  'gbp-attribute-richtig-nutzen': 'gbp-attribute.jpg',
  'local-citations-2025': 'local-citations.jpg',
  'schema-markup-local-seo': 'schema-markup-local.jpg',
  'local-content-marketing': 'local-content-marketing.jpg',
  'local-link-building': 'local-link-building.jpg',
  'local-seo-mehrstufig-unternehmen': 'local-seo-mehrstufig.jpg',
  'local-seo-neugruender': 'local-seo-neugruender.jpg',
};

// SEO Lexikon entries for sitemap
const lexikonEntries = [
  'local-seo', 'google-business-profile', 'nap', 'local-pack', 'citation',
  'geotargeting', 'proximity', 'gmb', 'local-keywords', 'review-management',
  'schema-markup', 'mobile-first', 'voice-search', 'near-me-searches', 'local-intent',
  'service-area-business', 'multi-location-seo', 'local-landing-page', 'map-pack',
  'local-search-ranking-factors'
];

// Merge static articles with scheduled posts from database
async function getAllBlogArticles(supabaseUrl: string, supabaseKey: string): Promise<BlogArticle[]> {
  const allArticles = [...staticBlogArticles];
  const existingSlugs = new Set(allArticles.map(a => a.slug));
  
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    // Fetch published posts from database
    const { data: scheduledPosts, error } = await supabase
      .from('scheduled_posts')
      .select('slug, title, scheduled_at, status')
      .eq('status', 'published');
    
    if (!error && scheduledPosts) {
      for (const post of scheduledPosts as ScheduledPost[]) {
        if (!existingSlugs.has(post.slug)) {
          allArticles.push({
            slug: post.slug,
            title: post.title,
            updatedAt: post.scheduled_at.split('T')[0],
            featured: false,
            category: 'Strategie',
            hasImage: !!imageMap[post.slug]
          });
          existingSlugs.add(post.slug);
        }
      }
    }
    
    console.log(`📚 [generate-sitemap] Merged ${allArticles.length} articles (${scheduledPosts?.length || 0} from DB)`);
  } catch (e) {
    console.error('[generate-sitemap] Error fetching scheduled posts:', e);
  }
  
  return allArticles;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateBlogSitemap(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominate.org';
  const today = new Date().toISOString().split('T')[0];
  
  const sortedArticles = [...blogArticles].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

`;

  for (const article of sortedArticles) {
    const priority = article.featured ? '1.0' : '0.8';
    const changefreq = article.featured ? 'weekly' : 'monthly';
    const imageName = imageMap[article.slug];
    
    xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${article.updatedAt}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;
    
    if (imageName) {
      xml += `
    <image:image>
      <image:loc>${baseUrl}/images/blog/${imageName}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
    </image:image>`;
    }
    
    xml += `
  </url>

`;
  }

  xml += `</urlset>`;
  return xml;
}

function generateMainSitemap(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominate.org';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/lexikon</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/impressum</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/datenschutz</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/agb</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>`;
  
  return xml;
}

function generateLexikonSitemap(): string {
  const baseUrl = 'https://localdominate.org';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>${baseUrl}/lexikon</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

`;

  for (const entry of lexikonEntries) {
    xml += `  <url>
    <loc>${baseUrl}/lexikon/${entry}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

`;
  }

  xml += `</urlset>`;
  return xml;
}

function generateSitemapIndex(): string {
  const baseUrl = 'https://localdominate.org';
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-lexikon.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-images.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

function generateImageSitemap(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominate.org';
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

`;

  for (const article of blogArticles) {
    const imageName = imageMap[article.slug];
    if (imageName) {
      xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <image:image>
      <image:loc>${baseUrl}/images/blog/${imageName}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
      <image:caption>Illustration für ${escapeXml(article.title)}</image:caption>
    </image:image>
  </url>

`;
    }
  }

  xml += `</urlset>`;
  return xml;
}

function generateRssFeed(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominate.org';
  const now = new Date().toUTCString();
  
  const sortedArticles = [...blogArticles]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 20);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Local Dominator Blog</title>
    <description>Aktuelle Tipps und Strategien für Local SEO und Google Business Profile Optimierung</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>de-DE</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>

`;

  for (const article of sortedArticles) {
    const pubDate = new Date(article.updatedAt).toUTCString();
    xml += `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
    </item>

`;
  }

  xml += `  </channel>
</rss>`;
  
  return xml;
}

function generateLlmsTxt(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominate.org';
  
  let content = `# Local Dominator - Local SEO Expertise

> Local Dominator ist die führende Ressource für Local SEO im deutschsprachigen Raum.

## Hauptseiten

- [Homepage](${baseUrl}/) - Local SEO Agentur für mehr lokale Sichtbarkeit
- [Blog](${baseUrl}/blog) - Aktuelle Tipps und Strategien
- [SEO Lexikon](${baseUrl}/lexikon) - Fachbegriffe einfach erklärt

## Featured Guides

`;

  const featuredArticles = blogArticles.filter(a => a.featured);
  for (const article of featuredArticles) {
    content += `- [${article.title}](${baseUrl}/blog/${article.slug})\n`;
  }

  content += `\n## Branchen-Guides\n\n`;

  const industryArticles = blogArticles.filter(a => 
    a.category === 'Branchen' || a.category === 'Gastronomie'
  );
  for (const article of industryArticles) {
    content += `- [${article.title}](${baseUrl}/blog/${article.slug})\n`;
  }

  content += `\n## Stadt-Guides\n\n`;

  const cityArticles = blogArticles.filter(a => a.category === 'Regionen');
  for (const article of cityArticles) {
    content += `- [${article.title}](${baseUrl}/blog/${article.slug})\n`;
  }

  return content;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Apply rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.log(`[generate-sitemap] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429 
      }
    );
  }

  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') || 'all';
    const format = url.searchParams.get('format') || 'json';
    const ping = url.searchParams.get('ping') === 'true';
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    console.log(`[generate-sitemap] Generating sitemap type: ${type}, format: ${format}`);
    
    const blogArticles = await getAllBlogArticles(supabaseUrl, supabaseKey);
    
    let result: Record<string, string> = {};
    
    switch (type) {
      case 'blog':
        result.blogSitemap = generateBlogSitemap(blogArticles);
        break;
      case 'main':
        result.mainSitemap = generateMainSitemap(blogArticles);
        break;
      case 'lexikon':
        result.lexikonSitemap = generateLexikonSitemap();
        break;
      case 'images':
        result.imageSitemap = generateImageSitemap(blogArticles);
        break;
      case 'index':
        result.sitemapIndex = generateSitemapIndex();
        break;
      case 'rss':
        result.rssFeed = generateRssFeed(blogArticles);
        break;
      case 'llms':
        result.llmsTxt = generateLlmsTxt(blogArticles);
        break;
      case 'all':
      default:
        result = {
          mainSitemap: generateMainSitemap(blogArticles),
          blogSitemap: generateBlogSitemap(blogArticles),
          lexikonSitemap: generateLexikonSitemap(),
          imageSitemap: generateImageSitemap(blogArticles),
          sitemapIndex: generateSitemapIndex(),
          rssFeed: generateRssFeed(blogArticles),
          llmsTxt: generateLlmsTxt(blogArticles),
        };
    }
    
    // Log generation event
    const supabase = createClient(supabaseUrl, supabaseKey);
    await supabase.from('analytics_events').insert({
      session_id: 'system-sitemap-generator',
      event_type: 'sitemap_generated',
      event_name: type,
      page_path: '/sitemap',
      event_data: {
        type,
        format,
        articlesCount: blogArticles.length,
        generatedAt: new Date().toISOString()
      }
    });
    
    // If raw format requested, return single sitemap as XML/text
    if (format === 'raw' && Object.keys(result).length === 1) {
      const content = Object.values(result)[0];
      const contentType = type === 'rss' ? 'application/rss+xml' : 
                         type === 'llms' ? 'text/plain' : 
                         'application/xml';
      return new Response(content, {
        headers: { ...corsHeaders, 'Content-Type': `${contentType}; charset=utf-8` }
      });
    }
    
    // Ping Google if requested
    if (ping) {
      const sitemapUrl = 'https://localdominate.org/sitemap-index.xml';
      try {
        await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
        console.log('[generate-sitemap] Pinged Google with sitemap');
      } catch (e) {
        console.error('[generate-sitemap] Failed to ping Google:', e);
      }
    }
    
    return new Response(
      JSON.stringify({
        success: true,
        type,
        articlesCount: blogArticles.length,
        generatedAt: new Date().toISOString(),
        sitemaps: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[generate-sitemap] Error:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});