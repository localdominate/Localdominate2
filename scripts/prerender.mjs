#!/usr/bin/env node
/**
 * Build-time prerendering for hosting outside Lovable.
 *
 * Lovable's hosting renders pages for crawlers on the fly. Any other static host would serve the empty
 * SPA shell to bots that don't run JavaScript. This script renders every URL of the SEO baseline
 * (docs/baseline/rendered-en-US.json) in headless Chromium after `vite build` and writes the result as
 * static HTML, so every crawler gets the same head (title, meta, canonical, hreflang, JSON-LD) and
 * body content that Googlebot gets today.
 *
 * Output (inside dist/):
 *   index.html, <path>/index.html   prerendered pages (en-US, like Googlebot sees them today)
 *   spa-fallback.html               the untouched SPA shell; hosts must serve it for unknown paths
 *                                   (serving the prerendered index.html there would leak the home
 *                                   page canonical onto 404s)
 *   prerender-manifest.json         list of prerendered paths
 *
 * The React app still boots normally on top (createRoot replaces #root), so visitors whose browser is
 * German still switch to German after load. `npm run build` (used by Lovable) is NOT changed; use
 * `npm run build:static`.
 *
 * Usage:
 *   npm i --no-save playwright@1.56.0 && npx playwright install chromium   (once)
 *   npm run build:static
 * Options: --only=/,/campsites   CHROMIUM_PATH=/path/to/chromium
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const args = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));
const PORT = Number(args.port || 4180);
const BASE = `http://127.0.0.1:${PORT}`;
const GENERIC_TITLE = "Local Dominator â€“ Local SEO & AI-Sichtbarkeit";
const LOCALE = "en-US";
// Live pages that are newer than the frozen SEO baseline. They are prerendered like the baseline
// URLs but are not part of the baseline, so seo-check does not compare them.
const PILLAR_IDS = ["diagnose", "position", "create", "build", "launch", "grow", "scale"]; // keep in sync with src/data/v4PillarIndex.ts
const EXTRA_PATHS = ["/services", "/work", "/approach", ...PILLAR_IDS.map((id) => `/approach/${id}`),
  "/industries", "/insights", "/about", "/start-a-project", "/de"];

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2", ".md": "text/markdown" };

/** Static server over dist/ that always answers unknown paths with the pristine shell. */
function serve(shell) {
  return http.createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, BASE).pathname);
    const file = path.join(DIST, p);
    if (file.startsWith(DIST) && fs.existsSync(file) && fs.statSync(file).isFile() && !p.endsWith(".html")) {
      res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
      return fs.createReadStream(file).pipe(res);
    }
    res.writeHead(200, { "content-type": TYPES[".html"] });
    res.end(shell);
  }).listen(PORT, "127.0.0.1");
}

// Runs in the page: collect what the app rendered.
function capture(hydratedPaths) {
  const keep = [];
  for (const el of document.head.children) {
    const tag = el.tagName.toLowerCase();
    if (tag === "script" && el.type !== "application/ld+json" && !el.hasAttribute("data-shell")) continue;
    if (tag === "style" && !el.hasAttribute("data-shell")) continue;
    keep.push(el.outerHTML);
  }
  return {
    head: keep,
    root: (() => {
      // Empty notification regions (toast/sonner) are added on the client after mount, so they are left
      // out of the prerendered HTML; this keeps the markup identical to React's first client render
      // and lets the V4 pages hydrate without a mismatch.
      const clone = document.getElementById("root").cloneNode(true);
      clone.querySelectorAll('[role="region"][aria-label^="Notifications"], section[aria-label^="Notifications"]').forEach((n) => n.remove());
      // The V4 pages are hydrated in the browser. React expects an opening and closing Suspense marker
      // around the content of the route boundary in App.tsx; a client-rendered snapshot has none.
      const hydrated = hydratedPaths.includes(location.pathname.replace(/\/+$/, "") || "/");
      if (!hydrated) return clone.innerHTML;
      // framer-motion leaves an inline "transform: none" once an animation has finished; the first
      // client render does not have it, so it is dropped from the snapshot.
      clone.querySelectorAll('[style="transform: none;"], [style="opacity: 1; transform: none;"]').forEach((n) => n.removeAttribute("style"));
      // innerHTML merges adjacent text nodes (e.g. "Delivery: " + "72 hours"); React's server output
      // separates them with an empty comment and hydration expects that.
      const texts = [];
      const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) texts.push(walker.currentNode);
      for (const t of texts) {
        if (t.previousSibling && t.previousSibling.nodeType === 3) t.parentNode.insertBefore(document.createComment(""), t);
      }
      return "<!--$-->" + clone.innerHTML + "<!--/$-->";
    })(),
    lang: document.documentElement.lang,
    finalPath: location.pathname,
  };
}

