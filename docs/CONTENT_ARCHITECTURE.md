# Local Dominate – Content Architecture & Blog Inventory

Snapshot date: 2026-09-27. Read-only audit; no article was modified.
Machine-readable version of everything below: `docs/baseline/content-inventory.csv`
(one row per article, 30 columns incl. full meta descriptions, DE and EN titles/H1s, schema types,
image paths and every internal link).

## 1. Where the blog lives

**All article content is in the Git repository. None of it is in the database or in Lovable-only
storage.** Losing Lovable would not lose article text, provided this repository is kept.

Each article is spread over up to five places that must stay in sync:

| # | Piece | Location | Notes |
|---|---|---|---|
| 1 | Route | `src/App.tsx` (`<Route path="/blog/<slug>" …>`) | The URL. 165 blog routes, 164 unique paths. |
| 2 | Body content | `src/pages/blog/<Component>.tsx` (160 files) | Content is hand-written JSX (headings, paragraphs, FAQ, tables, CTAs). Wrapped in `components/blog/ArticleLayout.tsx`. |
| 3 | Registry / metadata | `src/data/blogArticles.ts` | 205 entries (188 unique slugs): DE + EN `title`, `metaTitle`, `metaDescription`, `excerpt`, `category`, `readingTime`, `publishedAt`, `updatedAt`, `icon`, `keywords`. Drives `/blog` listing, meta tags and Article schema. Components look their entry up with `getArticleBySlug("<slug>")`. |
| 4 | Author & review dates | `src/data/authorProfiles.ts`, `src/data/articleReviewDates.ts` | Maps slug → author persona (Person schema, author box) and "last reviewed" dates. |
| 5 | Machine-readable mirror | `public/blog-md/<slug>.md` (153 + `index.md`) | Front-matter (title, canonical, dates, author, licence) + JSON-LD comment + article text for AI crawlers. Listed in `sitemap-ai.xml`, `llms*.txt`, `ai-*.json`. |

Supporting content data in `src/data/`: `articleConclusions.ts`, `articleDefinitions.ts`,
`articleHooks.ts`, `contentUpgradeData.ts`, `faqHubData.ts`, `industry*Data.ts` (per-industry tables and
stats), `internalLinkRegistry.ts` / `internalLinkingStrategy.ts` (link suggestions),
`llmPageSummaries.ts`, `sectionSummaries.ts`, `searchIntentData.ts`, `seoLexikonData.ts` (SEO glossary on
`/seo-lexikon`), `miniSuccessStories.ts`, `keywordMapping.ts`.

Images: article body images are imported from `src/assets/blog/*.{jpg,webp}` (bundled, hashed URL).
The social/OG image and Article `image` schema are **derived from the slug**:
`https://localdominate.org/images/blog/<slug>.jpg` (`ArticleLayout.tsx` line ~290). Only 27 of the 164
articles have that file in `public/images/blog/`; the other 137 point to a missing image.

The database only holds engagement data about articles (`blog_article_views`: 2,226 rows) and
`scheduled_posts` (128 rows, all test entries with slug/title/status only, no article body).

## 2. Numbers

| Metric | Value |
|---|---|
| Blog routes | 165 (164 unique URLs) |
| Article components | 160 (`FaqSubHub` serves 6 FAQ URLs) |
| Registry entries | 205 (188 unique slugs) |
| Registry slugs with no route | 30 (not reachable; listed in §5) |
| Routes with no registry entry | 6 hub pages (`*-hub`, use their own metadata) |
| Markdown mirrors | 153 + `index.md` (11 articles have none) |
| Authors (from rendered Person/Article schema) | Local Dominator Team 43, Lisa Hoffmann 41, Thomas Müller 21, Sarah Weber 19, Markus Schmidt 17, none 21 (hubs/tools) |
| Publication dates | 2025-01: 11, 2026-01: 44, 2026-02: 31, 2026-03: 48, 2026-05: 14, 2026-08: 10, none 6 |

Author personas (Lisa Hoffmann, Thomas Müller, Sarah Weber, Markus Schmidt) are defined in
`authorProfiles.ts` with bios and credentials. Whether these are real people should be confirmed with the
owner before any E-E-A-T work; this audit makes no change.

## 3. Content defects found (not fixed)

| Issue | Articles | Effect |
|---|---|---|
| Component looks up a slug that is not in the registry → component returns `null` | `/blog/local-seo-apotheken` (looks up `local-seo-apotheke`), `/blog/local-seo-tattoo-studios` (`local-seo-tattoo-piercing`), `/blog/local-seo-yoga-studios` (`local-seo-yoga-pilates`) | **Blank page in production** (confirmed live). All three are in `sitemap.xml` and `sitemap-blog.xml`. |
| Canonical points to a URL that does not exist | `/blog/gbp-mehrere-standorte` → `/blog/gbp-mehrere-standorte-verwalten`; `/blog/local-seo-vs-maps-seo` → `/blog/local-seo-vs-maps-unterschied` | Google may drop the page or ignore the canonical. |
| Duplicate route | `/blog/local-seo-anwaelte-kanzleien` → `LocalSeoAnwaelteKanzleien` (rendered) and `LocalSeoAnwaelte` (unreachable) | Second component is dead code. |
| Missing OG image file | 137 articles | Social shares/Article schema reference a 404 image. |
| No Markdown mirror | 11 (6 hubs + `local-seo-sanitaer-heizung`, `local-seo-trends-deutschland/-oesterreich/-schweiz`, `lokale-influencer-kooperationen`) | Not in `sitemap-ai.xml`. |
| Not in any sitemap | `local-seo-sanitaer-heizung`, `local-seo-trends-deutschland`, `local-seo-trends-oesterreich`, `local-seo-trends-schweiz`, `lokale-influencer-kooperationen` | Discoverable only via internal links. |
| Broken internal links | 31 target URLs that have no route, linked from up to 23 articles each (e.g. `/blog/google-business-profil-optimieren` ×23, `/blog/google-bewertungen-strategie` ×19, `/decision` ×14, `/blog/nap-konsistenz` ×14, `/lexikon/*`) | Links render the 404 page. Full list in TAKEOVER_AUDIT §6. |

