import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageSquare, ListChecks, AlertTriangle, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "whatsapp-business-local-seo-2026";

const WhatsappBusinessLocalSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "relevanz", title: "Warum WhatsApp für Local SEO zählt" },
    { id: "profil", title: "Das Unternehmensprofil einrichten" },
    { id: "verknuepfung", title: "Verknüpfung mit Website und Standortprofil" },
    { id: "antwortzeit", title: "Antwortzeit als Conversion-Hebel" },
    { id: "setup", title: "7-Schritte-Setup" },
    { id: "recht", title: "Datenschutz und rechtliche Pflichten" },
    { id: "messung", title: "Wirkung messen" },
  ];

  const faqItems = [
    {
      question: "Beeinflusst WhatsApp Business das lokale Ranking?",
      answer:
        "Nicht direkt. WhatsApp ist kein Rankingfaktor. Der Effekt entsteht indirekt: Ein sichtbarer Chat-Kanal erhöht die Kontaktrate auf der Webseite und im Standortprofil, verkürzt die Reaktionszeit und liefert Anlässe für neue Bewertungen. Diese Signale wirken auf Nutzerverhalten und Reputation — und damit mittelbar auf die lokale Sichtbarkeit.",
    },
    {
      question: "Wie verknüpfe ich WhatsApp mit dem Google-Unternehmensprofil?",
      answer:
        "Über den Chat- beziehungsweise Nachrichten-Bereich des Profils und über einen wa.me-Link in den Profil- und Website-Kontaktangaben. Wichtig ist, dass die hinterlegte Rufnummer exakt der NAP-Nummer entspricht, die auf der Webseite, im Impressum und in Verzeichnissen steht — abweichende Nummern erzeugen Inkonsistenzen.",
    },
    {
      question: "Welche rechtlichen Vorgaben gelten für WhatsApp Business in der DACH-Region?",
      answer:
        "Nutzer müssen vor dem ersten Kontakt über die Datenverarbeitung informiert werden, üblicherweise über einen Hinweis in der Datenschutzerklärung und am Chat-Einstieg. Werbliche Nachrichten setzen eine ausdrückliche Einwilligung voraus. Chatverläufe mit personenbezogenen oder Gesundheitsdaten unterliegen zusätzlichen Anforderungen — im Zweifel rechtlich prüfen lassen.",
    },
    {
      question: "Wie schnell sollte auf WhatsApp-Anfragen geantwortet werden?",
      answer:
        "Innerhalb der Geschäftszeiten möglichst unter 15 Minuten, außerhalb per automatischer Abwesenheitsnachricht mit klarer Rückmeldezeit. Nutzer erwarten bei Chat-Kanälen deutlich kürzere Reaktionszeiten als bei E-Mail. Eine unbeantwortete Anfrage kostet nicht nur den Auftrag, sondern erzeugt häufig negative Rückmeldungen.",
    },
    {
      question: "Lohnt sich WhatsApp Business auch für kleine Betriebe?",
      answer:
        "Ja, sofern die Antwortdisziplin gesichert ist. Für Handwerk, Praxen, Gastronomie und Dienstleistungen mit Terminlogik ist der Kanal besonders geeignet, weil Rückfragen zu Verfügbarkeit, Adresse und Preisrahmen in wenigen Nachrichten geklärt sind. Ohne verlässliche Betreuung schadet der Kanal jedoch mehr, als er nutzt.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        WhatsApp ist in der DACH-Region der meistgenutzte Messenger — und für lokale Unternehmen der kürzeste Weg zwischen Suchergebnis und Auftrag. Dieser Leitfaden zeigt, wie das Unternehmensprofil sauber aufgesetzt, mit Webseite und Standortprofil verknüpft und rechtssicher betrieben wird, ohne die NAP-Konsistenz zu gefährden.
      </p>

      <KeyTakeawaysBox
        items={[
          "WhatsApp ist kein Rankingfaktor, wirkt aber über Kontaktrate und Bewertungen",
          "Die hinterlegte Rufnummer muss exakt der NAP-Nummer entsprechen",
          "Antwortzeit unter 15 Minuten in den Geschäftszeiten anstreben",
          "Datenschutzhinweis am Chat-Einstieg ist Pflicht, Werbung nur mit Einwilligung",
          "Wirkung über Chat-Anfragen je Kanal und Abschlussquote messen",
        ]}
      />

      <section id="relevanz" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MessageSquare className="w-7 h-7 text-primary" />
          Warum ist WhatsApp für lokale Sichtbarkeit relevant?
        </h2>
        <AnswerBlock question="Welchen Beitrag leistet WhatsApp Business zur lokalen Sichtbarkeit?">
          WhatsApp verkürzt den Weg von der Suche zur Anfrage: kein Formular, keine Wartezeit, keine Telefonhürde. Das erhöht die Kontaktrate auf Standortprofil und Webseite. Zusätzlich entstehen strukturierte Anlässe für Bewertungen, weil sich nach Abschluss eines Chats unaufdringlich um Feedback bitten lässt. Beides wirkt indirekt auf lokale Sichtbarkeit.
        </AnswerBlock>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie richte ich das Unternehmensprofil richtig ein?
        </h2>
        <AnswerBlock question="Welche Angaben gehören in ein WhatsApp-Business-Profil?">
          Firmenname exakt wie im Standortprofil, Kategorie, vollständige Adresse, Öffnungszeiten, Website-URL und eine kurze Leistungsbeschreibung. Dazu eine Begrüßungsnachricht mit Hinweis auf Reaktionszeit und eine Abwesenheitsnachricht außerhalb der Geschäftszeiten. Jede Abweichung zwischen Profil und Website erzeugt widersprüchliche Signale.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Feld</th>
                <th className="border p-3 text-left">Regel</th>
                <th className="border p-3 text-left">Häufiger Fehler</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Firmenname</td><td className="border p-3">Exakt wie im Standortprofil</td><td className="border p-3">Zusätze wie „24h“ oder Stadtnamen</td></tr>
              <tr><td className="border p-3 font-semibold">Rufnummer</td><td className="border p-3">Identisch mit NAP-Nummer</td><td className="border p-3">Private Zweitnummer</td></tr>
              <tr><td className="border p-3 font-semibold">Adresse</td><td className="border p-3">Vollständig, inkl. PLZ</td><td className="border p-3">Nur Stadt angegeben</td></tr>
              <tr><td className="border p-3 font-semibold">Öffnungszeiten</td><td className="border p-3">Deckungsgleich mit Website</td><td className="border p-3">Sondertage fehlen</td></tr>
              <tr><td className="border p-3 font-semibold">Website</td><td className="border p-3">Kanonische Domain</td><td className="border p-3">Alte oder weitergeleitete URL</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="verknuepfung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Workflow className="w-7 h-7 text-primary" />
          Wie verknüpfe ich WhatsApp mit Website und Standortprofil?
        </h2>
        <AnswerBlock question="Wo sollte der WhatsApp-Kontakt auf der Webseite eingebunden werden?">
          An drei Stellen: im Kontaktbereich, auf jeder Leistungsseite als sekundäre Handlungsaufforderung neben Telefon und Formular, sowie auf der Standortseite. Der Link folgt dem Muster wa.me mit internationaler Rufnummer ohne Sonderzeichen und optionalem vorbefülltem Text. Im Standortprofil wird derselbe Anschluss über die Nachrichtenfunktion hinterlegt.
        </AnswerBlock>
        <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm mt-6"><code>{`<!-- Beispiel-Link mit vorbefüllter Nachricht -->
<a href="https://wa.me/491701234567?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20einem%20Termin">
  Per WhatsApp anfragen
</a>

<!-- Rufnummer: internationales Format ohne +, Leerzeichen oder Bindestriche -->`}</code></pre>
      </section>

      <section id="antwortzeit" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Warum entscheidet die Antwortzeit über den Erfolg?
        </h2>
        <AnswerBlock question="Welche Reaktionszeit erwarten Nutzer im Chat-Kanal?">
          Deutlich kürzere als per E-Mail: Innerhalb der Geschäftszeiten gilt eine Reaktion unter 15 Minuten als Standard. Wer diese Erwartung nicht erfüllt, verliert die Anfrage meist an den nächsten Anbieter in derselben Ergebnisliste. Außerhalb der Geschäftszeiten übernimmt eine Abwesenheitsnachricht mit konkreter Rückmeldezeit die Erwartungssteuerung.
        </AnswerBlock>
      </section>

      <section id="setup" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Setup
        </h2>
        <ol className="list-decimal pl-6 space-y-4 mt-2">
          <li><strong>Nummer festlegen:</strong> Die bestehende NAP-Rufnummer verwenden, keine Privatnummer.</li>
          <li><strong>Profil vervollständigen:</strong> Name, Kategorie, Adresse, Zeiten, Website.</li>
          <li><strong>Nachrichten vorbereiten:</strong> Begrüßung, Abwesenheit, Kurzantworten für Standardfragen.</li>
          <li><strong>Website einbinden:</strong> wa.me-Links in Kontakt-, Leistungs- und Standortseiten.</li>
          <li><strong>Standortprofil verbinden:</strong> Nachrichtenfunktion aktivieren und testen.</li>
          <li><strong>Rechtliches klären:</strong> Datenschutzhinweis ergänzen, Einwilligung für Werbung dokumentieren.</li>
          <li><strong>Zuständigkeit festlegen:</strong> Feste Person und Vertretung für die Beantwortung benennen.</li>
        </ol>
        <p className="mt-6">
          Prüfe die Datenkonsistenz anschließend gegen die <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline">NAP-Konsistenz-Regeln</Link> und ergänze den Kanal in deiner <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline">Local-SEO-Audit-Checkliste</Link>.
        </p>
      </section>

      <section id="recht" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Welche rechtlichen Pflichten sind zu beachten?
        </h2>
        <AnswerBlock question="Was ist beim Datenschutz im WhatsApp-Kanal zu beachten?">
          Vor dem ersten Kontakt muss transparent sein, welche Daten verarbeitet werden und zu welchem Zweck — üblich sind ein Abschnitt in der Datenschutzerklärung und ein Hinweis am Chat-Einstieg. Werbliche Nachrichten erfordern eine dokumentierte Einwilligung. Bei Gesundheits- oder Vertragsdaten gelten erhöhte Anforderungen; hier ist eine rechtliche Prüfung angeraten.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Datenschutzerklärung um den Messenger-Kanal ergänzen.</li>
          <li>Hinweis am Chat-Einstieg platzieren.</li>
          <li>Einwilligungen für werbliche Nachrichten dokumentieren.</li>
          <li>Löschfristen für Chatverläufe festlegen.</li>
        </ul>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich die Wirkung?
        </h2>
        <AnswerBlock question="Welche Kennzahlen zeigen den Nutzen des WhatsApp-Kanals?">
          Vier Werte genügen: Anzahl der Chat-Anfragen pro Monat, durchschnittliche erste Antwortzeit, Abschlussquote der Chats (Termin oder Auftrag) und Anteil der Anfragen je Einstiegspunkt — Website, Standortprofil oder Direktkontakt. Kombiniert mit der Bewertungsentwicklung zeigt sich, ob der Kanal wirklich Umsatz erzeugt.
        </AnswerBlock>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Typische Fehler
        </h2>
        <ul className="list-disc pl-6 space-y-3 mt-2">
          <li><strong>Abweichende Rufnummer:</strong> Zerstört die NAP-Konsistenz.</li>
          <li><strong>Kein Verantwortlicher:</strong> Anfragen bleiben tagelang liegen.</li>
          <li><strong>Fehlender Datenschutzhinweis:</strong> Vermeidbares rechtliches Risiko.</li>
          <li><strong>Werbenachrichten ohne Einwilligung:</strong> Führt zu Beschwerden und Sperren.</li>
          <li><strong>Kanal nur auf der Startseite:</strong> Verschenkt Anfragen auf Leistungsseiten.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Messenger-Kanal sauber aufsetzen</h3>
        <p className="mb-4">
          Wir richten Profil, Website-Einbindung und Standortverknüpfung ein, prüfen die NAP-Konsistenz und liefern Textbausteine für Begrüßung, Abwesenheit und Standardfragen.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Setup anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default WhatsappBusinessLocalSeo2026;
