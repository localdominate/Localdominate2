import { motion } from 'framer-motion';
import { businessCategories, BusinessCategory, CategoryInfo } from '@/data/questionnaireConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CategorySelectorProps {
  onSelect: (category: BusinessCategory) => void;
  isLoading?: boolean;
}

export function CategorySelector({ onSelect, isLoading }: CategorySelectorProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Lass uns loslegen</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Willkommen! 🎉
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Um dir optimal helfen zu können, sag uns zuerst:
        </p>
        <p className="text-xl md:text-2xl font-semibold text-foreground mt-2">
          In welcher Branche bist du tätig?
        </p>
      </motion.div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
      
      {/* Helper text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-sm text-muted-foreground mt-8"
      >
        💡 Keine Sorge, du kannst deine Auswahl später noch anpassen
      </motion.p>
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.08,
        type: 'spring',
        stiffness: 150,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className="group relative bg-card border-2 border-border rounded-2xl p-6 md:p-8 text-center 
                 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300
                 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon with bounce */}
      <motion.div 
        className="text-5xl md:text-6xl mb-4 relative z-10"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {category.icon}
      </motion.div>
      
      {/* Text */}
      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors relative z-10">
        {category.name}
      </h3>
      <p className="text-xs text-muted-foreground mt-2 relative z-10">
        für {category.customerTermPlural}
      </p>
      
      {/* Arrow indicator on hover */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowRight className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* Decorative corner */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
