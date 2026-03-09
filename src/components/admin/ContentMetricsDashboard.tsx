import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter, ZAxis
} from "recharts";
import {
  TrendingUp, TrendingDown, Eye, Users, Clock, Scroll,
  CheckCircle2, AlertTriangle, Lightbulb, BarChart3,
  RefreshCw, Target, BookOpen, Zap, Award, ArrowRight,
  Info
} from "lucide-react";

interface ArticleStats {
  article_slug: string;
  article_title: string;
  total_views: number;
  unique_visitors: number;
  avg_scroll_depth: number | null;
  avg_reading_time: number | null;
  avg_engagement_score: number | null;
  completion_rate: number | null;
  finished_count: number | null;
  first_view: string;
  last_view: string;
  views_today: number;
  views_week: number;
  views_month: number;
}

interface OverallStats {
  totalViews: number;
  uniqueVisitors: number;
  viewsToday: number;
  viewsWeek: number;
  viewsMonth: number;
  articlesTracked: number;
  avgScrollDepth: number;
  avgReadingTime: number;
  avgEngagementScore: number;
  completionRate: number;
}

const SEO_BENCHMARKS = {
  scrollDepth: { good: 75, ok: 50, label: "Scroll-Tiefe" },
  readingTime: { good: 180, ok: 90, label: "Lesezeit (Sek.)" },
  engagementScore: { good: 60, ok: 35, label: "Engagement" },
  completionRate: { good: 35, ok: 15, label: "Abschlussrate %" },
};

const CONTENT_HEALTH_TIPS: Record<string, { title: string; description: string; impact: "high" | "medium" | "low" }> = {
  lowScroll: {
    title: "Niedrige Scroll-Tiefe → Absprung-Problem",
    description: "Nutzer verlassen den Artikel früh. Mögliche Ursachen: Nicht erfüllte Suchintention, schlechte Einstiegsqualität oder zu langsames Laden. Empfehlung: Füge einen kompakten 'Key Takeaway'-Block am Anfang hinzu, der sofort Mehrwert signalisiert.",
    impact: "high"
  },
  lowCompletion: {
    title: "Niedrige Abschlussrate → Conversion-Risiko",
    description: "Artikel werden nicht zu Ende gelesen – das bedeutet, CTA-Platzierungen am Ende werden selten gesehen. Empfehlung: Füge CTAs auch nach 30%, 60% der Artikellänge ein oder nutze ein Sticky-CTA-Element.",
    impact: "high"
  },
  lowEngagement: {
    title: "Geringes Engagement → E-E-A-T-Signal schwach",
    description: "Google bewertet Engagement-Signale für E-E-A-T. Geringes Engagement reduziert das Vertrauen in deine Autorität. Empfehlung: Ergänze Expertenzitate, Statistiken, interaktive Elemente und interne Verlinkungen zu Pillar-Artikeln.",
    impact: "high"
  },
  highViews: {
    title: "Hohe Views → SEO-Grundlage vorhanden",
    description: "Diese Seite zieht organischen Traffic an. Jetzt ist der richtige Zeitpunkt, Conversion-Elemente zu optimieren und mit gut verlinkten Pillar-Seiten zu verbinden.",
    impact: "medium"
  },
};

// Custom Tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-background px-3 py-2 text-xs shadow-lg">
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color }}>{p.name}: {typeof p.value === 'number' ? p.value.toLocaleString('de-DE') : p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

const MetricCard = ({
  icon, title, value, suffix = "", subtext, trend, colorClass = "text-foreground", bgClass = "bg-muted/30"
}: {
  icon: React.ReactNode; title: string; value: string | number; suffix?: string;
  subtext?: string; trend?: "up" | "down" | "neutral"; colorClass?: string; bgClass?: string;
}) => (
  <Card className={`${bgClass} border-border/60`}>
    <CardContent className="p-4">
      <div className="flex items-start justify-between mb-2">
        <span className="text-muted-foreground">{icon}</span>
        {trend && (
          trend === "up" ? <TrendingUp className="h-4 w-4 text-green-500" /> :
          trend === "down" ? <TrendingDown className="h-4 w-4 text-red-500" /> : null
        )}
      </div>
      <p className={`text-2xl font-bold ${colorClass}`}>{value}{suffix}</p>
      <p className="text-xs font-medium text-foreground mt-0.5">{title}</p>
      {subtext && <p className="text-xs text-muted-foreground mt-0.5">{subtext}</p>}
    </CardContent>
  </Card>
);

const BenchmarkBar = ({ label, value, good, ok }: { label: string; value: number; good: number; ok: number }) => {
  const pct = Math.min(100, (value / good) * 100);
  const color = value >= good ? "bg-green-500" : value >= ok ? "bg-yellow-500" : "bg-red-500";
  const status = value >= good ? "Sehr gut" : value >= ok ? "Okay" : "Schwach";
  const statusColor = value >= good ? "text-green-600" : value >= ok ? "text-yellow-600" : "text-red-600";

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className={`font-semibold text-xs ${statusColor}`}>{status}</span>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={pct} className="h-2 flex-1" />
        <span className="text-xs font-mono w-12 text-right">{Math.round(value)}</span>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground/60">
        <span>0</span>
        <span className="text-yellow-600">{ok} (ok)</span>
        <span className="text-green-600">{good}+ (gut)</span>
      </div>
    </div>
  );
};

