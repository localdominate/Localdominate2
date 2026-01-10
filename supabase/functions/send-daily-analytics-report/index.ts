import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const INTERNAL_API_SECRET = Deno.env.get("INTERNAL_API_SECRET");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-internal-secret",
};

interface VariantStats {
  sessions: number;
  conversions: number;
  conversionRate: number;
  avgScrollDepth: number;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate internal API secret
    const providedSecret = req.headers.get("x-internal-secret");
    if (!INTERNAL_API_SECRET || providedSecret !== INTERNAL_API_SECRET) {
      console.error("Unauthorized: Invalid or missing internal API secret");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    console.log(`Generating daily report for ${yesterday.toISOString().split('T')[0]}`);

    // Get sessions from last 24 hours
    const { data: sessions, error: sessionsError } = await supabase
      .from("analytics_sessions")
      .select("*")
      .gte("created_at", yesterday.toISOString())
      .lt("created_at", now.toISOString());

    if (sessionsError) {
      console.error("Error fetching sessions:", sessionsError);
      throw sessionsError;
    }

    // Get conversions from last 24 hours
    const { data: conversions, error: conversionsError } = await supabase
      .from("analytics_conversions")
      .select("*")
      .gte("created_at", yesterday.toISOString())
      .lt("created_at", now.toISOString());

    if (conversionsError) {
      console.error("Error fetching conversions:", conversionsError);
      throw conversionsError;
    }

    const totalSessions = sessions?.length || 0;
    const totalConversions = conversions?.length || 0;
    const totalRevenue = conversions?.reduce((sum, c) => sum + (parseFloat(c.amount) || 0), 0) || 0;

    // A/B Test Analysis - Color Variants (Blue vs Red)
    const blueStats: VariantStats = {
      sessions: sessions?.filter(s => s.ab_variant_color === "blue").length || 0,
      conversions: conversions?.filter(c => c.ab_variant_color === "blue").length || 0,
      conversionRate: 0,
      avgScrollDepth: 0,
    };
    
    const redStats: VariantStats = {
      sessions: sessions?.filter(s => s.ab_variant_color === "red").length || 0,
      conversions: conversions?.filter(c => c.ab_variant_color === "red").length || 0,
      conversionRate: 0,
      avgScrollDepth: 0,
    };

    // Calculate conversion rates
    blueStats.conversionRate = blueStats.sessions > 0 
      ? (blueStats.conversions / blueStats.sessions) * 100 
      : 0;
    redStats.conversionRate = redStats.sessions > 0 
      ? (redStats.conversions / redStats.sessions) * 100 
      : 0;

    // Calculate average scroll depth
    const blueSessions = sessions?.filter(s => s.ab_variant_color === "blue") || [];
    const redSessions = sessions?.filter(s => s.ab_variant_color === "red") || [];
    
    blueStats.avgScrollDepth = blueSessions.length > 0
      ? blueSessions.reduce((sum, s) => {
          const depths = s.scroll_depths || [];
          return sum + (depths.length > 0 ? Math.max(...depths) : 0);
        }, 0) / blueSessions.length
      : 0;

    redStats.avgScrollDepth = redSessions.length > 0
      ? redSessions.reduce((sum, s) => {
          const depths = s.scroll_depths || [];
          return sum + (depths.length > 0 ? Math.max(...depths) : 0);
        }, 0) / redSessions.length
      : 0;

    // Determine winner
    const colorWinner = blueStats.conversionRate > redStats.conversionRate ? "BLAU" : 
                        redStats.conversionRate > blueStats.conversionRate ? "ROT" : "UNENTSCHIEDEN";
    const colorImprovement = blueStats.conversionRate > 0 && redStats.conversionRate > 0
      ? Math.abs(((blueStats.conversionRate - redStats.conversionRate) / Math.min(blueStats.conversionRate, redStats.conversionRate)) * 100)
      : 0;

    // CTA Performance Analysis
    const ctaPerformance = conversions?.reduce((acc: Record<string, number>, c) => {
      const location = c.cta_location || "unknown";
      acc[location] = (acc[location] || 0) + 1;
      return acc;
    }, {}) || {};

    const sortedCTAs = Object.entries(ctaPerformance)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    // Store the report
    const variantAnalysis = {
      blue: blueStats,
      red: redStats,
      winner: colorWinner,
      improvement: colorImprovement,
      ctaPerformance,
    };

    await supabase.from("daily_reports").upsert({
      report_date: yesterday.toISOString().split('T')[0],
      total_sessions: totalSessions,
      total_conversions: totalConversions,
      total_revenue: totalRevenue,
      variant_analysis: variantAnalysis,
      sent_at: now.toISOString(),
    });

    // Generate HTML email
    const dashboardUrl = "https://localdominator.de/analytics";
    const reportDate = yesterday.toLocaleDateString("de-DE", { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .header p { margin: 10px 0 0; opacity: 0.9; }
    .content { padding: 30px; }
    .section { margin-bottom: 30px; }
    .section-title { font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
    .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
    .stat-card { background: #f9fafb; border-radius: 8px; padding: 20px; text-align: center; }
    .stat-value { font-size: 32px; font-weight: 700; color: #2563eb; }
    .stat-label { font-size: 14px; color: #6b7280; margin-top: 5px; }
    .variant-box { background: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 15px; }
    .variant-title { font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 10px; }
    .variant-stats { display: flex; flex-wrap: wrap; gap: 15px; }
    .variant-stat { flex: 1; min-width: 100px; }
    .variant-stat-value { font-size: 20px; font-weight: 600; }
    .variant-stat-label { font-size: 12px; color: #6b7280; }
    .winner-badge { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: 600; }
    .cta-list { list-style: none; padding: 0; margin: 0; }
    .cta-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
    .cta-item:last-child { border-bottom: none; }
    .cta-name { color: #1f2937; }
    .cta-count { font-weight: 600; color: #2563eb; }
    .button { display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 20px; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
    .blue { color: #2563eb; }
    .red { color: #dc2626; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📊 LocalDominator Daily Report</h1>
      <p>${reportDate}</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">📈 Übersicht (letzte 24h)</div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${totalSessions}</div>
            <div class="stat-label">Website-Besucher</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalConversions}</div>
            <div class="stat-label">Conversions</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalSessions > 0 ? ((totalConversions / totalSessions) * 100).toFixed(1) : 0}%</div>
            <div class="stat-label">Conversion-Rate</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalRevenue.toFixed(0)}€</div>
            <div class="stat-label">Umsatz</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">🎨 A/B-Test Analyse: Farbvarianten</div>
        
        <div class="variant-box">
          <div class="variant-title blue">🔵 BLAU (Variante A)</div>
          <div class="variant-stats">
            <div class="variant-stat">
              <div class="variant-stat-value">${blueStats.sessions}</div>
              <div class="variant-stat-label">Besucher</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${blueStats.conversions}</div>
              <div class="variant-stat-label">Conversions</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${blueStats.conversionRate.toFixed(1)}%</div>
              <div class="variant-stat-label">Conv.-Rate</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${blueStats.avgScrollDepth.toFixed(0)}%</div>
              <div class="variant-stat-label">Ø Scroll-Tiefe</div>
            </div>
          </div>
        </div>

        <div class="variant-box">
          <div class="variant-title red">🔴 ROT (Variante B)</div>
          <div class="variant-stats">
            <div class="variant-stat">
              <div class="variant-stat-value">${redStats.sessions}</div>
              <div class="variant-stat-label">Besucher</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${redStats.conversions}</div>
              <div class="variant-stat-label">Conversions</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${redStats.conversionRate.toFixed(1)}%</div>
              <div class="variant-stat-label">Conv.-Rate</div>
            </div>
            <div class="variant-stat">
              <div class="variant-stat-value">${redStats.avgScrollDepth.toFixed(0)}%</div>
              <div class="variant-stat-label">Ø Scroll-Tiefe</div>
            </div>
          </div>
        </div>

        <div class="winner-badge">
          🏆 WINNER: ${colorWinner} ${colorImprovement > 0 ? `(+${colorImprovement.toFixed(0)}% bessere Conversion)` : ""}
        </div>
      </div>

      ${sortedCTAs.length > 0 ? `
      <div class="section">
        <div class="section-title">🎯 CTA Performance</div>
        <ul class="cta-list">
          ${sortedCTAs.map(([name, count], i) => `
            <li class="cta-item">
              <span class="cta-name">${i + 1}. ${name}</span>
              <span class="cta-count">${count} Conversion${count !== 1 ? 's' : ''} (${totalConversions > 0 ? ((count as number / totalConversions) * 100).toFixed(0) : 0}%)</span>
            </li>
          `).join('')}
        </ul>
      </div>
      ` : ''}

      <div style="text-align: center;">
        <a href="${dashboardUrl}" class="button">📊 Dashboard öffnen</a>
      </div>
    </div>

    <div class="footer">
      LocalDominator Analytics • Automatischer täglicher Report<br>
      Gesendet am ${now.toLocaleDateString("de-DE")} um ${now.toLocaleTimeString("de-DE")}
    </div>
  </div>
</body>
</html>
    `;

    // Send email
    const emailResponse = await resend.emails.send({
      from: "LocalDominator <onboarding@resend.dev>",
      to: ["markuswimboeck@gmail.com"],
      subject: `📊 Daily Report: ${totalSessions} Besucher, ${totalConversions} Sales - ${colorWinner} gewinnt!`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        report: {
          date: yesterday.toISOString().split('T')[0],
          totalSessions,
          totalConversions,
          totalRevenue,
          colorWinner,
          colorImprovement,
        },
        emailResponse 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error in send-daily-analytics-report:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});