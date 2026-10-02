import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";
import { CHECK_CREATORS, CHECK_DE, CHECK_LABEL, CHECK_LABEL_SHORT, CHECK_PATH } from "@/lib/check";
import { v4NavLinks } from "@/lib/v4Routes";

/**
 * V4 global navigation: slim, low-chrome (DESIGN_SYSTEM_PLAN.md §A). Links come from the route
 * registry (src/lib/v4Routes.ts), so only finished pages are linked. The one primary action is
 * "Get a free check"; "Book a 15-min call" is the second action, shown in the mobile menu. Two pages
 * have their own primary action: /de (German form on that page) and /creators ("Get my page").
 */
const NAV_LINKS = v4NavLinks();

const bookingProps = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal";

export function V4Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  // The path is the same in the prerender and in the browser, so this is hydration-safe.
  const { pathname } = useLocation();
  const german = pathname === CHECK_DE.prefix || pathname.startsWith(`${CHECK_DE.prefix}/`);
  const creators = pathname === CHECK_CREATORS.prefix;
  // On /creators the action is an anchor on the same page: a plain link, the browser scrolls.
  const check = creators
    ? { to: `#${CHECK_CREATORS.anchor}`, label: CHECK_CREATORS.label, short: CHECK_CREATORS.short, anchor: true }
    : german
      ? { to: CHECK_DE.path, label: CHECK_DE.label, short: CHECK_DE.short, anchor: false }
      : { to: CHECK_PATH, label: CHECK_LABEL, short: CHECK_LABEL_SHORT, anchor: false };
  const action = (className: string, children: string) =>
    check.anchor ? (
      <a href={check.to} onClick={closeMenu} className={className}>
        {children}
      </a>
    ) : (
      <Link to={check.to} onClick={closeMenu} className={className}>
        {children}
      </Link>
    );

  return (
    <header className="v4 sticky top-0 z-40 border-b border-v4-ivory/10 bg-v4-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className={cn("font-v4-sans text-sm font-semibold tracking-tight text-v4-ivory", focusRing)}
        >
          LocalDominate
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-v4-sans text-sm transition-colors hover:text-v4-ivory",
                  isActive ? "text-v4-ivory" : "text-v4-ivory/70",
                  focusRing
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          {action("rounded-full bg-v4-signal px-5 py-2 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal", check.label)}
        </nav>

        {/* Mobile and tablet: the primary action stays visible next to the menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          {action("rounded-full bg-v4-signal px-4 py-2 font-v4-sans text-xs font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal", check.short)}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="v4-mobile-menu"
            className={cn("py-2 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory", focusRing)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="v4-mobile-menu"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-v4-ivory/10 px-6 pb-8 pt-4 lg:hidden"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  "border-b border-v4-ivory/10 py-4 font-v4-serif text-2xl",
                  isActive ? "text-v4-signal" : "text-v4-ivory"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          {action("mt-6 rounded-full bg-v4-signal px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ink", check.label)}
          <a
            href={BOOKING_URL}
            {...bookingProps}
            onClick={closeMenu}
            className="mt-2 rounded-full border border-v4-ivory/30 px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ivory/90"
          >
            {BOOKING_LABEL}
          </a>
        </nav>
      )}
    </header>
  );
}
