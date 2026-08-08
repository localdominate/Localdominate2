import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Car, Search, ListChecks, Star, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-fahrschule";

const LocalSeoFahrschule = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Wie Fahrschüler suchen" },
    { id: "klassen", title: "Führerscheinklassen als Seiten" },
    { id: "profil", title: "Profil und Standorte" },
    { id: "preise", title: "Preistransparenz" },
    { id: "eltern", title: "Eltern als Mitentscheider" },
    { id: "bewertungen", title: "Bewertungen und Erfolgsquote" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wonach suchen Fahrschüler konkret?",
      answer:
        "Meist nach Fahrschule plus Ort oder Stadtteil, nach der Führerscheinklasse wie Klasse B oder A1 sowie nach Kosten und Dauer. Ein erheblicher Teil sucht zusätzlich nach Anmeldeterminen und Theoriezeiten. Die Suche findet fast vollständig mobil statt, meist abends und am Wochenende.",
    },
    {
      question: "Braucht jede Führerscheinklasse eine eigene Seite?",
      answer:
        "Ja, wenn sie tatsächlich angeboten wird. Klasse B, A1, A2, A, BE und Mofa unterscheiden sich in Voraussetzungen, Mindestalter, Pflichtstunden und Kosten. Eine Sammelseite kann diese Unterschiede nicht sauber beantworten und verliert gegen Anbieter mit spezifischen Seiten.",
    },
    {
      question: "Wie gehe ich mit mehreren Standorten um?",
      answer:
        "Jede Filiale mit Kundenverkehr bekommt ein eigenes Standortprofil mit eigener Adresse, eigenen Öffnungszeiten und einer eigenen Landingpage. Theorieorte ohne feste Büroöffnung sind keine eigenen Standorte, sondern werden auf der zuständigen Filialseite mit Zeiten und Adresse beschrieben.",
    },
    {
      question: "Sollten Fahrschulen ihre Preise veröffentlichen?",
      answer:
        "Ja, in transparenter Form. Grundbetrag, Preis je Fahrstunde, Sonderfahrten, Vorstellungsentgelt und Lernmaterial gehören offen ausgewiesen, ergänzt um eine Beispielrechnung für einen durchschnittlichen Verlauf. Fahrschulen ohne Preisangaben verlieren Anfragen an Anbieter, die Kosten nachvollziehbar darstellen.",
    },
    {
      question: "Wie wichtig sind Bewertungen für Fahrschulen?",
      answer:
        "Sie sind der stärkste Auswahlfaktor, weil Fahrschüler ihre Entscheidung überwiegend auf Empfehlungen und Bewertungen stützen. Wertvoll sind Bewertungen, die Geduld der Fahrlehrer, Terminverfügbarkeit und Prüfungsvorbereitung benennen. Der beste Zeitpunkt zur Bitte ist unmittelbar nach bestandener praktischer Prüfung.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Fahrschulen konkurrieren in einem eng begrenzten Radius um eine Zielgruppe, die fast ausschließlich mobil sucht und nach Bewertungen entscheidet. Wer Klassen, Kosten und Termine offen darstellt, gewinnt die Anmeldung — häufig noch am selben Abend.
      </p>

      <KeyTakeawaysBox
        items={[
          "Jede angebotene Führerscheinklasse braucht eine eigene Seite",
          "Preise offen ausweisen, inklusive Beispielrechnung",
          "Theorietermine und Anmeldezeiten sichtbar auf der Standortseite",
          "Bewertungen direkt nach bestandener Prüfung erfragen",
          "Eltern sind Mitentscheider und brauchen eigene Antworten",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Car className="w-7 h-7 text-primary" />
          Wie suchen Fahrschüler nach einer Fahrschule?
        </h2>
        <AnswerBlock question="Welche Suchanfragen dominieren bei Fahrschulen?">
          Fahrschule plus Ort oder Stadtteil, die konkrete Führerscheinklasse sowie Fragen zu Kosten und Dauer. Die Suche ist stark mobil geprägt und findet meist abends statt. Entschieden wird innerhalb weniger Minuten anhand von Bewertungen, Preisangaben und der Frage, wann die nächste Anmeldung möglich ist.
        </AnswerBlock>
      </section>

      <section id="klassen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Klassen brauchen eigene Seiten?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Klasse</th>
                <th className="border p-3 text-left">Zielgruppe</th>
                <th className="border p-3 text-left">Pflichtinhalt der Seite</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">B / B197</td><td className="border p-3">Fahranfänger</td><td className="border p-3">Ablauf, Kosten, Dauer, Automatikregelung</td></tr>
              <tr><td className="border p-3 font-semibold">A1 / A2 / A</td><td className="border p-3">Motorrad</td><td className="border p-3">Mindestalter, Aufstieg, Ausbildungsfahrzeuge</td></tr>
              <tr><td className="border p-3 font-semibold">BE</td><td className="border p-3">Anhänger</td><td className="border p-3">Voraussetzungen, Pflichtfahrten</td></tr>
              <tr><td className="border p-3 font-semibold">Mofa / AM</td><td className="border p-3">Jugendliche</td><td className="border p-3">Alter, Umfang, Kosten</td></tr>
              <tr><td className="border p-3 font-semibold">Intensivkurs</td><td className="border p-3">Zeitkritische</td><td className="border p-3">Dauer, Termine, Voraussetzungen</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie richte ich Profil und Standorte ein?
        </h2>
        <AnswerBlock question="Was gehört ins Standortprofil einer Fahrschule?">
          Hauptkategorie Fahrschule, korrekte Büroöffnungszeiten statt Theoriezeiten, alle angebotenen Klassen als Leistungen, Bilder von Fahrzeugen, Unterrichtsraum und Team sowie ein direkter Link zur Anmeldeseite. Jede Filiale mit Kundenverkehr braucht ein eigenes Profil und eine eigene Landingpage.
        </AnswerBlock>
        <p className="mt-4">
          Mehrstandort-Regeln im <Link to="/blog/gbp-mehrere-standorte" className="text-primary underline">Guide für mehrere Standorte</Link>.
        </p>
      </section>

      <section id="preise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie viel Preistransparenz ist sinnvoll?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Grundbetrag und Preis je Fahrstunde offen ausweisen.</li>
          <li>Sonderfahrten, Vorstellungsentgelt und Lernmaterial einzeln benennen.</li>
          <li>Beispielrechnung für einen durchschnittlichen Verlauf zeigen.</li>
          <li>Zahlungsweise und Ratenoption transparent erklären.</li>
        </ul>
      </section>

      <section id="eltern" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-7 h-7 text-primary" />
          Warum sind Eltern eine eigene Zielgruppe?
        </h2>
        <AnswerBlock question="Welche Fragen stellen Eltern vor der Anmeldung?">
          Eltern finanzieren die Ausbildung häufig mit und fragen nach Gesamtkosten, Sicherheit der Fahrzeuge, Qualifikation der Fahrlehrer, Dauer bis zur Prüfung und Umgang mit zusätzlichen Fahrstunden. Eine eigene Seite mit diesen Antworten senkt Rückfragen und erhöht die Abschlussquote bei jungen Fahrschülern deutlich.
        </AnswerBlock>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wie baue ich Bewertungen systematisch auf?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Direkt nach bestandener praktischer Prüfung um eine Bewertung bitten.</li>
          <li>QR-Code im Unterrichtsraum und Link in der Abschlussnachricht anbieten.</li>
          <li>Kritik zu Terminverfügbarkeit sachlich und mit Lösung beantworten.</li>
          <li>Auf gleichmäßigen Zufluss achten statt auf einmalige Aktionen.</li>
        </ol>
        <p className="mt-4">
          Antwortmuster: <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline">Antwortvorlagen</Link>.
        </p>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Profile je Filiale prüfen, Öffnungszeiten korrigieren, Preise veröffentlichen.</li>
          <li><strong>Tag 31–60:</strong> Klassenseiten schreiben, Theorietermine sichtbar machen, Anmeldeweg vereinfachen.</li>
          <li><strong>Tag 61–90:</strong> Elternseite ergänzen, Bewertungsroutine nach Prüfungen etablieren, Anfragen je Klasse auswerten.</li>
        </ol>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Volle Kurse statt leerer Theorieabende</h3>
        <p className="mb-4">
          Wir bringen Klassen, Preise und Anmeldetermine so ins Netz, dass Interessenten direkt buchen statt weiterzusuchen.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoFahrschule;
