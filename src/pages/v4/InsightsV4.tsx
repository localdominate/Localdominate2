import { useCallback, useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { FeaturedPicks } from "@/components/v4/insights/FeaturedPicks";
import { InsightsHero, RESULTS_ID } from "@/components/v4/insights/InsightsHero";
import { InsightsResults } from "@/components/v4/insights/InsightsResults";
import { useInsightsFilter } from "@/components/v4/insights/useInsightsFilter";
import { INSIGHT_ARTICLES, featuredPicks, insightPath } from "@/data/v4Insights";
import "@/components/v4/insights/insights.css";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/insights`;
const TITLE = "Insights: Local SEO and AI Search Guides | Local Dominator";
const DESCRIPTION = `Search ${INSIGHT_ARTICLES.length} guides on Google Maps, your business profile, reviews, AI search and measurement, for hotels, holiday rentals, trades and local services.`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
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
        { "@type": "ListItem", position: 2, name: "Insights", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#start-here`,
      name: "Start here",
      itemListElement: featuredPicks().map(({ article }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: article.title,
        url: `${SITE}${insightPath(article.slug)}`,
      })),
    },
  ],
};

/** Brings the list into view after a topic was picked or a search was sent, but only when it is below the fold. */
function useScrollToResults() {
  const [request, setRequest] = useState(0);

  useEffect(() => {
    if (request === 0) return;
    const results = document.getElementById(RESULTS_ID);
    if (!results) return;
    if (results.getBoundingClientRect().top < window.innerHeight * 0.55) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    results.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
  }, [request]);

  return useCallback(() => setRequest((n) => n + 1), []);
}

/** LocalDominate V4: Insights. A hub over the existing blog articles, found by topic or search. */
export default function InsightsV4() {
  const { filter, mode, touched, articles, topicCounts, summary, setQuery, toggleTopic, clear } = useInsightsFilter();
  const showResults = useScrollToResults();

  return (
    <V4Page>
      <SEOHead title={TITLE} description={DESCRIPTION} canonicalUrl={PAGE_URL} lang="en" jsonLd={JSON_LD} />

      <InsightsHero
        query={filter.query}
        topic={filter.topic}
        topicCounts={topicCounts}
        summary={summary}
        filterActive={mode !== "all"}
        onQuery={setQuery}
        onTopic={(topic) => {
          toggleTopic(topic);
          showResults();
        }}
        onShowResults={showResults}
      />

      {mode === "all" && <FeaturedPicks />}

      <InsightsResults mode={mode} topic={filter.topic} query={filter.query} articles={articles} touched={touched} onClear={clear} />

      <StateField field="dark" as="section" aria-labelledby="insights-close">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-10">
          <h2
            id="insights-close"
            className="font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.02] text-v4-ivory [text-wrap:balance]"
          >
            Not sure which guide fits your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-ui)] leading-relaxed text-v4-ivory/75 [text-wrap:pretty]">
            Send us the link to your Google profile or website. A person looks at it and sends you up to three concrete points to fix
            first, each with a short explanation. No obligation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CheckButton />
            <BookCallButton tone="outline" />
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
