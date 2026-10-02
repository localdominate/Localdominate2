import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { DeSegment, SegmentId } from "@/data/v4De";

/**
 * Segment-Weiche: drei Felder, genau eines ist gewählt (Radiogruppe mit Pfeiltasten).
 * Startzustand ist immer dasselbe Segment, damit Vorrendern und Hydration übereinstimmen.
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

  const move = (from: number, step: number) => {
    const next = (from + step + segments.length) % segments.length;
    onChange(segments[next].id);
    refs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      move(index, 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(index, -1);
    }
  };

  return (
    <div role="radiogroup" aria-labelledby={labelId} className="flex flex-col gap-2">
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
              "flex min-h-14 items-center gap-4 rounded-xl border px-5 py-3 text-left font-v4-sans text-base transition-[border-color,background-color,color] duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
              active
                ? "border-v4-signal bg-v4-ivory/10 text-v4-ivory"
                : "border-v4-ivory/25 text-v4-ivory/80 hover:border-v4-ivory/60 hover:text-v4-ivory"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200",
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
            {segment.choice}
          </button>
        );
      })}
    </div>
  );
}
