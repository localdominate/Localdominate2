import { DadicationFilm } from "@/components/v4/DadicationFilm";
import { SystemLabel } from "@/components/v4/SystemLabel";
import type { WorkCase } from "@/data/v4Cases";
import { stepsOfCase } from "./caseSteps";
import { Fact, ScopeTags, StatusLine, StepLinks, VerifiedMetricFact } from "./CaseParts";

/**
 * The featured case on the dark field, directly under the page title. The click-to-play film comes
 * first (its poster is the largest element of the first screen, so it loads eagerly), then the
 * facts. Three layouts from one DOM order: stacked on a phone, film across the full width with
 * two fact columns under it on a small laptop, film beside the facts on a wide screen. The film
 * belongs to the Dadication case, the only case with `hasVideo` in v4Cases.ts.
 */
export function FeaturedCase({ c }: { c: WorkCase }) {
  const hasSteps = stepsOfCase(c.id).length > 0;
  return (
    <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="lg:col-span-2 xl:col-span-1">
        <DadicationFilm priority className="ring-1 ring-v4-ivory/10" />
        <p className="mt-4 max-w-xl font-v4-sans text-xs leading-relaxed text-v4-ivory/60">
          Hero film of the store, shown with the client's consent. The store is not yet public.
          Silent, click to play.
        </p>
      </div>

      <div>
        <SystemLabel
          as="p"
          className="inline-block rounded-full border border-v4-ivory/30 px-3 py-2 text-v4-ivory/70"
        >
          {c.kind}
        </SystemLabel>
        <h2
          id="work-featured"
          className="mt-5 scroll-mt-28 font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-none text-v4-ivory"
        >
          {c.name}
        </h2>
        <dl className="mt-8 border-v4-ivory/15 lg:border-b xl:border-b-0">
          <Fact label="Task" tone="dark" stacked>
            <span className="text-lg font-semibold leading-snug tracking-tight text-v4-ivory">{c.title}</span>
          </Fact>
          <Fact label="What was built" tone="dark" stacked>
            {c.summary}
          </Fact>
          <VerifiedMetricFact c={c} tone="dark" stacked />
          <Fact label="Status" tone="dark" stacked>
            <StatusLine c={c} tone="dark" />
          </Fact>
        </dl>
      </div>

      <dl className="-mt-10 border-b border-v4-ivory/15 lg:mt-0 lg:self-end xl:col-span-2 xl:grid xl:grid-cols-[1.25fr_0.75fr] xl:gap-x-16 xl:self-auto">
        <Fact label="Scope" tone="dark" stacked>
          <ScopeTags c={c} tone="dark" />
        </Fact>
        {hasSteps && (
          <Fact label="Steps covered" tone="dark" stacked>
            <StepLinks c={c} tone="dark" />
          </Fact>
        )}
      </dl>
    </div>
  );
}
