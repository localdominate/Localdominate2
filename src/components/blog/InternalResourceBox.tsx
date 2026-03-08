import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Wrench, CheckSquare, FileText, Map, BarChart3, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ResourceItem {
  label: string;
  href: string;
  type: "pillar" | "tool" | "checklist" | "guide" | "hub" | "city" | "industry";
  description?: string;
}

interface InternalResourceBoxProps {
  title?: string;
  subtitle?: string;
  resources: ResourceItem[];
  variant?: "default" | "compact" | "grid";
}

const resourceIcon = (type: ResourceItem["type"]) => {
  switch (type) {
    case "pillar": return <BookOpen className="w-4 h-4" />;
    case "tool": return <Wrench className="w-4 h-4" />;
    case "checklist": return <CheckSquare className="w-4 h-4" />;
    case "guide": return <FileText className="w-4 h-4" />;
    case "hub": return <Target className="w-4 h-4" />;
    case "city": return <Map className="w-4 h-4" />;
    case "industry": return <BarChart3 className="w-4 h-4" />;
  }
};

const resourceTypeLabel = (type: ResourceItem["type"]) => {
  switch (type) {
    case "pillar": return "Pillar Guide";
    case "tool": return "Tool";
    case "checklist": return "Checkliste";
    case "guide": return "Guide";
    case "hub": return "Topic Hub";
    case "city": return "Stadt-Guide";
    case "industry": return "Branche";
  }
};

const resourceColor = (type: ResourceItem["type"]) => {
  switch (type) {
    case "pillar": return "bg-primary/10 text-primary border-primary/20";
    case "tool": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    case "checklist": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    case "guide": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "hub": return "bg-violet-500/10 text-violet-600 border-violet-500/20";
    case "city": return "bg-rose-500/10 text-rose-600 border-rose-500/20";
    case "industry": return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
  }
};

export const InternalResourceBox = ({
  title = "📚 Weiterführende Ressourcen",
  subtitle,
  resources,
  variant = "default",
}: InternalResourceBoxProps) => {
  if (variant === "compact") {
    return (
      <Card className="my-8 not-prose border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="pt-5 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm">{title}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {resources.map((res, i) => (
              <Link
                key={i}
                to={res.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-[1.02] ${resourceColor(res.type)}`}
              >
                {resourceIcon(res.type)}
                {res.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "grid") {
    return (
      <Card className="my-8 not-prose overflow-hidden">
        <CardContent className="pt-6">
          <h4 className="font-bold text-foreground text-base mb-1">{title}</h4>
          {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
          <div className="grid sm:grid-cols-2 gap-3">
            {resources.map((res, i) => (
              <Link
                key={i}
                to={res.href}
                className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${resourceColor(res.type)}`}>
                  {resourceIcon(res.type)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {res.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{resourceTypeLabel(res.type)}</p>
                  {res.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{res.description}</p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant - list style
  return (
    <Card className="my-8 not-prose border-l-4 border-l-primary">
      <CardContent className="pt-5">
        <h4 className="font-bold text-foreground text-base mb-1">{title}</h4>
        {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
        <div className="space-y-2">
          {resources.map((res, i) => (
            <Link
              key={i}
              to={res.href}
              className="flex items-center gap-3 p-2.5 -mx-2 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${resourceColor(res.type)}`}>
                {resourceIcon(res.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {res.label}
                </p>
                <p className="text-xs text-muted-foreground">{resourceTypeLabel(res.type)}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InternalResourceBox;
