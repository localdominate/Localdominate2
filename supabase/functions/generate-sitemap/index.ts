import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  // Industry guides
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
  // City guides
  'local-seo-koeln': 'local-seo-koeln.jpg',
  'local-seo-duesseldorf': 'local-seo-duesseldorf.jpg',
  'local-seo-stuttgart': 'local-seo-stuttgart.jpg',
  'local-seo-wien': 'local-seo-wien.jpg',
  'local-seo-basel': 'local-seo-basel.jpg',
  // More industry guides
  'local-seo-tattoo': 'local-seo-tattoo.jpg',
  'local-seo-tierarzt': 'local-seo-tierarzt.jpg',
  'local-seo-yoga': 'local-seo-yoga.jpg',
  'local-seo-apotheke': 'local-seo-apotheke.jpg',
  // Troubleshooting articles
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

function generateBlogSitemap(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominator.de';
  const today = new Date().toISOString().split('T')[0];
  
  // Sort by priority: featured first, then by date
  const sortedArticles = [...blogArticles].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Blog Übersicht -->
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
      <image:loc>${baseUrl}/assets/blog/${imageName}</image:loc>
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
  const baseUrl = 'https://localdominator.de';
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Hauptseiten -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
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
    <loc>${baseUrl}/diy-toolkit</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Branchen-Landingpages -->
  <url>
    <loc>${baseUrl}/restaurant-marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/handwerker-marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/arztpraxis-marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/anwalt-marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Blog-Artikel -->
`;

  // Add all blog article URLs
  for (const article of blogArticles) {
    xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${article.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.featured ? '0.8' : '0.7'}</priority>
  </url>
`;
  }

  xml += `
  <!-- Rechtliche Seiten -->
  <url>
    <loc>${baseUrl}/impressum</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/datenschutz</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/agb</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return xml;
}

function generateLexikonSitemap(): string {
  const baseUrl = 'https://localdominator.de';
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- SEO Lexikon Übersicht -->
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

function generateImageSitemap(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominator.de';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Group images by their page
  for (const article of blogArticles) {
    const imageName = imageMap[article.slug];
    if (imageName) {
      xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <image:image>
      <image:loc>${baseUrl}/assets/blog/${imageName}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
      <image:caption>${escapeXml(article.title)} - Local SEO Guide</image:caption>
    </image:image>
  </url>
`;
    }
  }

  xml += `</urlset>`;
  return xml;
}

