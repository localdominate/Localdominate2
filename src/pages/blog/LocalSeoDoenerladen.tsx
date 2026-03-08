import React from 'react';
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, MapPin, Camera, Star, Clock, Smartphone, Users, Target, Megaphone, ChefHat, Truck } from 'lucide-react';
import DoenerKeywordGenerator from "@/components/blog/DoenerKeywordGenerator";
import DoenerMenuOptimizer from "@/components/blog/DoenerMenuOptimizer";
import DeliveryPlatformTable from "@/components/blog/DeliveryPlatformTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoDoenerladen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-doener-kebab-imbiss", language);

  if (!article) {
    return <div>Article not found</div>;
  }

  const tocItems = [
    { id: "statistiken", title: "Die Döner-Branche in Zahlen" },
    { id: "kundenreise", title: "Die Döner-Kundenreise verstehen" },
    { id: "keywords", title: "Döner-Keyword-Generator" },
    { id: "google-business", title: "Google Business Profil optimieren" },
    { id: "speisekarte", title: "Speisekarten-SEO" },
    { id: "bewertungen", title: "Bewertungsmanagement" },
    { id: "fotos", title: "Fotos & Videos richtig machen" },
    { id: "lieferung", title: "Lieferportale im Vergleich" },
    { id: "social-media", title: "Social Media Strategien" },
    { id: "konkurrenz", title: "Konkurrenzanalyse" },
    { id: "offline", title: "Offline-Marketing-Synergie" },
    { id: "franchise", title: "Franchise vs. Einzelbetrieb" },
    { id: "case-study", title: "Case Study: Mustafa's Döner" },
    { id: "haeufige-fehler", title: "Die 10 häufigsten Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Was kostet SEO für einen Döner-Laden?", answer: "Die Kosten variieren stark: DIY mit kostenlosen Tools (0€), aber Zeitaufwand. Professionelle Local SEO Betreuung liegt bei 200-800€/Monat. Einmalige Optimierung: 500-1.500€. Der ROI ist bei korrekter Umsetzung meist innerhalb von 3-6 Monaten positiv." },
    { question: "Wie lange dauert es, bis mein Döner-Laden bei Google oben ist?", answer: "Erste Verbesserungen sind oft nach 2-4 Wochen sichtbar. Top-3-Positionen bei umkämpften Keywords dauern 3-6 Monate. Faktoren: Konkurrenz vor Ort, Anzahl und Qualität der Bewertungen, Alter des Google Business Profils." },
    { question: "Brauche ich eine Website für meinen Imbiss?", answer: "Nicht unbedingt, aber empfohlen. Google Business Profil ist das Minimum. Eine einfache Website (auch nur eine Seite) verbessert das Ranking, ermöglicht Online-Bestellungen und zeigt Professionalität." },
    { question: "Welche Keywords sind für Döner-Läden wichtig?", answer: "Wichtigste Keywords: 'Döner [Stadt]', 'Kebab [Stadtteil]', 'Döner in der Nähe', 'Bester Döner [Stadt]', 'Döner Lieferservice [Stadt]'." },
    { question: "Lohnt sich Lieferando für Döner-Läden?", answer: "Ja, für Neukunden-Akquise. Die 13-30% Provision sind hoch, aber die Reichweite unschlagbar. Strategie: Lieferando für Neukunden, dann über Flyer/Rabatte auf eigene Bestellwege umleiten." },
    { question: "Wie bekomme ich mehr Google-Bewertungen?", answer: "1. QR-Code an der Kasse aufstellen, 2. Bei jeder Lieferung eine Karte beilegen, 3. Nach positiven Kommentaren direkt fragen, 4. WhatsApp-Link an Stammkunden senden, 5. Auf negative Bewertungen professionell antworten." },
    { question: "Was ist wichtiger: Instagram oder Google?", answer: "Google ist wichtiger für direkte Kundengewinnung (80% der lokalen Suchen). Instagram ist ergänzend für Markenaufbau und jüngere Zielgruppen." },
    { question: "Wie reagiere ich auf unfaire Bewertungen?", answer: "Ruhig und professionell bleiben. Entschuldigung aussprechen, Lösung anbieten, zum persönlichen Kontakt einladen. Bei Fake-Bewertungen: Als unangemessen bei Google melden." },
    { question: "Soll ich meine Preise auf Google zeigen?", answer: "Ja, unbedingt! Preise erhöhen das Vertrauen, reduzieren Nachfragen und helfen bei der Kaufentscheidung." },
    { question: "Wie oft sollte ich neue Fotos hochladen?", answer: "Mindestens 1x pro Monat neue Fotos. Ideal: 2-4 Fotos pro Woche. Aktuelle Fotos signalisieren Google, dass der Laden aktiv ist." },
    { question: "Was bedeutet NAP-Konsistenz?", answer: "NAP = Name, Address, Phone. Diese Daten müssen überall identisch sein: Google, Facebook, Lieferando, Gelbe Seiten, etc. Unterschiede verwirren Google und schaden dem Ranking." },
    { question: "Was sind die häufigsten Fehler bei Döner-SEO?", answer: "Top 5 Fehler: 1. Google Business Profil nicht verifiziert, 2. Keine oder schlechte Fotos, 3. Falsche Öffnungszeiten, 4. Nicht auf Bewertungen antworten, 5. Speisekarte fehlt oder ist veraltet." },
    { question: "Kann ich Local SEO selbst machen?", answer: "Ja! Die Grundlagen (Google Business optimieren, Fotos, Bewertungen beantworten) kann jeder. Für fortgeschrittene Strategien ist mehr Wissen nötig. Dieser Artikel gibt dir alle Tools an die Hand." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats Section */}
      <section id="statistiken" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die Döner-Branche in Zahlen: Warum SEO jetzt entscheidend ist</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">18.000+</div>
              <div className="text-sm text-muted-foreground">Döner-Läden in Deutschland</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">7,5 Mrd. €</div>
              <div className="text-sm text-muted-foreground">Jahresumsatz der Branche</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">Top 5</div>
              <div className="text-sm text-muted-foreground">"Döner in der Nähe" Suchanfrage</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">82%</div>
              <div className="text-sm text-muted-foreground">entscheiden am Smartphone</div>
            </CardContent>
          </Card>
        </div>

        <p className="text-lg mb-4">
          Deutschland ist die <strong>Döner-Hauptstadt der Welt</strong>. Mehr als 400 Millionen Döner werden jährlich verkauft – das sind über eine Million pro Tag. Doch mit der Konkurrenz wächst auch der Druck: In manchen Stadtteilen gibt es alle 200 Meter einen Döner-Laden.
        </p>
        
        <p className="mb-4">
          Die Frage ist nicht mehr, ob dein Döner gut schmeckt – sondern ob hungrige Kunden <strong>dich finden, bevor sie den Laden nebenan sehen</strong>. Genau hier kommt Local SEO ins Spiel.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 my-8">
          <h3 className="font-semibold text-primary mb-3 text-xl">Was du in diesem Guide lernst:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Die perfekten Keywords für deinen Döner-Laden</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Google Business Profil wie ein Profi optimieren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Bewertungen sammeln & professionell beantworten</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Lieferportale strategisch nutzen (ohne Marge zu verlieren)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Social Media, das wirklich Kunden bringt</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Interaktive Tools: Keyword-Generator & Speisekarten-Optimierer</span>
            </li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-doener-kebab-imbiss" position="intro" />

      {/* Customer Journey Section */}
      <section id="kundenreise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die Döner-Kundenreise verstehen: Wie Menschen nach Döner suchen</h2>
        
        <p className="mb-6">
          Um bei Google gefunden zu werden, musst du verstehen, <strong>wie deine Kunden nach Döner suchen</strong>. Die Customer Journey eines hungrigen Menschen hat drei entscheidende Momente:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🍽️</span>
                </div>
                <div>
                  <Badge className="bg-amber-500/20 text-amber-700 border-amber-500/30">Schritt 1</Badge>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">"Was will ich essen?"</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Der Hunger-Trigger: Der Kunde entscheidet sich für Döner (oder Kebab, Lahmacun, Dürüm...)
              </p>
              <div className="bg-muted/50 rounded-lg p-3 text-sm">
                <strong>Deine Chance:</strong> Alle Spezialitäten mit Keywords abdecken
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <Badge className="bg-blue-500/20 text-blue-700 border-blue-500/30">Schritt 2</Badge>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">"Wo bekomme ich es?"</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Die Standort-Suche: Google Maps öffnen, "Döner in der Nähe" eingeben
              </p>
              <div className="bg-muted/50 rounded-lg p-3 text-sm">
                <strong>Deine Chance:</strong> Google Business Profil optimieren
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Schritt 3</Badge>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">"Welcher ist gut?"</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Die Qualitätsprüfung: Bewertungen lesen, Fotos ansehen, Preise checken
              </p>
              <div className="bg-muted/50 rounded-lg p-3 text-sm">
                <strong>Deine Chance:</strong> Bewertungen & Fotos perfektionieren
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Mobile First: 85% suchen am Smartphone
          </h4>
          <p className="text-amber-700/80">
            Die meisten Döner-Suchen passieren unterwegs oder auf der Couch – am Smartphone. Das bedeutet: <strong>Dein Google Business Profil ist wichtiger als eine Website.</strong> Die Fotos müssen auch auf kleinen Bildschirmen appetitlich aussehen. Und die wichtigsten Infos (Öffnungszeiten, Adresse, Telefon) müssen sofort sichtbar sein.
          </p>
        </div>
      </section>

      {/* Keyword Generator Section */}
      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Döner-Keywords finden: Der interaktive Keyword-Generator</h2>
        
        <p className="mb-4">
          Keywords sind die Suchbegriffe, die Kunden in Google eingeben. Wenn du weißt, <strong>welche Keywords deine Kunden nutzen</strong>, kannst du dein Profil und deine Website darauf optimieren.
        </p>

        <p className="mb-6">
          Unser interaktiver Keyword-Generator zeigt dir die wichtigsten Suchbegriffe für deine Stadt – inklusive geschätztem Suchvolumen und Schwierigkeitsgrad.
        </p>

        <DoenerKeywordGenerator />

        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold">So nutzt du die Keywords richtig:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background rounded-xl border p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Google Business Profil
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hauptkeyword im Unternehmensnamen (wenn möglich)</li>
                <li>• Beschreibung mit 2-3 wichtigen Keywords</li>
                <li>• Alle Kategorien auswählen</li>
              </ul>
            </div>
            <div className="bg-background rounded-xl border p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ChefHat className="h-4 w-4 text-primary" />
                Speisekarte
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Jedes Gericht mit Beschreibung</li>
                <li>• Spezialitäten-Keywords einbauen</li>
                <li>• Zutaten und Soßen nennen</li>
              </ul>
            </div>
            <div className="bg-background rounded-xl border p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Camera className="h-4 w-4 text-primary" />
                Foto-Beschreibungen
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Alt-Text mit Keywords</li>
                <li>• Dateinamen optimieren</li>
                <li>• Bildunterschriften nutzen</li>
              </ul>
            </div>
            <div className="bg-background rounded-xl border p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-primary" />
                Social Media
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hashtags mit Stadtnamen</li>
                <li>• Standort-Tags nutzen</li>
                <li>• Posts mit Keywords beschreiben</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Section */}
      <section id="google-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Google Business Profil für Döner-Läden perfekt optimieren</h2>
        
        <p className="mb-6">
          Dein Google Business Profil ist deine <strong>digitale Visitenkarte</strong>. Bei lokalen Suchen erscheint es noch vor den Websites – direkt auf Google Maps und in den Suchergebnissen. Ein vollständig optimiertes Profil kann den Unterschied zwischen 10 und 100 neuen Kunden pro Woche machen.
        </p>

        <h3 className="text-2xl font-bold mb-4">Die richtige Kategorie-Struktur</h3>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Hauptkategorie</th>
                <th className="border p-3 text-left">Empfohlene Zusatzkategorien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Döner-Restaurant</td>
                <td className="border p-3">Türkisches Restaurant, Imbiss, Schnellrestaurant, Halal-Restaurant</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-4">Imbiss-spezifische Attribute aktivieren</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { icon: "🚚", label: "Lieferung (Selbst/Lieferando/Wolt)" },
            { icon: "🪑", label: "Sitzplätze vorhanden" },
            { icon: "⚡", label: "Schneller Service" },
            { icon: "☪️", label: "Halal-Zertifizierung" },
            { icon: "🥗", label: "Vegetarische Optionen" },
            { icon: "🌙", label: "Nachtöffnung" },
            { icon: "💳", label: "Kartenzahlung möglich" },
            { icon: "♿", label: "Barrierefrei" },
            { icon: "🅿️", label: "Parkplätze verfügbar" },
          ].map((attr, i) => (
            <div key={i} className="bg-background border rounded-lg p-3 flex items-center gap-2">
              <span className="text-xl">{attr.icon}</span>
              <span className="text-sm">{attr.label}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4">Die 10 Pflicht-Fotos für jeden Döner-Laden</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { num: 1, title: "Dönerspieß", desc: "Hero-Bild! Der Star deines Ladens", priority: "hoch" },
            { num: 2, title: "Fertiger Döner", desc: "Appetitlich angerichtet", priority: "hoch" },
            { num: 3, title: "Dürüm-Rolle", desc: "Aufgeschnitten für Einblick", priority: "mittel" },
            { num: 4, title: "Vitrine", desc: "Salate & Toppings zeigen", priority: "mittel" },
            { num: 5, title: "Theke/Tresen", desc: "Sauberkeit demonstrieren", priority: "hoch" },
            { num: 6, title: "Innenraum", desc: "Sitzplätze & Ambiente", priority: "mittel" },
            { num: 7, title: "Außenansicht", desc: "Mit Schild & Eingang", priority: "hoch" },
            { num: 8, title: "Team", desc: "Persönlichkeit zeigen", priority: "niedrig" },
            { num: 9, title: "Lahmacun/Pide", desc: "Spezialitäten hervorheben", priority: "mittel" },
            { num: 10, title: "Getränke", desc: "Ayran & Cola nicht vergessen", priority: "niedrig" },
          ].map((photo) => (
            <Card key={photo.num} className="overflow-hidden">
              <CardContent className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-primary">#{photo.num}</span>
                  <Badge variant="outline" className={
                    photo.priority === 'hoch' ? 'bg-green-500/20 text-green-700 border-green-500/30' :
                    photo.priority === 'mittel' ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30' :
                    'bg-gray-500/20 text-gray-700 border-gray-500/30'
                  }>
                    {photo.priority}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm">{photo.title}</h4>
                <p className="text-xs text-muted-foreground">{photo.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Foto-Profi-Tipps für Döner-Läden
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700/80">
            <div>
              <p className="font-medium mb-1">✓ Das Richtige tun:</p>
              <ul className="space-y-1">
                <li>• Tageslicht nutzen (keine Leuchtstoffröhren)</li>
                <li>• Smartphone quer halten (Landscape)</li>
                <li>• Hintergrund aufräumen</li>
                <li>• Dampf/Frische zeigen</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">✗ Das Falsche vermeiden:</p>
              <ul className="space-y-1">
                <li>• Unscharfe oder dunkle Bilder</li>
                <li>• Leere Laden-Aufnahmen</li>
                <li>• Alte oder veraltete Fotos</li>
                <li>• Nur Außenansicht ohne Essen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-doener-kebab-imbiss" position="middle" />

      {/* Menu Optimizer Section */}
      <section id="speisekarte" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Speisekarten-SEO: Wie deine Menübeschreibungen dein Ranking verbessern</h2>
        
        <p className="mb-4">
          Deine Speisekarte ist nicht nur für Kunden im Laden wichtig – sie ist auch ein <strong>mächtiges SEO-Tool</strong>. Google liest die Texte auf deinem Google Business Profil und deiner Website. Je detaillierter und keyword-reicher deine Menübeschreibungen, desto besser wirst du gefunden.
        </p>

        <p className="mb-6">
          Unser interaktiver Speisekarten-Optimierer zeigt dir, wie du aus langweiligen Einzeilern <strong>SEO-starke Beschreibungen</strong> machst – zum Kopieren und Einfügen.
        </p>

        <DoenerMenuOptimizer />
      </section>

      {/* Reviews Section */}
      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bewertungsmanagement für Döner-Imbisse: Der komplette Guide</h2>
        
        <p className="mb-6">
          Bewertungen sind der <strong>wichtigste Ranking-Faktor</strong> für lokale Suchen. Ein Döner-Laden mit 4,5 Sternen und 200 Bewertungen wird fast immer über einem mit 4,8 Sternen und nur 15 Bewertungen angezeigt. Quantität UND Qualität zählen.
        </p>

        <h3 className="text-2xl font-bold mb-4">Die häufigsten Beschwerden & wie du reagierst</h3>
        
        <div className="space-y-4 mb-8">
          {[
            {
              complaint: "Zu wenig Fleisch",
              response: "Vielen Dank für Ihr Feedback! Unsere Portionen sind standardisiert, aber wir bieten auch einen XL-Döner an. Kommen Sie gerne vorbei, und wir laden Sie zu einem kostenlosen Upgrade ein – als Entschuldigung.",
              tip: "Portionsgrößen transparent auf der Karte zeigen"
            },
            {
              complaint: "Lange Wartezeit",
              response: "Es tut uns leid, dass Sie warten mussten! In unseren Stoßzeiten (12-14 Uhr und 18-20 Uhr) kann es voller werden. Für schnelleren Service empfehlen wir unsere telefonische Vorbestellung unter [Nummer].",
              tip: "Vorbestellungen aktiv bewerben"
            },
            {
              complaint: "Essen nicht frisch/kalt",
              response: "Das entspricht nicht unserem Qualitätsanspruch! Wir bereiten alles frisch zu. Bitte kontaktieren Sie uns direkt unter [Nummer], damit wir das klären können. Wir würden Sie gerne zu einem neuen Döner einladen.",
              tip: "Persönlichen Kontakt anbieten"
            },
            {
              complaint: "Preis zu hoch",
              response: "Wir verstehen, dass Preise wichtig sind. Wir verwenden ausschließlich Qualitätszutaten und frisches Fleisch vom lokalen Metzger. Für ein besseres Preis-Leistungs-Verhältnis empfehlen wir unser Mittagsmenü!",
              tip: "Qualität und Angebote hervorheben"
            },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x">
                <div className="p-4 bg-red-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="font-semibold text-red-700">Beschwerde</span>
                  </div>
                  <p className="text-sm">"{item.complaint}"</p>
                </div>
                <div className="p-4 bg-green-500/5 lg:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-semibold text-green-700">Professionelle Antwort</span>
                  </div>
                  <p className="text-sm mb-2">{item.response}</p>
                  <Badge variant="outline" className="bg-blue-500/20 text-blue-700 border-blue-500/30 text-xs">
                    💡 Tipp: {item.tip}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4">So sammelst du mehr Bewertungen</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "📱", title: "QR-Code an der Kasse", desc: "Aufsteller mit direktem Link zur Google-Bewertung" },
            { icon: "🧾", title: "Auf Kassenbons drucken", desc: "'Bewerten Sie uns auf Google!' mit QR-Code" },
            { icon: "📦", title: "Bei Lieferung beilegen", desc: "Kleine Karte mit Bewertungs-Bitte in jeder Tüte" },
            { icon: "💬", title: "WhatsApp für Stammkunden", desc: "Persönliche Nachricht mit Link senden" },
            { icon: "😊", title: "Nach Komplimenten fragen", desc: "'Freut uns! Würden Sie das auch auf Google schreiben?'" },
            { icon: "⭐", title: "Auf jede Bewertung antworten", desc: "Zeigt, dass du Feedback ernst nimmst" },
          ].map((method, i) => (
            <div key={i} className="bg-background border rounded-xl p-4 flex gap-4">
              <span className="text-2xl">{method.icon}</span>
              <div>
                <h4 className="font-semibold">{method.title}</h4>
                <p className="text-sm text-muted-foreground">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photos & Videos Section */}
      <section id="fotos" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fotos & Videos richtig machen: Der Döner-Content-Guide</h2>
        
        <p className="mb-6">
          Gute Fotos machen hungrig – und Hunger führt zu Bestellungen. Schlechte Fotos führen dazu, dass Kunden zum Konkurrenten scrollen. In der Gastro-Branche zählt das Auge mit.
        </p>

        <h3 className="text-xl font-bold mb-4">Smartphone-Foto-Einstellungen für perfekte Döner-Bilder</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">📸 Kamera-Einstellungen</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• HDR ausschalten (wirkt unnatürlich)</li>
                <li>• Raster aktivieren (Drittel-Regel)</li>
                <li>• Höchste Auflösung wählen</li>
                <li>• Fokus auf das Essen tippen</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">💡 Beleuchtung</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tageslicht bevorzugen</li>
                <li>• Leuchtstoffröhren vermeiden</li>
                <li>• Seitliches Licht für Tiefe</li>
                <li>• Blitz ausschalten</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">🎯 Perspektiven</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 45-Grad-Winkel für Teller</li>
                <li>• Frontal für Dönerspieß</li>
                <li>• Von oben für Pide/Lahmacun</li>
                <li>• Nahaufnahme für Details</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-4">Video-Content-Ideen für Social Media</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Döner wird geschnitten", duration: "15 Sek.", platform: "Instagram Reels, TikTok", views: "Sehr hoch" },
            { title: "Behind the Scenes: Spieß wird vorbereitet", duration: "30-60 Sek.", platform: "TikTok, YouTube Shorts", views: "Hoch" },
            { title: "Zeitraffer: Mittagsansturm", duration: "15-30 Sek.", platform: "Instagram Stories", views: "Mittel" },
            { title: "Kunde beißt in den Döner", duration: "10 Sek.", platform: "TikTok, Reels", views: "Sehr hoch" },
            { title: "Soßen-Auswahl zeigen", duration: "15 Sek.", platform: "Instagram Stories", views: "Mittel" },
            { title: "Mitarbeiter stellt sich vor", duration: "30 Sek.", platform: "TikTok, Instagram", views: "Mittel" },
          ].map((video, i) => (
            <div key={i} className="bg-background border rounded-xl p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{video.title}</h4>
                <p className="text-sm text-muted-foreground">{video.platform}</p>
              </div>
              <div className="text-right">
                <Badge variant="outline">{video.duration}</Badge>
                <p className="text-xs text-muted-foreground mt-1">Reichweite: {video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Platforms Section */}
      <section id="lieferung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lieferportale im Vergleich: Welche Plattform passt zu deinem Döner-Laden?</h2>
        
        <p className="mb-6">
          Lieferando, Wolt, Uber Eats oder eigene Lieferung? Die richtige Strategie kann <strong>Tausende Euro pro Jahr</strong> Unterschied machen. Hier ist der komplette Vergleich für Döner-Läden.
        </p>

        <DeliveryPlatformTable />
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Social Media für Döner-Läden: Welche Plattform wirklich Kunden bringt</h2>
        
        <p className="mb-6">
          Nicht jede Plattform ist für jeden Döner-Laden sinnvoll. Die Wahl hängt von deiner Zielgruppe, deiner Zeit und deinen Ressourcen ab. Hier ist die ehrliche Übersicht:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Plattform</th>
                <th className="border p-3 text-left">Zielgruppe</th>
                <th className="border p-3 text-left">Content-Typ</th>
                <th className="border p-3 text-left">Aufwand</th>
                <th className="border p-3 text-left">ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Instagram</td>
                <td className="border p-3">18-35 Jahre</td>
                <td className="border p-3">Fotos, Reels, Stories</td>
                <td className="border p-3">Mittel (3-5h/Woche)</td>
                <td className="border p-3 text-green-600 font-medium">Hoch</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">TikTok</td>
                <td className="border p-3">16-28 Jahre</td>
                <td className="border p-3">Kurze Videos, Trends</td>
                <td className="border p-3">Hoch (5-8h/Woche)</td>
                <td className="border p-3 text-green-600 font-medium">Sehr hoch (viral möglich)</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Facebook</td>
                <td className="border p-3">30-55 Jahre</td>
                <td className="border p-3">Posts, Events, Gruppen</td>
                <td className="border p-3">Niedrig (1-2h/Woche)</td>
                <td className="border p-3 text-yellow-600 font-medium">Mittel</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">WhatsApp Business</td>
                <td className="border p-3">Stammkunden</td>
                <td className="border p-3">Angebote, Bestellungen</td>
                <td className="border p-3">Niedrig (1h/Woche)</td>
                <td className="border p-3 text-green-600 font-medium">Sehr hoch (direkt)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4">Content-Kalender: Was posten, wann posten?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {[
            { day: "Montag", content: "Mittagsangebot posten", icon: "🍽️" },
            { day: "Dienstag", content: "Behind-the-Scenes Video", icon: "🎬" },
            { day: "Mittwoch", content: "Kundenbewertung teilen", icon: "⭐" },
            { day: "Donnerstag", content: "Team-Mitglied vorstellen", icon: "👨‍🍳" },
            { day: "Freitag", content: "Wochenend-Special bewerben", icon: "🎉" },
            { day: "Samstag", content: "User-Generated Content", icon: "📸" },
            { day: "Sonntag", content: "Familien-Menü / Ruhetag-Ankündigung", icon: "👨‍👩‍👧" },
          ].map((item, i) => (
            <div key={i} className="bg-background border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span>{item.icon}</span>
                <span className="font-semibold text-sm">{item.day}</span>
              </div>
              <p className="text-xs text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competition Analysis Section */}
      <section id="konkurrenz" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lokale Konkurrenzanalyse: Wer sind deine echten Mitbewerber?</h2>
        
        <p className="mb-6">
          Bevor du optimierst, musst du wissen, gegen wen du antrittst. Deine Konkurrenz sind nicht nur andere Döner-Läden – sondern alle, die den Hunger deiner Kunden stillen könnten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Direkte Konkurrenz
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">🥙</span>
                  <span>Andere Döner-Läden im Umkreis (500m-1km)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">🌯</span>
                  <span>Türkische Restaurants mit Döner-Angebot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">🥡</span>
                  <span>Lieferando-Partner im selben Gebiet</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Indirekte Konkurrenz
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">🍕</span>
                  <span>Pizza-Läden und andere Imbisse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">🍔</span>
                  <span>Fast-Food-Ketten (McDonald's, Burger King)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">🏠</span>
                  <span>Supermarkt-Fertiggerichte</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-4">So analysierst du die Konkurrenz in 5 Schritten</h3>
        
        <div className="space-y-3 mb-8">
          {[
            { step: 1, title: "Google Maps öffnen", desc: "'Döner [Stadt/Stadtteil]' suchen und Top 5 notieren" },
            { step: 2, title: "Profile analysieren", desc: "Anzahl Bewertungen, Durchschnitt, Fotos, Öffnungszeiten" },
            { step: 3, title: "Bewertungen lesen", desc: "Was loben Kunden? Was kritisieren sie?" },
            { step: 4, title: "Schwächen finden", desc: "Schlechte Fotos? Wenig Antworten? Keine Lieferung?" },
            { step: 5, title: "Eigene Stärken definieren", desc: "Was machst du besser? Das kommunizieren!" },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 bg-background border rounded-xl">
              <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offline Marketing Section */}
      <section id="offline" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Offline-Marketing-Synergie: So verbindest du Print und Digital</h2>
        
        <p className="mb-6">
          Local SEO funktioniert am besten, wenn Online- und Offline-Marketing zusammenarbeiten. Jeder Flyer, jede Visitenkarte, jeder Kassenbon ist eine Chance, mehr Google-Bewertungen und Online-Reichweite zu generieren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Effektive Offline-Kanäle</h3>
            <ul className="space-y-3">
              {[
                { icon: "🏢", text: "Flyer in Bürogebäuden (Mittagskunden)" },
                { icon: "🎓", text: "Flyer an Universitäten/Schulen" },
                { icon: "🏠", text: "Briefkasten-Wurfsendungen im Liefergebiet" },
                { icon: "⚽", text: "Sponsoring lokaler Sportvereine" },
                { icon: "🎪", text: "Präsenz auf lokalen Events/Märkten" },
                { icon: "🤝", text: "Kooperationen mit lokalen Firmen" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Online-Offline-Verknüpfung</h3>
            <ul className="space-y-3">
              {[
                { icon: "📱", text: "QR-Code auf allen Print-Materialien" },
                { icon: "🎁", text: "'Gefunden auf Google? 5% Rabatt!'" },
                { icon: "💳", text: "Kundenkarten mit digitalem Pendant" },
                { icon: "📸", text: "'Tagge uns auf Instagram = Gratis-Getränk'" },
                { icon: "⭐", text: "Bewertungs-Karte bei jeder Bestellung" },
                { icon: "📧", text: "E-Mail-Liste über Gewinnspiele aufbauen" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Franchise vs Single Location Section */}
      <section id="franchise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Franchise vs. Einzelbetrieb: SEO-Besonderheiten</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-amber-500/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">🏪 Einzelbetrieb</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Volle kreative Freiheit bei Branding</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Schnellere Entscheidungen möglich</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Authentische lokale Marke aufbauen</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Einzigartige Keywords möglich</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-blue-500/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">🏢 Franchise</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Markenbekanntheit nutzen</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">SEO-Vorlagen vom Franchisegeber</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Lokale Anpassung oft eingeschränkt</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Bewertungen pro Filiale getrennt managen</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Case Study: Wie "Mustafa's Döner" in 6 Monaten zur Nummer 1 wurde</h2>
        
        <Card className="border-2 border-primary/30 overflow-hidden">
          <div className="bg-primary/5 p-6 border-b">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-3xl">
                🥙
              </div>
              <div>
                <h3 className="text-xl font-bold">Mustafa's Döner, Berlin-Kreuzberg</h3>
                <p className="text-muted-foreground">Fiktives Beispiel basierend auf realen Strategien</p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4 text-red-600 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Ausgangssituation
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• 3,8 Sterne bei Google (58 Bewertungen)</li>
                  <li>• Platz 8 bei "Döner Kreuzberg"</li>
                  <li>• Nur 3 Fotos im Profil (alle von Kunden)</li>
                  <li>• Keine Antworten auf Bewertungen</li>
                  <li>• Öffnungszeiten oft falsch</li>
                  <li>• Keine Social-Media-Präsenz</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Umgesetzte Maßnahmen
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Google Business komplett optimiert</li>
                  <li>• 50 neue Profi-Fotos hochgeladen</li>
                  <li>• Auf alle Bewertungen geantwortet (24h-Regel)</li>
                  <li>• Speisekarte mit Keywords aktualisiert</li>
                  <li>• Instagram-Account gestartet (3x/Woche)</li>
                  <li>• QR-Code für Bewertungen an der Kasse</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="font-bold mb-4 text-green-700 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Ergebnis nach 6 Monaten
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4,6 ⭐</div>
                  <div className="text-xs text-muted-foreground">Bewertungsdurchschnitt</div>
                  <div className="text-xs text-green-600">+0,8 Sterne</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Platz 2</div>
                  <div className="text-xs text-muted-foreground">Bei "Döner Kreuzberg"</div>
                  <div className="text-xs text-green-600">+6 Plätze</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+45%</div>
                  <div className="text-xs text-muted-foreground">Mehr Bestellungen</div>
                  <div className="text-xs text-green-600">pro Woche</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">258</div>
                  <div className="text-xs text-muted-foreground">Neue Bewertungen</div>
                  <div className="text-xs text-green-600">+200 in 6 Monaten</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Common Mistakes Section */}
      <section id="haeufige-fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 10 häufigsten Döner-SEO-Fehler (und wie du sie vermeidest)</h2>
        
        <div className="space-y-4">
          {[
            { error: "Google Business Profil nicht verifiziert", fix: "Verifizierung per Postkarte oder Telefon durchführen – dauert nur 5 Minuten", severity: "kritisch" },
            { error: "Keine oder schlechte Fotos", fix: "Mindestens 10 hochwertige Fotos hochladen, jeden Monat neue hinzufügen", severity: "kritisch" },
            { error: "Falsche Öffnungszeiten", fix: "Jede Änderung sofort updaten, Feiertage vorplanen", severity: "kritisch" },
            { error: "Nicht auf Bewertungen antworten", fix: "Innerhalb von 24h auf JEDE Bewertung antworten", severity: "hoch" },
            { error: "Speisekarte fehlt oder ist veraltet", fix: "Komplette Karte mit Preisen und Beschreibungen hochladen", severity: "hoch" },
            { error: "NAP-Inkonsistenz", fix: "Name, Adresse, Telefon überall gleich angeben", severity: "mittel" },
            { error: "Keine Website oder nur Social Media", fix: "Mindestens eine einfache Landingpage erstellen", severity: "mittel" },
            { error: "Liefergebiet nicht definiert", fix: "Im Google Business Profil Lieferradius angeben", severity: "mittel" },
            { error: "Keine Kategorien/Attribute", fix: "Alle passenden Kategorien und Attribute aktivieren", severity: "niedrig" },
            { error: "Posts nicht nutzen", fix: "Wöchentlich Google Posts mit Angeboten veröffentlichen", severity: "niedrig" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-background border rounded-xl">
              <div className="shrink-0">
                <Badge variant="outline" className={
                  item.severity === 'kritisch' ? 'bg-red-500/20 text-red-700 border-red-500/30' :
                  item.severity === 'hoch' ? 'bg-orange-500/20 text-orange-700 border-orange-500/30' :
                  item.severity === 'mittel' ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30' :
                  'bg-gray-500/20 text-gray-700 border-gray-500/30'
                }>
                  #{i + 1}
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-semibold text-red-700">{item.error}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">{item.fix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-doener-kebab-imbiss" position="end" />

      {industryStats.doener?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.doener} />

      <IndustryComparisonTable data={industryComparisonData.doener} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen: Döner-SEO A-Z</h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="item-1" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Was kostet SEO für einen Döner-Laden?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Die Kosten variieren stark: DIY mit kostenlosen Tools (0€), aber Zeitaufwand. Professionelle Local SEO Betreuung liegt bei 200-800€/Monat. Einmalige Optimierung: 500-1.500€. Der ROI ist bei korrekter Umsetzung meist innerhalb von 3-6 Monaten positiv.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Wie lange dauert es, bis mein Döner-Laden bei Google oben ist?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Erste Verbesserungen sind oft nach 2-4 Wochen sichtbar. Top-3-Positionen bei umkämpften Keywords dauern 3-6 Monate. Faktoren: Konkurrenz vor Ort, Anzahl und Qualität der Bewertungen, Alter des Google Business Profils.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Brauche ich eine Website für meinen Imbiss?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Nicht unbedingt, aber empfohlen. Google Business Profil ist das Minimum. Eine einfache Website (auch nur eine Seite) verbessert das Ranking, ermöglicht Online-Bestellungen und zeigt Professionalität. Kostenlose Optionen: Google Sites, Wix.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Welche Keywords sind für Döner-Läden wichtig?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Wichtigste Keywords: "Döner [Stadt]", "Kebab [Stadtteil]", "Döner in der Nähe", "Bester Döner [Stadt]", "Döner Lieferservice [Stadt]". Nutze unseren Keyword-Generator oben im Artikel für personalisierte Vorschläge!
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Lohnt sich Lieferando für Döner-Läden?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ja, für Neukunden-Akquise. Die 13-30% Provision sind hoch, aber die Reichweite unschlagbar. Strategie: Lieferando für Neukunden, dann über Flyer/Rabatte auf eigene Bestellwege umleiten.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Wie bekomme ich mehr Google-Bewertungen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              1. QR-Code an der Kasse aufstellen, 2. Bei jeder Lieferung eine Karte beilegen, 3. Nach positiven Kommentaren direkt fragen, 4. WhatsApp-Link an Stammkunden senden, 5. Auf negative Bewertungen professionell antworten.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Was ist wichtiger: Instagram oder Google?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Google ist wichtiger für direkte Kundengewinnung (80% der lokalen Suchen). Instagram ist ergänzend für Markenaufbau und jüngere Zielgruppen. Priorisierung: 1. Google Business, 2. Instagram/TikTok, 3. Facebook.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Wie reagiere ich auf unfaire Bewertungen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ruhig und professionell bleiben. Entschuldigung aussprechen (auch wenn unberechtigt), Lösung anbieten, zum persönlichen Kontakt einladen. Bei Fake-Bewertungen: Als unangemessen bei Google melden. Niemals beleidigend antworten!
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Soll ich meine Preise auf Google zeigen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ja, unbedingt! Preise erhöhen das Vertrauen, reduzieren Nachfragen und helfen bei der Kaufentscheidung. Kunden, die trotz Preiskenntnis kommen, sind kaufbereiter. Speisekarte mit Preisen als PDF oder Bild hochladen.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-10" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Wie oft sollte ich neue Fotos hochladen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Mindestens 1x pro Monat neue Fotos. Ideal: 2-4 Fotos pro Woche. Variation: Gerichte, Team, Innenraum, Events. Aktuelle Fotos signalisieren Google, dass der Laden aktiv ist und verbessern das Ranking.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-11" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Was bedeutet NAP-Konsistenz?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              NAP = Name, Address, Phone (Name, Adresse, Telefon). Diese Daten müssen überall identisch sein: Google, Facebook, Lieferando, Gelbe Seiten, etc. Unterschiede verwirren Google und schaden dem Ranking.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-12" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">
              Kann ich Local SEO selbst machen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ja! Die Grundlagen (Google Business optimieren, Fotos, Bewertungen beantworten) kann jeder. Für fortgeschrittene Strategien (Website-SEO, Backlinks) ist mehr Wissen nötig. Dieser Artikel gibt dir alle Tools an die Hand.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Dein Döner-SEO-Fahrplan</h2>
        
        <p className="mb-6">
          Du hast jetzt das komplette Wissen, um deinen Döner-Laden bei Google ganz nach oben zu bringen. Hier ist dein Action-Plan für die nächsten 30 Tage:
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-4">🚀 30-Tage Döner-SEO Challenge</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Badge className="shrink-0">Woche 1</Badge>
              <div className="text-sm">
                <p className="font-medium">Google Business Profil perfektionieren</p>
                <p className="text-muted-foreground">Alle Infos prüfen, 10+ Fotos hochladen, Öffnungszeiten aktualisieren</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="shrink-0">Woche 2</Badge>
              <div className="text-sm">
                <p className="font-medium">Bewertungs-Offensive starten</p>
                <p className="text-muted-foreground">QR-Code aufstellen, alle bestehenden Bewertungen beantworten</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="shrink-0">Woche 3</Badge>
              <div className="text-sm">
                <p className="font-medium">Speisekarte & Keywords optimieren</p>
                <p className="text-muted-foreground">Menü-Beschreibungen mit Keywords verbessern, auf alle Plattformen übertragen</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="shrink-0">Woche 4</Badge>
              <div className="text-sm">
                <p className="font-medium">Social Media starten</p>
                <p className="text-muted-foreground">Instagram-Account einrichten, erste 4 Posts veröffentlichen</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg">
          <strong>Der wichtigste Tipp zum Schluss:</strong> Fang heute an. Nicht morgen, nicht nächste Woche. Jeder Tag, den du wartest, ist ein Tag, an dem die Konkurrenz an dir vorbeizieht. Die Tools in diesem Artikel machen den Start einfach – nutze sie!
        </p>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Döner-Imbiss wird Lieferando-unabhängig</h2>
        {industryCaseStudies.doener.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-doener-kebab-imbiss" />
    </ArticleLayout>
  );
};

export default LocalSeoDoenerladen;
