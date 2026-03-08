import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, MapPin, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  change?: string;
}

export interface CaseStudyData {
  title: string;
  industry: string;
  location: string;
  duration: string;
  challenge: string;
  measures: string[];
  metrics: CaseStudyMetric[];
  quote?: { text: string; author: string; role: string };
  result: string;
}

interface CaseStudyCardProps {
  study: CaseStudyData;
  className?: string;
}

const CaseStudyCard = ({ study, className }: CaseStudyCardProps) => {
  return (
    <Card className={cn("not-prose my-8 overflow-hidden border-border/60", className)} data-ai-summary="true">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border/40 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="default" className="text-xs">Praxisbeispiel</Badge>
          <Badge variant="outline" className="text-xs gap-1">
            <MapPin className="h-3 w-3" />{study.location}
          </Badge>
          <Badge variant="outline" className="text-xs gap-1">
            <Clock className="h-3 w-3" />{study.duration}
          </Badge>
        </div>
        <h4 className="font-bold text-foreground text-lg">{study.title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/30">
        {study.metrics.map((metric, i) => (
          <div key={i} className="bg-card p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
              <ArrowUp className="h-3 w-3 text-emerald-500" />
              <span className="font-bold text-foreground">{metric.after}</span>
            </div>
            {metric.change && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{metric.change}</p>
            )}
          </div>
        ))}
      </div>

      {/* Measures */}
      <div className="px-6 py-4 border-t border-border/30">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Maßnahmen</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {study.measures.map((m, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* Quote */}
      {study.quote && (
        <div className="px-6 py-4 bg-muted/30 border-t border-border/30">
          <blockquote className="text-sm italic text-foreground">
            „{study.quote.text}"
          </blockquote>
          <p className="text-xs text-muted-foreground mt-1">
            — {study.quote.author}, {study.quote.role}
          </p>
        </div>
      )}

      {/* Result summary */}
      <div className="px-6 py-3 bg-emerald-50 dark:bg-emerald-950/20 border-t border-emerald-200 dark:border-emerald-800">
        <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
          <strong>Ergebnis:</strong> {study.result}
        </p>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
