# Data Migration Plan — Lovable Cloud → Independent Supabase (Section 9)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. **This document defines a strategy. It does
not execute one.** No production data is migrated by this document or by anything run to produce it. No
customer records, emails, or other row-level content appear below — only table names, row counts, and
safe aggregates already published in `supabase/export/README.md`.

## 9.1 Scope and current volume

Per `supabase/export/README.md`'s table-by-table row-count breakdown, manually summed this session:
**7,369 rows across the 24 application tables + 1 row in `auth.users` = 7,370 rows total**, matching the
historical "~7,370" figure exactly. This is treated as the current aggregate — re-confirming it against
the live project at migration time (via a `SELECT count(*)` per table, which reveals only a number, not
records) is the safe way to check it hasn't drifted, and should be the first step actually executed once
migration is authorized.

The tables flagged PRODUCTION CRITICAL / carrying PII in `SUPABASE_MIGRATION_INVENTORY.md` §7.3
(`customers`, `leads`, `partner_applications`, `questionnaire_responses`, `uploaded_assets`,
`user_roles`) get the most conservative handling below.

## 9.2 Non-negotiable precondition

**Before any production migration: a verified backup must exist and be confirmed restorable.** A backup
file is already claimed to exist (`LocalDominate-DB-backup-2026-09-28.zip`, per the README, explicitly
kept out of the repository) but:

- It is two days stale relative to today (2026-09-30) — anything written since 2026-09-28 is not in it.
- Its restorability has not been tested this session and cannot be tested from here (no access to the
  file or a sandbox project to restore into).

**Action before REPLICATE starts:** take a fresh backup (Supabase's own project-level backup/export, or
`pg_dump` against the source project with credentials this session does not hold), and have whoever runs
the migration do one **test restore into a throwaway project** before touching production. This is a
manual step for Markus/Re — not something this session can execute without database credentials.

## 9.3 Migration strategy (schema-first, then data, then validate)

1. **Schema replication.** Apply `supabase/migrations/` (28 files, in order) or `supabase/export/schema.sql`
   to the new project. This recreates all 24 tables, 2 enums, 2 views, 2 functions, 8 triggers, 7
   extensions, 2 storage buckets + policies, and all 63 RLS policies in one pass, before any row is
   copied — so constraints (the 4 FKs, the enums) are live and will reject bad data immediately rather
   than silently.
2. **ID and relationship preservation.** All 24 tables use `gen_random_uuid()` PKs already stored as
   values, not sequence-generated integers — a straight row copy preserves every `id` value as-is, so
   foreign keys (`questionnaire_responses.customer_id`, `uploaded_assets.customer_id`,
   `user_roles.user_id`, `conversion_reports.created_by`) keep resolving correctly without remapping.
   `auth.users(id)` is the one exception: Supabase's own auth schema does not accept an arbitrary
   inserted UUID the way an application table does, so the single existing user must be migrated via
   Supabase's auth user-export/import path (or recreated and then `user_roles.user_id` repointed at the
   new UUID) — this is the one place a naive `COPY`/`pg_dump` of `public.*` alone is not sufficient.
3. **Timestamps.** All `created_at`/`updated_at` columns are plain `timestamp with time zone` with
   `DEFAULT now()` — a row-level copy (not re-insert-triggering defaults) preserves original timestamps
   as long as the copy method writes the column value directly (e.g. `pg_dump`/`COPY`, not an
   application-level re-insert that would call `now()` afresh).
4. **Ownership / status / business state.** `payment_status`, `questionnaire_completed`,
   `is_seeded`, and similar state columns are plain data columns — copied as-is, no special handling
   needed beyond the enum/FK integrity already covered by step 1.
5. **Payment relationships.** `customers.stripe_session_id` / `stripe_customer_id` are opaque text
   copied as-is. **These values are not re-validated against Stripe during migration** — they are moved,
   not verified — because doing so would require live Stripe API calls this plan does not authorize.
6. **Storage objects.** `customer-uploads` (private) and `downloads` (public) buckets need their objects
   copied via the Storage API (bucket-to-bucket object copy, cross-project), not just their bucket/policy
   definitions from step 1 — object *bytes* live outside the SQL export entirely.
7. **Recommended tooling.** Supabase's own `pg_dump`/`pg_restore` against the two projects' connection
   strings is the most direct path for steps 1–5 (schema + data in one authenticated operation); step 6
   needs a small script iterating the Storage API. No such script exists in the repo yet — writing one is
   in-scope as *preparation*, not execution, if credentials become available before authorization to run
   it does.

## 9.4 Backup and rollback

- **Backup:** a fresh full export (schema + data + storage manifest) taken immediately before cutover,
  in addition to re-verifying the existing 2026-09-28 backup restores cleanly (§9.2).
- **Rollback:** because Lovable Cloud (`minijgyozgjuhqgkmilj`) is not touched or disconnected until the
  final DISCONNECT step of the required sequence, rollback for any point up through PARALLEL VERIFY is
  simply **not cutting over** — the old project keeps serving production untouched. Only after CUT OVER
  does rollback become "point `.env`/secrets back at `minijgyozgjuhqgkmilj`," which stays possible as
  long as Lovable Cloud has not been paused or deleted. This plan does not authorize pausing or deleting
  `minijgyozgjuhqgkmilj` at any point.

## 9.5 Post-migration validation (safe aggregates only)

Per instruction, validation uses only counts and integrity checks — **no customer information is
printed at any point**:

| Check | Method |
|---|---|
| Row counts match | `SELECT count(*)` per table, old vs new, diffed as numbers only |
| ID counts match | `SELECT count(DISTINCT id)` per table, old vs new |
| Relationship integrity | For each of the 4 FKs, count of orphaned rows (`FK IS NOT NULL AND` no matching parent) — must be 0 on the new project |
| Null counts | Per-column null counts on a handful of NOT NULL-constrained columns, old vs new, to catch a silently-dropped column |
| Status distributions | `GROUP BY payment_status` / `GROUP BY questionnaire_completed` etc., counts only, old vs new |
| Storage object counts | Count of objects per bucket, old vs new (not byte-for-byte content diff, which would require reading file contents) |
| Auth user count | `count(*)` on `auth.users`, old vs new (currently 1) |

Any mismatch on any check **stops cutover** and reverts to investigating the copy step that produced it,
per the "do not perform destructive cleanup simply because a replacement appears to work" rule already
established for this migration.

## 9.6 Explicitly out of scope for this document

- Running any of the above against production. Nothing in this document has been executed.
- Printing, exporting, or otherwise surfacing actual row content (customer names, emails, addresses,
  phone numbers, uploaded file contents) at any point, in this document or in any future validation
  output.
- Migrating data before REPLICATE/CONFIGURE/TEST are authorized and before Markus/Re have supplied
  credentials for a real destination project — this plan is preparation only.
