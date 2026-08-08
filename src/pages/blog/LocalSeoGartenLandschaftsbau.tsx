import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Leaf, Search, ListChecks, Images, Star, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-garten-landschaftsbau";

const LocalSeoGartenLandschaftsbau = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "saison", title: "Saisonalität als Planungsgrundlage" },
    { id: "leistungen", title: "Leistungen und Auftragswerte" },
    { id: "profil", title: "Profil und Servicegebiet" },
    { id: "keywords", title: "Keywords je Projektphase" },
    { id: "bilder", title: "Vorher-Nachher-Referenzen" },
    { id: "anfragen", title: "Anfragen qualifizieren" },
    { id: "plan", title: "Jahresplan" },
  ];

  const faqItems = [
    {
      question: "Wann sollte ein GaLaBau-Betrieb mit Local SEO starten?",
      answer:
        "Im Spätherbst oder Winter, also drei bis fünf Monate vor der Hauptsaison. Sichtbarkeit baut sich über Wochen auf, während Anfragen für Gartenumgestaltungen bereits im Januar und Februar beginnen. Wer erst im April startet, verpasst die Planungsphase der wertvollsten Projekte.",
    },
    {
      question: "Welche Google-Kategorie ist für Garten- und Landschaftsbau richtig?",
      answer:
        "Als Hauptkategorie meist Garten- und Landschaftsbauer. Nebenkategorien richten sich nach dem Angebot: Gartenpflegedienst, Baumpflege, Pflasterarbeiten, Teichbau oder Bewässerungssysteme. Eine reine Pflegefirma sollte Gartenpflegedienst als Hauptkategorie wählen, weil Auftragstyp und Preisniveau anders liegen.",
    },
    {
      question: "Wie wichtig sind Vorher-Nachher-Bilder?",
      answer:
        "Sie sind das stärkste Verkaufsargument der Branche, weil das Ergebnis sichtbar und emotional bewertbar ist. Jedes Referenzprojekt braucht mindestens ein Bildpaar, eine kurze Beschreibung der Ausgangslage, den Umfang der Arbeiten und den ungefähren Zeitraum. Ohne Kontext verlieren Bilder ihre Überzeugungskraft.",
    },
    {
      question: "Wie gehe ich mit Pflegeverträgen im Vergleich zu Projekten um?",
      answer:
        "Getrennt behandeln. Pflegeverträge sind planbarer Grundumsatz mit kurzer Entscheidungsdauer und brauchen eine schlanke Seite mit Turnus und Preisrahmen. Gestaltungsprojekte haben hohe Auftragswerte und lange Entscheidungswege und brauchen Referenzen, Ablaufbeschreibung und ein Beratungsangebot.",
    },
    {
      question: "Wie vermeide ich unpassende Anfragen?",
      answer:
        "Durch klare Angaben zu Einsatzgebiet, Mindestprojektgröße und typischen Preisrahmen sowie ein Formular, das Grundstücksgröße, gewünschte Leistungen und Zeitfenster abfragt. Das reduziert Besichtigungen ohne Abschlusschance deutlich und schont die knappe Kapazität in der Hauptsaison.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Kaum eine Branche ist so saisonal wie der Garten- und Landschaftsbau: Die Aufträge des Sommers werden im Winter entschieden. Lokale Sichtbarkeit muss deshalb dem Jahresrhythmus folgen, nicht dem Kalendermonat des Bedarfs.
      </p>

      <KeyTakeawaysBox
        items={[
          "Sichtbarkeit muss vor der Saison stehen, nicht in der Saison entstehen",
          "Pflegeverträge und Gestaltungsprojekte sind getrennte Angebote",
          "Vorher-Nachher-Referenzen sind das stärkste Verkaufsargument",
          "Einsatzgebiet und Mindestprojektgröße filtern unpassende Anfragen",
          "Kapazität ist knapp: Anfragequalität schlägt Anfragemenge",
        ]}
      />

      <section id="saison" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Leaf className="w-7 h-7 text-primary" />
          Warum entscheidet die Saison über die Strategie?
        </h2>
        <AnswerBlock question="Wann suchen Kunden nach Garten- und Landschaftsbau?">
          Die Recherche für größere Umgestaltungen beginnt im Winter und Frühjahr, die Umsetzung folgt Monate später. Pflegeleistungen und Baumarbeiten werden dagegen kurzfristig gesucht. Sichtbarkeit für Projekte muss deshalb bereits im Spätherbst aufgebaut sein, weil Rankings und Referenzen Zeit brauchen.
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
                <th className="border p-3 text-left">Entscheidungsdauer</th>
                <th className="border p-3 text-left">Auftragstyp</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Gartenpflege</td><td className="border p-3">Kurz</td><td className="border p-3">Wiederkehrend</td></tr>
              <tr><td className="border p-3 font-semibold">Gartengestaltung</td><td className="border p-3">Lang</td><td className="border p-3">Projekt</td></tr>
              <tr><td className="border p-3 font-semibold">Pflaster- und Wegebau</td><td className="border p-3">Mittel</td><td className="border p-3">Projekt</td></tr>
              <tr><td className="border p-3 font-semibold">Baumpflege und Fällung</td><td className="border p-3">Kurz</td><td className="border p-3">Einzelauftrag</td></tr>
              <tr><td className="border p-3 font-semibold">Bewässerung</td><td className="border p-3">Mittel</td><td className="border p-3">Zusatzprojekt</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie richte ich Profil und Servicegebiet ein?
        </h2>
        <AnswerBlock question="Was gehört ins Standortprofil eines GaLaBau-Betriebs?">
          Hauptkategorie passend zum Umsatzschwerpunkt, Nebenkategorien nur für real erbrachte Leistungen, ein klar begrenztes Servicegebiet statt einer flächendeckenden Angabe und Projektbilder statt Symbolfotos. Betriebe ohne Kundenverkehr am Betriebshof verbergen die Adresse und pflegen stattdessen das Einsatzgebiet.
        </AnswerBlock>
        <p className="mt-4">
          Kategorienlogik im <Link to="/blog/google-business-kategorien-guide" className="text-primary underline">Kategorien-Guide</Link>, Bildregeln unter <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline">Fotos optimieren</Link>.
        </p>
      </section>

      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Welche Keywords passen zu welcher Projektphase?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Inspiration (Winter):</strong> Gartenplanung, Gartenideen, Kosten Gartenumgestaltung.</li>
          <li><strong>Auswahl (Frühjahr):</strong> Landschaftsgärtner plus Ort, Gartenbau Angebot, Referenzen.</li>
          <li><strong>Sofortbedarf:</strong> Baum fällen, Hecke schneiden, Rasen anlegen plus Ort.</li>
          <li><strong>Bestandskunden:</strong> Gartenpflege Vertrag, Winterdienst, Bewässerung nachrüsten.</li>
        </ul>
      </section>

      <section id="bilder" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Images className="w-7 h-7 text-primary" />
          Wie setze ich Vorher-Nachher-Referenzen ein?
        </h2>
        <AnswerBlock question="Was macht eine überzeugende Referenz aus?">
          Ein Bildpaar aus derselben Perspektive, eine kurze Beschreibung der Ausgangslage, der Umfang der Arbeiten, die Projektdauer und die grobe Größenordnung des Grundstücks. Diese Angaben machen das Ergebnis vergleichbar und helfen Interessenten einzuschätzen, ob ihr eigenes Vorhaben zum Betrieb passt.
        </AnswerBlock>
      </section>

      <section id="anfragen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wie qualifiziere ich Anfragen vor der Besichtigung?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Grundstücksgröße und Art der Fläche abfragen.</li>
          <li>Gewünschte Leistungen konkret auswählen lassen.</li>
          <li>Zeitfenster und Wunschtermin erfassen.</li>
          <li>Ort und Zufahrtssituation angeben lassen.</li>
          <li>Typischen Preisrahmen offen kommunizieren.</li>
        </ol>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein Jahresplan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Oktober–Dezember:</strong> Profil und Leistungsseiten aufbauen, Referenzen der Saison dokumentieren.</li>
          <li><strong>Januar–März:</strong> Planungsinhalte veröffentlichen, Beratungstermine aktiv anbieten.</li>
          <li><strong>April–August:</strong> Kapazität steuern, Bewertungen sammeln, Projektbilder fortlaufend ergänzen.</li>
          <li><strong>September:</strong> Auswertung von Anfragequalität und Auslastung, Planung der nächsten Saison.</li>
        </ol>
        <p className="mt-6">
          Als Grundgerüst dient die <Link to="/blog/local-seo-roadmap-90-tage" className="text-primary underline">90-Tage-Roadmap</Link>.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Volle Auftragsbücher vor der Saison</h3>
        <p className="mb-4">
          Wir bauen Profil, Referenzstruktur und Leistungsseiten so auf, dass Projektanfragen bereits im Winter entstehen — passend zur eigenen Kapazität.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoGartenLandschaftsbau;
