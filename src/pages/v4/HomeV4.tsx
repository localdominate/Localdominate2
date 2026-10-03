import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { V4Nav } from "@/components/v4/V4Nav";
import { AfterMount } from "@/components/v4/AfterMount";
import { V4Footer } from "@/components/v4/V4Footer";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { SystemSteps } from "@/components/v4/home/SystemSteps";
import { OfferBand } from "@/components/v4/home/OfferBand";
import { SystemOrbit } from "@/components/v4/home/SystemOrbit";
import { DadicationFilm } from "@/components/v4/DadicationFilm";
import { ShowreelFilm } from "@/components/v4/ShowreelFilm";

import { verifiedProof } from "@/data/v4Proof";
import { caseLabel, publishedCases } from "@/data/v4Cases";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { HANDOVERS, HERO_TERMS, HOME_SEO, WORLDS } from "@/data/v4HomeData";
import { HOME_FAQ, faqEntries } from "@/data/v4Faq";
import { PageFaqSection } from "@/components/v4/PageFaq";
import { v4Route } from "@/lib/v4Routes";
import { CHECK_REPLY_TIME } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

import journeyImg from "@/assets/v4/ld-home-4-5-1600.webp";
import journeyImgSmall from "@/assets/v4/ld-home-4-5-800.webp";

/**
 * LocalDominate V4: Home. Live on `/`.
 *
 * One story from top to bottom: what LocalDominate is and what can be ordered (hero), why growth stalls (the hand-overs nobody
 * owns), the seven steps as one connected chain (the signature moment, with the showreel), the
 * work we can document, the kinds of business we work for, the terms, and the free check.
 * Photography cropped from a set the owner supplied directly. No client names or metrics are
 * rendered unless they pass `verifiedProof()`.
 *
 * SEO: title and description follow the studio positioning (HOME_SEO in v4HomeData.ts, owner
 * approval of 2026-10-03); canonical and hreflang are unchanged. The same component also serves
 * the noindex preview route (`preview`).
 */
// Teaser: the non-video published cases, first three (the video case has its own block).
const homeCases = publishedCases().filter((c) => !c.hasVideo).slice(0, 3);

// Until /industries is finished, the worlds link to the offers instead.
const industries = v4Route("industries");
// Until /insights is finished, "Insights" points at the existing blog index.
const insights = v4Route("insights");
const insightsHref = insights.ready ? insights.path : "/blog";
const worldHref = (anchor: string) => (industries.ready ? `${industries.path}#${anchor}` : "/services");

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

