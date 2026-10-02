import { Link } from "react-router-dom";
import { SystemLabel } from "./SystemLabel";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { v4NavLinks } from "@/lib/v4Routes";
import { CHECK_LABEL, CHECK_PATH } from "@/lib/check";

/**
 * V4 footer for the live V4 pages. Carries the legal pages (Impressum, Datenschutz, AGB) that must
 * be reachable from every page, and keeps the existing indexed sections linked from the home page
 * so none of them is orphaned when the home page changes.
 */
// Finished V4 pages come from the route registry; the rest are existing indexed sections.
const EXPLORE = [
  ...v4NavLinks().filter((l) => l.to !== "/blog"),
  { to: "/blog", label: "Blog" },
  { to: "/seo-lexikon", label: "SEO Lexicon A–Z" },
  { to: "/ai-visibility-audit", label: "AI Visibility Audit" },
] as const;

const STEPS = PILLAR_INDEX.map((p) => ({ to: pillarPath(p.id), label: `${p.n} ${p.name}` }));

const INDUSTRIES = [
  { to: "/restaurant-marketing", label: "Restaurant Marketing" },
  { to: "/handwerker-marketing", label: "Trades Marketing" },
  { to: "/arztpraxis-marketing", label: "Medical Practice Marketing" },
  { to: "/anwalt-marketing", label: "Law Firm Marketing" },
] as const;

const LEGAL = [
  { to: "/impressum", label: "Legal Notice (Impressum)" },
  { to: "/datenschutz", label: "Privacy Policy" },
  { to: "/agb", label: "Terms (AGB)" },
] as const;

/**
 * Re-opens the cookie banner. Same behaviour as CookieSettingsButton in CookieBanner.tsx, but with a
 * fixed English label: that component picks its label from the browser language, which would
 * differ from the prerendered English HTML and break hydration for German and Arabic browsers.
 */
function V4CookieSettingsButton() {
  const reopen = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };
  return (
    <button
      type="button"
      onClick={reopen}
      className="font-v4-sans text-xs text-v4-ivory/60 underline-offset-4 transition-colors hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
    >
      Cookie settings
    </button>
  );
}

const linkClass =
  "font-v4-sans text-sm text-v4-ivory/70 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

function LinkGroup({ title, links }: { title: string; links: readonly { to: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <SystemLabel as="p" className="text-v4-ivory/50">
        {title}
      </SystemLabel>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function V4Footer() {
  return (
    <footer className="v4 border-t border-v4-ivory/10 bg-v4-ink text-v4-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3 lg:grid-cols-5 md:px-10">
        <div className="flex flex-col gap-3">
          <Link to="/" className="font-v4-sans text-base font-semibold tracking-tight text-v4-ivory">
            LocalDominate
          </Link>
          <p className="max-w-xs font-v4-sans text-sm text-v4-ivory/60">
            Strategy, brand, website and growth, connected into one system.
          </p>
          <Link to={CHECK_PATH} className={`${linkClass} text-v4-signal hover:text-v4-signal`}>
            {CHECK_LABEL} →
          </Link>
          <a href="mailto:info@localdominate.org" className={linkClass}>
            info@localdominate.org
          </a>
        </div>
        <LinkGroup title="Explore" links={EXPLORE} />
        <LinkGroup title="The seven steps" links={STEPS} />
        <LinkGroup title="Industries" links={INDUSTRIES} />
        <LinkGroup title="Legal" links={LEGAL} />
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-v4-ivory/10 px-6 py-6 md:px-10">
        <p className="font-v4-sans text-xs text-v4-ivory/50">© {new Date().getFullYear()} LocalDominate</p>
        <V4CookieSettingsButton />
      </div>
    </footer>
  );
}
