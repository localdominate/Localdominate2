import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton } from "@/components/v4/creators/AnchorButton";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { CREATOR_ANCHORS, CREATOR_TIERS, PRICES_SECTION } from "@/data/v4Creators";
import type { CreatorTier } from "@/data/v4Creators";

const overlineClass = "block font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.16em] text-v4-ivory/60";

/**
 * One offer. All prices and texts come from v4Creators.ts. The small word (SET-UP / ONCE / FROM)
 * stands above the figure, so the three figures share the left edge and the baseline. The care
 * plan shows "0 €", the monthly fee and the first-year total together, so the monthly figure is
 * never read as the whole price. Its green border and the label "Lowest start" name a fact (lowest
 * first payment). From 1024 px the three cards share their rows (subgrid): prices, terms, lists
 * and buttons line up. The call in the Studio card is a text link under the button, same target
 * as BookCallButton, so the three buttons stand on one line.
 */
function TierCard({ tier }: { tier: CreatorTier }) {
  const featured = Boolean(tier.badge);
  return (
    <li
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-6 md:p-8",
        "lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-y-6",
        featured ? "border-v4-signal bg-v4-ivory/[0.09] shadow-[0_0_0_1px_#B7F52A]" : "border-v4-ivory/15 bg-v4-ivory/[0.04]"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ivory">{tier.name}</h3>
        {tier.badge && (
          <span className="rounded-full border border-v4-signal px-3 py-1.5 font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.16em] text-v4-signal">
            {tier.badge}
          </span>
        )}
      </div>

      <div className="border-t border-v4-ivory/15 pt-6">
        <p>
          <span className={overlineClass}>{tier.price.overline}</span>
          <span className="mt-3 block font-v4-sans text-[3.5rem] font-extrabold leading-none tracking-tight text-v4-ivory md:text-[4rem]">
            {tier.price.figure}
          </span>
        </p>
        {tier.then && (
          <p className="mt-3 font-v4-sans text-[1.625rem] font-extrabold leading-none tracking-tight text-v4-ivory">
            {tier.then.prefix} {tier.then.figure} {tier.then.unit}
          </p>
        )}
      </div>

      <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
        {tier.terms}
        {tier.total && (
          <>
            {" "}
            <strong className="whitespace-nowrap font-semibold text-v4-ivory">{tier.total}</strong>
          </>
        )}
      </p>

      <div>
        <SystemLabel as="p" className="text-v4-ivory/60">
          {PRICES_SECTION.includesLabel}
        </SystemLabel>
        <ul className="mt-4 flex flex-col border-b border-v4-ivory/15">
          {tier.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-v4-ivory/15 py-3 font-v4-sans text-sm leading-relaxed text-v4-ivory/85"
            >
              <span
                aria-hidden="true"
                className={cn("mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full", featured ? "bg-v4-signal" : "bg-v4-ivory/40")}
              />
              {item}
            </li>
          ))}
        </ul>
        {tier.ownership && (
          <p className="mt-5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{tier.ownership}</p>
        )}
      </div>

      <div className="mt-auto flex flex-col items-center lg:mt-0 lg:self-start">
        <AnchorButton href={`#${CREATOR_ANCHORS.form}`} tone={featured ? "signal" : "outline"} arrow className="w-full">
          {tier.cta}
        </AnchorButton>
        {tier.callLink && (
          <a
            href={BOOKING_URL}
            {...(BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-1 inline-flex min-h-[44px] items-center font-v4-sans text-sm text-v4-ivory/80 underline underline-offset-4 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
          >
            {tier.callLink}
          </a>
        )}
      </div>
    </li>
  );
}

/** PRICES. Header with a plain rule of thumb for choosing, three offers side by side, the notes. */
export function PriceCards() {
  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.prices} aria-labelledby="creators-prices" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
              {PRICES_SECTION.label}
            </SystemLabel>
            <h2
              id="creators-prices"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
            >
              {PRICES_SECTION.title}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {PRICES_SECTION.text}
            </p>
          </div>
          <div>
            <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-none tracking-[0.18em] text-v4-ivory/60">
              {PRICES_SECTION.fitLabel}
            </h3>
            <ul className="mt-4 flex flex-col border-b border-v4-ivory/15">
              {PRICES_SECTION.fits.map((fit) => (
                <li
                  key={fit.pick}
                  className="border-t border-v4-ivory/15 py-3.5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70 sm:text-base"
                >
                  {fit.when} <strong className="whitespace-nowrap font-semibold text-v4-ivory">{fit.pick}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {CREATOR_TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </ul>

        <ul className="mt-6 flex flex-col gap-x-10 gap-y-2 md:flex-row md:flex-wrap">
          {PRICES_SECTION.notes.map((note) => (
            <li key={note} className="font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </StateField>
  );
}
