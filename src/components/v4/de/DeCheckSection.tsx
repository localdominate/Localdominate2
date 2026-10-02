import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckForm } from "@/components/v4/check/CheckForm";
import { DeBookCallButton } from "@/components/v4/de/DeBookCallButton";
import { ANCHORS, CHECK_FORM_DE, CHECK_SECTION, FORM_ID_PREFIX, HERO } from "@/data/v4De";

/**
 * Formular „Kostenlosen Check anfordern“. Die Formular-Komponente von /start-a-project wird
 * wiederverwendet, die deutschen Texte kommen als Prop (CHECK_FORM_DE). Auf dem Handy steht das
 * Formular direkt unter der Einleitung, der zweite Weg (Gespräch) und der Link zur englischen
 * Seite folgen danach.
 */
export const DeCheckSection = forwardRef<HTMLDivElement>(function DeCheckSection(_props, ref) {
  return (
    <StateField field="dark" as="section" id={ANCHORS.check} aria-labelledby="de-check-title" className="scroll-mt-16">
      <div
        ref={ref}
        tabIndex={-1}
        className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 outline-none md:px-10 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-12"
      >
        <div className="flex flex-col gap-7 lg:col-start-1 lg:row-start-1">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {CHECK_SECTION.label}
          </SystemLabel>
          <h2
            id="de-check-title"
            className="text-balance font-v4-sans text-[length:var(--v4-text-heading)] font-extrabold leading-[1.02] tracking-tight text-v4-ivory"
          >
            {CHECK_SECTION.title}
          </h2>
          <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{CHECK_SECTION.intro}</p>
        </div>

        <CheckForm
          texts={CHECK_FORM_DE}
          id={FORM_ID_PREFIX}
          className="self-start p-5 md:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        />

        <div className="flex max-w-lg flex-col gap-8 lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col items-start gap-4 border-t border-v4-ivory/15 pt-7">
            <h3 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-tight text-v4-ivory">
              {CHECK_SECTION.callTitle}
            </h3>
            <DeBookCallButton label={HERO.callLabel} />
          </div>
          <p className="border-t border-v4-ivory/15 pt-5 font-v4-sans text-sm text-v4-ivory/70">
            <Link
              to="/"
              hrefLang="en"
              className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              {CHECK_SECTION.backLabel}
            </Link>
          </p>
        </div>
      </div>
    </StateField>
  );
});
