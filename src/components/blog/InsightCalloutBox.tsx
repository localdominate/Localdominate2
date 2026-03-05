import { Lightbulb, AlertTriangle, TrendingUp, Zap, Info, Quote, Star } from "lucide-react";
import { ReactNode } from "react";

type CalloutVariant = "tip" | "warning" | "stat" | "pro-tip" | "important" | "quote" | "success";

interface InsightCalloutBoxProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
  source?: string;
  statValue?: string;
  statLabel?: string;
}

const variantConfig: Record<CalloutVariant, {
  icon: typeof Lightbulb;
  defaultTitle: string;
  containerClass: string;
  iconClass: string;
  borderClass: string;
  titleClass: string;
}> = {
  tip: {
    icon: Lightbulb,
    defaultTitle: "Tipp",
    containerClass: "bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20",
    iconClass: "text-amber-600 dark:text-amber-400",
    borderClass: "border-l-4 border-amber-500",
    titleClass: "text-amber-800 dark:text-amber-300",
  },
  warning: {
    icon: AlertTriangle,
    defaultTitle: "Achtung",
    containerClass: "bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20",
    iconClass: "text-red-600 dark:text-red-400",
    borderClass: "border-l-4 border-red-500",
    titleClass: "text-red-800 dark:text-red-300",
  },
  stat: {
    icon: TrendingUp,
    defaultTitle: "Statistik",
    containerClass: "bg-gradient-to-br from-blue-50 to-indigo-100/50 dark:from-blue-950/30 dark:to-indigo-900/20",
    iconClass: "text-blue-600 dark:text-blue-400",
    borderClass: "border-l-4 border-blue-500",
    titleClass: "text-blue-800 dark:text-blue-300",
  },
  "pro-tip": {
    icon: Zap,
    defaultTitle: "Pro-Tipp",
    containerClass: "bg-gradient-to-br from-purple-50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/20",
    iconClass: "text-purple-600 dark:text-purple-400",
    borderClass: "border-l-4 border-purple-500",
    titleClass: "text-purple-800 dark:text-purple-300",
  },
  important: {
    icon: Info,
    defaultTitle: "Wichtig",
    containerClass: "bg-gradient-to-br from-sky-50 to-cyan-100/50 dark:from-sky-950/30 dark:to-cyan-900/20",
    iconClass: "text-sky-600 dark:text-sky-400",
    borderClass: "border-l-4 border-sky-500",
    titleClass: "text-sky-800 dark:text-sky-300",
  },
  quote: {
    icon: Quote,
    defaultTitle: "",
    containerClass: "bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900/40 dark:to-slate-800/30",
    iconClass: "text-slate-500 dark:text-slate-400",
    borderClass: "border-l-4 border-slate-400 dark:border-slate-500",
    titleClass: "text-slate-700 dark:text-slate-300",
  },
  success: {
    icon: Star,
    defaultTitle: "Best Practice",
    containerClass: "bg-gradient-to-br from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-900/20",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    borderClass: "border-l-4 border-emerald-500",
    titleClass: "text-emerald-800 dark:text-emerald-300",
  },
};

const InsightCalloutBox = ({
  variant = "tip",
  title,
  children,
  source,
  statValue,
  statLabel,
}: InsightCalloutBoxProps) => {
  const config = variantConfig[variant];
  const Icon = config.icon;
  const displayTitle = title ?? config.defaultTitle;

  return (
    <aside
      className={`${config.containerClass} ${config.borderClass} rounded-r-xl p-5 my-8`}
      role="note"
      data-ai-summary="true"
    >
      {/* Stat highlight layout */}
      {variant === "stat" && statValue && (
        <div className="flex items-center gap-4 mb-3">
          <span className={`text-3xl font-extrabold ${config.iconClass}`}>{statValue}</span>
          {statLabel && (
            <span className="text-sm font-medium text-muted-foreground">{statLabel}</span>
          )}
        </div>
      )}

      {/* Header */}
      {displayTitle && (
        <div className="flex items-center gap-2 mb-2">
          <Icon className={`h-5 w-5 ${config.iconClass} shrink-0`} />
          <h4 className={`font-semibold text-sm uppercase tracking-wide ${config.titleClass}`}>
            {displayTitle}
          </h4>
        </div>
      )}

      {/* Body */}
      <div className={`text-foreground/85 text-[0.95rem] leading-relaxed ${variant === "quote" ? "italic" : ""}`}>
        {children}
      </div>

      {/* Source */}
      {source && (
        <p className="text-xs text-muted-foreground mt-3 pt-2 border-t border-current/10">
          Quelle: {source}
        </p>
      )}
    </aside>
  );
};

export default InsightCalloutBox;
