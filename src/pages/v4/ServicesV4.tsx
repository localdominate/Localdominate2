import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Nav } from "@/components/v4/V4Nav";
import { AfterMount } from "@/components/v4/AfterMount";
import { V4Footer } from "@/components/v4/V4Footer";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { Node } from "@/components/v4/Node";
import { OFFERS } from "@/data/v4Offers";
import type { Offer } from "@/data/v4Offers";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

const PAGE_URL = "https://localdominate.org/services";

const STEPS = [
  { title: "15-minute call", body: "You tell us what is not working. We tell you honestly whether one of the four offers fits." },
  { title: "Written scope and price", body: "You get the scope and the price in writing before any work starts." },
  { title: "Delivery and hand-over", body: "We deliver, then hand over a short written summary of what changed and why." },
] as const;

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

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      aria-labelledby={`offer-${offer.id}`}
      className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7"
    >
      <h3 id={`offer-${offer.id}`} className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">
        {offer.name}
      </h3>
      <p className="mt-3 font-v4-sans text-sm text-v4-ink/70">{offer.summary}</p>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-v4-ink/10 pt-5">
        <p className="font-v4-serif text-3xl text-v4-ink">{offer.price}</p>
        {offer.priceNote && <p className="font-v4-sans text-sm text-v4-ink/70">{offer.priceNote}</p>}
      </div>
      {offer.delivery && (
        <SystemLabel as="p" className="mt-3 text-v4-ink/70">
          Delivery: {offer.delivery}
        </SystemLabel>
      )}

      <ul className="mt-6 flex flex-col gap-2">
        {offer.includes.map((item) => (
          <li key={item} className="flex gap-3 font-v4-sans text-sm text-v4-ink/80">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 font-v4-sans text-sm text-v4-ink/60">
        <span className="font-medium text-v4-ink">Best for: </span>
        {offer.bestFor}
      </p>

      <div className="mt-8">
        <BookCallButton className="w-full sm:w-auto" />
      </div>
    </article>
  );
}

/** LocalDominate V4 — Services: four fixed-scope offers, one action (book a 15-minute call). */
export default function ServicesV4() {
  return (
    <div className="v4 font-v4-sans">
      <SEOHead
        title="Services & Fixed-Price Offers – Local Dominator"
        description="Four fixed-scope offers with clear starting prices: 72h Conversion Sprint, AI Automation Starter, Google Profile Quick-Fix and Website in 5 Days."
        canonicalUrl={PAGE_URL}
        lang="en"
        jsonLd={SERVICES_JSON_LD}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        Skip to content
      </a>
      <V4Nav />

      <main id="main-content">
        <StateField field="dark" as="section" aria-labelledby="services-hero">
          <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
            <SystemLabel as="p" className="text-v4-ivory/50">
              Services
            </SystemLabel>
            <h1
              id="services-hero"
              className="mt-6 font-v4-sans font-extrabold tracking-tight text-[length:var(--v4-text-hero)] leading-[0.95] text-v4-ivory"
            >
              Fixed scope.
              <br />
              Fixed price.
              <br />
              Four ways to start.
            </h1>
            <p className="mt-8 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
              Each offer has a defined scope and a starting price. Book a 15-minute call, and
              you get the exact scope and price in writing before any work begins.
            </p>
            <div className="mt-10">
              <BookCallButton />
            </div>
          </div>
        </StateField>

        <StateField field="light" as="section" id="offers" aria-labelledby="services-offers">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" id="services-offers" className="mb-10 block text-v4-ink/60">
              The four offers
            </SystemLabel>
            <div className="grid gap-8 md:grid-cols-2">
              {OFFERS.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
            <p className="mt-8 max-w-2xl font-v4-sans text-sm text-v4-ink/60">
              Starting prices. Final scope and price are confirmed in writing before we start.
            </p>
            <p className="mt-3 max-w-2xl font-v4-sans text-sm text-v4-ink/60">
              Not sure which offer fits? The{" "}
              <Link to="/approach" className="text-v4-ink underline underline-offset-4">
                seven steps
              </Link>{" "}
              show where each one sits in a full project.
            </p>
          </div>
        </StateField>

        <StateField field="dark" as="section" aria-labelledby="services-how">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <p id="services-how" className="mb-12 font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ivory">
              How it works
            </p>
            <ol className="grid gap-10 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex flex-col gap-4">
                  <Node label="" state={i === 0 ? "selected" : "outcome"} size="sm" decorative />
                  <p className="font-v4-sans text-base font-medium text-v4-ivory">{step.title}</p>
                  <p className="font-v4-sans text-sm text-v4-ivory/70">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </StateField>

        <StateField field="light" as="section" aria-labelledby="services-promise">
          <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-10">
            <p id="services-promise" className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ink">
              We do not promise results. We document every change.
            </p>
            <p className="mx-auto mt-6 max-w-xl font-v4-sans text-sm text-v4-ink/70">
              You can then measure the effect with your own numbers. If a first look shows a bigger
              job, we send a separate quote, with no obligation.
            </p>
            <div className="mt-10">
              <BookCallButton />
            </div>
          </div>
        </StateField>
      </main>

      <V4Footer />
      <AfterMount>
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
      </AfterMount>
    </div>
  );
}
