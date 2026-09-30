import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";

/** The one conversion action of the V4 pages: "Book a 15-min call". */
export function BookCallButton({
  className,
  tone = "signal",
}: {
  className?: string;
  /** "signal" = filled Signal Green; "outline" = ivory outline for dark fields. */
  tone?: "signal" | "outline";
}) {
  return (
    <a
      href={BOOKING_URL}
      {...(BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 font-v4-sans text-sm font-medium transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        tone === "signal"
          ? "bg-v4-signal text-v4-ink hover:opacity-90"
          : "border border-v4-ivory/30 text-v4-ivory/90 hover:border-v4-ivory/60",
        className
      )}
    >
      {BOOKING_LABEL}
    </a>
  );
}
