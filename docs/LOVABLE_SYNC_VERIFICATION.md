# Lovable Git Auto-Sync — Verification Status

Date: 2026-09-30. Hard gate before creating any long-lived redesign branch (per
`LOVABLE_EXIT_PLAN.md`'s open question and the B0.5 freeze request).

## Classification: **NOT VERIFIED**

This cannot be confirmed from the repository/CLI alone. What follows is everything that *can*
be checked from here, what it shows, and exactly what still needs a human to check in the
Lovable and GitHub dashboards.

## What was inspected

1. **Git remotes** — single remote, `origin` → `https://github.com/localdominate/ejdhisidjs`
   (now redirects to `github.com/localdominate/Localdominate2` after the rename; no second
   remote pointing at any Lovable-hosted git service).
2. **Full commit history, all branches, with author identity:**

   | Date | Author | What |
   |---|---|---|
   | 2026-09-26 | `gpt-engineer-app[bot]` | "GEO-Optimierung zentral umgesetzt" |
   | 2026-09-27 (×4) | `gpt-engineer-app[bot]` | "Changes", "Removed badge, testimonials" |
   | 2026-09-27 | `Lovable <...lovable-dev[bot]...>` | "Add project README" |
   | 2026-09-27 onward | `Claude`, `learnkorean-spec` (Re), `localdominate` (`partner@localdominate.org`, Markus's PR-merge identity) | all subsequent commits |

   **No `gpt-engineer-app[bot]` or `lovable-dev[bot]` commit exists after 2026-09-27.**
   `gpt-engineer-app[bot]` is the bot identity Lovable's editor commits under when it pushes
   directly to a connected GitHub repo — its absence since is consistent with sync being off,
   but consistent is not the same as verified: it is equally explained by nobody having opened
   the Lovable editor for this project since 2026-09-27, with the GitHub App connection still
   live and capable of pushing the moment someone does.
3. **`.github/workflows/`** — one file, `checks.yml` (this project's own CI, added 2026-09-28).
   No Lovable-authored workflow, no webhook-dispatch workflow.
4. **Searched the repo for any Lovable webhook/sync configuration file** — none found (the only
   hits for "lovable" in `.yml`/`.yaml`/`.json` files are unrelated package-lock entries).
5. **No `gh` CLI / GitHub API token available in this environment** — so GitHub repo-level
   settings that only the API or web UI expose (installed GitHub Apps, their permissions,
   webhook list, branch protection) **could not be checked from here at all**. This is the
   actual gap, not the commit history.

## What this session cannot see (and why it's not "disabled")

Lovable's Git integration, when connected, is a **GitHub App installation** with push access —
it does not require a workflow file, a webhook file, or any commit in the repo itself to exist
or to keep working. Its on/off state lives entirely in two places this session has no access to:

- **Lovable's own project dashboard** → Settings → Git (shows "Connected to
  `localdominate/Localdominate2`" or "Not connected", and who can push).
- **GitHub** → repository → Settings → Integrations / Installed GitHub Apps (would show
  "Lovable" or "GPT Engineer" listed if the App is still installed with access to this repo).

Neither was checked, because neither is reachable from this session (no Lovable login, no
GitHub Settings API scope here).

## Two separate questions this document must not blur

The phrase "Lovable dependency" covers two unrelated risks with **different blockers**. Keeping
"NOT VERIFIED" as the status of the first must not be read as blocking the second.

### CODE SAFETY BLOCKER — could Lovable still modify GitHub?

This is what this document classifies as **NOT VERIFIED**. It is a hard gate on repository
hygiene: if the Lovable GitHub App can still push, then any long-lived branch (redesign or
otherwise) risks divergence, silent overwrite, or merge conflicts with something Lovable's
editor pushes independently. **This blocks starting a long-lived static-only branch with
confidence** until checked — not because static work is unsafe in itself, but because working
for days on a branch that a third-party integration might also be writing to is the actual risk.

### BACKEND MIGRATION — Lovable Cloud / Supabase / edge functions still exist

This is fully verified and **known**, not uncertain: `STATUS_2026-09-30.md` §1 already confirms
Lovable Cloud (Supabase project `minijgyozgjuhqgkmilj`), all 19 edge functions, and
`LOVABLE_API_KEY` are unchanged and still the live backend. There is nothing to "verify" here —
it's a known, tracked, open item (`LOVABLE_EXIT_PLAN.md`'s remaining-gated-items list), not an
unknown.

### The distinction that matters for B1

**Backend migration status does NOT block a static-only B1** (Design Foundation + a new Home
page with no Supabase reads/writes, per the Experience Architecture contract). Nothing about an
unmigrated database, unmigrated edge functions, or the still-active `stripe-webhook` prevents
building or previewing static pages.

**The CODE SAFETY BLOCKER (auto-sync) is what actually gates starting that branch** — not
because of what the branch contains, but because of what else might be pushed to the same repo
while it's open. This is the one item in this document that must be resolved, or explicitly
risk-accepted with the mitigation below, before B1's branch is opened.

## Exact manual check needed (for Markus or Re)

1. Open the Lovable project ("Local Dominator Blueprint") → **Settings → Git**. Confirm whether
   it still shows a connected GitHub repository, and if so, which one (`ejdhisidjs` /
   `Localdominate2`, or something else).
2. On GitHub, open `https://github.com/localdominate/Localdominate2/settings/installations`
   (repo Settings → Integrations, or Organization Settings → GitHub Apps if the repo is under an
   org). Look for **Lovable** or **GPT Engineer** in the installed-apps list. If present, note
   whether it has write/push access to this specific repository.
3. If either check shows an active connection: either disconnect it (Lovable side is the
   cleaner place — "Disconnect repository" in Lovable's Git settings) **or** treat every
   long-lived branch as high-risk and rebase/merge in small increments until it's confirmed off,
   per the Exit Plan's existing fallback recommendation.
4. Report back which of the two states it actually is, so this document can be updated from
   "NOT VERIFIED" to "VERIFIED DISABLED" (or "VERIFIED ACTIVE — mitigation in place").

## Standing recommendation until verified

Treat this as **NOT VERIFIED = assume it could still be active**. Concretely:

- Any new long-lived branch (e.g. a future design-foundation/B1 branch) should be rebased
  against `main` frequently rather than left to diverge for a long period.
- Before merging any such branch, re-check `git log --all` for a `gpt-engineer-app[bot]` or
  `lovable-dev[bot]` commit that landed on `main` in the meantime — that would be direct
  evidence sync is still live and needs resolving before merge, not after.
