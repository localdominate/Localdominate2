# LOVABLE EXIT — Master Checklist

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Root-level by design — this is the one file
meant to answer "where do we stand" at a glance, without opening `docs/`.

Statuses: **NOT STARTED** · **PREPARED** · **MIGRATED** · **VERIFIED** · **SAFE TO REMOVE** · **REMOVED**

**PREPARED ≠ MIGRATED. MIGRATED ≠ VERIFIED.** A row only advances one stage at a time, and only on real
evidence (a document, a test result, a dashboard check) — not on "should be fine."

| Area | Status | Evidence / detail |
|---|---|---|
| **Git** — repo on GitHub, independent of Lovable hosting | MIGRATED | Repo lives at `github.com/localdominate/Localdominate2` (renamed from `ejdhisidjs` 2026-09-29) |
| **Git** — Lovable write access to the repo revoked | **NOT STARTED / UNVERIFIED** | `docs/LOVABLE_GITHUB_WRITE_ACCESS_CHECK.md` — no bot commits since 2026-09-27 (suggestive, not proof); manual GitHub Installed-Apps + Lovable Project-Settings check still outstanding |
| **Hosting** — frontend served independently of Lovable | VERIFIED | Netlify + IONOS DNS, migrated and confirmed live earlier this engagement (per `LOVABLE_FINAL_DEPENDENCY_GRAPH.md` §1) |
| **Supabase schema** | PREPARED | `docs/SUPABASE_MIGRATION_INVENTORY.md` (full inventory) + `docs/SCHEMA_DRY_RUN_RESULTS.md` (real local execution test, clean) + `docs/INDEPENDENT_SUPABASE_BOOTSTRAP.md` (apply procedure) — not yet applied to any real independent project, because none exists |
| **Supabase data** (~7,370 rows) | NOT STARTED | `docs/DATA_MIGRATION_PLAN.md` — strategy only; a fresh backup + test restore is the first actual step, not yet done |
| **Auth** (admin login) | PREPARED (partially MIGRATED on an unmerged branch) | Email/password already Lovable-independent. Google OAuth swap already coded on `rebrand/localdominate-2.0-foundation` (unmerged) — see `docs/AUTH_INDEPENDENCE_PLAN.md`. Google OAuth provider config on a new project is dashboard-only, NOT STARTED |
| **Storage** (2 buckets) | PREPARED | Bucket + policy definitions included in the schema bootstrap; object copy step defined in `docs/DATA_MIGRATION_PLAN.md` §9.3 step 6, not executed |
| **Edge Functions** (19) | PREPARED | `docs/EDGE_FUNCTIONS_INVENTORY.md`, `docs/EDGE_FUNCTION_AUTH_MATRIX.md` — 18 of 19 are portable as-is; `generate-ai-audit-report` needs a code change first (see AI row below) |
| **Stripe** | PREPARED (audit only) | `docs/STRIPE_INDEPENDENCE_AUDIT.md` — architecture fully traced; production status explicitly UNVERIFIED (no dashboard access); webhook re-pointing is a CUT OVER-time step |
| **AI** (`LOVABLE_API_KEY` → independent provider) | PREPARED (design only) | `docs/AI_DEPENDENCY_REPLACEMENT_PLAN.md` — adapter design complete, not implemented in code, provider not yet chosen |
| **Cron** (7 jobs) | PREPARED | `docs/CRON_MIGRATION_PLAN.md` — 6 to migrate, 1 (`ping-google-sitemap-daily`) recommended dropped as dead functionality |
| **Environment variables** | PREPARED | `docs/ENVIRONMENT_VARIABLE_MATRIX.md` + `.env.example` (created this round, names only) |
| **Zero-Lovable guard** | **IMPLEMENTED AND VERIFIED** | `scripts/check-lovable.mjs`, wired into `npm run check:lovable` and CI (`checks.yml`), actually executed twice this session — the one item in this checklist that is real, tested code rather than a document |
| **Migration validation tooling** | PREPARED (design only) | `docs/MIGRATION_VALIDATION_PLAN.md` — script not yet written, needs a second real project to test against |
| **Articles / content** | VERIFIED (as a count), untouched (correctly) | 188 canonical articles per `docs/CONTENT_SOURCE_MAP.md` — no article has been modified by any step of this migration, per the standing rule not to |
| **SEO** | VERIFIED (regression harness exists and runs in CI) | `docs/SEO_BASELINE.md`, `scripts/seo-check.mjs`, CI job `seo`/`seo-static` — no SEO-affecting change has been made by this migration; hard rule 1 (never change URL/title/meta/canonical without approval) has not been touched |
| **Development environment** (local dev independent of Lovable) | MIGRATED | `npm install` (public registry) documented as working outside Lovable in `docs/TAKEOVER_AUDIT.md`; `bun.lock`'s Lovable-private-registry dependency remains but is bypassable (rule 5 — not yet removed, deliberately) |
| **Deployment** (CI/CD independent of Lovable) | MIGRATED | `.github/workflows/checks.yml` — build/typecheck/lint/SEO regression run on every PR via GitHub Actions, no Lovable involvement |

## Legend reminder

A row reading MIGRATED does not mean VERIFIED unless the evidence column says so explicitly. Where this
checklist says "PREPARED," the corresponding `docs/*.md` file is the actual source of truth for exactly
what was prepared and what remains.
