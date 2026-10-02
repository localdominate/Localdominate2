/**
 * Arithmetic behind the commission calculator on /industries. Pure functions, no defaults: every
 * number comes from the visitor. Nothing here is a forecast or a market figure.
 */

export type CommissionFieldId = "units" | "rate" | "occupancy" | "platformShare" | "commission";

export type CommissionValues = Record<CommissionFieldId, string>;

export const EMPTY_COMMISSION_VALUES: CommissionValues = {
  units: "",
  rate: "",
  occupancy: "",
  platformShare: "",
  commission: "",
};

type FieldRule = {
  /** Accepted notation. A comma or a dot may be used as the decimal sign. */
  pattern: RegExp;
  min: number;
  /** When true, the value must be greater than `min`, not equal to it. */
  exclusiveMin: boolean;
  max: number;
  error: string;
};

const RULES: Record<CommissionFieldId, FieldRule> = {
  units: {
    pattern: /^\d{1,5}$/,
    min: 1,
    exclusiveMin: false,
    max: 99999,
    error: "Enter a whole number of 1 or more, digits only.",
  },
  rate: {
    pattern: /^\d{1,6}([.,]\d{1,2})?$/,
    min: 0,
    exclusiveMin: true,
    max: 999999,
    error: "Enter an amount above 0, digits only, for example 140 or 139.50.",
  },
  occupancy: {
    pattern: /^\d{1,3}([.,]\d{1,2})?$/,
    min: 0,
    exclusiveMin: true,
    max: 100,
    error: "Enter a percentage above 0 and up to 100.",
  },
  platformShare: {
    pattern: /^\d{1,3}([.,]\d{1,2})?$/,
    min: 0,
    exclusiveMin: false,
    max: 100,
    error: "Enter a percentage from 0 to 100.",
  },
  commission: {
    pattern: /^\d{1,3}([.,]\d{1,2})?$/,
    min: 0,
    exclusiveMin: true,
    max: 100,
    error: "Enter a percentage above 0 and up to 100.",
  },
};

/** The number a field holds, or `null` while it is empty or not valid. */
export function parseCommissionField(id: CommissionFieldId, raw: string): number | null {
  const rule = RULES[id];
  const text = raw.trim();
  if (!rule.pattern.test(text)) return null;
  const value = Number(text.replace(",", "."));
  if (!Number.isFinite(value) || value > rule.max) return null;
  if (rule.exclusiveMin ? value <= rule.min : value < rule.min) return null;
  return value;
}

/** The message for a field that holds something that is not a valid number. Empty fields have none. */
export function commissionFieldError(id: CommissionFieldId, raw: string): string | null {
  if (raw.trim() === "") return null;
  return parseCommissionField(id, raw) === null ? RULES[id].error : null;
}

export type CommissionResult = {
  roomNights: number;
  platformRevenue: number;
  commissionPaid: number;
  /** Commission kept for each percentage point of all bookings that moves from platform to direct. */
  keptPerPoint: number;
  /** False when the platform share is below one point, so there is no point left to move. */
  hasPointToMove: boolean;
};

export const NIGHTS_PER_YEAR = 365;

/** The result, or `null` until all five fields are valid. */
export function commissionResult(values: CommissionValues): CommissionResult | null {
  const units = parseCommissionField("units", values.units);
  const rate = parseCommissionField("rate", values.rate);
  const occupancy = parseCommissionField("occupancy", values.occupancy);
  const platformShare = parseCommissionField("platformShare", values.platformShare);
  const commission = parseCommissionField("commission", values.commission);
  if (units === null || rate === null || occupancy === null || platformShare === null || commission === null) {
    return null;
  }
  const roomNights = units * NIGHTS_PER_YEAR * (occupancy / 100);
  const revenue = roomNights * rate;
  const platformRevenue = revenue * (platformShare / 100);
  return {
    roomNights,
    platformRevenue,
    commissionPaid: platformRevenue * (commission / 100),
    keptPerPoint: revenue * 0.01 * (commission / 100),
    hasPointToMove: platformShare >= 1,
  };
}

const WHOLE = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 });

/** Whole numbers with thousands separators, the same notation as the prices on /services. */
export const formatWhole = (value: number): string => WHOLE.format(Math.round(value));
export const formatEuro = (value: number): string => `${formatWhole(value)} €`;
