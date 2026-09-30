import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { V4Nav } from "@/components/v4/V4Nav";
import { AfterMount } from "@/components/v4/AfterMount";
import { V4Footer } from "@/components/v4/V4Footer";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EditorialStatement } from "@/components/v4/EditorialStatement";
import { Node } from "@/components/v4/Node";
import { SignatureSystem } from "@/components/v4/SignatureSystem";

import { verifiedProof } from "@/data/v4Proof";
import { caseLabel, publishedCases } from "@/data/v4Cases";
import { DadicationFilm } from "@/components/v4/DadicationFilm";
import { PILLAR_INDEX, PILLAR_BASE, pillarPath } from "@/data/v4PillarIndex";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

import heroImg from "@/assets/v4/hq_pool_building_mountain.jpg";
import journeyImg from "@/assets/v4/hq_mountain_lake_sunset.jpg";

const FRAGMENTED = [
  { label: "Strategy", pos: "top-0 left-4 md:left-10" },
  { label: "Brand", pos: "top-10 right-6 md:right-24" },
  { label: "Website", pos: "top-40 left-10 md:left-32" },
  { label: "Marketing", pos: "top-48 right-4 md:right-10" },
  { label: "Data", pos: "top-72 left-1/2 -translate-x-1/2" },
] as const;

// Verifiable facts only (Project Bible V4, Hard Rule 06 — Truth first).
const SYSTEM_FACTS = [
  { value: "7", label: "Steps, diagnosis to scale" },
  { value: "1", label: "Connected system" },
  { value: "DE + EN", label: "Markets" },
] as const;

/**
 * LocalDominate V4 — Home, "The Business Awakens". Live on `/`.
 * Photography cropped from a set the owner supplied directly. No client names or metrics are
 * rendered unless they pass `verifiedProof()`.
 *
 * SEO: on `/` the head (title, description, canonical, hreflang, JSON-LD) is deliberately the same
 * as the previous home page, so the switch changes page content only (CLAUDE.md Hard Rule 1). The
 * same component also serves the noindex preview route (`preview`).
 */
// Teaser: the non-video published cases, first three (the video case has its own block).
const homeCases = publishedCases().filter((c) => !c.hasVideo).slice(0, 3);

