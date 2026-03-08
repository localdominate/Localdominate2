import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BarChart3, Star, Globe, Link2, Camera, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import type { IndustryBenchmarkGroupData, IndustryBenchmark } from "@/data/industryBenchmarkData";

interface IndustryBenchmarkTableProps {
  data: IndustryBenchmarkGroupData;
  className?: string;
}

const BarIndicator = ({ value, max, color }: { value: number; max: number; color: string }) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-muted/60 overflow-hidden min-w-[60px]">
        <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-medium text-foreground tabular-nums w-8 text-right">{value}</span>
    </div>
  );
};

const IndustryBenchmarkTable = ({ data, className }: IndustryBenchmarkTableProps) => {
  const maxReviews = Math.max(...data.rows.map((r) => r.topPerformerReviews));
  const maxCitations = Math.max(...data.rows.map((r) => r.topPerformerCitations));
  const maxBacklinks = Math.max(...data.rows.map((r) => r.topPerformerBacklinks));

  return (
    <div className={cn("not-prose my-12", className)} data-ai-summary="true">
      <div className="flex items-center gap-3 mb-2">
        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Branchen-Benchmarks: Bewertungen, Citations & Backlinks
        </h2>
      </div>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Wie viele Bewertungen, Verzeichniseinträge und Backlinks braucht dein Unternehmen, um im Local Pack zu bestehen? Diese Benchmarks zeigen den Durchschnitt und die Top-Performer im DACH-Raum.
      </p>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto">
        <Card className="border-border/60 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Branche</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground" colSpan={2}>
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" />Bewertungen</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1">⭐ Rating</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground" colSpan={2}>
                  <span className="inline-flex items-center gap-1"><Globe className="h-3.5 w-3.5" />Citations</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground" colSpan={2}>
                  <span className="inline-flex items-center gap-1"><Link2 className="h-3.5 w-3.5" />Backlinks</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1"><Camera className="h-3.5 w-3.5" />Fotos</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">DA</th>
              </tr>
              <tr className="bg-muted/30 border-b border-border text-xs text-muted-foreground">
                <th className="px-4 py-1.5" />
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
                <th className="px-4 py-1.5 text-center font-normal">Top</th>
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
                <th className="px-4 py-1.5 text-center font-normal">Top</th>
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
                <th className="px-4 py-1.5 text-center font-normal">Top</th>
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
                <th className="px-4 py-1.5 text-center font-normal">Ø</th>
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
                      isCurrent ? "bg-primary/5 font-medium" : "hover:bg-muted/30"
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
                          <Badge variant="default" className="text-[10px] px-1.5 py-0">Du</Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center tabular-nums">{row.avgReviews}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs font-semibold text-primary tabular-nums">{row.topPerformerReviews}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={cn("text-xs", row.avgRating >= 4.5 ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300" : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300")}>
                        {row.avgRating.toFixed(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center tabular-nums">{row.avgCitations}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs font-semibold text-primary tabular-nums">{row.topPerformerCitations}</span>
                    </td>
                    <td className="px-4 py-3 text-center tabular-nums">{row.avgBacklinks}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs font-semibold text-primary tabular-nums">{row.topPerformerBacklinks}</span>
                    </td>
                    <td className="px-4 py-3 text-center tabular-nums">{row.avgGbpPhotos}</td>
                    <td className="px-4 py-3 text-center tabular-nums">{row.avgDomainAuthority}</td>
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
                  <Badge variant="default" className="text-[10px] px-1.5 py-0">Du</Badge>
                )}
              </div>
              <div className="space-y-2.5">
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> Bewertungen (Ø {row.avgReviews} / Top {row.topPerformerReviews})
                  </p>
                  <BarIndicator value={row.avgReviews} max={maxReviews} color="bg-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Globe className="h-3 w-3" /> Citations (Ø {row.avgCitations} / Top {row.topPerformerCitations})
                  </p>
                  <BarIndicator value={row.avgCitations} max={maxCitations} color="bg-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Link2 className="h-3 w-3" /> Backlinks (Ø {row.avgBacklinks} / Top {row.topPerformerBacklinks})
                  </p>
                  <BarIndicator value={row.avgBacklinks} max={maxBacklinks} color="bg-emerald-500" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-semibold text-foreground">{row.avgRating.toFixed(1)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Fotos</p>
                    <p className="font-semibold text-foreground">{row.avgGbpPhotos}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">DA</p>
                    <p className="font-semibold text-foreground">{row.avgDomainAuthority}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/40">
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">📊 Lesehinweis:</strong> „Ø" = Branchendurchschnitt im DACH-Raum für Local-Pack-Ergebnisse. „Top" = Werte der Top-3-Performer pro Stadt (50.000+ Einwohner). DA = Domain Authority (Moz). Daten basieren auf BrightLocal, Whitespark und eigenen Analysen (Stand: Q1 2026).
        </p>
      </div>
    </div>
  );
};

export default IndustryBenchmarkTable;
