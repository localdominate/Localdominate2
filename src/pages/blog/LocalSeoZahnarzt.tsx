import ArticleLayout from "@/components/blog/ArticleLayout";
import MiniSuccessStory from "@/components/blog/MiniSuccessStory";
import { miniSuccessStories } from "@/data/miniSuccessStories";
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
import ReviewEmailTemplates from "@/components/blog/ReviewEmailTemplates";
import SmsReviewTemplates from "@/components/blog/SmsReviewTemplates";
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
import SourcesSection from "@/components/blog/SourcesSection";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoZahnarzt = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-zahnarzt", language)!;

  const tocItems = [
    { id: "patientensuche", title: "Wie Patienten Zahnärzte suchen" },
    { id: "google-business", title: "Google Business für Zahnarztpraxen" },
    { id: "behandlungs-keywords", title: "Behandlungs-Keywords nutzen" },
    { id: "bewertungsmanagement", title: "Bewertungsmanagement für Zahnärzte" },
    { id: "website-optimierung", title: "Praxis-Website optimieren" },
    { id: "lokale-sichtbarkeit", title: "Lokale Sichtbarkeit erhöhen" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "78% der Patienten suchen online nach einem neuen Zahnarzt",
    "Behandlungsspezifische Keywords bringen qualifizierte Neupatienten",
    "Positive Bewertungen sind der wichtigste Entscheidungsfaktor",
    "Notdienst-Sichtbarkeit bringt neue Stammpatienten"
  ];

  const faqItems = [
    { question: "Dürfen Zahnärzte aktiv um Bewertungen bitten?", answer: "Ja, Sie dürfen Patienten freundlich um eine Bewertung bitten. Wichtig ist, dass Sie keine Gegenleistung anbieten und die Entscheidung dem Patienten überlassen." },
    { question: "Wie wichtig ist Jameda für Zahnärzte?", answer: "Jameda ist in Deutschland das wichtigste Arzt-Bewertungsportal und hat eine hohe Sichtbarkeit bei Google. Ein gepflegtes Jameda-Profil ist empfehlenswert." },
    { question: "Welche Fotos sollte ich bei Google Business hochladen?", answer: "Zeigen Sie helle, moderne Praxisräume, Ihr freundliches Team und moderne Ausstattung. Vermeiden Sie Fotos von Behandlungen oder Patienten (Datenschutz!)." },
    { question: "Wie kann ich Notfall-Patienten erreichen?", answer: "Optimieren Sie für Keywords wie 'Zahnarzt Notdienst [Stadt]'. Tragen Sie Ihre Notdienst-Zeiten bei Google Business ein. Notfall-Patienten werden oft zu Stammpatienten." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Moderne Zahnarztpraxis mit Google-Suche"
        caption="Lokale Sichtbarkeit entscheidet über den Erfolg einer Zahnarztpraxis"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="patientensuche">
        <h2>Wie Patienten Zahnärzte suchen</h2>
        <AutoLexikonText>
          <p>
            Die Suche nach einem Zahnarzt hat sich grundlegend verändert. Empfehlungen 
            von Freunden spielen zwar noch eine Rolle, aber die finale Entscheidung 
            fällt immer häufiger nach einer Google-Recherche.
          </p>
          <h3>Typische Suchszenarien</h3>
          <ul>
            <li><strong>Umzug:</strong> "Zahnarzt [neuer Wohnort]" – dringend neuen Arzt gesucht</li>
            <li><strong>Unzufriedenheit:</strong> "Guter Zahnarzt in der Nähe" – Wechselwunsch</li>
            <li><strong>Spezialbedarf:</strong> "Implantologe [Stadt]", "Kinderzahnarzt"</li>
            <li><strong>Notfall:</strong> "Zahnarzt Notdienst", "Zahnschmerzen Wochenende"</li>
          </ul>
          <h3>Entscheidungsfaktoren</h3>
          <p>
            Nach der Suche entscheiden Patienten anhand von Bewertungen, Fotos der Praxis, 
            angebotenen Leistungen und der Erreichbarkeit. Eine professionelle Online-Präsenz 
            ist daher unverzichtbar.
          </p>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Google Business für Zahnarztpraxen optimieren</h2>
        <AutoLexikonText>
          <p>
            Ihr Google Business Profil ist oft der erste Kontaktpunkt mit potenziellen 
            Patienten. Es muss professionell, vollständig und vertrauenswürdig wirken.
          </p>
          <h3>Wichtige Kategorien</h3>
          <ul>
            <li><strong>Hauptkategorie:</strong> "Zahnarzt" oder "Zahnklinik"</li>
            <li><strong>Zusatzkategorien:</strong> Implantologe, Kinderzahnarzt, Kieferorthopäde, Oralchirurg</li>
          </ul>
          <h3>Praxisfotos, die überzeugen</h3>
          <ul>
            <li>Heller, moderner Empfangsbereich</li>
            <li>Saubere, einladende Behandlungsräume</li>
            <li>Moderne Ausstattung (Röntgen, Laser)</li>
            <li>Freundliches Praxisteam</li>
            <li>Barrierefreier Zugang (falls vorhanden)</li>
          </ul>
          <h3>Öffnungszeiten und Notdienst</h3>
          <p>
            Tragen Sie alle Öffnungszeiten korrekt ein. Wenn Sie Notdienst-Zeiten haben, 
            nutzen Sie die "Besondere Öffnungszeiten"-Funktion.
          </p>
        </AutoLexikonText>
      </section>

      <section id="behandlungs-keywords">
        <h2>Behandlungs-Keywords strategisch nutzen</h2>
        <AutoLexikonText>
          <p>
            Patienten suchen oft nach spezifischen Behandlungen. Diese Keywords sind 
            besonders wertvoll, weil sie auf konkreten Bedarf hinweisen.
          </p>
          <h3>Hochwertige Behandlungs-Keywords</h3>
          <ul>
            <li><strong>Implantologie:</strong> Zahnimplantat, Implantate Kosten, All-on-4</li>
            <li><strong>Ästhetik:</strong> Bleaching, Veneers, unsichtbare Zahnspange</li>
            <li><strong>Prophylaxe:</strong> Professionelle Zahnreinigung, PZR</li>
            <li><strong>Angstpatienten:</strong> Zahnarzt für Angstpatienten, Behandlung unter Narkose</li>
            <li><strong>Kinderzahnheilkunde:</strong> Kinderzahnarzt, Milchzahn Behandlung</li>
          </ul>
          <h3>Lokale Keyword-Kombinationen</h3>
          <p>
            Kombinieren Sie Behandlungen mit Ihrem Standort: "Zahnimplantat [Stadt]", 
            "Invisalign [Stadtteil]", "Bleaching [Region]".
          </p>
        </AutoLexikonText>
      </section>

      <section id="bewertungsmanagement">
        <h2>Bewertungsmanagement für Zahnärzte</h2>
        <AutoLexikonText>
          <p>
            Bewertungen sind für Zahnärzte besonders wichtig. Patienten vertrauen auf 
            Erfahrungsberichte anderer, bevor sie einen Behandler wählen.
          </p>
          <h3>Bewertungen ethisch sammeln</h3>
          <ul>
            <li>Bitten Sie zufriedene Patienten nach erfolgreicher Behandlung</li>
            <li>Senden Sie eine freundliche E-Mail mit direktem Bewertungslink</li>
            <li>QR-Code im Wartezimmer oder an der Rezeption</li>
            <li>Keine Anreize oder Rabatte für Bewertungen anbieten</li>
          </ul>
          <h3>Auf Bewertungen antworten</h3>
          <p>
            Antworten Sie auf alle Bewertungen professionell. Bei negativen Bewertungen 
            wichtig: Niemals Patientendaten oder Behandlungsdetails öffentlich erwähnen – 
            das verletzt die Schweigepflicht!
          </p>
          <h3>Umgang mit negativen Bewertungen</h3>
          <ul>
            <li>Sachlich und empathisch antworten</li>
            <li>Zum persönlichen Gespräch einladen</li>
            <li>Keine Rechtfertigungen oder Schuldzuweisungen</li>
            <li>Bei falschen Tatsachenbehauptungen: Löschung beantragen</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="website-optimierung">
        <h2>Praxis-Website für lokale Suchen optimieren</h2>
        <AutoLexikonText>
          <p>
            Ihre Website sollte sowohl für Suchmaschinen als auch für Patienten 
            optimal gestaltet sein.
          </p>
          <h3>Wichtige Seiten für Zahnarzt-Websites</h3>
          <ul>
            <li><strong>Leistungsseiten:</strong> Für jede Behandlung eine eigene Seite</li>
            <li><strong>Team-Seite:</strong> Vorstellung der Zahnärzte und des Praxisteams</li>
            <li><strong>Über uns:</strong> Geschichte, Philosophie, Qualifikationen</li>
            <li><strong>Kontakt:</strong> Adresse, Telefon, Anfahrt, Online-Terminbuchung</li>
            <li><strong>Notdienst:</strong> Informationen zur Erreichbarkeit bei Notfällen</li>
          </ul>
          <h3>Technische SEO-Basics</h3>
          <ul>
            <li>Mobile-optimierte Darstellung</li>
            <li>Schnelle Ladezeiten</li>
            <li>SSL-Zertifikat (https)</li>
            <li>Strukturierte Daten (LocalBusiness Schema)</li>
            <li>Google Maps Einbindung</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="lokale-sichtbarkeit">
        <h2>Lokale Sichtbarkeit erhöhen</h2>
        <AutoLexikonText>
          <h3>Lokale Verzeichnisse für Zahnärzte</h3>
          <ul>
            <li>Jameda (wichtigstes Arztportal in DACH)</li>
            <li>Doctolib</li>
            <li>Sanego</li>
            <li>Das Örtliche, Gelbe Seiten</li>
            <li>Regionale Gesundheitsportale</li>
          </ul>
          <h3>NAP-Konsistenz beachten</h3>
          <p>
            Achten Sie darauf, dass Name, Adresse und Telefonnummer überall identisch sind. 
            Inkonsistenzen verwirren Google und verschlechtern Ihr Ranking.
          </p>
          <h3>Lokales Content-Marketing</h3>
          <ul>
            <li>Blog-Artikel zu häufigen Patientenfragen</li>
            <li>Tipps zur Zahnpflege</li>
            <li>Informationen zu neuen Behandlungsmethoden</li>
            <li>Lokale News und Praxis-Updates</li>
          </ul>
        </AutoLexikonText>
      </section>

      {miniSuccessStories.zahnarzt?.map((story, i) => (
        <MiniSuccessStory key={i} story={story} />
      ))}

      <IndustryLandingCTA industry="arztpraxis" />

      {industryStats.zahnarzt?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.zahnarzt} />

      <IndustryBenchmarkTable data={industryBenchmarkData.zahnarzt} />

      <IndustryComparisonTable data={industryComparisonData.zahnarzt} />

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Dürfen Zahnärzte aktiv um Bewertungen bitten?</AccordionTrigger>
            <AccordionContent>
              Ja, Sie dürfen Patienten freundlich um eine Bewertung bitten. Wichtig ist, 
              dass Sie keine Gegenleistung anbieten und die Entscheidung dem Patienten 
              überlassen. Ein Hinweis nach erfolgreicher Behandlung ist zulässig.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Wie wichtig ist Jameda für Zahnärzte?</AccordionTrigger>
            <AccordionContent>
              Jameda ist in Deutschland das wichtigste Arzt-Bewertungsportal und hat eine 
              hohe Sichtbarkeit bei Google. Viele Patienten nutzen es aktiv zur Arztsuche. 
              Ein gepflegtes Jameda-Profil ist daher empfehlenswert.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Fotos sollte ich bei Google Business hochladen?</AccordionTrigger>
            <AccordionContent>
              Zeigen Sie helle, moderne Praxisräume, Ihr freundliches Team und moderne 
              Ausstattung. Vermeiden Sie Fotos von Behandlungen oder Patienten (Datenschutz!). 
              Qualitativ hochwertige Bilder schaffen Vertrauen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie kann ich Notfall-Patienten erreichen?</AccordionTrigger>
            <AccordionContent>
              Optimieren Sie für Keywords wie "Zahnarzt Notdienst [Stadt]" oder 
              "Zahnschmerzen Wochenende [Stadt]". Tragen Sie Ihre Notdienst-Zeiten 
              bei Google Business ein. Notfall-Patienten werden oft zu Stammpatienten.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2>Praxisbeispiel: Zahnarztpraxis steigert Online-Sichtbarkeit</h2>
        {industryCaseStudies.zahnarzt.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <ReviewAcquisitionScripts
        industries={["zahnarzt"]}
        title="Bewertungs-Scripts fuer Zahnarztpraxen"
        description="Kopierfertige Texte fuer Zahnaerzte: Am Empfang und per SMS nach der Prophylaxe."
      />

      <ReviewEmailTemplates
        industries={["zahnarzt"]}
        title="E-Mail-Vorlagen fuer Zahnarzt-Bewertungen"
        description="Datenschutzkonforme E-Mail-Templates fuer Zahnarztpraxen – nach der Zahnreinigung oder Behandlung."
      />

      <SmsReviewTemplates
        industries={["zahnarzt"]}
        title="SMS-Vorlagen fuer Zahnarzt-Bewertungen"
        description="Datenschutzkonforme SMS-Templates fuer Zahnarztpraxen mit Zeichenzaehler."
      />

      <SearchIntentAnalysis config={searchIntentConfigs.zahnarzt} />
      <IndustryKeywordOpportunities config={industryKeywordConfigs.zahnarzt} />
      <IndustryRankingChallenges config={industryRankingConfigs.zahnarzt} />
      <ContentUpgradeSection config={contentUpgradeConfigs.zahnarzt} />
      <HelpfulnessWidget articleSlug="local-seo-zahnarzt" />

      <SourcesSection sources={[
        { title: "KZBV: Marketing für Zahnarztpraxen", url: "https://www.kzbv.de/" },
        { title: "Google: Healthcare Business Guidelines", url: "https://support.google.com/business/answer/9798848" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoZahnarzt;
