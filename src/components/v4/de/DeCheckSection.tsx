import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckForm } from "@/components/v4/check/CheckForm";
import { DeBookCallButton } from "@/components/v4/de/DeBookCallButton";
import { CHECK_ANCHOR, CHECK_FORM_DE, CHECK_SECTION, FORM_ID_PREFIX, HERO } from "@/data/v4De";

/**
 * Formular „Kostenlosen Check anfordern“. Die Formular-Komponente von /start-a-project wird
 * wiederverwendet, die deutschen Texte kommen als Prop (CHECK_FORM_DE).
 */
export const DeCheckSection = forwardRef<HTMLDivElement>(function DeCheckSection(_props, ref) {
  return (
    <StateField field="dark" as="section" id={CHECK_ANCHOR} aria-labelledby="de-check-title" className="scroll-mt-16">
      <div
        ref={ref}
        tabIndex={-1}
        className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 outline-none md:px-10 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-20"
      >
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SystemLabel as="p" className="text-v4-ivory/70">
            {CHECK_SECTION.label}
          </SystemLabel>
          <h2
            id="de-check-title"
            style={{ hyphens: "auto" }}
            className="text-balance font-v4-sans text-[length:var(--v4-text-heading)] font-extrabold leading-[1.04] tracking-tight text-v4-ivory"
          >
            {CHECK_SECTION.title}
          </h2>
          <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/75">{CHECK_SECTION.body}</p>
          <ul className="flex max-w-lg flex-col">
            {CHECK_SECTION.points.map((point) => (
              <li key={point} className="border-t border-v4-ivory/20 py-4 font-v4-sans text-sm leading-relaxed text-v4-ivory/85">
                {point}
              </li>
            ))}
          </ul>
          <div className="flex max-w-lg flex-col gap-4 border-t border-v4-ivory/20 pt-6">
            <h3 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-tight text-v4-ivory">
              {CHECK_SECTION.callTitle}
            </h3>
            <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/75">{CHECK_SECTION.callBody}</p>
            <DeBookCallButton label={HERO.callLabel} className="self-start" />
          </div>
          <p className="font-v4-sans text-sm text-v4-ivory/75">
            <Link
              to="/"
              lang="en"
              hrefLang="en"
              className="underline underline-offset-4 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              {CHECK_SECTION.backLabel}
            </Link>
          </p>
        </div>
        <CheckForm texts={CHECK_FORM_DE} id={FORM_ID_PREFIX} className="self-start" />
      </div>
    </StateField>
  );
});