## 4. SEO Lexikon

`/seo-lexikon` is one page rendering `seoLexikonData.ts`. **There are no `/seo-lexikon/<term>` routes**,
but `sitemap-lexikon.xml` lists 66 such URLs (plus `/seo-lexikon` itself) and the `sync-lexikon-links` function / `lexikon_article_links`
table assume they exist. All 66 render the 404 page (HTTP 200, `noindex`). Confirmed on production.

## 5. Registry slugs without a page (30)

`ai-overviews-local-seo`, `bewertungs-automation`, `bewertungs-qr-codes`, `case-study-fitnessstudio-corona`,
`case-study-friseur-stadtteile`, `case-study-handwerker-anfragen`, `case-study-hotel-direktbuchungen`,
`case-study-restaurant-reservierungen`, `case-study-zahnarzt`, `citation-strategie-verzeichnisse`,
`diy-local-seo`, `google-business-api-agenturen`, `google-business-fotos`, `google-sge-lokale-suche`,
`kostenlose-local-seo-audit-tools`, `local-seo-budget-planen`, `local-seo-checkliste-pdf`,
`local-seo-jahresplanung`, `local-seo-leipzig-dresden`, `local-seo-neugruender`,
`local-seo-reinigungsunternehmen`, `local-seo-tools-2026`, `local-seo-trends-2027`,
`lokale-keyword-kannibalisierung`, `lokale-pr-pressearbeit`, `lokales-social-media-marketing`,
`multi-location-seo`, `saisonales-local-seo`, `wettbewerbsanalyse-local-seo`, `zero-click-searches-local-pack`.

These have metadata but no body component. The rendered `/blog` page does not link to them (checked), so they are invisible to visitors and crawlers.

## 6. Non-blog content pages

Landing pages (`src/pages/*.tsx`) hold their copy inline in JSX or in `src/data/nicheConfigs.ts`
(city/niche landers) and `src/i18n/translations.ts` (home page and shared UI in DE/EN/AR).
`/campsites` (UK campsite offer, English only) is self-contained in `src/pages/Campsites.tsx` +
`src/styles/campsites.css` + `src/assets/campsites-*`; it is **not in any sitemap**.

## 7. Article inventory (164 URLs)

Dates are from the rendered Article schema (fallback: registry). "Body img" counts images imported by the
component; "OG img file" says whether `public/images/blog/<slug>.jpg` exists. Meta titles, descriptions,
EN versions, schema types, and the full internal-link lists are in the CSV.

