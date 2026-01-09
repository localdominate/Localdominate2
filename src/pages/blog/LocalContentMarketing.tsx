import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { useLanguage } from "@/i18n/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, FileText, MapPin, Calendar, Users, Repeat, Download, Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";

const LocalContentMarketing = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-content-marketing", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "content-ideen", title: "50+ Lokale Content-Ideen" },
    { id: "stadtteil-seiten", title: "Stadtteil-Landingpages" },
    { id: "lokale-guides", title: "Lokale Guides erstellen" },
    { id: "events", title: "Event-Content & News" },
    { id: "ugc", title: "User-Generated Content" },
    { id: "recycling", title: "Content-Recycling" },
    { id: "kalender", title: "Content-Kalender" },
    { id: "faq", title: "FAQ" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist lokales Content Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lokales Content Marketing ist die Erstellung von Inhalten mit geografischem Bezug, um bei lokalen Suchanfragen gefunden zu werden. Es umfasst Stadtteil-Seiten, lokale Guides, Event-Content und Community-bezogene Inhalte."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte ich lokalen Content veröffentlichen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für lokale Unternehmen reicht 2-4x pro Monat qualitativ hochwertiger Content. Wichtiger als Häufigkeit ist Relevanz und lokaler Bezug. Ein guter Stadtteil-Guide bringt mehr als 10 generische Blogposts."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Content-Formate funktionieren lokal am besten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Am besten funktionieren: Stadtteil-Landingpages, lokale Best-Of-Listen, Event-Ankündigungen, Kundenerfolgsgeschichten und How-To-Content mit lokalem Bezug. Video-Content auf Google Maps und Social Media gewinnt zunehmend an Bedeutung."
        }
      }
    ]
  };

  const contentIdeas = [
    { category: "📍 Standort", ideas: ["Stadtteil-Vorstellung", "Parkplatztipps", "Anfahrtsbeschreibung", "Geschichte des Viertels", "Nachbarschaft-Spotlight"] },
    { category: "🎉 Events", ideas: ["Lokale Veranstaltungen", "Stadtfest-Teilnahme", "Eigene Events", "Branchen-Messen", "Saisonale Aktionen"] },
    { category: "👥 Community", ideas: ["Kunden-Interviews", "Mitarbeiter-Vorstellung", "Lokale Partnerschaften", "Vereins-Engagement", "Spenden-Aktionen"] },
    { category: "💡 How-To", ideas: ["Lokale Tipps & Tricks", "Branchenspezifische Anleitungen", "FAQs der Region", "Vergleiche vor Ort", "Checklisten"] },
    { category: "📰 News", ideas: ["Firmennews", "Branchentrends lokal", "Neue Produkte/Services", "Auszeichnungen", "Jubiläen"] },
    { category: "🌟 Empfehlungen", ideas: ["Beste Restaurants in...", "Lokale Geheimtipps", "Partner-Empfehlungen", "Branchen-Guide", "Saisonale Picks"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} additionalSchema={faqSchema}>
      {/* Einführung */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Lokaler Content ist der Schlüssel zu nachhaltigem SEO-Erfolg.</strong> Während viele Unternehmen auf generischen Content setzen, kannst du mit gezielt lokalen Inhalten deine Konkurrenz überholen. Dieser Guide zeigt dir, wie du Content erstellst, der bei lokalen Suchanfragen rankt und echte Kunden bringt.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Warum lokaler Content so effektiv ist
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Weniger Wettbewerb:</strong> "[Stadt] + [Keyword]" hat viel weniger Konkurrenz als nur "[Keyword]"</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Höhere Relevanz:</strong> Google erkennt geografischen Bezug und rankt dich für lokale Suchen höher</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Bessere Conversion:</strong> Lokale Sucher haben höhere Kaufabsicht – sie suchen jetzt, in ihrer Nähe</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Community-Building:</strong> Lokaler Content stärkt die Bindung zu deiner Nachbarschaft</span>
            </li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-content-marketing" position="intro" />

      {/* 50+ Content-Ideen */}
      <section id="content-ideen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Lightbulb className="h-8 w-8 text-primary" />
          50+ Lokale Content-Ideen
        </h2>
        
        <p className="mb-6">
          Dir fehlen Content-Ideen? Hier sind über 50 Themen, die für lokale Unternehmen funktionieren – nach Kategorien sortiert:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {contentIdeas.map((cat, idx) => (
            <div key={idx} className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-3">{cat.category}</h3>
              <ul className="space-y-1 text-sm">
                {cat.ideas.map((idea, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Bonus: Saisonale Content-Ideen</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Saison</th>
                <th className="border p-3 text-left">Content-Ideen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">🌸 Frühling</td>
                <td className="border p-3">Frühjahrsputz-Tipps, Osteraktionen, Gartenstart, Outdoor-Events, Allergie-Tipps</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">☀️ Sommer</td>
                <td className="border p-3">Sommeröffnungszeiten, Ferienprogramm, lokale Feste, Hitzetipps, Urlaubsservice</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">🍂 Herbst</td>
                <td className="border p-3">Back-to-School, Halloween, Erntedank, Herbstaktionen, Wintervorbereitung</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">❄️ Winter</td>
                <td className="border p-3">Weihnachtsaktionen, Neujahrs-Specials, Winterdienst, Geschenkideen, Jahresrückblick</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Stadtteil-Seiten */}
      <section id="stadtteil-seiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-8 w-8 text-primary" />
          Stadtteil-Landingpages erstellen
        </h2>
        
        <p className="mb-6">
          <strong>Stadtteil-Seiten</strong> sind eine der effektivsten Local-SEO-Strategien. Statt nur eine Kontaktseite zu haben, erstellst du dedizierte Seiten für jeden Stadtteil, den du bedienst.
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span><strong>Beispiel:</strong> Ein Schlüsseldienst in München erstellt Seiten für "Schlüsseldienst Schwabing", "Schlüsseldienst Sendling", "Schlüsseldienst Maxvorstadt" – und rankt für alle diese lokalen Suchanfragen.</span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Struktur einer Stadtteil-Seite</h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <strong>H1: [Service] in [Stadtteil] – [USP]</strong>
              <p className="text-sm text-muted-foreground">z.B. "Friseur in Schwabing – Ihr Haarspezialist seit 1995"</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <strong>Einleitung mit lokalem Bezug</strong>
              <p className="text-sm text-muted-foreground">Erwähne den Stadtteil, bekannte Landmarks, Nachbarschaft</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <strong>Services für diesen Standort</strong>
              <p className="text-sm text-muted-foreground">Welche Leistungen bietest du speziell hier an?</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <strong>Lokale Testimonials</strong>
              <p className="text-sm text-muted-foreground">Kundenbewertungen von Personen aus diesem Stadtteil</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
            <div>
              <strong>Anfahrt & Kontakt</strong>
              <p className="text-sm text-muted-foreground">Spezifische Anfahrtsbeschreibung, ÖPNV, Parkplätze für diesen Stadtteil</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
            <div>
              <strong>Eingebettete Karte</strong>
              <p className="text-sm text-muted-foreground">Google Maps mit deinem Standort und Umgebung</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
            <span><strong>Achtung Duplicate Content:</strong> Jede Stadtteil-Seite muss einzigartigen Content haben. Kopiere nicht einfach denselben Text und ersetze nur den Stadtteilnamen. Schreibe für jeden Stadtteil individuelle Texte!</span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Beispiel einer Stadtteil-Seite</h3>

        <div className="bg-muted rounded-lg p-6 mb-6">
          <h4 className="font-bold text-lg mb-2">Zahnarzt in München-Haidhausen</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Willkommen in unserer Zahnarztpraxis, direkt am Ostbahnhof in Haidhausen! Seit 2010 betreuen wir Patienten aus dem Franzosenviertel, dem Wiener Platz und der Rosenheimer Straße. Als Teil der Haidhausen-Community kennen wir die Bedürfnisse unserer Nachbarn...
          </p>
          <ul className="text-sm space-y-1 mb-4">
            <li>✓ 5 Minuten vom Ostbahnhof (S-Bahn, U5)</li>
            <li>✓ Kostenlose Parkplätze im Hinterhof</li>
            <li>✓ Barrierefreier Zugang</li>
            <li>✓ Sprechzeiten auch samstags</li>
          </ul>
          <p className="text-sm italic text-muted-foreground">
            "Endlich ein Zahnarzt direkt in Haidhausen! Super Lage am Wiener Platz." – Maria K., Anwohnerin
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-content-marketing" position="middle" />

      {/* Lokale Guides */}
      <section id="lokale-guides" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lokale Guides & Best-Of-Listen erstellen</h2>
        
        <p className="mb-6">
          <strong>Lokale Guides</strong> sind Content-Gold. Sie ranken gut für "Beste [X] in [Stadt]"-Suchen und positionieren dich als lokalen Experten.
        </p>

        <h3 className="text-xl font-semibold mb-4">Arten von lokalen Guides</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">🏆 Best-Of-Listen</h4>
            <ul className="space-y-2 text-sm">
              <li>• "Die 10 besten Restaurants in [Stadtteil]"</li>
              <li>• "Top 5 Cafés zum Arbeiten in [Stadt]"</li>
              <li>• "Beste [Branche] in [Stadt] – Vergleich"</li>
              <li>• "Geheimtipps: Unbekannte Läden in [Viertel]"</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">📖 Ratgeber & How-Tos</h4>
            <ul className="space-y-2 text-sm">
              <li>• "Umzug nach [Stadt]: Der komplette Guide"</li>
              <li>• "Parken in der Altstadt: Alle Optionen"</li>
              <li>• "[Stadt] für Familien: Aktivitäten & Tipps"</li>
              <li>• "Wochenende in [Stadt]: 48-Stunden-Plan"</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">🗺️ Stadtteil-Portraits</h4>
            <ul className="space-y-2 text-sm">
              <li>• "[Stadtteil] erkunden: Geschichte & Highlights"</li>
              <li>• "Leben in [Stadtteil]: Was Anwohner lieben"</li>
              <li>• "Spaziergang durch [Viertel]: Die schönsten Ecken"</li>
              <li>• "[Stadtteil] vs. [Stadtteil]: Ein Vergleich"</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">📅 Saisonale Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>• "Weihnachtsmärkte in [Stadt]: Alle Termine"</li>
              <li>• "Sommer in [Stadt]: Freibäder & Biergärten"</li>
              <li>• "Frühlingsblüte in [Stadt]: Die schönsten Parks"</li>
              <li>• "Silvester in [Stadt]: Wo feiern?"</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span><strong>SEO-Tipp:</strong> Erstelle Guides, die zu deiner Branche passen und dich als Experten positionieren. Ein Friseur kann "Die besten Cafés in [Stadtteil]" schreiben – zeigt, dass er das Viertel kennt. Ein Restaurant erstellt "Kulinarische Stadtführung [Stadt]".</span>
          </p>
        </div>
      </section>

      {/* Event-Content */}
      <section id="events" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          Event-Content & lokale News
        </h2>
        
        <p className="mb-6">
          Lokale Events bieten perfekte Anlässe für <strong>aktuellen, relevanten Content</strong>. Sie zeigen Google, dass deine Website aktiv ist und lokale Relevanz hat.
        </p>

        <h3 className="text-xl font-semibold mb-4">Event-Content-Strategien</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎭 Vor dem Event</h4>
            <p className="text-sm text-muted-foreground mb-2">Ankündigungen, Tipps, Vorschauen</p>
            <p className="text-sm">"Stadtfest [Stadt] 2026: Alles was du wissen musst" – veröffentliche 2-4 Wochen vorher</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">📸 Während des Events</h4>
            <p className="text-sm text-muted-foreground mb-2">Live-Updates, Social Media, Fotos</p>
            <p className="text-sm">Stories auf Instagram, Foto-Updates auf der Website, Google Posts</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">📝 Nach dem Event</h4>
            <p className="text-sm text-muted-foreground mb-2">Rückblicke, Highlights, Danksagungen</p>
            <p className="text-sm">"Rückblick: [Event] 2026 – Unsere Highlights" mit Fotos und Kundenreaktionen</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Lokale Event-Quellen</h3>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Stadtkalender:</strong> Offizielle Veranstaltungskalender der Stadt</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Gewerbeverein:</strong> Aktionen und Events der lokalen Händler</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Lokale Zeitung:</strong> Veranstaltungstipps und Termine</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Facebook Events:</strong> Lokale Gruppen und Veranstalter</span>
          </li>
        </ul>
      </section>

      {/* UGC */}
      <section id="ugc" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="h-8 w-8 text-primary" />
          User-Generated Content strategisch nutzen
        </h2>
        
        <p className="mb-6">
          <strong>User-Generated Content (UGC)</strong> – also von Kunden erstellte Inhalte – ist authentisch, kostenlos und SEO-wirksam. Hier erfährst du, wie du ihn systematisch einsammelst und nutzt.
        </p>

        <h3 className="text-xl font-semibold mb-4">Arten von UGC</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-semibold mb-1">Bewertungen</h4>
            <p className="text-sm text-muted-foreground">Google Reviews, Facebook, Branchenportale</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📸</div>
            <h4 className="font-semibold mb-1">Fotos & Videos</h4>
            <p className="text-sm text-muted-foreground">Instagram-Posts, Stories, TikToks</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">💬</div>
            <h4 className="font-semibold mb-1">Testimonials</h4>
            <p className="text-sm text-muted-foreground">Zitate, Erfolgsgeschichten, Case Studies</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">So sammelst du mehr UGC</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">📱</span>
            <div>
              <strong>Instagram-Hashtag</strong>
              <p className="text-sm text-muted-foreground">Erstelle einen branded Hashtag (#BeiMüller, #CafeSonnenschein) und bitte Kunden, ihn zu nutzen.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">📧</span>
            <div>
              <strong>Nach-Kauf-E-Mails</strong>
              <p className="text-sm text-muted-foreground">Bitte automatisch um Bewertung und Fotos nach dem Besuch/Kauf.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🏷️</span>
            <div>
              <strong>Foto-Spot einrichten</strong>
              <p className="text-sm text-muted-foreground">Eine "instagrammable" Ecke im Laden mit Hashtag-Hinweis.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🎁</span>
            <div>
              <strong>Incentives bieten</strong>
              <p className="text-sm text-muted-foreground">Kleine Belohnungen für Bewertungen (rechtlich prüfen!) oder Foto-Wettbewerbe.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">UGC auf deiner Website nutzen</h3>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Testimonial-Sektion:</strong> Beste Bewertungen prominent auf der Startseite</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Instagram-Feed einbinden:</strong> Widget mit Kundenfotos auf der Website</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Case Studies:</strong> Ausführliche Kundengeschichten mit Zitaten und Fotos</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Bewertungs-Schema:</strong> JSON-LD für Rich Snippets in Google</span>
          </li>
        </ul>
      </section>

      {/* Content-Recycling */}
      <section id="recycling" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Repeat className="h-8 w-8 text-primary" />
          Content-Recycling: Ein Inhalt, viele Formate
        </h2>
        
        <p className="mb-6">
          Aus einem <strong>Blogpost</strong> kannst du dutzende Content-Stücke erstellen. So maximierst du den ROI deiner Content-Erstellung.
        </p>

        <div className="bg-card border rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4">Beispiel: Ein Blogartikel → 10+ Content-Stücke</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Ausgangspunkt: "Die 10 besten Cafés in München-Schwabing" (2.000 Wörter)
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>📱 10 Instagram-Posts (je 1 Café)</li>
              <li>📹 1 YouTube-Video / Reels-Serie</li>
              <li>📧 1 Newsletter-Ausgabe</li>
              <li>🐦 10 Twitter/X-Threads</li>
              <li>📍 10 Google Posts</li>
            </ul>
            <ul className="space-y-2">
              <li>📸 1 Pinterest-Pin (Grafik)</li>
              <li>🎙️ 1 Podcast-Episode</li>
              <li>📊 1 Infografik</li>
              <li>📑 1 PDF-Download</li>
              <li>🔄 Jährliches Update</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Content-Recycling-Workflow</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <strong>Pillar-Content erstellen</strong>
              <p className="text-sm text-muted-foreground">Ein umfassender Blogartikel (2.000+ Wörter) als Basis.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <strong>In Snippets zerlegen</strong>
              <p className="text-sm text-muted-foreground">Jeden Abschnitt, jedes Zitat, jeden Tipp separat notieren.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <strong>Formate anpassen</strong>
              <p className="text-sm text-muted-foreground">Text für Social Media kürzen, Grafiken erstellen, Videos skripten.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <strong>Verteilen & Planen</strong>
              <p className="text-sm text-muted-foreground">Content über Wochen verteilt auf verschiedenen Kanälen posten.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
            <div>
              <strong>Aktualisieren</strong>
              <p className="text-sm text-muted-foreground">Jährlich updaten und erneut teilen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content-Kalender */}
      <section id="kalender" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Download className="h-8 w-8 text-primary" />
          Content-Kalender Template
        </h2>
        
        <p className="mb-6">
          Ein <strong>Content-Kalender</strong> hilft dir, regelmäßig zu veröffentlichen und keine wichtigen Termine zu verpassen. Hier ein Template speziell für lokale Unternehmen:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Woche</th>
                <th className="border p-3 text-left">Blog/Website</th>
                <th className="border p-3 text-left">Social Media</th>
                <th className="border p-3 text-left">Google Business</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Woche 1</td>
                <td className="border p-3">Neuer Blogartikel</td>
                <td className="border p-3">5 Posts (2x Promo, 2x Tipps, 1x Behind-the-Scenes)</td>
                <td className="border p-3">1 Google Post + neues Foto</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Woche 2</td>
                <td className="border p-3">—</td>
                <td className="border p-3">5 Posts (Kunden-UGC, Recycled Content)</td>
                <td className="border p-3">1 Event/Angebot Post</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Woche 3</td>
                <td className="border p-3">Neuer Blogartikel oder Update</td>
                <td className="border p-3">5 Posts</td>
                <td className="border p-3">Bewertungs-Aufforderung</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Woche 4</td>
                <td className="border p-3">—</td>
                <td className="border p-3">5 Posts + Monatsrückblick</td>
                <td className="border p-3">1 Google Post + Q&A beantworten</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Jährliche lokale Content-Termine</h3>

        <div className="bg-card border rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🗓️ Feste Termine</h4>
              <ul className="space-y-1">
                <li>• Firmenjubiläum</li>
                <li>• Stadtfest / Straßenfest</li>
                <li>• Weihnachtsmarkt-Saison</li>
                <li>• Lokale Messen</li>
                <li>• Branchentage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📅 Wiederkehrend</h4>
              <ul className="space-y-1">
                <li>• Saisonwechsel (4x/Jahr)</li>
                <li>• Feiertage (Ostern, Pfingsten...)</li>
                <li>• Back-to-School (August)</li>
                <li>• Jahresrückblick (Dezember)</li>
                <li>• Trends/Ausblick (Januar)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-content-marketing" position="end" />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Was ist lokales Content Marketing?</AccordionTrigger>
            <AccordionContent>
              Lokales Content Marketing ist die Erstellung von Inhalten mit geografischem Bezug, um bei lokalen Suchanfragen gefunden zu werden. Es umfasst Stadtteil-Seiten, lokale Guides, Event-Content und Community-bezogene Inhalte. Ziel ist es, in der lokalen Suche besser zu ranken und sich als lokaler Experte zu positionieren.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie oft sollte ich lokalen Content veröffentlichen?</AccordionTrigger>
            <AccordionContent>
              Für lokale Unternehmen reicht 2-4x pro Monat qualitativ hochwertiger Content. Wichtiger als Häufigkeit ist Relevanz und lokaler Bezug. Ein guter Stadtteil-Guide bringt mehr als 10 generische Blogposts. Konsistenz ist wichtiger als Frequenz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Content-Formate funktionieren lokal am besten?</AccordionTrigger>
            <AccordionContent>
              Am besten funktionieren: Stadtteil-Landingpages, lokale Best-Of-Listen, Event-Ankündigungen, Kundenerfolgsgeschichten und How-To-Content mit lokalem Bezug. Video-Content auf Google Maps und Social Media gewinnt zunehmend an Bedeutung. Auch FAQ-Seiten mit lokalen Fragen ranken gut.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Wie finde ich lokale Keywords für meinen Content?</AccordionTrigger>
            <AccordionContent>
              Kombiniere deine Dienstleistungen mit Ortsnamen: "[Service] [Stadt]", "[Service] [Stadtteil]", "[Service] in meiner Nähe". Nutze Google Suggest (Autocomplete), schaue was Wettbewerber machen und analysiere die "Ähnliche Fragen"-Box in Google für lokale Themen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Was ist Duplicate Content bei Stadtteil-Seiten?</AccordionTrigger>
            <AccordionContent>
              Duplicate Content entsteht, wenn du denselben Text auf mehreren Stadtteil-Seiten verwendest und nur den Ortsnamen austauschst. Google erkennt das und rankt die Seiten schlecht. Jede Stadtteil-Seite muss einzigartigen, relevanten Content haben – spezifische Anfahrtsinfos, lokale Testimonials, stadtteilbezogene Details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Wie nutze ich Kundenbewertungen im Content?</AccordionTrigger>
            <AccordionContent>
              Bette Testimonials auf deiner Website ein (mit Schema Markup für Rich Snippets), erstelle Case Studies aus besonders guten Geschichten, teile positive Bewertungen als Social-Media-Posts und nutze Kundenfotos auf deiner Website. Frage immer um Erlaubnis, bevor du Namen und Fotos verwendest.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Wie aktualisiere ich lokalen Content effektiv?</AccordionTrigger>
            <AccordionContent>
              Plane jährliche Updates für Evergreen-Content wie "Beste [X] in [Stadt]"-Listen. Füge neue Einträge hinzu, entferne geschlossene Geschäfte, aktualisiere Daten und Preise. Ändere das Datum nur, wenn du signifikante Updates gemacht hast. Google belohnt aktuelle Inhalte mit besseren Rankings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Kann ich Content von anderen Websites übernehmen?</AccordionTrigger>
            <AccordionContent>
              Nein, kopiere niemals Content von anderen Websites. Das schadet deinem SEO und kann rechtliche Konsequenzen haben. Du kannst dich von anderen inspirieren lassen, aber schreibe immer eigene, einzigartige Texte. Zitate mit Quellenangabe sind in Maßen okay.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </ArticleLayout>
  );
};

export default LocalContentMarketing;
