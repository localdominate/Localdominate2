# Static build with prerendering (hosting outside Lovable)

Lovable's hosting renders pages on the fly for crawlers ("pre-rendering"). A plain static host would
serve every crawler the empty SPA shell from `index.html` – same generic title, no canonical, no
article content. `npm run build:static` removes that dependency by writing real HTML for every
URL at build time.

`npm run build` is unchanged (Lovable still builds with it).

## Commands

```sh
npm ci
npm i --no-save playwright@1.56.0 && npx playwright install chromium   # once
npm run build:static                                    # vite build + scripts/prerender.mjs
node scripts/seo-check.mjs --static --no-js --locales=en-US   # what non-JS crawlers get
node scripts/seo-check.mjs --static                    # what browsers / Googlebot get (JS on)
```

Both checks must report 0 failures (they also run in CI, job "Static build").

## What the build produces (`dist/`)

| File | Purpose |
|---|---|
| `index.html`, `<path>/index.html` | Prerendered page for every path in `docs/baseline/rendered-en-US.json` (288 today) |
| `spa-fallback.html` | The untouched SPA shell – serve it for every other extension-less path |
| `prerender-manifest.json` | List of prerendered paths |

How a page is made: the built site is opened in headless Chromium with locale **en-US** (what
Googlebot sees today, see SEO_BASELINE §3.3), external requests blocked, the page scrolled, then the
head (title, meta, canonical, hreflang, JSON-LD, route CSS/JS preloads) and `#root` are written out.
Scripts and styles added at runtime are dropped. JSON-LD added at runtime is marked
`data-prerendered` and removed by a one-line inline script before the app starts, so the app then
builds the page exactly as it does today (some components append JSON-LD without de-duplicating).

In the browser the React app starts as before (`createRoot` replaces `#root`), so a German browser
still switches to German. Known cosmetic effects: German visitors may briefly see English before the
app switches; routes are lazy-loaded with `<Suspense fallback={null}>`, so there can be a very short
blank moment between the static HTML and the app.

Dates generated at runtime (e.g. `/seo-lexikon` JSON-LD `dateModified = new Date()`) are frozen at
build time in the static HTML.

## Requirements for the new host (all must hold – SEO_BASELINE §2)

1. `/<path>` serves `dist/<path>/index.html` with HTTP 200 **without** redirecting to `/<path>/`.
2. `/<path>/` (trailing slash) is also served with 200 and **no** redirect (today's behaviour).
3. Any other extension-less path serves `dist/spa-fallback.html` with HTTP 200 (today's soft 404;
   changing it to a real 404 is an SEO change and needs the owner's approval).
4. Missing files with an extension → 404.
5. `www.localdominate.org` → 301 to `https://localdominate.org` (same path).
6. All files in `public/` served unchanged at the same URLs (sitemaps, robots, llms, IndexNow key,
   Search Console file, `blog-md/`).
7. Rebuild regularly (e.g. daily) if runtime dates such as `/seo-lexikon` should stay current.

Test on a staging URL with `seo-check.mjs` pointed at it (or by curl without JS) before any DNS
change. DNS stays on Lovable (A 185.158.133.1) until the owner approves the cutover.

## Adding a page

New routes must be added to the baseline (owner-approved `--update-baseline`) or they will not be
prerendered and non-JS crawlers will get the shell.
