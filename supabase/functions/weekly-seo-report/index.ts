import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

// Blog articles with metadata
const blogArticles = [
  { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide", isYMYL: false, updatedAt: "2026-01-09" },
  { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "google-my-business-optimieren", title: "Google My Business optimieren", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "lokale-suchmaschinenoptimierung-2026", title: "Lokale SEO 2026", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "nap-konsistenz-local-seo", title: "NAP Konsistenz", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "local-seo-handwerker", title: "Local SEO für Handwerker", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste", isYMYL: false, updatedAt: "2026-01-07" },
  { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte", isYMYL: true, updatedAt: "2026-01-18" },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte", isYMYL: true, updatedAt: "2026-01-20" },
  { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater", isYMYL: true, updatedAt: "2026-01-22" },
  { slug: "local-seo-schweiz", title: "Local SEO Schweiz", isYMYL: false, updatedAt: "2026-01-10" },
  { slug: "local-seo-zuerich", title: "Local SEO Zürich", isYMYL: false, updatedAt: "2026-01-12" },
  { slug: "local-seo-muenchen", title: "Local SEO München", isYMYL: false, updatedAt: "2026-01-14" },
];

interface SEOIssue {
  type: string;
  severity: "critical" | "warning" | "info";
  message: string;
  slug?: string;
  title?: string;
}

interface WeeklyReport {
  healthScore: number;
  totalArticles: number;
  outdatedArticles: number;
  recentArticles: number;
  ymylArticles: number;
  issues: SEOIssue[];
  weeklyStats: {
    totalSessions: number;
    totalConversions: number;
    conversionRate: number;
    topPages: { page: string; views: number }[];
  };
  recommendations: string[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Apply rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.log(`[weekly-seo-report] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429 
      }
    );
  }

  try {
    console.log("Starting weekly SEO report generation...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Collect issues
    const issues: SEOIssue[] = [];
    let outdatedCount = 0;
    let recentCount = 0;

    // Check each article for freshness
    blogArticles.forEach(article => {
      const updatedDate = new Date(article.updatedAt);
      const daysSinceUpdate = Math.floor((now.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24));

      if (updatedDate < sixMonthsAgo) {
        outdatedCount++;
        issues.push({
          type: "outdated",
          severity: article.isYMYL ? "critical" : "warning",
          message: `"${article.title}" seit ${daysSinceUpdate} Tagen nicht aktualisiert`,
          slug: article.slug,
          title: article.title,
        });
      }

      if (updatedDate > oneMonthAgo) {
        recentCount++;
      }

      // Check for year references
      const currentYear = now.getFullYear();
      const yearMatch = article.title.match(/\b(202[0-9])\b/);
      if (yearMatch && parseInt(yearMatch[1]) < currentYear) {
        issues.push({
          type: "year_reference",
          severity: "warning",
          message: `"${article.title}" enthält veraltete Jahresangabe (${yearMatch[1]})`,
          slug: article.slug,
          title: article.title,
        });
      }
    });

    // Fetch weekly analytics from database
    const { data: sessions } = await supabase
      .from("analytics_sessions")
      .select("*")
      .gte("created_at", oneWeekAgo.toISOString());

    const { data: conversions } = await supabase
      .from("analytics_conversions")
      .select("*")
      .gte("created_at", oneWeekAgo.toISOString());

    const totalSessions = sessions?.length || 0;
    const totalConversions = conversions?.length || 0;
    const conversionRate = totalSessions > 0 ? (totalConversions / totalSessions) * 100 : 0;

    // Calculate top pages
    const pageCounts: Record<string, number> = {};
    sessions?.forEach((s: any) => {
      const page = s.entry_page || "/";
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([page, views]) => ({ page, views }));

    // Calculate health score
    const outdatedPenalty = (outdatedCount / blogArticles.length) * 40;
    const recentBonus = (recentCount / blogArticles.length) * 20;
    const criticalPenalty = issues.filter(i => i.severity === "critical").length * 10;
    const warningPenalty = issues.filter(i => i.severity === "warning").length * 2;
    const healthScore = Math.max(0, Math.min(100, Math.round(
      100 - outdatedPenalty - criticalPenalty - warningPenalty + recentBonus
    )));

    // Generate recommendations
    const recommendations: string[] = [];
    if (healthScore < 60) {
      recommendations.push("🚨 SEO Health Score ist kritisch niedrig - sofortige Maßnahmen erforderlich");
    }
    if (outdatedCount > 0) {
      recommendations.push(`📅 ${outdatedCount} Artikel sind veraltet und sollten aktualisiert werden`);
    }
    const ymylIssues = issues.filter(i => i.severity === "critical");
    if (ymylIssues.length > 0) {
      recommendations.push(`⚠️ ${ymylIssues.length} YMYL-Artikel benötigen dringende Aufmerksamkeit`);
    }
    if (conversionRate < 1) {
      recommendations.push("📈 Conversion Rate ist unter 1% - CTAs und Landing Pages optimieren");
    }
    if (topPages.length > 0 && topPages[0].page === "/") {
      recommendations.push("🏠 Homepage ist Top-Einstiegsseite - Hero Section optimieren");
    }
    if (recommendations.length === 0) {
      recommendations.push("✅ Alles sieht gut aus! Weiter so mit der Content-Pflege.");
    }

    const report: WeeklyReport = {
      healthScore,
      totalArticles: blogArticles.length,
      outdatedArticles: outdatedCount,
      recentArticles: recentCount,
      ymylArticles: blogArticles.filter(a => a.isYMYL).length,
      issues: issues.sort((a, b) => {
        const severityOrder = { critical: 0, warning: 1, info: 2 };
        return severityOrder[a.severity] - severityOrder[b.severity];
      }),
      weeklyStats: {
        totalSessions,
        totalConversions,
        conversionRate,
        topPages,
      },
      recommendations,
    };

    // Send email report
    if (resendApiKey) {
      const healthColor = healthScore >= 80 ? "#22c55e" : healthScore >= 60 ? "#eab308" : "#ef4444";
      
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #7c3aed); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
            .health-score { font-size: 48px; font-weight: bold; color: ${healthColor}; }
            .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0; }
            .stat-card { background: #f8fafc; padding: 15px; border-radius: 8px; text-align: center; }
            .stat-value { font-size: 24px; font-weight: bold; color: #1e40af; }
            .stat-label { font-size: 12px; color: #64748b; text-transform: uppercase; }
            .section { margin: 25px 0; }
            .section-title { font-size: 18px; font-weight: 600; margin-bottom: 10px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; }
            .issue { padding: 10px; margin: 8px 0; border-radius: 6px; border-left: 4px solid; }
            .issue.critical { background: #fef2f2; border-color: #ef4444; }
            .issue.warning { background: #fffbeb; border-color: #f59e0b; }
            .issue.info { background: #eff6ff; border-color: #3b82f6; }
            .recommendation { padding: 10px 15px; background: #f0fdf4; border-radius: 6px; margin: 8px 0; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #e2e8f0; }
            th { background: #f8fafc; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📊 Wöchentlicher SEO Report</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">KW ${getWeekNumber(now)} - ${now.toLocaleDateString('de-DE')}</p>
            </div>
            
            <div style="background: white; padding: 25px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
              <div style="text-align: center; margin-bottom: 25px;">
                <p style="margin: 0; color: #64748b;">SEO Health Score</p>
                <div class="health-score">${healthScore}/100</div>
                <p style="margin: 5px 0 0 0; color: ${healthColor}; font-weight: 500;">
                  ${healthScore >= 80 ? '✅ Exzellent' : healthScore >= 60 ? '⚠️ Verbesserbar' : '🚨 Kritisch'}
                </p>
              </div>
              
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-value">${totalSessions}</div>
                  <div class="stat-label">Sessions diese Woche</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${totalConversions}</div>
                  <div class="stat-label">Conversions</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${conversionRate.toFixed(2)}%</div>
                  <div class="stat-label">Conversion Rate</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${blogArticles.length}</div>
                  <div class="stat-label">Artikel gesamt</div>
                </div>
              </div>
              
              ${topPages.length > 0 ? `
              <div class="section">
                <div class="section-title">🔥 Top Seiten</div>
                <table>
                  <tr><th>Seite</th><th>Views</th></tr>
                  ${topPages.map(p => `<tr><td>${p.page}</td><td>${p.views}</td></tr>`).join('')}
                </table>
              </div>
              ` : ''}
              
              ${recommendations.length > 0 ? `
              <div class="section">
                <div class="section-title">💡 Empfehlungen</div>
                ${recommendations.map(r => `<div class="recommendation">${r}</div>`).join('')}
              </div>
              ` : ''}
              
              ${issues.length > 0 ? `
              <div class="section">
                <div class="section-title">⚠️ Issues (${issues.length})</div>
                ${issues.slice(0, 5).map(issue => `
                  <div class="issue ${issue.severity}">
                    <strong>${issue.title || issue.type}</strong><br>
                    ${issue.message}
                  </div>
                `).join('')}
                ${issues.length > 5 ? `<p style="color: #64748b; font-size: 14px;">... und ${issues.length - 5} weitere Issues</p>` : ''}
              </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>Local Dominator - Wöchentlicher SEO Report</p>
              <p>Dieser Report wurde automatisch generiert.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Local Dominator <noreply@localdominator.de>",
            to: ["team@localdominator.de"],
            subject: `📊 Wöchentlicher SEO Report - Health Score: ${healthScore}/100`,
            html: emailHtml,
          }),
        });
        
        if (emailResponse.ok) {
          console.log("Weekly SEO report email sent successfully");
        } else {
          console.error("Failed to send email:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    // Store report in analytics_events
    await supabase.from("analytics_events").insert({
      session_id: "system-weekly-seo-report",
      event_type: "weekly_seo_report",
      event_name: "report_generated",
      event_data: report,
      page_path: "/admin/seo-report",
    });

    return new Response(
      JSON.stringify({ success: true, report }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error generating weekly SEO report:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}