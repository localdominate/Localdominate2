import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { UtensilsCrossed, Camera, Clock, MapPin, Star, Lightbulb } from "lucide-react";

const LocalSeoRestaurant = () => {
  const article = getArticleBySlug("local-seo-fuer-restaurants")!;

  const tocItems = [
    { id: "ranking-faktoren", title: "Restaurant-spezifische Ranking-Faktoren" },
    { id: "speisekarte", title: "Speisekarte optimieren" },
    { id: "bilder", title: "Bilder-Strategie für Gastro" },
    { id: "reservierungen", title: "Reservierungen über Google" },
    { id: "faq", title: "Häufig gestellte Fragen" },
  ];

  return (
    <ArticleLayout article={article}>
      <TableOfContents items={tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>"Restaurant in der Nähe"</strong> ist eine der häufigsten Suchanfragen auf Google. Wenn hungrige Kunden in deiner Stadt suchen, sollte dein Restaurant ganz oben erscheinen. Dieser Guide zeigt dir, wie du mit Local SEO mehr Gäste gewinnst.
      </p>

      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Restaurant-spezifische Ranking-Faktoren
        </h2>
        <p className="mb-4">
          Für Restaurants gelten besondere Regeln. Google bewertet zusätzlich zu den Standard-Faktoren auch gastronomie-spezifische Signale.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: UtensilsCrossed, title: "Küchen-Kategorie", desc: "Die richtige Kategorie (Italienisch, Asiatisch, etc.) ist entscheidend für Suchanfragen." },
            { icon: Clock, title: "Aktuelle Öffnungszeiten", desc: "Besonders wichtig: Mittagspause, Ruhetage, Feiertage müssen stimmen." },
            { icon: Camera, title: "Speisen-Fotos", desc: "Appetitliche Bilder deiner Gerichte sind der #1 Entscheidungsfaktor." },
            { icon: Star, title: "Bewertungen", desc: "Anzahl und Qualität der Reviews sind bei Restaurants besonders wichtig." },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
              <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{item.title}</strong>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="speisekarte" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Speisekarte optimieren
        </h2>
        <p className="mb-4">
          Deine Speisekarte ist eine SEO-Goldmine. Richtig optimiert, bringt sie dir Traffic für hunderte von Keywords.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Keywords in Gerichtnamen</h3>
        <p className="mb-4">
          Statt "Spezial Nr. 12" schreibe "Hausgemachte Lasagne mit frischem Basilikum". So wirst du für "Lasagne [Stadt]" gefunden.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Beschreibungen hinzufügen</h3>
        <p className="mb-4">
          Jedes Gericht sollte eine kurze, appetitliche Beschreibung haben. Erwähne Zutaten, Zubereitungsart und besondere Merkmale (bio, vegan, regional).
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Profi-Tipp:</strong>
              <p className="text-muted-foreground mt-1">
                Lade deine komplette Speisekarte als PDF auf deine Website UND als Bilder in dein Google Business Profil. So indexiert Google alle Gerichte.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Preise angeben</h3>
        <p>
          Transparente Preise bauen Vertrauen auf. Google zeigt Preise auch in den Suchergebnissen an, was die Klickrate erhöht.
        </p>
      </section>

      <ArticleCTA variant="inline" />

      <section id="bilder" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Bilder-Strategie für Gastro
        </h2>
        <p className="mb-4">
          Bei Restaurants sind Bilder oft entscheidender als Text. Ein appetitliches Foto kann den Unterschied zwischen "Vorbeigehen" und "Reingehen" machen.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">1</span>
            </div>
            <div>
              <strong className="text-foreground">Speisen fotografieren:</strong>
              <span className="text-muted-foreground ml-1">
                Mindestens 10-15 deiner besten Gerichte in professioneller Qualität. Tageslicht, sauberer Hintergrund, appetitliche Anrichtung.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">2</span>
            </div>
            <div>
              <strong className="text-foreground">Ambiente zeigen:</strong>
              <span className="text-muted-foreground ml-1">
                Innenraum, Terrasse, Bar-Bereich. Gäste wollen wissen, was sie erwartet.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">3</span>
            </div>
            <div>
              <strong className="text-foreground">Team vorstellen:</strong>
              <span className="text-muted-foreground ml-1">
                Fotos vom Koch, Service-Team oder Inhaber schaffen persönliche Verbindung.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">4</span>
            </div>
            <div>
              <strong className="text-foreground">Regelmäßig aktualisieren:</strong>
              <span className="text-muted-foreground ml-1">
                Füge monatlich neue Bilder hinzu. Saisonale Gerichte, Events, neue Einrichtung.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 mt-6">
          <h3 className="font-semibold text-foreground mb-3">Technische Tipps für Bilder:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Auflösung mindestens 720x720 Pixel</li>
            <li>JPEG-Format für beste Komprimierung</li>
            <li>Dateinamen mit Keywords (pizza-margherita-restaurant-name.jpg)</li>
            <li>Keine Wasserzeichen oder Text-Overlays</li>
          </ul>
        </div>
      </section>

      <section id="reservierungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Reservierungen über Google
        </h2>
        <p className="mb-4">
          Google bietet die Möglichkeit, Reservierungen direkt aus den Suchergebnissen anzunehmen. Das reduziert Hürden und bringt mehr Gäste.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Reservierungslink einrichten</h3>
        <p className="mb-4">
          In deinem Google Business Profil kannst du einen Reservierungslink hinterlegen. Nutze dein eigenes Buchungssystem oder Partner wie OpenTable, Resy oder TheFork.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Reservierungsbutton aktivieren</h3>
        <p className="mb-4">
          Der "Tisch reservieren" Button erscheint prominent in deinem Profil. Je einfacher die Buchung, desto mehr Reservierungen.
        </p>

        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-foreground">Wichtig für Laufkundschaft:</strong>
            <p className="text-muted-foreground mt-1">
              Aktiviere auch "Für Laufkundschaft geöffnet" in den Attributen. So wissen Gäste, dass sie auch ohne Reservierung willkommen sind.
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
              Wie wichtig ist eine eigene Website für Restaurants?
            </h3>
            <p className="text-muted-foreground">
              Sehr wichtig! Sie stärkt dein Google Ranking und bietet Platz für detaillierte Informationen, die nicht ins Google Profil passen (volle Speisekarte, Geschichte, Events).
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Sollte ich auf Lieferdienste wie Lieferando setzen?
            </h3>
            <p className="text-muted-foreground">
              Sie können Traffic bringen, aber die Provisionen sind hoch. Optimiere lieber dein Google Profil für eigene Bestellungen und Reservierungen.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Wie gehe ich mit unfairen Bewertungen um?
            </h3>
            <p className="text-muted-foreground">
              Antworte sachlich und professionell. Biete eine Lösung an. Potenzielle Gäste sehen, wie du mit Kritik umgehst – das kann sogar vertrauensbildend wirken.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Lohnt sich Local SEO auch für kleine Restaurants?
            </h3>
            <p className="text-muted-foreground">
              Gerade für kleine Restaurants! Große Ketten haben zwar Budget für Werbung, aber lokale Suchergebnisse bevorzugen authentische, gut optimierte lokale Betriebe.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoRestaurant;
