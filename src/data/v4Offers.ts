/**
 * V4 offers — single source of truth for the /services page.
 *
 * Source: LocalDominate_7-Tage-Erstkunde.md, section 7h ("v5 offers"), and the Upwork packages
 * derived from it. Prices are starting prices ("from"); scope is fixed per offer. Nothing here may
 * promise a result or name a client (Project Bible V4, Hard Rule 06 "Truth first"). Only state
 * scope and delivery times that exist in those documents.
 */

export type Offer = {
  id: string;
  name: string;
  /** Short, plain statement of what the customer gets. */
  summary: string;
  /** Price line, already formatted. */
  price: string;
  /** Extra price note, e.g. the second tier. */
  priceNote?: string;
  /** Only set where the source documents state a delivery time. */
  delivery?: string;
  includes: readonly string[];
  bestFor: string;
};

export const OFFERS: readonly Offer[] = [
  {
    id: "conversion-sprint",
    name: "72h Conversion / Booking Sprint",
    summary:
      "For a hotel pre-opening funnel, a booking page or a Shopify store that gets visits but too few bookings or orders.",
    price: "from 390 €",
    delivery: "72 hours",
    includes: [
      "Audit of one page: mobile view, speed and tracking",
      "Five fixes implemented, first on a copy, then live once you approve",
      "A short written report of what changed and why",
    ],
    bestFor: "Hotels, holiday rentals and online stores with traffic but weak conversion.",
  },
  {
    id: "ai-automation-starter",
    name: "AI Automation Starter",
    summary:
      "A first automation milestone, for example a web form that creates a CRM contact, notifies you and replies to the lead.",
    price: "250 €",
    delivery: "3 days",
    includes: [
      "One workflow (one trigger, up to three steps), written down and approved by you first",
      "Built and tested with your real data",
      "Short written hand-over",
    ],
    bestFor: "Small teams losing time to the same manual lead or admin steps.",
  },
  {
    id: "google-profile",
    name: "Google Profile Quick-Fix",
    summary:
      "Your Google Business Profile reviewed and corrected so it is complete and consistent for local search.",
    price: "79 €",
    priceNote: "Full optimisation: 390 €",
    includes: [
      "Review of your current Google Business Profile",
      "Corrections to the fields that matter for local search",
      "Scope of the Quick-Fix and the optimisation confirmed on the call",
    ],
    bestFor: "Local businesses, especially in DACH, that want a clean profile without a long project.",
  },
  {
    id: "website-5-days",
    name: "Website in 5 Days",
    summary:
      "A direct-booking website for holiday apartments and hotels, built in one focused week.",
    price: "from 1,490 €",
    delivery: "5 days",
    includes: [
      "Direct-booking site, mobile first",
      "Scope and content agreed on a call before we start",
      "Launch and short hand-over",
    ],
    bestFor: "Hosts and hotels who want guests to book direct instead of paying platform fees.",
  },
] as const;
