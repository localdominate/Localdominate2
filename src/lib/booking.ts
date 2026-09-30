/**
 * "Book a 15-min call" destination.
 *
 * Set VITE_BOOKING_URL (e.g. a Cal.com event link) in the Vercel project's environment variables.
 * Until it is set, the button falls back to a pre-filled email so it never leads nowhere.
 */
const FALLBACK_MAILTO =
  "mailto:info@localdominate.org?subject=15-min%20call%20request&body=Hi%2C%20I%27d%20like%20to%20book%20a%2015-minute%20call.";

const configuredUrl = (import.meta.env.VITE_BOOKING_URL as string | undefined)?.trim();

export const BOOKING_URL: string =
  configuredUrl && /^https:\/\//.test(configuredUrl) ? configuredUrl : FALLBACK_MAILTO;

export const BOOKING_IS_EXTERNAL = BOOKING_URL.startsWith("https://");

export const BOOKING_LABEL = "Book a 15-min call";
