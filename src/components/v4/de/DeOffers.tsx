import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { cn } from "@/lib/utils";
import { ANCHORS, HERO, OFFERS_DE, OFFERS_SECTION, OFFER_ORDER, SEGMENTS } from "@/data/v4De";
import type { SegmentId } from "@/data/v4De";

/**
 * Die drei Angebote. Die Karte des gewählten Segments steht vorn und trägt die Marke „Ihr Einstieg“
 * und den grünen Knopf (aktiver Zustand). Ab 1024 px teilen sich die Karten ein Zeilenraster
 * (subgrid), damit Preis, Liste und Knopf auf einer Höhe stehen.
 */
export function DeOffers({ segment }: { segment: SegmentId }) {
  const matching = SEGMENTS.find((s) => s.id === segment)?.offer ?? OFFER_ORDER[0];
  const order = [matching, ...OFFER_ORDER.filter((id) => id !== matching)];

  return (
    <StateField field="dark" as="section" id={ANCHORS.offers} aria-labelledby="de-offers-title" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
              {OFFERS_SECTION.label}
            </SystemLabel>
            <h2
              id="de-offers-title"
              className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
            >
              {OFFERS_SECTION.title}
            </h2>
          </div>
          <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {OFFERS_SECTION.intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {order.map((id) => {
            const offer = OFFERS_DE[id];
            const isMatch = id === matching;
            const side = offer.delivery ? `${OFFERS_SECTION.deliveryLabel}: ${offer.delivery}` : offer.priceNote;
            return (
              <li
                key={id}
                className={cn(
                  "relative flex flex-col gap-5 rounded-2xl bg-v4-ivory p-6 text-v4-ink md:p-8",
                  "lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:gap-y-5",
                  isMatch && "shadow-[0_0_0_3px_#B7F52A]"
                )}
              >
                {isMatch && (
                  <span className="absolute -top-3 left-6 rounded-full bg-v4-signal px-3 py-1.5 font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.18em] text-v4-ink md:left-8">
                    {OFFERS_SECTION.matchBadge}
                  </span>
                )}
                <h3 className="font-v4-sans text-xl font-semibold leading-snug tracking-tight lg:self-end">{offer.name}</h3>
                <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-v4-ink/15 pt-5">
                  <span className="font-v4-serif text-5xl leading-none">{offer.price}</span>
                  {side && <span className="font-v4-sans text-sm text-v4-ink/70">{side}</span>}
                </p>
                <p className="font-v4-sans text-base leading-relaxed text-v4-ink/75">{offer.summary}</p>
                <div>
                  <h4 className="font-v4-sans text-sm font-semibold text-v4-ink">{OFFERS_SECTION.includesLabel}</h4>
                  <ul className="mt-3 flex flex-col">
                    {offer.includes.map((item) => (
                      <li key={item} className="flex gap-3 border-t border-v4-ink/15 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                        <span aria-hidden="true" className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-v4-sans text-sm leading-relaxed text-v4-ink/75">
                  <span className="font-semibold text-v4-ink">{OFFERS_SECTION.bestForLabel}:</span> {offer.bestFor}
                </p>
                <CheckButton
                  label={HERO.checkLabel}
                  to={`/de#${ANCHORS.check}`}
                  className={cn(
                    "min-h-12 w-full lg:self-end focus-visible:outline-v4-ink",
                    !isMatch && "border border-v4-ink/25 bg-transparent hover:border-v4-ink/60 hover:opacity-100"
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </StateField>
  );
}
