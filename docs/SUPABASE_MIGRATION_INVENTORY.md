# Supabase Migration Inventory — Independent Backend (Section 7)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Companion to
`LOVABLE_FINAL_DEPENDENCY_GRAPH.md` and `TARGET_ARCHITECTURE.md`. Source: `supabase/export/schema.sql`,
`supabase/export/cron.sql`, `supabase/export/README.md`, `supabase/config.toml`, direct grep of the
current repo. **No secret values and no PII are reproduced anywhere in this document** — only object
names, counts, and structural relationships.

Classification key: **REQUIRED** (must exist in the independent project for current functionality to
work at all) · **LEGACY** (present but nothing in the live app reads/writes it any more — candidate to
drop after confirmation) · **UNKNOWN** (repo evidence is insufficient; needs a manual check against the
live Lovable Cloud dashboard) · **PRODUCTION CRITICAL** (a REQUIRED item that also holds live customer
data or gates a paid flow — extra care on migration/rollback).

## 7.1 Project reference

| Item | Value |
|---|---|
| Current (Lovable Cloud) project ref | `minijgyozgjuhqgkmilj` |
| Current project URL | `https://minijgyozgjuhqgkmilj.supabase.co` |
| Independent project ref | **does not exist yet** (see §8) |

## 7.2 Schema objects — summary

| Object type | Count (repo evidence) | Class |
|---|---|---|
| Tables | 24 | REQUIRED (see per-table breakdown) |
| Enums | 2 | REQUIRED |
| Views | 2 | REQUIRED |
| Functions | 2 | REQUIRED |
| Triggers | 8 | REQUIRED |
| Extensions | 7 | REQUIRED |
| Storage buckets | 2 | REQUIRED |
| Storage policies | 2 | REQUIRED |
| RLS policies | 63 (across 24 tables — RLS is enabled on all 24) | REQUIRED |
| Primary keys | 24 (one per table) | REQUIRED |
| Foreign keys | 4 (explicit `ADD CONSTRAINT ... FOREIGN KEY`) | REQUIRED |
| Indexes (non-PK) | 27 named `CREATE INDEX` | REQUIRED |
| Cron jobs | 7 | see §7.6 — mixed |
| Edge Functions | 19 | see `EDGE_FUNCTIONS_INVENTORY.md` (Section 10) |

## 7.3 Tables (24) — REQUIRED unless noted

| # | Table | Notes | Class |
|---|---|---|---|
| 1 | `ab_test_engagement` | A/B testing telemetry | REQUIRED |
| 2 | `ab_test_views` | A/B testing telemetry | REQUIRED |
| 3 | `ab_tests` | A/B test definitions | REQUIRED |
| 4 | `analytics_conversions` | Blog CTA conversion tracking | REQUIRED |
| 5 | `analytics_events` | Generic front-end event log | REQUIRED |
| 6 | `analytics_heatmap` | Legacy heatmap capture | UNKNOWN — superseded by `_enhanced`? needs a code-reference check before calling it LEGACY |
| 7 | `analytics_heatmap_enhanced` | Rage-click/dead-click flagged heatmap capture | REQUIRED |
| 8 | `analytics_sessions` | Session-level analytics | REQUIRED |
| 9 | `auto_test_queue` | Queue feeding `auto-optimizer` function | REQUIRED |
| 10 | `blog_article_views` | Per-article view counter, source for `blog_article_stats` view | REQUIRED |
| 11 | `conversion_reports` | FK → `auth.users(id)` (`created_by`) | REQUIRED |
| 12 | `customers` | **Holds PII**: email, business name, address, phone, Stripe IDs, payment status | PRODUCTION CRITICAL |
| 13 | `daily_reports` | Analytics email report snapshots | REQUIRED |
| 14 | `internal_linking_audits` | SEO audit history, source for `latest_internal_linking_audits` view | REQUIRED |
| 15 | `keyword_performance` | SEO keyword tracking | REQUIRED |
| 16 | `leads` | **Holds PII** (lead contact data, per README) | PRODUCTION CRITICAL |
| 17 | `lexikon_article_links` | Internal-linking map | REQUIRED |
| 18 | `lexikon_sync_log` | Sync run log for the above | REQUIRED |
| 19 | `optimized_elements` | A/B optimizer output | REQUIRED |
| 20 | `partner_applications` | **Holds PII** (`/partner` form submissions) | PRODUCTION CRITICAL |
| 21 | `questionnaire_responses` | FK → `customers(id)` ON DELETE CASCADE. **Holds PII** | PRODUCTION CRITICAL |
| 22 | `scheduled_posts` | Blog scheduling queue | REQUIRED |
| 23 | `uploaded_assets` | FK → `customers(id)` ON DELETE CASCADE; pairs with `customer-uploads` storage bucket | PRODUCTION CRITICAL |
| 24 | `user_roles` | FK → `auth.users(id)` ON DELETE CASCADE; backs `private.has_role()` used across RLS | PRODUCTION CRITICAL (gates admin access) |

