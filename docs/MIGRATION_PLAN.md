# Local Dominate – Migration Plan (Lovable → GitHub + Claude Code)

Goal: zero content loss, zero SEO loss. Every step is reversible until the DNS switch (step 4.2, itself reversible by re-pointing DNS), and the
production site keeps running on Lovable until the new stack has passed the SEO diff.

Difficulty scale: **Easy** (≤1 h, no risk) · **Medium** (half a day, low risk) · **Hard** (needs
third-party access or careful testing) · **Critical path** marks steps that block everything after.

## Phase 0 – Secure what exists (this week)

| Step | Action | Who | Difficulty |
|---|---|---|---|
| 0.1 ✅ | Download the Lovable codebase ZIP (done 2026-09-27) and audit it (this folder) | Claude | Done |
| 0.2 | **Push the unchanged snapshot + `docs/` + proposed `CLAUDE.md` to the private repo `localdominate/Local`** (branch `main` = exact Lovable code; docs on a branch `audit/takeover-2026-09-27` → PR) | Claude, after `learnkorean-spec` gets Write access to the repo | Easy · Critical path |
| 0.3 | Ask Markus to either (a) grant Re **workspace Git access** in Lovable, or (b) connect the project himself (Settings → Git → GitHub). Lovable will create a *new* repo; note its name. | Markus | Easy (needs Markus) · Critical path |
| 0.4 | Collect account ownership & logins in one place (password manager): IONOS (DNS), Google Workspace, GA4 property `G-BS2B48THVM`, Search Console, Resend, Stripe, Lovable workspace. | Re + Markus | Medium |
| 0.5 | Freeze feature work in Lovable, or agree that every Lovable edit is followed by a fresh ZIP/sync. Don't resume the paused "website section + menu" task in Lovable. | Markus | Easy |

## Phase 1 – Make the repo independently buildable (no production change)

| Step | Action | Difficulty |
|---|---|---|
| 1.1 | Reconcile Git histories: if Lovable's GitHub sync (0.3) creates its own repo, make that the upstream and bring `docs/` over; `localdominate/Local` either becomes that repo or is archived. One source of truth only. | Medium |
| 1.2 | Regenerate a clean `package-lock.json` with `npm install` from the public registry and commit it (bun.lock stays for Lovable until Lovable is dropped). Verify `npm ci && npm run build` from a clean clone. | Easy |
| 1.3 | Add CI (GitHub Actions): `npm ci`, `npm run build`, `tsc --noEmit`; lint as non-blocking report until the 100 errors are cleaned up. | Easy |
| 1.4 | Add the **SEO regression check** as a script: build → preview → render the 288 baseline URLs in `de-DE` and `en-US` → diff against `docs/baseline/rendered-*.json` (title, description, canonical, robots, hreflang, H1, schema types, internal links) + byte-compare static SEO files. Fail CI on any unapproved diff. | Medium |

## Phase 2 – Take ownership of the backend

| Step | Action | Difficulty |
|---|---|---|
| 2.1 | Ask Lovable support whether the Lovable Cloud project `minijgyozgjuhqgkmilj` can be transferred to a Supabase organisation owned by Local Dominate. If yes, transfer (keeps URL, keys, data, functions). | Hard (depends on Lovable) |
| 2.2 | If no transfer: create a new Supabase project owned by Local Dominate; first add a migration that creates `internal_linking_audits` + view `latest_internal_linking_audits` (dump their definitions from the current DB), because `20260520145005` alters that view and fails otherwise; then apply `supabase/migrations` + drizzle migration; declare `verify_jwt` for the 3 undeclared functions; export & import the 109 analytics rows and 1 admin user (optional – low value); deploy the 19 edge functions with the Supabase CLI. | Medium |
| 2.3 | Re-issue secrets in their own dashboards and set them on the new project: Resend API key, Stripe webhook secret (new webhook endpoint URL), optional Stripe secret; drop unused `INTERNAL_API_SECRET`. | Medium |
| 2.4 | Recreate the 7 cron jobs with `pg_cron` + `pg_net` in a committed migration (decide per job: keep / drop; `ping-google-sitemap` can be dropped – endpoint retired). | Medium |
| 2.5 | Replace Lovable AI Gateway in `generate-ai-audit-report` with a direct model API key. Replace Lovable Google OAuth broker in `AdminLoginScreen` with Supabase native Google OAuth (or email/password only). | Medium |
| 2.6 | Switch `.env` to the new project in a preview deployment only (never point a preview at `minijgyozgjuhqgkmilj`: `track-analytics` and the forms would write test data into production). Update the Stripe webhook endpoint URL in the Stripe dashboard; test every form end-to-end (leads, partner, campsite check, onboarding upload, Stripe webhook in test mode). | Medium |
| 2.7 | Fix the critical RLS finding (20 permissive tables) as part of the new project's migrations – **after approval**, since it is a behaviour change. | Medium |

