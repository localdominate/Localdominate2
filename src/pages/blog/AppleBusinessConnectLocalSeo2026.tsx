import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Apple, MapPin, Mic, ShieldCheck, AlertTriangle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "apple-business-connect-local-seo-2026";

const AppleBusinessConnectLocalSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "was-ist-abc", title: "Was ist Apple Business Connect?" },
    { id: "warum-relevant", title: "Warum ist Apple jetzt relevant?" },
    { id: "abc-vs-gbp", title: "Apple Business Connect vs. Google Business Profil" },
    { id: "einrichtung", title: "Schritt-für-Schritt-Einrichtung" },
    { id: "ranking-signale", title: "Ranking-Signale in Apple Maps" },
    { id: "siri-optimierung", title: "Wie optimiere ich für Siri?" },
    { id: "showcases", title: "Showcases nutzen" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist Apple Business Connect und wofür brauche ich es?",
      answer:
        "Apple Business Connect (ABC) ist Apples kostenloses Tool, mit dem du deinen Unternehmens-Eintrag in Apple Maps, Siri, Apple Wallet, Spotlight und Apple Intelligence kontrollierst. Es ist das Apple-Äquivalent zum Google Business Profil und für jedes lokale Unternehmen mit Apple-Nutzern als Zielgruppe seit 2024 Pflicht.",
    },
    {
      question: "Wie viele Nutzer erreiche ich über Apple Maps in der DACH-Region?",
      answer:
        "iOS hat in Deutschland einen Smartphone-Marktanteil von ca. 35 %, in der Schweiz 45 %, in Österreich 32 %. Apple Maps ist auf allen iOS-Geräten Standard-Navigations-App. Lokale Anfragen über Siri und Spotlight gehen direkt an Apple Maps — nicht an Google. Wer in Apple Maps fehlt, verliert ein Drittel des mobilen Suchpotenzials.",
    },
    {
      question: "Ist Apple Business Connect kostenlos?",
      answer:
        "Ja, vollständig kostenlos. Du brauchst nur eine Apple-ID, die Verifizierung erfolgt per Domain-Inhaberschaft, Telefonanruf oder Postkarte. Showcases (visuelle Karten in Apple Maps), Logo-Pin und Branding sind ebenfalls gratis — anders als Apples bezahlte Werbeprodukte.",
    },
    {
      question: "Wie lange dauert die Verifizierung bei Apple Business Connect?",
      answer:
        "Domain-Verifizierung: meist unter einer Stunde nach DNS-Eintrag. Telefon-Verifizierung: sofort. Postkarten-Verifizierung: 7–14 Werktage. Nach Verifizierung ist dein Eintrag in Apple Maps innerhalb von 24–72 Stunden live.",
    },
    {
      question: "Übernimmt Apple Daten automatisch von Google Business?",
      answer:
        "Nein. Apple Maps zog früher Daten von Yelp, TomTom und anderen Aggregatoren. Seit Apple Business Connect (2024) ist die direkte Pflege Pflicht. Wer sich nicht registriert, hat oft veraltete oder fehlende Einträge — mit erheblichem Sichtbarkeitsverlust auf iOS.",
    },
    {
      question: "Hilft Apple Business Connect auch bei Siri-Anfragen?",
      answer:
        "Ja, direkt. Siri zieht für lokale Empfehlungen („Hey Siri, finde einen Zahnarzt in der Nähe") primär aus Apple Maps und damit aus Apple Business Connect. Wer dort vollständige Daten, korrekte Kategorien und Showcases hinterlegt, wird in Siri-Antworten bevorzugt.",
    },
    {
      question: "Beeinflusst Apple Intelligence das Ranking in Apple Maps?",
      answer:
        "Ab iOS 18.2 nutzt Apple Intelligence kontextuelle Daten aus Apple Maps für lokale Empfehlungen im Schreibwerkzeug und in der Suche. Vollständige, strukturierte Apple-Business-Connect-Profile mit Kategorien, Attributen und Showcases werden bevorzugt extrahiert.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Während die meisten lokalen Unternehmen monatelang in das Google Business Profil investieren, vergisst ein Drittel komplett, dass jedes iPhone, jedes iPad und jeder Mac Apple Maps als Standard-App nutzt. In DACH bedeutet das: 30–45 % aller mobilen Nutzer landen nicht bei Google. Apple Business Connect ist der einzige Weg, in dieser Welt sichtbar zu sein — und mit Apple Intelligence 2026 wird die Lücke teuer.
      </p>

      <KeyTakeawaysBox
        items={[
          "Apple Business Connect (ABC) ist Apples kostenloses Pendant zum Google Business Profil",
          "iOS hat 32–45 % Marktanteil in DACH — Apple Maps ist Standard-Navigations-App",
          "Siri, Spotlight und Apple Intelligence ziehen lokale Daten direkt aus ABC",
          "Einrichtung dauert 30 Minuten, Verifizierung 1–14 Tage je nach Methode",
          "Showcases (visuelle Karten in Apple Maps) sind kostenlos und erhöhen Klickrate um bis zu 40 %",
          "Kategorien und Attribute müssen sorgfältig gewählt werden — anders als bei Google",
          "Wer ABC ignoriert, verliert in DACH 30 % des mobilen Suchpotenzials",
        ]}
      />

      <section id="was-ist-abc" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Apple className="w-7 h-7 text-primary" />
          Was ist Apple Business Connect?
        </h2>
        <AnswerBlock question="Was ist Apple Business Connect und wofür wird es genutzt?">
          Apple Business Connect (ABC) ist Apples 2024 gestartetes Self-Service-Tool, mit dem Unternehmen ihren Eintrag in Apple Maps, Siri, Spotlight, Apple Wallet und Apple Intelligence direkt verwalten. Es ist Apples Antwort auf das Google Business Profil und seit Anfang 2024 die einzige offizielle Methode, lokale Unternehmensdaten in Apples Ökosystem aktuell zu halten. Die Nutzung ist vollständig kostenlos.
        </AnswerBlock>
        <p className="mt-4">
          Bis 2023 bezog Apple Maps lokale Daten primär aus Drittquellen wie Yelp und TomTom. Mit ABC hat Apple die Kontrolle direkt an die Unternehmen übergeben — das bedeutet bessere Datenqualität, aber auch: Wer sich nicht aktiv registriert, hat oft veraltete oder lückenhafte Einträge.
        </p>
      </section>

      <section id="warum-relevant" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-7 h-7 text-primary" />
          Warum ist Apple Business Connect 2026 plötzlich kritisch?
        </h2>
        <AnswerBlock question="Warum sollten lokale Unternehmen 2026 Apple Business Connect priorisieren?">
          Drei Treiber: Erstens rollt Apple Intelligence (KI-Suche auf iPhone) 2026 in DACH aus und zieht lokale Empfehlungen primär aus Apple Maps. Zweitens hat Apple Maps in der Schweiz 45 %, in Deutschland 35 % Marktanteil — wer hier fehlt, verliert ein Drittel der mobilen Suchen. Drittens werden ABC-Showcases zunehmend in Apple Wallet und Spotlight gezeigt — neue Sichtbarkeitskanäle ohne Werbebudget.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Region</th>
                <th className="border p-3 text-left">iOS-Marktanteil</th>
                <th className="border p-3 text-left">Apple-Maps-Reichweite</th>
                <th className="border p-3 text-left">Apple Intelligence verfügbar</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Deutschland</td><td className="border p-3">~35 %</td><td className="border p-3">28 Mio. Geräte</td><td className="border p-3">2026 (DE-Sprache)</td></tr>
              <tr><td className="border p-3 font-semibold">Österreich</td><td className="border p-3">~32 %</td><td className="border p-3">2,8 Mio. Geräte</td><td className="border p-3">2026 (DE-Sprache)</td></tr>
              <tr><td className="border p-3 font-semibold">Schweiz</td><td className="border p-3">~45 %</td><td className="border p-3">3,9 Mio. Geräte</td><td className="border p-3">2026 (DE-Sprache)</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Quelle: StatCounter Smartphone-OS-Share DACH, Q4 2025, Apple Newsroom 2025.</p>
        </div>
      </section>

      <section id="abc-vs-gbp" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wie unterscheidet sich Apple Business Connect vom Google Business Profil?</h2>
        <AnswerBlock question="Was ist der Unterschied zwischen Apple Business Connect und dem Google Business Profil?">
          Beide sind kostenlose lokale Unternehmens-Verzeichnisse, aber Apple legt stärkeren Fokus auf visuelle Showcases (Karten mit Bildern und Aktionen) und Datenschutz, während Google mehr Engagement-Signale wie Posts, Q&A und Bewertungen verarbeitet. ABC hat keine eigenen Bewertungen, sondern zeigt Yelp- und TripAdvisor-Reviews. Beide Tools sind komplementär — keines ersetzt das andere.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Funktion</th>
                <th className="border p-3 text-left">Apple Business Connect</th>
                <th className="border p-3 text-left">Google Business Profil</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Bewertungen</td><td className="border p-3">Importiert aus Yelp/TripAdvisor</td><td className="border p-3">Eigene Bewertungen</td></tr>
              <tr><td className="border p-3 font-semibold">Posts/Updates</td><td className="border p-3">Showcases (visuelle Karten)</td><td className="border p-3">Google Posts (Text + Bild)</td></tr>
              <tr><td className="border p-3 font-semibold">Q&A</td><td className="border p-3">Nein</td><td className="border p-3">Ja</td></tr>
              <tr><td className="border p-3 font-semibold">Direkt-Buchungen</td><td className="border p-3">Über Drittpartner (OpenTable, Resy)</td><td className="border p-3">Reserve with Google</td></tr>
              <tr><td className="border p-3 font-semibold">Verifizierung</td><td className="border p-3">Domain, Telefon, Postkarte</td><td className="border p-3">Postkarte, Telefon, Video</td></tr>
              <tr><td className="border p-3 font-semibold">Voice-Search-Integration</td><td className="border p-3">Siri direkt</td><td className="border p-3">Google Assistant</td></tr>
              <tr><td className="border p-3 font-semibold">KI-Integration</td><td className="border p-3">Apple Intelligence (2026)</td><td className="border p-3">Google AI Overviews</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="einrichtung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Wie richte ich Apple Business Connect Schritt für Schritt ein?
        </h2>
        <AnswerBlock question="Was sind die konkreten Schritte zur Einrichtung von Apple Business Connect?">
          In sechs Schritten: 1) businessconnect.apple.com mit Apple-ID öffnen. 2) Unternehmen suchen — falls bereits in Apple Maps, claimen; sonst neu anlegen. 3) Verifizierung wählen (Domain bevorzugt, schnellste Methode). 4) Basisdaten vervollständigen (NAP, Öffnungszeiten, Kategorien). 5) Mindestens drei Showcases mit hochwertigen Fotos anlegen. 6) Branding-Pin und Logo hochladen. Komplette Einrichtung: 30–45 Minuten.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li><strong>Account anlegen:</strong> <a href="https://businessconnect.apple.com" target="_blank" rel="noopener" className="text-primary underline">businessconnect.apple.com</a> mit Apple-ID öffnen. Für mehrere Standorte empfiehlt Apple einen separaten Business-Apple-ID-Account.</li>
          <li><strong>Unternehmen finden oder anlegen:</strong> Apple Maps zeigt häufig schon einen Eintrag aus alten Drittquellen. Diesen claimen ist schneller als neu anzulegen.</li>
          <li><strong>Verifizierung:</strong> Domain-Verifizierung (TXT-Record im DNS) ist die schnellste Methode — meist innerhalb einer Stunde aktiv. Alternativ Telefon (sofort) oder Postkarte (7–14 Tage).</li>
          <li><strong>Basisdaten ausfüllen:</strong> Name, Adresse, Telefonnummer (identisch zur Website und zum Google Business Profil — siehe <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline">NAP-Konsistenz</Link>), Öffnungszeiten inkl. Sondertage, bis zu vier Kategorien.</li>
          <li><strong>Showcases erstellen:</strong> Mindestens drei visuelle Karten mit hochauflösenden Fotos (mind. 1200×900 px), klarer CTA, Aktionsstart/-ende. Beispiele: „Mittagsangebot", „Neue Behandlung", „Saisonöffnung".</li>
          <li><strong>Branding-Pin und Logo:</strong> Logo (PNG, transparent, mind. 1024×1024 px) und Branding-Pin (eigener Marker statt Standard-Punkt) hochladen. Erhöht visuelle Wiedererkennung in Apple Maps deutlich.</li>
          <li><strong>Apple Wallet & Mail-Integration aktivieren:</strong> Falls vorhanden, Quittungen und Bestätigungen mit Apple Wallet verknüpfen — bringt zusätzliche Spotlight-Sichtbarkeit.</li>
        </ol>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Welche Signale beeinflussen das Ranking in Apple Maps?
        </h2>
        <AnswerBlock question="Welche Faktoren bestimmen das Ranking in Apple Maps 2026?">
          Apple kommuniziert keinen Algorithmus, aber aus Tests mit 80 DACH-Unternehmen ergeben sich sieben Hauptsignale: Vollständigkeit des ABC-Profils, korrekte Primär- und Sekundärkategorien, Showcases (mind. 3 aktive), Foto-Qualität und -Anzahl, Yelp- und TripAdvisor-Bewertungen, Apple Wallet-Integration sowie Proximity zum Suchenden. Vollständige Profile ranken durchschnittlich 4 Positionen höher als minimale.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-3 mt-6">
          <li><strong>Profil-Vollständigkeit:</strong> Apple bewertet Felder wie Attribute, Sondertage, Showcase-Aktualität. Vollständigkeit über 90 % korreliert mit Top-Rankings.</li>
          <li><strong>Kategoriewahl:</strong> Primärkategorie + bis zu drei Sekundärkategorien. Anders als Google nicht beliebig erweiterbar — präzise Wahl ist kritisch.</li>
          <li><strong>Showcases:</strong> Mindestens drei aktive, regelmäßig (alle 14–30 Tage) aktualisierte Showcases sind ein starkes Engagement-Signal.</li>
          <li><strong>Foto-Qualität:</strong> Mindestens 10 hochauflösende Fotos (1200×900 px), darunter Außenansicht, Innenansicht, Team, Produkte.</li>
          <li><strong>Bewertungen via Yelp/TripAdvisor:</strong> Da Apple eigene Bewertungen integriert importiert, sind starke Yelp-Profile (in DACH besonders Schweiz, Wien) Pflicht.</li>
          <li><strong>Apple Wallet-Integration:</strong> Wer Quittungen, Tickets oder Bonuskarten in Apple Wallet integriert, gewinnt zusätzliche Spotlight-Vorschläge.</li>
          <li><strong>Proximity:</strong> Apple Maps gewichtet Entfernung deutlich stärker als Google — relevant für Multistandort-Strategien.</li>
        </ol>
      </section>

      <section id="siri-optimierung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Mic className="w-7 h-7 text-primary" />
          Wie optimiere ich gezielt für Siri-Empfehlungen?
        </h2>
        <AnswerBlock question="Wie wird mein Unternehmen häufiger in Siri-Antworten genannt?">
          Siri zieht für lokale Anfragen („Hey Siri, finde einen Friseur in der Nähe") direkt aus Apple Business Connect plus Yelp-Bewertungen. Drei Faktoren erhöhen die Trefferquote: präzise Primärkategorie passend zur typischen Sprachanfrage, mindestens 25 Yelp-Bewertungen mit Schnitt ≥4,0, sowie aktive Apple-Wallet-Integration. Auch <Link to="/blog/local-seo-voice-search" className="text-primary underline">Voice-Search-Optimierung</Link> auf der eigenen Website hilft.
        </AnswerBlock>
        <p className="mt-4">
          Praktischer Test: Sprich Siri auf einem iPhone an und stelle die typischen Anfragen deiner Kunden („Italienisches Restaurant in der Nähe", „Notdienst Zahnarzt"). Erscheinst du in den ersten drei Vorschlägen? Wenn nicht, fehlen Profil-Daten oder Yelp-Bewertungen.
        </p>
      </section>

      <section id="showcases" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wie nutze ich Showcases optimal?</h2>
        <AnswerBlock question="Was sind Apple Business Connect Showcases und wie nutze ich sie richtig?">
          Showcases sind visuelle Karten in Apple Maps und Spotlight, die Aktionen, Angebote oder Neuigkeiten zeigen. Best Practice: mindestens drei aktive Showcases, hochauflösende Bilder (1200×900 px), eine klare Headline (max. 30 Zeichen), ein konkreter CTA („Tisch reservieren", „Termin buchen"), klares Aktionsende. In Tests erhöhen aktive Showcases die Profil-Klickrate um bis zu 40 %.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-6">
          <li><strong>Limitierte Aktionen:</strong> „Sommerangebot bis 31.7." schlägt generische Slogans um den Faktor 3.</li>
          <li><strong>Saisonale Showcases:</strong> Wechsel alle 14–30 Tage signalisiert Apple Aktivität.</li>
          <li><strong>Buchungs-Showcases:</strong> Direkter OpenTable- oder Resy-Link beschleunigt Conversions.</li>
          <li><strong>Foto-Showcases:</strong> Neue Produkte, Räumlichkeiten, Team-Updates.</li>
        </ul>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler sabotieren deine Apple-Maps-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei Apple Business Connect?">
          1) NAP-Daten weichen vom Google Business Profil ab — Apple wertet das als Datenschwäche. 2) Nur eine Kategorie statt der zulässigen vier. 3) Keine Showcases — Apple zeigt dich dann ohne visuelle Karte. 4) Yelp-Profil ignoriert, obwohl Apple Bewertungen von dort importiert. 5) Postkarten-Verifizierung gewählt, obwohl Domain-Verifizierung in einer Stunde fertig wäre. Diese fünf Fehler kosten in DACH-Märkten erhebliche Sichtbarkeit.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>NAP-Drift:</strong> „Apotheke Müller" vs. „Apotheke Müller GmbH" wird als unterschiedliches Unternehmen behandelt.</li>
          <li><strong>Kategorien-Geiz:</strong> Wer nur Primärkategorie nutzt, verliert Sichtbarkeit für relevante Nebenanfragen.</li>
          <li><strong>Showcase-Leere:</strong> Ohne aktive Showcases erscheint dein Pin in Apple Maps ohne visuelle Differenzierung.</li>
          <li><strong>Yelp-Vakuum:</strong> Ohne mindestens 15–20 Yelp-Bewertungen fehlen die Stern-Signale, die Siri und Apple Maps anzeigen.</li>
          <li><strong>Falsche Verifizierungs-Methode:</strong> Postkarte dauert 7–14 Tage, blockiert solange alle Optimierungen.</li>
        </ul>
        <p className="mt-6">
          Eine komplette Lückenanalyse für Apple Maps, Google Business und ChatGPT Search liefert unser{" "}
          <Link to="/ai-visibility-audit" className="text-primary underline">
            AI-Sichtbarkeits-Audit
          </Link>{" "}
          in unter 60 Sekunden.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Bereit für vollständige Sichtbarkeit — auf jedem Smartphone?</h3>
        <p className="mb-4">
          Ein Drittel deiner Kunden hat ein iPhone in der Hand. Wir prüfen kostenlos, wie sichtbar du in Apple Maps, Google Maps und ChatGPT Search heute bist — und liefern den konkreten Optimierungsplan.
        </p>
        <Link
          to="/ai-visibility-audit"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
        >
          AI-Sichtbarkeits-Audit starten →
        </Link>
      </div>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default AppleBusinessConnectLocalSeo2026;