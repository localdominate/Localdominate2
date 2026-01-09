import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SEOIssue {
  type: 'schema' | 'broken_link' | 'meta' | 'content' | 'performance';
  severity: 'critical' | 'warning' | 'info';
  page: string;
  message: string;
  details?: string;
}

interface BlogArticle {
  slug: string;
  title: string;
  updatedAt: string;
  featured: boolean;
}

// Blog articles to check (simplified version)
const blogArticles: BlogArticle[] = [
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide", updatedAt: "2026-01-09", featured: true },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking", updatedAt: "2026-01-07", featured: true },
  { slug: "local-seo-keywords-finden", title: "Local SEO Keywords", updatedAt: "2026-01-07", featured: true },
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen", updatedAt: "2026-01-07", featured: false },
  { slug: "local-seo-fuer-restaurants", title: "Local SEO Restaurants", updatedAt: "2026-01-07", featured: false },
  { slug: "google-my-business-optimieren", title: "Google My Business", updatedAt: "2026-01-07", featured: false },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale SEO 2026", updatedAt: "2026-01-07", featured: true },
  { slug: "nap-konsistenz-local-seo", title: "NAP Konsistenz", updatedAt: "2026-01-07", featured: false },
  { slug: "local-seo-handwerker", title: "Local SEO Handwerker", updatedAt: "2026-01-07", featured: false },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit", updatedAt: "2026-01-07", featured: true },
  { slug: "local-seo-aerzte-praxen", title: "Local SEO Ärzte", updatedAt: "2026-01-18", featured: false },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO Anwälte", updatedAt: "2026-01-19", featured: false },
  { slug: "local-seo-steuerberater", title: "Local SEO Steuerberater", updatedAt: "2026-01-20", featured: false },
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz", updatedAt: "2026-01-10", featured: true },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich", updatedAt: "2026-01-12", featured: true },
  { slug: "local-seo-muenchen", title: "Local SEO München", updatedAt: "2026-01-14", featured: true },
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const issues: SEOIssue[] = [];
    const baseUrl = 'https://localdominator.de';
    const now = new Date();

    console.log('🔍 Starting SEO monitoring check...');

    // 1. Check for outdated content (articles not updated in last 90 days)
    for (const article of blogArticles) {
      const lastUpdated = new Date(article.updatedAt);
      const daysSinceUpdate = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
      
      if (article.featured && daysSinceUpdate > 60) {
        issues.push({
          type: 'content',
          severity: 'critical',
          page: `/blog/${article.slug}`,
          message: `Featured Artikel "${article.title}" nicht aktualisiert`,
          details: `Letzte Aktualisierung vor ${daysSinceUpdate} Tagen. Featured-Artikel sollten alle 60 Tage überprüft werden.`
        });
      } else if (daysSinceUpdate > 90) {
        issues.push({
          type: 'content',
          severity: 'warning',
          page: `/blog/${article.slug}`,
          message: `Artikel "${article.title}" evtl. veraltet`,
          details: `Letzte Aktualisierung vor ${daysSinceUpdate} Tagen.`
        });
      }
    }

    // 2. Check for year references that might be outdated
    const currentYear = now.getFullYear();
    const lastYear = currentYear - 1;
    
    for (const article of blogArticles) {
      if (article.title.includes(String(lastYear))) {
        issues.push({
          type: 'content',
          severity: 'critical',
          page: `/blog/${article.slug}`,
          message: `Jahresreferenz ${lastYear} im Titel`,
          details: `Artikel-Titel enthält "${lastYear}" - sollte auf ${currentYear} aktualisiert werden.`
        });
      }
    }

    // 3. Check meta consistency
    const articlesWithMissingMeta = blogArticles.filter(a => !a.title || a.title.length < 10);
    for (const article of articlesWithMissingMeta) {
      issues.push({
        type: 'meta',
        severity: 'warning',
        page: `/blog/${article.slug}`,
        message: 'Kurzer oder fehlender Titel',
        details: `Titel sollte mindestens 10 Zeichen haben für SEO.`
      });
    }

    // 4. Sitemap consistency check
    const sitemapUrls = blogArticles.map(a => `${baseUrl}/blog/${a.slug}`);
    console.log(`📋 ${sitemapUrls.length} URLs in Sitemap erwartet`);

    // 5. Check internal linking opportunities
    const ymylArticles = blogArticles.filter(a => 
      a.slug.includes('aerzte') || a.slug.includes('anwaelte') || a.slug.includes('steuerberater')
    );
    
    if (ymylArticles.length > 0) {
      issues.push({
        type: 'content',
        severity: 'info',
        page: '/blog',
        message: `${ymylArticles.length} YMYL-Artikel identifiziert`,
        details: 'Diese Artikel benötigen besondere E-E-A-T Signale und regelmäßige Überprüfung.'
      });
    }

    // 6. Generate health score
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const healthScore = Math.max(0, 100 - (criticalCount * 15) - (warningCount * 5));

    // Store results in analytics_events
    await supabase.from('analytics_events').insert({
      session_id: `seo-monitoring-${now.toISOString()}`,
      event_type: 'seo_health_check',
      event_name: 'weekly_seo_monitoring',
      page_path: '/seo-monitoring',
      event_data: {
        health_score: healthScore,
        total_issues: issues.length,
        critical_issues: criticalCount,
        warning_issues: warningCount,
        info_issues: issues.filter(i => i.severity === 'info').length,
        articles_checked: blogArticles.length,
        issues: issues.slice(0, 20), // Store top 20 issues
        checked_at: now.toISOString()
      }
    });

    console.log(`✅ SEO Check complete. Health Score: ${healthScore}/100`);
    console.log(`   Critical: ${criticalCount}, Warnings: ${warningCount}`);

    // Send email notification if critical issues found
    if (criticalCount > 0) {
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      if (resendApiKey) {
        const criticalIssuesList = issues
          .filter(i => i.severity === 'critical')
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
            subject: `🚨 SEO Alert: ${criticalCount} kritische Issues gefunden`,
            html: `
              <h2>Wöchentlicher SEO Health Check</h2>
              <p><strong>Health Score:</strong> ${healthScore}/100</p>
              <p><strong>Kritische Issues:</strong> ${criticalCount}</p>
              <p><strong>Warnungen:</strong> ${warningCount}</p>
              
              <h3>Kritische Issues:</h3>
              <pre>${criticalIssuesList}</pre>
              
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
        summary: {
          total_issues: issues.length,
          critical: criticalCount,
          warnings: warningCount,
          info: issues.filter(i => i.severity === 'info').length,
          articles_checked: blogArticles.length
        },
        issues: issues
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