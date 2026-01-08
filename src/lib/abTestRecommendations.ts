export interface ABTestRecommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  action: string;
  testId?: string;
}

interface TestStats {
  views: Record<string, number>;
  conversions: Record<string, number>;
  conversionRates: Record<string, number>;
  confidence: number;
  winner: string | null;
  sampleSize: number;
}

export function generateRecommendations(
  stats: Record<string, TestStats>
): ABTestRecommendation[] {
  const recommendations: ABTestRecommendation[] = [];

  Object.entries(stats).forEach(([testId, testStats]) => {
    const { confidence, winner, sampleSize, conversionRates } = testStats;

    // High confidence winner found
    if (confidence >= 95 && winner) {
      const winningRate = conversionRates[winner]?.toFixed(1) || '0';
      recommendations.push({
        id: `implement_${testId}`,
        priority: 'high',
        title: `Gewinner für "${testId}" implementieren`,
        description: `Die Variante "${winner}" hat mit ${winningRate}% Conversion-Rate gewonnen (${confidence}% Konfidenz).`,
        action: `Implementiere "${winner}" als Standard`,
        testId
      });
    }
    // Approaching significance
    else if (confidence >= 80 && confidence < 95) {
      recommendations.push({
        id: `continue_${testId}`,
        priority: 'medium',
        title: `Test "${testId}" weiter laufen lassen`,
        description: `${confidence}% Konfidenz erreicht. Noch ${Math.ceil((1000 - sampleSize) * 0.5)} Views für statistische Signifikanz nötig.`,
        action: 'Weiter testen',
        testId
      });
    }
    // Not enough data
    else if (sampleSize < 100) {
      recommendations.push({
        id: `traffic_${testId}`,
        priority: 'low',
        title: `Mehr Traffic für "${testId}" benötigt`,
        description: `Nur ${sampleSize} Impressionen. Mindestens 100 pro Variante für erste Erkenntnisse.`,
        action: 'Traffic erhöhen',
        testId
      });
    }
    // No significant difference
    else if (sampleSize > 500 && confidence < 60) {
      const rates = Object.values(conversionRates);
      const diff = Math.max(...rates) - Math.min(...rates);
      if (diff < 3) {
        recommendations.push({
          id: `stop_${testId}`,
          priority: 'medium',
          title: `Test "${testId}" beenden`,
          description: `Nach ${sampleSize} Impressionen kein signifikanter Unterschied (${diff.toFixed(1)}% Differenz). Ressourcen für anderen Test nutzen.`,
          action: 'Test beenden',
          testId
        });
      }
    }
  });

  // Add general recommendations
  if (Object.keys(stats).length === 0) {
    recommendations.push({
      id: 'start_testing',
      priority: 'high',
      title: 'Ersten A/B-Test starten',
      description: 'Noch keine aktiven Tests. Beginne mit CTA-Farben oder Headlines.',
      action: 'Test erstellen'
    });
  }

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return recommendations;
}

export const testIdeas: ABTestRecommendation[] = [
  {
    id: 'idea_headline',
    priority: 'medium',
    title: 'Headline-Varianten testen',
    description: 'Verschiedene Value Propositions in der Hauptüberschrift testen.',
    action: 'Emotionale vs. rationale Headlines'
  },
  {
    id: 'idea_price',
    priority: 'high',
    title: 'Preis-Darstellung testen',
    description: '299€ einmalig vs. "weniger als 10€/Tag" vs. "Spart 2.000€/Jahr".',
    action: 'Preisanker-Strategien vergleichen'
  },
  {
    id: 'idea_social_proof',
    priority: 'medium',
    title: 'Social Proof Position',
    description: 'Bewertungen oben vs. unten vs. im CTA-Bereich.',
    action: 'Position der Trust-Elemente optimieren'
  },
  {
    id: 'idea_urgency',
    priority: 'low',
    title: 'Urgency-Elemente testen',
    description: 'Countdown vs. "Nur noch X Plätze" vs. keine Verknappung.',
    action: 'Scarcity-Taktiken vergleichen'
  },
  {
    id: 'idea_form_length',
    priority: 'medium',
    title: 'Formular-Länge testen',
    description: 'Kurzes Formular (nur E-Mail) vs. vollständiges Formular.',
    action: 'Lead-Qualität vs. Quantity'
  },
  {
    id: 'idea_cta_text',
    priority: 'high',
    title: 'CTA-Text testen',
    description: '"Jetzt starten" vs. "Kostenlos testen" vs. "Angebot sichern".',
    action: 'Button-Text optimieren'
  },
  {
    id: 'idea_exit_timing',
    priority: 'low',
    title: 'Exit-Intent Timing',
    description: 'Sofort vs. nach 30 Sekunden vs. nach 50% Scroll.',
    action: 'Popup-Timing optimieren'
  },
  {
    id: 'idea_mobile_cta',
    priority: 'high',
    title: 'Mobile Sticky CTA',
    description: 'Sticky Footer vs. Floating Button vs. nur im Content.',
    action: 'Mobile Conversion optimieren'
  }
];

export function getBlogCTAAnalysis(conversions: Array<{
  blog_article_slug: string | null;
  blog_cta_position: string | null;
  blog_cta_variant: string | null;
}>) {
  const analysis: Record<string, {
    blue: { intro: number; middle: number; end: number };
    red: { intro: number; middle: number; end: number };
    total: number;
    winner: string | null;
  }> = {};

  conversions.forEach(c => {
    if (!c.blog_article_slug || !c.blog_cta_position || !c.blog_cta_variant) return;

    if (!analysis[c.blog_article_slug]) {
      analysis[c.blog_article_slug] = {
        blue: { intro: 0, middle: 0, end: 0 },
        red: { intro: 0, middle: 0, end: 0 },
        total: 0,
        winner: null
      };
    }

    const variant = c.blog_cta_variant as 'blue' | 'red';
    const position = c.blog_cta_position as 'intro' | 'middle' | 'end';

    if (analysis[c.blog_article_slug][variant] && analysis[c.blog_article_slug][variant][position] !== undefined) {
      analysis[c.blog_article_slug][variant][position]++;
      analysis[c.blog_article_slug].total++;
    }
  });

  // Determine winners
  Object.keys(analysis).forEach(slug => {
    const blueTotal = Object.values(analysis[slug].blue).reduce((a, b) => a + b, 0);
    const redTotal = Object.values(analysis[slug].red).reduce((a, b) => a + b, 0);
    
    if (analysis[slug].total >= 20) {
      if (blueTotal > redTotal * 1.2) analysis[slug].winner = 'blue';
      else if (redTotal > blueTotal * 1.2) analysis[slug].winner = 'red';
    }
  });

  return analysis;
}
