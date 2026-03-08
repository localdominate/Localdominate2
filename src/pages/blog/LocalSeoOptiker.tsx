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

const LocalSeoOptiker = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-optiker", language)!;

  const tocItems = [
    { id: "kundensuche", title: "Wie Kunden Optiker suchen" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "keywords", title: "Keywords für Optiker & Hörakustiker" },
    { id: "bewertungen", title: "Bewertungen sammeln" },
    { id: "website", title: "Website-Optimierung" },
    { id: "hoergeraete", title: "Besonderheiten für Hörakustiker" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Optiker und Hörakustiker profitieren stark von lokaler Sichtbarkeit",
    "Spezialisierungs-Keywords bringen qualifizierte Kunden",
    "Bewertungen spielen bei Gesundheitsdienstleistungen eine große Rolle",
    "Kombinierte Angebote (Optik + Hörakustik) erweitern die Reichweite"
  ];

  const faqItems = [
    { question: "Sollte ich meine Brillenmarken bei Google zeigen?", answer: "Ja, definitiv! Viele Kunden suchen gezielt nach bestimmten Marken wie Ray-Ban, Oakley oder Rodenstock. Listen Sie Ihre Marken bei den Produkten in Google Business und auf Ihrer Website." },
    { question: "Wie wichtig ist der Führerschein-Sehtest für SEO?", answer: "Sehr wichtig! 'Führerschein Sehtest [Stadt]' wird häufig gesucht und bringt neue Kunden, die später auch Brillen kaufen könnten." },
    { question: "Sollte ich Preise auf der Website zeigen?", answer: "Bei Brillen ist das schwierig, da die Preise stark variieren. Sie können Preisspannen angeben. Bei Standard-Services wie Sehtests können Sie konkrete Preise nennen." },
    { question: "Wie unterscheide ich mich von Ketten-Optikern?", answer: "Betonen Sie persönliche Beratung, lokale Präsenz und individuellen Service. Zeigen Sie Ihr Team und Ihre Expertise. Sammeln Sie ausführliche Bewertungen." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Optiker-Geschäft mit modernen Brillen"
        caption="Lokale Sichtbarkeit ist entscheidend für Optiker und Hörakustiker"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="kundensuche">
        <h2>Wie Kunden Optiker und Hörakustiker suchen</h2>
        <AutoLexikonText>
          <p>
            Die Suche nach einem Optiker oder Hörakustiker beginnt fast immer online. 
            Ob neue Brille, Kontaktlinsen oder Hörgerät – Kunden recherchieren zuerst, 
            bevor sie ein Geschäft betreten.
          </p>
          <h3>Typische Suchszenarien</h3>
          <ul>
            <li><strong>Dringend:</strong> "Brille reparieren in der Nähe", "Kontaktlinsen sofort"</li>
            <li><strong>Geplant:</strong> "Bester Optiker [Stadt]", "Gleitsichtbrille Beratung"</li>
            <li><strong>Speziell:</strong> "Kinderbrillen", "Sportbrillen", "Hörgerät unsichtbar"</li>
            <li><strong>Preisorientiert:</strong> "Günstiger Optiker", "Hörgerät Krankenkasse"</li>
          </ul>
          <h3>Entscheidungsfaktoren</h3>
          <p>
            Kunden achten auf Bewertungen, angebotene Marken, Spezialisierung und 
            natürlich die Nähe zum Wohnort oder Arbeitsplatz.
          </p>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Google Business für Optiker optimieren</h2>
        <AutoLexikonText>
          <h3>Die richtigen Kategorien wählen</h3>
          <ul>
            <li><strong>Hauptkategorie:</strong> "Optiker" oder "Augenoptiker"</li>
            <li><strong>Zusatzkategorien:</strong> Kontaktlinsenanbieter, Sonnenbrillengeschäft, Hörakustiker</li>
          </ul>
          <h3>Produkte im Profil zeigen</h3>
          <ul>
            <li>Brillenmarken mit Bildern präsentieren</li>
            <li>Kontaktlinsen-Marken listen</li>
            <li>Spezialprodukte hervorheben (Sportbrillen, Bildschirmarbeitsplatzbrillen)</li>
          </ul>
          <h3>Services definieren</h3>
          <ul>
            <li>Sehtest, Augendruckmessung</li>
            <li>Brillenanpassung, Kontaktlinsenanpassung</li>
            <li>Reparaturservice, Express-Verglasung</li>
            <li>Führerschein-Sehtest</li>
          </ul>
          <h3>Öffnungszeiten und Besonderheiten</h3>
          <p>
            Geben Sie genaue Öffnungszeiten an. Erwähnen Sie, wenn Sie Samstags geöffnet 
            haben – das ist ein großer Wettbewerbsvorteil.
          </p>
        </AutoLexikonText>
      </section>

      <section id="keywords">
        <h2>Keywords für Optiker & Hörakustiker</h2>
        <AutoLexikonText>
          <h3>Produkt-Keywords</h3>
          <ul>
            <li>Brillen: Gleitsichtbrille, Lesebrille, Sonnenbrille, Arbeitsplatzbrille</li>
            <li>Kontaktlinsen: Tageslinsen, Monatslinsen, farbige Kontaktlinsen</li>
            <li>Hörgeräte: Im-Ohr-Hörgerät, Hinter-dem-Ohr-Hörgerät, unsichtbares Hörgerät</li>
          </ul>
          <h3>Service-Keywords</h3>
          <ul>
            <li>Sehtest, Augenuntersuchung, Augendruckmessung</li>
            <li>Brillenreparatur, Brillenanpassung</li>
            <li>Hörtest, Hörgeräte-Anpassung</li>
          </ul>
          <h3>Lokale Kombinationen</h3>
          <p>
            Kombinieren Sie alle Keywords mit Ihrem Standort: "Gleitsichtbrille [Stadt]", 
            "Hörtest [Stadtteil]", "Optiker [Region]".
          </p>
        </AutoLexikonText>
      </section>

      <section id="bewertungen">
        <h2>Bewertungen sammeln und nutzen</h2>
        <AutoLexikonText>
          <p>
            Bewertungen sind besonders wichtig für Gesundheitsdienstleister. Kunden 
            vertrauen auf Erfahrungen anderer bei der Wahl ihres Optikers.
          </p>
          <h3>Wann um Bewertungen bitten?</h3>
          <ul>
            <li>Nach erfolgreicher Brillenanpassung</li>
            <li>Wenn der Kunde seine neue Brille begeistert abholt</li>
            <li>Nach positiver Hörgeräte-Einstellung</li>
            <li>Nach schneller Reparatur</li>
          </ul>
          <h3>So bitten Sie um Bewertungen</h3>
          <ul>
            <li>Persönliche Ansprache beim Abholen der Brille</li>
            <li>QR-Code auf der Rechnung oder Visitenkarte</li>
            <li>Follow-up E-Mail einige Tage nach dem Kauf</li>
          </ul>
          <h3>Auf Bewertungen antworten</h3>
          <p>
            Bedanken Sie sich für positive Bewertungen. Bei negativen Bewertungen 
            bleiben Sie sachlich und bieten Lösungen an.
          </p>
        </AutoLexikonText>
      </section>

      <section id="website">
        <h2>Website-Optimierung für Optiker</h2>
        <AutoLexikonText>
          <h3>Wichtige Seiten</h3>
          <ul>
            <li><strong>Startseite:</strong> Überblick über alle Leistungen und Standort</li>
            <li><strong>Brillen-Seite:</strong> Marken, Typen, Beratung</li>
            <li><strong>Kontaktlinsen-Seite:</strong> Verschiedene Linsentypen</li>
            <li><strong>Services:</strong> Sehtest, Reparatur, Anpassung</li>
            <li><strong>Über uns:</strong> Team, Qualifikationen, Geschichte</li>
          </ul>
          <h3>Lokale SEO-Elemente</h3>
          <ul>
            <li>Adresse und Öffnungszeiten auf jeder Seite</li>
            <li>Google Maps Einbindung</li>
            <li>Lokale Keywords in Texten und Meta-Daten</li>
            <li>Schema-Markup für LocalBusiness</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="hoergeraete">
        <h2>Besonderheiten für Hörakustiker</h2>
        <AutoLexikonText>
          <p>
            Hörakustiker haben spezielle Anforderungen an ihr Marketing, da die 
            Zielgruppe oft älter ist und andere Suchgewohnheiten hat.
          </p>
          <h3>Spezifische Keywords</h3>
          <ul>
            <li>Hörtest kostenlos, Hörgeräte Beratung</li>
            <li>Hörgerät Krankenkasse, Zuzahlung Hörgerät</li>
            <li>Unsichtbares Hörgerät, modernes Hörgerät</li>
            <li>Hörgeräte Service, Hörgeräte Reparatur</li>
          </ul>
          <h3>Besondere Kommunikation</h3>
          <ul>
            <li>Große, gut lesbare Schrift auf der Website</li>
            <li>Klare, einfache Sprache</li>
            <li>Telefonnummer gut sichtbar (viele rufen lieber an)</li>
            <li>Kostenlose Erstberatung hervorheben</li>
          </ul>
        </AutoLexikonText>
      </section>

      <IndustryLandingCTA industry="arztpraxis" />

      {industryStats.optiker?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.optiker} />

      <IndustryBenchmarkTable data={industryBenchmarkData.optiker} />

      <IndustryComparisonTable data={industryComparisonData.optiker} />

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sollte ich meine Brillenmarken bei Google zeigen?</AccordionTrigger>
            <AccordionContent>
              Ja, definitiv! Viele Kunden suchen gezielt nach bestimmten Marken wie 
              Ray-Ban, Oakley oder Rodenstock. Listen Sie Ihre Marken bei den Produkten 
              in Google Business und auf Ihrer Website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Wie wichtig ist der Führerschein-Sehtest für SEO?</AccordionTrigger>
            <AccordionContent>
              Sehr wichtig! "Führerschein Sehtest [Stadt]" wird häufig gesucht und 
              bringt neue Kunden, die später auch Brillen kaufen könnten. Erwähnen 
              Sie diesen Service prominent auf Ihrer Website und bei Google Business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sollte ich Preise auf der Website zeigen?</AccordionTrigger>
            <AccordionContent>
              Bei Brillen ist das schwierig, da die Preise stark variieren. Sie können 
              Preisspannen angeben ("Gleitsichtgläser ab X €") oder auf die persönliche 
              Beratung verweisen. Bei Standard-Services wie Sehtests können Sie 
              konkrete Preise nennen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie unterscheide ich mich von Ketten-Optikern?</AccordionTrigger>
            <AccordionContent>
              Betonen Sie persönliche Beratung, lokale Präsenz und individuellen 
              Service. Zeigen Sie Ihr Team und Ihre Expertise. Sammeln Sie 
              ausführliche Bewertungen, die die persönliche Betreuung hervorheben.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Einzeloptiker gegen Ketten</h2>
        {industryCaseStudies.optiker.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <IndustryKeywordOpportunities config={industryKeywordConfigs.optiker} />
      <IndustryRankingChallenges config={industryRankingConfigs.optiker} />
      <HelpfulnessWidget articleSlug="local-seo-optiker" />

      <SourcesSection sources={[
        { title: "ZVA: Augenoptik in Deutschland", url: "https://www.zva.de/" },
        { title: "Google Business für Gesundheitsdienstleister", url: "https://support.google.com/business/answer/9798848" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoOptiker;
