import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { OFFERS } from "@/data/v4Offers";
import { HERO_OFFER_ORDER } from "@/data/v4HomeData";

/**
 * The hero's answer to "what can I order here?": the full project first, then the four fixed-price
 * offers with price and delivery time. Names, prices and delivery times come straight from
 * v4Offers.ts, so this panel can never disagree with /services.
 */
const offers = HERO_OFFER_ORDER.map((id) => OFFERS.find((o) => o.id === id)).filter(
  (o): o is (typeof OFFERS)[number] => Boolean(o)
);

export function OfferPanel() {
  return (
    <aside aria-labelledby="hero-offers" className="rounded-2xl bg-v4-ivory p-6 text-v4-ink md:p-8">
      <SystemLabel as="p" id="hero-offers" className="text-v4-ink/60">
        What you can order
      </SystemLabel>

      <div className="mt-5 border-t border-v4-ink/15 py-5">
        <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.1]">The full growth project</p>
        <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ink/70">
          Strategy, brand, website and marketing from one team, in the steps your business needs. Scope
          and price in writing before work starts.
        </p>
      </div>

      <SystemLabel as="p" className="border-t border-v4-ink/15 pt-5 text-v4-ink/60">
        Or start with a fixed-price offer
      </SystemLabel>
      <ul className="mt-2">
        {offers.map((offer) => (
          <li key={offer.id} className="flex items-baseline justify-between gap-4 border-b border-v4-ink/10 py-3 last:border-b-0">
            <span>
              <span className="block font-v4-sans text-base font-semibold tracking-tight">{offer.name}</span>
              {offer.delivery && (
                <span className="mt-0.5 block font-v4-sans text-xs text-v4-ink/60">Delivery: {offer.delivery}</span>
              )}
            </span>
            <span className="shrink-0 font-v4-serif text-xl">{offer.price}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/services"
        className="mt-5 inline-block font-v4-sans text-sm font-medium underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink"
      >
        See scope and prices →
      </Link>
    </aside>
  );
}
