import { SystemLabel } from "@/components/v4/SystemLabel";
import type { WorldVisualKind } from "@/data/v4Industries";

import hotelImg from "@/assets/v4/hq_pool_building_mountain.jpg";
import lakeImg from "@/assets/v4/hq_mountain_lake_sunset.jpg";

/**
 * One visual per world, so no world outweighs another: two atmosphere photographs (labelled as
 * such, never a client property) and two schematics drawn in code. All of them sit below the first
 * screen, so the photographs load lazily inside fixed-ratio boxes.
 */

function Photo({ src, alt, width, height, ratio }: { src: string; alt: string; width: number; height: number; ratio: string }) {
  return (
    <figure>
      <div className={`overflow-hidden rounded-2xl bg-v4-ink/5 ${ratio}`}>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
      <figcaption className="mt-3 font-v4-sans text-xs text-v4-ink/60">Atmosphere image, not a client property.</figcaption>
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
          src={hotelImg}
          alt="A hotel terrace with sun loungers beside an infinity pool, above a lake with mountains at sunset"
          width={509}
          height={483}
          ratio="aspect-[4/3]"
        />
      );
    case "lake-photo":
      return (
        <Photo
          src={lakeImg}
          alt="A mountain lake at sunset, framed by forest and snow-covered peaks"
          width={919}
          height={535}
          ratio="aspect-[16/10] lg:aspect-square"
        />
      );
    case "profile-fields":
      return <ProfileFields />;
    case "locations":
      return <Locations />;
  }
}
