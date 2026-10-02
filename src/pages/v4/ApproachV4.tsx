import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { StepRail } from "@/components/v4/StepRail";
import { ShowreelFilm } from "@/components/v4/ShowreelFilm";
import { caseLabel, publishedCases } from "@/data/v4Cases";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { PILLAR_COPY, pillarCases } from "@/data/v4Pillars";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}${PILLAR_BASE}`;
const TITLE = "Our Approach: The Seven-Step Growth System | Local Dominator";

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
        { "@type": "ListItem", position: 2, name: "Approach", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The seven steps",
      itemListElement: PILLAR_INDEX.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE}${pillarPath(p.id)}`,
      })),
    },
  ],
};

const tagClass = "rounded-full border border-v4-ink/15 px-3 py-1 font-v4-sans text-xs text-v4-ink/70";

/** Which published project touched which step. The text version of each cell is read by screen readers. */
function CaseMatrix() {
  const cases = publishedCases();
  const coverage = new Map(
    PILLAR_INDEX.map((p) => [p.id, new Map(pillarCases(p.id).map((x) => [x.case.id, x.note]))] as const)
  );
  return (
    <>
      <ul className="flex flex-col gap-4 lg:hidden">
        {cases.map((c) => {
          const covered = PILLAR_INDEX.filter((p) => coverage.get(p.id)?.has(c.id));
          return (
            <li key={c.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5">
              <p className="font-v4-sans text-base font-semibold text-v4-ink">{c.name}</p>
              <p className="mt-1 font-v4-sans text-xs text-v4-ink/70">{caseLabel(c, false)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {covered.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={pillarPath(p.id)}
                      className="inline-flex min-h-[2.75rem] items-center rounded-full border border-v4-ink/20 px-4 font-v4-sans text-sm text-v4-ink hover:border-v4-ink/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                    >
                      <span className="mr-2 font-v4-mono text-xs tabular-nums text-v4-ink/60">{p.n}</span>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    <div className="relative hidden overflow-x-auto rounded-2xl border border-v4-ink/10 bg-v4-white lg:block">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <caption className="sr-only">Published projects and the steps they covered</caption>
        <thead>
          <tr className="border-b border-v4-ink/10">
            <th scope="col" className="px-5 py-4">
              <SystemLabel className="text-v4-ink/60">Project</SystemLabel>
            </th>
            {PILLAR_INDEX.map((p) => (
              <th key={p.id} scope="col" className="px-2 py-4 text-center">
                <Link
                  to={pillarPath(p.id)}
                  className="font-v4-mono text-[length:var(--v4-text-label)] uppercase tracking-[0.18em] text-v4-ink/70 hover:text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                >
                  {p.n} {p.name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id} className="border-b border-v4-ink/10 last:border-b-0">
              <th scope="row" className="px-5 py-4 align-top">
                <span className="block font-v4-sans text-sm font-semibold text-v4-ink">{c.name}</span>
                <span className="mt-1 block font-v4-sans text-xs text-v4-ink/60">{caseLabel(c, false)}</span>
              </th>
              {PILLAR_INDEX.map((p) => {
                const note = coverage.get(p.id)?.get(c.id);
                return (
                  <td key={p.id} className="px-2 py-4 text-center align-middle">
                    {note ? (
                      <>
                        <span
                          aria-hidden="true"
                          className="mx-auto block h-3 w-3 rounded-full bg-v4-ink"
                        />
                        <span className="sr-only">{`${p.name}: ${note}`}</span>
                      </>
                    ) : (
                      <span className="sr-only">{`${p.name}: not part of this project`}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

/** LocalDominate V4 — Approach: the seven steps of the showreel, each with its own page. */
export default function ApproachV4() {
  return (
    <V4Page>
      <SEOHead
        title={TITLE}
        description="Seven steps from diagnosis to scale: Diagnose, Position, Create, Build, Launch, Grow, Scale. Each step with its outputs, offers and the projects that show it."
        canonicalUrl={PAGE_URL}
        lang="en"
        jsonLd={JSON_LD}
      />

      <StateField field="dark" as="section" aria-labelledby="approach-hero">
        <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
          <SystemLabel as="p" className="text-v4-ivory/50">
            Approach
          </SystemLabel>
          <h1
            id="approach-hero"
            className="mt-6 font-v4-sans text-[length:var(--v4-text-hero)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
          >
            Seven steps.
            <br />
            From diagnosis to scale.
          </h1>
          <p className="mt-8 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            Strategy, brand, website and marketing run as one sequence here, not as four separate jobs.
            Each step has its own page, its own outputs and the projects that show where it appeared.
          </p>
          <div className="mt-10">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="div" className="border-t border-v4-ivory/10">
        <StepRail />
      </StateField>

      <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-label="Showreel">
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10">
          <ShowreelFilm />
          <p className="mt-4 font-v4-sans text-sm text-v4-ivory/60">
            The seven steps in 20 seconds. Silent, click to play.
          </p>
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="approach-steps">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <SystemLabel as="p" id="approach-steps" className="mb-10 block text-v4-ink/60">
            The seven steps
          </SystemLabel>
          <ol className="flex flex-col">
            {PILLAR_INDEX.map((p) => (
              <li key={p.id} className="border-t border-v4-ink/10 first:border-t-0">
                <Link
                  to={pillarPath(p.id)}
                  className="group grid gap-4 py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal md:grid-cols-[6rem_1fr_1.2fr] md:gap-8"
                >
                  <span className="font-v4-serif text-5xl leading-none text-v4-ink/60 group-hover:text-v4-ink">
                    {p.n}
                  </span>
                  <span>
                    <span className="block font-v4-sans text-2xl font-semibold tracking-tight text-v4-ink group-hover:underline">
                      {p.name}
                    </span>
                    <span className="mt-2 block font-v4-sans text-sm text-v4-ink/70">{p.question}</span>
                  </span>
                  <span>
                    <span className="block font-v4-sans text-sm text-v4-ink/80">{PILLAR_COPY[p.id].lead}</span>
                    <span className="mt-3 block font-v4-sans text-sm text-v4-ink/80">
                      <span className="font-medium text-v4-ink">You get: </span>
                      {PILLAR_COPY[p.id].deliverables.map((d) => d.name).join(", ")}.
                    </span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      {p.parts.map((part) => (
                        <span key={part} className={tagClass}>
                          {part}
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="approach-cases">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <h2
            id="approach-cases"
            className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink"
          >
            Which project covered which step
          </h2>
          <p className="mt-4 max-w-2xl font-v4-sans text-sm text-v4-ink/70">
            A dot means the project included that step. Open a step to read what exactly was done. Only
            published projects are listed, and Aurelian Grand is our own concept, not a client.
          </p>
          <div className="mt-10">
            <CaseMatrix />
          </div>
          <Link
            to="/work"
            className="mt-8 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
          >
            See all projects
          </Link>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="approach-start">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-10">
          <p id="approach-start" className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ivory">
            You do not need all seven.
          </p>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-sm text-v4-ivory/70">
            A hotel with a weak booking page may start at Grow, a new brand at Diagnose. A short
            diagnosis tells us which step pays first. Scope and price are confirmed in writing before
            any work starts.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
            <Link
              to="/services"
              className="font-v4-sans text-sm text-v4-ivory/70 underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              See services and prices
            </Link>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
