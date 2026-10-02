import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { ANCHORS, CASE_PARTNER, HERO } from "@/data/v4De";

/** Fallstudien-Partner. Rendert nichts, solange CASE_PARTNER (v4De.ts) leer ist. */
export function DePartner() {
  if (!CASE_PARTNER) return null;
  return (
    <StateField
      field="light"
      as="section"
      id={ANCHORS.partner}
      aria-labelledby="de-partner-title"
      className="scroll-mt-16 border-t border-v4-ink/10"
    >
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10">
        <div className="max-w-2xl rounded-2xl border border-v4-ink/10 bg-v4-white p-7 md:p-10">
          <SystemLabel as="p" className="mb-5 block text-v4-ink/60">
            {CASE_PARTNER.label}
          </SystemLabel>
          <h2 id="de-partner-title" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-tight text-v4-ink">
            {CASE_PARTNER.title}
          </h2>
          <p className="mt-4 font-v4-sans text-base leading-relaxed text-v4-ink/75">{CASE_PARTNER.body}</p>
          <CheckButton label={HERO.checkLabel} to={`/de#${ANCHORS.check}`} className="mt-6 min-h-12 focus-visible:outline-v4-ink" />
        </div>
      </div>
    </StateField>
  );
}
