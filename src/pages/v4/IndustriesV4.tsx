import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { WorldNav } from "@/components/v4/industries/WorldNav";
import { WorldSection } from "@/components/v4/industries/WorldSection";
import { CommissionCalculator } from "@/components/v4/industries/CommissionCalculator";
import { CALCULATOR_ANCHOR, INDUSTRY_ANCHORS, INDUSTRY_WORLDS } from "@/data/v4Industries";
import { CHECK_REPLY_TIME } from "@/lib/check";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/industries`;
const TITLE = "Websites & Local SEO for Hotels, Rentals and Trades";
const DESCRIPTION =
  "For hotels, holiday rentals, trades and premium local services: what LocalDominate checks first, what we build, and the fixed-price offer to start with.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Industries", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#worlds`,
      name: "Kinds of business",
      itemListElement: INDUSTRY_WORLDS.map((world, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: world.navLabel,
        url: `${PAGE_URL}#${world.id}`,
      })),
    },
  ],
};

/**
 * LocalDominate V4: Industries. Four kinds of business, each a full section with its own anchor
 * (`#hospitality`, `#holiday-rentals`, `#trades`, `#premium-services`), rendered one after the
 * other so the page reads the same without JavaScript. The commission calculator sits inside the
 * hospitality section and serves hotels and hosts alike.
 */
export default function IndustriesV4() {
  // React Router does not scroll to a hash, so a link such as /industries#trades needs this once
  // after mount. Web fonts can still be loading then and move the sections, so the position is set
  // again when they are ready. Both jumps are instant: a smooth scroll that is still running would
  // fight the second one. Anchor clicks inside the page are left to the browser.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!INDUSTRY_ANCHORS.includes(id)) return;
    let cancelled = false;
    const align = () => {
      if (!cancelled) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    };
    const frame = requestAnimationFrame(align);
    document.fonts?.ready.then(align).catch(() => undefined);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <V4Page>
      <SEOHead title={TITLE} description={DESCRIPTION} canonicalUrl={PAGE_URL} lang="en" jsonLd={JSON_LD} />

      <StateField field="dark" as="section" aria-labelledby="industries-hero">
        <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24">
          <SystemLabel as="p" className="text-v4-ivory/60">
            Industries
          </SystemLabel>
          <h1
            id="industries-hero"
            className="mt-6 max-w-[1150px] text-balance font-v4-sans text-[length:clamp(2.25rem,1.1rem+3.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
          >
            Websites and Google visibility for hotels, holiday rentals, trades and premium local services.
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <p className="max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              LocalDominate is a growth studio: strategy, brand, website and marketing as one project.
              The method is the same for every business. What we check first and what we build depends
              on how your customers find you and decide. Choose your kind of business.
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      <WorldNav />

      {INDUSTRY_WORLDS.map((world) => (
        <WorldSection key={world.id} world={world}>
          {world.id === "hospitality" && (
            <StateField field="dark" as="div">
              <CommissionCalculator id={CALCULATOR_ANCHOR} />
            </StateField>
          )}
        </WorldSection>
      ))}

      <StateField field="dark" as="section" aria-labelledby="industries-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            id="industries-start"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ivory"
          >
            Send the link. We tell you where we would start.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            A person looks at your Google profile or your website and sends you up to three concrete
            points to fix first, by email within {CHECK_REPLY_TIME}. If your business is not one of
            the four above, the check works the same way.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <p className="mx-auto mt-8 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
            Scope and a fixed price in writing before any work starts. No ranking promises.
          </p>
        </div>
      </StateField>
    </V4Page>
  );
}
