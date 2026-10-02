import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CREATOR_ANCHORS, INCLUDED } from "@/data/v4Creators";
import type { PageSectionIcon } from "@/data/v4Creators";

/** Small line icons, drawn here: 24 px grid, 1.5 px stroke, no fill. Decorative (aria-hidden). */
const ICON_PATHS: Record<PageSectionIcon, React.ReactNode> = {
  numbers: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V8M17 20v-9" />
      <circle cx="17" cy="5.5" r="1.75" />
    </>
  ),
  signature: (
    <>
      <path d="M3 15c2.5-7 4.5-8.5 5.5-6.5S7 17 9.5 15s3-5.5 5-4 0 4 2.5 3.5S19.5 12 21 12" />
      <path d="M4 20h16" />
    </>
  ),
  pillars: (
    <>
      <rect x="3.5" y="5" width="4.5" height="14" rx="1" />
      <rect x="9.75" y="5" width="4.5" height="14" rx="1" />
      <rect x="16" y="5" width="4.5" height="14" rx="1" />
    </>
  ),
  audience: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v8l6.5 4.5" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.5-5.8 6.5-11a6.5 6.5 0 1 0-13 0c0 5.2 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </>
  ),
  brands: (
    <>
      <path d="M3.5 9h17v10.5h-17z" />
      <path d="M3.5 9V5.5h5V9M8.5 5.5h5V9" />
    </>
  ),
  planner: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="9" cy="7" r="2" fill="currentColor" />
      <circle cx="15" cy="12" r="2" fill="currentColor" />
      <circle cx="7" cy="17" r="2" fill="currentColor" />
    </>
  ),
  contact: (
    <>
      <path d="M4 5.5h16v10.5H10l-4.5 3.5V16H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
};

function Icon({ name }: { name: PageSectionIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/** 04 WHAT IS ON YOUR PAGE. Eight cards that name the parts of the page the demo shows. */
export function PageSections() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.included} aria-labelledby="creators-included" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          {INCLUDED.label}
        </SystemLabel>
        <h2
          id="creators-included"
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
        >
          {INCLUDED.title}
        </h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {INCLUDED.cards.map((card, i) => (
            <li
              key={card.title}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 rounded-2xl border border-v4-ink/10 bg-v4-white p-5 sm:block sm:p-6"
            >
              <div className="flex items-start justify-between sm:mb-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-v4-ivory text-v4-ink">
                  <Icon name={card.icon} />
                </span>
                <SystemLabel className="hidden pt-1 text-v4-ink/60 sm:block">{String(i + 1).padStart(2, "0")}</SystemLabel>
              </div>
              <div>
                <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{card.title}</h3>
                <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ink/70">{card.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 border-t border-v4-ink/15 pt-6 font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ink">
          {INCLUDED.line}
        </p>
      </div>
    </StateField>
  );
}
