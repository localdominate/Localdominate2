import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { SystemLabel } from "./SystemLabel";
import { Node } from "./Node";
import { Connection } from "./Connection";

/**
 * B1.1 rebuild of Home's Signature Interaction ("The Business Awakens").
 *
 * Replaces B1 v1's "four labels fading in together" (scored 55/100) with a real
 * scroll-linked progression through 7 semantically distinct states, each answering
 * "what changed?" and "why does the buyer care?" — not decorative particle motion.
 * See docs/HOME_IMPLEMENTATION_CONTRACT.md's Signature Interaction section and the
 * B1.1 brief's §3–6.
 *
 * Desktop: a sticky canvas (the node chain stays spatially anchored) with a scrolling
 * narrative column driving state via native scroll position (useScroll), never
 * scroll-hijacked — the visitor's own scroll IS the timeline.
 * Mobile: vertical activation spine, each step independently triggered as it enters
 * view — a genuinely different composition per B1.1 §8, not the desktop layout shrunk.
 * Reduced motion: the same 7 states rendered as one static, fully-resolved list —
 * used at every viewport, not just as a toggle on top of the animated version.
 */

const STATES = [
  {
    label: "Business",
    statement: "One business.",
    meaning: "Real potential — not yet connected to anything.",
  },
  {
    label: "Strategy",
    statement: "Understanding activates.",
    meaning: "We understand before we execute — direction becomes clear.",
  },
  {
    label: "Brand",
    statement: "Direction becomes expression.",
    meaning: "The business becomes recognisable — not a separate service, a consequence of strategy.",
  },
  {
    label: "Build",
    statement: "The idea becomes an experience.",
    meaning: "Positioning turns into an actual product, website, or system a customer can use.",
  },
  {
    label: "Growth",
    statement: "Demand enters the system.",
    meaning: "Marketing connects to what's already been built — not a detached channel.",
  },
  {
    label: "Data",
    statement: "Signals return.",
    meaning: "Decisions improve. Growth isn't a straight line — it's a loop that learns.",
  },
  {
    label: "Living System",
    statement: "One connected growth system.",
    meaning: "Strategy, Brand, Build and Growth — feeding each other, continuously.",
  },
] as const;

const LAST = STATES.length - 1;

function StaticResolvedList() {
  // Reduced-motion AND the mobile fallback share this: fully resolved, no scroll or
  // viewport dependency, every state's text and node visible simultaneously.
  return (
    <div className="flex flex-col gap-10">
      {STATES.map((s, i) => (
        <div key={s.label} className="flex items-start gap-5">
          <Node label={s.label} state={i === 0 ? "selected" : "outcome"} size="sm" />
          <div>
            <SystemLabel className="opacity-50">
              {String(i).padStart(2, "0")} — {s.label}
            </SystemLabel>
            <p className="mt-1 font-v4-serif text-[length:var(--v4-text-subhead)]">{s.statement}</p>
            <p className="mt-1 max-w-md font-v4-sans text-sm opacity-70">{s.meaning}</p>
          </div>
        </div>
      ))}
      <div className="ml-[52px] flex items-center gap-2 pt-2">
        <span className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
        <SystemLabel className="text-v4-signal">Loop closed — one connected growth system</SystemLabel>
      </div>
    </div>
  );
}

