# Lovable Final Dependency Graph

Date: 2026-09-30. Infrastructure-migration deliverable (Lovable Exit), separate track from the
B0.5 design freeze — **no B1 work, no Home redesign, no V4 experience work in this document or
this branch.** Built from a fresh, complete, case-insensitive search of the entire repository
(`grep -ril "lovable"`, all files, excluding `node_modules`/`.git`/`dist`) plus inspection of
infrastructure that doesn't literally say "Lovable" (DNS, hosting, the Supabase project itself).

Status vocabulary used below, exactly as specified: **ACTIVE**, **REPLACEMENT READY**,
**MIGRATED**, **VERIFIED INDEPENDENT**, **SAFE TO REMOVE**, **REMOVED**.

---

## 1. Hosting & DNS

| Field | Value |
|---|---|
| Dependency | Lovable hosting (serving `localdominate.org` + `www`, with crawler pre-rendering and AI-markdown serving) |
| Location | DNS (IONOS) + Lovable's own infrastructure, not in this repo |
| Purpose | Served production, including pre-rendered HTML for crawlers |
| Production criticality | Was CRITICAL |
| Replacement | Netlify (project `strong-cascaron-e33b5a`) with build-time prerendering (`scripts/prerender.mjs` + `npm run build:static`) |
| Migration requirement | DNS repoint (done), SSL issuance (in progress at last check), Netlify's Pretty-URLs redirect bug fixed (done) |
| Verification method | Direct `fetch()` checks already run this session: `/`, `/campsites`, `/campsites/`, `/blog/local-seo-anwaelte-kanzleien` all return `200`, no redirects. Netlify's domain panel showed "DNS verification was successful". SSL certificate issuance was **not independently re-confirmed as complete** at time of writing (Netlify said "Waiting on DNS propagation" → visitor clicked "Verify DNS configuration" → succeeded; certificate provisioning was still triggering, not confirmed issued). |
| Rollback strategy | DNS can be repointed back to Lovable's `185.158.133.1` (A) at IONOS if Netlify serving breaks; Lovable hosting itself has not been disconnected, so it remains a live fallback target as long as the Lovable project itself stays active. |
| **Current status** | **VERIFIED INDEPENDENT for hosting/DNS.** SSL should be re-checked (5-minute manual check: Netlify → Domain management → HTTPS section → confirm "Certificate issued", not just "DNS verification successful") before calling this fully closed. |

## 2. Git / Source Control Write Access

