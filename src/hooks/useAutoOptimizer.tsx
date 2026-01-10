import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { TEST_REQUIREMENTS } from '@/lib/autoOptimizerConfig';
import { analyzeABTest, calculatePower } from '@/lib/statisticalSignificance';
import { getSessionId, getVariant, setVariant, setTestId, markViewTracked, hasTrackedView } from '@/lib/sessionManager';

interface OptimizedElement {
  element_type: string;
  element_id: string;
  winning_value: string;
}

interface TestQueueItem {
  id: string;
  element_type: string;
  element_id: string;
  variants_to_test: string[];
  tested_variants: string[];
  current_variant_a: string | null;
  current_variant_b: string | null;
  current_winner: string | null;
  status: string;
  priority: number;
}

interface CurrentTest {
  testId: string;
  elementType: string;
  elementId: string;
  variantA: string;
  variantB: string;
  viewsA: number;
  viewsB: number;
  conversionsA: number;
  conversionsB: number;
  conversionRateA: number;
  conversionRateB: number;
  confidence: number;
  progress: number;
  pValue: number;
  zScore: number;
  isSignificant: boolean;
  winner: 'A' | 'B' | 'none';
  relativeImprovement: number;
  recommendedAction: string;
  requiredSampleSize: number;
  currentPower: number;
}

