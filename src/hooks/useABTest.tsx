import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ABVariant = 'blue' | 'red';

interface ABTestContextType {
  variant: ABVariant;
  variantLabel: string;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

const STORAGE_KEY = 'ab_test_variant';

export const ABTestProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<ABVariant>('blue');

  useEffect(() => {
    // Check if variant already assigned in localStorage
    const storedVariant = localStorage.getItem(STORAGE_KEY) as ABVariant | null;
    
    if (storedVariant && (storedVariant === 'blue' || storedVariant === 'red')) {
      setVariant(storedVariant);
    } else {
      // Randomly assign variant (50/50 split)
      const newVariant: ABVariant = Math.random() < 0.5 ? 'blue' : 'red';
      localStorage.setItem(STORAGE_KEY, newVariant);
      setVariant(newVariant);
    }
  }, []);

  useEffect(() => {
    // Apply variant class to document root for CSS theming
    document.documentElement.classList.remove('theme-blue', 'theme-red');
    document.documentElement.classList.add(`theme-${variant}`);

    // Push to Google Analytics dataLayer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'ab_test_variant',
        ab_variant: variant,
        ab_test_name: 'color_theme_test',
        ab_variant_label: variant === 'blue' ? 'Variant A - Blue' : 'Variant B - Red'
      });
    }
  }, [variant]);

  const variantLabel = variant === 'blue' ? 'Variant A - Blue' : 'Variant B - Red';

  return (
    <ABTestContext.Provider value={{ variant, variantLabel }}>
      {children}
    </ABTestContext.Provider>
  );
};

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
};
