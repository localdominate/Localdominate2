# Local Dominate – SEO Baseline (frozen 2026-09-27)

This is the reference state that the migration must reproduce. **Nothing listed here may change
(slug, canonical, title, meta description, H1, schema, robots directive, sitemap URL) without explicit
written approval.** Known defects are recorded, not fixed.

## 1. How the baseline was captured

1. Production files `robots.txt`, all six sitemaps, `llms.txt`, `llms-full.txt`, `feed.xml`,
   `ai-answer-index.json`, `ai-citation-manifest.json`, `faq-database.json`, `manifest.json`,
   `.well-known/ai.txt` were fetched from https://localdominate.org and hashed (SHA-256):
   **all 15 are byte-identical to `public/` in this repo.** Snapshots of all 15: `docs/baseline/*.snapshot`.
   Host behaviour observed: `www.localdominate.org` → redirect to apex; trailing-slash URLs are served
   as-is (HTTP 200, canonical without slash); unknown extension-less paths → HTTP 200 + 404 page;
   missing files with an extension → HTTP 404. Response headers (cache, content-type) were not captured.
2. The repo was built (`npm install && vite build`) and served locally; every route in `src/App.tsx`
   plus every URL in the sitemaps (288 paths) was rendered in headless Chromium twice:
   `de-DE` locale → `docs/baseline/rendered-de-DE.json`; `en-US` locale (what Googlebot's renderer
   uses) → `docs/baseline/rendered-en-US.json`. Captured per URL: final path, `<title>`, meta
   description, robots meta, canonical, hreflang, OG title/image/type, `article:*` times, all H1s,
   JSON-LD block count and every `@type`, schema authors and dates, internal links, images, word count.
3. Production spot-checks in a real browser matched the local render (e.g. `/blog/entity-seo-guide`,
   `/blog/was-ist-geo-generative-engine-optimization`, `/restaurant-marketing`, `/campsites`,
   `/seo-lexikon/alt-text` = 404, `/blog/local-seo-yoga-studios` = blank, `/decision` = 404).
   Today's `/campsites` edit is live, so production = this code.
4. Flat table for diffing: `docs/baseline/seo-baseline.csv` (one row per URL, DE and EN columns).

Re-run the same crawl after any migration step and diff against these JSON files.

## 2. Summary

| Status (de-DE render) | URLs |
|---|---|
| Indexable (200, content, no noindex) | **187** |
| Blank render (no title/H1/canonical) | 10 (3 public articles + 7 admin/analytics tools) |
| `noindex, nofollow` meta | 11 (legal pages, admin, `/danke`, `/onboarding`, `/test-b`, `/ab-test-zentrale`) |
| Only blocked by robots.txt | 3 (`/admin/article-feedback`, `/admin/blog-analytics`, `/admin/content-performance`) |
| Listed in a sitemap but no route → 404 page (HTTP 200, noindex) | 77 (66 `/seo-lexikon/<term>`, 11 old `/blog/*` slugs in `sitemap-images.xml`) |

Sitemap coverage: 187 indexable URLs, of which 21 are in **no** sitemap (`/campsites`,
`/ai-visibility-audit`, `/ueber-uns`, `/redaktionsrichtlinien`, `/forschungsmethodik`,
`/content-formatting-guidelines`, the 10 city/niche landers, 5 blog articles).

## 3. Rules that define "no SEO loss"

1. **Same URLs.** Every path in §A keeps returning the same page. No trailing-slash change, no case
   change, no redirect added unless approved.
2. **Same head per language.** For both `de-DE` and `en-US` renders: identical `<title>`, meta
   description, canonical, robots meta, hreflang, OG tags, H1 and JSON-LD `@type` set.
3. **Language behaviour unchanged.** One URL per page, language chosen client-side
   (`localStorage` → `navigator.language` → DE). Googlebot currently receives the **English** render
   for most pages.
4. **Crawler pre-rendering must exist on the new host** before DNS moves (Lovable does this today).
   Test: fetch a blog URL with a Googlebot user agent and without JS; the HTML must contain the
   article title, canonical and JSON-LD.
5. **Static files byte-identical:** `robots.txt`, 6 sitemaps, `llms*.txt`, `feed.xml`, `ai-*.json`,
   `faq-database.json`, `.well-known/ai.txt`, `/blog-md/*.md`, `/images/**`,
   `google3b1877e3401b227d.html` (Search Console), `1b38d21b…6fd.txt` (IndexNow key).
6. **HTTP semantics unchanged:** extension-less unknown paths → `index.html` with 200 (as today);
   missing files with an extension → 404; `www` → apex redirect; trailing slash served without redirect.
7. **GA4 tag and Consent Mode block in `index.html` unchanged.**

## 4. Known SEO defects (recorded, not fixed – each needs owner approval)

1. 66 `/seo-lexikon/<term>` URLs in `sitemap-lexikon.xml` have no route (render 404).
2. 11 retired `/blog/*` slugs in `sitemap-images.xml` render 404 (`/blog/nap-konsistenz`, `/blog/seo-toolbox`, …).
3. 3 articles render blank (registry slug mismatch): `/blog/local-seo-apotheken`,
   `/blog/local-seo-tattoo-studios`, `/blog/local-seo-yoga-studios` – all in `sitemap.xml`.
4. 2 canonicals point at non-existent URLs: `/blog/gbp-mehrere-standorte`, `/blog/local-seo-vs-maps-seo`.
5. `/partner` has the generic site title and no canonical.
6. 137 of 164 articles reference a non-existent OG image `/images/blog/<slug>.jpg`.
7. 31 internal-link targets have no route (see TAKEOVER_AUDIT §6).
8. The 404 page answers HTTP 200 (soft 404) – a Lovable/SPA hosting trait.
9. Same URL serves DE or EN content depending on the visitor's browser. `hreflang` on the home page
   lists `/?lang=en` and `/?lang=ar`, but no code reads `?lang=`; articles only declare `de` + `x-default`
   (133 routes declare none).
10. `html lang` is not always updated to match the rendered language in the en-US render.

## 5. Baseline tables

### A. Indexable URLs (187) – must keep path, title, description, canonical, H1, schema

