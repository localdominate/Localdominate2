/**
 * FAQPage JSON-LD from the same array that renders the visible FAQ, so the markup can never
 * differ from what a reader sees (Google's rule for FAQ structured data).
 */
export type FaqEntry = { q: string; a: string };

export const faqPageJsonLd = (pageUrl: string, items: readonly FaqEntry[]) => ({
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
