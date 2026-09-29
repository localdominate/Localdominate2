# Independent Supabase Project — Current Status (Section 8)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`.

## 8.1 Does an independent project exist?

**No.** Checked directly, not assumed:

- `.env` is byte-identical across `main`, `rebrand/localdominate-2.0-foundation`, and this branch —
  all three point `VITE_SUPABASE_PROJECT_ID` / `VITE_SUPABASE_URL` at `minijgyozgjuhqgkmilj` (Lovable
  Cloud). No second project ref appears anywhere in the repo, on any branch, in any `.env*` file, or in
  `supabase/config.toml`.
- `docs/MIGRATION_PLAN.md` itself describes creating a new Supabase project, re-issuing secrets, and
  cutting over `.env` as steps **2.2, 2.3, 2.6, 2.7** — i.e. its own text treats these as not-yet-done
  future work, not completed history.
- No Supabase project-creation record, new `project_id`, or second set of migration/export artifacts
  exists anywhere in the repo.

This directly contradicts any assumption that "there has previously been work to create/move the
schema to a new Supabase project" resulted in an actual project — what exists is the **plan** to do so
(`MIGRATION_PLAN.md`) and the **inventory** of what would need to move (`SUPABASE_MIGRATION_INVENTORY.md`,
this branch). No migration has been executed.

## 8.2 Layer matrix

| Layer | Old / Lovable | New Independent | Verified? | Gap |
|---|---|---|---|---|
| Schema (tables/enums/views/functions/triggers/extensions) | Full schema exists in `minijgyozgjuhqgkmilj`, exported to `supabase/export/schema.sql` | Does not exist | N/A — nothing to verify | Entire schema must be (re)applied to a new project via `supabase/migrations/` (28 files) or the export |
| Data (~7,370 rows) | Live in `minijgyozgjuhqgkmilj` | Does not exist | N/A | Full data migration required — see `DATA_MIGRATION_PLAN.md` |
| Auth (1 user, email/password + Google OAuth) | Live, Google OAuth brokered via Lovable | Does not exist | N/A | User(s) must be recreated or migrated; Google OAuth must be reconfigured natively (dashboard-only work, not portable via code — see inventory §7.10) |
| Storage (2 buckets: `customer-uploads` private, `downloads` public) | Live in `minijgyozgjuhqgkmilj` | Does not exist | N/A | Buckets + policies must be recreated; objects must be copied |
| RLS (63 policies across 24 tables) | Live, defined in `schema.sql` | Does not exist | N/A | Reapply from `schema.sql` — mechanical once the schema exists, but must be tested (see `DATA_MIGRATION_PLAN.md` validation) |
| Functions (`has_role`, `update_updated_at_column`) | Live | Does not exist | N/A | Reapply from `schema.sql` |
| Edge Functions (19) | Deployed to `minijgyozgjuhqgkmilj` | Not deployed anywhere else | N/A | Code exists in repo (portable); must be deployed to new project + secrets reissued — see `EDGE_FUNCTIONS_INVENTORY.md` |
| Secrets (5 named) | Set in Lovable Cloud → Secrets, values not exportable by us | Do not exist | N/A | Must be re-obtained from source (Resend dashboard, Stripe dashboard) or freshly generated (`INTERNAL_API_SECRET` if kept); `LOVABLE_API_KEY` has no independent equivalent and must be replaced with a direct AI-provider key |
| Cron (7 `pg_cron` jobs) | Live, defined in `cron.sql` (bearer tokens redacted at export) | Does not exist | N/A | Must be redefined with the new project's URL + a new service-role token; `ping-google-sitemap-daily` should be dropped rather than replicated (dead endpoint, see inventory §7.9) |
| Stripe (webhook target) | Points at `minijgyozgjuhqgkmilj`'s `stripe-webhook` function (Stripe dashboard config, not in repo) | Not configured | N/A — cannot verify from repo | Stripe dashboard webhook target must be re-pointed at the new project's function URL as part of cutover; whoever holds Stripe dashboard access must do this, not this session |
| Google OAuth (admin login) | Brokered via Lovable (`@lovable.dev/cloud-auth-js`) | Native swap **already built** on unmerged branch `rebrand/localdominate-2.0-foundation` (per `LOVABLE_FINAL_DEPENDENCY_GRAPH.md` §6) | Code exists, not deployed/tested against a real project | Needs the branch ported once a new project exists, then a real OAuth-consent-screen test |

## 8.3 What this means for the required sequence

Per `TARGET_ARCHITECTURE.md`'s DISCOVER → DOCUMENT → BACK UP → REPLICATE → CONFIGURE → TEST → PARALLEL
VERIFY → CUT OVER → MONITOR → DISCONNECT sequence: this session's work through today covers DISCOVER and
DOCUMENT only. BACKUP already exists as a private, out-of-repo artifact
(`LocalDominate-DB-backup-2026-09-28.zip`, per `supabase/export/README.md`) but has not been independently
re-verified this session. **REPLICATE has not started** — there is nothing yet to configure, test, or
cut over. This matches the "Optional Next Step" framing already on record: everything above is
documentation, no execution.
