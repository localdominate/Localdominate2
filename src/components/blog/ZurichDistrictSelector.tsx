import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, MapPin, Briefcase, GraduationCap, Trees, Train, Globe, ShoppingBag, PartyPopper, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface District {
  id: string;
  name: string;
  kreis: string;
  icon: React.ReactNode;
  description: string;
  competition: "niedrig" | "mittel" | "hoch" | "sehr hoch";
  characteristics: string[];
  keywords: string[];
  seoTips: string[];
  targetAudience: string;
}

const districts: District[] = [
  {
    id: "kreis1",
    name: "Altstadt & City",
    kreis: "Kreis 1",
    icon: <Building2 className="h-5 w-5" />,
    description: "Das Herz von Zürich mit Bahnhofstrasse, Paradeplatz und historischer Altstadt. Höchste Kundenfrequenz, aber auch härtester Wettbewerb.",
    competition: "sehr hoch",
    characteristics: ["Luxus-Shopping", "Banken & Finanzen", "Tourismus", "Gastronomie"],
    keywords: ["Bahnhofstrasse Zürich", "Paradeplatz", "Niederdorf Restaurant", "Luxus Zürich"],
    seoTips: [
      "Auf Nischen-Keywords fokussieren (z.B. 'veganes Restaurant Niederdorf')",
      "Englische Keywords für Touristen integrieren",
      "Premium-Positionierung in Bewertungen betonen"
    ],
    targetAudience: "Touristen, Geschäftsleute, Luxus-Kunden"
  },
  {
    id: "kreis2",
    name: "Enge & Wollishofen",
    kreis: "Kreis 2",
    icon: <Users className="h-5 w-5" />,
    description: "Beliebtes Wohnquartier am See mit gehobener Wohnlage und familienfreundlicher Atmosphäre.",
    competition: "mittel",
    characteristics: ["See-Nähe", "Wohngebiet", "Familien", "Strandbäder"],
    keywords: ["Wollishofen Zürich", "Enge Restaurant", "Zürichsee", "Mythenquai"],
    seoTips: [
      "Lokale Community ansprechen",
      "Familien-Keywords integrieren",
      "Sommer-Saison mit Badi-Keywords nutzen"
    ],
    targetAudience: "Familien, Anwohner, Seebesucher"
  },
  {
    id: "kreis3",
    name: "Wiedikon",
    kreis: "Kreis 3",
    icon: <Home className="h-5 w-5" />,
    description: "Aufstrebendes Quartier mit guter Durchmischung, beliebter Wohnort für junge Familien und Berufstätige.",
    competition: "mittel",
    characteristics: ["Familienfreundlich", "Aufstrebend", "Gute Anbindung", "Multicultural"],
    keywords: ["Wiedikon Zürich", "Schmiede Wiedikon", "Goldbrunnenplatz"],
    seoTips: [
      "Quartier-spezifische Begriffe verwenden",
      "Auf wachsende Bevölkerung setzen",
      "Lokale Events und Märkte erwähnen"
    ],
    targetAudience: "Junge Familien, Berufstätige, Studenten"
  },
  {
    id: "kreis4",
    name: "Langstrasse & Aussersihl",
    kreis: "Kreis 4",
    icon: <PartyPopper className="h-5 w-5" />,
    description: "Das multikulturelle Szeneviertel mit Nightlife, internationaler Küche und kreativem Flair.",
    competition: "hoch",
    characteristics: ["Nightlife", "Multikulti", "Gastronomie", "Kreativszene"],
    keywords: ["Langstrasse Zürich", "Bar Langstrasse", "Club Zürich", "Aussersihl"],
    seoTips: [
      "Nachtleben-Keywords gezielt einsetzen",
      "Internationale Küchen-Keywords (Thai, Türkisch, etc.)",
      "Szene-Begriffe und Trends aufgreifen"
    ],
    targetAudience: "Junge Erwachsene, Nachtschwärmer, Foodies"
  },
  {
    id: "kreis5",
    name: "Industriequartier & Zürich West",
    kreis: "Kreis 5",
    icon: <Briefcase className="h-5 w-5" />,
    description: "Das Tech- und Kreativzentrum mit Google, Startups und der trendigen Geroldstrasse. Zürichs Innovationsmotor.",
    competition: "hoch",
    characteristics: ["Tech & Startups", "Google Zürich", "Kreativwirtschaft", "Modern"],
    keywords: ["Zürich West", "Geroldstrasse", "Technopark Zürich", "Startup Zürich"],
    seoTips: [
      "Tech- und Business-Keywords priorisieren",
      "Englische Keywords für internationale Firmen",
      "Innovation und Modernität betonen"
    ],
    targetAudience: "Tech-Arbeiter, Kreative, Startups, Expats"
  },
  {
    id: "kreis6",
    name: "Oberstrass & Unterstrass",
    kreis: "Kreis 6",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Universitätsviertel mit ETH und Universität Zürich. Studentisches Flair trifft auf Wohnquartier.",
    competition: "mittel",
    characteristics: ["Universität", "ETH", "Studenten", "Akademisch"],
    keywords: ["ETH Zürich", "Universität Zürich", "Irchel", "Oberstrass"],
    seoTips: [
      "Studenten-freundliche Preise kommunizieren",
      "Nähe zu ETH/Uni erwähnen",
      "Akademische Zielgruppe ansprechen"
    ],
    targetAudience: "Studenten, Akademiker, Forscher"
  },
  {
    id: "kreis7",
    name: "Fluntern & Hottingen",
    kreis: "Kreis 7",
    icon: <Trees className="h-5 w-5" />,
    description: "Nobelquartier am Zürichberg mit Zoo, Dolder und gehobener Wohnlage. Premium-Segment.",
    competition: "hoch",
    characteristics: ["Nobel", "Zoo Zürich", "Dolder", "Villenviertel"],
    keywords: ["Zürichberg", "Zoo Zürich", "Dolder Grand", "Fluntern"],
    seoTips: [
      "Premium-Positionierung wählen",
      "Qualität vor Preis kommunizieren",
      "Exklusivität und Tradition betonen"
    ],
    targetAudience: "Wohlhabende Familien, Touristen, Premium-Kunden"
  },
  {
    id: "kreis8",
    name: "Seefeld & Riesbach",
    kreis: "Kreis 8",
    icon: <Globe className="h-5 w-5" />,
    description: "Premium-Wohnlage am See mit vielen Expats, internationalem Flair und gehobener Gastronomie.",
    competition: "sehr hoch",
    characteristics: ["Expats", "Premium", "See-Lage", "International"],
    keywords: ["Seefeld Zürich", "Bellevue", "Seefeldstrasse", "Tiefenbrunnen"],
    seoTips: [
      "Zweisprachige Inhalte (DE/EN) sind Pflicht",
      "Internationale Kunden aktiv ansprechen",
      "Premium-Service und Qualität hervorheben"
    ],
    targetAudience: "Expats, internationale Kunden, Premium-Segment"
  },
  {
    id: "kreis9",
    name: "Altstetten & Albisrieden",
    kreis: "Kreis 9",
    icon: <Train className="h-5 w-5" />,
    description: "Aufstrebendes Quartier mit guter Anbindung und wachsender Bevölkerung. Noch moderater Wettbewerb.",
    competition: "niedrig",
    characteristics: ["Erschwinglich", "Wachsend", "Gute Anbindung", "Familienfreundlich"],
    keywords: ["Altstetten Zürich", "Albisrieden", "Letzigrund", "Zürich West"],
    seoTips: [
      "Früh Marktposition aufbauen",
      "Lokale Stammkundschaft ansprechen",
      "Preis-Leistung kommunizieren"
    ],
    targetAudience: "Junge Familien, Berufspendler, Preisbewusste"
  },
  {
    id: "kreis10",
    name: "Höngg & Wipkingen",
    kreis: "Kreis 10",
    icon: <Trees className="h-5 w-5" />,
    description: "Grünes Wohnquartier mit dörflichem Charakter und hervorragender Lebensqualität.",
    competition: "niedrig",
    characteristics: ["Grün", "Familienfreundlich", "Dorfcharakter", "Ruhig"],
    keywords: ["Höngg Zürich", "Wipkingen", "Käferberg", "ETH Hönggerberg"],
    seoTips: [
      "Lokale Community-Events nutzen",
      "Dorfcharakter und Tradition betonen",
      "Familien-Keywords priorisieren"
    ],
    targetAudience: "Familien, Naturliebhaber, Ruhesuchende"
  },
  {
    id: "kreis11",
    name: "Oerlikon & Seebach",
    kreis: "Kreis 11",
    icon: <ShoppingBag className="h-5 w-5" />,
    description: "Business-Standort mit Messe Zürich, Einkaufszentrum und wachsendem Wohnraum.",
    competition: "mittel",
    characteristics: ["Business", "Messe Zürich", "Shopping", "Wachstum"],
    keywords: ["Oerlikon Zürich", "Messe Zürich", "Glatt Einkaufszentrum", "Seebach"],
    seoTips: [
      "Messe-Events für saisonales Marketing nutzen",
      "Business-Kunden während Messen ansprechen",
      "Mittagsangebote für Büroangestellte"
    ],
    targetAudience: "Geschäftsleute, Messebesucher, Anwohner"
  },
  {
    id: "kreis12",
    name: "Schwamendingen",
    kreis: "Kreis 12",
    icon: <Users className="h-5 w-5" />,
    description: "Multikulturelles Wohnquartier mit starker Gemeinschaft und familienfreundlicher Infrastruktur.",
    competition: "niedrig",
    characteristics: ["Multikulturell", "Familienfreundlich", "Erschwinglich", "Gemeinschaft"],
    keywords: ["Schwamendingen Zürich", "Schwamendingerplatz", "Hirzenbach"],
    seoTips: [
      "Mehrsprachige Angebote in Betracht ziehen",
      "Lokale Feste und Events nutzen",
      "Starke Stammkundschaft aufbauen"
    ],
    targetAudience: "Familien, diverse Communities, Preisbewusste"
  }
];

