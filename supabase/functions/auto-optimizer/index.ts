import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting for security
const rateLimits = new Map<string, number[]>();
const RATE_LIMIT_MAX = 10; // 10 calls per hour
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimits.get(ip) || [];
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  recentTimestamps.push(now);
  rateLimits.set(ip, recentTimestamps);
  return true;
}

// Helper function to verify admin role
async function verifyAdminAccess(req: Request, supabase: any): Promise<{ authorized: boolean; error?: string }> {
  const authHeader = req.headers.get('Authorization');
  
  // If no auth header, check rate limit instead (for scheduled/cron calls)
  if (!authHeader) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return { authorized: false, error: 'Rate limit exceeded' };
    }
    return { authorized: true }; // Allow scheduled calls with rate limiting
  }

  // Verify JWT token
  const token = authHeader.replace('Bearer ', '');
  const { data: claims, error: claimsError } = await supabase.auth.getClaims(token);
  
  if (claimsError || !claims?.claims?.sub) {
    return { authorized: false, error: 'Invalid token' };
  }

  // Check admin role
  const { data: role } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', claims.claims.sub)
    .eq('role', 'admin')
    .single();

  if (!role) {
    return { authorized: false, error: 'Admin access required' };
  }

  return { authorized: true };
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

const TEST_REQUIREMENTS = {
  minViews: 100, // Reduced for faster testing cycles
  minConfidence: 95,
  minConversions: 3, // Minimum conversions per variant
  trafficSplitA: 50,
  trafficSplitB: 50
};

// =====================
// Statistical Functions
// =====================

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

function normalCDF(x: number): number {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

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

function calculatePValue(zScore: number): number {
  return 2 * (1 - normalCDF(Math.abs(zScore)));
}

// =====================
// Bayesian Analysis
// =====================

function gammaLn(z: number): number {
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
  ];

  if (z < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * z)) - gammaLn(1 - z);
  }

  z -= 1;
  let x = c[0];
  for (let i = 1; i < 9; i++) {
    x += c[i] / (z + i);
  }

  const t = z + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}

function sampleGamma(shape: number): number {
  if (shape < 1) {
    return sampleGamma(shape + 1) * Math.pow(Math.random(), 1 / shape);
  }

  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);

  while (true) {
    let x, v;
    do {
      const u1 = Math.random();
      const u2 = Math.random();
      x = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      v = 1 + c * x;
    } while (v <= 0);

    v = v * v * v;
    const u = Math.random();

    if (u < 1 - 0.0331 * (x * x) * (x * x)) {
      return d * v;
    }

    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) {
      return d * v;
    }
  }
}

function sampleBeta(alpha: number, beta: number): number {
  const gammaA = sampleGamma(alpha);
  const gammaB = sampleGamma(beta);
  return gammaA / (gammaA + gammaB);
}

function calculateBayesianProbability(
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number,
  simulations: number = 10000
): { probabilityBBeatsA: number; probabilityABeatsB: number } {
  const alphaA = 1 + conversionsA;
  const betaA = 1 + (visitorsA - conversionsA);
  const alphaB = 1 + conversionsB;
  const betaB = 1 + (visitorsB - conversionsB);

  let bWins = 0;

  for (let i = 0; i < simulations; i++) {
    const sampleA = sampleBeta(alphaA, betaA);
    const sampleB = sampleBeta(alphaB, betaB);
    if (sampleB > sampleA) bWins++;
  }

  return {
    probabilityBBeatsA: bWins / simulations,
    probabilityABeatsB: 1 - (bWins / simulations)
  };
}

// =====================
// Analysis Functions
// =====================

interface AnalysisResult {
  confidence: number;
  winner: 'A' | 'B' | null;
  pValue: number;
  zScore: number;
  isSignificant: boolean;
  relativeImprovement: number;
  bayesianProbA: number;
  bayesianProbB: number;
  recommendedAction: string;
}

