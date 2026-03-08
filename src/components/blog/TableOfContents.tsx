import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
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

  // Count only main items for numbering
  let mainIndex = 0;

  // Skip rendering if auto-TOC already exists on the page (from ArticleLayout)
  const isAutoTocPresent = typeof document !== 'undefined' && document.getElementById('auto-toc-nav');
  if (isAutoTocPresent) return null;

  return (
    <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8 xl:hidden">
      <div className="flex items-center gap-2 mb-4">
        <List className="h-5 w-5 text-primary" />
        <h2 className="font-semibold text-foreground">Inhaltsverzeichnis</h2>
      </div>
      <ol className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isSubItem = item.level === 3;
          
          if (!isSubItem) mainIndex++;

          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left text-sm w-full px-3 py-1.5 rounded-lg transition-all duration-200",
                  "hover:bg-primary/10 hover:text-primary",
                  isSubItem && "ml-4",
                  isActive
                    ? "bg-primary/15 text-primary font-medium"
                    : isSubItem
                    ? "text-muted-foreground"
                    : "text-foreground"
                )}
              >
                {!isSubItem && (
                  <span className="text-primary mr-2">{mainIndex}.</span>
                )}
                {item.title}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default TableOfContents;
