/**
 * V4 proof registry — single source of truth for every client name, logo and metric
 * that may appear on the V4 pages.
 *
 * Rule (Project Bible V4, Hard Rule 06 "Truth first"): nothing renders unless
 * `verified: true` AND `source` names the evidence. Entries start unverified and are
 * flipped only when the owner has the evidence on file (report/export/written consent).
 * See LocalDominate_V4_Beleg-Checkliste.md in the LOCAL DOMINATE project.
 */

export type ProofMetric = { value: string; label: string };

export type ProofEntry = {
  /** Name shown on the site. Only rendered when `verified` is true. */
  name: string;
  metrics: readonly ProofMetric[];
  /** Where the evidence lives (e.g. "GA4 export 2026-10-xx, stored in …", "written consent Bryce 2026-10-xx"). */
  source: string;
  verified: boolean;
};

export const PROOF_ENTRIES: readonly ProofEntry[] = [
  // Intentionally empty until the owner supplies evidence. Example shape:
  // { name: "…", metrics: [{ value: "…", label: "…" }], source: "…", verified: true },
];

export const verifiedProof = (): readonly ProofEntry[] =>
  PROOF_ENTRIES.filter((entry) => entry.verified && entry.source.trim().length > 0);
