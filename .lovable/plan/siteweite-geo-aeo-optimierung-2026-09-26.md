# Siteweite GEO-/AEO-Optimierung

## Ziel
Alle indexierbaren Seiten auf `localdominate.org` für AI-Suche und klassische Suche konsistent maschinenlesbar, zitierfähig und eindeutig machen — ohne Redesign, neue Angebotsseiten oder Änderungen an Preisen und Conversion-Flows.

## Umsetzung
- **Zentrale GEO-Basis korrigieren:** `SEOHead` um konsistente Organization-/WebSite-Verknüpfungen, sprachrichtige Locale-Signale und seitenbezogene AI-Alternates ergänzen; veraltete oder falsche Domains in öffentlichen Canonicals und strukturierten Daten auf `localdominate.org` korrigieren.
- **Blogartikel siteweit stärken:** die gemeinsame `ArticleLayout`-Schicht nutzen, damit alle veröffentlichten Artikel klare Kurzantworten, sichtbare Kernfakten, Autor-/Aktualitätsangaben, Breadcrumbs, verknüpfte Article/WebPage-Schemas und nur aus tatsächlich sichtbarem Inhalt erzeugte FAQ-Daten erhalten.
- **Hub-, Branchen- und Standortseiten vereinheitlichen:** bestehende gemeinsame Hub- und Nischenvorlagen um eindeutige WebPage/CollectionPage-, Service-, Breadcrumb- und Entity-Beziehungen ergänzen; falsche Basis-URLs auf die Hauptdomain umstellen. Keine neuen sichtbaren Sektionen, sofern die bestehende Seite bereits eine direkte Antwort enthält.
- **Wichtige statische Seiten abdecken:** Startseite, Blogübersicht, Leistungsseiten, Über-uns, Redaktionsrichtlinien, Forschungsmethodik, Lexikon und Campsites mit konsistenten Canonicals, Sprachangaben, Seitentypen und Organization-Verknüpfung versehen. Admin-, Danke-, Onboarding- und Testseiten bleiben nicht als GEO-Ziele optimiert.
- **AI-Crawler-Dateien synchronisieren:** `llms.txt`, `llms-full.txt`, `ai.txt`, AI-Antwortindex, Citation-Manifest und AI-Sitemap auf aktuelle Domain, Seitenbestand, Änderungsdatum, Sprachen und belegbare Aussagen abstimmen; tote oder veraltete Links entfernen.
- **Aussagen absichern:** unbelegte Bewertungs-, Kunden- und Erfolgszahlen nicht zusätzlich als strukturierte Fakten ausspielen; Review/AggregateRating nur dort belassen, wo sichtbare und verifizierbare Daten vorliegen. Sichtbarer Inhalt und Schema müssen übereinstimmen.

## Technische Details
- Bestehende Komponenten und Datenquellen erweitern statt 200 Seiten einzeln umzubauen.
- JSON-LD bevorzugt als zusammenhängende `@graph`-Struktur mit stabilen `@id`-Beziehungen ausgeben.
- DE, EN und AR mit vorhandenem Fallback-Verhalten beibehalten; `inLanguage`, Open-Graph-Locale und hreflang passend ausgeben.
- Pro Artikel den vorhandenen Markdown-Spiegel referenzieren; fehlende oder veraltete Indizes deterministisch aus den veröffentlichten Artikeldaten aktualisieren.
- Keine neuen Abhängigkeiten, kein Styling- oder Layout-Umbau, keine Backend- oder Zahlungsänderungen.

## Prüfung
- Repräsentative Seiten jeder Klasse in DE/EN/AR auf Titel, Canonical, hreflang, genau ein H1 und JSON-LD prüfen.
- Alle veröffentlichten Blogrouten gegen Artikelregister, Markdown-Spiegel, AI-Sitemap, Citation-Manifest und Answer-Index abgleichen.
- Interne Links und öffentliche AI-Dateien auf `localdominate.org`, Erreichbarkeit und tote Pfade prüfen.
- Typecheck, gezieltes Linting, Build-Signal und Browserprüfung für Startseite, Blog, Artikel, Nischen-/Standortseite, Leistungsseite und `/campsites` durchführen.
