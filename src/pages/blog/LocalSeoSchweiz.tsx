import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GeoTargetedKeywords from "@/components/blog/GeoTargetedKeywords";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import SwissCantonSelector from "@/components/blog/SwissCantonSelector";
import SwissDirectoriesTable from "@/components/blog/SwissDirectoriesTable";
import { AlertTriangle, CheckCircle2, Globe, Scale, Shield, TrendingUp, Building2, Languages } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LocalSeoSchweiz = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-schweiz", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "schweizer-markt", title: "Der Schweizer Markt" },
    { id: "mehrsprachigkeit", title: "Mehrsprachigkeit meistern" },
    { id: "verzeichnisse", title: "Schweizer Verzeichnisse" },
    { id: "google-business", title: "Google Business Schweiz" },
    { id: "kantone", title: "Kantonale Strategien" },
    { id: "rechtliches", title: "Rechtliche Besonderheiten" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Ist Local SEO in der Schweiz anders als in Deutschland?", answer: "Ja, es gibt wichtige Unterschiede: Mehrsprachigkeit (DE/FR/IT), andere Verzeichnisse (local.ch statt gelbeseiten.de), höhere Kaufkraft, andere Wettbewerbssituation und rechtliche Besonderheiten (DSG statt DSGVO)." },
    { question: "Muss ich meine Website in allen Schweizer Sprachen anbieten?", answer: "Das hängt von deiner Zielregion ab. In Zürich reicht Deutsch (evtl. Englisch). In Genf brauchst du Französisch. Für die gesamte Schweiz empfehlen wir mindestens DE/FR, idealerweise auch IT." },
    { question: "Welche Verzeichnisse sind in der Schweiz am wichtigsten?", answer: "Die Top 5 sind: Google Business Profile, local.ch, search.ch, Bing Places und Apple Maps. Diese solltest du unbedingt pflegen. Danach folgen branchenspezifische Verzeichnisse." },
    { question: "Was kostet Local SEO in der Schweiz?", answer: "Das hängt vom Wettbewerb ab. In Zürich und Genf ist der Aufwand höher als in ländlichen Kantonen. Rechne mit 500-2000 CHF/Monat für professionelle Betreuung oder investiere Zeit in DIY-Optimierung." },
    { question: "Wie wichtig sind Google Bewertungen in der Schweiz?", answer: "Sehr wichtig! Schweizer sind kritische Konsumenten und recherchieren gründlich. Bewertungen beeinflussen sowohl das Ranking als auch die Conversion Rate massgeblich." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Lead */}
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Die Schweiz ist ein einzigartiger Markt.</strong> Vier Sprachen, 26 Kantone, 
        höchste Kaufkraft Europas und ein anspruchsvolles Publikum: Local SEO in der Schweiz 
        erfordert eine spezielle Strategie. In diesem umfassenden Guide zeige ich dir, wie du 
        dein Schweizer KMU lokal sichtbar machst – mit kantonsspezifischen Tipps, den wichtigsten 
        Verzeichnissen und einer Strategie für Mehrsprachigkeit.
      </p>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">94%</div>
          <div className="text-sm text-muted-foreground">der Schweizer nutzen Google</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="text-sm text-muted-foreground">Landessprachen</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">78%</div>
          <div className="text-sm text-muted-foreground">suchen mobil lokal</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">600k+</div>
          <div className="text-sm text-muted-foreground">KMUs in der Schweiz</div>
        </div>
      </div>

      <BlogCTAABTest articleSlug="local-seo-schweiz" position="intro" />

      {/* Section: Der Schweizer Markt */}
      <section id="schweizer-markt" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          Der Schweizer Markt: Was ihn einzigartig macht
        </h2>
        
        <p>
          Bevor wir in die Taktiken einsteigen, musst du verstehen, warum Local SEO in der 
          Schweiz anders funktioniert als in Deutschland oder Österreich:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Chancen im Schweizer Markt
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Höchste Kaufkraft Europas</strong> – Kunden sind bereit, für Qualität zu zahlen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Starke lokale Loyalität</strong> – Schweizer bevorzugen lokale Anbieter</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Weniger Wettbewerb</strong> – Viele KMUs vernachlässigen SEO noch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Hohe Digital-Affinität</strong> – 94% der Bevölkerung online</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Herausforderungen
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <span><strong>Mehrsprachigkeit</strong> – DE/FR/IT erfordert mehr Content</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <span><strong>Hohe Erwartungen</strong> – Schweizer sind anspruchsvoll</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <span><strong>Kleiner Markt</strong> – Nur 8.7 Mio. Einwohner insgesamt</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <span><strong>Kantonale Unterschiede</strong> – Jeder Kanton hat eigene Gegebenheiten</span>
              </li>
            </ul>
          </div>
        </div>

        <h3>Suchverhalten der Schweizer</h3>
        <p>
          Das Suchverhalten in der Schweiz unterscheidet sich von Deutschland:
        </p>
        <ul>
          <li><strong>google.ch vs google.de</strong> – Schweizer suchen primär auf google.ch</li>
          <li><strong>Schweizer Rechtschreibung</strong> – "ss" statt "ß" (Strasse, Grüsse)</li>
          <li><strong>Lokale Begriffe</strong> – "Natel" statt "Handy", "Velo" statt "Fahrrad"</li>
          <li><strong>Währung</strong> – CHF-Preise werden erwartet, nicht EUR</li>
          <li><strong>Qualitätsfokus</strong> – "Beste" und "Premium" Keywords funktionieren gut</li>
        </ul>

        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-blue-700 mb-2">💡 Praxis-Tipp: Schweizer Keywords</h4>
          <p className="text-sm mb-3">
            Verwende immer Schweizer Schreibweisen in deinen Keywords. Beispiele:
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>❌ Deutsch (DE):</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>Friseur</li>
                <li>Handy Reparatur</li>
                <li>Schlüsseldienst</li>
              </ul>
            </div>
            <div>
              <strong>✅ Schweizerdeutsch:</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>Coiffeur</li>
                <li>Natel Reparatur</li>
                <li>Schlüsselservice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mehrsprachigkeit */}
      <section id="mehrsprachigkeit" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Languages className="h-6 w-6 text-primary" />
          Mehrsprachigkeit meistern: DE, FR, IT Strategien
        </h2>

        <p>
          Die Schweiz hat vier Landessprachen: Deutsch (63%), Französisch (23%), 
          Italienisch (8%) und Rätoromanisch (&lt;1%). Je nach deinem Einzugsgebiet 
          musst du eine passende Sprachstrategie entwickeln.
        </p>

        <h3>Wann brauchst du welche Sprachen?</h3>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Szenario</th>
                <th className="px-4 py-3 text-left font-semibold">Empfohlene Sprachen</th>
                <th className="px-4 py-3 text-left font-semibold">Priorität</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">Nur Zürich</td>
                <td className="px-4 py-3">Deutsch, optional Englisch</td>
                <td className="px-4 py-3">DE: 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Nur Genf</td>
                <td className="px-4 py-3">Französisch, optional Englisch</td>
                <td className="px-4 py-3">FR: 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Nur Tessin</td>
                <td className="px-4 py-3">Italienisch</td>
                <td className="px-4 py-3">IT: 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Deutschschweiz</td>
                <td className="px-4 py-3">Deutsch</td>
                <td className="px-4 py-3">DE: 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Romandie + Deutschschweiz</td>
                <td className="px-4 py-3">Deutsch, Französisch</td>
                <td className="px-4 py-3">DE: 60%, FR: 40%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Ganze Schweiz</td>
                <td className="px-4 py-3">Deutsch, Französisch, Italienisch</td>
                <td className="px-4 py-3">DE: 60%, FR: 30%, IT: 10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Technische Umsetzung: Hreflang-Tags</h3>
        <p>
          Für mehrsprachige Websites musst du hreflang-Tags korrekt implementieren, 
          damit Google weiss, welche Sprachversion wem gezeigt werden soll:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">
{`<!-- Beispiel: hreflang für Schweizer Website -->
<link rel="alternate" hreflang="de-CH" href="https://example.ch/de/" />
<link rel="alternate" hreflang="fr-CH" href="https://example.ch/fr/" />
<link rel="alternate" hreflang="it-CH" href="https://example.ch/it/" />
<link rel="alternate" hreflang="x-default" href="https://example.ch/de/" />`}
        </pre>

        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-yellow-700 mb-2">⚠️ Häufiger Fehler</h4>
          <p className="text-sm">
            Verwende <code>de-CH</code>, nicht nur <code>de</code>! Google unterscheidet zwischen 
            Deutsch für die Schweiz und Deutsch für Deutschland. Das gleiche gilt für 
            <code>fr-CH</code> vs <code>fr-FR</code>.
          </p>
        </div>

        <h3>Google Business Profile mehrsprachig</h3>
        <p>
          Bei Google Business Profile kannst du leider nur <strong>eine primäre Sprache</strong> wählen. 
          So gehst du am besten vor:
        </p>
        <ul>
          <li><strong>Wähle die Sprache deiner Hauptzielgruppe</strong> als primäre Sprache</li>
          <li><strong>Beschreibung</strong>: Schreibe sie in der Hauptsprache, füge am Ende einen Satz in der zweiten Sprache hinzu</li>
          <li><strong>Posts</strong>: Wechsle zwischen Sprachen oder poste zweisprachig</li>
          <li><strong>FAQ/Q&A</strong>: Beantworte in der Sprache der Frage</li>
        </ul>
      </section>

      {/* Section: Schweizer Verzeichnisse */}
      <section id="verzeichnisse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Die wichtigsten Schweizer Verzeichnisse
        </h2>

        <p>
          Citations (Einträge in Verzeichnissen) sind ein wichtiger Ranking-Faktor. 
          In der Schweiz sind andere Verzeichnisse relevant als in Deutschland. 
          Hier ist deine Prioritätenliste:
        </p>

        <SwissDirectoriesTable />

        <h3>NAP-Konsistenz in der Schweiz</h3>
        <p>
          NAP steht für Name, Adresse, Telefonnummer. Diese müssen <strong>überall identisch</strong> sein. 
          Besondere Schweizer Herausforderungen:
        </p>
        <ul>
          <li><strong>PLZ-Format</strong>: Schweizer PLZ haben 4 Ziffern (z.B. 8001), deutsche 5</li>
          <li><strong>Telefonnummern</strong>: Internationales Format +41 oder lokales 0XX verwenden?</li>
          <li><strong>Firmennamen</strong>: AG, GmbH, Sarl – immer gleich schreiben</li>
          <li><strong>Adressformat</strong>: Strasse, Straße oder Str. – einheitlich!</li>
        </ul>

        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-green-700 mb-2">✅ Best Practice: Telefonnummer-Format</h4>
          <p className="text-sm">
            Für die Schweiz empfehlen wir das internationale Format mit Ländercode: <br />
            <code className="bg-muted px-2 py-1 rounded">+41 44 123 45 67</code> (mit Leerzeichen nach Vorwahl)
            <br /><br />
            Dieses Format funktioniert für Click-to-Call und ist international eindeutig.
          </p>
        </div>
      </section>

      {/* Section: Google Business Schweiz */}
      <section id="google-business" className="mb-12">
        <h2>Google Business Profile für die Schweiz optimieren</h2>

        <p>
          Dein Google Business Profile ist das Herzstück deiner lokalen Sichtbarkeit. 
          Hier sind Schweiz-spezifische Optimierungstipps:
        </p>

        <h3>1. Kategorien richtig wählen</h3>
        <p>
          Google bietet verschiedene Kategorien an – wähle die spezifischste, die zu dir passt:
        </p>
        <ul>
          <li>Primärkategorie: Die wichtigste, genaueste Kategorie</li>
          <li>Sekundärkategorien: Bis zu 9 weitere (nutze alle sinnvollen!)</li>
          <li>Schweizer Besonderheit: Manche Kategorien werden in CH anders genannt</li>
        </ul>

        <h3>2. Schweizer Attribute nutzen</h3>
        <p>
          Attribute wie "Rollstuhlgerecht", "WLAN", "Terrasse" etc. sind wichtig. 
          Zusätzlich gibt es länderspezifische Optionen:
        </p>
        <ul>
          <li><strong>Zahlungsarten</strong>: TWINT ist in der Schweiz essentiell!</li>
          <li><strong>Sprachen</strong>: Welche Sprachen werden gesprochen?</li>
          <li><strong>Highlights</strong>: "Swiss Made", "Lokaler Anbieter"</li>
        </ul>

        <h3>3. Posts regelmässig erstellen</h3>
        <p>
          Google Business Posts erhöhen deine Sichtbarkeit. Empfohlene Frequenz: 1-2x pro Woche.
        </p>
        <ul>
          <li>Angebote und Aktionen (mit CHF-Preisen!)</li>
          <li>Events und lokale Veranstaltungen</li>
          <li>Produkt-Updates und News</li>
          <li>Saisonale Inhalte (Feiertage, Jahreszeiten)</li>
        </ul>

        <h3>4. Fotos strategisch einsetzen</h3>
        <p>
          Profile mit Fotos erhalten 35% mehr Klicks. Achte auf:
        </p>
        <ul>
          <li>Hochwertige Bilder (Schweizer erwarten Qualität)</li>
          <li>Regelmässige Updates (mind. monatlich neue Fotos)</li>
          <li>Lokalen Bezug zeigen (Schweizer Flagge, lokale Landmarks)</li>
          <li>Team-Fotos für persönliche Verbindung</li>
        </ul>
      </section>

      {/* Section: Kantone */}
      <section id="kantone" className="mb-12">
        <h2>Kantonale SEO-Strategien</h2>

        <p>
          Jeder Schweizer Kanton hat seine Besonderheiten. Wähle deinen Kanton und erhalte 
          massgeschneiderte Local SEO Tipps:
        </p>

        <SwissCantonSelector />
      </section>

      {/* Section: Rechtliches */}
      <section id="rechtliches" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          Rechtliche Besonderheiten in der Schweiz
        </h2>

        <p>
          Die Schweiz ist kein EU-Mitglied und hat eigene Datenschutzgesetze. 
          Hier sind die wichtigsten rechtlichen Aspekte für deine Website:
        </p>

        <h3>DSG vs. DSGVO</h3>
        <p>
          Das Schweizer Datenschutzgesetz (DSG) wurde 2023 komplett überarbeitet 
          und ist dem DSGVO ähnlich, aber nicht identisch:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Aspekt</th>
                <th className="px-4 py-3 text-left font-semibold">Schweiz (DSG)</th>
                <th className="px-4 py-3 text-left font-semibold">EU (DSGVO)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">Bussen</td>
                <td className="px-4 py-3">Max. CHF 250'000</td>
                <td className="px-4 py-3">Max. 20 Mio. € oder 4% Umsatz</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Impressum</td>
                <td className="px-4 py-3">Pflicht (weniger streng)</td>
                <td className="px-4 py-3">Strenge Pflicht</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Cookie-Consent</td>
                <td className="px-4 py-3">Informationspflicht</td>
                <td className="px-4 py-3">Aktive Einwilligung nötig</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Datentransfer</td>
                <td className="px-4 py-3">Liste sicherer Länder</td>
                <td className="px-4 py-3">Angemessenheitsbeschlüsse</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Impressumspflicht Schweiz</h3>
        <p>
          In der Schweiz besteht eine Impressumspflicht für geschäftliche Websites. 
          Dein Impressum sollte enthalten:
        </p>
        <ul>
          <li>Vollständiger Firmenname inkl. Rechtsform</li>
          <li>Vollständige Adresse</li>
          <li>E-Mail-Adresse</li>
          <li>UID-Nummer (Unternehmens-Identifikationsnummer)</li>
          <li>Optional: Telefonnummer, HR-Eintrag, Geschäftsführung</li>
        </ul>

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Wichtig: EU-Kunden
          </h4>
          <p className="text-sm">
            Wenn du auch EU-Kunden ansprichst (z.B. im Grenzgebiet oder Online-Shop mit 
            EU-Lieferung), gilt zusätzlich die DSGVO! In diesem Fall brauchst du einen 
            EU-Vertreter gemäss Art. 27 DSGVO.
          </p>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ist Local SEO in der Schweiz anders als in Deutschland?</AccordionTrigger>
            <AccordionContent>
              Ja, es gibt wichtige Unterschiede: Mehrsprachigkeit (DE/FR/IT), andere Verzeichnisse 
              (local.ch statt gelbeseiten.de), höhere Kaufkraft, andere Wettbewerbssituation und 
              rechtliche Besonderheiten (DSG statt DSGVO). Auch das Suchverhalten unterscheidet sich – 
              Schweizer suchen auf google.ch und verwenden lokale Begriffe.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Muss ich meine Website in allen Schweizer Sprachen anbieten?</AccordionTrigger>
            <AccordionContent>
              Das hängt von deiner Zielregion ab. In Zürich reicht Deutsch (evtl. Englisch). 
              In Genf brauchst du Französisch. Für die gesamte Schweiz empfehlen wir mindestens 
              DE/FR, idealerweise auch IT. Wichtig: Jede Sprachversion muss qualitativ hochwertig 
              sein – schlechte Übersetzungen schaden mehr als sie nutzen.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Verzeichnisse sind in der Schweiz am wichtigsten?</AccordionTrigger>
            <AccordionContent>
              Die Top 5 sind: Google Business Profile, local.ch, search.ch, Bing Places und 
              Apple Maps. Diese solltest du unbedingt pflegen. Danach folgen branchenspezifische 
              Verzeichnisse wie TrustPilot, Yelp und deine Branchenkammer.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Was kostet Local SEO in der Schweiz?</AccordionTrigger>
            <AccordionContent>
              Das hängt vom Wettbewerb ab. In Zürich und Genf ist der Aufwand höher als in 
              ländlichen Kantonen. Rechne mit 500-2000 CHF/Monat für professionelle Betreuung 
              oder investiere Zeit in DIY-Optimierung. Der ROI ist typischerweise sehr gut, 
              da die Kaufkraft hoch ist.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie wichtig sind Google Bewertungen in der Schweiz?</AccordionTrigger>
            <AccordionContent>
              Sehr wichtig! Schweizer sind kritische Konsumenten und recherchieren gründlich. 
              Bewertungen beeinflussen sowohl das Ranking als auch die Conversion Rate massgeblich. 
              Ziel: Mindestens 4.0 Sterne und mehr Bewertungen als die Konkurrenz.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger>Funktioniert Local SEO auch für B2B-Unternehmen?</AccordionTrigger>
            <AccordionContent>
              Absolut! Auch B2B-Entscheider googlen nach lokalen Dienstleistern. 
              Keywords wie "IT-Dienstleister Zürich" oder "Wirtschaftsprüfer Bern" haben 
              relevantes Suchvolumen. B2B-Unternehmen profitieren zusätzlich von Einträgen 
              in Handelskammern und Branchenverbänden.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Bereit, dein Schweizer KMU lokal sichtbar zu machen?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Wir helfen Schweizer Unternehmen dabei, in ihrer Region gefunden zu werden. 
          Von Zürich bis Genf, von Basel bis Lugano.
        </p>
        <GeoTargetedKeywords config={{
          city: 'Schweiz (DACH)',
          country: 'CH',
          districts: [
            { district: 'Zürich Kreis 1 (Altstadt)', keywords: ['Restaurant Niederdorf Zürich', 'Anwalt Bahnhofstrasse', 'Hotel Zürich Altstadt'], competition: 'Sehr hoch', tip: 'Tourismus + Business: Englische Keywords nicht vergessen' },
            { district: 'Zürich Kreis 4 (Langstrasse)', keywords: ['Bar Langstrasse Zürich', 'Tattoo Zürich Kreis 4', 'Döner Langstrasse'], competition: 'Mittel', tip: 'Multikulti-Viertel: internationale Keywords testen' },
            { district: 'Basel Altstadt', keywords: ['Restaurant Basel Altstadt', 'Zahnarzt Basel Innenstadt', 'Boutique Basel'], competition: 'Mittel', tip: 'Dreiländereck: auch französische und deutsche Suchende bedenken' },
            { district: 'Bern Altstadt', keywords: ['Café Bern Altstadt', 'Anwalt Bern Innenstadt', 'Restaurant Bern Bundeshaus'], competition: 'Niedrig', tip: 'Hauptstadt: Regierungs-nahe B2B-Keywords mit wenig Konkurrenz' },
            { district: 'Luzern Innenstadt', keywords: ['Restaurant Kapellbrücke Luzern', 'Hotel Luzern See', 'Zahnarzt Luzern'], competition: 'Niedrig', tip: 'Tourismus-Keywords dominant — auch in Englisch und Asiatisch denken' },
          ],
          topIndustryKeywords: [
            { industry: 'Gastronomie', icon: '🧀', keywords: ['Fondue Restaurant Zürich', 'Raclette Basel', 'Brunch Bern', 'Beiz Zürich Kreis 5'] },
            { industry: 'Finanzen', icon: '🏦', keywords: ['Treuhand Zürich', 'Steuerberater Schweiz KMU', 'Vermögensberatung Zürich', 'Buchhaltung Bern'] },
            { industry: 'Gesundheit', icon: '⚕️', keywords: ['Zahnarzt Zürich Kreis 1', 'Hausarzt Basel', 'Physiotherapie Bern', 'Augenarzt Luzern'] },
            { industry: 'Handwerk', icon: '🔧', keywords: ['Elektriker Zürich Notdienst', 'Sanitär Basel', 'Schreiner Bern', 'Maler Luzern'] },
          ],
          seasonalKeywords: [
            { event: 'Sechseläuten (Zürich)', keywords: ['Sechseläuten Zürich Restaurant', 'Böögg Zürich', 'Frühlingsfest Zürich'], timing: 'Optimierung ab Februar' },
            { event: 'Fasnacht (Basel)', keywords: ['Fasnacht Basel Hotel', 'Morgestraich Restaurant Basel', 'Fasnacht Laternen Basel'], timing: 'Optimierung ab Dezember' },
            { event: 'Ski-Saison', keywords: ['Ski Service Zürich', 'Sportgeschäft Winterthur Ski', 'Skivermietung Luzern'], timing: 'Optimierung ab September' },
          ],
          localDirectories: ['local.ch', 'search.ch', 'gelbeseiten.ch'],
          dialektTip: 'Schweizerdeutsch-Begriffe beachten: "Coiffeur" statt "Friseur", "Beiz" statt "Kneipe", "Velo" statt "Fahrrad", "Natel" statt "Handy". Google.ch priorisiert .ch-Domains.',
        }} />
        <HelpfulnessWidget articleSlug="local-seo-schweiz" />
        <BlogCTAABTest articleSlug="local-seo-schweiz" position="end" />
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoSchweiz;
