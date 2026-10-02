import type { PillarId } from "@/data/v4PillarIndex";

/**
 * Home-only copy. Kept apart from v4Pillars.ts (the long step-page copy), so the home page does
 * not load that file.
 */

/** One deliverable per step, taken from `produces` in v4Pillars.ts. Keep the two in sync. */
export const STEP_OUTPUT: Record<PillarId, string> = {
  diagnose: "A written summary of findings, ranked by effect and effort",
  position: "A one-page positioning statement: audience, promise, proof and tone",
  create: "Page and flow designs that are ready to build",
  build: "A working site or store on your domain and accounts",
  launch: "A launch plan with channels, budget and dates",
  grow: "A ranked list of changes, live and documented",
  scale: "A pilot plan for the next market, with a clear stop rule",
};

/** The hand-overs between the five jobs: questions, not claims. */
export const HANDOVERS = [
  { from: "Strategy", to: "Brand", question: "Does the brand say what the strategy decided?" },
  { from: "Brand", to: "Website", question: "Does the website make the same promise as the brand?" },
  { from: "Website", to: "Marketing", question: "Do the campaigns lead to a page that can turn a visit into a booking?" },
  { from: "Marketing", to: "Data", question: "Is it measured which channel brings bookings or orders?" },
  { from: "Data", to: "Strategy", question: "Do the numbers change the next decision?" },
] as const;

/** The four kinds of business the site addresses (claude/LocalDominate_Zielgruppen-Definition.md). */
export const WORLDS = [
  {
    anchor: "hospitality",
    title: "Hotels and guesthouses",
    body: "A hotel needs direct bookings, not just visits. We judge the website by the bookings it produces.",
  },
  {
    anchor: "holiday-rentals",
    title: "Holiday rentals",
    body: "Hosts with several properties pay commission on every platform booking. An own booking page gives guests a direct way to book.",
  },
  {
    anchor: "trades",
    title: "Trades",
    body: "Most jobs come by recommendation. The Google profile and the website are where a recommended business gets checked.",
  },
  {
    anchor: "premium-services",
    title: "Premium local services",
    body: "A considered purchase needs credibility before the first contact. Proof comes before the pitch.",
  },
] as const;

/** Offer ids (v4Offers.ts) in the order the hero panel lists them: largest scope first. */
export const HERO_OFFER_ORDER = ["website-5-days", "conversion-sprint", "ai-automation-starter", "google-profile"] as const;

/** Terms shown under the hero buttons. Each one is spelled out in "How we work" further down. */
export const HERO_TERMS = ["Price in writing before we start", "Everything belongs to you", "Cancel monthly"] as const;
