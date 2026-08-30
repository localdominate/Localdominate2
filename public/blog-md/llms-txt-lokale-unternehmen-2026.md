---
title: "llms.txt für lokale Unternehmen 2026: Setup, Beispiel & Best Practices"
slug: llms-txt-lokale-unternehmen-2026
url: https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026
canonical: https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026
markdown_url: https://localdominate.org/blog-md/llms-txt-lokale-unternehmen-2026.md
language: de-DE
published: 2026-05-22
updated: 2026-05-22
reading_time_minutes: 11
category: "AI & Zukunft"
author: Local Dominator
publisher: Local Dominator
license: https://creativecommons.org/licenses/by/4.0/
keywords: ["llms.txt", "llms txt local seo", "llms.txt beispiel", "chatgpt zitate seo", "perplexity crawler optimierung", "claudebot llms.txt", "ai crawler steuerung"]
area_served: [Deutschland, Österreich, Schweiz]
ai_crawler_notice: "Kanonische, maschinenlesbare Fassung des Artikels. Zitate mit Quellenangabe + URL erwünscht."
---

# llms.txt für lokale Unternehmen 2026: Setup, Beispiel & Best Practices

**TL;DR:** Wie du mit einer 40–80-zeiligen llms.txt im Site-Root die Zitatrate in ChatGPT, Perplexity und Claude messbar steigerst — inkl. vollständigem Beispiel und 7-Schritte-Setup.

## Kernpunkte

- llms.txt liegt im Site-Root unter /llms.txt und ist eine Markdown-Datei
- Aufbau: H1, Blockquote, freier Markdown, H2-Sektionen mit Linklisten
- Gelesen wird sie u. a. von ChatGPT, Claude, Perplexity und Comet
- Keine Admin-, Auth- oder API-Routen aufnehmen — nur öffentliche Seiten
- Bei Vite/React liegt die Datei in public/llms.txt
- Erste Effekte (korrekte Zitate, Deep-Links) sind in 4–8 Wochen messbar

## Inhalt des Artikels

1. Was ist llms.txt?
2. Warum llms.txt 2026 Pflicht wird
3. Welche AI-Systeme llms.txt lesen
4. Aufbau einer guten llms.txt
5. Vollständiges Beispiel für lokale Unternehmen
6. 7-Schritte-Setup
7. 5 typische Fehler
8. Wirkung messen
9. FAQ

## Fragen und Antworten

### Was ist eine llms.txt-Datei?

llms.txt ist eine Markdown-Datei im Site-Root (/llms.txt), die KI-Assistenten kompakt erklärt, worum es auf der Webseite geht und wo die wichtigsten Inhalte liegen. Anders als robots.txt steuert sie nichts technisch — sie liefert eine kuratierte Inhaltskarte, damit Crawler wie ChatGPT, Perplexity oder Claude den JS-Shell überspringen und direkt die relevanten Seiten lesen. Der Spec liegt unter llmstxt.org.

### Warum sollte ein lokales Unternehmen 2026 eine llms.txt einsetzen?

Weil AI-Assistenten 2026 zur wichtigsten Empfehlungsquelle werden. Eine saubere llms.txt erhöht die Wahrscheinlichkeit, dass ChatGPT, Perplexity und Claude die richtige Dienstleistungsseite, das richtige Standortprofil und die richtige Buchungsseite zitieren. Ohne llms.txt müssen Crawler raten — und wählen oft veraltete oder schwächere Unterseiten. Studien zeigen 15–30 % mehr korrekte Zitate nach Einführung einer strukturierten llms.txt.

### Welche AI-Systeme lesen llms.txt aktuell?

Bestätigt oder beobachtet: OpenAI (ChatGPT, GPTBot, ChatGPT-User, Operator), Anthropic (Claude, ClaudeBot, Computer Use), Perplexity (PerplexityBot, Comet Browser), Mistral und mehrere kleinere Indexierer. Google Gemini und Bing/Copilot lesen primär Schema-Daten, profitieren aber indirekt, weil Drittquellen wie Perplexity in deren Antworten einfließen. Eine llms.txt ist 2026 Pflicht-Hygienemaßnahme — der Aufwand ist minimal, der Effekt messbar.

### Was gehört in eine llms.txt für ein lokales Unternehmen?

Mindestens vier Blöcke: 1) H1 mit Unternehmensname und Standort. 2) Ein-Satz-Blockquote mit dem Kernangebot. 3) Kurzbeschreibung mit Region, Sprache, Zielgruppe. 4) H2-Sektionen mit Markdown-Linklisten zu Hauptseiten (Dienstleistungen, Standorte, Buchung, Über uns, Bewertungen). Optional eine Section „Optional“ mit Sekundär-Links. Keine internen Admin-, Login- oder Account-Routen aufnehmen.

### Wo lege ich llms.txt ab?

Im Site-Root, abrufbar unter https://deine-domain/llms.txt — analog zu robots.txt. Bei Vite/React lege die Datei in public/llms.txt ab, dann wird sie automatisch unter /llms.txt ausgeliefert. Content-Type sollte text/markdown oder text/plain sein, UTF-8 Kodierung. Die Datei darf nicht durch robots.txt blockiert sein und sollte nicht hinter einer Auth-Wall liegen.

### Wie messe ich, ob die llms.txt wirkt?

Drei Wege: 1) Server-Logs nach Zugriffen auf /llms.txt filtern (typischerweise GPTBot, ClaudeBot, PerplexityBot). 2) Manuelle Test-Queries in ChatGPT, Perplexity und Claude mit deinen Top-Keywords — beobachte, ob deine korrekten Service-URLs zitiert werden. 3) Anteil korrekter Deep-Links in AI-Antworten über Zeit. Erste Effekte sind typischerweise in 4–8 Wochen messbar.

## Quelle

Local Dominator (2026-05-22). llms.txt für lokale Unternehmen 2026: Setup, Beispiel & Best Practices. https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026