function NodeChain({ activeIndex, size = "md" }: { activeIndex: number; size?: "sm" | "md" | "lg" }) {
  const isComplete = activeIndex === LAST;

  return (
    <div className="relative flex items-center" aria-hidden="true">
      {/* THE SYSTEM AWAKENS — the one deliberately memorable visual moment on the page.
          A soft signal-green field blooms behind the chain and a closing arc draws itself
          from the last node back up to the first, only once the story actually completes.
          This is what makes the end state read as materially different from state 0,
          not just "the last item in a list". */}
      <motion.div
        className="pointer-events-none absolute inset-0 -inset-x-10 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(183,245,42,0.16), transparent 70%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <svg
        className="absolute -right-7 top-0 h-full w-14 overflow-visible"
        viewBox="0 0 40 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 8 6 C 34 6, 34 94, 8 94"
          fill="none"
          stroke="#B7F52A"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: isComplete ? 1 : 0, opacity: isComplete ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      <div className="relative flex flex-col items-center gap-0">
        {STATES.map((s, i) => {
          const reached = i <= activeIndex;
          const state = i === 0 ? "selected" : reached ? "outcome" : "dormant";
          return (
            <div key={s.label} className="flex flex-col items-center">
              <Node label={s.label} state={state} size={i === LAST ? "lg" : size} />
              {i < LAST && (
                <Connection active={i < activeIndex} orientation="vertical" className="!h-10" />
              )}
            </div>
          );
        })}
        <motion.div
          className="mt-6 flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isComplete ? 1 : 0 }}
          transition={{ duration: 0.4, delay: isComplete ? 0.5 : 0 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
          <span className="h-px w-8 bg-v4-signal" />
          <SystemLabel className="text-v4-signal">Loop closed</SystemLabel>
          <span className="h-px w-8 bg-v4-signal" />
          <span className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
        </motion.div>
      </div>
    </div>
  );
}

function ProgressRail({ activeIndex }: { activeIndex: number }) {
  // Gives the visitor explicit "I caused this" feedback (B1.1 §5) and a way to orient
  // without decoding the canvas — each dot is a real, always-legible state name.
  // Decorative for assistive tech: this duplicates, in order, the same 7 states the
  // sr-only StaticResolvedList already exposes as the canonical accessible narrative —
  // it exists only as a sighted-user "where am I" cue tied to the scroll canvas.
  return (
    <ol className="flex flex-col gap-3" aria-hidden="true">
      {STATES.map((s, i) => {
        const isCurrent = i === activeIndex;
        const isPast = i < activeIndex;
        return (
          <li key={s.label} aria-current={isCurrent ? "step" : undefined}>
            <span
              className={cn(
                "flex items-center gap-2 font-v4-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                // Text always stays at a measured, WCAG AA-passing opacity (ivory/50 on
                // ink is 4.82:1, verified with axe-core) even for not-yet-reached states —
                // only the decorative dot beside it is allowed to fade further.
                isCurrent ? "text-v4-signal" : isPast ? "text-v4-ivory/60" : "text-v4-ivory/50"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  isCurrent ? "bg-v4-signal" : isPast ? "bg-v4-ivory/60" : "bg-v4-ivory/25"
                )}
              />
              {s.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function DesktopCanvas() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] });
  const indexValue = useTransform(scrollYProgress, [0, 1], [0, LAST]);
  useMotionValueEvent(indexValue, "change", (v) => {
    const next = Math.min(LAST, Math.max(0, Math.round(v)));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <div ref={wrapperRef} className="hidden md:block" style={{ height: `${STATES.length * 90}vh` }}>
      <div className="sticky top-0 grid h-screen grid-cols-[auto_1.1fr_0.9fr] items-center gap-10 px-10 lg:gap-16 lg:px-16">
        <ProgressRail activeIndex={activeIndex} />
        <div className="relative h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <SystemLabel className="opacity-50">
                {String(activeIndex).padStart(2, "0")} — {STATES[activeIndex].label}
              </SystemLabel>
              <p className="mt-3 font-v4-serif text-[length:var(--v4-text-major)] leading-[1.05]">
                {STATES[activeIndex].statement}
              </p>
              <p className="mt-4 max-w-sm font-v4-sans text-[length:var(--v4-text-body)] opacity-70">
                {STATES[activeIndex].meaning}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center">
          <NodeChain activeIndex={activeIndex} />
        </div>
      </div>
      {/* Always-available non-visual equivalent — a screen-reader user gets the same
          business story without interpreting the scroll-linked canvas. */}
      <div className="sr-only">
        <StaticResolvedList />
      </div>
    </div>
  );
}

function MobileSpineStep({ index }: { index: number }) {
  const [activated, setActivated] = useState(index === 0);
  const s = STATES[index];

  return (
    <motion.div
      className="flex items-start gap-5 py-4"
      onViewportEnter={() => setActivated(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="flex flex-col items-center">
        <Node label={s.label} state={index === 0 ? "selected" : activated ? "outcome" : "dormant"} size="sm" />
        {index < LAST && <Connection active={activated} orientation="vertical" className="!h-12" />}
      </div>
      {/* Text is always fully visible — motion only ever affects the node's own fill
          above, never this content's opacity, per the B1.1 content-visibility fix. */}
      <div>
        <SystemLabel className="opacity-50">
          {String(index).padStart(2, "0")} — {s.label}
        </SystemLabel>
        <p className="mt-1 font-v4-serif text-[length:var(--v4-text-subhead)]">{s.statement}</p>
        <p className="mt-1 font-v4-sans text-sm opacity-70">{s.meaning}</p>
      </div>
    </motion.div>
  );
}

function MobileLoopSummary() {
  const [reached, setReached] = useState(false);
  return (
    <motion.div
      className="relative flex items-center gap-4 py-6 pl-[26px]"
      onViewportEnter={() => setReached(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      {/* Same "system awakens" language as the desktop canvas, scaled down: a soft glow
          plus a small closed ring — the mobile journey visibly resolves rather than just
          stopping after the last step (B1.2 §6). */}
      <motion.div
        className="pointer-events-none absolute -left-6 h-24 w-24 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(183,245,42,0.18), transparent 70%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: reached ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="relative shrink-0">
        <motion.circle
          cx="14"
          cy="14"
          r="11"
          stroke="#B7F52A"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: reached ? 1 : 0, opacity: reached ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <SystemLabel className={cn("relative transition-colors duration-500", reached ? "text-v4-signal" : "text-v4-ivory/50")}>
        Loop closed — one connected growth system
      </SystemLabel>
    </motion.div>
  );
}

function MobileSpine() {
  return (
    <div className="md:hidden flex flex-col gap-2">
      {STATES.map((_, i) => (
        <MobileSpineStep key={STATES[i].label} index={i} />
      ))}
      <MobileLoopSummary />
    </div>
  );
}

export function SignatureSystem() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div>
        <StaticResolvedList />
      </div>
    );
  }

  return (
    <div>
      <DesktopCanvas />
      <MobileSpine />
    </div>
  );
}
