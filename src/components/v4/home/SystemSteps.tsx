import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { STEP_OUTPUT } from "@/data/v4HomeData";

/**
 * The signature moment of the home page: the seven steps as one connected chain. Each step lights
 * up as it scrolls into view (CSS scroll-driven animation, see `.v4-chain` in v4-tokens.css).
 * Without support for scroll timelines, or with reduced motion, the whole chain is lit from the
 * start, so nothing depends on JavaScript or on scrolling. Every step is a link to its own page.
 */
export function SystemSteps() {
  return (
    <ol className="v4-chain relative flex flex-col">
      {PILLAR_INDEX.map((p, i) => (
        <li key={p.id} className="v4-chain-step relative pb-10 pl-12 last:pb-0 md:pl-16">
          {/* The connecting line down to the next node */}
          {i < PILLAR_INDEX.length - 1 && (
            <span aria-hidden="true" className="absolute bottom-0 left-[9px] top-6 w-px bg-v4-ivory/15 md:left-[11px]" />
          )}
          <span
            aria-hidden="true"
            className="absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-v4-signal/60 md:h-[23px] md:w-[23px]"
          >
            <span className="v4-chain-node absolute inset-0 rounded-full bg-v4-signal" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-v4-ink" />
          </span>
          <Link
            to={pillarPath(p.id)}
            className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-v4-signal"
          >
            <span className="flex items-baseline gap-4">
              <SystemLabel className="text-v4-signal">{p.n}</SystemLabel>
              <span className="font-v4-sans text-2xl font-semibold tracking-tight text-v4-ivory md:text-3xl">
                {p.name}
              </span>
              <span
                aria-hidden="true"
                className="translate-x-0 font-v4-sans text-lg text-v4-ivory/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-v4-signal"
              >
                →
              </span>
            </span>
            <span className="mt-3 block max-w-xl font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ivory">
              {p.question}
            </span>
            <span className="mt-4 flex flex-wrap gap-2">
              {p.parts.map((part) => (
                <span
                  key={part}
                  className="rounded-full border border-v4-ivory/20 px-3 py-1 font-v4-sans text-xs text-v4-ivory/70"
                >
                  {part}
                </span>
              ))}
            </span>
            <span className="mt-4 block max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
              <span className="font-medium text-v4-ivory">You get: </span>
              {STEP_OUTPUT[p.id]}.
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
