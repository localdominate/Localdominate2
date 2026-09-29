# Edge Function Auth Matrix (Section 11)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Source: `supabase/config.toml` (declared
`verify_jwt` values), grep of every `supabase.functions.invoke(...)` call site in `src/`, and each
function's own code for internal auth checks.

**Critical rule applied throughout:** this is a functional-equivalence pass, not a hardening pass. Where
a function is currently called anonymously and that's how it works today, the migration target
preserves that — it does not flip it to `verify_jwt = true` "for safety" as a side effect of moving
infrastructure. Security concerns are noted in their own column and left for a later, separate hardening
task, per the explicit instruction that migration and security redesign are different concerns.

| Function | Caller(s) | Public / Auth | Current `verify_jwt` | Required migration setting | Security concern | Test |
|---|---|---|---|---|---|---|
| `auto-optimizer` | cron only | N/A (server-to-server) | `false` (declared) | `false` | Anyone who learns the URL can trigger it (no other auth); low value target, writes only to internal optimizer tables | Call directly with anon key, confirm it runs and confirm no PII is touched |
| `check-content-freshness` | cron only | N/A | `false` (declared) | `false` | Same as above; sends email via Resend, so a trigger-spam abuse case would spam the Resend account, not leak data | Call directly, confirm email path doesn't fire without real content to flag |
| `customer-onboarding` | `useOnboarding` hook, app visitors mid-flow | Public (no login required — onboarding happens before any account exists) | `false` (declared) | `false` — this is intentionally public; a paying customer has no Supabase session at this point | Writes to `customers`; relies entirely on payload shape validation inside the function (not reviewed line-by-line this pass) to avoid bad writes. No rate limiting visible. | Submit a real onboarding flow test end-to-end against the new project |
| `generate-ai-audit-report` | AI audit flow, app visitors | Public | not declared → **defaults to `true` on redeploy** | **Must be explicitly declared `false`** to preserve current (public, anonymous) behavior — this is the one already flagged in `DEPENDENCIES.md` and `SUPABASE_MIGRATION_INVENTORY.md` as a redeploy trap | Public + unauthenticated + calls an LLM per request = real cost-abuse surface (see `AI_DEPENDENCY_REPLACEMENT_PLAN.md` §"cost protection") | Call anonymously post-migration, confirm it still returns a report without a session |
| `generate-sitemap` | cron daily | N/A | `false` (declared) | `false` | Read-only against public content; low risk | Call directly, diff output against current sitemap |
| `ping-google-sitemap` | cron daily | N/A | `false` (declared) | `false` | Dead functionality (Google retired the ping endpoint in 2023) — recommend dropping rather than migrating (see `CRON_MIGRATION_PLAN.md`) | N/A if dropped |
| `publish-scheduled-posts` | cron every minute, admin (`useScheduledPosts` hook) | Mixed: cron (server) + admin (authenticated) | `false` (declared) | `false` — but see security concern | Function itself does not appear to distinguish "called by cron" from "called by an authenticated admin" from "called by anyone who has the URL" — `verify_jwt=false` means an unauthenticated caller can also trigger a publish. Worth a hardening pass (shared-secret header check, or move admin's manual trigger behind a `verify_jwt=true` wrapper) but that is a security-redesign item, not this migration | Call anonymously, confirm a due post still publishes; separately confirm the admin UI's manual "publish now" button still works |
| `send-campsite-website-check` | `/campsites` public form | Public | not declared → **defaults to `true` on redeploy** | **Must be explicitly declared `false`** — same redeploy trap as `generate-ai-audit-report`; this one is worse because it's a plain public marketing-site form, and silently requiring auth would just make the form appear broken to visitors | Public form abuse (spam submissions) is possible either way; not worsened by this migration | Submit the `/campsites` form anonymously post-migration, confirm the email still sends |
| `send-daily-analytics-report` | cron daily, admin test button (`EmailTestPanel.tsx`) | Mixed: cron (server) + admin (authenticated, via logged-in admin UI) | `false` (declared) | `false` | Admin's own test button calls this with no `verify_jwt` gate, but the admin UI itself is behind `useAdminAuth`'s client-side check — the function itself has no server-side admin check, so anyone who finds the endpoint could trigger a report email. Low sensitivity (an internal report, not customer data), still worth flagging | Trigger via cron path and via admin test button, confirm both still work |
| `send-new-customer-notification` | Onboarding flow (internal, called by `customer-onboarding`'s caller) | Public (same lifecycle stage as onboarding) | `false` (declared) | `false` | Same class as `customer-onboarding` | Run onboarding flow end-to-end |
| `send-partner-notification` | `/partner` public form | Public | not declared → **defaults to `true` on redeploy** | **Must be explicitly declared `false`** — third instance of the same redeploy trap | Public form abuse possible either way | Submit `/partner` form anonymously post-migration |
| `send-questionnaire-email` | Onboarding flow | Public | `false` (declared) | `false` | Same class as `customer-onboarding` | Run onboarding flow end-to-end |
| `seo-monitoring` | cron weekly, admin (`SEOHealthDashboard.tsx`) | Mixed: cron + admin | `false` (declared) | `false` | Same shape as `send-daily-analytics-report` — admin UI gates it client-side only | Trigger both paths |
| `stripe-webhook` | Stripe (external) | N/A — not a user caller at all | `false` (declared) | `false` — **this is correct and required**: Stripe's own signature (`stripe-signature` header, verified via HMAC against `STRIPE_WEBHOOK_SECRET` in the function's own code) is the real auth here, not Supabase's `verify_jwt`. Setting `verify_jwt=true` would actually break it, since Stripe never sends a Supabase JWT. | None beyond what's already in `STRIPE_INDEPENDENCE_AUDIT.md` (no event-id idempotency table) | Send a signed test event (Stripe CLI or dashboard test webhook) against the new project post-deploy |
| `submit-indexnow` | Manual/admin trigger | Admin only (by usage, not by enforcement) | `false` (declared) | `false` | No server-side admin check found — relies entirely on the admin UI being the only caller in practice | Trigger manually, confirm still reaches `api.indexnow.org` |
| `sync-lexikon-links` | Manual/admin trigger | Admin only (by usage, not by enforcement) | `false` (declared) | `false` | Same as above — writes to `lexikon_article_links`/`lexikon_sync_log` with no server-side role check | Trigger manually, confirm output matches pre-migration |
| `track-analytics` | Every page view, all visitors (`analyticsStorage.ts`) | Public | `false` (declared) | `false` — this is intentionally public; every anonymous visitor's browser calls it | Highest call volume of any function — an unauthenticated write path at that volume is a plausible target for junk-data flooding, but that is the same exposure the site has today, not something this migration introduces | Load a page, confirm an `analytics_events` row appears in the new project |
| `upload-customer-file` | Onboarding flow (`useOnboarding`) | Public (same onboarding lifecycle) | `false` (declared) | `false` | Writes to Storage + `uploaded_assets` with no session — relies on payload validation only. Worth a hardening look (file-type/size checks) later, not now | Upload a test file through onboarding, confirm it lands in `customer-uploads` |
| `weekly-seo-report` | **No caller found** — no `supabase.functions.invoke("weekly-seo-report")` anywhere in `src/`, and no cron job targets it in `cron.sql` | Unknown — possibly orphaned | `false` (declared) | `false` (if kept at all) | N/A | **Before migrating this one, confirm with Markus/Re whether it's still used — it may be dead code carried over from an earlier iteration, distinct from `seo-monitoring` and `send-daily-analytics-report` which both are actively called** |

## 11.1 Summary — the real redeploy risk

Three functions (`generate-ai-audit-report`, `send-campsite-website-check`, `send-partner-notification`)
have no `verify_jwt` line in `supabase/config.toml` at all. On the *current* project this doesn't matter
because they were presumably deployed once, early, before Supabase's `true` default could bite — but
deploying fresh to an **independent** project applies that default from function one. All three are
called anonymously by real visitors (an AI-audit tool, a campsite-check form, a partner-application
form). **Declaring all three `verify_jwt = false` explicitly in `supabase/config.toml` before first
deploy to the new project is a required migration step, not an optional cleanup** — skipping it silently
breaks three live visitor-facing flows.

## 11.2 Functions with no server-side admin check at all

`publish-scheduled-posts` (manual trigger), `send-daily-analytics-report` (admin test button),
`seo-monitoring` (admin test button), `submit-indexnow`, `sync-lexikon-links`: all five are intended for
admin-only use but rely entirely on "the admin UI is the only thing that calls it in practice," with no
function-side role check. This is a real, pre-existing security weakness — documented here as requested,
not fixed here, per the explicit instruction that migration and security hardening are separate work.
