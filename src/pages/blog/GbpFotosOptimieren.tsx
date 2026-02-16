import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  Camera, 
  Image, 
  CheckCircle, 
  Lightbulb, 
  Upload,
  Star,
  Eye,
  Smartphone
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GbpFotosOptimieren = () => {
  const article = getArticleBySlug("gbp-fotos-optimieren");

  if (!article) return null;

  const tocItems = [
    { id: "warum-fotos", title: "Warum Fotos entscheidend sind" },
    { id: "bildformate", title: "Die richtigen Bildformate" },
    { id: "kategorien", title: "Foto-Kategorien optimal nutzen" },
    { id: "optimierung", title: "Bilder SEO-optimieren" },
    { id: "upload-strategie", title: "Upload-Strategie" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie viele Fotos sollte ich auf Google Business hochladen?",
      answer: "Mindestens 10-15 Fotos für ein vollständiges Profil. Top-Performer haben oft 50+ Bilder. Qualität geht vor Quantität, aber regelmäßige neue Uploads signalisieren Aktivität."
    },
    {
      question: "Welche Bildgröße ist optimal für Google Business?",
      answer: "Empfohlen: 720x720 Pixel Minimum. Optimal: 1200x900 Pixel (4:3 Seitenverhältnis). Maximum: 5MB pro Bild. JPG oder PNG Format verwenden."
    },
    {
      question: "Wie oft sollte ich neue Fotos hochladen?",
      answer: "Mindestens 1-2 neue Fotos pro Woche. Saisonale Updates bei besonderen Anlässen. Neue Produkte oder Dienstleistungen sofort fotografieren."
    },
    {
      question: "Werden Kundenfotos automatisch auf meinem Profil angezeigt?",
      answer: "Ja, Kunden können eigene Fotos hochladen. Du kannst sie nicht entfernen, es sei denn sie verstoßen gegen Googles Richtlinien. Reagiere mit eigenen, besseren Bildern."
    },
    {
      question: "Kann ich Fotos nachträglich bearbeiten?",
      answer: "Nein, einmal hochgeladene Fotos können nicht bearbeitet werden. Du musst sie löschen und neu hochladen. Optimiere Bilder daher vor dem Upload."
    }
  ];


  const fotoKategorien = [
    { name: "Logo", icon: "🎯", beschreibung: "Dein Unternehmenslogo (quadratisch)" },
    { name: "Titelbild", icon: "🖼️", beschreibung: "Hauptbild oben im Profil (16:9)" },
    { name: "Innenansicht", icon: "🏠", beschreibung: "Räumlichkeiten, Einrichtung" },
    { name: "Außenansicht", icon: "🏢", beschreibung: "Gebäude, Eingang, Parkplatz" },
    { name: "Produkte", icon: "📦", beschreibung: "Eure Produkte/Dienstleistungen" },
    { name: "Team", icon: "👥", beschreibung: "Mitarbeiter, Gründer" },
    { name: "Bei der Arbeit", icon: "💼", beschreibung: "Arbeitsszenen, Prozesse" }
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Fotos sind der <strong>erste Eindruck</strong>, den potenzielle Kunden von deinem Unternehmen bekommen. 
        Profile mit hochwertigen Bildern erhalten <strong>42% mehr Wegbeschreibungsanfragen</strong> und 
        <strong>35% mehr Klicks</strong> zur Website. Dieser Guide zeigt dir, wie du deine 
        <LexikonLink term="Google Business Profile">Google Business Fotos</LexikonLink> optimal nutzt.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Profile mit Fotos erhalten 42% mehr Wegbeschreibungsanfragen",
          "Optimale Bildgröße: 1200x900 Pixel (4:3 Format)",
          "Mindestens 10-15 Fotos für ein vollständiges Profil",
          "Regelmäßige Updates signalisieren Aktivität an Google",
          "Alle Foto-Kategorien systematisch abdecken"
        ]}
      />

      {/* Statistik-Karten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">42%</div>
          <p className="text-xs text-muted-foreground">mehr Wegbeschreibungen</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">35%</div>
          <p className="text-xs text-muted-foreground">mehr Website-Klicks</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">2x</div>
          <p className="text-xs text-muted-foreground">mehr Vertrauen</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">10+</div>
          <p className="text-xs text-muted-foreground">Fotos mindestens</p>
        </div>
      </div>

      {/* Warum Fotos */}
      <section id="warum-fotos" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Camera className="h-6 w-6 text-primary" />
          Warum Fotos entscheidend sind
        </h2>

        <p className="text-muted-foreground mb-6">
          Google selbst betont: <strong>Unternehmen mit Fotos erhalten mehr Interaktionen</strong>. 
          Bilder schaffen Vertrauen, zeigen Professionalität und helfen Kunden, eine Kaufentscheidung zu treffen.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Google-Statistik</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Unternehmen mit mehr als 100 Fotos erhalten 520% mehr Anrufe und 2.717% mehr Wegbeschreibungsanfragen 
                als der Durchschnitt. Fotos sind ein echter Ranking-Faktor!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bildformate */}
      <section id="bildformate" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Image className="h-6 w-6 text-primary" />
          Die richtigen Bildformate
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Typ</th>
                <th className="border border-border p-3 text-left">Empfohlene Größe</th>
                <th className="border border-border p-3 text-left">Seitenverhältnis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Logo</td>
                <td className="border border-border p-3">720x720 px</td>
                <td className="border border-border p-3">1:1 (quadratisch)</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Titelbild</td>
                <td className="border border-border p-3">1920x1080 px</td>
                <td className="border border-border p-3">16:9</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Allgemeine Fotos</td>
                <td className="border border-border p-3">1200x900 px</td>
                <td className="border border-border p-3">4:3</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Produktfotos</td>
                <td className="border border-border p-3">1200x1200 px</td>
                <td className="border border-border p-3">1:1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="space-y-2 mb-6">
          {[
            "Format: JPG oder PNG (JPG für Fotos, PNG für Logos)",
            "Maximale Dateigröße: 5 MB pro Bild",
            "Mindestauflösung: 720 x 720 Pixel",
            "Keine Wasserzeichen oder Text im Bild",
            "Keine Stock-Fotos verwenden - nur echte Bilder"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Kategorien */}
      <section id="kategorien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Eye className="h-6 w-6 text-primary" />
          Foto-Kategorien optimal nutzen
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {fotoKategorien.map((kategorie, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{kategorie.icon}</span>
                <span className="font-semibold text-foreground">{kategorie.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{kategorie.beschreibung}</p>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Optimierung */}
      <section id="optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          Bilder SEO-optimieren
        </h2>

        <p className="text-muted-foreground mb-6">
          Vor dem Upload solltest du deine Bilder optimieren für bessere Ladezeiten und SEO:
        </p>

        <ol className="space-y-4 mb-6">
          {[
            { title: "Dateiname optimieren", beschreibung: "Statt 'IMG_1234.jpg' → 'cafe-mueller-innenansicht-berlin.jpg'" },
            { title: "Bilder komprimieren", beschreibung: "TinyPNG oder Squoosh nutzen für kleinere Dateien ohne Qualitätsverlust" },
            { title: "EXIF-Daten prüfen", beschreibung: "Geo-Tags können für Local SEO hilfreich sein" },
            { title: "Konsistenter Stil", beschreibung: "Einheitliche Bildsprache für Wiedererkennungswert" }
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.beschreibung}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Upload-Strategie */}
      <section id="upload-strategie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Upload className="h-6 w-6 text-primary" />
          Upload-Strategie
        </h2>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Empfohlener Upload-Rhythmus:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Wöchentlich:</strong> 1-2 neue Bilder (Projekte, Produkte, Team)</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Monatlich:</strong> Saisonale Dekoration, neue Angebote</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Jährlich:</strong> Alle Grundbilder aktualisieren (Logo, Titelbild)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="gbp-fotos-optimieren" />

      <SourcesSection sources={[
        { title: "Google Business Profile Hilfe", url: "https://support.google.com/business/answer/6123536" },
        { title: "Google: Photo Guidelines", url: "https://support.google.com/business/answer/6103862" }
      ]} />
    </ArticleLayout>
  );
};

export default GbpFotosOptimieren;
