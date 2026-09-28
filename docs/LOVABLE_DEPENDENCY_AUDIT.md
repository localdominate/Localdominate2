# Lovable Dependency Audit

Date: 2026-09-29
Scope: `localdominate/ejdhisidjs` (the active repo — see note on repo duplication below), branch `rebrand/localdominate-2.0-foundation`, based off `main` @ `ee4e048`.

## Repo duplication note (read first)

Two separate GitHub repos exist under the `localdominate` org: **`localdominate/local`** (stale — only has PR #1, the initial takeover audit, merged) and **`localdominate/ejdhisidjs`** (active — has PRs #3–#6 merged: Lovable Cloud export, SEO-check CI, static prerendering, Netlify SPA fallback). All work in this audit and everything going forward should target `ejdhisidjs`. Recommend asking Markus whether `local` can be archived/deleted once `ejdhisidjs` is confirmed canonical, and whether the repo should be renamed to something less arbitrary (e.g. `localdominate-web`) before it becomes the permanent home of LocalDominate 2.0 — a rename is a repo-settings change, not a code change, but still worth his sign-off since external links (CI badges, etc.) could reference the old name.

## Findings

| # | Dependency | Where | Purpose | Classification |
|---|---|---|---|---|
| 1 | `@lovable.dev/cloud-auth-js` package | `package.json`, `src/integrations/lovable/index.ts` | Wraps Google/Apple OAuth sign-in for the **admin login screen** (`AdminLoginScreen.tsx`) — brokers the OAuth flow then calls `supabase.auth.setSession()`. This is a **live runtime dependency**, not dev tooling. | **REPLACE** — swap for Supabase's own native Google OAuth provider (`supabase.auth.signInWithOAuth`), which the app already has a Supabase client for. Low risk, well-documented Supabase feature. |
| 2 | `lovable-tagger` package + `componentTagger()` plugin | `package.json`, `vite.config.ts` | Dev-only Vite plugin (only runs when `mode === "development"`) that tags components for Lovable's visual editor. No production build or runtime impact. | **REMOVE** — safe to delete once we're no longer editing inside Lovable's UI. Confirm with Markus this UI is no longer in use before removing (Hard Rule #5 in CLAUDE.md — don't remove until the migration plan says so). |
| 3 | `previewAuthStorage.ts` | `src/integrations/supabase/previewAuthStorage.ts` | Only activates when the app is served from a Lovable preview domain (`lovableproject.com`, `gpt-eng.com`, etc.) — brokers auth storage with the Lovable editor over `postMessage`. On the production domain (`localdominate.org`) this code path never runs; it falls through to plain `localStorage`. | **SAFE / NO RUNTIME DEPENDENCY** on production today. **REMOVE** at final cutover (Phase 8) once Lovable preview surfaces are no longer used at all, since it becomes dead code. |
| 4 | `.lovable/` directory | Repo root | Lovable's own planning/content-architecture markdown files (internal linking map, content blueprint, past QA plans). Not code — no build or runtime dependency. | **SAFE** — can stay as historical reference, or be archived into `docs/` for tidiness. No urgency. |
| 5 | Lovable Cloud (Supabase-hosting layer) | Supabase project `minijgyozgjuhqgkmilj` | The production database and all 19 edge functions currently run through Lovable-managed Supabase. Already partially migrated: schema is live on the new independent Supabase project; **7,370 rows of data (including PII) are not yet migrated**. | **MIGRATE** — tracked separately in the Supabase migration workstream (owned by Re, pending the data export from Lovable's SQL editor). This is the single largest remaining Lovable dependency and blocks full cutover. |
| 6 | Edge functions (19 total, including `stripe-webhook`, `customer-onboarding`, `upload-customer-file`) | `supabase/functions/` | Currently deployed to the Lovable-managed Supabase project. **Important finding not previously flagged**: this is not just a marketing site — `stripe-webhook`, `customer-onboarding` and related functions mean **live payment processing** runs through the current €299 product. Any cutover must not interrupt live checkout. | **MIGRATE** — redeploy to the new independent Supabase project only after the data migration is verified, and only with a tested rollback path (Phase 8 / Phase 9 QA must include a live-payment smoke test). |
| 7 | Package manager / lockfiles (`bun.lock`, `bun.lockb`) | Repo root | `bun.lock` points at Lovable's private package registry and fails to install outside Lovable (per CLAUDE.md). `package-lock.json` is the npm-installable equivalent already in use. | **VERIFY, then REMOVE at cutover** — keep `bun.lock*` until Lovable sync is confirmed off (Hard Rule #5), then delete; npm/`package-lock.json` is already the working path for everyone outside Lovable. |

## Not Lovable dependencies (verified, for the record)

- Netlify hosting + `netlify.toml`, the GitHub Actions CI (`checks.yml`), and the static-prerender build (`build:static`, `scripts/prerender.mjs`) are already independent — built in PRs #3–#6, no Lovable involvement.
- Google Analytics (GA4 `G-BS2B48THVM`) and Consent Mode v2 are directly integrated in `index.html`, not via Lovable.
- Hreflang, canonical and SEO-head logic (`src/components/SEOHead.tsx`) is custom app code, not Lovable-generated.

## Is Lovable auto-sync still active?

Not determinable from the repo alone — this requires checking the Lovable project dashboard directly (Markus's/Re's account) or asking Markus whether the "Local Dominator Blueprint" Lovable project is still connected to this GitHub repo for two-way sync. **This must be confirmed before any large-scale rebuild branch work begins**, per Git Safety (brief section 4) — if sync is still live, a long-running feature branch risks Lovable pushing conflicting commits to `main` underneath it. Flagged as an open question in the Exit Plan.
