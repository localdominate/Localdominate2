import { motion } from 'framer-motion';
import { businessCategories, BusinessCategory, CategoryInfo } from '@/data/questionnaireConfig';

interface CategorySelectorProps {
  onSelect: (category: BusinessCategory) => void;
  isLoading?: boolean;
}

export function CategorySelector({ onSelect, isLoading }: CategorySelectorProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">Willkommen! 🎉</h2>
        <p className="text-lg text-muted-foreground">
          Um dir optimal helfen zu können, sag uns zuerst: <br />
          <strong>In welcher Branche bist du tätig?</strong>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {businessCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            onClick={() => onSelect(category.id)}
            disabled={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
  onClick: () => void;
  disabled?: boolean;
}

function CategoryCard({ category, index, onClick, disabled }: CategoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className="group relative bg-card border-2 border-border rounded-xl p-6 text-center 
                 hover:border-primary hover:shadow-lg transition-all duration-300
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
        {category.icon}
      </div>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
        {category.name}
      </h3>
      <p className="text-xs text-muted-foreground mt-1">
        für {category.customerTermPlural}
      </p>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.button>
  );
}
