import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GoogleMapsRankingExplainer from "@/components/blog/GoogleMapsRankingExplainer";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import DefinitionBox from "@/components/blog/DefinitionBox";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, MapPin, Star, TrendingUp, Building, Users, Globe, AlertTriangle, Award, Target, Zap, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GoogleMapsRankingFaktoren = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-seo-ranking-faktoren", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "proximity", title: "Proximity (Nähe)" },
    { id: "relevance", title: "Relevance (Relevanz)" },
    { id: "prominence", title: "Prominence (Bekanntheit)" },
    { id: "20-faktoren", title: "Die 20 wichtigsten Faktoren" },
    { id: "negative-faktoren", title: "Negative Faktoren" },
    { id: "case-study", title: "Case Study" },
    { id: "faq", title: "FAQ" }
  ];

  const rankingFactors = [
    { category: "Google Business Profil", factor: "Primärkategorie", weight: "Sehr hoch", tip: "Wählen Sie die spezifischste passende Kategorie" },
    { category: "Google Business Profil", factor: "Vollständigkeit des Profils", weight: "Hoch", tip: "100% aller Felder ausfüllen" },
    { category: "Google Business Profil", factor: "Beschreibung mit Keywords", weight: "Mittel", tip: "Natürliche Keyword-Integration, 750 Zeichen nutzen" },
    { category: "Google Business Profil", factor: "Geschäftsname", weight: "Hoch", tip: "Exakt wie auf Schild, keine Keyword-Stuffing" },
    { category: "Google Business Profil", factor: "Öffnungszeiten", weight: "Mittel", tip: "Immer aktuell, auch Feiertage pflegen" },
    { category: "Bewertungen", factor: "Anzahl der Bewertungen", weight: "Sehr hoch", tip: "Kontinuierlich neue Bewertungen sammeln" },
    { category: "Bewertungen", factor: "Durchschnittliche Sternebewertung", weight: "Hoch", tip: "Mindestens 4.0 Sterne anstreben" },
    { category: "Bewertungen", factor: "Aktualität der Bewertungen", weight: "Hoch", tip: "Regelmäßiger Zufluss wichtiger als Masse" },
    { category: "Bewertungen", factor: "Antworten auf Bewertungen", weight: "Mittel", tip: "100% Antwortrate, auch auf negative" },
    { category: "Bewertungen", factor: "Keywords in Bewertungen", weight: "Mittel", tip: "Nicht manipulierbar, aber hilfreich" },
    { category: "Website & SEO", factor: "On-Page SEO der Website", weight: "Hoch", tip: "Lokale Keywords in Title, H1, Content" },
    { category: "Website & SEO", factor: "Mobile-Friendliness", weight: "Hoch", tip: "Responsive Design ist Pflicht" },
    { category: "Website & SEO", factor: "Ladegeschwindigkeit", weight: "Mittel", tip: "Core Web Vitals optimieren" },
    { category: "Website & SEO", factor: "Schema Markup", weight: "Mittel", tip: "LocalBusiness Schema implementieren" },
    { category: "Citations & Links", factor: "NAP-Konsistenz", weight: "Sehr hoch", tip: "Überall exakt gleiche Daten" },
    { category: "Citations & Links", factor: "Anzahl lokaler Citations", weight: "Hoch", tip: "In relevanten Branchenbüchern eintragen" },
    { category: "Citations & Links", factor: "Qualität der Backlinks", weight: "Hoch", tip: "Lokale, themenrelevante Links aufbauen" },
    { category: "Nutzerverhalten", factor: "Klickrate (CTR)", weight: "Hoch", tip: "Attraktive Fotos und Beschreibung" },
    { category: "Nutzerverhalten", factor: "Direktanrufe/Wegbeschreibungen", weight: "Mittel", tip: "Call-to-Actions optimieren" },
    { category: "Nutzerverhalten", factor: "Verweildauer auf Profil", weight: "Mittel", tip: "Viele Fotos und Posts" },
  ];

  const negativeFactors = [
    { factor: "Keyword-Stuffing im Geschäftsnamen", severity: "Sehr hoch", description: "Kann zur Suspendierung führen" },
    { factor: "Falsche Adresse/Standort", severity: "Sehr hoch", description: "Manipulation führt zu Abstrafung" },
    { factor: "Gefälschte Bewertungen", severity: "Sehr hoch", description: "Werden gelöscht, Profil kann suspendiert werden" },
    { factor: "Inkonsistente NAP-Daten", severity: "Hoch", description: "Verwirrt Google und schadet Rankings" },
    { factor: "Doppelte Listings", severity: "Hoch", description: "Verdünnt Signale, sollte zusammengeführt werden" },
    { factor: "Falsche Kategorien", severity: "Mittel", description: "Irrelevante Suchen, keine Conversions" },
    { factor: "Veraltete Informationen", severity: "Mittel", description: "Falsche Öffnungszeiten = schlechte Erfahrung" },
    { factor: "Keine Fotos", severity: "Mittel", description: "Weniger Klicks, schlechtere CTR" },
  ];

  const faqItems = [
    { question: "Was sind die 3 wichtigsten Google Maps Ranking-Faktoren?", answer: "Die drei Hauptfaktoren sind Proximity (Nähe zum Suchenden), Relevance (Übereinstimmung mit der Suchanfrage) und Prominence (Bekanntheit und Autorität des Unternehmens). Nur auf Prominence haben Sie direkten Einfluss." },
    { question: "Wie lange dauert es, bis Google Maps Rankings sich verbessern?", answer: "Erste Verbesserungen sind oft nach 4-8 Wochen sichtbar. Signifikante Ranking-Verbesserungen benötigen typischerweise 3-6 Monate kontinuierlicher Optimierung." },
    { question: "Sind Bewertungen wirklich so wichtig für Google Maps?", answer: "Ja! Bewertungen sind einer der stärksten Ranking-Faktoren. Nicht nur die Anzahl zählt, sondern auch die durchschnittliche Bewertung, die Aktualität und ob Sie auf Bewertungen antworten." },
    { question: "Kann ich die Proximity (Nähe) beeinflussen?", answer: "Nein, die physische Entfernung zum Suchenden kann nicht beeinflusst werden. Aber Sie können für ein größeres Servicegebiet ranken, indem Sie Ihre Relevance und Prominence stark verbessern." },
    { question: "Was passiert, wenn ich Keywords in meinen Geschäftsnamen einfüge?", answer: "Keyword-Stuffing im Geschäftsnamen verstößt gegen Googles Richtlinien und kann zur Suspendierung Ihres Profils führen. Verwenden Sie nur Ihren echten Geschäftsnamen." },
    { question: "Wie viele Bewertungen brauche ich, um gut zu ranken?", answer: "Es gibt keine feste Zahl. In den meisten Märkten sind 20-50 Bewertungen ein guter Start. Wichtiger als eine bestimmte Anzahl ist ein kontinuierlicher Zufluss neuer Bewertungen." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">46%</div>
            <div className="text-sm text-muted-foreground">lokale Suchabsicht</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">Haupt-Faktoren</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">76%</div>
            <div className="text-sm text-muted-foreground">besuchen in 24h</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">Sub-Faktoren</div>
          </CardContent>
        </Card>
      </div>

      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Google Maps Ranking ist keine Magie – es folgt klaren Regeln.</strong> Google 
        bewertet lokale Unternehmen anhand von drei Hauptfaktoren: Proximity (Nähe), 
        Relevance (Relevanz) und Prominence (Bekanntheit). Wer diese Faktoren versteht 
        und optimiert, dominiert das Local Pack und gewinnt mehr Kunden.
      </p>

      <DefinitionBox
        term="Google Maps Ranking-Faktoren"
        definition="Google Maps Ranking-Faktoren sind die Kriterien, anhand derer Google die Reihenfolge lokaler Unternehmen auf Google Maps und im Local Pack bestimmt. Die drei Hauptfaktoren sind Proximity (Entfernung zum Suchenden), Relevance (Übereinstimmung mit der Suchanfrage) und Prominence (Bekanntheit und Autorität des Unternehmens)."
        examples={[
          "Proximity: Physische Nähe des Unternehmens zum Suchenden – nicht direkt beeinflussbar",
          "Relevance: Wie gut das Profil zur Suchanfrage passt (Kategorien, Keywords, Beschreibung)",
          "Prominence: Bewertungen, Backlinks, NAP-Konsistenz und Online-Reputation"
        ]}
      />

      <KeyTakeawaysBox 
        items={[
          "Die 3 Hauptfaktoren: Proximity, Relevance, Prominence erklärt",
          "20 konkrete Ranking-Faktoren mit Gewichtung und Optimierungs-Tipps",
          "Welche Faktoren du aktiv beeinflussen kannst (und welche nicht)",
          "Negative Faktoren die dein Ranking zerstören können",
          "Praxis-Case-Study mit konkreten Ranking-Verbesserungen"
        ]}
      />

      <BlogCTAABTest articleSlug="google-maps-seo-ranking-faktoren" position="intro" />

      {/* Proximity Section */}
      <section id="proximity" className="mb-12">
        <h2 className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Proximity: Die Nähe zum Suchenden
        </h2>
        
        <p className="mb-6">
          <strong>Proximity ist der mächtigste und gleichzeitig am wenigsten beeinflussbare Faktor.</strong> 
          Google zeigt Unternehmen, die physisch näher am Suchenden sind, bevorzugt an.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-lg">Was Google misst</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• <strong>GPS-Standort:</strong> Bei mobiler Suche</p>
              <p>• <strong>IP-Adresse:</strong> Bei Desktop-Suche</p>
              <p>• <strong>Suchbegriff:</strong> "in [Stadt/Stadtteil]"</p>
              <p>• <strong>Google-Verlauf:</strong> Frühere Standorte</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg">Was Sie tun können</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Stadtteil-spezifische Landingpages erstellen</p>
              <p>• Servicegebiet im Google Business definieren</p>
              <p>• Lokale Keywords verwenden</p>
              <p>• Relevance + Prominence maximieren, um Proximity auszugleichen</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <p className="text-sm">
              <strong>Wichtig:</strong> Versuchen Sie niemals, Ihren Standort zu fälschen. 
              Google erkennt dies und kann Ihr Profil suspendieren. Arbeiten Sie stattdessen 
              an den Faktoren, die Sie kontrollieren können.
            </p>
          </div>
        </div>
      </section>

      {/* Relevance Section */}
      <section id="relevance" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Relevance: Die Übereinstimmung mit der Suche
        </h2>
        
        <p className="mb-6">
          Relevance misst, <strong>wie gut Ihr Unternehmen zur Suchanfrage passt</strong>. 
          Je besser Google versteht, was Sie anbieten, desto relevanter werden Sie für passende Suchen.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Primärkategorie wählen</p>
              <p className="text-sm text-muted-foreground">
                Die wichtigste Entscheidung! Wählen Sie die spezifischste Kategorie, die zu Ihrem 
                Hauptgeschäft passt. "Italienisches Restaurant" rankt besser für "Italiener" als "Restaurant".
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Sekundärkategorien hinzufügen</p>
              <p className="text-sm text-muted-foreground">
                Fügen Sie alle passenden Kategorien hinzu (bis zu 10). Ein Pizza-Restaurant 
                könnte auch "Lieferdienst" und "Catering" haben.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Beschreibung mit Keywords</p>
              <p className="text-sm text-muted-foreground">
                Nutzen Sie alle 750 Zeichen und integrieren Sie relevante Keywords natürlich. 
                Beschreiben Sie Ihre Dienstleistungen, Produkte und Besonderheiten.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Produkte & Services hinzufügen</p>
              <p className="text-sm text-muted-foreground">
                Listen Sie alle Ihre Angebote auf. Jedes Produkt/Service mit eigener 
                Beschreibung und Keywords verbessert Ihre Relevanz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-maps-seo-ranking-faktoren" position="middle" />

      {/* Prominence Section */}
      <section id="prominence" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          Prominence: Die Bekanntheit Ihres Unternehmens
        </h2>
        
        <p className="mb-6">
          Prominence ist der Faktor, auf den Sie den <strong>größten Einfluss</strong> haben. 
          Google bewertet, wie bekannt und vertrauenswürdig Ihr Unternehmen ist – online und offline.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Bewertungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Anzahl der Bewertungen</li>
                <li>• Durchschnittliche Sterne</li>
                <li>• Aktualität (neue wichtiger)</li>
                <li>• Keywords in Bewertungstexten</li>
                <li>• Ihre Antworten</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Online-Präsenz
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Website-SEO & Authority</li>
                <li>• Backlinks (Quantität & Qualität)</li>
                <li>• Erwähnungen/Citations</li>
                <li>• Social Signals</li>
                <li>• NAP-Konsistenz</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-green-500" />
                Offline-Faktoren
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Unternehmensgröße/-alter</li>
                <li>• Offline-Bekanntheit</li>
                <li>• Presseerwähnungen</li>
                <li>• Wikipedia-Eintrag</li>
                <li>• Markenbekanntheit</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Die 20 Faktoren */}
      <section id="20-faktoren" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Die 20 wichtigsten Ranking-Faktoren im Detail
        </h2>
        
        <p className="mb-6">
          Basierend auf Studien und Praxiserfahrung: Diese 20 Faktoren haben den größten 
          Einfluss auf Ihre Google Maps Position.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Kategorie</th>
                <th className="border p-3 text-left">Faktor</th>
                <th className="border p-3 text-left">Gewichtung</th>
                <th className="border p-3 text-left">Optimierungs-Tipp</th>
              </tr>
            </thead>
            <tbody>
              {rankingFactors.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border p-3 font-medium">{item.category}</td>
                  <td className="border p-3">{item.factor}</td>
                  <td className="border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.weight === "Sehr hoch" ? "bg-red-100 text-red-700" :
                      item.weight === "Hoch" ? "bg-orange-100 text-orange-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {item.weight}
                    </span>
                  </td>
                  <td className="border p-3 text-muted-foreground">{item.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Negative Faktoren */}
      <section id="negative-faktoren" className="mb-12">
        <h2 className="flex items-center gap-2">
          <XCircle className="h-6 w-6 text-red-500" />
          Negative Ranking-Faktoren: Was Ihr Ranking zerstört
        </h2>
        
        <p className="mb-6">
          Diese Faktoren können Ihre Rankings <strong>aktiv verschlechtern</strong> oder 
          sogar zur Suspendierung Ihres Profils führen.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {negativeFactors.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-red-500">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{item.factor}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                      item.severity === "Sehr hoch" ? "bg-red-100 text-red-700" :
                      item.severity === "Hoch" ? "bg-orange-100 text-orange-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      Schweregrad: {item.severity}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Case Study: Von Platz 15 auf Platz 1 in 4 Monaten
        </h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Handwerksbetrieb aus Stuttgart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-red-600">Ausgangssituation</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Platz 15+ im Local Pack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Nur 3 Bewertungen (3.5 Sterne)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Unvollständiges Google-Profil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Keine Website-Optimierung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Inkonsistente NAP-Daten</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Nach 4 Monaten</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Platz 1 im Local Pack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>47 Bewertungen (4.8 Sterne)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>100% vollständiges Profil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Website mit lokalem SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>NAP in 25 Verzeichnissen korrigiert</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2">Ergebnis</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">+340%</p>
                  <p className="text-xs text-muted-foreground">Website-Besucher</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">+180%</p>
                  <p className="text-xs text-muted-foreground">Anrufe/Monat</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">+25</p>
                  <p className="text-xs text-muted-foreground">Neukunden/Monat</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Schlüssel zum Erfolg:</strong> Es gab keine magische Einzelmaßnahme. 
            Der Erfolg kam durch die konsequente Optimierung aller Faktoren gleichzeitig – 
            Profil, Bewertungen, Website, Citations. Local SEO ist Marathon, nicht Sprint.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Was sind die 3 wichtigsten Google Maps Ranking-Faktoren?</AccordionTrigger>
            <AccordionContent>
              Die drei Hauptfaktoren sind: <strong>Proximity</strong> (Nähe zum Suchenden), 
              <strong>Relevance</strong> (Übereinstimmung mit der Suchanfrage) und 
              <strong>Prominence</strong> (Bekanntheit und Autorität). Nur auf Relevance 
              und Prominence haben Sie direkten Einfluss.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie lange dauert es, bis sich meine Rankings verbessern?</AccordionTrigger>
            <AccordionContent>
              Erste Verbesserungen sind oft nach 4-8 Wochen sichtbar. Signifikante 
              Ranking-Verbesserungen benötigen typischerweise 3-6 Monate kontinuierlicher 
              Optimierung. In wettbewerbsintensiven Märkten kann es länger dauern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Sind Bewertungen wirklich so wichtig?</AccordionTrigger>
            <AccordionContent>
              Ja, Bewertungen gehören zu den stärksten Ranking-Faktoren! Nicht nur die 
              Anzahl zählt, sondern auch die durchschnittliche Bewertung (min. 4.0 Sterne), 
              die Aktualität (neue Bewertungen sind wichtiger) und ob Sie auf Bewertungen 
              antworten (100% Antwortrate anstreben).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Kann ich die Nähe (Proximity) beeinflussen?</AccordionTrigger>
            <AccordionContent>
              Die physische Entfernung zum Suchenden können Sie nicht beeinflussen. 
              Aber: Wenn Ihre Relevance und Prominence stark genug sind, können Sie 
              auch für Suchanfragen außerhalb Ihres unmittelbaren Umkreises ranken. 
              Erstellen Sie außerdem stadtteil-spezifische Landingpages.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Was passiert bei Keyword-Stuffing im Geschäftsnamen?</AccordionTrigger>
            <AccordionContent>
              Keyword-Stuffing (z.B. "Müller Klempner Hamburg Sanitär Notdienst 24h") 
              verstößt gegen Googles Richtlinien. Im besten Fall wird der Name korrigiert, 
              im schlimmsten Fall wird Ihr Profil suspendiert. Verwenden Sie ausschließlich 
              Ihren echten, legalen Geschäftsnamen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Wie viele Bewertungen brauche ich?</AccordionTrigger>
            <AccordionContent>
              Es gibt keine feste Zahl. In weniger wettbewerbsintensiven Branchen 
              können 10-20 Bewertungen reichen. In stark umkämpften Märkten brauchen 
              Sie oft 50+. Wichtiger als eine bestimmte Anzahl ist ein kontinuierlicher 
              Zufluss neuer Bewertungen – 2-4 pro Monat ist ein gutes Ziel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Ihr Aktionsplan</h2>

        <p className="mb-4">
          Google Maps Rankings folgen klaren Regeln. Wer die Faktoren versteht und 
          systematisch optimiert, gewinnt mehr lokale Sichtbarkeit und Kunden.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Ihre Prioritäten (in dieser Reihenfolge):</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span><strong>Google Business Profil</strong> zu 100% vervollständigen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span><strong>Richtige Kategorien</strong> wählen (primär + sekundär)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span><strong>Bewertungen</strong> aktiv und kontinuierlich sammeln</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span><strong>NAP-Konsistenz</strong> in allen Verzeichnissen sicherstellen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
              <span><strong>Website</strong> für lokale Keywords optimieren</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">6</span>
              <span><strong>Lokale Backlinks</strong> aufbauen</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Ranking Tracking Explainer */}
      <GoogleMapsRankingExplainer compact />

      <SourcesSection
        sources={[
          { title: "Google Business Profile Richtlinien", url: "https://support.google.com/business/answer/3038177", type: "documentation", description: "Offizielle Richtlinien von Google für Unternehmensprofile" },
          { title: "MOZ Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors", type: "study", description: "Jährliche Studie zu lokalen Ranking-Faktoren" },
          { title: "BrightLocal Local SEO Survey", url: "https://www.brightlocal.com/research/", type: "study", description: "Aktuelle Forschung zu Local SEO" },
          { title: "Google Maps Hilfe", url: "https://support.google.com/maps", type: "documentation", description: "Offizielle Google Maps Dokumentation" }
        ]}
      />

      <HelpfulnessWidget articleSlug="google-maps-seo-ranking-faktoren" />
    </ArticleLayout>
  );
};

export default GoogleMapsRankingFaktoren;