`analytics_heatmap` vs `analytics_heatmap_enhanced` is the one genuine ambiguity in the table list — a
`LEGACY` call should not be made without grepping `src/` for both table names first (not yet done this
round; flagged, not resolved).

## 7.4 Enums (2)

| Enum | Values | Class |
|---|---|---|
| `public.app_role` | `admin`, `moderator`, `user` | REQUIRED — gates `private.has_role()` and therefore most admin-facing RLS |
| `public.business_category` | `gastronomy`, `beauty_wellness`, `crafts`, `health`, `retail`, `fitness`, `services`, `legal` | REQUIRED — used by `customers.business_category` |

## 7.5 Views (2)

Both are `CREATE OR REPLACE VIEW` — a plain `CREATE VIEW` grep misses them, which is why an earlier pass
in this session reported 0 and the README's "2 views" looked unresolved. Resolved now.

| View | Base table(s) | Class |
|---|---|---|
| `public.blog_article_stats` | `blog_article_views` | REQUIRED |
| `public.latest_internal_linking_audits` | `internal_linking_audits` (DISTINCT ON `article_slug`) | REQUIRED |

## 7.6 Functions (2) and triggers (8)

| Function | Purpose | Class |
|---|---|---|
| `private.has_role(uuid, app_role)` | Central RLS role check, called from most admin-gated policies | REQUIRED — PRODUCTION CRITICAL (auth-adjacent) |
| `public.update_updated_at_column()` | Generic `updated_at` maintenance, called by all 8 triggers below | REQUIRED |

All 8 triggers are `BEFORE UPDATE ... FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()` on:
`ab_tests`, `auto_test_queue`, `customers`, `internal_linking_audits`, `lexikon_article_links`,
`optimized_elements`, `questionnaire_responses`, `scheduled_posts`. All REQUIRED — mechanical, low risk
to replicate.

## 7.7 Extensions (7)

`pg_cron`, `pg_net`, `pg_stat_statements`, `pgcrypto`, `plpgsql`, `supabase_vault`, and the `uuid`-family
extension. All REQUIRED for a like-for-like independent project — `pg_cron`/`pg_net` specifically gate
whether the 7 cron jobs in §7.9 can even be redefined on the new project the same way.

## 7.8 Storage (2 buckets, 2 policies)

| Bucket | Public? | Policy | Class |
|---|---|---|---|
| `customer-uploads` | No | `"Admins can view customer-uploads"` — SELECT, `authenticated`, `has_role(uid, 'admin')` | PRODUCTION CRITICAL (pairs with `uploaded_assets`, which holds customer files) |
| `downloads` | Yes | `"Anyone can view downloads"` — SELECT, `public` | REQUIRED |

No INSERT/UPDATE/DELETE storage policies exist in the exported schema for either bucket — write access
to storage is therefore only via the service role inside Edge Functions (`upload-customer-file`), not
via direct client RLS. Worth confirming this is intentional before replicating, not assuming it.

## 7.9 Cron jobs (7) — `pg_cron` + `pg_net`, defined in `supabase/export/cron.sql`

