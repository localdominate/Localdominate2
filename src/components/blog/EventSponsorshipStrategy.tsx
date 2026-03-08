import { useState } from "react";
import { Trophy, ChevronDown, Target, DollarSign, Link2, CheckCircle, Calendar, Users, Heart, Megaphone, Shield, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface EventSponsorshipStrategyProps {
  compact?: boolean;
}

interface SponsorshipOpportunity {
  id: string;
  icon: React.ReactNode;
  title: string;
  examples: string[];
  typicalCost: string;
  linkValue: "exzellent" | "hoch" | "mittel";
  linkTypes: string[];
  negotiationTips: string[];
  roiMetrics: string[];
}

const opportunities: SponsorshipOpportunity[] = [
  {
    id: "sports",
    icon: <Trophy className="w-4 h-4" />,
    title: "Sportvereine & Turniere",
    examples: ["Fussballverein-Trikot", "Lauf-Event-Sponsor", "Jugend-Mannschaft", "Tennisturnier"],
    typicalCost: "200–2.000€/Jahr",
    linkValue: "hoch",
    linkTypes: ["Sponsoren-Seite mit Logo + Link", "Erwaehnungen in Spielberichten", "Social-Media-Tags bei Events"],
    negotiationTips: [
      "Frage nach dem Medienkit – viele Vereine haben bereits Sponsoring-Pakete",
      "Bestehe auf DoFollow-Link, nicht nur Logo-Bild ohne Verlinkung",
      "Vereinbare Link-Audit alle 6 Monate (Website-Redesigns loeschen oft Sponsoren-Seiten)",
      "Biete statt nur Geld auch Sachleistungen an – oft guenstiger und geschaetzter",
    ],
    roiMetrics: ["Backlink DA 20-40", "Lokale Erwaehnung in Spielberichten", "Logo-Sichtbarkeit bei Heim-/Auswaertsspielen", "Social-Media-Reichweite der Fans"],
  },
  {
    id: "festivals",
    icon: <Calendar className="w-4 h-4" />,
    title: "Stadtfeste & Festivals",
    examples: ["Weihnachtsmarkt-Stand", "Stadtteilfest-Sponsor", "Kulturnacht", "Strassenfest-Partner"],
    typicalCost: "500–5.000€/Event",
    linkValue: "exzellent",
    linkTypes: ["Event-Website mit Sponsoren-Liste", "Pressemitteilung mit Nennung", "Flyer/Plakate + Online-Medien", "Lokale Zeitungsberichte"],
    negotiationTips: [
      "Grosse Stadtfeste haben eigene Websites mit hoher DA (oft 40-60) – goldene Link-Quellen",
      "Buche frueh (6+ Monate vorher) fuer Premium-Platzierung auf der Website",
      "Frage nach einer eigenen Unterseite fuer deinen Stand/Beitrag – besser als nur Logo",
      "Vereinbare Post-Event-Berichterstattung mit namentlicher Erwaehnung + Link",
    ],
    roiMetrics: ["Backlink DA 40-60", "Presse-Erwaehnung in 2-5 lokalen Medien", "Direkter Kundenkontakt (500-5.000 Besucher)", "Foto-/Video-Content fuer eigene Kanaele"],
  },
  {
    id: "schools",
    icon: <Users className="w-4 h-4" />,
    title: "Schulen & Bildungseinrichtungen",
    examples: ["Schulfest-Sponsor", "Projekttage", "Berufsorientierung", "MINT-Foerderung"],
    typicalCost: "100–1.000€/Jahr",
    linkValue: "hoch",
    linkTypes: ["Schul-Website (oft .de-Domains mit DA 30-50)", "Foerdervereins-Seite", "Schulzeitung (online)"],
    negotiationTips: [
      "Schulen haben oft Foerdervereine – diese entscheiden ueber Sponsoring",
      "Biete Workshops oder Praktikumsplaetze an – mehr Wert als nur Geld",
      "Schul-Websites werden selten aktualisiert – pruefe regelmaessig, ob der Link noch existiert",
      "Dokumentiere dein Engagement mit Fotos fuer eigene PR und Social Media",
    ],
    roiMetrics: ["Backlink DA 30-50", "Community-Goodwill", "Nachwuchs-Recruiting", "Eltern als potenzielle Kunden"],
  },
  {
    id: "charity",
    icon: <Heart className="w-4 h-4" />,
    title: "Gemeinnuetzige Organisationen",
    examples: ["Tafel-Unterstuetzung", "Tierheim-Patenschaft", "Obdachlosenhilfe", "Umwelt-Initiative"],
    typicalCost: "100–500€/Jahr oder Sachspenden",
    linkValue: "hoch",
    linkTypes: ["Spender-/Partner-Seite der Organisation", "Jahresbericht (oft als PDF mit Links)", "Pressemitteilung bei groesseren Aktionen"],
    negotiationTips: [
      "Viele NGOs listen Foerderer prominent auf der Startseite – sehr wertvolle Link-Platzierung",
      "Vereinbare eine 'Partnerschaft' statt eine 'Spende' – das impliziert gegenseitige Verpflichtung",
      "Bitte um Aufnahme in den Newsletter – erreicht die Community direkt",
      "Gemeinsame Pressemitteilung bei Aktionen generiert zusaetzliche Medien-Links",
    ],
    roiMetrics: ["Backlink DA 30-50", "Positives Markenimage", "Presse-Coverage bei Aktionen", "Steuerliche Absetzbarkeit"],
  },
  {
    id: "industry",
    icon: <Megaphone className="w-4 h-4" />,
    title: "Branchen-Events & Messen",
    examples: ["Lokale Fachmesse", "Gruender-Event", "Netzwerk-Treffen", "Branchenstammtisch"],
    typicalCost: "300–3.000€/Event",
    linkValue: "exzellent",
    linkTypes: ["Event-Website mit Aussteller-/Sponsoren-Profil", "Speaker-Profil (falls Vortrag)", "Nachberichte in Fachmedien", "Teilnehmer-Blogs"],
    negotiationTips: [
      "Speaker-Slots sind die wertvollste Sponsoring-Form – eigene Bio-Seite + Backlink + Autoritaet",
      "Frage nach Aussteller-Profil mit Langtext + Link statt nur Logo",
      "Messe-Websites bleiben oft jahrelang online – langfristiger Link-Wert",
      "Networking: Tausche Visitenkarten und biete Follow-up-Content (Whitepaper) an",
    ],
    roiMetrics: ["Backlink DA 40-70", "B2B-Leads", "Branchen-Autoritaet", "Content fuer Thought Leadership"],
  },
  {
    id: "cultural",
    icon: <Star className="w-4 h-4" />,
    title: "Kultur & Kreativ-Events",
    examples: ["Galerie-Ausstellung", "Konzert-Reihe", "Lesungen", "Open-Air-Kino", "Kunstmarkt"],
    typicalCost: "200–2.000€/Event",
    linkValue: "mittel",
    linkTypes: ["Veranstaltungs-Website", "Kuenstler-/Veranstalter-Blog", "Kultur-Kalender lokaler Medien"],
    negotiationTips: [
      "Kultur-Events sprechen eine kaufkraeftige, gebildete Zielgruppe an – ideal fuer Premium-Marken",
      "Biete die Location oder Catering an statt Geld – hoeherer wahrgenommener Wert",
      "Kultur-Blogs und Magazine verlinken grosszuegiger als kommerzielle Medien",
      "Fotografen und Kuenstler teilen Sponsoren oft auf ihren eigenen (gut verlinkten) Websites",
    ],
    roiMetrics: ["Backlink DA 20-40", "Premium-Zielgruppe", "Kreativer Content", "Social-Media-Viralitaet"],
  },
];

const linkValueColors: Record<string, string> = {
  exzellent: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  hoch: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  mittel: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const checklist = [
  { icon: <Link2 className="w-4 h-4" />, text: "DoFollow-Link mit korrekter Ziel-URL vereinbart?" },
  { icon: <Target className="w-4 h-4" />, text: "Ankertext definiert (Firmenname oder relevantes Keyword)?" },
  { icon: <Shield className="w-4 h-4" />, text: "Laufzeit und Verlaengerung schriftlich fixiert?" },
  { icon: <DollarSign className="w-4 h-4" />, text: "Preis-Leistungs-Verhaeltnis realistisch kalkuliert?" },
  { icon: <CheckCircle className="w-4 h-4" />, text: "Post-Event Link-Audit eingeplant (Link noch aktiv nach Redesign)?" },
  { icon: <Calendar className="w-4 h-4" />, text: "Content-Rechte geklaert (Fotos, Berichte, Social Media)?" },
];

const EventSponsorshipStrategy = ({ compact = false }: EventSponsorshipStrategyProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const displayed = compact ? opportunities.slice(0, 3) : opportunities;

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Event-Sponsoring Strategien fuer Linkbuilding</h2>
        </div>
        <p className="text-muted-foreground">
          Strukturierte Sponsoring-Strategien nach Event-Typ – mit Verhandlungstipps, Link-Wert-Einschaetzung und ROI-Metriken.
        </p>
      </div>

      {/* Opportunity Cards */}
      <div className="space-y-3 mb-8">
        {displayed.map((opp) => (
          <Card key={opp.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === opp.id ? null : opp.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    {opp.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{opp.title}</span>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", linkValueColors[opp.linkValue])}>
                        Link-Wert: {opp.linkValue}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{opp.typicalCost}</p>
                  </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform shrink-0", expandedId === opp.id && "rotate-180")} />
              </div>

              {expandedId === opp.id && (
                <div className="border-t border-border p-4 space-y-4">
                  {/* Examples */}
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Beispiele</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {opp.examples.map((ex, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{ex}</span>
                      ))}
                    </div>
                  </div>

                  {/* Link Types */}
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Moegliche Link-Quellen</span>
                    <ul className="mt-1 space-y-1">
                      {opp.linkTypes.map((lt, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Link2 className="w-3.5 h-3.5 text-primary shrink-0" /> {lt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Negotiation Tips */}
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Verhandlungstipps</span>
                    <ul className="mt-1 space-y-2">
                      {opp.negotiationTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <Target className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI Metrics */}
                  <div className="bg-muted/50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Erwarteter ROI</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {opp.roiMetrics.map((metric, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{metric}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sponsoring Negotiation Checklist */}
      <div className="bg-muted/50 rounded-xl p-6 border border-border">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Sponsoring-Verhandlungs-Checkliste
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Quick ROI Formula */}
      {!compact && (
        <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Sponsoring-ROI schnell berechnen
          </h3>
          <div className="space-y-3 text-sm text-foreground">
            <p><strong>Formel:</strong> (Wert der Backlinks + Wert der Kunden-Kontakte + PR-Wert) ÷ Sponsoring-Kosten</p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p>📊 <strong>Beispiel: Sportverein-Sponsoring (500€/Jahr)</strong></p>
              <ul className="space-y-1 ml-6">
                <li>• 1 Backlink DA 30 ≈ Wert 200-400€ (basierend auf Ahrefs/SEMrush-Schaetzungen)</li>
                <li>• 2 Erwaehnung in Spielberichten ≈ 100-200€ PR-Wert</li>
                <li>• Direkte Kunden-Kontakte bei Events ≈ 1-3 Neukunden = 500-1.500€</li>
                <li>• <strong>Geschaetzter Gesamt-ROI: 160-420%</strong></li>
              </ul>
            </div>
            <p className="text-muted-foreground text-xs">
              Hinweis: Link-Werte sind Schaetzungen basierend auf Branchendurchschnittswerten. Der tatsaechliche ROI haengt von Branche, Standort und Verhandlungsgeschick ab.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventSponsorshipStrategy;
