import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { CALL_MAIL, CONTACT_EMAIL } from "@/data/v4De";

/**
 * Zweite Aktion auf /de. Lokale Variante von BookCallButton mit deutschem Text, weil die
 * gemeinsame Komponente ihre Beschriftung fest aus src/lib/booking.ts nimmt. Ist ein Buchungslink
 * gesetzt, führt der Knopf dorthin. Sonst öffnet er eine vorbereitete E-Mail auf Deutsch.
 */
const MAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CALL_MAIL.subject)}&body=${encodeURIComponent(CALL_MAIL.body)}`;

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
      href={BOOKING_IS_EXTERNAL ? BOOKING_URL : MAIL_HREF}
      {...(BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 font-v4-sans text-sm font-medium transition-[opacity,border-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        tone === "outline" && "border border-v4-ivory/30 text-v4-ivory/90 hover:border-v4-ivory/60",
        tone === "ink" && "border border-v4-ink/25 text-v4-ink hover:border-v4-ink/60",
        className
      )}
    >
      {label}
      {BOOKING_IS_EXTERNAL && <span className="sr-only"> (öffnet in neuem Tab)</span>}
    </a>
  );
}
