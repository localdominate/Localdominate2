import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2, MapPin, Star, Globe, Building2, Search, Eye,
  Shield, LinkIcon, Smartphone, Code, BarChart3, FileText, Target,
  Clock, Zap, AlertTriangle, Copy
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "google-maps-audit-progress";

interface AuditSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: { text: string; priority: "kritisch" | "hoch" | "mittel" }[];
}

const auditSections: AuditSection[] = [
  {
    id: "gbp-profil",
    title: "1. Google Business Profil – Vollständigkeit",
    icon: <Building2 className="h-5 w-5 text-primary" />,
    items: [
      { text: "Profil ist verifiziert und aktiv", priority: "kritisch" },
      { text: "Firmenname exakt korrekt (keine Keyword-Stuffing)", priority: "kritisch" },
      { text: "Adresse vollständig und korrekt formatiert", priority: "kritisch" },
      { text: "Telefonnummer mit lokaler Vorwahl", priority: "hoch" },
      { text: "Website-URL korrekt verlinkt (mit UTM-Tracking)", priority: "hoch" },
      { text: "Primäre Kategorie optimal gewählt", priority: "kritisch" },
      { text: "Sekundäre Kategorien vollständig (max. 9)", priority: "hoch" },
      { text: "Unternehmensbeschreibung mit Keywords (750 Zeichen)", priority: "hoch" },
      { text: "Öffnungszeiten aktuell und vollständig", priority: "hoch" },
      { text: "Spezielle Öffnungszeiten für Feiertage gepflegt", priority: "mittel" },
    ],
  },
  {
    id: "fotos-medien",
    title: "2. Fotos & Medien",
    icon: <Eye className="h-5 w-5 text-primary" />,
    items: [
      { text: "Logo hochgeladen (min. 250×250px, quadratisch)", priority: "hoch" },
      { text: "Titelbild vorhanden (1080×608px)", priority: "hoch" },
      { text: "Mindestens 10 hochwertige Geschäftsfotos", priority: "hoch" },
      { text: "Fotos mit Geo-Tags versehen (EXIF-Daten)", priority: "mittel" },
      { text: "Regelmäßig neue Fotos (mindestens monatlich)", priority: "mittel" },
      { text: "360°-Rundgang / virtuelle Tour vorhanden", priority: "mittel" },
      { text: "Fotos in relevanten Kategorien (Innen, Außen, Team)", priority: "hoch" },
    ],
  },
  {
    id: "bewertungen",
    title: "3. Bewertungen & Reputation",
    icon: <Star className="h-5 w-5 text-primary" />,
    items: [
      { text: "Mindestens 20 Google-Bewertungen vorhanden", priority: "hoch" },
      { text: "Durchschnittsbewertung über 4,0 Sterne", priority: "hoch" },
      { text: "Aktuelle Bewertungen vorhanden (letzte 30 Tage)", priority: "hoch" },
      { text: "Alle Bewertungen beantwortet (positiv & negativ)", priority: "hoch" },
      { text: "Antworten enthalten relevante Keywords", priority: "mittel" },
      { text: "Antwortzeit unter 48 Stunden", priority: "mittel" },
      { text: "Negative Bewertungen professionell bearbeitet", priority: "hoch" },
      { text: "Aktive Bewertungs-Akquise-Strategie vorhanden", priority: "mittel" },
    ],
  },
  {
    id: "maps-ranking",
    title: "4. Maps-Ranking-Faktoren",
    icon: <MapPin className="h-5 w-5 text-primary" />,
    items: [
      { text: "NAP (Name, Adresse, Telefon) 100% konsistent überall", priority: "kritisch" },
      { text: "Standort-Pin korrekt auf der Karte positioniert", priority: "kritisch" },
      { text: "Einzugsgebiet / Service Area korrekt definiert", priority: "hoch" },
      { text: "Google Maps Embed auf der Website vorhanden", priority: "mittel" },
      { text: "Keine doppelten Google Business Einträge", priority: "hoch" },
      { text: "Geo-Koordinaten in Schema Markup korrekt", priority: "mittel" },
    ],
  },
  {
    id: "website-local",
    title: "5. Website – Lokale Optimierung",
    icon: <Globe className="h-5 w-5 text-primary" />,
    items: [
      { text: "NAP prominent im Footer / auf jeder Seite", priority: "kritisch" },
      { text: "Lokale Keywords im Title Tag der Startseite", priority: "hoch" },
      { text: "Lokale Keywords in der H1-Überschrift", priority: "hoch" },
      { text: "Lokale Inhalte (Stadtbezug, Einzugsgebiet)", priority: "mittel" },
      { text: "Kontaktseite mit vollständigen NAP-Daten", priority: "hoch" },
      { text: "Anfahrtsbeschreibung / Wegbeschreibung vorhanden", priority: "mittel" },
      { text: "Lokale Landingpages für jeden Standort / Service Area", priority: "hoch" },
    ],
  },
  {
    id: "technisch",
    title: "6. Technische Grundlagen",
    icon: <Code className="h-5 w-5 text-primary" />,
    items: [
      { text: "Mobile-friendly / responsive Design", priority: "kritisch" },
      { text: "Ladezeit unter 3 Sekunden (mobile)", priority: "kritisch" },
      { text: "SSL-Zertifikat aktiv (HTTPS)", priority: "kritisch" },
      { text: "Core Web Vitals bestanden (LCP, FID, CLS)", priority: "hoch" },
      { text: "Keine Crawling-Fehler in Search Console", priority: "hoch" },
      { text: "XML-Sitemap eingereicht und fehlerfrei", priority: "hoch" },
      { text: "Robots.txt korrekt konfiguriert", priority: "hoch" },
    ],
  },
  {
    id: "schema-markup",
    title: "7. Schema Markup (Strukturierte Daten)",
    icon: <FileText className="h-5 w-5 text-primary" />,
    items: [
      { text: "LocalBusiness Schema implementiert", priority: "hoch" },
      { text: "NAP in Schema korrekt und konsistent", priority: "hoch" },
      { text: "Öffnungszeiten in Schema gepflegt", priority: "mittel" },
      { text: "Geo-Koordinaten in Schema vorhanden", priority: "mittel" },
      { text: "Schema fehlerfrei (Rich Results Test bestanden)", priority: "hoch" },
      { text: "Review/AggregateRating Schema implementiert", priority: "mittel" },
      { text: "Service Schema für Dienstleistungen", priority: "mittel" },
    ],
  },
  {
    id: "citations",
    title: "8. Citations & Verzeichnisse",
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    items: [
      { text: "Google Business Profil aktiv und optimiert", priority: "kritisch" },
      { text: "Bing Places eingerichtet", priority: "hoch" },
      { text: "Apple Maps / Apple Business Connect gelistet", priority: "hoch" },
      { text: "Top-10 Branchenverzeichnisse eingetragen", priority: "hoch" },
      { text: "Regionale Verzeichnisse eingetragen", priority: "mittel" },
      { text: "NAP in allen Verzeichnissen 100% identisch", priority: "kritisch" },
      { text: "Keine veralteten / falschen Einträge vorhanden", priority: "hoch" },
      { text: "Branchenspezifische Verzeichnisse genutzt", priority: "mittel" },
    ],
  },
  {
    id: "google-posts",
    title: "9. Google Posts & Aktivität",
    icon: <Zap className="h-5 w-5 text-primary" />,
    items: [
      { text: "Regelmäßige Google Posts (mind. wöchentlich)", priority: "hoch" },
      { text: "Posts mit CTA-Button (Jetzt buchen, Mehr erfahren)", priority: "hoch" },
      { text: "Posts mit relevanten Keywords", priority: "mittel" },
      { text: "Event-Posts für Veranstaltungen / Aktionen", priority: "mittel" },
      { text: "Angebots-Posts mit Ablaufdatum", priority: "mittel" },
      { text: "Q&A-Bereich aktiv gepflegt", priority: "mittel" },
    ],
  },
  {
    id: "tracking",
    title: "10. Tracking & Monitoring",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    items: [
      { text: "Google Search Console eingerichtet und verifiziert", priority: "kritisch" },
      { text: "Google Analytics 4 korrekt implementiert", priority: "hoch" },
      { text: "GBP Insights regelmäßig ausgewertet", priority: "hoch" },
      { text: "Local Rank Tracking eingerichtet", priority: "hoch" },
      { text: "UTM-Parameter für GBP-Links eingerichtet", priority: "mittel" },
      { text: "Conversion-Tracking für Anrufe/Formulare", priority: "hoch" },
      { text: "Monatliches Reporting-Template vorhanden", priority: "mittel" },
    ],
  },
];

