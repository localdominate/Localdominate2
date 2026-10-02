import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckForm } from "@/components/v4/check/CheckForm";
import { CREATOR_ANCHORS, CREATOR_FAQ, CREATOR_FORM, FAQ_SECTION, FORM_SECTION, HERO } from "@/data/v4Creators";

/**
 * 09 FAQ. Native <details>, so every answer is in the HTML and opens without JavaScript. The same
 * array fills the FAQPage JSON-LD (v4Creators.ts). The first answer is open in the markup.
 */
export function CreatorsFaq() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.faq} aria-labelledby="creators-faq" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {FAQ_SECTION.label}
          </SystemLabel>
          <h2
            id="creators-faq"
            className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
          >
            {FAQ_SECTION.title}
          </h2>
        </div>
        <div className="border-b border-v4-ink/15">
          {CREATOR_FAQ.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-v4-ink/15">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink [&::-webkit-details-marker]:hidden">
                <h3 className="font-[inherit] text-[length:inherit]">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="relative h-8 w-8 shrink-0 rounded-full border border-v4-ink/25 transition-transform duration-200 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-3 before:-translate-x-1/2 before:bg-v4-ink after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-px after:-translate-y-1/2 after:bg-v4-ink group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-12 font-v4-sans text-base leading-relaxed text-v4-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </StateField>
  );
}

/**
 * 10 FORM. The low-effort first step: the profile link and the option. CheckForm is the shared
 * form of the site with this page's texts and the id prefix "creator". The 15-minute call is the
 * second way in and stands next to the form only.
 */
export function CreatorForm() {
  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.form} aria-labelledby="creators-form" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {FORM_SECTION.label}
          </SystemLabel>
          <h2
            id="creators-form"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
          >
            {FORM_SECTION.title}
          </h2>
          <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {FORM_SECTION.text}
          </p>
          <ul className="flex max-w-lg flex-col border-b border-v4-ivory/15">
            {HERO.terms.map((term) => (
              <li
                key={term}
                className="flex gap-4 border-t border-v4-ivory/15 py-4 font-v4-sans text-sm leading-relaxed text-v4-ivory/80"
              >
                <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />
                {term}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight text-v4-ivory">
              {FORM_SECTION.callTitle}
            </p>
            <BookCallButton tone="outline" className="min-h-[46px]" />
          </div>
        </div>
        <CheckForm texts={CREATOR_FORM} id="creator" className="self-start" />
      </div>
    </StateField>
  );
}
