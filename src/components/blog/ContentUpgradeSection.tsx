import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Wrench, CheckSquare, FileText, Target, Sparkles } from "lucide-react";
import { ContentUpgradeConfig, ContentUpgrade } from "@/data/contentUpgradeData";

interface ContentUpgradeSectionProps {
  config: ContentUpgradeConfig;
}

const typeIcon = (type: ContentUpgrade["type"]) => {
  switch (type) {
    case "guide": return <BookOpen className="w-4 h-4" />;
    case "tool": return <Wrench className="w-4 h-4" />;
    case "checklist": return <CheckSquare className="w-4 h-4" />;
    case "template": return <FileText className="w-4 h-4" />;
    case "hub": return <Target className="w-4 h-4" />;
  }
};

const typeColor = (type: ContentUpgrade["type"]) => {
  switch (type) {
    case "guide": return "bg-primary/10 text-primary";
    case "tool": return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "checklist": return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    case "template": return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "hub": return "bg-violet-500/10 text-violet-600 dark:text-violet-400";
  }
};

const typeLabel = (type: ContentUpgrade["type"]) => {
  switch (type) {
    case "guide": return "Guide";
    case "tool": return "Tool";
    case "checklist": return "Checkliste";
    case "template": return "Template";
    case "hub": return "Hub";
  }
};

const ContentUpgradeSection = ({ config }: ContentUpgradeSectionProps) => {
  return (
    <section className="my-12 not-prose">
      <div className="bg-gradient-to-br from-secondary/60 via-secondary/30 to-transparent border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <h3 className="text-xl font-bold text-foreground leading-tight">{config.headline}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6 ml-8">{config.subline}</p>

        <div className="grid sm:grid-cols-2 gap-3">
          {config.upgrades.map((upgrade, i) => (
            <Link
              key={i}
              to={upgrade.href}
              className="group flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <span className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${typeColor(upgrade.type)}`}>
                {typeIcon(upgrade.type)}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug">
                    {upgrade.title}
                  </span>
                  {upgrade.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                      {upgrade.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {upgrade.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1.5 group-hover:gap-1.5 transition-all">
                  {typeLabel(upgrade.type)} lesen <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentUpgradeSection;
