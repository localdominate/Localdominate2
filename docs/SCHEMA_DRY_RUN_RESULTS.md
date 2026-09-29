# Schema Dry-Run Results (Section 17)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`.

## 17.1 What was actually done

Two passes, both against a **local, throwaway PostgreSQL 16 instance in this session's own container**
(started, used, and stopped within this session — never touched any Supabase project, real or otherwise,
and the throwaway database was dropped immediately after):

1. **Static checks** (grep-based, no execution): searched `supabase/export/schema.sql` for duplicate
   table/index/trigger/constraint names (none found), confirmed section ordering (already correct:
   Extensions → Enums → Tables → Constraints → Indexes → Functions → Views → Triggers → RLS → Policies →
   Storage → Grants), confirmed RLS is enabled on all 24 tables.
2. **Real execution dry-run**: created a local database, stubbed the Supabase-specific objects that
   `schema.sql` references but doesn't define itself (`auth.users` table, `auth.uid()` function,
   `storage.buckets`/`storage.objects` tables, `net.http_post()`, `cron.schedule()`, the `anon` and
   `authenticated` roles), then ran `psql -f supabase/export/schema.sql` against it for real.

## 17.2 Result

Every statement in `schema.sql` executed successfully **except** two `CREATE EXTENSION` statements
(`pg_cron`, `pg_net`) — both fail with "extension is not available" because vanilla self-hosted Postgres
doesn't ship them; they're Supabase-managed extensions enabled per-project on Supabase's own
infrastructure, not something a local dry run can install. This is an **environment limitation of the dry
run, not a schema defect** — both extensions are already correctly inventoried as REQUIRED in
`SUPABASE_MIGRATION_INVENTORY.md` §7.7 and will be available on the real target (a Supabase project).

Post-run object counts inside the dry-run database matched the inventory exactly:

| Object | Expected (from `SUPABASE_MIGRATION_INVENTORY.md`) | Found after dry-run apply |
|---|---|---|
| Tables | 24 | 24 |
| Views | 2 | 2 |
| Triggers | 8 | 8 |
| Enums | 2 | 2 |
| RLS policies (public + storage) | 63 | 63 |
| Indexes (incl. PK/unique) | 63 (24 PK + 12 unique-constraint + 27 named `CREATE INDEX`) | 63 |

No ordering problems, no duplicate objects, no missing dependencies (view/trigger/function/extension),
no invalid SQL. **RLS ordering was specifically checked** by confirming `ALTER TABLE ... ENABLE ROW LEVEL
SECURITY` statements (§`-- ===== Row level security =====`) run before the `CREATE POLICY` statements
that depend on tables already existing and RLS already being enabled — order is correct as exported.

## 17.3 What this dry run does NOT prove

Per the explicit instruction not to claim successful Supabase deployment from static validation alone —
and this was more than static validation, but still short of a real deployment:

- **Not tested**: `pg_cron`/`pg_net` actually scheduling and firing a job (impossible without those
  extensions).
- **Not tested**: Supabase's own managed-role behavior (`anon`/`authenticated` were stubbed as empty
  roles here, not Supabase's real RLS-enforcing session context — a policy referencing `auth.uid()`
  parses and runs against the stub, but was never tested against a real authenticated session).
- **Not tested**: Storage's real object-storage behavior (buckets/objects were stubbed as plain tables
  here, not Supabase's actual Storage service).
- **Not tested**: Edge Functions, secrets, or anything outside the SQL schema itself.
- **Not tested**: Supabase CLI's own `db push` path (Option B in `INDEPENDENT_SUPABASE_BOOTSTRAP.md`) —
  only the raw `schema.sql` file (Option A) was dry-run.

## 17.4 Classification

**STATICALLY VALIDATED + LOCALLY EXECUTION-TESTED**, explicitly **not DEPLOYED AND VERIFIED**. A real
Supabase project apply is still required before this schema can be called migration-ready — this dry run
raises confidence that the apply will succeed cleanly (no SQL-level surprises), it does not replace
actually doing it.

## 17.5 Cleanup performed

The throwaway database (`dryrun_localdominate`) was dropped and the local PostgreSQL service was stopped
at the end of this dry run. Nothing from it persists in this container or anywhere else.
