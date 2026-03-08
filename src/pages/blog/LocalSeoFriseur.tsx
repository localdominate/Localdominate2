import React from 'react';
import ArticleLayout from '@/components/blog/ArticleLayout';
import { getArticleBySlug } from '@/data/blogArticles';
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from '@/i18n/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scissors, 
  Star, 
  Users, 
  TrendingUp, 
  Camera, 
  Calendar,
  MessageSquare,
  Instagram,
  MapPin,
  Clock,
  Euro,
  Sparkles,
  CheckCircle,
  XCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Gift,
  AlertTriangle,
  Phone
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import BeautyKeywordGenerator from '@/components/blog/BeautyKeywordGenerator';
import BookingPlatformTable from '@/components/blog/BookingPlatformTable';
import BeautyPortfolioOptimizer from '@/components/blog/BeautyPortfolioOptimizer';
import ArticleCTA from '@/components/blog/ArticleCTA';
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";

const LocalSeoFriseur: React.FC = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug('local-seo-friseursalon-beauty', language);
  
  if (!article) {
    return <div>Artikel nicht gefunden</div>;
  }

  const tocItems = [
    { id: 'einleitung', title: 'Einleitung' },
    { id: 'statistiken', title: 'Branchenstatistiken' },
    { id: 'kundenreise', title: 'Die Beauty-Kundenreise' },
    { id: 'keywords', title: 'Keyword-Generator', level: 2 },
    { id: 'google-business', title: 'Google Business Profil' },
    { id: 'buchung', title: 'Buchungsintegration', level: 2 },
    { id: 'buchungsplattformen', title: 'Plattform-Vergleich', level: 2 },
    { id: 'portfolio', title: 'Portfolio-Optimierung', level: 2 },
    { id: 'bewertungen', title: 'Bewertungsmanagement' },
    { id: 'social-media', title: 'Social Media Strategie' },
    { id: 'saisonal', title: 'Saisonales Marketing' },
    { id: 'preise', title: 'Preisgestaltung & SEO' },
    { id: 'konkurrenz', title: 'Konkurrenzanalyse' },
    { id: 'case-study', title: 'Case Study' },
    { id: 'fehler', title: 'Häufige Fehler' },
    { id: 'faq', title: 'FAQ' },
  ];

  const faqItems = [
    { question: "Welches Buchungssystem ist am besten für kleine Friseursalons?", answer: "Für kleine Salons (1-2 Mitarbeiter) empfehlen wir Fresha, da es eine kostenlose Basisversion bietet und mit Google Reserve integriert ist. So können Kunden direkt aus Google Maps buchen." },
    { question: "Wie verbinde ich mein Buchungssystem mit Google?", answer: "Gehe in dein Google Business Profil, wähle 'Bearbeiten' > 'Buchungen' und verbinde ein unterstütztes Buchungssystem wie Shore, Fresha oder Treatwell. Der 'Termin buchen' Button erscheint dann automatisch in deinem Profil." },
    { question: "Brauche ich Instagram für meinen Friseursalon?", answer: "Ja, Instagram ist für Beauty-Businesses essentiell. 78% der Kunden recherchieren Salons auf Instagram, bevor sie einen Termin buchen. Vorher/Nachher-Bilder sind dabei besonders wirkungsvoll." },
    { question: "Wie bekomme ich mehr Google-Bewertungen von zufriedenen Kunden?", answer: "Frage direkt nach dem Termin, wenn der Kunde noch begeistert ist. Nutze einen QR-Code am Spiegel, sende eine Follow-up SMS mit Bewertungslink, oder lege eine Karte mit dem Link bei der Rechnung bei." },
    { question: "Soll ich meine Preise auf Google Business zeigen?", answer: "Ja! Transparente Preise erhöhen das Vertrauen und filtern unpassende Kunden vorab heraus. Salons mit Preisangaben haben 23% mehr Klicks auf den Buchungsbutton." },
    { question: "Wie reagiere ich auf negative Bewertungen über Haarschnitte?", answer: "Antworte professionell innerhalb von 24 Stunden. Bedauere die Unzufriedenheit, biete eine kostenlose Nachbesserung an und bitte um direkten Kontakt. Zeige, dass dir Kundenzufriedenheit wichtig ist." },
    { question: "Welche Fotos brauche ich für Google Business als Friseur?", answer: "Mindestens 12 Fotos: Außenansicht, Empfang, Waschplatz, Schneideplätze, Team, Produkte, 3-5 Vorher/Nachher-Bilder, Ambiente. Aktualisiere monatlich mit neuen Arbeiten." },
    { question: "Wie oft sollte ich neue Bilder auf Google hochladen?", answer: "Mindestens einmal pro Woche ein neues Bild. Google belohnt aktive Profile mit besserer Sichtbarkeit. Vorher/Nachher-Bilder funktionieren besonders gut." },
    { question: "Lohnt sich Treatwell für meinen Salon?", answer: "Treatwell lohnt sich für Neukunden-Akquise, hat aber 25-30% Provision. Nutze es zum Aufbau, aber lenke Stammkunden auf eigene Buchungskanäle um die Kosten zu reduzieren." },
    { question: "Wie wichtig ist eine eigene Website für Friseure?", answer: "Eine eigene Website ist wichtig für Suchmaschinen-Ranking, Vertrauen und Markenaufbau. Sie muss nicht aufwendig sein – wichtig sind Kontakt, Services, Preise und Buchungsmöglichkeit." },
    { question: "Welche Keywords sind für Friseure am wichtigsten?", answer: "Die wichtigsten Keywords sind 'Friseur [Stadt]', 'Friseursalon [Stadtteil]', 'Bester Friseur [Stadt]' sowie Service-Keywords wie 'Balayage [Stadt]' oder 'Herrenfriseur [Stadt]'." },
    { question: "Wie kann ich Stammkunden zu Bewertungen motivieren?", answer: "Persönliche Ansprache nach dem Termin funktioniert am besten. Erkläre, wie wichtig Bewertungen für dein Geschäft sind. Ein kleines Dankeschön (z.B. Produktprobe) ist erlaubt, aber keine Bezahlung für Bewertungen." },
    { question: "Soll ich TikTok oder Instagram nutzen als Friseur?", answer: "Beides hat Vorteile: Instagram für Portfolio und lokale Reichweite, TikTok für virale Transformation-Videos und jüngere Zielgruppe. Starte mit Instagram, erweitere auf TikTok wenn Zeit vorhanden." },
    { question: "Wie zeige ich Vorher/Nachher-Bilder richtig?", answer: "Gleicher Winkel, gleiche Beleuchtung, gleicher Hintergrund. Hole immer schriftliche Einwilligung. Nutze eine Collage oder Slider-Format. Tagge Produkte und verwendete Techniken." },
    { question: "Was kostet Local SEO für einen Friseursalon?", answer: "DIY-Optimierung kostet nur Zeit. Professionelle Local SEO Betreuung kostet zwischen 300-1.500€ monatlich, abhängig von Umfang und Wettbewerb in deiner Stadt." },
    { question: "Wie schnell sehe ich Ergebnisse bei Local SEO?", answer: "Erste Verbesserungen nach 4-8 Wochen, signifikante Ergebnisse nach 3-6 Monaten. Google Business Optimierung wirkt am schnellsten, Website-SEO braucht länger." },
    { question: "Brauche ich einen Blog auf meiner Friseur-Website?", answer: "Ein Blog ist hilfreich für SEO, aber nicht essentiell. Wenn du bloggst, schreibe über lokale Themen wie 'Hochzeitsfrisuren in [Stadt]' oder 'Balayage-Trends 2026'." },
    { question: "Wie gehe ich mit Fake-Bewertungen um?", answer: "Melde sie bei Google über 'Als unangemessen melden'. Antworte sachlich und erkläre, dass die Person kein Kunde war. Sammle echte Bewertungen um das Verhältnis zu verbessern." },
    { question: "Soll ich Rabatte für Bewertungen anbieten?", answer: "Nein! Das verstößt gegen Google-Richtlinien und kann zur Löschung führen. Du darfst um Bewertungen bitten und ein kleines Dankeschön geben, aber nicht für positive Bewertungen bezahlen." },
    { question: "Wie optimiere ich meine Website für 'Friseur in der Nähe'?", answer: "Optimiere dein Google Business Profil (wichtiger als Website), verwende lokale Keywords auf der Website, baue lokale Backlinks auf und stelle sicher, dass NAP-Daten überall konsistent sind." }
  ];


  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Buchungssystem mit Google Business verbinden",
    "description": "Schritt-für-Schritt Anleitung zur Integration eines Buchungssystems mit Google Business Profil",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Google Business Profil öffnen",
        "text": "Melde dich bei Google Business an und wähle deinen Salon-Eintrag"
      },
      {
        "@type": "HowToStep",
        "name": "Buchungsoption aktivieren",
        "text": "Gehe zu 'Bearbeiten' > 'Mehr' > 'Buchungen' und aktiviere die Funktion"
      },
      {
        "@type": "HowToStep",
        "name": "Buchungsanbieter verbinden",
        "text": "Wähle ein unterstütztes Buchungssystem (Shore, Fresha, Treatwell, etc.) und verknüpfe es"
      },
      {
        "@type": "HowToStep",
        "name": "Services einrichten",
        "text": "Füge alle buchbaren Services mit Preisen und Dauer hinzu"
      },
      {
        "@type": "HowToStep",
        "name": "Button testen",
        "text": "Suche deinen Salon bei Google und teste den 'Termin buchen' Button"
      }
    ]
  };

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      faqItems={faqItems}
      additionalSchema={howToSchema}
    >
      {/* Hero Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" id="statistiken">
        <Card className="bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950 dark:to-rose-900 border-pink-200">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-600">80.000+</div>
            <p className="text-sm text-muted-foreground mt-2">Friseursalons in Deutschland</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600">23 Mrd. €</div>
            <p className="text-sm text-muted-foreground mt-2">Jahresumsatz Beauty-Branche</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200">
          <CardContent className="pt-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">"Friseur in der Nähe"</div>
            <p className="text-sm text-muted-foreground mt-2">Top-10 lokale Suchanfrage</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600">67%</div>
            <p className="text-sm text-muted-foreground mt-2">der Buchungen starten online</p>
          </CardContent>
        </Card>
      </section>

      {/* Einleitung */}
      <section id="einleitung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Warum Local SEO für Friseure & Beauty-Studios überlebenswichtig ist</h2>
        
        <p className="text-lg mb-4">
          Die Beauty-Branche hat sich fundamental verändert. Während früher Mundpropaganda und ein guter Standort 
          ausreichten, entscheiden heute <strong>Google-Bewertungen, Instagram-Präsenz und Online-Buchungsmöglichkeiten</strong> 
          über Erfolg oder Misserfolg deines Salons.
        </p>

        <p className="mb-4">
          Jeder Salon – ob Friseursalon, Kosmetikstudio, Nagelstudio oder Barbershop – steht vor der gleichen 
          Herausforderung: <strong>Wie finden mich Neukunden, und wie binde ich Stammkunden?</strong>
        </p>

        <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 rounded-xl border border-pink-200 dark:border-pink-800 my-8">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            Was dich in diesem Artikel erwartet:
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Interaktiver Beauty-Keyword-Generator</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Buchungsplattform-Vergleich mit Empfehlung</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Portfolio-Optimierer für Instagram & Google</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Echte Case Study mit Vorher/Nachher</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Saisonaler Marketing-Kalender</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>20+ FAQs mit Google-Featured-Snippet-Optimierung</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Die Beauty-Kundenreise */}
      <section id="kundenreise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die Beauty-Kundenreise verstehen</h2>
        
        <p className="mb-6">
          Bevor wir in die Taktiken eintauchen, müssen wir verstehen, wie potenzielle Kunden einen Salon finden und sich entscheiden:
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-t-4 border-t-pink-500">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">💭</div>
              <h4 className="font-bold mb-2">1. Auslöser</h4>
              <p className="text-sm text-muted-foreground">
                "Ich brauche einen neuen Look" – Event, Langeweile oder Veränderungswunsch triggert die Suche
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-bold mb-2">2. Suche</h4>
              <p className="text-sm text-muted-foreground">
                Google-Suche "Friseur in der Nähe" oder "Balayage [Stadt]", Instagram-Recherche
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold mb-2">3. Vergleich</h4>
              <p className="text-sm text-muted-foreground">
                Bewertungen lesen, Fotos ansehen, Preise vergleichen, Social Media checken
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">📅</div>
              <h4 className="font-bold mb-2">4. Buchung</h4>
              <p className="text-sm text-muted-foreground">
                Online-Termin buchen oder anrufen – je einfacher, desto höher die Conversion
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg flex gap-3">
          <Lightbulb className="h-6 w-6 text-amber-500 flex-shrink-0" />
          <div>
            <strong>Die entscheidende Erkenntnis:</strong> 85% der Beauty-Suchen passieren am Smartphone. 
            Wenn dein Profil nicht mobiloptimiert ist oder die Buchung zu kompliziert, verlierst du den Kunden 
            an die Konkurrenz.
          </div>
        </div>
      </section>

      {/* Keyword-Generator */}
      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Der Beauty-Keyword-Generator</h2>
        
        <p className="mb-4">
          Die richtigen Keywords sind das Fundament deiner Local SEO Strategie. Nutze unseren interaktiven 
          Generator, um die perfekten Suchbegriffe für deinen Salon zu finden:
        </p>

        <BeautyKeywordGenerator />

        <h3 className="text-xl font-bold mt-8 mb-4">Keyword-Kategorien erklärt</h3>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Keyword-Typ</TableHead>
              <TableHead>Beispiele</TableHead>
              <TableHead>Wo verwenden?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Basis-Keywords</TableCell>
              <TableCell>Friseur München, Kosmetikstudio Berlin</TableCell>
              <TableCell>Seitentitel, H1, Meta-Description</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Service-Keywords</TableCell>
              <TableCell>Balayage Hamburg, Microblading Frankfurt</TableCell>
              <TableCell>Unterseiten, Google Business Services</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Qualitäts-Keywords</TableCell>
              <TableCell>Bester Friseur Köln, Top Nagelstudio</TableCell>
              <TableCell>Content, Testimonials-Seite</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Long-Tail-Keywords</TableCell>
              <TableCell>Friseur für lockiges Haar München</TableCell>
              <TableCell>Blog, FAQ, Spezialisierungs-Seiten</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Google Business Profil */}
      <section id="google-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Google Business Profil perfekt optimieren</h2>
        
        <p className="mb-6">
          Dein Google Business Profil ist dein wichtigstes Asset für lokale Sichtbarkeit. 
          Hier entscheidet sich, ob potenzielle Kunden dich kontaktieren oder zur Konkurrenz gehen.
        </p>

        <h3 className="text-xl font-bold mb-4">Die richtige Kategorien-Struktur</h3>
        
        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Geschäftstyp</TableHead>
              <TableHead>Hauptkategorie</TableHead>
              <TableHead>Zusätzliche Kategorien</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Friseursalon</TableCell>
              <TableCell>Friseursalon</TableCell>
              <TableCell>Schönheitssalon, Colorist, Haarverlängerungsstudio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Barbershop</TableCell>
              <TableCell>Barbershop</TableCell>
              <TableCell>Herrenfriseur, Friseursalon</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kosmetikstudio</TableCell>
              <TableCell>Schönheitssalon</TableCell>
              <TableCell>Kosmetikerin, Permanent-Make-up-Studio, Wimpernstudio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Nagelstudio</TableCell>
              <TableCell>Nagelstudio</TableCell>
              <TableCell>Maniküre-Service, Schönheitssalon</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3 className="text-xl font-bold mb-4">Die 12 Pflicht-Fotos für jeden Salon</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '🏪', title: 'Außenansicht', desc: 'Mit Logo und Schild sichtbar' },
            { icon: '🛋️', title: 'Empfangsbereich', desc: 'Erster Eindruck entscheidet' },
            { icon: '💇', title: 'Schneideplätze', desc: 'Zeige deine Arbeitsumgebung' },
            { icon: '🚿', title: 'Waschplatz', desc: 'Komfort und Hygiene zeigen' },
            { icon: '👥', title: 'Team-Foto', desc: 'Persönlichkeit vermitteln' },
            { icon: '🧴', title: 'Produkt-Regal', desc: 'Qualitätsmarken präsentieren' },
            { icon: '✨', title: 'Vorher/Nachher #1', desc: 'Transformation zeigen' },
            { icon: '✨', title: 'Vorher/Nachher #2', desc: 'Verschiedene Services' },
            { icon: '✨', title: 'Vorher/Nachher #3', desc: 'Vielfalt demonstrieren' },
            { icon: '💡', title: 'Ambiente', desc: 'Licht und Atmosphäre' },
            { icon: '☕', title: 'Wartebereich', desc: 'Komfort für Wartende' },
            { icon: '🔧', title: 'Equipment', desc: 'Professionelle Tools' },
          ].map((photo, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{photo.icon}</span>
                  <div>
                    <p className="font-medium">{photo.title}</p>
                    <p className="text-xs text-muted-foreground">{photo.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg flex gap-3 mb-6">
          <Camera className="h-6 w-6 text-green-500 flex-shrink-0" />
          <div>
            <strong>Foto-Tipp:</strong> Lade mindestens 1x pro Woche ein neues Bild hoch. 
            Google belohnt aktive Profile mit besserer Sichtbarkeit. Vorher/Nachher-Bilder 
            performen besonders gut!
          </div>
        </div>
      </section>

      {/* Buchungsintegration */}
      <section id="buchung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Buchungsintegration: Der Conversion-Booster</h2>
        
        <p className="mb-6">
          Ein Online-Buchungssystem, das mit Google verbunden ist, kann deine Terminanfragen um bis zu 
          <strong> 40% steigern</strong>. Der "Termin buchen" Button erscheint direkt in deinem Google-Profil 
          und ermöglicht Buchungen ohne Umweg über deine Website.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-bold mb-2">Google Reserve</h4>
              <p className="text-sm text-muted-foreground">
                Kunden buchen direkt aus Google Maps oder der Google-Suche – ohne deine Website zu besuchen
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <Phone className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="font-bold mb-2">WhatsApp Business</h4>
              <p className="text-sm text-muted-foreground">
                Schnelle Terminanfragen via WhatsApp – besonders beliebt bei jüngerer Zielgruppe
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <Instagram className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="font-bold mb-2">Social Booking</h4>
              <p className="text-sm text-muted-foreground">
                Buchungs-Links in Instagram Bio und Story – direkte Conversion aus Social Media
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-4">So verbindest du dein Buchungssystem mit Google</h3>
        
        <div className="space-y-4 mb-8">
          {[
            { step: 1, title: 'Buchungssystem wählen', desc: 'Entscheide dich für einen Google-kompatiblen Anbieter (siehe Vergleich unten)' },
            { step: 2, title: 'Account einrichten', desc: 'Erstelle einen Account und richte deine Services mit Preisen und Dauer ein' },
            { step: 3, title: 'Google Business verbinden', desc: 'Im Buchungssystem: Integration > Google > Autorisieren' },
            { step: 4, title: 'Reserve aktivieren', desc: 'In Google Business: Bearbeiten > Mehr > Buchungen hinzufügen' },
            { step: 5, title: 'Testen', desc: 'Suche dich selbst bei Google und teste den Buchungsablauf' },
          ].map(item => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buchungsplattform-Vergleich */}
      <section id="buchungsplattformen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Buchungsplattformen im Vergleich</h2>
        
        <p className="mb-4">
          Die Wahl des richtigen Buchungssystems hängt von deiner Salongröße, Budget und Zielen ab. 
          Nutze unseren interaktiven Vergleich, um die beste Plattform für dich zu finden:
        </p>

        <BookingPlatformTable />
      </section>

      {/* Portfolio-Optimierung */}
      <section id="portfolio" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Portfolio-Optimierung für maximale Wirkung</h2>
        
        <p className="mb-4">
          Deine Fotos sind dein wichtigstes Verkaufsargument. Mit dem Portfolio-Optimierer generierst du 
          SEO-optimierte Dateinamen, passende Hashtags und behältst den Überblick über deine Foto-Bibliothek:
        </p>

        <BeautyPortfolioOptimizer />
      </section>

      {/* Bewertungsmanagement */}
      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bewertungsmanagement für Beauty-Businesses</h2>
        
        <p className="mb-6">
          Bewertungen sind in der Beauty-Branche besonders wichtig – schließlich vertrauen Kunden dir ihr 
          Aussehen an. Ein strukturiertes Bewertungsmanagement kann deinen Durchschnitt von 4.0 auf 4.8 heben.
        </p>

        <h3 className="text-xl font-bold mb-4">Die häufigsten Beauty-Beschwerden & wie du reagierst</h3>
        
        <div className="space-y-4 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-red-600">"Nicht wie gewünscht / Nicht zufrieden"</h4>
                  <p className="text-sm text-muted-foreground mt-1">Die häufigste Beschwerde bei Friseuren</p>
                </div>
                <Badge variant="destructive">Kritisch</Badge>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">✅ Empfohlene Antwort:</p>
                <p className="text-sm mt-1 italic">
                  "Liebe/r [Name], es tut uns sehr leid, dass Sie mit dem Ergebnis nicht zufrieden sind. 
                  Ihre Zufriedenheit ist uns wichtig – bitte kontaktieren Sie uns unter [Telefon] für eine 
                  kostenlose Nachbesserung. Wir möchten das unbedingt wieder gutmachen!"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-orange-600">"Zu teuer für die Leistung"</h4>
                  <p className="text-sm text-muted-foreground mt-1">Preis-Leistungs-Kritik</p>
                </div>
                <Badge className="bg-orange-500">Mittel</Badge>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">✅ Empfohlene Antwort:</p>
                <p className="text-sm mt-1 italic">
                  "Danke für Ihr Feedback. Wir verwenden ausschließlich Premium-Produkte von [Marke] und 
                  investieren in kontinuierliche Weiterbildung unseres Teams. Wir verstehen, dass unsere 
                  Preise nicht für jeden passen – schätzen aber, dass Sie bei uns waren."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-yellow-600">"Lange Wartezeit trotz Termin"</h4>
                  <p className="text-sm text-muted-foreground mt-1">Zeitmanagement-Problem</p>
                </div>
                <Badge className="bg-yellow-500">Vermeidbar</Badge>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">✅ Empfohlene Antwort:</p>
                <p className="text-sm mt-1 italic">
                  "Es tut uns wirklich leid für die Wartezeit! An diesem Tag hatten wir leider einen 
                  unvorhergesehenen Notfall. Wir haben unsere Terminplanung angepasst, um dies zu 
                  vermeiden. Beim nächsten Besuch erhalten Sie 15% Rabatt als Entschuldigung."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-4">Bewertungen systematisch sammeln</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">QR-Code am Spiegel</h4>
                  <p className="text-sm text-muted-foreground">
                    Platziere einen QR-Code direkt am Spiegel – Kunden können scannen, während sie ihr 
                    Ergebnis bewundern
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold">Follow-up SMS</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatische SMS 24h nach dem Termin: "Wie gefällt Ihnen Ihr neuer Look? 
                    Wir freuen uns über Ihre Bewertung: [Link]"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Gift className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold">Produktprobe als Dank</h4>
                  <p className="text-sm text-muted-foreground">
                    Kleine Produktprobe bei der Verabschiedung mit Hinweis: "Über eine Bewertung 
                    würden wir uns sehr freuen"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                  <Instagram className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-bold">Instagram Story Repost</h4>
                  <p className="text-sm text-muted-foreground">
                    Wenn Kunden dich taggen, reposte und frage: "Würdest du uns auch bei Google 
                    eine Bewertung hinterlassen?"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section id="social-media" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Social Media Strategie für Beauty-Businesses</h2>
        
        <p className="mb-6">
          In der Beauty-Branche ist Social Media nicht optional – es ist dein digitales Portfolio und 
          wichtigster Akquise-Kanal nach Google.
        </p>

        <h3 className="text-xl font-bold mb-4">Plattform-Strategie</h3>
        
        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Plattform</TableHead>
              <TableHead>Content-Typ</TableHead>
              <TableHead>Frequenz</TableHead>
              <TableHead>ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-pink-50 dark:bg-pink-950">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-pink-500" />
                  Instagram
                </div>
              </TableCell>
              <TableCell>Vorher/Nachher, Reels, Stories</TableCell>
              <TableCell>Täglich</TableCell>
              <TableCell><Badge className="bg-green-500">Sehr hoch</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span>🎵</span>
                  TikTok
                </div>
              </TableCell>
              <TableCell>Tutorials, Transformationen, Trends</TableCell>
              <TableCell>3-5x/Woche</TableCell>
              <TableCell><Badge className="bg-blue-500">Hoch</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span>📌</span>
                  Pinterest
                </div>
              </TableCell>
              <TableCell>Frisuren-Inspiration, Looks</TableCell>
              <TableCell>10+/Woche</TableCell>
              <TableCell><Badge variant="secondary">Mittel</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span>📘</span>
                  Facebook
                </div>
              </TableCell>
              <TableCell>Events, Angebote, Community</TableCell>
              <TableCell>2-3x/Woche</TableCell>
              <TableCell><Badge variant="secondary">Mittel</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span>▶️</span>
                  YouTube
                </div>
              </TableCell>
              <TableCell>Tutorials, Behind Scenes</TableCell>
              <TableCell>1-2x/Monat</TableCell>
              <TableCell><Badge className="bg-blue-500">Hoch (langfristig)</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3 className="text-xl font-bold mb-4">Content-Kalender: Eine Woche im Salon</h3>
        
        <div className="grid grid-cols-7 gap-2 mb-8">
          {[
            { day: 'Mo', content: 'Transformation Reel', icon: '✨' },
            { day: 'Di', content: 'Produkt-Tipp', icon: '🧴' },
            { day: 'Mi', content: 'Team-Feature', icon: '👥' },
            { day: 'Do', content: 'Tutorial', icon: '🎬' },
            { day: 'Fr', content: 'Vorher/Nachher', icon: '💇' },
            { day: 'Sa', content: 'UGC Repost', icon: '📱' },
            { day: 'So', content: 'Behind Scenes', icon: '🎭' },
          ].map(item => (
            <Card key={item.day} className="text-center">
              <CardContent className="pt-4 pb-2">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="font-bold text-sm">{item.day}</p>
                <p className="text-xs text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Saisonales Marketing */}
      <section id="saisonal" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Saisonales Marketing für Beauty-Businesses</h2>
        
        <p className="mb-6">
          Die Beauty-Branche hat klare saisonale Peaks. Plane dein Marketing im Voraus, um diese optimal zu nutzen:
        </p>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Monat</TableHead>
              <TableHead>Event/Saison</TableHead>
              <TableHead>Marketing-Aktion</TableHead>
              <TableHead>Fokus-Services</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Januar</TableCell>
              <TableCell>Neujahrsvorsätze</TableCell>
              <TableCell>"Neues Jahr, neuer Look" Kampagne</TableCell>
              <TableCell>Typveränderung, Farbwechsel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Februar</TableCell>
              <TableCell>Valentinstag</TableCell>
              <TableCell>Paar-Pakete, Date-Night-Specials</TableCell>
              <TableCell>Styling, Make-up</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">März-April</TableCell>
              <TableCell>Frühlingsanfang</TableCell>
              <TableCell>Farbauffrischung, Highlights</TableCell>
              <TableCell>Balayage, Strähnchen</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mai</TableCell>
              <TableCell>Kommunion/Konfirmation</TableCell>
              <TableCell>Festtagsfrisuren-Pakete</TableCell>
              <TableCell>Hochsteckfrisuren, Kinder</TableCell>
            </TableRow>
            <TableRow className="bg-pink-50 dark:bg-pink-950">
              <TableCell className="font-medium">Juni-Aug</TableCell>
              <TableCell>Hochzeitssaison 💒</TableCell>
              <TableCell>Braut-Packages, Probe-Termine</TableCell>
              <TableCell>Brautfrisur, Make-up</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">September</TableCell>
              <TableCell>Schulstart</TableCell>
              <TableCell>Back-to-School-Aktion</TableCell>
              <TableCell>Kinderhaarschnitte</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oktober</TableCell>
              <TableCell>Halloween</TableCell>
              <TableCell>Kreativ-Styles, Farb-Specials</TableCell>
              <TableCell>Crazy Colors, Extensions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">November</TableCell>
              <TableCell>Black Friday</TableCell>
              <TableCell>Gutschein-Aktionen, Rabatte</TableCell>
              <TableCell>Geschenkgutscheine</TableCell>
            </TableRow>
            <TableRow className="bg-green-50 dark:bg-green-950">
              <TableCell className="font-medium">Dezember 🎄</TableCell>
              <TableCell>Weihnachten</TableCell>
              <TableCell>Geschenk-Gutscheine, Festtags-Looks</TableCell>
              <TableCell>Party-Styling, Gutscheine</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg flex gap-3">
          <Lightbulb className="h-6 w-6 text-amber-500 flex-shrink-0" />
          <div>
            <strong>Profi-Tipp:</strong> Starte deine Hochzeits-Marketing-Kampagne bereits im Januar! 
            Bräute buchen 6-12 Monate im Voraus. Erstelle eine spezielle Landing-Page für Braut-Services.
          </div>
        </div>
      </section>

      {/* Preisgestaltung */}
      <section id="preise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Preisgestaltung & SEO-Transparenz</h2>
        
        <p className="mb-6">
          Sollen Preise auf Google und der Website sichtbar sein? Die klare Antwort: <strong>Ja!</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-6">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Vorteile transparenter Preise
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• 23% mehr Klicks auf Buchungsbutton</li>
                <li>• Filtert unpassende Kunden vorab</li>
                <li>• Erhöht Vertrauen und Professionalität</li>
                <li>• SEO-Boost durch Preis-Keywords</li>
                <li>• Weniger Diskussionen vor Ort</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50 dark:bg-red-950">
            <CardContent className="pt-6">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Nachteile von "Preis auf Anfrage"
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Wirkt undurchsichtig und abschreckend</li>
                <li>• Mehr unqualifizierte Anfragen</li>
                <li>• Verpasste SEO-Chancen</li>
                <li>• Konkurrenz mit Preisen gewinnt Klicks</li>
                <li>• Jüngere Zielgruppe erwartet Transparenz</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-4">Preis-Keywords nutzen</h3>
        
        <p className="mb-4">
          Kunden suchen aktiv nach Preisen. Nutze diese Keywords in deiner Optimierung:
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            'Balayage Preis München', 'Haarschnitt Kosten Berlin', 
            'Microblading Preise Hamburg', 'Günstige Maniküre Köln',
            'Was kostet Gelnägel Frankfurt', 'Herrenhaarschnitt Preis Stuttgart'
          ].map(kw => (
            <Badge key={kw} variant="secondary" className="text-sm py-1 px-3">
              {kw}
            </Badge>
          ))}
        </div>
      </section>

      {/* Konkurrenzanalyse */}
      <section id="konkurrenz" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lokale Konkurrenzanalyse</h2>
        
        <p className="mb-6">
          Verstehe deine Konkurrenz, um dich abzuheben. Hier ist deine Analyse-Checkliste:
        </p>

        <div className="space-y-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                1. Google Maps Analyse
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Suche "[Dein Service] [Deine Stadt]" bei Google Maps</li>
                <li>Notiere die Top 5 Konkurrenten mit Bewertungsanzahl und Durchschnitt</li>
                <li>Analysiere deren Fotos – was kannst du besser machen?</li>
                <li>Lies ihre neuesten Bewertungen – worüber beschweren sich Kunden?</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-500" />
                2. Social Media Check
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Suche Hashtags wie #friseur[stadt] auf Instagram</li>
                <li>Wer postet regelmäßig und hat gutes Engagement?</li>
                <li>Welchen Content-Stil verwenden sie?</li>
                <li>Wie reagieren sie auf Kommentare?</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Euro className="h-5 w-5 text-green-500" />
                3. Preis-Positionierung
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Erstelle eine Tabelle mit Konkurrenz-Preisen für gleiche Services</li>
                <li>Positioniere dich bewusst: Premium, Mittelfeld oder Budget?</li>
                <li>Finde dein Differenzierungsmerkmal (Spezialisierung, Qualität, Service)</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Case Study: Hair & Beauty Studio Hamburg</h2>
        
        <Card className="border-2 border-primary/20 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold">Von Platz 12 auf Platz 2 in 6 Monaten</h3>
            <p className="opacity-90">Friseursalon in Hamburg-Eppendorf</p>
          </div>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-red-600">❌ Ausgangssituation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>3.9 Sterne (47 Bewertungen)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Platz 12 bei "Friseur Eppendorf"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Keine Online-Buchung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-gray-500" />
                    <span>12 veraltete Fotos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-gray-500" />
                    <span>Instagram: 234 Follower, inaktiv</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-green-600">✅ Nach 6 Monaten</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-bold">4.8 Sterne (358 Bewertungen)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-bold">Platz 2 bei "Friseur Eppendorf"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span>+35% Online-Buchungen via Shore</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-green-500" />
                    <span>120+ professionelle Fotos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-pink-500" />
                    <span>Instagram: 2.847 Follower, täglich aktiv</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-bold mb-3">📋 Durchgeführte Maßnahmen:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm">
                  <li>✓ Shore-Buchungssystem mit Google Reserve</li>
                  <li>✓ 100+ neue Vorher/Nachher-Fotos</li>
                  <li>✓ Alle 47 Alt-Bewertungen beantwortet</li>
                  <li>✓ QR-Code Bewertungs-System am Spiegel</li>
                </ul>
                <ul className="space-y-1 text-sm">
                  <li>✓ Instagram-Strategie: 1 Post/Tag</li>
                  <li>✓ Services mit Preisen in Google Business</li>
                  <li>✓ Lokale Hashtag-Strategie</li>
                  <li>✓ WhatsApp Business für Terminanfragen</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-green-600">+45% Umsatzsteigerung</p>
              <p className="text-muted-foreground">im Vergleich zum Vorjahreszeitraum</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Häufige Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 10 häufigsten Beauty-SEO-Fehler</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { error: 'Kein Online-Buchungssystem', fix: 'Fresha oder Shore einrichten', severity: 'critical' },
            { error: 'Veraltete Öffnungszeiten', fix: 'Wöchentlich in Google Business prüfen', severity: 'critical' },
            { error: 'Keine Preise angegeben', fix: 'Alle Services mit Preisen listen', severity: 'high' },
            { error: 'Schlechte Foto-Qualität', fix: 'Ringlicht + Smartphone = gute Fotos', severity: 'high' },
            { error: 'Nicht auf Bewertungen antworten', fix: 'Innerhalb 24h auf alle antworten', severity: 'high' },
            { error: 'Keine Instagram-Präsenz', fix: 'Account erstellen, täglich posten', severity: 'medium' },
            { error: 'Website nicht mobiloptimiert', fix: 'Mobile-First Design umsetzen', severity: 'high' },
            { error: 'Keine Services beschrieben', fix: 'Jeder Service mit Keywords beschreiben', severity: 'medium' },
            { error: 'Team nicht vorgestellt', fix: 'Team-Seite mit Spezialisierungen', severity: 'low' },
            { error: 'Keine lokalen Keywords', fix: 'Stadt + Stadtteil in Texten verwenden', severity: 'high' },
          ].map((item, idx) => (
            <Card key={idx} className={`border-l-4 ${
              item.severity === 'critical' ? 'border-l-red-500' :
              item.severity === 'high' ? 'border-l-orange-500' :
              item.severity === 'medium' ? 'border-l-yellow-500' :
              'border-l-blue-500'
            }`}>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    {item.error}
                  </h4>
                  <Badge variant={
                    item.severity === 'critical' ? 'destructive' :
                    item.severity === 'high' ? 'default' :
                    'secondary'
                  }>
                    {item.severity === 'critical' ? 'Kritisch' :
                     item.severity === 'high' ? 'Wichtig' :
                     item.severity === 'medium' ? 'Mittel' : 'Niedrig'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" />
                  <strong>Fix:</strong> {item.fix}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ArticleCTA variant="box" />

      {industryStats.friseur?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.friseur} />

      <IndustryComparisonTable data={industryComparisonData.friseur} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen (FAQ)</h2>
        
        <div className="space-y-4">
          {[
            {
              q: "Welches Buchungssystem ist am besten für kleine Friseursalons?",
              a: "Für kleine Salons (1-2 Mitarbeiter) empfehlen wir Fresha, da es eine kostenlose Basisversion bietet und mit Google Reserve integriert ist. So können Kunden direkt aus Google Maps buchen."
            },
            {
              q: "Wie verbinde ich mein Buchungssystem mit Google?",
              a: "Gehe in dein Google Business Profil, wähle 'Bearbeiten' > 'Buchungen' und verbinde ein unterstütztes Buchungssystem wie Shore, Fresha oder Treatwell. Der 'Termin buchen' Button erscheint dann automatisch in deinem Profil."
            },
            {
              q: "Brauche ich Instagram für meinen Friseursalon?",
              a: "Ja, Instagram ist für Beauty-Businesses essentiell. 78% der Kunden recherchieren Salons auf Instagram, bevor sie einen Termin buchen. Vorher/Nachher-Bilder sind dabei besonders wirkungsvoll."
            },
            {
              q: "Wie bekomme ich mehr Google-Bewertungen von zufriedenen Kunden?",
              a: "Frage direkt nach dem Termin, wenn der Kunde noch begeistert ist. Nutze einen QR-Code am Spiegel, sende eine Follow-up SMS mit Bewertungslink, oder lege eine Karte mit dem Link bei der Rechnung bei."
            },
            {
              q: "Soll ich meine Preise auf Google Business zeigen?",
              a: "Ja! Transparente Preise erhöhen das Vertrauen und filtern unpassende Kunden vorab heraus. Salons mit Preisangaben haben 23% mehr Klicks auf den Buchungsbutton."
            },
            {
              q: "Wie reagiere ich auf negative Bewertungen über Haarschnitte?",
              a: "Antworte professionell innerhalb von 24 Stunden. Bedauere die Unzufriedenheit, biete eine kostenlose Nachbesserung an und bitte um direkten Kontakt. Zeige, dass dir Kundenzufriedenheit wichtig ist."
            },
            {
              q: "Welche Fotos brauche ich für Google Business als Friseur?",
              a: "Mindestens 12 Fotos: Außenansicht, Empfang, Waschplatz, Schneideplätze, Team, Produkte, 3-5 Vorher/Nachher-Bilder, Ambiente. Aktualisiere monatlich mit neuen Arbeiten."
            },
            {
              q: "Wie oft sollte ich neue Bilder auf Google hochladen?",
              a: "Mindestens einmal pro Woche ein neues Bild. Google belohnt aktive Profile mit besserer Sichtbarkeit. Vorher/Nachher-Bilder funktionieren besonders gut."
            },
            {
              q: "Lohnt sich Treatwell für meinen Salon?",
              a: "Treatwell lohnt sich für Neukunden-Akquise, hat aber 25-30% Provision. Nutze es zum Aufbau, aber lenke Stammkunden auf eigene Buchungskanäle um die Kosten zu reduzieren."
            },
            {
              q: "Wie wichtig ist eine eigene Website für Friseure?",
              a: "Eine eigene Website ist wichtig für Suchmaschinen-Ranking, Vertrauen und Markenaufbau. Sie muss nicht aufwendig sein – wichtig sind Kontakt, Services, Preise und Buchungsmöglichkeit."
            },
            {
              q: "Welche Keywords sind für Friseure am wichtigsten?",
              a: "Die wichtigsten Keywords sind 'Friseur [Stadt]', 'Friseursalon [Stadtteil]', 'Bester Friseur [Stadt]' sowie Service-Keywords wie 'Balayage [Stadt]' oder 'Herrenfriseur [Stadt]'."
            },
            {
              q: "Wie kann ich Stammkunden zu Bewertungen motivieren?",
              a: "Persönliche Ansprache nach dem Termin funktioniert am besten. Erkläre, wie wichtig Bewertungen für dein Geschäft sind. Ein kleines Dankeschön (z.B. Produktprobe) ist erlaubt, aber keine Bezahlung für Bewertungen."
            },
            {
              q: "Soll ich TikTok oder Instagram nutzen als Friseur?",
              a: "Beides hat Vorteile: Instagram für Portfolio und lokale Reichweite, TikTok für virale Transformation-Videos und jüngere Zielgruppe. Starte mit Instagram, erweitere auf TikTok wenn Zeit vorhanden."
            },
            {
              q: "Wie zeige ich Vorher/Nachher-Bilder richtig?",
              a: "Gleicher Winkel, gleiche Beleuchtung, gleicher Hintergrund. Hole immer schriftliche Einwilligung. Nutze eine Collage oder Slider-Format. Tagge Produkte und verwendete Techniken."
            },
            {
              q: "Was kostet Local SEO für einen Friseursalon?",
              a: "DIY-Optimierung kostet nur Zeit. Professionelle Local SEO Betreuung kostet zwischen 300-1.500€ monatlich, abhängig von Umfang und Wettbewerb in deiner Stadt."
            },
            {
              q: "Wie schnell sehe ich Ergebnisse bei Local SEO?",
              a: "Erste Verbesserungen nach 4-8 Wochen, signifikante Ergebnisse nach 3-6 Monaten. Google Business Optimierung wirkt am schnellsten, Website-SEO braucht länger."
            },
            {
              q: "Brauche ich einen Blog auf meiner Friseur-Website?",
              a: "Ein Blog ist hilfreich für SEO, aber nicht essentiell. Wenn du bloggst, schreibe über lokale Themen wie 'Hochzeitsfrisuren in [Stadt]' oder 'Balayage-Trends 2026'."
            },
            {
              q: "Wie gehe ich mit Fake-Bewertungen um?",
              a: "Melde sie bei Google über 'Als unangemessen melden'. Antworte sachlich und erkläre, dass die Person kein Kunde war. Sammle echte Bewertungen um das Verhältnis zu verbessern."
            },
            {
              q: "Soll ich Rabatte für Bewertungen anbieten?",
              a: "Nein! Das verstößt gegen Google-Richtlinien und kann zur Löschung führen. Du darfst um Bewertungen bitten und ein kleines Dankeschön geben, aber nicht für positive Bewertungen bezahlen."
            },
            {
              q: "Wie optimiere ich meine Website für 'Friseur in der Nähe'?",
              a: "Optimiere dein Google Business Profil (wichtiger als Website), verwende lokale Keywords auf der Website, baue lokale Backlinks auf und stelle sicher, dass NAP-Daten überall konsistent sind."
            }
          ].map((faq, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="p-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white text-center">
        <Scissors className="h-12 w-12 mx-auto mb-4 opacity-80" />
        <h3 className="text-2xl font-bold mb-4">
          Bereit, deinen Salon an die Spitze zu bringen?
        </h3>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          Mit den richtigen Local SEO Strategien kannst du deine Sichtbarkeit verdoppeln und mehr 
          Neukunden gewinnen. Starte heute mit der Optimierung!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt Erstgespräch buchen
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Friseursalon verdreifacht Neukunden</h2>
        {industryCaseStudies.friseur.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-friseur" />
    </ArticleLayout>
  );
};

export default LocalSeoFriseur;
