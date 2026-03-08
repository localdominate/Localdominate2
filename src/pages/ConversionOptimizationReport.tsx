import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLoginScreen } from "@/components/admin/AdminLoginScreen";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";
import {
  ArrowLeft, TrendingUp, TrendingDown, Target, MousePointerClick,
  Eye, Users, Zap, AlertTriangle, CheckCircle2, Lightbulb,
  ArrowRight, BarChart3, Clock, FileText, Smartphone, Monitor,
  RefreshCw, Save, History, Trash2, Download
} from "lucide-react";
import { toast } from "sonner";

const COLORS = ["hsl(var(--primary))", "hsl(var(--destructive))", "#f59e0b", "#10b981", "#8b5cf6", "#06b6d4"];

interface ConversionRow {
  id: string;
  conversion_type: string;
  cta_location: string | null;
  cta_text: string | null;
  page_path: string | null;
  blog_article_slug: string | null;
  blog_cta_position: string | null;
  blog_cta_variant: string | null;
  amount: number | null;
  created_at: string;
  payment_verified: boolean | null;
}

interface LeadRow {
  id: string;
  email: string;
  source_page: string | null;
  source_cta: string | null;
  lead_type: string | null;
  created_at: string;
  ab_variant: string | null;
}

interface EngagementRow {
  session_id: string;
  variant: string;
  clicked_cta: boolean | null;
  viewed_cta: boolean | null;
  started_checkout: boolean | null;
  completed_checkout: boolean | null;
  max_scroll_depth: number | null;
  session_duration_ms: number | null;
  time_to_first_cta_ms: number | null;
  cta_hover_count: number | null;
  engagement_score: number | null;
  intent_score: number | null;
  created_at: string | null;
}

interface Recommendation {
  severity: "critical" | "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
  impact: string;
}

