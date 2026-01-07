import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <List className="h-5 w-5 text-primary" />
        <h2 className="font-semibold text-foreground">Inhaltsverzeichnis</h2>
      </div>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-sm hover:text-primary transition-colors ${
                item.level === 3 ? "ml-4 text-muted-foreground" : "text-foreground font-medium"
              }`}
            >
              {item.level !== 3 && <span className="text-primary mr-2">{index + 1}.</span>}
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
