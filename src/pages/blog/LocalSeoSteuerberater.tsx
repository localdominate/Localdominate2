import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator, Users, Star, TrendingUp, MapPin, CheckCircle2, Calendar, FileText, Shield, Clock, Building2, Phone } from "lucide-react";

const LocalSeoSteuerberater = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-steuerberater", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "mandantensuche", title: "Mandanten-Suchverhalten" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "keywords", title: "Keyword-Strategie" },
    { id: "content-marketing", title: "Content-Marketing" },
    { id: "saisonale-optimierung", title: "Saisonale Optimierung" },
    { id: "bewertungen", title: "Mandanten-Bewertungen" },
    { id: "schema-markup", title: "Schema Markup" },
    { id: "faq", title: "FAQ" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie finden potenzielle Mandanten einen Steuerberater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "76% aller Mandanten-Suchen starten online. Die häufigsten Suchanfragen sind 'Steuerberater [Stadt]', 'Steuerkanzlei in der Nähe' und 'Steuerberater für [Spezialisierung]'. Google ist dabei die mit Abstand wichtigste Suchmaschine."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Google Business Kategorie soll ich als Steuerberater wählen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Hauptkategorie sollte 'Steuerberater' sein. Als Nebenkategorien eignen sich 'Buchhalter', 'Finanzberater' oder 'Unternehmensberater', je nach Ihrem Leistungsspektrum. Wählen Sie nur Kategorien, die Ihre Dienstleistungen tatsächlich abdecken."
        }
      },
      {
        "@type": "Question",
        "name": "Wann ist die beste Zeit für Steuerberater-Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Hauptsaison ist Januar bis Mai (Steuererklärungszeit). Bereits ab November sollten Sie Content für die kommende Saison vorbereiten. Nach dem 31. Juli (Abgabefrist mit Berater) beginnt die Akquise für das Folgejahr."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Keywords sind für Steuerberater am wertvollsten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die wertvollsten Keywords kombinieren Leistung mit Ort: 'Steuerberater [Stadt]', 'Steuerkanzlei [Stadtteil]'. Spezialisierungs-Keywords wie 'Steuerberater für Freiberufler' oder 'Steuerberater Immobilien' haben geringeres Volumen, aber höhere Conversion-Raten."
        }
      },
      {
        "@type": "Question",
        "name": "Dürfen Steuerberater aktiv um Bewertungen bitten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, das ist erlaubt und empfohlen. Anders als bei Ärzten gibt es für Steuerberater keine berufsrechtlichen Einschränkungen bei der Bewertungsakquise. Bitten Sie zufriedene Mandanten nach erfolgreichem Jahresabschluss um eine Google-Bewertung."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Content-Themen funktionieren für Steuerberater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steuer-Tipps, Fristenkalender, Änderungen im Steuerrecht, Checklisten für die Steuererklärung und Branchenspezifische Guides funktionieren besonders gut. Wichtig: Aktualität – veraltete Steuer-Infos schaden Ihrer Reputation."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wichtig ist die Spezialisierung für Local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sehr wichtig. Generische Keywords wie 'Steuerberater Hamburg' sind hart umkämpft. Spezialisierungen wie 'Steuerberater für Ärzte Hamburg' oder 'E-Commerce Steuerberater' haben weniger Wettbewerb und höhere Conversion-Raten."
        }
      },
      {
        "@type": "Question",
        "name": "Soll ich Preise auf meiner Website nennen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Richtwerte können helfen. Viele potenzielle Mandanten suchen nach 'Steuerberater Kosten'. Eine transparente Darstellung wie 'Einkommensteuererklärung ab X €' schafft Vertrauen und filtert unpassende Anfragen. Die StBVV setzt Rahmen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie optimiere ich für 'Steuerberater in der Nähe'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diese Suchanfrage wird über den Local Pack (Google Maps) bedient. Optimieren Sie Ihr Google Business Profil: vollständige Daten, viele positive Bewertungen, regelmäßige Google Posts, und stellen Sie sicher, dass Ihre Adresse korrekt und konsistent ist."
        }
      },
      {
        "@type": "Question",
        "name": "Braucht jeder Standort ein eigenes Google Business Profil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wenn Sie mehrere Niederlassungen haben. Jeder physische Standort mit Mandanten-Empfang sollte ein eigenes Profil bekommen. Wichtig: Jedes Profil braucht eine eigene Telefonnummer und eindeutige Inhalte."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Verzeichnisse sind für Steuerberater wichtig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neben Google Business: Steuerberater-Suchdienst der Bundessteuerberaterkammer, DATEV-Partnerliste, lokale IHK-Verzeichnisse, gelbeseiten.de und das Telefonbuch. Auch spezialisierte Portale wie steuerberater.de können wertvoll sein."
        }
      },
      {
        "@type": "Question",
        "name": "Wie gehe ich mit negativen Bewertungen um?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Antworten Sie professionell und sachlich. Vermeiden Sie Details zum Mandat (Schweigepflicht!). Bieten Sie ein persönliches Gespräch an. Bei falschen Tatsachenbehauptungen können Sie Löschung verlangen. Eine negative Bewertung unter vielen positiven schadet kaum."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert es, bis Local SEO wirkt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Erste Verbesserungen im Google Business Ranking zeigen sich oft nach 4-8 Wochen. Für organische Rankings in umkämpften Städten rechnen Sie mit 6-12 Monaten. Content-Marketing für Steuer-Themen kann schneller ranken, da die Nachfrage saisonal stark steigt."
        }
      },
      {
        "@type": "Question",
        "name": "Soll ich einen Blog mit Steuer-Tipps führen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wenn Sie ihn regelmäßig pflegen können. Ein gut gepflegter Steuer-Blog positioniert Sie als Experten und generiert organischen Traffic. Wichtig: Inhalte müssen aktuell sein – veraltete Steuerinformationen schaden Ihrer Reputation erheblich."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet Local SEO für Steuerberater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DIY: Ihre Zeit + ca. 100-200€/Monat für Tools. Agentur: 500-1.500€/Monat je nach Umfang und Wettbewerb in Ihrer Stadt. Der ROI ist bei einem einzigen gewonnenen Dauermandat (Jahreshonorar oft 1.000-5.000€+) schnell positiv."
        }
      }
    ]
  };

  const accountingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Beispiel Steuerkanzlei",
    "description": "Local SEO Best Practices für Steuerberater",
    "serviceType": ["Steuerberatung", "Buchhaltung", "Jahresabschluss"]
  };

  const mandantenTypen = [
    { typ: "Arbeitnehmer", suchverhalten: "Einmal jährlich, Frühjahr", keywords: "Steuererklärung machen lassen, Lohnsteuerhilfe Alternative", wert: "Mittel" },
    { typ: "Selbstständige", suchverhalten: "Ganzjährig, Beratungsbedarf", keywords: "Steuerberater für Selbstständige, Freelancer Steuer", wert: "Hoch" },
    { typ: "GmbH/UG", suchverhalten: "Ganzjährig, langfristig", keywords: "Steuerberater GmbH, Unternehmensberatung Steuern", wert: "Sehr hoch" },
    { typ: "Freiberufler", suchverhalten: "Quartalsweise, Vorauszahlungen", keywords: "Steuerberater für Ärzte/Anwälte/Architekten", wert: "Hoch" },
    { typ: "Immobilienbesitzer", suchverhalten: "Bei Kauf/Verkauf, jährlich", keywords: "Steuerberater Immobilien, Vermietung Steuern", wert: "Hoch" },
    { typ: "Erben", suchverhalten: "Einmalig, dringend", keywords: "Erbschaftsteuer Berater, Steuerberater Erbschaft", wert: "Mittel-Hoch" }
  ];

  const saisonalerKalender = [
    { monat: "Januar", aktivitaet: "Höchste Nachfrage", content: "Steuererklärung Tipps, Fristen 2026, Neuerungen im Steuerrecht" },
    { monat: "Februar-März", aktivitaet: "Sehr hoch", content: "Deadline-Reminder, Checklisten, häufige Fehler" },
    { monat: "April-Mai", aktivitaet: "Hoch", content: "Last-Minute-Tipps, Fristverlängerung, Belege-Checkliste" },
    { monat: "Juni-Juli", aktivitaet: "Mittel", content: "Midyear Tax Planning, Vorauszahlungen optimieren" },
    { monat: "August-September", aktivitaet: "Niedrig-Mittel", content: "Buchhaltung aufräumen, Jahresplanung" },
    { monat: "Oktober-November", aktivitaet: "Steigend", content: "Jahresend-Optimierung, Investitionsabzug, Gewinnplanung" },
    { monat: "Dezember", aktivitaet: "Mittel", content: "Jahresausblick, Steueränderungen 2027, Weihnachtspause-Info" }
  ];

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      additionalSchema={[faqSchema, accountingServiceSchema]}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 not-prose">
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-3xl font-bold text-primary">76%</p>
            <p className="text-sm text-muted-foreground">suchen online</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-3xl font-bold text-primary">Jan-Mai</p>
            <p className="text-sm text-muted-foreground">Hauptsaison</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Star className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-3xl font-bold text-primary">4,8★</p>
            <p className="text-sm text-muted-foreground">Ziel-Bewertung</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <p className="text-3xl font-bold text-primary">5-10x</p>
            <p className="text-sm text-muted-foreground">ROI möglich</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Die Mandantensuche hat sich verändert:</strong> 76% aller potenziellen Mandanten 
          recherchieren heute online, bevor sie einen Steuerberater kontaktieren. Wer bei Google nicht 
          gefunden wird, verliert Mandanten an die Konkurrenz.
        </p>

        <p>
          Als Steuerberater stehen Sie vor einer besonderen Situation: Ihre Dienstleistung ist 
          vertrauensbasiert, oft langfristig, und stark saisonal geprägt. Local SEO hilft Ihnen, 
          genau dann gefunden zu werden, wenn potenzielle Mandanten aktiv suchen.
        </p>

        <p>
          Dieser Guide zeigt Ihnen praxiserprobte Strategien, um Ihre lokale Sichtbarkeit zu 
          verbessern – von der Google Business Optimierung über saisonales Content-Marketing 
          bis zur systematischen Bewertungsakquise.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Was Sie in diesem Artikel lernen:
          </h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Wie potenzielle Mandanten online nach Steuerberatern suchen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Google Business Profil für Steuerberater optimieren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Die wertvollsten Keywords für Ihre Kanzlei</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Saisonales Marketing zur Steuererklärungszeit</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Mandanten-Bewertungen systematisch sammeln</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA />

      {/* Mandanten-Suchverhalten */}
      <section id="mandantensuche" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          Wie Mandanten online nach Steuerberatern suchen
        </h2>

        <p>
          Verschiedene Mandantengruppen haben unterschiedliche Suchverhalten. Verstehen Sie diese 
          Muster, um Ihre Local-SEO-Strategie gezielt auszurichten:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Mandanten-Typ</th>
                <th className="border p-3 text-left">Suchverhalten</th>
                <th className="border p-3 text-left">Typische Keywords</th>
                <th className="border p-3 text-left">Mandantenwert</th>
              </tr>
            </thead>
            <tbody>
              {mandantenTypen.map((typ, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="border p-3 font-medium">{typ.typ}</td>
                  <td className="border p-3">{typ.suchverhalten}</td>
                  <td className="border p-3 text-xs">{typ.keywords}</td>
                  <td className="border p-3">
                    <Badge className={
                      typ.wert === "Sehr hoch" ? "bg-green-100 text-green-800" :
                      typ.wert === "Hoch" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }>
                      {typ.wert}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Die Mandanten-Journey verstehen</h3>

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <p className="font-semibold">Awareness: "Brauche ich einen Steuerberater?"</p>
              <p className="text-sm text-muted-foreground">
                Keywords: "Steuerberater lohnt sich", "Steuerberater vs. selber machen", "Steuerberater Kosten"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <p className="font-semibold">Consideration: "Welcher Steuerberater passt zu mir?"</p>
              <p className="text-sm text-muted-foreground">
                Keywords: "Steuerberater [Stadt]", "Steuerberater für [Branche]", "Steuerberater Bewertungen"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <p className="font-semibold">Decision: "Diesen Steuerberater kontaktiere ich"</p>
              <p className="text-sm text-muted-foreground">
                Keywords: "[Kanzleiname] Bewertungen", "Steuerberater [Name] Erfahrungen"
              </p>
            </div>
          </div>
        </div>

        <h3>Privat vs. Geschäftsmandanten</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <Users className="h-5 w-5" /> Privatmandanten
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Suchverhalten:</strong> Saisonal (Jan-Mai)</li>
                <li>• <strong>Entscheidungsfaktor:</strong> Preis, Bewertungen, Nähe</li>
                <li>• <strong>Conversion-Zeit:</strong> Schnell (Tage)</li>
                <li>• <strong>Keywords:</strong> "Steuererklärung machen lassen"</li>
                <li>• <strong>Strategie:</strong> Volumen, einfache Prozesse</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                <Building2 className="h-5 w-5" /> Geschäftsmandanten
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Suchverhalten:</strong> Ganzjährig, intensiv</li>
                <li>• <strong>Entscheidungsfaktor:</strong> Expertise, Branchenkenntnis</li>
                <li>• <strong>Conversion-Zeit:</strong> Langsam (Wochen-Monate)</li>
                <li>• <strong>Keywords:</strong> "Steuerberater für GmbH"</li>
                <li>• <strong>Strategie:</strong> Spezialisierung, Content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-steuerberater" position="middle" />

      {/* Google Business */}
      <section id="google-business" className="mb-12">
        <h2 className="flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Google Business Profil für Steuerberater optimieren
        </h2>

        <p>
          Bei lokalen Suchanfragen wie "Steuerberater in der Nähe" erscheint das Local Pack (Google Maps) 
          prominent über den organischen Ergebnissen. Ein optimiertes Google Business Profil ist daher 
          unverzichtbar.
        </p>

        <h3>Die richtige Kategorie-Wahl</h3>

        <div className="bg-muted p-6 rounded-lg my-6">
          <p className="font-semibold mb-3">Empfohlene Kategorien:</p>
          <ul className="space-y-2">
            <li><strong>Hauptkategorie:</strong> Steuerberater</li>
            <li><strong>Nebenkategorie 1:</strong> Buchhalter (falls Buchhaltung angeboten)</li>
            <li><strong>Nebenkategorie 2:</strong> Finanzberater (falls Finanzplanung angeboten)</li>
            <li><strong>Nebenkategorie 3:</strong> Unternehmensberater (falls Beratung Schwerpunkt)</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Wichtig:</strong> Wählen Sie nur Kategorien, die Ihre Dienstleistungen tatsächlich abdecken.
          </p>
        </div>

        <h3>Profil-Beschreibung optimieren</h3>

        <p>
          Nutzen Sie die 750 Zeichen strategisch:
        </p>

        <ol>
          <li><strong>Einstieg mit Keyword:</strong> "Als Steuerberater in [Stadt] beraten wir..."</li>
          <li><strong>Leistungsspektrum:</strong> Steuererklärung, Buchhaltung, Jahresabschluss, Beratung</li>
          <li><strong>Spezialisierungen:</strong> "Schwerpunkt: Freiberufler, GmbH-Beratung, Immobilien"</li>
          <li><strong>Vertrauenssignale:</strong> "Seit [Jahr] in [Stadt]", "Mitglied Steuerberaterverband"</li>
          <li><strong>Call-to-Action:</strong> "Kostenlose Erstberatung: [Telefon]"</li>
        </ol>

        <h3>Attribute und Services</h3>

        <p>
          Google Business bietet spezifische Attribute für Steuerberater:
        </p>

        <ul>
          <li>✅ Online-Termine verfügbar</li>
          <li>✅ Termine außerhalb der Geschäftszeiten</li>
          <li>✅ Virtuelle Beratung möglich</li>
          <li>✅ Parkplätze vorhanden</li>
          <li>✅ Barrierefrei zugänglich</li>
        </ul>

        <h3>Google Posts für Steuerberater</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 mb-2 text-primary" />
              <h4 className="font-bold mb-2">Saisonale Posts</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Steuererklärung 2025: Jetzt Termin sichern"</li>
                <li>• "Frist 31. Juli – noch Kapazitäten frei"</li>
                <li>• "Jahresend-Check: 5 Steuer-Tipps"</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 mb-2 text-primary" />
              <h4 className="font-bold mb-2">Content-Posts</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Neues Steuergesetz: Was Sie wissen müssen"</li>
                <li>• "Homeoffice-Pauschale 2026 – so nutzen Sie sie"</li>
                <li>• "Selbstständig? Diese Fristen gelten"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Keyword-Strategie */}
      <section id="keywords" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Calculator className="h-8 w-8 text-primary" />
          Keyword-Strategie für Steuerberater
        </h2>

        <p>
          Die richtige Keyword-Strategie entscheidet über Ihren Local-SEO-Erfolg. Hier sind die 
          wichtigsten Keyword-Kategorien für Steuerberater:
        </p>

        <h3>Lokale Keywords (höchste Priorität)</h3>

        <div className="bg-muted p-6 rounded-lg my-6">
          <ul className="space-y-2">
            <li><strong>Primär:</strong> "Steuerberater [Stadt]", "Steuerkanzlei [Stadt]"</li>
            <li><strong>Stadtteil:</strong> "Steuerberater [Stadtteil]", "Steuerberater in [Bezirk]"</li>
            <li><strong>Nähe:</strong> "Steuerberater in der Nähe", "Steuerberater in meiner Nähe"</li>
          </ul>
        </div>

        <h3>Spezialisierungs-Keywords (höchste Conversion)</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Zielgruppe</th>
                <th className="border p-3 text-left">Keywords</th>
                <th className="border p-3 text-left">Wettbewerb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Freiberufler</td>
                <td className="border p-3">"Steuerberater für Freiberufler", "Steuerberater Ärzte/Anwälte"</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Selbstständige</td>
                <td className="border p-3">"Steuerberater für Selbstständige", "Freelancer Steuerberater"</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">GmbH/UG</td>
                <td className="border p-3">"Steuerberater GmbH", "Steuerberater Kapitalgesellschaft"</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Hoch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">E-Commerce</td>
                <td className="border p-3">"Steuerberater Amazon FBA", "E-Commerce Steuerberater"</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Niedrig</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Immobilien</td>
                <td className="border p-3">"Steuerberater Immobilien", "Steuerberater Vermieter"</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Leistungs-Keywords</h3>

        <ul>
          <li><strong>Allgemein:</strong> "Steuererklärung machen lassen", "Buchhaltung auslagern"</li>
          <li><strong>Spezifisch:</strong> "Jahresabschluss erstellen lassen", "Lohnbuchhaltung Service"</li>
          <li><strong>Informational:</strong> "Steuerberater Kosten", "Was kostet ein Steuerberater"</li>
        </ul>
      </section>

      {/* Content-Marketing */}
      <section id="content-marketing" className="mb-12">
        <h2 className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Content-Marketing für Steuerberater
        </h2>

        <p>
          Content-Marketing positioniert Sie als Experten und generiert organischen Traffic. 
          Besonders in der Steuerberatung ist aktueller, korrekter Content entscheidend.
        </p>

        <h3>Content-Formate mit hohem ROI</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-3">📅 Fristenkalender</h4>
              <p className="text-sm text-muted-foreground mb-3">
                "Steuertermine 2026" wird jedes Jahr tausendfach gesucht. Erstellen Sie einen 
                umfassenden Fristenkalender mit allen wichtigen Terminen.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Steuererklärungsfristen</li>
                <li>• Vorauszahlungstermine</li>
                <li>• Umsatzsteuer-Fristen</li>
                <li>• Lohnsteuer-Termine</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-3">✅ Checklisten</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Praktische Checklisten werden geteilt und verlinkt. Sie zeigen Ihre Expertise 
                und generieren Leads.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Belege-Checkliste Steuererklärung</li>
                <li>• Checkliste Jahresabschluss</li>
                <li>• Existenzgründer Steuer-Checkliste</li>
                <li>• Homeoffice steuerlich absetzen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3>Steuer-News und Updates</h3>

        <p>
          Aktuelle Steuer-Nachrichten bieten hervorragende SEO-Chancen:
        </p>

        <ul>
          <li><strong>Gesetzesänderungen:</strong> Neue Gesetze zeitnah erklären</li>
          <li><strong>Urteile:</strong> Relevante BFH- und FG-Urteile verständlich aufbereiten</li>
          <li><strong>Förderungen:</strong> Neue Förderprogramme, Zuschüsse, Steuererleichterungen</li>
          <li><strong>Corona/Krisen:</strong> Sonderregelungen schnell kommunizieren</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
          <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            ⚠️ Wichtig: Aktualität ist entscheidend!
          </p>
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Veraltete Steuerinformationen schaden Ihrer Reputation erheblich. Versehen Sie jeden 
            Artikel mit "Stand: [Datum]" und prüfen Sie regelmäßig auf Aktualität. Löschen oder 
            aktualisieren Sie veraltete Inhalte umgehend.
          </p>
        </div>
      </section>

      {/* Saisonale Optimierung */}
      <section id="saisonale-optimierung" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Clock className="h-8 w-8 text-primary" />
          Saisonale Optimierung: Steuererklärungszeit nutzen
        </h2>

        <p>
          Die Nachfrage nach Steuerberatern schwankt stark im Jahresverlauf. Planen Sie Ihre 
          Marketing-Aktivitäten entsprechend:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Zeitraum</th>
                <th className="border p-3 text-left">Nachfrage</th>
                <th className="border p-3 text-left">Content-Fokus</th>
              </tr>
            </thead>
            <tbody>
              {saisonalerKalender.map((eintrag, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="border p-3 font-medium">{eintrag.monat}</td>
                  <td className="border p-3">
                    <Badge className={
                      eintrag.aktivitaet.includes("Höchste") || eintrag.aktivitaet === "Sehr hoch" ? "bg-green-100 text-green-800" :
                      eintrag.aktivitaet === "Hoch" ? "bg-blue-100 text-blue-800" :
                      eintrag.aktivitaet.includes("Steigend") ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {eintrag.aktivitaet}
                    </Badge>
                  </td>
                  <td className="border p-3 text-sm">{eintrag.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Kampagnen zur Hochsaison</h3>

        <p>
          Von Januar bis Mai ist Hauptsaison. So nutzen Sie diese Zeit optimal:
        </p>

        <ul>
          <li><strong>November-Dezember:</strong> Content für die kommende Saison vorbereiten</li>
          <li><strong>Januar:</strong> "Neues Jahr, neue Steuern" – Kampagnenstart</li>
          <li><strong>März-April:</strong> Deadline-Marketing – "Noch X Wochen bis zur Frist"</li>
          <li><strong>Mai:</strong> "Last-Minute-Service" für Kurzentschlossene</li>
          <li><strong>Juni-Juli:</strong> Fristverlängerungs-Service (mit Steuerberater bis 28.02.)</li>
        </ul>
      </section>

      <BlogCTAABTest articleSlug="local-seo-steuerberater" position="end" />

      {/* Bewertungen */}
      <section id="bewertungen" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Star className="h-8 w-8 text-yellow-500" />
          Mandanten-Bewertungen systematisch sammeln
        </h2>

        <p>
          Bewertungen sind für Steuerberater besonders wichtig, da das Vertrauen in Ihren Umgang 
          mit sensiblen Finanzdaten entscheidend ist. So sammeln Sie systematisch positive Bewertungen:
        </p>

        <h3>Der perfekte Zeitpunkt</h3>

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200">Nach der Steuererstattung</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Wenn der Mandant die Erstattung erhält, ist die Zufriedenheit am höchsten. 
                "Haben Sie Ihre Erstattung erhalten? Wir freuen uns über Ihr Feedback!"
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200">Nach dem Jahresabschluss</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Der erfolgreiche Abschluss eines Geschäftsjahres ist ein guter Moment für 
                Bewertungsanfragen bei Geschäftskunden.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-200">Nach erfolgreicher Problemlösung</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Wenn Sie ein komplexes Problem gelöst haben (Betriebsprüfung überstanden, 
                Einspruch gewonnen), ist die Dankbarkeit besonders groß.
              </p>
            </div>
          </div>
        </div>

        <h3>Bewertungsanfrage per E-Mail</h3>

        <div className="bg-muted p-6 rounded-lg my-6">
          <p className="font-semibold mb-3">Betreff: Ihre Steuererklärung 2025 ist fertig – und Ihre Meinung?</p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
{`Liebe/r [Name],

wir freuen uns, dass wir Ihre Steuererklärung erfolgreich abschließen konnten. 
Ihre Erstattung von [Betrag] sollte in den nächsten Wochen eingehen.

Dürfen wir Sie um einen kleinen Gefallen bitten? Wenn Sie mit unserer Beratung 
zufrieden waren, würden wir uns sehr über eine kurze Google-Bewertung freuen:

➡️ [Direkter Bewertungslink]

Das dauert nur 1-2 Minuten und hilft anderen, einen vertrauenswürdigen 
Steuerberater zu finden.

Haben Sie Fragen? Wir sind jederzeit für Sie da.

Herzliche Grüße,
[Ihr Name]
[Kanzlei]`}
          </p>
        </div>

        <h3>Bewertungen auf anderen Plattformen</h3>

        <ul>
          <li><strong>Google:</strong> Priorität #1 für Local SEO</li>
          <li><strong>ProvenExpert:</strong> Aggregiert Bewertungen, Branchenstandard</li>
          <li><strong>DATEV:</strong> Für DATEV-Partner relevant</li>
          <li><strong>Steuerberater-Suchdienst:</strong> Bundessteuerberaterkammer-Portal</li>
          <li><strong>Kununu:</strong> Für Arbeitgebermarke und B2B-Vertrauen</li>
        </ul>
      </section>

      {/* Schema Markup */}
      <section id="schema-markup" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          Schema Markup für Steuerberater
        </h2>

        <p>
          Strukturierte Daten helfen Google, Ihre Dienstleistungen besser zu verstehen:
        </p>

        <div className="bg-muted p-4 rounded-lg my-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Mustermann Steuerberatung",
  "description": "Ihr Steuerberater in [Stadt] für...",
  "url": "https://www.mustermann-steuerberater.de",
  "telephone": "+49 [Nummer]",
  "email": "info@mustermann-steuerberater.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "[Stadt]",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Lat]",
    "longitude": "[Long]"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "€€",
  "areaServed": {
    "@type": "City",
    "name": "[Stadt]"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Steuerberatung Leistungen",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Einkommensteuererklärung"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Buchhaltung"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Jahresabschluss"}}
    ]
  }
}`}</pre>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufige Fragen: Local SEO für Steuerberater</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie finden potenzielle Mandanten einen Steuerberater?</AccordionTrigger>
            <AccordionContent>
              76% aller Mandanten-Suchen starten online. Die häufigsten Suchanfragen sind 
              "Steuerberater [Stadt]", "Steuerkanzlei in der Nähe" und "Steuerberater für [Spezialisierung]". 
              Google ist dabei die mit Abstand wichtigste Suchmaschine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Wann ist die beste Zeit für Steuerberater-Marketing?</AccordionTrigger>
            <AccordionContent>
              Die Hauptsaison ist Januar bis Mai (Steuererklärungszeit). Bereits ab November sollten 
              Sie Content für die kommende Saison vorbereiten. Nach dem 31. Juli (Abgabefrist mit 
              Berater) beginnt die Akquise für das Folgejahr.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Keywords sind für Steuerberater am wertvollsten?</AccordionTrigger>
            <AccordionContent>
              Die wertvollsten Keywords kombinieren Leistung mit Ort: "Steuerberater [Stadt]", 
              "Steuerkanzlei [Stadtteil]". Spezialisierungs-Keywords wie "Steuerberater für Freiberufler" 
              haben geringeres Volumen, aber höhere Conversion-Raten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Dürfen Steuerberater aktiv um Bewertungen bitten?</AccordionTrigger>
            <AccordionContent>
              Ja, das ist erlaubt und empfohlen. Anders als bei Ärzten gibt es für Steuerberater keine 
              berufsrechtlichen Einschränkungen bei der Bewertungsakquise. Bitten Sie zufriedene 
              Mandanten nach erfolgreichem Jahresabschluss um eine Google-Bewertung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Wie wichtig ist die Spezialisierung für Local SEO?</AccordionTrigger>
            <AccordionContent>
              Sehr wichtig. Generische Keywords wie "Steuerberater Hamburg" sind hart umkämpft. 
              Spezialisierungen wie "Steuerberater für Ärzte Hamburg" oder "E-Commerce Steuerberater" 
              haben weniger Wettbewerb und höhere Conversion-Raten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Wie lange dauert es, bis Local SEO wirkt?</AccordionTrigger>
            <AccordionContent>
              Erste Verbesserungen im Google Business Ranking zeigen sich oft nach 4-8 Wochen. 
              Für organische Rankings in umkämpften Städten rechnen Sie mit 6-12 Monaten. 
              Content-Marketing für Steuer-Themen kann schneller ranken, da die Nachfrage saisonal stark steigt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Was kostet Local SEO für Steuerberater?</AccordionTrigger>
            <AccordionContent>
              DIY: Ihre Zeit + ca. 100-200€/Monat für Tools. Agentur: 500-1.500€/Monat je nach Umfang 
              und Wettbewerb in Ihrer Stadt. Der ROI ist bei einem einzigen gewonnenen Dauermandat 
              (Jahreshonorar oft 1.000-5.000€+) schnell positiv.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoSteuerberater;