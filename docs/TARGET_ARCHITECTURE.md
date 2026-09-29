# Target Architecture — Post Lovable-Exit

Date: 2026-09-30. Companion to `LOVABLE_FINAL_DEPENDENCY_GRAPH.md`. Describes the intended
end-state only — nothing here is built yet beyond what the graph already marks as MIGRATED/
VERIFIED INDEPENDENT.

```
DEVELOPMENT
  Claude Code / local development
        ↓
SOURCE CONTROL
  GitHub (sole canonical source of truth — Lovable write access revoked)
        ↓
CI/CD
  GitHub Actions (already exists: .github/workflows/checks.yml — build, typecheck, lint, SEO regression)
        ↓
FRONTEND
  Netlify  →  localdominate.org
  (ACHIEVED — see dependency graph §1)

BACKEND
  Application  →  independent Supabase project
  (NOT: Application → Lovable → Supabase)

PAYMENTS
  Frontend/server flow → independent Supabase Edge Function (stripe-webhook)
        → Stripe → independent Supabase
  (NOT: → Lovable Cloud's stripe-webhook)

AUTH
  Admin → native Supabase Auth / Google OAuth directly
  (NOT: Admin → Lovable OAuth broker)
  (Already built on the unmerged rebrand branch — see graph §6)

AI SERVICES
  Application → explicit independent AI provider/API (key of our own choosing)
  (NOT: Application → LOVABLE_API_KEY → Lovable AI Gateway)
```

## What "done" means

Every row in `LOVABLE_FINAL_DEPENDENCY_GRAPH.md`'s summary table reads **VERIFIED INDEPENDENT**
or **REMOVED**. Not before. In particular:

- Git write access (graph §2) is the **first gate** — nothing else in this document should be
  executed against production while it remains ACTIVE/unverified, per the required sequence
  (Discover → Document → Backup → Replicate → Configure → Test → Parallel Verify → Cut Over →
  Monitor → Only Then Disconnect Lovable).
- Backend replication (graph §3–5, the highest-stakes rows) must go through a full parallel-run
  and verification before any cutover, not a "looks like it works" spot check.
- This document does not authorize starting Replicate/Configure/Test for the backend — it
  defines the shape of the end-state so that when those steps are authorized, everyone is
  building toward the same target.
