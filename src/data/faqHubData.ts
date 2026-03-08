// Centralized FAQ data registry aggregated from pillar pages + additional hub-specific questions

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  slug: string; // sub-hub slug
  description: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "grundlagen",
    title: "Local SEO Grundlagen",
    icon: "🏠",
    slug: "faq-local-seo-grundlagen",
    description: "Grundlegende Fragen zu Local SEO, Kosten, Zeitrahmen und ersten Schritten.",
    faqs: [
      { question: "Was ist Local SEO?", answer: "Local SEO (lokale Suchmaschinenoptimierung) ist die Optimierung deiner Online-Präsenz, um bei standortbezogenen Suchanfragen besser gefunden zu werden. Dazu gehören Google Business Profil, lokale Keywords, NAP-Konsistenz und Bewertungen. 46 % aller Google-Suchen haben einen lokalen Bezug." },
      { question: "Was kostet Local SEO?", answer: "Grundlegende Local-SEO-Maßnahmen wie die Optimierung des Google Business Profils sind kostenlos. Professionelle Betreuung kostet zwischen 300 und 2.000 € monatlich, je nach Umfang, Wettbewerb und Anzahl der Standorte." },
      { question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?", answer: "Erste Verbesserungen im Local Pack sind oft nach 4–8 Wochen sichtbar. Bis ein neues Google Business Profil stabil rankt, vergehen typischerweise 3–6 Monate. Faktoren wie Branche, Wettbewerb und bestehende Domain-Autorität beeinflussen die Dauer erheblich." },
      { question: "Was ist der Unterschied zwischen SEO und Local SEO?", answer: "Klassisches SEO optimiert für organische Suchergebnisse unabhängig vom Standort. Local SEO hingegen fokussiert sich auf standortbezogene Suchanfragen und das Google Local Pack (Maps-Ergebnisse). Local SEO berücksichtigt zusätzlich Faktoren wie Entfernung, NAP-Konsistenz und Google-Bewertungen." },
      { question: "Brauche ich Local SEO, wenn ich keinen Laden habe?", answer: "Ja! Auch Dienstleister ohne festes Ladengeschäft (z. B. Handwerker, Berater, mobile Friseure) profitieren von Local SEO. Google Business bietet die Option 'Einzugsgebiet' für Unternehmen, die Kunden vor Ort besuchen." },
      { question: "Kann ich Local SEO selbst machen?", answer: "Ja, die Grundlagen sind auch für Einsteiger machbar: Google Business Profil einrichten, NAP-Daten konsistent halten, Bewertungen aktiv einholen. Für fortgeschrittene Strategien (Schema Markup, Linkbuilding, technisches SEO) lohnt sich oft professionelle Unterstützung." },
      { question: "Welche Branchen profitieren am meisten von Local SEO?", answer: "Besonders stark profitieren Gastronomie, Handwerk, Gesundheit (Ärzte, Zahnärzte, Physiotherapie), Rechtsanwälte, Immobilienmakler, Fitness-Studios und Beauty/Friseur. Grundsätzlich profitiert jedes Unternehmen mit physischem Standort oder lokalem Einzugsgebiet." },
      { question: "Ist Local SEO auch für B2B-Unternehmen relevant?", answer: "Ja, auch B2B-Unternehmen werden lokal gesucht — z.B. 'Steuerberater Frankfurt', 'IT-Dienstleister München'. Ein optimiertes Google Business Profil und lokale Sichtbarkeit generieren auch im B2B-Bereich qualifizierte Leads." },
      { question: "Funktioniert Local SEO auch für Unternehmen mit mehreren Standorten?", answer: "Absolut. Multi-Location-SEO erfordert separate Google Business Profile pro Standort, individuelle Standortseiten auf der Website und konsistente NAP-Daten in allen Verzeichnissen. Jeder Standort muss individuell optimiert werden." },
      { question: "Was sind die wichtigsten Local SEO Ranking-Faktoren?", answer: "Die drei wichtigsten Faktoren sind: 1) Google Business Profil (36 %), 2) On-Page SEO mit lokalen Keywords (18 %), 3) Bewertungen (17 %). Danach folgen Backlinks (13 %), Citations (7 %) und Verhaltens-Signale (6 %)." },
    ],
  },
  {
    id: "google-business",
    title: "Google Business Profil",
    icon: "📍",
    slug: "faq-google-business-profil",
    description: "Alles rund um Google Business Profil: Einrichtung, Optimierung, Troubleshooting.",
    faqs: [
      { question: "Wie erstelle ich ein Google Business Profil?", answer: "Gehe zu business.google.com, klicke auf 'Jetzt verwalten', gib deinen Firmennamen und Adresse ein und wähle deine Kategorie. Danach musst du dein Profil verifizieren — meist per Postkarte, Telefon oder Video-Verifizierung." },
      { question: "Wie lange dauert die GBP-Verifizierung?", answer: "Die Dauer variiert: Postkarte 5–14 Tage, Telefon/SMS sofort, Video 1–7 Tage, E-Mail 1–3 Tage. Tipp: Wähle wenn möglich Telefon oder Video-Verifizierung für schnellere Freischaltung." },
      { question: "Was ist die wichtigste GBP-Kategorie?", answer: "Die Primärkategorie ist entscheidend — sie hat den größten Einfluss auf dein Ranking. Wähle die spezifischste Kategorie, die dein Kerngeschäft beschreibt. 'Italienisches Restaurant' rankt besser als nur 'Restaurant'. Du kannst bis zu 9 weitere Nebenkategorien hinzufügen." },
      { question: "Wie oft sollte ich Google Posts veröffentlichen?", answer: "Mindestens 1x pro Woche. Google Posts verschwinden nach 7 Tagen aus der prominenten Anzeige. Unternehmen mit regelmäßigen Posts zeigen Google Aktivität und erhalten im Schnitt 7 % mehr Profilinteraktionen." },
      { question: "Was mache ich, wenn mein GBP gesperrt wurde?", answer: "Häufige Gründe: Keyword-Stuffing im Namen, falsche Adresse oder Richtlinienverstoß. Kontaktiere den Google-Support über die Wiederherstellungsseite. Bereite Nachweise vor (Gewerbeschein, Fotos vom Standort, Rechnungen)." },
      { question: "Wie wichtig sind GBP-Fotos für das Ranking?", answer: "Sehr wichtig! Profile mit 100+ Fotos erhalten 520 % mehr Anrufe und 2.717 % mehr Routenanfragen als der Durchschnitt. Lade mindestens Logo, Titelbild, 10 Innenaufnahmen, 10 Außenaufnahmen und Team-Fotos hoch." },
      { question: "Was sind GBP-Attribute und warum sind sie wichtig?", answer: "Attribute sind Zusatzinfos wie 'Rollstuhlgerecht', 'Kostenloses WLAN', 'LGBTQ+-freundlich'. Sie helfen Google, dein Unternehmen bei spezifischen Suchen ('Restaurant mit WLAN in der Nähe') zu zeigen und erhöhen die Relevanz." },
      { question: "Sollte ich auf falsche Informationen in meinem GBP reagieren?", answer: "Unbedingt! Nutzer können Änderungen vorschlagen (Öffnungszeiten, Fotos, etc.). Prüfe dein Profil regelmäßig auf unerwünschte Änderungen. Google übernimmt Nutzervorschläge manchmal automatisch — du musst wachsam bleiben." },
      { question: "Wie nutze ich Google Business Messaging effektiv?", answer: "Aktiviere Messaging in deinem GBP, richte eine Willkommensnachricht ein und antworte innerhalb von 24 Stunden. Google zeigt die durchschnittliche Antwortzeit an — schnelle Antworten verbessern das Vertrauen." },
      { question: "Brauche ich ein GBP für jede Filiale?", answer: "Ja, jeder physische Standort braucht ein eigenes Google Business Profil mit einzigartiger Adresse, Telefonnummer und individuellen Öffnungszeiten. Alle Profile sollten über ein gemeinsames Standortgruppen-Konto verwaltet werden." },
    ],
  },
  {
    id: "bewertungen",
    title: "Bewertungen & Reputation",
    icon: "⭐",
    slug: "faq-bewertungen-reputation",
    description: "Bewertungen einholen, beantworten, negative Reviews managen.",
    faqs: [
      { question: "Wie wichtig sind Google-Bewertungen für Local SEO?", answer: "Google-Bewertungen gehören zu den Top-3-Ranking-Faktoren im Local Pack (17 % Gewichtung). Anzahl, Durchschnittsbewertung, Aktualität und ob du antwortest, spielen alle eine Rolle. Unternehmen mit 50+ Bewertungen und 4,5+ Sternen erzielen nachweislich mehr Klicks." },
      { question: "Wie bekomme ich mehr Google-Bewertungen?", answer: "Die effektivsten Methoden: 1) Direkt nach positiver Erfahrung fragen, 2) QR-Code an der Kasse/Theke, 3) Follow-up E-Mail mit Direktlink, 4) SMS nach Termin, 5) Auf der Website verlinken. Wichtig: Nie für Bewertungen bezahlen — das verstößt gegen Google-Richtlinien." },
      { question: "Wie antworte ich auf negative Bewertungen?", answer: "1) Innerhalb von 24h antworten, 2) Professionell und empathisch bleiben, 3) Problem anerkennen, 4) Lösung anbieten, 5) Gespräch offline nehmen (Kontaktdaten geben). Nie aggressiv oder defensiv reagieren — andere potenzielle Kunden lesen mit." },
      { question: "Kann ich eine falsche Google-Bewertung löschen lassen?", answer: "Du kannst sie als unangemessen melden (über die drei Punkte neben der Bewertung). Google entfernt Bewertungen bei Richtlinienverstoß: Spam, Fake-Bewertungen, Beleidigungen, Interessenkonflikte. Der Prozess dauert 2–14 Tage." },
      { question: "Wie viele Bewertungen brauche ich mindestens?", answer: "Mindestens 5 für die Sterneanzeige in der Google-Suche. Für wettbewerbsfähige Rankings: 20+ Bewertungen. Top-Positionen in wettbewerbsintensiven Branchen erfordern oft 50–100+ Bewertungen mit einem Schnitt von 4,5+." },
      { question: "Sollte ich auf positive Bewertungen antworten?", answer: "Ja! Studien zeigen, dass Unternehmen, die auf alle Bewertungen antworten, 35 % mehr Umsatz erzielen. Personalisiere deine Antwort (Name des Kunden, spezifisches Detail erwähnen) und nutze natürlich relevante Keywords." },
      { question: "Beeinflussen Bewertungen auf anderen Plattformen das Google-Ranking?", answer: "Indirekt ja. Google crawlt Bewertungen von Yelp, TripAdvisor, Trustpilot etc. und nutzt sie als Trust-Signal. Außerdem zeigt Google manchmal Drittanbieter-Bewertungen in den Suchergebnissen. Ein konsistentes Bewertungsprofil über mehrere Plattformen stärkt deine Glaubwürdigkeit." },
      { question: "Was ist Review Gating und warum ist es verboten?", answer: "Review Gating bedeutet, dass du Kunden zuerst intern nach ihrer Zufriedenheit fragst und nur zufriedene Kunden zur Google-Bewertung weiterleitest. Google verbietet dies explizit. Jeder Kunde muss die gleiche Möglichkeit zur Bewertung bekommen." },
    ],
  },
  {
    id: "technisches-seo",
    title: "Technisches SEO",
    icon: "⚙️",
    slug: "faq-technisches-seo",
    description: "Schema Markup, Core Web Vitals, Mobile-First, Crawling & Indexierung.",
    faqs: [
      { question: "Was ist Schema Markup und brauche ich es?", answer: "Schema Markup sind strukturierte Daten im JSON-LD-Format, die Google helfen, deine Inhalte zu verstehen. Für lokale Unternehmen ist LocalBusiness-Schema Pflicht — es liefert Google Adresse, Öffnungszeiten, Bewertungen und mehr in maschinenlesbarer Form." },
      { question: "Wie implementiere ich LocalBusiness Schema Markup?", answer: "Füge ein JSON-LD-Script in den <head> deiner Seite ein mit @type 'LocalBusiness' (oder spezifischer: Restaurant, Dentist, etc.). Pflichtfelder: name, address, telephone, openingHours, geo. Teste mit dem Google Rich Results Test." },
      { question: "Was sind Core Web Vitals und warum sind sie wichtig?", answer: "Core Web Vitals sind Googles Metriken für Nutzererfahrung: LCP (Ladezeit, < 2.5s), INP (Interaktivität, < 200ms), CLS (Layoutstabilität, < 0.1). Seit 2024 ist INP der Nachfolger von FID. Gute CWV sind ein Ranking-Signal, besonders bei gleich starken Konkurrenten." },
      { question: "Wie optimiere ich meine Seite für Mobile-First?", answer: "Google indexiert primär die mobile Version: 1) Responsive Design verwenden, 2) Touch-Targets mindestens 48x48px, 3) Schriftgröße 16px+, 4) Click-to-Call für Telefonnummern, 5) Komprimierte Bilder, 6) Kein Layout-Sprung bei Laden. 60 %+ der lokalen Suchen sind mobil." },
      { question: "Was ist NAP-Konsistenz und warum ist sie wichtig?", answer: "NAP steht für Name, Address, Phone — die drei Kernangaben deines Unternehmens. Jede Abweichung (z.B. 'Str.' vs. 'Straße', unterschiedliche Telefonnummern) verwirrt Google und kann Rankings kosten. Halte NAP auf Website, GBP und allen Verzeichnissen identisch." },
      { question: "Brauche ich eine XML-Sitemap für Local SEO?", answer: "Ja, besonders wenn du Standortseiten hast. Die Sitemap hilft Google, alle wichtigen Seiten zu finden. Reiche sie in der Google Search Console ein. Tipp: Erstelle eine separate KML-Sitemap mit Geo-Koordinaten für Standortseiten." },
      { question: "Wie setze ich hreflang für DACH richtig ein?", answer: "Verwende 'de-DE' für Deutschland, 'de-AT' für Österreich, 'de-CH' für die Schweiz. Jede Seite braucht hreflang-Tags zu allen Sprachversionen inklusive sich selbst. Das verhindert, dass Google die falsche Länderversion anzeigt." },
      { question: "Was ist der Unterschied zwischen nofollow und dofollow Links?", answer: "Dofollow-Links vererben Link-Equity (Ranking-Kraft) an die Zielseite. Nofollow-Links (rel='nofollow') tun dies offiziell nicht, werden von Google aber als 'Hint' behandelt. Für Local SEO sind dofollow-Links von lokalen Quellen am wertvollsten." },
      { question: "Wie schnell muss meine Website laden?", answer: "Für optimale Rankings: LCP unter 2,5 Sekunden, Gesamtladezeit unter 3 Sekunden auf Mobilgeräten. Jede Sekunde mehr reduziert die Conversion-Rate um 7 %. Nutze PageSpeed Insights und optimiere Bilder, JS-Bundles und Server-Antwortzeiten." },
      { question: "Was ist eine robots.txt und wie nutze ich sie richtig?", answer: "Die robots.txt steuert, welche Seiten Suchmaschinen-Crawler besuchen dürfen. Blockiere unwichtige Seiten (Admin, Warenkorb), aber nie wichtige Content-Seiten oder deine XML-Sitemap. Tipp: Füge den Sitemap-Verweis in die robots.txt ein." },
    ],
  },
  {
    id: "ai-zukunft",
    title: "AI & Zukunft",
    icon: "🤖",
    slug: "faq-ai-zukunft-local-seo",
    description: "AI Overviews, GEO, Voice Search und die Zukunft der lokalen Suche.",
    faqs: [
      { question: "Was sind Google AI Overviews?", answer: "AI Overviews (ehemals SGE) sind KI-generierte Zusammenfassungen, die Google über den klassischen Suchergebnissen anzeigt. Bei lokalen Suchen fassen sie Bewertungen, Empfehlungen und Fakten zusammen. Ca. 30 % der Suchanfragen haben bereits AI-Antworten." },
      { question: "Welche Rolle spielt KI im Local SEO 2026?", answer: "KI verändert Local SEO auf mehreren Ebenen: Google AI Overviews generieren lokale Empfehlungen, Voice Search nutzt KI für Sprachverarbeitung, und KI-Tools automatisieren Keyword-Recherche und Content-Erstellung. Wer Local SEO 2026 betreibt, muss auch für KI-Systeme optimieren." },
      { question: "Was ist GEO (Generative Engine Optimization)?", answer: "GEO ist die Optimierung für KI-gestützte Suchmaschinen. Im Gegensatz zu klassischem SEO (Backlinks, Keywords) fokussiert GEO auf Zitierbarkeit, Schema Markup, E-E-A-T-Signale und maschinenlesbare Strukturen, damit AI-Systeme dein Unternehmen als Quelle verwenden." },
      { question: "Wie optimiere ich für ChatGPT und Perplexity?", answer: "1) Vollständiges Schema Markup, 2) Klare, zitierbare Fakten-Sätze, 3) FAQ-Strukturen, 4) Starke E-E-A-T-Signale, 5) Aktuelle, regelmäßig aktualisierte Inhalte. ChatGPT und Perplexity bevorzugen autoritative Quellen mit strukturierten Daten." },
      { question: "Werden AI Overviews klassisches Local SEO ersetzen?", answer: "Nein, aber ergänzen. Google zeigt AI Overviews zusätzlich zum Local Pack und den organischen Ergebnissen. Ein gut optimiertes Google Business Profil bleibt die Grundlage. AI Overviews verstärken aber die Bedeutung von strukturierten Daten und E-E-A-T." },
      { question: "Was ist Voice Search und wie optimiere ich dafür?", answer: "Voice Search sind gesprochene Suchanfragen über Sprachassistenten (Google Assistant, Siri, Alexa). Optimiere mit: FAQ-Seiten, natürlichen Frage-Antwort-Formaten, speakable Schema Markup, lokalen Long-Tail-Keywords und einer schnellen, mobilen Website." },
      { question: "Brauche ich eine llms.txt oder ai.txt Datei?", answer: "Diese Dateien sind noch experimentell, aber zukunftsweisend. llms.txt gibt KI-Crawlern strukturierte Informationen über dein Unternehmen. ai.txt definiert Zugriffsregeln ähnlich wie robots.txt. Frühe Implementierung kann einen Wettbewerbsvorteil verschaffen." },
      { question: "Wie messe ich den Erfolg meiner AI-Optimierung?", answer: "Nutze Google Search Console für AI-Impressions (falls verfügbar), tracke Klicks aus AI Overviews, überwache Brand-Mentions in ChatGPT/Perplexity, und analysiere Zero-Click-Metriken. Tools wie der AI-Sichtbarkeitsmonitor helfen bei der Erfolgsmessung." },
    ],
  },
  {
    id: "content-marketing",
    title: "Content & Marketing",
    icon: "✍️",
    slug: "faq-content-marketing-local-seo",
    description: "Lokaler Content, Linkbuilding, Events und Content-Strategien.",
    faqs: [
      { question: "Welchen Content sollte ein lokales Unternehmen erstellen?", answer: "1) Standortseiten (pro Stadt/Stadtteil), 2) FAQ-Seiten zu häufigen Kundenfragen, 3) Branchenspezifische Ratgeber, 4) Lokale Neuigkeiten/Events, 5) Case Studies/Erfahrungsberichte. Jeder Content sollte lokale Keywords natürlich integrieren." },
      { question: "Wie baue ich lokale Backlinks auf?", answer: "Die effektivsten Methoden: 1) IHK/Kammer-Profil (DA 70+), 2) Lokale Vereinssponsoring, 3) Lokale PR/Pressemitteilungen, 4) Gastbeiträge für Stadtmagazine, 5) Partnerschaften mit komplementären Unternehmen, 6) Event-Verlinkungen. Qualität vor Quantität!" },
      { question: "Brauche ich für jeden Stadtteil eine eigene Landingpage?", answer: "Nur wenn du dort wirklich aktiv bist und unterschiedliche Inhalte bieten kannst. Dünne Seiten ('Zahnarzt [Stadtteil]' mit identischem Text) können als Doorway Pages gewertet werden. Erstelle nur Seiten mit echtem Mehrwert und lokalspezifischem Content." },
      { question: "Wie oft sollte ich neuen Content veröffentlichen?", answer: "Für lokale Unternehmen reichen 2–4 Blogbeiträge pro Monat. Wichtiger als Frequenz ist Qualität und lokale Relevanz. Ein hervorragender lokaler Ratgeber pro Monat bringt mehr als 10 generische Beiträge." },
      { question: "Was sind die besten Linkbuilding-Quellen für lokale Unternehmen?", answer: "Höchster Wert: Lokale Tageszeitungen (DA 60+), IHK/Kammern (DA 70+), Stadtportale. Mittlerer Wert: Branchenverbände, Sponsoring-Seiten, komplementäre Unternehmen. Niedriger Wert: Allgemeine Verzeichnisse. Ein IHK-Link ist mehr wert als 50 Verzeichniseinträge." },
      { question: "Wie funktioniert Citation Building?", answer: "Citations sind Erwähnungen deines NAP (Name, Adresse, Telefon) in Online-Verzeichnissen. Trage dich konsistent in die 20–30 wichtigsten Verzeichnisse ein (Google, Yelp, Gelbe Seiten, Das Örtliche, Bing Places etc.). Jede Inkonsistenz verwirrt Google." },
      { question: "Was ist Local Content Marketing?", answer: "Inhalte mit lokalem Bezug erstellen: Stadtführer, lokale Event-Berichterstattung, regionale Tipps, Kooperationen mit lokalen Influencern. Ziel ist, als lokale Autorität wahrgenommen zu werden und natürliche lokale Backlinks zu generieren." },
      { question: "Lohnen sich lokale Events für SEO?", answer: "Ja! Events generieren Links von Event-Kalendern, lokalen Medien und Teilnehmer-Blogs. Gleichzeitig stärken sie die Community-Verankerung — ein wichtiges Trust-Signal für Google. Beispiele: Tag der offenen Tür, Workshops, Charity-Aktionen." },
    ],
  },
];

// Get all FAQs flat
export const getAllFAQs = (): (FAQItem & { category: string })[] =>
  faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.id }))
  );

// Get FAQ count
export const getTotalFAQCount = (): number =>
  faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);
