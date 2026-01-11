import { Database } from "@/integrations/supabase/types";

type BusinessCategory = Database["public"]["Enums"]["business_category"];

export interface ROIBranchConfig {
  id: BusinessCategory;
  name: { de: string; en: string };
  icon: string;
  customerTerm: { de: string; en: string };
  metric1: {
    label: { de: string; en: string };
    unit: 'day' | 'week' | 'month';
    min: number;
    max: number;
    step: number;
    default: number;
  };
  metric2: {
    label: { de: string; en: string };
    min: number;
    max: number;
    step: number;
    default: number;
  };
  visibilityBoost: {
    conservative: number;
    realistic: number;
    optimistic: number;
  };
  profitMargin: number;
  monthlyMarketingAlternative: number;
  daysMultiplier: number;
}

export const roiBranchConfigs: Record<BusinessCategory, ROIBranchConfig> = {
  gastronomy: {
    id: 'gastronomy',
    name: { de: 'Gastronomie', en: 'Gastronomy' },
    icon: '🍽️',
    customerTerm: { de: 'Gäste', en: 'Guests' },
    metric1: {
      label: { de: 'Durchschnittliche Gäste pro Tag', en: 'Average guests per day' },
      unit: 'day',
      min: 20,
      max: 200,
      step: 5,
      default: 75,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Bon-Wert', en: 'Average ticket value' },
      min: 15,
      max: 80,
      step: 5,
      default: 35,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.25,
    monthlyMarketingAlternative: 800,
    daysMultiplier: 30,
  },
  beauty_wellness: {
    id: 'beauty_wellness',
    name: { de: 'Beauty & Wellness', en: 'Beauty & Wellness' },
    icon: '💇',
    customerTerm: { de: 'Kunden', en: 'Clients' },
    metric1: {
      label: { de: 'Termine pro Woche', en: 'Appointments per week' },
      unit: 'week',
      min: 20,
      max: 150,
      step: 5,
      default: 50,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Behandlungspreis', en: 'Average treatment price' },
      min: 30,
      max: 150,
      step: 10,
      default: 60,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.45,
    monthlyMarketingAlternative: 600,
    daysMultiplier: 4.33,
  },
  crafts: {
    id: 'crafts',
    name: { de: 'Handwerk', en: 'Crafts' },
    icon: '🔧',
    customerTerm: { de: 'Aufträge', en: 'Orders' },
    metric1: {
      label: { de: 'Aufträge pro Monat', en: 'Orders per month' },
      unit: 'month',
      min: 5,
      max: 50,
      step: 1,
      default: 15,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Auftragswert', en: 'Average order value' },
      min: 200,
      max: 2000,
      step: 50,
      default: 500,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.30,
    monthlyMarketingAlternative: 1000,
    daysMultiplier: 1,
  },
  health: {
    id: 'health',
    name: { de: 'Gesundheit', en: 'Health' },
    icon: '🏥',
    customerTerm: { de: 'Patienten', en: 'Patients' },
    metric1: {
      label: { de: 'Patienten pro Tag', en: 'Patients per day' },
      unit: 'day',
      min: 10,
      max: 80,
      step: 5,
      default: 30,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Behandlungswert', en: 'Average treatment value' },
      min: 50,
      max: 300,
      step: 10,
      default: 100,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.40,
    monthlyMarketingAlternative: 1200,
    daysMultiplier: 22,
  },
  retail: {
    id: 'retail',
    name: { de: 'Einzelhandel', en: 'Retail' },
    icon: '🛒',
    customerTerm: { de: 'Kunden', en: 'Customers' },
    metric1: {
      label: { de: 'Kunden pro Tag', en: 'Customers per day' },
      unit: 'day',
      min: 20,
      max: 300,
      step: 10,
      default: 80,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Einkaufswert', en: 'Average purchase value' },
      min: 20,
      max: 100,
      step: 5,
      default: 45,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.30,
    monthlyMarketingAlternative: 700,
    daysMultiplier: 26,
  },
  fitness: {
    id: 'fitness',
    name: { de: 'Fitness', en: 'Fitness' },
    icon: '🏋️',
    customerTerm: { de: 'Mitglieder', en: 'Members' },
    metric1: {
      label: { de: 'Neue Mitglieder pro Monat', en: 'New members per month' },
      unit: 'month',
      min: 10,
      max: 100,
      step: 5,
      default: 30,
    },
    metric2: {
      label: { de: 'Monatsbeitrag', en: 'Monthly fee' },
      min: 20,
      max: 80,
      step: 5,
      default: 40,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.65,
    monthlyMarketingAlternative: 900,
    daysMultiplier: 12,
  },
  services: {
    id: 'services',
    name: { de: 'Dienstleistungen', en: 'Services' },
    icon: '📋',
    customerTerm: { de: 'Kunden', en: 'Clients' },
    metric1: {
      label: { de: 'Aufträge pro Monat', en: 'Orders per month' },
      unit: 'month',
      min: 5,
      max: 50,
      step: 1,
      default: 15,
    },
    metric2: {
      label: { de: 'Durchschnittliches Honorar', en: 'Average fee' },
      min: 100,
      max: 1000,
      step: 50,
      default: 300,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.50,
    monthlyMarketingAlternative: 1100,
    daysMultiplier: 1,
  },
  legal: {
    id: 'legal',
    name: { de: 'Recht & Kanzlei', en: 'Law & Legal' },
    icon: '⚖️',
    customerTerm: { de: 'Mandate', en: 'Cases' },
    metric1: {
      label: { de: 'Neue Mandate pro Monat', en: 'New cases per month' },
      unit: 'month',
      min: 5,
      max: 50,
      step: 1,
      default: 12,
    },
    metric2: {
      label: { de: 'Durchschnittlicher Mandatswert', en: 'Average case value' },
      min: 500,
      max: 5000,
      step: 100,
      default: 1500,
    },
    visibilityBoost: { conservative: 0.08, realistic: 0.15, optimistic: 0.25 },
    profitMargin: 0.55,
    monthlyMarketingAlternative: 1500,
    daysMultiplier: 1,
  },
};

export const branchOrder: BusinessCategory[] = [
  'gastronomy',
  'beauty_wellness',
  'crafts',
  'health',
  'retail',
  'fitness',
  'services',
  'legal',
];

export type ScenarioType = 'conservative' | 'realistic' | 'optimistic';
