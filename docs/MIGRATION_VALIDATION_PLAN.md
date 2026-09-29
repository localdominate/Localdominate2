# Migration Validation Plan (Section 20)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Non-destructive comparison tooling for
old-project vs new-project **metadata and aggregates only**, once both projects exist side by side during
PARALLEL VERIFY. **No row content, no PII, no secrets — every check below returns a count, a boolean, or
a name, never a record.**

## 20.1 What it compares

| Check | Query shape | Safe because |
|---|---|---|
| Table existence | `SELECT tablename FROM pg_tables WHERE schemaname='public'` on both, diffed as a set of names | Table names aren't customer data |
| Row counts | `SELECT count(*) FROM <table>` per table, old vs new | A number, not content |
| Index existence | `SELECT indexname FROM pg_indexes WHERE schemaname='public'` on both, diffed | Names only |
| RLS policy counts | `SELECT count(*) FROM pg_policies WHERE schemaname IN ('public','storage')`, and per-table breakdown | Counts only |
| Functions | `SELECT proname FROM pg_proc WHERE pronamespace IN ('public'::regnamespace,'private'::regnamespace)`, diffed as names | Names only |
| Views | `SELECT viewname FROM pg_views WHERE schemaname='public'`, diffed | Names only |
| Storage bucket counts | Supabase Storage API `listBuckets()`, count + name comparison | Bucket names aren't customer data; object *contents* are never touched |
| Storage object counts (per bucket) | Storage API count of objects per bucket, old vs new | A number |
| Edge Function inventory | `supabase functions list` (or directory listing of `supabase/functions/`) on both, diffed by name | Names only |
| Schema objects (enums, triggers, extensions) | `pg_type`/`pg_trigger`/`pg_extension` catalog queries, diffed by name/count | Names/counts only |

## 20.2 Prepared script (skeleton, not yet run against any real project — none exists)

`scripts/validate-migration.mjs` (to be written when both projects exist and their connection details are
available as environment variables, never hardcoded): takes two Supabase URLs + two **read-only,
metadata-scoped** credentials as env vars (`OLD_DB_URL`, `NEW_DB_URL`), runs each query in §20.1 against
both, and prints a diff table — fails loudly (non-zero exit) on any mismatch, matching the same
philosophy as `scripts/check-lovable.mjs`'s blocking-by-default approach once a check is known to pass.
**This script does not exist as a file yet** — writing it now, before a second project exists to actually
test it against, risks encoding wrong assumptions about connection shape that would only surface once
real testing starts. Preparing it is listed as a REPLICATE-phase task, not bootstrapped speculatively.

## 20.3 Explicit exclusions

- No `SELECT *` anywhere in this plan.
- No customer email, name, address, phone, or file content is ever queried by this tooling.
- No secret value is compared (there's nothing meaningful to "compare" about a secret across projects
  anyway — they're deliberately different values by design, per `ENVIRONMENT_VARIABLE_MATRIX.md`).
- Validation runs read-only against both projects; nothing here writes to either.

## 20.4 When this runs in the actual sequence

Per `TARGET_ARCHITECTURE.md`'s required order, this tooling's real use is the **PARALLEL VERIFY** step —
after REPLICATE (schema + functions + cron deployed to the new project) and after a rehearsal data
migration (per `DATA_MIGRATION_PLAN.md`), before CUT OVER. It reuses the exact same safe-aggregate
philosophy already established in `DATA_MIGRATION_PLAN.md` §9.5 — this document generalizes that
per-migration validation into a standing tool that can be re-run any time both projects need to be
diffed, not just once.

## 20.5 Status

**PREPARED (design only).** No script file was written for this section — see §20.2's reasoning — and
nothing was run against any live project, because only one project (the existing Lovable Cloud one)
currently exists to query. Reusing `scripts/check-lovable.mjs`'s pattern (env-var-driven, no hardcoded
project IDs, fails loudly on an unexpected difference) is the intended shape once it is written.
