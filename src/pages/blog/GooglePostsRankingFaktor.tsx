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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Tag, Gift, Bell, TrendingUp, Clock, Image } from "lucide-react";

const GooglePostsRankingFaktor = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-posts-ranking-faktor", language)!;

  const tocItems = [
    { id: "was-sind-google-posts", title: "Was sind Google Posts?" },
    { id: "ranking-einfluss", title: "Wie beeinflussen Google Posts dein lokales Ranking?" },
    { id: "post-typen", title: "Welche 5 Google Post-Typen gibt es?" },
    { id: "content-strategie", title: "Wie entwickelst du eine Content-Strategie für Posts?" },
    { id: "optimierung", title: "Wie optimierst du Posts für maximale Wirkung?" },
    { id: "frequenz", title: "Wie oft solltest du Google Posts veröffentlichen?" },
    { id: "erfolg-messen", title: "Wie misst du den Erfolg deiner Google Posts?" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Google Posts signalisieren Aktivität und Relevanz",
    "Regelmäßige Posts können lokale Rankings verbessern",
    "Events und Angebote haben die höchsten Engagement-Raten",
    "Posts mit Bildern erhalten 10x mehr Klicks",
    "Ideale Frequenz: 1-2 Posts pro Woche"
  ];

  const postTypes = [
    {
      icon: Bell,
      name: "Neuigkeiten (Update)",
      description: "Allgemeine Unternehmensnews, Ankündigungen, Tipps",
      duration: "7 Tage sichtbar",
      example: "Wir haben unser Sortiment erweitert! Jetzt auch vegane Optionen."
    },
    {
      icon: Tag,
      name: "Angebot",
      description: "Rabatte, Aktionen, spezielle Deals mit Ablaufdatum",
      duration: "Nach Ablaufdatum archiviert",
      example: "20% auf alle Haarschnitte diese Woche – Code: SOMMER20"
    },
    {
      icon: Calendar,
      name: "Event",
      description: "Veranstaltungen, Workshops, Tag der offenen Tür",
      duration: "Bis Eventende sichtbar",
      example: "Weinverkostung am 15. März – 10 Weine aus der Region"
    },
    {
      icon: Gift,
      name: "Produkt",
      description: "Einzelne Produkte oder Dienstleistungen hervorheben",
      duration: "7 Tage sichtbar",
      example: "Unser Bestseller: Handgemachte Pralinen – perfekt als Geschenk"
    },
    {
      icon: TrendingUp,
      name: "COVID-19 Update",
      description: "Hygiene-Maßnahmen, Öffnungszeiten-Änderungen",
      duration: "Dauerhaft bis entfernt",
      example: "Alle Mitarbeiter geimpft – sichere Besuche garantiert"
    }
  ];
  const faqItems = [
    { question: "Wie lange bleiben Google Posts sichtbar?", answer: "Update-Posts bleiben 7 Tage prominent sichtbar, Event-Posts bis zum Event-Ende, Angebots-Posts bis zum Ablaufdatum. Alle Posts bleiben im Archiv." },
    { question: "Kann ich Posts vorausplanen?", answer: "Native in Google Business gibt es keine Planungsfunktion. Drittanbieter-Tools wie Localo oder Semrush Local bieten Scheduling-Funktionen." },
    { question: "Werden Posts für alle Standorte übernommen?", answer: "Nein, Posts sind standortspezifisch. Bei mehreren Standorten müssen Sie für jeden separat posten." },
    { question: "Gibt es Einschränkungen beim Content?", answer: "Google hat Richtlinien: Keine irreführenden Inhalte, kein Spam, keine unangemessenen Bilder, keine Telefonnummern im Text." },
    { question: "Posts vs. Social Media – was ist wichtiger?", answer: "Google Posts erreichen Nutzer genau dann, wenn sie aktiv suchen – hohe Kaufintention! Social Media ist für Community-Building. Für lokale Unternehmen sollten Google Posts Priorität haben." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Google Business Profil mit Posts"
        caption="Google Posts erscheinen prominent im Business Profil"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="was-sind-google-posts">
        <h2>Was sind Google Posts?</h2>
        <AutoLexikonText>
          <p>
            Google Posts sind Mini-Beiträge, die direkt in Ihrem Google Business 
            Profil erscheinen. Sie sind ein oft übersehener, aber wirkungsvoller 
            Kanal zur Kundenkommunikation und können Ihre lokalen Rankings beeinflussen.
          </p>
          
          <h3>Wo Posts erscheinen</h3>
          <ul>
            <li>In der Google-Suche unter Ihrem Business Profil</li>
            <li>In Google Maps bei Ihrem Standort</li>
            <li>Im "Updates"-Tab Ihres Profils</li>
            <li>Auf dem Knowledge Panel (Desktop)</li>
          </ul>

          <h3>Warum Posts wichtig sind</h3>
          <ul>
            <li><strong>Aktualitätssignal:</strong> Google sieht, dass Ihr Unternehmen aktiv ist</li>
            <li><strong>Mehr Platz:</strong> Ihre Suchergebnisse nehmen mehr Raum ein</li>
            <li><strong>Direkte Konversion:</strong> Call-to-Actions führen zu Aktionen</li>
            <li><strong>Kostenlos:</strong> Organische Reichweite ohne Werbebudget</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="ranking-einfluss">
        <h2>Wie beeinflussen Google Posts dein lokales Ranking?</h2>
        <AutoLexikonText>
          <p>
            Die direkte Wirkung von Google Posts auf Rankings ist Gegenstand 
            vieler Diskussionen in der SEO-Community. Das wissen wir:
          </p>

          <h3>Direkte Ranking-Faktoren</h3>
          <ul>
            <li><strong>Aktivitätssignal:</strong> Regelmäßige Posts zeigen, dass Ihr Unternehmen aktiv und gepflegt ist</li>
            <li><strong>Relevanz-Keywords:</strong> Keywords in Posts werden indexiert</li>
            <li><strong>Engagement:</strong> Klicks auf Posts können indirekt Rankings beeinflussen</li>
          </ul>

          <h3>Indirekte Vorteile</h3>
          <ul>
            <li><strong>Mehr Klicks:</strong> Auffälligere Ergebnisse = höhere CTR</li>
            <li><strong>Längere Verweildauer:</strong> Nutzer bleiben länger auf Ihrem Profil</li>
            <li><strong>Mehr Interaktionen:</strong> Posts können zu Anrufen, Website-Besuchen führen</li>
          </ul>

          <h3>Was Studien zeigen</h3>
          <p>
            Eine Studie von Sterling Sky zeigte, dass Unternehmen mit regelmäßigen 
            Posts im Durchschnitt 5-10% mehr Profilaufrufe erhielten. Der direkte 
            Ranking-Einfluss ist schwer zu isolieren, aber die Gesamtwirkung ist positiv.
          </p>
        </AutoLexikonText>
      </section>

      <section id="post-typen">
        <h2>Welche 5 Google Post-Typen gibt es?</h2>
        <AutoLexikonText>
          <p>
            Google bietet verschiedene Post-Formate für unterschiedliche Zwecke:
          </p>

          <div className="space-y-4 my-6">
            {postTypes.map((type, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <type.icon className="h-5 w-5 text-primary" />
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>{type.description}</p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {type.duration}
                  </p>
                  <p className="italic bg-muted p-2 rounded">"{type.example}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3>Welchen Typ wann nutzen?</h3>
          <ul>
            <li><strong>Regelmäßig:</strong> Neuigkeiten für allgemeine Updates</li>
            <li><strong>Bei Aktionen:</strong> Angebote mit klarem Mehrwert</li>
            <li><strong>Bei Veranstaltungen:</strong> Events mit Datum und Details</li>
            <li><strong>Für Highlights:</strong> Produkte für Bestseller/Neuheiten</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="content-strategie">
        <h2>Wie entwickelst du eine Content-Strategie für Google Posts?</h2>
        <AutoLexikonText>
          <h3>Was funktioniert</h3>
          <ul>
            <li><strong>Konkrete Angebote:</strong> "20% Rabatt diese Woche" statt "Tolle Preise"</li>
            <li><strong>Lokale Bezüge:</strong> "Neu in München-Schwabing: ..."</li>
            <li><strong>Saisonale Inhalte:</strong> Weihnachtsangebote, Sommertipps</li>
            <li><strong>Behind-the-Scenes:</strong> Team, Arbeitsweise, Werte</li>
            <li><strong>Kundenerfolge:</strong> Projektabschlüsse, Testimonials</li>
          </ul>

          <h3>Content-Kalender Beispiel</h3>
          <ul>
            <li><strong>Woche 1:</strong> Produkt/Service Highlight</li>
            <li><strong>Woche 2:</strong> Team/Behind-the-Scenes</li>
            <li><strong>Woche 3:</strong> Kundenerfolg/Projekt</li>
            <li><strong>Woche 4:</strong> Angebot/Aktion</li>
          </ul>

          <h3>Keywords in Posts</h3>
          <p>
            Integrieren Sie natürlich Ihre wichtigsten Keywords:
          </p>
          <ul>
            <li>Branche + Stadt: "Friseur in Köln-Ehrenfeld"</li>
            <li>Service + Region: "Hochzeitsfotografie am Bodensee"</li>
            <li>Produkt + Merkmal: "Bio-Bäckerei mit glutenfreien Optionen"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="optimierung">
        <h2>Posts optimieren für maximale Wirkung</h2>
        <AutoLexikonText>
          <h3>Bilder sind entscheidend</h3>
          <ul>
            <li><strong>Format:</strong> 1200 x 900 Pixel (4:3) oder 1200 x 628 Pixel (16:9)</li>
            <li><strong>Qualität:</strong> Hochauflösend, professionell</li>
            <li><strong>Keine Stockfotos:</strong> Authentische Bilder performen besser</li>
            <li><strong>Text im Bild:</strong> Minimal halten, da oft abgeschnitten</li>
          </ul>

          <h3>Text-Optimierung</h3>
          <ul>
            <li><strong>Länge:</strong> 150-300 Zeichen ideal (max. 1500)</li>
            <li><strong>Erster Satz:</strong> Der wichtigste – nur er ist sofort sichtbar</li>
            <li><strong>Call-to-Action:</strong> Immer mit klarer Handlungsaufforderung</li>
            <li><strong>Emojis:</strong> Sparsam, aber wirkungsvoll</li>
          </ul>

          <h3>CTAs richtig wählen</h3>
          <ul>
            <li><strong>"Jetzt buchen":</strong> Für Termine, Reservierungen</li>
            <li><strong>"Mehr erfahren":</strong> Für Info-Posts, Bloglinks</li>
            <li><strong>"Anrufen":</strong> Für Notdienste, Beratung</li>
            <li><strong>"Angebot einlösen":</strong> Für Rabattaktionen</li>
            <li><strong>"Jetzt bestellen":</strong> Für Produkte, Lieferservices</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="frequenz">
        <h2>Die richtige Posting-Frequenz</h2>
        <AutoLexikonText>
          <h3>Empfohlene Frequenz</h3>
          <ul>
            <li><strong>Minimum:</strong> 1x pro Woche</li>
            <li><strong>Optimal:</strong> 2-3x pro Woche</li>
            <li><strong>Maximum:</strong> 1x pro Tag (mehr bringt kaum Mehrwert)</li>
          </ul>

          <h3>Warum regelmäßig wichtig ist</h3>
          <p>
            Posts haben begrenzte Lebensdauer (7 Tage bei Updates). Ein Profil 
            ohne aktuelle Posts wirkt vernachlässigt. Kontinuität signalisiert 
            Google und Kunden, dass Ihr Unternehmen aktiv ist.
          </p>

          <h3>Tools für Regelmäßigkeit</h3>
          <ul>
            <li><strong>Google Business App:</strong> Posts direkt vom Smartphone</li>
            <li><strong>Content-Kalender:</strong> Im Voraus planen</li>
            <li><strong>Batching:</strong> Mehrere Posts auf einmal erstellen</li>
            <li><strong>Reminder:</strong> Wöchentliche Erinnerung setzen</li>
          </ul>

          <h3>Best Posting-Zeiten</h3>
          <p>
            Die beste Zeit hängt von Ihrer Branche ab, aber generell:
          </p>
          <ul>
            <li><strong>B2C:</strong> Abends (18-21 Uhr) und Wochenenden</li>
            <li><strong>B2B:</strong> Morgens (8-10 Uhr) unter der Woche</li>
            <li><strong>Gastronomie:</strong> Vor Essenszeiten (11-12 Uhr, 17-18 Uhr)</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="erfolg-messen">
        <h2>Erfolg messen</h2>
        <AutoLexikonText>
          <h3>Verfügbare Metriken</h3>
          <p>
            Google Business Insights zeigt für Posts:
          </p>
          <ul>
            <li><strong>Aufrufe:</strong> Wie oft wurde der Post gesehen</li>
            <li><strong>Klicks:</strong> Klicks auf CTA-Button</li>
            <li><strong>Engagement:</strong> Verhältnis Klicks zu Aufrufen</li>
          </ul>

          <h3>Was gute Performance ist</h3>
          <ul>
            <li><strong>Aufrufe:</strong> Abhängig von Ihrem Profil-Traffic</li>
            <li><strong>Klickrate:</strong> 1-3% ist gut, über 5% hervorragend</li>
            <li><strong>Vergleich:</strong> Entwicklung über Zeit wichtiger als absolute Zahlen</li>
          </ul>

          <h3>A/B-Testing für Posts</h3>
          <p>
            Testen Sie verschiedene Ansätze:
          </p>
          <ul>
            <li>Mit vs. ohne Emojis</li>
            <li>Verschiedene CTAs</li>
            <li>Bildstile (Menschen vs. Produkte)</li>
            <li>Posting-Zeiten</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie lange bleiben Google Posts sichtbar?</AccordionTrigger>
            <AccordionContent>
              Update-Posts (Neuigkeiten) bleiben 7 Tage prominent sichtbar, danach 
              wandern sie in den "Updates"-Tab. Event-Posts bleiben bis zum Event-Ende 
              sichtbar. Angebots-Posts bis zum Ablaufdatum. Alle Posts bleiben 
              im Archiv, aber nur die neuesten werden prominent angezeigt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Kann ich Posts vorausplanen?</AccordionTrigger>
            <AccordionContent>
              Native in Google Business gibt es keine Planungsfunktion. Drittanbieter-Tools 
              wie Localo, Whitespark oder Semrush Local bieten Scheduling-Funktionen. 
              Alternativ: Content im Voraus erstellen und zu festen Zeiten manuell posten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Werden Posts für alle Standorte übernommen?</AccordionTrigger>
            <AccordionContent>
              Nein, Posts sind standortspezifisch. Bei mehreren Standorten müssen 
              Sie für jeden separat posten. Es gibt API-Lösungen und Tools für 
              Multi-Location-Businesses, die das vereinfachen (z.B. Uberall, Yext).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Gibt es Einschränkungen beim Content?</AccordionTrigger>
            <AccordionContent>
              Google hat Richtlinien: Keine irreführenden Inhalte, kein Spam, 
              keine unangemessenen Bilder, keine Telefonnummern im Text (stattdessen 
              CTA nutzen). Posts können abgelehnt werden und müssen ggf. überarbeitet werden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Posts vs. Social Media – was ist wichtiger?</AccordionTrigger>
            <AccordionContent>
              Beides hat seine Berechtigung. Google Posts erreichen Nutzer genau 
              dann, wenn sie aktiv nach Ihrem Unternehmen oder Ihrer Branche suchen – 
              hohe Kaufintention! Social Media ist für Community-Building und Branding. 
              Für lokale Unternehmen sollten Google Posts Priorität haben.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="google-posts-ranking-faktor" />

      <SourcesSection sources={[
        { title: "Google: Posts in Google Business", url: "https://support.google.com/business/answer/7662907" },
        { title: "Sterling Sky: Google Posts Study", url: "https://www.sterlingsky.ca/" },
        { title: "BrightLocal: Local SEO Ranking Factors", url: "https://www.brightlocal.com/research/local-seo-ranking-factors/" }
      ]} />
    </ArticleLayout>
  );
};

export default GooglePostsRankingFaktor;