export function useAutoOptimizer() {
  const [optimizedElements, setOptimizedElements] = useState<OptimizedElement[]>([]);
  const [testQueue, setTestQueue] = useState<TestQueueItem[]>([]);
  const [currentTest, setCurrentTest] = useState<CurrentTest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userVariant, setUserVariant] = useState<'A' | 'B'>('A');
  
  // Use central session manager for consistent session ID
  const sessionId = useRef<string>(getSessionId());

  // Determine user's variant based on 50/50 split (using central session manager)
  useEffect(() => {
    // Get or create variant from central session manager
    const variant = getVariant();
    setUserVariant(variant);
    
    // Also update the central session manager
    setVariant(variant);
    
    console.log('[AutoOptimizer] Using session:', sessionId.current, 'variant:', variant);
  }, []);

  // Load optimized elements and test queue
  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch optimized elements
      const { data: optimized } = await supabase
        .from('optimized_elements')
        .select('*');
      
      if (optimized) {
        setOptimizedElements(optimized);
      }

      // Fetch test queue
      const { data: queue } = await supabase
        .from('auto_test_queue')
        .select('*')
        .order('priority', { ascending: true });
      
      if (queue) {
        // Parse JSON fields
        const parsedQueue = queue.map(item => ({
          ...item,
          variants_to_test: Array.isArray(item.variants_to_test) 
            ? item.variants_to_test 
            : JSON.parse(item.variants_to_test as unknown as string || '[]'),
          tested_variants: Array.isArray(item.tested_variants) 
            ? item.tested_variants 
            : JSON.parse(item.tested_variants as unknown as string || '[]')
        }));
        setTestQueue(parsedQueue);

        // Find current running test
        const runningTest = parsedQueue.find(t => t.status === 'testing');
        if (runningTest) {
          const testId = `auto_${runningTest.element_type}_${runningTest.element_id}`;
          // Update central session manager with current test ID
          setTestId(testId);
          await loadCurrentTestStats(runningTest);
        } else {
          // No running test - clear test ID
          setTestId(null);
        }
      }
    } catch (error) {
      console.error('Error loading auto-optimizer data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load stats for current running test with proper statistical analysis
  const loadCurrentTestStats = async (test: TestQueueItem) => {
    if (!test.current_variant_a || !test.current_variant_b) return;

    const testId = `auto_${test.element_type}_${test.element_id}`;
    
    // Get views for variant A
    const { count: viewsA } = await supabase
      .from('ab_test_views')
      .select('*', { count: 'exact', head: true })
      .eq('test_id', testId)
      .eq('variant', 'A');

    // Get views for variant B
    const { count: viewsB } = await supabase
      .from('ab_test_views')
      .select('*', { count: 'exact', head: true })
      .eq('test_id', testId)
      .eq('variant', 'B');

    // Get conversions for variant A
    const { count: conversionsA } = await supabase
      .from('analytics_conversions')
      .select('*', { count: 'exact', head: true })
      .eq('ab_test_id', testId)
      .eq('ab_variant_color', 'A');

    // Get conversions for variant B
    const { count: conversionsB } = await supabase
      .from('analytics_conversions')
      .select('*', { count: 'exact', head: true })
      .eq('ab_test_id', testId)
      .eq('ab_variant_color', 'B');

    const vA = viewsA || 0;
    const vB = viewsB || 0;
    const cA = conversionsA || 0;
    const cB = conversionsB || 0;

    const crA = vA > 0 ? (cA / vA) * 100 : 0;
    const crB = vB > 0 ? (cB / vB) * 100 : 0;

    // Use proper statistical analysis
    const analysis = analyzeABTest(
      cA, vA, cB, vB,
      TEST_REQUIREMENTS.minDetectableEffect,
      0.05 // 5% significance level
    );

    // Calculate current power
    const baselineRate = Math.max(crA / 100, crB / 100, 0.01);
    const currentPower = calculatePower(
      Math.min(vA, vB),
      baselineRate,
      TEST_REQUIREMENTS.minDetectableEffect
    );

    // Progress based on sample size requirement
    const totalViews = vA + vB;
    const progress = Math.min(100, (totalViews / (TEST_REQUIREMENTS.minViews * 2)) * 100);

    setCurrentTest({
      testId,
      elementType: test.element_type,
      elementId: test.element_id,
      variantA: test.current_variant_a,
      variantB: test.current_variant_b,
      viewsA: vA,
      viewsB: vB,
      conversionsA: cA,
      conversionsB: cB,
      conversionRateA: crA,
      conversionRateB: crB,
      confidence: analysis.confidence,
      progress,
      pValue: analysis.pValue,
      zScore: analysis.zScore,
      isSignificant: analysis.isSignificant,
      winner: analysis.winner,
      relativeImprovement: analysis.relativeImprovement,
      recommendedAction: analysis.recommendedAction,
      requiredSampleSize: analysis.requiredSampleSize,
      currentPower
    });
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Get the optimized value for an element
  const getOptimizedValue = useCallback((elementType: string, elementId: string): string | null => {
    const element = optimizedElements.find(
      e => e.element_type === elementType && e.element_id === elementId
    );
    return element?.winning_value || null;
  }, [optimizedElements]);

  // Get the current test variant value for this user
  const getTestVariantValue = useCallback((elementType: string, elementId: string): string | null => {
    const runningTest = testQueue.find(
      t => t.status === 'testing' && t.element_type === elementType && t.element_id === elementId
    );
    
    if (!runningTest) return null;

    return userVariant === 'A' 
      ? runningTest.current_variant_a 
      : runningTest.current_variant_b;
  }, [testQueue, userVariant]);

  // Get the effective value (test variant or optimized)
  const getEffectiveValue = useCallback((elementType: string, elementId: string, defaultValue: string): string => {
    const testValue = getTestVariantValue(elementType, elementId);
    if (testValue) return testValue;
    
    const optimizedValue = getOptimizedValue(elementType, elementId);
    if (optimizedValue) return optimizedValue;
    
    return defaultValue;
  }, [getTestVariantValue, getOptimizedValue]);

  // Track a view for the current test - uses central session manager
  const trackTestView = useCallback(async (elementType: string, elementId: string) => {
    const runningTest = testQueue.find(
      t => t.status === 'testing' && t.element_type === elementType && t.element_id === elementId
    );
    
    if (!runningTest) return;

    const testId = `auto_${elementType}_${elementId}`;

    // Use central session manager to check if already tracked
    if (hasTrackedView(testId)) {
      return; // Already tracked
    }

    try {
      await supabase.from('ab_test_views').insert({
        test_id: testId,
        variant: userVariant,
        session_id: sessionId.current,
        page_url: window.location.pathname
      });
      
      // Mark as tracked using central session manager
      markViewTracked(testId);
      console.log(`[AutoOptimizer] Tracked view for ${testId}, variant ${userVariant}, session ${sessionId.current}`);
    } catch (error) {
      console.error('[AutoOptimizer] Error tracking view:', error);
    }
  }, [testQueue, userVariant]);

  // Start the next test in queue
  const startNextTest = useCallback(async () => {
    const nextTest = testQueue.find(t => t.status === 'waiting');
    if (!nextTest) return;

    const variants = nextTest.variants_to_test;
    const tested = nextTest.tested_variants;
    
    // Get current winner or first variant as A
    const variantA = nextTest.current_winner || variants[0];
    
    // Get next untested variant as B
    const untested = variants.filter(v => !tested.includes(v) && v !== variantA);
    if (untested.length === 0) return;
    
    const variantB = untested[0];

    await supabase
      .from('auto_test_queue')
      .update({
        status: 'testing',
        current_variant_a: variantA,
        current_variant_b: variantB
      })
      .eq('id', nextTest.id);

    await loadData();
  }, [testQueue, loadData]);

  // Pause the current test
  const pauseCurrentTest = useCallback(async () => {
    const runningTest = testQueue.find(t => t.status === 'testing');
    if (!runningTest) return;

    await supabase
      .from('auto_test_queue')
      .update({ status: 'paused' })
      .eq('id', runningTest.id);

    await loadData();
  }, [testQueue, loadData]);

  // Resume a paused test
  const resumeTest = useCallback(async (testId: string) => {
    await supabase
      .from('auto_test_queue')
      .update({ status: 'testing' })
      .eq('id', testId);

    await loadData();
  }, [loadData]);

  // Declare winner and update optimized elements
  const declareWinner = useCallback(async (winner: 'A' | 'B') => {
    const runningTest = testQueue.find(t => t.status === 'testing');
    if (!runningTest || !runningTest.current_variant_a || !runningTest.current_variant_b) return;

    const winningValue = winner === 'A' 
      ? runningTest.current_variant_a 
      : runningTest.current_variant_b;

    // Update optimized_elements
    await supabase
      .from('optimized_elements')
      .upsert({
        element_type: runningTest.element_type,
        element_id: runningTest.element_id,
        winning_value: winningValue,
        test_history: [
          ...((optimizedElements.find(
            e => e.element_type === runningTest.element_type && e.element_id === runningTest.element_id
          ) as any)?.test_history || []),
          {
            variant_a: runningTest.current_variant_a,
            variant_b: runningTest.current_variant_b,
            winner: winningValue,
            tested_at: new Date().toISOString()
          }
        ]
      }, { onConflict: 'element_type,element_id' });

    // Update test queue - add tested variant and set up next test
    const newTested = [...runningTest.tested_variants, runningTest.current_variant_b];
    const allVariants = runningTest.variants_to_test;
    const untested = allVariants.filter(v => !newTested.includes(v) && v !== winningValue);

    if (untested.length === 0) {
      // All variants tested, mark as completed
      await supabase
        .from('auto_test_queue')
        .update({
          status: 'completed',
          tested_variants: newTested,
          current_winner: winningValue
        })
        .eq('id', runningTest.id);
    } else {
      // Set up next test with new B variant
      await supabase
        .from('auto_test_queue')
        .update({
          tested_variants: newTested,
          current_winner: winningValue,
          current_variant_a: winningValue,
          current_variant_b: untested[0]
        })
        .eq('id', runningTest.id);
    }

    await loadData();
  }, [testQueue, optimizedElements, loadData]);

  return {
    optimizedElements,
    testQueue,
    currentTest,
    isLoading,
    userVariant,
    sessionId: sessionId.current,
    getOptimizedValue,
    getTestVariantValue,
    getEffectiveValue,
    trackTestView,
    startNextTest,
    pauseCurrentTest,
    resumeTest,
    declareWinner,
    refresh: loadData
  };
}
