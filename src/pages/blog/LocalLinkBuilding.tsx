import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { useLanguage } from "@/i18n/LanguageContext";
import LinkBuildingIdeaGenerator from "@/components/blog/LinkBuildingIdeaGenerator";
import PressOutreachTemplates from "@/components/blog/PressOutreachTemplates";
import LinkBuildingOutreachTemplates from "@/components/blog/LinkBuildingOutreachTemplates";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Link, Building2, Newspaper, Users, Search, Trophy, AlertTriangle, Lightbulb } from "lucide-react";

const LocalLinkBuilding = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-link-building", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "lokale-quellen", title: "Lokale Link-Quellen" },
    { id: "sponsoring", title: "Sponsoring & Vereine" },
    { id: "presse", title: "Lokale Presse" },
    { id: "verbaende", title: "Branchenverbände" },
    { id: "unlinked-mentions", title: "Unlinked Mentions" },
    { id: "strategien", title: "Kreative Strategien" },
    { id: "generator", title: "Ideen-Generator" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Warum sind lokale Backlinks wichtig?", answer: "Lokale Backlinks signalisieren Google geografische Relevanz. Sie zeigen, dass dein Unternehmen in der Community verankert ist und stärken dein Ranking für lokale Suchanfragen erheblich." },
    { question: "Wie viele lokale Backlinks brauche ich?", answer: "Qualität schlägt Quantität. 10-20 hochwertige lokale Backlinks von relevanten Quellen sind mehr wert als 100 minderwertige Links. Fokussiere dich auf Diversität: verschiedene Quellen wie Zeitungen, Vereine, Verbände." },
    { question: "Was sind Unlinked Brand Mentions?", answer: "Unlinked Brand Mentions sind Erwähnungen deines Unternehmens im Internet ohne Verlinkung. Diese bieten einfache Link-Möglichkeiten: Kontaktiere den Autor und bitte höflich um Verlinkung." },
    { question: "Funktioniert Vereinssponsoring für Local SEO?", answer: "Ja, Vereinssponsoring ist eine der effektivsten lokalen Link-Building-Strategien. Du bekommst einen Backlink von der Vereinswebsite, lokale Markenbekanntheit und Community-Engagement – alles positive SEO-Signale." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Einführung */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Lokale <LexikonLink term="Backlinks" /> sind der Turbo für dein Google Maps Ranking.</strong> Während nationale SEO oft auf Gastartikel und große Publisher setzt, funktioniert lokales Link Building anders. Es geht um Community-Engagement, lokale Partnerschaften und kreative Strategien. Dieser Guide zeigt dir, wie du hochwertige lokale Links aufbaust.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Link className="h-5 w-5 text-primary" />
            Warum lokale Backlinks besonders wertvoll sind
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Geografische Relevanz:</strong> Lokale Links signalisieren Google deinen Standort</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Community-Signal:</strong> Zeigt Verankerung in der lokalen Gemeinschaft</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Thematische Relevanz:</strong> Lokale Quellen sind oft branchenrelevant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Weniger Wettbewerb:</strong> Lokale Quellen werden von großen Brands oft ignoriert</span>
            </li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-link-building" position="intro" />

      {/* Lokale Link-Quellen */}
      <section id="lokale-quellen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          Die besten lokalen Link-Quellen
        </h2>
        
        <p className="mb-6">
          Lokales Link Building unterscheidet sich grundlegend von nationalem SEO. Hier sind die <strong>wertvollsten Quellen</strong> für lokale <LexikonLink term="Backlinks" /> die deine <LexikonLink term="Domain Authority" /> stärken:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">🏛️ Institutionelle Quellen</h3>
            <ul className="space-y-2 text-sm">
              <li>• Stadt- und Gemeindewebsites</li>
              <li>• Industrie- und Handelskammern (IHK)</li>
              <li>• Handwerkskammern (HWK)</li>
              <li>• Wirtschaftsförderungen</li>
              <li>• Tourismusverbände</li>
              <li>• Stadtmarketing-Portale</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">📰 Medien & Presse</h3>
            <ul className="space-y-2 text-sm">
              <li>• Lokale Tageszeitungen (online)</li>
              <li>• Anzeigenblätter</li>
              <li>• Lokalradio-Websites</li>
              <li>• Stadtteil-Blogs</li>
              <li>• Lokale Nachrichtenportale</li>
              <li>• Branchenmagazine regional</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">👥 Gemeinschaft & Vereine</h3>
            <ul className="space-y-2 text-sm">
              <li>• Sportvereine</li>
              <li>• Kulturvereine</li>
              <li>• Gewerbevereine</li>
              <li>• Bürgerinitiativen</li>
              <li>• Elternvereine, Schulfördervereine</li>
              <li>• Freiwillige Feuerwehr</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">🤝 Geschäftspartner</h3>
            <ul className="space-y-2 text-sm">
              <li>• Lieferanten mit "Kunden"-Seite</li>
              <li>• Hersteller mit Händlerverzeichnis</li>
              <li>• Kooperationspartner</li>
              <li>• Nachbargeschäfte</li>
              <li>• B2B-Kunden mit Referenzseiten</li>
              <li>• Franchise-Zentralen</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span><strong>Pro-Tipp:</strong> Erstelle eine Liste aller lokalen Organisationen, mit denen du bereits verbunden bist. Viele bieten bereits Link-Möglichkeiten, die du noch nicht genutzt hast – Mitgliederverzeichnisse, Partner-Seiten oder Referenzen.</span>
          </p>
        </div>
      </section>

      {/* Sponsoring & Vereine */}
      <section id="sponsoring" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="h-8 w-8 text-primary" />
          Sponsoring & Vereine: Die Link-Building-Geheimwaffe
        </h2>
        
        <p className="mb-6">
          <strong>Vereinssponsoring</strong> ist eine der effektivsten und nachhaltigsten Link-Building-Strategien für lokale Unternehmen. Du unterstützt die Community und bekommst wertvolle Backlinks.
        </p>

        <h3 className="text-xl font-semibold mb-4">Warum Sponsoring funktioniert</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔗</div>
            <h4 className="font-semibold mb-1">Backlink</h4>
            <p className="text-sm text-muted-foreground">Prominente Verlinkung auf der Vereinswebsite</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📢</div>
            <h4 className="font-semibold mb-1">Markenbekanntheit</h4>
            <p className="text-sm text-muted-foreground">Lokale Sichtbarkeit bei Events und online</p>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">❤️</div>
            <h4 className="font-semibold mb-1">Community-Engagement</h4>
            <p className="text-sm text-muted-foreground">Positives Image in der Nachbarschaft</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Die besten Vereine für Sponsoring</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">⚽</span>
            <div>
              <strong>Sportvereine</strong>
              <p className="text-sm text-muted-foreground">Fußball, Tennis, Handball – viele Mitglieder, regelmäßige Events, gute Websites. Sponsor-Logos oft prominent platziert.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🎭</span>
            <div>
              <strong>Kulturvereine</strong>
              <p className="text-sm text-muted-foreground">Theatergruppen, Musikvereine, Kunstvereine. Oft weniger umkämpft, dafür engagiertes Publikum.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🏫</span>
            <div>
              <strong>Schulfördervereine</strong>
              <p className="text-sm text-muted-foreground">Eltern als Zielgruppe, lokaler Bezug, oft auf Unterstützung angewiesen. Fördervereine haben meist Websites.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🚒</span>
            <div>
              <strong>Freiwillige Organisationen</strong>
              <p className="text-sm text-muted-foreground">Feuerwehr, THW, DRK – hohes Ansehen, starke Websites mit guter Domain Authority.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="text-2xl">🎉</span>
            <div>
              <strong>Festvereine & Events</strong>
              <p className="text-sm text-muted-foreground">Karnevalsvereine, Schützenvereine, Stadtfest-Organisatoren. Jährliche Events mit viel lokaler Aufmerksamkeit.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">So verhandelst du Sponsoring mit Link</h3>

        <div className="bg-muted rounded-lg p-6 mb-6">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <div>
                <strong>Recherchiere die Website</strong>
                <p className="text-sm text-muted-foreground">Prüfe, ob der Verein bereits Sponsoren listet und wie diese präsentiert werden.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <strong>Kontaktiere den Vorstand</strong>
                <p className="text-sm text-muted-foreground">Frage nach Sponsoring-Möglichkeiten und was im Paket enthalten ist.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <div>
                <strong>Verhandle den Website-Eintrag</strong>
                <p className="text-sm text-muted-foreground">Wichtig: Logo mit Verlinkung zur Website, nicht nur ein Bild ohne Link.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <div>
                <strong>Liefere Material</strong>
                <p className="text-sm text-muted-foreground">Stelle Logo, Beschreibungstext und Link bereit – mache es dem Verein einfach.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <div>
                <strong>Prüfe den Link</strong>
                <p className="text-sm text-muted-foreground">Kontrolliere nach Veröffentlichung, dass der Link korrekt gesetzt ist (DoFollow, richtige URL).</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Sponsoring-Stufe</th>
                <th className="border p-3 text-left">Typische Kosten</th>
                <th className="border p-3 text-left">Website-Präsenz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Bronze/Unterstützer</td>
                <td className="border p-3">50-200€/Jahr</td>
                <td className="border p-3">Nennung auf Sponsorenseite</td>
              </tr>
              <tr>
                <td className="border p-3">Silber/Partner</td>
                <td className="border p-3">200-500€/Jahr</td>
                <td className="border p-3">Logo mit Link auf Sponsorenseite</td>
              </tr>
              <tr>
                <td className="border p-3">Gold/Premium</td>
                <td className="border p-3">500-2000€/Jahr</td>
                <td className="border p-3">Logo mit Link auf Startseite + Unterseite</td>
              </tr>
              <tr>
                <td className="border p-3">Hauptsponsor</td>
                <td className="border p-3">2000€+/Jahr</td>
                <td className="border p-3">Prominente Platzierung überall, Presseartikel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-link-building" position="middle" />

      {/* Lokale Presse */}
      <section id="presse" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Newspaper className="h-8 w-8 text-primary" />
          Lokale Presse & Blogger Relations
        </h2>
        
        <p className="mb-6">
          Lokale Medien sind ständig auf der Suche nach <strong>relevanten Geschichten</strong>. Mit der richtigen Strategie bekommst du wertvolle Backlinks und Markenbekanntheit.
        </p>

        <h3 className="text-xl font-semibold mb-4">Was lokale Medien interessiert</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-green-600">✅ Gute Story-Anlässe</h4>
            <ul className="space-y-2 text-sm">
              <li>• Geschäftseröffnung oder Jubiläum</li>
              <li>• Neue Produkte/Services mit lokalem Bezug</li>
              <li>• Auszeichnungen und Zertifizierungen</li>
              <li>• Soziales/ökologisches Engagement</li>
              <li>• Einstellungen (Job-Wachstum)</li>
              <li>• Lokale Events/Tag der offenen Tür</li>
              <li>• Branchentrends mit Expertenmeinung</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-red-600">❌ Was nicht funktioniert</h4>
            <ul className="space-y-2 text-sm">
              <li>• Reine Werbetexte ohne Nachrichtenwert</li>
              <li>• "Wir sind toll"-Pressemitteilungen</li>
              <li>• Generische Branchennachrichten</li>
              <li>• Zu technische Fachthemen</li>
              <li>• Alte Neuigkeiten (älter als 2 Wochen)</li>
              <li>• Themen ohne lokalen Bezug</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Pressemitteilung schreiben (mit Link-Potenzial)</h3>

        <div className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap"><code>{`PRESSEMITTEILUNG

[DATUM] – [ORT]

[HEADLINE: Aktiv, mit lokalem Bezug, max. 70 Zeichen]
Beispiel: "Bäckerei Müller aus Schwabing feiert 50-jähriges Jubiläum mit Spendenaktion"

[LEAD: Das Wichtigste in 2-3 Sätzen – WER, WAS, WANN, WO]
Die Bäckerei Müller in München-Schwabing feiert am 15. März ihr 50-jähriges Bestehen. 
Anlässlich des Jubiläums spendet das Familienunternehmen 1.000 Brote an die Münchner Tafel.

[HAUPTTEXT: Details, Zitate, Hintergrund]
- Geschichte des Unternehmens
- Zitat des Inhabers
- Details zur Aktion
- Lokaler Bezug hervorheben

[BOILERPLATE: Über das Unternehmen]
Über Bäckerei Müller:
Die Bäckerei Müller ist seit 1974 in München-Schwabing ansässig. Das Familienunternehmen 
beschäftigt 15 Mitarbeiter und beliefert täglich 500+ Kunden mit frischen Backwaren.

Mehr Informationen: www.baeckerei-mueller-muenchen.de

[KONTAKT]
Pressekontakt:
Max Müller, Inhaber
Telefon: 089 123 4567
E-Mail: presse@baeckerei-mueller-muenchen.de`}</code></pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Lokale Blogger finden</h3>

        <p className="mb-4">
          Neben klassischen Medien sind <strong>lokale Blogger</strong> wertvolle Link-Quellen. So findest du sie:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span><strong>Google-Suche:</strong> "[Stadt] Blog", "[Stadt] [Branche] Tipps", "[Stadt] Lifestyle"</span>
          </li>
          <li className="flex items-start gap-2">
            <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span><strong>Instagram:</strong> Lokale Influencer mit Stadtbezug in Bio</span>
          </li>
          <li className="flex items-start gap-2">
            <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span><strong>Stadtmagazine:</strong> Online-Auftritte lokaler Magazine</span>
          </li>
          <li className="flex items-start gap-2">
            <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span><strong>Kooperationsanfragen:</strong> Produkt/Service testen lassen mit Verlinkung</span>
          </li>
        </ul>
      </section>

      {/* Branchenverbände */}
      <section id="verbaende" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="h-8 w-8 text-primary" />
          Branchenverbände & Kammern
        </h2>
        
        <p className="mb-6">
          Branchenverbände, IHK und HWK bieten <strong>hochwertige Backlinks</strong> mit hoher Domain Authority. Diese Links sind besonders wertvoll, weil sie Vertrauen und Expertise signalisieren.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-3">🏛️ IHK & HWK</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Firmendatenbank:</strong> Eintrag mit Website-Link</li>
              <li>• <strong>Expertenprofil:</strong> Als Fachberater listen lassen</li>
              <li>• <strong>Veranstaltungen:</strong> Vorträge, Workshops anbieten</li>
              <li>• <strong>Pressemeldungen:</strong> Erfolgsgeschichten teilen</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-3">🤝 Berufsverbände</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Mitgliederverzeichnis:</strong> Fast immer mit Link</li>
              <li>• <strong>Zertifizierungen:</strong> Gütesiegel mit Verlinkung</li>
              <li>• <strong>Fachbeiträge:</strong> Gastartikel für Verbandspublikation</li>
              <li>• <strong>Referenten:</strong> Bei Veranstaltungen sprechen</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Wichtige Verbände nach Branche</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Branche</th>
                <th className="border p-3 text-left">Verbände</th>
                <th className="border p-3 text-left">Link-Möglichkeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Gastronomie</td>
                <td className="border p-3">DEHOGA, Slow Food, Sommelier-Verband</td>
                <td className="border p-3">Mitgliederverzeichnis, Gütesiegel</td>
              </tr>
              <tr>
                <td className="border p-3">Handwerk</td>
                <td className="border p-3">Innungen, Kreishandwerkerschaft</td>
                <td className="border p-3">Meisterverzeichnis, Betriebsliste</td>
              </tr>
              <tr>
                <td className="border p-3">Einzelhandel</td>
                <td className="border p-3">HDE, Gewerbeverein, Citymarketing</td>
                <td className="border p-3">Händlerverzeichnis, Einkaufsführer</td>
              </tr>
              <tr>
                <td className="border p-3">Gesundheit</td>
                <td className="border p-3">Ärztekammer, Fachgesellschaften</td>
                <td className="border p-3">Arztsuche, Spezialistenverzeichnis</td>
              </tr>
              <tr>
                <td className="border p-3">Recht</td>
                <td className="border p-3">Rechtsanwaltskammer, DAV</td>
                <td className="border p-3">Anwaltssuche, Fachanwalt-Liste</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Unlinked Mentions */}
      <section id="unlinked-mentions" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Unlinked Brand Mentions: Einfache Links finden</h2>
        
        <p className="mb-6">
          <strong>Unlinked Mentions</strong> sind Erwähnungen deines Unternehmens im Internet ohne Verlinkung. Diese bieten die einfachste Möglichkeit, Backlinks zu gewinnen – denn die Arbeit ist schon getan.
        </p>

        <h3 className="text-xl font-semibold mb-4">So findest du Unlinked Mentions</h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <strong>Google-Suche nutzen</strong>
              <p className="text-sm text-muted-foreground">Suche nach: "Firmenname" -site:deinedomain.de</p>
              <p className="text-sm text-muted-foreground">Das findet alle Erwähnungen außerhalb deiner Website.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <strong>Google Alerts einrichten</strong>
              <p className="text-sm text-muted-foreground">Erhalte automatisch Benachrichtigungen, wenn dein Firmenname erwähnt wird.</p>
              <p className="text-sm text-muted-foreground">Tipp: Auch für Produktnamen, Inhabernamen und häufige Schreibfehler einrichten.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <strong>Prüfe, ob Link vorhanden</strong>
              <p className="text-sm text-muted-foreground">Öffne die gefundenen Seiten und prüfe, ob deine Website verlinkt ist.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <strong>Kontaktiere den Autor</strong>
              <p className="text-sm text-muted-foreground">Schreibe eine freundliche E-Mail mit der Bitte um Verlinkung (siehe Vorlage unten).</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">E-Mail-Vorlage für Link-Anfragen</h3>

        <div className="bg-muted rounded-lg p-4 mb-6">
          <pre className="text-sm whitespace-pre-wrap"><code>{`Betreff: Danke für die Erwähnung von [Firmenname]!

Hallo [Name],

ich bin [Dein Name] von [Firmenname] und bin gerade auf Ihren Artikel 
"[Artikel-Titel]" gestoßen. Vielen Dank, dass Sie uns erwähnt haben!

Für Ihre Leser wäre es eventuell hilfreich, wenn Sie unsere Website 
verlinken würden, damit sie mehr über uns erfahren können:
[URL]

Falls Sie Fragen haben oder weitere Informationen benötigen, 
helfe ich gerne weiter.

Beste Grüße
[Dein Name]
[Firmenname]
[Telefon]`}</code></pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
            <span><strong>Wichtig:</strong> Sei höflich und drängend nicht. Nicht jeder wird antworten oder verlinken. Eine Erfolgsquote von 20-30% ist realistisch.</span>
          </p>
        </div>
      </section>

      {/* Kreative Strategien */}
      <section id="strategien" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">5 kreative Link-Building-Strategien</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              1. Lokale Gewinnspiele & Kooperationen
            </h3>
            <p className="text-muted-foreground mb-3">
              Veranstalte Gewinnspiele in Kooperation mit anderen lokalen Unternehmen. Jeder Partner bewirbt auf seiner Website und verlinkt.
            </p>
            <p className="text-sm"><strong>Beispiel:</strong> Restaurant + Blumenladen + Fotograf = "Romantisches Dinner-Paket" Gewinnspiel</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              2. Lokale Studien & Umfragen
            </h3>
            <p className="text-muted-foreground mb-3">
              Führe eine lokale Umfrage durch und veröffentliche die Ergebnisse. Lokale Medien lieben exklusive Daten.
            </p>
            <p className="text-sm"><strong>Beispiel:</strong> "Was Münchner Kunden beim Friseurbesuch wichtig ist – Umfrage 2026"</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              3. Awards & Wettbewerbe stiften
            </h3>
            <p className="text-muted-foreground mb-3">
              Starte einen kleinen lokalen Award in deiner Branche. Teilnehmer und Gewinner verlinken auf die Award-Seite.
            </p>
            <p className="text-sm"><strong>Beispiel:</strong> "Schönstes Schaufenster des Viertels" Award mit lokaler Zeitung</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              4. Lokale Ressourcen-Seiten erstellen
            </h3>
            <p className="text-muted-foreground mb-3">
              Erstelle hilfreiche Ressourcen für deine Stadt: Notdienst-Listen, Öffnungszeiten-Übersichten, lokale Guides.
            </p>
            <p className="text-sm"><strong>Beispiel:</strong> "Alle Notdienste in [Stadt] – Apotheken, Ärzte, Schlüsseldienst"</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              5. Bildungskooperationen
            </h3>
            <p className="text-muted-foreground mb-3">
              Biete Praktika, Betriebsbesichtigungen oder Workshops für Schulen/Unis an. Bildungseinrichtungen verlinken gerne.
            </p>
            <p className="text-sm"><strong>Beispiel:</strong> "Girls' Day" Teilnahme mit Verlinkung auf Schulwebsite</p>
          </div>
        </div>
      </section>

      {/* Ideen-Generator */}
      <section id="generator" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Link-Building Ideen-Generator</h2>
        <p className="mb-6 text-muted-foreground">
          Wähle deine Branche und Stadt aus, um maßgeschneiderte Link-Building-Ideen zu erhalten:
        </p>
        
        <LinkBuildingIdeaGenerator />
      </section>

      <BlogCTAABTest articleSlug="local-link-building" position="end" />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Warum sind lokale Backlinks wichtig?</AccordionTrigger>
            <AccordionContent>
              Lokale Backlinks signalisieren Google geografische Relevanz. Sie zeigen, dass dein Unternehmen in der Community verankert ist und stärken dein Ranking für lokale Suchanfragen erheblich. Außerdem bringen sie direkten Referral-Traffic von lokalen Nutzern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie viele lokale Backlinks brauche ich?</AccordionTrigger>
            <AccordionContent>
              Qualität schlägt Quantität. 10-20 hochwertige lokale Backlinks von relevanten Quellen sind mehr wert als 100 minderwertige Links. Fokussiere dich auf Diversität: verschiedene Quellen wie Zeitungen, Vereine, Verbände und Geschäftspartner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Was kosten lokale Backlinks?</AccordionTrigger>
            <AccordionContent>
              Viele lokale Links sind kostenlos: Branchenverzeichnisse, IHK-Eintrag, Partnerseiten. Sponsoring kostet typischerweise 50-500€ pro Jahr für einen Verein. Pressemitteilungen kosten Zeit, kein Geld. Kaufe niemals Links direkt – das verstößt gegen Google-Richtlinien.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Was sind Unlinked Brand Mentions?</AccordionTrigger>
            <AccordionContent>
              Unlinked Brand Mentions sind Erwähnungen deines Unternehmens im Internet ohne Verlinkung. Diese bieten einfache Link-Möglichkeiten: Kontaktiere den Autor und bitte höflich um Verlinkung. Mit Google-Suche und Google Alerts findest du diese Erwähnungen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Funktioniert Vereinssponsoring für Local SEO?</AccordionTrigger>
            <AccordionContent>
              Ja, Vereinssponsoring ist eine der effektivsten lokalen Link-Building-Strategien. Du bekommst einen Backlink von der Vereinswebsite, lokale Markenbekanntheit und Community-Engagement – alles positive SEO-Signale. Achte darauf, dass dein Logo mit Link (nicht nur als Bild) eingebunden wird.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Wie bekomme ich Links von lokalen Zeitungen?</AccordionTrigger>
            <AccordionContent>
              Schreibe Pressemitteilungen mit echtem Nachrichtenwert: Jubiläen, Events, Auszeichnungen, soziales Engagement. Baue Beziehungen zu lokalen Journalisten auf und biete dich als Experte für Branchenthemen an. Die meisten Online-Artikel lokaler Zeitungen verlinken erwähnte Unternehmen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Sind NoFollow-Links von lokalen Seiten wertvoll?</AccordionTrigger>
            <AccordionContent>
              Ja, auch NoFollow-Links haben Wert. Sie bringen direkten Traffic, stärken die Markenbekanntheit und signalisieren Google ein natürliches Linkprofil. Ein Mix aus DoFollow und NoFollow ist sogar besser als ausschließlich DoFollow-Links.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Wie lange dauert es, bis lokale Links wirken?</AccordionTrigger>
            <AccordionContent>
              Google muss die Links erst crawlen und indexieren – das dauert Tage bis Wochen. Die SEO-Wirkung baut sich dann über Monate auf. Rechne mit 3-6 Monaten, bis du signifikante Ranking-Verbesserungen durch lokales Link Building siehst.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <LinkBuildingOutreachTemplates
        title="Outreach-Vorlagen: Lokale Links aufbauen"
        description="Kopierfertige E-Mail-Templates fuer jede Link-Building-Strategie – von Partnerschaften bis Pressearbeit."
      />

      <HelpfulnessWidget articleSlug="local-link-building" />
    </ArticleLayout>
  );
};

export default LocalLinkBuilding;
