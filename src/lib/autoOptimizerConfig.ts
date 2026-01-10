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

// Color mappings for CTA variants to button variants
export const CTA_COLOR_VARIANTS: Record<string, 'cta' | 'ctaGreen' | 'ctaOrange' | 'ctaPurple' | 'ctaRed'> = {
  primary: 'cta',
  green: 'ctaGreen',
  orange: 'ctaOrange',
  purple: 'ctaPurple',
  red: 'ctaRed'
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

// Price display variants
export const PRICE_DISPLAY_VARIANTS: Record<string, { de: string; en: string }> = {
  standard: {
    de: '299€ (einmalig)',
    en: '€299 (one-time)'
  },
  daily: {
    de: 'Unter 1€ pro Tag',
    en: 'Less than €1 per day'
  },
  savings: {
    de: 'Du sparst 1.201€',
    en: 'You save €1,201'
  },
  comparison: {
    de: '6x günstiger als Agentur',
    en: '6x cheaper than agency'
  },
  roi: {
    de: 'ROI innerhalb 30 Tagen',
    en: 'ROI within 30 days'
  }
};

// Urgency type variants
export const URGENCY_VARIANTS: Record<string, { de: string; en: string }> = {
  countdown: {
    de: '⏰ Angebot endet in',
    en: '⏰ Offer ends in'
  },
  spots: {
    de: '🔥 NUR NOCH 7 PLÄTZE DIESEN MONAT',
    en: '🔥 ONLY 7 SPOTS LEFT THIS MONTH'
  },
  time_limited: {
    de: '⚡ Limitiertes Angebot – nur noch heute',
    en: '⚡ Limited offer – today only'
  },
  social: {
    de: '👥 12 Kunden haben heute gebucht',
    en: '👥 12 customers booked today'
  },
  none: {
    de: '',
    en: ''
  }
};

// Trust position variants
export type TrustPosition = 'hero' | 'after_pain' | 'before_cta' | 'floating' | 'multiple';

// Minimum requirements for test completion
export const TEST_REQUIREMENTS = {
  minViews: 200, // Reduced from 1000 for faster results
  minConfidence: 95,
  trafficSplitA: 50, // Changed to 50/50 for balanced testing
  trafficSplitB: 50,
  cooldownDays: 14, // Reduced cooldown
  minConversions: 5, // Minimum conversions per variant
  minDetectableEffect: 0.2, // 20% minimum effect to detect
  power: 0.8 // Statistical power target
};
