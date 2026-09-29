# AI Dependency Replacement Plan — `generate-ai-audit-report` (Section 14)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Source: full read of
`supabase/functions/generate-ai-audit-report/index.ts` (only caller of `LOVABLE_API_KEY` in the repo —
confirmed by grep, matching `DEPENDENCIES.md` L7).

## 14.1 What `LOVABLE_API_KEY` currently does — precisely

The function is a single `Deno.serve` handler:
1. Reads `LOVABLE_API_KEY` from env; 500s immediately if absent.
2. Accepts a JSON payload (business name, city, category, an AI-visibility score breakdown, and a
   `language` of `de`/`en`/`ar`) with minimal field-presence validation.
3. Builds a fully German/English/Arabic prompt (three hand-written prompt templates, no templating
   library) from that payload.
4. Sends one `fetch()` call to `https://ai.gateway.lovable.dev/v1/chat/completions` — an **OpenAI-
   compatible chat-completions endpoint that Lovable operates as a proxy in front of real model
   providers** — with `Authorization: Bearer ${LOVABLE_API_KEY}`, model `"google/gemini-3-flash-preview"`,
   a system + user message pair.
5. Handles three response shapes explicitly: HTTP 429 (rate limit) → friendly German error message
   regardless of requested language; HTTP 402 (Lovable's own AI-credits-exhausted signal) → friendly
   German error; any other non-OK → generic `gateway_error`; success → extracts
   `data.choices[0].message.content` and returns it as `{ report, language }`.

So `LOVABLE_API_KEY` is purely a **model-access credential for Lovable's AI gateway** — the function has
no other Lovable dependency (no `@lovable.dev/*` import, no Lovable-specific request/response shape
beyond the OpenAI-compatible chat format, which is an industry-standard shape most providers also speak).
This makes it a comparatively easy dependency to replace: the *prompting and response-parsing logic*
already assumes an OpenAI-compatible API, which is either what the direct provider offers natively, or
what a thin adapter can produce.

## 14.2 Independent replacement design

**Recommended approach: swap the gateway URL, auth header, and model string; keep everything else.**

```ts
// Before (Lovable):
fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
  headers: { Authorization: `Bearer ${LOVABLE_API_KEY}` },
  body: JSON.stringify({ model: "google/gemini-3-flash-preview", messages: [...] }),
});

// After (direct provider, OpenAI-compatible shape preserved):
fetch(Deno.env.get("AI_PROVIDER_BASE_URL") ?? DEFAULT_BASE_URL, {
  headers: { Authorization: `Bearer ${Deno.env.get("AI_PROVIDER_API_KEY")}` },
  body: JSON.stringify({ model: Deno.env.get("AI_PROVIDER_MODEL") ?? DEFAULT_MODEL, messages: [...] }),
});
```

This preserves the existing functional contract (`{ report, language }` response shape; same 3 prompt
templates; same error taxonomy) while removing the Lovable dependency entirely. Concretely:

| Requirement | How this design meets it |
|---|---|
| No Lovable API | `ai.gateway.lovable.dev` is removed entirely; direct provider URL used instead |
| Server-side secrets only | `AI_PROVIDER_API_KEY` stays an Edge Function secret (Deno.env), never sent to or read by the frontend — the frontend already only ever calls `generate-ai-audit-report` itself, never the AI gateway directly, so this is unchanged |
| Provider abstraction where practical | Base URL + model are both env-configurable (`AI_PROVIDER_BASE_URL`, `AI_PROVIDER_MODEL`), so switching providers later (Google's own Gemini API, OpenAI, Anthropic via an OpenAI-compat shim, OpenRouter, etc.) is a secret/env change, not a code change, **as long as the chosen provider speaks the OpenAI chat-completions shape** — most do, including Google's own `generativelanguage.googleapis.com` via its OpenAI-compatible endpoint, which would be the most direct swap since the current model is already a Gemini model |
| Avoid vendor lock-in | Same point — the adapter boundary is the `fetch()` call + response parsing, not scattered through the function |
| Preserve functional contract | Response shape (`{ report, language }`), error taxonomy (429/402/generic), and all 3 prompt templates stay byte-identical |
| Error handling | Already present (429/402/other) — needs one addition: a distinct handled case for "provider unreachable / network error," which the current `catch` block already covers generically via `internal_error`, so no change strictly required, but worth a named case if the new provider's failure modes differ from Lovable's |
| Timeout handling | **Not present today** — the current `fetch()` has no `AbortController`/timeout, so a slow gateway response hangs the function until Supabase's own platform timeout. This is a genuine gap to close during replacement, not something to carry forward: wrap the `fetch()` with `AbortSignal.timeout(15_000)` (or similar) and return a `timeout` error class distinct from `gateway_error` |
| Logging without sensitive user content | Current logging (`console.error("[generate-ai-audit-report] gateway error", ...)`) logs status codes and gateway error text, not the business's audit data or the generated report — already compliant; keep as-is |
| Cost protection | **Not present today** — no rate limiting, no per-IP/per-session cap, and per §11 this function is called anonymously (`verify_jwt=false` required to preserve current behavior). Combined, this is a real cost-abuse surface once billed directly to a chosen provider instead of Lovable's credits. Recommended addition: a lightweight per-IP or per-session request cap (e.g. via a Supabase table keyed on a hashed IP + rolling window, checked before the model call) — this is new functionality, not a behavior change, so it doesn't conflict with "preserve functional contract," but it should be called out to Markus/Re as a decision point, not silently added |
| Configurable model | `AI_PROVIDER_MODEL` env var, defaulting to a value chosen when the real provider is picked |

## 14.3 What this document does NOT do

Per instruction, no AI key is exposed to frontend code (there is none to expose — confirmed above), and
**no code change has been activated in production**. The adapter shown in §14.2 is a design, not a diff
applied to `supabase/functions/generate-ai-audit-report/index.ts` — writing and testing the actual
replacement is reasonable to do as isolated preparation (it touches only this one function, has no
production dependency until deployed with real secrets), but doing so was deferred this round to keep
this batch documentation-only and consistent with the rest of this session's DISCOVER/DOCUMENT-stage
work. If useful, implementing it next is low-risk and self-contained.

## 14.4 Provider decision — not made here

Which actual provider to use (Google's own Gemini API directly, OpenAI, Anthropic, OpenRouter as a
multi-provider proxy) is a product/cost decision for Markus/Re, not a technical one this document should
resolve. The design in §14.2 works with any of them as long as they expose (or are adapted to expose) an
OpenAI-compatible chat-completions endpoint, which is true of all four options listed.
