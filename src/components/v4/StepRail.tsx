import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import type { PillarId } from "@/data/v4PillarIndex";

/**
 * The seven steps as one rail, the same order and names as in the showreel. Every step is a real
 * link, so the rail is also the internal-link block that connects all step pages to each other.
 * Plain CSS only (no animation library), so it renders identically on the server and in the browser.
 */
export function StepRail({ current, className }: { current?: PillarId; className?: string }) {
  return (
    <nav aria-label="The seven steps" className={cn("v4", className)}>
      <ol className="mx-auto flex max-w-[1400px] gap-0 overflow-x-auto px-6 py-6 md:px-10">
        {PILLAR_INDEX.map((p, i) => {
          const isCurrent = p.id === current;
          return (
            <li key={p.id} className="flex min-w-[6.5rem] flex-1 items-start">
              <Link
                to={pillarPath(p.id)}
                aria-current={isCurrent ? "page" : undefined}
                className="group flex w-full flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
              >
                <span className="flex items-center">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-3 w-3 shrink-0 rounded-full border transition-colors",
                      isCurrent
                        ? "border-v4-signal bg-v4-signal"
                        : "border-v4-ivory/50 group-hover:border-v4-ivory"
                    )}
                  />
                  {i < PILLAR_INDEX.length - 1 && (
                    <span aria-hidden="true" className="ml-2 mr-2 h-px flex-1 bg-v4-ivory/20" />
                  )}
                </span>
                <span
                  className={cn(
                    "font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.18em]",
                    isCurrent ? "text-v4-signal" : "text-v4-ivory/60 group-hover:text-v4-ivory"
                  )}
                >
                  {p.n}
                </span>
                <span
                  className={cn(
                    "font-v4-sans text-sm",
                    isCurrent ? "font-medium text-v4-ivory" : "text-v4-ivory/70 group-hover:text-v4-ivory"
                  )}
                >
                  {p.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
