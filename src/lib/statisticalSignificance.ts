// Statistical Significance Calculations for A/B Testing

// Normal distribution cumulative distribution function (CDF)
// Using the error function approximation
const erf = (x: number): number => {
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
};

// Standard normal CDF
const normalCDF = (x: number): number => {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
};

// Calculate Z-score for two proportions
export const calculateZScore = (
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number
): number => {
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
};

// Calculate p-value from Z-score (two-tailed test)
export const calculatePValue = (zScore: number): number => {
  return 2 * (1 - normalCDF(Math.abs(zScore)));
};

// Calculate confidence level (1 - p-value)
export const calculateConfidenceLevel = (pValue: number): number => {
  return (1 - pValue) * 100;
};

// Determine if result is statistically significant
export const isStatisticallySignificant = (
  pValue: number,
  significanceLevel: number = 0.05
): boolean => {
  return pValue < significanceLevel;
};

// Calculate confidence interval for a proportion
export const calculateConfidenceInterval = (
  conversions: number,
  visitors: number,
  confidenceLevel: number = 0.95
): { lower: number; upper: number } => {
  if (visitors === 0) return { lower: 0, upper: 0 };

  const p = conversions / visitors;
  
  // Z-score for confidence level (e.g., 1.96 for 95%)
  const zScores: Record<number, number> = {
    0.90: 1.645,
    0.95: 1.96,
    0.99: 2.576,
  };
  const z = zScores[confidenceLevel] || 1.96;

  const standardError = Math.sqrt((p * (1 - p)) / visitors);
  const margin = z * standardError;

  return {
    lower: Math.max(0, (p - margin) * 100),
    upper: Math.min(100, (p + margin) * 100),
  };
};

// Calculate relative lift (improvement)
export const calculateRelativeLift = (
  conversionRateA: number,
  conversionRateB: number
): number => {
  if (conversionRateA === 0) return 0;
  return ((conversionRateB - conversionRateA) / conversionRateA) * 100;
};

// Calculate required sample size for desired power
export const calculateRequiredSampleSize = (
  baselineConversionRate: number,
  minimumDetectableEffect: number, // relative change, e.g., 0.1 for 10%
  power: number = 0.8,
  significanceLevel: number = 0.05
): number => {
  // Z-scores for common values
  const zAlpha = significanceLevel === 0.05 ? 1.96 : significanceLevel === 0.01 ? 2.576 : 1.645;
  const zBeta = power === 0.8 ? 0.84 : power === 0.9 ? 1.28 : 0.52;

  const p1 = baselineConversionRate;
  const p2 = baselineConversionRate * (1 + minimumDetectableEffect);
  const pAvg = (p1 + p2) / 2;

  const n = (
    2 * Math.pow(zAlpha + zBeta, 2) * pAvg * (1 - pAvg)
  ) / Math.pow(p2 - p1, 2);

  return Math.ceil(n);
};

// Determine winner with confidence
export interface ABTestResult {
  winner: "A" | "B" | "none";
  confidence: number;
  isSignificant: boolean;
  pValue: number;
  zScore: number;
  relativeImprovement: number;
  recommendedAction: string;
  sampleSizeReached: boolean;
  requiredSampleSize: number;
}

export const analyzeABTest = (
  conversionsA: number,
  visitorsA: number,
  conversionsB: number,
  visitorsB: number,
  minimumDetectableEffect: number = 0.2, // 20% minimum improvement to detect
  significanceLevel: number = 0.05
): ABTestResult => {
  const conversionRateA = visitorsA > 0 ? conversionsA / visitorsA : 0;
  const conversionRateB = visitorsB > 0 ? conversionsB / visitorsB : 0;

  const zScore = calculateZScore(conversionsA, visitorsA, conversionsB, visitorsB);
  const pValue = calculatePValue(zScore);
  const confidence = calculateConfidenceLevel(pValue);
  const isSignificant = isStatisticallySignificant(pValue, significanceLevel);
  const relativeImprovement = calculateRelativeLift(conversionRateA, conversionRateB);

  // Calculate required sample size
  const baselineRate = Math.max(conversionRateA, conversionRateB, 0.01);
  const requiredSampleSize = calculateRequiredSampleSize(
    baselineRate,
    minimumDetectableEffect
  );
  const totalVisitors = visitorsA + visitorsB;
  const sampleSizeReached = totalVisitors >= requiredSampleSize * 2;

  // Determine winner
  let winner: "A" | "B" | "none" = "none";
  let recommendedAction = "";

  if (!sampleSizeReached) {
    recommendedAction = `Sammle mehr Daten. Mindestens ${requiredSampleSize} Besucher pro Variante empfohlen (aktuell: ${Math.min(visitorsA, visitorsB)}).`;
  } else if (isSignificant) {
    if (conversionRateB > conversionRateA) {
      winner = "B";
      recommendedAction = `Variante B ist der klare Gewinner mit ${confidence.toFixed(1)}% Konfidenz. Implementiere Variante B permanent.`;
    } else {
      winner = "A";
      recommendedAction = `Variante A ist der klare Gewinner mit ${confidence.toFixed(1)}% Konfidenz. Behalte die aktuelle Version bei.`;
    }
  } else if (confidence > 80) {
    recommendedAction = `Tendenz erkennbar (${confidence.toFixed(1)}% Konfidenz), aber noch nicht statistisch signifikant. Sammle weitere Daten.`;
  } else {
    recommendedAction = "Kein signifikanter Unterschied erkennbar. Teste weiter oder prüfe andere Metriken.";
  }

  return {
    winner,
    confidence,
    isSignificant,
    pValue,
    zScore,
    relativeImprovement,
    recommendedAction,
    sampleSizeReached,
    requiredSampleSize,
  };
};

// Power analysis - probability of detecting an effect
export const calculatePower = (
  sampleSizePerVariant: number,
  baselineConversionRate: number,
  minimumDetectableEffect: number,
  significanceLevel: number = 0.05
): number => {
  const p1 = baselineConversionRate;
  const p2 = baselineConversionRate * (1 + minimumDetectableEffect);
  const pPooled = (p1 + p2) / 2;
  
  const standardError = Math.sqrt(
    2 * pPooled * (1 - pPooled) / sampleSizePerVariant
  );
  
  if (standardError === 0) return 0;
  
  const zAlpha = significanceLevel === 0.05 ? 1.96 : significanceLevel === 0.01 ? 2.576 : 1.645;
  const effectSize = Math.abs(p2 - p1) / standardError;
  
  const zBeta = effectSize - zAlpha;
  
  return normalCDF(zBeta) * 100;
};
