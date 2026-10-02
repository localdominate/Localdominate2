import { SystemLabel } from "@/components/v4/SystemLabel";
import type { WorkCase } from "@/data/v4Cases";
import { stepsOfCase } from "./caseSteps";
import { Fact, ProjectLink, ScopeTags, StatusLine, StepLinks, VerifiedMetricFact } from "./CaseParts";

const factColumn = "[&>div:first-child]:border-t-0";

/**
 * One case as a full section on the light field: a head line with the kind of project, its name
 * and the link to the live project, then the facts in two columns (task, what was built and status
 * on the left, scope and steps on the right). Every value is a field of v4Cases.ts; a fact without
 * data is left out.
 */
export function CaseSection({ c }: { c: WorkCase }) {
  const hasSteps = stepsOfCase(c.id).length > 0;
  return (
    <article aria-labelledby={`case-${c.id}`} className="pt-14 first:pt-0 md:pt-20">
      <div className="flex flex-col gap-x-10 gap-y-3 border-b border-v4-ink/40 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SystemLabel
            as="p"
            className="inline-block rounded-full border border-v4-ink/25 px-3 py-2 text-v4-ink/70"
          >
            {c.kind}
          </SystemLabel>
          <h3
            id={`case-${c.id}`}
            className="mt-5 scroll-mt-28 font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.05] text-v4-ink"
          >
            {c.name}
          </h3>
        </div>
        <ProjectLink c={c} className="shrink-0 self-start md:self-auto" />
      </div>

      <div className="grid gap-x-20 lg:grid-cols-2">
        <dl className={factColumn}>
          <Fact label="Task" tone="light" stacked>
            <span className="text-lg font-semibold leading-snug tracking-tight text-v4-ink">{c.title}</span>
          </Fact>
          <Fact label="What was built" tone="light" stacked>
            <span className="block max-w-xl">{c.summary}</span>
          </Fact>
          <VerifiedMetricFact c={c} tone="light" stacked />
          <Fact label="Status" tone="light" stacked>
            <StatusLine c={c} tone="light" />
          </Fact>
        </dl>
        <dl className="lg:[&>div:first-child]:border-t-0">
          <Fact label="Scope" tone="light" stacked>
            <ScopeTags c={c} tone="light" />
          </Fact>
          {hasSteps && (
            <Fact label="Steps covered" tone="light" stacked>
              <StepLinks c={c} tone="light" />
            </Fact>
          )}
        </dl>
      </div>
    </article>
  );
}
