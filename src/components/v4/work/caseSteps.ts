import { PILLAR_INDEX } from "@/data/v4PillarIndex";
import type { PillarId, PillarIndexEntry } from "@/data/v4PillarIndex";

/**
 * Which of the seven steps a case covered. This mirrors `caseNotes` in src/data/v4Pillars.ts (ids
 * only, no text). It is kept here so that the Work page does not load that large copy file.
 * Keep the two in sync: a case listed under a step there must list that step here.
 * Cases without an entry simply show no "Steps covered" line.
 */
const CASE_STEPS: Record<string, readonly PillarId[]> = {
  dadication: ["position", "create", "build", "launch"],
  "explore-saudi": ["build", "launch", "grow", "scale"],
  "do-good": ["position", "create", "build", "grow", "scale"],
  "aurelian-grand": ["position", "create", "build", "grow"],
};

/** The covered steps of a case, in the order of the seven steps. */
export const stepsOfCase = (caseId: string): readonly PillarIndexEntry[] => {
  const ids = CASE_STEPS[caseId] ?? [];
  return PILLAR_INDEX.filter((p) => ids.includes(p.id));
};
