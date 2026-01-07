import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { CheckCircle, Settings, Image, MessageSquare, BarChart3, Lightbulb } from "lucide-react";

const GoogleMyBusiness = () => {
  const article = getArticleBySlug("google-my-business-optimieren")!;

  const tocItems = [
    { id: "grundlagen", title: "Grundlagen: Profil einrichten und verifizieren" },
    { id: "vollstaendigkeit", title: "Profil-Vollständigkeit maximieren" },
    { id: "kategorien", title: "Kategorien richtig wählen" },
    { id: "posts", title: "Google Posts strategisch nutzen" },
    { id: "insights", title: "Insights verstehen und nutzen" },
    { id: "faq", title: "Häufig gestellte Fragen" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        Dein <strong>Google Business Profil</strong> (früher Google My Business) ist das Schaufenster deines Unternehmens in der Google-Suche. Ein vollständig optimiertes Profil kann deine lokale Sichtbarkeit um bis zu 70% steigern. Diese Anleitung zeigt dir jeden Schritt.
      </p>

      <section id="grundlagen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Grundlagen: Profil einrichten und verifizieren
        </h2>
        <p className="mb-4">
          Falls du noch kein Google Business Profil hast, ist der erste Schritt die Erstellung und Verifizierung.
        </p>
        
        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">Schritt-für-Schritt Erstellung:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Gehe zu <span className="text-primary">business.google.com</span></li>
            <li>Klicke auf "Jetzt verwalten"</li>
            <li>Suche nach deinem Unternehmen oder erstelle ein neues</li>
            <li>Fülle alle Grundinformationen aus</li>
            <li>Wähle eine Verifizierungsmethode (meist Postkarte)</li>
            <li>Warte auf den Verifizierungscode (5-14 Tage)</li>
            <li>Gib den Code ein und dein Profil ist live</li>
          </ol>
        </div>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Tipp:</strong>
              <p className="text-muted-foreground mt-1">
                Bei einigen Unternehmen ist auch eine Video-Verifizierung möglich. Das geht schneller als der Postweg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vollstaendigkeit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Profil-Vollständigkeit maximieren
        </h2>
        <p className="mb-4">
          Google bevorzugt vollständige Profile. Je mehr Informationen du bereitstellst, desto besser dein Ranking.
        </p>

        <div className="space-y-4">
          {[
            { title: "Unternehmensbeschreibung", desc: "750 Zeichen nutzen. Keywords natürlich einbauen. Beschreibe was dich einzigartig macht.", status: "Pflicht" },
            { title: "Öffnungszeiten", desc: "Reguläre Zeiten + Sonderzeiten für Feiertage. Wird regelmäßig von Google abgefragt.", status: "Pflicht" },
            { title: "Kontaktdaten", desc: "Telefon, Website, E-Mail. Nutze die lokale Telefonnummer, nicht 0800.", status: "Pflicht" },
            { title: "Dienstleistungen/Produkte", desc: "Liste alle Angebote mit Preisen und Beschreibungen.", status: "Wichtig" },
            { title: "Attribute", desc: "Rollstuhlgerecht, WLAN, Parkplätze etc. Jedes zutreffende Attribut hinzufügen.", status: "Wichtig" },
            { title: "Fragen & Antworten", desc: "Beantworte häufige Fragen proaktiv selbst.", status: "Empfohlen" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="text-foreground">{item.title}</strong>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.status === "Pflicht" 
                      ? "bg-destructive/10 text-destructive" 
                      : item.status === "Wichtig"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      <section id="kategorien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Kategorien richtig wählen
        </h2>
        <p className="mb-4">
          Die Kategorie-Auswahl bestimmt, für welche Suchanfragen du erscheinst. Wähle sorgfältig!
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hauptkategorie</h3>
        <p className="mb-4">
          Wähle die Kategorie, die dein Kerngeschäft am besten beschreibt. Beispiel: "Zahnarzt" statt "Gesundheitswesen".
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nebenkategorien</h3>
        <p className="mb-4">
          Du kannst bis zu 9 weitere Kategorien hinzufügen. Nutze nur relevante Kategorien, die du auch anbietest.
        </p>

        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Beispiel: Bäckerei
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">Hauptkategorie:</span>
              <span className="text-muted-foreground">Bäckerei</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-medium">Nebenkategorien:</span>
              <span className="text-muted-foreground">Café, Konditorei, Frühstücksrestaurant</span>
            </div>
          </div>
        </div>
      </section>

      <section id="posts" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Google Posts strategisch nutzen
        </h2>
        <p className="mb-4">
          Google Posts sind wie Social Media Posts, die direkt in deinem Google Profil erscheinen. Sie zeigen Aktivität und können Klicks generieren.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: Image, title: "Updates", desc: "Neuigkeiten, Änderungen, allgemeine Infos" },
            { icon: MessageSquare, title: "Angebote", desc: "Rabatte, Aktionen mit Start- und Enddatum" },
            { icon: CheckCircle, title: "Events", desc: "Veranstaltungen mit Datum und Uhrzeit" },
            { icon: BarChart3, title: "Produkte", desc: "Neue Produkte oder Dienstleistungen vorstellen" },
          ].map((type, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
              <type.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{type.title}</strong>
                <p className="text-sm text-muted-foreground mt-1">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Best Practices für Posts</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Poste mindestens 1x pro Woche</li>
          <li>Nutze immer ein ansprechendes Bild (1200x900 px)</li>
          <li>Füge einen Call-to-Action Button hinzu</li>
          <li>Halte den Text kurz (150-300 Zeichen)</li>
          <li>Verlinke auf deine Website oder Buchungsseite</li>
        </ul>
      </section>

      <section id="insights" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Insights verstehen und nutzen
        </h2>
        <p className="mb-4">
          Google liefert wertvolle Daten darüber, wie Kunden mit deinem Profil interagieren. Nutze diese für Optimierungen.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">Suchanfragen</h3>
            <p className="text-sm text-muted-foreground">
              Zeigt, mit welchen Keywords Kunden dich finden. Nutze beliebte Begriffe in deiner Beschreibung und Posts.
            </p>
          </div>
          <div className="p-4 bg-muted/50 rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">Kundenaktionen</h3>
            <p className="text-sm text-muted-foreground">
              Website-Klicks, Anrufe, Routenanfragen. Zeigt, welche Aktionen Kunden am häufigsten durchführen.
            </p>
          </div>
          <div className="p-4 bg-muted/50 rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">Foto-Aufrufe</h3>
            <p className="text-sm text-muted-foreground">
              Vergleiche mit ähnlichen Unternehmen. Mehr Fotos = mehr Engagement.
            </p>
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
              Ist Google Business Profil kostenlos?
            </h3>
            <p className="text-muted-foreground">
              Ja, die Erstellung und Nutzung des Profils ist komplett kostenlos. Du bezahlst nur, wenn du Google Ads schaltest.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Kann ich mehrere Standorte verwalten?
            </h3>
            <p className="text-muted-foreground">
              Ja, mit einem Account kannst du mehrere Standorte verwalten. Jeder Standort braucht aber ein eigenes, verifiziertes Profil.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Wie oft sollte ich mein Profil aktualisieren?
            </h3>
            <p className="text-muted-foreground">
              Mindestens monatlich neue Fotos und Posts. Öffnungszeiten und Infos sofort aktualisieren, wenn sich etwas ändert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Was tun, wenn jemand falsche Infos meldet?
            </h3>
            <p className="text-muted-foreground">
              Prüfe regelmäßig dein Profil auf "Vorgeschlagene Änderungen". Du kannst gemeldete Änderungen ablehnen oder den Support kontaktieren.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default GoogleMyBusiness;
