import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CAREER } from "@/data/v4About";
import type { CareerStation } from "@/data/v4About";

/**
 * The signature element of /about: the career as one column, newest first, on a dark field.
 * Two marks carry meaning. A green node means the station is still running today. An ivory card
 * means a hotel or hospitality station (a place he worked or trained, never a client).
 * Plain HTML and CSS: an ordered list that reads top to bottom without JavaScript.
 */
export function CareerLegend({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-8 gap-y-3 font-v4-sans text-sm text-v4-ivory/70", className)}>
      <li className="flex items-center gap-3">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-v4-signal" />
        Running today
      </li>
      <li className="flex items-center gap-3">
        <span aria-hidden="true" className="h-3 w-5 rounded-[3px] bg-v4-ivory" />
        Hotel and hospitality station
      </li>
    </ul>
  );
}

function Node({ station }: { station: CareerStation }) {
  const position = "absolute left-1/2 top-1 h-3.5 w-3.5 -translate-x-1/2 lg:top-[1.05rem]";
  if (station.current) {
    return (
      <span className={cn(position, "flex items-center justify-center")}>
        <span className="absolute -inset-1.5 animate-v4-node-breathe rounded-full bg-v4-signal/40" />
        <span className="relative h-3.5 w-3.5 rounded-full bg-v4-signal" />
      </span>
    );
  }
  return (
    <span
      className={cn(
        position,
        "rounded-full border",
        station.hospitality ? "border-v4-ivory bg-v4-ivory" : "border-v4-ivory/50 bg-v4-ink"
      )}
    />
  );
}

/**
 * One station. On wide screens it reads like a register: years, node, role and place, what the
 * job was. Below that the same content stacks, and on phones the years move above it.
 */
function Station({ station, first, last }: { station: CareerStation; first: boolean; last: boolean }) {
  const hotel = Boolean(station.hospitality);
  const where = [station.organisation, station.place].filter(Boolean).join(", ");
  return (
    <li className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 lg:grid-cols-[minmax(0,17rem)_1.5rem_minmax(0,1fr)] lg:gap-x-10">
      {/* The years: large and readable, exact months underneath where the CV gives them */}
      <div className="col-start-2 row-start-1 pb-4 lg:col-start-1 lg:pb-0 lg:text-right">
        <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-none text-v4-ivory lg:text-[length:var(--v4-text-heading)]">
          {station.years}
        </p>
        {station.period && (
          <SystemLabel as="p" className="mt-2.5 text-v4-ivory/60 lg:mt-3">
            {station.period}
          </SystemLabel>
        )}
      </div>

      {/* The rail: one line through all stations, one node per station */}
      <div aria-hidden="true" className="relative col-start-1 row-span-2 row-start-1 lg:col-start-2 lg:row-span-1">
        <span
          className={cn(
            "absolute left-1/2 w-px -translate-x-1/2 bg-v4-ivory/20",
            first ? "top-3 lg:top-6" : "top-0",
            last ? "h-3 lg:h-6" : "bottom-0"
          )}
        />
        <Node station={station} />
      </div>

      <div className={cn("col-start-2 row-start-2 lg:col-start-3 lg:row-start-1", last ? "pb-0" : "pb-12 lg:pb-16")}>
        <div
          className={cn(
            "xl:grid xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-x-10",
            hotel ? "rounded-2xl bg-v4-ivory p-6 text-v4-ink md:p-8" : "lg:pt-2"
          )}
        >
          <div>
            {station.hospitality && (
              <SystemLabel as="p" className="mb-4 text-v4-ink/60">
                {station.hospitality}
              </SystemLabel>
            )}
            <h3
              className={cn(
                "font-v4-sans text-xl font-semibold leading-snug tracking-tight md:text-2xl",
                hotel ? "text-v4-ink" : "text-v4-ivory"
              )}
            >
              {station.role}
            </h3>
            <p className={cn("mt-1.5 font-v4-sans text-base", hotel ? "text-v4-ink/70" : "text-v4-ivory/70")}>{where}</p>
          </div>
          <div className={cn("mt-4 xl:mt-0", hotel ? "xl:pt-[1.9rem]" : "xl:pt-1")}>
            <p className={cn("font-v4-sans text-base leading-relaxed", hotel ? "text-v4-ink/80" : "text-v4-ivory/80")}>
              {station.summary}
            </p>
            {station.items && (
              <ul className="mt-5">
                {station.items.map((item) => (
                  <li key={item.name} className="border-t border-v4-ivory/15 py-3.5">
                    <span className="block font-v4-sans text-base font-semibold text-v4-ivory">{item.name}</span>
                    <span className="mt-1 block font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{item.note}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export function CareerTimeline({ className }: { className?: string }) {
  return (
    <ol className={className}>
      {CAREER.map((station, i) => (
        <Station key={station.id} station={station} first={i === 0} last={i === CAREER.length - 1} />
      ))}
    </ol>
  );
}
