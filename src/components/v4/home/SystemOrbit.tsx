import { PILLAR_INDEX } from "@/data/v4PillarIndex";

/**
 * The hero's motion piece: "Your business" in the centre, the seven steps light up one after the
 * other, connect into a ring, and a pulse travels the finished system. Then it resets and loops.
 *
 * Built as one SVG with CSS keyframes (no video, no animation library, no JavaScript), so it is
 * sharp at every size and costs a few kilobytes. The un-animated SVG is the finished system: that
 * is what reduced-motion visitors, crawlers and the prerender see. The loop is only switched on
 * inside `prefers-reduced-motion: no-preference`.
 *
 * Decorative for assistive technology: the same seven steps follow as real links further down.
 */
const W = 680;
const H = 560;
const CX = W / 2;
const CY = H / 2;
const R = 186; // ring radius
const LABEL_R = R + 32;
const LOOP = 14; // seconds
const FIRST = 0.8; // first step lights up
const GAP = 0.9; // between steps
const DONE = FIRST + GAP * 7 + 0.3; // ring closed
const OUT = 12.4; // fade-out starts
const GONE = 13.2; // back to the dim start state

const round = (n: number) => Math.round(n * 100) / 100;
const pct = (seconds: number) => `${round((seconds / LOOP) * 100)}%`;

const nodes = PILLAR_INDEX.map((p, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / PILLAR_INDEX.length;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    ...p,
    i,
    x: round(CX + R * cos),
    y: round(CY + R * sin),
    lx: round(CX + LABEL_R * cos),
    ly: round(CY + LABEL_R * sin + (Math.abs(cos) < 0.3 ? (sin < 0 ? -4 : 18) : 6)),
    anchor: Math.abs(cos) < 0.3 ? ("middle" as const) : cos > 0 ? ("start" as const) : ("end" as const),
    at: FIRST + GAP * i,
  };
});

/** Arc along the ring from node i to the next node (the last one closes the loop). */
const arcs = nodes.map((n) => {
  const next = nodes[(n.i + 1) % nodes.length];
  return { i: n.i, d: `M ${n.x} ${n.y} A ${R} ${R} 0 0 1 ${next.x} ${next.y}`, at: n.at + 0.25 };
});

const css = [
  // Default (no animation): the finished system. Everything below only runs when motion is allowed.
  `.so-fill,.so-arc,.so-spoke,.so-label{transform-box:fill-box;transform-origin:center}`,
  `.so-comet,.so-flash,.so-done{opacity:0}`,
  `.so-spin{transform-origin:${CX}px ${CY}px}`,
  `@media (prefers-reduced-motion: no-preference){`,
  ...nodes.flatMap((n) => [
    `@keyframes so-fill-${n.i}{0%,${pct(n.at)}{opacity:0;transform:scale(.4)}${pct(n.at + 0.35)},${pct(OUT)}{opacity:1;transform:scale(1)}${pct(GONE)},100%{opacity:0;transform:scale(.4)}}`,
    `@keyframes so-label-${n.i}{0%,${pct(n.at)}{opacity:.38}${pct(n.at + 0.35)},${pct(OUT)}{opacity:1}${pct(GONE)},100%{opacity:.38}}`,
    `@keyframes so-spoke-${n.i}{0%,${pct(n.at - 0.45)}{stroke-dashoffset:1;opacity:1}${pct(n.at)},${pct(OUT)}{stroke-dashoffset:0;opacity:1}${pct(GONE)}{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1;opacity:0}}`,
    `.so-fill-${n.i}{animation:so-fill-${n.i} ${LOOP}s cubic-bezier(.16,1,.3,1) infinite}`,
    `.so-label-${n.i}{animation:so-label-${n.i} ${LOOP}s ease infinite}`,
    `.so-spoke-${n.i}{animation:so-spoke-${n.i} ${LOOP}s ease infinite}`,
  ]),
  ...arcs.flatMap((a) => [
    `@keyframes so-arc-${a.i}{0%,${pct(a.at)}{stroke-dashoffset:1;opacity:1}${pct(a.at + GAP - 0.25)},${pct(OUT)}{stroke-dashoffset:0;opacity:1}${pct(GONE)}{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1;opacity:0}}`,
    `.so-arc-${a.i}{animation:so-arc-${a.i} ${LOOP}s ease-in-out infinite}`,
  ]),
  `@keyframes so-comet{0%,${pct(DONE)}{opacity:0}${pct(DONE + 0.5)},${pct(OUT - 0.4)}{opacity:1}${pct(OUT)},100%{opacity:0}}`,
  `@keyframes so-spin{to{transform:rotate(360deg)}}`,
  `@keyframes so-flash{0%,${pct(DONE - 0.1)}{opacity:0;transform:scale(1)}${pct(DONE)}{opacity:.9;transform:scale(1)}${pct(DONE + 1.2)},100%{opacity:0;transform:scale(1.9)}}`,
  `@keyframes so-start{0%,${pct(DONE - 0.2)}{opacity:1}${pct(DONE + 0.2)},${pct(OUT)}{opacity:0}${pct(GONE)},100%{opacity:1}}`,
  `@keyframes so-done{0%,${pct(DONE - 0.2)}{opacity:0}${pct(DONE + 0.2)},${pct(OUT)}{opacity:1}${pct(GONE)},100%{opacity:0}}`,
  `@keyframes so-drift{to{transform:rotate(-360deg)}}`,
  `.so-comet{animation:so-comet ${LOOP}s linear infinite}`,
  `.so-spin{animation:so-spin 4.2s linear infinite}`,
  `.so-flash{transform-box:fill-box;transform-origin:center;animation:so-flash ${LOOP}s ease-out infinite}`,
  `.so-start{animation:so-start ${LOOP}s ease infinite}`,
  `.so-done{animation:so-done ${LOOP}s ease infinite}`,
  `.so-drift{transform-origin:${CX}px ${CY}px;animation:so-drift 90s linear infinite}`,
  `}`,
].join("");

