import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import IndustryRankingChallenges from "@/components/blog/IndustryRankingChallenges";
import { industryRankingConfigs } from "@/data/industryRankingData";
import IndustryKeywordOpportunities from "@/components/blog/IndustryKeywordOpportunities";
import { industryKeywordConfigs } from "@/data/industryKeywordData";
import SearchIntentAnalysis from "@/components/blog/SearchIntentAnalysis";
import { searchIntentConfigs } from "@/data/searchIntentData";
import ContentUpgradeSection from "@/components/blog/ContentUpgradeSection";
import { contentUpgradeConfigs } from "@/data/contentUpgradeData";
import ReviewAcquisitionScripts from "@/components/blog/ReviewAcquisitionScripts";
import SourcesSection from "@/components/blog/SourcesSection";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import IndustryBenchmarkTable from "@/components/blog/IndustryBenchmarkTable";
import { industryBenchmarkData } from "@/data/industryBenchmarkData";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const tocItems = [
  { id: "warum-local-seo", title: "Warum Local SEO für Anwälte?" },
  { id: "google-business", title: "Google Business Profil optimieren" },
  { id: "rechtsgebiets-keywords", title: "Rechtsgebiets-Keywords" },
  { id: "anwaltsportale", title: "Anwaltsportale & Verzeichnisse" },
  { id: "eeat-juristen", title: "E-E-A-T für Juristen" },
  { id: "bewertungen", title: "Bewertungen & Mandantenvertrauen" },
  { id: "website-optimierung", title: "Website-Optimierung" },
  { id: "content-strategie", title: "Content-Strategie für Kanzleien" },
  { id: "lokale-sichtbarkeit", title: "Lokale Sichtbarkeit steigern" },
  { id: "faq", title: "Häufige Fragen" },
];

const keyTakeaways = [
  "Rechtsgebiets-Keywords mit Stadtbezug (z.B. 'Arbeitsrecht Anwalt München') sind die wichtigsten Suchbegriffe",
  "E-E-A-T ist für Anwälte als YMYL-Branche besonders kritisch – Expertise und Vertrauen müssen nachweisbar sein",
  "Anwaltsportale (anwalt.de, advocado) liefern hochwertige Backlinks und Mandanten-Anfragen",
  "Fachanwalt-Titel, Veröffentlichungen und Kammer-Mitgliedschaften stärken die Autorität enorm",
];

