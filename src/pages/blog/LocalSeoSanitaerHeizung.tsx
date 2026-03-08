import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const tocItems = [
  { id: "warum-local-seo", title: "Warum Local SEO für SHK-Betriebe?" },
  { id: "google-business", title: "Google Business Profil optimieren" },
  { id: "notdienst-seo", title: "Notdienst-SEO: Rund um die Uhr gefunden" },
  { id: "keywords", title: "Keywords für SHK-Betriebe" },
  { id: "saisonale-strategie", title: "Saisonale SEO-Strategie" },
  { id: "bewertungen", title: "Bewertungen & Kundenvertrauen" },
  { id: "website", title: "Website-Optimierung" },
  { id: "lokale-sichtbarkeit", title: "Lokale Sichtbarkeit steigern" },
  { id: "content-strategie", title: "Content-Strategie" },
  { id: "faq", title: "Häufige Fragen" },
];

const keyTakeaways = [
  "Notdienst-Keywords ('Klempner Notdienst [Stadt]') haben höchste Conversion-Rate und brauchen sofortige Sichtbarkeit",
  "Saisonale Optimierung ist entscheidend: Heizung im Herbst, Klimaanlage im Frühling, Sanitär ganzjährig",
  "Google Business mit 24/7-Notdienst-Attribut und aktuellen Öffnungszeiten ist der wichtigste Kanal",
  "Bewertungen mit Foto vom erledigten Auftrag erzeugen maximales Vertrauen bei Notfall-Kunden",
];

