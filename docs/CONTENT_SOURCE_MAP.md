# Content Source Map — the "208 vs 154" Article Gap, Resolved

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

## 4. Bottom line

- **No architecture risk.** There is one content source (JSX components + the registry), not
  three or four as the "208 vs 154" framing implied.
- **Not a blocker for B1** per the standing instruction — none of this touches the 8-experience
  redesign's dependencies.
- **Two small, independent cleanup items surfaced** worth their own future PRs: (a) generate 5
  missing markdown mirrors, (b) investigate the 16 duplicate registry entries (3 of which
  already manifest as the known blank-page defect).