| Field | Value |
|---|---|
| Dependency | Lovable's GitHub App / Git integration — potential write access to this repository |
| Location | Not in the repo (GitHub App installation + Lovable's own project settings, both external to what this session can query) |
| Purpose | Historically let Lovable's editor push commits directly (evidenced by `gpt-engineer-app[bot]` / `lovable-dev[bot]` commit authors up to 2026-09-27) |
| Production criticality | **CRITICAL if still active** — an uncoordinated push could overwrite GitHub-side work or reintroduce Lovable artefacts |
| Replacement | GitHub as sole canonical source, Lovable integration explicitly disconnected |
| Migration requirement | Manual check + manual disconnect (see §6 for exact steps) |
| Verification method | No `gpt-engineer-app[bot]`/`lovable-dev[bot]` commit since 2026-09-27 (suggestive, not proof) — see `LOVABLE_SYNC_VERIFICATION.md` for the full reasoning and the exact manual steps to close this |
| Rollback strategy | N/A (this is a permission to revoke, not a system to roll back) |
| **Current status** | **ACTIVE (unverified as disabled)** — treat as the single highest-priority open item in this entire graph. This is the one item this session genuinely cannot resolve without Markus or Re checking two dashboards. |

## 3. Backend — Database, Auth, Storage

| Field | Value |
|---|---|
| Dependency | Lovable Cloud = Supabase project `minijgyozgjuhqgkmilj` (Postgres, Auth, Storage) |
| Location | `.env` (`VITE_SUPABASE_URL`/`VITE_SUPABASE_PUBLISHABLE_KEY`), `supabase/config.toml`, `src/integrations/supabase/client.ts` |
| Purpose | All production data: forms, leads, customers, questionnaire responses, admin auth |
| Production criticality | CRITICAL — ~7,370 rows including PII (`customers` 13, `leads` 6, `partner_applications` 2, `questionnaire_responses` 100, per `TAKEOVER_AUDIT.md`) |
| Replacement | An independent Supabase project, fully owned outside Lovable Cloud |
| Migration requirement | Schema replicated to the new project (schema export already exists at `supabase/export/schema.sql` per this repo — confirms a **BACKUP** step already happened 2026-09-28), then a verified, row-count-matched data migration, then `VITE_SUPABASE_*` env vars repointed at the new project on Netlify |
| Verification method | Per-table row-count match between old and new project; RLS policy parity check; a real read/write smoke test against the new project before any cutover |
| Rollback strategy | Keep `VITE_SUPABASE_*` pointed at the old (Lovable Cloud) project until the new project is fully verified in parallel — do not repoint until §2 (Discover→...→Parallel Verify) has actually been executed, not just planned |
| **Current status** | **ACTIVE.** Schema is backed up (`supabase/export/schema.sql`, `cron.sql`, `README.md` — all present in this repo, confirming a real backup exists). **No independent project has been created or populated yet** — this is squarely still in the DISCOVER/DOCUMENT/BACKUP stage of the required sequence, not yet at REPLICATE. |

## 4. Edge Functions (19)

| Field | Value |
|---|---|
| Dependency | 19 Supabase Edge Functions, currently deployed under Lovable Cloud's Supabase project |
| Location | `supabase/functions/*` (Deno source in this repo — the code itself is already independent; the *deployment target* is not) |
| Purpose | Forms (leads, partner, campsite check, onboarding), analytics tracking, scheduled content jobs, `stripe-webhook`, AI audit report generation |
| Production criticality | **CRITICAL** — includes live payment handling (`stripe-webhook`) and all form submission paths |
| Replacement | Redeploy all 19 to the new independent Supabase project |
| Migration requirement | Each function redeployed and its secrets re-provisioned on the new project; `verify_jwt` settings re-declared explicitly for the 3 functions currently relying on Supabase's default (`generate-ai-audit-report`, `send-campsite-website-check`, `send-partner-notification` — flagged in `DEPENDENCIES.md` §3) |
| Verification method | Per-function smoke test against the new project; `stripe-webhook` specifically needs a Stripe **test-mode** verification before any production webhook URL is repointed |
| Rollback strategy | Keep the old (Lovable Cloud) functions live and the Stripe webhook pointed at them until the new deployment is verified; switching the webhook URL in Stripe's dashboard should be the **very last** step of this specific dependency's migration, with the old URL kept ready to restore |
| **Current status** | **ACTIVE.** Source code is in-repo and portable (a real asset); none have been redeployed to an independent project yet. |

## 5. Payments (Stripe)

| Field | Value |
|---|---|
| Dependency | Stripe Payment Links (`src/lib/stripe.ts`, hard-coded URLs/price IDs) + `stripe-webhook` edge function |
| Location | `src/lib/stripe.ts`, `src/pages/DIYToolkit.tsx`, `supabase/functions/stripe-webhook/` |
| Purpose | Live product checkout |
| Production criticality | **CRITICAL — real money.** Re noted the checkout flow is reportedly not currently working in production (per `LOVABLE_EXIT_PLAN.md`'s 2026-09-29 status note) — this needs its own diagnostic pass (Stripe dashboard webhook-delivery logs, Supabase edge-function logs) independent of the Lovable-exit work, since a broken checkout is a problem regardless of hosting. |
| Replacement | Same Stripe account (independent of Lovable already — Stripe is not a Lovable product), `stripe-webhook` redeployed per §4 |
| Migration requirement | Diagnose the reported checkout failure first (separate from migration); then treat the webhook cutover as the single highest-care step in the entire migration, per the rollback strategy below |
| Verification method | A real test-mode transaction against the new project before flipping the live webhook URL |
| Rollback strategy | Old webhook URL kept live and ready to restore in Stripe's dashboard for a defined monitoring window after cutover |
| **Current status** | **ACTIVE**, and separately **possibly already broken** (unverified from code alone) — flag to Markus/Re as needing its own investigation regardless of migration timing. |

## 6. Admin Authentication

| Field | Value |
|---|---|
| Dependency | `@lovable.dev/cloud-auth-js` + `src/integrations/lovable/index.ts` (auto-generated, "do not modify") — brokers Google OAuth for the one admin user |
| Location | `src/components/admin/AdminLoginScreen.tsx`, `src/integrations/lovable/index.ts` |
| Purpose | "Sign in with Google" for the admin dashboard only (email/password admin login does not depend on this) |
| Production criticality | LOW (single internal user, one login method of two) |
| Replacement | Supabase's own native `signInWithOAuth('google')` — **already implemented** on the unmerged `rebrand/localdominate-2.0-foundation` branch (commit `1683335`, per that branch's `LOVABLE_EXIT_PLAN.md`), not yet on `main` |
| Migration requirement | Merge/port that specific change to `main` once the branch's own Lovable-sync gate is resolved (or cherry-pick just this file change independently, since it's low-risk and self-contained) |
| Verification method | Manual login test against the eventual independent Supabase project |
| Rollback strategy | Trivial — single file, single import swap |
| **Current status** | **REPLACEMENT READY** (built and presumably tested on the other branch, not yet deployed to `main`/production). |

## 7. AI Gateway

