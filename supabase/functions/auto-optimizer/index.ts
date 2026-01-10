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
  minViews: 200, // Reduced for faster results
  minConfidence: 95,
  minConversions: 5, // Minimum conversions per variant
  trafficSplitA: 50,
  trafficSplitB: 50
};

// Error function for normal distribution
function erf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

// Standard normal CDF
function normalCDF(x: number): number {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

// Calculate Z-score for two proportions
function calculateZScore(
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number
): number {
  if (visitorsA === 0 || visitorsB === 0) return 0;

  const pA = conversionsA / visitorsA;
  const pB = conversionsB / visitorsB;
  const pPooled = (conversionsA + conversionsB) / (visitorsA + visitorsB);
  
  if (pPooled === 0 || pPooled === 1) return 0;

  const standardError = Math.sqrt(
    pPooled * (1 - pPooled) * (1 / visitorsA + 1 / visitorsB)
  );

  if (standardError === 0) return 0;

  return (pA - pB) / standardError;
}

// Calculate p-value from Z-score
function calculatePValue(zScore: number): number {
  return 2 * (1 - normalCDF(Math.abs(zScore)));
}

// Full statistical analysis
function analyzeTest(
  viewsA: number, 
  conversionsA: number, 
  viewsB: number, 
  conversionsB: number
): { 
  confidence: number; 
  winner: 'A' | 'B' | null;
  pValue: number;
  zScore: number;
  isSignificant: boolean;
  relativeImprovement: number;
} {
  const zScore = calculateZScore(conversionsA, viewsA, conversionsB, viewsB);
  const pValue = calculatePValue(zScore);
  const confidence = (1 - pValue) * 100;
  const isSignificant = pValue < 0.05;

  const rateA = viewsA > 0 ? conversionsA / viewsA : 0;
  const rateB = viewsB > 0 ? conversionsB / viewsB : 0;
  
  const relativeImprovement = rateA > 0 
    ? ((rateB - rateA) / rateA) * 100 
    : 0;

  let winner: 'A' | 'B' | null = null;
  if (isSignificant && rateA !== rateB) {
    winner = rateA > rateB ? 'A' : 'B';
  }

  return { 
    confidence: Math.min(99.9, confidence), 
    winner, 
    pValue, 
    zScore, 
    isSignificant,
    relativeImprovement
  };
}

// Check if minimum requirements are met
function meetsMinimumRequirements(
  viewsA: number,
  viewsB: number,
  conversionsA: number,
  conversionsB: number
): { met: boolean; reason?: string } {
  if (viewsA < TEST_REQUIREMENTS.minViews || viewsB < TEST_REQUIREMENTS.minViews) {
    return { 
      met: false, 
      reason: `Need more views. A: ${viewsA}/${TEST_REQUIREMENTS.minViews}, B: ${viewsB}/${TEST_REQUIREMENTS.minViews}` 
    };
  }
  
  // Relaxed conversion requirement - only check if we have any conversions total
  if (conversionsA + conversionsB === 0) {
    return { 
      met: false, 
      reason: 'No conversions recorded yet' 
    };
  }
  
  return { met: true };
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

      console.log(`[Auto-Optimizer] Stats - Views A: ${vA}, B: ${vB} | Conversions A: ${cA}, B: ${cB}`);

      const analysis = analyzeTest(vA, cA, vB, cB);
      const requirements = meetsMinimumRequirements(vA, vB, cA, cB);

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
        conversionRateA: vA > 0 ? ((cA / vA) * 100).toFixed(2) : 0,
        conversionRateB: vB > 0 ? ((cB / vB) * 100).toFixed(2) : 0,
        confidence: analysis.confidence.toFixed(2),
        pValue: analysis.pValue.toFixed(4),
        zScore: analysis.zScore.toFixed(3),
        isSignificant: analysis.isSignificant,
        relativeImprovement: analysis.relativeImprovement.toFixed(2),
        winner: analysis.winner,
        totalViews,
        requirementsMet: requirements.met,
        requirementsReason: requirements.reason
      });

      // Check if we can declare a winner
      if (requirements.met && analysis.isSignificant && analysis.winner) {
        console.log(`[Auto-Optimizer] Test complete! Winner: ${analysis.winner} with ${analysis.confidence.toFixed(1)}% confidence`);

        const winningValue = analysis.winner === 'A' ? test.current_variant_a : test.current_variant_b;

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
                confidence: analysis.confidence,
                p_value: analysis.pValue,
                z_score: analysis.zScore,
                views_a: vA,
                views_b: vB,
                conversions_a: cA,
                conversions_b: cB,
                relative_improvement: analysis.relativeImprovement,
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
      } else {
        results[0].action = 'collecting_data';
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