export default function HomeV4({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();
  const seo = HOME_SEO[language] ?? HOME_SEO.en;
  return (
    <div className="v4 font-v4-sans">
      {preview ? (
        <SEOHead
          title="LocalDominate V4 Preview — Home"
          description="Internal preview of the LocalDominate V4 Home redesign. Not the live site."
          noindex
          lang="en"
        />
      ) : (
        <SEOHead
          title={seo.title}
          description={seo.description}
          canonicalUrl="https://localdominate.org/"
          lang={language}
          alternateUrls={{
            de: "https://localdominate.org/",
            en: "https://localdominate.org/?lang=en",
            ar: "https://localdominate.org/?lang=ar",
          }}
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://localdominate.org/#webpage",
              "url": "https://localdominate.org/",
              "name": seo.title,
              "description": seo.description,
              "inLanguage": seo.locale,
              "dateModified": SEO_DATE_MODIFIED,
              "isPartOf": { "@id": "https://localdominate.org/#website" },
              "about": { "@id": "https://localdominate.org/#organization" },
            },
            // Same array as the visible "Short answers" section below.
            { "@context": "https://schema.org", ...faqPageJsonLd("https://localdominate.org/", faqEntries(HOME_FAQ)) },
          ]}
        />
      )}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        Skip to content
      </a>
      <V4Nav />

      <main id="main-content">
        {/* 01 HERO: what LocalDominate is (headline and the animated system), what can be ordered (band) */}
        <StateField field="dark" as="section" aria-labelledby="beat-hero">
          <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="flex flex-col gap-7">
              <SystemLabel className="leading-relaxed text-v4-ivory/60">
                Growth studio · Strategy, brand, website, marketing
              </SystemLabel>
              <h1
                id="beat-hero"
                className="font-v4-sans text-[length:clamp(2.75rem,1.6rem+3.8vw,5.75rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
              >
                One business.
                <br />
                One connected growth system.
              </h1>
              <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
                LocalDominate plans, builds and markets your brand, your website and your Google
                presence as one project instead of four separate jobs. Seven steps, one team, scope
                and price in writing before any work starts.
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
            <SystemOrbit className="mx-auto w-full max-w-[440px] lg:max-w-none" />
          </div>
          <OfferBand />
        </StateField>

        {/* TRUSTED BY: renders only verified, evidenced entries (none yet) */}
        {verifiedProof().length > 0 && (
          <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-trusted">
            <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">
              <SystemLabel id="beat-trusted" as="p" className="mb-6 block text-center text-v4-ink/60">
                Selected clients
              </SystemLabel>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                {verifiedProof().map((c) => (
                  <span key={c.name} className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink/70">
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </StateField>
        )}

        {/* 02 THE PROBLEM: five jobs, five hand-overs nobody owns */}
        <StateField field="light" as="section" aria-labelledby="beat-fragmentation">
          <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                The problem
              </SystemLabel>
              <h2 id="beat-fragmentation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ink`}>
                Growth stalls when five jobs are done by five parties.
              </h2>
              <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
                Each job can be done well and still not add up, because nobody owns the hand-overs
                between them. Check whether someone owns these five questions.
              </p>
            </div>
            <ol className="flex flex-col self-end">
              {HANDOVERS.map((h) => (
                <li key={h.from} className="grid gap-2 border-t border-v4-ink/15 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6">
                  <SystemLabel className="leading-relaxed text-v4-ink/60">
                    {h.from} <span aria-hidden="true">→</span>
                    <span className="sr-only"> to </span> {h.to}
                  </SystemLabel>
                  <span className="font-v4-sans text-base text-v4-ink">{h.question}</span>
                </li>
              ))}
            </ol>
          </div>
        </StateField>

        {/* 03 THE SYSTEM: the seven steps as one chain (signature moment), then the showreel */}
        <StateField field="dark" as="section" aria-labelledby="beat-steps">
          <div className="mx-auto grid max-w-[1300px] gap-14 px-6 pt-20 md:px-10 md:pt-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
                The system in seven steps
              </SystemLabel>
              <h2 id="beat-steps" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
                From the first look at the numbers to the next market.
              </h2>
              <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
                One party owns all seven steps, so each one starts from what the step before it
                found. You can begin at any step and stop after any step.
              </p>
              <Link to={PILLAR_BASE} className={`${textLink} mt-8 inline-block text-v4-ivory/80`}>
                How the seven steps fit together →
              </Link>
            </div>
            <SystemSteps />
          </div>

          <div className="mx-auto max-w-[1300px] px-6 pb-20 pt-20 md:px-10 md:pb-28">
            <div className="grid gap-8 border-t border-v4-ivory/15 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
                  Showreel
                </SystemLabel>
                <h3 className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ivory`}>
                  The system in 20 seconds.
                </h3>
                <p className="mt-5 max-w-sm font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
                  A silent ride through the seven steps, from Diagnose to Scale. It shows the method,
                  not results. Projects we can document are on the work page.
                </p>
              </div>
              <ShowreelFilm />
            </div>
          </div>
        </StateField>

        {/* 04 THE WORK: published cases (src/data/v4Cases.ts); no figures unless verified */}
        <StateField field="light" id="evidence" as="section" aria-labelledby="beat-evidence">
          <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              Selected work
            </SystemLabel>
            <h2 id="beat-evidence" className={`${h2Serif} max-w-3xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
              Each project is labelled for what it is. We publish results only when we can document them.
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <DadicationFilm />
                <p className="mt-4 font-v4-sans text-sm text-v4-ink/70">
                  <span className="font-medium text-v4-ink">Dadication</span>: US e-commerce brand launch, from
                  briefing to Shopify store. Pre-launch.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {homeCases.map((c) => (
                  <li key={c.id}>
                    <Link
                      to="/work"
                      className="group block rounded-2xl border border-v4-ink/10 bg-v4-white p-6 transition-colors hover:border-v4-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                    >
                      <SystemLabel className="text-v4-ink/60">{caseLabel(c, false)}</SystemLabel>
                      <span className="mt-3 flex items-baseline justify-between gap-4">
                        <span className="font-v4-sans text-lg font-semibold text-v4-ink">{c.name}</span>
                        <span aria-hidden="true" className="text-v4-ink/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-v4-ink">
                          →
                        </span>
                      </span>
                      <span className="mt-1 block font-v4-sans text-sm text-v4-ink/60">{c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/work" className={`${textLink} mt-10 inline-block text-v4-ink/70`}>
              See all work →
            </Link>
          </div>
        </StateField>

        {/* 05 WHO IT IS FOR: the four kinds of business */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-context">
          <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-white lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-[240px]">
                <img
                  src={journeyImgSmall}
                  srcSet={`${journeyImgSmall} 800w, ${journeyImg} 1600w`}
                  sizes="(max-width: 1023px) 92vw, 520px"
                  width={1600}
                  height={2000}
                  alt="Illustration: a wooden terrace deck beside a calm mountain lake at sunset"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-7 py-10 md:px-12 md:py-14">
                <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                  Who it is for
                </SystemLabel>
                <h2 id="beat-context" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                  One system, applied differently to each kind of business.
                </h2>
                <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
                  {WORLDS.map((world) => (
                    <li key={world.anchor} className="border-t border-v4-ink/15 py-5">
                      <Link
                        to={worldHref(world.anchor)}
                        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink"
                      >
                        <span className="font-v4-sans text-base font-semibold text-v4-ink group-hover:underline">
                          {world.title}
                        </span>
                        <span className="mt-2 block font-v4-sans text-sm leading-relaxed text-v4-ink/70">{world.body}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </StateField>

        {/* 06 HOW WE WORK: the terms, spelled out */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-operating-model">
          <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                How we work
              </SystemLabel>
              <h2 id="beat-operating-model" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                Four commitments, in writing.
              </h2>
              <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">
                One person is responsible for your project from the first check to the hand-over. AI
                is used for research and routine work. A person decides and edits what goes live.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <Link to="/services" className={`${textLink} text-v4-ink/70`}>
                  See services and prices →
                </Link>
                <Link to={insightsHref} className={`${textLink} text-v4-ink/70`}>
                  Explore Insights →
                </Link>
              </div>
            </div>
            <HowWeWork />
          </div>
        </StateField>

        {/* 07 SHORT ANSWERS: same array as the FAQPage JSON-LD */}
        <PageFaqSection id="home-faq" title="Short answers before you start." items={HOME_FAQ} />

        {/* 08 THE INVITATION */}
        <StateField field="dark" id="invitation" as="section" aria-labelledby="beat-invitation">
          <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
            <h2 id="beat-invitation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
              Tell us where the business is stuck.
            </h2>
            <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
              Send the link to your Google profile or website. You get up to three concrete points
              to fix first, by email within {CHECK_REPLY_TIME}. No obligation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CheckButton className="px-9 py-4 text-base" />
              <BookCallButton tone="outline" className="px-9 py-4 text-base" />
            </div>
          </div>
        </StateField>
      </main>

      <V4Footer />
      <AfterMount>
        <Suspense fallback={null}>
          <CookieBanner variant="v4" />
        </Suspense>
      </AfterMount>
    </div>
  );
}
