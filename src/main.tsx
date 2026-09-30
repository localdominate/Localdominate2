import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { getInitialLanguage } from "./i18n/LanguageContext";
import { isV4HydratedPath, preloadV4Page } from "./lib/v4Pages";
import "./index.css";

/**
 * The V4 pages are prerendered at build time in English (scripts/prerender.mjs). Hydrating them
 * keeps that HTML on screen instead of replacing it once the JavaScript has run, which is what
 * the largest contentful paint measures. Every other case (other pages, a visitor whose language is
 * not English, no prerendered markup) renders on the client exactly as before, so there is no
 * hydration mismatch to recover from. The page module is loaded first so hydration never suspends.
 */
const container = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const canHydrate =
  container.hasChildNodes() && isV4HydratedPath(path) && getInitialLanguage() === "en";

const start = async () => {
  if (!canHydrate) {
    createRoot(container).render(<App />);
    return;
  }
  await preloadV4Page(path);
  hydrateRoot(container, <App />);
};

void start();
