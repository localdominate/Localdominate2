# Lovable Exit Plan

Date: 2026-09-29
Companion to `docs/LOVABLE_DEPENDENCY_AUDIT.md`. Defines how each dependency gets closed out and what "exit complete" means, per the LocalDominate 2.0 master brief §71.

## Status update — 2026-09-29

Done (commit `1683335`, branch `rebrand/localdominate-2.0-foundation`): admin OAuth swapped to native Supabase auth, `lovable-tagger` removed, `previewAuthStorage.ts` deleted. Build and typecheck verified clean.

**New input from Re:** the Stripe checkout flow is reportedly **not currently working**. This wasn't independently verifiable from the code (no feature flag disables it — `stripe.ts` still has live Payment Link URLs and price IDs hard-coded, so it reads as "should be live" from the repo alone). Two implications:
1. It lowers the immediate risk of the edge-function/data-migration cutover — if checkout is already broken, there's less to protect against interrupting.
2. It does **not** remove the need to actually diagnose and fix it as part of "going out" cleanly — a broken checkout on the current live site is itself a problem worth root-causing (could be a Lovable-side issue, a Stripe webhook misconfiguration, or something else entirely). Recommend a quick diagnostic pass (check Stripe dashboard for recent webhook delivery failures, check Supabase edge function logs for `stripe-webhook`) before assuming it's safe to deprioritize.

**2026-09-29, later:** `bun.lock` / `bun.lockb` removed and `.lovable/` moved to `docs/archive/lovable-planning/` — both were pure repo cruft (Lovable's own build path and its internal planning notes), zero runtime dependency, `npm install` + `npm run build` already fully replace what `bun.lock` provided. Added `bun.lock`/`bun.lockb` to `.gitignore` so they don't silently come back if the Lovable editor is still touching this repo (see open question below).

Remaining gated items — genuinely still needed, not yet safe to touch — are unchanged: edge-function redeployment and the Supabase data migration (7,370 rows + 19 edge functions incl. `stripe-webhook`, still living in Lovable Cloud project `minijgyozgjuhqgkmilj`). Still waiting on the Lovable auto-sync confirmation and the data export before those can move.

## Open question that gates everything else

**Is Lovable auto-sync still active on this GitHub repo?** Cannot be confirmed from the repository alone. Before any substantial rebuild work starts on `rebrand/localdominate-2.0-foundation`, Markus or Re needs to check the Lovable project dashboard and confirm one of:
- (a) sync is already off → safe to build freely on a long-lived branch, or
- (b) sync is still on → we either get it turned off first, or we treat this branch as high-risk and rebase frequently / merge to `main` in small increments to minimize conflict surface with anything Lovable might push.

## Exit steps by dependency

| Dependency | Replacement / action | Risk | Verification | Cutover condition |
|---|---|---|---|---|
| `@lovable.dev/cloud-auth-js` (admin OAuth) | Migrate `AdminLoginScreen.tsx` to Supabase's native `signInWithOAuth('google')`, same provider, no UX change for the admin user. | Low — one file, well-trodden Supabase API. | Manual login test against the (eventually) independent Supabase project. | Can be done any time; not blocked on data migration. |
| `lovable-tagger` / `componentTagger()` | Remove package + plugin line from `vite.config.ts`. | Very low — dev-only. | `npm run build` and `npm run dev` both succeed without it. | After confirming the Lovable visual editor is no longer used for this project. |
| `previewAuthStorage.ts` | Delete file and its one import once nothing references Lovable preview domains. | Very low — already inert on production. | Grep for remaining imports before deleting. | Phase 8 (final cutover), not before. |
| `.lovable/` directory | ~~Leave in place or move to `docs/archive/lovable-planning/`~~ **Done 2026-09-29** — moved to `docs/archive/lovable-planning/`. | None. | N/A | Done. |
| `bun.lock` / `bun.lockb` | ~~Delete once Lovable sync is confirmed off~~ **Done 2026-09-29** — removed, added to `.gitignore`. | Low. | `npm install` + `npm run build` verified working without it. | Done. |
| Supabase data (7,370 rows, PII) | Re exports read-only from Lovable's SQL editor (in progress, tracked separately) → import into the independent Supabase project. | **High** — PII, largest open blocker, also the source-of-truth for `customers`, `leads`, `partner_applications`, etc. | Row counts match source per table; spot-check a sample of records; RLS policies re-verified (already confirmed matching: 26 tables/views, 63 policies, 2 buckets). | Must be verified complete before any database-dependent feature (forms, admin panels, article CMS if dynamic) goes live against it. |
| 19 edge functions (incl. `stripe-webhook`, `customer-onboarding`) | Redeploy each to the independent Supabase project; update any hard-coded project refs/URLs inside them. | **High** — `stripe-webhook` handles live payments; an interruption here is a revenue/customer-trust issue, not just a technical one. | Test each function against the new project in a non-production capacity first; for `stripe-webhook` specifically, verify against Stripe's test mode before pointing production webhooks at the new endpoint. | Only after data migration is verified; cut over the webhook endpoint in Stripe's dashboard as the very last step, with a rollback plan (revert the webhook URL) ready. |
| Netlify environment variables | Point `VITE_SUPABASE_*` env vars at the new independent project. | Medium — breaks the live site if done before the new project has the data. | Staging/preview deploy against the new project first. | After data + edge functions are verified on the new project. |
| Domain DNS | Point `localdominate.org` fully off any Lovable-hosted infrastructure if it isn't already (current hosting is reportedly already Netlify — needs a one-line confirmation from Markus that DNS has no remaining Lovable dependency). | Medium. | `dig`/`whois` check + Markus confirmation. | Requires Markus's explicit approval (CLAUDE.md — domain changes need owner sign-off). |

## Cutover verification checklist (Phase 8/9, tracked in a future `LOVABLE_EXIT_VERIFICATION.md`)

Per the brief's own definition of "exit complete" (§71), before declaring done:
- [ ] Repo clones and installs independently (`npm install`, no `bun.lock` needed)
- [ ] `npm run build` and `npm run build:static` succeed independently
- [ ] Environment configurable independently (documented `.env.example`, no Lovable-issued secrets)
- [ ] Production deploys from GitHub → Netlify without any Lovable step
- [ ] Independent Supabase project serves all data, auth, storage, edge functions
- [ ] All 19 edge functions verified working on the new project, including a live Stripe test
- [ ] Articles (230) render correctly, URLs/metadata unchanged, SEO regression check passes
- [ ] Language switching (DE/EN) still works end to end
- [ ] Forms submit successfully against the new backend
- [ ] Analytics events fire correctly, no PII leaked to analytics
- [ ] Domain fully independent of Lovable (Markus-confirmed)
- [ ] Disabling/removing remaining Lovable pieces does not break production
- [ ] Future development (a new PR) requires zero Lovable action

This checklist is intentionally not executed yet — data migration and edge-function redeployment (the two highest-risk items) are still pending.
