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

// Blog articles configuration with metadata for freshness checking
const blogArticles = [
  { slug: "kostenloser-seo-guide", title: "Kostenloses SEO Guide", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "local-seo-keywords", title: "Local SEO Keywords", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "local-seo-handwerker", title: "Local SEO für Handwerker", priority: "medium", lastReviewed: "2026-01-08" },
  { slug: "nap-konsistenz", title: "NAP Konsistenz", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "google-my-business-optimieren", title: "Google My Business optimieren", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "lokale-seo-trends-2026", title: "Lokale SEO Trends 2026", priority: "critical", lastReviewed: "2026-01-08" },
  { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste", priority: "high", lastReviewed: "2026-01-08" },
  { slug: "mobile-local-seo", title: "Mobile Local SEO", priority: "medium", lastReviewed: "2026-01-08" },
  { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte (YMYL)", priority: "critical", lastReviewed: "2026-01-08" },
  { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte (YMYL)", priority: "critical", lastReviewed: "2026-01-08" },
  { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater (YMYL)", priority: "critical", lastReviewed: "2026-01-08" },
  { slug: "local-seo-restaurant", title: "Local SEO für Restaurants", priority: "medium", lastReviewed: "2025-12-01" },
  { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO", priority: "high", lastReviewed: "2025-12-01" },
  { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO", priority: "high", lastReviewed: "2025-11-15" },
  { slug: "local-link-building", title: "Local Link Building", priority: "medium", lastReviewed: "2025-11-01" },
  { slug: "local-content-marketing", title: "Local Content Marketing", priority: "medium", lastReviewed: "2025-10-15" },
  { slug: "negative-google-bewertungen", title: "Negative Google Bewertungen", priority: "high", lastReviewed: "2025-10-01" },
  { slug: "local-seo-fehler", title: "Local SEO Fehler", priority: "medium", lastReviewed: "2025-09-15" },
];

// Keywords that indicate potentially outdated content
const outdatedPatterns = [
  { pattern: /2024/g, severity: "high", message: "Enthält Jahreszahl 2024 - prüfen ob aktuell" },
  { pattern: /2023/g, severity: "critical", message: "Enthält Jahreszahl 2023 - wahrscheinlich veraltet" },
  { pattern: /2022/g, severity: "critical", message: "Enthält Jahreszahl 2022 - definitiv veraltet" },
  { pattern: /letztes Jahr/gi, severity: "medium", message: "Relative Zeitangabe 'letztes Jahr'" },
  { pattern: /vor kurzem/gi, severity: "low", message: "Vage Zeitangabe 'vor kurzem'" },
  { pattern: /neu eingeführt/gi, severity: "medium", message: "Möglicherweise veraltete 'neu eingeführt' Aussage" },
  { pattern: /Core Web Vitals Update/gi, severity: "medium", message: "CWV Update - prüfen ob Infos noch aktuell" },
];

interface FreshnessIssue {
  articleSlug: string;
  articleTitle: string;
  priority: string;
  lastReviewed: string;
  daysSinceReview: number;
  issues: {
    type: string;
    severity: string;
    message: string;
    count?: number;
  }[];
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Apply rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.log(`[check-content-freshness] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429 
      }
    );
  }

  try {
    console.log("Starting content freshness check...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date();
    const freshnessIssues: FreshnessIssue[] = [];
    
    // Check each article
    for (const article of blogArticles) {
      const lastReviewedDate = new Date(article.lastReviewed);
      const daysSinceReview = Math.floor((now.getTime() - lastReviewedDate.getTime()) / (1000 * 60 * 60 * 24));
      
      const issues: FreshnessIssue["issues"] = [];

      // Check if review is overdue based on priority
      const maxDaysWithoutReview = {
        critical: 30,  // YMYL and trend articles need monthly review
        high: 90,      // Important articles every 3 months
        medium: 180,   // Regular articles every 6 months
        low: 365,      // Low priority annually
      };

      const maxDays = maxDaysWithoutReview[article.priority as keyof typeof maxDaysWithoutReview] || 180;
      
      if (daysSinceReview > maxDays) {
        issues.push({
          type: "overdue_review",
          severity: daysSinceReview > maxDays * 1.5 ? "critical" : "high",
          message: `Artikel wurde seit ${daysSinceReview} Tagen nicht überprüft (Maximum: ${maxDays} Tage)`,
        });
      }

      // Check for outdated year references
      // Note: In production, you'd fetch the actual article content
      // For now, we're flagging based on review date
      if (daysSinceReview > 60 && article.priority === "critical") {
        issues.push({
          type: "content_check_needed",
          severity: "high",
          message: "YMYL-Artikel: Manuelle Inhaltsprüfung empfohlen",
        });
      }

      // Check if article mentions trends/years in title (likely needs regular updates)
      if (article.title.includes("2026") || article.title.includes("Trends")) {
        if (daysSinceReview > 30) {
          issues.push({
            type: "trend_article",
            severity: "medium",
            message: "Trend-Artikel sollte monatlich auf Aktualität geprüft werden",
          });
        }
      }

      if (issues.length > 0) {
        freshnessIssues.push({
          articleSlug: article.slug,
          articleTitle: article.title,
          priority: article.priority,
          lastReviewed: article.lastReviewed,
          daysSinceReview,
          issues,
        });
      }
    }

    console.log(`Found ${freshnessIssues.length} articles with freshness issues`);

    // Sort by severity and days since review
    freshnessIssues.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const aPriority = priorityOrder[a.priority as keyof typeof priorityOrder] || 2;
      const bPriority = priorityOrder[b.priority as keyof typeof priorityOrder] || 2;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return b.daysSinceReview - a.daysSinceReview;
    });

    // Store results in analytics_events for tracking
    if (freshnessIssues.length > 0) {
      await supabase.from("analytics_events").insert({
        session_id: "system-content-freshness",
        event_type: "content_freshness_check",
        event_name: "freshness_issues_found",
        event_data: {
          total_articles_checked: blogArticles.length,
          issues_found: freshnessIssues.length,
          critical_count: freshnessIssues.filter(i => i.priority === "critical").length,
          high_count: freshnessIssues.filter(i => i.priority === "high").length,
          articles_needing_attention: freshnessIssues.slice(0, 10).map(i => i.articleSlug),
        },
        page_path: "/admin/content-freshness",
      });
    }

    // Send email notification if there are critical issues
    const criticalIssues = freshnessIssues.filter(
      i => i.priority === "critical" || i.issues.some(issue => issue.severity === "critical")
    );

    if (criticalIssues.length > 0 && resendApiKey) {
      console.log(`Sending email notification for ${criticalIssues.length} critical issues`);
      
      const emailHtml = `
        <h2>🚨 Content Freshness Alert</h2>
        <p>Die folgenden Artikel benötigen dringende Aufmerksamkeit:</p>
        
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="padding: 8px; border: 1px solid #ddd;">Artikel</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Priorität</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Tage seit Review</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Probleme</th>
          </tr>
          ${criticalIssues.map(issue => `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">${issue.articleTitle}</td>
              <td style="padding: 8px; border: 1px solid #ddd; color: ${issue.priority === 'critical' ? 'red' : 'orange'};">
                ${issue.priority.toUpperCase()}
              </td>
              <td style="padding: 8px; border: 1px solid #ddd;">${issue.daysSinceReview}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">
                <ul style="margin: 0; padding-left: 20px;">
                  ${issue.issues.map(i => `<li>${i.message}</li>`).join('')}
                </ul>
              </td>
            </tr>
          `).join('')}
        </table>
        
        <p style="margin-top: 20px;">
          <strong>Nächste Schritte:</strong>
        </p>
        <ol>
          <li>YMYL-Artikel (Ärzte, Anwälte, Steuerberater) priorisieren</li>
          <li>Jahreszahlen und Statistiken aktualisieren</li>
          <li>LastReviewedBadge Datum nach Prüfung aktualisieren</li>
        </ol>
      `;

      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Local Dominator <noreply@localdominate.org>",
            to: ["team@localdominate.org"],
            subject: `🚨 Content Freshness: ${criticalIssues.length} Artikel brauchen Aufmerksamkeit`,
            html: emailHtml,
          }),
        });

        if (emailResponse.ok) {
          console.log("Email notification sent successfully");
        } else {
          console.error("Failed to send email:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        summary: {
          totalArticles: blogArticles.length,
          issuesFound: freshnessIssues.length,
          criticalCount: criticalIssues.length,
          highCount: freshnessIssues.filter(i => i.priority === "high").length,
          mediumCount: freshnessIssues.filter(i => i.priority === "medium").length,
        },
        issues: freshnessIssues,
        checkedAt: now.toISOString(),
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in content freshness check:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});