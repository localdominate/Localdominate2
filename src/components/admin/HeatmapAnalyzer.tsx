import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  MousePointerClick, 
  TrendingUp, 
  Eye, 
  RefreshCw,
  Target,
  Smartphone,
  Monitor,
  Zap
} from "lucide-react";

interface HeatmapPoint {
  id: string;
  x_percent: number;
  y_percent: number;
  element_selector: string | null;
  element_type: string | null;
  element_text: string | null;
  section_name: string | null;
  interaction_type: string;
  hover_duration_ms: number | null;
  page_path: string | null;
  device: string | null;
  ab_variant: string | null;
  is_dead_click: boolean;
  is_rage_click: boolean;
  is_missed_cta: boolean;
  created_at: string;
}

interface HeatmapRecommendation {
  id: string;
  type: "critical" | "warning" | "opportunity";
  title: string;
  description: string;
  affectedArea: string;
  suggestedAction: string;
  estimatedImpact: "high" | "medium" | "low";
  dataPoints: number;
}

const HeatmapAnalyzer = () => {
  const [heatmapData, setHeatmapData] = useState<HeatmapPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "all">("7d");

  useEffect(() => {
    fetchHeatmapData();
  }, [timeRange]);

  const fetchHeatmapData = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from("analytics_heatmap_enhanced")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5000);

      if (timeRange !== "all") {
        const days = timeRange === "7d" ? 7 : 30;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        query = query.gte("created_at", startDate.toISOString());
      }

      const { data, error } = await query;
      if (error) throw error;
      setHeatmapData((data as HeatmapPoint[]) || []);
    } catch (error) {
      console.error("Error fetching heatmap data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Analyze heatmap data and generate recommendations
  const recommendations = useMemo((): HeatmapRecommendation[] => {
    const recs: HeatmapRecommendation[] = [];

    // 1. Rage Clicks Analysis
    const rageClicks = heatmapData.filter(p => p.is_rage_click);
    if (rageClicks.length > 5) {
      const affectedElements = [...new Set(rageClicks.map(r => r.element_selector).filter(Boolean))];
      recs.push({
        id: "rage-clicks",
        type: "critical",
        title: "Rage Clicks erkannt",
        description: `${rageClicks.length} Rage Clicks in den letzten ${timeRange === "7d" ? "7 Tagen" : timeRange === "30d" ? "30 Tagen" : "gesamten Zeitraum"} gefunden. Nutzer klicken mehrfach frustriert auf Elemente.`,
        affectedArea: affectedElements.slice(0, 3).join(", ") || "Verschiedene Bereiche",
        suggestedAction: "Überprüfe, ob die betroffenen Elemente fälschlicherweise klickbar aussehen oder ob es Performance-Probleme gibt.",
        estimatedImpact: "high",
        dataPoints: rageClicks.length,
      });
    }

    // 2. Dead Clicks Analysis
    const deadClicks = heatmapData.filter(p => p.is_dead_click);
    if (deadClicks.length > 10) {
      const affectedElements = [...new Set(deadClicks.map(r => r.element_selector).filter(Boolean))];
      recs.push({
        id: "dead-clicks",
        type: "warning",
        title: "Tote Klicks gefunden",
        description: `${deadClicks.length} Klicks auf nicht-interaktive Elemente. Nutzer erwarten hier eine Aktion.`,
        affectedArea: affectedElements.slice(0, 3).join(", ") || "Verschiedene Bereiche",
        suggestedAction: "Mache diese Elemente klickbar oder ändere das Design, damit sie nicht klickbar wirken.",
        estimatedImpact: "medium",
        dataPoints: deadClicks.length,
      });
    }

    // 3. Missed CTA Analysis
    const missedCtas = heatmapData.filter(p => p.is_missed_cta);
    if (missedCtas.length > 5) {
      recs.push({
        id: "missed-ctas",
        type: "critical",
        title: "Verpasste CTAs",
        description: `${missedCtas.length} Klicks knapp neben dem CTA-Button. Nutzer verfehlen das Klickziel.`,
        affectedArea: "CTA-Buttons",
        suggestedAction: "Vergrößere die CTA-Buttons oder erhöhe den klickbaren Bereich. Mindestens 44x44px für Touch-Geräte.",
        estimatedImpact: "high",
        dataPoints: missedCtas.length,
      });
    }

    // 4. Mobile vs Desktop Engagement
    const mobileClicks = heatmapData.filter(p => p.device === "mobile");
    const desktopClicks = heatmapData.filter(p => p.device === "desktop");
    
    if (mobileClicks.length > 0 && desktopClicks.length > 0) {
      const mobileRageRate = mobileClicks.filter(p => p.is_rage_click).length / mobileClicks.length;
      const desktopRageRate = desktopClicks.filter(p => p.is_rage_click).length / desktopClicks.length;
      
      if (mobileRageRate > desktopRageRate * 1.5) {
        recs.push({
          id: "mobile-issues",
          type: "warning",
          title: "Mobile UX-Probleme",
          description: `Mobile Nutzer haben ${((mobileRageRate / desktopRageRate) * 100).toFixed(0)}% mehr Rage-Clicks als Desktop-Nutzer.`,
          affectedArea: "Mobile Ansicht",
          suggestedAction: "Überprüfe Touch-Targets, Abstände und Ladezeiten auf mobilen Geräten.",
          estimatedImpact: "high",
          dataPoints: mobileClicks.length,
        });
      }
    }

    // 5. Section Engagement Analysis
    const sectionClicks: Record<string, number> = {};
    heatmapData.forEach(p => {
      if (p.section_name) {
        sectionClicks[p.section_name] = (sectionClicks[p.section_name] || 0) + 1;
      }
    });

    const sortedSections = Object.entries(sectionClicks).sort((a, b) => b[1] - a[1]);
    if (sortedSections.length > 0) {
      const topSection = sortedSections[0];
      recs.push({
        id: "hot-section",
        type: "opportunity",
        title: "Höchstes Engagement",
        description: `Die Section "${topSection[0]}" hat die meiste Interaktion (${topSection[1]} Klicks). Hier ist Nutzer-Interesse am höchsten.`,
        affectedArea: topSection[0],
        suggestedAction: "Platziere wichtige CTAs oder Conversion-Elemente in oder nach diesem Bereich.",
        estimatedImpact: "high",
        dataPoints: topSection[1],
      });
    }

    // 6. Low Engagement Zones
    const scrollPositions = heatmapData
      .filter(p => p.interaction_type === "scroll")
      .map(p => p.y_percent);
    
    if (scrollPositions.length > 50) {
      const avgScroll = scrollPositions.reduce((a, b) => a + b, 0) / scrollPositions.length;
      if (avgScroll < 50) {
        recs.push({
          id: "scroll-drop",
          type: "warning",
          title: "Früher Scroll-Abbruch",
          description: `Durchschnittliche Scroll-Tiefe liegt bei nur ${avgScroll.toFixed(0)}%. Inhalte im unteren Bereich werden selten gesehen.`,
          affectedArea: "Untere Seitenhälfte",
          suggestedAction: "Verschiebe wichtige Inhalte nach oben oder verbessere den Content im oberen Bereich, um Nutzer zum Weiterscrollen zu animieren.",
          estimatedImpact: "medium",
          dataPoints: scrollPositions.length,
        });
      }
    }

    // 7. Hover Hotspots (high interest)
    const hoverData = heatmapData.filter(p => p.hover_duration_ms && p.hover_duration_ms > 1000);
    if (hoverData.length > 10) {
      const hotElements = [...new Set(hoverData.map(h => h.element_selector).filter(Boolean))];
      recs.push({
        id: "hover-hotspots",
        type: "opportunity",
        title: "Interesse-Hotspots",
        description: `${hoverData.length} Elemente wurden >1 Sekunde gehovered. Hohes Nutzerinteresse an diesen Stellen.`,
        affectedArea: hotElements.slice(0, 3).join(", ") || "Verschiedene Elemente",
        suggestedAction: "Erwäge, diese Elemente interaktiver zu gestalten oder Conversion-Elemente in der Nähe zu platzieren.",
        estimatedImpact: "medium",
        dataPoints: hoverData.length,
      });
    }

    // 8. A/B Variant Comparison
    const variantA = heatmapData.filter(p => p.ab_variant === "A" || p.ab_variant === "blue");
    const variantB = heatmapData.filter(p => p.ab_variant === "B" || p.ab_variant === "red");
    
    if (variantA.length > 20 && variantB.length > 20) {
      const aEngagement = variantA.filter(p => p.interaction_type === "click").length / variantA.length;
      const bEngagement = variantB.filter(p => p.interaction_type === "click").length / variantB.length;
      
      const diff = Math.abs((aEngagement - bEngagement) / Math.min(aEngagement, bEngagement) * 100);
      if (diff > 15) {
        const winner = aEngagement > bEngagement ? "A/Blue" : "B/Red";
        recs.push({
          id: "ab-comparison",
          type: "opportunity",
          title: `A/B-Test: Variante ${winner} führt`,
          description: `Variante ${winner} zeigt ${diff.toFixed(0)}% höheres Click-Engagement basierend auf Heatmap-Daten.`,
          affectedArea: "Gesamte Seite",
          suggestedAction: `Erwäge, die Gewinnerversion ${winner} als Standard zu verwenden.`,
          estimatedImpact: "high",
          dataPoints: variantA.length + variantB.length,
        });
      }
    }

    return recs.sort((a, b) => {
      const priority = { critical: 0, warning: 1, opportunity: 2 };
      return priority[a.type] - priority[b.type];
    });
  }, [heatmapData, timeRange]);

  // Summary Stats
  const stats = useMemo(() => {
    return {
      totalInteractions: heatmapData.length,
      clicks: heatmapData.filter(p => p.interaction_type === "click").length,
      hovers: heatmapData.filter(p => p.interaction_type === "hover").length,
      scrolls: heatmapData.filter(p => p.interaction_type === "scroll").length,
      rageClicks: heatmapData.filter(p => p.is_rage_click).length,
      deadClicks: heatmapData.filter(p => p.is_dead_click).length,
      missedCtas: heatmapData.filter(p => p.is_missed_cta).length,
      mobileShare: heatmapData.length > 0 
        ? (heatmapData.filter(p => p.device === "mobile").length / heatmapData.length * 100)
        : 0,
    };
  }, [heatmapData]);

  const getTypeIcon = (type: HeatmapRecommendation["type"]) => {
    switch (type) {
      case "critical": return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "warning": return <Eye className="h-5 w-5 text-yellow-500" />;
      case "opportunity": return <TrendingUp className="h-5 w-5 text-green-500" />;
    }
  };

  const getImpactBadge = (impact: HeatmapRecommendation["estimatedImpact"]) => {
    switch (impact) {
      case "high": return <Badge className="bg-destructive text-destructive-foreground">Hoch</Badge>;
      case "medium": return <Badge className="bg-yellow-500 text-white">Mittel</Badge>;
      case "low": return <Badge variant="secondary">Niedrig</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Heatmap Analyse</h2>
          <p className="text-muted-foreground">
            Automatische Empfehlungen basierend auf Nutzerverhalten
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
          <Button variant="outline" size="sm" onClick={fetchHeatmapData} disabled={isLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Aktualisieren
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Interaktionen</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalInteractions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {stats.clicks} Klicks • {stats.hovers} Hovers
            </p>
          </CardContent>
        </Card>

        <Card className={stats.rageClicks > 10 ? "border-destructive" : ""}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rage Clicks</CardTitle>
            <AlertTriangle className={`h-4 w-4 ${stats.rageClicks > 10 ? "text-destructive" : "text-muted-foreground"}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.rageClicks > 10 ? "text-destructive" : ""}`}>
              {stats.rageClicks}
            </div>
            <p className="text-xs text-muted-foreground">
              Frustrierte Mehrfachklicks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Dead Clicks</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.deadClicks}</div>
            <p className="text-xs text-muted-foreground">
              Klicks ohne Reaktion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mobile Anteil</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.mobileShare.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">
              der Interaktionen
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Empfehlungen ({recommendations.length})
          </CardTitle>
          <CardDescription>
            Automatisch generierte Optimierungsvorschläge
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : recommendations.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              Keine Empfehlungen verfügbar. Sammle mehr Daten für aussagekräftige Analysen.
            </div>
          ) : (
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className={`rounded-lg border p-4 ${
                    rec.type === "critical" 
                      ? "border-destructive/50 bg-destructive/5" 
                      : rec.type === "warning"
                      ? "border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20"
                      : "border-green-500/50 bg-green-50/50 dark:bg-green-950/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getTypeIcon(rec.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{rec.title}</h4>
                        {getImpactBadge(rec.estimatedImpact)}
                        <Badge variant="outline" className="ml-auto">
                          {rec.dataPoints} Datenpunkte
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {rec.description}
                      </p>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Bereich: </span>
                        <span className="text-muted-foreground">{rec.affectedArea}</span>
                      </div>
                      <div className="mt-1 rounded-md bg-muted/50 p-2 text-sm">
                        <span className="font-medium">💡 Empfehlung: </span>
                        {rec.suggestedAction}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HeatmapAnalyzer;
