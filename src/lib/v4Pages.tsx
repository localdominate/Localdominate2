import { lazy } from "react";
import type { ComponentType } from "react";

type PageProps = { preview?: boolean };
type PageLoader = () => Promise<{ default: ComponentType<PageProps> }>;

/** The V4 pages that are prerendered at build time and hydrated in the browser (see main.tsx). */
const LOADERS: Record<string, PageLoader> = {
  "/": () => import("@/pages/v4/HomeV4"),
  "/services": () => import("@/pages/v4/ServicesV4"),
  "/work": () => import("@/pages/v4/WorkV4"),
};

const preloaded = new Map<string, ComponentType<PageProps>>();

export const isV4HydratedPath = (path: string): boolean => path in LOADERS;

/** Loads the page module before hydration, so the page renders synchronously and never suspends. */
export const preloadV4Page = async (path: string): Promise<void> => {
  const loader = LOADERS[path];
  if (!loader) return;
  preloaded.set(path, (await loader()).default);
};

/** Drop-in replacement for lazy(): uses the preloaded page when there is one, else lazy-loads it. */
export const lazyV4Page = (path: string): ComponentType<PageProps> => {
  const LazyPage = lazy(LOADERS[path]);
  const V4Page = (props: PageProps) => {
    const Loaded = preloaded.get(path);
    return Loaded ? <Loaded {...props} /> : <LazyPage {...props} />;
  };
  return V4Page;
};
