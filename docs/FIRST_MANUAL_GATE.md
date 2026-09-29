# First Manual Gate — Determination (Section 22)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`.

## The two candidates

**A — Verify/remove Lovable GitHub write access.** Status: NOT STARTED/UNVERIFIED
(`docs/LOVABLE_GITHUB_WRITE_ACCESS_CHECK.md`).

**B — Create the new independent Supabase project.** Status: NOT STARTED
(`docs/SUPABASE_NEW_PROJECT_STATUS.md`).

## Reasoning (not a guess)

`docs/TARGET_ARCHITECTURE.md` already defines what gate A actually blocks: *"nothing else in this
document should be executed **against production**"* while it's open, and specifically calls out
"repointing env vars, cutting over the Stripe webhook, disconnecting Lovable Cloud" as the higher-stakes
steps it gates. Creating a **brand-new, empty** Supabase project touches nothing in production — it has
no relationship to GitHub's write permissions at all; GitHub access controls who can push code to this
repo, which has no bearing on Supabase's own project-creation flow (a separate account/dashboard
entirely). So gate A does not block gate B.

Conversely, **every piece of preparation work this session could possibly do without a live target has
now been done**: schema (inventoried + dry-run tested), auth plan, Stripe audit, AI replacement design,
cron plan, bootstrap procedure, env var matrix, the Zero-Lovable guard (actually implemented), and the
validation-tooling design. None of it can go further — none of it can become MIGRATED or VERIFIED instead
of PREPARED — without something to apply it *to*. That "something" is gate B, not gate A.

Gate A remains important and still open — it must close before **cutover** (repointing the live
frontend's env vars, disconnecting Lovable Cloud), which is far downstream of REPLICATE/CONFIGURE/TEST.
It does not need to close before REPLICATE can *start*.

## Determination

**The true next blocker is B: creating the independent Supabase project.** Gate A stays tracked as a
required, still-open, parallel item — it must close before CUT OVER, not before REPLICATE.
