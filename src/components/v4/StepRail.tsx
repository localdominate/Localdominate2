import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import type { PillarId } from "@/data/v4PillarIndex";

/**
 * The seven steps as one rail, the same order and names as in the showreel. Every step is a real
 * link, so the rail is also the internal-link block that connects all step pages to each other.
 *
 * Phone: seven equal cells that always fit the screen (no sideways scrolling). Only the numbers
 * show in the cells and a line below names the current step; the step names stay in the DOM for
 * screen readers. From `md` up the names sit under the numbers. Steps before the current one are
 * drawn as done, so the rail also shows where on the way a page is.
 *
 * Plain CSS only (no animation library), so it renders identically on the server and in the browser.
 */
export function StepRail({ current, className }: { current?: PillarId; className?: string }) {
  const currentIndex = PILLAR_INDEX.findIndex((p) => p.id === current);
  const currentStep = currentIndex >= 0 ? PILLAR_INDEX[currentIndex] : undefined;

  return (
    <nav aria-label="The seven steps" className={cn("v4", className)}>
      <div className="mx-auto max-w-[1400px] px-6 pb-3 pt-4 md:px-10 md:pb-6 md:pt-6">
        <ol className="flex">
          {PILLAR_INDEX.map((p, i) => {
            const isCurrent = p.id === current;
            const isDone = currentIndex >= 0 && i < currentIndex;
            return (
              <li key={p.id} className="flex min-w-0 flex-1 items-start">
                <Link
                  to={pillarPath(p.id)}
                  aria-current={isCurrent ? "page" : undefined}
                  className="group flex min-h-[3.5rem] w-full flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
                >
                  <span className="flex items-center">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-3 w-3 shrink-0 rounded-full border transition-[background-color,border-color] duration-200",
                        isCurrent && "border-v4-signal bg-v4-signal",
                        isDone && "border-v4-signal/70 bg-v4-signal/30",
                        !isCurrent && !isDone && "border-v4-ivory/50 group-hover:border-v4-ivory"
                      )}
                    />
                    {i < PILLAR_INDEX.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mx-1.5 h-px flex-1 md:mx-2",
                          isDone ? "bg-v4-signal/60" : "bg-v4-ivory/20"
                        )}
                      />
                    )}
                  </span>
                  <span
                    className={cn(
                      "font-v4-mono text-[length:var(--v4-text-label)] leading-none tracking-[0.12em] tabular-nums md:tracking-[0.18em]",
                      isCurrent ? "text-v4-signal" : "text-v4-ivory/70 group-hover:text-v4-ivory"
                    )}
                  >
                    {p.n}
                  </span>
                  <span
                    className={cn(
                      "sr-only font-v4-sans text-sm md:not-sr-only",
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
        <p aria-hidden="true" className="mt-3 font-v4-sans text-sm text-v4-ivory/70 md:hidden">
          {currentStep ? (
            <>
              <span className="text-v4-signal">{`Step ${currentStep.n}`}</span>
              {` · ${currentStep.name}`}
            </>
          ) : (
            "Tap a number to open a step."
          )}
        </p>
      </div>
    </nav>
  );
}