## Phase 3 – New hosting with pre-rendering (the SEO-critical part)

| Step | Action | Difficulty |
|---|---|---|
| 3.1 | Choose the host (e.g. Vercel, Netlify, Cloudflare Pages). Requirement list: SPA fallback with HTTP 200 for unknown extension-less paths (today's behaviour), 404 for missing files, serve `public/` verbatim, custom domain + www, HTTPS. | Easy |
| 3.2 | **Replace Lovable's crawler pre-rendering.** Preferred: build-time pre-rendering of all 187 indexable routes (e.g. a Vite SSG/prerender plugin or a Playwright snapshot step) so every URL ships real HTML with its own title, meta, canonical and JSON-LD. Must reproduce the **en-US** render for crawlers if we want Google to keep seeing what it sees today – decide DE vs EN deliberately (see SEO_BASELINE §3.3). | **Hard** · Critical path |
| 3.3 | Decide about Lovable's "Markdown for AI assistants" feature: the repo already has `/blog-md/*.md` + `llms.txt`; confirm with the owner whether per-page Markdown serving by user-agent is still wanted. | Medium |
| 3.4 | Deploy to a staging URL; run the SEO regression check (1.4) against staging; manually test forms, cookie banner/Consent Mode, GA4 real-time hits, language switch DE/EN/AR, mobile layout. | Medium |
| 3.5 | Verify with a Googlebot user agent (no JS) that staging HTML contains per-page title/canonical/JSON-LD for a sample of blog, landing and legal URLs. | Easy |

## Phase 4 – Cut-over

| Step | Action | Difficulty |
|---|---|---|
| 4.1 | Lower DNS TTL at IONOS 24 h before. | Easy |
| 4.2 | Point `localdominate.org` and `www` to the new host; keep the Lovable deployment untouched for rollback (re-point DNS back = rollback). | Easy (needs IONOS login) |
| 4.3 | Post-switch checks: SEO regression check against production, Search Console URL inspection for 10 key URLs, sitemap re-submit, GA4 real-time, form tests, Stripe webhook delivery. | Medium |
| 4.4 | Monitor Search Console coverage and rankings for 4 weeks before removing the custom domain from Lovable. | Easy |

## Phase 5 – Clean-up (only after approval, one PR per item)

Fix the recorded defects (3 blank articles, 66 lexikon URLs, 11 dead sitemap URLs, 2 bad canonicals,
31 broken internal link targets, missing OG images, `/campsites` + 20 others missing from sitemaps,
soft-404 status), lint errors, dependency vulnerabilities, remove `lovable-tagger`,
`@lovable.dev/cloud-auth-js`, `previewAuthStorage.ts`, `bun.lock*`.

## Order of work and effort

1. 0.2 push snapshot – Easy – **next action**
2. 0.3 Lovable Git access/sync – Easy (Markus)
3. 0.4 account inventory – Medium
4. 1.1–1.4 buildable repo + CI + SEO diff – Easy/Medium
5. 2.1 ask Lovable about transfer → 2.2–2.7 backend – Medium/Hard
6. 3.1–3.5 hosting + pre-render – Hard
7. 4.1–4.4 DNS cut-over – Easy, low risk thanks to rollback
8. Phase 5 fixes – Easy each, approval per item

## Exact next action

Push the untouched Lovable snapshot to `localdominate/Local` (`main`), with `docs/` and the proposed
`CLAUDE.md` in a separate branch and pull request for review. Blocked only on the repo granting
`learnkorean-spec` write access (Settings → Collaborators).
