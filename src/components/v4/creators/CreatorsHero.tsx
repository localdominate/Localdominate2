import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton, GetPageButton } from "@/components/v4/creators/AnchorButton";
import { BROWSER_SHELL, BrowserBar } from "@/components/v4/creators/DeviceFrames";
import { CREATOR_ANCHORS, DEMO, HERO, HERO_PRICES } from "@/data/v4Creators";

/**
 * 01 HERO. What it is, the two actions, the three prices and the terms on the left. On the right
 * (below on phones) two stills of the demo, a browser window and a phone in front of it, labelled
 * as a fictional profile. The stills show the creator's portrait on purpose: the product is a
 * glossy page about a person. Everything is visible at once: no entrance animation.
 */
export function CreatorsHero() {
  const { desktopPreview, phonePortrait } = DEMO;
  return (
    <StateField field="dark" as="section" aria-labelledby="creators-hero" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-6 md:gap-7">
          <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
            {HERO.label}
          </SystemLabel>
          <h1
            id="creators-hero"
            className="font-v4-sans text-[length:clamp(2.5rem,1.2rem+2.9vw,4.1rem)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
          >
            <span className="block text-balance">{HERO.titleLines[0]}</span>{" "}
            <span className="block text-balance">{HERO.titleLines[1]}</span>
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

        <figure className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-v4-ivory/10 blur-3xl"
          />
          {/* room on the left and at the bottom for the phone that stands in front of the window */}
          <div className="relative pb-[30%] pl-[12%]">
            <div className={BROWSER_SHELL}>
              <BrowserBar address={DEMO.address} />
              <img
                src={desktopPreview.src}
                width={desktopPreview.width}
                height={desktopPreview.height}
                alt={DEMO.desktopAlt}
                decoding="async"
                {...{ fetchpriority: "high" }}
                className="block aspect-[16/10] w-full bg-v4-ivory object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[28%] rounded-[1.1rem] border border-v4-ivory/25 bg-[#1A1A18] p-[5px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] sm:rounded-[1.6rem] sm:p-2 lg:-rotate-[4deg]">
              <img
                src={phonePortrait.src}
                width={phonePortrait.width}
                height={phonePortrait.height}
                alt={DEMO.phonePortraitAlt}
                decoding="async"
                className="block aspect-[1/2] w-full rounded-[0.8rem] bg-v4-ivory object-cover object-top sm:rounded-[1.15rem]"
              />
            </div>
          </div>
          <figcaption className="relative mt-5 text-center font-v4-sans text-sm text-v4-ivory/60 lg:pl-[12%]">{HERO.caption}</figcaption>
        </figure>
      </div>
    </StateField>
  );
}
