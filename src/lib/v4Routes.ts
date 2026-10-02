/**
 * The V4 pages in one place: route, navigation label and whether the page is finished.
 *
 * `ready: false` pages are routed (so their owners can build them) but are not linked from the
 * navigation or footer and render with `noindex`. Flip the flag when the page is accepted.
 * Owner of this file: Head of Development (see claude/LocalDominate_Dev-Plan_2026-10-02.md, 2.2).
 */
export type V4RouteId =
  | "home"
  | "approach"
  | "services"
  | "work"
  | "industries"
  | "insights"
  | "about"
  | "start"
  | "de";

export type V4Route = {
  id: V4RouteId;
  path: string;
  label: string;
  ready: boolean;
  /** Shown in the primary navigation (when ready). */
  nav: boolean;
};

export const V4_ROUTES: readonly V4Route[] = [
  { id: "home", path: "/", label: "Home", ready: true, nav: false },
  { id: "approach", path: "/approach", label: "Approach", ready: true, nav: true },
  { id: "services", path: "/services", label: "Services", ready: true, nav: true },
  { id: "work", path: "/work", label: "Work", ready: true, nav: true },
  { id: "industries", path: "/industries", label: "Industries", ready: false, nav: true },
  { id: "insights", path: "/insights", label: "Insights", ready: false, nav: true },
  { id: "about", path: "/about", label: "About", ready: false, nav: true },
  { id: "start", path: "/start-a-project", label: "Free check", ready: true, nav: false },
  { id: "de", path: "/de", label: "Deutsch", ready: false, nav: false },
] as const;

export const v4Route = (id: V4RouteId): V4Route => {
  const route = V4_ROUTES.find((r) => r.id === id);
  if (!route) throw new Error(`Unknown V4 route: ${id}`);
  return route;
};

/** Until /insights is finished, "Insights" keeps pointing at the existing blog index. */
const INSIGHTS_FALLBACK = { to: "/blog", label: "Insights" } as const;

export const v4NavLinks = (): readonly { to: string; label: string }[] =>
  V4_ROUTES.filter((r) => r.nav).flatMap((r) => {
    if (r.ready) return [{ to: r.path, label: r.label }];
    return r.id === "insights" ? [INSIGHTS_FALLBACK] : [];
  });
