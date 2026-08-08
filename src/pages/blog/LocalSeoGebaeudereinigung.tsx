import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, Search, Building2, Star, ListChecks, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-gebaeudereinigung";

const LocalSeoGebaeudereinigung = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "b2b", title: "B2B-Suche verstehen" },
    { id: "leistungen", title: "Leistungen sauber trennen" },
    { id: "kategorien", title: "Profil und Kategorien" },
    { id: "keywords", title: "Keywords nach Auftragstyp" },
    { id: "vertrauen", title: "Vertrauenssignale" },
    { id: "angebot", title: "Vom Klick zur Ausschreibung" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wie unterscheidet sich Local SEO für Gebäudereiniger von B2C-Branchen?",
      answer:
        "Die Entscheidung fällt selten sofort und selten allein. Objektleitung, Einkauf und Verwaltung prüfen Referenzen, Qualifikationen und Preisstruktur über Wochen. Sichtbarkeit muss deshalb nicht nur Anrufe erzeugen, sondern Anfragen mit Objektangaben — Fläche, Turnus, Standort — die ein belastbares Angebot ermöglichen.",
    },
    {
      question: "Welche Kategorie ist für einen Reinigungsbetrieb richtig?",
      answer:
        "Meist Gebäudereinigung als Hauptkategorie. Nebenkategorien richten sich nach dem tatsächlichen Angebot: Fensterreinigung, Teppichreinigung, Baureinigung, Industriereinigung oder Hausmeisterservice. Nur Kategorien setzen, die auch mit eigenem Personal oder festen Partnern erbracht werden.",
    },
    {
      question: "Welche Leistungen brauchen eigene Seiten?",
      answer:
        "Jede Leistung mit eigenem Suchvolumen und eigener Zielgruppe: Unterhaltsreinigung, Fensterreinigung, Bauendreinigung, Treppenhausreinigung und Industriereinigung. Eine Sammelseite mit Aufzählung rankt schlechter und erzeugt unqualifizierte Anfragen, weil Umfang und Turnus nicht klar werden.",
    },
    {
      question: "Welche Vertrauenssignale sind im B2B entscheidend?",
      answer:
        "Nachweisbare Referenzobjekte mit Objekttyp und Fläche, Angaben zu Personal und Einarbeitung, Qualitätssicherung mit dokumentierten Kontrollen, Versicherungsschutz sowie klare Ansprechpartner. Diese Angaben ersetzen im gewerblichen Umfeld das, was im Privatkundengeschäft Bewertungen leisten.",
    },
    {
      question: "Wie mache ich aus Besuchern konkrete Anfragen?",
      answer:
        "Über ein Anfrageformular, das die kalkulationsrelevanten Angaben direkt abfragt: Objektart, ungefähre Fläche, gewünschter Turnus, Standort und Startzeitpunkt. Das verkürzt die Angebotsphase erheblich und filtert Anfragen aus, die außerhalb des Einsatzgebiets oder der Betriebsgröße liegen.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Gebäudereinigung ist ein Vertragsgeschäft: Ein einziger gewonnener Objektauftrag trägt oft über Jahre. Entsprechend anders funktioniert lokale Sichtbarkeit — nicht Masse an Klicks entscheidet, sondern die Qualität der Anfragen aus dem Einsatzgebiet.
      </p>

      <KeyTakeawaysBox
        items={[
          "B2B-Entscheidungen laufen über Wochen und mehrere Beteiligte",
          "Jede Reinigungsart braucht eine eigene Leistungsseite",
          "Referenzobjekte ersetzen im gewerblichen Umfeld die Bewertungsmenge",
          "Das Anfrageformular fragt Fläche, Turnus und Objektart direkt ab",
          "Einsatzgebiet klar begrenzen statt flächendeckend zu werben",
        ]}
      />

      <section id="b2b" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="w-7 h-7 text-primary" />
          Wie suchen gewerbliche Auftraggeber nach Reinigungsdienstleistern?
        </h2>
        <AnswerBlock question="Was unterscheidet die B2B-Suche in der Gebäudereinigung?">
          Die Suche startet meist bei einer konkreten Objektaufgabe und endet nicht mit einem Anruf, sondern mit einer Angebotsanfrage. Mehrere Beteiligte vergleichen Referenzen, Qualitätssicherung und Preisstruktur über Wochen. Sichtbarkeit muss deshalb Anfragen mit Objektangaben erzeugen, nicht möglichst viele Kontakte.
        </AnswerBlock>
      </section>

      <section id="leistungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Leistungen brauchen eigene Seiten?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Leistung</th>
                <th className="border p-3 text-left">Zielgruppe</th>
                <th className="border p-3 text-left">Auftragstyp</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Unterhaltsreinigung</td><td className="border p-3">Büros, Praxen</td><td className="border p-3">Dauervertrag</td></tr>
              <tr><td className="border p-3 font-semibold">Treppenhausreinigung</td><td className="border p-3">Hausverwaltungen</td><td className="border p-3">Dauervertrag</td></tr>
              <tr><td className="border p-3 font-semibold">Fensterreinigung</td><td className="border p-3">Handel, Büros</td><td className="border p-3">Turnusauftrag</td></tr>
              <tr><td className="border p-3 font-semibold">Bauendreinigung</td><td className="border p-3">Bauunternehmen</td><td className="border p-3">Einzelauftrag</td></tr>
              <tr><td className="border p-3 font-semibold">Industriereinigung</td><td className="border p-3">Produktion, Logistik</td><td className="border p-3">Rahmenvertrag</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="kategorien" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-primary" />
          Wie richte ich das Standortprofil ein?
        </h2>
        <AnswerBlock question="Welche Profilangaben zählen für Reinigungsbetriebe?">
          Hauptkategorie Gebäudereinigung, Nebenkategorien nur für tatsächlich erbrachte Leistungen, ein klar definiertes Einsatzgebiet statt einer flächendeckenden Angabe, Bilder von Team und Objektarbeit sowie Erreichbarkeitszeiten des Büros. Bei Betrieben ohne Kundenverkehr wird die Adresse verborgen und das Servicegebiet gepflegt.
        </AnswerBlock>
        <p className="mt-4">
          Grundlagen dazu im <Link to="/blog/google-my-business-optimieren" className="text-primary underline">Profil-Guide</Link> und in den <Link to="/blog/gbp-attribute-richtig-nutzen" className="text-primary underline">Attribut-Regeln</Link>.
        </p>
      </section>

      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Welche Keywords passen zu welchem Auftragstyp?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Vertragsgeschäft:</strong> Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung plus Ort.</li>
          <li><strong>Projektgeschäft:</strong> Bauendreinigung, Grundreinigung, Sonderreinigung plus Ort.</li>
          <li><strong>Objektbezug:</strong> Praxisreinigung, Schulreinigung, Hotelreinigung, Logistikhalle.</li>
          <li><strong>Vergleich:</strong> Reinigungsfirma Kosten, Reinigungsvertrag Leistungsverzeichnis.</li>
        </ul>
      </section>

      <section id="vertrauen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Welche Vertrauenssignale überzeugen Auftraggeber?
        </h2>
        <AnswerBlock question="Was ersetzt im B2B die Bewertungsmenge?">
          Belegbare Referenzen: Objektart, ungefähre Fläche, Turnus und Dauer der Zusammenarbeit — auf Wunsch anonymisiert. Ergänzend Angaben zu Personalstruktur und Einarbeitung, dokumentierte Qualitätskontrollen, Versicherungsschutz und ein namentlicher Ansprechpartner. Diese Angaben entscheiden häufiger über die Einladung zum Angebot als der Bewertungsschnitt.
        </AnswerBlock>
      </section>

      <section id="angebot" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie wird aus einem Besuch eine kalkulierbare Anfrage?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Objektart und Nutzung abfragen.</li>
          <li>Ungefähre Fläche und Anzahl der Etagen erfassen.</li>
          <li>Gewünschten Turnus und Zeitfenster erfragen.</li>
          <li>Standort und gewünschten Startzeitpunkt aufnehmen.</li>
          <li>Rückmeldefrist verbindlich nennen und einhalten.</li>
        </ol>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Profil vollständig, Servicegebiet definiert, NAP-Abgleich, Anfrageformular überarbeitet.</li>
          <li><strong>Tag 31–60:</strong> Leistungsseiten je Reinigungsart, Referenzobjekte dokumentiert, Qualitätssicherung beschrieben.</li>
          <li><strong>Tag 61–90:</strong> Ortsseiten im Einsatzgebiet, interne Verlinkung, Auswertung der Anfragequalität statt der Klickzahl.</li>
        </ol>
        <p className="mt-6">
          Die allgemeine Vorgehensweise beschreibt die <Link to="/blog/local-seo-roadmap-90-tage" className="text-primary underline">90-Tage-Roadmap</Link>.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Mehr qualifizierte Objektanfragen</h3>
        <p className="mb-4">
          Wir bauen Leistungsseiten, Referenzstruktur und Anfrageformular so auf, dass Anfragen kalkulierbar werden — statt reiner Preisabfragen.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoGebaeudereinigung;
