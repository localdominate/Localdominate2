# LocalDominate 2.0 — Rebuild Plan

Date: 2026-09-29
Governs the rebuild described in the LocalDominate 2.0 master brief (brand, UX, and the eight signature experiences), scoped against this repository's actual state. Branch: `rebrand/localdominate-2.0-foundation` (off `main` @ `ee4e048`).

## Repository state (Phase 0 audit results)

- **Routes:** 214 `<Route>` entries in `src/App.tsx` — the existing site is far larger than the 8 primary experiences the brief targets. Most are programmatic-SEO pages (city × industry combinations: `hairdressers-munich`, `plumbers-berlin`, etc.), niche landing pages (`restaurant-marketing`, `handwerker-marketing`, ...), 14 admin/analytics dashboards, and the article routes.
- **Articles:** 208 entries in `src/data/blogArticles.ts`, 154 mirrored markdown files in `public/blog-md/` (a gap between the two worth investigating — some articles may not have a static markdown mirror yet; not blocking, but flag for Phase 5).
- **SEO infrastructure:** `SEOHead.tsx` (custom, not Lovable) handles per-page title/meta/hreflang at runtime; `netlify.toml` handles the SPA-fallback for un-prerendered routes; static prerendering (`build:static` + `scripts/prerender.mjs`) already exists from PR #5.
- **Language:** `src/i18n/LanguageContext.tsx` — client-side language selection (localStorage → browser language → DE default). This matches brief §8's instruction to preserve and extend, not rebuild.
- **Payments:** live Stripe integration (`stripe-webhook`, `customer-onboarding`, checkout components across ~9 files) — the current €299 product has real paying customers. Any visual/structural rebuild must not touch this flow without explicit care (see Exit Plan).
- **Design tokens:** `tailwind.config.ts` already has a `colors` block — will be replaced with the new token system (§13–18 of the brief), not merged with the old palette (the old palette is the €299-product visual identity being retired per the C1 decision).
- **Admin surface:** 14 routes (`/admin/*`) covering analytics dashboards, A/B testing, content calendars, blog analytics — substantial existing internal tooling. Out of scope for the 8-experience rebuild; preserve as-is unless something in it depends on a Lovable piece being removed (only the admin login screen does — see Exit Plan).

## What gets built vs. preserved

| Layer | Action |
|---|---|
| 8 primary experiences (Home, Work, Services, Industries, Approach, Insights, About, Start a Project) | **Build new**, per brief §22–48 (unique concept per page, shared Living Growth System visual language, design tokens, motion system). |
| ~208 blog articles + their routes/slugs/metadata | **Preserve exactly.** New presentation layer (Insights/Intelligence Network) wraps the existing content; no slug, canonical, or metadata changes without Markus's approval (CLAUDE.md Hard Rule #1). |
| Programmatic SEO pages (city/industry combinations, niche landing pages) | **Preserve, not migrated into this project's initial scope.** These aren't part of the 8 signature experiences; revisit their role (keep as-is, fold into Insights, or retire) as a separate decision once the 8 experiences are live — not now. |
| Admin dashboards (14 routes) | **Preserve as-is.** Only touch the login screen (Lovable OAuth → Supabase OAuth swap). |
| Stripe checkout / `€299` product flow | **Preserve functionally.** Visual wrapper may change if/when the "Local Dominator" product gets its walled-off treatment (per the strategic report's C1 resolution — full rebrand, not a separate walled product — so this becomes part of the new brand's entry tier, not a separate skin). Payment logic itself untouched in this phase. |
| Design tokens (colors, type, spacing) | **Replace.** Old palette retired with the rebrand decision. |
| Language infrastructure (`LanguageContext.tsx`) | **Extend, not rebuild** — add German content for the new pages using the existing mechanism. |

## Branch strategy

- All rebuild work happens on `rebrand/localdominate-2.0-foundation`, cut from `main` @ `ee4e048`.
- Merge to `main` in small, reviewable increments (one phase, or one experience, per PR) rather than one giant PR at the end — easier for Markus to review, and lower-risk if Lovable sync turns out to still be active (see Exit Plan's open question).
- No direct pushes to `main` (existing repo rule, unchanged).

## Phased plan (adapted from the master brief)

1. **Phase 0 — Audit** ✅ done (this document + the two companion docs).
2. **Phase 1 — Exit plan** ✅ done (`LOVABLE_DEPENDENCY_AUDIT.md`, `LOVABLE_EXIT_PLAN.md`).
3. **Phase 2 — Design foundation.** Tailwind design tokens (colors, type scale, spacing, motion primitives), font loading (Instrument Serif, Geist, IBM Plex Mono), the `LivingGrowthSystem` network primitive built as a reusable component (per brief §63). A small internal `/design-system` preview route to sanity-check tokens in isolation.
4. **Phase 3 — Core static experiences.** Home, Services, Industries, Approach, About — none depend on live Supabase data, so these proceed now without waiting on the data migration.
5. **Phase 4 — Work (Evidence Room).** Project data modeled as configuration (enable/disable per case), not hard-coded — so Kempinski/Dadication/Klovers/SaveSpace/Explore Saudi can be toggled on only once publication rights are confirmed per client.
6. **Phase 5 — Insights.** New Intelligence Network layer over the existing 208 articles; investigate and close the 208-vs-154 markdown-mirror gap; zero changes to existing slugs/metadata.
7. **Phase 6 — Start a Project (configurator).** Build the 8-step UI and the generated "project system" visualization fully client-side first; wire the Supabase write only after the data migration is verified (per brief §45 and the Exit Plan).
8. **Phase 7 — German + English.** Full localization pass across the new pages using the existing language system.
9. **Phase 8 — Lovable cutover.** Execute the Exit Plan's checklist in full, including the live Stripe verification.
10. **Phase 9 — QA.** Visual, mobile, accessibility (WCAG AA), SEO regression (existing `scripts/seo-check.mjs`), performance (Core Web Vitals), and a security/data sanity pass.

## First safe milestone

**Phase 2 (design foundation) + the `Home` page from Phase 3**, built together on this branch, static-only, no Supabase writes, no changes to any existing route or the Stripe flow. This is reviewable in isolation, doesn't touch anything load-bearing, and gives Re/Markus something concrete to react to before the remaining 7 experiences are built out. Recommend this as the next unit of work.

## Risks carried forward from the audit

- **Repo duplication** (`localdominate/local` vs `localdominate/ejdhisidjs`) needs Markus's confirmation before it's forgotten.
- **Lovable auto-sync status** unknown — blocks confidently starting a long-lived branch until checked.
- **Live payments** (`stripe-webhook`) make the eventual cutover higher-stakes than a typical marketing-site migration; Phase 8/9 must include a real transaction-safe verification step, not just a build check.
- **208 vs. 154 article/markdown-mirror gap** — needs a quick investigation during Phase 5, not urgent now.
