# B1 Technical Scope — Design Foundation + Home

Date: 2026-09-30. B0.5 freeze deliverable. Defines exactly what B1 is allowed to touch, once
approved. **B1 has not been approved and has not started.** This document is the boundary B1
must respect when it does.

> Note: the instruction defining this scope was cut off mid-sentence at "unless" (item §13,
> final line). The allowed/forbidden lists below are complete as given; the trailing "unless" —
> likely introducing a narrow exception process for touching a forbidden item with explicit
> sign-off — is written as a general rule at the end of this document rather than guessed
> verbatim. Confirm or correct if a specific exception was intended.

## B1 MAY modify / create

- `tailwind.config.ts` — new design tokens (V4 palette, type scale, spacing) additively; existing
  token usage elsewhere in the app (admin dashboards, legal pages, other landers) must keep
  rendering correctly, so old tokens are not deleted in B1, only added to.
- New font loading (Instrument Serif, Geist, IBM Plex Mono) — additive `<link>`/`@font-face`,
  does not remove the existing Inter/Cormorant Garamond/Lato loading used elsewhere.
- Shared navigation component (new, for the 8-experience redesign) — built as a new component,
  not a rewrite of the existing site's `StickyHeader`/nav used by the 200+ other routes.
- Shared CTA primitives (new).
- System/node primitives — the Living Growth System building block (`Node`, `Connection`,
  `Activation` state machine per `DESIGN_SYSTEM_PLAN.md` §B).
- Motion primitives (Framer Motion/GSAP wrappers implementing the signature motion character).
- Accessibility primitives (focus-visible treatment, reduced-motion hooks, skip links as needed).
- `/design-system` — new internal preview route, `noindex`, for sanity-checking tokens/primitives
  in isolation (same pattern as `/preview/home-v2`'s noindex treatment).
- The real Home page implementation, per `HOME_IMPLEMENTATION_CONTRACT.md` — as a **new** route,
  not yet swapped in for the live `/`.
- An internal preview route for the new Home (e.g. `/preview/home-v3` or similar), `noindex`,
  unlinked from nav/sitemap, following the exact pattern already used for
  `/preview/home-v2` (see `App.tsx`) — so the live `/` route, its canonical, title, meta
  description, H1, and JSON-LD remain **completely untouched** until Markus explicitly approves
  swapping it in, per Hard Rule #1.
- Tests relevant to B1 (if a test runner is introduced for the new primitives — note the project
  currently has none per `TAKEOVER_AUDIT.md` §7; introducing one is in-scope for B1's own code
  only, not retrofitted onto the other 200+ existing routes).

## B1 MUST NOT touch

- **Production articles** — none of the 188 (153 live+md, 5 live-only, 30 backlog) may be
  edited, moved, or have their component touched.
- **Article slugs** — no slug, canonical, route path, meta title/description, or JSON-LD for any
  existing route changes.
- **Supabase production data** — no reads, no writes, no schema changes, no migrations against
  `minijgyozgjuhqgkmilj`.
- **Stripe logic** — `lib/stripe.ts`, checkout components, `stripe-webhook` function — untouched.
  Live payments run through this; B1 is a static-only batch.
- **Edge functions** — none of the 19 redeployed, modified, or reconfigured as part of B1.
- **Admin authentication** — the Lovable OAuth broker swap (already done on the unmerged rebrand
  branch) is explicitly **not** part of B1; B1 does not touch `AdminLoginScreen.tsx` or auth flow
  at all.
- **Production forms** — lead forms, partner application, campsite check, onboarding — untouched,
  no shared-component refactor that would risk their behavior.
- **Programmatic SEO routes** — the city×industry landers (`hairdressers-munich`, etc.) and niche
  landers (`restaurant-marketing`, etc.) are out of scope per `LOCALDOMINATE_REBUILD_PLAN.md`'s
  own decision; B1 does not touch, restyle, or refactor them, even incidentally via a shared
  component change (e.g. changing the shared `Footer`/`StickyHeader` in place, rather than
  building new nav/footer components alongside them, would violate this — hence "new," not
  "modified," in the MAY list above).
- **`main`** directly — B1 happens on its own branch (recommend a fresh branch off current `main`
  rather than resuming `redesign/dark-lime-2026`, since that branch's one commit is the rejected
  `/preview/home-v2` draft — see `HOME_IMPLEMENTATION_CONTRACT.md`'s audit verdict) and does not
  merge without explicit approval, per the standing branch-strategy rule already in
  `CLAUDE.md`/`LOCALDOMINATE_REBUILD_PLAN.md`.
- **`rebrand/localdominate-2.0-foundation`** — not merged, not built on top of, until its own
  open item (Lovable sync verification) is resolved per `LOVABLE_SYNC_VERIFICATION.md`.

## Standing exception rule

Nothing in the MUST-NOT list may be touched in B1 without a separate, explicit, written approval
naming the specific item and the specific reason — the same standard already set by Hard Rule #1
in `CLAUDE.md` for SEO-affecting changes. B1's own approval (when given) authorizes only the MAY
list above; it does not implicitly extend to anything in the MUST-NOT list, however small the
change might seem (e.g. "just fixing one typo in an article" while working nearby is still an
article edit and still requires its own explicit go-ahead).

## Gate before B1 opens

Per `LOVABLE_SYNC_VERIFICATION.md`: the CODE SAFETY BLOCKER (Lovable Git auto-sync, currently
NOT VERIFIED) should be resolved, or explicitly risk-accepted with the rebase-frequently
mitigation, before B1's branch is opened — this is a repository-hygiene gate, not a content or
backend gate, and is independent of Supabase/backend migration status (which does not block B1).
