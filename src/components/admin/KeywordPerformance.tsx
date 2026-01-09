import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Search, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  ArrowUpDown,
  FileText,
  Globe,
  Target,
  Clock,
  DollarSign
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface KeywordData {
  id: string;
  keyword: string;
  source: string | null;
  impressions: number;
  sessions: number;
  conversions: number;
  revenue: number;
  avg_session_duration_ms: number;
  avg_scroll_depth: number;
  bounce_rate: number;
  date: string;
}

interface AggregatedKeyword {
  keyword: string;
  source: string;
  sessions: number;
  conversions: number;
  revenue: number;
  conversionRate: number;
  avgDuration: number;
  avgScrollDepth: number;
  trend: "up" | "down" | "stable";
}

const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#ca8a04", "#9333ea", "#0891b2"];

const KeywordPerformance = () => {
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"sessions" | "conversions" | "revenue" | "conversionRate">("sessions");
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "all">("30d");

  // Also fetch from sessions and conversions tables to derive keyword data
  const [sessions, setSessions] = useState<any[]>([]);
  const [conversions, setConversions] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [timeRange]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const startDate = new Date();
      if (timeRange === "7d") startDate.setDate(startDate.getDate() - 7);
      else if (timeRange === "30d") startDate.setDate(startDate.getDate() - 30);
      else startDate.setFullYear(2020);

      const [keywordRes, sessionsRes, conversionsRes] = await Promise.all([
        supabase
          .from("keyword_performance")
          .select("*")
          .gte("date", startDate.toISOString().split("T")[0])
          .order("date", { ascending: false }),
        supabase
          .from("analytics_sessions")
          .select("*")
          .gte("created_at", startDate.toISOString())
          .limit(2000),
        supabase
          .from("analytics_conversions")
          .select("*")
          .gte("created_at", startDate.toISOString())
          .limit(1000),
      ]);

      if (keywordRes.data) setKeywordData(keywordRes.data as KeywordData[]);
      if (sessionsRes.data) setSessions(sessionsRes.data);
      if (conversionsRes.data) setConversions(conversionsRes.data);
    } catch (error) {
      console.error("Error fetching keyword data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Derive keywords from sessions (blog articles and referrers)
  const derivedKeywords = useMemo((): AggregatedKeyword[] => {
    const keywordMap: Record<string, {
      sessions: number;
      conversions: number;
      revenue: number;
      durations: number[];
      scrollDepths: number[];
      source: string;
      recentSessions: number;
      olderSessions: number;
    }> = {};

    // Extract keywords from blog article paths
    sessions.forEach(session => {
      const entryPage = session.entry_page || "";
      if (entryPage.includes("/blog/")) {
        const slug = entryPage.split("/blog/")[1]?.split("?")[0];
        if (slug) {
          const keyword = slug.replace(/-/g, " ");
          if (!keywordMap[keyword]) {
            keywordMap[keyword] = {
              sessions: 0,
              conversions: 0,
              revenue: 0,
              durations: [],
              scrollDepths: [],
              source: "blog",
              recentSessions: 0,
              olderSessions: 0,
            };
          }
          keywordMap[keyword].sessions++;
          keywordMap[keyword].source = "blog";
          
          // Calculate duration if available
          if (session.end_time && session.start_time) {
            const duration = new Date(session.end_time).getTime() - new Date(session.start_time).getTime();
            keywordMap[keyword].durations.push(duration);
          }
          
          // Scroll depths
          if (session.scroll_depths && session.scroll_depths.length > 0) {
            keywordMap[keyword].scrollDepths.push(Math.max(...session.scroll_depths));
          }

          // Track trend (recent vs older)
          const sessionDate = new Date(session.created_at);
          const halfwayDate = new Date();
          halfwayDate.setDate(halfwayDate.getDate() - (timeRange === "7d" ? 3.5 : timeRange === "30d" ? 15 : 45));
          if (sessionDate > halfwayDate) {
            keywordMap[keyword].recentSessions++;
          } else {
            keywordMap[keyword].olderSessions++;
          }
        }
      }

      // Extract keywords from referrer
      const referrer = session.referrer || "";
      if (referrer.includes("google")) {
        const searchMatch = referrer.match(/[?&]q=([^&]+)/);
        if (searchMatch) {
          const keyword = decodeURIComponent(searchMatch[1]).replace(/\+/g, " ");
          if (!keywordMap[keyword]) {
            keywordMap[keyword] = {
              sessions: 0,
              conversions: 0,
              revenue: 0,
              durations: [],
              scrollDepths: [],
              source: "google",
              recentSessions: 0,
              olderSessions: 0,
            };
          }
          keywordMap[keyword].sessions++;
          keywordMap[keyword].source = "google";
        }
      }
    });

    // Match conversions to keywords via blog articles
    conversions.forEach(conv => {
      const pagePath = conv.page_path || "";
      if (pagePath.includes("/blog/")) {
        const slug = pagePath.split("/blog/")[1]?.split("?")[0];
        if (slug) {
          const keyword = slug.replace(/-/g, " ");
          if (keywordMap[keyword]) {
            keywordMap[keyword].conversions++;
            keywordMap[keyword].revenue += conv.amount || 0;
          }
        }
      }
    });

    // Also add data from keyword_performance table
    keywordData.forEach(kw => {
      if (!keywordMap[kw.keyword]) {
        keywordMap[kw.keyword] = {
          sessions: 0,
          conversions: 0,
          revenue: 0,
          durations: [],
          scrollDepths: [],
          source: kw.source || "unknown",
          recentSessions: 0,
          olderSessions: 0,
        };
      }
      keywordMap[kw.keyword].sessions += kw.sessions;
      keywordMap[kw.keyword].conversions += kw.conversions;
      keywordMap[kw.keyword].revenue += kw.revenue;
      if (kw.avg_session_duration_ms) {
        keywordMap[kw.keyword].durations.push(kw.avg_session_duration_ms);
      }
      if (kw.avg_scroll_depth) {
        keywordMap[kw.keyword].scrollDepths.push(kw.avg_scroll_depth);
      }
    });

    return Object.entries(keywordMap)
      .map(([keyword, data]) => ({
        keyword,
        source: data.source,
        sessions: data.sessions,
        conversions: data.conversions,
        revenue: data.revenue,
        conversionRate: data.sessions > 0 ? (data.conversions / data.sessions) * 100 : 0,
        avgDuration: data.durations.length > 0 
          ? data.durations.reduce((a, b) => a + b, 0) / data.durations.length 
          : 0,
        avgScrollDepth: data.scrollDepths.length > 0
          ? data.scrollDepths.reduce((a, b) => a + b, 0) / data.scrollDepths.length
          : 0,
        trend: data.recentSessions > data.olderSessions * 1.2 ? "up" as const
             : data.recentSessions < data.olderSessions * 0.8 ? "down" as const
             : "stable" as const,
      }))
      .filter(k => k.sessions > 0);
  }, [sessions, conversions, keywordData, timeRange]);

  // Filter and sort
  const filteredKeywords = useMemo(() => {
    let filtered = derivedKeywords.filter(k => 
      k.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "sessions": return b.sessions - a.sessions;
        case "conversions": return b.conversions - a.conversions;
        case "revenue": return b.revenue - a.revenue;
        case "conversionRate": return b.conversionRate - a.conversionRate;
        default: return 0;
      }
    });
  }, [derivedKeywords, searchTerm, sortBy]);

  // Stats
  const stats = useMemo(() => {
    const total = derivedKeywords.reduce((acc, k) => ({
      sessions: acc.sessions + k.sessions,
      conversions: acc.conversions + k.conversions,
      revenue: acc.revenue + k.revenue,
    }), { sessions: 0, conversions: 0, revenue: 0 });

    const topKeyword = derivedKeywords.length > 0 
      ? derivedKeywords.reduce((a, b) => a.sessions > b.sessions ? a : b)
      : null;

    const bestConverter = derivedKeywords.filter(k => k.sessions >= 5).length > 0
      ? derivedKeywords.filter(k => k.sessions >= 5).reduce((a, b) => a.conversionRate > b.conversionRate ? a : b)
      : null;

    return { ...total, topKeyword, bestConverter };
  }, [derivedKeywords]);

  // Chart data
  const topKeywordsChart = useMemo(() => {
    return filteredKeywords.slice(0, 8).map(k => ({
      name: k.keyword.length > 15 ? k.keyword.substring(0, 15) + "..." : k.keyword,
      fullName: k.keyword,
      sessions: k.sessions,
      conversions: k.conversions,
    }));
  }, [filteredKeywords]);

  const sourceDistribution = useMemo(() => {
    const sources: Record<string, number> = {};
    derivedKeywords.forEach(k => {
      sources[k.source] = (sources[k.source] || 0) + k.sessions;
    });
    return Object.entries(sources).map(([name, value], i) => ({
      name,
      value,
      color: COLORS[i % COLORS.length],
    }));
  }, [derivedKeywords]);

  const formatDuration = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <span className="text-muted-foreground">—</span>;
    }
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case "google": return <Badge variant="outline" className="bg-blue-50 text-blue-700"><Globe className="mr-1 h-3 w-3" />Google</Badge>;
      case "blog": return <Badge variant="outline" className="bg-green-50 text-green-700"><FileText className="mr-1 h-3 w-3" />Blog</Badge>;
      default: return <Badge variant="secondary">{source}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Keyword Performance</h2>
          <p className="text-muted-foreground">
            Welche Suchbegriffe bringen Traffic und Conversions
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg border">
            {(["7d", "30d", "all"] as const).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="rounded-none first:rounded-l-lg last:rounded-r-lg"
              >
                {range === "7d" ? "7 Tage" : range === "30d" ? "30 Tage" : "Alle"}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={fetchData} disabled={isLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Aktualisieren
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Keywords</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{derivedKeywords.length}</div>
            <p className="text-xs text-muted-foreground">
              Eindeutige Keywords
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Gesamt-Sessions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sessions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Via Keywords
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-500/50 bg-green-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.conversions}</div>
            <p className="text-xs text-muted-foreground">
              Keyword-basiert
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Umsatz</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue.toFixed(0)}€</div>
            <p className="text-xs text-muted-foreground">
              Via Keywords
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Keywords nach Sessions</CardTitle>
            <CardDescription>Die meistgesuchten Begriffe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topKeywordsChart} layout="vertical">
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value, name) => [value, name === "sessions" ? "Sessions" : "Conversions"]}
                    labelFormatter={(label, payload) => payload?.[0]?.payload?.fullName || label}
                  />
                  <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Keyword-Quellen</CardTitle>
            <CardDescription>Woher kommen die Keywords</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={false}
                  >
                    {sourceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keyword Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Keyword-Übersicht</CardTitle>
              <CardDescription>Alle erfassten Keywords mit Performance-Daten</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Keywords suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border px-3">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-transparent text-sm outline-none"
                >
                  <option value="sessions">Sessions</option>
                  <option value="conversions">Conversions</option>
                  <option value="revenue">Umsatz</option>
                  <option value="conversionRate">Conv. Rate</option>
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filteredKeywords.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              Keine Keywords gefunden. Sammle mehr Daten durch Blog-Traffic.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Quelle</TableHead>
                    <TableHead className="text-right">Sessions</TableHead>
                    <TableHead className="text-right">Conv.</TableHead>
                    <TableHead className="text-right">Conv. Rate</TableHead>
                    <TableHead className="text-right">Ø Dauer</TableHead>
                    <TableHead className="text-right">Umsatz</TableHead>
                    <TableHead className="text-center">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredKeywords.slice(0, 25).map((kw, i) => (
                    <TableRow key={kw.keyword + i}>
                      <TableCell className="font-medium max-w-xs truncate">
                        {kw.keyword}
                      </TableCell>
                      <TableCell>{getSourceBadge(kw.source)}</TableCell>
                      <TableCell className="text-right">{kw.sessions}</TableCell>
                      <TableCell className="text-right">
                        <span className={kw.conversions > 0 ? "text-green-600 font-semibold" : ""}>
                          {kw.conversions}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={kw.conversionRate > 5 ? "text-green-600 font-semibold" : ""}>
                          {kw.conversionRate.toFixed(1)}%
                        </span>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {formatDuration(kw.avgDuration)}
                      </TableCell>
                      <TableCell className="text-right">
                        {kw.revenue > 0 ? `${kw.revenue.toFixed(0)}€` : "-"}
                      </TableCell>
                      <TableCell className="text-center">{getTrendIcon(kw.trend)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Performers */}
      {(stats.topKeyword || stats.bestConverter) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.topKeyword && (
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">🏆 Meiste Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">{stats.topKeyword.keyword}</p>
                <p className="text-sm text-muted-foreground">
                  {stats.topKeyword.sessions} Sessions • {stats.topKeyword.conversions} Conversions
                </p>
              </CardContent>
            </Card>
          )}
          {stats.bestConverter && (
            <Card className="border-green-500/50 bg-green-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">🎯 Beste Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">{stats.bestConverter.keyword}</p>
                <p className="text-sm text-muted-foreground">
                  {stats.bestConverter.conversionRate.toFixed(1)}% Rate • {stats.bestConverter.revenue.toFixed(0)}€ Umsatz
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default KeywordPerformance;
