import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  articleCounts: Record<string, number>;
}

const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  articleCounts 
}: CategoryFilterProps) => {
  const totalArticles = Object.values(articleCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
          activeCategory === null
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
        )}
      >
        Alle
        <span className="ml-1.5 text-xs opacity-70">({totalArticles})</span>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
          )}
        >
          {category}
          <span className="ml-1.5 text-xs opacity-70">({articleCounts[category] || 0})</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;