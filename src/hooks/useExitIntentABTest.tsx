import { useState, useEffect } from 'react';

export type ExitIntentVariant = 'discount' | 'bonus';

export const useExitIntentABTest = () => {
  const [variant, setVariant] = useState<ExitIntentVariant>('discount');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if variant already assigned
    const storedVariant = localStorage.getItem('exit_intent_ab_variant') as ExitIntentVariant | null;
    
    if (storedVariant && (storedVariant === 'discount' || storedVariant === 'bonus')) {
      setVariant(storedVariant);
    } else {
      // 50/50 split for new users
      const newVariant: ExitIntentVariant = Math.random() < 0.5 ? 'discount' : 'bonus';
      localStorage.setItem('exit_intent_ab_variant', newVariant);
      setVariant(newVariant);
    }
    
    setIsLoaded(true);
  }, []);

  const variantLabel = variant === 'discount' ? '33% Rabatt' : 'Gratis Bonus';

  return { variant, variantLabel, isLoaded };
};
