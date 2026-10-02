import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { OFFERS } from "@/data/v4Offers";
import { HERO_OFFER_ORDER } from "@/data/v4HomeData";

/**
 * The hero's answer to "what can I order here?", as a band under the headline: the full project
 * first, then the four fixed-price offers with price and delivery time. Names, prices and delivery
 * times come straight from v4Offers.ts, so the band can never disagree with /services.
 */
const offers = HERO_OFFER_ORDER.map((id) => OFFERS.find((o) => o.id === id)).filter(
  (o): o is (typeof OFFERS)[number] => Boolean(o)
);

export function OfferBand() {
  return (
    <aside aria-labelledby="hero-offers" className="border-t border-v4-ivory/15">
      <div className="mx-auto grid max-w-[1400px] gap-x-8 px-6 py-7 md:px-10 lg:grid-cols-[1.25fr_repeat(4,1fr)] lg:py-8">
        <div className="pb-6 lg:pb-0 lg:pr-4">
          <SystemLabel as="p" id="hero-offers" className="text-v4-ivory/60">
            What you can order
          </SystemLabel>
          <p className="mt-3 font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.1] text-v4-ivory">
            The full growth project
          </p>
          <p className="mt-2 max-w-xs font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
            Strategy, brand, website and marketing from one team. Quoted in writing.
          </p>
        </div>
        {offers.map((offer) => (
          <Link
            key={offer.id}
            to="/services"
            className="group flex items-baseline justify-between gap-4 border-t border-v4-ivory/15 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal lg:flex-col lg:justify-start lg:gap-2 lg:border-l lg:border-t-0 lg:py-0 lg:pl-6"
          >
            <span>
              <span className="block font-v4-sans text-sm font-semibold tracking-tight text-v4-ivory group-hover:underline lg:text-base">
                {offer.name}
              </span>
              <span className="mt-1 block font-v4-sans text-xs text-v4-ivory/60">
                {offer.delivery ? `Delivery: ${offer.delivery}` : "Fixed price"}
              </span>
            </span>
            <span className="shrink-0 font-v4-serif text-2xl text-v4-ivory lg:mt-auto lg:pt-2 lg:text-3xl">{offer.price}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
