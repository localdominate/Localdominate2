import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { FullProject } from "@/components/v4/services/FullProject";
import { OfferCard } from "@/components/v4/services/OfferCard";
import { OfferIndex } from "@/components/v4/services/OfferIndex";
import { ServicesFaq } from "@/components/v4/services/ServicesFaq";
import { HERO_OFFER_ORDER, HERO_TERMS } from "@/data/v4HomeData";
import { OFFERS } from "@/data/v4Offers";
import type { Offer } from "@/data/v4Offers";
import { CHECK_REPLY_TIME } from "@/lib/check";

const PAGE_URL = "https://localdominate.org/services";

/** "from 390 €" -> 390; "1,490" -> 1490. The price text stays the source of truth. */
const minPriceOf = (price: string): number => Number(price.replace(/[^\d,]/g, "").replace(",", ""));

const offerToJsonLd = (offer: Offer) => ({
  "@type": "Offer",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "EUR",
    minPrice: minPriceOf(offer.price),
  },
  itemOffered: {
    "@type": "Service",
    name: offer.name,
    description: offer.summary,
    provider: { "@id": "https://localdominate.org/#organization" },
  },
});

/** Frozen (CLAUDE.md Hard Rule 1): the catalogue keeps the order of v4Offers.ts, not the display order. */
const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Services & Fixed-Price Offers – Local Dominator",
      isPartOf: { "@id": "https://localdominate.org/#website" },
      about: { "@id": "https://localdominate.org/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: "Local Dominator offers",
      itemListElement: OFFERS.map(offerToJsonLd),
    },
  ],
};

/** Display order: the same as the hero panel of the home page (largest scope first). */
const offersInDisplayOrder: readonly Offer[] = [
  ...HERO_OFFER_ORDER.flatMap((id) => OFFERS.filter((o) => o.id === id)),
  ...OFFERS.filter((o) => !(HERO_OFFER_ORDER as readonly string[]).includes(o.id)),
];

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "inline-flex min-h-[44px] items-center font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4: Services. The four fixed-price offers as a rate card, the full growth project,
 * the terms ("How we work", shared with Home and the free-check page) and short answers.
 * Primary action everywhere: the free check. The call is offered in the hero and once at the end.
 */
export default function ServicesV4() {
  return (
    <V4Page>
      <SEOHead
        title="Services & Fixed-Price Offers – Local Dominator"
        description="Four fixed-scope offers with clear starting prices: 72h Conversion Sprint, AI Automation Starter, Google Profile Quick-Fix and Website in 5 Days."
        canonicalUrl={PAGE_URL}
        lang="en"
        jsonLd={SERVICES_JSON_LD}
      />

      {/* 01 HERO: what can be ordered, what it costs, the one action */}
      <StateField field="dark" as="section" aria-labelledby="services-hero">
        <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-7">
            <SystemLabel as="p" className="text-v4-ivory/60">
              Services
            </SystemLabel>
            <h1
              id="services-hero"
              className="font-v4-sans text-[length:clamp(2.75rem,1.4rem+3.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
            >
              Fixed scope.
              <br />
              Fixed price.
              <br />
              Four ways to start.
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              Each offer has a defined scope and a starting price. Start with the free check: send
              the link to your Google profile or website, and we reply by email within{" "}
              {CHECK_REPLY_TIME} with what we would fix first and whether one of the offers fits. You
              get the exact scope and price in writing before any work begins.
            </p>
            <div className="flex flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {HERO_TERMS.map((term) => (
                <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
          <OfferIndex offers={offersInDisplayOrder} />
        </div>
      </StateField>

      {/* 02 THE OFFERS: one rate card, four rows */}
      <StateField field="light" as="section" id="offers" aria-labelledby="services-offers">
        <div className="mx-auto max-w-[1300px] px-6 pb-10 pt-20 md:px-10 md:pb-12 md:pt-28">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                The four offers
              </SystemLabel>
              <h2 id="services-offers" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                What each offer includes, what it costs and who it is for.
              </h2>
            </div>
            <p className="max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">
              Starting prices. Final scope and price are confirmed in writing before we start. Not
              sure which one fits? The free check answers that: if one of the four fits, we say
              which one and why. If none fits, we say that too.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-5">
            {offersInDisplayOrder.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </StateField>

      {/* 03 THE FULL PROJECT: no price, scope in writing */}
      <StateField field="light" as="section" aria-labelledby="services-full-project">
        <div className="mx-auto max-w-[1300px] px-6 pb-20 md:px-10 md:pb-28">
          <FullProject />
        </div>
      </StateField>

      {/* 04 HOW WE WORK: the terms, once */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="services-how">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              How we work
            </SystemLabel>
            <h2 id="services-how" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
              Four commitments, in writing.
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">
              They apply to every offer on this page and to the full growth project. The one
              exception is printed below the list.
            </p>
            <Link to="/work" className={`${textLink} mt-6 text-v4-ink/70`}>
              See selected work →
            </Link>
          </div>
          <HowWeWork />
        </div>
      </StateField>

      {/* 05 SHORT ANSWERS: only confirmed terms */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="services-faq">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            Questions
          </SystemLabel>
          <h2 id="services-faq" className={`${h2Serif} max-w-2xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            Short answers before you start.
          </h2>
          <div className="mt-12">
            <ServicesFaq />
          </div>
        </div>
      </StateField>

      {/* 06 THE INVITATION */}
      <StateField field="dark" as="section" aria-labelledby="services-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="services-start" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            Not sure which offer fits? Start with the free check.
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            Send the link to your Google profile or website. You get up to three concrete points to
            fix first, by email within {CHECK_REPLY_TIME}, and we say whether one of the four offers
            fits. No obligation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
