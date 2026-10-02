import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";

/**
 * Zweite Aktion auf /de. Lokale Variante von BookCallButton mit deutschem Text, weil die
 * gemeinsame Komponente ihre Beschriftung fest aus src/lib/booking.ts nimmt. Ziel (Buchungslink
 * oder E-Mail-Rückfall) kommt unverändert aus derselben Quelle.
 */
export function DeBookCallButton({
  label,
  className,
  tone = "outline",
}: {
  label: string;
  className?: string;
  tone?: "outline" | "ink";
}) {
  return (
    <a
      href={BOOKING_URL}
      {...(BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 font-v4-sans text-sm font-medium transition-[opacity,border-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        tone === "outline" && "border border-v4-ivory/40 text-v4-ivory hover:border-v4-ivory/70",
        tone === "ink" && "border border-v4-ink/30 text-v4-ink hover:border-v4-ink/60",
        className
      )}
    >
      {label}
      {BOOKING_IS_EXTERNAL && <span className="sr-only"> (öffnet in neuem Tab)</span>}
    </a>
  );
}
