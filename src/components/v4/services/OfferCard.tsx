import { CheckButton } from "@/components/v4/CheckButton";
import { SystemLabel } from "@/components/v4/SystemLabel";
import type { Offer } from "@/data/v4Offers";

/** "from 1,490 €" is printed word for word; only the word "from" is set smaller than the figure. */
function Price({ price }: { price: string }) {
  const prefix = "from ";
  const hasPrefix = price.startsWith(prefix);
  return (
    <p className="whitespace-nowrap font-v4-serif text-[2.75rem] leading-none text-v4-ink lg:text-5xl">
      {hasPrefix && <span className="font-v4-sans text-base font-medium text-v4-ink/70">{prefix}</span>}
      {hasPrefix ? price.slice(prefix.length) : price}
    </p>
  );
}

/**
 * One offer as a row of the rate card. On wide screens every row has the same three columns
 * (what it is and who it is for, what is included, price and delivery), so the four offers can be
 * compared by reading down a column. On a phone it is one card with the price directly under the
 * summary: the two outer columns dissolve (`contents`) and their parts are put in reading order
 * with `order-*`. All texts come from v4Offers.ts unchanged. The heading keeps the `offer-<id>`
 * anchor.
 */
export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      aria-labelledby={`offer-${offer.id}`}
      className="flex flex-col gap-6 rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-8 lg:grid lg:grid-cols-[1fr_1.1fr_17rem] lg:gap-0 lg:p-10"
    >
      <div className="contents lg:block lg:pr-12">
        <div className="order-1">
          <h3
            id={`offer-${offer.id}`}
            className="scroll-mt-28 font-v4-sans text-2xl font-semibold leading-tight tracking-tight text-v4-ink"
          >
            {offer.name}
          </h3>
          <p className="mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/70">{offer.summary}</p>
        </div>
        <p className="order-4 font-v4-sans text-sm leading-relaxed text-v4-ink/70 lg:mt-6">
          <span className="font-medium text-v4-ink">Best for: </span>
          {offer.bestFor}
        </p>
      </div>

      <div className="order-3 lg:order-none lg:border-l lg:border-v4-ink/10 lg:px-12">
        <SystemLabel as="p" className="text-v4-ink/60">
          Included
        </SystemLabel>
        <ul className="mt-4 border-b border-v4-ink/10">
          {offer.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-v4-ink/10 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80"
            >
              <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="contents lg:flex lg:flex-col lg:justify-between lg:gap-8 lg:border-l lg:border-v4-ink/10 lg:pl-10">
        <div className="order-2 flex items-end justify-between gap-4 border-y border-v4-ink/10 py-5 lg:block lg:border-y-0 lg:py-0">
          <div>
            <Price price={offer.price} />
            {offer.priceNote && <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">{offer.priceNote}</p>}
          </div>
          {offer.delivery && (
            <dl className="shrink-0 text-right lg:mt-6 lg:text-left">
              <dt>
                <SystemLabel className="text-v4-ink/60">Delivery</SystemLabel>
              </dt>
              <dd className="mt-2 font-v4-sans text-lg font-semibold leading-none tracking-tight text-v4-ink">
                {offer.delivery}
              </dd>
            </dl>
          )}
        </div>
        <div className="order-5">
          <CheckButton className="w-full" />
        </div>
      </div>
    </article>
  );
}
