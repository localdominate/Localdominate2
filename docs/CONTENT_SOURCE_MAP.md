# Content Source Map — the "208 vs 154" Article Gap, Resolved

> ## ⚠ CANONICAL STATEMENT OF TRUTH — ARTICLE COUNTS
> **This is the single source of truth for article counts on this project. Any other document,
> including this project's own earlier drafts, that states "208 articles" or "230 articles" is
> wrong and should be read as superseded by this block.**
>
> - **188** — actual unique articles registered in `src/data/blogArticles.ts`.
> - Of those 188: **153 are fully live** (route + component + markdown mirror), **5 are live but
>   missing their markdown mirror** (route + component exist, no `.md` file), **30 are backlog
>   only** (registry entry exists, no route, no component, no markdown — not live, not indexed,
>   zero SEO exposure).
> - Separately, **16 slugs are registered twice** (32 objects, 16 duplicate pairs) inside
>   `blogArticles.ts` — this does not change the 188 unique-slug count, but see §3/§4 below for
>   what it does affect.
> - **158 live pages** = 153 (route+component+md) + 5 (route+component, no md).
> - Any future Claude session inheriting this project should read this block before repeating a
>   different article count anywhere — in conversation, in a commit message, or in a new document.

Date: 2026-09-30. Investigates the discrepancy first noted in
`LOCALDOMINATE_REBUILD_PLAN.md` ("208 entries in `blogArticles.ts`, 154 mirrored markdown
files… gap worth investigating"). **No article was modified to produce this document** — read-only
inspection of `src/data/blogArticles.ts`, `src/App.tsx`, `public/blog-md/`, and the other
`src/data/article*.ts` support files.

## Corrected counts

| Figure | Actual count | Source |
|---|---|---|
| Unique `slug:` values in `blogArticles.ts` | **188** | `grep -oP 'slug:\s*"\K[^"]+' src/data/blogArticles.ts \| sort -u` |
| Registry entries that are exact duplicates (same slug, second object) | **16 slugs, 32 objects total** (16 "extra" objects) | see §3 |
| `/blog/*.md` files in `public/blog-md/` (excluding `index.md`) | **153** | `ls public/blog-md/*.md` |
| `/blog/*` `<Route>` declarations in `App.tsx` | **165** (164 unique paths — one slug, `local-seo-anwaelte-kanzleien`, is declared twice; first match wins, already known from `TAKEOVER_AUDIT.md`) | `grep -c 'Route path="/blog/'` |

The "208" and "154" figures in the rebuild plan were approximate (188 unique slugs read as
~208, likely because the plan's author counted raw `slug:` string occurrences without
deduplicating the 16 doubled entries: 188 + 16 duplicate objects ≈ 204–208 depending on exact
method). **188 is the correct unique-slug count.** This document supersedes that figure.

## 1. There is no third content source

All checked: **there is no Supabase-backed article content, no CMS, no generated/programmatic
article data.** Every article's text lives as a JSX/TSX component under `src/pages/blog/`,
registered by slug in `src/data/blogArticles.ts` (metadata: title, meta description, excerpt,
category — DE/EN) with supporting per-slug data spread across `src/data/articleHooks.ts`,
`articleConclusions.ts`, `articleDefinitions.ts`, `articleReviewDates.ts`,
`authorProfiles.ts`, `contentCategorization.ts`, `keywordMapping.ts`, `internalLinkRegistry.ts`.
This confirms `ARCHITECTURE.md` §8's original description; the gap is **not** a missing content
source, it's incomplete wiring between the registry and the other three places an article needs
to exist (route, component, markdown mirror).

## 2. The 35-slug gap, broken into two real categories

35 of the 188 registry slugs have no `public/blog-md/<slug>.md` file. Checking each against
`App.tsx` splits them cleanly:

### 2a. 30 slugs — registry entry only, no route, no component, no markdown (dead data)

These are **not live pages**. Visiting `/blog/<slug>` for any of them hits `NotFound`
(`noindex`, HTTP 200, per the existing baseline behaviour). None of the 30 appear in
`sitemap-blog.xml` — **zero SEO exposure**, this is not a broken-link or indexing risk.

Full list: `ai-overviews-local-seo`, `bewertungs-automation`, `bewertungs-qr-codes`,
`case-study-fitnessstudio-corona`, `case-study-friseur-stadtteile`,
`case-study-handwerker-anfragen`, `case-study-hotel-direktbuchungen`,
`case-study-restaurant-reservierungen`, `case-study-zahnarzt`,
`citation-strategie-verzeichnisse`, `diy-local-seo`, `google-business-api-agenturen`,
`google-business-fotos`, `google-sge-lokale-suche`, `kostenlose-local-seo-audit-tools`,
`local-seo-budget-planen`, `local-seo-checkliste-pdf`, `local-seo-jahresplanung`,
`local-seo-leipzig-dresden`, `local-seo-neugruender`, `local-seo-reinigungsunternehmen`,
`local-seo-tools-2026`, `local-seo-trends-2027`, `lokale-keyword-kannibalisierung`,
`lokale-pr-pressearbeit`, `lokales-social-media-marketing`, `multi-location-seo`,
`saisonales-local-seo`, `wettbewerbsanalyse-local-seo`, `zero-click-searches-local-pack`.

Most carry metadata in `blogArticles.ts` (title, excerpt, category) and some also have entries
in `articleReviewDates.ts` / `keywordMapping.ts` — i.e. they were **planned and partially
scoped** (title, SEO keyword target, review cadence already decided) but a page component was
never written and no route was ever added. Read as a content backlog, not a bug.

**Recommendation:** leave as-is for now (matches the "does not need to block B1" instruction).
Flag to Markus/Re as a content backlog list (30 pre-scoped, unwritten articles) worth
prioritising separately from the redesign.

### 2b. 5 slugs — genuinely live (have both a registry entry and a route+component), just missing their markdown mirror

| Slug | Component |
|---|---|
| `local-seo-sanitaer-heizung` | `LocalSeoSanitaerHeizung` |
| `local-seo-trends-deutschland` | `LocalSeoTrendsDeutschland` |
| `local-seo-trends-oesterreich` | `LocalSeoTrendsOesterreich` |
| `local-seo-trends-schweiz` | `LocalSeoTrendsSchweiz` |
| `lokale-influencer-kooperationen` | `LokaleInfluencerKooperationen` |

These **are real, indexable pages** (subject to their own `sitemap-blog.xml` inclusion, not
re-checked here) that simply never got a `public/blog-md/<slug>.md` mirror generated — likely
because the mirror-generation step was a manual/batch process that missed these five,
possibly the five most recently added. This is a small, fixable completeness gap, not a risk.

**Recommendation:** generate the 5 missing markdown mirrors using the same template as the
existing 153 (matches `TAKEOVER_AUDIT.md`'s description of `public/blog-md/` as
hand/script-maintained mirrors) — a mechanical, low-risk fix, safe to do independently of the
redesign whenever convenient. Not proposed as part of this batch since it touches
`public/` content per Hard Rule #3 and should be its own small PR.

## 3. Separate finding: 16 duplicate slugs in the registry itself

Independent of the markdown gap, 16 slugs each appear **twice** as separate objects in
`blogArticles.ts` (32 objects total for 16 slugs): `schema-markup-local-seo`,
`local-seo-yoga-studios`, `local-seo-wien`, `local-seo-tierarzt`, `local-seo-tattoo-studios`,
`local-seo-stuttgart`, `local-seo-physiotherapie`, `local-seo-optiker`,
`local-seo-notdienst-keywords`, `local-seo-mehrstufig-unternehmen`, `local-seo-koeln`,
`local-seo-duesseldorf`, `local-seo-basel`, `local-seo-apotheken`, `local-link-building`,
`local-content-marketing`.

Three of these (`local-seo-apotheken`, `local-seo-tattoo-studios`, `local-seo-yoga-studios`)
are already known in `SEO_BASELINE.md` §4 as the three **blank article pages** — worth noting
the duplicate-registry-entry pattern and the blank-page defect may be the same underlying bug
(e.g. a second, empty object shadowing or being shadowed by the real one, depending on which
downstream code reads the array by `find()` vs `filter()`).

**Recommendation:** flag for investigation alongside the existing blank-page defect in
`SEO_BASELINE.md` — do not touch without approval per Hard Rule #1/#2, since fixing it likely
means editing article registry data.

## 3a. Per-duplicate risk classification (investigation, not a fix)

For all 16, verified directly: **exactly 1 `<Route>`, 1 `sitemap-blog.xml` entry, 1
`blog-md/*.md` file each** — the duplication is confined to the `blogArticles.ts` data array; it
does not produce a second URL, a second sitemap `<loc>`, or a second canonical anywhere.

**How the registry is actually consumed** (checked directly): `blogArticles.find(a => a.slug ===
slug)` in `ArticleContextLinks.tsx` and `TopicHubLayout.tsx` (related-article widgets) — `.find()`
always resolves to the **first** matching object in source order. `new Map(blogArticles.map(a =>
[a.slug, a]))` in `ContentUpdateCalendar.tsx` (an admin tool) — `Map` construction means the
**second** (later) object silently wins there instead. So two different parts of the site can
already disagree about a duplicated article's title/excerpt/date depending on which lookup
pattern touches it.

**Spot-check confirms the duplicates are not identical copies.** Compared the two
`local-seo-apotheken` objects directly: different `title`, different `metaTitle`, different
`metaDescription`, different `excerpt`, different `publishedAt`/`updatedAt` (2026-02-14 vs
2026-01-10), different `keywords`. This is two genuinely different drafts under one slug, not a
harmless copy-paste. The other 15 were not individually diffed (time-boxed), but share the exact
same structural pattern (two full objects, same slug, both non-trivial) and should be assumed to
diverge similarly until checked.

| Duplicated slug | Routing risk | Sitemap risk | Content data risk | Notes |
|---|---|---|---|---|
| `local-seo-apotheken` | NO CURRENT RISK | NO CURRENT RISK | **CONTENT DATA RISK** (verified diverging) | Also a known blank live page (`SEO_BASELINE.md`) — **NEEDS MANUAL REVIEW** together |
| `local-seo-tattoo-studios` | NO CURRENT RISK | NO CURRENT RISK | CONTENT DATA RISK (inferred) | Also a known blank live page — **NEEDS MANUAL REVIEW** together |
| `local-seo-yoga-studios` | NO CURRENT RISK | NO CURRENT RISK | CONTENT DATA RISK (inferred) | Also a known blank live page — **NEEDS MANUAL REVIEW** together |
| `schema-markup-local-seo`, `local-seo-wien`, `local-seo-tierarzt`, `local-seo-stuttgart`, `local-seo-physiotherapie`, `local-seo-optiker`, `local-seo-notdienst-keywords`, `local-seo-mehrstufig-unternehmen`, `local-seo-koeln`, `local-seo-duesseldorf`, `local-seo-basel`, `local-link-building`, `local-content-marketing` (13 remaining) | NO CURRENT RISK | NO CURRENT RISK | CONTENT DATA RISK (inferred from pattern, not individually diffed) | Live pages, not known to be blank — lower priority than the 3 above, still **NEEDS MANUAL REVIEW** before any registry edit |

**Build/TypeScript risk: NO CURRENT RISK.** A plain array of objects with a repeated `slug`
field is not a TypeScript or ESLint error (only duplicate *keys within one object literal*
would be); `TAKEOVER_AUDIT.md` already confirms `tsc --noEmit` passes clean, consistent with
this. **Indexing risk: NO CURRENT RISK** — one canonical URL exists per slug either way; the
duplication affects which *data* backs UI widgets referencing that slug, not how many URLs
exist or what any URL's canonical tag says (the live page's own `SEOHead` props were not traced
back to this registry for all 16 — flagged as part of the manual review, not assumed safe).

**No fix applied.** This section is investigation only, per instruction — any fix (e.g. removing
the stale duplicate object) is a content-registry edit gated behind Hard Rule #1/#2 and explicit
approval, and is not in scope for B0.5 or B1.

## 4. Bottom line

- **No architecture risk.** There is one content source (JSX components + the registry), not
  three or four as the "208 vs 154" framing implied.
- **Not a blocker for B1** per the standing instruction — none of this touches the 8-experience
  redesign's dependencies.
- **Two small, independent cleanup items surfaced** worth their own future PRs: (a) generate 5
  missing markdown mirrors, (b) investigate the 16 duplicate registry entries (3 of which
  already manifest as the known blank-page defect).
