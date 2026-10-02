import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { AnchorButton } from "@/components/v4/creators/AnchorButton";
import { CREATOR_ANCHORS, CREATOR_TIERS, PRICES_SECTION } from "@/data/v4Creators";
import type { CreatorTier } from "@/data/v4Creators";

const unitClass = "font-v4-mono text-[length:var(--v4-text-label)] uppercase tracking-[0.16em] text-v4-ivory/60";

/**
 * One offer. All prices and texts come from v4Creators.ts. The care plan shows "0 € set-up", the
 * monthly fee and the first-year total together, so the monthly figure is never read as the whole
 * price. Its green border and the label "Lowest start" name a fact (lowest first payment).
 * From 1024 px the three cards share their rows (subgrid): prices, terms, lists and buttons line up.
 */
function TierCard({ tier }: { tier: CreatorTier }) {
  const featured = Boolean(tier.badge);
  return (
    <li
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border bg-v4-ivory/[0.04] p-6 md:p-8",
        "lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-y-6",
        featured ? "border-v4-signal shadow-[0_0_0_1px_#B7F52A]" : "border-v4-ivory/15"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ivory">
          {tier.name}
        </h3>
        {tier.badge && (
          <span className="rounded-full bg-v4-signal px-3 py-1.5 font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.16em] text-v4-ink">
            {tier.badge}
          </span>
        )}
      </div>

      <div className="border-t border-v4-ivory/15 pt-6">
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {tier.price.prefix && <span className={unitClass}>{tier.price.prefix}</span>}
          <span className="font-v4-sans text-[3.5rem] font-extrabold leading-none tracking-tight text-v4-ivory md:text-[4rem]">
            {tier.price.figure}
          </span>
          {tier.price.unit && <span className={unitClass}>{tier.price.unit}</span>}
        </p>
        {tier.then && (
          <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-v4-sans text-[2rem] font-extrabold leading-none tracking-tight text-v4-ivory">
              {tier.then.figure}
            </span>
            <span className={unitClass}>{tier.then.unit}</span>
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
              <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
              {item}
            </li>
          ))}
        </ul>
        {tier.ownership && (
          <p className="mt-5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{tier.ownership}</p>
        )}
      </div>

      <div className="mt-auto flex flex-col gap-3 lg:mt-0 lg:self-end">
        <AnchorButton href={`#${CREATOR_ANCHORS.form}`} tone={featured ? "signal" : "outline"} arrow className="w-full">
          {tier.cta}
        </AnchorButton>
        {tier.withCall && <BookCallButton tone="outline" className="min-h-[46px] w-full" />}
      </div>
    </li>
  );
}

/** 06 PRICES. Three offers side by side, the notes and a plain rule of thumb for choosing. */
export function PriceCards() {
  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.prices} aria-labelledby="creators-prices" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
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
          </div>
          <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70 lg:pb-2">
            {PRICES_SECTION.text}
          </p>
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

        <div className="mt-14 grid gap-6 border-t border-v4-ivory/15 pt-10 lg:grid-cols-[14rem_1fr] lg:gap-10">
          <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-relaxed tracking-[0.18em] text-v4-ivory/60">
            {PRICES_SECTION.fitLabel}
          </h3>
          <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
            {PRICES_SECTION.fits.map((fit) => (
              <li key={fit.pick} className="font-v4-sans text-base leading-relaxed text-v4-ivory/70">
                {fit.when} <strong className="whitespace-nowrap font-semibold text-v4-ivory">{fit.pick}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StateField>
  );
}
