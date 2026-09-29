# Schema Applied to Live Independent Project — Results

Date: 2026-09-30. Project: `localdominate-prod-eu` (ref `xntsgrzagqulcagcrvzv`, org "localdominate's
Org", region **ap-southeast-2 / Sydney** — not Frankfurt; created via the dashboard by mistake, kept as-is
per explicit decision rather than redone). Applied via `mcp__Supabase__apply_migration` (real project,
not the earlier local dry run).

## Result

`schema.sql` applied cleanly, 0 errors. Post-apply check: **24 tables, RLS enabled on all 24, 0 rows in
every table** — matches `SUPABASE_MIGRATION_INVENTORY.md` and the earlier local dry run exactly.

## Two NEW findings — only visible on a real Supabase project (its own security linter)

Local Postgres has no equivalent check, so these were invisible in `SCHEMA_DRY_RUN_RESULTS.md`:

1. **ERROR — `blog_article_stats` and `latest_internal_linking_audits` are `SECURITY DEFINER` views.**
   This isn't declared anywhere in `schema.sql` — Postgres/Supabase defaults a view to the creating role's
   security context, so both views run as the migration role, not the querying user, which **bypasses
   RLS on their base tables**. Traced the actual impact:
   - `blog_article_stats` (base: `blog_article_views`) — low impact: `blog_article_views` already has an
     "Anyone can view blog analytics" public SELECT policy, so this view isn't exposing anything the base
     table wasn't already public about.
   - `latest_internal_linking_audits` (base: `internal_linking_audits`) — **real impact**:
     `internal_linking_audits` has **no public SELECT policy** — only an admin-only `has_role()`-gated
     policy. But the view carries `GRANT SELECT` to `anon` and `authenticated` (from the exported grants),
     and because it's `SECURITY DEFINER`, **any anonymous visitor can read this internal SEO-audit data
     through the view**, bypassing the admin-only restriction the base table's RLS was clearly designed to
     enforce. **This is an exact export of the current production schema, so this same gap almost
     certainly exists in the live Lovable Cloud project right now too** — worth flagging to Markus as a
     pre-existing issue, independent of this migration.
2. **WARN — `pg_net` extension installed in the `public` schema**, Supabase recommends a dedicated schema
   instead. Cosmetic/best-practice, not a data-exposure issue.

## What was NOT done

Per the migration-vs-hardening separation established in `EDGE_FUNCTION_AUTH_MATRIX.md` §11, **neither
finding was silently fixed**. Both are new information surfaced by actually applying the schema to a real
project, reported here for a decision, not acted on unilaterally. The `latest_internal_linking_audits`
fix (adding `WITH (security_invoker = true)` to the view definition, which makes it respect the querying
user's RLS instead of the creator's) is low-risk and reversible, but changes real access behavior, so it
needs a yes from Markus/Re first, not an assumption.

## Status update

Schema (structure only, no data, no functions/cron/secrets yet) — **MIGRATED** to
`localdominate-prod-eu`. Region is Sydney (ap-southeast-2), not Frankfurt, kept as a deliberate decision
made by Re rather than redone. `LOVABLE_EXIT_CHECKLIST.md` updated accordingly.
