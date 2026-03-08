import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoElektrotechnik = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-elektrotechnik", language)!;

  const tocItems = [
    { id: "kundensuche", title: "Wie Kunden Elektriker suchen" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "keywords", title: "Relevante Keywords" },
    { id: "notdienst", title: "Notdienst-Sichtbarkeit" },
    { id: "bewertungen", title: "Bewertungen für Elektriker" },
    { id: "website", title: "Website-Optimierung" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Elektriker werden überwiegend lokal und oft dringend gesucht",
    "Notdienst-Keywords bringen hochwertige Aufträge",
    "Smart Home und E-Mobilität sind wachsende Keyword-Bereiche",
    "Positive Bewertungen sind entscheidend für Vertrauensaufbau"
  ];

  const faqItems = [
    { question: "Lohnt sich SEO für kleine Elektro-Betriebe?", answer: "Absolut! Gerade kleine Betriebe profitieren stark von lokaler Sichtbarkeit. Im Vergleich zu klassischer Werbung ist SEO kosteneffizient und bringt kontinuierlich neue Anfragen." },
    { question: "Welche Kategorie bei Google Business wählen?", answer: "'Elektriker' oder 'Elektroinstallateur' als Hauptkategorie. Als Zusatzkategorien: 'Elektrikernotdienst', 'Smart-Home-Installateur', 'Solaranlageninstallateur' je nach Angebot." },
    { question: "Wie wichtig sind Wallbox-Keywords?", answer: "Sehr wichtig! E-Mobilität wächst stark und Wallbox-Installationen werden immer gefragter. Diese Keywords haben oft weniger Konkurrenz als Standard-Elektro-Keywords." },
    { question: "Sollte ich Preise auf der Website nennen?", answer: "Bei Standardleistungen können Sie Preisspannen oder 'ab'-Preise nennen. Für den Notdienst ist Preistransparenz wichtig (Anfahrt, Stundensatz)." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Elektriker bei der Arbeit mit Google-Suche"
        caption="Lokale Sichtbarkeit bringt Elektrikern kontinuierlich neue Aufträge"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="kundensuche">
        <h2>Wie Kunden Elektriker suchen</h2>
        <AutoLexikonText>
          <p>
            Elektriker werden in zwei Szenarien gesucht: geplant oder im Notfall. 
            Beide Suchtypen erfordern unterschiedliche SEO-Strategien.
          </p>
          <h3>Geplante Suchen</h3>
          <ul>
            <li>"Elektriker für Renovierung"</li>
            <li>"Elektroinstallation Neubau"</li>
            <li>"Wallbox Installation"</li>
            <li>"Smart Home Elektriker"</li>
          </ul>
          <h3>Notfall-Suchen</h3>
          <ul>
            <li>"Elektriker Notdienst"</li>
            <li>"Stromausfall Hilfe"</li>
            <li>"Elektriker sofort"</li>
            <li>"Sicherung rausgeflogen"</li>
          </ul>
          <h3>Das Suchverhalten verstehen</h3>
          <p>
            Bei geplanten Projekten vergleichen Kunden mehrere Anbieter. Bei Notfällen 
            wird der erstbeste seriöse Anbieter kontaktiert. Für beide Szenarien 
            müssen Sie sichtbar sein.
          </p>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Google Business für Elektriker optimieren</h2>
        <AutoLexikonText>
          <h3>Die richtigen Kategorien</h3>
          <ul>
            <li><strong>Hauptkategorie:</strong> "Elektriker" oder "Elektroinstallateur"</li>
            <li><strong>Zusatzkategorien:</strong> Elektrikernotdienst, Solaranlageninstallateur, Smart-Home-Installateur</li>
          </ul>
          <h3>Services eintragen</h3>
          <ul>
            <li>Elektroinstallation</li>
            <li>Reparaturen und Störungsbeseitigung</li>
            <li>Beleuchtungstechnik</li>
            <li>Smart Home Installation</li>
            <li>Wallbox / Ladestation Installation</li>
            <li>Photovoltaik</li>
            <li>E-Check / Elektroprüfung</li>
            <li>Notdienst 24/7</li>
          </ul>
          <h3>Bilder, die überzeugen</h3>
          <ul>
            <li>Saubere, professionelle Arbeit (vorher/nachher)</li>
            <li>Firmenfahrzeug mit Logo</li>
            <li>Team in Arbeitskleidung</li>
            <li>Moderne Ausstattung und Werkzeug</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="keywords">
        <h2>Relevante Keywords für Elektriker</h2>
        <AutoLexikonText>
          <h3>Standard-Elektro-Keywords</h3>
          <ul>
            <li>Elektriker [Stadt], Elektrotechniker [Region]</li>
            <li>Elektroinstallation, Elektrische Anlage</li>
            <li>Steckdosen installieren, Lichtschalter austauschen</li>
            <li>Sicherungskasten, Zählerschrank</li>
          </ul>
          <h3>Zukunfts-Keywords (wachsend)</h3>
          <ul>
            <li><strong>E-Mobilität:</strong> Wallbox Installation, Ladestation Zuhause, E-Auto Ladestation</li>
            <li><strong>Smart Home:</strong> Smart Home Elektriker, intelligente Haussteuerung, KNX Installation</li>
            <li><strong>Erneuerbare Energie:</strong> Photovoltaik Elektriker, Solaranlage Installation, Batteriespeicher</li>
          </ul>
          <h3>Notdienst-Keywords</h3>
          <ul>
            <li>Elektriker Notdienst [Stadt]</li>
            <li>Stromausfall Hilfe, Kurzschluss Reparatur</li>
            <li>Elektriker 24 Stunden, Elektriker Sonntag</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="notdienst">
        <h2>Notdienst-Sichtbarkeit maximieren</h2>
        <AutoLexikonText>
          <p>
            Notdienst-Aufträge sind oft lukrativ und können zu Folgeaufträgen führen. 
            Optimieren Sie gezielt für Notfall-Suchen.
          </p>
          <h3>Google Business für Notdienst</h3>
          <ul>
            <li>Notdienst-Zeiten bei "Besondere Öffnungszeiten" eintragen</li>
            <li>"Elektriker Notdienst" als Service eintragen</li>
            <li>Notfall-Nummer prominent anzeigen</li>
            <li>Reaktionszeit angeben ("In 30 Minuten vor Ort")</li>
          </ul>
          <h3>Notdienst-Landingpage</h3>
          <ul>
            <li>Eigene Seite für Elektro-Notdienst erstellen</li>
            <li>Click-to-Call Button ganz oben</li>
            <li>Schnelle Ladezeit (kritisch bei Notfällen)</li>
            <li>Preistransparenz ("Anfahrt ab X €")</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="bewertungen">
        <h2>Bewertungen für Elektriker</h2>
        <AutoLexikonText>
          <p>
            Vertrauen ist bei Elektrikern besonders wichtig – schließlich arbeiten 
            Sie in den Häusern Ihrer Kunden. Bewertungen bauen dieses Vertrauen auf.
          </p>
          <h3>Wann um Bewertungen bitten</h3>
          <ul>
            <li>Nach erfolgreich abgeschlossenem Projekt</li>
            <li>Nach schneller Notfall-Hilfe (dankbare Kunden)</li>
            <li>Bei Übergabe der Arbeit</li>
          </ul>
          <h3>Was in Bewertungen wichtig ist</h3>
          <ul>
            <li>Pünktlichkeit und Zuverlässigkeit</li>
            <li>Sauberkeit bei der Arbeit</li>
            <li>Faire Preise und Transparenz</li>
            <li>Fachkompetenz</li>
            <li>Freundlichkeit</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="website">
        <h2>Website-Optimierung für Elektriker</h2>
        <AutoLexikonText>
          <h3>Wichtige Seiten</h3>
          <ul>
            <li><strong>Leistungsseiten:</strong> Für jeden Service eine eigene Seite</li>
            <li><strong>Referenzen:</strong> Projekte mit Bildern zeigen</li>
            <li><strong>Notdienst:</strong> Eigene Landingpage für Notfälle</li>
            <li><strong>Über uns:</strong> Team, Qualifikationen, Meisterbrief</li>
            <li><strong>Einzugsgebiet:</strong> Welche Orte Sie bedienen</li>
          </ul>
          <h3>Technische Optimierung</h3>
          <ul>
            <li>Mobile-First (viele Notfall-Suchen vom Smartphone)</li>
            <li>Click-to-Call Telefonnummer</li>
            <li>Schnelle Ladezeiten</li>
            <li>LocalBusiness Schema-Markup</li>
          </ul>
          <h3>Content-Ideen</h3>
          <ul>
            <li>Blog: "Wann muss ein Elektriker gerufen werden?"</li>
            <li>FAQ: Häufige Elektro-Fragen</li>
            <li>Guides: "Wallbox Installation – was Sie wissen müssen"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <IndustryLandingCTA industry="handwerker" />

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Lohnt sich SEO für kleine Elektro-Betriebe?</AccordionTrigger>
            <AccordionContent>
              Absolut! Gerade kleine Betriebe profitieren stark von lokaler Sichtbarkeit. 
              Im Vergleich zu klassischer Werbung ist SEO kosteneffizient und bringt 
              kontinuierlich neue Anfragen. Ein gut optimiertes Google Business Profil 
              kostet nichts und bringt Kunden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Welche Kategorie bei Google Business wählen?</AccordionTrigger>
            <AccordionContent>
              "Elektriker" oder "Elektroinstallateur" als Hauptkategorie. Als 
              Zusatzkategorien: "Elektrikernotdienst" (wenn Sie Notdienst anbieten), 
              "Smart-Home-Installateur", "Solaranlageninstallateur" je nach Angebot.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie wichtig sind Wallbox-Keywords?</AccordionTrigger>
            <AccordionContent>
              Sehr wichtig! E-Mobilität wächst stark und Wallbox-Installationen werden 
              immer gefragter. Diese Keywords haben oft weniger Konkurrenz als 
              Standard-Elektro-Keywords. Erstellen Sie eine eigene Seite für 
              Wallbox-Installation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Sollte ich Preise auf der Website nennen?</AccordionTrigger>
            <AccordionContent>
              Bei Standardleistungen können Sie Preisspannen oder "ab"-Preise nennen. 
              Für den Notdienst ist Preistransparenz wichtig (Anfahrt, Stundensatz). 
              Bei komplexen Projekten verweisen Sie auf individuelle Angebote nach 
              Vor-Ort-Besichtigung.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-elektrotechnik" />

      <SourcesSection sources={[
        { title: "ZVEH: Elektrohandwerk in Deutschland", url: "https://www.zveh.de/" },
        { title: "Google: Local Services für Handwerker", url: "https://ads.google.com/local-services-ads/" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoElektrotechnik;
