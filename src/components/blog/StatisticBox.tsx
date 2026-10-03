import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatisticItem {
  value: string;
  label: string;
  context?: string;
}

export interface StatisticBoxData {
  title?: string;
  stats: StatisticItem[];
  source: string;
  sourceUrl?: string;
  year?: string;
}

interface StatisticBoxProps {
  data: StatisticBoxData;
  className?: string;
  variant?: "default" | "compact" | "highlight";
}

const StatisticBox = ({ data, className, variant = "default" }: StatisticBoxProps) => {
  const isEn = useLanguage().language === "en";
  const isCompact = variant === "compact";
  const isHighlight = variant === "highlight";

  // No verified figures, no box: nothing is rendered, not even a heading.
  if (!data || data.stats.length === 0) return null;

  return (
    <div
      className={cn(
        "not-prose my-6 rounded-xl border overflow-hidden",
        isHighlight
          ? "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10"
          : "border-border/60 bg-muted/30",
        className
      )}
      data-ai-summary="true"
      data-speakable="true"
    >
      {/* Header */}
      {data.title && (
        <div className={cn(
          "px-5 py-3 border-b flex items-center gap-2",
          isHighlight ? "border-primary/20" : "border-border/40"
        )}>
          <BarChart3 className={cn("h-4 w-4 flex-shrink-0", isHighlight ? "text-primary" : "text-muted-foreground")} />
          <span className="text-sm font-semibold text-foreground">{data.title}</span>
        </div>
      )}

      {/* Stats grid */}
      <div className={cn(
        "grid gap-px",
        isCompact
          ? "grid-cols-2"
          : data.stats.length <= 2
            ? "grid-cols-2"
            : data.stats.length === 3
              ? "grid-cols-3"
              : "grid-cols-2 md:grid-cols-4"
      )}>
        {data.stats.map((stat, i) => (
          <div key={i} className={cn(
            "px-5 py-4 text-center",
            isCompact && "py-3"
          )}>
            <p className={cn(
              "font-bold text-foreground",
              isCompact ? "text-xl" : "text-2xl md:text-3xl",
              isHighlight && "text-primary"
            )}>
              {stat.value}
            </p>
            <p className={cn(
              "text-muted-foreground font-medium mt-0.5",
              isCompact ? "text-xs" : "text-sm"
            )}>
              {stat.label}
            </p>
            {stat.context && (
              <p className="text-xs text-muted-foreground/70 mt-0.5">{stat.context}</p>
            )}
          </div>
        ))}
      </div>

      {/* Source */}
      <div className={cn(
        "px-5 py-2 border-t text-xs text-muted-foreground/70",
        isHighlight ? "border-primary/20" : "border-border/40"
      )}>
        <span>{isEn ? "Source: " : "Quelle: "}</span>
        {data.sourceUrl ? (
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors underline-offset-2 hover:underline"
          >
            {data.source}
            {data.year && ` (${data.year})`}
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : (
          <span>{data.source}{data.year && ` (${data.year})`}</span>
        )}
      </div>
    </div>
  );
};

export default StatisticBox;