| # | Slug | H1 (DE render) | Component file | MD mirror | Author (schema) | Published | Modified | Body img | OG img file | Int. links | Flags |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `ai-agents-lokale-buchungen-2026` | AI Agents 2026: Wie Operator, ChatGPT Agent & Gemini lokale Buchungen  | AiAgentsLokaleBuchungen2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 24 |  |
| 2 | `ai-crawler-steuern-gptbot-claudebot-2026` | AI-Crawler steuern 2026: GPTBot, ClaudeBot & PerplexityBot richtig kon | AiCrawlerSteuern2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 20 |  |
| 3 | `ai-falschangaben-korrigieren-2026` | Falschangaben in AI-Antworten korrigieren 2026: 6-Schritte-Prozess | AiFalschangabenKorrigieren2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 20 |  |
| 4 | `ai-search-optimization-2026` | AI Search Optimization 2026: So wirst du in der KI-Suche gefunden | AiSearchOptimization2026.tsx | yes | Thomas Müller | 2026-02-16 | 2026-02-16 | 0 | yes | 20 |  |
| 5 | `ai-search-vs-traditional-search` | AI-Suche vs. Traditionelle Suche: Der komplette Vergleich für lokale U | AiSearchVsTraditionalSearch.tsx | yes | Sarah Weber | 2026-03-08 | 2026-03-08 | 0 | missing | 22 |  |
| 6 | `ai-suche-lokale-unternehmen` | AI Search Optimization für lokale Unternehmen: Der komplette Guide 202 | AiSucheLokaleUnternehmen.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 35 |  |
| 7 | `ai-visibility-checklist` | AI Visibility Checklist: Ist deine Website bereit für AI-Suche? | AiVisibilityChecklist.tsx | yes | Local Dominator Team | 2026-03-08 | 2026-03-08 | 0 | missing | 23 |  |
| 8 | `ai-visibility-index-local-seo-metrik` | AI Visibility Index – die neue Local-SEO-Metrik 2026 | AiVisibilityIndexLocalSeoMetrik.tsx | yes | Local Dominator Team | 2026-05-20 | 2026-05-20 | 0 | missing | 18 |  |
| 9 | `ai-zitat-monitoring-local-seo-2026` | AI-Zitat-Monitoring 2026: Erwähnungen in ChatGPT, Perplexity & Gemini  | AiZitatMonitoring2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 20 |  |
| 10 | `ai-zukunft-hub` | AI & Zukunft Hub | HubAiZukunft.tsx | **no** | — | — | — | 0 | missing | 51 | NO-REGISTRY-ENTRY |
| 11 | `apple-business-connect-local-seo-2026` | Apple Business Connect: Local SEO für Apple Maps & Siri 2026 | AppleBusinessConnectLocalSeo2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 20 |  |
| 12 | `bewertungen-reputation-hub` | Bewertungen & Reputation Hub | HubBewertungen.tsx | yes | — | 2026-03-05 | 2026-03-05 | 0 | missing | 33 |  |
| 13 | `bewertungs-antworten-vorlagen` | Bewertungs-Antworten: 50 Vorlagen für jede Situation | BewertungsAntwortenVorlagen.tsx | yes | Sarah Weber | 2026-02-16 | 2026-02-16 | 0 | yes | 23 |  |
| 14 | `bing-copilot-local-seo-2026` | Bing & Microsoft Copilot 2026: Local SEO für ChatGPT, Edge & Windows | BingCopilotLocalSeo2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 21 |  |
| 15 | `case-studies-hub` | Local SEO Fallstudien & Praxisbeispiele | HubCaseStudies.tsx | **no** | — | — | — | 0 | missing | 16 | NO-REGISTRY-ENTRY |
| 16 | `chatgpt-search-lokale-unternehmen-2026` | ChatGPT Search für lokale Unternehmen 2026 — der komplette Optimierung | ChatgptSearchLokaleUnternehmen2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 21 |  |
| 17 | `chatgpt-zitiert-lokale-unternehmen` | Wie zitiert ChatGPT lokale Unternehmen? | ChatgptZitiertLokaleUnternehmen.tsx | yes | Local Dominator Team | 2026-05-20 | 2026-05-20 | 0 | missing | 18 |  |
| 18 | `citation-tracking-template` | Citation Tracking Spreadsheet Template: Alle Verzeichnisse im Griff | CitationTrackingTemplate.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 26 |  |
| 19 | `content-marketing-hub` | Content & Marketing Hub | HubContentMarketing.tsx | **no** | — | — | — | 0 | missing | 40 | NO-REGISTRY-ENTRY |
| 20 | `core-web-vitals-local-seo` | Core Web Vitals für lokale Websites: Performance-Guide | CoreWebVitalsLocalSeo.tsx | yes | Thomas Müller | 2026-01-17 | 2026-01-17 | 0 | missing | 18 |  |
| 21 | `duplicate-listing-entfernen` | Doppelte Google-Einträge löschen – Duplicate Listing Anleitung (2026) | DuplicateListingEntfernen.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 22 | `e-e-a-t-lokale-unternehmen` | E-E-A-T für lokale Unternehmen: Expertise beweisen & Vertrauen aufbaue | EEATLokaleUnternehmen.tsx | yes | Sarah Weber | 2026-01-18 | 2026-01-18 | 0 | missing | 22 |  |
| 23 | `entity-seo-guide` | Entity SEO: Wie Suchmaschinen Entitäten verstehen & nutzen | EntitySeoGuide.tsx | yes | Sarah Weber | 2026-03-08 | 2026-03-08 | 0 | missing | 29 |  |
| 24 | `faq-ai-zukunft-local-seo` | FAQ: AI & Zukunft | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 25 | `faq-bewertungen-reputation` | FAQ: Bewertungen & Reputation | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 26 | `faq-content-marketing-local-seo` | FAQ: Content & Marketing | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 27 | `faq-google-business-profil` | FAQ: Google Business Profil | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 28 | `faq-hub` | FAQ Hub: Alle Local SEO Fragen | FaqHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 21 |  |
| 29 | `faq-local-seo-grundlagen` | FAQ: Local SEO Grundlagen | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 30 | `faq-technisches-seo` | FAQ: Technisches SEO | FaqSubHub.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 20 |  |
| 31 | `gbp-attribute-richtig-nutzen` | Google Business Attribute – Alle Optionen optimal nutzen (2026) | GbpAttributeRichtigNutzen.tsx | yes | Local Dominator Team | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 32 | `gbp-bewertung-loeschen-anleitung` | Google Bewertung löschen lassen – Komplette Anleitung 2026 | GbpBewertungLoeschenAnleitung.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 33 | `gbp-fotos-optimieren` | Google Business Fotos optimieren: Der komplette Bilder-Guide | GbpFotosOptimieren.tsx | yes | Local Dominator Team | 2026-01-12 | 2026-01-12 | 0 | missing | 23 |  |
| 34 | `gbp-mehrere-standorte` | Mehrere Google Business Standorte verwalten – Der komplette Guide 2026 | GbpMehrereStandorte.tsx | yes | Local Dominator Team | 2025-01-10 | 2026-02-08 | 0 | yes | 17 | CANONICAL->/blog/gbp-mehrere-standorte-verwalten |
| 35 | `gbp-nicht-in-suche-sichtbar` | Google Business Profil nicht sichtbar – 9 Gründe & Lösungen | GbpNichtInSucheSichtbar.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 36 | `gbp-oeffnungszeiten-sondertage` | Google Business Öffnungszeiten & Sondertage richtig einstellen | GbpOeffnungszeitenSondertage.tsx | yes | Local Dominator Team | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 37 | `gbp-suspendiert-reaktivieren` | Google Business Profil suspendiert – So stellst du es wieder her (2026 | GbpSuspendiertReaktivieren.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 38 | `gbp-verifizierung-fehlgeschlagen` | Google Business Verifizierung schlägt fehl – 8 Lösungen für alle Probl | GbpVerifizierungFehlgeschlagen.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 39 | `geo-content-briefing-vorlage-2026` | GEO-Content-Briefing 2026: Vorlage für zitierfähige Texte in AI-Suche | GeoContentBriefing2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 20 |  |
| 40 | `google-ai-mode-local-seo-2026` | Google AI Mode 2026: Local SEO für Geminis konversationale Suche | GoogleAiModeLocalSeo2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 21 |  |
| 41 | `google-ai-overviews-local-seo` | Google AI Overviews & Local SEO: Was sich ändert | GoogleAiOverviews.tsx | yes | Thomas Müller | 2026-01-10 | 2026-01-10 | 1 | missing | 24 |  |
| 42 | `google-bewertungen-bekommen` | Google Bewertungen bekommen: 7 bewährte Strategien | GoogleBewertungen.tsx | yes | Sarah Weber | 2026-01-07 | 2026-01-07 | 1 | missing | 25 |  |
| 43 | `google-business-insights-verstehen` | Google Business Insights richtig verstehen & nutzen | GoogleBusinessInsightsVerstehen.tsx | yes | Markus Schmidt | 2026-02-20 | 2026-02-20 | 0 | missing | 23 |  |
| 44 | `google-business-kategorien-guide` | Google Business Kategorien: Welche passt zu deinem Unternehmen? | GoogleBusinessKategorienGuide.tsx | yes | Markus Schmidt | 2026-02-05 | 2026-02-05 | 0 | missing | 23 |  |
| 45 | `google-business-messaging` | Google Business Messaging: Kundenkommunikation optimal nutzen | GoogleBusinessMessaging.tsx | yes | Local Dominator Team | 2026-01-30 | 2026-01-30 | 0 | missing | 23 |  |
| 46 | `google-business-produkte-services` | Google Business Produkte & Services optimal präsentieren | GoogleBusinessProdukteServices.tsx | yes | Markus Schmidt | 2026-02-12 | 2026-02-12 | 0 | missing | 23 |  |
| 47 | `google-business-profil-hub` | Google Business Profil Hub | HubGoogleBusinessProfil.tsx | yes | — | 2026-03-05 | 2026-03-05 | 0 | missing | 51 |  |
| 48 | `google-maps-audit-template` | Google Maps Audit Template: Vollständige Checkliste mit 75+ Punkten | GoogleMapsAuditTemplate.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 25 |  |
| 49 | `google-maps-konkurrenzanalyse` | Google Maps Konkurrenzanalyse: So analysierst du Top-Rankings | GoogleMapsKonkurrenzanalyse.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 28 |  |
| 50 | `google-maps-ranking-case-studies` | Google Maps Ranking Case Studies: 6 Branchen, 6 Erfolge | GoogleMapsRankingCaseStudies.tsx | yes | Lisa Hoffmann | 2026-03-08 | 2026-03-08 | 0 | missing | 27 |  |
| 51 | `google-maps-ranking-tracker` | Google Maps Ranking Tracker: So trackst du deine lokalen Rankings | GoogleMapsRankingTracker.tsx | yes | Thomas Müller; LocalDominate | 2026-03-08 | 2026-03-08 | 0 | missing | 25 |  |
| 52 | `google-maps-ranking-verbessern` | Google Maps Ranking verbessern: 7-Schritte-Aktionsplan 2026 | GoogleMapsRanking.tsx | yes | Markus Schmidt | 2026-01-07 | 2026-01-07 | 1 | missing | 24 |  |
| 53 | `google-maps-seo-hub` | Google Maps SEO Hub | HubGoogleMapsSeo.tsx | yes | — | 2026-03-08 | 2026-03-08 | 0 | missing | 51 |  |
| 54 | `google-maps-seo-ranking-faktoren` | Google Maps SEO 2026: Alle 20 Ranking-Signale mit Gewichtung | GoogleMapsRankingFaktoren.tsx | yes | Markus Schmidt | 2026-01-28 | 2026-01-28 | 0 | missing | 22 |  |
| 55 | `google-maps-seo-vs-organic-seo` | Google Maps SEO vs. Organic SEO: Ranking-Faktoren, Strategien & ROI im | GoogleMapsSeoVsOrganicSeo.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 21 |  |
| 56 | `google-maps-spam-erkennen` | Google Maps Spam erkennen & melden: Der komplette Guide | GoogleMapsSpamErkennen.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 27 |  |
| 57 | `google-my-business-optimieren` | Google My Business optimieren: Schritt-für-Schritt Anleitung | GoogleMyBusiness.tsx | yes | Markus Schmidt | 2026-01-07 | 2026-01-07 | 1 | missing | 26 |  |
| 58 | `google-posts-ranking-faktor` | Google Posts optimal nutzen: Der unterschätzte Ranking-Faktor | GooglePostsRankingFaktor.tsx | yes | Local Dominator Team | 2026-01-31 | 2026-01-31 | 0 | missing | 23 |  |
| 59 | `ki-tools-local-seo` | KI-Tools für Local SEO: Die besten AI-Helfer 2026 | KiToolsLocalSeo.tsx | yes | Thomas Müller | 2026-01-10 | 2026-01-10 | 1 | yes | 22 |  |
| 60 | `kostenloses-seo-guide` | Kostenloses SEO: Der ultimative Guide für Einsteiger 2026 | KostenloseSeo.tsx | yes | Sarah Weber | 2026-01-09 | 2026-01-09 | 0 | missing | 25 |  |
| 61 | `llms-txt-lokale-unternehmen-2026` | llms.txt für lokale Unternehmen 2026: Setup, Beispiel & Best Practices | LlmsTxtLokaleUnternehmen2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 22 |  |
| 62 | `local-citations-2025` | Local Citations 2026: Welche Verzeichnisse sind noch wichtig? | LocalCitations2025.tsx | yes | Thomas Müller | 2025-01-10 | 2026-02-08 | 0 | missing | 25 |  |
| 63 | `local-content-marketing` | Local Content Marketing: Content-Strategie für lokale Unternehmen | LocalContentMarketing.tsx | yes | Sarah Weber | 2026-01-26 | 2026-01-26 | 0 | yes | 22 |  |
| 64 | `local-keyword-research-template` | Local Keyword Research Template: Systematische Keyword-Recherche für l | LocalKeywordResearchTemplate.tsx | yes | Sarah Weber | 2026-03-08 | 2026-03-08 | 0 | missing | 25 |  |
| 65 | `local-link-building` | Local Link Building: Backlinks für lokale Unternehmen aufbauen | LocalLinkBuilding.tsx | yes | Sarah Weber | 2026-01-22 | 2026-01-22 | 0 | yes | 23 |  |
| 66 | `local-link-building-blueprint` | Local Link Building Blueprint: Der komplette Leitfaden für lokale Back | LocalLinkBuildingBlueprint.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 28 |  |
| 67 | `local-seo-aerzte-praxen` | Local SEO für Ärzte & Praxen: Patientengewinnung durch Google | LocalSeoAerzte.tsx | yes | Lisa Hoffmann | 2026-01-18 | 2026-01-18 | 0 | missing | 33 |  |
| 68 | `local-seo-anwaelte-kanzleien` | Local SEO für Anwälte & Kanzleien: Mandanten durch Google gewinnen | LocalSeoAnwaelteKanzleien.tsx | yes | Lisa Hoffmann | 2026-01-30 | 2026-01-30 | 0 | missing | 29 | DUPLICATE-ROUTE(2 components; first wins) |
| 69 | `local-seo-apotheken` |  | LocalSeoApotheke.tsx | yes | — | 2026-02-14 | 2026-02-14 | 1 | missing | 0 | BLANK-RENDER |
| 70 | `local-seo-audit-checkliste` | Local SEO Audit: Ist-Analyse mit 50+ Diagnose-Punkten & Scoring | LocalSeoAuditCheckliste.tsx | yes | Thomas Müller | 2026-01-07 | 2026-01-07 | 1 | missing | 22 |  |
| 71 | `local-seo-autowerkstatt` | Local SEO für Autowerkstätten & KFZ-Betriebe | LocalSeoAutowerkstatt.tsx | yes | Lisa Hoffmann | 2026-01-19 | 2026-01-19 | 0 | missing | 30 |  |
| 72 | `local-seo-baeckerei` | Local SEO für Bäckereien: Mehr Kunden durch Google (2026) | LocalSeoBackerei.tsx | yes | Lisa Hoffmann | 2026-02-16 | 2026-02-16 | 0 | yes | 29 |  |
| 73 | `local-seo-baeckerei-konditorei` | Local SEO für Konditoreien & Tortenbetriebe: Spezialitäten vermarkten | LocalSeoBaeckereiKonditorei.tsx | yes | Local Dominator Team | 2026-03-22 | 2026-03-22 | 0 | missing | 21 |  |
| 74 | `local-seo-basel` | Local SEO Basel: Grenzregion Schweiz-Deutschland-Frankreich | LocalSeoBasel.tsx | yes | Lisa Hoffmann | 2026-02-24 | 2026-02-24 | 1 | yes | 23 |  |
| 75 | `local-seo-berlin` | Local SEO Berlin: Der Hauptstadt-Guide für Unternehmen | LocalSeoBerlin.tsx | yes | Lisa Hoffmann | 2026-01-09 | 2026-01-09 | 0 | missing | 19 |  |
| 76 | `local-seo-branchen-hub` | Local SEO Branchen-Guides | HubBranchen.tsx | yes | — | 2026-03-05 | 2026-03-05 | 0 | missing | 58 |  |
| 77 | `local-seo-cafe-coffeeshop` | Local SEO für Cafés & Coffee Shops | LocalSeoCafeCoffeeshop.tsx | yes | Local Dominator Team | 2026-03-28 | 2026-03-28 | 0 | missing | 21 |  |
| 78 | `local-seo-case-study-baecker` | Local SEO Case Study: Wie ein Bäcker 200% mehr Kunden gewann | LocalSeoCaseStudy.tsx | yes | Lisa Hoffmann | 2026-02-02 | 2026-02-02 | 0 | missing | 22 |  |
| 79 | `local-seo-checkliste-komplett` | Local SEO Implementierungs-Checkliste: 80+ Maßnahmen in 8 Phasen syste | LocalSeoChecklisteKomplett.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 47 |  |
| 80 | `local-seo-doener-kebab-imbiss` | Local SEO für Döner & Kebab-Imbisse: Der ultimative Marketing-Guide 20 | LocalSeoDoenerladen.tsx | yes | Lisa Hoffmann | 2026-01-08 | 2026-01-08 | 0 | missing | 27 |  |
| 81 | `local-seo-duesseldorf` | Local SEO Düsseldorf: Mode, Messe & mehr Kunden | LocalSeoDuesseldorf.tsx | yes | Lisa Hoffmann | 2026-02-18 | 2026-02-18 | 1 | yes | 23 |  |
| 82 | `local-seo-elektrotechnik` | Local SEO für Elektriker & Elektrotechniker: Mehr Aufträge | LocalSeoElektrotechnik.tsx | yes | Lisa Hoffmann | 2026-02-18 | 2026-02-18 | 0 | yes | 30 |  |
| 83 | `local-seo-fahrschule` | Local SEO für Fahrschulen: Mehr Fahrschüler gewinnen | LocalSeoFahrschule.tsx | yes | Local Dominator Team | 2026-02-20 | 2026-02-20 | 0 | missing | 20 |  |
| 84 | `local-seo-fehler` | Local SEO Fehler: 15 Gründe warum du nicht gefunden wirst | LocalSeoFehler.tsx | yes | Lisa Hoffmann | 2026-02-06 | 2026-02-06 | 0 | missing | 24 |  |
| 85 | `local-seo-fitness` | Local SEO für Fitnessstudios & Personal Trainer | LocalSeoFitness.tsx | yes | Lisa Hoffmann | 2026-02-04 | 2026-02-04 | 0 | missing | 32 |  |
| 86 | `local-seo-fotograf` | Local SEO für Fotografen: Mehr Buchungen durch Google | LocalSeoFotograf.tsx | yes | Lisa Hoffmann | 2026-01-29 | 2026-01-29 | 0 | missing | 31 |  |
| 87 | `local-seo-frankfurt` | Local SEO Frankfurt: Finanzmetropole richtig nutzen | LocalSeoFrankfurt.tsx | yes | Lisa Hoffmann | 2026-01-21 | 2026-01-21 | 0 | missing | 19 |  |
| 88 | `local-seo-friseursalon-beauty` | Local SEO für Friseursalons & Beauty-Studios: Der ultimative Guide mit | LocalSeoFriseur.tsx | yes | Lisa Hoffmann | 2026-01-08 | 2026-01-08 | 0 | missing | 30 |  |
| 89 | `local-seo-fuer-restaurants` | Local SEO für Restaurants: Mehr Gäste durch Google | LocalSeoRestaurant.tsx | yes | Lisa Hoffmann | 2026-01-07 | 2026-01-07 | 1 | missing | 27 |  |
| 90 | `local-seo-garten-landschaftsbau` | Local SEO für Garten- & Landschaftsbau: Saison richtig nutzen | LocalSeoGartenLandschaftsbau.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 21 |  |
| 91 | `local-seo-gebaeudereinigung` | Local SEO für Gebäudereinigung: Objektanfragen statt Klicks | LocalSeoGebaeudereinigung.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 21 |  |
| 92 | `local-seo-hamburg` | Local SEO Hamburg: Der Hanseatische Marketing-Guide | LocalSeoHamburg.tsx | yes | Lisa Hoffmann | 2026-01-13 | 2026-01-13 | 0 | missing | 20 |  |
| 93 | `local-seo-handwerker` | Local SEO für Handwerker: Mehr Aufträge durch Google | LocalSeoHandwerker.tsx | yes | Lisa Hoffmann | 2026-01-07 | 2026-01-07 | 1 | yes | 30 |  |
| 94 | `local-seo-hannover` | Local SEO Hannover: Der Guide für niedersächsische Unternehmen | LocalSeoHannover.tsx | yes | Lisa Hoffmann | 2026-02-16 | 2026-02-16 | 0 | yes | 19 |  |
| 95 | `local-seo-heizung-sanitaer` | Local SEO für Heizung & Sanitär (SHK): Notdienst und Projekte | LocalSeoHeizungSanitaer.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 21 |  |
| 96 | `local-seo-hochzeitsdienstleister` | Local SEO für Hochzeitsdienstleister: Florist bis DJ | LocalSeoHochzeitsdienstleister.tsx | yes | Local Dominator Team | 2026-02-26 | 2026-02-26 | 0 | missing | 21 |  |
| 97 | `local-seo-hotels` | Local SEO für Hotels & Unterkünfte: Direktbuchungen steigern | LocalSeoHotels.tsx | yes | Lisa Hoffmann | 2026-01-24 | 2026-01-24 | 0 | missing | 29 |  |
| 98 | `local-seo-immobilienmakler` | Local SEO für Immobilienmakler: Objektanfragen durch Google | LocalSeoImmobilienmakler.tsx | yes | Lisa Hoffmann | 2026-01-11 | 2026-01-11 | 0 | missing | 29 |  |
| 99 | `local-seo-keywords-finden` | Local SEO Keywords finden: Der komplette Keyword-Recherche Guide 2026 | LocalSeoKeywords.tsx | yes | Sarah Weber | 2026-01-07 | 2026-01-07 | 1 | missing | 24 |  |
| 100 | `local-seo-koeln` | Local SEO Köln: Rheinland-Marketing für lokale Unternehmen | LocalSeoKoeln.tsx | yes | Lisa Hoffmann | 2026-01-27 | 2026-01-27 | 1 | yes | 23 |  |
| 101 | `local-seo-maler-lackierer` | Local SEO für Maler & Lackierer: Mehr Aufträge gewinnen | LocalSeoMalerLackierer.tsx | yes | Local Dominator Team | 2026-02-22 | 2026-02-22 | 0 | missing | 22 |  |
| 102 | `local-seo-mehrstufig-unternehmen` | Franchise-SEO Strategie: GBP-Management & Markenkonsistenz bei mehrere | LocalSeoMehrstufigUnternehmen.tsx | yes | Markus Schmidt | 2026-01-14 | 2026-01-14 | 0 | missing | 22 |  |
| 103 | `local-seo-monthly-checklist` | Local SEO Monthly Checklist: Die monatliche Routine für Top-Rankings | LocalSeoMonthlyChecklist.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 24 |  |
| 104 | `local-seo-muenchen` | Local SEO München: Der Guide für bayerische Unternehmen | LocalSeoMuenchen.tsx | yes | Lisa Hoffmann | 2026-01-14 | 2026-01-14 | 0 | missing | 19 |  |
| 105 | `local-seo-notdienst-keywords` | Notdienst-Keywords: Wenn Kunden dringend suchen | LocalSeoNotdienstKeywords.tsx | yes | Sarah Weber | 2026-02-03 | 2026-02-03 | 0 | yes | 22 |  |
| 106 | `local-seo-optiker` | Local SEO für Optiker & Hörakustiker: Kunden gewinnen | LocalSeoOptiker.tsx | yes | Lisa Hoffmann | 2026-02-14 | 2026-02-14 | 0 | yes | 31 |  |
| 107 | `local-seo-physiotherapie` | Local SEO für Physiotherapie & Heilpraktiker: Patienten gewinnen | LocalSeoPhysiotherapie.tsx | yes | Lisa Hoffmann | 2026-02-01 | 2026-02-01 | 0 | yes | 30 |  |
| 108 | `local-seo-ranking-faktoren-erklaert` | Local SEO Ranking-Faktoren erklärt: Alle Signale im Detail 2026 | LocalSeoRankingFaktorenErklaert.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 41 |  |
| 109 | `local-seo-reporting-template` | Local SEO Reporting Template: Monatlicher Report + KPI-Vorlage | LocalSeoReportingTemplate.tsx | yes | Thomas Müller | 2026-03-05 | 2026-03-05 | 0 | yes | 27 |  |
| 110 | `local-seo-roadmap-90-tage` | Local SEO Wochenplan: 12-Wochen-Timeline mit Gantt-Diagramm & KPI-Meil | LocalSeoRoadmap.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 24 |  |
| 111 | `local-seo-sanitaer-heizung` | Local SEO für SHK-Betriebe: Sanitär, Heizung, Klima | LocalSeoSanitaerHeizung.tsx | **no** | Lisa Hoffmann | 2026-02-26 | 2026-02-26 | 0 | missing | 22 |  |
| 112 | `local-seo-schweiz` | Local SEO Schweiz: Der komplette Leitfaden für KMUs | LocalSeoSchweiz.tsx | yes | Lisa Hoffmann | 2026-01-10 | 2026-01-10 | 0 | missing | 19 |  |
| 113 | `local-seo-sprachschule` | Local SEO für Sprachschulen & Nachhilfe-Institute | LocalSeoSprachschule.tsx | yes | Local Dominator Team | 2026-03-16 | 2026-03-16 | 0 | missing | 20 |  |
| 114 | `local-seo-staedte-hub` | Local SEO Städte-Guides – DACH-Region | HubStaedte.tsx | yes | — | 2026-03-05 | 2026-03-05 | 0 | missing | 38 |  |
| 115 | `local-seo-statistiken-daten` | Local SEO Statistiken & Daten 2026: 88+ Datenpunkte für 22 Branchen | LocalSeoStatistiken.tsx | yes | Local Dominator Team; LocalDominate | 2026-03-08 | 2026-03-08 | 0 | missing | 19 |  |
| 116 | `local-seo-steuerberater` | Local SEO für Steuerberater & Buchhalter: Mandanten gewinnen | LocalSeoSteuerberater.tsx | yes | Lisa Hoffmann | 2026-01-15 | 2026-01-15 | 0 | missing | 29 |  |
| 117 | `local-seo-strategie-kleine-unternehmen` | Local SEO Strategie für kleine Unternehmen: Der komplette Aktionsplan  | LocalSeoStrategieKleineUnternehmen.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 60 |  |
| 118 | `local-seo-strategy-planner` | Local SEO Strategy Planner: 7-Phasen-Aufgabenplan mit Budget & Checkli | LocalSeoStrategyPlanner.tsx | yes | Sarah Weber | 2026-03-08 | 2026-03-08 | 0 | missing | 27 |  |
| 119 | `local-seo-stuttgart` | Local SEO Stuttgart: Automobilregion & mehr | LocalSeoStuttgart.tsx | yes | Lisa Hoffmann | 2026-02-12 | 2026-02-12 | 1 | yes | 23 |  |
| 120 | `local-seo-tattoo-studios` |  | LocalSeoTattoo.tsx | yes | — | 2026-02-08 | 2026-02-08 | 1 | missing | 0 | BLANK-RENDER |
| 121 | `local-seo-tierarzt` | Local SEO für Tierärzte & Tierpraxen | LocalSeoTierarzt.tsx | yes | Lisa Hoffmann | 2026-01-23 | 2026-01-23 | 1 | yes | 26 |  |
| 122 | `local-seo-tracking-kpis` | Local SEO Tracking: KPIs und Reporting richtig aufsetzen | LocalSeoTrackingKpis.tsx | yes | Local Dominator Team | 2026-03-30 | 2026-03-30 | 0 | missing | 20 |  |
| 123 | `local-seo-trends-deutschland` | Local SEO Trends Deutschland 2026: Der grosse Trend-Report | LocalSeoTrendsDeutschland.tsx | **no** | Local Dominator Team | 2026-03-08 | 2026-03-08 | 0 | missing | 22 |  |
| 124 | `local-seo-trends-oesterreich` | Local SEO Trends Österreich 2026: Der AT-Markt im Wandel | LocalSeoTrendsOesterreich.tsx | **no** | Local Dominator Team | 2026-03-08 | 2026-03-08 | 0 | missing | 22 |  |
| 125 | `local-seo-trends-schweiz` | Local SEO Trends Schweiz 2026: Was KMU jetzt wissen müssen | LocalSeoTrendsSchweiz.tsx | **no** | Local Dominator Team | 2026-03-08 | 2026-03-08 | 0 | missing | 22 |  |
| 126 | `local-seo-umzugsunternehmen` | Local SEO für Umzugsunternehmen: In zwei Städten gefunden werden | LocalSeoUmzugsunternehmen.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 21 |  |
| 127 | `local-seo-voice-search` | Local SEO & Voice Search: Hey Google, wo ist... | LocalSeoVoiceSearch.tsx | yes | Sarah Weber | 2026-01-25 | 2026-01-25 | 0 | missing | 23 |  |
| 128 | `local-seo-vs-maps-seo` | Local SEO vs. Google Maps SEO – Was ist der Unterschied? | LocalSeoVsMaps.tsx | yes | Local Dominator Team | 2025-01-10 | 2026-02-08 | 0 | missing | 19 | CANONICAL->/blog/local-seo-vs-maps-unterschied |
| 129 | `local-seo-vs-organisch` | Local SEO vs. organisches SEO: Die wichtigsten Unterschiede | LocalSeoVsOrganisch.tsx | yes | Markus Schmidt | 2026-02-21 | 2026-02-21 | 0 | missing | 22 |  |
| 130 | `local-seo-wien` | Local SEO Wien: Der Österreich-Guide für KMUs | LocalSeoWien.tsx | yes | Lisa Hoffmann | 2026-02-06 | 2026-02-06 | 1 | yes | 23 |  |
| 131 | `local-seo-yoga-studios` |  | LocalSeoYoga.tsx | yes | — | 2026-02-02 | 2026-02-02 | 1 | missing | 0 | BLANK-RENDER |
| 132 | `local-seo-zahnarzt` | Local SEO für Zahnärzte: Mehr Patienten durch Google | LocalSeoZahnarzt.tsx | yes | Lisa Hoffmann | 2026-02-08 | 2026-02-08 | 0 | yes | 31 |  |
| 133 | `local-seo-zuerich` | Local SEO Zürich: So dominierst du den Zürcher Markt | LocalSeoZuerich.tsx | yes | Lisa Hoffmann | 2026-01-12 | 2026-01-12 | 0 | missing | 19 |  |
| 134 | `localbusiness-schema-implementierung` | LocalBusiness Schema implementieren: Komplette Anleitung mit Code-Beis | LocalBusinessSchemaImplementierung.tsx | yes | Thomas Müller | 2026-03-05 | 2026-03-05 | 0 | yes | 25 |  |
| 135 | `lokale-events-marketing` | Lokale Events für SEO nutzen: Sponsoring & Veranstaltungen | LokaleEventsMarketing.tsx | yes | Sarah Weber | 2026-02-10 | 2026-02-10 | 0 | yes | 21 |  |
| 136 | `lokale-influencer-kooperationen` | Lokale Influencer-Marketing: Kooperationen aufbauen | LokaleInfluencerKooperationen.tsx | **no** | Sarah Weber | 2026-02-24 | 2026-02-24 | 0 | missing | 17 |  |
| 137 | `lokale-landing-pages` | Lokale Landing Pages erstellen: One-Page pro Standort | LokaleLandingPages.tsx | yes | Local Dominator Team | 2026-02-10 | 2026-02-10 | 0 | missing | 20 |  |
| 138 | `lokale-seo-fuer-neugruender` | Local SEO für Neugründer: Von Null zur lokalen Sichtbarkeit | LocalSeoNeugruender.tsx | yes | Sarah Weber | 2026-01-20 | 2026-01-20 | 0 | missing | 24 |  |
| 139 | `lokale-suchmaschinenoptimierung-2026` | Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert | LokaleSeo2026.tsx | yes | Markus Schmidt | 2026-01-07 | 2026-01-07 | 1 | missing | 25 |  |
| 140 | `mobile-local-seo` | Mobile Local SEO: Warum 80% der lokalen Suchen mobil sind | MobileLocalSeo.tsx | yes | Thomas Müller | 2026-01-26 | 2026-01-26 | 0 | missing | 18 |  |
| 141 | `nap-konsistenz-local-seo` | NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten | NapKonsistenz.tsx | yes | Thomas Müller | 2026-01-07 | 2026-01-07 | 1 | missing | 24 |  |
| 142 | `negative-google-bewertungen` | Negative Google Bewertungen: So reagierst du professionell | NegativeGoogleBewertungen.tsx | yes | Sarah Weber | 2026-01-20 | 2026-01-20 | 0 | missing | 24 |  |
| 143 | `perplexity-claude-lokale-sichtbarkeit` | Perplexity & Claude für lokale Sichtbarkeit nutzen | PerplexityClaudeLokaleSichtbarkeit.tsx | yes | Local Dominator Team | 2026-05-20 | 2026-05-20 | 0 | missing | 18 |  |
| 144 | `ranking-ploetzlich-verschwunden` | Google Ranking plötzlich verschwunden – 12 Ursachen & Lösungen | RankingPloetzlichVerschwunden.tsx | yes | Lisa Hoffmann | 2025-01-10 | 2026-02-08 | 0 | missing | 23 |  |
| 145 | `reddit-local-seo-ai-zitate-2026` | Reddit für Local SEO 2026: Wie du in ChatGPT- & Perplexity-Antworten z | RedditLocalSeoAiZitate2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 21 |  |
| 146 | `review-schema-implementierung` | Review Schema implementieren: Bewertungssterne in Google bekommen | ReviewSchemaImplementierung.tsx | yes | Thomas Müller | 2026-03-05 | 2026-03-05 | 0 | yes | 26 |  |
| 147 | `schema-markup-local-seo` | Schema Markup für Local SEO: Der Implementierungsguide | SchemaMarkupLocalSeo.tsx | yes | Thomas Müller | 2026-01-16 | 2026-01-16 | 0 | missing | 26 |  |
| 148 | `schema-strategie-ai-retrieval` | Schema-Strategie für AI-Retrieval: So wirst du von LLMs gelesen | SchemaStrategieAiRetrieval.tsx | yes | Local Dominator Team | 2026-05-20 | 2026-05-20 | 0 | missing | 18 |  |
| 149 | `schema-strategie-dokument` | Schema-Strategie: Wann Article, FAQPage, HowTo & LocalBusiness einsetz | SchemaStrategieDokument.tsx | yes | Thomas Müller | 2026-03-08 | 2026-03-08 | 0 | missing | 18 |  |
| 150 | `semantic-seo-topical-authority` | Semantic SEO & Topical Authority: Der Komplettguide | SemanticSeoGuide.tsx | yes | Sarah Weber | 2026-03-08 | 2026-03-08 | 0 | missing | 30 |  |
| 151 | `seo-ferienwohnungen` | SEO für Ferienwohnungen: Schweiz, Bayern & Österreich – Raus aus der O | SeoFerienwohnungen.tsx | yes | Lisa Hoffmann | 2026-02-25 | 2026-02-25 | 0 | yes | 44 |  |
| 152 | `seo-toolbox-kostenlose-ressourcen` | Die ultimative SEO-Toolbox: 50+ kostenlose Tools & Ressourcen | SeoToolbox.tsx | yes | Thomas Müller | 2026-01-10 | 2026-01-10 | 1 | missing | 20 |  |
| 153 | `technisches-local-seo-guide` | Technisches Local SEO: Der komplette Guide für lokale Unternehmen 2026 | TechnischesLocalSeoGuide.tsx | yes | Thomas Müller | 2026-03-05 | 2026-03-08 | 0 | yes | 26 |  |
| 154 | `technisches-seo-hub` | Technisches Local SEO Hub | HubTechnischesSeo.tsx | **no** | — | — | — | 0 | missing | 39 | NO-REGISTRY-ENTRY |
| 155 | `tiktok-search-local-seo-2026` | TikTok Search für Local SEO 2026: So wirst du von Gen Z gefunden | TiktokSearchLocalSeo2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 20 |  |
| 156 | `tools-ressourcen-hub` | Tools & Ressourcen Hub | HubToolsRessourcen.tsx | **no** | — | — | — | 0 | missing | 41 | NO-REGISTRY-ENTRY |
| 157 | `troubleshooting-hub` | Troubleshooting Hub | HubTroubleshooting.tsx | **no** | — | — | — | 0 | missing | 33 | NO-REGISTRY-ENTRY |
| 158 | `ultimate-guide-local-seo` | Local SEO: Der ultimative Leitfaden für lokale Unternehmen 2026 | UltimateGuideLocalSeo.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 61 |  |
| 159 | `unternehmensprofil-ki-funktionen-2026` | Unternehmensprofil & KI 2026: Welche Felder in AI-Antworten landen | GbpKiFunktionen2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 21 |  |
| 160 | `voice-search-sprachassistenten-local-seo-2026` | Voice Search 2026: Local SEO für Alexa, Siri & Google Assistant | VoiceSearchSprachassistenten2026.tsx | yes | Local Dominator Team | 2026-05-22 | 2026-05-22 | 0 | missing | 22 |  |
| 161 | `was-ist-geo-generative-engine-optimization` | Was ist GEO? Generative Engine Optimization erklärt | WasIstGeo.tsx | yes | Local Dominator Team | 2026-05-20 | 2026-05-20 | 0 | missing | 18 |  |
| 162 | `website-content-ai-suchmaschinen` | Website-Content für AI-Suchmaschinen strukturieren: Der komplette Guid | WebsiteContentAiSuchmaschinen.tsx | yes | Sarah Weber | 2026-03-05 | 2026-03-05 | 1 | yes | 21 |  |
| 163 | `whatsapp-business-local-seo-2026` | WhatsApp Business für lokale Unternehmen 2026: Setup, NAP-Regeln & Rec | WhatsappBusinessLocalSeo2026.tsx | yes | Local Dominator Team | 2026-08-08 | 2026-08-08 | 0 | missing | 19 |  |
| 164 | `wie-google-maps-ranking-funktioniert` | Google Maps Algorithmus erklärt: Nähe, Relevanz & Bekanntheit im Detai | WieGoogleMapsRankingFunktioniert.tsx | yes | Markus Schmidt | 2026-03-08 | 2026-03-08 | 0 | missing | 27 |  |
