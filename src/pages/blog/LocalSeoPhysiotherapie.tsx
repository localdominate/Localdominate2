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
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import IndustryBenchmarkTable from "@/components/blog/IndustryBenchmarkTable";
import { industryBenchmarkData } from "@/data/industryBenchmarkData";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoPhysiotherapie = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-physiotherapie", language)!;

  const tocItems = [
    { id: "warum-local-seo", title: "Warum Local SEO für Therapeuten?" },
    { id: "google-business", title: "Google Business Profil optimieren" },
    { id: "behandlungen-keywords", title: "Behandlungen als Keywords nutzen" },
    { id: "patientenbewertungen", title: "Patientenbewertungen gewinnen" },
    { id: "lokale-landingpages", title: "Standort-Landingpages erstellen" },
    { id: "heilpraktiker-besonderheiten", title: "Besonderheiten für Heilpraktiker" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "85% der Physiotherapie-Patienten suchen online nach Praxen in ihrer Nähe",
    "Behandlungsspezifische Keywords bringen qualifizierte Patienten",
    "Positive Bewertungen sind der wichtigste Vertrauensfaktor",
    "Spezialisierungen klar kommunizieren erhöht die Conversion"
  ];

  const faqItems = [
    { question: "Brauche ich als Physiotherapeut wirklich SEO?", answer: "Ja! 85% der Patienten suchen online nach Therapeuten in ihrer Nähe. Ohne SEO gehen diese Patienten zur Konkurrenz." },
    { question: "Welche Google Business Kategorie ist richtig?", answer: "'Physiotherapeut' als Hauptkategorie. Als Zusatzkategorien eignen sich 'Sportphysiotherapie' oder 'Lymphdrainage-Therapeut'." },
    { question: "Wie gehe ich mit negativen Bewertungen um?", answer: "Antworten Sie sachlich und professionell. Bedanken Sie sich für das Feedback, zeigen Sie Verständnis und bieten Sie ein persönliches Gespräch an. Erwähnen Sie niemals Patientendaten." },
    { question: "Lohnt sich SEO auch ohne eigene Website?", answer: "Ein optimiertes Google Business Profil bringt auch ohne Website Patienten. Allerdings erhöht eine eigene Website Ihre Chancen erheblich." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Physiotherapie Praxis mit Google Maps Suche"
        caption="Lokale Sichtbarkeit ist entscheidend für Therapeuten und Heilpraktiker"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-local-seo">
        <h2>Warum Local SEO für Physiotherapeuten unverzichtbar ist</h2>
        <AutoLexikonText>
          <p>
            Physiotherapie ist ein lokales Geschäft. Patienten suchen nach Praxen in ihrer 
            unmittelbaren Umgebung – niemand fährt 50 Kilometer zur Krankengymnastik. Genau 
            deshalb ist Local SEO für Physiotherapeuten so wichtig.
          </p>
          <p>
            Die typische Patientenreise beginnt mit einer Google-Suche wie "Physiotherapie 
            in meiner Nähe" oder "Krankengymnastik [Stadtname]". Wer hier nicht sichtbar ist, 
            verliert potenzielle Patienten an die Konkurrenz.
          </p>
          <h3>Die Vorteile für Ihre Praxis</h3>
          <ul>
            <li><strong>Mehr Neupatienten:</strong> Bessere Sichtbarkeit führt zu mehr Anfragen</li>
            <li><strong>Qualifizierte Patienten:</strong> Menschen suchen gezielt nach Ihren Behandlungen</li>
            <li><strong>Kosteneffizient:</strong> Organische Reichweite ohne Werbekosten</li>
            <li><strong>Vertrauen aufbauen:</strong> Positive Bewertungen überzeugen neue Patienten</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Google Business Profil für Physiotherapeuten optimieren</h2>
        <AutoLexikonText>
          <p>
            Ihr Google Business Profil ist Ihre digitale Visitenkarte. Hier entscheiden 
            potenzielle Patienten, ob sie Sie kontaktieren oder zur nächsten Praxis scrollen.
          </p>
          <h3>Wichtige Kategorien für Therapeuten</h3>
          <ul>
            <li><strong>Hauptkategorie:</strong> Physiotherapeut oder Krankengymnastik</li>
            <li><strong>Zusatzkategorien:</strong> Manuelle Therapie, Sportphysiotherapie, Lymphdrainage</li>
          </ul>
          <h3>Beschreibung optimieren</h3>
          <p>
            Nutzen Sie die 750 Zeichen für Ihre Unternehmensbeschreibung optimal. Erwähnen 
            Sie Ihre Spezialisierungen, Behandlungsmethoden und was Ihre Praxis besonders macht.
          </p>
          <h3>Fotos, die überzeugen</h3>
          <ul>
            <li>Helle, einladende Praxisräume</li>
            <li>Moderne Behandlungsgeräte</li>
            <li>Teamfotos (mit Einverständnis)</li>
            <li>Barrierefreier Zugang falls vorhanden</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="behandlungen-keywords">
        <h2>Behandlungen als Keywords nutzen</h2>
        <AutoLexikonText>
          <p>
            Patienten suchen oft nach spezifischen Behandlungen, nicht nur nach "Physiotherapie". 
            Diese Suchanfragen sind besonders wertvoll, weil sie auf konkreten Bedarf hindeuten.
          </p>
          <h3>Relevante Keyword-Gruppen</h3>
          <ul>
            <li><strong>Behandlungsmethoden:</strong> Manuelle Therapie, Krankengymnastik, Lymphdrainage, Bobath</li>
            <li><strong>Beschwerden:</strong> Rückenschmerzen Behandlung, Schulterschmerzen Therapie, Knieschmerzen</li>
            <li><strong>Zielgruppen:</strong> Sportphysiotherapie, Kinderphysiotherapie, Seniorengymnastik</li>
            <li><strong>Ergänzend:</strong> Hausbesuche Physiotherapie, Rezeptfreie Krankengymnastik</li>
          </ul>
          <h3>Keywords richtig einsetzen</h3>
          <p>
            Erstellen Sie für jede Spezialisierung eine eigene Unterseite auf Ihrer Website. 
            So können Sie für verschiedene Suchanfragen gefunden werden und zeigen gleichzeitig 
            Ihre Expertise.
          </p>
        </AutoLexikonText>
      </section>

      <section id="patientenbewertungen">
        <h2>Patientenbewertungen gewinnen</h2>
        <AutoLexikonText>
          <p>
            Bewertungen sind für Gesundheitsdienstleister besonders wichtig. Patienten 
            vertrauen auf die Erfahrungen anderer, bevor sie einen Therapeuten aufsuchen.
          </p>
          <h3>Bewertungen ethisch einwerben</h3>
          <ul>
            <li>Fragen Sie zufriedene Patienten persönlich am Ende der Behandlungsserie</li>
            <li>Senden Sie eine freundliche E-Mail mit direktem Link zur Bewertung</li>
            <li>Legen Sie einen QR-Code in der Praxis aus</li>
            <li>Vermeiden Sie jegliche Form von Incentives (ist bei Heilberufen unzulässig)</li>
          </ul>
          <h3>Auf Bewertungen antworten</h3>
          <p>
            Antworten Sie auf alle Bewertungen professionell und patientenorientiert. 
            Bei negativen Bewertungen: Sachlich bleiben und Gesprächsbereitschaft zeigen – 
            aber niemals Patientendaten öffentlich erwähnen!
          </p>
        </AutoLexikonText>
      </section>

      <section id="lokale-landingpages">
        <h2>Standort-Landingpages erstellen</h2>
        <AutoLexikonText>
          <p>
            Wenn Sie Patienten aus verschiedenen Stadtteilen oder Nachbarorten behandeln, 
            können lokale Landingpages Ihre Reichweite erhöhen.
          </p>
          <h3>Struktur einer lokalen Landingpage</h3>
          <ul>
            <li>Überschrift mit Ortsname: "Physiotherapie in [Stadtteil/Ort]"</li>
            <li>Anfahrtsbeschreibung und Parkmöglichkeiten</li>
            <li>ÖPNV-Anbindung</li>
            <li>Besonderheiten für die lokale Zielgruppe</li>
            <li>Lokale Kooperationspartner (Ärzte, Fitnessstudios)</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="heilpraktiker-besonderheiten">
        <h2>Besonderheiten für Heilpraktiker</h2>
        <AutoLexikonText>
          <p>
            Heilpraktiker haben spezielle Anforderungen an ihr Local SEO. Die Behandlungen 
            sind vielfältiger und müssen klar kommuniziert werden.
          </p>
          <h3>Spezifische Keywords für Heilpraktiker</h3>
          <ul>
            <li>Naturheilkunde, Akupunktur, Homöopathie</li>
            <li>Osteopathie, Chiropraktik</li>
            <li>Traditionelle Chinesische Medizin (TCM)</li>
            <li>Heilpraktiker für Psychotherapie</li>
          </ul>
          <h3>Vertrauen aufbauen</h3>
          <p>
            Zeigen Sie Ihre Qualifikationen deutlich. Zertifikate, Fortbildungen und 
            Mitgliedschaften in Fachverbänden schaffen Vertrauen bei potenziellen Patienten.
          </p>
        </AutoLexikonText>
      </section>

      <IndustryLandingCTA industry="arztpraxis" />

      {industryStats.physiotherapie?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.physiotherapie} />

      <IndustryBenchmarkTable data={industryBenchmarkData.physiotherapie} />

      <IndustryComparisonTable data={industryComparisonData.physiotherapie} />

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Dürfen Physiotherapeuten aktiv um Bewertungen bitten?</AccordionTrigger>
            <AccordionContent>
              Ja, Sie dürfen Patienten freundlich um eine Bewertung bitten. Wichtig ist, 
              dass Sie keine Gegenleistung anbieten (wie Rabatte) und die Entscheidung dem 
              Patienten überlassen. Ein einfacher Hinweis am Ende der Behandlung ist zulässig.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Welche Kategorie wähle ich bei Google Business?</AccordionTrigger>
            <AccordionContent>
              Wählen Sie "Physiotherapeut" oder "Krankengymnastik" als Hauptkategorie. 
              Als Zusatzkategorien können Sie Ihre Spezialisierungen angeben, z.B. 
              "Sportphysiotherapie" oder "Lymphdrainage-Therapeut".
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie gehe ich mit negativen Bewertungen um?</AccordionTrigger>
            <AccordionContent>
              Antworten Sie sachlich und professionell. Bedanken Sie sich für das Feedback, 
              zeigen Sie Verständnis und bieten Sie ein persönliches Gespräch an. Wichtig: 
              Erwähnen Sie niemals Patientendaten oder Behandlungsdetails in öffentlichen Antworten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Lohnt sich SEO auch ohne eigene Website?</AccordionTrigger>
            <AccordionContent>
              Ein optimiertes Google Business Profil bringt auch ohne Website Patienten. 
              Allerdings erhöht eine eigene Website Ihre Chancen erheblich, da Sie mehr 
              Inhalte und Keywords abdecken können. Langfristig sollten Sie beides nutzen.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Physio-Praxis setzt auf Spezialisierung</h2>
        {industryCaseStudies.physiotherapie.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-physiotherapie" />

      <SourcesSection sources={[
        { title: "Google: Healthcare Business Profiles", url: "https://support.google.com/business/answer/9798848" },
        { title: "IFK: Marketing für Physiotherapeuten", url: "https://www.ifk.de/" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoPhysiotherapie;
