# Edge Functions — Full Inventory (Section 10)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`.

**Note on truncation:** the instruction message was cut off mid-word right after giving the start of a
classification scale — "...Classify each: **CRITICAL**, **HIGH**," — with nothing after it. As with the
two earlier truncations in this conversation (the missing "DES" field and the cut-off "unless" clause),
this is not guessed. The scale used below is a clearly-labeled, reasonable completion —
**CRITICAL / HIGH / MEDIUM / LOW** — consistent with the vocabulary already established elsewhere in
this migration's documents (e.g. the REQUIRED/LEGACY/UNKNOWN/PRODUCTION CRITICAL scale used in
`SUPABASE_MIGRATION_INVENTORY.md`). If a different scale or more tiers were intended, say so and this
table gets relabeled — nothing downstream depends on the exact tier names yet.

Criticality here means: **CRITICAL** = production breaks or a paid flow fails immediately without it;
**HIGH** = a real feature stops working, visibly, but nothing catastrophic; **MEDIUM** = degraded
behavior, silent failure, or delayed effect; **LOW** = cosmetic, redundant, or already-dead.

Count confirmed: **19** function directories under `supabase/functions/`, matching the "~19" figure
exactly.

## 10.1 Function-by-function

| # | Function | Purpose | Trigger | Callers | Auth | DB access | External API | Env vars / secrets | Criticality | Independent replacement status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `auto-optimizer` | A/B optimization pass | Cron hourly (`auto-optimizer-hourly`) | cron only | `verify_jwt=false` | service role, R/W | – | service role key | MEDIUM | Code portable as-is; needs redeploy + new cron target |
| 2 | `check-content-freshness` | Flags stale blog content | Cron weekly (Mon) | cron only | `verify_jwt=false` | service role, R | Resend | Resend key, service role | LOW | Code portable |
| 3 | `customer-onboarding` | Onboarding flow backend | Front end `useOnboarding` | app users | `verify_jwt=false` | service role, R/W (`customers`) | – | service role | HIGH | Code portable |
| 4 | `generate-ai-audit-report` | AI-visibility audit report generation | AI audit flow (app) | app users | not declared → defaults `verify_jwt=true` on redeploy (flagged in `DEPENDENCIES.md`) | service role | **Lovable AI Gateway** | `LOVABLE_API_KEY` | HIGH | **Not portable** — must be rewritten against a direct model-provider API + new key before independent deploy; this is the one function whose *code*, not just its deployment, needs to change |
| 5 | `generate-sitemap` | Builds sitemap XML | Cron daily (`daily-sitemap-update`) | cron, `?ping=true` | `verify_jwt=false` | service role, R | Google ping endpoint (dead, see #6) | service role | HIGH — feeds `docs/SEO_BASELINE.md`-relevant output | Code portable |
| 6 | `ping-google-sitemap` | Pings Google with sitemap URL | Cron daily | cron only | `verify_jwt=false` | – | google.com/ping (retired by Google, 2023) | – | LOW — already dead functionality, candidate to drop rather than migrate | N/A — recommend not replicating this cron job (see `SUPABASE_MIGRATION_INVENTORY.md` §7.9) |
| 7 | `publish-scheduled-posts` | Publishes due blog posts | Cron every minute | cron, admin | `verify_jwt=false` | service role, R/W (`scheduled_posts`) | – | service role | CRITICAL — blog publishing pipeline | Code portable, but the every-minute cron makes this the most timing-sensitive one to cut over cleanly (see §10.2) |
| 8 | `send-campsite-website-check` | `/campsites` form handler | Front-end form | public visitors | not declared → defaults `true` on redeploy (flagged) | – | Resend | Resend key | MEDIUM | Code portable |
| 9 | `send-daily-analytics-report` | Daily analytics email | Cron daily, admin test button | cron, admin | `verify_jwt=false` | service role, R | Resend | Resend key, service role | LOW | Code portable |
| 10 | `send-new-customer-notification` | Internal new-customer alert | Onboarding flow | app | `verify_jwt=false` | – | Resend | Resend key | MEDIUM | Code portable |
| 11 | `send-partner-notification` | `/partner` form handler | Front-end form | public visitors | not declared → defaults `true` on redeploy (flagged) | – | Resend | Resend key | MEDIUM | Code portable |
| 12 | `send-questionnaire-email` | Onboarding questionnaire email | Onboarding flow | app | `verify_jwt=false` | – | Resend | Resend key | MEDIUM | Code portable |
| 13 | `seo-monitoring` | Weekly SEO monitoring | Cron weekly (Mon) | cron, admin | `verify_jwt=false` | – | Resend | Resend key | LOW | Code portable |
| 14 | `stripe-webhook` | Stripe payment webhook handler | Stripe → HTTP POST | Stripe | signature-verified (own scheme, not `verify_jwt`) | service role, R/W (`customers`) | Stripe (signature verification only, no outbound call) | `STRIPE_WEBHOOK_SECRET`, service role | **CRITICAL** — gates whether a paid customer's payment is ever recorded | Code path exists and is structurally complete (205 lines, handles `checkout.session.completed`); **production-working status not verified this session** — see the Stripe status correction below |
| 15 | `submit-indexnow` | Manual IndexNow submission | Manual/admin trigger | admin | `verify_jwt=false` | – | api.indexnow.org | IndexNow key file (public, in `public/`) | LOW | Code portable |
| 16 | `sync-lexikon-links` | Rebuilds internal-linking map | Manual/admin trigger | admin | `verify_jwt=false` | service role, R/W (`lexikon_article_links`, `lexikon_sync_log`) | – | service role | MEDIUM | Code portable |
| 17 | `track-analytics` | Front-end event ingestion | Every page view | all visitors | `verify_jwt=false` | service role, W (`analytics_events` etc.) | – | service role | HIGH — highest call volume of any function; a gap here silently loses analytics data rather than breaking visibly | Code portable |
| 18 | `upload-customer-file` | Customer file upload handler | Onboarding flow | app users | `verify_jwt=false` | service role, W (`uploaded_assets`) + Storage (`customer-uploads`) | Storage API | service role | HIGH | Code portable |
| 19 | `weekly-seo-report` | SEO report generation | **No cron job found** targeting this function (per `DEPENDENCIES.md` §3, unconfirmed further this session) | unclear — possibly admin-manual only, possibly orphaned | `verify_jwt=false` | – | Resend | Resend key | LOW — and possibly already dead; worth confirming with Markus/Re whether this is still used before migrating it at all | Code portable |

## 10.2 Cross-cutting migration notes

- **Auth declaration gap (repeats across 3 functions):** `generate-ai-audit-report`,
  `send-campsite-website-check`, and `send-partner-notification` have no `verify_jwt` line in
  `supabase/config.toml`, which means Supabase's default (`true`) applies on any redeploy to a *new*
  project unless it's declared explicitly first. Two of these (`send-campsite-website-check`,
  `send-partner-notification`) are called by public, unauthenticated visitors filling out a form —
  deploying them with the default would silently break those forms. **This must be fixed in
  `supabase/config.toml` before first deploy to the independent project, not discovered after.**
