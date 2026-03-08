import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, FileText, BarChart3, Calendar, Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getChecklistsForArticle, ChecklistLink } from "@/data/pillarChecklistLinks";
import { trackButtonClick } from "@/lib/dataLayer";

interface PillarChecklistLinksProps {
  articleSlug: string;
}

const iconMap = {
  checklist: ClipboardCheck,
  template: FileText,
  tracker: BarChart3,
  planner: Calendar,
  audit: Search,
};

const typeColors = {
  checklist: "bg-green-500/10 text-green-600 dark:text-green-400",
  template: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  tracker: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  planner: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  audit: "bg-primary/10 text-primary",
};

const typeLabels = {
  de: {
    checklist: "Checkliste",
    template: "Template",
    tracker: "Tracker",
    planner: "Planner",
    audit: "Audit",
  },
  en: {
    checklist: "Checklist",
    template: "Template",
    tracker: "Tracker",
    planner: "Planner",
    audit: "Audit",
  },
};

const t = {
  de: {
    headline: "📥 Kostenlose Tools & Checklisten",
    subline: "Setze das Gelernte direkt um — mit unseren interaktiven Templates:",
  },
  en: {
    headline: "📥 Free Tools & Checklists",
    subline: "Put what you've learned into action — with our interactive templates:",
  },
};

const PillarChecklistLinks = ({ articleSlug }: PillarChecklistLinksProps) => {
  const { language } = useLanguage();
  const checklists = getChecklistsForArticle(articleSlug);

  if (checklists.length === 0) return null;

  const texts = t[language];
  const labels = typeLabels[language];

  const handleClick = (item: ChecklistLink) => {
    trackButtonClick(`pillar_checklist_${item.type}`, `blog_${articleSlug}`, 0);
  };

  return (
    <div className="my-10 p-6 md:p-8 bg-muted/50 border border-border rounded-2xl not-prose">
      <h3 className="text-xl font-bold text-foreground mb-1">{texts.headline}</h3>
      <p className="text-muted-foreground text-sm mb-6">{texts.subline}</p>

      <div className="grid gap-3">
        {checklists.map((item) => {
          const Icon = iconMap[item.icon];
          const colorClass = typeColors[item.type];
          const label = labels[item.type];

          return (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
              onClick={() => handleClick(item)}
              className="group flex items-center gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <span className={`shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {item.title[language]}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorClass}`}>
                    {label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {item.description[language]}
                </p>
              </div>
              <ArrowRight className="shrink-0 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PillarChecklistLinks;
