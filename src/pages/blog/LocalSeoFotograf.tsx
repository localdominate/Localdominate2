import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Heart, Building, Calendar, Star, Image, Search, MapPin } from "lucide-react";

const LocalSeoFotograf = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-fotograf", language)!;

  const tocItems = [
    { id: "kundensuche", title: "Wie Kunden Fotografen suchen" },
    { id: "google-business", title: "Google Business für Fotografen" },
    { id: "portfolio-seo", title: "Portfolio-SEO Strategien" },
    { id: "hochzeit-keywords", title: "Hochzeits-Keywords" },
    { id: "bewertungen", title: "Bewertungen & Testimonials" },
    { id: "website", title: "Website-Optimierung" },
    { id: "lokale-praesenz", title: "Lokale Präsenz stärken" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Fotografen werden stark nach Spezialisierung und Region gesucht",
    "Ein optimiertes Portfolio ist das wichtigste SEO-Asset",
    "Hochzeits- und Event-Keywords haben Saison-Peaks",
    "Google Business Bilder zeigen Ihren Stil auf den ersten Blick",
    "Lokale Partnerschaften bringen hochwertige Backlinks"
  ];

  const photographyNiches = [
    { icon: Heart, name: "Hochzeitsfotografie", keywords: ["Hochzeitsfotograf [Stadt]", "Brautpaarshooting", "Standesamt Fotograf"] },
    { icon: Building, name: "Business & Corporate", keywords: ["Business Fotograf", "Mitarbeiterfotos", "Firmenfotos"] },
    { icon: Camera, name: "Portrait & Familie", keywords: ["Familienfotograf", "Babyfotos", "Schwangerschaftsshooting"] },
    { icon: Calendar, name: "Events & Feiern", keywords: ["Eventfotograf", "Geburtstagsfotograf", "Firmenevent Fotograf"] }
  ];

  const faqItems = [
    { question: "Wie wichtig ist Instagram für Fotografen-SEO?", answer: "Instagram selbst bringt keine SEO-Vorteile (Links sind nofollow), aber es ist ein wichtiger Verkaufskanal. Die beste Strategie: Nutzen Sie Instagram für Reichweite und leiten Sie Interessenten auf Ihre SEO-optimierte Website." },
    { question: "Sollte ich meine Preise online zeigen?", answer: "Ja, zumindest Orientierungspreise. 'Ab 1.500€' oder Preisspannen helfen sowohl Kunden als auch Ihnen: Sie ziehen die richtigen Anfragen an und können für Keywords wie 'Hochzeitsfotograf Preise' ranken." },
    { question: "Wie viele Bilder sollten im Portfolio sein?", answer: "Qualität vor Quantität! 50-100 Ihrer absolut besten Bilder sind besser als 500 mittelmäßige. Für SEO wichtiger: Organisieren Sie sie in Kategorien mit beschreibendem Text." },
    { question: "Lohnt sich ein Blog für Fotografen?", answer: "Absolut! Ein Blog mit Shootings, Location-Guides und Tipps bringt kontinuierlich neue Besucher. Jede veröffentlichte Hochzeit ist Content für Keywords wie 'Hochzeit [Location]'." },
    { question: "Wie lange dauert es, bis SEO für Fotografen wirkt?", answer: "Bei lokalen Keywords können Sie innerhalb von 3-6 Monaten gute Rankings erreichen. Für kompetitive Keywords in Großstädten kann es 6-12 Monate dauern." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Fotograf bei einer Hochzeit mit Kamera"
        caption="Lokale Sichtbarkeit bringt Fotografen kontinuierlich neue Buchungsanfragen"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="kundensuche">
        <h2>Wie Kunden Fotografen suchen</h2>
        <AutoLexikonText>
          <p>
            Die Suche nach Fotografen ist stark nischenorientiert. Kunden suchen 
            nicht einfach nach "Fotograf", sondern nach spezifischen Anlässen und 
            Stilen – kombiniert mit ihrem Standort.
          </p>
          
          <h3>Die häufigsten Suchtypen</h3>
          <ul>
            <li><strong>Anlassbezogen:</strong> "Hochzeitsfotograf München", "Babyfotograf Hamburg"</li>
            <li><strong>Stilbezogen:</strong> "Natürliche Hochzeitsfotos", "Vintage Fotograf"</li>
            <li><strong>Locationbezogen:</strong> "Outdoor Shooting Köln", "Studio Fotograf Berlin"</li>
            <li><strong>Preisbezogen:</strong> "Günstiger Fotograf Hochzeit", "Fotograf Preis pro Stunde"</li>
          </ul>

          <h3>Das Suchverhalten verstehen</h3>
          <p>
            Anders als bei Notdiensten planen Kunden Fotografen-Buchungen oft 
            Monate im Voraus. Die Customer Journey ist länger: Kunden vergleichen 
            Portfolios, lesen Bewertungen und kontaktieren mehrere Fotografen.
          </p>
          <p>
            Das bedeutet: Ihre Website muss nicht nur gefunden werden, sondern 
            auch überzeugen. SEO und Conversion-Optimierung gehen Hand in Hand.
          </p>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Google Business für Fotografen optimieren</h2>
        <AutoLexikonText>
          <h3>Die richtige Hauptkategorie</h3>
          <ul>
            <li><strong>Fotograf</strong> – Die allgemeinste Option</li>
            <li><strong>Hochzeitsfotograf</strong> – Wenn dies Ihr Hauptgeschäft ist</li>
            <li><strong>Porträtfotograf</strong> – Für Portrait-Spezialisten</li>
            <li><strong>Gewerbe-Fotograf</strong> – Für Business/Corporate</li>
          </ul>

          <h3>Zusatzkategorien hinzufügen</h3>
          <p>
            Fügen Sie weitere passende Kategorien hinzu: Eventfotograf, 
            Produktfotograf, Videograf (falls Sie auch Videos anbieten).
          </p>

          <h3>Bilder – Ihr wichtigstes Asset</h3>
          <p>
            Bei Fotografen sind Google Business Bilder entscheidend! Sie zeigen 
            Ihren Stil auf den ersten Blick. Laden Sie regelmäßig neue Arbeiten hoch:
          </p>
          <ul>
            <li>10-20 Ihrer besten Arbeiten aus verschiedenen Genres</li>
            <li>Bilder von Ihnen bei der Arbeit (Behind-the-Scenes)</li>
            <li>Ihre Ausrüstung und ggf. Ihr Studio</li>
            <li>Regelmäßig neue Projekte hinzufügen</li>
          </ul>

          <h3>Services eintragen</h3>
          <ul>
            <li>Hochzeitsfotografie (mit Preisspanne)</li>
            <li>Portraitshooting</li>
            <li>Familienshooting</li>
            <li>Business-Fotos / Headshots</li>
            <li>Event-Dokumentation</li>
            <li>Produktfotografie</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="portfolio-seo">
        <h2>Portfolio-SEO: Bilder richtig optimieren</h2>
        <AutoLexikonText>
          <p>
            Ihr Portfolio ist gleichzeitig Verkaufstool und SEO-Asset. 
            Richtig optimiert, kann jedes Bild Traffic bringen.
          </p>

          <h3>Bildoptimierung für SEO</h3>
          <ul>
            <li><strong>Dateinamen:</strong> "hochzeit-fotograf-muenchen-schloss-nymphenburg.jpg" statt "IMG_4523.jpg"</li>
            <li><strong>Alt-Texte:</strong> Beschreibend und mit Keywords: "Brautpaar beim Sonnenuntergang am Starnberger See"</li>
            <li><strong>Bildunterschriften:</strong> Erzählen Sie die Geschichte des Shootings</li>
            <li><strong>Komprimierung:</strong> Schnelle Ladezeiten trotz hoher Qualität</li>
          </ul>

          <h3>Portfolio-Struktur für SEO</h3>
          <ul>
            <li><strong>Kategorie-Seiten:</strong> Separate Seiten für Hochzeiten, Portraits, Events</li>
            <li><strong>Einzelne Projekte:</strong> Vollständige Hochzeiten/Shootings als Galerien mit Text</li>
            <li><strong>Location-Seiten:</strong> "Hochzeitsfotograf Schloss Neuschwanstein"</li>
          </ul>

          <h3>Text zum Portfolio</h3>
          <p>
            Reine Bildergalerien sind für SEO schwierig. Ergänzen Sie:
          </p>
          <ul>
            <li>Kurze Beschreibung jedes Projekts</li>
            <li>Informationen zur Location</li>
            <li>Die Geschichte hinter den Bildern</li>
            <li>Technische Details (für Foto-Enthusiasten)</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="hochzeit-keywords">
        <h2>Hochzeits-Keywords: Die lukrativste Nische</h2>
        <AutoLexikonText>
          <p>
            Hochzeitsfotografie ist oft die profitabelste Nische. Diese Keywords 
            sollten Sie gezielt abdecken:
          </p>

          <h3>Hochzeits-Keyword-Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {photographyNiches.map((niche, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <niche.icon className="h-5 w-5 text-primary" />
                    {niche.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {niche.keywords.map((keyword, kIndex) => (
                      <li key={kIndex} className="flex items-center gap-2">
                        <Search className="h-3 w-3 text-muted-foreground" />
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3>Saisonale Keyword-Strategie</h3>
          <p>
            Hochzeits-Suchen haben klare Peaks: Im Frühjahr werden Fotografen für 
            Sommer-Hochzeiten gesucht. Planen Sie Ihren Content entsprechend:
          </p>
          <ul>
            <li><strong>Januar-März:</strong> "Hochzeitsfotograf 2027 buchen"</li>
            <li><strong>April-Juni:</strong> "Last Minute Hochzeitsfotograf"</li>
            <li><strong>September:</strong> "Herbsthochzeit Fotograf"</li>
            <li><strong>November-Dezember:</strong> "Winterhochzeit Fotograf"</li>
          </ul>

          <h3>Location-basierte Hochzeits-Keywords</h3>
          <ul>
            <li>"Hochzeitsfotograf [beliebte Location]"</li>
            <li>"Standesamt [Stadt] Fotograf"</li>
            <li>"[Schloss/Hotel Name] Hochzeitsfotograf"</li>
            <li>"Destination Wedding Fotograf [Region]"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="bewertungen">
        <h2>Bewertungen & Testimonials</h2>
        <AutoLexikonText>
          <p>
            Bei Fotografen sind Bewertungen besonders wichtig – Kunden vertrauen 
            Ihnen einen der wichtigsten Tage ihres Lebens an.
          </p>

          <h3>Wann um Bewertungen bitten</h3>
          <ul>
            <li><strong>Nach Bildübergabe:</strong> Wenn Kunden begeistert ihre Fotos sehen</li>
            <li><strong>Nach Albumlieferung:</strong> Bei Premium-Paketen</li>
            <li><strong>Zum Jahrestag:</strong> Ein Jahr nach der Hochzeit erinnern</li>
          </ul>

          <h3>Was in Bewertungen erwähnt werden sollte</h3>
          <ul>
            <li>Art des Shootings (für SEO-Keywords)</li>
            <li>Location und Region</li>
            <li>Persönliche Erfahrung mit Ihnen</li>
            <li>Qualität der Bilder</li>
          </ul>

          <h3>Testimonials auf der Website</h3>
          <p>
            Zeigen Sie die besten Bewertungen prominent auf Ihrer Website. 
            Kombinieren Sie Testimonials mit Bildern des jeweiligen Shootings 
            für maximale Glaubwürdigkeit.
          </p>
        </AutoLexikonText>
      </section>

      <section id="website">
        <h2>Website-Optimierung für Fotografen</h2>
        <AutoLexikonText>
          <h3>Wichtige Seiten</h3>
          <ul>
            <li><strong>Portfolio-Kategorien:</strong> Hochzeit, Portrait, Business, Events</li>
            <li><strong>Über mich:</strong> Ihre Geschichte, Ihr Stil, Ihre Persönlichkeit</li>
            <li><strong>Preise:</strong> Zumindest Preisspannen oder "Ab"-Preise</li>
            <li><strong>Kontakt/Buchung:</strong> Einfaches Anfrage-Formular</li>
            <li><strong>Blog:</strong> Shootings, Tipps, Behind-the-Scenes</li>
          </ul>

          <h3>Technische Optimierung</h3>
          <ul>
            <li><strong>Bildkomprimierung:</strong> Schnelle Ladezeiten trotz vieler Bilder</li>
            <li><strong>Lazy Loading:</strong> Bilder erst bei Bedarf laden</li>
            <li><strong>WebP-Format:</strong> Moderne Bildformate nutzen</li>
            <li><strong>Mobile-First:</strong> 60%+ der Besucher kommen mobil</li>
          </ul>

          <h3>Content-Ideen</h3>
          <ul>
            <li>"Was kostet ein Hochzeitsfotograf?" – FAQ-Content</li>
            <li>Komplette Hochzeiten/Shootings als Blog-Posts</li>
            <li>Tipps für Brautpaare: "So bereitet ihr euch auf das Shooting vor"</li>
            <li>Location-Guides: "Die schönsten Hochzeitslocations in [Region]"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="lokale-praesenz">
        <h2>Lokale Präsenz stärken</h2>
        <AutoLexikonText>
          <h3>Lokale Partnerschaften</h3>
          <p>
            Kooperationen mit anderen Hochzeitsdienstleistern bringen 
            Empfehlungen und wertvolle Backlinks:
          </p>
          <ul>
            <li>Hochzeitslocations und Hotels</li>
            <li>Hochzeitsplaner und Wedding Planner</li>
            <li>Brautmodengeschäfte</li>
            <li>Floristen und Dekorateure</li>
            <li>DJs und Bands</li>
          </ul>

          <h3>Lokale Verzeichnisse</h3>
          <ul>
            <li>Hochzeitsportale: Hochzeitswahn, Zankyou, The Perfect Wedding</li>
            <li>Branchenverzeichnisse: Fotografenverbände</li>
            <li>Lokale Empfehlungsplattformen</li>
          </ul>

          <h3>Messen & Events</h3>
          <ul>
            <li>Hochzeitsmessen in Ihrer Region</li>
            <li>Styled Shoots mit anderen Dienstleistern</li>
            <li>Fotografie-Workshops als lokale Authority</li>
          </ul>
        </AutoLexikonText>
      </section>

      <ImplementationRoadmap data={industryImplementationData.fotograf} />

      <IndustryComparisonTable data={industryComparisonData.fotograf} />

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie wichtig ist Instagram für Fotografen-SEO?</AccordionTrigger>
            <AccordionContent>
              Instagram selbst bringt keine SEO-Vorteile (Links sind nofollow), aber 
              es ist ein wichtiger Verkaufskanal. Die beste Strategie: Nutzen Sie 
              Instagram für Reichweite und leiten Sie Interessenten auf Ihre 
              SEO-optimierte Website. Dort können Sie mit Blog-Content und 
              Portfolio-Seiten für Google ranken.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Sollte ich meine Preise online zeigen?</AccordionTrigger>
            <AccordionContent>
              Ja, zumindest Orientierungspreise. "Ab 1.500€" oder Preisspannen 
              helfen sowohl Kunden als auch Ihnen: Sie ziehen die richtigen 
              Anfragen an und sparen Zeit mit Kunden, die ein anderes Budget haben. 
              Außerdem können Sie für Keywords wie "Hochzeitsfotograf Preise" ranken.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie viele Bilder sollten im Portfolio sein?</AccordionTrigger>
            <AccordionContent>
              Qualität vor Quantität! 50-100 Ihrer absolut besten Bilder sind 
              besser als 500 mittelmäßige. Für SEO wichtiger: Organisieren Sie 
              sie in Kategorien mit beschreibendem Text. Eine komplette 
              Hochzeitsreportage (15-20 Bilder) mit Location-Info und Geschichte 
              ist SEO-wertvoller als 100 einzelne Bilder ohne Kontext.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Lohnt sich ein Blog für Fotografen?</AccordionTrigger>
            <AccordionContent>
              Absolut! Ein Blog mit Shootings, Location-Guides und Tipps bringt 
              kontinuierlich neue Besucher. Jede veröffentlichte Hochzeit ist 
              Content für Keywords wie "Hochzeit [Location]". Plus: Paare teilen 
              "ihren" Blog-Post gerne, was natürliche Backlinks bringt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie lange dauert es, bis SEO für Fotografen wirkt?</AccordionTrigger>
            <AccordionContent>
              Bei lokalen Keywords (z.B. "Hochzeitsfotograf [kleine Stadt]") 
              können Sie innerhalb von 3-6 Monaten gute Rankings erreichen. 
              Für kompetitive Keywords in Großstädten kann es 6-12 Monate dauern. 
              Der wichtigste Faktor: Kontinuierlich neuen Content (Shootings) 
              veröffentlichen und Bewertungen sammeln.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Hochzeitsfotograf dominiert lokal</h2>
        {industryCaseStudies.fotograf.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-fotograf" />

      <SourcesSection sources={[
        { title: "Deutscher Journalisten-Verband: Berufsbild Fotograf", url: "https://www.djv.de/" },
        { title: "Professional Photographers of America: SEO Tips", url: "https://www.ppa.com/" },
        { title: "Google: Image SEO Best Practices", url: "https://developers.google.com/search/docs/appearance/google-images" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoFotograf;
