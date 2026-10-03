import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const GoogleBusinessKategorienGuide = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-business-kategorien-guide", language)!;

  const tocItems = [
    { id: "bedeutung", title: "Warum Kategorien so wichtig sind" },
    { id: "hauptkategorie", title: "Die richtige Hauptkategorie wählen" },
    { id: "zusatzkategorien", title: "Zusatzkategorien strategisch nutzen" },
    { id: "branchen-empfehlungen", title: "Empfehlungen nach Branche" },
    { id: "haeufige-fehler", title: "Häufige Fehler vermeiden" },
    { id: "kategorie-aendern", title: "Kategorie ändern: So gehts" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Die Hauptkategorie beeinflusst Ihr Ranking in Google Maps am stärksten",
    "Bis zu 9 Zusatzkategorien erweitern Ihre Sichtbarkeit",
    "Falsche Kategorien können zu Ranking-Verlusten führen",
    "Regelmäßig prüfen, ob neue passende Kategorien verfügbar sind"
  ];

  const faqItems = [
    { question: "Wie viele Kategorien kann ich maximal wählen?", answer: "Sie können eine Hauptkategorie und bis zu 9 Zusatzkategorien wählen. Nutzen Sie alle verfügbaren Slots, aber nur mit wirklich relevanten Kategorien für Ihr Geschäft." },
    { question: "Kann ich eigene Kategorien erstellen?", answer: "Nein, Sie können nur aus der vorgegebenen Liste von Google wählen. Die Liste wird regelmäßig aktualisiert. Wenn Ihre gewünschte Kategorie nicht existiert, wählen Sie die nächstähnliche." },
    { question: "Sehen Kunden meine Zusatzkategorien?", answer: "Nein, nur die Hauptkategorie ist öffentlich sichtbar. Zusatzkategorien arbeiten im Hintergrund und beeinflussen, für welche Suchen Sie erscheinen, ohne dass Kunden sie direkt sehen." },
    { question: "Wie oft sollte ich meine Kategorien überprüfen?", answer: "Mindestens alle 3-6 Monate. Google fügt regelmäßig neue Kategorien hinzu. Außerdem sollten Sie prüfen, ob Ihr Angebot noch zu den gewählten Kategorien passt oder ob Änderungen nötig sind." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="bedeutung">
        <h2>Warum Kategorien so wichtig sind</h2>
        <AutoLexikonText>
          <p>
            Die Kategorie Ihres Google Business Profils ist einer der wichtigsten 
            Ranking-Faktoren für lokale Suchanfragen. Sie teilt Google mit, für welche 
            Suchanfragen Ihr Unternehmen relevant ist.
          </p>
          <h3>Was Kategorien beeinflussen</h3>
          <ul>
            <li><strong>Suchanfragen:</strong> Für welche Keywords Sie erscheinen</li>
            <li><strong>Kartensuche:</strong> In welchen Kategorien Sie in Maps gefunden werden</li>
            <li><strong>Profilfunktionen:</strong> Welche Attribute und Features verfügbar sind</li>
            <li><strong>Konkurrenz:</strong> Mit wem Sie um Rankings konkurrieren</li>
          </ul>
          <p>
            Ein Restaurant mit der falschen Kategorie "Café" wird für "Restaurant in der Nähe" 
            schlechter ranken – selbst wenn alles andere stimmt.
          </p>
        </AutoLexikonText>
      </section>

      <section id="hauptkategorie">
        <h2>Die richtige Hauptkategorie wählen</h2>
        <AutoLexikonText>
          <p>
            Die Hauptkategorie hat den größten Einfluss auf Ihr Ranking. Sie erscheint 
            öffentlich in Ihrem Profil und definiert Ihr Kerngeschäft.
          </p>
          <h3>So finden Sie die beste Hauptkategorie</h3>
          <ul>
            <li><strong>Konkurrenz analysieren:</strong> Welche Kategorie nutzen Top-Wettbewerber?</li>
            <li><strong>Spezifisch vor allgemein:</strong> "Italienisches Restaurant" statt nur "Restaurant"</li>
            <li><strong>Kerngeschäft fokussieren:</strong> Was beschreibt Ihre Haupttätigkeit am besten?</li>
            <li><strong>Suchvolumen beachten:</strong> Wonach suchen Kunden tatsächlich?</li>
          </ul>
          <h3>Beispiele für gute Hauptkategorien</h3>
          <ul>
            <li>Friseur → "Friseursalon" oder "Herrenfriseur" (falls spezialisiert)</li>
            <li>Zahnarzt → "Zahnarzt" (nicht "Arzt")</li>
            <li>Autowerkstatt → "Autowerkstatt" oder "Karosseriewerkstatt"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="zusatzkategorien">
        <h2>Zusatzkategorien strategisch nutzen</h2>
        <AutoLexikonText>
          <p>
            Sie können bis zu 9 Zusatzkategorien hinzufügen. Diese erscheinen nicht 
            öffentlich, beeinflussen aber, für welche Suchen Sie gefunden werden.
          </p>
          <h3>Strategien für Zusatzkategorien</h3>
          <ul>
            <li><strong>Alle Leistungen abdecken:</strong> Jede relevante Dienstleistung als Kategorie</li>
            <li><strong>Keine irrelevanten Kategorien:</strong> Nur was Sie wirklich anbieten</li>
            <li><strong>Saisonale Angebote:</strong> Auch temporäre Dienste können Kategorien sein</li>
          </ul>
          <h3>Beispiel: Restaurant mit Zusatzkategorien</h3>
          <ul>
            <li>Hauptkategorie: Italienisches Restaurant</li>
            <li>Zusatzkategorien: Pizzeria, Pasta-Restaurant, Catering-Service, Restaurant mit Terrasse, Lieferservice</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="branchen-empfehlungen">
        <h2>Empfehlungen nach Branche</h2>
        <AutoLexikonText>
          <h3>Gastronomie</h3>
          <ul>
            <li>Hauptkategorie so spezifisch wie möglich (Küche, Stil)</li>
            <li>Zusatzkategorien: Lieferservice, Catering, Bar, Biergarten</li>
          </ul>
          <h3>Handwerk</h3>
          <ul>
            <li>Hauptkategorie nach Gewerk: "Elektriker", "Klempner", "Maler"</li>
            <li>Zusatzkategorien: Spezialisierungen, Notdienst, Wartungsservice</li>
          </ul>
          <h3>Gesundheit</h3>
          <ul>
            <li>Fachrichtung als Hauptkategorie: "Orthopäde", "Zahnarzt"</li>
            <li>Zusatzkategorien: Spezialisierungen, Therapien</li>
          </ul>
          <h3>Einzelhandel</h3>
          <ul>
            <li>Produktfokus als Hauptkategorie: "Möbelgeschäft", "Blumenladen"</li>
            <li>Zusatzkategorien: Reparatur-Service, Lieferung, Beratung</li>
          </ul>
          <h3>Dienstleistungen</h3>
          <ul>
            <li>Kerndienstleistung als Hauptkategorie</li>
            <li>Zusatzkategorien: Beratung, Schulung, Spezialgebiete</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="haeufige-fehler">
        <h2>Häufige Fehler vermeiden</h2>
        <AutoLexikonText>
          <h3>Typische Kategorie-Fehler</h3>
          <ul>
            <li><strong>Zu allgemeine Kategorie:</strong> "Unternehmen" statt spezifischer Bezeichnung</li>
            <li><strong>Falsche Kategorie:</strong> "Café" für ein Vollrestaurant</li>
            <li><strong>Keyword-Stuffing:</strong> Kategorien wählen nur wegen Keywords</li>
            <li><strong>Zu viele irrelevante Kategorien:</strong> Verwässert die Relevanz</li>
            <li><strong>Veraltete Kategorien:</strong> Google aktualisiert regelmäßig die Liste</li>
          </ul>
          <h3>Was Sie nicht tun sollten</h3>
          <p>
            Wählen Sie keine Kategorien für Dienste, die Sie nicht wirklich anbieten. 
            Google kann Ihr Profil suspendieren, wenn Nutzer falsche Angaben melden.
          </p>
        </AutoLexikonText>
      </section>

      <section id="kategorie-aendern">
        <h2>Kategorie ändern: So gehts</h2>
        <AutoLexikonText>
          <h3>Schritt-für-Schritt Anleitung</h3>
          <ol>
            <li>Melden Sie sich bei Google Business an</li>
            <li>Wählen Sie Ihr Unternehmensprofil</li>
            <li>Klicken Sie auf "Profil bearbeiten"</li>
            <li>Wählen Sie "Unternehmenskategorie"</li>
            <li>Ändern Sie Haupt- oder Zusatzkategorien</li>
            <li>Speichern Sie die Änderungen</li>
          </ol>
          <h3>Auswirkungen einer Kategorie-Änderung</h3>
          <p>
            Nach einer Änderung kann es einige Tage dauern, bis sich Ihr Ranking anpasst. 
            In manchen Fällen verbessert sich die Sichtbarkeit sofort, in anderen kann es 
            zu temporären Schwankungen kommen.
          </p>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie viele Kategorien kann ich maximal wählen?</AccordionTrigger>
            <AccordionContent>
              Sie können eine Hauptkategorie und bis zu 9 Zusatzkategorien wählen. 
              Nutzen Sie alle verfügbaren Slots, aber nur mit wirklich relevanten 
              Kategorien für Ihr Geschäft.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Kann ich eigene Kategorien erstellen?</AccordionTrigger>
            <AccordionContent>
              Nein, Sie können nur aus der vorgegebenen Liste von Google wählen. 
              Die Liste wird regelmäßig aktualisiert. Wenn Ihre gewünschte Kategorie 
              nicht existiert, wählen Sie die nächstähnliche.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sehen Kunden meine Zusatzkategorien?</AccordionTrigger>
            <AccordionContent>
              Nein, nur die Hauptkategorie ist öffentlich sichtbar. Zusatzkategorien 
              arbeiten "im Hintergrund" und beeinflussen, für welche Suchen Sie 
              erscheinen, ohne dass Kunden sie direkt sehen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie oft sollte ich meine Kategorien überprüfen?</AccordionTrigger>
            <AccordionContent>
              Mindestens alle 3-6 Monate. Google fügt regelmäßig neue Kategorien hinzu. 
              Außerdem sollten Sie prüfen, ob Ihr Angebot noch zu den gewählten 
              Kategorien passt oder ob Änderungen nötig sind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="google-business-kategorien-guide" />

      <SourcesSection sources={[
        { title: "Google: Unternehmenskategorie auswählen", url: "https://support.google.com/business/answer/3038177" },
        { title: "Google: Alle Unternehmenskategorien", url: "https://support.google.com/business/answer/9049411" }
      ]} />
    </ArticleLayout>
  );
};

export default GoogleBusinessKategorienGuide;
