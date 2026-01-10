import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown,
  Target,
  BarChart3,
  Clock,
  Users,
  MousePointer,
  RefreshCw,
  Info,
  Star,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getCoreWebVitalsHistory } from "@/hooks/useCoreWebVitals";
import { blogArticles } from "@/data/blogArticles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Industry benchmarks based on 2024/2025 studies
const BENCHMARKS = {
  // Core Web Vitals (industry averages for local SEO / service businesses)
  LCP: { industry: 2800, topPerformers: 1800, unit: "ms", lowerIsBetter: true },
  FID: { industry: 130, topPerformers: 50, unit: "ms", lowerIsBetter: true },
  CLS: { industry: 0.15, topPerformers: 0.05, unit: "", lowerIsBetter: true },
  FCP: { industry: 2200, topPerformers: 1400, unit: "ms", lowerIsBetter: true },
  TTFB: { industry: 1200, topPerformers: 600, unit: "ms", lowerIsBetter: true },
  
  // Content metrics
  blogPostsPerMonth: { industry: 4, topPerformers: 12, unit: "", lowerIsBetter: false },
  avgWordCount: { industry: 1200, topPerformers: 2000, unit: "", lowerIsBetter: false },
  contentFreshness: { industry: 70, topPerformers: 90, unit: "%", lowerIsBetter: false },
  
  // Engagement metrics
  avgSessionDuration: { industry: 120, topPerformers: 240, unit: "s", lowerIsBetter: false },
  bounceRate: { industry: 55, topPerformers: 35, unit: "%", lowerIsBetter: true },
  pagesPerSession: { industry: 2.5, topPerformers: 4.5, unit: "", lowerIsBetter: false },
  conversionRate: { industry: 2.5, topPerformers: 5.5, unit: "%", lowerIsBetter: false },
  
  // Local SEO specific
  gmbResponseTime: { industry: 48, topPerformers: 12, unit: "h", lowerIsBetter: true },
  reviewResponseRate: { industry: 60, topPerformers: 95, unit: "%", lowerIsBetter: false },
  localCitations: { industry: 50, topPerformers: 150, unit: "", lowerIsBetter: false },
};

interface MetricComparison {
  name: string;
  label: string;
  category: string;
  yourValue: number | null;
  industryAvg: number;
  topPerformers: number;
  unit: string;
  lowerIsBetter: boolean;
  percentile: number | null;
  status: "ahead" | "on-par" | "behind" | "no-data";
  improvement: string;
}

const CompetitiveAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any[]>([]);
  const [conversionData, setConversionData] = useState<any[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const [sessionsRes, conversionsRes] = await Promise.all([
          supabase
            .from("analytics_sessions")
            .select("*")
            .gte("created_at", thirtyDaysAgo.toISOString())
            .limit(1000),
          supabase
            .from("analytics_conversions")
            .select("*")
            .gte("created_at", thirtyDaysAgo.toISOString())
            .limit(500),
        ]);
        
        if (sessionsRes.data) setSessionData(sessionsRes.data);
        if (conversionsRes.data) setConversionData(conversionsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [refreshKey]);

  const metrics = useMemo((): MetricComparison[] => {
    const vitalsHistory = getCoreWebVitalsHistory();
    
    // Calculate Core Web Vitals averages
    const getVitalAvg = (name: string): number | null => {
      const values = vitalsHistory.filter((v) => v.name === name).map((v) => v.value);
      if (values.length === 0) return null;
      return values.reduce((a, b) => a + b, 0) / values.length;
    };
    
    // Calculate content metrics
    const now = new Date();
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const freshArticles = blogArticles.filter((a) => {
      const updated = new Date(a.updatedAt || a.publishedAt);
      return updated >= sixMonthsAgo;
    });
    const contentFreshness = blogArticles.length > 0 
      ? (freshArticles.length / blogArticles.length) * 100 
      : null;
    
    // Blog posts per month (last 30 days)
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const recentPosts = blogArticles.filter((a) => new Date(a.publishedAt) >= oneMonthAgo).length;
    
    // Session metrics
    const avgSessionDuration = sessionData.length > 0
      ? sessionData.reduce((sum, s) => {
          if (s.end_time && s.start_time) {
            return sum + (new Date(s.end_time).getTime() - new Date(s.start_time).getTime()) / 1000;
          }
          return sum;
        }, 0) / sessionData.filter((s) => s.end_time).length || null
      : null;
    
    const avgPageViews = sessionData.length > 0
      ? sessionData.reduce((sum, s) => sum + (s.page_views || 1), 0) / sessionData.length
      : null;
    
    // Conversion rate
    const conversionRate = sessionData.length > 0 && conversionData.length > 0
      ? (conversionData.length / sessionData.length) * 100
      : null;
    
    // Bounce rate (sessions with only 1 page view)
    const bounces = sessionData.filter((s) => (s.page_views || 1) === 1).length;
    const bounceRate = sessionData.length > 0 
      ? (bounces / sessionData.length) * 100 
      : null;
    
    // Helper to calculate percentile
    const calcPercentile = (value: number | null, industry: number, top: number, lowerIsBetter: boolean): number | null => {
      if (value === null) return null;
      
      if (lowerIsBetter) {
        if (value <= top) return 95;
        if (value >= industry * 1.5) return 10;
        if (value >= industry) return 50 - ((value - industry) / (industry * 0.5)) * 40;
        return 50 + ((industry - value) / (industry - top)) * 45;
      } else {
        if (value >= top) return 95;
        if (value <= industry * 0.5) return 10;
        if (value <= industry) return 50 - ((industry - value) / (industry * 0.5)) * 40;
        return 50 + ((value - industry) / (top - industry)) * 45;
      }
    };
    
    const getStatus = (percentile: number | null): MetricComparison["status"] => {
      if (percentile === null) return "no-data";
      if (percentile >= 70) return "ahead";
      if (percentile >= 40) return "on-par";
      return "behind";
    };
    
    const getImprovement = (value: number | null, top: number, lowerIsBetter: boolean, unit: string): string => {
      if (value === null) return "Keine Daten verfügbar";
      
      const diff = lowerIsBetter ? value - top : top - value;
      if (lowerIsBetter && value <= top) return "Besser als Top-Performer! 🏆";
      if (!lowerIsBetter && value >= top) return "Besser als Top-Performer! 🏆";
      
      const improvement = Math.abs(diff);
      return lowerIsBetter 
        ? `${improvement.toFixed(unit === "" ? 2 : 0)}${unit} reduzieren`
        : `${improvement.toFixed(unit === "" ? 1 : 0)}${unit} verbessern`;
    };
    
    const createMetric = (
      name: keyof typeof BENCHMARKS,
      label: string,
      category: string,
      yourValue: number | null
    ): MetricComparison => {
      const benchmark = BENCHMARKS[name];
      const percentile = calcPercentile(yourValue, benchmark.industry, benchmark.topPerformers, benchmark.lowerIsBetter);
      
      return {
        name,
        label,
        category,
        yourValue,
        industryAvg: benchmark.industry,
        topPerformers: benchmark.topPerformers,
        unit: benchmark.unit,
        lowerIsBetter: benchmark.lowerIsBetter,
        percentile,
        status: getStatus(percentile),
        improvement: getImprovement(yourValue, benchmark.topPerformers, benchmark.lowerIsBetter, benchmark.unit),
      };
    };
    
    return [
      // Core Web Vitals
      createMetric("LCP", "Largest Contentful Paint", "Core Web Vitals", getVitalAvg("LCP")),
      createMetric("FID", "First Input Delay", "Core Web Vitals", getVitalAvg("FID")),
      createMetric("CLS", "Cumulative Layout Shift", "Core Web Vitals", getVitalAvg("CLS")),
      createMetric("FCP", "First Contentful Paint", "Core Web Vitals", getVitalAvg("FCP")),
      createMetric("TTFB", "Time to First Byte", "Core Web Vitals", getVitalAvg("TTFB")),
      
      // Content
      createMetric("blogPostsPerMonth", "Blog-Posts pro Monat", "Content", recentPosts),
      createMetric("contentFreshness", "Content Aktualität", "Content", contentFreshness),
      
      // Engagement
      createMetric("avgSessionDuration", "Ø Sitzungsdauer", "Engagement", avgSessionDuration),
      createMetric("bounceRate", "Bounce Rate", "Engagement", bounceRate),
      createMetric("pagesPerSession", "Seiten pro Sitzung", "Engagement", avgPageViews),
      createMetric("conversionRate", "Conversion Rate", "Engagement", conversionRate),
    ];
  }, [sessionData, conversionData, refreshKey]);

  const overallScore = useMemo(() => {
    const scored = metrics.filter((m) => m.percentile !== null);
    if (scored.length === 0) return null;
    return Math.round(scored.reduce((sum, m) => sum + (m.percentile || 0), 0) / scored.length);
  }, [metrics]);

  const categories = useMemo(() => {
    const cats: Record<string, MetricComparison[]> = {};
    metrics.forEach((m) => {
      if (!cats[m.category]) cats[m.category] = [];
      cats[m.category].push(m);
    });
    return cats;
  }, [metrics]);

  const getStatusIcon = (status: MetricComparison["status"]) => {
    switch (status) {
      case "ahead": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "on-par": return <Target className="h-4 w-4 text-yellow-600" />;
      case "behind": return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <Info className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: MetricComparison["status"]) => {
    switch (status) {
      case "ahead": return <Badge className="bg-green-100 text-green-800">Voraus</Badge>;
      case "on-par": return <Badge variant="secondary">Im Schnitt</Badge>;
      case "behind": return <Badge variant="destructive">Aufholbedarf</Badge>;
      default: return <Badge variant="outline">Keine Daten</Badge>;
    }
  };

  const formatValue = (value: number | null, unit: string, lowerIsBetter: boolean) => {
    if (value === null) return "—";
    
    if (unit === "s") return `${Math.round(value)}s`;
    if (unit === "%") return `${value.toFixed(1)}%`;
    if (unit === "ms") return `${Math.round(value)}ms`;
    if (unit === "h") return `${value}h`;
    if (unit === "") {
      return value < 1 ? value.toFixed(3) : value.toFixed(1);
    }
    return value.toString();
  };

  const summaryStats = useMemo(() => {
    const ahead = metrics.filter((m) => m.status === "ahead").length;
    const onPar = metrics.filter((m) => m.status === "on-par").length;
    const behind = metrics.filter((m) => m.status === "behind").length;
    const noData = metrics.filter((m) => m.status === "no-data").length;
    return { ahead, onPar, behind, noData };
  }, [metrics]);

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Competitive Analysis
            </h3>
            <p className="text-sm text-muted-foreground">
              Vergleiche deine Metriken mit Branchenbenchmarks
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setRefreshKey((k) => k + 1)}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Aktualisieren
          </Button>
        </div>

        {/* Overall Score */}
        {overallScore !== null && (
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Wettbewerbsposition
              </CardTitle>
              <CardDescription>
                Dein Ranking im Vergleich zur Branche
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${
                    overallScore >= 70 ? "text-green-600" :
                    overallScore >= 40 ? "text-yellow-600" : "text-red-600"
                  }`}>
                    {overallScore}
                  </div>
                  <div className="text-sm text-muted-foreground">Percentile</div>
                </div>
                <div className="flex-1 space-y-2">
                  <Progress value={overallScore} className="h-4" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Unterdurchschnitt</span>
                    <span>Branchendurchschnitt</span>
                    <span>Top Performer</span>
                  </div>
                </div>
              </div>
              
              {/* Summary Pills */}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">{summaryStats.ahead} Voraus</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full">
                  <Target className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">{summaryStats.onPar} Im Schnitt</span>
                </div>
                <div className="flex items-center gap-2 bg-red-100 px-3 py-1.5 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-800">{summaryStats.behind} Aufholbedarf</span>
                </div>
                {summaryStats.noData > 0 && (
                  <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{summaryStats.noData} Ohne Daten</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Metrics by Category */}
        {Object.entries(categories).map(([category, categoryMetrics]) => (
          <Card key={category}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                {category === "Core Web Vitals" && <BarChart3 className="h-4 w-4" />}
                {category === "Content" && <Clock className="h-4 w-4" />}
                {category === "Engagement" && <Users className="h-4 w-4" />}
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryMetrics.map((metric) => (
                  <div 
                    key={metric.name}
                    className={`p-4 rounded-lg border ${
                      metric.status === "ahead" ? "bg-green-50 border-green-200" :
                      metric.status === "on-par" ? "bg-yellow-50 border-yellow-200" :
                      metric.status === "behind" ? "bg-red-50 border-red-200" :
                      "bg-muted/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(metric.status)}
                        <span className="font-medium">{metric.label}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-3.5 w-3.5 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-xs">{metric.improvement}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      {getStatusBadge(metric.status)}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Dein Wert</div>
                        <div className={`text-lg font-bold ${
                          metric.status === "ahead" ? "text-green-600" :
                          metric.status === "on-par" ? "text-yellow-600" :
                          metric.status === "behind" ? "text-red-600" :
                          "text-muted-foreground"
                        }`}>
                          {formatValue(metric.yourValue, metric.unit, metric.lowerIsBetter)}
                        </div>
                      </div>
                      <div className="text-center border-x">
                        <div className="text-xs text-muted-foreground mb-1">Branche Ø</div>
                        <div className="text-lg font-semibold text-foreground/70">
                          {formatValue(metric.industryAvg, metric.unit, metric.lowerIsBetter)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Top 10%</div>
                        <div className="text-lg font-semibold text-primary">
                          {formatValue(metric.topPerformers, metric.unit, metric.lowerIsBetter)}
                        </div>
                      </div>
                    </div>
                    
                    {metric.percentile !== null && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Percentile: {Math.round(metric.percentile)}%</span>
                          <span className="flex items-center gap-1">
                            {metric.status === "behind" && (
                              <>
                                <ArrowRight className="h-3 w-3" />
                                <span>{metric.improvement}</span>
                              </>
                            )}
                          </span>
                        </div>
                        <Progress value={metric.percentile} className="h-2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Benchmark Sources */}
        <Card className="border-dashed">
          <CardContent className="py-4">
            <p className="text-xs text-muted-foreground text-center">
              📊 Benchmarks basieren auf Studien von Google, Ahrefs, HubSpot und SEMrush (2024/2025) für lokale Dienstleister und KMUs.
            </p>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default CompetitiveAnalysis;
