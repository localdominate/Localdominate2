import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { DeSegment, SegmentId } from "@/data/v4De";

/**
 * Segment-Weiche: drei Felder, genau eines ist gewählt (Radiogruppe mit Pfeiltasten, ein
 * Tabstopp). Sie steht über allem, was sie ändert, damit beim Wechsel nichts unter dem Finger
 * verrutscht. Auf dem Handy drei volle Zeilen, ab 768 px drei Spalten.
 * Der Startzustand ist immer dasselbe Segment, damit Vorrendern und Hydration übereinstimmen.
 */
export function DeSegmentPicker({
  segments,
  value,
  onChange,
  labelId,
}: {
  segments: readonly DeSegment[];
  value: SegmentId;
  onChange: (id: SegmentId) => void;
  labelId: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    onChange(segments[index].id);
    refs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = segments.length - 1;
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? index === last ? 0 : index + 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? index === 0 ? last : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    select(next);
  };

  return (
    <div role="radiogroup" aria-labelledby={labelId} className="grid gap-2 md:grid-cols-3 md:gap-3">
      {segments.map((segment, index) => {
        const active = segment.id === value;
        return (
          <button
            key={segment.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(segment.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "flex min-h-16 items-center gap-4 rounded-xl border px-4 py-3 text-left transition-[border-color,background-color] duration-200 md:items-start md:px-5 md:py-4",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
              active ? "border-v4-signal bg-v4-ivory/10" : "border-v4-ivory/25 hover:border-v4-ivory/60"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 md:mt-0.5",
                active ? "border-v4-signal" : "border-v4-ivory/50"
              )}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full bg-v4-signal transition-transform duration-200",
                  active ? "scale-100" : "scale-0"
                )}
              />
            </span>
            <span className="flex flex-col gap-1">
              <span className={cn("font-v4-sans text-base font-medium leading-snug", active ? "text-v4-ivory" : "text-v4-ivory/85")}>
                {segment.choice}
              </span>
              <span className="font-v4-sans text-sm leading-snug text-v4-ivory/60">{segment.choiceNote}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
