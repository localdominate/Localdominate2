import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BarChart3, Copy, CheckCircle2, AlertTriangle, FileText, TrendingUp,
  Target, Calendar, Eye, Shield, Star, Users, Zap, ArrowRight,
  Download, Clock, PieChart, Activity, Search, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LocalSeoReportingTemplate = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-reporting-template", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "warum-reporting", title: "Warum Local SEO Reporting?" },
    { id: "kpi-uebersicht", title: "Die wichtigsten KPIs" },
    { id: "monatlicher-report", title: "Monatlicher Report-Aufbau" },
    { id: "gbp-metriken", title: "Google Business Metriken" },
    { id: "ranking-tracking", title: "Ranking-Tracking" },
    { id: "bewertungen-tracking", title: "Bewertungen tracken" },
    { id: "citations-audit", title: "Citations & NAP-Audit" },
    { id: "traffic-conversions", title: "Traffic & Conversions" },
    { id: "wettbewerber-vergleich", title: "Wettbewerber-Vergleich" },
    { id: "tools", title: "Kostenlose Tools" },
    { id: "vorlage", title: "Report-Vorlage zum Download" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Wie oft sollte ich einen Local SEO Report erstellen?", answer: "Monatlich ist der Standard. Für aktive Kampagnen kann ein wöchentliches Mini-Reporting sinnvoll sein. Quartals-Reports eignen sich für strategische Übersichten. Wichtig ist Konsistenz – nur regelmäßige Reports zeigen Trends und ermöglichen fundierte Entscheidungen." },
    { question: "Welche KPIs sind für Local SEO am wichtigsten?", answer: "Die Top-5 KPIs sind: 1) Google Business Profil-Aufrufe (Discovery + Direkt), 2) Klicks auf Anrufe/Route/Website aus GBP, 3) Lokale Keyword-Rankings (Top 3 / Local Pack), 4) Bewertungsanzahl und Durchschnitt, 5) Organischer Traffic aus lokalen Suchanfragen. Diese KPIs decken Sichtbarkeit, Engagement und Conversion ab." },
    { question: "Welche kostenlosen Tools kann ich für Local SEO Reporting nutzen?", answer: "Google Business Profile Insights (direkt im Profil), Google Search Console (Suchanfragen + Klicks), Google Analytics 4 (Traffic + Conversions), Google Looker Studio (Dashboard-Erstellung), BrightLocal Free Tools (Citation-Check). Für Keyword-Tracking gibt es kostenlose Alternativen wie Ubersuggest (3 Abfragen/Tag) oder den Google Keyword Planner." },
    { question: "Was gehört in einen Local SEO Report für Kunden?", answer: "Ein Kunden-Report sollte enthalten: Executive Summary (3-5 Sätze), KPI-Dashboard mit Vormonat-Vergleich, GBP Performance (Aufrufe, Aktionen, Fotos), Ranking-Entwicklung für Top-Keywords, Bewertungs-Update, durchgeführte Maßnahmen, nächste Schritte und Empfehlungen. Halten Sie es visuell und vermeiden Sie Fachjargon." },
    { question: "Wie tracke ich lokale Rankings korrekt?", answer: "Lokale Rankings variieren je nach Standort des Suchenden. Nutzen Sie Tools, die standortbasierte Rankings messen (z.B. mit PLZ oder GPS-Koordinaten). Tracken Sie sowohl das Local Pack (Maps-Ergebnisse) als auch organische Rankings separat. Messen Sie mindestens wöchentlich und notieren Sie den genauen Messstandort für Konsistenz." },
    { question: "Wie messe ich den ROI von Local SEO?", answer: "ROI = (Umsatz durch Local SEO - Kosten) / Kosten × 100. Tracken Sie: Anrufe über GBP (mit Call-Tracking), Routenanfragen, Website-Besuche aus lokaler Suche, Formular-Anfragen mit UTM-Parametern. Weisen Sie Durchschnittswerte pro Lead/Anruf zu. Eine Zahnarztpraxis mit 50€ pro Neupatienten-Wert und 20 Anfragen/Monat erzielt 1.000€ Mehrwert." },
    { question: "Sollte ich automatisierte Reports verwenden?", answer: "Ja, für die Datensammlung. Tools wie Google Looker Studio ziehen Daten automatisch. Aber: Die Analyse und Empfehlungen sollten manuell sein. Automatisierte Reports ohne Kontext und Handlungsempfehlungen sind für Kunden wertlos. Die beste Lösung: Automatisierte Datenbasis + manuelle Insights." },
    { question: "Wie vergleiche ich mich mit Wettbewerbern im Report?", answer: "Tracken Sie 3-5 lokale Hauptkonkurrenten. Vergleichen Sie: Anzahl Google-Bewertungen + Durchschnitt, GBP-Vollständigkeit, Keyword-Rankings im Local Pack, Anzahl lokaler Citations, Website-Autorität (DA/DR). Tools wie BrightLocal oder Whitespark ermöglichen automatische Wettbewerber-Vergleiche." },
    { question: "Was ist der Unterschied zwischen GBP Insights und GA4 Daten?", answer: "GBP Insights zeigt Interaktionen direkt im Google-Profil: Aufrufe, Suchanfragen, Klicks auf Anruf/Route/Website. GA4 zeigt, was danach auf Ihrer Website passiert: Seitenaufrufe, Verweildauer, Conversions. Beide ergänzen sich – GBP misst die Sichtbarkeit, GA4 die Website-Performance. Beides gehört in den Report." },
    { question: "Wie präsentiere ich negative Trends im Report?", answer: "Ehrlich und lösungsorientiert. Zeigen Sie: 1) Was ist passiert (Daten), 2) Warum (Analyse), 3) Was wir dagegen tun (Maßnahmen). Beispiel: 'Rankings für Keyword X fielen um 3 Positionen – Ursache: Neuer Wettbewerber mit mehr Bewertungen. Maßnahme: Bewertungskampagne starten.' Kunden schätzen Transparenz mehr als geschönte Berichte." }
  ];

  const CopyButton = ({ code, label }: { code: string; label?: string }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      toast.success("Vorlage kopiert!");
    };
    return (
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        <Copy className="h-3.5 w-3.5" /> {label || "Kopieren"}
      </Button>
    );
  };

  const monthlyReportTemplate = `# Local SEO Monatsbericht – [Unternehmensname]
## Berichtszeitraum: [Monat Jahr]
## Erstellt am: [Datum]

---

## 1. Executive Summary
- Gesamtbewertung: [⬆️ Positiv / ➡️ Neutral / ⬇️ Negativ]
- Highlights: [Top 2-3 Erfolge]
- Handlungsbedarf: [Top 1-2 Maßnahmen]

---

## 2. KPI-Dashboard

| KPI | Vormonat | Aktuell | Veränderung |
|-----|----------|---------|-------------|
| GBP Aufrufe (gesamt) | | | |
| GBP Suchanfragen | | | |
| Anrufe über GBP | | | |
| Routenanfragen | | | |
| Website-Klicks (GBP) | | | |
| Bewertungen (Anzahl) | | | |
| Bewertungs-Durchschnitt | | | |
| Local Pack Rankings (Top 3) | | | |
| Organischer Traffic (lokal) | | | |
| Conversions (Anfragen) | | | |

---

## 3. Google Business Profil Performance

### 3.1 Profil-Aufrufe
- Direkte Suche: [Anzahl] ([+/- %])
- Discovery (Entdeckung): [Anzahl] ([+/- %])
- Branded vs. Unbranded: [Verhältnis]

### 3.2 Kundenaktionen
- Anrufe: [Anzahl]
- Routenanfragen: [Anzahl]
- Website-Besuche: [Anzahl]
- Nachrichten: [Anzahl]

### 3.3 Fotos
- Eigene Fotos: [Anzahl] | Aufrufe: [Anzahl]
- Kunden-Fotos: [Anzahl]

---

## 4. Ranking-Entwicklung

### 4.1 Local Pack Rankings (Top 3)
| Keyword | Position VM | Position aktuell | Trend |
|---------|------------|-----------------|-------|
| [Keyword 1] | | | |
| [Keyword 2] | | | |
| [Keyword 3] | | | |

### 4.2 Organische Rankings
| Keyword | Position VM | Position aktuell | Trend |
|---------|------------|-----------------|-------|
| [Keyword 1] | | | |
| [Keyword 2] | | | |

---

## 5. Bewertungen

- Neue Bewertungen: [Anzahl]
- Durchschnitt neue Bewertungen: [Sterne]
- Gesamtdurchschnitt: [Sterne] ([Anzahl] gesamt)
- Unbeantwortete Bewertungen: [Anzahl]
- Negative Bewertungen: [Anzahl] – Status: [beantwortet/offen]

---

## 6. Wettbewerber-Vergleich

| Metrik | Wir | Wettb. 1 | Wettb. 2 | Wettb. 3 |
|--------|-----|----------|----------|----------|
| GBP Bewertungen | | | | |
| Durchschnitt | | | | |
| Local Pack Position | | | | |

---

## 7. Durchgeführte Maßnahmen
- [ ] [Maßnahme 1]
- [ ] [Maßnahme 2]
- [ ] [Maßnahme 3]

## 8. Empfehlungen & nächste Schritte
1. [Priorität 1]
2. [Priorität 2]
3. [Priorität 3]`;

  const weeklyChecklist = `# Wöchentliche Local SEO Checkliste

## Montag – Bewertungen
- [ ] Neue Bewertungen prüfen und beantworten
- [ ] Bewertungs-Score dokumentieren
- [ ] Fake-Bewertungen melden (falls vorhanden)

## Dienstag – GBP Updates
- [ ] Google Business Profil auf Änderungen prüfen
- [ ] Neuen Google Post erstellen
- [ ] Fotos hochladen (1-2 pro Woche)

## Mittwoch – Rankings
- [ ] Keyword-Rankings checken (Local Pack + organisch)
- [ ] Wettbewerber-Rankings vergleichen
- [ ] Neue Keyword-Chancen notieren

## Donnerstag – Content & Citations
- [ ] Lokalen Blog-Content planen/erstellen
- [ ] NAP-Konsistenz stichprobenartig prüfen
- [ ] Neue Citation-Möglichkeiten recherchieren

## Freitag – Analytics & Reporting
- [ ] GA4 Traffic-Daten prüfen
- [ ] GBP Insights checken
- [ ] Wöchentliches Mini-Update erstellen`;

  const kpiDashboardCode = `// Google Looker Studio – Datenquellen verbinden

// 1. Google Business Profile API (über Google Sheets)
// GBP Insights → Google Sheets (automatisiert) → Looker Studio

// 2. Google Search Console API
// Suchleistung → Filter: lokale Keywords → Looker Studio

// 3. Google Analytics 4
// GA4 → Looker Studio Connector → Dashboard

// Empfohlene Metriken für das Dashboard:
const localSeoKPIs = {
  sichtbarkeit: {
    gbpAufrufe: "Google Business Profil Impressionen",
    localPackRankings: "Anzahl Keywords in Top 3",
    organischeRankings: "Durchschnittliche Position",
    searchConsoleKlicks: "Klicks aus lokaler Suche"
  },
  engagement: {
    anrufe: "Telefonanrufe über GBP",
    routenanfragen: "Wegbeschreibung-Anfragen",
    websiteKlicks: "Website-Besuche aus GBP",
    bewertungen: "Neue Bewertungen pro Monat"
  },
  conversion: {
    formularAnfragen: "Kontaktformular-Einsendungen",
    terminbuchungen: "Online-Terminbuchungen",
    umsatzLokal: "Umsatz aus lokaler Suche",
    costPerLead: "Kosten pro Anfrage"
  }
};`;

  const roiCalculation = `# ROI-Berechnung für Local SEO

## Schritt 1: Werte definieren
- Durchschnittlicher Kundenwert: [z.B. 500€]
- Conversion Rate Website: [z.B. 5%]
- Monatliche SEO-Kosten: [z.B. 800€]

## Schritt 2: Traffic bewerten
- Lokale organische Besucher/Monat: [z.B. 2.000]
- GBP-Interaktionen/Monat: [z.B. 500]
- Geschätzte Anfragen: [z.B. 2.500 × 5% = 125]

## Schritt 3: Umsatz berechnen
- Anfragen × Abschlussrate (30%): 125 × 0.3 = 37,5 Neukunden
- Neukunden × Kundenwert: 37,5 × 500€ = 18.750€

## Schritt 4: ROI berechnen
- ROI = (18.750€ - 800€) / 800€ × 100 = 2.243%
- Return pro investiertem Euro: 23,44€`;

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Intro */}
      <section id="intro" className="mb-12">
        <AutoLexikonParagraph>
          Ohne Reporting kein Fortschritt. Ein professioneller Local SEO Report zeigt nicht nur, 
          wo Ihr Unternehmen steht, sondern auch wohin die Reise geht. Ob für die eigene 
          Erfolgskontrolle oder als Agentur-Report für Kunden – wer die richtigen KPIs trackt, 
          trifft bessere Entscheidungen und weist den ROI lokaler Suchmaschinenoptimierung nach.
        </AutoLexikonParagraph>

        <Card className="bg-primary/5 border-primary/20 mt-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Download className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Was Sie in diesem Guide erhalten</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Komplette monatliche Report-Vorlage zum Kopieren</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 10 essenzielle KPIs mit Erklärungen</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Wöchentliche Tracking-Checkliste</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> ROI-Berechnungsformel für Local SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Wettbewerber-Vergleich Framework</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Kostenlose Tool-Empfehlungen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="intro" articleSlug="local-seo-reporting-template" />

      {/* Warum Reporting */}
      <section id="warum-reporting" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          Warum Local SEO Reporting unverzichtbar ist
        </h2>

        <AutoLexikonParagraph>
          Viele Unternehmen betreiben Local SEO, messen aber nicht systematisch. Das führt dazu, 
          dass erfolgreiche Maßnahmen nicht wiederholt und ineffektive nicht gestoppt werden. 
          Ein strukturiertes Reporting löst genau dieses Problem.
        </AutoLexikonParagraph>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: TrendingUp, title: "Fortschritt sichtbar machen", desc: "Zeigen Sie monatlich, wie sich Rankings, Sichtbarkeit und Anfragen entwickeln." },
            { icon: Target, title: "ROI nachweisen", desc: "Beweisen Sie den Wert Ihrer SEO-Investition mit konkreten Zahlen." },
            { icon: Activity, title: "Trends erkennen", desc: "Saisonale Muster, Wettbewerber-Bewegungen und Algorithmus-Updates frühzeitig identifizieren." },
            { icon: Zap, title: "Bessere Entscheidungen", desc: "Datenbasiert priorisieren statt nach Bauchgefühl optimieren." }
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* KPI Übersicht */}
      <section id="kpi-uebersicht" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          Die 10 wichtigsten Local SEO KPIs
        </h2>

        <AutoLexikonParagraph>
          Nicht jede Metrik ist gleich wichtig. Konzentrieren Sie sich auf KPIs, die tatsächlich 
          Geschäftsergebnisse widerspiegeln. Hier sind die 10 wichtigsten, geordnet nach Relevanz:
        </AutoLexikonParagraph>

        <div className="space-y-4 mt-6">
          {[
            { nr: 1, kpi: "Google Business Profil Aufrufe", kategorie: "Sichtbarkeit", beschreibung: "Gesamtzahl der Profilansichten (Discovery + Direkt + Branded). Zeigt die Reichweite Ihres GBP-Profils.", quelle: "GBP Insights", prioritaet: "Kritisch" },
            { nr: 2, kpi: "GBP Kundenaktionen", kategorie: "Engagement", beschreibung: "Anrufe, Routenanfragen und Website-Klicks direkt aus Google. Misst echte Kundeninteraktion.", quelle: "GBP Insights", prioritaet: "Kritisch" },
            { nr: 3, kpi: "Local Pack Rankings", kategorie: "Sichtbarkeit", beschreibung: "Position in den lokalen 3er-Ergebnissen (Maps) für Ihre Hauptkeywords. Top 3 = sichtbar.", quelle: "Rank Tracker", prioritaet: "Kritisch" },
            { nr: 4, kpi: "Bewertungsanzahl & Durchschnitt", kategorie: "Reputation", beschreibung: "Neue Bewertungen pro Monat und aktueller Durchschnitt. Direkt ranking-relevant.", quelle: "GBP", prioritaet: "Hoch" },
            { nr: 5, kpi: "Organischer Traffic (lokal)", kategorie: "Traffic", beschreibung: "Website-Besucher aus lokalen Suchanfragen. Filter in GA4 nach Stadt/Region.", quelle: "GA4 + GSC", prioritaet: "Hoch" },
            { nr: 6, kpi: "Conversion Rate", kategorie: "Conversion", beschreibung: "Anteil der Website-Besucher, die eine Anfrage stellen oder anrufen.", quelle: "GA4", prioritaet: "Hoch" },
            { nr: 7, kpi: "NAP-Konsistenz Score", kategorie: "Technical", beschreibung: "Prozentsatz korrekter Name-Adresse-Telefon Einträge über alle Verzeichnisse.", quelle: "Manuell/BrightLocal", prioritaet: "Mittel" },
            { nr: 8, kpi: "Organische Keyword-Rankings", kategorie: "Sichtbarkeit", beschreibung: "Position in den normalen (nicht-Maps) Suchergebnissen für lokale Keywords.", quelle: "GSC / Rank Tracker", prioritaet: "Mittel" },
            { nr: 9, kpi: "Citation Count", kategorie: "Off-Page", beschreibung: "Anzahl Ihrer Einträge in lokalen Branchenverzeichnissen.", quelle: "BrightLocal / Manuell", prioritaet: "Mittel" },
            { nr: 10, kpi: "Cost per Lead (lokal)", kategorie: "ROI", beschreibung: "SEO-Kosten geteilt durch Anzahl lokaler Anfragen. Benchmarking-Wert.", quelle: "Kalkulation", prioritaet: "Mittel" }
          ].map((item) => (
            <Card key={item.nr} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {item.nr}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold">{item.kpi}</h3>
                      <Badge variant={item.prioritaet === "Kritisch" ? "destructive" : item.prioritaet === "Hoch" ? "default" : "secondary"}>
                        {item.prioritaet}
                      </Badge>
                      <Badge variant="outline">{item.kategorie}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.beschreibung}</p>
                    <span className="text-xs text-muted-foreground">Quelle: {item.quelle}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Monatlicher Report */}
      <section id="monatlicher-report" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Monatlicher Report – Komplette Vorlage
        </h2>

        <AutoLexikonParagraph>
          Hier ist die komplette Vorlage für Ihren monatlichen Local SEO Report. 
          Kopieren Sie sie und passen Sie sie an Ihr Unternehmen an. Die Vorlage 
          deckt alle relevanten Bereiche ab – von der Executive Summary bis zu konkreten Empfehlungen.
        </AutoLexikonParagraph>

        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Monatlicher Local SEO Report
              </h3>
              <CopyButton code={monthlyReportTemplate} label="Vorlage kopieren" />
            </div>
            <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed max-h-96 overflow-y-auto">
              <code>{monthlyReportTemplate}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* GBP Metriken */}
      <section id="gbp-metriken" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Google Business Profil Metriken richtig lesen
        </h2>

        <AutoLexikonParagraph>
          Das <LexikonLink term="Google Business Profile" /> bietet wertvolle Insights direkt 
          im Dashboard. Doch nicht alle Metriken sind offensichtlich. Hier erfahren Sie, 
          welche Zahlen wirklich zählen und wie Sie sie interpretieren.
        </AutoLexikonParagraph>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Search className="h-4 w-4 text-primary" />
                Suchanfragen
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Direkte Suche:</strong> Nutzer suchen Ihren Namen → Brand-Bekanntheit</li>
                <li><strong>Discovery:</strong> Nutzer suchen Kategorie/Service → Local SEO Erfolg</li>
                <li><strong>Ziel:</strong> Discovery-Anteil über 60%</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                Profilansichten
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Suche:</strong> Ansichten in Google Suche</li>
                <li><strong>Maps:</strong> Ansichten in Google Maps</li>
                <li><strong>Ziel:</strong> Monat-für-Monat Wachstum von 5-10%</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Aktionen
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Anrufe:</strong> Direkter Kundenkontakt</li>
                <li><strong>Route:</strong> Kaufabsicht-Signal</li>
                <li><strong>Aktionsrate:</strong> Aktionen ÷ Aufrufe (Ziel: &gt;5%)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ranking Tracking */}
      <section id="ranking-tracking" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          Ranking-Tracking für lokale Suchergebnisse
        </h2>

        <AutoLexikonParagraph>
          Lokale Rankings sind komplexer als nationale. Die Position variiert je nach 
          Standort des Suchenden, Tageszeit und Gerät. Für aussagekräftige Daten müssen 
          Sie standortbasiert messen.
        </AutoLexikonParagraph>

        <Card className="bg-accent/30 border-accent mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Best Practices für lokales Ranking-Tracking</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Messen Sie vom Unternehmensstandort (PLZ/GPS)",
                "Tracken Sie Local Pack und organisch separat",
                "Mindestens 10-15 Keywords pro Standort",
                "Wöchentlich messen, monatlich reporten",
                "Mobile und Desktop getrennt tracken",
                "Wettbewerber-Keywords mit überwachen",
                "Saisonale Schwankungen berücksichtigen",
                "Screenshots für Ranking-Nachweise speichern"
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="middle" articleSlug="local-seo-reporting-template" />

      {/* Bewertungen Tracking */}
      <section id="bewertungen-tracking" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Star className="h-8 w-8 text-primary" />
          Bewertungen systematisch tracken
        </h2>

        <AutoLexikonParagraph>
          <LexikonLink term="Google Bewertungen" /> sind ein Top-3-Rankingfaktor für das Local Pack. 
          Tracken Sie nicht nur die Anzahl, sondern auch Qualität, Antwortrate und Sentiment.
        </AutoLexikonParagraph>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Bewertungs-Tracking Metriken</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">Metrik</th>
                    <th className="text-left py-2 pr-4 font-semibold">Was messen?</th>
                    <th className="text-left py-2 font-semibold">Benchmark</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Neue Bewertungen/Monat</td><td className="py-2 pr-4">Wachstumsrate</td><td className="py-2">5-10 pro Monat</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Durchschnitt (neu)</td><td className="py-2 pr-4">Qualität neuer Bewertungen</td><td className="py-2">≥ 4.5 Sterne</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Gesamtdurchschnitt</td><td className="py-2 pr-4">Langfristige Reputation</td><td className="py-2">≥ 4.3 Sterne</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Antwortrate</td><td className="py-2 pr-4">% beantwortete Reviews</td><td className="py-2">100%</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Antwortzeit</td><td className="py-2 pr-4">Stunden bis zur Antwort</td><td className="py-2">&lt; 24 Stunden</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Negative Bewertungen</td><td className="py-2 pr-4">Anzahl 1-2 Sterne</td><td className="py-2">&lt; 5% aller Reviews</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Citations Audit */}
      <section id="citations-audit" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          Citations & NAP-Konsistenz Audit
        </h2>

        <AutoLexikonParagraph>
          <LexikonLink term="NAP-Konsistenz" /> (Name, Adresse, Telefon) über alle Verzeichnisse 
          ist ein fundamentaler Rankingfaktor. Integrieren Sie einen Citation-Audit in jeden 
          monatlichen Report.
        </AutoLexikonParagraph>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Citation-Audit Checkliste</h3>
            <div className="space-y-3">
              {[
                { check: "Google Business Profile", detail: "Name, Adresse, Telefon, Öffnungszeiten korrekt" },
                { check: "Apple Maps", detail: "Eintrag vorhanden und aktuell" },
                { check: "Bing Places", detail: "Eintrag vorhanden und aktuell" },
                { check: "Yelp", detail: "Profil beansprucht, NAP korrekt" },
                { check: "Branchenspezifische Verzeichnisse", detail: "Top 5 der Branche geprüft" },
                { check: "Lokale Verzeichnisse", detail: "Stadtportale, Kammern, Verbände" },
                { check: "Social Media Profile", detail: "Facebook, Instagram, LinkedIn – NAP einheitlich" },
                { check: "Eigene Website", detail: "Kontaktseite, Footer, Impressum konsistent" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{item.check}</span>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground mt-4">
          Mehr zum Thema: <Link to="/blog/nap-konsistenz-local-seo" className="text-primary hover:underline">NAP-Konsistenz Guide →</Link> | 
          <Link to="/blog/local-citations-2025" className="text-primary hover:underline ml-1">Local Citations Guide →</Link>
        </p>
      </section>

      {/* Traffic & Conversions */}
      <section id="traffic-conversions" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <PieChart className="h-8 w-8 text-primary" />
          Traffic & Conversions messen
        </h2>

        <AutoLexikonParagraph>
          Google Analytics 4 und die Search Console sind Ihre besten Freunde für Traffic-Analyse. 
          Filtrate nach lokalen Suchanfragen und Regionen, um den echten Local-SEO-Impact zu messen.
        </AutoLexikonParagraph>

        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                KPI-Dashboard Setup (Konzept)
              </h3>
              <CopyButton code={kpiDashboardCode} label="Code kopieren" />
            </div>
            <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{kpiDashboardCode}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                ROI-Berechnung für Local SEO
              </h3>
              <CopyButton code={roiCalculation} label="Formel kopieren" />
            </div>
            <pre className="bg-background rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{roiCalculation}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Wettbewerber-Vergleich */}
      <section id="wettbewerber-vergleich" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          Wettbewerber-Vergleich Framework
        </h2>

        <AutoLexikonParagraph>
          Ein Report ohne Wettbewerber-Kontext ist nur die halbe Wahrheit. Benchmarken Sie 
          sich gegen 3-5 lokale Konkurrenten, um Ihre Position realistisch einzuschätzen.
        </AutoLexikonParagraph>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Wettbewerber-Analyse Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">Faktor</th>
                    <th className="text-left py-2 pr-4 font-semibold">Was prüfen?</th>
                    <th className="text-left py-2 font-semibold">Tool</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Bewertungen</td><td className="py-2 pr-4">Anzahl, Durchschnitt, Antwortrate</td><td className="py-2">GBP manuell</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">GBP-Profil</td><td className="py-2 pr-4">Vollständigkeit, Posts, Fotos</td><td className="py-2">GBP manuell</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Local Pack Position</td><td className="py-2 pr-4">Ranking für Hauptkeywords</td><td className="py-2">Rank Tracker</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Website-Qualität</td><td className="py-2 pr-4">Ladezeit, Mobile, Content</td><td className="py-2">PageSpeed Insights</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium text-foreground">Backlinks</td><td className="py-2 pr-4">Domain Authority, lokale Links</td><td className="py-2">Ahrefs / Moz Free</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Citations</td><td className="py-2 pr-4">Anzahl, Konsistenz</td><td className="py-2">BrightLocal</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Zap className="h-8 w-8 text-primary" />
          Kostenlose Tools für Local SEO Reporting
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Google Business Profile", kosten: "Kostenlos", funktion: "GBP Insights, Suchanfragen, Kundenaktionen", link: "business.google.com" },
            { name: "Google Search Console", kosten: "Kostenlos", funktion: "Suchanfragen, Klicks, Positionen, Crawl-Daten", link: "search.google.com/search-console" },
            { name: "Google Analytics 4", kosten: "Kostenlos", funktion: "Traffic, Conversions, Nutzerverhalten, Events", link: "analytics.google.com" },
            { name: "Google Looker Studio", kosten: "Kostenlos", funktion: "Dashboard-Erstellung, automatisierte Reports", link: "lookerstudio.google.com" },
            { name: "BrightLocal", kosten: "Ab 35$/Monat", funktion: "Ranking-Tracking, Citation-Audit, GBP-Audit", link: "brightlocal.com" },
            { name: "Whitespark", kosten: "Ab 20$/Monat", funktion: "Local Rank Tracker, Citation Finder", link: "whitespark.ca" }
          ].map((tool, i) => (
            <Card key={i} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{tool.name}</h3>
                  <Badge variant={tool.kosten === "Kostenlos" ? "default" : "secondary"}>{tool.kosten}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{tool.funktion}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Alle Tools im Detail: <Link to="/blog/seo-toolbox-kostenlose-ressourcen" className="text-primary hover:underline">Kostenlose SEO Toolbox →</Link>
        </p>
      </section>

      {/* Wöchentliche Checkliste */}
      <section id="vorlage" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Clock className="h-8 w-8 text-primary" />
          Wöchentliche Tracking-Checkliste
        </h2>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Wöchentliche Local SEO Checkliste
              </h3>
              <CopyButton code={weeklyChecklist} label="Checkliste kopieren" />
            </div>
            <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed max-h-80 overflow-y-auto">
              <code>{weeklyChecklist}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="end" articleSlug="local-seo-reporting-template" />

      {/* Häufige Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          Häufige Reporting-Fehler vermeiden
        </h2>

        <div className="space-y-3">
          {[
            { fehler: "Vanity Metrics reporten", loesung: "Fokus auf KPIs mit Geschäfts-Impact (Anrufe, Anfragen, Umsatz) statt auf reine Impressionen." },
            { fehler: "Keine Vormonat-Vergleiche", loesung: "Jede Zahl braucht Kontext. Zeigen Sie immer den Vergleich zum Vormonat und Vorjahresmonat." },
            { fehler: "Saisonalität ignorieren", loesung: "Ein Eisdiele hat im Winter weniger Suchanfragen – das ist kein SEO-Fehler. Vergleichen Sie Year-over-Year." },
            { fehler: "Ranking ohne Standortangabe", loesung: "Lokale Rankings variieren nach PLZ. Messen Sie immer vom gleichen Standort und dokumentieren Sie diesen." },
            { fehler: "Report ohne Handlungsempfehlungen", loesung: "Daten ohne Kontext sind wertlos. Jeder Report braucht 3-5 konkrete nächste Schritte." },
            { fehler: "Zu viele Metriken", loesung: "10 KPIs sind genug. Mehr Zahlen verwirren Kunden und verwässern die Kernaussage." },
            { fehler: "GBP und GA4 nicht verknüpfen", loesung: "UTM-Parameter für GBP-Website-Links nutzen, um den Traffic in GA4 korrekt zuzuordnen." },
            { fehler: "Kein Wettbewerber-Kontext", loesung: "Ihre Rankings sind nur so gut wie die der Konkurrenz. Immer 3-5 Wettbewerber benchmarken." }
          ].map((item, i) => (
            <Card key={i} className="border-destructive/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-destructive">{item.fehler}</span>
                    <p className="text-sm text-muted-foreground mt-1">✅ {item.loesung}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Verwandte Artikel */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Weiterführende Artikel</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Local SEO Audit Checkliste", slug: "/blog/local-seo-audit-checkliste", icon: "📋" },
            { title: "Google Business Insights verstehen", slug: "/blog/google-business-insights-verstehen", icon: "📊" },
            { title: "NAP-Konsistenz Guide", slug: "/blog/nap-konsistenz-local-seo", icon: "📍" },
            { title: "Kostenlose SEO Toolbox", slug: "/blog/seo-toolbox-kostenlose-ressourcen", icon: "🧰" }
          ].map((item, i) => (
            <Link key={i} to={item.slug} className="group">
              <Card className="hover:border-primary/30 transition-colors h-full">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium group-hover:text-primary transition-colors">{item.title}</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-reporting-template" />
    </ArticleLayout>
  );
};

export default LocalSeoReportingTemplate;
