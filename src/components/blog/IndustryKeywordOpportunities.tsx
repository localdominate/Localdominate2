import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, TrendingUp, TrendingDown, Minus, Copy, Check, ChevronDown, ChevronUp, Zap, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface KeywordOpportunity {
  keyword: string;
  searchVolume: string;
  difficulty: "Niedrig" | "Mittel" | "Hoch" | "Sehr hoch";
  cpc: string;
  trend: "steigend" | "stabil" | "fallend";
  intent: "Transaktional" | "Informational" | "Navigational" | "Lokal";
  opportunity: "Sehr gut" | "Gut" | "Mittel" | "Gering";
  tip?: string;
}

export interface KeywordCluster {
  name: string;
  icon: string;
  keywords: KeywordOpportunity[];
}

export interface IndustryKeywordConfig {
  industry: string;
  clusters: KeywordCluster[];
  quickWin?: string;
}

interface Props {
  config: IndustryKeywordConfig;
  className?: string;
}

const difficultyColor: Record<string, string> = {
  "Niedrig": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Mittel": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Hoch": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "Sehr hoch": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

const opportunityColor: Record<string, string> = {
  "Sehr gut": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Gut": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Mittel": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Gering": "bg-muted text-muted-foreground",
};

const intentColor: Record<string, string> = {
  "Transaktional": "bg-primary/10 text-primary",
  "Informational": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  "Navigational": "bg-cyan-100 text-cyan-800 dark:bg-cyan-100/30 dark:text-cyan-300",
  "Lokal": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "steigend") return <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />;
  if (trend === "fallend") return <TrendingDown className="h-3.5 w-3.5 text-red-500 dark:text-red-400" />;
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />;
};

const IndustryKeywordOpportunities = ({ config, className }: Props) => {
  const [expandedCluster, setExpandedCluster] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const allKeywords = config.clusters.flatMap(c => c.keywords);
  const topOpportunities = allKeywords.filter(k => k.opportunity === "Sehr gut" || k.opportunity === "Gut").length;

  const handleCopyKeywords = () => {
    const text = config.clusters.map(cluster => {
      const rows = cluster.keywords.map(k =>
        `${k.keyword} | Vol: ${k.searchVolume} | Diff: ${k.difficulty} | CPC: ${k.cpc} | ${k.intent}`
      ).join("\n");
      return `## ${cluster.name}\n${rows}`;
    }).join("\n\n");

    const full = `# Keyword-Chancen: ${config.industry}\n\n${text}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    toast.success("Keywords kopiert!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("not-prose my-12", className)}>
      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
        <div className="flex items-center gap-3">
          <Search className="h-6 w-6 text-primary flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Keyword-Chancen für {config.industry}
          </h2>
        </div>
        <Button variant="outline" size="sm" onClick={handleCopyKeywords} className="gap-1.5">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Kopiert" : "Alle kopieren"}
        </Button>
      </div>

      {/* Summary bar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <BarChart3 className="h-4 w-4" />
          <span><strong className="text-foreground">{allKeywords.length}</strong> Keywords analysiert</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Zap className="h-4 w-4 text-emerald-600" />
          <span><strong className="text-foreground">{topOpportunities}</strong> Top-Chancen</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Target className="h-4 w-4 text-primary" />
          <span><strong className="text-foreground">{config.clusters.length}</strong> Keyword-Cluster</span>
        </div>
      </div>

      {/* Clusters */}
      <div className="space-y-3">
        {config.clusters.map((cluster, ci) => {
          const isExpanded = expandedCluster === ci;
          return (
            <Card key={ci} className="border-border/60 overflow-hidden">
              <button
                onClick={() => setExpandedCluster(isExpanded ? -1 : ci)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cluster.icon}</span>
                  <span className="font-semibold text-foreground">{cluster.name}</span>
                  <Badge variant="secondary" className="text-xs">{cluster.keywords.length} Keywords</Badge>
                </div>
                {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </button>

              {isExpanded && (
                <>
                  {/* Desktop table */}
                  <div className="hidden lg:block border-t border-border/40">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/30 border-b border-border/40">
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Keyword</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Suchvolumen</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Schwierigkeit</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">CPC</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Trend</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Intent</th>
                          <th className="px-4 py-2.5 text-center font-medium text-muted-foreground">Chance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cluster.keywords.map((kw, ki) => (
                          <tr key={ki} className={cn(
                            "border-b border-border/20 transition-colors hover:bg-muted/20",
                            kw.opportunity === "Sehr gut" && "bg-emerald-50/50 dark:bg-emerald-950/10"
                          )}>
                            <td className="px-4 py-2.5 font-medium text-foreground">
                              {kw.keyword}
                              {kw.tip && (
                                <p className="text-xs text-muted-foreground font-normal mt-0.5">💡 {kw.tip}</p>
                              )}
                            </td>
                            <td className="px-4 py-2.5 text-center text-muted-foreground">{kw.searchVolume}</td>
                            <td className="px-4 py-2.5 text-center">
                              <Badge className={cn("text-xs", difficultyColor[kw.difficulty])}>{kw.difficulty}</Badge>
                            </td>
                            <td className="px-4 py-2.5 text-center text-muted-foreground">{kw.cpc}</td>
                            <td className="px-4 py-2.5 text-center">
                              <div className="flex items-center justify-center gap-1">
                                <TrendIcon trend={kw.trend} />
                                <span className="text-xs text-muted-foreground">{kw.trend}</span>
                              </div>
                            </td>
                            <td className="px-4 py-2.5 text-center">
                              <Badge className={cn("text-xs", intentColor[kw.intent])}>{kw.intent}</Badge>
                            </td>
                            <td className="px-4 py-2.5 text-center">
                              <Badge className={cn("text-xs", opportunityColor[kw.opportunity])}>{kw.opportunity}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile cards */}
                  <div className="lg:hidden border-t border-border/40 p-3 space-y-2">
                    {cluster.keywords.map((kw, ki) => (
                      <div key={ki} className={cn(
                        "p-3 rounded-lg border border-border/40",
                        kw.opportunity === "Sehr gut" && "border-emerald-300/50 bg-emerald-50/50 dark:bg-emerald-950/10"
                      )}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="font-medium text-foreground text-sm">{kw.keyword}</span>
                          <Badge className={cn("text-[10px] shrink-0", opportunityColor[kw.opportunity])}>{kw.opportunity}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          <div><span className="text-muted-foreground">Vol:</span> <span className="text-foreground">{kw.searchVolume}</span></div>
                          <div><span className="text-muted-foreground">CPC:</span> <span className="text-foreground">{kw.cpc}</span></div>
                          <div className="flex items-center gap-1">
                            <span className="text-muted-foreground">Diff:</span>
                            <Badge className={cn("text-[10px]", difficultyColor[kw.difficulty])}>{kw.difficulty}</Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendIcon trend={kw.trend} />
                            <span className="text-muted-foreground">{kw.trend}</span>
                          </div>
                        </div>
                        {kw.tip && <p className="text-xs text-muted-foreground mt-1.5">💡 {kw.tip}</p>}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Card>
          );
        })}
      </div>

      {/* Quick win */}
      {config.quickWin && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/40">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">🎯 Quick Win:</strong> {config.quickWin}
          </p>
        </div>
      )}
    </div>
  );
};

export default IndustryKeywordOpportunities;
