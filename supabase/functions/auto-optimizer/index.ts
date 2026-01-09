import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

const TEST_REQUIREMENTS = {
  minViews: 1000,
  minConfidence: 95,
  trafficSplitA: 75,
  trafficSplitB: 25
};

// Calculate statistical significance using Z-test
function calculateConfidence(
  viewsA: number, 
  conversionsA: number, 
  viewsB: number, 
  conversionsB: number
): { confidence: number; winner: 'A' | 'B' | null } {
  if (viewsA < 100 || viewsB < 100) {
    return { confidence: 0, winner: null };
  }

  const rateA = conversionsA / viewsA;
  const rateB = conversionsB / viewsB;
  
  const pooledRate = (conversionsA + conversionsB) / (viewsA + viewsB);
  const standardError = Math.sqrt(pooledRate * (1 - pooledRate) * (1/viewsA + 1/viewsB));
  
  if (standardError === 0) {
    return { confidence: 0, winner: null };
  }
  
  const zScore = Math.abs(rateA - rateB) / standardError;
  
  // Convert Z-score to confidence percentage
  let confidence = 0;
  if (zScore >= 2.576) confidence = 99;
  else if (zScore >= 1.96) confidence = 95;
  else if (zScore >= 1.645) confidence = 90;
  else if (zScore >= 1.282) confidence = 80;
  else confidence = Math.min(79, Math.round(zScore * 40));

  const winner = rateA > rateB ? 'A' : rateB > rateA ? 'B' : null;
  
  return { confidence, winner };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('[Auto-Optimizer] Starting optimization check...');

    // Get current running test
    const { data: runningTests, error: testError } = await supabase
      .from('auto_test_queue')
      .select('*')
      .eq('status', 'testing')
      .limit(1);

    if (testError) {
      console.error('[Auto-Optimizer] Error fetching running tests:', testError);
      throw testError;
    }

    const results: any[] = [];

    if (runningTests && runningTests.length > 0) {
      const test = runningTests[0] as TestQueueItem;
      console.log(`[Auto-Optimizer] Checking test: ${test.element_type}/${test.element_id}`);

      const testId = `auto_${test.element_type}_${test.element_id}`;

      // Get views for both variants
      const { count: viewsA } = await supabase
        .from('ab_test_views')
        .select('*', { count: 'exact', head: true })
        .eq('test_id', testId)
        .eq('variant', 'A');

      const { count: viewsB } = await supabase
        .from('ab_test_views')
        .select('*', { count: 'exact', head: true })
        .eq('test_id', testId)
        .eq('variant', 'B');

      // Get conversions for both variants
      const { count: conversionsA } = await supabase
        .from('analytics_conversions')
        .select('*', { count: 'exact', head: true })
        .eq('ab_test_id', testId)
        .eq('ab_variant_color', 'A');

      const { count: conversionsB } = await supabase
        .from('analytics_conversions')
        .select('*', { count: 'exact', head: true })
        .eq('ab_test_id', testId)
        .eq('ab_variant_color', 'B');

      const vA = viewsA || 0;
      const vB = viewsB || 0;
      const cA = conversionsA || 0;
      const cB = conversionsB || 0;
      const totalViews = vA + vB;

      console.log(`[Auto-Optimizer] Stats - A: ${cA}/${vA}, B: ${cB}/${vB}`);

      const { confidence, winner } = calculateConfidence(vA, cA, vB, cB);

      results.push({
        testId,
        elementType: test.element_type,
        elementId: test.element_id,
        variantA: test.current_variant_a,
        variantB: test.current_variant_b,
        viewsA: vA,
        viewsB: vB,
        conversionsA: cA,
        conversionsB: cB,
        confidence,
        winner,
        totalViews,
        meetsMinViews: totalViews >= TEST_REQUIREMENTS.minViews,
        meetsConfidence: confidence >= TEST_REQUIREMENTS.minConfidence
      });

      // Check if we can declare a winner
      if (totalViews >= TEST_REQUIREMENTS.minViews && confidence >= TEST_REQUIREMENTS.minConfidence && winner) {
        console.log(`[Auto-Optimizer] Test complete! Winner: ${winner}`);

        const winningValue = winner === 'A' ? test.current_variant_a : test.current_variant_b;

        // Get current optimized element to update history
        const { data: currentOptimized } = await supabase
          .from('optimized_elements')
          .select('test_history')
          .eq('element_type', test.element_type)
          .eq('element_id', test.element_id)
          .single();

        const existingHistory = (currentOptimized?.test_history as any[]) || [];

        // Update optimized_elements with winner
        await supabase
          .from('optimized_elements')
          .upsert({
            element_type: test.element_type,
            element_id: test.element_id,
            winning_value: winningValue,
            test_history: [
              ...existingHistory,
              {
                variant_a: test.current_variant_a,
                variant_b: test.current_variant_b,
                winner: winningValue,
                confidence,
                views_a: vA,
                views_b: vB,
                conversions_a: cA,
                conversions_b: cB,
                tested_at: new Date().toISOString()
              }
            ]
          }, { onConflict: 'element_type,element_id' });

        // Update test queue
        const newTested = [...(test.tested_variants || []), test.current_variant_b];
        const allVariants = test.variants_to_test || [];
        const untested = allVariants.filter((v: string) => !newTested.includes(v) && v !== winningValue);

        if (untested.length === 0) {
          // All variants tested, mark as completed and start next test
          console.log(`[Auto-Optimizer] All variants tested for ${test.element_type}/${test.element_id}`);
          
          await supabase
            .from('auto_test_queue')
            .update({
              status: 'completed',
              tested_variants: newTested,
              current_winner: winningValue
            })
            .eq('id', test.id);

          // Start next waiting test
          const { data: nextTest } = await supabase
            .from('auto_test_queue')
            .select('*')
            .eq('status', 'waiting')
            .order('priority', { ascending: true })
            .limit(1);

          if (nextTest && nextTest.length > 0) {
            const next = nextTest[0];
            const variants = next.variants_to_test || [];
            const variantA = next.current_winner || variants[0];
            const variantB = variants.find((v: string) => v !== variantA);

            if (variantB) {
              console.log(`[Auto-Optimizer] Starting next test: ${next.element_type}/${next.element_id}`);
              
              await supabase
                .from('auto_test_queue')
                .update({
                  status: 'testing',
                  current_variant_a: variantA,
                  current_variant_b: variantB
                })
                .eq('id', next.id);
            }
          }
        } else {
          // Continue with next variant
          console.log(`[Auto-Optimizer] Continuing test with next variant: ${untested[0]}`);
          
          await supabase
            .from('auto_test_queue')
            .update({
              tested_variants: newTested,
              current_winner: winningValue,
              current_variant_a: winningValue,
              current_variant_b: untested[0]
            })
            .eq('id', test.id);
        }

        results[0].action = 'declared_winner';
        results[0].nextVariant = untested.length > 0 ? untested[0] : null;
      }
    } else {
      // No running test, check if we should start one
      const { data: waitingTests } = await supabase
        .from('auto_test_queue')
        .select('*')
        .eq('status', 'waiting')
        .order('priority', { ascending: true })
        .limit(1);

      if (waitingTests && waitingTests.length > 0) {
        const next = waitingTests[0];
        const variants = next.variants_to_test || [];
        const variantA = next.current_winner || variants[0];
        const variantB = variants.find((v: string) => v !== variantA);

        if (variantB) {
          console.log(`[Auto-Optimizer] Auto-starting test: ${next.element_type}/${next.element_id}`);
          
          await supabase
            .from('auto_test_queue')
            .update({
              status: 'testing',
              current_variant_a: variantA,
              current_variant_b: variantB
            })
            .eq('id', next.id);

          results.push({
            action: 'started_test',
            elementType: next.element_type,
            elementId: next.element_id,
            variantA,
            variantB
          });
        }
      } else {
        console.log('[Auto-Optimizer] No tests to run');
        results.push({ status: 'no_tests_available' });
      }
    }

    console.log('[Auto-Optimizer] Optimization check complete');

    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Auto-Optimizer] Error:', errorMessage);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
