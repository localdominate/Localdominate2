import { lazy, Suspense } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Nav } from "@/components/v4/V4Nav";
import { AfterMount } from "@/components/v4/AfterMount";
import { V4Footer } from "@/components/v4/V4Footer";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { DadicationFilm } from "@/components/v4/DadicationFilm";
import { caseLabel, publishedCases, verifiedMetric } from "@/data/v4Cases";
import type { WorkCase } from "@/data/v4Cases";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

const PAGE_URL = "https://localdominate.org/work";

const WORK_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Selected Work & Case Studies – Local Dominator",
      isPartOf: { "@id": "https://localdominate.org/#website" },
      about: { "@id": "https://localdominate.org/#organization" },
      inLanguage: "en",
    },
  ],
};

const tagClass =
  "rounded-full border border-v4-ink/15 px-3 py-1 font-v4-sans text-xs text-v4-ink/70";

function Meta({ c }: { c: WorkCase }) {
  return (
    <SystemLabel as="p" className="text-v4-ink/60">
      {caseLabel(c)}
    </SystemLabel>
  );
}

function Metric({ c }: { c: WorkCase }) {
  const m = verifiedMetric(c);
  if (!m) return null;
  return (
    <div className="mt-6 border-t border-v4-ink/10 pt-5">
      <p className="font-v4-serif text-3xl text-v4-ink">{m.value}</p>
      <p className="font-v4-sans text-sm text-v4-ink/70">{m.label}</p>
    </div>
  );
}

function ExternalLink({ c }: { c: WorkCase }) {
  if (!c.url) return null;
  const host = c.url.replace(/^https:\/\//, "");
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
    >
      Visit {host} ↗
    </a>
  );
}

function CaseCard({ c }: { c: WorkCase }) {
  return (
    <article aria-labelledby={`case-${c.id}`} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
      <Meta c={c} />
      <h3 id={`case-${c.id}`} className="mt-3 font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">
        {c.name}
      </h3>
      <p className="font-v4-sans text-sm text-v4-ink/60">{c.title}</p>
      <p className="mt-4 font-v4-sans text-sm text-v4-ink/80">{c.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {c.scope.map((s) => (
          <li key={s} className={tagClass}>
            {s}
          </li>
        ))}
      </ul>
      <Metric c={c} />
      <ExternalLink c={c} />
    </article>
  );
}

/** LocalDominate V4 — Work: published cases, one click-to-play film, no unverified figures. */
export default function WorkV4() {
  const cases = publishedCases();
  const featured = cases.find((c) => c.hasVideo);
  const others = cases.filter((c) => c !== featured);

  return (
    <div className="v4 font-v4-sans">
      <SEOHead
        title="Selected Work & Case Studies – Local Dominator"
        description="Selected projects from Local Dominator: a US e-commerce brand launch, an AI-native travel platform, a non-profit web platform and a hotel direct-booking concept."
        canonicalUrl={PAGE_URL}
        lang="en"
        jsonLd={WORK_JSON_LD}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        Skip to content
      </a>
      <V4Nav />

      <main id="main-content">
        <StateField field="dark" as="section" aria-labelledby="work-hero">
          <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
            <SystemLabel as="p" className="text-v4-ivory/50">
              Work
            </SystemLabel>
            <h1
              id="work-hero"
              className="mt-6 font-v4-sans font-extrabold tracking-tight text-[length:var(--v4-text-hero)] leading-[0.95] text-v4-ivory"
            >
              Work we can show.
              <br />
              Claims we can back.
            </h1>
            <p className="mt-8 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
              Each project below is labelled for what it is: client work, consulting, a platform build,
              a role or a concept. Numbers appear only once we can document them.
            </p>
            <div className="mt-10">
              <BookCallButton />
            </div>
          </div>
        </StateField>

        {featured && (
          <StateField field="light" as="section" id="featured" aria-labelledby="work-featured">
            <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
              <SystemLabel as="p" className="mb-10 block text-v4-ink/60">
                Featured
              </SystemLabel>
              <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                <DadicationFilm priority />
                <div>
                  <Meta c={featured} />
                  <h2
                    id="work-featured"
                    className="mt-3 font-v4-serif text-[length:var(--v4-text-major)] leading-tight text-v4-ink"
                  >
                    {featured.name}
                  </h2>
                  <p className="mt-1 font-v4-sans text-base text-v4-ink/60">{featured.title}</p>
                  <p className="mt-5 font-v4-sans text-sm text-v4-ink/80">{featured.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {featured.scope.map((s) => (
                      <li key={s} className={tagClass}>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Metric c={featured} />
                  <p className="mt-6 font-v4-sans text-xs text-v4-ink/50">
                    Hero film of the store, shown with the client's consent. The store is not yet public.
                  </p>
                </div>
              </div>
            </div>
          </StateField>
        )}

        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="work-more">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" id="work-more" className="mb-10 block text-v4-ink/60">
              More projects
            </SystemLabel>
            <div className="grid gap-8 md:grid-cols-2">
              {others.map((c) => (
                <CaseCard key={c.id} c={c} />
              ))}
            </div>
          </div>
        </StateField>

        <StateField field="dark" as="section" aria-labelledby="work-cta">
          <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-10">
            <p id="work-cta" className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ivory">
              Have a project like one of these?
            </p>
            <p className="mx-auto mt-6 max-w-xl font-v4-sans text-sm text-v4-ivory/70">
              Tell us what is not working in a 15-minute call. You get an honest answer on whether and
              how we can help.
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
