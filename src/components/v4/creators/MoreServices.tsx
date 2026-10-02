import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CREATOR_ANCHORS, MORE } from "@/data/v4Creators";

/**
 * BEYOND THE PAGE. Three further services for creators, all priced on request (owner's instruction
 * of 2 October 2026). Placed right after the prices so the page offers stay the first choice and
 * these read as the next step. One action: an anchor to the request form.
 */
export function MoreServices() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.more} aria-labelledby="creators-more" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {MORE.label}
            </SystemLabel>
            <h2
              id="creators-more"
              className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
            >
              {MORE.title}
            </h2>
          </div>
          <p className="max-w-2xl self-end font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/75 [text-wrap:pretty]">
            {MORE.text}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {MORE.services.map((service, i) => (
            <li key={service.id} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <span aria-hidden="true" className="font-v4-mono text-sm text-v4-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <SystemLabel className="text-v4-ink/60">{MORE.priceLabel}</SystemLabel>
              </div>
              <h3 className="mt-6 text-balance font-v4-sans text-2xl font-semibold leading-tight tracking-tight text-v4-ink">
                {service.name}
              </h3>
              <p className="mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/70">{service.body}</p>
              <ul className="mt-6 flex flex-col border-b border-v4-ink/10">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 border-t border-v4-ink/10 py-3 font-v4-sans text-sm leading-snug text-v4-ink/80"
                  >
                    <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={`#${CREATOR_ANCHORS.form}`}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-v4-ink/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink transition-colors hover:border-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
          >
            {MORE.action}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </StateField>
  );
}
