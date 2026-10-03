/**
 * Central dates for structured data. One fixed string per value, never `Date.now()` or a
 * computed date: the prerendered HTML and the hydrated page must emit the same JSON-LD.
 *
 * Bump `SEO_DATE_MODIFIED` when the visible content of a main page changes in a way a reader
 * would notice (new offer, new price, new section). Format: ISO 8601 date.
 */
export const SEO_DATE_MODIFIED = "2026-10-03";