const totalItems = auditSections.reduce((sum, s) => sum + s.items.length, 0);

const GoogleMapsAuditTemplate = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-audit-template", language)!;

  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked]);

  const toggle = useCallback((key: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const resetAll = () => {
    setChecked(new Set());
    toast.success("Fortschritt zurückgesetzt");
  };

  const percentage = Math.round((checked.size / totalItems) * 100);

  const priorityStyle = (p: string) =>
    p === "kritisch" ? "text-destructive bg-destructive/10" :
    p === "hoch" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const tocItems = [
    { id: "ueberblick", title: "Überblick: 10 Audit-Bereiche", level: 2 },
    ...auditSections.map(s => ({ id: s.id, title: s.title, level: 2 })),
    { id: "scoring", title: "Scoring & Bewertung", level: 2 },
    { id: "aktionsplan", title: "Aktionsplan nach dem Audit", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `${totalItems} Audit-Punkte in 10 Kategorien – von GBP über Website bis Tracking`,
    "Interaktive Checkliste mit Fortschrittsspeicherung im Browser",
    "Priorisierung nach Kritisch / Hoch / Mittel für effiziente Umsetzung",
    "Kritische Punkte zuerst: NAP-Konsistenz, Verifizierung, Mobile-Speed",
    "Ideal als Quartals-Audit oder vor einer Local-SEO-Kampagne",
  ];

  const faqItems = [
    { question: "Wie oft sollte ich ein Google Maps Audit durchführen?", answer: "Mindestens quartalsweise. Bei aktiven Optimierungen monatlich. Besonders nach Google-Updates oder Wettbewerber-Veränderungen lohnt sich ein Re-Audit." },
    { question: "Was ist der Unterschied zur allgemeinen Local SEO Checkliste?", answer: "Dieses Audit fokussiert speziell auf Google Maps Sichtbarkeit — also GBP-Profil, Maps-Rankings, lokale Signale und Citations. Die allgemeine Checkliste deckt auch Content-Marketing und Linkbuilding breiter ab." },
    { question: "Welche Punkte haben den größten Einfluss auf Maps-Rankings?", answer: "Die kritischen Punkte: GBP-Verifizierung, NAP-Konsistenz, primäre Kategorie, Mobile-Speed und Bewertungen. Diese fünf Faktoren machen laut Studien über 60% des Ranking-Einflusses aus." },
    { question: "Kann ich die Ergebnisse als PDF exportieren?", answer: "Du kannst die Seite direkt über deinen Browser als PDF drucken (Strg+P / Cmd+P). Der Fortschritt wird automatisch in deinem Browser gespeichert." },
    { question: "Was mache ich mit den Audit-Ergebnissen?", answer: "Priorisiere nach dem Traffic-Light-System: Kritische rote Punkte sofort angehen, hohe orange Punkte innerhalb von 2 Wochen, mittlere gelbe Punkte im nächsten Monat. Nutze unser Reporting-Template für die Dokumentation." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Google: Business Profile Guidelines", url: "https://support.google.com/business/answer/3038177", type: "article" as const },
    { title: "BrightLocal: Local SEO Industry Survey 2024", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Moz: Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors", type: "article" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Google Maps Audit Template – Vollständige Checkliste",
    description: `Systematisches Google Maps Audit mit ${totalItems} Prüfpunkten in 10 Kategorien.`,
    step: auditSections.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.items.map(item => item.text).join(". "),
    })),
  };

  return (
    <ArticleLayout article={article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <TableOfContents items={tocItems} />

      <KeyTakeawaysBox
        title="Auf einen Blick"
        items={keyTakeaways}
      />

      {/* Progress Bar */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Audit-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{totalItems} Punkte ({percentage}%)
              </span>
              <button
                onClick={resetAll}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors underline"
              >
                Zurücksetzen
              </button>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive inline-block" /> Kritisch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block" /> Hoch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" /> Mittel</span>
          </div>
        </CardContent>
      </Card>

      {/* Overview Section */}
      <section id="ueberblick" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Überblick: 10 Audit-Bereiche</h2>
        <p className="text-muted-foreground mb-6">
          Dieses Google Maps Audit Template prüft systematisch alle Faktoren, die dein lokales Ranking auf Google Maps beeinflussen. 
          Von der GBP-Profil-Vollständigkeit über technische Website-Grundlagen bis hin zu Citations und Tracking — 
          <strong className="text-foreground"> {totalItems} Prüfpunkte in 10 Kategorien</strong>, priorisiert nach Ranking-Einfluss.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {auditSections.map(s => {
            const sectionChecked = s.items.filter((_, i) => checked.has(`${s.id}-${i}`)).length;
            const sectionPct = Math.round((sectionChecked / s.items.length) * 100);
            return (
              <a key={s.id} href={`#${s.id}`} className="block">
                <Card className={`text-center p-3 hover:border-primary/40 transition-colors ${sectionPct === 100 ? 'border-green-300 bg-green-50' : ''}`}>
                  <div className="text-lg mb-1">{s.icon}</div>
                  <p className="text-xs font-medium text-foreground leading-tight">{s.title.replace(/^\d+\.\s/, '')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{sectionChecked}/{s.items.length}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* Audit Sections */}
      {auditSections.map(section => {
        const sectionChecked = section.items.filter((_, i) => checked.has(`${section.id}-${i}`)).length;
        const sectionComplete = sectionChecked === section.items.length;

        return (
          <section key={section.id} id={section.id} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              {sectionComplete && (
                <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                  ✓ Komplett
                </Badge>
              )}
            </div>

            <div className="space-y-2">
              {section.items.map((item, i) => {
                const key = `${section.id}-${i}`;
                const isChecked = checked.has(key);
                return (
                  <button
                    key={key}
                    onClick={() => toggle(key)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 text-left group ${
                      isChecked
                        ? 'bg-green-50 border-green-300 hover:bg-green-100'
                        : 'bg-card border-border hover:bg-muted/50 hover:border-primary/30'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${
                      isChecked ? 'bg-green-500 border-green-500' : 'border-muted-foreground/30 group-hover:border-primary/50'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`flex-1 text-sm ${isChecked ? 'text-green-700 line-through' : 'text-foreground'}`}>
                      {item.text}
                    </span>
                    <Badge variant="outline" className={`flex-shrink-0 text-xs ${priorityStyle(item.priority)}`}>
                      {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <BlogCTAABTest articleSlug="google-maps-audit-template" position="middle" />

      {/* Scoring */}
      <section id="scoring" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Scoring & Bewertung</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-green-700 mb-2">80–100%</p>
              <p className="font-semibold text-green-800">Exzellent</p>
              <p className="text-sm text-green-700 mt-2">Dein Maps-Profil ist hervorragend optimiert. Fokus auf Feintuning und Monitoring.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">50–79%</p>
              <p className="font-semibold text-foreground">Gut, aber Potenzial</p>
              <p className="text-sm text-muted-foreground mt-2">Solide Basis vorhanden. Kritische Lücken schließen für deutlich bessere Rankings.</p>
            </CardContent>
          </Card>
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-destructive mb-2">0–49%</p>
              <p className="font-semibold text-foreground">Handlungsbedarf</p>
              <p className="text-sm text-muted-foreground mt-2">Signifikante Optimierungslücken. Starte mit den kritischen Punkten für schnelle Wins.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" /> Dein aktuelles Ergebnis
            </h3>
            <div className="flex items-center gap-4">
              <span className={`text-4xl font-bold ${
                percentage >= 80 ? 'text-green-700' : percentage >= 50 ? 'text-primary' : 'text-destructive'
              }`}>{percentage}%</span>
              <div className="text-sm text-muted-foreground">
                <p>{checked.size} von {totalItems} Punkten erfüllt</p>
                <p className="mt-1">
                  {percentage >= 80 ? '🎉 Exzellent! Dein Profil ist sehr gut optimiert.' :
                   percentage >= 50 ? '💪 Gute Basis! Fokussiere auf die kritischen Lücken.' :
                   '🚀 Es gibt viel Potenzial — starte mit den roten Punkten!'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Action Plan */}
      <section id="aktionsplan" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Aktionsplan nach dem Audit</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-destructive" /> Woche 1–2: Kritische Punkte
              </h3>
              <p className="text-sm text-muted-foreground">
                Alle rot markierten Punkte sofort umsetzen: GBP-Verifizierung, NAP-Konsistenz, Kategorie-Wahl, Mobile-Performance und SSL.
                Diese haben den größten Einfluss auf dein Maps-Ranking.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary" /> Woche 3–4: Hohe Priorität
              </h3>
              <p className="text-sm text-muted-foreground">
                Fotos optimieren, Schema Markup implementieren, fehlende Citations anlegen, Bewertungs-Strategie starten.
                Erste Ranking-Verbesserungen sollten nach 2–4 Wochen sichtbar werden.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-muted-foreground" /> Monat 2–3: Mittlere Priorität
              </h3>
              <p className="text-sm text-muted-foreground">
                Google Posts einrichten, Q&A pflegen, 360°-Tour erstellen, regionale Verzeichnisse vervollständigen.
                Feintuning für maximale Sichtbarkeit im Local Pack.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/google-maps-ranking-verbessern" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking verbessern – Der komplette Guide</Link></li>
            <li>→ <Link to="/blog/local-seo-checkliste-komplett" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Checkliste: 80+ Punkte</Link></li>
            <li>→ <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking-Faktoren erklärt</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
            <li>→ <Link to="/blog/google-maps-konkurrenzanalyse" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Konkurrenzanalyse</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection items={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA slug="google-maps-audit-template" />
      <HelpfulnessWidget slug="google-maps-audit-template" />
    </ArticleLayout>
  );
};

export default GoogleMapsAuditTemplate;
