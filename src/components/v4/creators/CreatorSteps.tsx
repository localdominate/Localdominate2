import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CREATOR_ANCHORS, RULES, STEPS } from "@/data/v4Creators";

/**
 * 07 HOW IT WORKS. Four steps on one line: a rail with the numbers, the text below. On a phone the
 * rail runs down the left edge. The reply time comes from CHECK_REPLY_TIME (via v4Creators.ts).
 */
export function CreatorSteps() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.steps} aria-labelledby="creators-steps" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          {STEPS.label}
        </SystemLabel>
        <h2
          id="creators-steps"
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
        >
          {STEPS.title}
        </h2>

        <ol className="mt-12 grid lg:grid-cols-4">
          {STEPS.steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative grid grid-cols-[2.75rem_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0 lg:pr-8 lg:last:pr-0"
            >
              {/* the rail: down the left edge on phones, across the top from 1024 px */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[1.375rem] top-0 w-px bg-v4-ink/15 group-last:hidden lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.375rem] lg:h-px lg:w-auto lg:group-last:block"
              />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-v4-ink bg-v4-ivory font-v4-mono text-sm text-v4-ink">
                {i + 1}
              </span>
              <div className="lg:mt-7">
                <h3 className="pt-2 font-v4-sans text-xl font-semibold leading-snug tracking-tight text-v4-ink lg:pt-0">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md font-v4-sans text-base leading-relaxed text-v4-ink/70">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 flex flex-col gap-3 rounded-2xl border border-v4-ink/10 bg-v4-white px-6 py-6 md:flex-row md:items-baseline md:gap-8 md:px-8">
          <SystemLabel className="shrink-0 text-v4-ink/60">{STEPS.timingLabel}</SystemLabel>
          <span className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ink">{STEPS.timing}</span>
        </p>
      </div>
    </StateField>
  );
}

const ruleLink =
  "text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal";

/** 08 OUR RULES. The truth rule of the product, stated to the customer. Short on purpose. */
export function CreatorRules() {
  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.rules} aria-labelledby="creators-rules" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
            {RULES.label}
          </SystemLabel>
          <h2
            id="creators-rules"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
          >
            {RULES.title}
          </h2>
        </div>
        <div>
          <ol className="flex flex-col border-b border-v4-ivory/15">
            {RULES.rules.map((rule, i) => (
              <li
                key={rule}
                className="flex gap-5 border-t border-v4-ivory/15 py-5 font-v4-sans text-[length:var(--v4-text-body)] leading-snug text-v4-ivory"
              >
                <span aria-hidden="true" className="w-6 shrink-0 font-v4-mono text-sm leading-7 text-v4-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {rule}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
            <a href={RULES.closing.url} target="_blank" rel="noopener noreferrer" className={ruleLink}>
              {RULES.closing.linkText}
            </a>
            {RULES.closing.rest}
          </p>
        </div>
      </div>
    </StateField>
  );
}
