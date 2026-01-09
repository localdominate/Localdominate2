import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Star, MapPin, Phone, Users, Calendar, Target, AlertTriangle, Award, ArrowRight, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoCaseStudy = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-case-study-baecker", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "ausgangssituation", title: "Ausgangssituation" },
    { id: "herausforderungen", title: "Herausforderungen" },
    { id: "strategie", title: "Die 6-Monats-Strategie" },
    { id: "monat-1-2", title: "Monat 1-2: Fundament" },
    { id: "monat-3-4", title: "Monat 3-4: Aufbau" },
    { id: "monat-5-6", title: "Monat 5-6: Skalierung" },
    { id: "ergebnisse", title: "Ergebnisse" },
    { id: "learnings", title: "Lessons Learned" },
    { id: "kosten-roi", title: "Kosten & ROI" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        Eine traditionelle Bäckerei in einer bayerischen Kleinstadt kämpft gegen Filialketten 
        und Online-Bestellungen. Durch eine konsequente Local SEO Strategie konnte sie nicht 
        nur überleben, sondern ihre <strong>Kundenfrequenz verdreifachen</strong> und den 
        <strong>Umsatz um 127% steigern</strong>. Dies ist ihre Geschichte.
      </p>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-amber-600" />
          <div>
            <p className="text-sm text-amber-700 dark:text-amber-400">Case Study</p>
            <h3 className="font-bold text-lg">Bäckerei Sonnenschein, Rosenheim</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-amber-700">+127%</p>
            <p className="text-xs text-muted-foreground">Umsatzsteigerung</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-700">3x</p>
            <p className="text-xs text-muted-foreground">Mehr Laufkundschaft</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-700">4.9★</p>
            <p className="text-xs text-muted-foreground">Google-Bewertung</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-700">#1</p>
            <p className="text-xs text-muted-foreground">Maps Ranking</p>
          </div>
        </div>
      </div>

      <BlogCTAABTest articleSlug="local-seo-case-study-baecker" position="intro" />

      {/* Ausgangssituation */}
      <section id="ausgangssituation" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die Ausgangssituation: Ein Traditionsunternehmen in der Krise</h2>
        
        <p className="mb-6">
          Die <strong>Bäckerei Sonnenschein</strong> existiert seit 1952 in Rosenheim, einer 
          Stadt mit ca. 65.000 Einwohnern in Oberbayern. Geführt von der dritten Generation, 
          stand das Familienunternehmen im Jahr 2024 vor existenziellen Problemen.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                Das Unternehmen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><strong>Gründung:</strong> 1952</p>
              <p><strong>Mitarbeiter:</strong> 8 (inkl. 2 Bäckermeister)</p>
              <p><strong>Produkte:</strong> Brot, Brötchen, Kuchen, Snacks</p>
              <p><strong>Standort:</strong> Fußgängerzone, kein Parkplatz</p>
              <p><strong>USP:</strong> Handwerkliche Qualität, regionale Zutaten</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Die Probleme
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• <strong>-35% Umsatz</strong> in 3 Jahren</p>
              <p>• Keine Online-Präsenz außer veralteter Website</p>
              <p>• 2,8 Sterne bei Google (12 alte Bewertungen)</p>
              <p>• Unsichtbar bei "Bäckerei Rosenheim" Suche</p>
              <p>• Jüngere Kunden fehlen komplett</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-muted-foreground flex-shrink-0" />
            <blockquote className="italic text-muted-foreground">
              "Wir backen seit 70 Jahren das beste Brot der Stadt, aber niemand weiß mehr, 
              dass es uns gibt. Die Leute fahren zum Supermarkt oder bestellen online. 
              Unsere Stammkunden werden älter, und die Jungen kennen uns nicht."
              <footer className="mt-3 text-sm font-semibold not-italic">
                — Maria Sonnenschein, Inhaberin (3. Generation)
              </footer>
            </blockquote>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Wettbewerbsanalyse zu Beginn</h3>

        <p className="mb-4">
          Bei der Suche nach "Bäckerei Rosenheim" erschienen im Local Pack:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Position</th>
                <th className="border p-3 text-left">Wettbewerber</th>
                <th className="border p-3 text-left">Bewertungen</th>
                <th className="border p-3 text-left">Sterne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">#1</td>
                <td className="border p-3">Müller Filiale Rosenheim</td>
                <td className="border p-3">347</td>
                <td className="border p-3">4.2★</td>
              </tr>
              <tr>
                <td className="border p-3">#2</td>
                <td className="border p-3">Backwerk am Bahnhof</td>
                <td className="border p-3">198</td>
                <td className="border p-3">4.0★</td>
              </tr>
              <tr>
                <td className="border p-3">#3</td>
                <td className="border p-3">Hofpfisterei</td>
                <td className="border p-3">156</td>
                <td className="border p-3">4.3★</td>
              </tr>
              <tr className="bg-red-50 dark:bg-red-950/30">
                <td className="border p-3">#8</td>
                <td className="border p-3 font-semibold">Bäckerei Sonnenschein</td>
                <td className="border p-3">12</td>
                <td className="border p-3">2.8★</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Herausforderungen */}
      <section id="herausforderungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die spezifischen Herausforderungen</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-semibold">Negative Altbewertungen</p>
                <p className="text-sm text-muted-foreground">
                  Die 12 vorhandenen Bewertungen waren überwiegend negativ (aus 2018-2020) 
                  und bezogen sich auf längst behobene Probleme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-semibold">Technologie-Skepsis</p>
                <p className="text-sm text-muted-foreground">
                  Die Familie hatte Bedenken gegenüber digitalen Maßnahmen und begrenztes 
                  Budget für Marketing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-semibold">Starke Konkurrenz</p>
                <p className="text-sm text-muted-foreground">
                  Drei Filialketten dominierten die lokalen Suchergebnisse mit hohen 
                  Bewertungszahlen.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-semibold">Keine Parkmöglichkeiten</p>
                <p className="text-sm text-muted-foreground">
                  Standort in der Fußgängerzone – Vorteil für Laufkundschaft, Nachteil 
                  für gezieltes Anfahren.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
              <div>
                <p className="font-semibold">Fehlende Differenzierung</p>
                <p className="text-sm text-muted-foreground">
                  Die handwerkliche Qualität wurde nicht kommuniziert – online nicht 
                  sichtbar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">6</span>
              <div>
                <p className="font-semibold">Saisonale Schwankungen</p>
                <p className="text-sm text-muted-foreground">
                  Starke Abhängigkeit von Touristen im Sommer, Winter sehr schwach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-case-study-baecker" position="middle" />

      {/* Die Strategie */}
      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 6-Monats-Strategie im Überblick</h2>

        <p className="mb-6">
          Basierend auf der Analyse entwickelten wir einen strukturierten Plan mit klaren 
          Meilensteinen und messbaren Zielen:
        </p>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-8">
            {/* Monat 1-2 */}
            <div className="relative flex items-center gap-4">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-primary font-semibold">Monat 1-2</p>
                    <p className="font-bold">Fundament legen</p>
                    <p className="text-sm text-muted-foreground">
                      Google Business optimieren, NAP-Konsistenz, erste Bewertungsstrategie
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Monat 3-4 */}
            <div className="relative flex items-center gap-4 md:flex-row-reverse">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-primary font-semibold">Monat 3-4</p>
                    <p className="font-bold">Sichtbarkeit aufbauen</p>
                    <p className="text-sm text-muted-foreground">
                      Lokale Backlinks, Content-Strategie, Google Posts regelmäßig
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Monat 5-6 */}
            <div className="relative flex items-center gap-4">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-primary font-semibold">Monat 5-6</p>
                    <p className="font-bold">Skalieren & Optimieren</p>
                    <p className="text-sm text-muted-foreground">
                      Bewertungsmomentum nutzen, Events, Community aufbauen
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monat 1-2 */}
      <section id="monat-1-2" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Monat 1-2: Das Fundament legen</h2>

        <h3 className="text-xl font-semibold mb-4">Google Business Profil Optimierung</h3>

        <p className="mb-4">
          Das Google Business Profil war veraltet und unvollständig. Folgende Änderungen 
          wurden durchgeführt:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorher</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>❌ 1 unscharfes Foto von 2018</p>
              <p>❌ Keine Beschreibung</p>
              <p>❌ Falsche Öffnungszeiten</p>
              <p>❌ Keine Kategorien außer "Bäckerei"</p>
              <p>❌ Keine Attribute</p>
              <p>❌ Kein Q&A genutzt</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-lg text-green-600">Nachher</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>✅ 25+ professionelle Fotos</p>
              <p>✅ 750-Zeichen Beschreibung mit Keywords</p>
              <p>✅ Aktuelle Öffnungszeiten + Feiertage</p>
              <p>✅ 5 relevante Kategorien</p>
              <p>✅ 12 Attribute (Barrierefreiheit, Zahlung, etc.)</p>
              <p>✅ 15 vorab beantwortete Fragen</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">NAP-Konsistenz herstellen</h3>

        <p className="mb-4">
          Wir fanden 23 verschiedene Versionen der Geschäftsdaten im Internet – 
          ein massives Problem für Local SEO:
        </p>

        <div className="bg-muted/50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-2">Gefundene Varianten:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "Bäckerei Sonnenschein"</li>
                <li>• "Sonnenschein Bäckerei GmbH"</li>
                <li>• "Bäckerei u. Konditorei Sonnenschein"</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Adress-Probleme:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "Hauptstr. 15"</li>
                <li>• "Hauptstraße 15"</li>
                <li>• "Hauptstr. 15a"</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Telefon-Varianten:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• 08031-12345</li>
                <li>• +49 8031 12345</li>
                <li>• 0803112345</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mb-4">
          <strong>Lösung:</strong> Alle 47 identifizierten Einträge wurden auf eine 
          einheitliche Schreibweise korrigiert:
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <p className="font-mono text-sm">
            <strong>Bäckerei Sonnenschein</strong><br />
            Hauptstraße 15, 83022 Rosenheim<br />
            +49 8031 12345
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Erste Bewertungs-Initiative</h3>

        <p className="mb-4">
          Die 12 alten Bewertungen (Durchschnitt 2.8★) mussten durch neue positive 
          Bewertungen ausgeglichen werden. Strategie:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold">Stammkunden persönlich ansprechen</p>
              <p className="text-sm text-muted-foreground">
                Maria sprach 5-10 Stammkunden pro Tag an: "Wenn Sie zufrieden sind, 
                würde uns eine Google-Bewertung sehr helfen."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold">QR-Code auf Tresen</p>
              <p className="text-sm text-muted-foreground">
                Dezenter Aufsteller mit QR-Code: "Hat es geschmeckt? Wir freuen uns 
                über Ihre Bewertung!"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold">Auf alte Bewertungen antworten</p>
              <p className="text-sm text-muted-foreground">
                Professionelle, empathische Antworten auf alle negativen Bewertungen 
                – zeigt Problembewusstsein.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="text-sm">
            <strong>Ergebnis nach 2 Monaten:</strong> 34 neue Bewertungen, Durchschnitt 
            stieg von 2.8★ auf 4.1★
          </p>
        </div>
      </section>

      {/* Monat 3-4 */}
      <section id="monat-3-4" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Monat 3-4: Sichtbarkeit aufbauen</h2>

        <h3 className="text-xl font-semibold mb-4">Lokale Backlink-Strategie</h3>

        <p className="mb-4">
          Hochwertige lokale Backlinks sind der Schlüssel für bessere Rankings. 
          Wir identifizierten folgende Möglichkeiten:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Quelle</th>
                <th className="border p-3 text-left">Aktion</th>
                <th className="border p-3 text-left">Backlink-Typ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Stadt Rosenheim</td>
                <td className="border p-3">Eintrag im Gewerbeverzeichnis</td>
                <td className="border p-3">DoFollow</td>
              </tr>
              <tr>
                <td className="border p-3">Rosenheimer Tagblatt</td>
                <td className="border p-3">Pressemitteilung: "70 Jahre Bäckertradition"</td>
                <td className="border p-3">DoFollow</td>
              </tr>
              <tr>
                <td className="border p-3">Handwerkskammer</td>
                <td className="border p-3">Meisterbetrieb-Verzeichnis</td>
                <td className="border p-3">DoFollow</td>
              </tr>
              <tr>
                <td className="border p-3">Lokaler Foodblogger</td>
                <td className="border p-3">Einladung zum Brot-Tasting</td>
                <td className="border p-3">DoFollow + Erwähnung</td>
              </tr>
              <tr>
                <td className="border p-3">Grundschule Rosenheim</td>
                <td className="border p-3">Sponsoring Schulfest</td>
                <td className="border p-3">Erwähnung</td>
              </tr>
              <tr>
                <td className="border p-3">FC Rosenheim</td>
                <td className="border p-3">Brötchen-Lieferant für Heimspiele</td>
                <td className="border p-3">Logo + Link auf Website</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Content-Strategie: Lokale Relevanz</h3>

        <p className="mb-4">
          Die Website wurde um lokale Inhalte erweitert:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            "Geschichte der Bäckerei (mit historischen Fotos)",
            "Unsere Zutaten: Mehl vom Müller aus Raubling",
            "Rezept: Original Rosenheimer Butterkipferl",
            "Bildergalerie: So backen wir Ihr Brot",
            "FAQ: Allergen-Informationen, Vorbestellung",
            "Lokale Events: Weihnachtsmarkt, Stadtfest"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Google Posts: Regelmäßige Updates</h3>

        <p className="mb-4">
          Wöchentliche Google Posts wurden eingeführt:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-sm">Montag: Wochenaktion</p>
              <p className="text-xs text-muted-foreground">"Diese Woche: Nusszopf zum halben Preis!"</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-sm">Mittwoch: Behind the Scenes</p>
              <p className="text-xs text-muted-foreground">Fotos aus der Backstube, Mitarbeiter-Vorstellung</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-sm">Freitag: Wochenend-Angebot</p>
              <p className="text-xs text-muted-foreground">"Sonntags-Brötchen vorbestellen – bis Samstag 12 Uhr!"</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="text-sm">
            <strong>Ergebnis nach 4 Monaten:</strong> Position #3 im Local Pack, 
            78 Bewertungen (4.5★), +40% Website-Traffic
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-case-study-baecker" position="middle" />

      {/* Monat 5-6 */}
      <section id="monat-5-6" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Monat 5-6: Skalieren und Community aufbauen</h2>

        <h3 className="text-xl font-semibold mb-4">Bewertungs-Momentum nutzen</h3>

        <p className="mb-4">
          Mit steigender Sichtbarkeit kamen auch mehr organische Bewertungen. 
          Zusätzlich wurden kreative Aktionen gestartet:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                "Bewertungs-Frühstück"
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-3">
                Jeden ersten Samstag im Monat: Kostenloses Frühstück für Kunden, 
                die eine ehrliche Bewertung schreiben.
              </p>
              <p className="text-muted-foreground">
                Ergebnis: 15-20 neue Bewertungen pro Event
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                "Brot-Botschafter" Programm
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-3">
                10 lokale Influencer (Micro-Influencer mit 1-5k Followern) 
                bekommen monatlich Backwaren – im Austausch für ehrliche Posts.
              </p>
              <p className="text-muted-foreground">
                Ergebnis: Lokale Reichweite +12.000
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">Events für lokale Präsenz</h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🍞</span>
            </div>
            <div>
              <p className="font-semibold">Brotback-Kurs für Kinder</p>
              <p className="text-sm text-muted-foreground">
                Jeden Samstag: Kinder backen eigenes Brot. Eltern posten auf Social Media.
                Ergebnis: 50+ User-Generated Content Beiträge
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🎄</span>
            </div>
            <div>
              <p className="font-semibold">Weihnachtsmarkt-Stand</p>
              <p className="text-sm text-muted-foreground">
                Eigener Stand auf dem Rosenheimer Christkindlmarkt mit QR-Code 
                für Google-Bewertungen. Ergebnis: 45 Bewertungen in 4 Wochen
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <p className="font-semibold">Teilnahme an "Bayerns beste Bäckerei"</p>
              <p className="text-sm text-muted-foreground">
                Nominierung und Top-10-Platzierung im Landkreis. 
                Pressebericht mit Backlink in 3 lokalen Medien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section id="ergebnisse" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die Ergebnisse nach 6 Monaten</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-green-600">+127%</p>
              <p className="text-sm text-muted-foreground">Umsatz</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold text-primary">3x</p>
              <p className="text-sm text-muted-foreground">Kundenfrequenz</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-yellow-600">4.9★</p>
              <p className="text-sm text-muted-foreground">Bewertung (156)</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-red-600">#1</p>
              <p className="text-sm text-muted-foreground">Local Pack</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">Detaillierte Metriken</h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Metrik</th>
                <th className="border p-3 text-left">Vorher</th>
                <th className="border p-3 text-left">Nachher</th>
                <th className="border p-3 text-left">Veränderung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Google Maps Position</td>
                <td className="border p-3">#8</td>
                <td className="border p-3">#1</td>
                <td className="border p-3 text-green-600">+7 Plätze</td>
              </tr>
              <tr>
                <td className="border p-3">Bewertungen</td>
                <td className="border p-3">12 (2.8★)</td>
                <td className="border p-3">156 (4.9★)</td>
                <td className="border p-3 text-green-600">+144 Bewertungen</td>
              </tr>
              <tr>
                <td className="border p-3">Google Suchen/Monat</td>
                <td className="border p-3">120</td>
                <td className="border p-3">890</td>
                <td className="border p-3 text-green-600">+642%</td>
              </tr>
              <tr>
                <td className="border p-3">Anrufe über Google</td>
                <td className="border p-3">8/Monat</td>
                <td className="border p-3">67/Monat</td>
                <td className="border p-3 text-green-600">+738%</td>
              </tr>
              <tr>
                <td className="border p-3">Website-Besuche</td>
                <td className="border p-3">45/Monat</td>
                <td className="border p-3">380/Monat</td>
                <td className="border p-3 text-green-600">+744%</td>
              </tr>
              <tr>
                <td className="border p-3">Tägliche Kunden</td>
                <td className="border p-3">~80</td>
                <td className="border p-3">~240</td>
                <td className="border p-3 text-green-600">+200%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-green-600 flex-shrink-0" />
            <blockquote className="italic">
              "Ich hätte nie gedacht, dass dieses 'Internet-Zeug' so einen Unterschied machen 
              kann. Jetzt kommen jeden Tag neue Gesichter, junge Familien, Touristen – die 
              sagen alle: 'Wir haben Sie bei Google gefunden'. Wir mussten sogar einen 
              zusätzlichen Bäckergehilfen einstellen!"
              <footer className="mt-3 text-sm font-semibold not-italic text-green-700">
                — Maria Sonnenschein, Januar 2025
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section id="learnings" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lessons Learned: Was können Sie mitnehmen?</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Konsistenz schlägt Perfektion</h3>
              <p className="text-muted-foreground">
                Es waren nicht einzelne große Aktionen, sondern die konstante, tägliche 
                Arbeit an kleinen Verbesserungen. 3 Posts pro Woche, täglich 5 Kunden 
                um Bewertungen bitten – diese Routinen machten den Unterschied.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Authentizität gewinnt</h3>
              <p className="text-muted-foreground">
                Die "Handwerkstradition seit 1952" war kein Marketing-Gag, sondern 
                echter USP. Echte Fotos aus der Backstube, echte Geschichten der 
                Familie – das resoniert mit Kunden mehr als Stock-Fotos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Lokale Vernetzung ist Gold wert</h3>
              <p className="text-muted-foreground">
                Der Foodblogger-Artikel brachte mehr Traffic als 3 Monate SEO-Arbeit. 
                Die Partnerschaft mit dem FC Rosenheim brachte 200 neue Stammkunden. 
                Investieren Sie in Beziehungen vor Ort.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Negative Bewertungen sind Chancen</h3>
              <p className="text-muted-foreground">
                Die professionellen Antworten auf alte negative Bewertungen wurden 
                mehrfach in neuen 5-Sterne-Bewertungen erwähnt: "Die Inhaberin hat 
                so nett auf Kritik reagiert – das zeigt Charakter."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Events generieren Content</h3>
              <p className="text-muted-foreground">
                Der Brotback-Kurs für Kinder war ein Content-Generator: Jede Woche 
                neues Foto-Material, happy Eltern die taggen, lokale Presse berichtet. 
                Ein Event löst viele Probleme gleichzeitig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kosten & ROI */}
      <section id="kosten-roi" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Investition und Return on Investment</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gesamtkosten (6 Monate)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Professionelle Fotos (einmalig)</span>
                  <span className="font-semibold">450 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Website-Überarbeitung</span>
                  <span className="font-semibold">800 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Local SEO Beratung</span>
                  <span className="font-semibold">1.200 €</span>
                </div>
                <div className="flex justify-between">
                  <span>QR-Code Aufsteller, Flyer</span>
                  <span className="font-semibold">150 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Foodblogger Kooperation</span>
                  <span className="font-semibold">200 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Weihnachtsmarkt-Stand</span>
                  <span className="font-semibold">600 €</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold">
                  <span>Gesamt</span>
                  <span>3.400 €</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-600">Return on Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Umsatz vorher (Monat)</span>
                  <span>~18.000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Umsatz nachher (Monat)</span>
                  <span>~40.860 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Umsatzsteigerung/Monat</span>
                  <span className="font-semibold text-green-600">+22.860 €</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span>Investition amortisiert nach</span>
                  <span className="font-bold text-green-600">~5 Tagen</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI nach 6 Monaten</span>
                  <span className="font-bold text-green-600">4.030%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>Wichtiger Hinweis:</strong> Diese Ergebnisse sind ein realistisches, 
            aber überdurchschnittlich gutes Beispiel. Faktoren wie Standort, Qualität 
            des Produkts, bestehende Kundenbasis und Wettbewerbsintensität beeinflussen 
            die Ergebnisse. Die meisten Unternehmen sehen erste Verbesserungen nach 3-6 
            Monaten, volle Ergebnisse nach 6-12 Monaten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Kann ich diese Strategie auch ohne Budget umsetzen?</AccordionTrigger>
            <AccordionContent>
              Vieles geht auch kostenlos: Google Business optimieren, um Bewertungen 
              bitten, auf Bewertungen antworten, lokale Verzeichnisse pflegen. Die 
              Fotos können mit einem guten Smartphone gemacht werden. Was Zeit kostet, 
              spart Geld – und umgekehrt. Rechnen Sie mit mindestens 5-10 Stunden 
              pro Woche für die Umsetzung.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie lange dauert es, bis ich Ergebnisse sehe?</AccordionTrigger>
            <AccordionContent>
              Erste Verbesserungen bei Bewertungen und Google Posts sehen Sie sofort. 
              Rankings verbessern sich typischerweise nach 4-8 Wochen. Signifikante 
              Umsatzsteigerungen brauchen 3-6 Monate konsequenter Arbeit. Der 
              Compound-Effekt setzt dann ein: Mehr Bewertungen → bessere Rankings → 
              mehr Kunden → mehr Bewertungen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Funktioniert das auch in größeren Städten?</AccordionTrigger>
            <AccordionContent>
              Ja, aber die Konkurrenz ist härter. In München brauchen Sie mehr 
              Bewertungen und stärkere Backlinks als in Rosenheim. Die Grundprinzipien 
              bleiben gleich, aber der Aufwand steigt. Fokussieren Sie sich auf 
              Ihren Stadtteil oder ein Nischen-Keyword (z.B. "glutenfreie Bäckerei 
              München Schwabing").
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Was, wenn ich schlechte Bewertungen habe?</AccordionTrigger>
            <AccordionContent>
              Negative Bewertungen sind nicht das Ende. Antworten Sie professionell 
              und empathisch. Dann konzentrieren Sie sich darauf, neue positive 
              Bewertungen zu generieren. Google gewichtet neuere Bewertungen stärker. 
              Nach 50-100 neuen 5-Sterne-Bewertungen werden die alten negativen kaum 
              noch wahrgenommen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Brauche ich eine Agentur oder kann ich das selbst machen?</AccordionTrigger>
            <AccordionContent>
              Sie können vieles selbst machen, besonders die täglichen Aufgaben wie 
              Posts, Bewertungsmanagement und Kundenkommunikation. Technische Aspekte 
              wie Website-Optimierung oder Schema Markup können komplexer sein. Eine 
              einmalige Beratung (wie im Beispiel) kann sinnvoll sein, um die richtige 
              Strategie zu entwickeln.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Gilt das nur für Bäckereien?</AccordionTrigger>
            <AccordionContent>
              Nein! Die Prinzipien gelten für alle lokalen Unternehmen: Restaurants, 
              Friseure, Ärzte, Handwerker, Einzelhändler. Die konkreten Taktiken 
              müssen angepasst werden – ein Arzt macht keine Brotback-Kurse – aber 
              die Grundstrategie (Google Business optimieren, Bewertungen sammeln, 
              lokal vernetzen, Content erstellen) funktioniert überall.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Ihr Aktionsplan</h2>

        <p className="mb-6">
          Die Geschichte der Bäckerei Sonnenschein zeigt: <strong>Local SEO funktioniert</strong>. 
          Auch für traditionelle, kleine Unternehmen. Auch ohne großes Budget. Was Sie brauchen:
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Starten Sie heute mit diesen 5 Schritten:</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span>Optimieren Sie Ihr Google Business Profil vollständig (alle Felder, Fotos, Beschreibung)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span>Bitten Sie heute noch 3 zufriedene Kunden um eine Google-Bewertung</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span>Antworten Sie auf alle bestehenden Bewertungen (positiv und negativ)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span>Erstellen Sie Ihren ersten Google Post mit einem aktuellen Angebot</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
              <span>Identifizieren Sie 3 lokale Partner für mögliche Kooperationen</span>
            </li>
          </ol>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoCaseStudy;