const LocalSeoSanitaerHeizung = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-sanitaer-heizung", language)!;

  const faqItems = [
    { question: "Wie wichtig ist Notdienst-SEO für SHK-Betriebe?", answer: "Extrem wichtig. Notdienst-Suchen haben die höchste Conversion-Rate aller lokalen Suchanfragen — oft über 50%. Der Suchende hat ein akutes Problem und ruft den ersten seriös wirkenden Betrieb an." },
    { question: "Welche Google Business Kategorie für SHK?", answer: "Wählen Sie die Primärkategorie nach Ihrem Hauptgewerk: 'Klempner' für Sanitär, 'Heizungsinstallateur' für Heizung, 'Klimaanlagen-Service' für Klima. Fügen Sie alle weiteren Gewerke als Sekundärkategorien hinzu." },
    { question: "Lohnt sich MyHammer für SHK-Betriebe?", answer: "Ja, MyHammer ist die größte Handwerker-Plattform in Deutschland und liefert qualifizierte Anfragen. Besonders effektiv für Badsanierungen und Heizungsinstallationen, weniger für Notdienst-Einsätze." },
    { question: "Wie nutze ich Förderungen für SEO?", answer: "Erstellen Sie ausführliche Ratgeber zu BAFA- und KfW-Förderungen für Heizungstausch und energetische Sanierung. Diese Keywords haben extrem hohes Suchvolumen und ziehen Kunden mit hohem Auftragswert an." },
    { question: "Wie viele Standort-Seiten brauche ich?", answer: "Erstellen Sie eine eigene Seite für jede Stadt und jeden größeren Stadtteil in Ihrem Einzugsgebiet. Jede Seite braucht einzigartigen Content — kopieren Sie nicht einfach den Stadtnamen aus." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="SHK-Handwerker bei der Arbeit an einer Heizungsanlage"
        caption="Sichtbarkeit bei Google entscheidet, wer den Auftrag bekommt"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <IndustryLandingCTA industry="handwerker" />

      {/* Warum Local SEO */}
      <section id="warum-local-seo">
        <h2>Warum Local SEO für SHK-Betriebe unverzichtbar ist</h2>
        <AutoLexikonText>
          <p>
            Wenn das Rohr bricht oder die Heizung im Winter ausfällt, greifen 85 % der Menschen
            zum Smartphone und suchen „Klempner in der Nähe" oder „Heizung Notdienst [Stadt]".
            Wer hier nicht auf Seite 1 steht, existiert für diese Kunden nicht.
          </p>
          <h3>Besonderheiten der SHK-Branche</h3>
          <ul>
            <li><strong>Notfall-Dominanz:</strong> Viele Aufträge kommen als dringende Notfälle — Entscheidung in Sekunden</li>
            <li><strong>Hoher Auftragswert:</strong> Heizungstausch (5.000–15.000 €), Badsanierung (8.000–25.000 €) — jeder Lead zählt</li>
            <li><strong>Saisonalität:</strong> Starke saisonale Schwankungen bei Heizung und Klimatechnik</li>
            <li><strong>Einzugsgebiet:</strong> Lokaler Radius von 20–50 km — perfekt für Local SEO</li>
            <li><strong>Vertrauen:</strong> Kunden lassen Handwerker ins Haus — Bewertungen und Seriosität sind entscheidend</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Google Business */}
      <section id="google-business">
        <h2>Google Business Profil für SHK-Betriebe</h2>
        <AutoLexikonText>
          <p>
            Ihr Google Business Profil ist bei Notfällen oft der einzige Kontaktpunkt
            vor dem Anruf. Es muss sofort Vertrauen aufbauen und zur Aktion führen.
          </p>
          <h3>Optimierung für SHK-Betriebe</h3>
          <ul>
            <li><strong>Kategorie:</strong> Primär „Klempner", „Heizungsinstallateur" oder „Klimaanlagen-Service" — sekundär weitere SHK-Bereiche</li>
            <li><strong>Öffnungszeiten:</strong> Reguläre Zeiten + Notdienst-Zeiten separat angeben (24/7 wenn möglich)</li>
            <li><strong>Service Area:</strong> Einzugsgebiet mit allen bedienten Städten und Ortsteilen definieren</li>
            <li><strong>Fotos:</strong> Vorher/Nachher-Bilder, Teamfotos, Fahrzeugflotte, abgeschlossene Projekte</li>
            <li><strong>Services:</strong> Jeden Service einzeln anlegen (Rohrreinigung, Heizungswartung, Badsanierung, etc.)</li>
            <li><strong>Attribute:</strong> „Notdienst verfügbar", „Vor-Ort-Service", „Kostenvoranschlag" aktivieren</li>
          </ul>
          <h3>Google Posts für SHK</h3>
          <ul>
            <li>Saisonale Tipps: „Heizung winterfest machen — 5-Punkte-Checkliste"</li>
            <li>Abgeschlossene Projekte mit Vorher/Nachher-Fotos</li>
            <li>Aktionsangebote: „Heizungswartung zum Festpreis"</li>
            <li>Hinweise zu Förderprogrammen (BAFA, KfW)</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Notdienst-SEO */}
      <section id="notdienst-seo">
        <h2>Notdienst-SEO: Rund um die Uhr gefunden werden</h2>
        <AutoLexikonText>
          <p>
            Notdienst-Suchen haben die höchste Conversion-Rate aller lokalen Suchanfragen.
            Wer hier sichtbar ist, gewinnt Aufträge mit minimaler Entscheidungszeit.
          </p>
          <h3>Notdienst-Keywords optimieren</h3>
          <ul>
            <li><strong>Primär:</strong> „Klempner Notdienst [Stadt]", „Heizung Notdienst [Stadt]", „Rohrbruch Notdienst"</li>
            <li><strong>Sekundär:</strong> „Sanitär Notdienst in meiner Nähe", „Heizung ausgefallen was tun"</li>
            <li><strong>Long-Tail:</strong> „Rohr geplatzt Sonntag [Stadt]", „Heizung defekt Nachts [Stadt]"</li>
          </ul>
          <h3>Notdienst-Landingpage erstellen</h3>
          <ul>
            <li>Telefonnummer groß und klickbar ganz oben</li>
            <li>Klare Aussage: „Wir sind in 30–60 Minuten bei Ihnen"</li>
            <li>Einzugsgebiet mit allen Ortsteilen auflisten</li>
            <li>Preistransparenz: Anfahrtspauschale und Stundensätze nennen</li>
            <li>Bewertungen von Notdienst-Kunden prominent zeigen</li>
            <li>FAQ: „Was kostet ein Notdienst-Einsatz?", „Wie schnell sind Sie da?"</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Keywords */}
      <section id="keywords">
        <h2>Keywords für SHK-Betriebe</h2>
        <AutoLexikonText>
          <p>
            SHK-Betriebe haben ein breites Keyword-Spektrum, das nach Gewerk,
            Dringlichkeit und Saison strukturiert werden sollte.
          </p>
          <h3>Sanitär-Keywords</h3>
          <ul>
            <li>„Klempner [Stadt]", „Sanitär Installateur [Stadt]"</li>
            <li>„Rohrreinigung [Stadt]", „Verstopfung Abfluss [Stadt]"</li>
            <li>„Badsanierung [Stadt]", „Bad renovieren Kosten"</li>
            <li>„Wasserleitung reparieren", „Armatur tropft"</li>
          </ul>
          <h3>Heizung-Keywords</h3>
          <ul>
            <li>„Heizungsinstallateur [Stadt]", „Heizung einbauen [Stadt]"</li>
            <li>„Wärmepumpe installieren [Stadt]", „Wärmepumpe Kosten"</li>
            <li>„Heizungswartung [Stadt]", „Gasheizung warten"</li>
            <li>„Fußbodenheizung nachrüsten", „Heizung tauschen Förderung"</li>
          </ul>
          <h3>Klima-Keywords</h3>
          <ul>
            <li>„Klimaanlage einbauen [Stadt]", „Split-Klimaanlage Kosten"</li>
            <li>„Klimaanlage warten [Stadt]", „Klimaservice"</li>
            <li>„Lüftungsanlage Einbau", „Wohnraumlüftung [Stadt]"</li>
          </ul>
          <h3>Förderung-Keywords (hoher Auftragswert)</h3>
          <ul>
            <li>„BAFA Förderung Wärmepumpe", „KfW Förderung Heizung"</li>
            <li>„Heizungstausch Förderung 2026", „GEG Anforderungen"</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Saisonale Strategie */}
      <section id="saisonale-strategie">
        <h2>Saisonale SEO-Strategie</h2>
        <AutoLexikonText>
          <p>
            SHK ist eine der saisonalsten Branchen überhaupt. Wer seine SEO-Strategie
            an den Jahresrhythmus anpasst, gewinnt in jeder Saison.
          </p>
          <h3>Frühjahr (März–Mai)</h3>
          <ul>
            <li>Klimaanlagen-Content veröffentlichen und optimieren</li>
            <li>Garten-Bewässerung und Außenanlagen</li>
            <li>Heizungswartung nach der Saison bewerben</li>
          </ul>
          <h3>Sommer (Juni–August)</h3>
          <ul>
            <li>Klimaanlage: Hochsaison — Google Ads + organisch pushen</li>
            <li>Badsanierungen bewerben (Kunden haben Zeit für Umbau)</li>
            <li>Legionellen-Prüfung Content</li>
          </ul>
          <h3>Herbst (September–November)</h3>
          <ul>
            <li>Heizungswartung und Heizungscheck — größte Nachfrage</li>
            <li>Wärmepumpe und Heizungstausch (vor dem Winter)</li>
            <li>Förderungs-Content aktualisieren</li>
          </ul>
          <h3>Winter (Dezember–Februar)</h3>
          <ul>
            <li>Notdienst-SEO maximieren (Heizungsausfälle, Rohrbrüche bei Frost)</li>
            <li>„Heizung ausgefallen" und „Rohr eingefroren" Keywords</li>
            <li>Frostschutz-Tipps als Content veröffentlichen</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen">
        <h2>Bewertungen & Kundenvertrauen</h2>
        <AutoLexikonText>
          <p>
            Im Handwerk entscheiden Bewertungen über Aufträge. Besonders bei Notdiensten
            wählen Kunden den Betrieb mit den besten Bewertungen — in Sekunden.
          </p>
          <h3>Bewertungs-Strategie für SHK</h3>
          <ul>
            <li><strong>Zeitpunkt:</strong> Direkt nach Auftragsabschluss — am besten noch vor Ort per QR-Code</li>
            <li><strong>Foto-Bewertungen:</strong> Bitten Sie Kunden, ein Foto des Ergebnisses beizufügen — wirkt authentisch</li>
            <li><strong>Notdienst-Bewertungen:</strong> Besonders wertvoll — zeigen Zuverlässigkeit unter Druck</li>
            <li><strong>Plattformen:</strong> Google (Priorität 1), MyHammer, Check24, Yelp</li>
          </ul>
          <h3>Bewertungs-Vorlagen</h3>
          <p>
            Erstellen Sie QR-Code-Aufkleber für Ihre Monteure. Nach jedem Einsatz: „Waren Sie
            zufrieden? Scannen Sie den Code für eine kurze Bewertung — dauert nur 30 Sekunden."
          </p>
        </AutoLexikonText>
      </section>

      {/* Website */}
      <section id="website">
        <h2>Website-Optimierung für SHK-Betriebe</h2>
        <AutoLexikonText>
          <p>
            Eine SHK-Website muss auf dem Smartphone perfekt funktionieren — die meisten
            Notdienst-Suchen kommen von mobilen Geräten.
          </p>
          <h3>Essenzielle Seiten</h3>
          <ul>
            <li><strong>Startseite:</strong> Alle Gewerke, Einzugsgebiet, Notdienst-Nummer prominent</li>
            <li><strong>Service-Seiten:</strong> Eine Seite pro Gewerk (Sanitär, Heizung, Klima, Bad)</li>
            <li><strong>Notdienst-Seite:</strong> Eigene Landingpage mit Click-to-Call und Reaktionszeit</li>
            <li><strong>Referenzen:</strong> Projektgalerie mit Vorher/Nachher-Bildern</li>
            <li><strong>Einzugsgebiet-Seiten:</strong> Eine Seite pro bediente Stadt/Stadtteil</li>
            <li><strong>Förderungsberater:</strong> Infoseite zu BAFA/KfW-Förderungen (Traffic-Magnet)</li>
          </ul>
          <h3>Technische Must-Haves</h3>
          <ul>
            <li>Click-to-Call Button auf jeder Seite (sticky auf Mobile)</li>
            <li>LocalBusiness Schema (Typ: Plumber, HVACBusiness)</li>
            <li>Ladezeit unter 2 Sekunden (Notdienst-Kunden warten nicht)</li>
            <li>WhatsApp-Button für schnellen Kontakt</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Lokale Sichtbarkeit */}
      <section id="lokale-sichtbarkeit">
        <h2>Lokale Sichtbarkeit steigern</h2>
        <AutoLexikonText>
          <h3>Verzeichnisse & Portale für SHK</h3>
          <ul>
            <li><strong>MyHammer:</strong> Größtes Handwerkerportal — Profil + Bewertungen pflegen</li>
            <li><strong>Check24:</strong> Handwerker-Vergleich — starke Lead-Quelle</li>
            <li><strong>Handwerker.de:</strong> Branchenverzeichnis mit Backlink</li>
            <li><strong>SHK-Innung:</strong> Innungsmitgliedschaft = Vertrauen + hochwertiger Backlink</li>
            <li><strong>Kreishandwerkerschaft:</strong> Lokaler Verband mit Verlinkung</li>
            <li><strong>Hersteller-Partnerseiten:</strong> Viessmann, Vaillant, Buderus — als Fachpartner listen lassen</li>
          </ul>
          <h3>Kooperationen</h3>
          <ul>
            <li>Architekten und Bauträger — Empfehlungen für Neubauten</li>
            <li>Hausverwaltungen — regelmäßige Wartungsaufträge</li>
            <li>Elektriker — gegenseitige Empfehlungen bei Sanierungen</li>
            <li>Energieberater — Leads für Heizungstausch</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Content-Strategie */}
      <section id="content-strategie">
        <h2>Content-Strategie für SHK-Betriebe</h2>
        <AutoLexikonText>
          <h3>Content-Ideen mit SEO-Potenzial</h3>
          <ul>
            <li><strong>Kostenrechner:</strong> „Was kostet eine Badsanierung?" — interaktives Tool mit hohem Engagement</li>
            <li><strong>Förderungs-Guide:</strong> „BAFA Förderung Wärmepumpe 2026" — extrem hohes Suchvolumen</li>
            <li><strong>Vergleichsartikel:</strong> „Wärmepumpe vs. Gasheizung" — informationelle Keywords</li>
            <li><strong>Saisonale Tipps:</strong> „Heizung winterfest machen", „Rohr einfrieren verhindern"</li>
            <li><strong>Projekt-Dokumentationen:</strong> Badsanierung in Bildern — lokale Keywords + Referenz</li>
            <li><strong>FAQ-Seiten:</strong> „Wie oft Heizungswartung?", „Wann Rohre erneuern?" — Featured Snippets</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie wichtig ist Notdienst-SEO für SHK-Betriebe?</AccordionTrigger>
            <AccordionContent>
              Extrem wichtig. Notdienst-Suchen haben die höchste Conversion-Rate aller lokalen
              Suchanfragen — oft über 50 %. Der Suchende hat ein akutes Problem und ruft den
              ersten seriös wirkenden Betrieb an. Eine optimierte Notdienst-Seite und ein
              vollständiges Google Business Profil mit Notdienst-Attribut sind Pflicht.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Welche Google Business Kategorie für SHK?</AccordionTrigger>
            <AccordionContent>
              Wählen Sie die Primärkategorie nach Ihrem Hauptgewerk: „Klempner" für Sanitär,
              „Heizungsinstallateur" für Heizung, „Klimaanlagen-Service" für Klima. Fügen Sie
              alle weiteren Gewerke als Sekundärkategorien hinzu. Google erlaubt bis zu 10 Kategorien.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Lohnt sich MyHammer für SHK-Betriebe?</AccordionTrigger>
            <AccordionContent>
              Ja, MyHammer ist die größte Handwerker-Plattform in Deutschland und liefert
              qualifizierte Anfragen. Wichtig: Pflegen Sie Ihr Profil mit Fotos und sammeln Sie
              aktiv Bewertungen. Die Plattform ist besonders effektiv für Badsanierungen und
              Heizungsinstallationen, weniger für Notdienst-Einsätze.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie nutze ich Förderungen für SEO?</AccordionTrigger>
            <AccordionContent>
              Erstellen Sie ausführliche Ratgeber zu BAFA- und KfW-Förderungen für Heizungstausch
              und energetische Sanierung. Diese Keywords haben extrem hohes Suchvolumen und ziehen
              Kunden mit hohem Auftragswert an. Aktualisieren Sie die Inhalte bei jeder
              Förderungsänderung — Google belohnt Aktualität.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie viele Standort-Seiten brauche ich?</AccordionTrigger>
            <AccordionContent>
              Erstellen Sie eine eigene Seite für jede Stadt und jeden größeren Stadtteil in Ihrem
              Einzugsgebiet. Jede Seite braucht einzigartigen Content — kopieren Sie nicht einfach
              den Stadtnamen aus. Erwähnen Sie lokale Referenzen, typische Gebäudearten und
              spezifische Herausforderungen der Gegend.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <IndustryRankingChallenges config={industryRankingConfigs.sanitaer} />
      <HelpfulnessWidget articleSlug="local-seo-sanitaer-heizung" />

      <SourcesSection sources={[
        { title: "BrightLocal: Local SEO for Home Services", url: "https://www.brightlocal.com/learn/local-seo-for-home-services/" },
        { title: "Google: Business Profile Categories", url: "https://support.google.com/business/answer/9049526" },
        { title: "BAFA: Förderung Heizungsoptimierung", url: "https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/effiziente_gebaeude_node.html" },
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoSanitaerHeizung;
