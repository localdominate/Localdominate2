# Zero-Lovable Automated Guard (Section 19)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Script: `scripts/check-lovable.mjs`.
Wired into: `package.json` (`npm run check:lovable`) and `.github/workflows/checks.yml` (new step in the
`build` job, **blocking**, not `continue-on-error` — see §19.3 for why that's safe today).

## 19.1 What it checks

Scans only operational code — `src/`, `supabase/functions/`, `supabase/config.toml`, `vite.config.ts`,
`package.json` — never `docs/`, so historical migration documentation that mentions "Lovable" (which is
most of this migration's own output) never trips it. Detects:

- `@lovable.dev/*` package imports and `package.json` dependency declarations
- Direct calls to `ai.gateway.lovable.dev`
- Reads of the `LOVABLE_API_KEY` secret
- Use of the Lovable OAuth broker (`createLovableAuth`, `lovableAuth.*`)
- The `lovable-tagger` dev plugin
- References to Lovable's preview/hosting hosts (`lovableproject.com`, `lovable.app`)

## 19.2 Allowlist mechanism

Tested this run (verified by actually executing it, twice — see terminal output captured in this
session): as of today, 9 findings exist across `src/integrations/lovable/index.ts`,
`src/integrations/supabase/previewAuthStorage.ts`, `supabase/functions/generate-ai-audit-report/index.ts`,
`vite.config.ts`, and `package.json` — all 9 are exactly the dependencies already inventoried as ACTIVE in
`LOVABLE_FINAL_DEPENDENCY_GRAPH.md`, and all 9 are things the project's own hard rules say not to remove
yet (`CLAUDE.md` rule 5: "Don't remove Lovable pieces ... until the migration plan says so"). The script
hard-codes these exact `pattern-id:filepath` pairs in an `ALLOWLIST` set and reports them as
`[ALLOWLISTED]` rather than failing the build on them.

**The guard's actual job is to catch anything *beyond* this known set** — a future PR that adds a new
Lovable import, a new call to the AI gateway from a different function, a copy-pasted Lovable auth
snippet somewhere else. Any such addition shows as `[NOT ALLOWLISTED]` and fails the build immediately
(confirmed: deleting one allowlist entry during testing this round correctly flipped the script's exit
code from 0 to 1).

## 19.3 Why this is safe to make blocking today, unlike the lint step

The lint step is `continue-on-error: true` because it has 100 pre-existing, unrelated errors that aren't
this migration's job to fix. The Lovable guard is different: **it passes cleanly today** (0 unallowlisted
findings, confirmed by running it), because the allowlist was built from the actual current state, not
guessed. Making it blocking now means the very next PR that adds a stray Lovable reference gets caught
immediately, rather than waiting until "later" to turn the guard on.

## 19.4 `--strict` mode

`node scripts/check-lovable.mjs --strict` ignores the allowlist entirely and fails on all 9 current
findings. This is not wired into CI — it's there for the end of the migration: once every allowlisted
item has actually been removed (Lovable OAuth broker replaced per `AUTH_INDEPENDENCE_PLAN.md`,
`LOVABLE_API_KEY` replaced per `AI_DEPENDENCY_REPLACEMENT_PLAN.md`, `lovable-tagger` and
`previewAuthStorage.ts` dropped per the already-built `rebrand/localdominate-2.0-foundation` branch), the
`ALLOWLIST` set in the script should be emptied and the CI step switched to `--strict` as the permanent,
final-state gate. Until then, plain `npm run check:lovable` (allowlist-aware) is the right default.

## 19.5 Status

**IMPLEMENTED AND VERIFIED** — not just written, but actually executed against this codebase twice this
session (once catching a real gap in the first allowlist draft, once clean), and wired into both
`package.json` and CI. This is the one section-11-through-21 deliverable that is genuinely code, not just
documentation, and it has been run, not just described.