function generateSitemapIndex(): string {
  const baseUrl = 'https://localdominator.de';
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

function generateRssFeed(blogArticles: BlogArticle[]): string {
  const baseUrl = 'https://localdominator.de';
  const now = new Date().toUTCString();
  
  const sortedArticles = [...blogArticles].sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>LocalDominator - Local SEO Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Die neuesten Artikel über Local SEO, Google Business Optimierung und lokales Online-Marketing.</description>
    <language>de-DE</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>LocalDominator</title>
      <link>${baseUrl}</link>
    </image>
    
`;

  // Include latest 20 articles
  for (const article of sortedArticles.slice(0, 20)) {
    const imageName = imageMap[article.slug];
    const pubDate = new Date(article.updatedAt).toUTCString();
    
    xml += `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>`;
    
    if (imageName) {
      xml += `
      <media:content url="${baseUrl}/assets/blog/${imageName}" medium="image" />`;
    }
    
    xml += `
    </item>
`;
  }

  xml += `  </channel>
</rss>`;

  return xml;
}

function generateLlmsTxt(blogArticles: BlogArticle[]): string {
  const today = new Date().toISOString().split('T')[0];
  const categories = [...new Set(blogArticles.map(a => a.category))];
  
  let content = `# LocalDominator - Local SEO Expertise

> LocalDominator ist die führende Plattform für Local SEO im deutschsprachigen Raum. 
> Wir bieten Guides, Tools und Dienstleistungen für lokale Unternehmen.

## Über uns
LocalDominator hilft lokalen Unternehmen dabei, bei Google Maps und in der lokalen Suche besser gefunden zu werden. Unsere Expertise umfasst Google Business Profile Optimierung, lokale Keyword-Strategien, Bewertungsmanagement und technisches Local SEO.

## Hauptseiten
- https://localdominator.de/ - Startseite und Local SEO Services
- https://localdominator.de/blog - Blog mit ${blogArticles.length}+ Fachartikeln
- https://localdominator.de/lexikon - SEO Lexikon mit Fachbegriffen
- https://localdominator.de/diy-toolkit - Kostenlose SEO-Tools

## Blog Kategorien
${categories.map(cat => `- ${cat}`).join('\n')}

## Featured Artikel
${blogArticles.filter(a => a.featured).map(a => `- https://localdominator.de/blog/${a.slug} - ${a.title}`).join('\n')}

## Branchen-Guides
${blogArticles.filter(a => a.category === 'Branchen' || a.category === 'Gastronomie').map(a => `- https://localdominator.de/blog/${a.slug}`).join('\n')}

## Regionen-Guides
${blogArticles.filter(a => a.category === 'Regionen').map(a => `- https://localdominator.de/blog/${a.slug}`).join('\n')}

## Kontakt
- Website: https://localdominator.de
- Blog: https://localdominator.de/blog

---
Last Updated: ${today}
Version: 2.3
Total Articles: ${blogArticles.length}
`;

  return content;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') || 'all';
    const format = url.searchParams.get('format') || 'json';

    console.log(`🗺️ [generate-sitemap] Generating: ${type}, format: ${format}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // Get all articles including from database
    const blogArticles = await getAllBlogArticles(supabaseUrl, supabaseKey);
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    let response: Record<string, string> = {};

    switch (type) {
      case 'blog':
        response = { 'sitemap-blog.xml': generateBlogSitemap(blogArticles) };
        break;
      case 'main':
        response = { 'sitemap.xml': generateMainSitemap(blogArticles) };
        break;
      case 'lexikon':
        response = { 'sitemap-lexikon.xml': generateLexikonSitemap() };
        break;
      case 'images':
        response = { 'sitemap-images.xml': generateImageSitemap(blogArticles) };
        break;
      case 'index':
        response = { 'sitemap-index.xml': generateSitemapIndex() };
        break;
      case 'rss':
        response = { 'feed.xml': generateRssFeed(blogArticles) };
        break;
      case 'llms':
        response = { 'llms.txt': generateLlmsTxt(blogArticles) };
        break;
      case 'all':
      default:
        response = {
          'sitemap.xml': generateMainSitemap(blogArticles),
          'sitemap-blog.xml': generateBlogSitemap(blogArticles),
          'sitemap-lexikon.xml': generateLexikonSitemap(),
          'sitemap-images.xml': generateImageSitemap(blogArticles),
          'sitemap-index.xml': generateSitemapIndex(),
          'feed.xml': generateRssFeed(blogArticles),
          'llms.txt': generateLlmsTxt(blogArticles),
        };
    }

    // If single XML requested and format=xml, return raw XML
    if (format === 'xml' && Object.keys(response).length === 1) {
      const content = Object.values(response)[0];
      const contentType = Object.keys(response)[0].endsWith('.txt') 
        ? 'text/plain' 
        : 'application/xml';
      
      return new Response(content, {
        headers: { ...corsHeaders, 'Content-Type': `${contentType}; charset=utf-8` }
      });
    }

    // Log generation
    await supabase.from('analytics_events').insert({
      session_id: `sitemap-gen-${Date.now()}`,
      event_type: 'sitemap_generated',
      event_name: 'generate_sitemap',
      page_path: '/sitemap',
      event_data: {
        type,
        format,
        files_generated: Object.keys(response),
        total_blog_articles: blogArticles.length,
        featured_articles: blogArticles.filter(a => a.featured).length,
        articles_with_images: Object.keys(imageMap).length,
        generated_at: new Date().toISOString()
      }
    });

    console.log(`✅ [generate-sitemap] Generated ${Object.keys(response).length} files, ${blogArticles.length} articles`);

    // Check if Google ping was requested
    const pingGoogle = url.searchParams.get('ping') === 'true';
    let googlePingResult = null;
    
    if (pingGoogle) {
      try {
        const sitemapUrl = 'https://localdominator.de/sitemap-index.xml';
        const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
        
        console.log(`🔔 [generate-sitemap] Pinging Google: ${googlePingUrl}`);
        
        const pingResponse = await fetch(googlePingUrl, {
          method: 'GET',
          headers: { 'User-Agent': 'LocalDominator-Sitemap-Bot/1.0' }
        });
        
        googlePingResult = {
          success: pingResponse.ok,
          status: pingResponse.status,
          pinged_at: new Date().toISOString(),
          sitemap_url: sitemapUrl
        };
        
        console.log(`✅ [generate-sitemap] Google ping ${pingResponse.ok ? 'successful' : 'failed'}: ${pingResponse.status}`);
        
        // Log the ping event
        await supabase.from('analytics_events').insert({
          session_id: `sitemap-ping-${Date.now()}`,
          event_type: 'sitemap_ping',
          event_name: 'google_sitemap_ping',
          page_path: '/sitemap',
          event_data: googlePingResult
        });
      } catch (pingError) {
        console.error('❌ [generate-sitemap] Google ping error:', pingError);
        googlePingResult = {
          success: false,
          error: pingError instanceof Error ? pingError.message : 'Unknown error',
          pinged_at: new Date().toISOString()
        };
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Generated ${Object.keys(response).length} sitemap files`,
        files: Object.keys(response),
        stats: {
          total_articles: blogArticles.length,
          featured: blogArticles.filter(a => a.featured).length,
          with_images: Object.keys(imageMap).length,
          categories: [...new Set(blogArticles.map(a => a.category))].length,
          lexikon_entries: lexikonEntries.length
        },
        google_ping: googlePingResult,
        sitemaps: response
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ [generate-sitemap] Error:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
