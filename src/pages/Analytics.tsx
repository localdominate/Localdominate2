import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  MousePointerClick, 
  Clock, 
  Users, 
  TrendingDown,
  Smartphone,
  Tablet,
  Monitor,
  ArrowLeft,
  Trash2,
  Download,
  RefreshCw,
  Eye,
  Map
} from "lucide-react";
import { 
  calculateMetrics, 
  getHeatmapData, 
  getSessions, 
  getEvents,
  clearAllAnalytics 
} from "@/lib/analyticsStorage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const Analytics = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const metrics = useMemo(() => calculateMetrics(), [refreshKey]);
  const heatmapData = useMemo(() => getHeatmapData(), [refreshKey]);
  const sessions = useMemo(() => getSessions(), [refreshKey]);
  const events = useMemo(() => getEvents(), [refreshKey]);

  const formatDuration = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleClearData = () => {
    if (confirm("Alle Analytics-Daten löschen? Dies kann nicht rückgängig gemacht werden.")) {
      clearAllAnalytics();
      setRefreshKey(k => k + 1);
    }
  };

  const handleExport = () => {
    const exportData = {
      metrics,
      sessions,
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

  // Sessions over time (last 7 days)
  const sessionsOverTime = useMemo(() => {
    const now = Date.now();
    const days: Record<string, number> = {};
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      const key = date.toLocaleDateString("de-DE", { weekday: "short" });
      days[key] = 0;
    }
    
    sessions.forEach(s => {
      const date = new Date(s.startTime);
      const key = date.toLocaleDateString("de-DE", { weekday: "short" });
      if (days[key] !== undefined) {
        days[key]++;
      }
    });
    
    return Object.entries(days).map(([name, sessions]) => ({ name, sessions }));
  }, [sessions]);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="mb-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Website
          </Link>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Verstehe, wie Nutzer mit deiner Website interagieren</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setRefreshKey(k => k + 1)}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Aktualisieren
          </Button>
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
        </div>
      </div>

      {/* KPI Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalSessions}</div>
            <p className="text-xs text-muted-foreground">Gesamt erfasste Sitzungen</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ø Verweildauer</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatDuration(metrics.avgSessionDuration)}</div>
            <p className="text-xs text-muted-foreground">Durchschnittliche Sitzungsdauer</p>
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
            <p className="text-xs text-muted-foreground">Absprungrate (1-Page Sessions)</p>
          </CardContent>
        </Card>
      </div>

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
      </div>

      {/* Data Tables Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Top Clicked Elements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointerClick className="h-5 w-5" />
              Top geklickte Elemente
            </CardTitle>
            <CardDescription>Welche Elemente bekommen die meisten Klicks?</CardDescription>
          </CardHeader>
          <CardContent>
            {clickData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
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
              <div className="flex h-[250px] items-center justify-center text-muted-foreground">
                Noch keine Klicks erfasst
              </div>
            )}
          </CardContent>
        </Card>

        {/* Exit Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Ausstiegsseiten
            </CardTitle>
            <CardDescription>Wo verlassen Nutzer die Website?</CardDescription>
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
              <div className="flex h-[250px] items-center justify-center text-muted-foreground">
                Noch keine Exit-Daten
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Scroll Depth & Events */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Scroll-Tiefe
            </CardTitle>
            <CardDescription>Wie weit scrollen Nutzer im Durchschnitt?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-center">
              <div className="text-4xl font-bold text-primary">{metrics.avgScrollDepth.toFixed(0)}%</div>
              <p className="text-sm text-muted-foreground">durchschnittliche Scroll-Tiefe</p>
            </div>
            <div className="space-y-2">
              {[25, 50, 75, 100].map(depth => {
                const reached = sessions.filter(s => 
                  s.scrollDepths.some(d => d >= depth)
                ).length;
                const percentage = (reached / (metrics.totalSessions || 1)) * 100;
                return (
                  <div key={depth} className="flex items-center gap-3">
                    <span className="w-12 text-sm text-muted-foreground">{depth}%</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div 
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-sm font-medium">{percentage.toFixed(0)}%</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Events nach Typ
            </CardTitle>
            <CardDescription>Welche Events werden ausgelöst?</CardDescription>
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
    </div>
  );
};

export default Analytics;
