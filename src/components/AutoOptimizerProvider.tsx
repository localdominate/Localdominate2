import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import { useAutoOptimizer } from '@/hooks/useAutoOptimizer';
import { getSessionId, getVariant, hasTrackedView, markViewTracked, setTestId } from '@/lib/sessionManager';

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
  const hasTrackedInitialView = useRef(false);
  const lastTrackedTestId = useRef<string | null>(null);

  // Track test view when a test starts running
  useEffect(() => {
    if (autoOptimizer.isLoading) return;
    
    // Find the currently running test
    const runningTest = autoOptimizer.testQueue.find(t => t.status === 'testing');
    
    if (!runningTest) {
      // No running test - clear test ID
      setTestId(null);
      return;
    }
    
    const testId = `auto_${runningTest.element_type}_${runningTest.element_id}`;
    
    // Update global test ID
    setTestId(testId);
    
    // Only track if this is a new test
    if (lastTrackedTestId.current === testId) {
      return;
    }
    
    // Check if we've already tracked this test in this session
    if (hasTrackedView(testId)) {
      lastTrackedTestId.current = testId;
      return;
    }
    
    // Track the view
    lastTrackedTestId.current = testId;
    autoOptimizer.trackTestView(runningTest.element_type, runningTest.element_id);
    
    console.log(`[AutoOptimizerProvider] Tracked view for test: ${testId}, variant: ${autoOptimizer.userVariant}`);
    
  }, [autoOptimizer.isLoading, autoOptimizer.testQueue, autoOptimizer.userVariant, autoOptimizer.trackTestView]);

  // Log initial session info
  useEffect(() => {
    if (!hasTrackedInitialView.current && !autoOptimizer.isLoading) {
      hasTrackedInitialView.current = true;
      const sessionId = getSessionId();
      const variant = getVariant();
      console.log(`[AutoOptimizerProvider] Session initialized - ID: ${sessionId}, Variant: ${variant}`);
    }
  }, [autoOptimizer.isLoading]);

  return (
    <AutoOptimizerContext.Provider value={autoOptimizer}>
      {children}
    </AutoOptimizerContext.Provider>
  );
};

export default AutoOptimizerProvider;
