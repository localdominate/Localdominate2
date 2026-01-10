import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { 
  BarChart3, 
  MousePointerClick, 
  Clock, 
  Users, 
  TrendingDown,
  TrendingUp,
  Smartphone,
  Tablet,
  Monitor,
  ArrowLeft,
  Trash2,
  Download,
  RefreshCw,
  Eye,
  Map,
  Lock,
  LogOut,
  Zap,
  Target,
  Palette,
  Search,
  Flame
} from "lucide-react";
import { 
  calculateMetrics, 
  getHeatmapData, 
  getSessions, 
  getEvents,
  clearAllAnalytics 
} from "@/lib/analyticsStorage";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import HeatmapAnalyzer from "@/components/admin/HeatmapAnalyzer";
import KeywordPerformance from "@/components/admin/KeywordPerformance";
import SEOHealthDashboard from "@/components/admin/SEOHealthDashboard";
import ContentFreshnessAlerts from "@/components/admin/ContentFreshnessAlerts";
import CoreWebVitalsPanel from "@/components/admin/CoreWebVitalsPanel";
import CompetitiveAnalysis from "@/components/admin/CompetitiveAnalysis";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLoginScreen } from "@/components/admin/AdminLoginScreen";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";

interface DBSession {
  id: string;
  session_id: string;
  ab_variant_color: string | null;
  ab_variant_restaurant: string | null;
  page_views: number;
  scroll_depths: number[];
  created_at: string;
}

interface DBConversion {
  id: string;
  ab_variant_color: string | null;
  cta_location: string | null;
  amount: number | null;
  created_at: string;
}

