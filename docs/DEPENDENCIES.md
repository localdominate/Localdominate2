# Local Dominate – Dependencies (Lovable and external services)

Snapshot 2026-09-27. Classification key for Lovable dependencies:

* **A** – required at runtime (production breaks or degrades without it)
* **B** – required only during development / build
* **C** – safely removable once off Lovable
* **D** – unknown / needs investigation

## 1. Lovable dependency inventory

| # | Dependency | Where | Class | What it does / why it matters |
|---|---|---|---|---|
| L1 | **Lovable hosting** (A record `185.158.133.1`, `ejdhisidjs.lovable.app`) | Lovable project → Domains | **A** | Serves production for `localdominate.org` and `www`. SPA fallback (unknown paths → `index.html`, HTTP 200). |
| L2 | **Crawler pre-rendering** | Lovable hosting (not in repo) | **A** | "Lovable pre-renders each page before serving it to search engines and social media crawlers." Without it, crawlers that do not run JS see only the generic `index.html` head (same title/description/OG on every URL). |
| L3 | **Markdown for AI assistants** | Lovable hosting (not in repo) | **A** | "Lovable automatically serves [AI assistants] a clean markdown version of each page." Separate from the hand-made `public/blog-md/` files. |
| L4 | **Lovable Cloud = the Supabase project `minijgyozgjuhqgkmilj`** | `.env`, `supabase/config.toml`, `index.html` preconnect | **A** | Database, Auth, Storage, Edge Functions, cron, secrets. The project is **not** in the Supabase account connected to this session; it is managed through Lovable. Ownership/transferability must be confirmed with Lovable. |
| L5 | **7 cron jobs** | Lovable Cloud → Jobs (not in repo) | **A** (for the jobs' features) | `auto-optimizer-hourly`, `daily-sitemap-update`, `ping-google-sitemap-daily`, `publish-scheduled-posts-job` (every minute), `send-daily-analytics-report`, `weekly-content-freshness-check`, `weekly-seo-monitoring`. Definitions (SQL/HTTP target, auth header) are not exported in the ZIP. |
| L6 | **Edge-function secrets** | Lovable Cloud → Secrets | **A** | `RESEND_API_KEY`, `STRIPE_WEBHOOK_SECRET` (used); `STRIPE_SECRET_KEY`, `INTERNAL_API_SECRET` (set but unused in code); `LOVABLE_API_KEY` (Lovable-issued). Values cannot be exported by us; originals must come from Resend/Stripe dashboards. |
| L7 | `LOVABLE_API_KEY` + `https://ai.gateway.lovable.dev/v1/chat/completions` | `supabase/functions/generate-ai-audit-report/index.ts` | **A** | AI report generation for the AI-visibility audit uses Lovable's AI gateway. Stops working off Lovable; needs a direct model API key. |
| L8 | `@lovable.dev/cloud-auth-js` + `src/integrations/lovable/index.ts` | `components/admin/AdminLoginScreen.tsx` ("Sign in with Google") | **A** (admin Google login only) | Lovable-brokered OAuth. Email/password admin login does not depend on it. |
| L9 | `src/integrations/supabase/previewAuthStorage.ts` | Supabase client storage adapter | **C** | Only active inside Lovable preview iframes (`*.lovableproject.com`, `lovable.app`…); on any other host it falls back to `localStorage`. Harmless to keep. |
| L10 | `lovable-tagger` (devDependency) | `vite.config.ts` (`mode === "development"` only) | **B** → **C** | Adds component tags for Lovable's visual editor in dev mode. Not in production bundle. |
| L11 | Lovable private npm cache in `bun.lock` | 90 tarball URLs to `europe-west4-npm.pkg.dev/lovable-core-prod/...` | **B** | `bun install --frozen-lockfile` fails outside Lovable (HTTP 403). `npm install` from the public registry works (see TAKEOVER_AUDIT §7). |
| L12 | Stale `package-lock.json` | repo root | **B** | Out of sync with `package.json` (`npm ci` fails). Lovable never updates it. |
| L13 | `LOVABLE_DB_MIGRATION_URL` | `drizzle.config.ts` | **B** | drizzle-kit migrations are run by Lovable against its DB. |
| L14 | Lovable Git sync | Project → Settings → Git | not connected | No GitHub/GitLab/Bitbucket link exists. Connecting requires **workspace Git access** (owner Markus). |
| L15 | Lovable "SEO & AI search", "Security", "Analytics" panels | Lovable dashboard | **C** / **D** | Dashboard features only. Lovable "Analytics" (visits) data would be lost; GA4 is independent. |
| L16 | `README.md`, `.lovable/` (plans, content blueprint, internal-linking map) | repo | **C** (keep as history) | Documentation only. |
| L17 | Lovable "Emails" (branded sending) | Lovable Cloud → Emails | **D** | Panel exists; code sends through Resend directly. Confirm nothing is configured there. |

Nothing in the front-end bundle calls a Lovable API at runtime except L8 (admin Google sign-in).

## 2. External service map

```
Local Dominate (localdominate.org)
├── Frontend  ── React SPA built by Vite ──────────────── code: this repo (independent)
│                └─ hosted on Lovable hosting (+pre-render, +AI markdown) ── LOVABLE
├── Database  ── Supabase Postgres `minijgyozgjuhqgkmilj` ── LOVABLE CLOUD
├── Storage   ── Supabase Storage (2 empty buckets) ─────── LOVABLE CLOUD
├── APIs      ── 19 Supabase Edge Functions (Deno) ──────── code: repo; runtime: LOVABLE CLOUD
│                ├─ Resend API (email) ───────────────────── independent (Resend account: owner unknown)
│                ├─ Stripe webhooks ──────────────────────── independent (Stripe account)
│                ├─ Lovable AI Gateway ───────────────────── LOVABLE
│                └─ IndexNow / Bing / Yandex / Google ping ─ independent (Google ping endpoint retired by Google in 2023)
├── Analytics ── GA4 G-BS2B48THVM (gtag + Consent Mode v2) ─ independent (Google account: owner unknown)
│                ├─ Custom analytics/A-B/heatmap tables ──── LOVABLE CLOUD
│                └─ Lovable Analytics panel ──────────────── LOVABLE
├── Search    ── Google Search Console (DNS TXT + public/google3b1877e3401b227d.html) ─ independent
│                └─ IndexNow key file public/1b38d21b…fd.txt ─ independent
├── Auth      ── Supabase Auth (1 user) ─────────────────── LOVABLE CLOUD
│                └─ Google OAuth via Lovable broker ──────── LOVABLE
├── Forms     ── inserts into Supabase tables + edge-function emails ── LOVABLE CLOUD + Resend
├── Payments  ── Stripe Payment Links (buy.stripe.com/…) ── independent
├── Email     ── Resend (transactional); Google Workspace MX for inbox ── independent
├── Fonts     ── Google Fonts ────────────────────────────── independent
├── Hosting   ── Lovable ─────────────────────────────────── LOVABLE
└── DNS       ── IONOS (ns10xx.ui-dns.*) ─────────────────── independent (IONOS account: owner unknown)
```

## 3. Edge functions (19)

| Function | Called by | External calls | Secrets |
|---|---|---|---|
| `auto-optimizer` | cron hourly* | – | service role |
| `check-content-freshness` | cron weekly* | Resend | Resend |
| `customer-onboarding` | `useOnboarding` | – | service role |
| `generate-ai-audit-report` | AI audit flow | **Lovable AI Gateway** | `LOVABLE_API_KEY` |
| `generate-sitemap` | cron daily* | google ping (returns XML; not the served sitemap) | service role |
| `ping-google-sitemap` | cron daily* | google.com/ping | – |
| `publish-scheduled-posts` | cron every minute*, admin | – | service role |
| `send-campsite-website-check` | `/campsites` form | Resend | Resend |
| `send-daily-analytics-report` | cron daily*, admin test | Resend | Resend |
| `send-new-customer-notification` | onboarding | Resend | Resend |
| `send-partner-notification` | `/partner` form | Resend | Resend |
| `send-questionnaire-email` | onboarding | Resend | Resend |
| `seo-monitoring` | cron weekly*, admin | Resend | Resend |
| `stripe-webhook` | Stripe | – | `STRIPE_WEBHOOK_SECRET` |
| `submit-indexnow` | manual | api.indexnow.org | – |
| `sync-lexikon-links` | manual/admin | – | service role |
| `track-analytics` | every page view (front end) | – | service role |
| `upload-customer-file` | onboarding | Storage | service role |
| `weekly-seo-report` | (no cron found) | Resend | Resend |

\* Job → function mapping is inferred from the job names shown in Lovable Cloud → Jobs; the job bodies were not exported.

16 functions are declared `verify_jwt = false` in `supabase/config.toml`; `generate-ai-audit-report`, `send-campsite-website-check` and `send-partner-notification` are not declared (Supabase default `true` on redeploy – declare them before any redeploy). Email senders used: `noreply@localdominate.org`,
`noreply@localdominator.de`, `seo@localdominator.de`, and Resend's shared test sender
`onboarding@resend.dev` (Resend only delivers that sender to the Resend account owner's address).
Recipients are hard-coded: `markuswimboeck@gmail.com`, `markuswimboeck@googlemail.com`,
`team@localdominate.org`, `team@localdominator.de`, `info@localdominator.de`.

## 4. npm packages (runtime)

React 18, react-dom, react-router-dom 6, @tanstack/react-query 5, @supabase/supabase-js 2,
16 × @radix-ui, class-variance-authority, clsx, tailwind-merge, tailwindcss-animate, lucide-react,
framer-motion 12, recharts 2, react-hook-form 7, @hookform/resolvers, zod 3, date-fns 3, sonner,
next-themes, **@lovable.dev/cloud-auth-js** (L8).
