import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ABTest {
  id: string;
  test_id: string;
  name: string;
  description: string | null;
  variants: string[];
  status: 'running' | 'paused' | 'completed';
  start_date: string;
  target_sample_size: number;
  winning_variant: string | null;
}

interface ABTestStats {
  test_id: string;
  views: Record<string, number>;
  conversions: Record<string, number>;
  conversionRates: Record<string, number>;
  confidence: number;
  winner: string | null;
  sampleSize: number;
}

interface ABTestManagerContextType {
  tests: ABTest[];
  stats: Record<string, ABTestStats>;
  isLoading: boolean;
  getVariant: (testId: string) => string | null;
  trackView: (testId: string, variant: string, pageUrl?: string) => Promise<void>;
  trackConversion: (testId: string, variant: string, metadata?: Record<string, any>) => Promise<void>;
  refreshStats: () => Promise<void>;
}

const ABTestManagerContext = createContext<ABTestManagerContextType | undefined>(undefined);

export const ABTestManagerProvider = ({ children }: { children: ReactNode }) => {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [stats, setStats] = useState<Record<string, ABTestStats>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load tests from database
  useEffect(() => {
    const loadTests = async () => {
      const { data, error } = await supabase
        .from('ab_tests')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTests(data.map(t => ({
          ...t,
          variants: Array.isArray(t.variants) ? t.variants : JSON.parse(t.variants as string)
        })) as ABTest[]);
      }
      setIsLoading(false);
    };

    loadTests();
  }, []);

  // Get stored variant for a test
  const getVariant = useCallback((testId: string): string | null => {
    const stored = localStorage.getItem(`ab_test_${testId}`);
    return stored;
  }, []);

  // Track view
  const trackView = useCallback(async (testId: string, variant: string, pageUrl?: string) => {
    const sessionId = sessionStorage.getItem('analytics_session_id') || 'anonymous';
    
    await supabase.from('ab_test_views').insert({
      session_id: sessionId,
      test_id: testId,
      variant: variant,
      page_url: pageUrl || window.location.pathname
    });
  }, []);

  // Track conversion
  const trackConversion = useCallback(async (testId: string, variant: string, metadata?: Record<string, any>) => {
    const sessionId = sessionStorage.getItem('analytics_session_id') || 'anonymous';
    
    await supabase.from('analytics_conversions').insert({
      session_id: sessionId,
      conversion_type: `ab_test_${testId}`,
      ab_variant_color: variant,
      ab_test_id: testId,
      page_path: window.location.pathname,
      ...metadata
    });
  }, []);

  // Refresh stats from database
  const refreshStats = useCallback(async () => {
    const newStats: Record<string, ABTestStats> = {};

    for (const test of tests) {
      // Get views
      const { data: viewsData } = await supabase
        .from('ab_test_views')
        .select('variant')
        .eq('test_id', test.test_id);

      // Get conversions
      const { data: conversionsData } = await supabase
        .from('analytics_conversions')
        .select('ab_variant_color')
        .eq('ab_test_id', test.test_id);

      const views: Record<string, number> = {};
      const conversions: Record<string, number> = {};

      test.variants.forEach(v => {
        views[v] = 0;
        conversions[v] = 0;
      });

      viewsData?.forEach(v => {
        if (v.variant && views[v.variant] !== undefined) {
          views[v.variant]++;
        }
      });

      conversionsData?.forEach(c => {
        if (c.ab_variant_color && conversions[c.ab_variant_color] !== undefined) {
          conversions[c.ab_variant_color]++;
        }
      });

      // Calculate conversion rates
      const conversionRates: Record<string, number> = {};
      test.variants.forEach(v => {
        conversionRates[v] = views[v] > 0 ? (conversions[v] / views[v]) * 100 : 0;
      });

      // Simple confidence calculation (would need proper statistical test)
      const totalSamples = Object.values(views).reduce((a, b) => a + b, 0);
      const rates = Object.values(conversionRates);
      const maxRate = Math.max(...rates);
      const minRate = Math.min(...rates);
      const diff = maxRate - minRate;
      
      // Rough confidence based on sample size and difference
      let confidence = 0;
      if (totalSamples > 100 && diff > 5) confidence = 60;
      if (totalSamples > 500 && diff > 10) confidence = 80;
      if (totalSamples > 1000 && diff > 15) confidence = 95;

      const winner = confidence >= 95 
        ? Object.entries(conversionRates).reduce((a, b) => a[1] > b[1] ? a : b)[0]
        : null;

      newStats[test.test_id] = {
        test_id: test.test_id,
        views,
        conversions,
        conversionRates,
        confidence,
        winner,
        sampleSize: totalSamples
      };
    }

    setStats(newStats);
  }, [tests]);

  // Load stats when tests are loaded
  useEffect(() => {
    if (tests.length > 0) {
      refreshStats();
    }
  }, [tests, refreshStats]);

  return (
    <ABTestManagerContext.Provider value={{
      tests,
      stats,
      isLoading,
      getVariant,
      trackView,
      trackConversion,
      refreshStats
    }}>
      {children}
    </ABTestManagerContext.Provider>
  );
};

export const useABTestManager = () => {
  const context = useContext(ABTestManagerContext);
  if (!context) {
    throw new Error('useABTestManager must be used within ABTestManagerProvider');
  }
  return context;
};
