import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface TestConfig {
  test_id: string;
  name: string;
  variants: string[];
  status: string;
  config: Record<string, any>;
  is_ready: boolean;
}

interface UseConfigurableABTestResult {
  variant: string | null;
  isLoading: boolean;
  testConfig: TestConfig | null;
  trackView: () => Promise<void>;
}

export function useConfigurableABTest(testId: string): UseConfigurableABTestResult {
  const [variant, setVariant] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [testConfig, setTestConfig] = useState<TestConfig | null>(null);

  useEffect(() => {
    const initTest = async () => {
      // Fetch test configuration from database
      const { data: test } = await supabase
        .from('ab_tests')
        .select('*')
        .eq('test_id', testId)
        .single();

      if (!test || test.status !== 'running') {
        setIsLoading(false);
        return;
      }

      const variants = Array.isArray(test.variants) 
        ? test.variants 
        : JSON.parse(test.variants as string);

      setTestConfig({
        test_id: test.test_id,
        name: test.name,
        variants,
        status: test.status,
        config: (test.config as Record<string, any>) || {},
        is_ready: test.is_ready || false
      });

      // Check localStorage for existing assignment
      const storageKey = `ab_test_${testId}`;
      const existingVariant = localStorage.getItem(storageKey);

      if (existingVariant && variants.includes(existingVariant)) {
        setVariant(existingVariant);
      } else {
        // Randomly assign variant
        const randomIndex = Math.floor(Math.random() * variants.length);
        const assignedVariant = variants[randomIndex];
        localStorage.setItem(storageKey, assignedVariant);
        setVariant(assignedVariant);
      }

      setIsLoading(false);
    };

    initTest();
  }, [testId]);

  const trackView = async () => {
    if (!variant) return;

    const sessionId = localStorage.getItem('session_id') || crypto.randomUUID();
    localStorage.setItem('session_id', sessionId);

    await supabase.from('ab_test_views').insert({
      test_id: testId,
      variant,
      session_id: sessionId,
      page_url: window.location.pathname
    });
  };

  return { variant, isLoading, testConfig, trackView };
}

// Helper to get test variant without hook (for inline usage)
export function getTestVariant(testId: string): string | null {
  const storageKey = `ab_test_${testId}`;
  return localStorage.getItem(storageKey);
}

// Helper to check if a test is active
export async function isTestActive(testId: string): Promise<boolean> {
  const { data: test } = await supabase
    .from('ab_tests')
    .select('status')
    .eq('test_id', testId)
    .single();

  return test?.status === 'running';
}
