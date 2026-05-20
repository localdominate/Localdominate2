
# LocalDominate → AI Visibility Infrastructure 2026

The current site is a strong German local-SEO landing page with a rich blog. To reposition it as "the AI-indexed local authority platform," we'll layer GEO/AI-search infrastructure on top — not rip-and-replace. Below is a phased plan. **Pick which phase(s) you want shipped now**; each one is a meaningful release on its own.

---

## Phase 0 — Strategic positioning (no code, decisions only)

Before code, lock 4 decisions:

1. **Brand promise**: keep "Lokale Sichtbarkeit Maschine" or evolve to "AI Visibility Infrastructure für lokale Unternehmen" (German primary, English secondary)?
2. **Primary CTA**: keep "Demo buchen" or switch hero to **"Kostenloser AI-Sichtbarkeits-Audit"**?
3. **Proprietary frameworks to trademark in copy** — pick 2–3 of:
   - Local Authority Density Score™
   - AI Visibility Index™
   - Semantic Local Trust Layer™
   - 5-Sterne-Automatismus™ (existing)
   - Keyword-Injektion™ (existing)
4. **Scope of new local landing pages now** (cost driver): which 5–10 city × niche combos to launch first (e.g. friseur-münchen, zahnarzt-wien, sanitär-zürich…)?

---

## Phase 1 — Homepage AI-native repositioning *(recommended first)*

Goal: visitors and crawlers instantly read "AI-native local visibility platform."

- **Hero rewrite**: new H1 anchored on AI visibility, with dual-CTA ("Kostenloser AI-Sichtbarkeits-Audit" + "Sieh wie dein Business in ChatGPT erscheint").
- **New section: "AI Search Preview"** — interactive mockups showing how a sample local business appears in ChatGPT / Gemini / Perplexity / Google AI Overview cards (visual mockups, not live API).
- **New section: "AI Visibility Index™ scorecard"** — illustrative gauge (Entity Authority, Citation Density, Review Velocity, Schema Coverage, AI Retrievability) with sample score.
- **Reframed solution section**: re-label the 3-phase system as "Entity → Authority → AI Citation" while keeping current copy as the underlying mechanism.
- **Trust strip**: "indexed by" row (Google, Bing, ChatGPT, Gemini, Perplexity, Claude logos) styled as retrieval sources, not endorsements (with honest microcopy: "Wir optimieren für…").
- Visual language nudge toward Linear/Vercel/Perplexity: tighter type scale, subtle gradients, mono-accents on data, less marketing-orange.

## Phase 2 — Schema & GEO technical layer *(high ROI, low visible change)*

- **JSON-LD audit and expansion** across all main pages and blog: `Organization`, `WebSite` + `SearchAction`, `LocalBusiness` (HQ), `Service` per offering, `FAQPage`, `Article` + `author Person`, `BreadcrumbList`, `HowTo` where relevant.
- **`speakable` + `data-ai-summary` propagation** to remaining pillar pages (already partial).
- **`llms.txt` expansion** with full crawlable map and a new **`llms-full.txt`** with curated long-form authoritative answers (the "quotable corpus").
- **`/ai.txt`** policy file declaring crawler permissions per LLM.
- New **`<AnswerBlock>`** component (40–60 word definition + source citation slot) drop-in for top of every key section. Optimized for AI extraction.
- New **`<ComparisonTable>`** + **`<StatisticBlock>`** semantic components with proper schema.
- **Sitemap regeneration**: add new landing pages + image sitemap entries.

## Phase 3 — AI Visibility Audit funnel *(primary new conversion path)*

- New route **`/ai-visibility-audit`** — multi-step form (business name, website, city, category) that produces an *illustrative* AI Visibility Index report (client-side scoring against checks we can run + curated benchmarks). No real LLM calls required for v1; in v1.5 we wire an Edge Function to Lovable AI for a generated narrative.
- Lead capture stored in existing `leads` table with `lead_type: 'ai_audit'`.
- Email follow-up via existing transactional email pipeline.
- Homepage + sticky bar updated to point to this funnel.

## Phase 4 — Scalable local landing pages

- Generalize existing niche-landing template (`NicheLandingPage.tsx` + `nicheConfigs.ts`) into a **City × Niche matrix generator**.
- Add fields for: AI-search query examples, local entity references (districts, landmarks), AI Overview mock for the niche query, local benchmarks.
- Launch the 5–10 combos chosen in Phase 0. Each page ships with full schema stack (LocalBusiness + Service + FAQPage + BreadcrumbList).
- Auto-add to sitemap + internal linking registry.

## Phase 5 — Content engine: GEO articles

- New blog cluster **"AI Search & GEO"** under existing `HubAiZukunft`, with 6 launch articles (briefs only in v1, full drafts as a separate task):
  1. Was ist GEO? (Generative Engine Optimization erklärt)
  2. Wie zitiert ChatGPT lokale Unternehmen?
  3. Google AI Overviews für lokale Suchanfragen optimieren
  4. AI Visibility Index — die neue Local-SEO-Metrik
  5. Schema-Strategie für AI-Retrieval
  6. Perplexity & Claude für lokale Sichtbarkeit
- Apply existing `LlmFriendlySummary`, `SectionAiSummary`, `InlineDefinitionBox`, `ArticleGlossary` patterns by default.

## Phase 6 — Design polish (optional, run after Phase 1 lands)

Use the design-directions flow to render 3 hero/section concepts in the Linear/Perplexity/Vercel register, lock palette + typography + layout, then propagate to the rest.

---

## Technical notes (for reviewers)

- All work is frontend + content + JSON-LD; the only backend addition is one Edge Function in Phase 3 for the AI audit narrative (Lovable AI Gateway, model `google/gemini-3-flash-preview`).
- Existing translation system (DE/AR) must be extended for every new string — Arabic page stability fixes from prior turns are preserved.
- No DB schema changes in Phases 1–2. Phase 3 reuses `leads`. Phase 4 adds rows to existing config files, no schema change.
- Reuses existing `SEOHead`, `ArticleLayout`, `ErrorBoundary`, `nicheConfigs`, `internalLinkRegistry` — no parallel systems.
- Security posture from previous turn preserved (admin-only sensitive reads, HIBP enabled).

---

## What I need from you

Please answer:

1. **Which phase do you want me to ship first?** (My recommendation: **Phase 1 + Phase 2 together** — biggest perceived + crawler impact, ~1 working session.)
2. **Phase 0 decisions** (positioning line, primary CTA wording, which ™ frameworks, which 5–10 city×niche pages).
3. **German-first or bilingual** for new sections (AI Audit, AI Search Preview)?

Once you answer, I'll execute. I will not start coding the full 6-phase scope in one shot — that would produce thin, low-quality output across the board.
