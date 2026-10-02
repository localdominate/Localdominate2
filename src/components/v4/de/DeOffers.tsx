import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { cn } from "@/lib/utils";
import { OFFERS_DE, OFFERS_SECTION, OFFER_ORDER, SEGMENTS } from "@/data/v4De";
import type { SegmentId } from "@/data/v4De";

/**
 * Die drei Angebote. Die Karte, die zum gewählten Segment gehört, ist markiert (aktiver Zustand
 * in Signalgrün). Der 79-€-Quick-Fix steht nur als Hinweis unter der Profil-Karte.
 */
export function DeOffers({ segment }: { segment: SegmentId }) {
  const matching = SEGMENTS.find((s) => s.id === segment)?.offer;

  return (
    <StateField field="dark" as="section" aria-labelledby="de-offers-title">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ivory/70">
          {OFFERS_SECTION.label}
        </SystemLabel>
        <h2
          id="de-offers-title"
          style={{ hyphens: "auto" }}
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
        >
          {OFFERS_SECTION.title}
        </h2>
        <p className="mt-5 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/75">
          {OFFERS_SECTION.intro}
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {OFFER_ORDER.map((id) => {
            const offer = OFFERS_DE[id];
            const isMatch = id === matching;
            return (
              <li
                key={id}
                className={cn(
                  "relative flex flex-col gap-5 rounded-2xl bg-v4-ivory p-7 text-v4-ink md:p-8",
                  "transition-[box-shadow] duration-200",
                  isMatch && "shadow-[0_0_0_3px_#B7F52A]"
                )}
              >
                {isMatch && (
                  <span className="absolute -top-3 left-7 rounded-full bg-v4-signal px-3 py-1 font-v4-sans text-xs font-semibold text-v4-ink">
                    {OFFERS_SECTION.matchBadge}
                  </span>
                )}
                <h3 className="font-v4-sans text-2xl font-semibold tracking-tight">{offer.name}</h3>
                <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-v4-serif text-5xl leading-none">{offer.price}</span>
                  {offer.delivery && (
                    <span className="font-v4-sans text-sm text-v4-ink/70">
                      {OFFERS_SECTION.deliveryLabel}: {offer.delivery}
                    </span>
                  )}
                </p>
                <p className="font-v4-sans text-base leading-relaxed text-v4-ink/80">{offer.summary}</p>
                <div>
                  <h4 className="font-v4-sans text-sm font-semibold text-v4-ink">{OFFERS_SECTION.includesLabel}</h4>
                  <ul className="mt-2 flex flex-col">
                    {offer.includes.map((item) => (
                      <li key={item} className="border-t border-v4-ink/15 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-auto font-v4-sans text-sm leading-relaxed text-v4-ink/75">
                  <span className="font-semibold text-v4-ink">{OFFERS_SECTION.bestForLabel}:</span> {offer.bestFor}
                </p>
                {offer.note && (
                  <p className="rounded-lg border border-v4-ink/15 px-4 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                    {offer.note}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </StateField>
  );
}
