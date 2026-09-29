import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SystemLabel } from "./SystemLabel";

/**
 * V4 global navigation — slim, low-chrome (moodboard principle, DESIGN_SYSTEM_PLAN.md §A).
 * New component per B1_SCOPE: does NOT touch or replace the existing StickyHeader used by the
 * 200+ live routes. Only mounted on /design-system and /preview/home-v3.
 *
 * Destinations Work/Services/Industries/Approach/Approach/About are not built in B1 (B1_SCOPE
 * explicitly excludes them) — rendered as inert placeholders rather than fabricated routes, per
 * "navigation can point to existing routes/placeholders where necessary." Insights already has a
 * real destination (the existing /blog, 188 live articles) so it links there for real.
 */
const NOT_YET_BUILT = ["Work", "Services", "Industries", "Approach", "About"] as const;

export function V4Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="v4 sticky top-0 z-40 border-b border-v4-ivory/10 bg-v4-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/preview/home-v3"
          className="font-v4-sans text-sm font-semibold tracking-tight text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
        >
          LocalDominate
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NOT_YET_BUILT.map((label) => (
            <span
              key={label}
              aria-disabled="true"
              className="font-v4-sans text-sm text-v4-ivory/50 cursor-default"
              title="Coming in a later B-batch — not part of B1"
            >
              {label}
            </span>
          ))}
          <Link
            to="/blog"
            className="font-v4-sans text-sm text-v4-ivory/80 hover:text-v4-ivory transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
          >
            Insights
          </Link>
          <SystemLabel as="span" className="text-v4-ivory/50">
            DE&nbsp;/&nbsp;EN
          </SystemLabel>
          <a
            href="#invitation"
            className="rounded-full bg-v4-signal px-5 py-2 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
          >
            Start a Project
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
          {NOT_YET_BUILT.map((label) => (
            <span key={label} aria-disabled="true" className="font-v4-sans text-base text-v4-ivory/50">
              {label}
            </span>
          ))}
          <Link
            to="/blog"
            className="font-v4-sans text-base text-v4-ivory/80"
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </Link>
          <a
            href="#invitation"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "mt-2 rounded-full bg-v4-signal px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ink"
            )}
          >
            Start a Project
          </a>
        </nav>
      )}
    </header>
  );
}
