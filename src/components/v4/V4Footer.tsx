import { Link } from "react-router-dom";
import { CookieSettingsButton } from "@/components/CookieBanner";
import { SystemLabel } from "./SystemLabel";

/**
 * V4 footer for the live V4 pages. Carries the legal pages (Impressum, Datenschutz, AGB) that must
 * be reachable from every page, and keeps the existing indexed sections linked from the home page
 * so none of them is orphaned when the home page changes.
 */
const EXPLORE = [
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/seo-lexikon", label: "SEO Lexicon A–Z" },
  { to: "/ai-visibility-audit", label: "AI Visibility Audit" },
] as const;

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
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div className="flex flex-col gap-3">
          <Link to="/" className="font-v4-sans text-base font-semibold tracking-tight text-v4-ivory">
            LocalDominate
          </Link>
          <p className="max-w-xs font-v4-sans text-sm text-v4-ivory/60">
            Strategy, brand, website and growth, connected into one system.
          </p>
          <a href="mailto:info@localdominate.org" className={linkClass}>
            info@localdominate.org
          </a>
        </div>
        <LinkGroup title="Explore" links={EXPLORE} />
        <LinkGroup title="Industries" links={INDUSTRIES} />
        <LinkGroup title="Legal" links={LEGAL} />
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-v4-ivory/10 px-6 py-6 md:px-10">
        <p className="font-v4-sans text-xs text-v4-ivory/50">© {new Date().getFullYear()} LocalDominate</p>
        <CookieSettingsButton />
      </div>
    </footer>
  );
}
