import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";

/**
 * V4 global navigation — slim, low-chrome (moodboard principle, DESIGN_SYSTEM_PLAN.md §A).
 * Used by the live V4 pages (`/`, `/services`) and the design-system preview. Only destinations
 * that exist are linked: Approach, Services, Work and Insights (the existing /blog). The primary action is the
 * single "Book a 15-min call" button.
 */
const NAV_LINKS = [
  { to: "/approach", label: "Approach" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Insights" },
] as const;

const bookingProps = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function V4Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="v4 sticky top-0 z-40 border-b border-v4-ivory/10 bg-v4-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="font-v4-sans text-sm font-semibold tracking-tight text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
        >
          LocalDominate
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-v4-sans text-sm text-v4-ivory/80 hover:text-v4-ivory transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            {...bookingProps}
            className="rounded-full bg-v4-signal px-5 py-2 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
          >
            {BOOKING_LABEL}
          </a>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="v4-mobile-menu"
          className="md:hidden font-v4-mono text-xs uppercase tracking-widest text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="v4-mobile-menu"
          aria-label="Primary"
          className="md:hidden flex flex-col gap-4 border-t border-v4-ivory/10 px-6 py-6"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-v4-sans text-base text-v4-ivory/80"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            {...bookingProps}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "mt-2 rounded-full bg-v4-signal px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ink"
            )}
          >
            {BOOKING_LABEL}
          </a>
        </nav>
      )}
    </header>
  );
}
