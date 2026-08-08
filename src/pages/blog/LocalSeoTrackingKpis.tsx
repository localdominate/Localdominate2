import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, Target, ListChecks, LineChart, AlertTriangle, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-tracking-kpis";

const LocalSeoTrackingKpis = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "kpis", title: "Die sechs relevanten Kennzahlen" },
    { id: "quellen", title: "Datenquellen und Grenzen" },
    { id: "setup", title: "Tracking-Setup in fünf Schritten" },
    { id: "attribution", title: "Anrufe und Wege zuordnen" },
    { id: "report", title: "Monatsreport aufbauen" },
    { id: "fehler", title: "Fehlinterpretationen vermeiden" },
  ];

  const faqItems = [
    {
      question: "Welche KPIs zählen bei Local SEO wirklich?",
      answer:
        "Anfragen aus dem Einzugsgebiet, Anrufe, Routenanfragen, Sichtbarkeit im lokalen Kartenausschnitt, Klicks auf Standortseiten und die Bewertungsentwicklung. Reine Rankingpositionen ohne Bezug zu Anfragen sind kein Erfolgsmaß, weil lokale Ergebnisse je nach Standort des Suchenden abweichen.",
    },
    {
      question: "Warum unterscheiden sich Profil-Statistiken und Analytics?",
      answer:
        "Weil sie unterschiedliche Ereignisse zählen. Die Profil-Statistik erfasst Interaktionen im Kartenergebnis, Analytics nur Besuche auf der Website. Ein Anruf direkt aus dem Profil erreicht die Website nie. Beide Quellen gehören nebeneinander in den Report, nicht in eine Summe.",
    },
    {
      question: "Wie oft sollte man lokale Kennzahlen auswerten?",
      answer:
        "Monatlich im Vergleich zum Vorjahresmonat, weil lokale Nachfrage stark saisonal schwankt. Wöchentliche Auswertungen erzeugen Scheinbewegungen. Größere Maßnahmen werden zusätzlich mit einem Datumsvermerk dokumentiert, damit Veränderungen später einer Ursache zugeordnet werden können.",
    },
    {
      question: "Wie misst man Anrufe aus lokaler Suche?",
      answer:
        "Über die Statistik des Unternehmensprofils für Anrufe aus dem Kartenergebnis und über ein Klick-Ereignis auf der Telefonnummer der Website. Für belastbare Zuordnung eignet sich eine separate Rufnummer je Kanal, sofern die Hauptnummer im Profil und in allen Verzeichnissen unverändert bleibt.",
    },
    {
      question: "Welche Kennzahl zeigt Fortschritt am frühesten?",
      answer:
        "Impressionen für Kombinationen aus Leistung und Ort in der Search Console. Sie steigen typischerweise Wochen vor Klicks und Anfragen und zeigen, dass neue Seiten in den relevanten Suchanfragen überhaupt erscheinen — noch bevor sie vordere Positionen erreichen.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Local SEO scheitert selten an fehlenden Daten, sondern an den falschen. Wer Positionen zählt statt Anfragen, optimiert an der Kasse vorbei.
      </p>

      <KeyTakeawaysBox
        items={[
          "Sechs Kennzahlen genügen: Anfragen, Anrufe, Routen, lokale Sichtbarkeit, Standortseiten-Klicks, Bewertungen",
          "Profil-Statistik und Website-Analytics nie addieren — sie zählen Unterschiedliches",
          "Monatsvergleich zum Vorjahresmonat statt Wochenrauschen",
          "Maßnahmen mit Datum dokumentieren, sonst bleibt Wirkung unbeweisbar",
          "Impressionen sind der Frühindikator, Anfragen das Ergebnis",
        ]}
      />

      <section id="kpis" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-7 h-7 text-primary" />
          Welche Kennzahlen sind entscheidend?
        </h2>
        <AnswerBlock question="Welche sechs KPIs braucht Local SEO?">
          Qualifizierte Anfragen aus dem Einzugsgebiet, Anrufe, Routenanfragen, Sichtbarkeit im lokalen Kartenausschnitt, Klicks auf Standort- und Leistungsseiten sowie Anzahl und Durchschnitt der Bewertungen. Diese sechs Werte beschreiben den gesamten Weg von der Suche bis zum Kontakt und genügen für Steuerung und Bericht.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kennzahl</th>
                <th className="border p-3 text-left">Quelle</th>
                <th className="border p-3 text-left">Aussage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Anfragen</td><td className="border p-3">Formular, CRM</td><td className="border p-3">Geschäftswirkung</td></tr>
              <tr><td className="border p-3 font-semibold">Anrufe</td><td className="border p-3">Profil-Statistik, Klick-Event</td><td className="border p-3">Direkter Kontaktwunsch</td></tr>
              <tr><td className="border p-3 font-semibold">Routenanfragen</td><td className="border p-3">Profil-Statistik</td><td className="border p-3">Besuchsabsicht</td></tr>
              <tr><td className="border p-3 font-semibold">Lokale Sichtbarkeit</td><td className="border p-3">Rastermessung</td><td className="border p-3">Reichweite im Gebiet</td></tr>
              <tr><td className="border p-3 font-semibold">Seitenklicks</td><td className="border p-3">Search Console</td><td className="border p-3">Wirkung einzelner Seiten</td></tr>
              <tr><td className="border p-3 font-semibold">Bewertungen</td><td className="border p-3">Profil</td><td className="border p-3">Vertrauensentwicklung</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="quellen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="w-7 h-7 text-primary" />
          Welche Datenquelle sagt was aus?
        </h2>
        <AnswerBlock question="Warum weichen Profil-Statistik und Analytics ab?">
          Weil die Profil-Statistik Interaktionen im Kartenergebnis zählt und Analytics ausschließlich Website-Besuche. Ein Anruf aus dem Profil taucht in Analytics nie auf, ein Direktzugriff auf die Website nicht im Profil. Beide Quellen werden nebeneinander berichtet, niemals summiert.
        </AnswerBlock>
        <p className="mt-4">
          Vertiefung: <Link to="/blog/local-seo-reporting-template" className="text-primary underline">Reporting-Vorlage</Link>.
        </p>
      </section>

      <section id="setup" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie baue ich das Tracking auf?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Ziele definieren: Formularabsendung, Telefonklick, Routenklick, Terminbuchung.</li>
          <li>Ereignisse in Analytics anlegen und je Standortseite kennzeichnen.</li>
          <li>Search Console pro Property verifizieren und Seitenberichte speichern.</li>
          <li>Profil-Statistiken monatlich exportieren und archivieren.</li>
          <li>Maßnahmenprotokoll mit Datum führen, damit Ausschläge erklärbar bleiben.</li>
        </ol>
      </section>

      <section id="attribution" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie ordne ich Anrufe und Wege richtig zu?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Telefonnummer im Profil und in Verzeichnissen unverändert lassen — NAP bleibt konsistent.</li>
          <li>Zusätzliche Rufnummern nur für abgegrenzte Kanäle wie Anzeigen verwenden.</li>
          <li>Im Erstgespräch kurz nach der Fundstelle fragen und im CRM festhalten.</li>
        </ul>
        <p className="mt-4">
          Hintergrund: <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline">NAP-Konsistenz</Link>.
        </p>
      </section>

      <section id="report" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <CalendarClock className="w-7 h-7 text-primary" />
          Wie sieht ein brauchbarer Monatsreport aus?
        </h2>
        <AnswerBlock question="Was gehört in den Monatsbericht?">
          Eine Seite mit den sechs Kennzahlen im Vergleich zum Vorjahresmonat, drei Sätzen zur Erklärung der Veränderung, den im Monat umgesetzten Maßnahmen mit Datum und drei konkreten nächsten Schritten. Alles Weitere gehört in den Anhang und nicht in die Entscheidungsgrundlage.
        </AnswerBlock>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche Auswertungsfehler sind häufig?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Position am eigenen Standort messen statt im gesamten Einzugsgebiet.</li>
          <li>Saisonale Schwankungen als Maßnahmenwirkung deuten.</li>
          <li>Profil- und Website-Zahlen addieren und dadurch doppelt zählen.</li>
          <li>Anfragen ohne Qualitätsbewertung zählen, obwohl viele außerhalb des Gebiets liegen.</li>
        </ol>
        <p className="mt-4">
          Weiterführend: <Link to="/blog/lokale-landing-pages" className="text-primary underline">lokale Landing Pages</Link> und{" "}
          <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline">Audit-Checkliste</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoTrackingKpis;