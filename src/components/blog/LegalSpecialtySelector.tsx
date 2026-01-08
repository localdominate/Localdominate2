import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Briefcase, Scale, Car, Home, FileText, 
  Building2, Monitor, Heart, HardHat, HandHeart, TrendingDown 
} from "lucide-react";

interface LegalSpecialty {
  id: string;
  name: string;
  icon: React.ElementType;
  keywords: string[];
  longTail: string[];
  emergencyKeywords?: string[];
  volume: "Sehr hoch" | "Hoch" | "Mittel" | "Niedrig";
  competition: "Sehr hoch" | "Hoch" | "Mittel" | "Niedrig";
  cpc: string;
}

const specialties: LegalSpecialty[] = [
  {
    id: "familienrecht",
    name: "Familienrecht",
    icon: Users,
    keywords: ["Familienrecht Anwalt [Stadt]", "Scheidungsanwalt [Stadt]", "Sorgerecht Anwalt [Stadt]"],
    longTail: ["Scheidung Unterhalt berechnen", "Sorgerecht Vater Rechte", "Zugewinnausgleich Haus", "Ehevertrag nachträglich"],
    emergencyKeywords: ["Kindesentführung Anwalt", "Eilverfahren Umgangsrecht"],
    volume: "Sehr hoch",
    competition: "Sehr hoch",
    cpc: "8-15 €"
  },
  {
    id: "arbeitsrecht",
    name: "Arbeitsrecht",
    icon: Briefcase,
    keywords: ["Arbeitsrecht Anwalt [Stadt]", "Kündigungsschutz [Stadt]", "Abfindung Anwalt [Stadt]"],
    longTail: ["Kündigung erhalten was tun", "Abfindung verhandeln Tipps", "Aufhebungsvertrag prüfen", "Zeugnis schlecht formuliert"],
    emergencyKeywords: ["Fristlose Kündigung heute erhalten", "Arbeitsrecht Notfall"],
    volume: "Sehr hoch",
    competition: "Sehr hoch",
    cpc: "6-12 €"
  },
  {
    id: "strafrecht",
    name: "Strafrecht",
    icon: Scale,
    keywords: ["Strafverteidiger [Stadt]", "Anwalt Strafrecht [Stadt]", "Strafrecht Kanzlei [Stadt]"],
    longTail: ["Vorladung Polizei Anwalt", "Strafbefehl Einspruch Frist", "Bewährung Widerruf verhindern", "Untersuchungshaft vermeiden"],
    emergencyKeywords: ["Anwalt Festnahme sofort", "Strafverteidiger Notdienst", "Hausdurchsuchung Anwalt"],
    volume: "Hoch",
    competition: "Hoch",
    cpc: "10-20 €"
  },
  {
    id: "verkehrsrecht",
    name: "Verkehrsrecht",
    icon: Car,
    keywords: ["Verkehrsrecht Anwalt [Stadt]", "Bußgeld Anwalt [Stadt]", "Führerschein Anwalt [Stadt]"],
    longTail: ["Führerscheinentzug verhindern", "Punkte Flensburg löschen", "Blitzer Einspruch Erfolgsquote", "Fahrerflucht Strafe"],
    emergencyKeywords: ["Alkohol am Steuer Anwalt", "MPU vermeiden"],
    volume: "Hoch",
    competition: "Hoch",
    cpc: "5-10 €"
  },
  {
    id: "mietrecht",
    name: "Mietrecht",
    icon: Home,
    keywords: ["Mietrecht Anwalt [Stadt]", "Mieterschutz [Stadt]", "Vermieter Anwalt [Stadt]"],
    longTail: ["Mieterhöhung prüfen lassen", "Eigenbedarfskündigung abwehren", "Kaution nicht zurück", "Schimmel Mietminderung"],
    volume: "Hoch",
    competition: "Mittel",
    cpc: "4-8 €"
  },
  {
    id: "erbrecht",
    name: "Erbrecht",
    icon: FileText,
    keywords: ["Erbrecht Anwalt [Stadt]", "Testament Anwalt [Stadt]", "Erbschaft Anwalt [Stadt]"],
    longTail: ["Testament anfechten Kosten", "Pflichtteil einfordern Frist", "Erbengemeinschaft auflösen", "Enterbt Ansprüche"],
    volume: "Mittel",
    competition: "Mittel",
    cpc: "6-12 €"
  },
  {
    id: "gesellschaftsrecht",
    name: "Gesellschaftsrecht",
    icon: Building2,
    keywords: ["Gesellschaftsrecht [Stadt]", "Anwalt GmbH-Gründung [Stadt]", "Handelsrecht [Stadt]"],
    longTail: ["Gesellschafterstreit lösen", "Geschäftsführerhaftung vermeiden", "GmbH Gründung Kosten", "Gesellschafter auszahlen"],
    volume: "Mittel",
    competition: "Mittel",
    cpc: "8-15 €"
  },
  {
    id: "itrecht",
    name: "IT-Recht",
    icon: Monitor,
    keywords: ["IT-Recht Anwalt [Stadt]", "Datenschutzanwalt [Stadt]", "Internetrecht [Stadt]"],
    longTail: ["DSGVO Abmahnung erhalten", "AGB Online-Shop erstellen", "Markenrechtsverletzung Amazon", "Negative Bewertung löschen"],
    volume: "Mittel",
    competition: "Mittel",
    cpc: "7-14 €"
  },
  {
    id: "medizinrecht",
    name: "Medizinrecht",
    icon: Heart,
    keywords: ["Medizinrecht Anwalt [Stadt]", "Behandlungsfehler Anwalt [Stadt]", "Arzthaftung [Stadt]"],
    longTail: ["Kunstfehler Arzt verklagen", "Schmerzensgeld berechnen", "Behandlungsfehler Gutachter", "Patientenakte anfordern"],
    volume: "Mittel",
    competition: "Mittel",
    cpc: "10-18 €"
  },
  {
    id: "baurecht",
    name: "Baurecht",
    icon: HardHat,
    keywords: ["Baurecht Anwalt [Stadt]", "Architektenrecht [Stadt]", "Baumängel Anwalt [Stadt]"],
    longTail: ["Baumängel reklamieren Frist", "Bauverzögerung Schadensersatz", "Handwerker Pfusch Rechte", "Bauabnahme verweigern"],
    volume: "Mittel",
    competition: "Niedrig",
    cpc: "6-12 €"
  },
  {
    id: "sozialrecht",
    name: "Sozialrecht",
    icon: HandHeart,
    keywords: ["Sozialrecht Anwalt [Stadt]", "Bürgergeld Anwalt [Stadt]", "Rentenrecht [Stadt]"],
    longTail: ["Erwerbsminderungsrente abgelehnt", "Krankenkasse verklagen", "Pflegegrad Widerspruch", "Schwerbehinderung beantragen"],
    volume: "Mittel",
    competition: "Niedrig",
    cpc: "3-6 €"
  },
  {
    id: "insolvenzrecht",
    name: "Insolvenzrecht",
    icon: TrendingDown,
    keywords: ["Insolvenzrecht Anwalt [Stadt]", "Schuldenberater [Stadt]", "Privatinsolvenz [Stadt]"],
    longTail: ["Privatinsolvenz Ablauf Dauer", "Restschuldbefreiung Voraussetzung", "Firmeninsolvenz vermeiden", "Insolvenzanfechtung abwehren"],
    volume: "Niedrig",
    competition: "Niedrig",
    cpc: "4-8 €"
  }
];

