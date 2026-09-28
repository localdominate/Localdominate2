# Local Dominate – Technical Takeover Audit

| | |
|---|---|
| Date | 2026-09-27 |
| Scope | Read-only audit before moving development from Lovable to Claude Code + GitHub |
| Code source | Lovable → Settings → Git → **Download codebase** (ZIP, 911 files, 22 MB) of project *Local Dominator Blueprint* (`5ee1f856-cb97-4dec-8883-fec126ed4ac6`) |
| Project owner in Lovable | Markus Wimböck (workspace "Markus's Lovable"); auditor has editor access only |
| Production | https://localdominate.org (+ `www`), served by Lovable hosting |
| Changes made to the app | **None.** No code, content, URL, SEO, DB or Lovable setting was changed. |

Companion documents: `ARCHITECTURE.md`, `CONTENT_ARCHITECTURE.md`, `DEPENDENCIES.md`,
`SEO_BASELINE.md`, `MIGRATION_PLAN.md`, `docs/baseline/*` (raw evidence), and the proposed
`CLAUDE.md` at repo root.

## 1. Executive summary

* The site is a **Vite + React 18 SPA** (211 unique routes, 164 blog URLs) whose entire content lives in the
  repository as JSX and TypeScript data files. **No article, page copy or site image is stored only in
  Lovable or in the database.** With this ZIP in Git, the content is safe.
* What Lovable really provides today is **infrastructure, not content**:
  1. hosting of `localdominate.org`, including **crawler pre-rendering** and **Markdown for AI agents**
     (SEO-critical, not in the repo);
  2. **Lovable Cloud** = the Supabase project `minijgyozgjuhqgkmilj` (DB, auth, 19 edge functions,
     7 cron jobs, secrets) which is *not* in any Supabase account we control;
  3. the **AI gateway** used by one edge function and Google sign-in for the admin.
* **Correction 2026-09-28:** the database is **not** empty. Exact counts (the Lovable dashboard shows stale
  estimates): 7,370 rows, incl. `customers` 13, `leads` 6, `partner_applications` 2,
  `questionnaire_responses` 100 (personal data), plus analytics/A-B tables. 1 auth user; storage buckets empty.
  Full schema export in `supabase/export/`; the data was backed up privately (not in Git).
* The project builds outside Lovable (`npm install && npm run build` ✅, `tsc` ✅) but not with its own
  lockfiles; lint fails (100 errors); there are no tests.