function analyzeTest(
  viewsA: number, 
  conversionsA: number, 
  viewsB: number, 
  conversionsB: number
): AnalysisResult {
  const zScore = calculateZScore(conversionsA, viewsA, conversionsB, viewsB);
  const pValue = calculatePValue(zScore);
  const confidence = (1 - pValue) * 100;
  const isSignificant = pValue < 0.05;

  const rateA = viewsA > 0 ? conversionsA / viewsA : 0;
  const rateB = viewsB > 0 ? conversionsB / viewsB : 0;
  
  const relativeImprovement = rateA > 0 
    ? ((rateB - rateA) / rateA) * 100 
    : 0;

  // Bayesian analysis
  const bayesian = calculateBayesianProbability(conversionsA, viewsA, conversionsB, viewsB);

  let winner: 'A' | 'B' | null = null;
  let recommendedAction = 'Weiter Daten sammeln';

  // Use both frequentist and Bayesian for decision
  if (isSignificant && rateA !== rateB) {
    winner = rateA > rateB ? 'A' : 'B';
    recommendedAction = `Variante ${winner} implementieren (${confidence.toFixed(1)}% Konfidenz)`;
  } else if (Math.max(bayesian.probabilityABeatsB, bayesian.probabilityBBeatsA) >= 0.95) {
    winner = bayesian.probabilityABeatsB > bayesian.probabilityBBeatsA ? 'A' : 'B';
    const prob = Math.max(bayesian.probabilityABeatsB, bayesian.probabilityBBeatsA) * 100;
    recommendedAction = `Variante ${winner} implementieren (${prob.toFixed(1)}% Bayesian Wahrscheinlichkeit)`;
  } else if (Math.max(bayesian.probabilityABeatsB, bayesian.probabilityBBeatsA) >= 0.9) {
    const tendencyWinner = bayesian.probabilityABeatsB > bayesian.probabilityBBeatsA ? 'A' : 'B';
    recommendedAction = `Tendenz zu Variante ${tendencyWinner}, aber mehr Daten nötig`;
  }

  return { 
    confidence: Math.min(99.9, confidence), 
    winner, 
    pValue, 
    zScore, 
    isSignificant,
    relativeImprovement,
    bayesianProbA: bayesian.probabilityABeatsB,
    bayesianProbB: bayesian.probabilityBBeatsA,
    recommendedAction
  };
}

function meetsMinimumRequirements(
  viewsA: number,
  viewsB: number,
  conversionsA: number,
  conversionsB: number
): { met: boolean; reason?: string } {
  if (viewsA < TEST_REQUIREMENTS.minViews || viewsB < TEST_REQUIREMENTS.minViews) {
    return { 
      met: false, 
      reason: `Mehr Views nötig. A: ${viewsA}/${TEST_REQUIREMENTS.minViews}, B: ${viewsB}/${TEST_REQUIREMENTS.minViews}` 
    };
  }
  
  if (conversionsA + conversionsB === 0) {
    return { 
      met: false, 
      reason: 'Noch keine Conversions erfasst' 
    };
  }
  
  return { met: true };
}

// =====================
// Main Handler
// =====================