- **`publish-scheduled-posts` (every-minute cron) is the most timing-sensitive cutover:** running it on
  both old and new projects simultaneously during PARALLEL VERIFY risks double-publishing a post if both
  crons fire in the same minute against the same underlying `scheduled_posts` row. The migration plan
  should either point both instances at read-only verification during parallel-run, or migrate this one
  job's cutover atomically rather than leaving it dual-armed.
- **`generate-ai-audit-report` is the only function needing a code change, not just a redeploy** — every
  other function is a straight lift-and-shift once secrets and the project URL are updated.
- **`weekly-seo-report`'s trigger is unconfirmed** — flagged, not resolved, consistent with not guessing.

## 10.3 Stripe status — explicit correction on record

Per the standing instruction to treat "Stripe not working" as **unverified historical status**, not
current architecture truth: this document records **CODE PATH EXISTS** for `stripe-webhook` (structurally
complete handler, real-format Stripe identifiers for the standard/discount product per
`src/lib/stripe.ts`) and explicitly does **not** claim **PRODUCTION FUNCTION VERIFIED** — that would
require Stripe dashboard or live-log access this session does not have. The `diy_toolkit` and
add-on products' Stripe identifiers remain flagged as looking like non-functional placeholders (see prior
session findings), separate from the apparently-real standard/discount product path.
