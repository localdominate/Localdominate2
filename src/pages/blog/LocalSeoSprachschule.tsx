import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookOpen, Search, ListChecks, Calendar, Star, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-sprachschule";

const LocalSeoSprachschule = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Wie Kursinteressenten suchen" },
    { id: "kursseiten", title: "Kursseiten je Sprache und Niveau" },
    { id: "zielgruppen", title: "Privat, Firmen und Eltern" },
    { id: "saison", title: "Saisonale Nachfrage" },
    { id: "profil", title: "Profil und Standorte" },
    { id: "vertrauen", title: "Vertrauen und Bewertungen" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wonach suchen Menschen, die einen Sprachkurs buchen wollen?",
      answer:
        "Nach Sprache plus Ort, nach Niveau wie B1 oder C1, nach Prüfungen wie telc, Goethe oder IELTS sowie nach Format und Preis. Ein großer Teil sucht zusätzlich nach Kursbeginn und Abendkursen. Entschieden wird anhand von Startterminen, Preisen und Bewertungen.",
    },
    {
      question: "Braucht jede Sprache eine eigene Seite?",
      answer:
        "Ja, und zusätzlich jedes relevante Niveau. Deutsch als Fremdsprache B1 ist eine andere Suchintention als Business English oder Spanisch für Anfänger. Eine gemeinsame Kursübersicht rankt für keine dieser Anfragen zuverlässig und beantwortet weder Voraussetzungen noch Prüfungsziel.",
    },
    {
      question: "Wie gewinne ich Firmenkunden über die Website?",
      answer:
        "Mit einer eigenen Seite für Firmenschulungen, die Inhouse-Formate, Gruppengrößen, Abrechnung, Zertifikate und Ansprechpartner beschreibt. Firmenkunden entscheiden über Angebotsanfragen statt über Sofortbuchung, deshalb braucht diese Seite ein strukturiertes Anfrageformular statt eines Buchungsbuttons.",
    },
    {
      question: "Wie gehe ich mit der Saisonalität um?",
      answer:
        "Die Nachfrage steigt vor Semester- und Kursstarts sowie im Januar und September. Kursseiten müssen zwei bis drei Monate vor dem Start aktuell sein, inklusive Termin, Preis und freien Plätzen. Wer erst zum Starttermin veröffentlicht, verpasst die gesamte Recherchephase.",
    },
    {
      question: "Welche Vertrauenssignale sind für Sprachschulen entscheidend?",
      answer:
        "Qualifikation und Muttersprachlichkeit der Lehrkräfte, anerkannte Prüfungszertifizierungen, Trägerzulassungen sowie nachvollziehbare Erfolgsquoten bei Prüfungen. Ergänzend wirken Bewertungen, die Niveau, Lehrkraft und Prüfungsergebnis konkret benennen, deutlich stärker als allgemeines Lob.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Sprachschulen konkurrieren mit Online-Plattformen, die keine Ortsbindung kennen. Der lokale Vorteil entsteht durch konkrete Kurstermine, Prüfungszentren vor Ort und benannte Lehrkräfte — vorausgesetzt, diese Informationen stehen dort, wo gesucht wird.
      </p>

      <KeyTakeawaysBox
        items={[
          "Jede Sprache und jedes Niveau bekommt eine eigene Kursseite",
          "Prüfungsformate wie telc, Goethe oder IELTS gezielt benennen",
          "Firmenschulungen brauchen eine eigene Seite mit Anfrageformular",
          "Kurstermine zwei bis drei Monate vor Start veröffentlichen",
          "Lehrkraft-Qualifikation und Erfolgsquoten sichtbar machen",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie suchen Kursinteressenten nach einer Sprachschule?
        </h2>
        <AnswerBlock question="Welche Suchanfragen dominieren bei Sprachkursen?">
          Sprache plus Ort, Niveau wie B1 oder C1, Prüfungsnamen wie telc oder Goethe sowie Fragen zu Kosten, Dauer und Kursbeginn. Viele suchen abends nach Abend- oder Wochenendkursen. Entschieden wird anhand von Starttermin, Preis und dem Eindruck, ob das Niveau wirklich passt.
        </AnswerBlock>
      </section>

      <section id="kursseiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Kursseiten braucht eine Sprachschule?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Seitentyp</th>
                <th className="border p-3 text-left">Suchintention</th>
                <th className="border p-3 text-left">Pflichtinhalt</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Sprache je Niveau</td><td className="border p-3">Deutsch B1, Englisch A2</td><td className="border p-3">Voraussetzung, Dauer, Preis, Starttermin</td></tr>
              <tr><td className="border p-3 font-semibold">Prüfungsvorbereitung</td><td className="border p-3">telc, Goethe, IELTS</td><td className="border p-3">Prüfungstermine, Ablauf, Gebühren</td></tr>
              <tr><td className="border p-3 font-semibold">Intensivkurs</td><td className="border p-3">Schnell zum Abschluss</td><td className="border p-3">Wochenstunden, Zeitraum, Kosten</td></tr>
              <tr><td className="border p-3 font-semibold">Firmenschulung</td><td className="border p-3">B2B-Anfrage</td><td className="border p-3">Formate, Gruppengröße, Abrechnung</td></tr>
              <tr><td className="border p-3 font-semibold">Nachhilfe</td><td className="border p-3">Schule und Eltern</td><td className="border p-3">Fächer, Klassenstufen, Zeiten</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="zielgruppen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-7 h-7 text-primary" />
          Wie unterscheiden sich Privat-, Firmen- und Elternanfragen?
        </h2>
        <AnswerBlock question="Warum brauchen die drei Zielgruppen getrennte Seiten?">
          Privatkunden buchen selbst und vergleichen Preis und Termin. Firmen fragen Angebote an und prüfen Formate, Rechnungsstellung und Zertifikate. Eltern entscheiden für Kinder und fragen nach Betreuung, Lernfortschritt und Sicherheit. Eine gemeinsame Seite beantwortet keine dieser Fragen vollständig.
        </AnswerBlock>
      </section>

      <section id="saison" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-primary" />
          Wie plane ich die saisonale Nachfrage?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Kursseiten spätestens zwölf Wochen vor Kursstart aktualisieren.</li>
          <li>Freie Plätze und Anmeldeschluss sichtbar ausweisen.</li>
          <li>Wartelisten anbieten, wenn ein Kurs ausgebucht ist.</li>
          <li>Abgelaufene Termine ersetzen statt Seiten löschen — die URL behält ihre Sichtbarkeit.</li>
        </ol>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-primary" />
          Was gehört ins Standortprofil?
        </h2>
        <AnswerBlock question="Wie richte ich das Unternehmensprofil einer Sprachschule ein?">
          Hauptkategorie Sprachschule, Zweitkategorien für Nachhilfe oder Erwachsenenbildung, angebotene Sprachen als Leistungen, Bürozeiten statt Unterrichtszeiten sowie ein direkter Link zur Kursübersicht. Jeder Standort mit eigenem Unterrichtsgebäude braucht ein eigenes Profil und eine eigene Landingpage.
        </AnswerBlock>
        <p className="mt-4">
          Mehrstandort-Regeln: <Link to="/blog/gbp-mehrere-standorte" className="text-primary underline">Guide für mehrere Standorte</Link>.
        </p>
      </section>

      <section id="vertrauen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Welche Vertrauenssignale überzeugen?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Lehrkräfte mit Qualifikation, Sprachniveau und Erfahrung vorstellen.</li>
          <li>Zulassungen und Prüfungszentrums-Status belegen statt behaupten.</li>
          <li>Bewertungen nach bestandener Prüfung erfragen — dann ist der Nutzen konkret.</li>
          <li>Erfolgsquoten nur nennen, wenn sie belegbar sind.</li>
        </ul>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Profil und Kategorien korrigieren, Sprachen als Leistungen hinterlegen, Kursübersicht verlinken.</li>
          <li><strong>Tag 31–60:</strong> Kursseiten je Sprache und Niveau schreiben, Prüfungsvorbereitung und Firmenschulung ergänzen.</li>
          <li><strong>Tag 61–90:</strong> Bewertungsroutine nach Prüfungen einführen, Termine für die nächste Saison veröffentlichen, Anfragen auswerten.</li>
        </ol>
        <p className="mt-4">
          Weiterführend: <Link to="/blog/local-seo-fahrschule" className="text-primary underline">Local SEO für Fahrschulen</Link> und{" "}
          <Link to="/blog/lokale-keyword-recherche" className="text-primary underline">lokale Keyword-Recherche</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoSprachschule;