Deno.serve(async (req) => {
  console.log('[Auto-Optimizer] ========== START ==========');
  console.log('[Auto-Optimizer] Request method:', req.method);
  console.log('[Auto-Optimizer] Timestamp:', new Date().toISOString());

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('[Auto-Optimizer] Missing environment variables');
      throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify admin access or rate limit for scheduled calls
    const authCheck = await verifyAdminAccess(req, supabase);
    if (!authCheck.authorized) {
      console.log('[Auto-Optimizer] Authorization failed:', authCheck.error);
      return new Response(
        JSON.stringify({ error: authCheck.error }),
        { status: authCheck.error === 'Rate limit exceeded' ? 429 : 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('[Auto-Optimizer] Fetching running tests...');

    // Get current running test
    const { data: runningTests, error: testError } = await supabase
      .from('auto_test_queue')
      .select('*')
      .eq('status', 'testing')
      .limit(1);

    if (testError) {
      console.error('[Auto-Optimizer] Error fetching tests:', testError);
      throw testError;
    }

    console.log('[Auto-Optimizer] Running tests found:', runningTests?.length || 0);

    const results: any[] = [];

    if (runningTests && runningTests.length > 0) {
      const test = runningTests[0] as TestQueueItem;
      const testId = `auto_${test.element_type}_${test.element_id}`;
      
      console.log('[Auto-Optimizer] Analyzing test:', testId);
      console.log('[Auto-Optimizer] Variant A:', test.current_variant_a);
      console.log('[Auto-Optimizer] Variant B:', test.current_variant_b);

      // Get views for both variants
      const [viewsAResult, viewsBResult, conversionsAResult, conversionsBResult] = await Promise.all([
        supabase.from('ab_test_views').select('*', { count: 'exact', head: true })
          .eq('test_id', testId).eq('variant', 'A'),
        supabase.from('ab_test_views').select('*', { count: 'exact', head: true })
          .eq('test_id', testId).eq('variant', 'B'),
        supabase.from('analytics_conversions').select('*', { count: 'exact', head: true })
          .eq('ab_test_id', testId).eq('ab_variant_color', 'A'),
        supabase.from('analytics_conversions').select('*', { count: 'exact', head: true })
          .eq('ab_test_id', testId).eq('ab_variant_color', 'B')
      ]);

      const vA = viewsAResult.count || 0;
      const vB = viewsBResult.count || 0;
      const cA = conversionsAResult.count || 0;
      const cB = conversionsBResult.count || 0;
      const totalViews = vA + vB;

      console.log('[Auto-Optimizer] ========== STATS ==========');
      console.log(`[Auto-Optimizer] Views     - A: ${vA}, B: ${vB} (Total: ${totalViews})`);
      console.log(`[Auto-Optimizer] Conversions - A: ${cA}, B: ${cB}`);
      console.log(`[Auto-Optimizer] Conv Rate - A: ${vA > 0 ? ((cA / vA) * 100).toFixed(2) : 0}%, B: ${vB > 0 ? ((cB / vB) * 100).toFixed(2) : 0}%`);

      const analysis = analyzeTest(vA, cA, vB, cB);
      const requirements = meetsMinimumRequirements(vA, vB, cA, cB);

      console.log('[Auto-Optimizer] ========== ANALYSIS ==========');
      console.log(`[Auto-Optimizer] Confidence: ${analysis.confidence.toFixed(2)}%`);
      console.log(`[Auto-Optimizer] P-Value: ${analysis.pValue.toFixed(4)}`);
      console.log(`[Auto-Optimizer] Z-Score: ${analysis.zScore.toFixed(3)}`);
      console.log(`[Auto-Optimizer] Significant: ${analysis.isSignificant}`);
      console.log(`[Auto-Optimizer] Bayesian A: ${(analysis.bayesianProbA * 100).toFixed(1)}%, B: ${(analysis.bayesianProbB * 100).toFixed(1)}%`);
      console.log(`[Auto-Optimizer] Relative Improvement: ${analysis.relativeImprovement.toFixed(2)}%`);
      console.log(`[Auto-Optimizer] Winner: ${analysis.winner || 'none'}`);
      console.log(`[Auto-Optimizer] Requirements Met: ${requirements.met}`);
      if (!requirements.met) console.log(`[Auto-Optimizer] Reason: ${requirements.reason}`);
      console.log(`[Auto-Optimizer] Recommendation: ${analysis.recommendedAction}`);

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
        bayesianProbA: (analysis.bayesianProbA * 100).toFixed(1),
        bayesianProbB: (analysis.bayesianProbB * 100).toFixed(1),
        relativeImprovement: analysis.relativeImprovement.toFixed(2),
        winner: analysis.winner,
        totalViews,
        requirementsMet: requirements.met,
        requirementsReason: requirements.reason,
        recommendedAction: analysis.recommendedAction
      });

      // Check if we can declare a winner
      if (requirements.met && analysis.winner) {
        console.log('[Auto-Optimizer] ========== DECLARING WINNER ==========');
        console.log(`[Auto-Optimizer] Winner: ${analysis.winner} (${analysis.winner === 'A' ? test.current_variant_a : test.current_variant_b})`);

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
        const { error: upsertError } = await supabase
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
                bayesian_prob_a: analysis.bayesianProbA,
                bayesian_prob_b: analysis.bayesianProbB,
                views_a: vA,
                views_b: vB,
                conversions_a: cA,
                conversions_b: cB,
                relative_improvement: analysis.relativeImprovement,
                tested_at: new Date().toISOString()
              }
            ]
          }, { onConflict: 'element_type,element_id' });

        if (upsertError) {
          console.error('[Auto-Optimizer] Error upserting optimized element:', upsertError);
        } else {
          console.log('[Auto-Optimizer] Optimized element updated successfully');
        }

        // Update test queue
        const newTested = [...(test.tested_variants || []), test.current_variant_b];
        const allVariants = test.variants_to_test || [];
        const untested = allVariants.filter((v: string) => !newTested.includes(v) && v !== winningValue);

        console.log(`[Auto-Optimizer] Tested variants: ${newTested.join(', ')}`);
        console.log(`[Auto-Optimizer] Untested variants: ${untested.length > 0 ? untested.join(', ') : 'none'}`);

        if (untested.length === 0) {
          console.log('[Auto-Optimizer] All variants tested - marking as completed');
          
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

              results.push({
                action: 'started_next_test',
                elementType: next.element_type,
                elementId: next.element_id,
                variantA,
                variantB
              });
            }
          }
        } else {
          console.log(`[Auto-Optimizer] Continuing with next variant: ${untested[0]}`);
          
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
      console.log('[Auto-Optimizer] No running test found, checking for waiting tests...');
      
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
          console.log(`[Auto-Optimizer] Variant A: ${variantA}, Variant B: ${variantB}`);
          
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
        console.log('[Auto-Optimizer] No waiting tests available');
        results.push({ status: 'no_tests_available' });
      }
    }

    console.log('[Auto-Optimizer] ========== END ==========');
    console.log('[Auto-Optimizer] Results count:', results.length);

    return new Response(JSON.stringify({ 
      success: true, 
      results,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Auto-Optimizer] ========== ERROR ==========');
    console.error('[Auto-Optimizer] Error:', errorMessage);
    console.error('[Auto-Optimizer] Stack:', error instanceof Error ? error.stack : 'N/A');
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});