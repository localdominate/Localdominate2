import { HowWeWork } from "@/components/v4/HowWeWork";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { ANCHORS, COMMITMENTS_DE, TERMS } from "@/data/v4De";

/**
 * Die Bedingungen (im Copy-Deck „So arbeiten wir“): die vier bestätigten Zusagen und darunter die
 * eine Ausnahme für den Quick-Fix. Gleiche Komponente wie auf Home und /services, deutsche Texte.
 */
export function DeTerms() {
  return (
    <StateField field="light" as="section" id={ANCHORS.terms} aria-labelledby="de-terms-title" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {TERMS.label}
          </SystemLabel>
          <h2
            id="de-terms-title"
            className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
          >
            {TERMS.title}
          </h2>
        </div>
        <HowWeWork items={COMMITMENTS_DE} note={TERMS.note} />
      </div>
    </StateField>
  );
}
