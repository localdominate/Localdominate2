import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, AlertTriangle, TrendingUp, Shield, Zap, Globe, FileCode, Link2, BarChart3 } from "lucide-react";

export interface AuditDimension {
  id: string;
  label: string;
  icon: React.ReactNode;
  weight: number;
  items: {
    text: string;
    priority: "critical" | "high" | "medium";
    impact: string;
  }[];
}

export interface AuditFrameworkProps {
  title: string;
  description: string;
  dimensions: AuditDimension[];
  scoringGuide?: { range: string; label: string; color: string }[];
}

const priorityBadge = (p: "critical" | "high" | "medium") => {
  const map = {
    critical: { label: "Kritisch", cls: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
    high: { label: "Hoch", cls: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
    medium: { label: "Mittel", cls: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  };
  const { label, cls } = map[p];
  return <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", cls)}>{label}</span>;
};

const defaultScoring = [
  { range: "90–100 %", label: "Exzellent", color: "bg-green-500" },
  { range: "70–89 %", label: "Gut", color: "bg-emerald-400" },
  { range: "50–69 %", label: "Ausbaufähig", color: "bg-yellow-400" },
  { range: "< 50 %", label: "Kritisch", color: "bg-red-500" },
];

const TechnicalSeoAuditFramework: React.FC<AuditFrameworkProps> = ({
  title,
  description,
  dimensions,
  scoringGuide = defaultScoring,
}) => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const totalItems = dimensions.reduce((s, d) => s + d.items.length, 0);
  const totalChecked = checked.size;
  const overallPct = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  const getScoreLabel = (pct: number) => {
    if (pct >= 90) return scoringGuide[0];
    if (pct >= 70) return scoringGuide[1];
    if (pct >= 50) return scoringGuide[2];
    return scoringGuide[3];
  };

  const scoreInfo = getScoreLabel(overallPct);

  return (
    <div className="my-10 border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
      {/* Header */}
      <div className="bg-muted/50 p-6 border-b border-border">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{description}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{overallPct}%</div>
              <div className={cn("text-xs font-medium px-2 py-0.5 rounded-full text-white", scoreInfo.color)}>
                {scoreInfo.label}
              </div>
            </div>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="mt-4 h-2.5 bg-muted rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-500", scoreInfo.color)}
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-1">{totalChecked} von {totalItems} Punkten erledigt</div>
      </div>

      {/* Scoring Legend */}
      <div className="px-6 py-3 border-b border-border bg-muted/20 flex flex-wrap gap-4">
        {scoringGuide.map((s) => (
          <div key={s.range} className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className={cn("w-3 h-3 rounded-full", s.color)} />
            <span>{s.range}: <strong>{s.label}</strong></span>
          </div>
        ))}
      </div>

      {/* Dimensions */}
      <div className="divide-y divide-border">
        {dimensions.map((dim) => {
          const dimChecked = dim.items.filter((_, i) => checked.has(`${dim.id}-${i}`)).length;
          const dimPct = dim.items.length > 0 ? Math.round((dimChecked / dim.items.length) * 100) : 0;
          const dimScore = getScoreLabel(dimPct);

          return (
            <div key={dim.id} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary">{dim.icon}</span>
                  <h4 className="font-semibold text-foreground">{dim.label}</h4>
                  <span className="text-xs text-muted-foreground ml-1">(Gewicht: {dim.weight}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all", dimScore.color)} style={{ width: `${dimPct}%` }} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{dimChecked}/{dim.items.length}</span>
                </div>
              </div>

              <div className="space-y-2">
                {dim.items.map((item, idx) => {
                  const key = `${dim.id}-${idx}`;
                  const done = checked.has(key);

                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className={cn(
                        "w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-all group",
                        done
                          ? "bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700"
                          : "bg-card border-border hover:bg-muted/50 hover:border-primary/30"
                      )}
                    >
                      <div className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all",
                        done ? "bg-green-500 border-green-500" : "border-muted-foreground/30 group-hover:border-primary/50"
                      )}>
                        {done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={cn("text-sm", done ? "text-green-700 dark:text-green-400 line-through" : "text-foreground")}>
                          {item.text}
                        </span>
                        <span className="text-xs text-muted-foreground block mt-0.5">Impact: {item.impact}</span>
                      </div>
                      {priorityBadge(item.priority)}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BarChart3 className="w-4 h-4" />
          <span>Führe dieses Audit monatlich durch für kontinuierliche Verbesserung</span>
        </div>
        <button
          onClick={() => setChecked(new Set())}
          className="text-xs text-primary hover:underline font-medium"
        >
          Audit zurücksetzen
        </button>
      </div>
    </div>
  );
};

/* ── Pre-configured audit frameworks ── */

export const technicalFoundationAudit: AuditFrameworkProps = {
  title: "Technisches Fundament – Audit Framework",
  description: "Bewerte die technische Grundlage deiner lokalen Website. Crawlability, Indexierung und Server-Konfiguration.",
  dimensions: [
    {
      id: "crawl",
      label: "Crawlability & Indexierung",
      icon: <Globe className="w-4 h-4" />,
      weight: 25,
      items: [
        { text: "XML-Sitemap vorhanden und in Search Console eingereicht", priority: "critical", impact: "Alle Seiten werden gefunden" },
        { text: "robots.txt erlaubt Crawling aller wichtigen Seiten", priority: "critical", impact: "Keine versehentlichen Blockaden" },
        { text: "Canonical-Tags auf allen Seiten korrekt", priority: "high", impact: "Vermeidet Duplicate Content" },
        { text: "Keine orphaned Pages (jede Seite intern verlinkt)", priority: "medium", impact: "Bessere Link-Equity-Verteilung" },
        { text: "Hreflang-Tags bei mehrsprachigem Content", priority: "medium", impact: "Korrekte Sprachzuordnung" },
      ],
    },
    {
      id: "speed",
      label: "Core Web Vitals & Performance",
      icon: <Zap className="w-4 h-4" />,
      weight: 30,
      items: [
        { text: "LCP (Largest Contentful Paint) < 2,5 Sekunden", priority: "critical", impact: "Direkter Ranking-Faktor" },
        { text: "FID/INP < 200ms Interaktionszeit", priority: "critical", impact: "Nutzererfahrung & Ranking" },
        { text: "CLS (Cumulative Layout Shift) < 0,1", priority: "high", impact: "Visuelle Stabilität" },
        { text: "Bilder in WebP/AVIF mit Lazy Loading", priority: "high", impact: "30–50% schnellere Ladezeit" },
        { text: "Critical CSS inlined, JS deferred", priority: "medium", impact: "Schnellerer First Paint" },
        { text: "CDN für statische Ressourcen aktiv", priority: "medium", impact: "Geringere Latenz" },
      ],
    },
    {
      id: "schema",
      label: "Strukturierte Daten & Schema",
      icon: <FileCode className="w-4 h-4" />,
      weight: 25,
      items: [
        { text: "LocalBusiness Schema mit vollständigem NAP", priority: "critical", impact: "Rich Results & Knowledge Panel" },
        { text: "OpeningHoursSpecification korrekt", priority: "high", impact: "Öffnungszeiten in SERP" },
        { text: "GeoCoordinates (lat/lng) angegeben", priority: "high", impact: "Präzise Standortzuordnung" },
        { text: "Review/AggregateRating Schema", priority: "high", impact: "Sterne in Suchergebnissen" },
        { text: "FAQ Schema auf relevanten Seiten", priority: "medium", impact: "FAQ Rich Results" },
        { text: "Schema ohne Fehler im Rich Results Test", priority: "critical", impact: "Valide strukturierte Daten" },
      ],
    },
    {
      id: "security",
      label: "Sicherheit & Serverconfig",
      icon: <Shield className="w-4 h-4" />,
      weight: 20,
      items: [
        { text: "HTTPS aktiv mit gültigem SSL-Zertifikat", priority: "critical", impact: "Vertrauenssignal & Ranking" },
        { text: "HTTP→HTTPS Redirect (301) konfiguriert", priority: "critical", impact: "Keine Mixed-Content-Probleme" },
        { text: "HSTS Header gesetzt", priority: "medium", impact: "Zusätzliche Sicherheitsebene" },
        { text: "404-Seite mit hilfreicher Navigation", priority: "medium", impact: "Bessere Nutzererfahrung" },
        { text: "Server-Antwortzeit < 200ms (TTFB)", priority: "high", impact: "Schnellerer Seitenaufbau" },
      ],
    },
  ],
};

export const localSignalsAudit: AuditFrameworkProps = {
  title: "Lokale Signale – Audit Framework",
  description: "Prüfe alle lokalen Ranking-Signale: NAP-Konsistenz, Citations, Maps-Optimierung und lokaler Content.",
  dimensions: [
    {
      id: "nap",
      label: "NAP-Konsistenz",
      icon: <Globe className="w-4 h-4" />,
      weight: 30,
      items: [
        { text: "NAP auf Website identisch mit GBP-Eintrag", priority: "critical", impact: "Grundlage für lokales Vertrauen" },
        { text: "NAP in Footer auf allen Seiten sichtbar", priority: "critical", impact: "Konsistentes Signal für Crawler" },
        { text: "Telefonnummer im E.164-Format", priority: "high", impact: "Eindeutige Zuordnung" },
        { text: "Adresse im Schema identisch mit Citations", priority: "critical", impact: "Cross-Platform-Konsistenz" },
        { text: "Keine veralteten NAP-Varianten online", priority: "high", impact: "Vermeidet Verwirrung bei Google" },
      ],
    },
    {
      id: "citations",
      label: "Citations & Verzeichnisse",
      icon: <Link2 className="w-4 h-4" />,
      weight: 25,
      items: [
        { text: "Top-10 DE-Verzeichnisse eingetragen (Yelp, GoLocal, etc.)", priority: "high", impact: "Basis-Citations für Autorität" },
        { text: "Branchenspezifische Verzeichnisse abgedeckt", priority: "high", impact: "Branchenrelevanz-Signal" },
        { text: "Bing Places & Apple Maps konfiguriert", priority: "high", impact: "Multi-Plattform-Sichtbarkeit" },
        { text: "Keine doppelten Einträge in Verzeichnissen", priority: "critical", impact: "Vermeidet NAP-Konflikte" },
        { text: "Regionale/lokale Verzeichnisse genutzt", priority: "medium", impact: "Hyper-lokale Signale" },
      ],
    },
    {
      id: "content",
      label: "Lokaler Content & On-Page",
      icon: <FileCode className="w-4 h-4" />,
      weight: 25,
      items: [
        { text: "Lokale Keywords in Title Tags (Stadt + Service)", priority: "critical", impact: "Primärer On-Page-Faktor" },
        { text: "Lokale Keywords in H1 und H2", priority: "high", impact: "Thematische Relevanz" },
        { text: "Eingebettete Google Maps Karte", priority: "medium", impact: "Standort-Verifikation" },
        { text: "Lokale Inhalte (Stadtbezug, Testimonials)", priority: "high", impact: "Unique lokaler Content" },
        { text: "Standortseiten für jedes Einzugsgebiet", priority: "medium", impact: "Multi-Location-Abdeckung" },
      ],
    },
    {
      id: "links",
      label: "Lokale Backlinks & Partnerschaften",
      icon: <TrendingUp className="w-4 h-4" />,
      weight: 20,
      items: [
        { text: "Backlinks von lokalen Nachrichtenportalen", priority: "high", impact: "Hohe lokale Autorität" },
        { text: "Sponsoring/Partnerschaften mit lokalen Vereinen", priority: "medium", impact: "Community-Signals" },
        { text: "Branchenverbands-Listings mit Backlink", priority: "high", impact: "Trust + Relevanz" },
        { text: "Lokale Blogger/Influencer-Kooperationen", priority: "medium", impact: "Lokale Erwähnungen" },
        { text: "Keine toxischen Backlinks (Disavow geprüft)", priority: "high", impact: "Schutz vor Penalty" },
      ],
    },
  ],
};

export const reviewReputationAudit: AuditFrameworkProps = {
  title: "Bewertungen & Reputation – Audit Framework",
  description: "Systematische Analyse deiner Online-Reputation: Bewertungsvolumen, Qualität, Response-Strategie und Monitoring.",
  dimensions: [
    {
      id: "volume",
      label: "Bewertungsvolumen & Qualität",
      icon: <TrendingUp className="w-4 h-4" />,
      weight: 35,
      items: [
        { text: "Mindestens 25+ Google-Bewertungen", priority: "critical", impact: "Wettbewerbsfähige Basis" },
        { text: "Durchschnittliche Bewertung ≥ 4,2 Sterne", priority: "critical", impact: "Vertrauen & CTR" },
        { text: "Regelmäßig neue Bewertungen (min. 2/Monat)", priority: "high", impact: "Frische-Signal" },
        { text: "Bewertungen enthalten lokale Keywords", priority: "medium", impact: "Keyword-Relevanz in UGC" },
        { text: "Bewertungen auf mehreren Plattformen", priority: "high", impact: "Breitere Sichtbarkeit" },
      ],
    },
    {
      id: "response",
      label: "Response-Management",
      icon: <Shield className="w-4 h-4" />,
      weight: 30,
      items: [
        { text: "100% Antwortrate auf alle Bewertungen", priority: "critical", impact: "Engagement-Signal für Google" },
        { text: "Antwort innerhalb von 24–48 Stunden", priority: "high", impact: "Zeigt aktive Betreuung" },
        { text: "Keywords natürlich in Antworten integriert", priority: "medium", impact: "Zusätzliche Keyword-Signale" },
        { text: "Negative Bewertungen professionell adressiert", priority: "critical", impact: "Reputation-Schutz" },
        { text: "Template-Varianten für verschiedene Szenarien", priority: "medium", impact: "Effizientes Management" },
      ],
    },
    {
      id: "acquisition",
      label: "Bewertungs-Akquise",
      icon: <BarChart3 className="w-4 h-4" />,
      weight: 20,
      items: [
        { text: "Direkter Bewertungslink erstellt und im Einsatz", priority: "critical", impact: "Niedrige Hürde für Kunden" },
        { text: "Bewertungs-Aufforderung in Kundenkommunikation", priority: "high", impact: "Systematische Generierung" },
        { text: "QR-Code am Standort sichtbar", priority: "medium", impact: "Offline-zu-Online-Brücke" },
        { text: "Follow-up E-Mail/SMS nach Service", priority: "high", impact: "Timing-optimierte Anfrage" },
      ],
    },
    {
      id: "monitoring",
      label: "Monitoring & Reporting",
      icon: <AlertTriangle className="w-4 h-4" />,
      weight: 15,
      items: [
        { text: "Google Alerts für Firmennamen eingerichtet", priority: "high", impact: "Erwähnungen tracken" },
        { text: "Monatlicher Bewertungs-Report erstellt", priority: "medium", impact: "Trends erkennen" },
        { text: "Fake-Bewertungen identifiziert und gemeldet", priority: "high", impact: "Reputation-Schutz" },
        { text: "Konkurrenz-Bewertungen regelmäßig analysiert", priority: "medium", impact: "Benchmark-Vergleich" },
      ],
    },
  ],
};

export default TechnicalSeoAuditFramework;
