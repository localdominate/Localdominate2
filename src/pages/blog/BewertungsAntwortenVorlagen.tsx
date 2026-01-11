import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const BewertungsAntwortenVorlagen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("bewertungs-antworten-vorlagen", language)!;

  const tocItems = [
    { id: "warum-antworten", title: "Warum auf Bewertungen antworten?" },
    { id: "positive-bewertungen", title: "Antworten auf positive Bewertungen" },
    { id: "negative-bewertungen", title: "Antworten auf negative Bewertungen" },
    { id: "neutrale-bewertungen", title: "Antworten auf neutrale Bewertungen" },
    { id: "branchen-vorlagen", title: "Vorlagen nach Branche" },
    { id: "dos-donts", title: "Dos & Don'ts" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "89% der Verbraucher lesen Unternehmensantworten auf Bewertungen",
    "Professionelle Antworten verbessern Ihr Image bei potenziellen Kunden",
    "Schnelle Reaktionen zeigen Kundenorientierung",
    "Auch negative Bewertungen bieten Chancen zur Imagepflege"
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Bewertungen beantworten am Computer"
        caption="Professionelle Antworten auf Bewertungen stärken Ihr lokales Image"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-antworten">
        <h2>Warum auf Bewertungen antworten?</h2>
        <AutoLexikonText>
          <p>
            Bewertungen sind mehr als nur Feedback – sie sind öffentliche Gespräche, 
            die potenzielle Kunden lesen. Ihre Antworten zeigen, wie Sie mit Kunden 
            umgehen.
          </p>
          <h3>Die Vorteile von Antworten</h3>
          <ul>
            <li><strong>Vertrauen aufbauen:</strong> Zeigt Engagement und Kundenorientierung</li>
            <li><strong>SEO-Bonus:</strong> Google wertet Interaktion positiv</li>
            <li><strong>Schadensbegrenzung:</strong> Negative Bewertungen können entschärft werden</li>
            <li><strong>Kundenbindung:</strong> Bedankte Kunden kommen wieder</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="positive-bewertungen">
        <h2>Antworten auf positive Bewertungen (5 Sterne)</h2>
        <AutoLexikonText>
          <p>
            Auch positive Bewertungen verdienen eine Antwort. Sie zeigen Wertschätzung 
            und können zusätzliche Keywords einbauen.
          </p>
        </AutoLexikonText>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 1: Klassisch & herzlich</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen herzlichen Dank für Ihre tolle Bewertung, [Name]! Es freut uns 
                sehr, dass Sie mit [Service/Produkt] zufrieden waren. Wir freuen uns 
                auf Ihren nächsten Besuch! Ihr [Firmenname]-Team"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 2: Mit Service-Erwähnung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank für Ihr positives Feedback, [Name]! Schön zu hören, dass 
                Ihnen [konkrete Dienstleistung] gefallen hat. Bei Fragen sind wir 
                jederzeit für Sie da!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 3: Persönlich & lokal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Danke, [Name]! Wir freuen uns, dass wir Ihnen als Ihr [Branche] in 
                [Stadt] weiterhelfen konnten. Bis bald!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 4: Mit Team-Erwähnung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Herzlichen Dank für Ihre wunderbare Bewertung! Das gesamte Team freut 
                sich sehr über Ihr Lob. Wir geben weiterhin unser Bestes für Sie!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 5: Weiterempfehlung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank, [Name]! Ihre Zufriedenheit ist unser größtes Lob. Wir 
                würden uns freuen, wenn Sie uns weiterempfehlen!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="negative-bewertungen">
        <h2>Antworten auf negative Bewertungen (1-2 Sterne)</h2>
        <AutoLexikonText>
          <p>
            Negative Bewertungen sind die wichtigsten zum Beantworten. Eine souveräne 
            Antwort kann das Image retten und zeigt Professionalität.
          </p>
          <h3>Grundprinzipien</h3>
          <ul>
            <li>Niemals emotional oder defensiv reagieren</li>
            <li>Für die Erfahrung entschuldigen (nicht für etwas, das nicht passiert ist)</li>
            <li>Lösung anbieten</li>
            <li>Offline-Kontakt vorschlagen</li>
          </ul>
        </AutoLexikonText>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 1: Entschuldigung & Lösung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Liebe/r [Name], vielen Dank für Ihr Feedback. Es tut uns leid, dass 
                Ihre Erfahrung nicht unseren üblichen Standards entsprochen hat. Wir 
                würden gerne mehr erfahren und eine Lösung finden. Bitte kontaktieren 
                Sie uns unter [Telefon/E-Mail]."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 2: Konstruktiv & professionell</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank für Ihre ehrliche Rückmeldung, [Name]. Wir nehmen Kritik 
                sehr ernst und werden Ihren Hinweis intern besprechen. Gerne möchten 
                wir die Situation klären – rufen Sie uns an unter [Nummer]."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 3: Bei unberechtigter Kritik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank für Ihr Feedback. Wir können den beschriebenen Sachverhalt 
                so nicht nachvollziehen, würden aber gerne mehr erfahren. Bitte 
                kontaktieren Sie uns direkt, damit wir die Situation klären können."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 4: Wartezeit/Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Es tut uns leid, dass Sie lange warten mussten, [Name]. Das entspricht 
                nicht unserem Anspruch. Wir arbeiten daran, unseren Service zu 
                verbessern. Geben Sie uns eine zweite Chance!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 5: Preis-Kritik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank für Ihre Rückmeldung, [Name]. Wir verstehen, dass Preis 
                ein wichtiger Faktor ist. Unsere Preise spiegeln [Qualität/Service/etc.] 
                wider. Gerne beraten wir Sie bei Ihrem nächsten Besuch persönlich."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="neutrale-bewertungen">
        <h2>Antworten auf neutrale Bewertungen (3-4 Sterne)</h2>
        <AutoLexikonText>
          <p>
            Neutrale Bewertungen bieten die Chance, Kunden zu begeisterten Fans zu machen. 
            Fragen Sie nach, was besser sein könnte.
          </p>
        </AutoLexikonText>

        <div className="space-y-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 1: Nachfragen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Danke für Ihre Bewertung, [Name]! Wir freuen uns über Ihr Feedback. 
                Gibt es etwas, das wir beim nächsten Mal besser machen können? Wir sind 
                für jeden Hinweis dankbar!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 2: Verbesserung versprechen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Vielen Dank, [Name]! Schön, dass Sie uns besucht haben. Wir arbeiten 
                ständig daran, noch besser zu werden. Beim nächsten Besuch werden wir 
                Sie überzeugen!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorlage 3: Zweite Chance erbitten</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "Danke für Ihr ehrliches Feedback! Wir würden uns freuen, Sie erneut 
                begrüßen zu dürfen und Ihnen eine 5-Sterne-Erfahrung zu bieten."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="branchen-vorlagen">
        <h2>Vorlagen nach Branche</h2>
        <AutoLexikonText>
          <h3>Gastronomie</h3>
          <ul>
            <li>Positiv: "Wir freuen uns, dass Ihnen [Gericht] geschmeckt hat! Unser Küchenchef gibt sein Bestes für unsere Gäste."</li>
            <li>Negativ: "Es tut uns leid, dass Ihr Besuch nicht unseren Ansprüchen entsprach. Wir laden Sie zu einem Gespräch mit unserem Restaurantleiter ein."</li>
          </ul>
          <h3>Handwerk</h3>
          <ul>
            <li>Positiv: "Vielen Dank für Ihr Vertrauen! Wir freuen uns, dass die [Arbeit] zu Ihrer Zufriedenheit war. Bei Fragen sind wir jederzeit erreichbar."</li>
            <li>Negativ: "Wir bedauern, dass Sie mit unserer Arbeit unzufrieden sind. Bitte kontaktieren Sie uns – wir finden gemeinsam eine Lösung."</li>
          </ul>
          <h3>Gesundheit/Praxis</h3>
          <ul>
            <li>Positiv: "Vielen Dank für Ihr positives Feedback! Ihre Gesundheit liegt uns am Herzen."</li>
            <li>Negativ: "Vielen Dank für Ihre Rückmeldung. Patientenzufriedenheit ist uns sehr wichtig. Bitte wenden Sie sich an unsere Praxisleitung."</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="dos-donts">
        <h2>Dos & Don'ts bei Bewertungsantworten</h2>
        <AutoLexikonText>
          <h3>✅ Dos</h3>
          <ul>
            <li>Schnell antworten (innerhalb von 24-48 Stunden)</li>
            <li>Namen des Kunden verwenden (wenn angegeben)</li>
            <li>Konkret auf die Bewertung eingehen</li>
            <li>Lösungen anbieten bei Problemen</li>
            <li>Freundlich und professionell bleiben</li>
            <li>Lokale Keywords natürlich einbauen</li>
          </ul>
          <h3>❌ Don'ts</h3>
          <ul>
            <li>Copy-Paste-Antworten für alle Bewertungen</li>
            <li>Defensiv oder aggressiv reagieren</li>
            <li>Ausreden oder Schuldzuweisungen</li>
            <li>Sensible Kundendaten erwähnen</li>
            <li>Lange, komplizierte Antworten schreiben</li>
            <li>Auf Fake-Bewertungen emotional reagieren</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Muss ich auf jede Bewertung antworten?</AccordionTrigger>
            <AccordionContent>
              Idealerweise ja. Besonders wichtig sind Antworten auf negative Bewertungen 
              und ausführliche positive Reviews. Bei vielen Bewertungen priorisieren Sie 
              1-2 Sterne Reviews und sehr detaillierte positive Bewertungen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Wie schnell sollte ich antworten?</AccordionTrigger>
            <AccordionContent>
              Ideal ist eine Antwort innerhalb von 24 Stunden, spätestens nach 48 Stunden. 
              Bei negativen Bewertungen ist eine schnelle Reaktion besonders wichtig. 
              Richten Sie Benachrichtigungen ein, um neue Bewertungen sofort zu sehen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Was tun bei Fake-Bewertungen?</AccordionTrigger>
            <AccordionContent>
              Antworten Sie sachlich und neutral. Formulieren Sie z.B.: "Wir können 
              diesen Vorfall leider nicht nachvollziehen. Bitte kontaktieren Sie uns 
              direkt." Melden Sie die Bewertung parallel bei Google zur Überprüfung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Kann ich negative Bewertungen löschen lassen?</AccordionTrigger>
            <AccordionContent>
              Nur wenn sie gegen Googles Richtlinien verstoßen (Spam, falsche Inhalte, 
              Beleidigungen). Echte negative Kundenerfahrungen können nicht gelöscht 
              werden. Fokussieren Sie sich auf professionelle Antworten und das 
              Sammeln neuer positiver Bewertungen.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="bewertungs-antworten-vorlagen" />

      <SourcesSection sources={[
        { title: "Google: Auf Bewertungen antworten", url: "https://support.google.com/business/answer/3474050" },
        { title: "BrightLocal: Review Response Study", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" }
      ]} />
    </ArticleLayout>
  );
};

export default BewertungsAntwortenVorlagen;