const competitionColors = {
  "niedrig": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "mittel": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "hoch": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "sehr hoch": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
};

const ZurichDistrictSelector = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  return (
    <div className="my-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
        {districts.map((district) => (
          <motion.button
            key={district.id}
            onClick={() => setSelectedDistrict(selectedDistrict?.id === district.id ? null : district)}
            className={`p-3 rounded-lg border-2 transition-all text-left ${
              selectedDistrict?.id === district.id
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 bg-card"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary">{district.icon}</span>
              <Badge variant="outline" className="text-xs">
                {district.kreis}
              </Badge>
            </div>
            <h4 className="font-medium text-sm">{district.name}</h4>
            <Badge className={`mt-2 text-xs ${competitionColors[district.competition]}`}>
              {district.competition}
            </Badge>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedDistrict && (
          <motion.div
            key={selectedDistrict.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary">{selectedDistrict.icon}</span>
                  {selectedDistrict.kreis}: {selectedDistrict.name}
                  <Badge className={competitionColors[selectedDistrict.competition]}>
                    Wettbewerb: {selectedDistrict.competition}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-muted-foreground">{selectedDistrict.description}</p>
                  <p className="text-sm mt-2">
                    <strong>Zielgruppe:</strong> {selectedDistrict.targetAudience}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Charakteristik
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDistrict.characteristics.map((char) => (
                        <Badge key={char} variant="secondary">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Top-Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDistrict.keywords.map((keyword) => (
                        <Badge key={keyword} variant="outline" className="bg-primary/5">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">💡 SEO-Tipps für {selectedDistrict.name}</h4>
                  <ul className="space-y-2">
                    {selectedDistrict.seoTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedDistrict && (
        <p className="text-center text-muted-foreground text-sm">
          👆 Klicken Sie auf einen Stadtteil für detaillierte SEO-Strategien
        </p>
      )}
    </div>
  );
};

export default ZurichDistrictSelector;