const LocalSeoAnwaelteKanzleien = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-anwaelte-kanzleien", language)!;

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Moderne Anwaltskanzlei mit digitalem Marketing"
        caption="Lokale Sichtbarkeit entscheidet, welche Kanzlei neue Mandanten gewinnt"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <IndustryLandingCTA industry="anwalt" />

      {/* Warum Local SEO */}
      <section id="warum-local-seo">
        <h2>Warum Local SEO für Anwälte unverzichtbar ist</h2>
        <AutoLexikonText>
          <p>
            Über 70 % der Menschen, die einen Anwalt suchen, beginnen ihre Recherche bei Google.
            Die Suchanfrage „Anwalt [Stadt]" oder „[Rechtsgebiet] Anwalt in meiner Nähe" ist
            der häufigste Weg, wie neue Mandanten eine Kanzlei finden. Wer hier nicht sichtbar ist,
            verliert täglich potenzielle Mandanten an die Konkurrenz.
          </p>
          <h3>Besonderheiten der Anwaltsbranche</h3>
          <ul>
            <li><strong>YMYL-Kategorie:</strong> Rechtliche Beratung fällt unter „Your Money or Your Life" — Google stellt besonders hohe Anforderungen an Vertrauenswürdigkeit</li>
            <li><strong>Hoher Mandantenwert:</strong> Ein einzelner Mandant kann Tausende Euro Umsatz bedeuten — jede Google-Platzierung zählt</li>
            <li><strong>Starker Wettbewerb:</strong> In Großstädten konkurrieren hunderte Kanzleien um die gleichen Keywords</li>
            <li><strong>Vertrauensabhängig:</strong> Mandanten wählen Anwälte basierend auf Bewertungen, Expertise und persönlichem Eindruck</li>
            <li><strong>Rechtsgebietsspezifisch:</strong> Jedes Rechtsgebiet hat eigene Keyword-Muster und Mandanten-Bedürfnisse</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Google Business */}
      <section id="google-business">
        <h2>Google Business Profil für Kanzleien optimieren</h2>
        <AutoLexikonText>
          <p>
            Ihr Google Business Profil ist oft der erste Kontaktpunkt mit potenziellen Mandanten.
            Eine vollständige und optimierte Präsenz ist die Grundlage für lokale Sichtbarkeit.
          </p>
          <h3>Pflichtfelder für Anwälte</h3>
          <ul>
            <li><strong>Kategorie:</strong> Primär „Rechtsanwalt" oder „Anwaltskanzlei", sekundär spezifische Rechtsgebiete (z.B. „Familienrechtsanwalt")</li>
            <li><strong>Beschreibung:</strong> Alle Rechtsgebiete, Fachanwalt-Titel und Alleinstellungsmerkmale nennen</li>
            <li><strong>Öffnungszeiten:</strong> Reguläre Sprechzeiten + Hinweis auf Terminvereinbarung</li>
            <li><strong>Fotos:</strong> Professionelle Kanzlei-Fotos, Team-Bilder, Besprechungsräume</li>
            <li><strong>Services:</strong> Alle angebotenen Rechtsgebiete als einzelne Services anlegen</li>
            <li><strong>Attribute:</strong> „Rollstuhlgerecht", „Online-Beratung", „Erstberatung kostenlos" etc.</li>
          </ul>
          <h3>Google Posts für Kanzleien</h3>
          <ul>
            <li>Rechtsänderungen und neue Gesetze kommentieren</li>
            <li>Erfolgreiche Fälle (anonymisiert) als Erfolgsgeschichten teilen</li>
            <li>Veranstaltungen wie Rechtsvorträge oder Sprechtage ankündigen</li>
            <li>Neue Fachanwalt-Titel oder Auszeichnungen kommunizieren</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Rechtsgebiets-Keywords */}
      <section id="rechtsgebiets-keywords">
        <h2>Rechtsgebiets-Keywords: Die richtigen Suchbegriffe finden</h2>
        <AutoLexikonText>
          <p>
            Anwälte werden selten generisch gesucht — Mandanten suchen nach konkreten Rechtsgebieten
            in Kombination mit ihrem Standort.
          </p>
          <h3>Keyword-Muster für Anwälte</h3>
          <ul>
            <li><strong>Rechtsgebiet + Stadt:</strong> „Arbeitsrecht Anwalt München", „Familienrecht Kanzlei Berlin"</li>
            <li><strong>Problem + Stadt:</strong> „Kündigung Anwalt Hamburg", „Scheidung Anwalt Köln"</li>
            <li><strong>Fachanwalt + Stadt:</strong> „Fachanwalt Mietrecht Frankfurt", „Fachanwalt Strafrecht Düsseldorf"</li>
            <li><strong>Dringend/Notfall:</strong> „Anwalt sofort", „Strafverteidiger Notfall [Stadt]"</li>
            <li><strong>Kosten-Keywords:</strong> „Anwalt Erstberatung kostenlos [Stadt]", „Anwaltskosten [Rechtsgebiet]"</li>
          </ul>
          <h3>Top-Rechtsgebiete nach Suchvolumen</h3>
          <ul>
            <li><strong>Arbeitsrecht:</strong> Kündigung, Abfindung, Arbeitsvertrag — hohes Suchvolumen, mittlerer Wettbewerb</li>
            <li><strong>Familienrecht:</strong> Scheidung, Sorgerecht, Unterhalt — sehr hohes Suchvolumen</li>
            <li><strong>Mietrecht:</strong> Mieterhöhung, Kündigung, Mängel — saisonale Peaks</li>
            <li><strong>Verkehrsrecht:</strong> Bußgeld, Führerschein, Unfall — oft dringend</li>
            <li><strong>Erbrecht:</strong> Testament, Pflichtteil, Erbstreit — hoher Mandantenwert</li>
            <li><strong>Strafrecht:</strong> Strafverteidiger, Anzeige — höchste Dringlichkeit</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Anwaltsportale */}
      <section id="anwaltsportale">
        <h2>Anwaltsportale & juristische Verzeichnisse</h2>
        <AutoLexikonText>
          <p>
            Branchenspezifische Portale sind für Anwälte besonders wertvoll — sie liefern
            qualifizierte Mandanten-Anfragen und hochwertige Backlinks gleichzeitig.
          </p>
          <h3>Die wichtigsten Portale im DACH-Raum</h3>
          <ul>
            <li><strong>anwalt.de:</strong> Größtes deutsches Anwaltsverzeichnis, DoFollow-Links, Mandanten-Anfragen, Fachbeiträge veröffentlichen (DA 70+)</li>
            <li><strong>advocado:</strong> Online-Rechtsberatung mit Mandanten-Vermittlung</li>
            <li><strong>anwalt24.de:</strong> Kostenloses Profil mit Bewertungen und Fachgebieten</li>
            <li><strong>rechtsanwalt.com:</strong> Anwaltssuche nach Rechtsgebiet und Standort</li>
            <li><strong>anwaltsauskunft.de (DAV):</strong> Offizielles Portal des Deutschen Anwaltvereins</li>
            <li><strong>rechtsanwaelte.at:</strong> Österreichisches Anwaltsverzeichnis der RAK</li>
            <li><strong>swisslegal.ch:</strong> Schweizerisches Anwaltsnetzwerk</li>
          </ul>
          <h3>Weitere wichtige Verzeichnisse</h3>
          <ul>
            <li>Rechtsanwaltskammer-Verzeichnisse (BRAK, RAK)</li>
            <li>IHK-Mitgliederverzeichnis</li>
            <li>Gelbe Seiten / Das Örtliche</li>
            <li>Google Business, Bing Places, Apple Maps</li>
            <li>Branchenbuch-Portale (11880, GoYellow)</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* E-E-A-T */}
      <section id="eeat-juristen">
        <h2>E-E-A-T für Juristen: Warum es doppelt zählt</h2>
        <AutoLexikonText>
          <p>
            Als YMYL-Branche werden Anwaltswebsites von Google besonders streng bewertet.
            E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) ist kein
            Nice-to-have, sondern Ranking-Voraussetzung.
          </p>
          <h3>Experience (Erfahrung) nachweisen</h3>
          <ul>
            <li>Anonymisierte Fallbeispiele und Erfolgsgeschichten</li>
            <li>Mandantenstimmen und Testimonials</li>
            <li>Jahre der Berufserfahrung prominent platzieren</li>
          </ul>
          <h3>Expertise belegen</h3>
          <ul>
            <li><strong>Fachanwalt-Titel:</strong> Stärkstes Expertise-Signal — auf jeder Seite sichtbar machen</li>
            <li><strong>Veröffentlichungen:</strong> Fachartikel, Bücher, Kommentare verlinken</li>
            <li><strong>Vorträge:</strong> Seminare, Universitäts-Lehraufträge, Konferenzen</li>
            <li><strong>Autorenprofile:</strong> Detaillierte Anwaltsprofile mit Werdegang und Schwerpunkten</li>
          </ul>
          <h3>Authority aufbauen</h3>
          <ul>
            <li>Fachbeiträge auf anwalt.de und juristischen Portalen</li>
            <li>Zitate in Presse und Fachmedien</li>
            <li>Mitgliedschaften in Fachverbänden (DAV, ARGE, etc.)</li>
            <li>Kammer-Zulassungen und Zertifikate</li>
          </ul>
          <h3>Trust sicherstellen</h3>
          <ul>
            <li>Impressum und Datenschutz DSGVO-konform (Pflicht!)</li>
            <li>Transparente Kostenhinweise und Gebührenordnung</li>
            <li>SSL-Zertifikat und sichere Kontaktformulare</li>
            <li>Berufsrechtliche Angaben (zuständige RAK, Berufsbezeichnung)</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen">
        <h2>Bewertungen & Mandantenvertrauen</h2>
        <AutoLexikonText>
          <p>
            Bewertungen sind für Anwälte besonders sensibel — und gleichzeitig besonders wirkungsvoll.
            Eine Kanzlei mit 4,8 Sternen und 50+ Bewertungen gewinnt deutlich mehr Mandanten als
            eine ohne Bewertungen.
          </p>
          <h3>Bewertungen strategisch aufbauen</h3>
          <ul>
            <li><strong>Zeitpunkt:</strong> Nach erfolgreichem Abschluss eines Falls — wenn die Zufriedenheit am höchsten ist</li>
            <li><strong>Methode:</strong> Persönliche E-Mail mit direktem Google-Bewertungslink</li>
            <li><strong>Plattformen:</strong> Google (wichtigste), anwalt.de, Proven Expert</li>
            <li><strong>Anwaltsgeheimnis beachten:</strong> Niemals Details zu Mandanten oder Fällen in Bewertungs-Antworten nennen</li>
          </ul>
          <h3>Mit negativen Bewertungen umgehen</h3>
          <ul>
            <li>Professionell und sachlich antworten</li>
            <li>Keine Falldetails oder Mandantennamen nennen</li>
            <li>Bei Verstößen gegen Richtlinien: Löschung bei Google beantragen</li>
            <li>Positive Bewertungen überwiegen lassen durch aktives Nachfragen</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Website-Optimierung */}
      <section id="website-optimierung">
        <h2>Website-Optimierung für Kanzleien</h2>
        <AutoLexikonText>
          <p>
            Eine Anwalts-Website muss Vertrauen aufbauen, Kompetenz vermitteln und den
            Mandanten zum Kontakt führen — alles in wenigen Sekunden.
          </p>
          <h3>Essenzielle Seiten</h3>
          <ul>
            <li><strong>Startseite:</strong> Rechtsgebiete, Standort, Alleinstellungsmerkmale, klare CTAs</li>
            <li><strong>Rechtsgebiets-Seiten:</strong> Eine eigene Landingpage pro Rechtsgebiet mit lokalen Keywords</li>
            <li><strong>Anwaltsprofil-Seiten:</strong> Detaillierte Profile mit Foto, Werdegang, Spezialisierungen</li>
            <li><strong>Kontaktseite:</strong> Telefon, E-Mail, Kontaktformular, Wegbeschreibung, Terminbuchung</li>
            <li><strong>Kosten-Seite:</strong> Transparente Erstberatungskosten, Prozesskostenrechner</li>
            <li><strong>FAQ-Seiten:</strong> Häufige Rechtsfragen pro Rechtsgebiet (mit FAQ-Schema)</li>
          </ul>
          <h3>Technische Anforderungen</h3>
          <ul>
            <li>LocalBusiness Schema (Typ: LegalService oder Attorney)</li>
            <li>Mobile-First Design — viele Mandanten suchen vom Smartphone</li>
            <li>Ladezeit unter 3 Sekunden</li>
            <li>HTTPS/SSL (Pflicht für Vertrauenswürdigkeit)</li>
            <li>Barrierefreiheit (WCAG 2.1)</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Content-Strategie */}
      <section id="content-strategie">
        <h2>Content-Strategie für Kanzleien</h2>
        <AutoLexikonText>
          <p>
            Rechtliche Inhalte sind idealer SEO-Content: hohe Nachfrage, langer Lebenszyklus
            und natürliche E-E-A-T-Signale durch fachliche Expertise.
          </p>
          <h3>Content-Formate mit SEO-Wirkung</h3>
          <ul>
            <li><strong>Rechtsratgeber:</strong> „Was tun bei Kündigung?" — informationelle Keywords mit hohem Suchvolumen</li>
            <li><strong>Gesetzesänderungen:</strong> Aktuelle Rechtsänderungen kommentieren — Aktualitäts-Signal</li>
            <li><strong>Checklisten:</strong> „Checkliste Scheidung" — hohe Teilbarkeit und Backlink-Potenzial</li>
            <li><strong>FAQ-Seiten:</strong> Häufige Mandantenfragen beantworten — Featured Snippets + FAQ-Schema</li>
            <li><strong>Fallbeispiele:</strong> Anonymisierte Erfolgsgeschichten — Experience-Signal</li>
            <li><strong>Kostenrechner:</strong> Interaktive Tools für Prozesskosteneinschätzung — Engagement</li>
          </ul>
          <h3>Content-Kalender Beispiel</h3>
          <ul>
            <li><strong>Monatlich:</strong> 1 ausführlicher Rechtsratgeber (1.500+ Wörter)</li>
            <li><strong>Wöchentlich:</strong> 1 Google Post zu aktuellem Rechtsthema</li>
            <li><strong>Quartalsweise:</strong> 1 Gastbeitrag auf anwalt.de oder juristischem Fachportal</li>
            <li><strong>Bei Bedarf:</strong> Kommentare zu neuen Gesetzen oder Urteilen</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Lokale Sichtbarkeit */}
      <section id="lokale-sichtbarkeit">
        <h2>Lokale Sichtbarkeit steigern</h2>
        <AutoLexikonText>
          <p>
            Neben der Online-Optimierung gibt es für Anwälte spezifische Offline-Strategien,
            die direkte SEO-Wirkung haben.
          </p>
          <h3>Lokale Strategien für Kanzleien</h3>
          <ul>
            <li><strong>IHK & Wirtschaftsverbände:</strong> Mitgliedschaft = hochwertiger Backlink + lokale Autorität</li>
            <li><strong>Rechtsvorträge:</strong> Vorträge bei VHS, IHK oder Verbänden — lokale Presse berichtet</li>
            <li><strong>Pro-Bono-Arbeit:</strong> Gemeinnützige Rechtsberatung erzeugt positive Erwähnungen</li>
            <li><strong>Netzwerke:</strong> BNI, Rotary, Lions Club — Empfehlungen und Verlinkungen</li>
            <li><strong>Kooperationen:</strong> Steuerberater, Notare, Wirtschaftsprüfer — gegenseitige Empfehlungen</li>
            <li><strong>Lokale Presse:</strong> Als Rechtsexperte für Kommentare zur Verfügung stehen</li>
          </ul>
        </AutoLexikonText>
      </section>

      {industryStats.anwaelte?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.anwaelte} />

      <IndustryBenchmarkTable data={industryBenchmarkData.anwaelte} />

      <IndustryComparisonTable data={industryComparisonData.anwaelte} />

      {/* FAQ */}
      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie lange dauert es, bis Local SEO für Anwälte wirkt?</AccordionTrigger>
            <AccordionContent>
              Erste Verbesserungen bei Google Business (Maps-Ranking) sind oft nach 4–8 Wochen
              sichtbar. Organische Rankings für wettbewerbsstarke Keywords wie „Familienrecht Anwalt
              München" können 3–6 Monate dauern. Kontinuierliche Content-Erstellung und
              Bewertungsaufbau beschleunigen den Prozess.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Dürfen Anwälte aktiv um Bewertungen bitten?</AccordionTrigger>
            <AccordionContent>
              Ja, sofern keine Gegenleistung angeboten wird. Sie dürfen zufriedene Mandanten
              höflich um eine ehrliche Bewertung bitten. Wichtig: Beachten Sie das Anwaltsgeheimnis
              — antworten Sie nie mit Falldetails auf Bewertungen, auch nicht auf negative.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Google Business Kategorie für Anwälte?</AccordionTrigger>
            <AccordionContent>
              Primärkategorie: „Rechtsanwalt" oder „Anwaltskanzlei". Sekundärkategorien nach
              Spezialisierung: „Familienrechtsanwalt", „Arbeitsrechtler", „Strafverteidiger" etc.
              Google erlaubt bis zu 10 Kategorien — nutzen Sie alle relevanten Rechtsgebiete.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Lohnt sich ein Profil auf anwalt.de?</AccordionTrigger>
            <AccordionContent>
              Ja, anwalt.de ist das größte deutsche Anwaltsverzeichnis mit hoher Domain Authority.
              Es bietet DoFollow-Backlinks, Mandanten-Anfragen und die Möglichkeit, Fachbeiträge
              zu veröffentlichen. Die Investition lohnt sich besonders für wettbewerbsstarke
              Rechtsgebiete und Großstädte.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie wichtig ist der Fachanwalt-Titel für SEO?</AccordionTrigger>
            <AccordionContent>
              Sehr wichtig. Der Fachanwalt-Titel ist ein starkes E-E-A-T-Signal, das Google
              als Expertise-Nachweis wertet. Zudem suchen viele Mandanten gezielt nach
              „Fachanwalt [Rechtsgebiet] [Stadt]" — ein eigenes Keyword-Cluster mit geringem
              Wettbewerb und hohem Mandantenwert.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Case Study */}
      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Kanzlei-Erfolg durch Local SEO</h2>
        {industryCaseStudies.anwaelte.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <ReviewAcquisitionScripts
        industries={["anwalt"]}
        title="Bewertungs-Scripts fuer Kanzleien"
        description="Kopierfertige Texte fuer Anwaelte: Nach Mandatsabschluss per E-Mail und Telefon. Mit Schweigepflicht-Hinweisen."
      />

      <SearchIntentAnalysis config={searchIntentConfigs.anwaelte} />
      <IndustryKeywordOpportunities config={industryKeywordConfigs.anwaelte} />
      <IndustryRankingChallenges config={industryRankingConfigs.anwaelte} />
      <ContentUpgradeSection config={contentUpgradeConfigs.anwaelte} />
      <HelpfulnessWidget articleSlug="local-seo-anwaelte-kanzleien" />

      <SourcesSection sources={[
        { title: "BrightLocal: Local SEO for Lawyers", url: "https://www.brightlocal.com/learn/local-seo-for-lawyers/" },
        { title: "Moz: YMYL and E-E-A-T", url: "https://moz.com/blog/ymyl-eeat" },
        { title: "Google: Business Profile Categories", url: "https://support.google.com/business/answer/9049526" },
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoAnwaelteKanzleien;
