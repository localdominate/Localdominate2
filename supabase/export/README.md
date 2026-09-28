# Lovable Cloud backend export (2026-09-28)

Read-only export of the Supabase project `minijgyozgjuhqgkmilj` that Lovable Cloud runs for this site.
Taken through the Lovable Cloud SQL editor with catalog queries; nothing in the database was changed.

| File | What it is |
|---|---|
| `schema.sql` | Full structure: extensions, 2 enum types, 24 tables, 43 constraints, 27 indexes, functions (incl. `private.has_role`), 2 views, 8 triggers, RLS on 24 tables, 63 policies (public + storage), 2 storage buckets, grants. **No data, no secrets.** |
| `cron.sql` | The 7 `pg_cron` jobs with their exact schedules (UTC) and HTTP calls. Bearer tokens were redacted at export time. |

`supabase/migrations/` does **not** fully reproduce this schema (it misses `internal_linking_audits`,
`latest_internal_linking_audits`, the `private` schema and later policy changes). Use `schema.sql` as the
source of truth when building the new Supabase project.

## Data (NOT in Git)

Row counts on 2026-09-28 (exact `count(*)`; the Lovable dashboard shows stale estimates such as "0 rows"):

| Table | Rows | Personal data |
|---|---|---|
| `ab_test_engagement` | 56 |  |
| `ab_test_views` | 3823 |  |
| `ab_tests` | 11 |  |
| `analytics_conversions` | 85 |  |
| `analytics_events` | 467 |  |
| `analytics_heatmap` | 0 |  |
| `analytics_heatmap_enhanced` | 257 |  |
| `analytics_sessions` | 175 | yes |
| `auto_test_queue` | 7 |  |
| `blog_article_views` | 2226 |  |
| `conversion_reports` | 0 |  |
| `customers` | 13 | yes |
| `daily_reports` | 6 |  |
| `internal_linking_audits` | 0 |  |
| `keyword_performance` | 0 |  |
| `leads` | 6 | yes |
| `lexikon_article_links` | 0 |  |
| `lexikon_sync_log` | 0 |  |
| `optimized_elements` | 7 |  |
| `partner_applications` | 2 | yes |
| `questionnaire_responses` | 100 | yes |
| `scheduled_posts` | 128 |  |
| `uploaded_assets` | 0 |  |
| `user_roles` | 1 |  |
| `auth.users` | 1 | yes (not exported) |
| `storage.objects` | 0 | |

All table data was exported as JSON and delivered to the owner as a private backup file
(`LocalDominate-DB-backup-2026-09-28.zip`), **not committed here**, because `customers`, `leads`,
`partner_applications`, `questionnaire_responses` and `analytics_sessions` contain personal data
(names, emails, phone numbers, addresses, user agents). Keep that file out of the repository.

## Cron jobs (UTC)

| Job | Schedule | Calls edge function |
|---|---|---|
| `auto-optimizer-hourly` | `0 * * * *` | `auto-optimizer` |
| `daily-sitemap-update` | `0 6 * * *` | `generate-sitemap?type=all&ping=true` |
| `ping-google-sitemap-daily` | `0 6 * * *` | `ping-google-sitemap` |
| `publish-scheduled-posts-job` | `* * * * *` | `publish-scheduled-posts` |
| `send-daily-analytics-report` | `0 8 * * *` | `send-daily-analytics-report` |
| `weekly-content-freshness-check` | `0 9 * * 1` | `check-content-freshness` |
| `weekly-seo-monitoring` | `0 8 * * 1` | `seo-monitoring` |

All jobs call the functions with `net.http_post` and a bearer token in the header.

## Secrets (names only, values stay in Lovable)

`RESEND_API_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY` (unused in code), `INTERNAL_API_SECRET`
(unused in code), `LOVABLE_API_KEY` (Lovable-issued). New values must be created in the Resend and Stripe
dashboards; they cannot be exported.
