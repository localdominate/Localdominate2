import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

const GoogleMapsRanking = () => {
  const article = getArticleBySlug("google-maps-ranking-verbessern")!;

  const tocItems = [
    { id: "warum-wichtig", title: "Warum Google Maps wichtiger ist als deine Website" },
    { id: "ranking-faktoren", title: "Die 7 entscheidenden Ranking-Faktoren" },
    { id: "optimierung", title: "Schritt-für-Schritt Optimierung" },
    { id: "fehler", title: "Häufige Fehler vermeiden" },
    { id: "faq", title: "Häufig gestellte Fragen" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>46% aller Google-Suchen</strong> haben eine lokale Absicht. Wenn dein Unternehmen nicht in den Top 3 der Google Maps Ergebnisse erscheint, verlierst du täglich potenzielle Kunden an deine Konkurrenz. In diesem Guide zeige ich dir, wie du dein Google Maps Ranking nachhaltig verbesserst.
      </p>

      <section id="warum-wichtig" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Warum Google Maps wichtiger ist als deine Website
        </h2>
        <p className="mb-4">
          Die meisten Kunden entscheiden sich für ein lokales Unternehmen, bevor sie jemals dessen Website besuchen. Der Google Maps Eintrag ist oft der erste und einzige Kontaktpunkt.
        </p>
        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Wusstest du?</strong>
              <p className="text-muted-foreground mt-1">
                76% der Nutzer, die nach einem lokalen Unternehmen suchen, besuchen innerhalb von 24 Stunden ein Geschäft.
              </p>
            </div>
          </div>
        </div>
        <p>
          Dein Google Business Profil zeigt Öffnungszeiten, Bewertungen, Fotos und den direkten Anfahrtsweg – alles, was ein Kunde für eine schnelle Entscheidung braucht.
        </p>
      </section>

      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Die 7 entscheidenden Ranking-Faktoren
        </h2>
        <p className="mb-6">
          Google bewertet lokale Unternehmen nach drei Hauptkriterien: <strong>Relevanz</strong>, <strong>Entfernung</strong> und <strong>Bekanntheit</strong>. Diese setzen sich aus verschiedenen Faktoren zusammen:
        </p>
        <div className="space-y-4">
          {[
            { title: "Profil-Vollständigkeit", desc: "Je mehr Informationen du bereitstellst, desto besser versteht Google dein Unternehmen." },
            { title: "Kategoriewahl", desc: "Die richtige Haupt- und Nebenkategorien bestimmen, für welche Suchanfragen du erscheinst." },
            { title: "Bewertungen", desc: "Anzahl, Durchschnitt und Aktualität deiner Google Bewertungen." },
            { title: "NAP-Konsistenz", desc: "Name, Adresse, Telefonnummer müssen überall identisch sein." },
            { title: "Fotos & Medien", desc: "Regelmäßig neue, hochwertige Bilder signalisieren Aktivität." },
            { title: "Google Posts", desc: "Regelmäßige Updates zeigen, dass dein Unternehmen aktiv ist." },
            { title: "Website-Signale", desc: "Eine optimierte Website stärkt dein gesamtes lokales Profil." },
          ].map((factor, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{factor.title}:</strong>
                <span className="text-muted-foreground ml-1">{factor.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      <section id="optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Schritt-für-Schritt Optimierung
        </h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Profil vollständig ausfüllen</h3>
        <p className="mb-4">
          Gehe jeden Bereich deines Google Business Profils durch und fülle alle Felder aus. Besonders wichtig:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Exakte Öffnungszeiten (inkl. Feiertage)</li>
          <li>Ausführliche Unternehmensbeschreibung mit Keywords</li>
          <li>Alle angebotenen Dienstleistungen/Produkte</li>
          <li>Attribute (z.B. "rollstuhlgerecht", "WLAN verfügbar")</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Kategorien strategisch wählen</h3>
        <p className="mb-4">
          Wähle eine präzise Hauptkategorie und ergänze 2-3 relevante Nebenkategorien. Ein Restaurant könnte z.B. "Italienisches Restaurant" als Hauptkategorie und "Pizzeria" sowie "Catering" als Nebenkategorien wählen.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Hochwertige Fotos hinzufügen</h3>
        <p className="mb-4">
          Unternehmen mit Fotos erhalten 42% mehr Wegbeschreibungsanfragen. Lade mindestens 10 professionelle Fotos hoch:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Außenansicht (Erkennungswert)</li>
          <li>Innenraum (Atmosphäre)</li>
          <li>Team (Vertrauen)</li>
          <li>Produkte/Dienstleistungen</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Bewertungen aktiv managen</h3>
        <p>
          Bitte zufriedene Kunden aktiv um Bewertungen und antworte auf alle Rezensionen – positiv wie negativ. Mehr dazu in unserem Artikel über <a href="/blog/google-bewertungen-bekommen" className="text-primary hover:underline">Google Bewertungen bekommen</a>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Häufige Fehler vermeiden
        </h2>
        <div className="space-y-4">
          {[
            { title: "Keyword-Stuffing im Namen", desc: "Füge keine Keywords in deinen Unternehmensnamen ein – das verstößt gegen Googles Richtlinien." },
            { title: "Inkonsistente NAP-Daten", desc: "Unterschiedliche Adressen auf verschiedenen Plattformen verwirren Google." },
            { title: "Fake-Bewertungen kaufen", desc: "Google erkennt diese und kann dein Profil abstrafen oder löschen." },
            { title: "Vernachlässigung nach Setup", desc: "Ein Google Profil braucht regelmäßige Pflege und Updates." },
          ].map((mistake, index) => (
            <div key={index} className="flex items-start gap-3 bg-destructive/5 p-4 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{mistake.title}:</strong>
                <span className="text-muted-foreground ml-1">{mistake.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Wie lange dauert es, bis sich das Ranking verbessert?
            </h3>
            <p className="text-muted-foreground">
              Erste Verbesserungen sind oft nach 2-4 Wochen sichtbar. Für signifikante Ranking-Steigerungen solltest du 2-3 Monate einplanen, da Google Zeit braucht, um Änderungen zu verarbeiten.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Kann ich mein Ranking in mehreren Städten verbessern?
            </h3>
            <p className="text-muted-foreground">
              Ja, aber nur wenn du dort physisch präsent bist. Für jeden Standort brauchst du ein separates, verifiziertes Google Business Profil.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Sind bezahlte Anzeigen besser als organisches Ranking?
            </h3>
            <p className="text-muted-foreground">
              Beide haben ihre Berechtigung. Organisches Ranking ist langfristig kosteneffizienter und vertrauenswürdiger. Anzeigen können für schnelle Ergebnisse sinnvoll sein.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Was kostet professionelle Google Maps Optimierung?
            </h3>
            <p className="text-muted-foreground">
              Professionelle Optimierung beginnt bei etwa 300€ einmalig. Bei Local Dominator erhältst du ein komplettes Optimierungspaket für 299€ mit Geld-zurück-Garantie.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default GoogleMapsRanking;
