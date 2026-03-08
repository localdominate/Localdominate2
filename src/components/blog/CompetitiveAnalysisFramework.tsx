import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Target, TrendingUp, TrendingDown, Minus, Shield, Zap, AlertTriangle, Eye } from "lucide-react";

/* ── Types ── */
export interface CompetitorProfile {
  name: string;
  isYou?: boolean;
  reviews: number;
  rating: number;
  citations: number;
  gbpComplete: number; // percentage
  backlinks: number;
  responseRate: number; // percentage
  photos: number;
  postsPerMonth: number;
}

export interface SwotItem {
  text: string;
}

export interface SwotData {
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
}

export interface CompetitiveFrameworkData {
  competitors: CompetitorProfile[];
  swot?: SwotData;
  /** Optional text insight shown below the scoring matrix */
  insight?: string;
}

/* ── Helpers ── */
const getTrend = (yours: number, avg: number) => {
  const ratio = yours / (avg || 1);
  if (ratio >= 1.2) return { icon: TrendingUp, color: "text-emerald-600 dark:text-emerald-400", label: "Vorteil" };
  if (ratio <= 0.8) return { icon: TrendingDown, color: "text-red-500 dark:text-red-400", label: "Lücke" };
  return { icon: Minus, color: "text-amber-500 dark:text-amber-400", label: "Gleich" };
};

const metricMeta: { key: keyof CompetitorProfile; label: string; suffix?: string; higher: boolean }[] = [
  { key: "reviews", label: "Bewertungen", higher: true },
  { key: "rating", label: "Rating", suffix: "★", higher: true },
  { key: "citations", label: "Citations", higher: true },
  { key: "gbpComplete", label: "GBP-Vollständigkeit", suffix: "%", higher: true },
  { key: "backlinks", label: "Backlinks", higher: true },
  { key: "responseRate", label: "Antwort-Rate", suffix: "%", higher: true },
  { key: "photos", label: "GBP-Fotos", higher: true },
  { key: "postsPerMonth", label: "Posts/Monat", higher: true },
];

/* ── Component ── */
interface CompetitiveAnalysisFrameworkProps {
  data: CompetitiveFrameworkData;
  className?: string;
}

const CompetitiveAnalysisFramework = ({ data, className }: CompetitiveAnalysisFrameworkProps) => {
  const you = data.competitors.find((c) => c.isYou);
  const rivals = data.competitors.filter((c) => !c.isYou);

  // Compute averages of rivals
  const rivalAvg = (key: keyof CompetitorProfile) => {
    const vals = rivals.map((r) => Number(r[key]) || 0);
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  };

  return (
    <div className={cn("not-prose my-12 space-y-8", className)} data-ai-summary="true">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Target className="h-6 w-6 text-primary flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Wettbewerbs-Analyse Framework
        </h2>
      </div>
      <p className="text-muted-foreground max-w-3xl -mt-4">
        Vergleiche dein Unternehmen mit den Top-Konkurrenten im Local Pack anhand der 8 wichtigsten Ranking-Signale. Identifiziere Lücken und priorisiere Maßnahmen.
      </p>

      {/* ── Scoring Matrix ── */}
      <Card className="border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Metrik</th>
                {data.competitors.map((c, i) => (
                  <th key={i} className={cn("px-4 py-3 text-center font-semibold", c.isYou ? "text-primary" : "text-foreground")}>
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="truncate max-w-[100px]">{c.name}</span>
                      {c.isYou && <Badge variant="default" className="text-[10px] px-1.5 py-0">Du</Badge>}
                    </div>
                  </th>
                ))}
                {you && (
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Gap-Analyse</th>
                )}
              </tr>
            </thead>
            <tbody>
              {metricMeta.map((m) => {
                const avg = rivalAvg(m.key);
                const yourVal = you ? Number(you[m.key]) || 0 : 0;
                const trend = you ? getTrend(m.higher ? yourVal : avg, m.higher ? avg : yourVal) : null;

                return (
                  <tr key={m.key} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">{m.label}</td>
                    {data.competitors.map((c, i) => {
                      const val = Number(c[m.key]) || 0;
                      const formatted = m.suffix === "★" ? val.toFixed(1) : m.suffix === "%" ? `${val}%` : String(val);
                      const isMax = val === Math.max(...data.competitors.map((cc) => Number(cc[m.key]) || 0));
                      return (
                        <td key={i} className={cn("px-4 py-2.5 text-center tabular-nums", c.isYou ? "bg-primary/5" : "")}>
                          <span className={cn(isMax && "font-bold text-primary")}>{formatted}</span>
                        </td>
                      );
                    })}
                    {you && trend && (
                      <td className="px-4 py-2.5 text-center">
                        <div className={cn("inline-flex items-center gap-1 text-xs font-medium", trend.color)}>
                          <trend.icon className="h-3.5 w-3.5" />
                          {trend.label}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ── SWOT Analysis ── */}
      {data.swot && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            SWOT-Analyse: Deine Wettbewerbsposition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strengths */}
            <Card className="p-4 border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">Stärken</h4>
              </div>
              <ul className="space-y-1.5">
                {data.swot.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-emerald-700 dark:text-emerald-300 flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    {s.text}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Weaknesses */}
            <Card className="p-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-800 dark:text-red-300">Schwächen</h4>
              </div>
              <ul className="space-y-1.5">
                {data.swot.weaknesses.map((w, i) => (
                  <li key={i} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    {w.text}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Opportunities */}
            <Card className="p-4 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-800 dark:text-blue-300">Chancen</h4>
              </div>
              <ul className="space-y-1.5">
                {data.swot.opportunities.map((o, i) => (
                  <li key={i} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    {o.text}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Threats */}
            <Card className="p-4 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-800 dark:text-amber-300">Risiken</h4>
              </div>
              <ul className="space-y-1.5">
                {data.swot.threats.map((t, i) => (
                  <li key={i} className="text-sm text-amber-700 dark:text-amber-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    {t.text}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      )}

      {/* ── Insight ── */}
      {data.insight && (
        <div className="p-4 bg-muted/50 rounded-lg border border-border/40">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">💡 Strategische Empfehlung:</strong> {data.insight}
          </p>
        </div>
      )}
    </div>
  );
};

export default CompetitiveAnalysisFramework;