| # | Path | Canonical = path | Title (de-DE render) | Title (en-US render = Googlebot) | H1 (de-DE) | Sitemap |
|---|---|---|---|---|---|---|
| 1 | `/` | yes | Local Dominator – Local SEO & AI-Sichtbarkeit | Local Dominator – Local SEO & AI Visibility | Während du das liest, empfiehlt die KI deinen Wettbewerber. | main |
| 2 | `/ai-visibility-audit` | yes | Kostenloser AI-Sichtbarkeits-Audit \| LocalDominate | Kostenloser AI-Sichtbarkeits-Audit \| LocalDominate | Wie sichtbar ist dein Unternehmen in ChatGPT & Google AI? | **none** |
| 3 | `/anwalt-marketing` | yes | Kanzlei Pro – Mehr Mandanten durch Local SEO \| LocalDominat… | Law Firm Pro – More Clients Through Local SEO \| LocalDomina… | Mehr Mandanten. Mehr Reputation. | main |
| 4 | `/arztpraxis-marketing` | yes | Praxis Pro – Mehr Patienten durch Google Maps & Jameda | Praxis Pro – Mehr Patienten durch Google Maps & Jameda | Mehr Patienten. Weniger Verwaltung. | main |
| 5 | `/bakeries-cologne` | yes | Bäckerei Köln – Mehr Stammkunden über AI- & Google-Suche | Bäckerei Köln – Mehr Stammkunden über AI- & Google-Suche | Mehr Stammkunden für deine Bäckerei in Köln – auch über AI-Suche | **none** |
| 6 | `/barbers-munich` | yes | Barber Marketing Munich \| Get More Clients for Your Barbers… | Barber Marketing Munich \| Get More Clients for Your Barbers… | Get More Clients for Your Barbershop in Munich – Without Doing Anythin | **none** |
| 7 | `/blog` | yes | Blog - Local SEO Tipps & Strategien \| Local Dominator | Blog - Local SEO Tips & Strategies \| Local Dominator | Local SEO Blog | main blog |
| 8 | `/blog/ai-agents-lokale-buchungen-2026` | yes | AI Agents Local SEO 2026: Operator, Gemini & Comet Setup | AI Agents Local SEO 2026: Operator, Gemini & Comet Setup | AI Agents 2026: Wie Operator, ChatGPT Agent & Gemini lokale Buchungen  | blog |
| 9 | `/blog/ai-crawler-steuern-gptbot-claudebot-2026` | yes | AI-Crawler steuern 2026: robots.txt für GPTBot & Co. | AI Crawler Control 2026: robots.txt for GPTBot & Co. | AI-Crawler steuern 2026: GPTBot, ClaudeBot & PerplexityBot richtig kon | blog |
| 10 | `/blog/ai-falschangaben-korrigieren-2026` | yes | Falsche AI-Angaben korrigieren 2026: Prozess & Prävention | Fix Incorrect AI Answers 2026: Process & Prevention | Falschangaben in AI-Antworten korrigieren 2026: 6-Schritte-Prozess | blog |
| 11 | `/blog/ai-search-optimization-2026` | yes | AI Search Optimization 2026 \| GEO Guide für Local SEO | AI Search Optimization 2026 \| GEO Guide for Local SEO | AI Search Optimization 2026: So wirst du in der KI-Suche gefunden | main blog |
| 12 | `/blog/ai-search-vs-traditional-search` | yes | AI-Suche vs Traditionelle Suche \| Vergleich 2026 | AI Search vs Traditional Search \| Comparison 2026 | AI-Suche vs. Traditionelle Suche: Der komplette Vergleich für lokale U | main blog |
| 13 | `/blog/ai-suche-lokale-unternehmen` | yes | AI Search Optimization für lokale Unternehmen \| Guide 2026 | AI Search Optimization for Local Businesses \| Guide 2026 | AI Search Optimization für lokale Unternehmen: Der komplette Guide 202 | main blog |
| 14 | `/blog/ai-visibility-checklist` | yes | AI Visibility Checklist \| AI-Sichtbarkeit prüfen 2026 | AI Visibility Checklist \| Check AI Readiness 2026 | AI Visibility Checklist: Ist deine Website bereit für AI-Suche? | main blog |
| 15 | `/blog/ai-visibility-index-local-seo-metrik` | yes | AI Visibility Index 2026: Neue Local-SEO-Metrik \| Guide | AI Visibility Index 2026: New Local SEO Metric \| Guide | AI Visibility Index – die neue Local-SEO-Metrik 2026 | blog |
| 16 | `/blog/ai-zitat-monitoring-local-seo-2026` | yes | AI-Zitat-Monitoring 2026: 5 Kennzahlen & Prompt-Set | AI Citation Monitoring 2026: 5 Metrics & Prompt Set | AI-Zitat-Monitoring 2026: Erwähnungen in ChatGPT, Perplexity & Gemini  | blog |
| 17 | `/blog/ai-zukunft-hub` | yes | AI & Zukunft Hub – Local SEO im KI-Zeitalter 2026 | AI & Zukunft Hub – Local SEO im KI-Zeitalter 2026 | AI & Zukunft Hub | main blog |
| 18 | `/blog/apple-business-connect-local-seo-2026` | yes | Apple Business Connect 2026: Local SEO für Apple Maps & Siri | Apple Business Connect 2026: Local SEO for Apple Maps & Siri | Apple Business Connect: Local SEO für Apple Maps & Siri 2026 | blog |
| 19 | `/blog/bewertungen-reputation-hub` | yes | Bewertungen & Reputation Hub – Alle Guides 2026 | Bewertungen & Reputation Hub – Alle Guides 2026 | Bewertungen & Reputation Hub | main blog |
| 20 | `/blog/bewertungs-antworten-vorlagen` | yes | Bewertungs-Antworten Vorlagen \| 50 Templates 2026 | Review Response Templates \| 50 Templates 2026 | Bewertungs-Antworten: 50 Vorlagen für jede Situation | main blog images |
| 21 | `/blog/bing-copilot-local-seo-2026` | yes | Bing Copilot Local SEO 2026: Setup & Optimierung | Bing Copilot Local SEO 2026: Setup & Optimization | Bing & Microsoft Copilot 2026: Local SEO für ChatGPT, Edge & Windows | blog |
| 22 | `/blog/case-studies-hub` | yes | Local SEO Fallstudien Hub – Praxisbeispiele aus 22+ Branche… | Local SEO Fallstudien Hub – Praxisbeispiele aus 22+ Branche… | Local SEO Fallstudien & Praxisbeispiele | main blog |
| 23 | `/blog/chatgpt-search-lokale-unternehmen-2026` | yes | ChatGPT Search Local SEO 2026: Optimierungs-Guide & Checkli… | ChatGPT Search Local SEO 2026: Optimization Guide & Checkli… | ChatGPT Search für lokale Unternehmen 2026 — der komplette Optimierung | blog |
| 24 | `/blog/chatgpt-zitiert-lokale-unternehmen` | yes | Wie zitiert ChatGPT lokale Unternehmen? \| Guide 2026 | How ChatGPT Cites Local Businesses \| Guide 2026 | Wie zitiert ChatGPT lokale Unternehmen? | blog |
| 25 | `/blog/citation-tracking-template` | yes | Citation Tracking Template \| DACH Spreadsheet 2026 | Citation Tracking Template \| Spreadsheet for DACH 2026 | Citation Tracking Spreadsheet Template: Alle Verzeichnisse im Griff | main blog |
| 26 | `/blog/content-marketing-hub` | yes | Content & Marketing Hub – Lokale Strategien 2026 | Content & Marketing Hub – Lokale Strategien 2026 | Content & Marketing Hub | main blog |
| 27 | `/blog/core-web-vitals-local-seo` | yes | Core Web Vitals Local SEO \| Performance 2026 | Core Web Vitals Local SEO \| Performance 2026 | Core Web Vitals für lokale Websites: Performance-Guide | main blog |
| 28 | `/blog/duplicate-listing-entfernen` | yes | Duplicate Listing entfernen: Doppelte Google-Einträge lösch… | Duplicate Listing entfernen: Doppelte Google-Einträge lösch… | Doppelte Google-Einträge löschen – Duplicate Listing Anleitung (2026) | main blog images |
| 29 | `/blog/e-e-a-t-lokale-unternehmen` | yes | E-E-A-T für lokale Unternehmen \| Trust-Guide 2026 | E-E-A-T für lokale Unternehmen \| Trust-Guide 2026 | E-E-A-T für lokale Unternehmen: Expertise beweisen & Vertrauen aufbaue | main blog |
| 30 | `/blog/entity-seo-guide` | yes | Entity SEO Guide \| Knowledge Graph optimieren 2026 | Entity SEO Guide \| Knowledge Graph Optimization 2026 | Entity SEO: Wie Suchmaschinen Entitäten verstehen & nutzen | main blog |
| 31 | `/blog/faq-ai-zukunft-local-seo` | yes | FAQ: AI & Zukunft — 8 Antworten \| BuiltLocal | FAQ: AI & Zukunft — 8 Antworten \| BuiltLocal | FAQ: AI & Zukunft | main blog |
| 32 | `/blog/faq-bewertungen-reputation` | yes | FAQ: Bewertungen & Reputation — 8 Antworten \| BuiltLocal | FAQ: Bewertungen & Reputation — 8 Antworten \| BuiltLocal | FAQ: Bewertungen & Reputation | main blog |
| 33 | `/blog/faq-content-marketing-local-seo` | yes | FAQ: Content & Marketing — 8 Antworten \| BuiltLocal | FAQ: Content & Marketing — 8 Antworten \| BuiltLocal | FAQ: Content & Marketing | main blog |
| 34 | `/blog/faq-google-business-profil` | yes | FAQ: Google Business Profil — 10 Antworten \| BuiltLocal | FAQ: Google Business Profil — 10 Antworten \| BuiltLocal | FAQ: Google Business Profil | main blog |
| 35 | `/blog/faq-hub` | yes | FAQ Hub: Alle Local SEO Fragen beantwortet \| BuiltLocal | FAQ Hub: Alle Local SEO Fragen beantwortet \| BuiltLocal | FAQ Hub: Alle Local SEO Fragen | main blog |
| 36 | `/blog/faq-local-seo-grundlagen` | yes | FAQ: Local SEO Grundlagen — 10 Antworten \| BuiltLocal | FAQ: Local SEO Grundlagen — 10 Antworten \| BuiltLocal | FAQ: Local SEO Grundlagen | main blog |
| 37 | `/blog/faq-technisches-seo` | yes | FAQ: Technisches SEO — 10 Antworten \| BuiltLocal | FAQ: Technisches SEO — 10 Antworten \| BuiltLocal | FAQ: Technisches SEO | main blog |
| 38 | `/blog/gbp-attribute-richtig-nutzen` | yes | GBP Attribute Guide: Alle Optionen für mehr Sichtbarkeit 20… | GBP Attribute Guide: Alle Optionen für mehr Sichtbarkeit 20… | Google Business Attribute – Alle Optionen optimal nutzen (2026) | main blog images |
| 39 | `/blog/gbp-bewertung-loeschen-anleitung` | yes | Google Bewertung löschen lassen \| Schritt-für-Schritt 2026 | Google Bewertung löschen lassen \| Schritt-für-Schritt 2026 | Google Bewertung löschen lassen – Komplette Anleitung 2026 | main blog images |
| 40 | `/blog/gbp-fotos-optimieren` | yes | Google Business Fotos optimieren \| Bilder-Guide 2026 | Google Business Fotos optimieren \| Bilder-Guide 2026 | Google Business Fotos optimieren: Der komplette Bilder-Guide | main blog |
| 41 | `/blog/gbp-mehrere-standorte` | → /blog/gbp-mehrere-standorte-verwalten | Mehrere GBP Standorte verwalten \| Multi-Location Guide 2026 | Mehrere GBP Standorte verwalten \| Multi-Location Guide 2026 | Mehrere Google Business Standorte verwalten – Der komplette Guide 2026 | main blog images |
| 42 | `/blog/gbp-nicht-in-suche-sichtbar` | yes | GBP nicht sichtbar in Google? 9 Gründe & Soforthilfe 2026 | GBP nicht sichtbar in Google? 9 Gründe & Soforthilfe 2026 | Google Business Profil nicht sichtbar – 9 Gründe & Lösungen | main blog images |
| 43 | `/blog/gbp-oeffnungszeiten-sondertage` | yes | GBP Öffnungszeiten & Feiertage einstellen \| Guide 2026 | GBP Öffnungszeiten & Feiertage einstellen \| Guide 2026 | Google Business Öffnungszeiten & Sondertage richtig einstellen | main blog images |
| 44 | `/blog/gbp-suspendiert-reaktivieren` | yes | GBP Suspendiert? So reaktivierst du dein Profil \| Anleitung… | GBP Suspendiert? So reaktivierst du dein Profil \| Anleitung… | Google Business Profil suspendiert – So stellst du es wieder her (2026 | main blog images |
| 45 | `/blog/gbp-verifizierung-fehlgeschlagen` | yes | GBP Verifizierung fehlgeschlagen? 8 Lösungen \| Guide 2026 | GBP Verifizierung fehlgeschlagen? 8 Lösungen \| Guide 2026 | Google Business Verifizierung schlägt fehl – 8 Lösungen für alle Probl | main blog images |
| 46 | `/blog/geo-content-briefing-vorlage-2026` | yes | GEO-Content-Briefing 2026: Vorlage & 8 Bausteine | GEO Content Briefing 2026: Template & 8 Building Blocks | GEO-Content-Briefing 2026: Vorlage für zitierfähige Texte in AI-Suche | blog |
| 47 | `/blog/google-ai-mode-local-seo-2026` | yes | Google AI Mode Local SEO 2026: Strategie & Optimierung | Google AI Mode Local SEO 2026: Strategy & Optimization | Google AI Mode 2026: Local SEO für Geminis konversationale Suche | blog |
| 48 | `/blog/google-ai-overviews-local-seo` | yes | Google AI Overviews \| Local SEO Auswirkungen 2026 | Google AI Overviews \| Local SEO Auswirkungen 2026 | Google AI Overviews & Local SEO: Was sich ändert | main blog |
| 49 | `/blog/google-bewertungen-bekommen` | yes | Google Bewertungen bekommen: 7 Strategien für 2026 | Get Google Reviews: 7 Strategies for 2026 \| Local Dominator | Google Bewertungen bekommen: 7 bewährte Strategien | main blog images |
| 50 | `/blog/google-business-insights-verstehen` | yes | Google Business Insights \| Analytics Guide 2026 | Google Business Insights \| Analytics Guide 2026 | Google Business Insights richtig verstehen & nutzen | main blog images |
| 51 | `/blog/google-business-kategorien-guide` | yes | Google Business Kategorien \| Vollständiger Guide 2026 | Google Business Categories \| Complete Guide 2026 | Google Business Kategorien: Welche passt zu deinem Unternehmen? | main blog images |
| 52 | `/blog/google-business-messaging` | yes | Google Business Messaging \| Chat-Guide 2026 | Google Business Messaging \| Chat-Guide 2026 | Google Business Messaging: Kundenkommunikation optimal nutzen | main blog |
| 53 | `/blog/google-business-produkte-services` | yes | Google Business Produkte & Services \| Guide 2026 | Google Business Products & Services \| Guide 2026 | Google Business Produkte & Services optimal präsentieren | main blog images |
| 54 | `/blog/google-business-profil-hub` | yes | Google Business Profil Hub - Alle Guides & Anleitungen 2026 | Google Business Profil Hub - Alle Guides & Anleitungen 2026 | Google Business Profil Hub | main blog |
| 55 | `/blog/google-maps-audit-template` | yes | Google Maps Audit Template \| 75+ Prüfpunkte Checkliste 2026 | Google Maps Audit Template \| 75+ Checkpoint Checklist 2026 | Google Maps Audit Template: Vollständige Checkliste mit 75+ Punkten | main blog |
| 56 | `/blog/google-maps-konkurrenzanalyse` | yes | Google Maps Konkurrenzanalyse \| Framework & Tools 2026 | Google Maps Competitor Analysis \| Framework & Tools 2026 | Google Maps Konkurrenzanalyse: So analysierst du Top-Rankings | main blog |
| 57 | `/blog/google-maps-ranking-case-studies` | yes | Google Maps Case Studies \| 6 Branchen-Erfolge 2026 | Google Maps Case Studies \| 6 Industry Success Stories 2026 | Google Maps Ranking Case Studies: 6 Branchen, 6 Erfolge | main blog |
| 58 | `/blog/google-maps-ranking-tracker` | yes | Google Maps Ranking Tracker \| Grid-Tracking & Tools 2026 | Google Maps Ranking Tracker \| Grid Tracking & Tools 2026 | Google Maps Ranking Tracker: So trackst du deine lokalen Rankings | main blog |
| 59 | `/blog/google-maps-ranking-verbessern` | yes | Google Maps Ranking verbessern: 7-Schritte-Plan 2026 | Improve Google Maps Ranking: 7-Step Plan 2026 | Google Maps Ranking verbessern: 7-Schritte-Aktionsplan 2026 | main blog images |
| 60 | `/blog/google-maps-seo-hub` | yes | Google Maps SEO Hub – Alle Guides für Top-Rankings 2026 | Google Maps SEO Hub – Alle Guides für Top-Rankings 2026 | Google Maps SEO Hub | main blog |
| 61 | `/blog/google-maps-seo-ranking-faktoren` | yes | Google Maps 20 Ranking-Signale & Gewichtung \| 2026 | Google Maps 20 Ranking Signals & Weighting \| 2026 | Google Maps SEO 2026: Alle 20 Ranking-Signale mit Gewichtung | main blog |
| 62 | `/blog/google-maps-seo-vs-organic-seo` | yes | Google Maps SEO vs Organic SEO \| Vergleich 2026 | Google Maps SEO vs Organic SEO \| Comparison 2026 | Google Maps SEO vs. Organic SEO: Ranking-Faktoren, Strategien & ROI im | main blog |
| 63 | `/blog/google-maps-spam-erkennen` | yes | Google Maps Spam erkennen & melden \| Anleitung 2026 | Google Maps Spam Detection & Reporting \| Guide 2026 | Google Maps Spam erkennen & melden: Der komplette Guide | main blog |
| 64 | `/blog/google-my-business-optimieren` | yes | Google My Business optimieren: Anleitung 2026 | Optimize Google My Business: Guide 2026 \| Local Dominator | Google My Business optimieren: Schritt-für-Schritt Anleitung | main blog images |
| 65 | `/blog/google-posts-ranking-faktor` | yes | Google Posts \| Unterschätzter Ranking-Faktor 2026 | Google Posts \| Underrated Ranking Factor 2026 | Google Posts optimal nutzen: Der unterschätzte Ranking-Faktor | main blog |
| 66 | `/blog/ki-tools-local-seo` | yes | KI-Tools Local SEO \| AI-Helfer Guide 2026 \| Local Dominator | KI-Tools Local SEO \| AI-Helfer Guide 2026 \| Local Dominator | KI-Tools für Local SEO: Die besten AI-Helfer 2026 | main blog images |
| 67 | `/blog/kostenloses-seo-guide` | yes | Kostenloses SEO: 50+ Gratis-Strategien & Tools \| Guide 2026 | Kostenloses SEO: 50+ Gratis-Strategien & Tools \| Guide 2026 | Kostenloses SEO: Der ultimative Guide für Einsteiger 2026 | main blog |
| 68 | `/blog/llms-txt-lokale-unternehmen-2026` | yes | llms.txt Local SEO 2026: Spec, Beispiel & 7-Schritte-Setup | llms.txt Local SEO 2026: Spec, Example & 7-Step Setup | llms.txt für lokale Unternehmen 2026: Setup, Beispiel & Best Practices | blog |
| 69 | `/blog/local-citations-2025` | yes | Local Citations 2026: Die wichtigsten Verzeichnisse \| Guide | Local Citations 2026: Die wichtigsten Verzeichnisse \| Guide | Local Citations 2026: Welche Verzeichnisse sind noch wichtig? | main blog images |
| 70 | `/blog/local-content-marketing` | yes | Local Content Marketing \| Strategie 2026 \| Local Dominator | Local Content Marketing \| Strategy 2026 \| Local Dominator | Local Content Marketing: Content-Strategie für lokale Unternehmen | main blog images |
| 71 | `/blog/local-keyword-research-template` | yes | Local Keyword Research Template \| Vorlage & Workflow 2026 | Local Keyword Research Template \| Workflow 2026 | Local Keyword Research Template: Systematische Keyword-Recherche für l | main blog |
| 72 | `/blog/local-link-building` | yes | Local Link Building \| Backlinks 2026 \| Local Dominator | Local Link Building \| Backlinks 2026 \| Local Dominator | Local Link Building: Backlinks für lokale Unternehmen aufbauen | main blog images |
| 73 | `/blog/local-link-building-blueprint` | yes | Local Link Building Blueprint \| DACH-Guide 2026 | Local Link Building Blueprint \| Guide 2026 \| Local Dominator | Local Link Building Blueprint: Der komplette Leitfaden für lokale Back | main blog |
| 74 | `/blog/local-seo-aerzte-praxen` | yes | Local SEO für Ärzte \| Praxis-Marketing 2026 | Local SEO for Doctors \| Practice Marketing 2026 | Local SEO für Ärzte & Praxen: Patientengewinnung durch Google | main blog |
| 75 | `/blog/local-seo-anwaelte-kanzleien` | yes | Local SEO für Anwälte \| Kanzlei-Marketing 2026 | Local SEO for Lawyers \| Law Firm Marketing 2026 | Local SEO für Anwälte & Kanzleien: Mandanten durch Google gewinnen | main blog |
| 76 | `/blog/local-seo-audit-checkliste` | yes | Local SEO Audit: Ist-Analyse & Diagnose \| 2026 | Local SEO Audit: Ist-Analyse & Diagnose \| 2026 | Local SEO Audit: Ist-Analyse mit 50+ Diagnose-Punkten & Scoring | main blog images |
| 77 | `/blog/local-seo-autowerkstatt` | yes | Local SEO für Autowerkstätten \| KFZ Marketing 2026 | Local SEO for Auto Repair Shops \| Automotive Marketing 2026 | Local SEO für Autowerkstätten & KFZ-Betriebe | main blog |
| 78 | `/blog/local-seo-baeckerei` | yes | Local SEO für Bäckereien \| Branchenguide 2026 | Local SEO for Bakeries \| Industry Guide 2026 | Local SEO für Bäckereien: Mehr Kunden durch Google (2026) | main blog |
| 79 | `/blog/local-seo-baeckerei-konditorei` | yes | Local SEO Konditoreien \| Torten-Marketing 2026 | Local SEO Pastry Shops \| Cake Marketing 2026 | Local SEO für Konditoreien & Tortenbetriebe: Spezialitäten vermarkten | blog |
| 80 | `/blog/local-seo-basel` | yes | Local SEO Basel \| Dreiländereck-Guide 2026 \| Local Dominator | Local SEO Basel \| Dreiländereck-Guide 2026 \| Local Dominator | Local SEO Basel: Grenzregion Schweiz-Deutschland-Frankreich | main blog images |
| 81 | `/blog/local-seo-berlin` | yes | Local SEO Berlin \| Hauptstadt-Guide 2026 \| Local Dominator | Local SEO Berlin \| Capital City Guide 2026 \| Local Dominator | Local SEO Berlin: Der Hauptstadt-Guide für Unternehmen | main blog |
| 82 | `/blog/local-seo-branchen-hub` | yes | Local SEO Branchen-Guides – 22+ Branchen im Überblick 2026 | Local SEO Branchen-Guides – 22+ Branchen im Überblick 2026 | Local SEO Branchen-Guides | main blog |
| 83 | `/blog/local-seo-cafe-coffeeshop` | yes | Local SEO für Cafés \| Mehr Gäste 2026 \| Local Dominator | Local SEO for Cafés \| More Guests 2026 \| Local Dominator | Local SEO für Cafés & Coffee Shops | blog |
| 84 | `/blog/local-seo-case-study-baecker` | yes | Local SEO Case Study Bäcker \| Erfolgsgeschichte | Local SEO Case Study Bakery \| Success Story | Local SEO Case Study: Wie ein Bäcker 200% mehr Kunden gewann | main blog |
| 85 | `/blog/local-seo-checkliste-komplett` | yes | Local SEO Implementierungs-Checkliste \| 80+ Maßnahmen 2026 | Local SEO Implementation Checklist \| 80+ Actions 2026 | Local SEO Implementierungs-Checkliste: 80+ Maßnahmen in 8 Phasen syste | main blog |
| 86 | `/blog/local-seo-doener-kebab-imbiss` | yes | Local SEO für Döner-Läden \| Kebab-Marketing 2026 | Local SEO for Döner Shops \| Kebab Marketing 2026 | Local SEO für Döner & Kebab-Imbisse: Der ultimative Marketing-Guide 20 | main blog |
| 87 | `/blog/local-seo-duesseldorf` | yes | Local SEO Düsseldorf \| NRW-Guide 2026 \| Local Dominator | Local SEO Düsseldorf \| NRW-Guide 2026 \| Local Dominator | Local SEO Düsseldorf: Mode, Messe & mehr Kunden | main blog images |
| 88 | `/blog/local-seo-elektrotechnik` | yes | Local SEO Elektriker \| Elektrotechnik Marketing 2026 | Local SEO Electricians \| Marketing Guide 2026 | Local SEO für Elektriker & Elektrotechniker: Mehr Aufträge | main blog images |
| 89 | `/blog/local-seo-fahrschule` | yes | Local SEO für Fahrschulen \| Mehr Fahrschüler 2026 | Local SEO for Driving Schools \| More Students 2026 | Local SEO für Fahrschulen: Mehr Fahrschüler gewinnen | blog |
| 90 | `/blog/local-seo-fehler` | yes | Local SEO Fehler vermeiden \| 15 Probleme 2026 | Avoid Local SEO Mistakes \| 15 Problems 2026 | Local SEO Fehler: 15 Gründe warum du nicht gefunden wirst | main blog |
| 91 | `/blog/local-seo-fitness` | yes | Local SEO für Fitness \| Studio-Marketing 2026 | Local SEO for Fitness \| Studio Marketing 2026 | Local SEO für Fitnessstudios & Personal Trainer | main blog |
| 92 | `/blog/local-seo-fotograf` | yes | Local SEO für Fotografen \| Mehr Buchungen 2026 | Local SEO for Photographers \| More Bookings 2026 | Local SEO für Fotografen: Mehr Buchungen durch Google | main blog |
| 93 | `/blog/local-seo-frankfurt` | yes | Local SEO Frankfurt \| Finance-Hub Guide 2026 | Local SEO Frankfurt \| Finance Hub Guide 2026 | Local SEO Frankfurt: Finanzmetropole richtig nutzen | main blog |
| 94 | `/blog/local-seo-friseursalon-beauty` | yes | Local SEO Friseure & Beauty-Studios \| Guide 2026 | Local SEO Hair Salons & Beauty Studios \| Guide 2026 | Local SEO für Friseursalons & Beauty-Studios: Der ultimative Guide mit | main blog |
| 95 | `/blog/local-seo-fuer-restaurants` | yes | Local SEO für Restaurants: Mehr Gäste 2026 \| Local Dominator | Local SEO for Restaurants: More Guests 2026 | Local SEO für Restaurants: Mehr Gäste durch Google | main blog |
| 96 | `/blog/local-seo-garten-landschaftsbau` | yes | Local SEO Garten- & Landschaftsbau 2026 \| GaLaBau | Local SEO Landscaping 2026 \| Garden & Grounds | Local SEO für Garten- & Landschaftsbau: Saison richtig nutzen | blog |
| 97 | `/blog/local-seo-gebaeudereinigung` | yes | Local SEO Gebaeudereinigung 2026 \| B2B-Anfragen | Local SEO Commercial Cleaning 2026 \| B2B Leads | Local SEO für Gebäudereinigung: Objektanfragen statt Klicks | blog |
| 98 | `/blog/local-seo-hamburg` | yes | Local SEO Hamburg \| Der Hansestadt-Guide 2026 | Local SEO Hamburg \| The Hanseatic City Guide 2026 | Local SEO Hamburg: Der Hanseatische Marketing-Guide | main blog |
| 99 | `/blog/local-seo-handwerker` | yes | Local SEO für Handwerker: Komplette Anleitung 2026 | Local SEO für Handwerker: Komplette Anleitung 2026 | Local SEO für Handwerker: Mehr Aufträge durch Google | main blog images |
| 100 | `/blog/local-seo-hannover` | yes | Local SEO Hannover \| Städte-Guide 2026 \| Local Dominator | Local SEO Hannover \| City Guide 2026 \| Local Dominator | Local SEO Hannover: Der Guide für niedersächsische Unternehmen | main blog |
| 101 | `/blog/local-seo-heizung-sanitaer` | yes | Local SEO Heizung Sanitaer 2026 \| SHK-Betriebe | Local SEO Plumbing & Heating 2026 \| Trade Guide | Local SEO für Heizung & Sanitär (SHK): Notdienst und Projekte | blog |
| 102 | `/blog/local-seo-hochzeitsdienstleister` | yes | Local SEO Hochzeitsdienstleister \| Mehr Buchungen 2026 | Local SEO Wedding Vendors \| More Bookings 2026 | Local SEO für Hochzeitsdienstleister: Florist bis DJ | blog |
| 103 | `/blog/local-seo-hotels` | yes | Local SEO für Hotels \| Mehr Direktbuchungen 2026 | Local SEO for Hotels \| More Direct Bookings 2026 | Local SEO für Hotels & Unterkünfte: Direktbuchungen steigern | main blog |
| 104 | `/blog/local-seo-immobilienmakler` | yes | Local SEO für Immobilienmakler \| Mehr Anfragen 2026 | Local SEO for Real Estate Agents \| More Inquiries 2026 | Local SEO für Immobilienmakler: Objektanfragen durch Google | main blog |
| 105 | `/blog/local-seo-keywords-finden` | yes | Local SEO Keywords finden: Keyword-Recherche Guide 2026 | Local SEO Keywords finden: Keyword-Recherche Guide 2026 | Local SEO Keywords finden: Der komplette Keyword-Recherche Guide 2026 | main blog |
| 106 | `/blog/local-seo-koeln` | yes | Local SEO Köln \| Rheinland-Guide 2026 \| Local Dominator | Local SEO Köln \| Rheinland-Guide 2026 \| Local Dominator | Local SEO Köln: Rheinland-Marketing für lokale Unternehmen | main blog images |
| 107 | `/blog/local-seo-maler-lackierer` | yes | Local SEO Maler & Lackierer \| Marketing 2026 | Local SEO Painters \| Marketing Guide 2026 \| Local Dominator | Local SEO für Maler & Lackierer: Mehr Aufträge gewinnen | blog |
| 108 | `/blog/local-seo-mehrstufig-unternehmen` | yes | Franchise SEO \| GBP-Management & Markenkonsistenz 2026 | Franchise SEO \| GBP-Management & Markenkonsistenz 2026 | Franchise-SEO Strategie: GBP-Management & Markenkonsistenz bei mehrere | main blog images |
| 109 | `/blog/local-seo-monthly-checklist` | yes | Local SEO Monthly Checklist \| Monatliche Routine 2026 | Local SEO Monthly Checklist \| Monthly Routine 2026 | Local SEO Monthly Checklist: Die monatliche Routine für Top-Rankings | main blog |
| 110 | `/blog/local-seo-muenchen` | yes | Local SEO München \| Bayern-Guide 2026 \| Local Dominator | Local SEO Munich \| Bavaria Guide 2026 \| Local Dominator | Local SEO München: Der Guide für bayerische Unternehmen | main blog |
| 111 | `/blog/local-seo-notdienst-keywords` | yes | Notdienst-Keywords optimieren \| Emergency SEO 2026 | Emergency Service Keywords \| SEO Guide 2026 | Notdienst-Keywords: Wenn Kunden dringend suchen | main blog images |
| 112 | `/blog/local-seo-optiker` | yes | Local SEO Optiker & Hörakustiker \| Marketing 2026 | Local SEO Opticians \| Marketing Guide 2026 \| Local Dominator | Local SEO für Optiker & Hörakustiker: Kunden gewinnen | main blog images |
| 113 | `/blog/local-seo-physiotherapie` | yes | Local SEO Physiotherapie \| Heilpraktiker Marketing 2026 | Local SEO Physical Therapy \| Practitioner Marketing 2026 | Local SEO für Physiotherapie & Heilpraktiker: Patienten gewinnen | main blog images |
| 114 | `/blog/local-seo-ranking-faktoren-erklaert` | yes | Local SEO Ranking-Faktoren 2026 \| Alle Signale | Local SEO Ranking Factors 2026 \| Complete Analysis | Local SEO Ranking-Faktoren erklärt: Alle Signale im Detail 2026 | main blog |
| 115 | `/blog/local-seo-reporting-template` | yes | Local SEO Reporting Template \| KPI-Vorlage 2026 | Local SEO Reporting Template \| KPI Template 2026 | Local SEO Reporting Template: Monatlicher Report + KPI-Vorlage | main blog |
| 116 | `/blog/local-seo-roadmap-90-tage` | yes | Local SEO 12-Wochen-Timeline \| Gantt & KPIs 2026 | Local SEO 12-Week Timeline \| Gantt & KPIs 2026 | Local SEO Wochenplan: 12-Wochen-Timeline mit Gantt-Diagramm & KPI-Meil | main blog |
| 117 | `/blog/local-seo-sanitaer-heizung` | yes | Local SEO SHK \| Sanitär Heizung Klima 2026 \| Local Dominator | Local SEO HVAC \| Plumbing Heating Cooling 2026 | Local SEO für SHK-Betriebe: Sanitär, Heizung, Klima | **none** |
| 118 | `/blog/local-seo-schweiz` | yes | Local SEO Schweiz \| KMU-Leitfaden 2026 \| Local Dominator | Local SEO Switzerland \| SME Guide 2026 \| Local Dominator | Local SEO Schweiz: Der komplette Leitfaden für KMUs | main blog |
| 119 | `/blog/local-seo-sprachschule` | yes | Local SEO für Sprachschulen \| Mehr Schüler 2026 | Local SEO for Language Schools \| More Students 2026 | Local SEO für Sprachschulen & Nachhilfe-Institute | blog |
| 120 | `/blog/local-seo-staedte-hub` | yes | Local SEO Städte-Guides – 12 Städte in DACH \| 2026 | Local SEO Städte-Guides – 12 Städte in DACH \| 2026 | Local SEO Städte-Guides – DACH-Region | main blog |
| 121 | `/blog/local-seo-statistiken-daten` | yes | Local SEO Statistiken 2026 – 88+ Datenpunkte | Local SEO Statistiken 2026 – 88+ Datenpunkte | Local SEO Statistiken & Daten 2026: 88+ Datenpunkte für 22 Branchen | main blog |
| 122 | `/blog/local-seo-steuerberater` | yes | Local SEO für Steuerberater \| Mandantengewinnung 2026 | Local SEO for Tax Consultants \| Client Acquisition 2026 | Local SEO für Steuerberater & Buchhalter: Mandanten gewinnen | main blog |
| 123 | `/blog/local-seo-strategie-kleine-unternehmen` | yes | Local SEO Strategie KMU \| Aktionsplan 2026 \| Local Dominator | Local SEO Strategy for Small Businesses \| Action Plan 2026 | Local SEO Strategie für kleine Unternehmen: Der komplette Aktionsplan  | main blog |
| 124 | `/blog/local-seo-strategy-planner` | yes | Local SEO Strategy Planner \| 7-Phasen Aufgabenplan 2026 | Local SEO Strategy Planner \| 7-Phase Task Plan 2026 | Local SEO Strategy Planner: 7-Phasen-Aufgabenplan mit Budget & Checkli | main blog |
| 125 | `/blog/local-seo-stuttgart` | yes | Local SEO Stuttgart \| Baden-Württemberg Guide 2026 | Local SEO Stuttgart \| Baden-Württemberg Guide 2026 | Local SEO Stuttgart: Automobilregion & mehr | main blog images |
| 126 | `/blog/local-seo-tierarzt` | yes | Local SEO für Tierärzte \| Praxis-Marketing 2026 | Local SEO für Tierärzte \| Praxis-Marketing 2026 | Local SEO für Tierärzte & Tierpraxen | main blog images |
| 127 | `/blog/local-seo-tracking-kpis` | yes | Local SEO KPIs \| Tracking & Reporting 2026 \| Local Dominator | Local SEO KPIs \| Tracking & Reporting 2026 \| Local Dominator | Local SEO Tracking: KPIs und Reporting richtig aufsetzen | blog |
| 128 | `/blog/local-seo-trends-deutschland` | yes | Local SEO Trends Deutschland 2026 \| Report \| Local Dominator | Local SEO Trends Germany 2026 \| Report \| Local Dominator | Local SEO Trends Deutschland 2026: Der grosse Trend-Report | **none** |
| 129 | `/blog/local-seo-trends-oesterreich` | yes | Local SEO Trends Österreich 2026 \| Report \| Local Dominator | Local SEO Trends Austria 2026 \| Report \| Local Dominator | Local SEO Trends Österreich 2026: Der AT-Markt im Wandel | **none** |
| 130 | `/blog/local-seo-trends-schweiz` | yes | Local SEO Trends Schweiz 2026 \| DACH-Report | Local SEO Trends Switzerland 2026 \| DACH Report | Local SEO Trends Schweiz 2026: Was KMU jetzt wissen müssen | **none** |
| 131 | `/blog/local-seo-umzugsunternehmen` | yes | Local SEO Umzugsunternehmen 2026 \| Routen & Anfragen | Local SEO Moving Companies 2026 \| Routes & Leads | Local SEO für Umzugsunternehmen: In zwei Städten gefunden werden | blog |
| 132 | `/blog/local-seo-voice-search` | yes | Voice Search Local SEO \| Sprachsuche 2026 \| Local Dominator | Voice Search Local SEO \| Voice Search 2026 \| Local Dominator | Local SEO & Voice Search: Hey Google, wo ist... | main blog |
| 133 | `/blog/local-seo-vs-maps-seo` | → /blog/local-seo-vs-maps-unterschied | Local SEO vs. Google Maps SEO: Der komplette Vergleich 2026 | Local SEO vs. Google Maps SEO: Der komplette Vergleich 2026 | Local SEO vs. Google Maps SEO – Was ist der Unterschied? | main blog |
| 134 | `/blog/local-seo-vs-organisch` | yes | Local SEO vs Organic SEO \| Unterschiede 2026 | Local SEO vs Organic SEO \| Differences 2026 | Local SEO vs. organisches SEO: Die wichtigsten Unterschiede | main blog |
| 135 | `/blog/local-seo-wien` | yes | Local SEO Wien \| Österreich-Guide 2026 \| Local Dominator | Local SEO Wien \| Österreich-Guide 2026 \| Local Dominator | Local SEO Wien: Der Österreich-Guide für KMUs | main blog images |
| 136 | `/blog/local-seo-zahnarzt` | yes | Local SEO Zahnarzt \| Zahnarzt Marketing 2026 | Local SEO Dentist \| Dental Marketing 2026 \| Local Dominator | Local SEO für Zahnärzte: Mehr Patienten durch Google | main blog images |
| 137 | `/blog/local-seo-zuerich` | yes | Local SEO Zürich \| Kompletter Guide 2026 \| Local Dominator | Local SEO Zurich \| Complete Guide 2026 \| Local Dominator | Local SEO Zürich: So dominierst du den Zürcher Markt | main blog |
| 138 | `/blog/localbusiness-schema-implementierung` | yes | LocalBusiness Schema Markup \| Implementierung Guide 2026 | LocalBusiness Schema Markup \| Implementation Guide 2026 | LocalBusiness Schema implementieren: Komplette Anleitung mit Code-Beis | main blog |
| 139 | `/blog/lokale-events-marketing` | yes | Lokale Events für SEO \| Event-Marketing 2026 | Local Events for SEO \| Event Marketing 2026 | Lokale Events für SEO nutzen: Sponsoring & Veranstaltungen | main blog images |
| 140 | `/blog/lokale-influencer-kooperationen` | yes | Lokale Influencer Marketing \| Kooperations-Guide 2026 | Local Influencer Marketing \| Partnership Guide 2026 | Lokale Influencer-Marketing: Kooperationen aufbauen | **none** |
| 141 | `/blog/lokale-landing-pages` | yes | Lokale Landing Pages \| Standort-Seiten 2026 | Local Landing Pages \| Location Pages 2026 \| Local Dominator | Lokale Landing Pages erstellen: One-Page pro Standort | blog |
| 142 | `/blog/lokale-seo-fuer-neugruender` | yes | Local SEO für Neugründer \| Startup Guide 2026 | Local SEO für Neugründer \| Startup Guide 2026 | Local SEO für Neugründer: Von Null zur lokalen Sichtbarkeit | main blog |
| 143 | `/blog/lokale-suchmaschinenoptimierung-2026` | yes | Lokale SEO 2026: Trends & Strategien die funktionieren | Local SEO 2026: Trends & Strategies That Work | Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert | main blog |
| 144 | `/blog/mobile-local-seo` | yes | Mobile Local SEO \| Optimierung 2026 \| Local Dominator | Mobile Local SEO \| Optimization 2026 \| Local Dominator | Mobile Local SEO: Warum 80% der lokalen Suchen mobil sind | main blog |
| 145 | `/blog/nap-konsistenz-local-seo` | yes | NAP-Konsistenz für Local SEO: Der ultimative Guide 2026 | NAP-Konsistenz für Local SEO: Der ultimative Guide 2026 | NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten | main blog |
| 146 | `/blog/negative-google-bewertungen` | yes | Negative Bewertungen beantworten \| Guide 2026 | Responding to Negative Reviews \| Guide 2026 | Negative Google Bewertungen: So reagierst du professionell | main blog |
| 147 | `/blog/perplexity-claude-lokale-sichtbarkeit` | yes | Perplexity & Claude für Local SEO 2026 \| Guide | Perplexity & Claude for Local SEO 2026 \| Guide | Perplexity & Claude für lokale Sichtbarkeit nutzen | blog |
| 148 | `/blog/ranking-ploetzlich-verschwunden` | yes | Google Ranking verschwunden? 12 Ursachen & Soforthilfe 2026 | Google Ranking verschwunden? 12 Ursachen & Soforthilfe 2026 | Google Ranking plötzlich verschwunden – 12 Ursachen & Lösungen | main blog images |
| 149 | `/blog/reddit-local-seo-ai-zitate-2026` | yes | Reddit Local SEO 2026: AI-Zitate strategisch aufbauen | Reddit Local SEO 2026: Strategic AI Citation Building | Reddit für Local SEO 2026: Wie du in ChatGPT- & Perplexity-Antworten z | blog |
| 150 | `/blog/review-schema-implementierung` | yes | Review Schema Markup \| Sterne in Google Suche 2026 | Review Schema Markup \| Stars in Google Search 2026 | Review Schema implementieren: Bewertungssterne in Google bekommen | main blog |
| 151 | `/blog/schema-markup-local-seo` | yes | Schema Markup Local SEO \| Technik-Guide 2026 | Schema Markup Local SEO \| Technical Guide 2026 | Schema Markup für Local SEO: Der Implementierungsguide | main blog images |
| 152 | `/blog/schema-strategie-ai-retrieval` | yes | Schema für AI Retrieval 2026: Komplette Strategie \| Guide | Schema for AI Retrieval 2026: Complete Strategy \| Guide | Schema-Strategie für AI-Retrieval: So wirst du von LLMs gelesen | blog |
| 153 | `/blog/schema-strategie-dokument` | yes | Schema-Strategie: Article, FAQ, HowTo & LocalBusiness | Schema Strategy: Article, FAQ, HowTo & LocalBusiness | Schema-Strategie: Wann Article, FAQPage, HowTo & LocalBusiness einsetz | main blog |
| 154 | `/blog/semantic-seo-topical-authority` | yes | Semantic SEO Guide \| Topical Authority aufbauen 2026 | Semantic SEO Guide \| Build Topical Authority 2026 | Semantic SEO & Topical Authority: Der Komplettguide | main blog |
| 155 | `/blog/seo-ferienwohnungen` | yes | SEO Ferienwohnungen \| Direktbuchungen DACH 2026 | Vacation Rental SEO \| Direct Bookings DACH 2026 | SEO für Ferienwohnungen: Schweiz, Bayern & Österreich – Raus aus der O | main blog |
| 156 | `/blog/seo-toolbox-kostenlose-ressourcen` | yes | SEO Toolbox \| 50+ Kostenlose Tools & Links 2026 | SEO Toolbox \| 50+ Kostenlose Tools & Links 2026 | Die ultimative SEO-Toolbox: 50+ kostenlose Tools & Ressourcen | main blog |
| 157 | `/blog/technisches-local-seo-guide` | yes | Technisches Local SEO \| Komplett-Guide 2026 | Technical Local SEO \| Complete Guide 2026 \| Local Dominator | Technisches Local SEO: Der komplette Guide für lokale Unternehmen 2026 | main blog |
| 158 | `/blog/technisches-seo-hub` | yes | Technisches Local SEO Hub – Schema, Performance & mehr 2026 | Technisches Local SEO Hub – Schema, Performance & mehr 2026 | Technisches Local SEO Hub | main blog |
| 159 | `/blog/tiktok-search-local-seo-2026` | yes | TikTok Local Search 2026: Ranking-Signale & 7-Schritte-Plan | TikTok Local Search 2026: Ranking Signals & 7-Step Plan | TikTok Search für Local SEO 2026: So wirst du von Gen Z gefunden | blog |
| 160 | `/blog/tools-ressourcen-hub` | yes | Local SEO Tools & Ressourcen Hub – Checklisten & Templates… | Local SEO Tools & Ressourcen Hub – Checklisten & Templates… | Tools & Ressourcen Hub | main blog |
| 161 | `/blog/troubleshooting-hub` | yes | Local SEO Troubleshooting Hub – Alle Probleme gelöst 2026 | Local SEO Troubleshooting Hub – Alle Probleme gelöst 2026 | Troubleshooting Hub | main blog |
| 162 | `/blog/ultimate-guide-local-seo` | yes | Local SEO Guide 2026: Komplett-Anleitung für Top-Rankings | Local SEO Guide 2026: Complete Guide for Top Rankings | Local SEO: Der ultimative Leitfaden für lokale Unternehmen 2026 | main blog |
| 163 | `/blog/unternehmensprofil-ki-funktionen-2026` | yes | Unternehmensprofil KI-Optimierung 2026: 7 Felder | Business Profile AI Optimization 2026: 7 Fields | Unternehmensprofil & KI 2026: Welche Felder in AI-Antworten landen | blog |
| 164 | `/blog/voice-search-sprachassistenten-local-seo-2026` | yes | Voice Search Local SEO 2026: Alexa, Siri & Google Assistant | Voice Search Local SEO 2026: Alexa, Siri & Google Assistant | Voice Search 2026: Local SEO für Alexa, Siri & Google Assistant | blog |
| 165 | `/blog/was-ist-geo-generative-engine-optimization` | yes | GEO erklärt: Generative Engine Optimization 2026 \| Guide | GEO Explained: Generative Engine Optimization 2026 \| Guide | Was ist GEO? Generative Engine Optimization erklärt | blog |
| 166 | `/blog/website-content-ai-suchmaschinen` | yes | Content für AI-Suchmaschinen \| Struktur-Guide 2026 | Structure Website Content for AI Search Engines \| Guide 2026 | Website-Content für AI-Suchmaschinen strukturieren: Der komplette Guid | main blog |
| 167 | `/blog/whatsapp-business-local-seo-2026` | yes | WhatsApp Business Local SEO 2026: Setup & Rechtsrahmen | WhatsApp Business Local SEO 2026: Setup & Compliance | WhatsApp Business für lokale Unternehmen 2026: Setup, NAP-Regeln & Rec | blog |
| 168 | `/blog/wie-google-maps-ranking-funktioniert` | yes | Google Maps Algorithmus erklärt \| Nähe, Relevanz, Bekannthe… | Google Maps Algorithm Explained \| Proximity, Relevance, Pro… | Google Maps Algorithmus erklärt: Nähe, Relevanz & Bekanntheit im Detai | main blog |
| 169 | `/campsites` | yes | Campsite Website Design UK \| LocalDominate | Campsite Website Design UK \| LocalDominate | From Inspiration to Arrival. | **none** |
| 170 | `/citation-verzeichnisse` | yes | Citation-Verzeichnisse für Local SEO – DACH-Liste 2026 | Citation-Verzeichnisse für Local SEO – DACH-Liste 2026 | Citation-Verzeichnisse für Local SEO | main |
| 171 | `/content-formatting-guidelines` | yes | KI-freundliche Content-Richtlinien \| Local Dominator | AI-Friendly Content Guidelines \| Local Dominator | KI-freundliche Content-Richtlinien | **none** |
| 172 | `/dentists-munich` | yes | Dentist Marketing Munich \| Get More Patients for Your Pract… | Dentist Marketing Munich \| Get More Patients for Your Pract… | Get More Patients for Your Practice in Munich – Without Doing Anything | **none** |
| 173 | `/dentists-zurich` | yes | Zahnarzt Zürich – Mehr Patienten über AI- & Google-Suche | Zahnarzt Zürich – Mehr Patienten über AI- & Google-Suche | Mehr Patienten für deine Zahnarztpraxis in Zürich – auch über AI-Suche | **none** |
| 174 | `/diy-toolkit` | yes | Local SEO DIY-Toolkit \| Checklisten & Vorlagen für 49€ | Local SEO DIY-Toolkit \| Checklisten & Vorlagen für 49€ | Das komplette Local SEODIY-Toolkit | main |
| 175 | `/forschungsmethodik` | yes | Unsere Forschungsmethodik \| Local Dominator | Our Research Methodology \| Local Dominator | Unsere Forschungsmethodik | **none** |
| 176 | `/gyms-munich` | yes | Gym Marketing Munich \| Get More Members for Your Studio | Gym Marketing Munich \| Get More Members for Your Studio | Get More Members for Your Gym in Munich – Without Doing Anything Yours | **none** |
| 177 | `/hairdressers-munich` | yes | Friseur München mehr Kunden \| Mehr Buchungen für deinen Sal… | Friseur München mehr Kunden \| Mehr Buchungen für deinen Sal… | Mehr Kunden für deinen Friseursalon in München – ohne Mehraufwand | **none** |
| 178 | `/handwerker-marketing` | yes | Handwerker Pro – Mehr Aufträge durch Google Maps | Handwerker Pro – Mehr Aufträge durch Google Maps | Mehr Aufträge. Weniger Kaltakquise. | main |
| 179 | `/lawyers-hamburg` | yes | Anwalt Hamburg – Mehr Mandanten über AI-Suche & Google | Anwalt Hamburg – Mehr Mandanten über AI-Suche & Google | Mehr Mandantenanfragen für deine Kanzlei in Hamburg – über AI-Suche &  | **none** |
| 180 | `/partner` |  | Local Dominator – Local SEO & AI-Sichtbarkeit | Local Dominator – Local SEO & AI-Sichtbarkeit | Verdiene bis zu 120 € pro Verkauf und hilf lokalen Unternehmen, Google | main |
| 181 | `/physiotherapy-vienna` | yes | Physiotherapie Wien – Mehr Patienten über AI- & Google-Suche | Physiotherapie Wien – Mehr Patienten über AI- & Google-Suche | Mehr Patienten für deine Praxis in Wien – auch über AI-Suche | **none** |
| 182 | `/plumbers-berlin` | yes | Klempner Berlin – Mehr Aufträge für deinen Sanitärbetrieb | Klempner Berlin – Mehr Aufträge für deinen Sanitärbetrieb | Mehr Aufträge für deinen Sanitärbetrieb in Berlin – auch über AI-Suche | **none** |
| 183 | `/redaktionsrichtlinien` | yes | Redaktionsrichtlinien \| Local Dominator | Editorial Guidelines \| Local Dominator | Redaktionsrichtlinien | **none** |
| 184 | `/restaurant-marketing` | yes | Restaurant Marketing Pro – Mehr Gäste durch digitale Präsenz | Restaurant Marketing Pro – Mehr Gäste durch digitale Präsenz | Local Dominator | main |
| 185 | `/restaurants-munich` | yes | Restaurant Marketing Munich \| Get More Guests for Your Rest… | Restaurant Marketing Munich \| Get More Guests for Your Rest… | Get More Guests for Your Restaurant in Munich – Without Doing Anything | **none** |
| 186 | `/seo-lexikon` | yes | SEO Lexikon A-Z \| Alle wichtigen SEO-Begriffe erklärt \| Loc… | SEO Lexikon A-Z \| Alle wichtigen SEO-Begriffe erklärt \| Loc… | SEO Lexikon A-Z | main lexikon |
| 187 | `/ueber-uns` | yes | Über Local Dominator | About Local Dominator | Über Local Dominator | **none** |

### B. Routes that render blank (10)

| Path | Robots meta | Sitemap |
|---|---|---|
| `/ab-test` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/content-calendar` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/conversion-report` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/internal-linking` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/reset-password` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/update-password` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/analytics` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/blog/local-seo-apotheken` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | sitemap sitemap-blog |
| `/blog/local-seo-tattoo-studios` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | sitemap sitemap-blog |
| `/blog/local-seo-yoga-studios` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | sitemap sitemap-blog |

### C. Routes rendered with `noindex, nofollow` (11)

| Path | Robots meta | Sitemap |
|---|---|---|
| `/ab-test-zentrale` | noindex, nofollow | — |
| `/admin` | noindex, nofollow | — |
| `/admin/ab-test-zentrale` | noindex, nofollow | — |
| `/admin/content-plan` | noindex, nofollow | — |
| `/admin/kunden` | noindex, nofollow | — |
| `/agb` | noindex, nofollow | sitemap |
| `/danke` | noindex, nofollow | — |
| `/datenschutz` | noindex, nofollow | sitemap |
| `/impressum` | noindex, nofollow | sitemap |
| `/onboarding` | noindex, nofollow | — |
| `/test-b` | noindex, nofollow | — |

### D. Routes blocked in robots.txt only (3)

| Path | Robots meta | Sitemap |
|---|---|---|
| `/admin/article-feedback` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/blog-analytics` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |
| `/admin/content-performance` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | — |

### E. URLs listed in sitemaps that render the 404 page (77 = 66 lexikon + 11 blog)

| Path | Sitemap |
|---|---|
| `/blog/google-ai-overviews` | sitemap-images |
| `/blog/local-seo-apotheke` | sitemap-images |
| `/blog/local-seo-keywords` | sitemap-images |
| `/blog/local-seo-neugruender` | sitemap-images |
| `/blog/local-seo-restaurant` | sitemap-images |
| `/blog/local-seo-tattoo` | sitemap-images |
| `/blog/local-seo-vs-maps-unterschied` | sitemap-images |
| `/blog/local-seo-yoga` | sitemap-images |
| `/blog/lokale-seo-2026` | sitemap-images |
| `/blog/nap-konsistenz` | sitemap-images |
| `/blog/seo-toolbox` | sitemap-images |
| `/seo-lexikon/algorithmus-update` | sitemap-lexikon |
| `/seo-lexikon/alt-text` | sitemap-lexikon |
| `/seo-lexikon/anchor-text` | sitemap-lexikon |
| `/seo-lexikon/backlinks` | sitemap-lexikon |
| `/seo-lexikon/black-hat-seo` | sitemap-lexikon |
| `/seo-lexikon/bounce-rate` | sitemap-lexikon |
| `/seo-lexikon/branchenverzeichnis` | sitemap-lexikon |
| `/seo-lexikon/canonical-url` | sitemap-lexikon |
| `/seo-lexikon/citations` | sitemap-lexikon |
| `/seo-lexikon/content-strategie` | sitemap-lexikon |
| `/seo-lexikon/conversion-rate` | sitemap-lexikon |
| `/seo-lexikon/core-web-vitals` | sitemap-lexikon |
| `/seo-lexikon/crawling` | sitemap-lexikon |
| `/seo-lexikon/ctr` | sitemap-lexikon |
| `/seo-lexikon/domain-authority` | sitemap-lexikon |
| `/seo-lexikon/duplicate-content` | sitemap-lexikon |
| `/seo-lexikon/dwell-time` | sitemap-lexikon |
| `/seo-lexikon/e-e-a-t` | sitemap-lexikon |
| `/seo-lexikon/featured-snippet` | sitemap-lexikon |
| `/seo-lexikon/geo-targeting` | sitemap-lexikon |
| `/seo-lexikon/google-business-profile` | sitemap-lexikon |
| `/seo-lexikon/google-maps` | sitemap-lexikon |
| `/seo-lexikon/https` | sitemap-lexikon |
| `/seo-lexikon/image-seo` | sitemap-lexikon |
| `/seo-lexikon/indexierung` | sitemap-lexikon |
| `/seo-lexikon/internal-linking` | sitemap-lexikon |
| `/seo-lexikon/json-ld` | sitemap-lexikon |
| `/seo-lexikon/keyword-density` | sitemap-lexikon |
| `/seo-lexikon/keyword-stuffing` | sitemap-lexikon |
| `/seo-lexikon/keywords` | sitemap-lexikon |
| `/seo-lexikon/knowledge-graph` | sitemap-lexikon |
| `/seo-lexikon/knowledge-panel` | sitemap-lexikon |
| `/seo-lexikon/link-building` | sitemap-lexikon |
| `/seo-lexikon/local-pack` | sitemap-lexikon |
| `/seo-lexikon/local-seo` | sitemap-lexikon |
| `/seo-lexikon/long-tail-keywords` | sitemap-lexikon |
| `/seo-lexikon/meta-description` | sitemap-lexikon |
| `/seo-lexikon/meta-tags` | sitemap-lexikon |
| `/seo-lexikon/mobile-first-index` | sitemap-lexikon |
| `/seo-lexikon/nap` | sitemap-lexikon |
| `/seo-lexikon/nofollow-link` | sitemap-lexikon |
| `/seo-lexikon/off-page-seo` | sitemap-lexikon |
| `/seo-lexikon/on-page-seo` | sitemap-lexikon |
| `/seo-lexikon/organic-traffic` | sitemap-lexikon |
| `/seo-lexikon/pagespeed` | sitemap-lexikon |
| `/seo-lexikon/proximity` | sitemap-lexikon |
| `/seo-lexikon/quality-raters` | sitemap-lexikon |
| `/seo-lexikon/responsive-design` | sitemap-lexikon |
| `/seo-lexikon/reviews-bewertungen` | sitemap-lexikon |
| `/seo-lexikon/rich-snippets` | sitemap-lexikon |
| `/seo-lexikon/robots-txt` | sitemap-lexikon |
| `/seo-lexikon/schema-markup` | sitemap-lexikon |
| `/seo-lexikon/search-intent` | sitemap-lexikon |
| `/seo-lexikon/serp` | sitemap-lexikon |
| `/seo-lexikon/social-signals` | sitemap-lexikon |
| `/seo-lexikon/ssl-zertifikat` | sitemap-lexikon |
| `/seo-lexikon/technical-seo` | sitemap-lexikon |
| `/seo-lexikon/title-tag` | sitemap-lexikon |
| `/seo-lexikon/url-struktur` | sitemap-lexikon |
| `/seo-lexikon/user-experience` | sitemap-lexikon |
| `/seo-lexikon/voice-search` | sitemap-lexikon |
| `/seo-lexikon/webmaster-tools` | sitemap-lexikon |
| `/seo-lexikon/white-hat-seo` | sitemap-lexikon |
| `/seo-lexikon/xml-sitemap` | sitemap-lexikon |
| `/seo-lexikon/ymyl` | sitemap-lexikon |
| `/seo-lexikon/zero-click-search` | sitemap-lexikon |
