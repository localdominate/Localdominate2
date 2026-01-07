import { useState, useEffect } from "react";
import { List, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface StickyTableOfContentsProps {
  items: TOCItem[];
}

const StickyTableOfContents = ({ items }: StickyTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Get the one closest to the top
          const closest = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr;
          });
          setActiveId(closest.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    // Observe all section headings
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get only main headings (level 2) for the sticky version
  const mainItems = items.filter((item) => item.level !== 3);

  return (
    <nav
      className={cn(
        "hidden xl:block fixed right-8 top-32 w-64 max-h-[calc(100vh-160px)] overflow-y-auto",
        "bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg transition-all duration-300",
        isCollapsed ? "p-3" : "p-4"
      )}
    >
      {/* Header */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm text-foreground">
            Inhalt
          </span>
        </div>
        <ChevronUp
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            isCollapsed && "rotate-180"
          )}
        />
      </button>

      {/* Items */}
      {!isCollapsed && (
        <>
          <ul className="space-y-1">
            {mainItems.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left text-xs w-full px-3 py-2 rounded-lg transition-all duration-200",
                      "hover:bg-primary/10 hover:text-primary",
                      isActive
                        ? "bg-primary/15 text-primary font-medium border-l-2 border-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <span className="text-primary/60 mr-1.5">{index + 1}.</span>
                    <span className="line-clamp-2">{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 w-full mt-4 pt-3 border-t border-border text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronUp className="h-3 w-3" />
            Zurück nach oben
          </button>
        </>
      )}
    </nav>
  );
};

export default StickyTableOfContents;
