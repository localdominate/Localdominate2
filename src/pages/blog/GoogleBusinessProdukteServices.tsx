import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const GoogleBusinessProdukteServices = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-business-produkte-services", language)!;

  const tocItems = [
    { id: "ueberblick", title: "Produkte & Services im Überblick" },
    { id: "produkte-anlegen", title: "Produkte richtig anlegen" },
    { id: "services-optimieren", title: "Services optimal darstellen" },
    { id: "kategorien-nutzen", title: "Produkt-Kategorien nutzen" },
    { id: "preise-anzeigen", title: "Preise strategisch anzeigen" },
    { id: "branchen-beispiele", title: "Beispiele nach Branche" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Produkte und Services erhöhen die Klickrate auf Ihr Profil um bis zu 35%",
    "Detaillierte Beschreibungen verbessern Ihr Ranking für spezifische Keywords",
    "Hochwertige Produktbilder steigern das Engagement deutlich",
    "Regelmäßige Aktualisierung signalisiert Google aktive Pflege"
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="ueberblick">
        <h2>Produkte & Services im Überblick</h2>
        <AutoLexikonText>
          <p>
            Google Business bietet zwei wichtige Funktionen, um Ihr Angebot zu präsentieren: 
            Produkte und Services. Beide erscheinen prominent in Ihrem Profil und können 
            den Unterschied machen, ob Kunden Sie kontaktieren oder weitersuchen.
          </p>
          <h3>Unterschied zwischen Produkten und Services</h3>
          <ul>
            <li><strong>Produkte:</strong> Physische oder digitale Artikel zum Verkauf (mit Preis und Bild)</li>
            <li><strong>Services:</strong> Dienstleistungen, die Sie anbieten (können kategorisiert werden)</li>
          </ul>
          <h3>Warum sind sie wichtig?</h3>
          <ul>
            <li>Mehr Platz in den Suchergebnissen</li>
            <li>Zusätzliche Keywords im Profil</li>
            <li>Schneller Überblick für potenzielle Kunden</li>
            <li>Höhere Klick- und Kontaktrate</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="produkte-anlegen">
        <h2>Produkte richtig anlegen</h2>
        <AutoLexikonText>
          <p>
            Die Produkt-Funktion eignet sich für Einzelhändler, Gastronomen und alle, 
            die konkrete Artikel verkaufen.
          </p>
          <h3>So legen Sie Produkte an</h3>
          <ol>
            <li>Öffnen Sie Ihr Google Business Profil</li>
            <li>Klicken Sie auf "Produkte bearbeiten"</li>
            <li>Wählen Sie "Produkt hinzufügen"</li>
            <li>Fügen Sie Foto, Name, Kategorie, Preis und Beschreibung hinzu</li>
            <li>Optional: Call-to-Action Button hinzufügen</li>
          </ol>
          <h3>Best Practices für Produkteinträge</h3>
          <ul>
            <li><strong>Hochwertige Bilder:</strong> Mindestens 400x400 Pixel, gute Belichtung</li>
            <li><strong>Aussagekräftige Namen:</strong> Keywords einbauen, aber natürlich bleiben</li>
            <li><strong>Detaillierte Beschreibung:</strong> Nutzen, Besonderheiten, Größen/Varianten</li>
            <li><strong>Korrekte Preise:</strong> Regelmäßig aktualisieren</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="services-optimieren">
        <h2>Services optimal darstellen</h2>
        <AutoLexikonText>
          <p>
            Die Service-Funktion ist ideal für Dienstleister, Handwerker, Berater und 
            alle Unternehmen, die keine physischen Produkte verkaufen.
          </p>
          <h3>Services strukturieren</h3>
          <ul>
            <li><strong>Hauptservices:</strong> Ihre wichtigsten Dienstleistungen</li>
            <li><strong>Unterservices:</strong> Spezialisierungen und Details</li>
            <li><strong>Preisrahmen:</strong> "Ab X €" oder Preisspannen</li>
          </ul>
          <h3>Tipps für Service-Beschreibungen</h3>
          <ul>
            <li>Relevante Keywords natürlich einbauen</li>
            <li>Nutzen für den Kunden hervorheben</li>
            <li>Besonderheiten und USPs erwähnen</li>
            <li>Dauer oder Umfang angeben wenn sinnvoll</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="kategorien-nutzen">
        <h2>Produkt-Kategorien strategisch nutzen</h2>
        <AutoLexikonText>
          <p>
            Kategorien helfen Kunden, schnell zu finden, was sie suchen. Sie verbessern 
            auch die Struktur Ihres Profils.
          </p>
          <h3>Kategorien erstellen</h3>
          <ul>
            <li>Logische Gruppierung nach Produkttyp oder Verwendungszweck</li>
            <li>Nicht zu viele Kategorien (5-10 sind optimal)</li>
            <li>Aussagekräftige Kategorie-Namen wählen</li>
          </ul>
          <h3>Beispiel: Restaurant</h3>
          <ul>
            <li>Vorspeisen</li>
            <li>Hauptgerichte</li>
            <li>Desserts</li>
            <li>Getränke</li>
            <li>Mittagsmenüs</li>
          </ul>
          <h3>Beispiel: Handwerker</h3>
          <ul>
            <li>Reparaturen</li>
            <li>Neuinstallationen</li>
            <li>Wartung</li>
            <li>Notdienst</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="preise-anzeigen">
        <h2>Preise strategisch anzeigen</h2>
        <AutoLexikonText>
          <p>
            Preistransparenz kann ein Wettbewerbsvorteil sein – aber nicht immer macht 
            es Sinn, alle Preise zu zeigen.
          </p>
          <h3>Wann Preise zeigen?</h3>
          <ul>
            <li><strong>Standardprodukte:</strong> Feste Preise zeigen schafft Vertrauen</li>
            <li><strong>Wettbewerbsvorteil:</strong> Wenn Sie günstiger sind als die Konkurrenz</li>
            <li><strong>Einfache Vergleichbarkeit:</strong> Bei Standard-Dienstleistungen</li>
          </ul>
          <h3>Wann Preise weglassen?</h3>
          <ul>
            <li><strong>Individuelle Angebote:</strong> Bei projektbasierten Preisen</li>
            <li><strong>Premium-Positionierung:</strong> Wenn Qualität wichtiger als Preis ist</li>
            <li><strong>Komplexe Leistungen:</strong> Bei Beratungsbedarf vor Preisnennung</li>
          </ul>
          <h3>Alternative: Preisspannen</h3>
          <p>
            "Ab X €" oder "X € - Y €" gibt Orientierung ohne Sie festzunageln.
          </p>
        </AutoLexikonText>
      </section>

      <section id="branchen-beispiele">
        <h2>Beispiele nach Branche</h2>
        <AutoLexikonText>
          <h3>Restaurant/Café</h3>
          <ul>
            <li>Beliebte Gerichte mit appetitanregenden Fotos</li>
            <li>Mittagsmenü als Highlight-Produkt</li>
            <li>Saisonale Specials regelmäßig aktualisieren</li>
          </ul>
          <h3>Friseur/Beauty</h3>
          <ul>
            <li>Services nach Kategorie: Damen, Herren, Kinder</li>
            <li>Behandlungen mit Zeitangaben</li>
            <li>Produktverkauf als Produkte anlegen</li>
          </ul>
          <h3>Handwerker</h3>
          <ul>
            <li>Services nach Gewerk kategorisieren</li>
            <li>Notdienst prominent darstellen</li>
            <li>Pauschalangebote für Standardleistungen</li>
          </ul>
          <h3>Einzelhandel</h3>
          <ul>
            <li>Bestseller und Highlights zeigen</li>
            <li>Neue Produkte regelmäßig hinzufügen</li>
            <li>Saisonale Kollektionen als Kategorien</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie viele Produkte sollte ich anlegen?</AccordionTrigger>
            <AccordionContent>
              Es gibt kein festes Limit, aber Qualität vor Quantität. Zeigen Sie Ihre 
              wichtigsten 10-20 Produkte oder Bestseller. Bei Restaurants können es 
              mehr sein (Speisekarte). Wichtig: Alle Einträge aktuell halten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Werden Produkte in der Google-Suche angezeigt?</AccordionTrigger>
            <AccordionContent>
              Ja, Produkte können in lokalen Suchergebnissen und in Google Shopping 
              erscheinen. Sie verbessern auch die Sichtbarkeit Ihres Business-Profils 
              bei relevanten Produktsuchen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Kann ich mit einem Produkt direkt verkaufen?</AccordionTrigger>
            <AccordionContent>
              Über Google Business Produkte können Sie nicht direkt verkaufen. Sie 
              können aber einen Call-to-Action Button hinzufügen, der zu Ihrem 
              Online-Shop oder zur Kontaktseite führt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie oft sollte ich Produkte aktualisieren?</AccordionTrigger>
            <AccordionContent>
              Aktualisieren Sie Produkte bei Preisänderungen sofort. Fügen Sie neue 
              Produkte zeitnah hinzu und entfernen Sie nicht mehr verfügbare. 
              Monatliche Überprüfung ist empfehlenswert.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="google-business-produkte-services" />

      <SourcesSection sources={[
        { title: "Google: Produkte hinzufügen", url: "https://support.google.com/business/answer/9455406" },
        { title: "Google: Services verwalten", url: "https://support.google.com/business/answer/9125656" }
      ]} />
    </ArticleLayout>
  );
};

export default GoogleBusinessProdukteServices;
