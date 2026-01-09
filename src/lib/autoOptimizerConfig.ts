// Configuration for all testable elements in the auto-optimizer system

export interface TestableElement {
  elementType: string;
  elementId: string;
  variants: string[];
  description: string;
  priority: number;
}

export const TESTABLE_ELEMENTS: TestableElement[] = [
  {
    elementType: 'cta_color',
    elementId: 'all_ctas',
    variants: ['primary', 'green', 'orange', 'purple', 'red'],
    description: 'CTA Button Farbe',
    priority: 1
  },
  {
    elementType: 'cta_text',
    elementId: 'hero_cta',
    variants: ['Jetzt Local SEO Audit sichern', 'Kostenlos starten', 'Platz sichern', 'Jetzt durchstarten', 'Angebot sichern'],
    description: 'Hero CTA Text',
    priority: 2
  },
  {
    elementType: 'cta_text',
    elementId: 'offer_cta',
    variants: ['Jetzt Local SEO Audit sichern', 'Audit starten', 'Platz sichern', 'Jetzt kaufen', 'Angebot nutzen'],
    description: 'Angebot CTA Text',
    priority: 3
  },
  {
    elementType: 'headline_style',
    elementId: 'hero',
    variants: ['emotional', 'rational', 'question', 'benefit', 'fear'],
    description: 'Hero Headline Stil',
    priority: 4
  },
  {
    elementType: 'price_display',
    elementId: 'offer',
    variants: ['standard', 'daily', 'savings', 'comparison', 'roi'],
    description: 'Preis-Darstellung',
    priority: 5
  },
  {
    elementType: 'urgency_type',
    elementId: 'hero',
    variants: ['countdown', 'spots', 'time_limited', 'social', 'none'],
    description: 'Dringlichkeits-Typ',
    priority: 6
  },
  {
    elementType: 'trust_position',
    elementId: 'global',
    variants: ['hero', 'after_pain', 'before_cta', 'floating', 'multiple'],
    description: 'Trust-Badge Position',
    priority: 7
  }
];

// Color mappings for CTA variants
export const CTA_COLOR_CLASSES: Record<string, string> = {
  primary: 'bg-primary hover:bg-primary/90',
  green: 'bg-green-600 hover:bg-green-700',
  orange: 'bg-orange-500 hover:bg-orange-600',
  purple: 'bg-purple-600 hover:bg-purple-700',
  red: 'bg-red-600 hover:bg-red-700'
};

// Headline variants content
export const HEADLINE_VARIANTS: Record<string, { de: string; en: string }> = {
  emotional: {
    de: 'Werden Sie endlich von lokalen Kunden gefunden',
    en: 'Finally get found by local customers'
  },
  rational: {
    de: 'Local SEO Audit: Ihre Website für Google Maps optimieren',
    en: 'Local SEO Audit: Optimize your website for Google Maps'
  },
  question: {
    de: 'Warum finden Kunden Ihre Konkurrenz, aber nicht Sie?',
    en: 'Why do customers find your competitors, but not you?'
  },
  benefit: {
    de: 'Mehr Kunden, mehr Umsatz: Ihr Local SEO Fahrplan',
    en: 'More customers, more revenue: Your Local SEO roadmap'
  },
  fear: {
    de: 'Verlieren Sie täglich Kunden an Ihre Konkurrenz?',
    en: 'Are you losing customers to your competitors every day?'
  }
};

// Minimum requirements for test completion
export const TEST_REQUIREMENTS = {
  minViews: 1000,
  minConfidence: 95,
  trafficSplitA: 75,
  trafficSplitB: 25,
  cooldownDays: 30
};
