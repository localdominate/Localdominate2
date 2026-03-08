import { CheckCircle, AlertTriangle, Lightbulb, Clock, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description: string;
  tip?: string;
  warning?: string;
  duration?: string;
  icon?: LucideIcon;
}

interface StepByStepProcessProps {
  steps: ProcessStep[];
  title?: string;
  /** Compact variant for shorter inline processes */
  variant?: "default" | "compact";
}

/**
 * A reusable step-by-step process component for troubleshooting and how-to articles.
 * Renders a vertical timeline with numbered steps, optional tips/warnings, and duration badges.
 */
const StepByStepProcess = ({ steps, title, variant = "default" }: StepByStepProcessProps) => {
  if (variant === "compact") {
    return (
      <div className="not-prose my-8" data-ai-summary="true">
        {title && (
          <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            {title}
          </h3>
        )}
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="not-prose my-10" data-ai-summary="true" data-speakable="true">
      {title && (
        <h3 className="font-bold text-foreground text-xl mb-6 flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          {title}
        </h3>
      )}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-border" aria-hidden="true" />

        <div className="space-y-6">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="relative flex gap-4">
                {/* Step number circle */}
                <div className="flex-shrink-0 z-10">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                    "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  )}>
                    {StepIcon ? <StepIcon className="h-5 w-5" /> : i + 1}
                  </div>
                </div>

                {/* Step content card */}
                <Card className="flex-1 p-4 border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-semibold text-foreground">
                      <span className="text-primary mr-1.5">Schritt {i + 1}:</span>
                      {step.title}
                    </h4>
                    {step.duration && (
                      <Badge variant="outline" className="flex-shrink-0 gap-1 text-xs">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Tip callout */}
                  {step.tip && (
                    <div className="mt-3 flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800 dark:text-amber-300">{step.tip}</p>
                    </div>
                  )}

                  {/* Warning callout */}
                  {step.warning && (
                    <div className="mt-3 flex items-start gap-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3">
                      <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-red-800 dark:text-red-300">{step.warning}</p>
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepByStepProcess;
