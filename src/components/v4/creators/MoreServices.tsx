import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CREATOR_ANCHORS, MORE, selectCreatorOption } from "@/data/v4Creators";

/**
 * MORE FOR CREATORS. Three further services, all priced on request (owner's instruction of
 * 2 October 2026). Compact and after the FAQ, so the page offers stay the first choice: three
 * native <details> rows (name left, "Price on request" right), every body is in the HTML.
 * One action: an anchor to the request form.
 */
export function MoreServices() {
  return (
    <StateField
      field="light"
      as="section"
      id={CREATOR_ANCHORS.more}
      aria-labelledby="creators-more"
      className="scroll-mt-16 border-t border-v4-ink/10"
    >
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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
          <p className="mt-6 max-w-md font-v4-sans text-base leading-relaxed text-v4-ink/70 [text-wrap:pretty]">{MORE.text}</p>
        </div>

        <div>
          <div className="border-b border-v4-ink/15">
            {MORE.services.map((service) => (
              <details key={service.id} className="group border-t border-v4-ink/15">
                <summary className="grid min-h-[64px] cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink sm:grid-cols-[1fr_auto_auto] [&::-webkit-details-marker]:hidden">
                  <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{service.name}</h3>
                  <SystemLabel className="row-start-2 text-v4-ink/60 sm:col-start-2 sm:row-start-1">{MORE.priceLabel}</SystemLabel>
                  <span
                    aria-hidden="true"
                    className="relative col-start-2 row-span-2 row-start-1 h-8 w-8 rounded-full border border-v4-ink/25 transition-transform duration-200 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-3 before:-translate-x-1/2 before:bg-v4-ink after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-px after:-translate-y-1/2 after:bg-v4-ink group-open:rotate-45 sm:col-start-3 sm:row-span-1"
                  />
                </summary>
                <div className="pb-6 pt-1 sm:pr-12">
                  <p className="max-w-2xl font-v4-sans text-base leading-relaxed text-v4-ink/75">{service.body}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 font-v4-sans text-sm leading-snug text-v4-ink/80">
                        <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink/40" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <a
            href={`#${CREATOR_ANCHORS.form}`}
            onClick={() => selectCreatorOption("more")}
            className="mt-8 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-v4-ink/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink transition-colors hover:border-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
          >
            {MORE.action}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </StateField>
  );
}
