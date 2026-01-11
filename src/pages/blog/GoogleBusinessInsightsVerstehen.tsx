import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const GoogleBusinessInsightsVerstehen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-business-insights-verstehen", language)!;

  const tocItems = [
    { id: "ueberblick", title: "Insights-Übersicht" },
    { id: "suchanfragen", title: "Suchanfragen verstehen" },
    { id: "kundenaktionen", title: "Kundenaktionen analysieren" },
    { id: "fotos-performance", title: "Foto-Performance messen" },
    { id: "zeitverlaeufe", title: "Zeitverläufe interpretieren" },
    { id: "optimierung", title: "Insights für Optimierung nutzen" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Insights zeigen, wie Kunden Ihr Unternehmen finden und interagieren",
    "Suchanfragen-Daten helfen bei der Keyword-Optimierung",
    "Aktions-Metriken zeigen die Effektivität Ihres Profils",
    "Regelmäßige Analyse ermöglicht datengesteuerte Verbesserungen"
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Google Business Insights Dashboard"
        caption="Insights liefern wertvolle Daten über Ihre lokale Performance"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="ueberblick">
        <h2>Google Business Insights: Der Überblick</h2>
        <AutoLexikonText>
          <p>
            Google Business Profile bietet umfangreiche Statistiken darüber, wie Kunden 
            Ihr Unternehmen finden und mit Ihrem Profil interagieren. Diese Insights 
            sind goldwert für Ihre lokale SEO-Strategie.
          </p>
          <h3>Wo finden Sie die Insights?</h3>
          <ul>
            <li>Melden Sie sich bei Google Business Profile an</li>
            <li>Wählen Sie Ihr Unternehmen aus</li>
            <li>Klicken Sie auf "Performance" oder "Insights"</li>
          </ul>
          <h3>Verfügbare Metriken</h3>
          <ul>
            <li><strong>Suchanfragen:</strong> Welche Begriffe zu Ihrem Profil führten</li>
            <li><strong>Aufrufe:</strong> Wie oft Ihr Profil angesehen wurde</li>
            <li><strong>Aktionen:</strong> Website-Klicks, Anrufe, Routenanfragen</li>
            <li><strong>Fotos:</strong> Performance Ihrer hochgeladenen Bilder</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="suchanfragen">
        <h2>Suchanfragen verstehen</h2>
        <AutoLexikonText>
          <p>
            Die Suchanfragen-Insights zeigen, welche Begriffe Kunden verwendet haben, 
            um Ihr Unternehmen zu finden. Dies ist wertvoll für Ihre Keyword-Strategie.
          </p>
          <h3>Was die Daten zeigen</h3>
          <ul>
            <li><strong>Direkte Suchen:</strong> Kunden suchten nach Ihrem Firmennamen</li>
            <li><strong>Discovery-Suchen:</strong> Kunden suchten nach Kategorie oder Dienstleistung</li>
            <li><strong>Marken-Suchen:</strong> Suchen nach einer Marke, die Sie verkaufen</li>
          </ul>
          <h3>Wie Sie die Daten nutzen</h3>
          <ul>
            <li>Identifizieren Sie Top-Keywords, für die Sie bereits ranken</li>
            <li>Finden Sie neue Keywords, an die Sie nicht gedacht haben</li>
            <li>Verstehen Sie saisonale Trends in Suchanfragen</li>
            <li>Passen Sie Ihre Beschreibung an häufige Suchbegriffe an</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="kundenaktionen">
        <h2>Kundenaktionen analysieren</h2>
        <AutoLexikonText>
          <p>
            Aktions-Metriken zeigen, was Nutzer nach dem Aufrufen Ihres Profils tun. 
            Sie sind der beste Indikator für die Effektivität Ihres Profils.
          </p>
          <h3>Die wichtigsten Aktionen</h3>
          <ul>
            <li><strong>Website-Besuche:</strong> Klicks auf Ihren Website-Link</li>
            <li><strong>Anrufe:</strong> Klicks auf die Telefonnummer</li>
            <li><strong>Routenanfragen:</strong> Klicks auf "Route planen"</li>
            <li><strong>Nachrichten:</strong> Gesendete Direktnachrichten (wenn aktiviert)</li>
            <li><strong>Buchungen:</strong> Terminbuchungen (wenn aktiviert)</li>
          </ul>
          <h3>Benchmarks verstehen</h3>
          <ul>
            <li>Hohe Profilaufrufe, aber wenig Aktionen? → Profil optimieren</li>
            <li>Viele Routenanfragen? → Gute lokale Relevanz</li>
            <li>Wenig Anrufe? → Telefonnummer prüfen, Call-to-Action verbessern</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="fotos-performance">
        <h2>Foto-Performance messen</h2>
        <AutoLexikonText>
          <p>
            Google zeigt, wie Ihre Fotos im Vergleich zu ähnlichen Unternehmen 
            abschneiden. Dies hilft bei der Bild-Strategie.
          </p>
          <h3>Foto-Metriken</h3>
          <ul>
            <li><strong>Foto-Aufrufe:</strong> Wie oft Ihre Bilder angesehen wurden</li>
            <li><strong>Vergleich mit Konkurrenz:</strong> Performance vs. ähnliche Unternehmen</li>
          </ul>
          <h3>Optimierungsansätze</h3>
          <ul>
            <li>Weniger Aufrufe als Konkurrenz? → Mehr/bessere Fotos hochladen</li>
            <li>Bestimmte Fotos beliebter? → Mehr ähnliche Bilder hinzufügen</li>
            <li>Alte Fotos? → Regelmäßig aktualisieren</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="zeitverlaeufe">
        <h2>Zeitverläufe interpretieren</h2>
        <AutoLexikonText>
          <p>
            Insights zeigen Daten über verschiedene Zeiträume. Die richtige 
            Interpretation hilft, Trends zu erkennen.
          </p>
          <h3>Zeiträume vergleichen</h3>
          <ul>
            <li><strong>Woche über Woche:</strong> Kurzfristige Schwankungen</li>
            <li><strong>Monat über Monat:</strong> Mittelfristige Trends</li>
            <li><strong>Jahr über Jahr:</strong> Saisonale Muster</li>
          </ul>
          <h3>Typische Muster erkennen</h3>
          <ul>
            <li>Saisonale Schwankungen (Weihnachten, Sommer, etc.)</li>
            <li>Wochentags-Muster (mehr Suchen am Wochenende?)</li>
            <li>Ereignis-bedingte Spitzen</li>
            <li>Langfristige Wachstums- oder Rückgangstrends</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="optimierung">
        <h2>Insights für Optimierung nutzen</h2>
        <AutoLexikonText>
          <h3>Konkrete Handlungen basierend auf Insights</h3>
          <ul>
            <li>
              <strong>Niedrige Discovery-Suchen:</strong> Kategorien und Beschreibung mit 
              mehr Keywords optimieren
            </li>
            <li>
              <strong>Wenig Website-Klicks:</strong> Website-Link prüfen, attraktivere 
              Beschreibung, Posts mit Links
            </li>
            <li>
              <strong>Wenig Anrufe:</strong> Telefonnummer prominent, "Jetzt anrufen"-Posts
            </li>
            <li>
              <strong>Hohe Routenanfragen:</strong> Parkplatz-Info hinzufügen, ÖPNV-Anbindung
            </li>
            <li>
              <strong>Foto-Performance unter Durchschnitt:</strong> Mehr und bessere 
              Bilder hochladen
            </li>
          </ul>
          <h3>Regelmäßige Analyse etablieren</h3>
          <ul>
            <li>Monatliche Überprüfung der Kernindikatoren</li>
            <li>Quartalsweise Tiefenanalyse</li>
            <li>Jährlicher Vergleich für Wachstums-Tracking</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie oft werden Insights aktualisiert?</AccordionTrigger>
            <AccordionContent>
              Die Daten werden in der Regel alle 24-48 Stunden aktualisiert. Bei 
              einigen Metriken kann es bis zu 72 Stunden dauern. Für die genaueste 
              Analyse schauen Sie auf Wochenwerte statt Tageswerte.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Warum sehe ich weniger Daten als früher?</AccordionTrigger>
            <AccordionContent>
              Google hat die Insights mehrfach überarbeitet. Einige frühere Metriken 
              wurden entfernt oder zusammengefasst. Die aktuellen Daten fokussieren 
              auf die relevantesten Geschäftsmetriken.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Kann ich Insights exportieren?</AccordionTrigger>
            <AccordionContent>
              Ja, in Google Business Profile können Sie Performance-Daten als 
              CSV-Datei exportieren. Klicken Sie auf das Download-Symbol im 
              Performance-Bereich. Für erweiterte Analysen können Sie die Daten 
              in Excel oder Google Sheets auswerten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Was sind gute Benchmark-Werte?</AccordionTrigger>
            <AccordionContent>
              Es gibt keine universellen Benchmarks – die Werte hängen stark von 
              Branche, Standort und Unternehmensgröße ab. Vergleichen Sie Ihre 
              Entwicklung über Zeit und nutzen Sie den Konkurrenzvergleich bei 
              Foto-Metriken als Orientierung.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="google-business-insights-verstehen" />

      <SourcesSection sources={[
        { title: "Google: Performance-Messwerte verstehen", url: "https://support.google.com/business/answer/9918094" },
        { title: "Google: Business Profile Insights", url: "https://support.google.com/business/answer/2721884" }
      ]} />
    </ArticleLayout>
  );
};

export default GoogleBusinessInsightsVerstehen;
