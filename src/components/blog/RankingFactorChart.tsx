import { useLanguage } from "@/i18n/LanguageContext";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RankingFactor {
  label: string;
  weight: number;
  trend?: "up" | "down" | "stable";
  color?: string;
}

interface RankingFactorChartProps {
  title: string;
  factors: RankingFactor[];
  caption?: string;
}

/**
 * Horizontal bar chart for ranking factor weights.
 * Accessible, responsive, no external chart library needed.
 */
const RankingFactorChart = ({ title, factors, caption }: RankingFactorChartProps) => {
  const isEn = useLanguage().language === "en";
  const maxWeight = Math.max(...factors.map(f => f.weight));

  return (
    <figure className="not-prose my-8" role="img" aria-label={title}>
      <Card className="p-5 md:p-6 border-border/60">
        <h4 className="font-bold text-foreground text-base mb-5">{title}</h4>
        <div className="space-y-3" role="list" aria-label="Ranking-Faktoren Gewichtung">
          {factors.map((factor, i) => {
            const widthPercent = (factor.weight / maxWeight) * 100;
            const trendIcon = factor.trend === "up" ? "↑" : factor.trend === "down" ? "↓" : "→";
            const trendColor = factor.trend === "up"
              ? "text-emerald-600 dark:text-emerald-400"
              : factor.trend === "down"
                ? "text-red-500 dark:text-red-400"
                : "text-muted-foreground";

            return (
              <div key={i} role="listitem" aria-label={`${factor.label}: ${factor.weight}%`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground truncate mr-2">{factor.label}</span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className={cn("text-xs font-medium", trendColor)}>{trendIcon}</span>
                    <span className="text-sm font-bold text-primary tabular-nums">{factor.weight}%</span>
                  </div>
                </div>
                <div className="h-3 bg-muted/60 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-700"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground/70 mt-4">
          {isEn
            ? "Source: Whitespark/Moz Local Search Ranking Factors, own analysis 2025/2026"
            : "Quelle: Whitespark/Moz Local Search Ranking Factors, eigene Analyse 2025/2026"}
        </p>
      </Card>
      {caption && (
        <figcaption className="text-center text-xs text-muted-foreground mt-2 italic">{caption}</figcaption>
      )}
    </figure>
  );
};

export default RankingFactorChart;
