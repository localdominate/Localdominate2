import { SystemLabel } from "@/components/v4/SystemLabel";
import type { WorldVisualKind } from "@/data/v4Industries";

import hospitality from "@/assets/v4/industries/ld-industries-hospitality-16-10-1600.webp";
import hospitalitySmall from "@/assets/v4/industries/ld-industries-hospitality-16-10-800.webp";
import rentals from "@/assets/v4/industries/ld-industries-holiday-rentals-16-10-1600.webp";
import rentalsSmall from "@/assets/v4/industries/ld-industries-holiday-rentals-16-10-800.webp";
import trades from "@/assets/v4/industries/ld-industries-trades-16-10-1600.webp";
import tradesSmall from "@/assets/v4/industries/ld-industries-trades-16-10-800.webp";
import premium from "@/assets/v4/industries/ld-industries-premium-services-16-10-1600.webp";
import premiumSmall from "@/assets/v4/industries/ld-industries-premium-services-16-10-800.webp";

/**
 * One atmosphere image per world (image set CC-3, generated, labelled as illustration and never
 * as a client's premises), and for trades and premium services a schematic drawn in code below
 * it. All of them sit below the first screen, so the images load lazily inside fixed-ratio boxes.
 */

function Photo({ src, srcSmall, alt }: { src: string; srcSmall: string; alt: string }) {
  return (
    <figure>
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-v4-ink/5">
        <img
          src={srcSmall}
          srcSet={`${srcSmall} 800w, ${src} 1600w`}
          sizes="(max-width: 1023px) 92vw, 440px"
          alt={alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 font-v4-sans text-xs text-v4-ink/60">Illustration, not a client's premises.</figcaption>
    </figure>
  );
}

/** Trades: the fields of a Google Business Profile and what each is compared with. */
const PROFILE_FIELDS = [
  { field: "Name", against: "as on your invoice and your van" },
  { field: "Category", against: "the trade you want to be found for" },
  { field: "Service area", against: "the places you really drive to" },
  { field: "Hours", against: "including emergency hours, if you offer them" },
  { field: "Phone", against: "the number that gets answered" },
  { field: "Services", against: "one entry per kind of job" },
  { field: "Photos", against: "your own finished work" },
] as const;

function ProfileFields() {
  return (
    <figure className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5 sm:p-6">
      <div aria-hidden="true" className="flex items-center gap-4 border-b border-v4-ink/10 pb-5">
        <svg viewBox="0 0 32 40" className="h-10 w-8 shrink-0" fill="none">
          <path
            d="M16 38.5C16 38.5 30.5 25.2 30.5 15.5C30.5 7.5 24 1.5 16 1.5C8 1.5 1.5 7.5 1.5 15.5C1.5 25.2 16 38.5 16 38.5Z"
            className="stroke-v4-ink"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="15.5" r="5" className="fill-v4-signal stroke-v4-ink" strokeWidth="1.5" />
        </svg>
        <span className="flex flex-1 flex-col gap-2">
          <span className="h-2.5 w-3/5 rounded-full bg-v4-ink/80" />
          <span className="h-2 w-2/5 rounded-full bg-v4-ink/20" />
        </span>
      </div>
      <dl>
        {PROFILE_FIELDS.map((row) => (
          <div key={row.field} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-3 border-b border-v4-ink/10 py-2.5 last:border-b-0 last:pb-0">
            <dt>
              <SystemLabel className="text-v4-ink/60">{row.field}</SystemLabel>
            </dt>
            <dd className="font-v4-sans text-sm leading-snug text-v4-ink">{row.against}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="sr-only">
        Schematic of a Google Business Profile: the seven fields we go through and what each one is compared with.
      </figcaption>
    </figure>
  );
}

/** Premium services: several locations, one shared standard for the details that must match. */
const LOCATION_Y = [34, 110, 186] as const;
const STANDARD_FIELDS = ["Name", "Address", "Phone", "Hours", "Categories"] as const;

function Locations() {
  return (
    <figure className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5 sm:p-6">
      <svg
        viewBox="0 0 300 220"
        role="img"
        aria-label="Schematic: three locations, each connected to one shared standard for name, address, phone, hours and categories."
        className="block h-auto w-full"
        fill="none"
      >
        {LOCATION_Y.map((y, i) => (
          <g key={y}>
            <path d={`M 112 ${y} C 140 ${y}, 136 110, 164 110`} className="stroke-v4-ink/30" strokeWidth="1.25" />
            <circle cx="8" cy={y} r="6.5" className="fill-v4-white stroke-v4-ink" strokeWidth="1.5" />
            <circle cx="8" cy={y} r="2" className="fill-v4-ink" />
            <text x="24" y={y + 4} className="fill-v4-ink font-v4-mono text-[10.5px] uppercase tracking-[0.12em]">
              Location {i + 1}
            </text>
          </g>
        ))}
        <rect x="170" y="14" width="129" height="192" rx="14" className="fill-v4-ivory stroke-v4-ink/20" strokeWidth="1" />
        <circle cx="168" cy="110" r="6.5" className="fill-v4-signal stroke-v4-ink" strokeWidth="1.5" />
        <text x="186" y="44" className="fill-v4-ink/60 font-v4-mono text-[10.5px] uppercase tracking-[0.12em]">
          One standard
        </text>
        {STANDARD_FIELDS.map((field, i) => (
          <g key={field}>
            <line x1="186" x2="285" y1={58 + i * 29} y2={58 + i * 29} className="stroke-v4-ink/15" strokeWidth="1" />
            <text x="186" y={78 + i * 29} className="fill-v4-ink font-v4-sans text-[13px]">
              {field}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-5 border-t border-v4-ink/10 pt-4 font-v4-sans text-sm leading-snug text-v4-ink/70">
        Every location keeps its own page and profile. The details that must match come from one place.
      </figcaption>
    </figure>
  );
}

export function WorldVisual({ kind }: { kind: WorldVisualKind }) {
  switch (kind) {
    case "hotel-photo":
      return (
        <Photo
          src={hospitality}
          srcSmall={hospitalitySmall}
          alt="Illustration: a wooden hotel building with balconies and a terrace above a mountain lake at sunset"
        />
      );
    case "lake-photo":
      return (
        <Photo
          src={rentals}
          srcSmall={rentalsSmall}
          alt="Illustration: the living room of a holiday apartment with a large window onto a mountain lake at sunset"
        />
      );
    case "profile-fields":
      return (
        <div className="flex flex-col gap-6">
          <Photo
            src={trades}
            srcSmall={tradesSmall}
            alt="Illustration: a carpentry workshop with hand tools on a workbench and a window onto green hills"
          />
          <ProfileFields />
        </div>
      );
    case "locations":
      return (
        <div className="flex flex-col gap-6">
          <Photo
            src={premium}
            srcSmall={premiumSmall}
            alt="Illustration: a quiet office with a desk in front of a floor-to-ceiling window onto green hills at sunset"
          />
          <Locations />
        </div>
      );
  }
}
