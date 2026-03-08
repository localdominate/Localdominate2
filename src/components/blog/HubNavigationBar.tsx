import { Link, useLocation } from "react-router-dom";
import { Building2, Factory, MapPin, Star, Settings, PenTool, Wrench, Sparkles, AlertTriangle, Map } from "lucide-react";
import { cn } from "@/lib/utils";

interface HubNavItem {
  label: string;
  shortLabel: string;
  href: string;
  icon: React.ReactNode;
}

const hubItems: HubNavItem[] = [
  { label: "Google Business Profil", shortLabel: "GBP", href: "/blog/topic/google-business-profil", icon: <Building2 className="w-4 h-4" /> },
  { label: "Branchen-Guides", shortLabel: "Branchen", href: "/blog/topic/branchen", icon: <Factory className="w-4 h-4" /> },
  { label: "Städte-Guides", shortLabel: "Städte", href: "/blog/topic/staedte", icon: <MapPin className="w-4 h-4" /> },
  { label: "Bewertungen", shortLabel: "Reviews", href: "/blog/topic/bewertungen-reputation", icon: <Star className="w-4 h-4" /> },
  { label: "Technisches SEO", shortLabel: "Tech SEO", href: "/blog/topic/technisches-seo", icon: <Settings className="w-4 h-4" /> },
  { label: "Content & Marketing", shortLabel: "Content", href: "/blog/topic/content-marketing", icon: <PenTool className="w-4 h-4" /> },
  { label: "Tools & Ressourcen", shortLabel: "Tools", href: "/blog/topic/tools-ressourcen", icon: <Wrench className="w-4 h-4" /> },
  { label: "AI & Zukunft", shortLabel: "AI", href: "/blog/topic/ai-zukunft", icon: <Sparkles className="w-4 h-4" /> },
  { label: "Troubleshooting", shortLabel: "Hilfe", href: "/blog/topic/troubleshooting", icon: <AlertTriangle className="w-4 h-4" /> },
  { label: "Google Maps SEO", shortLabel: "Maps", href: "/blog/topic/google-maps-seo", icon: <Map className="w-4 h-4" /> },
];

const HubNavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[64px] z-30" aria-label="Topic Hub Navigation">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2 -mx-1">
          {hubItems.map((item) => {
            const isActive = currentPath === item.href || currentPath.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.shortLabel}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default HubNavigationBar;
