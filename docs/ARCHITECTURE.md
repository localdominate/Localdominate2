# Local Dominate – Architecture (as found on 2026-09-27)

Source of truth for this document: the Lovable "Download codebase" ZIP of project
**Local Dominator Blueprint** (`5ee1f856-cb97-4dec-8883-fec126ed4ac6`, owner Markus Wimböck,
workspace "Markus's Lovable"), downloaded 2026-09-27, plus read-only inspection of the Lovable
dashboard and the live site https://localdominate.org. Nothing in the app was changed.

## 1. Stack at a glance

| Area | What is used |
|---|---|
| Framework | React 18.3 + TypeScript 5.8, client-side SPA (no SSR, no static pre-render in the repo) |
| Build | Vite 5.4 with `@vitejs/plugin-react-swc`; manual vendor chunks in `vite.config.ts`; `console`/`debugger` stripped in production |
| Package manager | Lovable uses **bun** (`bun.lock`, `bun.lockb`). `package-lock.json` is stale (see TAKEOVER_AUDIT §7) |
| Routing | `react-router-dom` 6 `BrowserRouter`, one flat `<Routes>` table in `src/App.tsx` (213 `<Route>`s = 212 path declarations + `*`; 211 unique paths) |
| UI kit | shadcn/ui (Radix primitives) in `src/components/ui/` (29 files), Tailwind CSS 3.4, `tailwindcss-animate`, `@tailwindcss/typography` |
| State / data | TanStack Query 5, React context (`LanguageProvider`, `ABTestProvider`) |
| Forms | react-hook-form + zod |
| Charts / motion | recharts, framer-motion |
| Backend | **Lovable Cloud** (managed Supabase project `minijgyozgjuhqgkmilj`): Postgres, Auth, Storage, 19 Edge Functions, 7 cron jobs |
| Hosting | **Lovable hosting**, custom domains `localdominate.org` (primary) and `www.localdominate.org`, A record → `185.158.133.1`; Lovable subdomain `ejdhisidjs.lovable.app` |
| DNS | IONOS nameservers (`ns10xx.ui-dns.*`); Google Workspace MX; SPF for Google; Google site-verification TXT |
| Analytics | GA4 `G-BS2B48THVM` with Consent Mode v2 (in `index.html`), plus a home-grown analytics/A-B/heatmap system writing to Supabase |
| Payments | Stripe Payment Links (hard-coded in `src/lib/stripe.ts`) + `stripe-webhook` edge function |
| Email | Resend API from edge functions |

## 2. Routing architecture

* All routes live in `src/App.tsx`. `Index` (home) is eagerly imported; every other page is
  `React.lazy()` + `Suspense`.
* Route groups:
  * Marketing / landing: `/`, `/restaurant-marketing`, `/handwerker-marketing`, `/arztpraxis-marketing`,
    `/anwalt-marketing`, `/ai-visibility-audit`, `/diy-toolkit`, `/partner`, `/campsites` (UK, English),
    city/niche landers (`/hairdressers-munich`, `/dentists-munich`, `/gyms-munich`, `/restaurants-munich`,
    `/barbers-munich`, `/plumbers-berlin`, `/lawyers-hamburg`, `/physiotherapy-vienna`, `/dentists-zurich`,
    `/bakeries-cologne`).
  * Content: `/blog`, 165 `/blog/*` routes (164 unique paths, 160 components), `/seo-lexikon`,
    `/citation-verzeichnisse`, `/ueber-uns`, `/redaktionsrichtlinien`, `/forschungsmethodik`,
    `/content-formatting-guidelines`.
  * Legal (rendered `noindex`): `/impressum`, `/datenschutz`, `/agb`.
  * Funnel (noindex + robots-disallowed): `/danke`, `/onboarding`.
  * Internal tools: `/admin/*`, `/analytics`, `/ab-test`, `/ab-test-zentrale`, `/test-b`.
  * `*` → `NotFound` (renders "404" + `noindex`, but the host still answers **HTTP 200**).
* `/blog/local-seo-anwaelte-kanzleien` is declared twice (components `LocalSeoAnwaelteKanzleien` and
  `LocalSeoAnwaelte`); React Router renders the first match.
* `src/components/TrafficSplitter.tsx` is imported in `App.tsx` but not mounted (inactive).

## 3. Page and component structure

