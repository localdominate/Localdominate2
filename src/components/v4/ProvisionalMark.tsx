import { SystemLabel } from "./SystemLabel";

/**
 * THE PROVISIONAL MARK — proposed in DESIGN_SYSTEM_PLAN.md §B (additional signature).
 * Used for any claim/stat/proof object that doesn't yet have confirmed backing, per the
 * master prompt's Hard Rule against fabricating evidence (§12/§27): "do not invent clients,
 * logos, metrics, testimonials, awards." B1 has no verified stats to ship yet, so beat 05
 * uses this instead of placeholder numbers presented as real.
 */
export function ProvisionalMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <span className="border-b border-dotted border-current/50">{children}</span>
      <SystemLabel className="opacity-50">Provisional</SystemLabel>
    </span>
  );
}
