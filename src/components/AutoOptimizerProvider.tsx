import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useAutoOptimizer } from '@/hooks/useAutoOptimizer';

type AutoOptimizerContextType = ReturnType<typeof useAutoOptimizer>;

export const AutoOptimizerContext = createContext<AutoOptimizerContextType | null>(null);

export const useAutoOptimizerContext = () => {
  const context = useContext(AutoOptimizerContext);
  if (!context) {
    throw new Error('useAutoOptimizerContext must be used within AutoOptimizerProvider');
  }
  return context;
};

interface AutoOptimizerProviderProps {
  children: React.ReactNode;
}

export const AutoOptimizerProvider: React.FC<AutoOptimizerProviderProps> = ({ children }) => {
  const autoOptimizer = useAutoOptimizer();
  const hasTracked = useRef(false);

  // Track test view once on mount for all running tests
  useEffect(() => {
    if (!autoOptimizer.isLoading && !hasTracked.current) {
      hasTracked.current = true;
      
      // Track views for all running tests
      autoOptimizer.testQueue
        .filter(t => t.status === 'testing')
        .forEach(test => {
          autoOptimizer.trackTestView(test.element_type, test.element_id);
        });
    }
  }, [autoOptimizer.isLoading, autoOptimizer.testQueue, autoOptimizer.trackTestView]);

  return (
    <AutoOptimizerContext.Provider value={autoOptimizer}>
      {children}
    </AutoOptimizerContext.Provider>
  );
};

export default AutoOptimizerProvider;