| Folder | Files | Role |
|---|---|---|
| `src/pages/` | 45 | Top-level pages (landing, legal, admin dashboards) |
| `src/pages/blog/` | 160 | One component per article (content is JSX) |
| `src/pages/admin/` | 2 | Password reset / update |
| `src/components/` (root) | 40 | Site sections: `SEOHead`, `StickyHeader`, `Footer`, `CookieBanner`, CTA/offer sections, trackers |
| `src/components/blog/` | 105 | `ArticleLayout` and article building blocks (TOC, FAQ, schema, CTAs, tables, author box) |
| `src/components/admin/` | 18 | Admin dashboards |
| `src/components/niche/`, `restaurant/`, `solution/`, `audit/`, `ai/`, `onboarding/` | 51 | Feature-specific sections |
| `src/components/ui/` | 29 | shadcn/ui primitives |
| `src/data/` | 30 | Content registries & configs (`blogArticles.ts`, `authorProfiles.ts`, `seoLexikonData.ts`, `internalLinkRegistry.ts`, …) |
| `src/hooks/` | 25 | Tracking, A/B testing, admin auth, onboarding |
| `src/lib/` | 13 | Analytics storage, Stripe links, bandit/Bayesian A/B maths, Wikidata entity helpers |
| `src/i18n/` | 2 | `LanguageContext` + `translations.ts` (DE/EN/AR) |
| `src/integrations/` | 4 | Supabase client + types, Lovable auth wrapper |

## 4. Styling system

* Tailwind with CSS-variable design tokens (shadcn pattern): `src/index.css` defines ~80 custom
  properties (`--background`, `--primary`, …); `tailwind.config.ts` maps them to colours.
* Fonts from Google Fonts (preloaded in `index.html`): Inter (sans), Cormorant Garamond + Lato
  (restaurant "menu" themes).
* Page-specific CSS: `src/styles/campsites.css`, `restaurant-cream-gold.css`, `restaurant-dark-gold.css`,
  `restaurant-michelin.css`.
* Responsive behaviour is Tailwind breakpoints only; there are no separate mobile templates.

## 5. Asset architecture

| Location | Count / size | Served as |
|---|---|---|
| `src/assets/` (+ `blog/`, `niche/`) | 68 files, 5.0 MB | Imported in components → hashed files in `dist/assets/` |
| `public/images/` (+ `blog/`) | 56 files, 4.1 MB | Stable URLs `/images/...` (referenced by `sitemap-images.xml`) |
| `public/` root | logos, favicons, `og-image.png/.webp`, `campsites-social.jpg`, `manifest.json` | Stable URLs |
| `public/blog-md/` | 153 Markdown mirrors of articles + `index.md` (154 files) | `/blog-md/<slug>.md` (listed in `sitemap-ai.xml`) |
| `public/*.json`, `llms*.txt`, `.well-known/ai.txt`, `feed.xml` | AI/LLM discovery files and RSS | Stable URLs |

Supabase Storage buckets `downloads` (public) and `customer-uploads` (private) exist but are **empty**
(checked 2026-09-27). No site image lives outside the repo.

## 6. Internationalisation

One URL per page. Language (DE / EN / AR) is chosen **client-side** in `LanguageContext`:
`localStorage.language` → else `navigator.language` (`en*` → EN, `ar*` → AR) → else DE.
Consequence: the same URL renders German for a `de-DE` browser and English for an `en-US`
browser (including Googlebot, which renders with `en-US`). 194 of 288 rendered URLs have a
different `<title>` in DE vs EN. `hreflang`: 154 of 288 renders output `de` + `x-default` pointing at the same URL; 133 output none; the home page also outputs `en` → `/?lang=en` and `ar` → `/?lang=ar`, but no code reads `?lang=`, so those alternates render the same page.
This behaviour is part of the SEO baseline and must be preserved until a deliberate decision is made.

## 7. SEO implementation

* `src/components/SEOHead.tsx` sets title, description, robots, canonical, OG/Twitter, hreflang,
  `article:*` meta and JSON-LD by mutating `document.head` in a `useEffect` (no react-helmet).
  Title rule: append " | Local Dominator" if total ≤ 60 chars, otherwise truncate with "…"
  unless `exactTitle` is set.
* `index.html` carries the static fallback head (generic title/description, WebSite + Organization
  JSON-LD, GA4, consent defaults). This is what non-rendering crawlers see.
