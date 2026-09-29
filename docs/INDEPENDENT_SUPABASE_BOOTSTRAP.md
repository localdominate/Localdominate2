# Independent Supabase Bootstrap (Section 16)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Goal: everything that can be prepared **before**
a new Supabase project exists, so that once one does, standing it up is a reproducible, ordered
procedure — not improvisation. **Contains no production data and no secrets. No project ID is hardcoded
anywhere below** — every command takes the target project as a parameter/prompt at run time.

## 16.1 Source of truth

`supabase/export/schema.sql` already contains every object in the correct dependency order (confirmed by
inspection and by the real dry-run in `SCHEMA_DRY_RUN_RESULTS.md`): Extensions → Enum types → Tables →
Constraints (PK/FK/unique/check) → Indexes → Functions → Views → Triggers → Row level security → Policies
(public + storage) → Storage buckets → Grants. This ordering is already correct and does not need
reshuffling — the two independent options below both use it as-is.

## 16.2 Two ways to apply it — pick one, don't mix

**Option A — `supabase/export/schema.sql` directly (simpler, one file, what was actually dry-run tested):**

```sh
# Requires: Supabase CLI logged in, and the new project's connection string
# (get it from the new project's dashboard → Project Settings → Database).
# Nothing here is a real value — <...> placeholders are filled in at run time, never hardcoded.
psql "$NEW_PROJECT_DB_URL" -v ON_ERROR_STOP=1 -f supabase/export/schema.sql
```

**Option B — `supabase/migrations/` (28 files, the project's own migration history, preferred if the new
project should keep a migration history matching how the schema evolved rather than one flat snapshot):**

```sh
supabase link --project-ref <NEW_PROJECT_REF>
supabase db push
```

Recommendation: **Option A for the first bootstrap** (it's the exact file already validated in the dry
run below), **Option B going forward** for any schema change made after the new project exists, so the
new project keeps accumulating its own proper migration history from that point on rather than staying a
single unversioned snapshot.

## 16.3 What schema.sql does NOT include (must be provisioned separately, in this order after 16.2)

| Step | What | Source |
|---|---|---|
| 1 | `pg_cron` + `pg_net` extension availability | Not installable via plain SQL on self-hosted Postgres — on Supabase, both are enabled per-project via the dashboard (Database → Extensions) or are already available by default depending on plan; confirm availability before relying on cron |
| 2 | Cron job definitions | `docs/CRON_MIGRATION_PLAN.md` — 6 jobs to recreate (not 7 — `ping-google-sitemap-daily` is recommended dropped), each needs the new project's URL + a new service-role JWT substituted in |
| 3 | Edge Function deployment | `supabase functions deploy <name>` per function in `supabase/functions/`, or `supabase functions deploy` for all 19 at once — code is already portable (see `EDGE_FUNCTIONS_INVENTORY.md`), **except `generate-ai-audit-report`, which needs its Lovable-gateway call replaced first** per `AI_DEPENDENCY_REPLACEMENT_PLAN.md` |
| 4 | `supabase/config.toml`'s `verify_jwt` declarations | Already in the repo, applies automatically on `supabase functions deploy` — but per `EDGE_FUNCTION_AUTH_MATRIX.md` §11.1, **3 functions need a `verify_jwt = false` line added before first deploy** (they're currently undeclared, which is fine on a project that predates the default but is a trap on a fresh one) |
| 5 | Secrets | `supabase secrets set <NAME>=<value>` per secret in `SUPABASE_MIGRATION_INVENTORY.md` §7.11 — values must come from their real source (Resend dashboard, Stripe dashboard, a newly chosen AI provider) or be freshly generated, never copied from the old project (they can't be exported anyway — Supabase never exposes secret values, even to project owners, once set) |
| 6 | Auth: Google OAuth provider | Dashboard-only, per `AUTH_INDEPENDENCE_PLAN.md` §13.5 — cannot be scripted from this repo |
| 7 | Storage bucket objects (file contents) | `schema.sql` creates the *bucket definitions* (step already covered in 16.2) but not the *files inside them* — object copy is a `DATA_MIGRATION_PLAN.md` §9.3 step 6 concern, done during actual data migration, not bootstrap |
| 8 | Production data | Explicitly excluded from bootstrap — see `DATA_MIGRATION_PLAN.md`. Bootstrap produces an empty-but-fully-structured project |

## 16.4 Reproducibility

Both options are idempotent-safe to describe (not yet re-tested for actual idempotency against a live
Supabase project, since none exists): Option A would fail loudly on a second run against a
non-empty project (every `CREATE TABLE`/`CREATE TYPE` in `schema.sql` is unqualified, no
`IF NOT EXISTS`), which is the correct behavior for a bootstrap script — it should only ever be run once,
against an empty project, not used as a repeatable sync tool. Option B (`supabase db push`) is
Supabase's own migration tracking and handles repeat runs correctly by design (only applies migrations
not yet recorded as applied).

## 16.5 Status

**PREPARED.** This document defines the reproducible procedure; §16.2's Option A was additionally
**executed against a local throwaway Postgres (not a real Supabase project) as a dry run** — see
`SCHEMA_DRY_RUN_RESULTS.md` for what that proved and what it didn't. Nothing in this section has touched
a real Supabase project, because none exists yet.