* **The old GitHub repo `localdominate/localdominate` is a different application** ("Lead Command
  Center" CRM, its own Supabase project `usvscmfdizmjjlecdmar`, 3 pages). There is nothing to merge
  between it and this website.
* Production already has SEO defects (blank articles, 66 dead lexikon URLs in a sitemap, canonicals to
  404s, soft-404s). They are documented in SEO_BASELINE §4 and must be preserved as-is until approved.

## 2. Repository inventory (Step 1)

| # | Item | Finding |
|---|---|---|
| 1 | Framework / version | React 18.3.1, TypeScript 5.8, react-router-dom 6.30 |
| 2 | Build system | Vite 5.4 + SWC; `npm run build` → `dist/` (18 MB); manual vendor chunks |
| 3 | Routing | Client-side `BrowserRouter`, flat table in `src/App.tsx`; lazy pages; `*` → NotFound |
| 4 | Page structure | 45 pages + 160 blog components + 2 admin pages |
| 5 | Components | 243 component files: `blog/` 105, root 40, `ui/` 29, `restaurant/` 19, `admin/` 18, `niche/` 15, `onboarding/` 7, `audit/` 4, `ai/` 3, `solution/` 3 |
| 6 | Styling | Tailwind 3 + shadcn CSS variables (`src/index.css`), 4 page CSS files, Google Fonts (Inter, Cormorant Garamond, Lato) |
| 7 | Assets | `src/assets` 68 files (5 MB, bundled); `public/images` 56 files (4 MB, stable URLs); OG images, favicons |
| 8 | Blog/content | JSX components + `src/data/blogArticles.ts` registry + `public/blog-md/*.md` mirrors |
| 9 | Database | Postgres, 24 tables + 2 views; 28 Supabase migrations (create 23 tables) + 1 drizzle migration; schema drift: `internal_linking_audits` + view `latest_internal_linking_audits` not created by any migration, so a fresh replay fails at `20260520145005` |
| 10 | Supabase usage | supabase-js client (`src/integrations/supabase/client.ts`), analytics/A-B tracking, lead forms, admin dashboards, onboarding |
| 11 | Authentication | Supabase Auth for admin only (email/password + Google via Lovable OAuth broker); roles in `user_roles`; no public user accounts |
| 12 | APIs | 19 Supabase Edge Functions; Stripe Payment Links; Resend; IndexNow; Lovable AI Gateway |
| 13 | Serverless functions | `supabase/functions/*` (Deno); 16 declared `verify_jwt = false`, 3 undeclared (default `true` on redeploy) |
| 14 | Env variables | `VITE_SUPABASE_URL/PUBLISHABLE_KEY/PROJECT_ID` (front end, committed); edge secrets `RESEND_API_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY`, `INTERNAL_API_SECRET`, `LOVABLE_API_KEY`; `LOVABLE_DB_MIGRATION_URL` |
| 15 | Analytics / tracking | GA4 `G-BS2B48THVM` + Consent Mode v2; custom session/event/heatmap/CWV/A-B tracking into Supabase; Lovable Analytics panel |
| 16 | SEO implementation | `SEOHead.tsx` (runtime head mutation), static fallback head in `index.html`, host-side pre-render by Lovable |
| 17 | schema.org | JSON-LD in `index.html` (WebSite, Organization) + per-page JSON-LD; 48 `@type`s |
| 18 | Sitemaps | 6 static XML files in `public/`, hand-maintained; `generate-sitemap` function is not what is served |
| 19 | Robots | Static `public/robots.txt` (AI crawlers allowed, admin/funnel disallowed, 6 sitemaps) |
| 20 | Deployment | Lovable "Publish" only; no CI, no host config in repo; DNS at IONOS, A → 185.158.133.1 (Lovable) |

Details: ARCHITECTURE.md.

## 3. Content audit (Step 2) – headline

All 164 blog URLs are inventoried in CONTENT_ARCHITECTURE.md §7 and
`docs/baseline/content-inventory.csv` (title DE/EN, slug, URL, component file, registry entry,
Markdown mirror, author, published/updated dates, meta title/description, canonical, schema types,
images, internal links, sitemap membership, word count, defect flags). No article was modified.

## 4. Lovable dependency audit (Step 3) – headline

| Class | Items |
|---|---|
| **A – runtime** | Lovable hosting + custom domain; crawler pre-rendering; AI-agent Markdown serving; Lovable Cloud (Supabase `minijgyozgjuhqgkmilj`: DB, Auth, Storage, Edge Functions, cron, secrets); Lovable AI Gateway (`generate-ai-audit-report`); `@lovable.dev/cloud-auth-js` (admin Google sign-in) |
| **B – dev/build** | `bun.lock` pinned to Lovable's private npm cache (403 outside); stale `package-lock.json`; `lovable-tagger` (dev mode); `LOVABLE_DB_MIGRATION_URL` for drizzle |
| **C – removable later** | `previewAuthStorage.ts` (inactive off Lovable preview), `lovable-tagger`, Lovable README, `.lovable/` notes, Lovable dashboard panels |
| **D – investigate** | Cron job definitions & auth headers; whether Lovable Cloud can hand over / export the Supabase project; Lovable "Emails" panel config; who owns the Resend, Stripe, GA4, Search Console and IONOS accounts |

Full table and service graph: DEPENDENCIES.md.

## 5. Migration risk analysis (Step 5)

"If Lovable access disappeared tomorrow":

| # | Asset | What would happen | Rating |
|---|---|---|---|
| R1 | **Production hosting** of localdominate.org | Site goes offline or stops updating; DNS points at Lovable's IP | **CRITICAL** |
| R2 | **Crawler pre-rendering** | Any replacement static host without pre-render/SSG would show crawlers one generic title for 187 indexable URLs → ranking loss | **CRITICAL** |
| R3 | **Source code** | Was only in Lovable until this ZIP. Now mitigated **once pushed to GitHub**; until then it exists only as a ZIP on one laptop | **CRITICAL → LOW after push** |
| R4 | **Supabase ownership** (`minijgyozgjuhqgkmilj` under Lovable Cloud) | Lose DB, auth user, functions, cron, secrets. Holds 7,370 rows incl. 13 customers, 6 leads, 2 partner applications, 100 questionnaire answers (backed up 2026-09-28, see `supabase/export/README.md`); all forms (leads, partner, campsite check, onboarding) stop working | **HIGH** |
| R5 | **Secrets** (Resend, Stripe webhook, Stripe secret, internal) | Cannot be exported from Lovable; must be re-issued from provider dashboards | **HIGH** |
| R6 | **Form submissions** | Stored in Supabase + emailed via Resend; existing submissions are backed up (2026-09-28), future submissions depend on R4/R5 | **HIGH** |
| R7 | **Cron jobs** (7) | Definitions not in repo; silently stop. Most are reporting/optimisation (non-critical); `publish-scheduled-posts` has nothing to publish | **MEDIUM** |
| R8 | **Domains / DNS** | Registrar/DNS at IONOS (independent). Risk is only that the A record points at Lovable; account ownership unknown | **MEDIUM** (HIGH if IONOS login is not available) |
| R9 | **Analytics** | GA4 is independent (keep the tag). Custom Supabase analytics (tiny) and Lovable Analytics panel history would be lost | **LOW** |
| R10 | **Authentication** | 1 admin user; Google sign-in via Lovable broker would break; email/password needs the Supabase project | **LOW** |
| R11 | **Storage buckets** | Both empty | **LOW** |
| R12 | **Blog content / images / URLs** | All in repo | **LOW** (after push) |
| R13 | **Search Console / IndexNow verification** | File-based and DNS-based, both in repo/DNS | **LOW** |
| R14 | **AI audit report** (Lovable AI Gateway) | Feature stops; needs own model key | **MEDIUM** |
| R15 | **Git sync blocked** | Only workspace owner can connect Lovable to GitHub; until then every Lovable edit by Markus diverges from GitHub | **HIGH** (process risk) |

## 6. SEO preservation (Step 6) – headline

187 indexable URLs, frozen in SEO_BASELINE.md with DE and EN renders. Pre-existing defects found in
production (not introduced by migration):

* `www` → apex redirect and trailing-slash behaviour (served as-is, canonical slash-less) are part of the baseline.
* 3 blank article pages (`/blog/local-seo-apotheken`, `/blog/local-seo-tattoo-studios`,
  `/blog/local-seo-yoga-studios`).
* 66 `/seo-lexikon/<term>` sitemap URLs and 11 retired `/blog/*` slugs in `sitemap-images.xml` render 404.
* 2 canonicals point to non-existent URLs.
* 31 internal-link targets have no route. Top offenders:

| Missing target | Linked from (pages) |
|---|---|
| `/blog/google-business-profil-optimieren` | 23 |
| `/blog/google-bewertungen-strategie` | 19 |
| `/decision` | 14 |
| `/blog/local-seo-checkliste` | 14 |
| `/blog/nap-konsistenz` | 14 |
| `/blog/lokale-keyword-recherche-template` | 11 |
| `/blog/technisches-local-seo` | 7 |
| `/blog/local-seo-monthly-maintenance` | 5 |
| `/blog/local-seo-roadmap` | 4 |
| `/blog/90-tage-local-seo-roadmap`, `/lexikon/e-e-a-t` | 3 each |
| 20 further targets (`/lexikon/*`, old blog slugs) | 1–2 each |

* `/campsites` (the UK offer) is live and indexable but in **no sitemap**.
* Googlebot renders with `en-US`, so Google most likely indexes the **English** titles/descriptions of
  a site whose sitemaps, `html lang` and hreflang say German.

## 7. Local build (Step 7)

Environment: Linux, Node 22.22.2, npm 10.9.7, bun 1.3.13. Build done in a scratch copy so the repo
stays byte-identical to the Lovable ZIP.

| Command | Result | Notes |
|---|---|---|
| `npm ci` | ❌ fails | `package-lock.json` out of sync (`@lovable.dev/cloud-auth-js` 0.0.2 vs ^1.0.0; drizzle-kit, drizzle-orm, postgres, tsx… missing) |
| `bun install --frozen-lockfile` | ❌ fails | 403 from `europe-west4-npm.pkg.dev/lovable-core-prod/sandbox-npm-cache` (Lovable-private) for 90 packages |
| `npm install` | ✅ | 388 packages from npmjs.org; resolves `@lovable.dev/cloud-auth-js@1.2.1`, `lovable-tagger@1.1.13`; 2 deprecation warnings |
| `npm run build` | ✅ | 31 s, `dist/` 18 MB; largest chunks: `charts-vendor` 446 kB, `ArticleLayout` 298 kB, `blogArticles` 235 kB |
| `npx tsc --noEmit -p tsconfig.app.json` | ✅ 0 errors | (`tsconfig` is permissive: `strict` off) |
| `npm run lint` | ❌ 138 problems (100 errors, 38 warnings) | `no-explicit-any` 58, `no-unused-expressions` 21, `react-refresh/only-export-components` 26 (warn), `react-hooks/exhaustive-deps` 12 (warn), `no-empty` 8, `prefer-const` 5, `no-case-declarations` 4, 1 each: `rules-of-hooks` (real bug risk), `no-require-imports` (tailwind.config.ts), `no-useless-escape`, `no-empty-object-type` |
| Tests | ⚪ none | No test runner, no `*.test.*` / `*.spec.*` files |
| Local preview | ✅ | `vite preview --host 127.0.0.1` serves all 288 audited paths; Supabase calls fail offline without breaking pages (except admin tools, which render blank) |

Verdict: **the site can be built and run completely outside Lovable** with `npm install`. A new,
committed lockfile is the first technical fix (needs approval, see MIGRATION_PLAN step 2).

## 8. Other findings worth knowing

* Security (Lovable scan): 1 **critical** – permissive RLS policies on 20 tables ("some access rules let
  everyone through"); 1 info – public `downloads` bucket listing; 11 known issues in dependencies.
* Hard-coded email recipients are Markus's personal Gmail addresses and `@localdominator.de` addresses;
  some senders use Resend's shared test sender `onboarding@resend.dev`, which Resend only delivers to
  the Resend account owner.
* Google's sitemap ping endpoint (`ping-google-sitemap`, daily cron) was retired by Google in 2023;
  the job has no effect.
* Two secrets (`STRIPE_SECRET_KEY`, `INTERNAL_API_SECRET`) are set but unused.
* Lovable chat shows an **unfinished task**: "create a section showing we build top websites + extra
  menu" was paused on 2026-09-27 to do the `/campsites` deletions. Tell Markus not to resume it in
  Lovable while migration is in progress, or it will land only in Lovable.
* `.lovable/plan/*.md` holds Lovable's own plans (GEO optimisation 2026-09-26, campsites SEO, QA
  repair) – useful history of recent changes.

## 9. Answers to the six questions

1. **Current architecture** – React/Vite SPA (content in code) + Lovable hosting (with pre-render) +
   Lovable Cloud Supabase (forms, analytics, admin, 19 functions, 7 crons) + independent GA4, Stripe
   links, Resend, IONOS DNS, Google Workspace mail.
2. **Lovable dependency map** – DEPENDENCIES.md §1–2 (A: hosting, pre-render, AI Markdown, Cloud
   backend, AI gateway, Google admin login; B: lockfiles/npm cache, tagger, drizzle URL).
3. **Migration risks** – §5 above (CRITICAL: hosting, pre-render, code-not-yet-in-Git).
4. **Recommended sequence** – MIGRATION_PLAN.md.
5. **Difficulty per step** – MIGRATION_PLAN.md (each step rated).
6. **Exact next action** – push this snapshot (plus these docs) to the new private repo
   `localdominate/Local`, then ask Markus for workspace Git access so Lovable can sync.
