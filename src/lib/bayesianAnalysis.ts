/**
 * Bayesian A/B Test Analysis
 * 
 * Provides probability-based decisions instead of just p-values.
 * Uses Beta-Binomial model for conversion rate estimation.
 */

// Beta function approximation using Lanczos approximation for gamma
function gammaLn(z: number): number {
  const g = 7;
  const c = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
  ];

  if (z < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * z)) - gammaLn(1 - z);
  }

  z -= 1;
  let x = c[0];
  for (let i = 1; i < g + 2; i++) {
    x += c[i] / (z + i);
  }

  const t = z + g + 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}

function betaLn(a: number, b: number): number {
  return gammaLn(a) + gammaLn(b) - gammaLn(a + b);
}

// Beta distribution PDF
function betaPdf(x: number, alpha: number, beta: number): number {
  if (x <= 0 || x >= 1) return 0;
  const logPdf = (alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - x) - betaLn(alpha, beta);
  return Math.exp(logPdf);
}

// Monte Carlo simulation for probability that B beats A
function monteCarloSimulation(
  alphaA: number, betaA: number,
  alphaB: number, betaB: number,
  simulations: number = 100000
): { probabilityBBeatsA: number; samples: { a: number[]; b: number[] } } {
  let bWins = 0;
  const samplesA: number[] = [];
  const samplesB: number[] = [];

  for (let i = 0; i < simulations; i++) {
    // Sample from Beta distributions using inverse transform
    const sampleA = sampleBeta(alphaA, betaA);
    const sampleB = sampleBeta(alphaB, betaB);
    
    if (i < 1000) { // Store first 1000 samples for visualization
      samplesA.push(sampleA);
      samplesB.push(sampleB);
    }

    if (sampleB > sampleA) bWins++;
  }

  return {
    probabilityBBeatsA: bWins / simulations,
    samples: { a: samplesA, b: samplesB }
  };
}

// Sample from Beta distribution using rejection sampling
function sampleBeta(alpha: number, beta: number): number {
  // Use gamma distribution method for sampling
  const gammaA = sampleGamma(alpha);
  const gammaB = sampleGamma(beta);
  return gammaA / (gammaA + gammaB);
}

