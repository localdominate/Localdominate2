import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, BarChart3, Target, Users, Star, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export interface IndustryComparisonRow {
  industry: string;
  slug: string;
  topChannel: string;
  reviewWeight: "Niedrig" | "Mittel" | "Hoch" | "Sehr hoch";
  competition: "Niedrig" | "Mittel" | "Hoch" | "Sehr hoch";
  topFactor: string;
  conversionGoal: string;
  avgTimeToResult: string;
}

export interface IndustryComparisonData {
  /** The current industry being viewed */
  currentIndustry: string;
  /** Comparison rows (current + related industries) */
  rows: IndustryComparisonRow[];
  /** Optional insight text */
  insight?: string;
}

interface IndustryComparisonTableProps {
  data: IndustryComparisonData;
  className?: string;
}

const weightColor: Record<string, string> = {
  "Niedrig": "bg-muted text-muted-foreground",
  "Mittel": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Hoch": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Sehr hoch": "bg-primary/10 text-primary",
};

const IndustryComparisonTable = ({ data, className }: IndustryComparisonTableProps) => {
  return (
    <div className={cn("not-prose my-12", className)} data-ai-summary="true">
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="h-6 w-6 text-primary flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Branchenvergleich: Local SEO Strategien im Überblick
        </h2>
      </div>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        So unterscheidet sich Local SEO für {data.currentIndustry} im Vergleich zu anderen Branchen – finde heraus, wo dein Fokus liegen sollte.
      </p>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto">
        <Card className="border-border/60 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Branche</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Globe className="h-3.5 w-3.5" />Top-Kanal</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" />Bewertungen</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />Wettbewerb</span>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Target className="h-3.5 w-3.5" />Wichtigster Faktor</span>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Conversion-Ziel</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Smartphone className="h-3.5 w-3.5" />Ergebnis in</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => {
                const isCurrent = row.industry === data.currentIndustry;
                return (
                  <tr
                    key={i}
                    className={cn(
                      "border-b border-border/40 transition-colors",
                      isCurrent
                        ? "bg-primary/5 font-medium"
                        : "hover:bg-muted/30"
                    )}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {isCurrent ? (
                          <span className="font-bold text-primary">{row.industry}</span>
                        ) : (
                          <Link
                            to={`/blog/${row.slug}`}
                            className="text-foreground hover:text-primary transition-colors underline-offset-2 hover:underline"
                          >
                            {row.industry}
                          </Link>
                        )}
                        {isCurrent && (
                          <Badge variant="default" className="text-[10px] px-1.5 py-0">
                            Deine Branche
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.topChannel}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={cn("text-xs", weightColor[row.reviewWeight])}>
                        {row.reviewWeight}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={cn("text-xs", weightColor[row.competition])}>
                        {row.competition}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.topFactor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.conversionGoal}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.avgTimeToResult}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden space-y-3">
        {data.rows.map((row, i) => {
          const isCurrent = row.industry === data.currentIndustry;
          return (
            <Card
              key={i}
              className={cn(
                "p-4 border-border/60",
                isCurrent && "border-primary/40 bg-primary/5"
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                {isCurrent ? (
                  <span className="font-bold text-primary text-base">{row.industry}</span>
                ) : (
                  <Link
                    to={`/blog/${row.slug}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors text-base"
                  >
                    {row.industry}
                  </Link>
                )}
                {isCurrent && (
                  <Badge variant="default" className="text-[10px] px-1.5 py-0">Deine Branche</Badge>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Top-Kanal</p>
                  <p className="text-foreground">{row.topChannel}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Bewertungs-Gewicht</p>
                  <Badge className={cn("text-xs mt-0.5", weightColor[row.reviewWeight])}>{row.reviewWeight}</Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Wettbewerb</p>
                  <Badge className={cn("text-xs mt-0.5", weightColor[row.competition])}>{row.competition}</Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Ergebnis in</p>
                  <p className="text-foreground">{row.avgTimeToResult}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-muted-foreground">Wichtigster Faktor</p>
                  <p className="text-foreground">{row.topFactor}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-muted-foreground">Conversion-Ziel</p>
                  <p className="text-foreground">{row.conversionGoal}</p>
                </div>
              </div>
              {!isCurrent && (
                <Link
                  to={`/blog/${row.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                >
                  Guide lesen <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </Card>
          );
        })}
      </div>

      {/* Insight */}
      {data.insight && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/40">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">💡 Insight:</strong> {data.insight}
          </p>
        </div>
      )}
    </div>
  );
};

export default IndustryComparisonTable;
