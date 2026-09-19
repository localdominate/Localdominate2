import type { Language } from "@/i18n/translations";

// Currency configuration per language
const CURRENCY_CONFIG: Record<Language, {
  symbol: string;
  code: string;
  position: 'before' | 'after';
  locale: string;
  // Conversion rate from EUR base prices
  rate: number;
}> = {
  de: { symbol: '€', code: 'EUR', position: 'after', locale: 'de-DE', rate: 1 },
  en: { symbol: '€', code: 'EUR', position: 'before', locale: 'en-GB', rate: 1 },
  ar: { symbol: '$', code: 'USD', position: 'before', locale: 'ar-SA', rate: 1.1 },
};

export const getCurrencyConfig = (language: Language) => CURRENCY_CONFIG[language];

// Convert EUR base price to target currency (rounded)
export const convertPrice = (eurPrice: number, language: Language): number => {
  const config = CURRENCY_CONFIG[language];
  return Math.round(eurPrice * config.rate);
};

// Format a price with the correct currency symbol
export const formatPrice = (eurPrice: number, language: Language): string => {
  const config = CURRENCY_CONFIG[language];
  const converted = convertPrice(eurPrice, language);
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(converted);
};

// Get just the currency suffix for AnimatedPriceCounter
export const getCurrencySuffix = (language: Language): string => {
  const config = CURRENCY_CONFIG[language];
  return config.position === 'after' ? ` ${config.symbol}` : '';
};

export const getCurrencyPrefix = (language: Language): string => {
  const config = CURRENCY_CONFIG[language];
  return config.position === 'before' ? config.symbol : '';
};
