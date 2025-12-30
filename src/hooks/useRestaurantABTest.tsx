import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type RestaurantVariant = 'dark-gold' | 'cream-gold' | 'michelin';

interface RestaurantABTestContextType {
  variant: RestaurantVariant;
  variantLabel: string;
  setVariantOverride: (variant: RestaurantVariant) => void;
}

const RestaurantABTestContext = createContext<RestaurantABTestContextType | undefined>(undefined);

const STORAGE_KEY = 'restaurant_ab_variant';
const OVERRIDE_KEY = 'restaurant_ab_override';

const getRandomVariant = (): RestaurantVariant => {
  const rand = Math.random();
  if (rand < 0.33) return 'dark-gold';
  if (rand < 0.66) return 'cream-gold';
  return 'michelin';
};

const variantLabels: Record<RestaurantVariant, string> = {
  'dark-gold': 'Variante A - Schwarz/Gold (Dark Luxury)',
  'cream-gold': 'Variante B - Creme/Gold (Warm Classic)',
  'michelin': 'Variante C - Michelin 3-Sterne (Ultra Premium)',
};

export const RestaurantABTestProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<RestaurantVariant>('cream-gold');

  useEffect(() => {
    // Check for manual override first
    const override = localStorage.getItem(OVERRIDE_KEY) as RestaurantVariant | null;
    if (override && ['dark-gold', 'cream-gold', 'michelin'].includes(override)) {
      setVariant(override);
      return;
    }

    // Check if variant already assigned
    const storedVariant = localStorage.getItem(STORAGE_KEY) as RestaurantVariant | null;
    
    if (storedVariant && ['dark-gold', 'cream-gold', 'michelin'].includes(storedVariant)) {
      setVariant(storedVariant);
    } else {
      // Randomly assign variant (33/33/34 split)
      const newVariant = getRandomVariant();
      localStorage.setItem(STORAGE_KEY, newVariant);
      setVariant(newVariant);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.remove('theme-dark-gold', 'theme-cream-gold', 'theme-michelin');
    document.documentElement.classList.add(`theme-${variant}`);

    // Push to GA4 dataLayer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'restaurant_ab_test_view',
        ab_variant: variant,
        ab_test_name: 'restaurant_design_test_v1',
        ab_variant_label: variantLabels[variant],
        timestamp: new Date().toISOString()
      });
    }
  }, [variant]);

  const setVariantOverride = (newVariant: RestaurantVariant) => {
    localStorage.setItem(OVERRIDE_KEY, newVariant);
    setVariant(newVariant);
    
    // Track override
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'restaurant_ab_test_override',
        ab_variant: newVariant,
        ab_variant_label: variantLabels[newVariant],
        timestamp: new Date().toISOString()
      });
    }
  };

  const variantLabel = variantLabels[variant];

  return (
    <RestaurantABTestContext.Provider value={{ variant, variantLabel, setVariantOverride }}>
      {children}
    </RestaurantABTestContext.Provider>
  );
};

export const useRestaurantABTest = () => {
  const context = useContext(RestaurantABTestContext);
  if (!context) {
    throw new Error('useRestaurantABTest must be used within RestaurantABTestProvider');
  }
  return context;
};

// Tracking helper for conversions
export const trackRestaurantConversion = (
  variant: RestaurantVariant,
  ctaLocation: string,
  ctaText: string
) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'restaurant_ab_test_conversion',
      ab_variant: variant,
      ab_variant_label: variantLabels[variant],
      cta_location: ctaLocation,
      cta_text: ctaText,
      timestamp: new Date().toISOString()
    });
  }
};
