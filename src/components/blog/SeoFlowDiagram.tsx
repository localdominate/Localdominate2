import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FlowStep {
  label: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}

interface SeoFlowDiagramProps {
  title: string;
  steps: FlowStep[];
  direction?: "horizontal" | "vertical";
  caption?: string;
}

/**
 * Visual flow diagram for SEO processes and workflows.
 * Renders an accessible, styled step-flow with connecting arrows.
 */
const SeoFlowDiagram = ({ title, steps, direction = "horizontal", caption }: SeoFlowDiagramProps) => {
  return (
    <figure className="not-prose my-8" role="img" aria-label={title}>
      <Card className="p-5 md:p-6 border-border/60 overflow-hidden">
        <h4 className="font-bold text-foreground text-base mb-5 text-center">{title}</h4>

        <div className={cn(
          "flex gap-2 items-stretch",
          direction === "vertical" ? "flex-col" : "flex-col md:flex-row md:items-center"
        )}>
          {steps.map((step, i) => (
            <div key={i} className={cn(
              "flex items-center gap-2",
              direction === "vertical" ? "flex-row" : "flex-col md:flex-row flex-1"
            )}>
              {/* Step node */}
              <div className={cn(
                "flex-1 min-w-0 rounded-xl p-3 md:p-4 border text-center transition-colors",
                step.highlight
                  ? "bg-primary/10 border-primary/30 shadow-sm shadow-primary/10"
                  : "bg-muted/40 border-border/50"
              )}>
                {step.icon && <span className="text-xl mb-1 block">{step.icon}</span>}
                <p className={cn(
                  "font-semibold text-sm leading-tight",
                  step.highlight ? "text-primary" : "text-foreground"
                )}>{step.label}</p>
                {step.description && (
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{step.description}</p>
                )}
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className={cn(
                  "flex-shrink-0 text-muted-foreground/50 font-bold text-lg",
                  direction === "vertical" ? "rotate-90 self-center my-1" : "hidden md:block"
                )}>
                  →
                </div>
              )}
              {i < steps.length - 1 && direction === "horizontal" && (
                <div className="md:hidden text-muted-foreground/50 font-bold text-lg self-center">↓</div>
              )}
            </div>
          ))}
        </div>
      </Card>
      {caption && (
        <figcaption className="text-center text-xs text-muted-foreground mt-2 italic">{caption}</figcaption>
      )}
    </figure>
  );
};

export default SeoFlowDiagram;
