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

// Complete blog articles list with metadata
const blogArticles: BlogArticle[] = [
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide", updatedAt: "2026-01-09", featured: true, category: "Strategie", hasImage: true },
  { slug: "local-seo-keywords-finden", title: "Local SEO Keywords", updatedAt: "2026-01-07", featured: true, category: "Strategie", hasImage: true },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking", updatedAt: "2026-01-07", featured: true, category: "Local SEO", hasImage: true },
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen", updatedAt: "2026-01-07", featured: false, category: "Bewertungen", hasImage: true },
  { slug: "local-seo-fuer-restaurants", title: "Local SEO Restaurants", updatedAt: "2026-01-07", featured: false, category: "Gastronomie", hasImage: true },
  { slug: "google-my-business-optimieren", title: "Google My Business", updatedAt: "2026-01-07", featured: false, category: "Google Business", hasImage: true },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale SEO 2026", updatedAt: "2026-01-07", featured: true, category: "Trends", hasImage: true },
  { slug: "nap-konsistenz-local-seo", title: "NAP Konsistenz", updatedAt: "2026-01-07", featured: false, category: "Local SEO", hasImage: true },
  { slug: "local-seo-handwerker", title: "Local SEO Handwerker", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: true },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit", updatedAt: "2026-01-07", featured: true, category: "Strategie", hasImage: true },
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz", updatedAt: "2026-01-10", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich", updatedAt: "2026-01-12", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-muenchen", title: "Local SEO München", updatedAt: "2026-01-14", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-aerzte-praxen", title: "Local SEO Ärzte", updatedAt: "2026-01-18", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO Anwälte", updatedAt: "2026-01-19", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-steuerberater", title: "Local SEO Steuerberater", updatedAt: "2026-01-20", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-friseur", title: "Local SEO Friseur", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-doenerladen", title: "Local SEO Dönerladen", updatedAt: "2026-01-07", featured: false, category: "Gastronomie", hasImage: false },
  { slug: "local-seo-autowerkstatt", title: "Local SEO Autowerkstatt", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-fitness", title: "Local SEO Fitness", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-hotels", title: "Local SEO Hotels", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-immobilienmakler", title: "Local SEO Immobilienmakler", updatedAt: "2026-01-07", featured: false, category: "Branchen", hasImage: false },
  { slug: "local-seo-berlin", title: "Local SEO Berlin", updatedAt: "2026-01-09", featured: true, category: "Regionen", hasImage: false },
  { slug: "local-seo-hamburg", title: "Local SEO Hamburg", updatedAt: "2026-01-09", featured: false, category: "Regionen", hasImage: false },
  { slug: "local-seo-frankfurt", title: "Local SEO Frankfurt", updatedAt: "2026-01-09", featured: false, category: "Regionen", hasImage: false },
  { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren", updatedAt: "2026-01-09", featured: false, category: "Local SEO", hasImage: false },
  { slug: "negative-google-bewertungen", title: "Negative Google Bewertungen", updatedAt: "2026-01-09", featured: false, category: "Bewertungen", hasImage: false },
  { slug: "local-seo-fehler", title: "Local SEO Fehler", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
  { slug: "schema-markup-local-seo", title: "Schema Markup Local SEO", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: false },
  { slug: "core-web-vitals-local-seo", title: "Core Web Vitals Local SEO", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: false },
  { slug: "mobile-local-seo", title: "Mobile Local SEO", updatedAt: "2026-01-09", featured: false, category: "Technical SEO", hasImage: false },
  { slug: "local-content-marketing", title: "Local Content Marketing", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
  { slug: "local-link-building", title: "Local Link Building", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
  { slug: "local-seo-case-study", title: "Local SEO Case Study", updatedAt: "2026-01-09", featured: false, category: "Strategie", hasImage: false },
];

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
  'kostenloses-seo-guide': 'local-seo-keywords.jpg',
};

function generateBlogSitemap(): string {
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
      <image:loc>${baseUrl}/src/assets/blog/${imageName}</image:loc>
      <image:title>${article.title}</image:title>
    </image:image>`;
    }
    
    xml += `
  </url>

`;
  }

  xml += `</urlset>`;
  return xml;
}

function generateMainSitemap(): string {
  const baseUrl = 'https://localdominator.de';
  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
    <loc>${baseUrl}/restaurant-marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') || 'all';

    console.log(`🗺️ Generating sitemap: ${type}`);

    let response: Record<string, string> = {};

    switch (type) {
      case 'blog':
        response = { 'sitemap-blog.xml': generateBlogSitemap() };
        break;
      case 'main':
        response = { 'sitemap.xml': generateMainSitemap() };
        break;
      case 'index':
        response = { 'sitemap-index.xml': generateSitemapIndex() };
        break;
      case 'all':
      default:
        response = {
          'sitemap.xml': generateMainSitemap(),
          'sitemap-blog.xml': generateBlogSitemap(),
          'sitemap-index.xml': generateSitemapIndex(),
        };
    }

    // Log generation
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase.from('analytics_events').insert({
      session_id: `sitemap-gen-${new Date().toISOString()}`,
      event_type: 'sitemap_generated',
      event_name: 'generate_sitemap',
      page_path: '/sitemap',
      event_data: {
        type,
        files_generated: Object.keys(response),
        total_blog_articles: blogArticles.length,
        featured_articles: blogArticles.filter(a => a.featured).length,
        generated_at: new Date().toISOString()
      }
    });

    console.log(`✅ Generated ${Object.keys(response).length} sitemap files`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Generated ${Object.keys(response).length} sitemap files`,
        files: Object.keys(response),
        stats: {
          total_articles: blogArticles.length,
          featured: blogArticles.filter(a => a.featured).length,
          with_images: Object.keys(imageMap).length
        },
        sitemaps: response
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Sitemap generation error:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});