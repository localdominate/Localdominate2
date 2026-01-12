/**
 * Multi-Armed Bandit Algorithms for A/B Testing
 * 
 * Implements Thompson Sampling, Epsilon-Greedy, and UCB1 for
 * adaptive traffic allocation during testing.
 */

export type BanditAlgorithm = 'thompson_sampling' | 'epsilon_greedy' | 'ucb1';

export interface BanditArm {
  id: string;
  successes: number; // conversions
  failures: number;  // non-conversions
  pulls: number;     // total views
}

export interface BanditConfig {
  algorithm: BanditAlgorithm;
  epsilon?: number;        // For epsilon-greedy (default: 0.1)
  priorAlpha?: number;     // For Thompson Sampling (default: 1)
  priorBeta?: number;      // For Thompson Sampling (default: 1)
  explorationFactor?: number; // For UCB1 (default: 2)
}

export interface BanditDecision {
  selectedArm: string;
  confidence: number;
  explorationMode: boolean;
  allProbabilities: Record<string, number>;
  trafficAllocation: Record<string, number>;
}

export interface BanditStats {
  expectedReward: Record<string, number>;
  confidenceIntervals: Record<string, { lower: number; upper: number }>;
  bestArm: string;
  regret: number;
  totalPulls: number;
}

// Sample from Beta distribution
function sampleBeta(alpha: number, beta: number): number {
  const gammaA = sampleGamma(alpha);
  const gammaB = sampleGamma(beta);
  return gammaA / (gammaA + gammaB);
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

function randomNormal(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

/**
 * Thompson Sampling - Probabilistic exploration/exploitation
 * 
 * Samples from posterior Beta distributions and selects the arm
 * with the highest sample. Naturally balances exploration/exploitation.
 */
export function thompsonSampling(
  arms: BanditArm[],
  config: BanditConfig
): BanditDecision {
  const { priorAlpha = 1, priorBeta = 1 } = config;
  
  const samples: Record<string, number> = {};
  
  // Sample from each arm's posterior
  for (const arm of arms) {
    const alpha = priorAlpha + arm.successes;
    const beta = priorBeta + arm.failures;
    samples[arm.id] = sampleBeta(alpha, beta);
  }
  
  // Select arm with highest sample
  let selectedArm = arms[0].id;
  let maxSample = samples[arms[0].id];
  
  for (const arm of arms) {
    if (samples[arm.id] > maxSample) {
      maxSample = samples[arm.id];
      selectedArm = arm.id;
    }
  }
  
  // Calculate selection probabilities via simulation
  const probabilities = calculateSelectionProbabilities(arms, config, 1000);
  
  // Determine if this is exploration or exploitation
  const expectedRewards = arms.map(a => 
    (priorAlpha + a.successes) / (priorAlpha + priorBeta + a.pulls)
  );
  const bestExpected = Math.max(...expectedRewards);
  const selectedIndex = arms.findIndex(a => a.id === selectedArm);
  const explorationMode = expectedRewards[selectedIndex] < bestExpected * 0.95;
  
  return {
    selectedArm,
    confidence: probabilities[selectedArm],
    explorationMode,
    allProbabilities: probabilities,
    trafficAllocation: probabilities // Thompson Sampling naturally allocates traffic
  };
}

/**
 * Epsilon-Greedy - Simple exploration strategy
 * 
 * Explores with probability epsilon, otherwise exploits best arm.
 */
export function epsilonGreedy(
  arms: BanditArm[],
  config: BanditConfig
): BanditDecision {
  const { epsilon = 0.1 } = config;
  
  // Calculate expected rewards
  const rewards: Record<string, number> = {};
  let bestArm = arms[0];
  let bestReward = 0;
  
  for (const arm of arms) {
    const reward = arm.pulls > 0 ? arm.successes / arm.pulls : 0;
    rewards[arm.id] = reward;
    
    if (reward > bestReward) {
      bestReward = reward;
      bestArm = arm;
    }
  }
  
  // Decide explore or exploit
  const explore = Math.random() < epsilon;
  let selectedArm: string;
  
  if (explore || bestReward === 0) {
    // Random selection
    const randomIndex = Math.floor(Math.random() * arms.length);
    selectedArm = arms[randomIndex].id;
  } else {
    // Exploit best arm
    selectedArm = bestArm.id;
  }
  
  // Calculate probabilities
  const probabilities: Record<string, number> = {};
  const explorationProb = epsilon / arms.length;
  
  for (const arm of arms) {
    probabilities[arm.id] = arm.id === bestArm.id
      ? (1 - epsilon) + explorationProb
      : explorationProb;
  }
  
  return {
    selectedArm,
    confidence: probabilities[selectedArm],
    explorationMode: explore,
    allProbabilities: probabilities,
    trafficAllocation: probabilities
  };
}

/**
 * UCB1 - Upper Confidence Bound
 * 
 * Selects arm with highest upper confidence bound.
 * Balances exploration through uncertainty estimation.
 */
export function ucb1(
  arms: BanditArm[],
  config: BanditConfig
): BanditDecision {
  const { explorationFactor = 2 } = config;
  
  const totalPulls = arms.reduce((sum, a) => sum + a.pulls, 0);
  
  // Handle cold start - pull each arm at least once
  const unpulledArm = arms.find(a => a.pulls === 0);
  if (unpulledArm) {
    const probabilities: Record<string, number> = {};
    arms.forEach(a => probabilities[a.id] = 1 / arms.length);
    
    return {
      selectedArm: unpulledArm.id,
      confidence: 0.5,
      explorationMode: true,
      allProbabilities: probabilities,
      trafficAllocation: probabilities
    };
  }
  
  // Calculate UCB values
  const ucbValues: Record<string, number> = {};
  let selectedArm = arms[0].id;
  let maxUcb = -Infinity;
  
  for (const arm of arms) {
    const avgReward = arm.successes / arm.pulls;
    const exploration = Math.sqrt((explorationFactor * Math.log(totalPulls)) / arm.pulls);
    const ucb = avgReward + exploration;
    
    ucbValues[arm.id] = ucb;
    
    if (ucb > maxUcb) {
      maxUcb = ucb;
      selectedArm = arm.id;
    }
  }
  
  // Normalize UCB values to probabilities
  const sumUcb = Object.values(ucbValues).reduce((a, b) => a + b, 0);
  const probabilities: Record<string, number> = {};
  
  for (const arm of arms) {
    probabilities[arm.id] = ucbValues[arm.id] / sumUcb;
  }
  
  return {
    selectedArm,
    confidence: probabilities[selectedArm],
    explorationMode: false,
    allProbabilities: probabilities,
    trafficAllocation: probabilities
  };
}

/**
 * Calculate selection probabilities via Monte Carlo simulation
 */
function calculateSelectionProbabilities(
  arms: BanditArm[],
  config: BanditConfig,
  simulations: number = 10000
): Record<string, number> {
  const { priorAlpha = 1, priorBeta = 1 } = config;
  
  const wins: Record<string, number> = {};
  arms.forEach(a => wins[a.id] = 0);
  
  for (let i = 0; i < simulations; i++) {
    let maxSample = -1;
    let winner = arms[0].id;
    
    for (const arm of arms) {
      const alpha = priorAlpha + arm.successes;
      const beta = priorBeta + arm.failures;
      const sample = sampleBeta(alpha, beta);
      
      if (sample > maxSample) {
        maxSample = sample;
        winner = arm.id;
      }
    }
    
    wins[winner]++;
  }
  
  const probabilities: Record<string, number> = {};
  arms.forEach(a => probabilities[a.id] = wins[a.id] / simulations);
  
  return probabilities;
}

/**
 * Main function to select arm based on algorithm
 */
export function selectArm(
  arms: BanditArm[],
  config: BanditConfig
): BanditDecision {
  switch (config.algorithm) {
    case 'thompson_sampling':
      return thompsonSampling(arms, config);
    case 'epsilon_greedy':
      return epsilonGreedy(arms, config);
    case 'ucb1':
      return ucb1(arms, config);
    default:
      return thompsonSampling(arms, config);
  }
}

/**
 * Calculate bandit statistics
 */
export function calculateBanditStats(
  arms: BanditArm[],
  config: BanditConfig
): BanditStats {
  const { priorAlpha = 1, priorBeta = 1 } = config;
  
  const expectedReward: Record<string, number> = {};
  const confidenceIntervals: Record<string, { lower: number; upper: number }> = {};
  let bestArm = arms[0].id;
  let bestReward = 0;
  let totalPulls = 0;
  
  for (const arm of arms) {
    const alpha = priorAlpha + arm.successes;
    const beta = priorBeta + arm.failures;
    
    // Expected reward (mean of Beta distribution)
    const mean = alpha / (alpha + beta);
    expectedReward[arm.id] = mean;
    
    // 95% credible interval
    const samples: number[] = [];
    for (let i = 0; i < 1000; i++) {
      samples.push(sampleBeta(alpha, beta));
    }
    samples.sort((a, b) => a - b);
    
    confidenceIntervals[arm.id] = {
      lower: samples[25],
      upper: samples[975]
    };
    
    if (mean > bestReward) {
      bestReward = mean;
      bestArm = arm.id;
    }
    
    totalPulls += arm.pulls;
  }
  
  // Estimate regret (simplified)
  let regret = 0;
  for (const arm of arms) {
    regret += (bestReward - expectedReward[arm.id]) * arm.pulls;
  }
  
  return {
    expectedReward,
    confidenceIntervals,
    bestArm,
    regret,
    totalPulls
  };
}

/**
 * Calculate optimal traffic allocation for A/B test
 * Uses Thompson Sampling probabilities as allocation weights
 */
export function calculateTrafficAllocation(
  arms: BanditArm[],
  config: BanditConfig,
  minAllocation: number = 0.1 // Minimum 10% to each arm
): Record<string, number> {
  const decision = selectArm(arms, config);
  const allocation = { ...decision.trafficAllocation };
  
  // Ensure minimum allocation
  let totalAdjustment = 0;
  
  for (const armId of Object.keys(allocation)) {
    if (allocation[armId] < minAllocation) {
      totalAdjustment += minAllocation - allocation[armId];
      allocation[armId] = minAllocation;
    }
  }
  
  // Redistribute from highest allocation
  if (totalAdjustment > 0) {
    const maxArm = Object.entries(allocation)
      .sort(([, a], [, b]) => b - a)[0][0];
    allocation[maxArm] -= totalAdjustment;
  }
  
  return allocation;
}

/**
 * Check if we should shift more traffic to winner
 */
export function shouldShiftTraffic(
  arms: BanditArm[],
  config: BanditConfig,
  confidenceThreshold: number = 0.95
): { shouldShift: boolean; winner: string | null; confidence: number } {
  const probabilities = calculateSelectionProbabilities(arms, config, 10000);
  
  // Find arm with highest probability
  let winner: string | null = null;
  let maxProb = 0;
  
  for (const [armId, prob] of Object.entries(probabilities)) {
    if (prob > maxProb) {
      maxProb = prob;
      winner = armId;
    }
  }
  
  return {
    shouldShift: maxProb >= confidenceThreshold,
    winner: maxProb >= confidenceThreshold ? winner : null,
    confidence: maxProb
  };
}
