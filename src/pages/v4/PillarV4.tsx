import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { StepRail } from "@/components/v4/StepRail";
import { caseLabel } from "@/data/v4Cases";
import { PILLAR_BASE, PILLAR_INDEX, pillarById, pillarPath } from "@/data/v4PillarIndex";
import type { PillarIndexEntry } from "@/data/v4PillarIndex";
import { PILLAR_COPY, pillarCases, pillarOffers } from "@/data/v4Pillars";

const SITE = "https://localdominate.org";

const linkClass =
  "font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

function jsonLdFor(p: PillarIndexEntry) {
  const copy = PILLAR_COPY[p.id];
  const url = `${SITE}${pillarPath(p.id)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: copy.seoTitle,
        description: copy.seoDescription,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Approach", item: `${SITE}${PILLAR_BASE}` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: copy.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/** One of the seven step pages. The step is taken from the URL, see `PILLAR_INDEX`. */
export default function PillarV4() {
  const { pathname } = useLocation();
  const id = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  const p = pillarById(id);
  if (!p) return null; // unreachable: routes exist only for the known steps

  const copy = PILLAR_COPY[p.id];
  const i = PILLAR_INDEX.findIndex((x) => x.id === p.id);
  const prev = PILLAR_INDEX[i - 1];
  const next = PILLAR_INDEX[i + 1];
  const cases = pillarCases(p.id);
  const offers = pillarOffers(p.id);

  return (
    <V4Page>
      <SEOHead
        title={copy.seoTitle}
        description={copy.seoDescription}
        canonicalUrl={`${SITE}${pillarPath(p.id)}`}
        lang="en"
        jsonLd={jsonLdFor(p)}
      />

      <StateField field="dark" as="section" className="relative overflow-hidden" aria-labelledby="step-hero">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-6 select-none font-v4-serif text-[clamp(9rem,26vw,22rem)] leading-none text-v4-ivory/[0.06]"
        >
          {p.n}
        </span>
        <div className="relative mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
          <SystemLabel as="p" className="text-v4-ivory/50">
            {`Step ${p.n} of 07 · ${p.name}`}
          </SystemLabel>
          <h1
            id="step-hero"
            className="mt-6 max-w-[22ch] font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[1] tracking-tight text-v4-ivory md:max-w-[26ch]"
          >
            {copy.h1}
          </h1>
          <p className="mt-8 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">{copy.lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
            <Link
              to={PILLAR_BASE}
              className="font-v4-sans text-sm text-v4-ivory/70 underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              All seven steps
            </Link>
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="div" className="border-t border-v4-ivory/10">
        <StepRail current={p.id} />
      </StateField>

      <StateField field="light" as="section" aria-labelledby="step-question">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            The question of this step
          </SystemLabel>
          <h2
            id="step-question"
            className="max-w-3xl font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ink"
          >
            {p.question}
          </h2>
          <p className="mt-6 max-w-xl font-v4-sans text-sm text-v4-ink/60">{copy.place}</p>

          <SystemLabel as="p" className="mb-8 mt-16 block text-v4-ink/60">
            What happens in this step
          </SystemLabel>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.parts.map((part) => (
              <article key={part.name} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{part.name}</h3>
                <p className="mt-3 font-v4-sans text-sm text-v4-ink/80">{part.text}</p>
              </article>
            ))}
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="step-output">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <h2 id="step-output" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ivory">
              What you get
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {copy.produces.map((item) => (
                <li key={item} className="flex gap-3 font-v4-sans text-sm text-v4-ivory/80">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ivory">
              Signs you need it
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {copy.signs.map((item) => (
                <li key={item} className="flex gap-3 font-v4-sans text-sm text-v4-ivory/80">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ivory/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="step-cases">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <h2 id="step-cases" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
            Where this step shows up in our work
          </h2>
          {cases.length > 0 ? (
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {cases.map(({ case: c, note }) => (
                <li key={c.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                  <SystemLabel as="p" className="text-v4-ink/60">
                    {caseLabel(c, false)}
                  </SystemLabel>
                  <p className="mt-3 font-v4-sans text-lg font-semibold text-v4-ink">{c.name}</p>
                  <p className="mt-3 font-v4-sans text-sm text-v4-ink/80">{note}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-xl font-v4-sans text-sm text-v4-ink/70">
              We do not show a project for this step on its own yet. We add one as soon as we can document it.
            </p>
          )}
          <Link to="/work" className={`mt-8 inline-block ${linkClass}`}>
            All projects and how they are labelled
          </Link>

          {offers.length > 0 && (
            <div className="mt-16 border-t border-v4-ink/10 pt-12">
              <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
                Start this step
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-2">
                {offers.map((o) => (
                  <li key={o.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                    <p className="font-v4-sans text-lg font-semibold text-v4-ink">{o.name}</p>
                    <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">{o.summary}</p>
                    <p className="mt-4 font-v4-serif text-2xl text-v4-ink">{o.price}</p>
                  </li>
                ))}
              </ul>
              <Link to="/services#offers" className={`mt-8 inline-block ${linkClass}`}>
                Scope and details of all offers
              </Link>
            </div>
          )}
          {offers.length === 0 && (
            <p className="mt-12 max-w-xl border-t border-v4-ink/10 pt-8 font-v4-sans text-sm text-v4-ink/70">
              This step is part of larger projects. Scope and price are agreed on a call and confirmed in
              writing before work starts.
            </p>
          )}
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="step-faq">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10">
          <h2 id="step-faq" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
            Questions about this step
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {copy.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-v4-sans text-base font-medium text-v4-ink">{f.q}</h3>
                <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
          {copy.related.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-v4-ink/10 pt-8">
              {copy.related.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className={linkClass}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="step-next">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="flex gap-10">
              {prev && (
                <Link
                  to={pillarPath(prev.id)}
                  rel="prev"
                  className="flex flex-col gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                >
                  <SystemLabel className="text-v4-ivory/50">{`Before · ${prev.n}`}</SystemLabel>
                  <span className="font-v4-sans text-lg text-v4-ivory hover:underline">{prev.name}</span>
                </Link>
              )}
              {next && (
                <Link
                  to={pillarPath(next.id)}
                  rel="next"
                  className="flex flex-col gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                >
                  <SystemLabel className="text-v4-signal">{`Next · ${next.n}`}</SystemLabel>
                  <span className="font-v4-sans text-lg text-v4-ivory hover:underline">{next.name}</span>
                </Link>
              )}
            </div>
            <div>
              <p id="step-next" className="max-w-sm font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ivory">
                Not sure which step you need?
              </p>
              <p className="mt-3 max-w-sm font-v4-sans text-sm text-v4-ivory/70">
                Tell us what is not working in a 15-minute call. You get an honest answer on where to start.
              </p>
              <div className="mt-6">
                <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
              </div>
            </div>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
