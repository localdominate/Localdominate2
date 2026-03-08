import { useState } from "react";
import { ChevronDown, Globe, Star, CheckCircle, AlertTriangle, Clock, ExternalLink, Shield, Lightbulb, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type DirectoryTier = "tier1" | "tier2" | "tier3" | "industry";

interface DirectoryGuide {
  id: string;
  tier: DirectoryTier;
  name: string;
  url: string;
  country: "DACH" | "DE" | "AT" | "CH";
  setupTime: string;
  verificationMethod: string;
  freeFeatures: string[];
  optimizationTips: string[];
  commonMistakes: string[];
  linkType: "DoFollow" | "NoFollow" | "Varies";
  profileCompleteness: string;
}

interface DirectorySubmissionStrategyProps {
  tiers?: DirectoryTier[];
  countries?: ("DACH" | "DE" | "AT" | "CH")[];
  compact?: boolean;
}

const tierMeta: Record<DirectoryTier, { label: string; color: string; description: string }> = {
  tier1: { label: "Pflicht (Tier 1)", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", description: "Ohne diese Verzeichnisse fehlt die Basis" },
  tier2: { label: "Wichtig (Tier 2)", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400", description: "Staerkt die lokale Autoritaet deutlich" },
  tier3: { label: "Ergaenzend (Tier 3)", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", description: "Fuer maximale Abdeckung" },
  industry: { label: "Branchenspezifisch", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400", description: "Hoehere Relevanz als allgemeine Verzeichnisse" },
};

const directories: DirectoryGuide[] = [
  {
    id: "google-business",
    tier: "tier1",
    name: "Google Business Profil",
    url: "https://business.google.com",
    country: "DACH",
    setupTime: "30-45 Min.",
    verificationMethod: "Postkarte, Telefon, E-Mail oder Video",
    freeFeatures: ["Fotos & Videos", "Posts & Updates", "Produkte/Services", "Nachrichten", "Bewertungen", "Buchungen"],
    optimizationTips: [
      "Alle 750 Zeichen der Beschreibung ausnutzen – mit Keywords",
      "Mindestens 10 Fotos hochladen (Aussen, Innen, Team, Produkte)",
      "Woechentlich Google Posts veroeffentlichen",
      "Primaer- UND Sekundaer-Kategorien setzen (max. 10)",
      "Produkte/Services mit Preisen und Beschreibungen anlegen",
      "Q&A selbst befuellen mit haeufigen Kundenfragen",
    ],
    commonMistakes: [
      "Keywords im Firmennamen (verstoesst gegen Richtlinien → Suspension!)",
      "Falsche Kategorie → rankt fuer falsche Suchanfragen",
      "Keine regelmaessigen Posts → Google wertet als inaktiv",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 100% – jedes fehlende Feld kostet Rankings",
  },
  {
    id: "bing-places",
    tier: "tier1",
    name: "Bing Places for Business",
    url: "https://www.bingplaces.com",
    country: "DACH",
    setupTime: "15-20 Min.",
    verificationMethod: "Telefon, E-Mail oder GBP-Import",
    freeFeatures: ["Fotos", "Oeffnungszeiten", "Kategorien", "Beschreibung"],
    optimizationTips: [
      "GBP-Import nutzen – uebernimmt alle Daten automatisch",
      "Nach Import alle Felder pruefen und ggf. korrigieren",
      "Bing wird von Alexa, Cortana und DuckDuckGo genutzt – unterschaetzte Reichweite",
      "Fotos separat hochladen – werden beim Import manchmal uebersprungen",
    ],
    commonMistakes: [
      "Nach GBP-Import nie wieder pruefen → Daten werden nicht synchronisiert",
      "Bing Places komplett ignorieren → 5-10% Suchmarktanteil verschenkt",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 90%+ – weniger Felder als GBP, aber alle wichtig",
  },
  {
    id: "apple-maps",
    tier: "tier1",
    name: "Apple Maps Connect",
    url: "https://mapsconnect.apple.com",
    country: "DACH",
    setupTime: "10-15 Min.",
    verificationMethod: "Apple ID + Telefonverifizierung",
    freeFeatures: ["Standort", "Oeffnungszeiten", "Fotos", "Kategorien", "Website-Link"],
    optimizationTips: [
      "Apple ID mit Firmen-E-Mail erstellen (nicht privat)",
      "Showcase-Fotos hochladen – Apple Maps zeigt Fotos prominenter als Google",
      "Action-Links nutzen (Reservierung, Bestellung) falls verfuegbar",
      "Siri nutzt Apple Maps → wichtig fuer Voice Search",
    ],
    commonMistakes: [
      "Private Apple ID verwenden → Zugang geht verloren bei Mitarbeiterwechsel",
      "Nur Pflichtfelder ausfuellen → verschenkt Siri-Sichtbarkeit",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 100% – wenige Felder, aber alle zaehlen fuer Siri",
  },
  {
    id: "yelp",
    tier: "tier1",
    name: "Yelp",
    url: "https://biz.yelp.de",
    country: "DACH",
    setupTime: "20-30 Min.",
    verificationMethod: "Telefon oder E-Mail",
    freeFeatures: ["Fotos", "Oeffnungszeiten", "Beschreibung", "Bewertungen beantworten", "Angebote"],
    optimizationTips: [
      "Eintrag 'claimen' falls bereits vorhanden (viele existieren automatisch)",
      "Alle Spezialitaeten/Highlights eintragen",
      "Auf jede Bewertung antworten – auch positive",
      "Yelp-Badge auf eigener Website einbinden (fuer Vertrauen, nicht fuer SEO)",
    ],
    commonMistakes: [
      "Kunden aktiv um Yelp-Bewertungen bitten → Yelp bestraft das mit Filter",
      "Negativen Bewertungen nicht antworten → schlecht fuer Reputation",
      "Eintrag nicht claimen → kein Zugriff auf Bewertungen und Daten",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 95%+ – Yelp ist in vielen Branchen die #2 nach Google",
  },
  {
    id: "gelbe-seiten",
    tier: "tier2",
    name: "Gelbe Seiten",
    url: "https://www.gelbeseiten.de",
    country: "DE",
    setupTime: "15-20 Min.",
    verificationMethod: "Telefon oder Post",
    freeFeatures: ["Basiseintrag", "Oeffnungszeiten", "Kontaktdaten", "1 Foto"],
    optimizationTips: [
      "Kostenloser Basiseintrag reicht fuer NAP-Signal",
      "Beschreibung mit lokalen Keywords optimieren",
      "Premium-Upgrade nur sinnvoll fuer hart umkaempfte Branchen",
      "Regelmaessig pruefen – Gelbe Seiten aktualisiert manchmal eigenstaendig",
    ],
    commonMistakes: [
      "Teure Premium-Pakete kaufen ohne ROI-Analyse",
      "Eintrag nach Erstellung nie wieder pruefen",
    ],
    linkType: "Varies",
    profileCompleteness: "Ziel: 80%+ – Basiseintrag genuegt fuer Citation-Wert",
  },
  {
    id: "meinestadt",
    tier: "tier2",
    name: "meinestadt.de",
    url: "https://www.meinestadt.de",
    country: "DE",
    setupTime: "15-20 Min.",
    verificationMethod: "E-Mail",
    freeFeatures: ["Basiseintrag", "Kontaktdaten", "Branche"],
    optimizationTips: [
      "Staerke: Hohe Domain Authority (DA 70+) und lokaler Fokus",
      "Stadt-spezifische URL-Struktur → starkes lokales Signal",
      "Kostenloser Eintrag genuegt – Premium selten noetig",
    ],
    commonMistakes: [
      "Stadt falsch zugeordnet bei Unternehmen an Stadtgrenze",
      "Eintrag doppelt erstellt (manuell + automatisch aus Handelsregister)",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 80%+ – wenige Felder, aber DA 70+ macht ihn wertvoll",
  },
  {
    id: "herold",
    tier: "tier2",
    name: "Herold.at",
    url: "https://www.herold.at",
    country: "AT",
    setupTime: "15-20 Min.",
    verificationMethod: "Telefon oder E-Mail",
    freeFeatures: ["Basiseintrag", "Kontaktdaten", "Oeffnungszeiten"],
    optimizationTips: [
      "Das #1 Verzeichnis in Oesterreich – Pflicht fuer AT-Unternehmen",
      "Kostenloser Basiseintrag fuer NAP-Signal ausreichend",
      "Bewertungen auf Herold beantworten – wenige Unternehmen tun das",
    ],
    commonMistakes: [
      "Als deutsches Unternehmen eintragen ohne AT-Standort",
      "Premium-Paket ohne Pruefung des Basis-ROI",
    ],
    linkType: "Varies",
    profileCompleteness: "Ziel: 85%+ – wichtigste Citation-Quelle in Oesterreich",
  },
  {
    id: "local-ch",
    tier: "tier2",
    name: "local.ch / search.ch",
    url: "https://www.local.ch",
    country: "CH",
    setupTime: "20-25 Min.",
    verificationMethod: "Telefon oder Post",
    freeFeatures: ["Basiseintrag", "Kontaktdaten", "Oeffnungszeiten", "Kategorie"],
    optimizationTips: [
      "Dominierendes Verzeichnis in der Schweiz – absolut Pflicht",
      "local.ch und search.ch teilen sich die Datenbank → ein Eintrag reicht",
      "Mehrsprachig eintragen (DE/FR/IT) falls relevant",
      "Bewertungen aktiv sammeln – wenig Wettbewerb in CH",
    ],
    commonMistakes: [
      "Eintrag nur in einer Sprache fuer mehrsprachigen Kanton",
      "search.ch vergessen (nutzt gleiche Daten, aber separate Plattform)",
    ],
    linkType: "Varies",
    profileCompleteness: "Ziel: 90%+ – essentiell fuer lokale Sichtbarkeit in der Schweiz",
  },
  {
    id: "jameda",
    tier: "industry",
    name: "Jameda (Gesundheit)",
    url: "https://www.jameda.de",
    country: "DE",
    setupTime: "30-45 Min.",
    verificationMethod: "Approbationsnachweis / Gewerbenachweis",
    freeFeatures: ["Basisprofil", "Bewertungen erhalten", "Fachgebiete"],
    optimizationTips: [
      "Das #1 Arztbewertungsportal in DE – Pflicht fuer Gesundheitsbranche",
      "Fachgebiete und Behandlungsmethoden detailliert ausfuellen",
      "Profilbild und Praxisfotos hochladen – erhoet Klickrate um 40%",
      "Auf ALLE Bewertungen antworten – Jameda gewichtet Antwortrate",
    ],
    commonMistakes: [
      "Profil unvollstaendig lassen → Patienten waehlen vollstaendige Profile",
      "Negative Bewertungen nicht beantworten oder aggressiv reagieren",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 95%+ – Profilvollstaendigkeit beeinflusst Jameda-Ranking direkt",
  },
  {
    id: "tripadvisor",
    tier: "industry",
    name: "TripAdvisor (Gastro/Hotel)",
    url: "https://www.tripadvisor.de",
    country: "DACH",
    setupTime: "20-30 Min.",
    verificationMethod: "Telefon oder E-Mail",
    freeFeatures: ["Profil", "Fotos", "Bewertungen beantworten", "Speisekarte"],
    optimizationTips: [
      "Eintrag 'claimen' (existiert oft automatisch aus Nutzerbeitraegen)",
      "Speisekarte/Menuekarte als PDF hochladen",
      "Fotos regelmaessig aktualisieren (saisonal)",
      "TripAdvisor-Widget auf eigener Website einbinden",
      "Top-Bewertungen auf eigener Website zitieren (mit Quellenangabe)",
    ],
    commonMistakes: [
      "Eintrag nicht claimen → kein Zugriff auf Bewertungen",
      "Nur auf negative Bewertungen antworten → wirkt defensiv",
      "Veraltete Speisekarte → Kundenenttaeuschung und negative Bewertungen",
    ],
    linkType: "NoFollow",
    profileCompleteness: "Ziel: 95%+ – TripAdvisor-Profil rankt oft auf Seite 1 fuer '[Restaurant] [Stadt]'",
  },
  {
    id: "myhammer",
    tier: "industry",
    name: "MyHammer (Handwerk)",
    url: "https://www.myhammer.de",
    country: "DE",
    setupTime: "30-45 Min.",
    verificationMethod: "Gewerbenachweis + Identitaetspruefung",
    freeFeatures: ["Basisprofil", "Bewertungen", "Angebotsanfragen erhalten"],
    optimizationTips: [
      "Referenzfotos von Projekten hochladen – Handwerk lebt von Bildern",
      "Alle Gewerke/Leistungen detailliert eintragen",
      "Einzugsgebiet praezise definieren (nicht zu gross, nicht zu klein)",
      "Schnelle Reaktion auf Anfragen → MyHammer belohnt Reaktionszeit",
    ],
    commonMistakes: [
      "Zu grosses Einzugsgebiet → irrelevante Anfragen und schlechte Bewertungen",
      "Keine Referenzfotos → deutlich weniger Anfragen",
      "Anfragen ignorieren → Profil wird herabgestuft",
    ],
    linkType: "DoFollow",
    profileCompleteness: "Ziel: 90%+ – Vollstaendige Profile erhalten 3x mehr Anfragen",
  },
];

const linkTypeColors: Record<string, string> = {
  DoFollow: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  NoFollow: "bg-muted text-muted-foreground",
  Varies: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const submissionChecklist = [
  "NAP exakt wie im Master-Dokument eingegeben",
  "Website-URL mit https:// und ohne Trailing Slash",
  "Oeffnungszeiten identisch mit Google Business Profil",
  "Kategorie moeglichst spezifisch gewaehlt",
  "Beschreibung mit lokalen Keywords optimiert",
  "Alle verfuegbaren Fotos hochgeladen",
  "Verifizierung sofort abgeschlossen",
  "Login-Daten im Passwort-Manager gespeichert",
  "Eintrag in Tracking-Tabelle dokumentiert",
];

const DirectorySubmissionStrategy = ({ tiers, countries, compact = false }: DirectorySubmissionStrategyProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<DirectoryTier | "all">("all");
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  const filtered = directories.filter((d) => {
    if (tiers && !tiers.includes(d.tier)) return false;
    if (countries && !countries.includes(d.country)) return false;
    if (selectedTier !== "all" && d.tier !== selectedTier) return false;
    return true;
  });

  const availableTiers = tiers || (Object.keys(tierMeta) as DirectoryTier[]);
  const displayed = compact ? filtered.slice(0, 6) : filtered;

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Verzeichnis-Strategien: Optimale Einreichung pro Plattform</h2>
        </div>
        <p className="text-muted-foreground">
          Detaillierte Einreichungs-Guides fuer die wichtigsten lokalen Verzeichnisse – mit Optimierungstipps, haeufigen Fehlern und Zeitschaetzungen.
        </p>
      </div>

      {/* Tier Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTier("all")}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
            selectedTier === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Alle ({directories.filter(d => (!tiers || tiers.includes(d.tier)) && (!countries || countries.includes(d.country))).length})
        </button>
        {availableTiers.map((tier) => {
          const count = directories.filter((d) => d.tier === tier && (!countries || countries.includes(d.country))).length;
          if (count === 0) return null;
          return (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                selectedTier === tier ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {tierMeta[tier].label} ({count})
            </button>
          );
        })}
      </div>

      {/* Directory Cards */}
      <div className="space-y-3">
        {displayed.map((dir) => (
          <Card key={dir.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === dir.id ? null : dir.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Globe className="w-5 h-5 text-primary shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{dir.name}</span>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", tierMeta[dir.tier].color)}>{tierMeta[dir.tier].label}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{dir.country}</span>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", linkTypeColors[dir.linkType])}>{dir.linkType}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">⏱ {dir.setupTime} · Verifizierung: {dir.verificationMethod}</p>
                  </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform shrink-0", expandedId === dir.id && "rotate-180")} />
              </div>

              {expandedId === dir.id && (
                <div className="border-t border-border p-4 space-y-4">
                  {/* Free Features */}
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Kostenlose Features</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {dir.freeFeatures.map((f, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Optimization Tips */}
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Optimierungstipps</span>
                    <ul className="mt-1 space-y-1.5">
                      {dir.optimizationTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wider">Haeufige Fehler</span>
                    </div>
                    <ul className="space-y-1">
                      {dir.commonMistakes.map((m, i) => (
                        <li key={i} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                          <span className="shrink-0">•</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Profile Completeness */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground"><strong>Profilvollstaendigkeit:</strong> {dir.profileCompleteness}</p>
                  </div>

                  {/* Link */}
                  <a
                    href={dir.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> {dir.name} oeffnen
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submission Checklist */}
      {!compact && (
        <div className="mt-8 bg-muted/50 rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Einreichungs-Checkliste (fuer jedes Verzeichnis)
            </h3>
            <button
              onClick={() => {
                navigator.clipboard.writeText(submissionChecklist.map((c, i) => `${i + 1}. ${c}`).join("\n"));
                setCopiedChecklist(true);
                setTimeout(() => setCopiedChecklist(false), 2000);
              }}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                copiedChecklist
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {copiedChecklist ? <><Check className="w-3.5 h-3.5" /> Kopiert!</> : <><Copy className="w-3.5 h-3.5" /> Kopieren</>}
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {submissionChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {displayed.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Globe className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Verzeichnisse fuer diese Filter gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default DirectorySubmissionStrategy;
