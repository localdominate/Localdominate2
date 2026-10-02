import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton, GetPageButton } from "@/components/v4/creators/AnchorButton";
import { PhoneFrame } from "@/components/v4/creators/DeviceFrames";
import { CREATOR_ANCHORS, DEMO, HERO, HERO_PRICES } from "@/data/v4Creators";

/** The pieces of the page that the phone in the hero stands for. Section names, nothing more. */
const CALLOUTS = [
  { text: "Numbers with date and source", className: "left-0 top-[16%]" },
  { text: "Audience charts", className: "right-0 top-[44%]" },
  { text: "Collab planner", className: "left-2 top-[72%]" },
] as const;

/**
 * 01 HERO. What it is, the two actions, the three prices and the terms on the left. On the right
 * (below on phones) a still of the demo in a phone frame, labelled as a fictional profile. The H1
 * is the largest element and everything is visible at once: no entrance animation.
 */
export function CreatorsHero() {
  const { phonePreview } = DEMO;
  return (
    <StateField field="dark" as="section" aria-labelledby="creators-hero" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6 md:gap-7">
          <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
            {HERO.label}
          </SystemLabel>
          <h1
            id="creators-hero"
            className="font-v4-sans text-[length:clamp(2.5rem,1.25rem+3.3vw,4.5rem)] font-extrabold leading-[0.97] tracking-tight text-v4-ivory"
          >
            {HERO.titleLines[0]}
            <br />
            {HERO.titleLines[1]}
          </h1>
          <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {HERO.text}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <GetPageButton />
            <AnchorButton href={`#${CREATOR_ANCHORS.demo}`} tone="outline">
              {HERO.secondary}
            </AnchorButton>
          </div>

          <ul aria-label="Prices" className="grid max-w-2xl border-y border-v4-ivory/15 sm:grid-cols-[1.5fr_0.9fr_1fr]">
            {HERO_PRICES.map((price) => (
              <li
                key={price.figure}
                className="border-t border-v4-ivory/15 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0"
              >
                <a
                  href={`#${CREATOR_ANCHORS.prices}`}
                  className="group flex min-h-[48px] items-baseline justify-between gap-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-v4-signal sm:h-full sm:flex-col sm:justify-start sm:gap-1 sm:px-5 sm:py-4"
                >
                  <span className="whitespace-nowrap font-v4-sans text-xl font-semibold tracking-tight text-v4-ivory sm:text-2xl">
                    {price.figure}
                  </span>
                  <span className="text-right font-v4-sans text-xs leading-snug text-v4-ivory/60 group-hover:text-v4-ivory/80 sm:text-left sm:text-sm">
                    {price.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {HERO.terms.map((term) => (
              <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                {term}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-v4-ivory/10 blur-3xl"
          />
          <PhoneFrame className="relative mx-auto w-[min(100%,300px)] lg:rotate-[3deg]">
            <img
              src={phonePreview.src}
              width={phonePreview.width}
              height={phonePreview.height}
              alt={DEMO.phoneAlt}
              decoding="async"
              {...{ fetchpriority: "high" }}
              className="h-full w-full object-cover object-top"
            />
          </PhoneFrame>
          <ul aria-hidden="true" className="hidden lg:block">
            {CALLOUTS.map((callout) => (
              <li
                key={callout.text}
                className={`absolute flex items-center gap-2 whitespace-nowrap rounded-full border border-v4-ivory/15 bg-v4-ink/85 px-3.5 py-2 font-v4-sans text-xs text-v4-ivory/90 backdrop-blur ${callout.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                {callout.text}
              </li>
            ))}
          </ul>
          <figcaption className="relative mt-5 text-center font-v4-sans text-sm text-v4-ivory/60">{HERO.caption}</figcaption>
        </figure>
      </div>
    </StateField>
  );
}
