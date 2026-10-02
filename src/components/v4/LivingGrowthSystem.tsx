import { useReducedMotion } from "framer-motion";
import { Node } from "./Node";
import { Connection } from "./Connection";

const FUNCTIONS = [
  { key: "strategy", label: "Strategy", description: "Direction is set." },
  { key: "brand", label: "Brand", description: "Identity forms, linked to strategy." },
  { key: "build", label: "Build", description: "The work gets made, on-strategy, on-brand." },
  { key: "growth", label: "Growth", description: "Growth feeds back into strategy. It is a system, not a funnel." },
] as const;

/**
 * The Living Growth System — Home's signature primitive (beats 03 and 04 of
 * HOME_IMPLEMENTATION_CONTRACT.md, 6-state table). One shared component, mounted twice at a
 * different `endState`:
 *  - beat 03 ("The Connection"): endState="connected" — nodes outline/connect, no Signal yet.
 *  - beat 04 ("The System Awakens"): endState="outcome" — full activation + closing pulse.
 *
 * Sequencing is scroll-triggered (whileInView, once) rather than scroll-scrubbed/pinned — a
 * disclosed B1 simplification (see implementation report) in place of a GSAP ScrollTrigger
 * build, per the master prompt's own "GSAP only where justified, probably isn't" guidance.
 */
export function LivingGrowthSystem({
  endState,
}: {
  endState: "selected" | "connected" | "outcome";
}) {
  const prefersReducedMotion = useReducedMotion();
  const isPeak = endState === "outcome";

  // Reduced motion (and the non-JS/no-animation fallback in spirit): render the resolved
  // end-state directly, with the four functions also listed as real text so nothing here
  // depends on animation, hover, or color to be understood.
  return (
    <div className="v4-system w-full">
      <div
        className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-4"
        role="group"
        aria-label="The four connected functions: Strategy, Brand, Build, Growth"
      >
        {FUNCTIONS.map((fn, i) => {
          const state = prefersReducedMotion
            ? endState === "connected"
              ? "connected"
              : endState
            : endState; // simple B1 sequencing: whole group reaches endState together on scroll-in
          return (
            <div key={fn.key} className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-4 md:flex-1">
              <div className="flex justify-center">
                <Node label={fn.label} state={state} size={isPeak ? "lg" : "md"} />
              </div>
              {i < FUNCTIONS.length - 1 && (
                <Connection
                  active={state === "connected" || state === "outcome"}
                  orientation="vertical"
                  className="md:hidden"
                />
              )}
              {i < FUNCTIONS.length - 1 && (
                <Connection
                  active={state === "connected" || state === "outcome"}
                  orientation="horizontal"
                  className="hidden md:flex"
                />
              )}
            </div>
          );
        })}
      </div>

      {isPeak && (
        <p className="mt-8 text-center font-v4-sans text-sm text-v4-ivory/60">
          One connected operating system, live.
        </p>
      )}

      {/* Always-available non-visual equivalent — never relies on the animation above. */}
      <ol className="sr-only">
        {FUNCTIONS.map((fn) => (
          <li key={fn.key}>
            {fn.label}: {fn.description}
          </li>
        ))}
      </ol>

      {/* Reduced-motion visible fallback: the spec asks for the states as a static numbered
          list, not just an sr-only one, when motion is off. */}
      {prefersReducedMotion && (
        <ol className="mt-6 space-y-1 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory/60">
          {FUNCTIONS.map((fn, i) => (
            <li key={fn.key}>
              {String(i + 1).padStart(2, "0")} · {fn.label}: {fn.description}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
