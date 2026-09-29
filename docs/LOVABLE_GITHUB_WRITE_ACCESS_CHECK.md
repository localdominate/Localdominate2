# GitHub Write-Control Gate — Exact Manual Steps

Date: 2026-09-30. This is the first infrastructure gate in the Lovable exit (per
`TARGET_ARCHITECTURE.md`). **Cannot be verified from this session** — no `gh` CLI, no GitHub
API token, no Lovable login available here. What follows is what was checked from the
repository alone, and the exact steps for a human to close this gate.

## What this session verified (repository-only evidence)

- Full commit history across all branches shows no `gpt-engineer-app[bot]` or
  `lovable-dev[bot]` commit after **2026-09-27**. Every commit since is `Claude`,
  `learnkorean-spec` (Re), or `localdominate` (`partner@localdominate.org`, Markus's merge
  identity).
- No workflow file, webhook config, or sync script referencing Lovable exists in
  `.github/workflows/` (only this project's own `checks.yml`).
- This is **consistent with** sync being off, but is not proof — a GitHub App's write access
  does not require any file in the repo to exist or run; its on/off state lives entirely in
  two dashboards this session cannot reach.

## Final required state

**LOVABLE CANNOT WRITE TO THE LOCALDOMINATE REPOSITORY.** Not yet confirmed either way.

## Exact steps (for Markus or Re — pick whichever accounts have access)

### A. Check GitHub's side

1. Go to `https://github.com/localdominate/Localdominate2/settings/installations` (the repo
   moved from `ejdhisidjs` to `Localdominate2` on 2026-09-29; use the new URL). If that path
   404s because installations are managed at the organization level instead, go to
   `https://github.com/organizations/localdominate/settings/installations` instead.
2. Look through the list of installed GitHub Apps for **Lovable** or **GPT Engineer** (the bot
   identity seen in the old commits is `gpt-engineer-app[bot]` — Lovable's underlying engine).
3. If found, open it and check **"Repository access"**: does it say "All repositories" or
   "Only select repositories" with `Localdominate2` listed? Either means it currently has
   access. Note the exact permissions shown (Lovable typically needs `contents: write`,
   `pull_requests: write` to sync).
4. If **not found** in the list at all: that's the strongest evidence available that write
   access is already revoked — record this as **VERIFIED DISABLED** and update
   `LOVABLE_FINAL_DEPENDENCY_GRAPH.md` §2 accordingly.

### B. Check Lovable's side (do this even if step A found nothing — the two can be out of sync)

1. Open the Lovable project ("Local Dominator Blueprint",
   `5ee1f856-cb97-4dec-8883-fec126ed4ac6`) in the Lovable dashboard.
2. Go to **Project Settings → Git** (or **Integrations**, depending on Lovable's current menu
   naming).
3. Check whether it shows "Connected to `localdominate/Localdominate2`" (or the old
   `ejdhisidjs` name) or "Not connected".
4. If connected: use Lovable's own **"Disconnect repository"** action here — this is the
   cleaner side to disconnect from, since it removes Lovable's *intent* to sync, not just its
   *permission* (removing only the GitHub App doesn't stop Lovable from trying and failing
   loudly, or from re-prompting to reconnect).

### C. Close the loop

5. If either A or B showed an active connection and you disconnected it: **re-run step A** a
   few minutes later to confirm the GitHub Apps list no longer shows it.
6. Report back which of these it actually was:
   - **VERIFIED DISABLED** — neither side shows a connection (or you disconnected it and
     re-verified) → this gate is closed, safe to proceed with backend migration work.
   - **VERIFIED ACTIVE** — a connection existed → note whether you disconnected it (then it
     becomes VERIFIED DISABLED per the re-check) or are choosing to leave it for now (then all
     migration branches must use the rebase-frequently mitigation already described in
     `LOVABLE_SYNC_VERIFICATION.md`, and no destructive step in the migration sequence should
     proceed until it's actually closed).

## What this gate blocks vs. doesn't

Per the CODE SAFETY vs. BACKEND MIGRATION distinction already established: this gate blocks
opening any *long-lived* branch with confidence and blocks the later, higher-stakes migration
steps (repointing env vars, cutting over the Stripe webhook, disconnecting Lovable Cloud). It
does **not** block read-only documentation work (like this batch) or short-lived, easily
rebased work.
