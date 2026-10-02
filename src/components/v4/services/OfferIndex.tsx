import { SystemLabel } from "@/components/v4/SystemLabel";
import type { Offer } from "@/data/v4Offers";

/**
 * The hero's price list: the four offers with price and delivery time, each row a jump link to its
 * card further down. Names, prices and times are read from v4Offers.ts.
 */
export function OfferIndex({ offers }: { offers: readonly Offer[] }) {
  return (
    <nav aria-labelledby="services-index">
      <SystemLabel as="p" id="services-index" className="text-v4-ivory/60">
        Prices at a glance
      </SystemLabel>
      <ul className="mt-5 border-t border-v4-ivory/15">
        {offers.map((offer) => (
          <li key={offer.id} className="border-b border-v4-ivory/15">
            <a
              href={`#offer-${offer.id}`}
              className="group flex min-h-[44px] items-baseline justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              <span>
                <span className="block font-v4-sans text-lg font-semibold leading-tight tracking-tight text-v4-ivory group-hover:underline group-hover:underline-offset-4">
                  {offer.name}
                </span>
                {(offer.delivery || offer.priceNote) && (
                  <span className="mt-1.5 block font-v4-sans text-sm text-v4-ivory/60">
                    {offer.delivery ? `Delivery: ${offer.delivery}` : offer.priceNote}
                  </span>
                )}
              </span>
              <span className="shrink-0 whitespace-nowrap font-v4-serif text-2xl text-v4-ivory md:text-[1.75rem]">
                {offer.price}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
