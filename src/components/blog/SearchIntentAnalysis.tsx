import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Compass, ArrowRight, Eye, ShoppingCart, MapPin, Navigation, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

export interface IntentQuery {
  query: string;
  volume: string;
  intent: "Informational" | "Transaktional" | "Navigational" | "Lokal" | "Kommerziell";
  funnelStage: "Awareness" | "Consideration" | "Decision" | "Action";
  contentType: string;
  conversionTip?: string;
}

export interface IntentCluster {
  intent: "Informational" | "Transaktional" | "Navigational" | "Lokal" | "Kommerziell";
  percentage: number;
  description: string;
  queries: IntentQuery[];
}

export interface SearchIntentConfig {
  industry: string;
  clusters: IntentCluster[];
  insight?: string;
}

interface Props {
  config: SearchIntentConfig;
  className?: string;
}

const intentMeta: Record<string, { icon: React.ReactNode; color: string; barColor: string }> = {
  Informational: {
    icon: <Eye className="h-4 w-4" />,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    barColor: "bg-blue-500",
  },
  Transaktional: {
    icon: <ShoppingCart className="h-4 w-4" />,
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    barColor: "bg-emerald-500",
  },
  Navigational: {
    icon: <Navigation className="h-4 w-4" />,
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    barColor: "bg-violet-500",
  },
  Lokal: {
    icon: <MapPin className="h-4 w-4" />,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    barColor: "bg-amber-500",
  },
  Kommerziell: {
    icon: <ShoppingCart className="h-4 w-4" />,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    barColor: "bg-orange-500",
  },
};

const funnelColor: Record<string, string> = {
  Awareness: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Consideration: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Decision: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Action: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const SearchIntentAnalysis = ({ config, className }: Props) => {
  const [expandedIntent, setExpandedIntent] = useState<number>(0);

  const sorted = [...config.clusters].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className={cn("not-prose my-12", className)} data-ai-summary="true">
      <div className="flex items-center gap-3 mb-2">
        <Compass className="h-6 w-6 text-primary flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Suchintention-Analyse: {config.industry}
        </h2>
      </div>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Verstehe, was Nutzer wirklich suchen - und welchen Content du fuer jede Suchintention brauchst.
      </p>

      {/* Intent distribution bar */}
      <Card className="p-4 mb-6 border-border/60">
        <p className="text-sm font-medium text-foreground mb-3">Verteilung der Suchintentionen</p>
        <div className="flex h-6 rounded-full overflow-hidden mb-3">
          {sorted.map((cluster, i) => (
            <div
              key={i}
              className={cn("transition-all", intentMeta[cluster.intent]?.barColor)}
              style={{ width: `${cluster.percentage}%` }}
              title={`${cluster.intent}: ${cluster.percentage}%`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {sorted.map((cluster, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm">
              <div className={cn("w-3 h-3 rounded-sm", intentMeta[cluster.intent]?.barColor)} />
              <span className="text-muted-foreground">
                {cluster.intent}: <strong className="text-foreground">{cluster.percentage}%</strong>
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Intent clusters */}
      <div className="space-y-3">
        {sorted.map((cluster, ci) => {
          const meta = intentMeta[cluster.intent];
          const isExpanded = expandedIntent === ci;
          return (
            <Card key={ci} className="border-border/60 overflow-hidden">
              <button
                onClick={() => setExpandedIntent(isExpanded ? -1 : ci)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={cn("p-1.5 rounded-md", meta?.color)}>
                    {meta?.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{cluster.intent}</span>
                      <Badge variant="secondary" className="text-xs">{cluster.percentage}%</Badge>
                      <Badge variant="secondary" className="text-xs">{cluster.queries.length} Queries</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{cluster.description}</p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </button>

              {isExpanded && (
                <>
                  {/* Desktop */}
                  <div className="hidden lg:block border-t border-border/40">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/30 border-b border-border/40">
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Suchanfrage</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Volumen</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Funnel-Phase</th>
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Empfohlener Content</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cluster.queries.map((q, qi) => (
                          <tr key={qi} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                            <td className="px-4 py-2.5">
                              <span className="font-medium text-foreground">{q.query}</span>
                              {q.conversionTip && (
                                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                                  <Lightbulb className="h-3 w-3 text-amber-500" /> {q.conversionTip}
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-2.5 text-center text-muted-foreground">{q.volume}</td>
                            <td className="px-4 py-2.5 text-center">
                              <Badge className={cn("text-xs", funnelColor[q.funnelStage])}>{q.funnelStage}</Badge>
                            </td>
                            <td className="px-4 py-2.5 text-muted-foreground flex items-center gap-1">
                              <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                              {q.contentType}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile */}
                  <div className="lg:hidden border-t border-border/40 p-3 space-y-2">
                    {cluster.queries.map((q, qi) => (
                      <div key={qi} className="p-3 rounded-lg border border-border/40">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="font-medium text-foreground text-sm">{q.query}</span>
                          <Badge className={cn("text-[10px] shrink-0", funnelColor[q.funnelStage])}>{q.funnelStage}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          <div><span className="text-muted-foreground">Vol:</span> <span className="text-foreground">{q.volume}</span></div>
                          <div className="flex items-center gap-1">
                            <ArrowRight className="h-3 w-3 text-primary" />
                            <span className="text-foreground">{q.contentType}</span>
                          </div>
                        </div>
                        {q.conversionTip && (
                          <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                            <Lightbulb className="h-3 w-3 text-amber-500" /> {q.conversionTip}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Card>
          );
        })}
      </div>

      {/* Insight */}
      {config.insight && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/40">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Strategie-Tipp:</strong> {config.insight}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchIntentAnalysis;
