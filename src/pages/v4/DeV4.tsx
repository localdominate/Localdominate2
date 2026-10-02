import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { DeAbout } from "@/components/v4/de/DeAbout";
import { DeCheckSection } from "@/components/v4/de/DeCheckSection";
import { DeFaq } from "@/components/v4/de/DeFaq";
import { DeHero } from "@/components/v4/de/DeHero";
import { DeOffers } from "@/components/v4/de/DeOffers";
import { DePartner } from "@/components/v4/de/DePartner";
import { DeTerms } from "@/components/v4/de/DeTerms";
import { ANCHORS, DEFAULT_SEGMENT, FAQ, SEO_DE } from "@/data/v4De";
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
    {
      // Derselbe Wortlaut wie die sichtbare Liste in DeFaq (eine Quelle: FAQ in v4De.ts).
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      inLanguage: "de",
      mainEntity: FAQ.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

/**
 * LocalDominate V4: deutsche Seite /de (Sie-Form, Ich-Form des Inhabers) für Hotels,
 * Ferienvermieter und Handwerk. Aufbau nach Copy-Deck: Weiche und Einstieg, Bedingungen, drei
 * Angebote, Person, Fragen, Formular.
 *
 * Das Segment startet immer auf Variante A, damit Vorrendern und Hydration übereinstimmen. Es
 * wechselt nur durch einen Klick oder eine Pfeiltaste. Ohne JavaScript bleibt Variante A stehen,
 * die drei Angebote, die Bedingungen und die Fragen sind trotzdem vollständig lesbar.
 */
export default function DeV4() {
  const [segment, setSegment] = useState<SegmentId>(DEFAULT_SEGMENT);
  const { hash, key } = useLocation();
  const checkRef = useRef<HTMLDivElement>(null);

  // „Kostenlosen Check anfordern“ führt zum Formular auf dieser Seite. `key` ändert sich bei jedem
  // Klick, also springt auch der zweite Klick auf denselben Anker wieder hin.
  useEffect(() => {
    if (hash !== `#${ANCHORS.check}`) return;
    const target = document.getElementById(ANCHORS.check);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    checkRef.current?.focus({ preventScroll: true });
  }, [hash, key]);

  return (
    <V4Page>
      <SEOHead title={SEO_DE.title} description={SEO_DE.description} canonicalUrl={PAGE_URL} lang="de" jsonLd={JSON_LD} />
      <div lang="de">
        <DeHero segment={segment} onSegmentChange={setSegment} />
        <DeTerms />
        <DeOffers segment={segment} />
        <DeAbout />
        <DePartner />
        <DeFaq />
        <DeCheckSection ref={checkRef} />
      </div>
    </V4Page>
  );
}
