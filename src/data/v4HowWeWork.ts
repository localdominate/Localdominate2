/**
 * "How we work": the four commitments shown on Home, /start-a-project and /services.
 * Wording follows the owner decisions of 2026-10-01 (50/50 on order and acceptance, one revision
 * round, ownership, monthly cancellation, no ranking promises). Do not add promises here that the
 * owner has not confirmed.
 */
export type Commitment = { title: string; body: string };

export const HOW_WE_WORK: readonly Commitment[] = [
  {
    title: "Scope and price in writing first",
    body: "You get the exact scope and a fixed price in writing before any work starts. Nothing is billed that was not agreed.",
  },
  {
    title: "Paid in two steps",
    body: "Half when you place the order, half when you accept the agreed scope. One round of revisions is included.",
  },
  {
    title: "Everything belongs to you",
    body: "The website and the Google profile are yours. Ongoing care can be cancelled monthly.",
  },
  {
    title: "No ranking promises",
    body: "We do not promise positions or revenue. You get a written list of what we changed and why.",
  },
] as const;

/** Owner decision, 2026-10-02: the two-step payment and the revision round do not apply to the 79 € offer. */
export const HOW_WE_WORK_NOTE =
  "The 79 € Google Profile Quick-Fix is the exception: it is paid in full with the order and has no revision round.";