| Job | Schedule (UTC) | Target function | Class |
|---|---|---|---|
| `auto-optimizer-hourly` | `0 * * * *` (hourly) | `auto-optimizer` | REQUIRED |
| `daily-sitemap-update` | `0 6 * * *` | `generate-sitemap?type=all&ping=true` | REQUIRED |
| `ping-google-sitemap-daily` | `0 6 * * *` | `ping-google-sitemap` | LEGACY — Google retired this ping endpoint in 2023 (already flagged in `DEPENDENCIES.md`); safe to drop on the new project rather than replicate as-is |
| `publish-scheduled-posts-job` | `* * * * *` (every minute) | `publish-scheduled-posts` | PRODUCTION CRITICAL — blog publishing depends on this running |
| `send-daily-analytics-report` | `0 8 * * *` | `send-daily-analytics-report` | REQUIRED |
| `weekly-content-freshness-check` | `0 9 * * 1` (Mon) | `check-content-freshness` | REQUIRED |
| `weekly-seo-monitoring` | `0 8 * * 1` (Mon) | `seo-monitoring` | REQUIRED |

All 7 bodies call `net.http_post` against the **old** project URL
(`https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/...`) with a bearer token the export explicitly
redacted (`<REDACTED_JWT>`). **Every job definition must be rewritten with the new project's URL and a
new service-role token before being reapplied — none of these can simply be copy-pasted.**

## 7.10 Auth

| Item | Status | Class |
|---|---|---|
| Users | 1 row (per README row-count table) | PRODUCTION CRITICAL |
| Email/password admin login | Native Supabase Auth, no Lovable dependency | REQUIRED |
| Google OAuth (admin "Sign in with Google") | Brokered through Lovable (`@lovable.dev/cloud-auth-js`, per `DEPENDENCIES.md` L8) | UNKNOWN on the new project — **not exportable from this repo**: OAuth provider configuration lives only in the Supabase Auth dashboard, and `supabase/config.toml` has no `[auth]` section defining it. Must be reconfigured manually against Google Cloud Console + the new project's Auth settings; cannot be inferred or copied from code. |

## 7.11 Secrets (names only — per explicit instruction, no values reproduced)

`RESEND_API_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY` (unused in code), `INTERNAL_API_SECRET`
(unused in code), `LOVABLE_API_KEY` (Lovable-issued — has no independent equivalent; needs a direct
model-provider key instead, per `DEPENDENCIES.md` L7).

| Secret name | Class |
|---|---|
| `RESEND_API_KEY` | REQUIRED |
| `STRIPE_WEBHOOK_SECRET` | PRODUCTION CRITICAL |
| `STRIPE_SECRET_KEY` | LEGACY (declared, unused in code — confirm before dropping) |
| `INTERNAL_API_SECRET` | LEGACY (declared, unused in code — confirm before dropping) |
| `LOVABLE_API_KEY` | **Not portable** — must be replaced, not migrated (see `generate-ai-audit-report`) |

## 7.12 Webhook configuration

Only one inbound webhook exists in the codebase: Stripe → `stripe-webhook` Edge Function, secured by
`STRIPE_WEBHOOK_SECRET`. No webhook *definitions* live in the exported schema or config — the Stripe
side of this (which URL Stripe is configured to call) lives entirely in the Stripe dashboard, outside
repo visibility. **UNKNOWN**, needs manual confirmation from whoever has Stripe dashboard access, and
must be re-pointed to the new project's function URL as part of cutover, not before.

## 7.13 Things this document does not answer

- Column/PK/FK-level detail beyond what's captured in §7.3's FK list — the 4 explicit FKs are the only
  cross-table references in the schema; everything else is implicit (e.g. `stripe_session_id`,
  `article_slug` string joins have no DB-level FK).
- Whether `analytics_heatmap` is dead code (flagged in §7.3, not resolved).
- Anything requiring live dashboard access (OAuth config, Stripe webhook target, actual row-level data)
  — these are called out as UNKNOWN above rather than guessed.
