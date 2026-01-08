import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, Building2, Globe, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CantonData {
  name: string;
  nameShort: string;
  language: string;
  population: string;
  majorCity: string;
  keyDirectories: string[];
  seoTips: string[];
  competitionLevel: "niedrig" | "mittel" | "hoch" | "sehr hoch";
  topKeywords: string[];
}

const cantonData: Record<string, CantonData> = {
  ZH: {
    name: "Zürich",
    nameShort: "ZH",
    language: "Deutsch",
    population: "1.6 Mio.",
    majorCity: "Zürich",
    keyDirectories: ["local.ch", "search.ch", "zuerich.com", "Zürcher Handelskammer"],
    seoTips: [
      "Hoher Wettbewerb – fokussiere auf Nischen-Keywords",
      "Stadtteile als Keywords nutzen (Oerlikon, Seefeld, Altstetten)",
      "Mehrsprachige Kunden ansprechen (DE/EN)",
      "Google Business Posts regelmässig aktualisieren"
    ],
    competitionLevel: "sehr hoch",
    topKeywords: ["[Branche] Zürich", "[Branche] in meiner Nähe", "[Branche] Kreis 5"]
  },
  BE: {
    name: "Bern",
    nameShort: "BE",
    language: "Deutsch",
    population: "1.0 Mio.",
    majorCity: "Bern",
    keyDirectories: ["local.ch", "search.ch", "bern.com", "Berner Handelskammer"],
    seoTips: [
      "Bundesstadt-Keywords für B2B nutzen",
      "Regionale Dialekt-Begriffe berücksichtigen",
      "UNESCO-Altstadt für Tourismus-Keywords",
      "Berner Oberland für regionale Expansion"
    ],
    competitionLevel: "hoch",
    topKeywords: ["[Branche] Bern", "[Branche] Bundesstadt", "[Branche] Berner Altstadt"]
  },
  VD: {
    name: "Waadt",
    nameShort: "VD",
    language: "Französisch",
    population: "0.8 Mio.",
    majorCity: "Lausanne",
    keyDirectories: ["local.ch", "search.ch", "lausanne-tourisme.ch", "CVCI"],
    seoTips: [
      "Französische Keywords sind Pflicht",
      "Olympische Hauptstadt als USP",
      "EPFL/UNIL Umfeld für Tech-Startups",
      "Genfersee-Region einbeziehen"
    ],
    competitionLevel: "hoch",
    topKeywords: ["[Branche] Lausanne", "[Branche] Vaud", "[Branche] Lac Léman"]
  },
  GE: {
    name: "Genf",
    nameShort: "GE",
    language: "Französisch",
    population: "0.5 Mio.",
    majorCity: "Genf",
    keyDirectories: ["local.ch", "search.ch", "geneve.com", "CCIG"],
    seoTips: [
      "Internationale Keywords (FR/EN)",
      "UN/WHO Umfeld für B2B",
      "Luxus-Segment stark vertreten",
      "Grenzgänger-relevante Keywords"
    ],
    competitionLevel: "sehr hoch",
    topKeywords: ["[Branche] Genève", "[Branche] Geneva", "[Branche] international"]
  },
  TI: {
    name: "Tessin",
    nameShort: "TI",
    language: "Italienisch",
    population: "0.35 Mio.",
    majorCity: "Lugano",
    keyDirectories: ["local.ch", "search.ch", "ticino.ch", "Cc-Ti"],
    seoTips: [
      "Italienische Keywords für lokale Suchen",
      "Tourismus-Saison berücksichtigen",
      "Finanzplatz Lugano für B2B",
      "Grenzgänger aus Italien einbeziehen"
    ],
    competitionLevel: "mittel",
    topKeywords: ["[Branche] Lugano", "[Branche] Ticino", "[Branche] Locarno"]
  },
  BS: {
    name: "Basel-Stadt",
    nameShort: "BS",
    language: "Deutsch",
    population: "0.2 Mio.",
    majorCity: "Basel",
    keyDirectories: ["local.ch", "search.ch", "basel.com", "Handelskammer beider Basel"],
    seoTips: [
      "Pharma/Life Sciences Keywords",
      "Dreiländereck (CH/DE/FR) berücksichtigen",
      "Messe-Keywords für Events",
      "Grenzgänger-relevante Inhalte"
    ],
    competitionLevel: "hoch",
    topKeywords: ["[Branche] Basel", "[Branche] Dreiländereck", "[Branche] Pharma"]
  },
  AG: {
    name: "Aargau",
    nameShort: "AG",
    language: "Deutsch",
    population: "0.7 Mio.",
    majorCity: "Aarau",
    keyDirectories: ["local.ch", "search.ch", "aargautourismus.ch", "AIHK"],
    seoTips: [
      "Pendler-Keywords (Zürich-Nähe)",
      "Industrie-Standort vermarkten",
      "Badener Bäder für Wellness",
      "Günstigere Alternative zu Zürich positionieren"
    ],
    competitionLevel: "mittel",
    topKeywords: ["[Branche] Aargau", "[Branche] Aarau", "[Branche] Baden AG"]
  },
  SG: {
    name: "St. Gallen",
    nameShort: "SG",
    language: "Deutsch",
    population: "0.5 Mio.",
    majorCity: "St. Gallen",
    keyDirectories: ["local.ch", "search.ch", "st.gallen-bodensee.ch", "IHK St.Gallen"],
    seoTips: [
      "UNESCO Stiftsbezirk für Tourismus",
      "Bodensee-Region einbeziehen",
      "HSG/Universität für B2B",
      "Textilgeschichte als Alleinstellung"
    ],
    competitionLevel: "mittel",
    topKeywords: ["[Branche] St. Gallen", "[Branche] Bodensee", "[Branche] Ostschweiz"]
  },
  LU: {
    name: "Luzern",
    nameShort: "LU",
    language: "Deutsch",
    population: "0.4 Mio.",
    majorCity: "Luzern",
    keyDirectories: ["local.ch", "search.ch", "luzern.com", "IHK Zentralschweiz"],
    seoTips: [
      "Tourismus-Keywords sehr wichtig",
      "Zentralschweiz als Region nutzen",
      "Pilatus, Rigi für Ausflugsziele",
      "Steuervorteile für Unternehmen"
    ],
    competitionLevel: "hoch",
    topKeywords: ["[Branche] Luzern", "[Branche] Zentralschweiz", "[Branche] Vierwaldstättersee"]
  },
  ZG: {
    name: "Zug",
    nameShort: "ZG",
    language: "Deutsch",
    population: "0.13 Mio.",
    majorCity: "Zug",
    keyDirectories: ["local.ch", "search.ch", "zug.ch", "Zuger Wirtschaftskammer"],
    seoTips: [
      "Crypto Valley für Tech/Fintech",
      "Tiefe Steuern als USP",
      "Internationale Unternehmen als Zielgruppe",
      "Premium-Positionierung"
    ],
    competitionLevel: "mittel",
    topKeywords: ["[Branche] Zug", "[Branche] Crypto Valley", "[Branche] Zentralschweiz"]
  },
  GR: {
    name: "Graubünden",
    nameShort: "GR",
    language: "Deutsch/Romanisch/Italienisch",
    population: "0.2 Mio.",
    majorCity: "Chur",
    keyDirectories: ["local.ch", "search.ch", "graubuenden.ch", "Bündner Gewerbeverband"],
    seoTips: [
      "Saisonale Keywords (Winter/Sommer)",
      "Davos, St. Moritz als Premium-Destinationen",
      "Dreisprachigkeit berücksichtigen",
      "Outdoor/Natur-Keywords"
    ],
    competitionLevel: "niedrig",
    topKeywords: ["[Branche] Graubünden", "[Branche] Davos", "[Branche] Engadin"]
  },
  VS: {
    name: "Wallis",
    nameShort: "VS",
    language: "Deutsch/Französisch",
    population: "0.35 Mio.",
    majorCity: "Sion",
    keyDirectories: ["local.ch", "search.ch", "valais.ch", "Walliser Handelskammer"],
    seoTips: [
      "Zweisprachig (DE/FR) optimieren",
      "Tourismus-Keywords (Zermatt, Verbier)",
      "Wein-Region für Gastronomie",
      "Saisonale Schwankungen einplanen"
    ],
    competitionLevel: "niedrig",
    topKeywords: ["[Branche] Wallis", "[Branche] Sion", "[Branche] Zermatt"]
  }
};

