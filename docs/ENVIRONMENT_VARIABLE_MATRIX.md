# Environment Variable Matrix (Section 18)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Source: `.env` (names only — grepped, values
never reproduced), `grep -r "import.meta.env\." src/`, `supabase/export/README.md`'s secrets list,
`supabase/config.toml`. Companion: `.env.example` (created this round, names only).

Classification key: **FRONTEND SAFE** (bundled into the client build, visible to any visitor — must never
hold a real secret) · **SERVER ONLY** (used inside an Edge Function, never sent to the browser) ·
**SECRET** (a credential — server-only by definition, called out separately for emphasis) · **LEGACY**
(declared/set but unused in current code) · **LOVABLE DEPENDENT** (tied to Lovable specifically, no
independent equivalent without a code/config change) · **REPLACEMENT REQUIRED** (must be swapped for an
independent-project value, not just copied)

| Variable | Purpose | Current owner/environment | Target environment | Frontend/Server | Secret? | Lovable dependency? | Migration action | Test |
|---|---|---|---|---|---|---|---|---|
| `VITE_SUPABASE_PROJECT_ID` | Supabase CLI/tooling project reference | `.env`, Lovable Cloud project `minijgyozgjuhqgkmilj` | New independent project's ref | Frontend build-time (not actually read via `import.meta.env` in `src/` — grep found zero runtime references; used by tooling/CLI context only) | No | No — just a value that happens to currently point at a Lovable-hosted project | **REPLACEMENT REQUIRED** — set to new project ref | Confirm `supabase` CLI commands target the right project |
| `VITE_SUPABASE_URL` | Supabase client init (`src/integrations/supabase/client.ts`, presumed) | `.env` | New project URL | **FRONTEND SAFE** — bundled into the client, meant to be public (this is how any Supabase client works) | No | No | **REPLACEMENT REQUIRED** | App loads, `supabase.auth.getSession()` succeeds against new project |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase client init | `.env` | New project's anon/publishable key | **FRONTEND SAFE** — Supabase's anon/publishable key is designed to be public; it authorizes nothing on its own without RLS, which is why "publishable" replaced the older "anon key" naming | No — not high-secrecy by Supabase's own model, but per this session's standing instruction, never reproduce its actual value regardless | No | **REPLACEMENT REQUIRED** | Same as above |
| `RESEND_API_KEY` | Transactional email sending (7 functions call Resend, per `EDGE_FUNCTIONS_INVENTORY.md`) | Lovable Cloud → Secrets | New project's secrets | SERVER ONLY | **SECRET** | No — Resend is already an independent service (per `DEPENDENCIES.md`'s external service map); only the *storage location* of the key is Lovable-managed today | REPLACEMENT REQUIRED — re-issue or reuse the existing Resend key, `supabase secrets set` on new project | Trigger any email-sending function, confirm delivery |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signature verification | Lovable Cloud → Secrets | New project's secrets | SERVER ONLY | **SECRET** | No — Stripe-issued, per-endpoint | **REPLACEMENT REQUIRED** — Stripe issues a *new* signing secret per webhook endpoint, so this cannot simply be copied even if the old value were exportable; a new endpoint pointed at the new project's function URL gets its own new secret | Send a signed test event, confirm signature verifies |
| `STRIPE_SECRET_KEY` | Declared, **unused in code** (confirmed by grep — nothing in `src/` or `supabase/functions/` reads it) | Lovable Cloud → Secrets | — | SERVER ONLY | **SECRET** | No | **LEGACY** — confirm with Markus/Re before deciding whether to carry it forward at all; if kept, treat as SECRET | N/A unless a future use is found |
| `INTERNAL_API_SECRET` | Declared, **unused in code** | Lovable Cloud → Secrets | — | SERVER ONLY | **SECRET** | No | **LEGACY** — same as above | N/A |
| `LOVABLE_API_KEY` | AI gateway access for `generate-ai-audit-report` | Lovable Cloud → Secrets, Lovable-issued | Does not carry forward | SERVER ONLY | **SECRET** | **LOVABLE DEPENDENT** — this is the one credential with no independent equivalent at all | Replace with `AI_PROVIDER_API_KEY` (see next row) — **REPLACEMENT REQUIRED**, and it's a code change, not just a value swap (see `AI_DEPENDENCY_REPLACEMENT_PLAN.md`) | Call `generate-ai-audit-report` post-replacement, confirm a report still generates |
| `AI_PROVIDER_API_KEY` *(new, proposed)* | Direct model-provider credential | Does not exist yet | New project's secrets | SERVER ONLY | **SECRET** | No | New — introduced as part of removing `LOVABLE_API_KEY` | Same as above |
| `AI_PROVIDER_BASE_URL` *(new, proposed)* | Configurable AI endpoint | Does not exist yet | New project's secrets (or a safe default in code) | SERVER ONLY | No (a URL, not a credential) | No | New | Same as above |
| `AI_PROVIDER_MODEL` *(new, proposed)* | Configurable model name | Does not exist yet | New project's secrets (or a safe default in code) | SERVER ONLY | No | No | New | Same as above |
| `SUPABASE_URL` *(implicit)* | Auto-injected by the Supabase Edge Functions runtime into every function (read via `Deno.env.get("SUPABASE_URL")` in `stripe-webhook`, likely others) | Auto-provided per-project by Supabase itself, not set manually anywhere | Auto-provided by the new project | SERVER ONLY | No | No | Nothing to migrate — this is automatic | N/A |
| `SUPABASE_SERVICE_ROLE_KEY` *(implicit)* | Auto-injected, used by every function needing elevated DB access | Auto-provided | Auto-provided by the new project | SERVER ONLY | **SECRET** (but never something to set manually — Supabase manages it) | No | Nothing to migrate | N/A |

## 18.1 Frontend/server boundary — confirmed clean

Grep of `import.meta.env.` across `src/` returns exactly `VITE_SUPABASE_URL` and
`VITE_SUPABASE_PUBLISHABLE_KEY` — no server-only secret is referenced from frontend code anywhere. This
matches the earlier finding in `STRIPE_INDEPENDENCE_AUDIT.md` that no Stripe key of any kind is present
in the frontend bundle (checkout uses static Payment Links, not an API call). **No secret currently
crosses the frontend/server boundary; the migration should keep it that way.**

## 18.2 `.env.example` created this round

`.env.example` now exists at the repo root (previously it did not) with the 3 frontend variables as
blank placeholders and the 5 server-side secret names listed as comments (server secrets don't belong in
`.env` at all — they're set via `supabase secrets set`, never read from a `.env` file by an Edge
Function — the comments in `.env.example` are documentation of *which secrets exist*, not a place to
actually put their values).