const ConversionOptimizationReport = () => {
  const { user, isAdmin, isLoading: authLoading, signIn, signOut, error: authError } = useAdminAuth();
  const [conversions, setConversions] = useState<ConversionRow[]>([]);
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [engagement, setEngagement] = useState<EngagementRow[]>([]);
  const [sessionCount, setSessionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [savedReports, setSavedReports] = useState<any[]>([]);
  const [reportNotes, setReportNotes] = useState("");

  useEffect(() => {
    if (!isAdmin) return;
    const fetchData = async () => {
      setIsLoading(true);
      const [convRes, leadRes, engRes, sessRes] = await Promise.all([
        supabase.from("analytics_conversions").select("*").order("created_at", { ascending: false }).limit(1000),
        supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(1000),
        supabase.from("ab_test_engagement").select("*").order("created_at", { ascending: false }).limit(1000),
        supabase.from("analytics_sessions").select("id", { count: "exact", head: true }),
      ]);
      if (convRes.data) setConversions(convRes.data as ConversionRow[]);
      if (leadRes.data) setLeads(leadRes.data as LeadRow[]);
      if (engRes.data) setEngagement(engRes.data as EngagementRow[]);
      if (sessRes.count != null) setSessionCount(sessRes.count);
      setIsLoading(false);
    };
    fetchData();
  }, [isAdmin]);

  // === Computed metrics ===
  const metrics = useMemo(() => {
    const totalConversions = conversions.length;
    const totalLeads = leads.length;
    const conversionRate = sessionCount > 0 ? (totalConversions / sessionCount) * 100 : 0;
    const leadRate = sessionCount > 0 ? (totalLeads / sessionCount) * 100 : 0;

    // CTA click rate from engagement
    const ctaViewers = engagement.filter(e => e.viewed_cta).length;
    const ctaClickers = engagement.filter(e => e.clicked_cta).length;
    const ctaClickRate = ctaViewers > 0 ? (ctaClickers / ctaViewers) * 100 : 0;

    // Checkout funnel
    const checkoutStarts = engagement.filter(e => e.started_checkout).length;
    const checkoutCompletes = engagement.filter(e => e.completed_checkout).length;
    const checkoutCompletionRate = checkoutStarts > 0 ? (checkoutCompletes / checkoutStarts) * 100 : 0;

    // Avg engagement score
    const scores = engagement.filter(e => e.engagement_score != null).map(e => e.engagement_score!);
    const avgEngagement = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;

    // Avg time to first CTA
    const ttfc = engagement.filter(e => e.time_to_first_cta_ms != null && e.time_to_first_cta_ms > 0).map(e => e.time_to_first_cta_ms!);
    const avgTimeToFirstCta = ttfc.length > 0 ? ttfc.reduce((a, b) => a + b, 0) / ttfc.length / 1000 : 0;

    return { totalConversions, totalLeads, conversionRate, leadRate, ctaClickRate, checkoutCompletionRate, avgEngagement, avgTimeToFirstCta, ctaViewers, ctaClickers, checkoutStarts, checkoutCompletes };
  }, [conversions, leads, engagement, sessionCount]);

  // === CTA performance by location ===
  const ctaByLocation = useMemo(() => {
    const locationMap = new Map<string, { clicks: number; conversions: number }>();
    conversions.forEach(c => {
      const loc = c.cta_location || c.blog_cta_position || "unknown";
      const entry = locationMap.get(loc) || { clicks: 0, conversions: 0 };
      entry.clicks += 1;
      entry.conversions += c.payment_verified ? 1 : 0;
      locationMap.set(loc, entry);
    });
    return Array.from(locationMap.entries())
      .map(([location, data]) => ({ location, ...data }))
      .sort((a, b) => b.clicks - a.clicks);
  }, [conversions]);

  // === Top converting pages ===
  const topPages = useMemo(() => {
    const pageMap = new Map<string, { views: number; conversions: number }>();
    conversions.forEach(c => {
      const page = c.page_path || c.blog_article_slug || "unknown";
      const entry = pageMap.get(page) || { views: 0, conversions: 0 };
      entry.conversions += 1;
      pageMap.set(page, entry);
    });
    return Array.from(pageMap.entries())
      .map(([page, data]) => ({ page, ...data, rate: data.conversions }))
      .sort((a, b) => b.conversions - a.conversions)
      .slice(0, 15);
  }, [conversions]);

  // === Lead sources ===
  const leadSources = useMemo(() => {
    const sourceMap = new Map<string, number>();
    leads.forEach(l => {
      const src = l.source_cta || l.lead_type || "unknown";
      sourceMap.set(src, (sourceMap.get(src) || 0) + 1);
    });
    return Array.from(sourceMap.entries())
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);
  }, [leads]);

  // === Conversion trend (last 30 days) ===
  const conversionTrend = useMemo(() => {
    const days = new Map<string, { conversions: number; leads: number }>();
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      days.set(key, { conversions: 0, leads: 0 });
    }
    conversions.forEach(c => {
      const key = c.created_at.split("T")[0];
      if (days.has(key)) days.get(key)!.conversions++;
    });
    leads.forEach(l => {
      const key = l.created_at.split("T")[0];
      if (days.has(key)) days.get(key)!.leads++;
    });
    return Array.from(days.entries()).map(([date, data]) => ({
      date: date.slice(5), // MM-DD
      ...data,
    }));
  }, [conversions, leads]);

  // === Blog CTA variant performance ===
  const blogCtaVariants = useMemo(() => {
    const variantMap = new Map<string, number>();
    conversions.filter(c => c.blog_cta_variant).forEach(c => {
      const v = c.blog_cta_variant!;
      variantMap.set(v, (variantMap.get(v) || 0) + 1);
    });
    return Array.from(variantMap.entries())
      .map(([variant, count]) => ({ variant, count }))
      .sort((a, b) => b.count - a.count);
  }, [conversions]);

  // === Funnel data ===
  const funnelData = useMemo(() => [
    { stage: "Sessions", value: sessionCount },
    { stage: "CTA gesehen", value: metrics.ctaViewers },
    { stage: "CTA geklickt", value: metrics.ctaClickers },
    { stage: "Checkout gestartet", value: metrics.checkoutStarts },
    { stage: "Checkout abgeschlossen", value: metrics.checkoutCompletes },
  ], [sessionCount, metrics]);

  // === Dynamic recommendations ===
  const recommendations = useMemo((): Recommendation[] => {
    const recs: Recommendation[] = [];

    if (metrics.ctaClickRate < 5) {
      recs.push({
        severity: "critical", category: "CTA Design",
        title: "CTA-Klickrate unter 5%",
        description: `Aktuelle CTA-Klickrate: ${metrics.ctaClickRate.toFixed(1)}%. Best Practice liegt bei 5-15%. Teste kontrastreichere Farben, dringlichere Texte und prominentere Platzierung.`,
        impact: "Potentiell 2-3x mehr Klicks bei Optimierung auf 10%+"
      });
    }

    if (metrics.checkoutCompletionRate < 50 && metrics.checkoutStarts > 5) {
      recs.push({
        severity: "critical", category: "Checkout Funnel",
        title: "Checkout-Abbruchrate zu hoch",
        description: `Nur ${metrics.checkoutCompletionRate.toFixed(0)}% der gestarteten Checkouts werden abgeschlossen. Überprüfe: Vertrauenselemente (Garantie, Siegel), Preistransparenz, und mobile Checkout-UX.`,
        impact: "Direkter Revenue-Impact bei Verbesserung"
      });
    }

    if (metrics.avgTimeToFirstCta > 30) {
      recs.push({
        severity: "high", category: "CTA Platzierung",
        title: "Erste CTA erst nach >30 Sekunden sichtbar",
        description: `Nutzer brauchen durchschnittlich ${metrics.avgTimeToFirstCta.toFixed(0)}s bis zur ersten CTA. Platziere eine above-the-fold CTA oder füge frühere Conversion-Trigger ein.`,
        impact: "Schnellere Conversion-Pfade für Impuls-Käufer"
      });
    }

    if (metrics.leadRate < 1 && sessionCount > 100) {
      recs.push({
        severity: "high", category: "Lead-Generierung",
        title: "Lead-Capture-Rate unter 1%",
        description: `Nur ${metrics.leadRate.toFixed(2)}% der Sessions generieren einen Lead. Implementiere Exit-Intent-Popups, Content-Upgrades, und inline Lead-Magnets in Blog-Artikeln.`,
        impact: "Potentiell 3-5x mehr Leads pro Monat"
      });
    }

    const noCtaPages = topPages.filter(p => p.conversions === 0);
    if (noCtaPages.length > 3) {
      recs.push({
        severity: "medium", category: "CTA Coverage",
        title: `${noCtaPages.length} Seiten ohne Conversions`,
        description: "Mehrere Seiten mit Traffic generieren keine Conversions. Überprüfe ob CTAs auf diesen Seiten vorhanden und sichtbar sind.",
        impact: "Ungenutzte Traffic-Quellen aktivieren"
      });
    }

    if (metrics.avgEngagement < 30 && engagement.length > 20) {
      recs.push({
        severity: "medium", category: "Engagement",
        title: "Niedriger durchschnittlicher Engagement-Score",
        description: `Ø Engagement-Score: ${metrics.avgEngagement.toFixed(0)}/100. Nutzer interagieren zu wenig mit der Seite. Verbessere Content-Qualität, interaktive Elemente und visuelle Hierarchie.`,
        impact: "Höheres Engagement korreliert mit 2x höherer Conversion-Rate"
      });
    }

    // Always add some best practice recommendations
    recs.push({
      severity: "low", category: "A/B Testing",
      title: "Fortlaufende CTA-Tests implementieren",
      description: "Teste systematisch: Button-Farben, CTA-Texte, Platzierung, und Urgency-Elemente. Bayesian Testing mit 95% Konfidenz und mind. 20% Lift als Schwelle.",
      impact: "Kontinuierliche inkrementelle Verbesserung (5-15% pro Quartal)"
    });

    recs.push({
      severity: "low", category: "Social Proof",
      title: "Social-Proof-Elemente näher an CTAs platzieren",
      description: "Testimonials, Kundenzahlen und Trust-Badges direkt neben oder über CTAs platzieren. Conversion-Rate steigt typischerweise um 10-30%.",
      impact: "10-30% Lift bei CTA-Klickrate"
    });

    return recs.sort((a, b) => {
      const order = { critical: 0, high: 1, medium: 2, low: 3 };
      return order[a.severity] - order[b.severity];
    });
  }, [metrics, topPages, engagement, sessionCount]);

  const severityColor = (s: string) =>
    s === "critical" ? "text-destructive bg-destructive/10" :
    s === "high" ? "text-orange-600 bg-orange-100" :
    s === "medium" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const severityIcon = (s: string) =>
    s === "critical" ? <AlertTriangle className="h-4 w-4 text-destructive" /> :
    s === "high" ? <TrendingDown className="h-4 w-4 text-orange-600" /> :
    s === "medium" ? <Lightbulb className="h-4 w-4 text-primary" /> :
    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />;

  // Auth gates
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AdminLoginScreen onLogin={signIn} isLoading={authLoading} error={authError} />;
  }

  if (!isAdmin) {
    return <AdminAccessDenied onSignOut={signOut} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Conversion Optimization Report" description="CTA-Performance, Lead-Generierung und Optimierungsempfehlungen" noindex />

      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/analytics">
              <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-1" /> Analytics</Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Conversion Optimization Report</h1>
              <p className="text-sm text-muted-foreground">CTA-Performance & Empfehlungen</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            <RefreshCw className="h-4 w-4 mr-1" /> Aktualisieren
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Conversion Rate", value: `${metrics.conversionRate.toFixed(2)}%`, icon: <Target className="h-5 w-5 text-primary" />, sub: `${metrics.totalConversions} von ${sessionCount}` },
                { label: "Lead-Rate", value: `${metrics.leadRate.toFixed(2)}%`, icon: <Users className="h-5 w-5 text-primary" />, sub: `${metrics.totalLeads} Leads` },
                { label: "CTA-Klickrate", value: `${metrics.ctaClickRate.toFixed(1)}%`, icon: <MousePointerClick className="h-5 w-5 text-primary" />, sub: `${metrics.ctaClickers}/${metrics.ctaViewers} Klicks` },
                { label: "Checkout-Rate", value: `${metrics.checkoutCompletionRate.toFixed(0)}%`, icon: <Zap className="h-5 w-5 text-primary" />, sub: `${metrics.checkoutCompletes}/${metrics.checkoutStarts}` },
              ].map((kpi, i) => (
                <Card key={i}>
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-medium">{kpi.label}</span>
                      {kpi.icon}
                    </div>
                    <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{kpi.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="recommendations" className="space-y-4">
              <TabsList>
                <TabsTrigger value="recommendations">🎯 Empfehlungen</TabsTrigger>
                <TabsTrigger value="funnel">🔄 Funnel</TabsTrigger>
                <TabsTrigger value="cta-performance">📊 CTA-Performance</TabsTrigger>
                <TabsTrigger value="trends">📈 Trends</TabsTrigger>
              </TabsList>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary" /> Optimierungsempfehlungen</CardTitle>
                    <CardDescription>Priorisierte Maßnahmen basierend auf deinen aktuellen Daten</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendations.map((rec, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card">
                          <div className="flex-shrink-0 mt-0.5">{severityIcon(rec.severity)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h3 className="font-semibold text-foreground text-sm">{rec.title}</h3>
                              <Badge className={`text-xs ${severityColor(rec.severity)}`}>{rec.severity}</Badge>
                              <Badge variant="outline" className="text-xs">{rec.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                            <p className="text-xs text-primary font-medium flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" /> {rec.impact}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Funnel Tab */}
              <TabsContent value="funnel" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Funnel</CardTitle>
                    <CardDescription>Session → CTA → Checkout Pipeline</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {funnelData.map((stage, i) => {
                        const maxVal = funnelData[0].value || 1;
                        const pct = (stage.value / maxVal) * 100;
                        const dropoff = i > 0 && funnelData[i - 1].value > 0
                          ? ((funnelData[i - 1].value - stage.value) / funnelData[i - 1].value * 100).toFixed(0)
                          : null;
                        return (
                          <div key={stage.stage}>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="font-medium text-foreground">{stage.stage}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">{stage.value.toLocaleString()}</span>
                                {dropoff && <Badge variant="outline" className="text-xs text-destructive">-{dropoff}%</Badge>}
                              </div>
                            </div>
                            <div className="w-full h-8 bg-muted rounded overflow-hidden">
                              <div
                                className="h-full bg-primary/80 rounded transition-all duration-700 flex items-center px-3"
                                style={{ width: `${Math.max(pct, 2)}%` }}
                              >
                                <span className="text-xs text-primary-foreground font-medium">{pct.toFixed(1)}%</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Engagement metrics */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Ø Engagement-Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-foreground">{metrics.avgEngagement.toFixed(0)}<span className="text-base text-muted-foreground">/100</span></p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Ø Zeit bis erste CTA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-foreground">{metrics.avgTimeToFirstCta.toFixed(1)}<span className="text-base text-muted-foreground">s</span></p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* CTA Performance Tab */}
              <TabsContent value="cta-performance" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* By location */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Conversions nach CTA-Position</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {ctaByLocation.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={ctaByLocation.slice(0, 8)}>
                            <XAxis dataKey="location" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={60} />
                            <YAxis tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Bar dataKey="clicks" fill="hsl(var(--primary))" name="Klicks" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <p className="text-sm text-muted-foreground text-center py-8">Noch keine Daten</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Lead sources */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Lead-Quellen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {leadSources.length > 0 ? (
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie data={leadSources.slice(0, 6)} dataKey="count" nameKey="source" cx="50%" cy="50%" outerRadius={90} label={({ source, count }) => `${source}: ${count}`}>
                              {leadSources.slice(0, 6).map((_, i) => (
                                <Cell key={i} fill={COLORS[i % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      ) : (
                        <p className="text-sm text-muted-foreground text-center py-8">Noch keine Leads</p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Blog CTA variants */}
                {blogCtaVariants.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Blog CTA-Varianten Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Variante</TableHead>
                            <TableHead className="text-right">Conversions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {blogCtaVariants.map(v => (
                            <TableRow key={v.variant}>
                              <TableCell className="font-medium">{v.variant}</TableCell>
                              <TableCell className="text-right">{v.count}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}

                {/* Top converting pages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Top Converting Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {topPages.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Seite</TableHead>
                            <TableHead className="text-right">Conversions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {topPages.map(p => (
                            <TableRow key={p.page}>
                              <TableCell className="font-mono text-xs max-w-[300px] truncate">{p.page}</TableCell>
                              <TableCell className="text-right font-medium">{p.conversions}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-8">Noch keine Conversion-Daten</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Trends Tab */}
              <TabsContent value="trends" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Conversions & Leads (letzte 30 Tage)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={conversionTrend}>
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="conversions" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} name="Conversions" />
                        <Area type="monotone" dataKey="leads" stroke="#10b981" fill="#10b981" fillOpacity={0.15} name="Leads" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default ConversionOptimizationReport;
