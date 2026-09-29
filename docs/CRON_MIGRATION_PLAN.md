# Cron Migration Plan (Section 15)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Source: `supabase/export/cron.sql` (full read
this round), `SUPABASE_MIGRATION_INVENTORY.md` §7.9, `EDGE_FUNCTIONS_INVENTORY.md`.

## 15.1 Architecture choice

**Recommendation: keep cron on `pg_cron` + `pg_net` inside the new Supabase project, not GitHub Actions
scheduled workflows.** All 7 jobs exist purely to call an HTTP endpoint (a Supabase Edge Function) on a
schedule — they have no dependency on GitHub, no need for repo checkout, and every job's real work
already happens inside a Deno Edge Function next to the database it reads/writes. `pg_cron` is already
proven working (these jobs have been running this way in Lovable Cloud), the extension is already
inventoried as REQUIRED in `SUPABASE_MIGRATION_INVENTORY.md` §7.7, and moving scheduling to GitHub Actions
would add a second scheduling system with its own auth/secrets story for no functional benefit — this
would be introducing GitHub Actions "merely because GitHub exists," which the instruction explicitly says
not to do.

## 15.2 Per-job inventory

| Job | Schedule (UTC) | Function | Purpose | Dependency | Secrets | Criticality | Independent target | Test | Rollback |
|---|---|---|---|---|---|---|---|---|---|
| `auto-optimizer-hourly` | `0 * * * *` | `auto-optimizer` | A/B optimization pass | `auto_test_queue`, `ab_tests` tables | service role (auto-injected) | MEDIUM | `pg_cron.schedule(...)` on new project, new URL + new service-role token | Manually invoke the function once post-deploy; confirm a `pg_cron` run appears in `cron.job_run_details` on schedule | `cron.unschedule('auto-optimizer-hourly')` — job removal is non-destructive to data |
| `daily-sitemap-update` | `0 6 * * *` | `generate-sitemap?type=all&ping=true` | Rebuilds sitemap XML | Article registry (build-time data, not DB) | service role | HIGH | Same pattern | Diff generated sitemap against the current production one | `cron.unschedule(...)` |
| `ping-google-sitemap-daily` | `0 6 * * *` | `ping-google-sitemap` | Pings Google with the sitemap URL | — | — | **LOW — recommend NOT migrating.** Google retired this ping endpoint in 2023 (already flagged in `DEPENDENCIES.md`); the job runs daily and does nothing useful | **Do not recreate this job on the new project.** Drop it here rather than carry dead functionality forward | N/A | N/A |
| `publish-scheduled-posts-job` | `* * * * *` (every minute) | `publish-scheduled-posts` | Publishes due blog posts | `scheduled_posts` table | service role | **CRITICAL** — blog publishing pipeline | Same pattern, **but see §15.3 below — this is the one job that needs special handling during PARALLEL VERIFY**, not just a copy-paste redefinition | Schedule a test post a few minutes out, confirm it publishes on the new project only | `cron.unschedule(...)` — a missed minute just delays publishing by up to a minute, not destructive |
| `send-daily-analytics-report` | `0 8 * * *` | `send-daily-analytics-report` | Daily analytics email | `daily_reports`, analytics tables | Resend key, service role | LOW | Same pattern | Confirm email arrives at the hard-coded recipients (see `DEPENDENCIES.md` §3 for the list) | `cron.unschedule(...)` |
| `weekly-content-freshness-check` | `0 9 * * 1` (Mon) | `check-content-freshness` | Flags stale blog content | Article registry | Resend key, service role | LOW | Same pattern | Confirm email arrives | `cron.unschedule(...)` |
| `weekly-seo-monitoring` | `0 8 * * 1` (Mon) | `seo-monitoring` | Weekly SEO monitoring | `keyword_performance` | Resend key | LOW | Same pattern | Confirm email arrives | `cron.unschedule(...)` |

## 15.3 The one job that needs care: `publish-scheduled-posts-job`

Every-minute cron, writing to `scheduled_posts`. If this job is active on **both** the old and new
projects simultaneously during PARALLEL VERIFY (both pointed at their own copy of `scheduled_posts`,
which started as identical data per `DATA_MIGRATION_PLAN.md`), there is no double-publish risk *between*
projects — they're separate databases, each publishing its own copy independently, and only one of them
is what visitors actually see (whichever project the live frontend still points at). The real risk is
**within** the new project once *it* goes live: if this cron job is enabled at the same moment as a
second, forgotten instance of it (e.g. one defined via a stale migration accidentally applied twice),
that would double-publish. Mitigation: after applying the schema/cron on the new project, run
`SELECT * FROM cron.job WHERE jobname = 'publish-scheduled-posts-job';` and confirm exactly one row
exists before enabling anything else — a cheap, safe-aggregate check consistent with
`DATA_MIGRATION_PLAN.md` §9.5's validation philosophy.

## 15.4 Mechanical migration step (all 7 jobs, applies to the 6 being kept)

`cron.sql`'s bodies all call `net.http_post` against the **old** project's URL with a bearer token that
was redacted at export time (`<REDACTED_JWT>`). None of the 6 kept job definitions can be reapplied
as-is — each needs, at minimum:
1. URL rewritten from `https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/...` to the new project's
   URL.
2. A **new** service-role JWT for the new project substituted for `<REDACTED_JWT>` (the old token, even if
   it weren't redacted, would not authenticate against a different project).
3. Applied via `cron.schedule(...)` on the new project once its schema (`pg_cron`/`pg_net` extensions) and
   the target Edge Functions are already deployed — cron jobs calling not-yet-deployed functions would
   just fail silently on every run until the function exists.

## 15.5 Status

**PREPARED, not MIGRATED.** No cron job has been created on any new project (none exists yet, per
`SUPABASE_NEW_PROJECT_STATUS.md`). This document defines the target state and per-job handling; execution
is a REPLICATE-phase task once §22's blocker (an independent project existing) is resolved.
