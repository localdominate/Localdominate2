# MANUAL ACTION REQUIRED — CREATE INDEPENDENT SUPABASE (Sections 23/26)

Date: 2026-09-30. This is the single next blocking action, per `docs/FIRST_MANUAL_GATE.md`.

## Update — an empty project already existed, decision made

An org ("localdominate's Org", Free plan) and a project named `localdominate-prod`
(ref `crtcrbbuzummnkcpazvb`) already existed. Checked before building on it: dashboard shows **Healthy,
No repository connected, No migrations, No backups, 0 total requests** — genuinely empty, nothing was
migrated to it out-of-band. A second project, "localdominate's Project" (ap-northeast-2), also exists,
paused — not in use.

The one open issue: `localdominate-prod` is in **ap-southeast-1 (Singapore)**, not an EU region, which
matters for latency to the DACH customer base and for GDPR data residency once real customer PII lands
in it. **Decision (confirmed by Re): create a fresh project in Frankfurt instead of using the Singapore
one.** `localdominate-prod` is left as-is for now — not deleted, just not the target. The steps below are
updated accordingly; the org already exists, so step 4 (create an org) is no longer needed.

1. **Go to:** `https://supabase.com/dashboard/org/vrkxrohixwnyuvjmvdov` (the existing "localdominate's Org").
2. **Click:** "New project" from within that org — no need to create a new org, it already exists.
3. **Project name:** something that clearly reads as the real target and doesn't collide with the
   existing empty `localdominate-prod` (Singapore), e.g. `localdominate-prod-eu` or
   `localdominate-frankfurt`. Avoid reusing "Local Dominator Blueprint" (that's the Lovable project's own
   name).
4. **Organization:** already exists — "localdominate's Org". Nothing to create.
5. **Region: Frankfurt (`eu-central-1`)**, or whichever EU region Supabase lists as closest to Frankfurt
   if naming differs. The business is DACH-market local SEO (`localdominate.org`, German/Austrian/Swiss
   customers per `CLAUDE.md`), so an EU region minimizes latency for both site visitors and the admin
   dashboard, and keeps customer data (the PII-holding tables in `SUPABASE_MIGRATION_INVENTORY.md` §7.3)
   within the EU for GDPR-friendliness — consistent with the current project likely already being
   EU-hosted.
6. **Database password:** let Supabase generate a strong random one (don't hand-type something
   memorable) and save it in a password manager immediately — it's needed later for `pg_dump`/`psql`
   access during REPLICATE, but **do not send it to me in chat**, per the rule below.
7. **Pricing tier:** the **Free tier is fine to start** — enough to complete REPLICATE/CONFIGURE/TEST
   (schema apply, function deploy, cron setup, a rehearsal data migration against non-production
   volumes). **Upgrade to Pro before any real production cutover** — Pro adds daily backups and
   point-in-time recovery, which `DATA_MIGRATION_PLAN.md`'s backup/rollback requirement effectively
   assumes once real customer data (`customers`, `leads`, `partner_applications`,
   `questionnaire_responses`, `uploaded_assets`) actually lives there.
8. **Leave at default:** Auth settings, Database settings, connection pooling settings, API settings —
   none of these need touching at creation time. The schema bootstrap (`INDEPENDENT_SUPABASE_BOOTSTRAP.md`)
   handles the actual structure once the project exists.
9. **Do NOT enable/change yet:** don't configure a custom domain for the project, don't set up database
   branching, don't enable the Google OAuth provider yet (that's a later step, once
   `AUTH_INDEPENDENCE_PLAN.md`'s Google Cloud Console credentials are ready), and don't point
   `localdominate.org`'s DNS or the app's `.env` at it yet — this project should sit empty and unused by
   production until REPLICATE/CONFIGURE/TEST/PARALLEL VERIFY are all actually done.
10. **Send back to me:** the **Project Reference ID** (visible in the dashboard URL and in Project
    Settings → General — a short string like `abcdefghijklmnop`, not a secret) and which **region** you
    actually picked. That's enough for me to continue with the schema bootstrap.

**IMPORTANT — do not paste any of these into the chat, ever:** the database password, the service role
key, any Stripe secret, any OAuth client secret, or any other private API key. If a secret is needed for
a later step, I'll tell you exactly where to enter it (the Supabase dashboard's own Secrets page, or a
local `.env` file that never gets committed) — never here.
