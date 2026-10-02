import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { CreatorsHero } from "@/components/v4/creators/CreatorsHero";
import { BrandAnswers } from "@/components/v4/creators/BrandAnswers";
import { LiveDemo } from "@/components/v4/creators/LiveDemo";
import { PageSections } from "@/components/v4/creators/PageSections";
import { Comparison } from "@/components/v4/creators/Comparison";
import { PriceCards } from "@/components/v4/creators/PriceCards";
import { MoreServices } from "@/components/v4/creators/MoreServices";
import { CreatorRules, CreatorSteps } from "@/components/v4/creators/CreatorSteps";
import { CreatorForm, CreatorsFaq } from "@/components/v4/creators/CreatorsFaq";
import { CREATORS_JSON_LD, CREATORS_SEO, CREATORS_URL, CREATOR_ANCHOR_IDS } from "@/data/v4Creators";

/**
 * LocalDominate V4: Creators. Sales page for done-for-you creator portfolio and media kit pages.
 *
 * Top to bottom: what it is and what it costs (hero), what a brand checks, the live demo of a
 * fictional creator, what is on the page, the three prices, the four steps, the comparison with
 * what creators use today, the rules, the FAQ, three further services on request and the request
 * form.
 *
 * Differences to the other V4 pages (owner's instruction of 2 October 2026): the primary action is
 * "Get my page", an anchor to the form on this page, and the prices come from v4Creators.ts.
 * All copy, prices and the JSON-LD live in src/data/v4Creators.ts.
 */
export default function CreatorsV4() {
  // React Router does not scroll to a hash, so a link such as /creators#prices needs this once
  // after mount, and again when the web fonts are in (they move the sections). Both jumps are
  // instant. Anchor clicks inside the page are left to the browser.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!CREATOR_ANCHOR_IDS.includes(id)) return;
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
      <SEOHead
        title={CREATORS_SEO.title}
        description={CREATORS_SEO.description}
        canonicalUrl={CREATORS_URL}
        lang="en"
        jsonLd={CREATORS_JSON_LD}
        ogImage="https://localdominate.org/images/v4/social/ld-social-creators-1200x630.jpg"
      />
      <CreatorsHero />
      <BrandAnswers />
      <LiveDemo />
      <PageSections />
      <PriceCards />
      <CreatorSteps />
      <Comparison />
      <CreatorRules />
      <CreatorsFaq />
      <MoreServices />
      <CreatorForm />
    </V4Page>
  );
}
