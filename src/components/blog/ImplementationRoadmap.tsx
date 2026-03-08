import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  CheckCircle,
  XCircle,
  Shield,
  Zap,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImplementationStep {
  title: string;
  description: string;
  timeEstimate: string;
  difficulty: "einfach" | "mittel" | "anspruchsvoll";
  tools?: string[];
}

export interface IndustryImplementationData {
  /** Industry display name, e.g. "Handwerker" */
  industry: string;
  /** Total estimated DIY time */
  totalDiyTime: string;
  /** Monthly maintenance time */
  monthlyMaintenance: string;
  /** Expected timeline for first results */
  resultTimeline: string;
  /** DIY implementation steps */
  steps: ImplementationStep[];
  /** Industry-specific pain point for the CTA */
  painPoint: string;
  /** What the professional service delivers specifically for this industry */
  proResult: string;
}

interface ImplementationRoadmapProps {
  data: IndustryImplementationData;
  className?: string;
}

const difficultyConfig: Record<
  ImplementationStep["difficulty"],
  { label: string; color: string }
> = {
  einfach: { label: "Einfach", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300" },
  mittel: { label: "Mittel", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" },
  anspruchsvoll: { label: "Anspruchsvoll", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
};

const ImplementationRoadmap = ({ data, className }: ImplementationRoadmapProps) => {
  return (
    <div className={cn("not-prose my-12", className)} data-ai-summary="true">
      {/* Section header */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        So setzt du Local SEO als {data.industry} um
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Du hast zwei Optionen: Selbst machen oder machen lassen. Hier ist der ehrliche Vergleich.
      </p>

      {/* DIY Roadmap */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-muted">
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">Option 1: Selbst umsetzen (DIY)</h3>
            <p className="text-sm text-muted-foreground">
              Geschätzter Aufwand: {data.totalDiyTime} Ersteinrichtung + {data.monthlyMaintenance} monatlich
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {data.steps.map((step, i) => {
            const diff = difficultyConfig[step.difficulty];
            return (
              <Card key={i} className="p-4 border-border/60">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <Badge variant="outline" className="text-xs gap-1">
                      <Clock className="h-3 w-3" />
                      {step.timeEstimate}
                    </Badge>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", diff.color)}>
                      {diff.label}
                    </span>
                  </div>
                </div>
                {step.tools && step.tools.length > 0 && (
                  <div className="ml-10 mt-2 flex flex-wrap gap-1.5">
                    {step.tools.map((tool, j) => (
                      <span key={j} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* DIY summary */}
        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/40">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Zeitaufwand</p>
              <p className="font-bold text-foreground">{data.totalDiyTime}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Erste Ergebnisse</p>
              <p className="font-bold text-foreground">{data.resultTimeline}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Monatlich</p>
              <p className="font-bold text-foreground">{data.monthlyMaintenance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* VS divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm font-bold text-muted-foreground">ODER</span>
        </div>
      </div>

      {/* Done-for-you option */}
      <Card className="p-6 md:p-8 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">Option 2: Professionell umsetzen lassen</h3>
            <p className="text-sm text-muted-foreground">
              Wir übernehmen die komplette Optimierung – du konzentrierst dich auf {data.industry === "Anwälte" || data.industry === "Ärzte" || data.industry === "Steuerberater" ? "Ihre Mandanten/Patienten" : "dein Geschäft"}.
            </p>
          </div>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Das bekommst du</p>
            <ul className="space-y-2">
              {[
                "Google Business Profil vollständig optimiert",
                "Keyword-Strategie für deine Branche & Region",
                "NAP-Konsistenz in allen wichtigen Verzeichnissen",
                "Bewertungsstrategie mit Vorlagen",
                "Monatlicher Performance-Report",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Das sparst du</p>
            <ul className="space-y-2">
              {[
                `${data.totalDiyTime} Einrichtungszeit`,
                `${data.monthlyMaintenance} monatliche Pflege`,
                "Trial & Error mit Google-Richtlinien",
                "Risiko durch falsche Optimierung",
                data.painPoint,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <XCircle className="h-4 w-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Result highlight */}
        <div className="bg-background/80 rounded-lg p-4 mb-6 border border-border/40">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Typisches Ergebnis für {data.industry}:</p>
              <p className="text-sm text-muted-foreground">{data.proResult}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button asChild size="lg" className="group">
            <Link to="/#angebot">
              Jetzt für 299€ starten
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Shield className="h-4 w-4" />
              30 Tage Geld-zurück
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4" />
              500+ zufriedene Kunden
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ImplementationRoadmap;
