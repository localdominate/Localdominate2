import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  MousePointer, 
  Move, 
  Clock, 
  Gauge, 
  RefreshCw,
  Trash2,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { getCoreWebVitalsHistory, clearCoreWebVitalsHistory } from "@/hooks/useCoreWebVitals";

interface VitalEntry {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  timestamp: string;
  page: string;
}

interface VitalSummary {
  name: string;
  label: string;
  description: string;
  unit: string;
  icon: React.ElementType;
  thresholds: { good: number; poor: number };
  values: number[];
  average: number;
  rating: "good" | "needs-improvement" | "poor";
  trend: "up" | "down" | "stable";
}

const CoreWebVitalsPanel = () => {
  const [vitals, setVitals] = useState<VitalEntry[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setVitals(getCoreWebVitalsHistory());
  }, [refreshKey]);

  const summaries = useMemo((): VitalSummary[] => {
    const vitalConfigs = [
      {
        name: "LCP",
        label: "Largest Contentful Paint",
        description: "Zeit bis der Hauptinhalt sichtbar ist",
        unit: "ms",
        icon: Zap,
        thresholds: { good: 2500, poor: 4000 },
      },
      {
        name: "FID",
        label: "First Input Delay",
        description: "Zeit bis zur ersten Interaktion",
        unit: "ms",
        icon: MousePointer,
        thresholds: { good: 100, poor: 300 },
      },
      {
        name: "CLS",
        label: "Cumulative Layout Shift",
        description: "Visuelle Stabilität der Seite",
        unit: "",
        icon: Move,
        thresholds: { good: 0.1, poor: 0.25 },
      },
      {
        name: "FCP",
        label: "First Contentful Paint",
        description: "Zeit bis erster Inhalt angezeigt wird",
        unit: "ms",
        icon: Clock,
        thresholds: { good: 1800, poor: 3000 },
      },
      {
        name: "TTFB",
        label: "Time to First Byte",
        description: "Server-Antwortzeit",
        unit: "ms",
        icon: Gauge,
        thresholds: { good: 800, poor: 1800 },
      },
    ];

    return vitalConfigs.map((config) => {
      const values = vitals
        .filter((v) => v.name === config.name)
        .map((v) => v.value);
      
      const average = values.length > 0
        ? values.reduce((a, b) => a + b, 0) / values.length
        : 0;
      
      let rating: VitalSummary["rating"];
      if (average <= config.thresholds.good) rating = "good";
      else if (average <= config.thresholds.poor) rating = "needs-improvement";
      else rating = "poor";
      
      // Calculate trend (compare last 5 to previous 5)
      let trend: VitalSummary["trend"] = "stable";
      if (values.length >= 10) {
        const recent = values.slice(-5).reduce((a, b) => a + b, 0) / 5;
        const previous = values.slice(-10, -5).reduce((a, b) => a + b, 0) / 5;
        if (recent < previous * 0.9) trend = "down"; // Improvement
        else if (recent > previous * 1.1) trend = "up"; // Degradation
      }
      
      return {
        ...config,
        values,
        average,
        rating,
        trend,
      };
    });
  }, [vitals]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "good": return "text-green-600";
      case "needs-improvement": return "text-yellow-600";
      case "poor": return "text-red-600";
      default: return "text-muted-foreground";
    }
  };

  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case "good": return "default";
      case "needs-improvement": return "secondary";
      case "poor": return "destructive";
      default: return "outline";
    }
  };

  const getRatingLabel = (rating: string) => {
    switch (rating) {
      case "good": return "Gut";
      case "needs-improvement": return "Verbesserbar";
      case "poor": return "Schlecht";
      default: return "N/A";
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === "") return value.toFixed(3);
    return `${Math.round(value)}${unit}`;
  };

  const getProgressValue = (average: number, thresholds: { good: number; poor: number }) => {
    // Map value to 0-100 scale where 100 is best
    const { good, poor } = thresholds;
    if (average <= good) return 100;
    if (average >= poor) return 0;
    return ((poor - average) / (poor - good)) * 100;
  };

  const handleClear = () => {
    if (confirm("Alle Core Web Vitals Daten löschen?")) {
      clearCoreWebVitalsHistory();
      setRefreshKey((k) => k + 1);
    }
  };

  const overallScore = useMemo(() => {
    const scoredVitals = summaries.filter((s) => s.values.length > 0);
    if (scoredVitals.length === 0) return null;
    
    const scores = scoredVitals.map((s) => {
      if (s.rating === "good") return 100;
      if (s.rating === "needs-improvement") return 50;
      return 0;
    });
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [summaries]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Core Web Vitals
          </h3>
          <p className="text-sm text-muted-foreground">
            {vitals.length} Messungen erfasst
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setRefreshKey((k) => k + 1)}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Aktualisieren
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={handleClear}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Löschen
          </Button>
        </div>
      </div>

      {/* Overall Score */}
      {overallScore !== null && (
        <Card className="border-2 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Performance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className={`text-4xl font-bold ${
                overallScore >= 80 ? "text-green-600" :
                overallScore >= 50 ? "text-yellow-600" : "text-red-600"
              }`}>
                {overallScore}
              </div>
              <div className="flex-1">
                <Progress value={overallScore} className="h-3" />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>Schlecht</span>
                  <span>Verbesserbar</span>
                  <span>Gut</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Vitals Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaries.map((vital) => {
          const Icon = vital.icon;
          return (
            <Card key={vital.name} className={
              vital.rating === "good" ? "border-green-200" :
              vital.rating === "needs-improvement" ? "border-yellow-200" :
              vital.rating === "poor" ? "border-red-200" : ""
            }>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {vital.name}
                  </CardTitle>
                  {vital.values.length > 0 && (
                    <div className="flex items-center gap-1">
                      {vital.trend === "down" && (
                        <TrendingDown className="h-4 w-4 text-green-600" />
                      )}
                      {vital.trend === "up" && (
                        <TrendingUp className="h-4 w-4 text-red-600" />
                      )}
                      <Badge variant={getRatingBadge(vital.rating)}>
                        {getRatingLabel(vital.rating)}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardDescription className="text-xs">
                  {vital.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {vital.values.length > 0 ? (
                  <>
                    <div className={`text-2xl font-bold ${getRatingColor(vital.rating)}`}>
                      {formatValue(vital.average, vital.unit)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {vital.description}
                    </p>
                    <div className="mt-2">
                      <Progress 
                        value={getProgressValue(vital.average, vital.thresholds)} 
                        className="h-1.5"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Gut: ≤{vital.thresholds.good}{vital.unit} | 
                      Schlecht: &gt;{vital.thresholds.poor}{vital.unit}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Noch keine Daten
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Measurements */}
      {vitals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Letzte Messungen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {vitals.slice(-10).reverse().map((vital, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-1 px-2 rounded hover:bg-muted/50 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs">
                      {vital.name}
                    </Badge>
                    <span className="text-muted-foreground truncate max-w-32">
                      {vital.page}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={getRatingColor(vital.rating)}>
                      {vital.name === "CLS" 
                        ? vital.value.toFixed(3) 
                        : `${Math.round(vital.value)}ms`}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(vital.timestamp).toLocaleTimeString("de-DE")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {vitals.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Gauge className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              Noch keine Core Web Vitals gemessen.<br />
              Navigiere auf der Website um Daten zu sammeln.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoreWebVitalsPanel;
