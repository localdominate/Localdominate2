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
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 shrink-0 text-v4-ink"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/**
 * WHAT IS ON YOUR PAGE. Eight parts of the page as hairline rows: icon, name, one sentence.
 * Two columns from 768 px. On phones the rows become compact tiles in two columns that show icon
 * and name; the sentence stays in the HTML and appears from 640 px.
 */
export function PageSections() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.included} aria-labelledby="creators-included" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {INCLUDED.label}
          </SystemLabel>
          <h2
            id="creators-included"
            className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
          >
            {INCLUDED.title}
          </h2>
          <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
            {INCLUDED.line}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-5 border-b border-v4-ink/15 sm:grid-cols-1 md:grid-cols-2 md:gap-x-10">
          {INCLUDED.cards.map((card) => (
            <li key={card.title} className="flex gap-3 border-t border-v4-ink/15 py-4 sm:gap-4 sm:py-5">
              <Icon name={card.icon} />
              <div>
                <h3 className="font-v4-sans text-base font-semibold leading-snug tracking-tight text-v4-ink">{card.title}</h3>
                <p className="mt-1.5 hidden font-v4-sans text-sm leading-relaxed text-v4-ink/70 sm:block">{card.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StateField>
  );
}