const InterpretationSection = ({
  title, icon, children, variant = "info"
}: {
  title: string; icon: React.ReactNode; children: React.ReactNode; variant?: "info" | "success" | "warning" | "critical"
}) => {
  const styles = {
    info: "border-primary/30 bg-primary/5",
    success: "border-green-500/30 bg-green-500/5",
    warning: "border-yellow-500/30 bg-yellow-500/5",
    critical: "border-red-500/30 bg-red-500/5",
  };
  const iconColors = {
    info: "text-primary",
    success: "text-green-600",
    warning: "text-yellow-600",
    critical: "text-red-600",
  };

  return (
    <div className={`rounded-xl border p-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 flex-shrink-0 ${iconColors[variant]}`}>{icon}</span>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

const ContentMetricsDashboard = () => {
  const [articleStats, setArticleStats] = useState<ArticleStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overallStats, setOverallStats] = useState<OverallStats>({
    totalViews: 0, uniqueVisitors: 0, viewsToday: 0, viewsWeek: 0, viewsMonth: 0,
    articlesTracked: 0, avgScrollDepth: 0, avgReadingTime: 0, avgEngagementScore: 0, completionRate: 0
  });

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [statsRes, countRes, uniqueRes, todayRes, weekRes, monthRes, articlesRes, engRes] = await Promise.all([
        supabase.from('blog_article_stats').select('*').order('total_views', { ascending: false }),
        supabase.from('blog_article_views').select('*', { count: 'exact', head: true }),
        supabase.from('blog_article_views').select('session_id'),
        supabase.from('blog_article_views').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 86400000).toISOString()),
        supabase.from('blog_article_views').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 86400000).toISOString()),
        supabase.from('blog_article_views').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 30 * 86400000).toISOString()),
        supabase.from('blog_article_views').select('article_slug'),
        supabase.from('blog_article_views')
          .select('max_scroll_depth, reading_time_seconds, engagement_score, finished_reading')
          .not('max_scroll_depth', 'is', null),
      ]);

      if (statsRes.data) setArticleStats(statsRes.data);

      const uniqueSessions = new Set(uniqueRes.data?.map(d => d.session_id) || []);
      const uniqueArticles = new Set(articlesRes.data?.map(d => d.article_slug) || []);
      const engData = engRes.data || [];
      const valid = engData.filter(d => d.max_scroll_depth !== null);

      setOverallStats({
        totalViews: countRes.count || 0,
        uniqueVisitors: uniqueSessions.size,
        viewsToday: todayRes.count || 0,
        viewsWeek: weekRes.count || 0,
        viewsMonth: monthRes.count || 0,
        articlesTracked: uniqueArticles.size,
        avgScrollDepth: valid.length ? Math.round(valid.reduce((s, d) => s + (d.max_scroll_depth || 0), 0) / valid.length) : 0,
        avgReadingTime: valid.length ? Math.round(valid.reduce((s, d) => s + (d.reading_time_seconds || 0), 0) / valid.length) : 0,
        avgEngagementScore: valid.length ? Math.round(valid.reduce((s, d) => s + (d.engagement_score || 0), 0) / valid.length) : 0,
        completionRate: valid.length ? Math.round((valid.filter(d => d.finished_reading).length / valid.length) * 100) : 0,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Compute performance score per article
  const enriched = useMemo(() =>
    articleStats.filter(a => a.total_views >= 2).map(a => {
      const score = Math.round(
        (a.avg_scroll_depth || 0) * 0.3 +
        (a.avg_engagement_score || 0) * 0.4 +
        (a.completion_rate || 0) * 0.3
      );
      return { ...a, score };
    }).sort((a, b) => b.total_views - a.total_views)
  , [articleStats]);

  // Views trend chart (simulated from week/month data)
  const trendData = useMemo(() => {
    return [
      { name: "Gesamt", views: overallStats.totalViews },
      { name: "Monat", views: overallStats.viewsMonth },
      { name: "Woche", views: overallStats.viewsWeek },
      { name: "Heute", views: overallStats.viewsToday },
    ];
  }, [overallStats]);

  // Top 10 articles for bar chart
  const topArticlesChart = useMemo(() =>
    enriched.slice(0, 10).map(a => ({
      name: (a.article_title || a.article_slug).substring(0, 22) + ((a.article_title || a.article_slug).length > 22 ? "…" : ""),
      fullName: a.article_title || a.article_slug,
      views: a.total_views,
      engagement: a.avg_engagement_score || 0,
      scroll: a.avg_scroll_depth || 0,
      score: a.score,
    }))
  , [enriched]);

  // Radar chart for avg metrics vs benchmarks
  const radarData = [
    { subject: "Scroll-Tiefe", A: overallStats.avgScrollDepth, B: 75, fullMark: 100 },
    { subject: "Engagement", A: overallStats.avgEngagementScore, B: 60, fullMark: 100 },
    { subject: "Abschlussrate", A: overallStats.completionRate, B: 35, fullMark: 100 },
    { subject: "Lesezeit", A: Math.min(100, (overallStats.avgReadingTime / 300) * 100), B: 60, fullMark: 100 },
    { subject: "Unique-Ratio", A: overallStats.totalViews > 0 ? Math.min(100, (overallStats.uniqueVisitors / overallStats.totalViews) * 100) : 0, B: 70, fullMark: 100 },
  ];

  // Scatter: views vs engagement
  const scatterData = useMemo(() =>
    enriched.map(a => ({
      x: a.total_views,
      y: a.avg_engagement_score || 0,
      z: a.avg_scroll_depth || 0,
      name: a.article_title || a.article_slug,
    }))
  , [enriched]);

  const getScrollLabel = (depth: number) =>
    depth >= 75 ? "Exzellent" : depth >= 50 ? "Gut" : depth >= 30 ? "Mittel" : "Schwach";

  const getEngagementLabel = (score: number) =>
    score >= 60 ? "Sehr hoch" : score >= 35 ? "Mittel" : "Niedrig";

  const formatReadingTime = (secs: number) =>
    `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

  // SEO interpretation thresholds
  const seoHealth = useMemo(() => {
    const issues: string[] = [];
    const strengths: string[] = [];

    if (overallStats.avgScrollDepth < 40) issues.push("Sehr geringe Scroll-Tiefe deutet auf Absprungprobleme hin");
    else if (overallStats.avgScrollDepth >= 70) strengths.push("Hohe Scroll-Tiefe zeigt starkes Content-Interesse");

    if (overallStats.completionRate < 15) issues.push("Weniger als 15% lesen Artikel zu Ende – CTAs am Ende kaum wirksam");
    else if (overallStats.completionRate >= 35) strengths.push("Gute Abschlussrate – Nutzer bleiben bis zum Ende");

    if (overallStats.avgEngagementScore < 30) issues.push("Niedriges Engagement schadet E-E-A-T-Signalen");
    else if (overallStats.avgEngagementScore >= 60) strengths.push("Hohes Engagement stärkt SEO-Autorität");

    if (overallStats.avgReadingTime < 60) issues.push("Sehr kurze Lesezeit – Bounce-Signal für Google");
    else if (overallStats.avgReadingTime >= 180) strengths.push("Lange Verweildauer ist positives Ranking-Signal");

    const score = Math.max(0, Math.min(100,
      50 +
      (overallStats.avgScrollDepth >= 70 ? 15 : overallStats.avgScrollDepth >= 50 ? 5 : -10) +
      (overallStats.completionRate >= 35 ? 10 : overallStats.completionRate >= 15 ? 3 : -8) +
      (overallStats.avgEngagementScore >= 60 ? 15 : overallStats.avgEngagementScore >= 35 ? 5 : -10) +
      (overallStats.avgReadingTime >= 180 ? 10 : overallStats.avgReadingTime >= 90 ? 3 : -7)
    ));

    return { issues, strengths, score };
  }, [overallStats]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <RefreshCw className="h-7 w-7 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* ── Overview KPI Row ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <MetricCard icon={<Eye className="h-4 w-4" />} title="Gesamt Views" value={overallStats.totalViews.toLocaleString('de-DE')} bgClass="bg-primary/5" colorClass="text-primary" />
        <MetricCard icon={<Users className="h-4 w-4" />} title="Unique Visitors" value={overallStats.uniqueVisitors.toLocaleString('de-DE')} subtext="Eindeutige Sessions" />
        <MetricCard icon={<TrendingUp className="h-4 w-4" />} title="Diese Woche" value={overallStats.viewsWeek.toLocaleString('de-DE')} trend="up" />
        <MetricCard icon={<Scroll className="h-4 w-4" />} title="Ø Scroll-Tiefe" value={overallStats.avgScrollDepth} suffix="%" subtext={getScrollLabel(overallStats.avgScrollDepth)} colorClass={overallStats.avgScrollDepth >= 70 ? "text-green-600" : overallStats.avgScrollDepth >= 50 ? "text-yellow-600" : "text-red-600"} />
        <MetricCard icon={<Clock className="h-4 w-4" />} title="Ø Lesezeit" value={formatReadingTime(overallStats.avgReadingTime)} subtext="Min:Sek" />
        <MetricCard icon={<CheckCircle2 className="h-4 w-4" />} title="Fertig gelesen" value={overallStats.completionRate} suffix="%" colorClass={overallStats.completionRate >= 35 ? "text-green-600" : overallStats.completionRate >= 15 ? "text-yellow-600" : "text-red-600"} />
      </div>

      {/* ── SEO Health Score ── */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Content-SEO Health Score
              </CardTitle>
              <CardDescription>Basiert auf Engagement-, Scroll- und Abschlussraten-Daten</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={loadData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Aktualisieren
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6 mb-6">
            <div className={`text-6xl font-bold tabular-nums ${seoHealth.score >= 70 ? "text-green-600" : seoHealth.score >= 45 ? "text-yellow-600" : "text-red-600"}`}>
              {seoHealth.score}
            </div>
            <div className="flex-1 space-y-2">
              <Progress value={seoHealth.score} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 – Kritisch</span>
                <span>45 – Mittelmäßig</span>
                <span>70+ – Stark</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {seoHealth.strengths.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-green-700 bg-green-50 rounded-lg p-3">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
            {seoHealth.issues.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-red-700 bg-red-50 rounded-lg p-3">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Main Charts Tabs ── */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="performance" className="gap-2"><BarChart3 className="h-4 w-4" />Artikel-Performance</TabsTrigger>
          <TabsTrigger value="benchmarks" className="gap-2"><Target className="h-4 w-4" />Benchmarks</TabsTrigger>
          <TabsTrigger value="engagement" className="gap-2"><Zap className="h-4 w-4" />Engagement-Analyse</TabsTrigger>
          <TabsTrigger value="seo-interpretation" className="gap-2"><BookOpen className="h-4 w-4" />SEO-Interpretation</TabsTrigger>
        </TabsList>

        {/* Tab 1: Article Performance */}
        <TabsContent value="performance" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Top articles by views */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Top-Artikel nach Views</CardTitle>
                <CardDescription>Die 10 meistgesehenen Artikel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topArticlesChart} layout="vertical" margin={{ left: 0, right: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="views" name="Views" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Views trend */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Views-Trend (Zeitfenster)</CardTitle>
                <CardDescription>Vergleich: Gesamt → Monat → Woche → Heute</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <defs>
                        <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="views" name="Views" stroke="hsl(var(--primary))" fill="url(#viewsGrad)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement vs Scroll per article */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Engagement-Score vs. Scroll-Tiefe pro Artikel</CardTitle>
              <CardDescription>Kombinierte Qualitätssicht – je oben-rechts, desto besser</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topArticlesChart} margin={{ top: 5, right: 10, bottom: 40, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" angle={-35} textAnchor="end" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="engagement" name="Engagement" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="scroll" name="Scroll %" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} opacity={0.7} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Benchmarks */}
        <TabsContent value="benchmarks" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Radar chart */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Performance-Radar</CardTitle>
                <CardDescription>Deine Metriken (blau) vs. SEO-Benchmarks (grau)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                      <Radar name="Benchmark" dataKey="B" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted))" fillOpacity={0.3} strokeDasharray="5 5" />
                      <Radar name="Deine Metriken" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} />
                      <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Benchmark bars */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Metriken vs. SEO-Standards</CardTitle>
                <CardDescription>Wo du stehst – und wo du hin solltest</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <BenchmarkBar
                  label={`Ø Scroll-Tiefe (${overallStats.avgScrollDepth}%)`}
                  value={overallStats.avgScrollDepth}
                  good={SEO_BENCHMARKS.scrollDepth.good}
                  ok={SEO_BENCHMARKS.scrollDepth.ok}
                />
                <BenchmarkBar
                  label={`Ø Engagement Score (${overallStats.avgEngagementScore}/100)`}
                  value={overallStats.avgEngagementScore}
                  good={SEO_BENCHMARKS.engagementScore.good}
                  ok={SEO_BENCHMARKS.engagementScore.ok}
                />
                <BenchmarkBar
                  label={`Abschlussrate (${overallStats.completionRate}%)`}
                  value={overallStats.completionRate}
                  good={SEO_BENCHMARKS.completionRate.good}
                  ok={SEO_BENCHMARKS.completionRate.ok}
                />
                <BenchmarkBar
                  label={`Ø Lesezeit (${overallStats.avgReadingTime}s)`}
                  value={Math.min(100, (overallStats.avgReadingTime / 300) * 100)}
                  good={60}
                  ok={30}
                />
              </CardContent>
            </Card>
          </div>

          {/* Article performance score table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Performance-Score je Artikel</CardTitle>
              <CardDescription>Gewichteter Score aus Scroll (30%) + Engagement (40%) + Abschluss (30%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {enriched.slice(0, 15).map((a, i) => (
                  <div key={a.article_slug} className="flex items-center gap-3 text-sm">
                    <span className="w-6 text-muted-foreground text-xs">{i + 1}</span>
                    <span className="flex-1 truncate text-foreground">{a.article_title || a.article_slug}</span>
                    <div className="w-24 flex-shrink-0">
                      <Progress value={a.score} className="h-1.5" />
                    </div>
                    <Badge variant={a.score >= 60 ? "default" : a.score >= 30 ? "secondary" : "destructive"} className="w-12 justify-center text-xs">
                      {a.score}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Engagement Deep-Dive */}
        <TabsContent value="engagement" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Scatter: views vs engagement */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Views vs. Engagement-Score</CardTitle>
                <CardDescription>Blasengröße = Scroll-Tiefe. Ideal: oben-rechts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="x" name="Views" type="number" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} label={{ value: "Views", position: "insideBottom", offset: -2, fontSize: 11 }} />
                      <YAxis dataKey="y" name="Engagement" type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} label={{ value: "Engagement", angle: -90, position: "insideLeft", fontSize: 11 }} />
                      <ZAxis dataKey="z" range={[40, 400]} />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} content={({ active, payload }) => {
                        if (active && payload?.length) {
                          const d = payload[0].payload;
                          return (
                            <div className="rounded-lg border border-border bg-background p-3 text-xs shadow-lg max-w-[200px]">
                              <p className="font-semibold text-foreground mb-1 line-clamp-2">{d.name}</p>
                              <p className="text-muted-foreground">Views: {d.x}</p>
                              <p className="text-muted-foreground">Engagement: {d.y}</p>
                              <p className="text-muted-foreground">Scroll: {d.z}%</p>
                            </div>
                          );
                        }
                        return null;
                      }} />
                      <Scatter data={scatterData} fill="hsl(var(--primary))" fillOpacity={0.7} />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Engagement distribution */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Engagement-Verteilung</CardTitle>
                <CardDescription>Wie viele Artikel in welcher Score-Zone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
        { zone: "0–30 (schwach)", count: enriched.filter(a => (a.avg_engagement_score || 0) < 30).length },
                        { zone: "30–60 (mittel)", count: enriched.filter(a => (a.avg_engagement_score || 0) >= 30 && (a.avg_engagement_score || 0) < 60).length },
                        { zone: "60–80 (gut)", count: enriched.filter(a => (a.avg_engagement_score || 0) >= 60 && (a.avg_engagement_score || 0) < 80).length },
                        { zone: "80+ (sehr gut)", count: enriched.filter(a => (a.avg_engagement_score || 0) >= 80).length },
                      ]}
                      margin={{ top: 5, right: 10, bottom: 40, left: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="zone" angle={-25} textAnchor="end" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="count" name="Artikel" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Completion rate per article */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Abschlussrate je Artikel</CardTitle>
              <CardDescription>Wie viele % der Leser den Artikel zu Ende lesen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={enriched.slice(0, 12).map(a => ({
                      name: (a.article_title || a.article_slug).substring(0, 18) + "…",
                      abschluss: Math.round(a.completion_rate || 0),
                      scroll: Math.round(a.avg_scroll_depth || 0),
                    }))}
                    margin={{ top: 5, right: 10, bottom: 45, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" angle={-35} textAnchor="end" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="abschluss" name="Abschluss %" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="scroll" name="Scroll %" stroke="hsl(142, 70%, 45%)" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="4 2" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: SEO Interpretation */}
        <TabsContent value="seo-interpretation" className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Was bedeuten diese Metriken?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <Scroll className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Scroll-Tiefe</p>
                    <p>Misst, wie weit Nutzer im Artikel nach unten scrollen. Google interpretiert dies als Relevanz-Signal. Eine durchschnittliche Scroll-Tiefe unter 40% deutet auf mangelnde Übereinstimmung zwischen Suchanfrage und Inhalt (Search Intent Mismatch) hin.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="h-4 w-4 flex-shrink-0 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Engagement-Score</p>
                    <p>Kombinierter Wert aus Interaktions-Events, Klicks und Verweildauer. Hoher Engagement-Score verbessert E-E-A-T-Signale (Expertise, Experience, Authoritativeness, Trustworthiness) – ein zentraler Google-Rankingfaktor.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Abschlussrate</p>
                    <p>Prozentsatz der Leser, die den vollständigen Artikel lesen. Direkt relevant für CTA-Wirksamkeit: Nur wer den Artikel beendet, sieht Bottom-CTAs. Niedrige Abschlussraten können auf "Thin Content" hindeuten.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-4 w-4 flex-shrink-0 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Durchschnittliche Lesezeit</p>
                    <p>Direkte "Time-on-Page"-Metrik. Längere Verweildauer signalisiert Google hohen Nutzwert. Unter 60 Sekunden gilt als potentielles Bounce-Signal, das Rankings negativ beeinflussen kann.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Aktuelle Performance-Bewertung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <InterpretationSection
                  title={`Scroll-Tiefe: ${overallStats.avgScrollDepth}% → ${getScrollLabel(overallStats.avgScrollDepth)}`}
                  icon={<Scroll className="h-4 w-4" />}
                  variant={overallStats.avgScrollDepth >= 70 ? "success" : overallStats.avgScrollDepth >= 50 ? "warning" : "critical"}
                >
                  <p>
                    {overallStats.avgScrollDepth >= 70
                      ? "Exzellenter Wert. Nutzer konsumieren den Content intensiv – starkes Relevanz-Signal für Google."
                      : overallStats.avgScrollDepth >= 50
                      ? "Mittelmäßig. Füge am Anfang mehr Mehrwert ein (Key Takeaways, Übersicht, Statistiken), um Leser weiter zu führen."
                      : "Kritisch niedrig. Leser verlassen den Artikel früh. Überprüfe Meta-Title & Description auf korrekte Suchintention. Starte Artikel mit einem überzeugenden Einstieg."}
                  </p>
                </InterpretationSection>
                <InterpretationSection
                  title={`Engagement: ${overallStats.avgEngagementScore}/100 → ${getEngagementLabel(overallStats.avgEngagementScore)}`}
                  icon={<Zap className="h-4 w-4" />}
                  variant={overallStats.avgEngagementScore >= 60 ? "success" : overallStats.avgEngagementScore >= 35 ? "warning" : "critical"}
                >
                  <p>
                    {overallStats.avgEngagementScore >= 60
                      ? "Sehr gutes Engagement. Nutze diese Artikel als Template für neue Inhalte."
                      : overallStats.avgEngagementScore >= 35
                      ? "Mittleres Engagement. Ergänze interaktive Elemente: Checklisten, Infografiken, interne Links zu verwandten Themen."
                      : "Niedriges Engagement schadet E-E-A-T. Priorisiere Content-Refresh mit Expertenmeinungen, aktuellen Daten und strukturierten Daten (Schema.org)."}
                  </p>
                </InterpretationSection>
              </CardContent>
            </Card>
          </div>

          {/* Actionable recommendations */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                SEO-Handlungsempfehlungen
              </CardTitle>
              <CardDescription>Basierend auf deinen aktuellen Content-Metriken</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {overallStats.avgScrollDepth < 50 && (
                <InterpretationSection title="Scroll-Tiefe verbessern" icon={<ArrowRight className="h-4 w-4" />} variant="critical">
                  <p>Füge innerhalb der ersten 200 Wörter einen "Key Takeaways"-Block oder eine Statistik-Box ein. Nutze H2-Überschriften alle 200–300 Wörter. Ergänze visuelle Elemente (Tabellen, Grafiken) in der oberen Artikelhälfte.</p>
                </InterpretationSection>
              )}
              {overallStats.completionRate < 20 && (
                <InterpretationSection title="Abschlussrate steigern" icon={<ArrowRight className="h-4 w-4" />} variant="warning">
                  <p>Platziere Mid-Content-CTAs bei ~40% und ~70% der Artikellänge. Nutze Teaser-Sätze am Ende von Abschnitten ("Im nächsten Teil erfährst du…"). Kürze sehr lange Abschnitte in nummerierte Listen um.</p>
                </InterpretationSection>
              )}
              {overallStats.avgEngagementScore < 40 && (
                <InterpretationSection title="E-E-A-T-Signale stärken" icon={<ArrowRight className="h-4 w-4" />} variant="warning">
                  <p>Ergänze Autoren-Bios mit Expertise-Nachweisen. Verlinke auf Pillar-Seiten und vertrauenswürdige externe Quellen. Füge FAQ-Bereiche mit Schema.org-Markup hinzu. Aktualisiere Artikel mit aktuellen Statistiken (2025).</p>
                </InterpretationSection>
              )}
              {overallStats.avgReadingTime < 90 && (
                <InterpretationSection title="Verweildauer erhöhen" icon={<ArrowRight className="h-4 w-4" />} variant="warning">
                  <p>Füge eingebettete Videos oder interaktive Rechner hinzu. Nutze ausführlichere Abschnitte mit konkreten Beispielen. Ergänze Infografiken, die Nutzer länger betrachten. Interne Verlinkung zu verwandten Lexikon-Artikeln hält Nutzer auf der Seite.</p>
                </InterpretationSection>
              )}
              {overallStats.avgScrollDepth >= 70 && overallStats.avgEngagementScore >= 60 && (
                <InterpretationSection title="Starke Content-Basis – Jetzt skalieren!" icon={<Award className="h-4 w-4" />} variant="success">
                  <p>Deine Content-Qualität ist hoch. Nächste Schritte: Erstelle Cluster-Artikel zu den Top-Performer-Themen, baue internen Linkjuice auf und erweitere erfolgreiche Artikel um neue Suchintentionen (Fragen, Vergleiche, Anleitungen).</p>
                </InterpretationSection>
              )}

              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  SEO-Performance-Benchmarks (Branchenstandard)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  {[
                    { metric: "Scroll-Tiefe", gut: "≥ 75%", okay: "50–74%", schwach: "< 50%" },
                    { metric: "Engagement", gut: "≥ 60", okay: "35–59", schwach: "< 35" },
                    { metric: "Abschlussrate", gut: "≥ 35%", okay: "15–34%", schwach: "< 15%" },
                    { metric: "Lesezeit", gut: "≥ 3 Min.", okay: "1–3 Min.", schwach: "< 1 Min." },
                  ].map(b => (
                    <div key={b.metric} className="rounded-lg border border-border bg-background p-2.5">
                      <p className="font-semibold text-foreground mb-1.5">{b.metric}</p>
                      <div className="space-y-0.5">
                        <p className="text-green-600">✓ Gut: {b.gut}</p>
                        <p className="text-yellow-600">~ Okay: {b.okay}</p>
                        <p className="text-red-600">✗ Schwach: {b.schwach}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentMetricsDashboard;
