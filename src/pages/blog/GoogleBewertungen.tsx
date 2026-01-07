import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Star, MessageSquare, QrCode, Mail, Users, Gift, ThumbsUp, AlertTriangle } from "lucide-react";

const GoogleBewertungen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-bewertungen-bekommen", language)!;

  const tocItems = [
    { id: "wichtigkeit", title: "Warum Bewertungen Kunden-Magnete sind" },
    { id: "strategien", title: "7 ethische Strategien für mehr Reviews" },
    { id: "qr-code", title: "QR-Code und Smart-Link Taktiken" },
    { id: "negativ", title: "Negative Bewertungen managen" },
    { id: "faq", title: "Häufig gestellte Fragen" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>93% der Verbraucher</strong> lesen Online-Bewertungen, bevor sie ein lokales Unternehmen besuchen. Google Bewertungen sind der wichtigste Vertrauensfaktor für potenzielle Kunden. Hier erfährst du, wie du mehr authentische Bewertungen bekommst – ohne gegen Googles Richtlinien zu verstoßen.
      </p>

      <section id="wichtigkeit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Warum Bewertungen Kunden-Magnete sind
        </h2>
        <p className="mb-4">
          Google Bewertungen beeinflussen nicht nur das Vertrauen potenzieller Kunden, sondern auch dein Ranking in den lokalen Suchergebnissen.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { stat: "88%", desc: "vertrauen Online-Bewertungen wie persönlichen Empfehlungen" },
            { stat: "4.0+", desc: "Mindest-Rating, ab dem Kunden buchen/kaufen" },
            { stat: "72%", desc: "würden erst nach dem Lesen positiver Bewertungen handeln" },
          ].map((item, index) => (
            <div key={index} className="bg-primary/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>
          Mehr Bewertungen bedeuten mehr Sichtbarkeit, mehr Vertrauen und letztendlich mehr Umsatz.
        </p>
      </section>

      <section id="strategien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          7 ethische Strategien für mehr Reviews
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">1. Direkt nach dem Kauf fragen</h3>
              <p className="text-muted-foreground">
                Der beste Zeitpunkt ist direkt nach einer positiven Erfahrung. Sage einfach: "Es freut mich, dass Sie zufrieden sind. Würden Sie uns mit einer Google Bewertung unterstützen?"
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <QrCode className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2. QR-Code auf Rechnungen</h3>
              <p className="text-muted-foreground">
                Platziere einen QR-Code auf deiner Rechnung, der direkt zur Bewertungsseite führt. So reduzierst du die Hürde auf ein Minimum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3. Follow-up E-Mail senden</h3>
              <p className="text-muted-foreground">
                Sende 1-2 Tage nach dem Kauf eine freundliche E-Mail mit der Bitte um Feedback. Füge einen direkten Link zur Bewertung hinzu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">4. Team einbinden</h3>
              <p className="text-muted-foreground">
                Schulde dein Team, zufriedene Kunden freundlich um Bewertungen zu bitten. Mache es zum natürlichen Teil des Kundenkontakts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">5. Auf Bewertungen antworten</h3>
              <p className="text-muted-foreground">
                Antworte auf jede Bewertung persönlich. Das zeigt anderen Kunden, dass du Feedback wertschätzt und ermutigt zu weiteren Reviews.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">6. Exzellenten Service bieten</h3>
              <p className="text-muted-foreground">
                Der beste Weg zu mehr Bewertungen: Biete Erlebnisse, über die Kunden sprechen wollen. Begeisterte Kunden bewerten von selbst.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ThumbsUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">7. Aufsteller und Schilder nutzen</h3>
              <p className="text-muted-foreground">
                Platziere einen kleinen Aufsteller an der Kasse oder im Eingangsbereich: "Zufrieden? Bewerte uns auf Google!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      <section id="qr-code" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          QR-Code und Smart-Link Taktiken
        </h2>
        <p className="mb-4">
          Der Schlüssel zu mehr Bewertungen ist die Reduzierung von Hindernissen. Mit einem direkten Link oder QR-Code muss der Kunde nicht erst nach deinem Unternehmen suchen.
        </p>
        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">So erstellst du deinen Bewertungslink:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Öffne dein Google Business Profil</li>
            <li>Klicke auf "Mehr Bewertungen erhalten"</li>
            <li>Kopiere den generierten Link</li>
            <li>Erstelle einen QR-Code (z.B. mit qr-code-generator.com)</li>
          </ol>
        </div>
        <p>
          <strong>Tipp:</strong> Drucke den QR-Code auf Visitenkarten, Rechnungen, Kassenzettel und Aufsteller. Je sichtbarer, desto mehr Bewertungen.
        </p>
      </section>

      <section id="negativ" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Negative Bewertungen managen
        </h2>
        <p className="mb-4">
          Negative Bewertungen gehören dazu – wichtig ist, wie du damit umgehst. Eine professionelle Antwort kann sogar Vertrauen aufbauen.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 font-bold text-sm">✓</span>
            </div>
            <div>
              <strong className="text-foreground">Schnell antworten:</strong>
              <span className="text-muted-foreground ml-1">Idealerweise innerhalb von 24 Stunden.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 font-bold text-sm">✓</span>
            </div>
            <div>
              <strong className="text-foreground">Sachlich bleiben:</strong>
              <span className="text-muted-foreground ml-1">Nie emotional oder defensiv reagieren.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 font-bold text-sm">✓</span>
            </div>
            <div>
              <strong className="text-foreground">Lösung anbieten:</strong>
              <span className="text-muted-foreground ml-1">Zeige Bereitschaft, das Problem zu lösen.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 font-bold text-sm">✓</span>
            </div>
            <div>
              <strong className="text-foreground">Offline gehen:</strong>
              <span className="text-muted-foreground ml-1">Biete an, das Gespräch persönlich fortzuführen.</span>
            </div>
          </div>
        </div>

        <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded-r-lg mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Wichtig:</strong>
              <p className="text-muted-foreground mt-1">
                Kaufe niemals gefälschte positive Bewertungen oder bitte um die Löschung echter negativer Bewertungen. Google kann dein Profil dafür bestrafen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Darf ich Kunden für Bewertungen belohnen?
            </h3>
            <p className="text-muted-foreground">
              Nein, das verstößt gegen Googles Richtlinien. Du darfst aber allgemein um Feedback bitten, ohne eine Belohnung zu versprechen.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Wie viele Bewertungen brauche ich?
            </h3>
            <p className="text-muted-foreground">
              Es gibt keine Mindestanzahl, aber je mehr desto besser. Studien zeigen, dass 50+ Bewertungen als vertrauenswürdig gelten. Wichtiger ist aber regelmäßiger Zuwachs.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Kann ich negative Bewertungen löschen lassen?
            </h3>
            <p className="text-muted-foreground">
              Nur wenn sie gegen Googles Richtlinien verstoßen (Spam, Hassrede, etc.). Echte negative Erfahrungsberichte können nicht entfernt werden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Warum verschwinden manche Bewertungen?
            </h3>
            <p className="text-muted-foreground">
              Google filtert Bewertungen automatisch. Neue Accounts, VPN-Nutzung oder verdächtige Muster können zur Filterung führen. Das ist normal und betrifft alle Unternehmen.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default GoogleBewertungen;
