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

interface SEOIssue {
  type: 'schema' | 'broken_link' | 'meta' | 'content' | 'performance' | 'internal_linking';
  severity: 'critical' | 'warning' | 'info';
  page: string;
  message: string;
  details?: string;
  priority?: number;
}

interface BlogArticle {
  slug: string;
  title: string;
  updatedAt: string;
  featured: boolean;
  isYMYL?: boolean;
  category?: string;
  readingTime?: number;
}

// Dynamically import blog articles from source data
const blogArticles: BlogArticle[] = [
  // === FEATURED ARTICLES ===
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: Der ultimative Guide für Einsteiger 2026", updatedAt: "2026-01-09", featured: true },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern: Der ultimative Guide 2026", updatedAt: "2026-01-07", featured: true },
  { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden: Der komplette Keyword-Recherche Guide 2026", updatedAt: "2026-01-07", featured: true },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert", updatedAt: "2026-01-07", featured: true },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste: 50+ Punkte für mehr Sichtbarkeit", updatedAt: "2026-01-07", featured: true },
  
  // === CITY GUIDES ===
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz: Der komplette Leitfaden für KMUs", updatedAt: "2026-01-10", featured: true },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich: So dominierst du den Zürcher Markt", updatedAt: "2026-01-12", featured: true },
  { slug: "local-seo-muenchen", title: "Local SEO München: Der Guide für bayerische Unternehmen", updatedAt: "2026-01-14", featured: true },
  { slug: "local-seo-berlin", title: "Local SEO Berlin: Mehr Kunden in der Hauptstadt", updatedAt: "2026-01-16", featured: false },
  { slug: "local-seo-hamburg", title: "Local SEO Hamburg: Der Guide für hanseatische Unternehmen", updatedAt: "2026-01-17", featured: false },
  { slug: "local-seo-frankfurt", title: "Local SEO Frankfurt: Sichtbarkeit in der Finanzmetropole", updatedAt: "2026-01-18", featured: false },
  { slug: "local-seo-koeln", title: "Local SEO Köln: Der Guide für kölsche Unternehmen", updatedAt: "2026-01-09", featured: false },
  { slug: "local-seo-stuttgart", title: "Local SEO Stuttgart: Der Guide für schwäbische Unternehmen", updatedAt: "2026-01-09", featured: false },
  { slug: "local-seo-duesseldorf", title: "Local SEO Düsseldorf: Der Guide für rheinische Unternehmen", updatedAt: "2026-01-09", featured: false },
  { slug: "local-seo-basel", title: "Local SEO Basel: Der Guide für Schweizer Grenzstadt", updatedAt: "2026-01-09", featured: false },
  { slug: "local-seo-wien", title: "Local SEO Wien: Der Guide für österreichische Hauptstadt", updatedAt: "2026-01-09", featured: false },

  // === INDUSTRY GUIDES (YMYL) ===
  { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte & Praxen", updatedAt: "2026-01-18", featured: false, isYMYL: true },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte & Kanzleien", updatedAt: "2026-01-19", featured: false, isYMYL: true },
  { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater", updatedAt: "2026-01-20", featured: false, isYMYL: true },
  { slug: "local-seo-tierarzt", title: "Local SEO für Tierärzte", updatedAt: "2026-01-09", featured: false, isYMYL: true },
  { slug: "local-seo-apotheke", title: "Local SEO für Apotheken", updatedAt: "2026-01-09", featured: false, isYMYL: true },

  // === INDUSTRY GUIDES (Standard) ===
  { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants: Mehr Gäste durch Google", updatedAt: "2026-01-07", featured: false },
  { slug: "local-seo-handwerker", title: "Local SEO für Handwerker: Mehr Aufträge durch Google", updatedAt: "2026-01-07", featured: false },
  { slug: "local-seo-hotels", title: "Local SEO für Hotels", updatedAt: "2026-01-21", featured: false },
  { slug: "local-seo-fitness", title: "Local SEO für Fitnessstudios", updatedAt: "2026-01-22", featured: false },
  { slug: "local-seo-friseure", title: "Local SEO für Friseure", updatedAt: "2026-01-23", featured: false },
  { slug: "local-seo-immobilienmakler", title: "Local SEO für Immobilienmakler", updatedAt: "2026-01-24", featured: false },
  { slug: "local-seo-autowerkstatt", title: "Local SEO für Autowerkstätten", updatedAt: "2026-01-25", featured: false },
  { slug: "local-seo-doenerladen", title: "Local SEO für Dönerläden", updatedAt: "2026-01-26", featured: false },
  { slug: "local-seo-tattoo", title: "Local SEO für Tattoo-Studios", updatedAt: "2026-01-09", featured: false },
  { slug: "local-seo-yoga", title: "Local SEO für Yoga-Studios", updatedAt: "2026-01-09", featured: false },

  // === STRATEGY & TOOLS ===
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen: 7 bewährte Strategien", updatedAt: "2026-01-07", featured: false },
  { slug: "google-my-business-optimieren", title: "Google My Business optimieren: Schritt-für-Schritt Anleitung", updatedAt: "2026-01-07", featured: false },
  { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten", updatedAt: "2026-01-07", featured: false },
  { slug: "ki-tools-local-seo", title: "KI Tools für Local SEO", updatedAt: "2026-01-27", featured: false },
  { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews und Local SEO", updatedAt: "2026-01-28", featured: false },
  { slug: "seo-toolbox", title: "SEO Toolbox: Die besten kostenlosen SEO-Tools", updatedAt: "2026-01-07", featured: false },
];

// Critical pages that should always work
const criticalPages = [
  '/',
  '/blog',
  '/lexikon',
  '/impressum',
  '/datenschutz',
  '/agb',
];

// Calculate internal linking score
function calculateInternalLinkingScore(articles: BlogArticle[]): number {
  // Simple score based on article count and category distribution
  const categoryCount = new Set(articles.map(a => a.category)).size;
  const avgArticles = articles.length / Math.max(categoryCount, 1);
  return Math.min(100, avgArticles * 10);
}

// Check for year references in title
function checkYearReferences(title: string, currentYear: number): boolean {
  const lastYear = currentYear - 1;
  const yearBefore = currentYear - 2;
  return title.includes(String(lastYear)) || title.includes(String(yearBefore));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Apply rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.log(`[seo-monitoring] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429 
      }
    );
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const issues: SEOIssue[] = [];
    const baseUrl = 'https://localdominator.de';
    const now = new Date();
    const currentYear = now.getFullYear();

    console.log('🔍 Starting enhanced SEO monitoring check...');
    console.log(`📅 Current date: ${now.toISOString()}, Year: ${currentYear}`);

    // 1. Check for outdated content
    for (const article of blogArticles) {
      const lastUpdated = new Date(article.updatedAt);
      const daysSinceUpdate = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
      
      // YMYL articles have stricter requirements
      const maxDaysForFeatured = article.isYMYL ? 45 : 60;
      const maxDaysForRegular = article.isYMYL ? 60 : 90;
      
      if (article.featured && daysSinceUpdate > maxDaysForFeatured) {
        issues.push({
          type: 'content',
          severity: 'critical',
          page: `/blog/${article.slug}`,
          message: `Featured${article.isYMYL ? ' YMYL' : ''} Artikel "${article.title}" nicht aktualisiert`,
          details: `Letzte Aktualisierung vor ${daysSinceUpdate} Tagen. ${article.isYMYL ? 'YMYL-Artikel' : 'Featured-Artikel'} sollten alle ${maxDaysForFeatured} Tage überprüft werden.`,
          priority: article.isYMYL ? 1 : 2
        });
      } else if (daysSinceUpdate > maxDaysForRegular) {
        issues.push({
          type: 'content',
          severity: 'warning',
          page: `/blog/${article.slug}`,
          message: `Artikel "${article.title}" evtl. veraltet`,
          details: `Letzte Aktualisierung vor ${daysSinceUpdate} Tagen.`,
          priority: article.isYMYL ? 3 : 4
        });
      }
    }

    // 2. Check for outdated year references in titles
    for (const article of blogArticles) {
      if (checkYearReferences(article.title, currentYear)) {
        issues.push({
          type: 'content',
          severity: 'critical',
          page: `/blog/${article.slug}`,
          message: `Veraltete Jahreszahl im Titel`,
          details: `Artikel-Titel enthält Jahreszahl vor ${currentYear} - sollte aktualisiert werden.`,
          priority: 1
        });
      }
    }

    // 3. Check meta title length
    for (const article of blogArticles) {
      if (article.title.length < 20) {
        issues.push({
          type: 'meta',
          severity: 'warning',
          page: `/blog/${article.slug}`,
          message: 'Kurzer Titel',
          details: `Titel sollte mindestens 20 Zeichen haben für SEO (aktuell: ${article.title.length}).`,
          priority: 5
        });
      }
      if (article.title.length > 60) {
        issues.push({
          type: 'meta',
          severity: 'info',
          page: `/blog/${article.slug}`,
          message: 'Langer Titel',
          details: `Titel hat ${article.title.length} Zeichen - Google zeigt nur ca. 60 Zeichen an.`,
          priority: 6
        });
      }
    }

    // 4. Internal linking analysis
    const cityGuides = blogArticles.filter(a => a.slug.includes('local-seo-') && 
      ['muenchen', 'berlin', 'hamburg', 'frankfurt', 'koeln', 'stuttgart', 'duesseldorf', 'zuerich', 'basel', 'wien', 'schweiz'].some(c => a.slug.includes(c)));
    
    const industryGuides = blogArticles.filter(a => 
      ['aerzte', 'anwaelte', 'steuerberater', 'handwerker', 'restaurants', 'hotels', 'fitness', 'friseur', 'immobilien', 'autowerkstatt', 'doener', 'tattoo', 'yoga', 'tierarzt', 'apotheke'].some(i => a.slug.includes(i)));

    if (cityGuides.length > 0) {
      issues.push({
        type: 'internal_linking',
        severity: 'info',
        page: '/blog',
        message: `${cityGuides.length} Stadt-Guides identifiziert`,
        details: 'Stelle sicher, dass alle Stadt-Guides untereinander verlinkt sind (RelatedCityGuides Komponente).',
        priority: 7
      });
    }

    if (industryGuides.length > 0) {
      issues.push({
        type: 'internal_linking',
        severity: 'info',
        page: '/blog',
        message: `${industryGuides.length} Branchen-Guides identifiziert`,
        details: 'Stelle sicher, dass alle Branchen-Guides untereinander verlinkt sind (RelatedIndustryGuides Komponente).',
        priority: 7
      });
    }

    // 5. YMYL articles special handling
    const ymylArticles = blogArticles.filter(a => a.isYMYL);
    if (ymylArticles.length > 0) {
      issues.push({
        type: 'content',
        severity: 'info',
        page: '/blog',
        message: `${ymylArticles.length} YMYL-Artikel identifiziert`,
        details: 'Diese Artikel benötigen besondere E-E-A-T Signale, Quellenangaben und regelmäßige Überprüfung.',
        priority: 3
      });
    }

    // 6. Check recently updated articles
    const recentlyUpdated = blogArticles.filter(a => {
      const lastUpdated = new Date(a.updatedAt);
      const daysSinceUpdate = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
      return daysSinceUpdate <= 7;
    });

    // 7. Calculate health score with weighted issues
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    // Weighted scoring
    const healthScore = Math.max(0, Math.min(100, 
      100 - (criticalCount * 20) - (warningCount * 5) - (infoCount * 1)
    ));

    const internalLinkingScore = calculateInternalLinkingScore(blogArticles);

    // Store results in analytics_events
    await supabase.from('analytics_events').insert({
      session_id: `seo-monitoring-${now.toISOString()}`,
      event_type: 'seo_health_check',
      event_name: 'enhanced_seo_monitoring',
      page_path: '/seo-monitoring',
      event_data: {
        health_score: healthScore,
        internal_linking_score: internalLinkingScore,
        total_issues: issues.length,
        critical_issues: criticalCount,
        warning_issues: warningCount,
        info_issues: infoCount,
        articles_checked: blogArticles.length,
        recently_updated: recentlyUpdated.length,
        ymyl_articles: ymylArticles.length,
        city_guides: cityGuides.length,
        industry_guides: industryGuides.length,
        issues: issues.slice(0, 30), // Store top 30 issues
        checked_at: now.toISOString()
      }
    });

    console.log(`✅ SEO Check complete. Health Score: ${healthScore}/100`);
    console.log(`   Internal Linking Score: ${internalLinkingScore}/100`);
    console.log(`   Critical: ${criticalCount}, Warnings: ${warningCount}, Info: ${infoCount}`);
    console.log(`   Recently updated: ${recentlyUpdated.length}/${blogArticles.length}`);

    // Send email notification if critical issues found
    if (criticalCount > 0) {
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      if (resendApiKey) {
        const criticalIssuesList = issues
          .filter(i => i.severity === 'critical')
          .sort((a, b) => (a.priority || 99) - (b.priority || 99))
          .map(i => `• ${i.page}: ${i.message}`)
          .join('\n');

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'SEO Monitor <seo@localdominator.de>',
            to: ['info@localdominator.de'],
            subject: `🚨 SEO Alert: ${criticalCount} kritische Issues (Health: ${healthScore}/100)`,
            html: `
              <h2>Wöchentlicher SEO Health Check</h2>
              <p><strong>Health Score:</strong> ${healthScore}/100</p>
              <p><strong>Internal Linking Score:</strong> ${internalLinkingScore}/100</p>
              <p><strong>Kritische Issues:</strong> ${criticalCount}</p>
              <p><strong>Warnungen:</strong> ${warningCount}</p>
              <p><strong>Kürzlich aktualisiert:</strong> ${recentlyUpdated.length}/${blogArticles.length} Artikel</p>
              
              <h3>Kritische Issues (nach Priorität):</h3>
              <pre>${criticalIssuesList}</pre>
              
              <h3>YMYL-Artikel zur Überprüfung:</h3>
              <ul>
                ${ymylArticles.map(a => `<li>${a.title}</li>`).join('')}
              </ul>
              
              <p>Bitte überprüfen Sie das SEO Dashboard für Details.</p>
            `
          })
        });
        console.log('📧 Notification email sent');
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        health_score: healthScore,
        internal_linking_score: internalLinkingScore,
        summary: {
          total_issues: issues.length,
          critical: criticalCount,
          warnings: warningCount,
          info: infoCount,
          articles_checked: blogArticles.length,
          recently_updated: recentlyUpdated.length,
          ymyl_articles: ymylArticles.length
        },
        issues: issues.sort((a, b) => (a.priority || 99) - (b.priority || 99))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('SEO monitoring error:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});