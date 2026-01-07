import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, Mic, Search, Smartphone, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";

const LokaleSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("lokale-suchmaschinenoptimierung-2026", language)!;

  const tocItems = [
    { id: "trends", title: "Die wichtigsten Trends 2026" },
    { id: "ki", title: "KI und lokale Suche" },
    { id: "voice", title: "Voice Search Optimierung" },
    { id: "zero-click", title: "Zero-Click-Searches nutzen" },
    { id: "faq", title: "Häufig gestellte Fragen" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>Lokale Suchmaschinenoptimierung entwickelt sich rasant weiter.</strong> Was 2024 funktioniert hat, ist 2026 vielleicht schon veraltet. Dieser Artikel zeigt dir die neuesten Trends und wie du dein lokales Unternehmen zukunftssicher aufstellst.
      </p>

      <section id="trends" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Die wichtigsten Trends 2026
        </h2>
        <p className="mb-6">
          Die lokale Suche verändert sich grundlegend. Diese fünf Trends werden 2026 dominieren:
        </p>

        <div className="space-y-4">
          {[
            { 
              icon: Sparkles, 
              title: "KI-gestützte Suchergebnisse", 
              desc: "Google AI Overviews beeinflussen, wie lokale Ergebnisse angezeigt werden. Strukturierte Daten werden wichtiger denn je." 
            },
            { 
              icon: Mic, 
              title: "Voice Search wächst weiter", 
              desc: "30% aller Suchanfragen erfolgen per Sprache. Natürliche Sprache und Frage-Keywords gewinnen an Bedeutung." 
            },
            { 
              icon: Search, 
              title: "Hyper-lokale Suche", 
              desc: "Suchanfragen werden noch spezifischer: 'Café mit Hafermilch in der Nähe vom Hauptbahnhof' statt nur 'Café'." 
            },
            { 
              icon: Smartphone, 
              title: "Mobile-First ist Standard", 
              desc: "Über 70% der lokalen Suchen erfolgen mobil. Desktop-Optimierung ist nur noch Nebensache." 
            },
            { 
              icon: TrendingUp, 
              title: "Bewertungsqualität über Quantität", 
              desc: "Google bewertet den Inhalt von Rezensionen, nicht nur die Anzahl. Detaillierte Reviews zählen mehr." 
            },
          ].map((trend, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <trend.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{trend.title}</h3>
                <p className="text-muted-foreground">{trend.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ki" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          KI und lokale Suche
        </h2>
        <p className="mb-4">
          Künstliche Intelligenz verändert, wie Google lokale Ergebnisse generiert und anzeigt. Das bedeutet neue Chancen und Herausforderungen.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Google AI Overviews</h3>
        <p className="mb-4">
          Googles KI fasst Informationen aus verschiedenen Quellen zusammen und zeigt sie direkt in den Suchergebnissen. Für lokale Unternehmen bedeutet das:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Strukturierte Daten (Schema.org) sind entscheidend für die KI-Erkennung</li>
          <li>Klare, gut strukturierte Inhalte werden bevorzugt</li>
          <li>FAQ-Bereiche auf der Website können von der KI zitiert werden</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personalisierte Empfehlungen</h3>
        <p className="mb-4">
          Google nutzt KI, um personalisierte lokale Empfehlungen zu geben. Basierend auf Suchhistorie, Standort und Präferenzen werden unterschiedliche Ergebnisse angezeigt.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Praxis-Tipp:</strong>
              <p className="text-muted-foreground mt-1">
                Stelle sicher, dass dein Google Business Profil alle Attribute enthält, die für deine Zielgruppe relevant sind (z.B. "kinderfreundlich", "hundefreundlich", "vegane Optionen").
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      <section id="voice" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Voice Search Optimierung
        </h2>
        <p className="mb-4">
          "Hey Google, welcher Friseur in der Nähe hat die besten Bewertungen?" – Voice Search verändert, wie Menschen suchen.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Unterschiede zur Text-Suche</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted/50 rounded-xl">
            <h4 className="font-medium text-foreground mb-2">Text-Suche</h4>
            <p className="text-sm text-muted-foreground">"Friseur Berlin Mitte"</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl">
            <h4 className="font-medium text-foreground mb-2">Voice-Suche</h4>
            <p className="text-sm text-muted-foreground">"Welcher Friseur in Berlin Mitte hat heute noch einen Termin frei?"</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">So optimierst du für Voice Search</h3>
        <div className="space-y-3">
          {[
            "Beantworte häufige Fragen in deiner Unternehmensbeschreibung",
            "Nutze natürliche Sprache statt Keyword-Stuffing",
            "Füge FAQ-Bereiche mit vollständigen Frage-Antwort-Paaren hinzu",
            "Halte Öffnungszeiten und Kontaktdaten aktuell",
            "Optimiere für lokale Long-Tail-Keywords",
          ].map((tip, index) => (
            <div key={index} className="flex items-center gap-3">
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="zero-click" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Zero-Click-Searches nutzen
        </h2>
        <p className="mb-4">
          Über 50% aller Google-Suchen enden ohne Klick auf eine Website. Die Nutzer finden alle Infos direkt in den Suchergebnissen. Das ist keine Bedrohung – es ist eine Chance.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Warum Zero-Click gut für dich ist</h3>
        <p className="mb-4">
          Wenn ein Kunde deine Öffnungszeiten, Telefonnummer oder Adresse direkt in Google sieht, ist das ein Erfolg. Er braucht nicht auf deine Website zu klicken, um zu handeln.
        </p>

        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">Optimierung für Zero-Click:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Business Profil vollständig ausfüllen</strong> – jede Information zählt</li>
            <li><strong>Produkte und Dienstleistungen mit Preisen</strong> – Kunden können direkt entscheiden</li>
            <li><strong>Reservierungs- und Buchungslinks</strong> – direkter Weg zur Conversion</li>
            <li><strong>FAQ in Google stellen</strong> – selbst Fragen beantworten</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Die wichtigsten Zero-Click-Aktionen</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { action: "Anrufen", desc: "Click-to-Call direkt aus Google" },
            { action: "Route", desc: "Navigation zur Adresse starten" },
            { action: "Buchen", desc: "Termin oder Tisch reservieren" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="text-xl font-bold text-primary mb-1">{item.action}</div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Muss ich meine SEO-Strategie komplett ändern?
            </h3>
            <p className="text-muted-foreground">
              Nein, die Grundlagen bleiben gleich: vollständiges Google Profil, gute Bewertungen, konsistente NAP-Daten. Die neuen Trends sind Ergänzungen, keine Ersetzungen.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Wie bereite ich mich auf KI-Suche vor?
            </h3>
            <p className="text-muted-foreground">
              Strukturiere deine Inhalte klar, nutze Schema.org Markup und beantworte häufige Fragen direkt auf deiner Website und im Google Profil.
            </p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2">
              Ist Voice Search wirklich so wichtig?
            </h3>
            <p className="text-muted-foreground">
              Für lokale Suchen ja. "In der Nähe" und "jetzt geöffnet" Anfragen erfolgen oft per Sprache, besonders unterwegs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Was ist der wichtigste SEO-Trend 2026?
            </h3>
            <p className="text-muted-foreground">
              Nutzererfahrung. Google misst immer genauer, ob Kunden bei dir finden, was sie suchen. Zufriedene Kunden = besseres Ranking.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LokaleSeo2026;