// Sample from Gamma distribution using Marsaglia and Tsang's method
function sampleGamma(shape: number): number {
  if (shape < 1) {
    return sampleGamma(shape + 1) * Math.pow(Math.random(), 1 / shape);
  }

  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);

  while (true) {
    let x, v;
    do {
      x = randomNormal();
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

// Box-Muller transform for normal random
function randomNormal(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

// Calculate expected loss
function calculateExpectedLoss(
  alphaA: number, betaA: number,
  alphaB: number, betaB: number,
  simulations: number = 50000
): { lossA: number; lossB: number } {
  let totalLossA = 0;
  let totalLossB = 0;

  for (let i = 0; i < simulations; i++) {
    const sampleA = sampleBeta(alphaA, betaA);
    const sampleB = sampleBeta(alphaB, betaB);

    // Loss if we pick A when B is better
    totalLossA += Math.max(0, sampleB - sampleA);
    // Loss if we pick B when A is better
    totalLossB += Math.max(0, sampleA - sampleB);
  }

  return {
    lossA: totalLossA / simulations,
    lossB: totalLossB / simulations
  };
}

// Calculate credible interval
function calculateCredibleInterval(
  alpha: number, 
  beta: number, 
  credibleLevel: number = 0.95
): { lower: number; upper: number; mean: number; mode: number } {
  const samples: number[] = [];
  const n = 10000;
  
  for (let i = 0; i < n; i++) {
    samples.push(sampleBeta(alpha, beta));
  }
  
  samples.sort((a, b) => a - b);
  
  const lowerIndex = Math.floor((1 - credibleLevel) / 2 * n);
  const upperIndex = Math.floor((1 + credibleLevel) / 2 * n);
  
  const mean = alpha / (alpha + beta);
  const mode = alpha > 1 && beta > 1 
    ? (alpha - 1) / (alpha + beta - 2) 
    : mean;

  return {
    lower: samples[lowerIndex],
    upper: samples[upperIndex],
    mean,
    mode
  };
}

export interface BayesianResult {
  // Probabilities
  probabilityBBeatsA: number;
  probabilityABeatsB: number;
  
  // Expected Loss (regret if choosing wrong variant)
  expectedLossA: number; // Loss if we choose A but B is better
  expectedLossB: number; // Loss if we choose B but A is better
  
  // Credible Intervals
  credibleIntervalA: { lower: number; upper: number; mean: number; mode: number };
  credibleIntervalB: { lower: number; upper: number; mean: number; mode: number };
  
  // Lift estimation
  expectedLift: number;
  liftCredibleInterval: { lower: number; upper: number };
  
  // Recommendation
  recommendedVariant: 'A' | 'B' | 'continue';
  recommendationStrength: 'strong' | 'moderate' | 'weak';
  recommendedAction: string;
  
  // Raw parameters for visualization
  posteriorA: { alpha: number; beta: number };
  posteriorB: { alpha: number; beta: number };
  
  // Samples for distribution visualization
  samples?: { a: number[]; b: number[] };
}

export interface BayesianConfig {
  // Prior parameters (uninformative by default)
  priorAlpha?: number;
  priorBeta?: number;
  
  // Decision thresholds
  minProbability?: number; // Minimum probability to declare winner (default: 0.95)
  maxExpectedLoss?: number; // Maximum acceptable expected loss (default: 0.001)
  
  // Simulation parameters
  simulations?: number;
}

/**
 * Run Bayesian A/B test analysis
 */
export function analyzeBayesian(
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number,
  config: BayesianConfig = {}
): BayesianResult {
  const {
    priorAlpha = 1, // Uniform prior
    priorBeta = 1,
    minProbability = 0.95,
    maxExpectedLoss = 0.001,
    simulations = 50000
  } = config;

  // Posterior parameters (Beta-Binomial conjugate update)
  const alphaA = priorAlpha + conversionsA;
  const betaA = priorBeta + (visitorsA - conversionsA);
  const alphaB = priorAlpha + conversionsB;
  const betaB = priorBeta + (visitorsB - conversionsB);

  // Run Monte Carlo simulation
  const mcResult = monteCarloSimulation(alphaA, betaA, alphaB, betaB, simulations);
  const probabilityBBeatsA = mcResult.probabilityBBeatsA;
  const probabilityABeatsB = 1 - probabilityBBeatsA;

  // Calculate expected loss
  const { lossA, lossB } = calculateExpectedLoss(alphaA, betaA, alphaB, betaB);

  // Calculate credible intervals
  const credibleIntervalA = calculateCredibleInterval(alphaA, betaA);
  const credibleIntervalB = calculateCredibleInterval(alphaB, betaB);

  // Calculate lift
  const expectedLift = ((credibleIntervalB.mean - credibleIntervalA.mean) / credibleIntervalA.mean) * 100;
  
  // Lift credible interval (simplified)
  const liftLower = ((credibleIntervalB.lower - credibleIntervalA.upper) / credibleIntervalA.mean) * 100;
  const liftUpper = ((credibleIntervalB.upper - credibleIntervalA.lower) / credibleIntervalA.mean) * 100;

  // Determine recommendation
  let recommendedVariant: 'A' | 'B' | 'continue' = 'continue';
  let recommendationStrength: 'strong' | 'moderate' | 'weak' = 'weak';
  let recommendedAction = 'Weiter Daten sammeln';

  if (probabilityABeatsB >= minProbability && lossB <= maxExpectedLoss) {
    recommendedVariant = 'A';
    recommendationStrength = probabilityABeatsB >= 0.99 ? 'strong' : 'moderate';
    recommendedAction = `Variante A implementieren (${(probabilityABeatsB * 100).toFixed(1)}% Wahrscheinlichkeit)`;
  } else if (probabilityBBeatsA >= minProbability && lossA <= maxExpectedLoss) {
    recommendedVariant = 'B';
    recommendationStrength = probabilityBBeatsA >= 0.99 ? 'strong' : 'moderate';
    recommendedAction = `Variante B implementieren (${(probabilityBBeatsA * 100).toFixed(1)}% Wahrscheinlichkeit)`;
  } else if (Math.max(probabilityABeatsB, probabilityBBeatsA) >= 0.9) {
    recommendedVariant = probabilityABeatsB > probabilityBBeatsA ? 'A' : 'B';
    recommendationStrength = 'weak';
    recommendedAction = `Tendenz zu ${recommendedVariant}, aber noch nicht signifikant`;
  }

  return {
    probabilityBBeatsA,
    probabilityABeatsB,
    expectedLossA: lossA,
    expectedLossB: lossB,
    credibleIntervalA,
    credibleIntervalB,
    expectedLift,
    liftCredibleInterval: { lower: liftLower, upper: liftUpper },
    recommendedVariant,
    recommendationStrength,
    recommendedAction,
    posteriorA: { alpha: alphaA, beta: betaA },
    posteriorB: { alpha: alphaB, beta: betaB },
    samples: mcResult.samples
  };
}

/**
 * Calculate the probability of reaching significance with more samples
 */
export function predictSignificance(
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number,
  additionalVisitors: number
): number {
  const rateA = visitorsA > 0 ? conversionsA / visitorsA : 0.02;
  const rateB = visitorsB > 0 ? conversionsB / visitorsB : 0.02;
  
  // Simple projection assuming same rates continue
  const projectedVisitorsA = visitorsA + additionalVisitors / 2;
  const projectedVisitorsB = visitorsB + additionalVisitors / 2;
  const projectedConversionsA = Math.round(projectedVisitorsA * rateA);
  const projectedConversionsB = Math.round(projectedVisitorsB * rateB);
  
  const result = analyzeBayesian(
    projectedConversionsA,
    projectedVisitorsA,
    projectedConversionsB,
    projectedVisitorsB
  );
  
  return Math.max(result.probabilityABeatsB, result.probabilityBBeatsA);
}

/**
 * Estimate sample size needed to reach target probability
 */
export function estimateSampleSize(
  currentConversionsA: number,
  currentVisitorsA: number,
  currentConversionsB: number,
  currentVisitorsB: number,
  targetProbability: number = 0.95
): number {
  let additionalSamples = 100;
  const maxIterations = 100;
  let iteration = 0;
  
  while (iteration < maxIterations) {
    const prob = predictSignificance(
      currentConversionsA,
      currentVisitorsA,
      currentConversionsB,
      currentVisitorsB,
      additionalSamples
    );
    
    if (prob >= targetProbability) {
      return additionalSamples;
    }
    
    additionalSamples += 100;
    iteration++;
  }
  
  return additionalSamples; // Return best estimate
}
