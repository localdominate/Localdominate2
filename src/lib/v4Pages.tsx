import { lazy } from "react";
import type { ComponentType } from "react";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";

type PageProps = { preview?: boolean };
type PageLoader = () => Promise<{ default: ComponentType<PageProps> }>;

/** The V4 pages that are prerendered at build time and hydrated in the browser (see main.tsx). */
const loadPillar: PageLoader = () => import("@/pages/v4/PillarV4"); // one module serves all seven step pages

const LOADERS: Record<string, PageLoader> = {
  "/": () => import("@/pages/v4/HomeV4"),
  "/services": () => import("@/pages/v4/ServicesV4"),
  "/work": () => import("@/pages/v4/WorkV4"),
  [PILLAR_BASE]: () => import("@/pages/v4/ApproachV4"),
  ...Object.fromEntries(PILLAR_INDEX.map((p) => [pillarPath(p.id), loadPillar])),
};

// Keyed by loader, so pages that share a module (the seven step pages) share one entry.
const preloaded = new Map<PageLoader, ComponentType<PageProps>>();

export const isV4HydratedPath = (path: string): boolean => path in LOADERS;

/** Loads the page module before hydration, so the page renders synchronously and never suspends. */
export const preloadV4Page = async (path: string): Promise<void> => {
  const loader = LOADERS[path];
  if (!loader) return;
  preloaded.set(loader, (await loader()).default);
};

/** Drop-in replacement for lazy(): uses the preloaded page when there is one, else lazy-loads it. */
export const lazyV4Page = (path: string): ComponentType<PageProps> => {
  const loader = LOADERS[path];
  const LazyPage = lazy(loader);
  const V4Page = (props: PageProps) => {
    const Loaded = preloaded.get(loader);
    return Loaded ? <Loaded {...props} /> : <LazyPage {...props} />;
  };
  return V4Page;
};