* **Lovable hosting pre-renders pages for search-engine and social crawlers and serves Markdown to AI
  assistants** (stated on the project's "SEO & AI search" panel). Plain `curl`/WebFetch of the live site
  returns only the generic shell. This pre-rendering is a hosting feature, not in the repo.
* Schema.org: generated per page in JSX (`ArticleLayout`, `src/components/blog/*Schema*`, page
  components). 48 distinct `@type`s across the 288 rendered URLs; most frequent: WebSite /
  Organization / Service / OfferCatalog (every page, from `index.html`), FAQPage (158 pages),
  BreadcrumbList (155), WebPage (150), Article (142), LocalBusiness, Person, Dataset, DefinedTermSet,
  SpeakableSpecification (≈143 each), SoftwareApplication (36), HowTo (20).
  Full per-URL list in `docs/baseline/seo-baseline.csv`.

## 8. Sitemaps and robots

All static files in `public/`, hand-maintained (byte-identical to production on 2026-09-27):

| File | `<loc>` count |
|---|---|
| `sitemap-index.xml` | 5 child sitemaps |
| `sitemap.xml` | 140 |
| `sitemap-blog.xml` | 160 |
| `sitemap-ai.xml` | 154 (`/blog-md/*.md`) |
| `sitemap-images.xml` | 47 pages with images |
| `sitemap-lexikon.xml` | 67 (`/seo-lexikon` + 66 `/seo-lexikon/<term>` URLs that **have no route**, see SEO_BASELINE) |

`public/robots.txt` allows all major engines and AI crawlers, disallows `/admin/`, `/api/`,
`/analytics/`, A/B pages, `/danke`, `/onboarding`, tracking parameters, and lists all six sitemaps.
The `generate-sitemap` edge function builds XML on request but is **not** what `/sitemap.xml` serves.

## 9. Backend (Lovable Cloud / Supabase `minijgyozgjuhqgkmilj`)

* **Database**: 24 tables + 2 views (per Lovable dashboard). 23 tables are created in
  `supabase/migrations/` (28 files, Jan–May 2026); `internal_linking_audits` and view
  `latest_internal_linking_audits` exist in the database but are not created by any migration (schema drift) – and migration `20260520145005_…sql` runs `ALTER VIEW public.latest_internal_linking_audits`, so **replaying the migrations on a fresh project fails at that file**;
  `drizzle/migrations/0000_harden_customers_storage_and_has_role.sql` is a later hardening migration run
  via `LOVABLE_DB_MIGRATION_URL`. Exact row counts (2026-09-28, `count(*)`): 7,370 in total, e.g. `ab_test_views` 3,823,
  `blog_article_views` 2,226, `analytics_events` 467, `customers` 13, `leads` 6, `partner_applications` 2,
  `questionnaire_responses` 100, `scheduled_posts` 128. Full list and schema: `supabase/export/README.md`.
  (The Lovable dashboard's "0 rows" figures used on 2026-09-27 were stale estimates.)
* **Auth**: Supabase Auth. Admin login (`src/components/admin/AdminLoginScreen.tsx`) supports
  email/password and "Sign in with Google" via Lovable's managed OAuth broker
  (`@lovable.dev/cloud-auth-js`). Admin rights via `user_roles` + `private.has_role()` (a function in a `private` schema, used by 38 policies). 1 auth user exists.
* **Storage**: buckets `downloads` (public, empty), `customer-uploads` (private, empty).
* **Edge Functions** (19): 16 are declared `verify_jwt = false` in `supabase/config.toml`; `generate-ai-audit-report`, `send-campsite-website-check`, `send-partner-notification` have no entry (Supabase default `verify_jwt = true` if redeployed from this repo). See DEPENDENCIES.md.
* **Cron jobs** (configured in Lovable Cloud, not in the repo): `auto-optimizer-hourly` (hourly),
  `daily-sitemap-update` (daily 13:00), `ping-google-sitemap-daily` (daily 13:00),
  `publish-scheduled-posts-job` (every minute), `send-daily-analytics-report` (daily 15:00),
  `weekly-content-freshness-check` (Mon 16:00), `weekly-seo-monitoring` (Mon 15:00).
* **Secrets** (names only): `LOVABLE_API_KEY` (Lovable-managed), `INTERNAL_API_SECRET`,
  `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`. `INTERNAL_API_SECRET` and
  `STRIPE_SECRET_KEY` are not referenced anywhere in the code.

## 10. Forms and data flows

| Form / action | Where | Goes to |
|---|---|---|
| Lead forms | `components/blog/LeadGenerationCTA.tsx`, `components/niche/NicheLeadForm.tsx`, `pages/AIVisibilityAudit.tsx` | insert into `leads` |
| Partner application | `pages/Partner.tsx` | insert `partner_applications` + `send-partner-notification` |
| Campsite website check | `pages/Campsites.tsx` | `send-campsite-website-check` (email only) |
| Customer onboarding + file upload | `hooks/useOnboarding.ts` | `customer-onboarding`, `upload-customer-file`, `send-questionnaire-email`, `send-new-customer-notification` |
| Checkout | `lib/stripe.ts`, `pages/DIYToolkit.tsx` | Stripe Payment Links → `stripe-webhook` → `customers` |
| Behaviour tracking | `lib/analyticsStorage.ts`, trackers/hooks | `track-analytics` function + `analytics_*`, `ab_test_*`, `blog_article_views` tables |

## 11. Environment variables

Front end (`.env`, committed by Lovable, public by design): `VITE_SUPABASE_URL`,
`VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`.
Edge functions: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (injected by Supabase),
`RESEND_API_KEY`, `STRIPE_WEBHOOK_SECRET`, `LOVABLE_API_KEY`.
Tooling: `LOVABLE_DB_MIGRATION_URL` (drizzle-kit).

## 12. Deployment

No deployment config exists in the repo (no `vercel.json`, `netlify.toml`, CI workflow).
Production is built and served by Lovable's "Publish". Host behaviour to replicate on any new host:
SPA fallback (unknown extension-less paths → `index.html` with HTTP 200; missing files with an
extension → 404), `www.localdominate.org` → apex redirect, trailing-slash URLs served as-is (no redirect;
canonical stays slash-less), crawler pre-rendering, and Markdown serving to AI agents.
No service worker, no GTM container, Meta pixel or other third-party tags exist; `manifest.json` is only linked.