| Field | Value |
|---|---|
| Dependency | `LOVABLE_API_KEY` + `https://ai.gateway.lovable.dev/v1/chat/completions` |
| Location | `supabase/functions/generate-ai-audit-report/index.ts` |
| Purpose | Generates the AI-visibility audit report shown to a lead-gen flow visitor |
| Production criticality | MEDIUM — one feature, not core commerce/forms |
| Replacement | A direct model API key (e.g. Anthropic, OpenAI, or Google directly) called from the same edge function, same JSON contract |
| Migration requirement | Pick a provider, provision a key as a Supabase secret on the new project, swap the fetch URL + auth header, keep the response-shape contract identical so the frontend needs no change |
| Verification method | Compare a sample audit-report output before/after the swap for reasonableness |
| Rollback strategy | Keep `LOVABLE_API_KEY` path available (feature-flaggable) until the replacement is verified in production |
| **Current status** | **ACTIVE.** No replacement key or code path exists yet. |

## 8. Cron Jobs (7)

| Field | Value |
|---|---|
| Dependency | 7 scheduled jobs configured inside Lovable Cloud (not in this repo as config, only as inferred function-name mapping) |
| Location | Lovable Cloud dashboard only; `supabase/export/cron.sql` in this repo is the **exported definitions** (confirms a backup already exists) |
| Purpose | `auto-optimizer-hourly`, `daily-sitemap-update`, `ping-google-sitemap-daily` (already inert — Google retired this endpoint in 2023, per `TAKEOVER_AUDIT.md` §8), `publish-scheduled-posts-job` (every minute), `send-daily-analytics-report`, `weekly-content-freshness-check`, `weekly-seo-monitoring` |
| Production criticality | LOW-MEDIUM — mostly reporting/optimization, not customer-facing; `publish-scheduled-posts-job` matters only if `scheduled_posts` has pending rows to publish |
| Replacement | Recreate as `pg_cron` jobs (or equivalent) on the new independent Supabase project, using `supabase/export/cron.sql` as the source definitions |
| Migration requirement | Recreate each job pointed at the new project's functions; explicitly retire `ping-google-sitemap-daily` rather than recreate it (dead endpoint) |
| Verification method | Confirm each job fires once post-migration (check function invocation logs) |
| Rollback strategy | Low-stakes; jobs can be paused/resumed independently of everything else |
| **Current status** | **REPLACEMENT READY at the definition level** (exported to `cron.sql`), **not yet recreated** on any independent project. |

## 9. Dev/Build Tooling (already resolved or in progress)

| Field | Value |
|---|---|
| Dependency | `bun.lock`/`bun.lockb` (Lovable's private npm cache), `lovable-tagger` (dev-only Vite plugin), `previewAuthStorage.ts` (inert outside Lovable preview iframes), `LOVABLE_DB_MIGRATION_URL` (drizzle-kit) |
| Location | Repo root; `vite.config.ts`; `src/integrations/supabase/previewAuthStorage.ts`; `drizzle.config.ts` |
| Purpose | Build-time/dev-time only — none run in production |
| Production criticality | NONE |
| Replacement | `npm install`/`package-lock.json` already fully replaces `bun.lock`'s role (verified working, `TAKEOVER_AUDIT.md` §7) |
| Migration requirement | Remove the four items — **already done, but only on the unmerged `rebrand/localdominate-2.0-foundation` branch**, not on `main` |
| Verification method | `npm install` + `npm run build` succeed without them (already verified on that branch) |
| Rollback strategy | N/A — trivial, no production impact either way |
| **Current status on `main`**: **ACTIVE** (still present). **Current status on the rebrand branch**: **REMOVED**. |

## 10. Documentation-only mentions (no runtime dependency)

`netlify.toml` (one comment referencing "Lovable's soft 404 behaviour" as a compatibility note),
`scripts/prerender.mjs` (comments explaining *why* prerendering exists, contrasting with
Lovable's own hosting behaviour), `README.md`, `CLAUDE.md`, and all of `docs/*.md` — these
mention Lovable descriptively/historically and carry **no runtime or build dependency**.

**Current status: SAFE TO REMOVE the wording if desired for cleanliness, but removing it has
zero migration value** — these are not dependencies, they're documentation. Not prioritized.

---

## Summary table

| # | Dependency | Status |
|---|---|---|
| 1 | Hosting/DNS | **VERIFIED INDEPENDENT** (SSL issuance to be reconfirmed) |
| 2 | Git write access | **ACTIVE (unverified as disabled)** — top-priority open item |
| 3 | Backend (DB/Auth/Storage) | **ACTIVE** (backed up, not yet replicated) |
| 4 | 19 Edge Functions | **ACTIVE** (code portable, not redeployed) |
| 5 | Stripe/payments | **ACTIVE** (+ possibly already broken, separate issue) |
| 6 | Admin OAuth | **REPLACEMENT READY** (built, unmerged) |
| 7 | AI Gateway | **ACTIVE** (no replacement built yet) |
| 8 | Cron jobs | **REPLACEMENT READY at definition level** (exported, not recreated) |
| 9 | Dev/build cruft | **ACTIVE on `main`** / **REMOVED on unmerged branch** |
| 10 | Doc mentions | N/A — not a dependency |

**Nothing in this graph may be claimed as "zero Lovable dependency" until every row reads
VERIFIED INDEPENDENT or REMOVED.** Currently: 1 of 9 real dependencies (hosting) is there; the
rest range from ACTIVE to REPLACEMENT READY.