const SIGNAL = "#B7F52A";
const IVORY = "#F4F0E7";

export function SystemOrbit({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="so-title" className="h-auto w-full overflow-visible">
        <title id="so-title">
          Your business in the centre, connected to the seven steps Diagnose, Position, Create, Build, Launch,
          Grow and Scale as one system.
        </title>
        <style>{css}</style>
        <defs>
          <radialGradient id="so-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={SIGNAL} stopOpacity="0.16" />
            <stop offset="60%" stopColor={SIGNAL} stopOpacity="0.04" />
            <stop offset="100%" stopColor={SIGNAL} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="so-tail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={SIGNAL} stopOpacity="0" />
            <stop offset="100%" stopColor={SIGNAL} stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <g aria-hidden="true">
          <circle cx={CX} cy={CY} r={R + 70} fill="url(#so-glow)" />
          {/* Slowly drifting guide rings: the structure is there before the steps light up */}
          <g className="so-drift">
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={IVORY} strokeOpacity="0.14" strokeDasharray="2 7" />
            <circle cx={CX} cy={CY} r={R - 62} fill="none" stroke={IVORY} strokeOpacity="0.08" strokeDasharray="1 9" />
          </g>

          {/* Spokes: the business connects to each step */}
          {nodes.map((n) => (
            <line
              key={`spoke-${n.id}`}
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              pathLength={1}
              strokeDasharray="1"
              stroke={IVORY}
              strokeOpacity="0.2"
              className={`so-spoke so-spoke-${n.i}`}
            />
          ))}

          {/* The ring: each step hands over to the next, the last one closes the loop */}
          {arcs.map((a) => (
            <path
              key={`arc-${a.i}`}
              d={a.d}
              pathLength={1}
              strokeDasharray="1"
              fill="none"
              stroke={SIGNAL}
              strokeWidth="2"
              strokeLinecap="round"
              className={`so-arc so-arc-${a.i}`}
            />
          ))}

          {/* The pulse that travels the finished system */}
          <g className="so-comet">
            <g className="so-spin">
              <path
                d={`M ${round(CX + R * Math.cos(-Math.PI / 2 - 0.55))} ${round(CY + R * Math.sin(-Math.PI / 2 - 0.55))} A ${R} ${R} 0 0 1 ${CX} ${CY - R}`}
                fill="none"
                stroke="url(#so-tail)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx={CX} cy={CY - R} r="6" fill={IVORY} />
            </g>
          </g>

          {/* Steps */}
          {nodes.map((n) => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r="15" fill="#0A0A09" stroke={SIGNAL} strokeOpacity="0.45" />
              <circle cx={n.x} cy={n.y} r="10.5" fill={SIGNAL} className={`so-fill so-fill-${n.i}`} />
              <circle cx={n.x} cy={n.y} r="3" fill="#0A0A09" />
              <text x={n.lx} y={n.ly} textAnchor={n.anchor} className={`so-label so-label-${n.i}`}>
                <tspan fill={SIGNAL} fontFamily="'IBM Plex Mono', monospace" fontSize="13" letterSpacing="1.5">
                  {n.n}
                </tspan>
                <tspan dx="8" fill={IVORY} fontFamily="'Geist', 'Inter', system-ui, sans-serif" fontSize="20" fontWeight="600">
                  {n.name}
                </tspan>
              </text>
            </g>
          ))}

          {/* Centre: the business */}
          <circle cx={CX} cy={CY} r="72" fill="none" stroke={SIGNAL} strokeWidth="1.5" className="so-flash" />
          <circle cx={CX} cy={CY} r="72" fill="#0A0A09" stroke={IVORY} strokeOpacity="0.35" />
          <g className="so-start" fontFamily="'IBM Plex Mono', monospace" fontSize="14" letterSpacing="2.6" fill={IVORY} textAnchor="middle">
            <text x={CX} y={CY - 4}>YOUR</text>
            <text x={CX} y={CY + 16}>BUSINESS</text>
          </g>
          <g className="so-done" fontFamily="'IBM Plex Mono', monospace" fontSize="14" letterSpacing="2.6" fill={SIGNAL} textAnchor="middle">
            <text x={CX} y={CY - 4}>ONE</text>
            <text x={CX} y={CY + 16}>SYSTEM</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
