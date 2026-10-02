import { HowWeWork } from "@/components/v4/HowWeWork";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { COMMITMENTS_DE, PROCESS } from "@/data/v4De";

/** „So arbeiten wir“: der Ablauf in drei Schritten (eine echte Reihenfolge) und die vier Zusagen. */
export function DeProcess() {
  return (
    <StateField field="light" as="section" aria-labelledby="de-process-title">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/70">
          {PROCESS.label}
        </SystemLabel>
        <h2
          id="de-process-title"
          style={{ hyphens: "auto" }}
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
        >
          {PROCESS.title}
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
          {PROCESS.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-l-2 border-v4-ink pl-6 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6"
            >
              <span aria-hidden="true" className="font-v4-serif text-5xl leading-none text-v4-ink/40">
                {i + 1}
              </span>
              <h3 className="mt-4 font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">
                <span className="sr-only">Schritt {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm font-v4-sans text-base leading-relaxed text-v4-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <h3 className="mb-2 font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-tight text-v4-ink">
            {PROCESS.commitmentsLabel}
          </h3>
          <HowWeWork items={COMMITMENTS_DE} />
        </div>
      </div>
    </StateField>
  );
}
