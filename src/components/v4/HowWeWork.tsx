import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { HOW_WE_WORK, HOW_WE_WORK_NOTE } from "@/data/v4HowWeWork";
import type { Commitment } from "@/data/v4HowWeWork";

/**
 * The four commitments as a numbered list. `tone` matches the field the list sits on.
 * Pass `items` and `note` to render another language (the German page).
 */
export function HowWeWork({
  tone = "light",
  items = HOW_WE_WORK,
  note = HOW_WE_WORK_NOTE,
  className,
}: {
  tone?: "light" | "dark";
  items?: readonly Commitment[];
  /** The exception printed under the list. Pass an empty string to hide it. */
  note?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
    <ol className="grid gap-x-10 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={cn("flex gap-5 border-t py-7", dark ? "border-v4-ivory/15" : "border-v4-ink/15")}
        >
          <SystemLabel className={cn("pt-1.5", dark ? "text-v4-ivory/50" : "text-v4-ink/60")}>
            {String(i + 1).padStart(2, "0")}
          </SystemLabel>
          <div>
            <h3 className={cn("font-v4-sans text-lg font-semibold tracking-tight", dark ? "text-v4-ivory" : "text-v4-ink")}>
              {item.title}
            </h3>
            <p className={cn("mt-2 max-w-md font-v4-sans text-sm leading-relaxed", dark ? "text-v4-ivory/70" : "text-v4-ink/70")}>
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
      {note && (
        <p className={cn("border-t pt-5 font-v4-sans text-xs leading-relaxed", dark ? "border-v4-ivory/15 text-v4-ivory/60" : "border-v4-ink/15 text-v4-ink/60")}>
          {note}
        </p>
      )}
    </div>
  );
}
