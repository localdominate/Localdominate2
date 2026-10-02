import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckForm } from "@/components/v4/check/CheckForm";
import {
  CREATOR_ANCHORS,
  CREATOR_FAQ,
  CREATOR_FORM,
  FAQ_SECTION,
  FORM_SECTION,
  HERO,
  onCreatorOption,
} from "@/data/v4Creators";
import { ABOUT_PATH, PORTRAIT, PRINCIPLES } from "@/data/v4About";

/**
 * FAQ. Native <details>, so every answer is in the HTML and opens without JavaScript. The same
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
 * FORM. The low-effort first step: the profile link and the option. CheckForm is the shared form
 * of the site with this page's texts and the id prefix "creator".
 *
 * Three grid children: introduction, form, and the block with the person behind it and the
 * 15-minute call. Phones read them in that order, so the first field follows the heading within
 * one screen (the terms list is shown from 1024 px only). From 1024 px the form stands on the
 * right over both rows. The sentence about Markus is quoted from the verified copy of /about.
 */
const onePerson = PRINCIPLES.find((principle) => principle.title === "One person on the project");

export function CreatorForm() {
  // A price card or "Ask for a quote" can choose the option before the visitor reaches the form.
  const [option, setOption] = useState<string>();
  useEffect(() => onCreatorOption(setOption), []);

  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.form} aria-labelledby="creators-form" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-x-20 lg:gap-y-12">
        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-1 lg:gap-8">
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
          <ul className="hidden max-w-lg flex-col border-b border-v4-ivory/15 lg:flex">
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
        </div>

        <CheckForm
          texts={CREATOR_FORM}
          id="creator"
          option={option}
          className="self-start lg:col-start-2 lg:row-span-2 lg:row-start-1"
        />

        <div className="flex max-w-lg flex-col gap-8 lg:col-start-1 lg:row-start-2">
          <div className="flex items-start gap-5">
            <img
              src={PORTRAIT.src}
              width={PORTRAIT.width}
              height={PORTRAIT.height}
              alt={PORTRAIT.alt}
              loading="lazy"
              decoding="async"
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-top"
            />
            <div className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
              <p className="font-semibold text-v4-ivory">{FORM_SECTION.who.lead}</p>
              {onePerson && <p className="mt-1">{onePerson.body}</p>}
              <Link
                to={ABOUT_PATH}
                className="inline-flex min-h-[44px] items-center text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
              >
                {FORM_SECTION.who.link}
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-v4-ivory/15 pt-8">
            <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight text-v4-ivory">
              {FORM_SECTION.callTitle}
            </p>
            <BookCallButton tone="outline" className="min-h-[46px]" />
          </div>
        </div>
      </div>
    </StateField>
  );
}
