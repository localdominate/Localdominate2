# CLAUDE.md – Local Dominate (localdominate.org)

Proposed working rules for Claude Code sessions. Read `docs/TAKEOVER_AUDIT.md` first.

## What this is

Marketing site + blog for Local Dominate (Google Maps / local SEO / AI-visibility service for the DACH
market, plus a UK campsite website offer at `/campsites`). Owner: Markus Wimböck. Originally built in
Lovable (project "Local Dominator Blueprint"); being migrated to GitHub + Claude Code.

## Stack

Vite 5 + React 18 + TypeScript SPA, react-router-dom 6 (all routes in `src/App.tsx`), Tailwind 3 +
shadcn/ui, TanStack Query, Supabase (Lovable Cloud project `minijgyozgjuhqgkmilj`) with 19 edge
functions in `supabase/functions/`. Hosting today: Lovable (with crawler pre-rendering).

## Commands

```sh
npm ci               # use npm; package-lock.json pins the same versions as Lovable's bun.lock
                     # (bun.lock itself points at Lovable's private registry and fails outside Lovable)
npm run dev          # http://localhost:8080
npm run build        # dist/
npx tsc --noEmit -p tsconfig.app.json
npm run lint         # currently 100 errors / 38 warnings (pre-existing, see audit)
npx vite preview --host 127.0.0.1 --port 4173
```

SEO regression check (also runs in GitHub Actions on every PR, see `.github/workflows/checks.yml`):

```sh
npm run build
npm i --no-save playwright@1.56.0 && npx playwright install chromium   # once
node scripts/seo-check.mjs                     # fails on any change vs docs/baseline
node scripts/seo-check.mjs --update-baseline   # ONLY after the owner approved the SEO change
```

Static build with build-time prerendering, for hosting outside Lovable (see `docs/STATIC_HOSTING.md`):

```sh
npm run build:static                                          # vite build + scripts/prerender.mjs
node scripts/seo-check.mjs --static --no-js --locales=en-US    # what a non-JS crawler gets
node scripts/seo-check.mjs --static                            # what a browser / Googlebot gets
```

There are no unit tests yet.

## Hard rules (migration phase)

1. **Never change a URL/slug, canonical, `<title>`, meta description, H1, JSON-LD, robots directive,
   hreflang or sitemap entry without the owner's explicit approval** – even to fix a known bug.
   Baseline: `docs/SEO_BASELINE.md` and `docs/baseline/`.
2. Never edit article content unless asked. Article = route in `src/App.tsx` + component in
   `src/pages/blog/` + entry in `src/data/blogArticles.ts` + author mapping in
   `src/data/authorProfiles.ts` + mirror `public/blog-md/<slug>.md`. Keep all five in sync when asked
   to add/rename.
3. Files in `public/` are served at stable URLs and are part of the SEO baseline (robots, 6 sitemaps,
   `llms*.txt`, `ai-*.json`, `feed.xml`, `blog-md/`, `images/`, Search Console and IndexNow key files).
   Don't rename, move or regenerate them.
4. Don't touch `index.html` head (GA4 `G-BS2B48THVM`, Consent Mode v2, fallback meta, Organization /
   WebSite JSON-LD) without approval.
5. Don't remove Lovable pieces (`@lovable.dev/cloud-auth-js`, `lovable-tagger`, `previewAuthStorage.ts`,
   `bun.lock*`) until the migration plan says so – Lovable may still be syncing this repo.
6. No database migrations or Supabase changes against `minijgyozgjuhqgkmilj` from here; it is managed
   by Lovable Cloud.
7. Scope discipline: one task per PR, no drive-by refactors, no "improvements" outside the request.
8. After any change that could affect rendering, run the SEO regression check
   (`node scripts/seo-check.mjs`); it renders the baseline URLs in `de-DE` and `en-US` and diffs
   against `docs/baseline/rendered-*.json`.
9. When adding or changing a dependency, update **both** lockfiles (`bun.lock` for Lovable,
   `package-lock.json` for everything else) or Lovable and CI will build different versions.

## Things that surprise people

* Language is chosen client-side per browser (`localStorage.language` → `navigator.language` → DE);
  the same URL shows German or English. Googlebot sees English.
* `SEOHead.tsx` writes the head at runtime; SEO for crawlers depends on the host pre-rendering.
* Titles get " | Local Dominator" appended only if the total stays ≤ 60 chars; else truncated with "…"
  unless `exactTitle`.
* Article OG image is derived from the slug: `/images/blog/<slug>.jpg` (most files are missing).
* Unknown paths render `NotFound` (noindex) but the host returns HTTP 200.
* `/blog/local-seo-anwaelte-kanzleien` has two `<Route>`s; the first wins.
* Emails go through Resend from edge functions; recipients are hard-coded.

## Git

* `main` mirrors production. Work on branches, open PRs; no direct pushes to `main`.
* Commit messages in English, imperative.

## Communication

Re (maintainer) prefers explanations in simple Arabic and numbered steps with direct links; code,
commits and PRs stay in English. Markus (owner) is addressed in German.
