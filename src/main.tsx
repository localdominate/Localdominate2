import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { isV4HydratedPath, preloadV4Page } from "./lib/v4Pages";
import "./index.css";

/**
 * The V4 pages are prerendered at build time (scripts/prerender.mjs). Hydrating them keeps that
 * HTML on screen instead of replacing it once the JavaScript has run, which is what the largest
 * contentful paint measures. The V4 pages render the same English markup for every browser
 * language (only the document head differs, and SEOHead writes that in an effect), so they are
 * hydrated for every visitor, including German-language browsers, the main audience. Every other
 * page renders on the client exactly as before. The page module is loaded first so hydration
 * never suspends.
 */
const container = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const canHydrate = container.hasChildNodes() && isV4HydratedPath(path);

const start = async () => {
  if (!canHydrate) {
    createRoot(container).render(<App />);
    return;
  }
  await preloadV4Page(path);
  hydrateRoot(container, <App />);
};

void start();
