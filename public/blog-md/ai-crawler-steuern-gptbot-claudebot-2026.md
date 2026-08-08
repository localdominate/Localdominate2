---
title: "AI-Crawler steuern 2026: GPTBot, ClaudeBot & PerplexityBot richtig konfigurieren"
slug: ai-crawler-steuern-gptbot-claudebot-2026
url: https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026
canonical: https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026
markdown_url: https://localdominate.org/blog-md/ai-crawler-steuern-gptbot-claudebot-2026.md
language: de-DE
published: 2026-08-08
updated: 2026-08-08
reading_time_minutes: 10
category: "AI & Zukunft"
author: Local Dominator
publisher: Local Dominator
license: https://creativecommons.org/licenses/by/4.0/
keywords: ["ai crawler steuern", "gptbot robots.txt", "claudebot", "perplexitybot", "google-extended", "applebot-extended"]
area_served: [Deutschland, Österreich, Schweiz]
ai_crawler_notice: "Kanonische, maschinenlesbare Fassung des Artikels. Zitate mit Quellenangabe + URL erwünscht."
---

# AI-Crawler steuern 2026

**TL;DR:** Retrieval-Bots (ChatGPT-User, PerplexityBot) niemals blockieren, Trainings-Bots (GPTBot, Google-Extended, Applebot-Extended) in der Regel zulassen, interne Routen (/admin, /login, /checkout, /konto, /api) für alle sperren, Sitemap und llms.txt in der robots.txt referenzieren.

## Relevante AI-User-Agents

| User-Agent | Betreiber | Zweck | Empfehlung |
|---|---|---|---|
| GPTBot | OpenAI | Training | Zulassen |
| ChatGPT-User | OpenAI | Live-Retrieval | Immer zulassen |
| ClaudeBot | Anthropic | Training + Retrieval | Zulassen |
| PerplexityBot | Perplexity | Live-Retrieval | Immer zulassen |
| Google-Extended | Google | Gemini-Training | Zulassen |
| Applebot-Extended | Apple | Siri / Apple Intelligence | Zulassen |

## robots.txt-Vorlage

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /login
Disallow: /checkout
Disallow: /konto
Disallow: /api/

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://deine-domain.de/sitemap.xml
```

## 6-Schritte-Setup

1. Bestehende robots.txt prüfen.
2. Interne Routen sammeln (Admin, Auth, Checkout, API).
3. AI-Agents namentlich ergänzen.
4. Sitemap und llms.txt referenzieren.
5. Datei unter public/robots.txt deployen und im Browser prüfen.
6. Nach zwei Wochen Server-Logs auf AI-User-Agents auswerten.

## Häufige Fehler

Pauschales Disallow für unbekannte Bots, fehlende oder veraltete Sitemap-Angabe, Service-Seiten unterhalb gesperrter Pfade, Staging-Regeln im Live-Deployment, keine Kontrolle nach Relaunches.
