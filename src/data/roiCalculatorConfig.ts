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
  visibilityBoost: number;
  daysMultiplier: number; // How many days to multiply metric1 to get monthly value
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
    visibilityBoost: 0.15,
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
    visibilityBoost: 0.15,
    daysMultiplier: 4.33, // weeks per month
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
    visibilityBoost: 0.15,
    daysMultiplier: 1, // already per month
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
    visibilityBoost: 0.15,
    daysMultiplier: 22, // working days per month
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
    visibilityBoost: 0.15,
    daysMultiplier: 26, // days open per month
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
    visibilityBoost: 0.15,
    daysMultiplier: 12, // multiply by 12 for yearly value (LTV)
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
    visibilityBoost: 0.15,
    daysMultiplier: 1, // already per month
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
];