function toFile(p) {
  const clean = p.replace(/\/+$/, "");
  return clean === "" ? path.join(DIST, "index.html") : path.join(DIST, clean, "index.html");
}

async function main() {
  let playwright;
  try { playwright = await import("playwright"); }
  catch { console.error("playwright is not installed. Run: npm i --no-save playwright@1.56.0 && npx playwright install chromium"); process.exit(2); }
  const shellPath = path.join(DIST, "index.html");
  if (!fs.existsSync(shellPath)) { console.error("dist/ not found. Run `vite build` first."); process.exit(2); }

  // Keep the pristine shell (re-running the script must not prerender on top of a prerendered page).
  const fallbackPath = path.join(DIST, "spa-fallback.html");
  if (!fs.existsSync(fallbackPath)) fs.copyFileSync(shellPath, fallbackPath);
  let shell = fs.readFileSync(fallbackPath, "utf8");
  // Mark the shell's own scripts/styles so capture() keeps exactly those and drops runtime-injected ones.
  const markedShell = shell.replace(/<(script|style)/g, "<$1 data-shell");

  const baseline = JSON.parse(fs.readFileSync(path.join(ROOT, "docs", "baseline", "rendered-en-US.json"), "utf8"));
  const only = args.only ? new Set(String(args.only).split(",")) : null;
  const paths = [...new Set([...baseline.map((r) => r.path), ...EXTRA_PATHS])].filter((p) => !only || only.has(p));

  const server = serve(markedShell);
  const launchOpts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const extraArgs = (process.env.CHROMIUM_EXTRA_ARGS || "").split(/\s+/).filter(Boolean);
  const browser = await playwright.chromium.launch({ ...launchOpts, args: ["--no-proxy-server", ...extraArgs] });
  const ctx = await browser.newContext({ locale: LOCALE });
  await ctx.addInitScript(() => { try { localStorage.setItem("cookieConsent", "essential"); } catch { /* ignore */ } });
  await ctx.route("**/*", (route) => (route.request().url().startsWith(BASE) ? route.continue() : route.abort()));

  const results = [];
  const errors = [];
  let i = 0;
  const worker = async () => {
    const page = await ctx.newPage();
    while (i < paths.length) {
      const p = paths[i++];
      try {
        await page.goto(BASE + p, { waitUntil: "load", timeout: 30000 });
        await page.waitForFunction((g) => document.querySelector("h1") || document.title !== g, GENERIC_TITLE, { timeout: 8000 }).catch(() => {});
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
          window.scrollTo(0, 0);
        });
        await page.waitForTimeout(1500);
        const cap = await page.evaluate(capture, ["/", ...EXTRA_PATHS]);
        if (cap.finalPath !== p) { errors.push(`${p}: client redirected to ${cap.finalPath}, not prerendered`); continue; }
        results.push({ path: p, ...cap });
      } catch (e) {
        errors.push(`${p}: ${String(e).slice(0, 200)}`);
      }
    }
    await page.close();
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  await browser.close();
  server.close();

  // Shell pieces.
  const headStart = shell.indexOf("<head>") + "<head>".length;
  const headEnd = shell.indexOf("</head>");
  const rootRe = /<div id="root"><\/div>/;
  if (!rootRe.test(shell)) { console.error('dist/index.html has no empty <div id="root"></div>'); process.exit(2); }

  for (const r of results) {
    // Runtime JSON-LD gets data-prerendered and is removed by an inline script before the app boots,
    // so the app re-creates it exactly as without prerendering (some components append JSON-LD
    // without de-duplicating). Crawlers that don't run JavaScript still see it.
    const head = r.head
      .map((h) => (/^<script type="application\/ld\+json"/.test(h) && !h.includes(" data-shell") ? h.replace("<script ", "<script data-prerendered ") : h))
      .map((h) => h.replace(/ data-shell(="")?/g, ""))
      .concat(`<script>document.querySelectorAll("script[data-prerendered]").forEach(function (s) { s.remove(); });</script>`)
      .join("\n    ");
    // Head = shell elements + what the app added at runtime (SEO tags, JSON-LD, the route's
    // modulepreload/CSS links that Vite injected). Runtime-injected scripts/styles are dropped.
    let html = shell.slice(0, headStart) + "\n    " + head + "\n  " + shell.slice(headEnd);
    html = html.replace(rootRe, `<div id="root">${r.root}</div>`);
    if (r.lang) html = html.replace(/<html([^>]*)\slang="[^"]*"/, `<html$1 lang="${r.lang}"`);
    const out = toFile(r.path);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
  }
  fs.writeFileSync(path.join(DIST, "prerender-manifest.json"), JSON.stringify({ locale: LOCALE, pages: results.map((r) => r.path).sort() }, null, 1));

  console.log(`Prerendered ${results.length}/${paths.length} pages (${LOCALE}). Shell kept at dist/spa-fallback.html.`);
  if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
}

main().catch((e) => { console.error(e); process.exit(2); });