export default function HomeV4({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();
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
          title={language === "en" ? "Local Dominator – Local SEO & AI Visibility" : language === "ar" ? "Local Dominator – تحسين الظهور المحلي وفي بحث AI" : "Local Dominator – Local SEO & AI-Sichtbarkeit"}
          description={language === "en" ? "Local SEO and AI visibility for local businesses: Google Business Profile optimisation, structured data and practical guidance." : language === "ar" ? "تحسين الظهور المحلي للشركات عبر Google Business Profile والبيانات المنظمة والبحث المدعوم بالذكاء الاصطناعي." : "Local SEO und AI-Sichtbarkeit für lokale Unternehmen: Google Business Profile, strukturierte Daten und praxisnahe Fachbeiträge."}
          canonicalUrl="https://localdominate.org/"
          lang={language}
          alternateUrls={{
            de: "https://localdominate.org/",
            en: "https://localdominate.org/?lang=en",
            ar: "https://localdominate.org/?lang=ar",
          }}
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://localdominate.org/#webpage",
            "url": "https://localdominate.org/",
            "name": language === "de" ? "Local Dominator – Local SEO & AI-Sichtbarkeit" : "Local Dominator – Local SEO & AI Visibility",
            "description": language === "de" ? "Local SEO und AI-Sichtbarkeit für lokale Unternehmen." : "Local SEO and AI visibility for local businesses.",
            "inLanguage": language === "de" ? "de-DE" : language === "ar" ? "ar" : "en-GB",
            "isPartOf": { "@id": "https://localdominate.org/#website" },
            "about": { "@id": "https://localdominate.org/#organization" },
          }}
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
        {/* 01 — THE BUSINESS (above the fold) */}
        <StateField field="dark" as="section" className="min-h-screen flex items-center" aria-labelledby="beat-hero">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10">
            <div className="flex flex-col gap-8">
              <SystemLabel className="text-v4-ivory/50">Better Brands. Stronger Businesses.</SystemLabel>
              <h1 id="beat-hero" className="font-v4-sans font-extrabold tracking-tight text-[length:var(--v4-text-hero)] leading-[0.95] text-v4-ivory">
                One business.
                <br />
                One connected growth system.
              </h1>
              <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
                Strategy, brand, website and marketing usually run as separate jobs with
                separate briefs. We run them as one sequence, for hotels, premium service
                businesses and brands in the DACH region and beyond.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-hidden="true">
                {["Strategy", "Brand", "Build", "Growth"].map((word, i) => (
                  <span key={word} className="flex items-center gap-3">
                    <SystemLabel className="text-v4-ivory/50">{word}</SystemLabel>
                    {i < 3 && <span className="h-px w-4 bg-v4-ivory/20" />}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <BookCallButton />
                <Link
                  to="/services"
                  className="rounded-full border border-v4-ivory/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ivory/90 transition-colors hover:border-v4-ivory/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
                >
                  See services and prices
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[5/6]">
              <img
                src={heroImg}
                alt="Premium hospitality property at sunset, overlooking a mountain lake"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-v4-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </StateField>

        {/* TRUSTED BY — renders only verified, evidenced entries (none yet) */}
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

        {/* 02 — THE PROBLEM / FRAGMENTATION */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-labelledby="beat-fragmentation">
          <div className="mx-auto max-w-[1000px] px-6 py-20 md:px-10">
            <div className="relative mx-auto mb-16 h-80 max-w-md" aria-hidden="true">
              {FRAGMENTED.map((f) => (
                <span
                  key={f.label}
                  className={`absolute ${f.pos} rounded-full border border-v4-ivory/20 px-4 py-2 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory/50`}
                >
                  {f.label}
                </span>
              ))}
            </div>
            <div className="text-center">
              <EditorialStatement id="beat-fragmentation">
                Growth stalls when five jobs are done by five parties.
              </EditorialStatement>
              <p className="mx-auto mt-6 max-w-md font-v4-sans text-sm text-v4-ivory/50">
                Each job can be done well and still not add up, because nobody owns how
                strategy, brand, website, marketing and data fit together.
              </p>
            </div>
          </div>
        </StateField>

        {/* 03+04 — THE CONNECTION → THE SYSTEM AWAKENS (Signature Interaction, combined) */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-labelledby="beat-signature-system">
          <div className="mx-auto max-w-[1400px] py-16">
            <div className="px-6 md:px-10">
              <SystemLabel as="p" id="beat-signature-system" className="text-v4-ivory/50">
                The Signature System: how strategy becomes one connected system
              </SystemLabel>
            </div>
            <SignatureSystem />
          </div>
        </StateField>

        {/* THE SEVEN STEPS: the same order as the showreel; each step has its own page */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-steps">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              The system in seven steps
            </SystemLabel>
            <h2
              id="beat-steps"
              className="max-w-2xl font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ink"
            >
              From the first look at the numbers to the next market.
            </h2>
            <ol className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
              {PILLAR_INDEX.map((p) => (
                <li key={p.id} className="border-t border-v4-ink/10">
                  <Link
                    to={pillarPath(p.id)}
                    className="group flex h-full flex-col gap-2 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                  >
                    <SystemLabel className="text-v4-ink/60">{p.n}</SystemLabel>
                    <span className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink group-hover:underline">
                      {p.name}
                    </span>
                    <span className="font-v4-sans text-sm text-v4-ink/70">{p.question}</span>
                    <span className="mt-1 font-v4-sans text-xs text-v4-ink/60">{p.parts.join(" · ")}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              to={PILLAR_BASE}
              className="mt-8 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              How the seven steps fit together →
            </Link>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-v4-ink/10 pt-10">
              {SYSTEM_FACTS.map((s) => (
                <div key={s.label}>
                  <p className="font-v4-serif text-3xl text-v4-ink">{s.value}</p>
                  <SystemLabel className="mt-1 block text-v4-ink/60">{s.label}</SystemLabel>
                </div>
              ))}
            </div>
          </div>
        </StateField>

        {/* 05 — THE WORK: published cases (src/data/v4Cases.ts); no figures unless verified */}
        <StateField field="light" id="evidence" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-evidence">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" id="beat-evidence" className="mb-6 block text-v4-ink/60">Selected work</SystemLabel>
            <p className="max-w-2xl font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              Each project is labelled for what it is. We publish results only when we can document them.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <DadicationFilm />
                <p className="mt-4 font-v4-sans text-sm text-v4-ink/70">
                  <span className="font-medium text-v4-ink">Dadication</span>: US e-commerce brand launch, from
                  briefing to Shopify store. Pre-launch.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {homeCases.map((c) => (
                  <li key={c.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-6">
                    <SystemLabel className="text-v4-ink/60">
                      {caseLabel(c, false)}
                    </SystemLabel>
                    <p className="mt-2 font-v4-sans text-lg font-semibold text-v4-ink">{c.name}</p>
                    <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{c.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/work"
              className="mt-10 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline"
            >
              See all work →
            </Link>
          </div>
        </StateField>

        {/* 06 — THE CONTEXT */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-context">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="grid gap-8 overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-white md:grid-cols-[1fr_1.2fr]">
              <div className="relative min-h-[220px]">
                <img
                  src={journeyImg}
                  alt="A road winding through a forested mountain valley toward a lake"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-8 py-10 md:pl-0 md:pr-12">
                <p id="beat-context" className="font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
                  One system, applied differently to each kind of business.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {[
                    { title: "Hospitality", body: "A hotel needs direct bookings, not just visits. We judge the website by the bookings it produces." },
                    { title: "Premium B2B", body: "A considered sale needs credibility before the first contact. Proof comes before the pitch." },
                    { title: "Ambitious SMEs", body: "A growing team needs to move fast without breaking what already works." },
                    { title: "Consumer brands", body: "A challenger brand needs proof and recognition early, more than another awareness campaign." },
                  ].map((row) => (
                    <div key={row.title}>
                      <p className="font-v4-sans text-sm font-medium text-v4-ink">{row.title}</p>
                      <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{row.body}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-8 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline"
                >
                  See services and prices →
                </Link>
              </div>
            </div>
          </div>
        </StateField>

        {/* 07 — THE OPERATING MODEL + INTELLIGENCE (combined) */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-operating-model">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <p id="beat-operating-model" className="mb-10 font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              Why one team for all seven steps.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { title: "One direction", body: "Every step refers back to the same diagnosis and positioning, not to four separate briefs." },
                { title: "AI for routine work", body: "We use it for research, analysis and repetitive tasks. People decide and edit what goes live." },
                { title: "Data carries forward", body: "Each campaign leaves data that the next one starts from, instead of starting cold." },
              ].map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-4">
                  <Node label="" state="selected" size="sm" decorative />
                  <p className="font-v4-sans text-base font-medium text-v4-ink">{pillar.title}</p>
                  <p className="font-v4-sans text-sm text-v4-ink/60">{pillar.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-6 font-v4-sans text-sm">
              <Link to="/services" className="text-v4-ink/70 underline-offset-4 hover:underline">
                See services and prices →
              </Link>
              <Link to="/blog" className="text-v4-ink/70 underline-offset-4 hover:underline">
                Explore Insights →
              </Link>
            </div>
          </div>
        </StateField>

        {/* 08 — THE INVITATION */}
        <StateField field="light" id="invitation" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-invitation">
          <div className="mx-auto max-w-[900px] px-6 py-28 text-center md:px-10">
            <p id="beat-invitation" className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ink">
              Tell us where the business is stuck.
            </p>
            <div className="mt-10">
              <BookCallButton className="px-9 py-4 text-base" />
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