const Analytics = () => {
  const { user, isAdmin, isLoading: authLoading, signIn, signOut, error: authError } = useAdminAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  
  // Database state
  const [dbSessions, setDbSessions] = useState<DBSession[]>([]);
  const [dbConversions, setDbConversions] = useState<DBConversion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    if (!isAdmin) return;
    
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [sessionsRes, conversionsRes] = await Promise.all([
          supabase.from("analytics_sessions").select("*").order("created_at", { ascending: false }).limit(1000),
          supabase.from("analytics_conversions").select("*").order("created_at", { ascending: false }).limit(1000),
        ]);
        
        if (sessionsRes.data) setDbSessions(sessionsRes.data as DBSession[]);
        if (conversionsRes.data) setDbConversions(conversionsRes.data as DBConversion[]);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [isAdmin, refreshKey]);

  // Loading state
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Lade...</p>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!user) {
    return (
      <AdminLoginScreen
        onLogin={signIn}
        isLoading={authLoading}
        error={authError}
        title="Analytics Dashboard"
        description="Bitte melde dich mit deinem Admin-Konto an"
      />
    );
  }

  // Access denied for non-admins
  if (!isAdmin) {
    return <AdminAccessDenied onSignOut={signOut} userEmail={user.email} />;
  }

  
  const metrics = useMemo(() => calculateMetrics(), [refreshKey]);
  const heatmapData = useMemo(() => getHeatmapData(), [refreshKey]);
  const sessions = useMemo(() => getSessions(), [refreshKey]);
  const events = useMemo(() => getEvents(), [refreshKey]);

  // A/B Test Analysis from Database
  const abTestAnalysis = useMemo(() => {
    const blueStats = {
      sessions: dbSessions.filter(s => s.ab_variant_color === "blue").length,
      conversions: dbConversions.filter(c => c.ab_variant_color === "blue").length,
      conversionRate: 0,
      avgScrollDepth: 0,
    };
    
    const redStats = {
      sessions: dbSessions.filter(s => s.ab_variant_color === "red").length,
      conversions: dbConversions.filter(c => c.ab_variant_color === "red").length,
      conversionRate: 0,
      avgScrollDepth: 0,
    };
    
    blueStats.conversionRate = blueStats.sessions > 0 
      ? (blueStats.conversions / blueStats.sessions) * 100 
      : 0;
    redStats.conversionRate = redStats.sessions > 0 
      ? (redStats.conversions / redStats.sessions) * 100 
      : 0;
    
    // Calculate avg scroll depth
    const blueSessions = dbSessions.filter(s => s.ab_variant_color === "blue");
    const redSessions = dbSessions.filter(s => s.ab_variant_color === "red");
    
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
    
    const winner = blueStats.conversionRate > redStats.conversionRate ? "blue" :
                   redStats.conversionRate > blueStats.conversionRate ? "red" : "tie";
    
    const improvement = blueStats.conversionRate > 0 && redStats.conversionRate > 0
      ? Math.abs(((blueStats.conversionRate - redStats.conversionRate) / Math.min(blueStats.conversionRate, redStats.conversionRate)) * 100)
      : 0;
    
    return { blueStats, redStats, winner, improvement };
  }, [dbSessions, dbConversions]);

  // CTA Performance from Database
  const ctaPerformance = useMemo(() => {
    const ctaMap: Record<string, { count: number; revenue: number }> = {};
    
    dbConversions.forEach(c => {
      const location = c.cta_location || "unknown";
      if (!ctaMap[location]) {
        ctaMap[location] = { count: 0, revenue: 0 };
      }
      ctaMap[location].count++;
      ctaMap[location].revenue += c.amount || 0;
    });
    
    return Object.entries(ctaMap)
      .sort(([, a], [, b]) => b.count - a.count)
      .slice(0, 5);
  }, [dbConversions]);

  const formatDuration = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleClearData = () => {
    if (confirm("Alle lokalen Analytics-Daten löschen? Datenbank-Daten bleiben erhalten.")) {
      clearAllAnalytics();
      setRefreshKey(k => k + 1);
    }
  };

  const handleExport = () => {
    const exportData = {
      metrics,
      sessions,
      dbSessions,
      dbConversions,
      abTestAnalysis,
      heatmapPoints: heatmapData.length,
      events,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Device chart data
  const deviceData = [
    { name: "Desktop", value: metrics.deviceBreakdown.desktop || 0, color: "hsl(var(--primary))" },
    { name: "Tablet", value: metrics.deviceBreakdown.tablet || 0, color: "hsl(var(--secondary))" },
    { name: "Mobile", value: metrics.deviceBreakdown.mobile || 0, color: "hsl(var(--accent))" },
  ].filter(d => d.value > 0);

  // Click chart data
  const clickData = metrics.topClickedElements.map(([element, count]) => ({
    name: element.length > 20 ? element.substring(0, 20) + "..." : element,
    fullName: element,
    clicks: count,
  }));

  // Exit page data
  const exitData = Object.entries(metrics.exitPageBreakdown)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([page, count]) => ({
      name: page === "/" ? "Home" : page.replace("/", ""),
      exits: count,
    }));

  // Sessions over time from DB (last 7 days)
  const sessionsOverTime = useMemo(() => {
    const now = Date.now();
    const days: Record<string, number> = {};
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      const key = date.toLocaleDateString("de-DE", { weekday: "short" });
      days[key] = 0;
    }
    
    dbSessions.forEach(s => {
      const date = new Date(s.created_at);
      const key = date.toLocaleDateString("de-DE", { weekday: "short" });
      if (days[key] !== undefined) {
        days[key]++;
      }
    });
    
    return Object.entries(days).map(([name, sessions]) => ({ name, sessions }));
  }, [dbSessions]);

  // A/B Variant chart data
  const variantData = [
    { name: "Blau", value: abTestAnalysis.blueStats.sessions, color: "#2563eb" },
    { name: "Rot", value: abTestAnalysis.redStats.sessions, color: "#dc2626" },
  ].filter(d => d.value > 0);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <SEOHead 
        title="Analytics Dashboard - Local Dominator"
        description="Internes Analytics Dashboard"
        noindex={true}
      />
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="mb-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Website
          </Link>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Verstehe, wie Nutzer mit deiner Website interagieren
            {isLoading && " • Lade Daten..."}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setRefreshKey(k => k + 1)}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Aktualisieren
          </Button>
          <Link to="/ab-test">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
              <Palette className="mr-2 h-4 w-4" />
              A/B Test Dashboard
            </Button>
          </Link>
          <Link to="/admin/article-feedback">
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-500/10">
              <TrendingUp className="mr-2 h-4 w-4" />
              Artikel-Feedback
            </Button>
          </Link>
          <Link to="/?heatmap=true">
            <Button variant="outline" size="sm">
              <Map className="mr-2 h-4 w-4" />
              Heatmap anzeigen
            </Button>
          </Link>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="destructive" size="sm" onClick={handleClearData}>
            <Trash2 className="mr-2 h-4 w-4" />
            Löschen
          </Button>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Abmelden
          </Button>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:inline-flex">
          <TabsTrigger value="overview" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Übersicht
          </TabsTrigger>
          <TabsTrigger value="heatmap" className="gap-2">
            <Flame className="h-4 w-4" />
            Heatmap
          </TabsTrigger>
          <TabsTrigger value="keywords" className="gap-2">
            <Search className="h-4 w-4" />
            Keywords
          </TabsTrigger>
          <TabsTrigger value="seo-health" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            SEO Health
          </TabsTrigger>
          <TabsTrigger value="freshness" className="gap-2">
            <Clock className="h-4 w-4" />
            Freshness
          </TabsTrigger>
          <TabsTrigger value="vitals" className="gap-2">
            <Zap className="h-4 w-4" />
            Web Vitals
          </TabsTrigger>
          <TabsTrigger value="competitive" className="gap-2">
            <Target className="h-4 w-4" />
            Benchmarks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="heatmap">
          <HeatmapAnalyzer />
        </TabsContent>

        <TabsContent value="keywords">
          <KeywordPerformance />
        </TabsContent>

        <TabsContent value="seo-health">
          <SEOHealthDashboard />
        </TabsContent>

        <TabsContent value="freshness">
          <ContentFreshnessAlerts />
        </TabsContent>

        <TabsContent value="vitals">
          <CoreWebVitalsPanel />
        </TabsContent>

        <TabsContent value="competitive">
          <CompetitiveAnalysis />
        </TabsContent>

        <TabsContent value="overview">
      {/* Database KPI Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">DB Sessions</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbSessions.length}</div>
            <p className="text-xs text-muted-foreground">In Datenbank gespeichert</p>
          </CardContent>
        </Card>
        
        <Card className="border-green-500/50 bg-green-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{dbConversions.length}</div>
            <p className="text-xs text-muted-foreground">Stripe Checkouts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conv. Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dbSessions.length > 0 ? ((dbConversions.length / dbSessions.length) * 100).toFixed(2) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">Conversion Rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Umsatz</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dbConversions.reduce((sum, c) => sum + (c.amount || 0), 0).toFixed(0)}€
            </div>
            <p className="text-xs text-muted-foreground">Gesamtumsatz</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ø Verweildauer</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatDuration(metrics.avgSessionDuration)}</div>
            <p className="text-xs text-muted-foreground">Durchschnittlich</p>
          </CardContent>
        </Card>
      </div>

      {/* A/B Test Section */}
      <div className="mb-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <Palette className="h-5 w-5" />
          A/B-Test Analyse: Farbvarianten
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Blue Variant */}
          <Card className="border-blue-500/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <div className="h-4 w-4 rounded-full bg-blue-600" />
                Blau (Variante A)
                {abTestAnalysis.winner === "blue" && (
                  <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    WINNER
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.blueStats.sessions}</p>
                  <p className="text-xs text-muted-foreground">Sessions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.blueStats.conversions}</p>
                  <p className="text-xs text-muted-foreground">Conversions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{abTestAnalysis.blueStats.conversionRate.toFixed(2)}%</p>
                  <p className="text-xs text-muted-foreground">Conv. Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.blueStats.avgScrollDepth.toFixed(0)}%</p>
                  <p className="text-xs text-muted-foreground">Ø Scroll</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Red Variant */}
          <Card className="border-red-500/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-600">
                <div className="h-4 w-4 rounded-full bg-red-600" />
                Rot (Variante B)
                {abTestAnalysis.winner === "red" && (
                  <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    WINNER
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.redStats.sessions}</p>
                  <p className="text-xs text-muted-foreground">Sessions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.redStats.conversions}</p>
                  <p className="text-xs text-muted-foreground">Conversions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">{abTestAnalysis.redStats.conversionRate.toFixed(2)}%</p>
                  <p className="text-xs text-muted-foreground">Conv. Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{abTestAnalysis.redStats.avgScrollDepth.toFixed(0)}%</p>
                  <p className="text-xs text-muted-foreground">Ø Scroll</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Winner Summary */}
          <Card className="border-green-500/50 bg-green-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <TrendingUp className="h-5 w-5" />
                Ergebnis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {abTestAnalysis.winner !== "tie" ? (
                <>
                  <p className="mb-2 text-lg font-bold text-green-700">
                    {abTestAnalysis.winner === "blue" ? "🔵 BLAU" : "🔴 ROT"} gewinnt!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +{abTestAnalysis.improvement.toFixed(0)}% bessere Conversion-Rate
                  </p>
                  <div className="mt-4">
                    <p className="text-xs text-muted-foreground">Empfehlung:</p>
                    <p className="text-sm font-medium">
                      {abTestAnalysis.winner === "blue" 
                        ? "Bleib bei der blauen Farbvariante" 
                        : "Wechsle zur roten Farbvariante"}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground">
                  Noch nicht genug Daten für eine Empfehlung. Mindestens 100 Sessions pro Variante empfohlen.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Performance */}
      {ctaPerformance.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Target className="h-5 w-5" />
            CTA Performance
          </h2>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CTA Location</TableHead>
                    <TableHead className="text-right">Conversions</TableHead>
                    <TableHead className="text-right">Umsatz</TableHead>
                    <TableHead className="text-right">Anteil</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ctaPerformance.map(([location, data]) => (
                    <TableRow key={location}>
                      <TableCell className="font-medium">{location}</TableCell>
                      <TableCell className="text-right">{data.count}</TableCell>
                      <TableCell className="text-right">{data.revenue.toFixed(0)}€</TableCell>
                      <TableCell className="text-right">
                        {dbConversions.length > 0 ? ((data.count / dbConversions.length) * 100).toFixed(0) : 0}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Charts Row */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Sessions Over Time */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Sessions (Letzte 7 Tage)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={sessionsOverTime}>
                <defs>
                  <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="sessions" 
                  stroke="hsl(var(--primary))" 
                  fill="url(#sessionGradient)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Variant Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              A/B Verteilung
            </CardTitle>
          </CardHeader>
          <CardContent>
            {variantData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={variantData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {variantData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Keine Daten
              </div>
            )}
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-600" />
                <span>{abTestAnalysis.blueStats.sessions} Blau</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-600" />
                <span>{abTestAnalysis.redStats.sessions} Rot</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Local Analytics Section */}
      <h2 className="mb-4 mt-8 text-xl font-bold">Lokale Analytics (localStorage)</h2>
      
      {/* KPI Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalSessions}</div>
            <p className="text-xs text-muted-foreground">Lokale Sitzungen</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Klicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalClicks}</div>
            <p className="text-xs text-muted-foreground">Erfasste Klick-Events</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.bounceRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Absprungrate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scroll-Tiefe</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.avgScrollDepth.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">Durchschnittlich</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Geräte
            </CardTitle>
          </CardHeader>
          <CardContent>
            {deviceData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Keine Daten
              </div>
            )}
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span>{metrics.deviceBreakdown.desktop || 0}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tablet className="h-4 w-4" />
                <span>{metrics.deviceBreakdown.tablet || 0}</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>{metrics.deviceBreakdown.mobile || 0}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Clicked Elements */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointerClick className="h-5 w-5" />
              Top geklickte Elemente
            </CardTitle>
          </CardHeader>
          <CardContent>
            {clickData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={clickData} layout="vertical">
                  <XAxis type="number" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" fontSize={11} tickLine={false} axisLine={false} width={120} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                    formatter={(value, name, props) => [value, props.payload.fullName]}
                  />
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Noch keine Klicks erfasst
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Data Tables Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Exit Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Ausstiegsseiten
            </CardTitle>
          </CardHeader>
          <CardContent>
            {exitData.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Seite</TableHead>
                    <TableHead className="text-right">Ausstiege</TableHead>
                    <TableHead className="text-right">Anteil</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exitData.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-right">{item.exits}</TableCell>
                      <TableCell className="text-right">
                        {((item.exits / metrics.totalSessions) * 100).toFixed(1)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Noch keine Exit-Daten
              </div>
            )}
          </CardContent>
        </Card>

        {/* Events by Type */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Events nach Typ
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(metrics.eventsByType).length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event-Typ</TableHead>
                    <TableHead className="text-right">Anzahl</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(metrics.eventsByType)
                    .sort((a, b) => b[1] - a[1])
                    .map(([type, count]) => (
                      <TableRow key={type}>
                        <TableCell className="font-medium">{type}</TableCell>
                        <TableCell className="text-right">{count}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Noch keine Events erfasst
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Heatmap Info */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5" />
            Heatmap-Daten
          </CardTitle>
          <CardDescription>Visualisiere Klicks, Bewegungen und Scroll-Verhalten</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-lg bg-red-500/10 px-4 py-2 text-red-600">
              <span className="text-2xl font-bold">{heatmapData.filter(p => p.type === "click").length}</span>
              <span className="ml-2 text-sm">Klicks</span>
            </div>
            <div className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-600">
              <span className="text-2xl font-bold">{heatmapData.filter(p => p.type === "move").length}</span>
              <span className="ml-2 text-sm">Mausbewegungen</span>
            </div>
            <div className="rounded-lg bg-green-500/10 px-4 py-2 text-green-600">
              <span className="text-2xl font-bold">{heatmapData.filter(p => p.type === "scroll").length}</span>
              <span className="ml-2 text-sm">Scroll-Events</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Füge <code className="rounded bg-muted px-1 py-0.5">?heatmap=true</code> zur URL hinzu, um die Heatmap-Überlagerung auf jeder Seite zu sehen.
          </p>
        </CardContent>
      </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