const competitionColors = {
  "niedrig": "bg-green-500/10 text-green-700 border-green-500/20",
  "mittel": "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  "hoch": "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "sehr hoch": "bg-red-500/10 text-red-700 border-red-500/20"
};

const SwissCantonSelector = () => {
  const [selectedCanton, setSelectedCanton] = useState<string>("ZH");
  const canton = cantonData[selectedCanton];

  return (
    <div className="my-12 p-6 bg-muted/30 rounded-2xl border">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-primary" />
        Interaktive Kantone-Auswahl
      </h3>
      
      <p className="text-muted-foreground mb-6">
        Wähle deinen Kanton und erhalte spezifische Local SEO Tipps:
      </p>

      {/* Canton Selection Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 mb-8">
        {Object.entries(cantonData).map(([key, data]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedCanton(key)}
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              selectedCanton === key
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-background hover:bg-muted border"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {key}
          </motion.button>
        ))}
      </div>

      {/* Selected Canton Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCanton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">🇨🇭</span>
                  {canton.name}
                </CardTitle>
                <Badge className={`${competitionColors[canton.competitionLevel]} border`}>
                  Wettbewerb: {canton.competitionLevel}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {canton.language}
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {canton.majorCity}
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  {canton.population} Einwohner
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* SEO Tips */}
              <div>
                <h4 className="font-semibold mb-3 text-lg">📍 Local SEO Tipps für {canton.name}</h4>
                <ul className="space-y-2">
                  {canton.seoTips.map((tip, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Top Keywords */}
              <div>
                <h4 className="font-semibold mb-3 text-lg">🔍 Beispiel-Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {canton.topKeywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Directories */}
              <div>
                <h4 className="font-semibold mb-3 text-lg">📁 Wichtige Verzeichnisse</h4>
                <div className="flex flex-wrap gap-2">
                  {canton.keyDirectories.map((dir, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {dir}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SwissCantonSelector;