const getVolumeColor = (volume: string) => {
  switch (volume) {
    case "Sehr hoch": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Hoch": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Mittel": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

const getCompetitionColor = (competition: string) => {
  switch (competition) {
    case "Sehr hoch": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "Hoch": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "Mittel": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  }
};

const LegalSpecialtySelector = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<LegalSpecialty>(specialties[0]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {specialties.map((specialty) => {
          const Icon = specialty.icon;
          const isSelected = selectedSpecialty.id === specialty.id;
          
          return (
            <button
              key={specialty.id}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <Icon className={`h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs text-center font-medium ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                {specialty.name}
              </span>
            </button>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <selectedSpecialty.icon className="h-5 w-5 text-primary" />
            {selectedSpecialty.name}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge className={getVolumeColor(selectedSpecialty.volume)}>
              Suchvolumen: {selectedSpecialty.volume}
            </Badge>
            <Badge className={getCompetitionColor(selectedSpecialty.competition)}>
              Wettbewerb: {selectedSpecialty.competition}
            </Badge>
            <Badge variant="outline">
              CPC: {selectedSpecialty.cpc}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm">Lokale Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {selectedSpecialty.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="font-mono text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-sm">Long-Tail Keywords (hohe Conversion)</h4>
            <div className="flex flex-wrap gap-2">
              {selectedSpecialty.longTail.map((keyword, index) => (
                <Badge key={index} variant="outline" className="font-mono text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          {selectedSpecialty.emergencyKeywords && (
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600 dark:text-red-400">
                🚨 Notfall-Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSpecialty.emergencyKeywords.map((keyword, index) => (
                  <Badge key={index} className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 font-mono text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
            💡 <strong>Tipp:</strong> Ersetzen Sie [Stadt] mit Ihrem Standort. Bei mehreren Standorten 
            erstellen Sie für jeden eine eigene Landingpage mit lokalisiertem Content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalSpecialtySelector;
