import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { DeAbout } from "@/components/v4/de/DeAbout";
import { DeCheckSection } from "@/components/v4/de/DeCheckSection";
import { DeHero } from "@/components/v4/de/DeHero";
import { DeOffers } from "@/components/v4/de/DeOffers";
import { DeProcess } from "@/components/v4/de/DeProcess";
import { DeStyles } from "@/components/v4/de/DeStyles";
import { CHECK_ANCHOR, DEFAULT_SEGMENT, SEO_DE } from "@/data/v4De";
import type { SegmentId } from "@/data/v4De";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/de`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: SEO_DE.title,
      description: SEO_DE.description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "de",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: SEO_DE.breadcrumb, item: PAGE_URL },
      ],
    },
  ],
};

/**
 * LocalDominate V4: deutsche Kurzseite /de (Sie-Form) für Hotels, Ferienvermieter und Handwerk.
 * Das Segment startet immer auf demselben Wert, damit Vorrendern und Hydration übereinstimmen.
 * Der Link „Kostenlosen Check anfordern“ springt zum Formular auf dieser Seite.
 */
export default function DeV4() {
  const [segment, setSegment] = useState<SegmentId>(DEFAULT_SEGMENT);
  const { hash } = useLocation();
  const checkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash !== `#${CHECK_ANCHOR}`) return;
    const target = document.getElementById(CHECK_ANCHOR);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    checkRef.current?.focus({ preventScroll: true });
  }, [hash]);

  return (
    <V4Page>
      <SEOHead
        title={SEO_DE.title}
        description={SEO_DE.description}
        canonicalUrl={PAGE_URL}
        lang="de"
        jsonLd={JSON_LD}
        exactTitle
      />
      <DeStyles />
      <div lang="de">
        <DeHero segment={segment} onSegmentChange={setSegment} />
        <DeProcess />
        <DeOffers segment={segment} />
        <DeAbout />
        <DeCheckSection ref={checkRef} />
      </div>
    </V4Page>
  );
}
