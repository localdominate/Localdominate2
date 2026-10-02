import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";

/**
 * The full growth project, the fifth thing that can be ordered. It has no price on purpose: scope
 * and price are set in writing per project. The seven steps on the right are the same list as on
 * /approach (v4PillarIndex.ts) and link to their pages.
 */
export function FullProject() {
  return (
    <div className="grid gap-10 rounded-2xl bg-v4-ink p-7 text-v4-ivory md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
          If you need more than one offer
        </SystemLabel>
        <h2
          id="services-full-project"
          className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
        >
          The full growth project
        </h2>
        <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
          Strategy, brand, website and marketing from one team, in the steps your business needs.
          Scope and price in writing before work starts.
        </p>
        <Link
          to={PILLAR_BASE}
          className="mt-6 inline-flex min-h-[44px] items-center font-v4-sans text-sm text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
        >
          How the seven steps fit together →
        </Link>
      </div>

      <ol className="self-end border-b border-v4-ivory/15">
        {PILLAR_INDEX.map((p) => (
          <li key={p.id} className="border-t border-v4-ivory/15">
            <Link
              to={pillarPath(p.id)}
              className="group grid min-h-[44px] gap-1 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="flex items-baseline gap-3">
                <SystemLabel className="text-v4-signal">{p.n}</SystemLabel>
                <span className="font-v4-sans text-base font-semibold tracking-tight text-v4-ivory group-hover:underline group-hover:underline-offset-4">
                  {p.name}
                </span>
              </span>
              <span className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{p.question}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
