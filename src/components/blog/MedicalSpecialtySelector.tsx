import { useState } from "react";
import { Search, TrendingUp, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Specialty {
  id: string;
  name: string;
  icon: string;
  mainKeywords: string[];
  longTailKeywords: string[];
  emergencyKeywords: string[];
  searchVolume: "Sehr hoch" | "Hoch" | "Mittel" | "Niedrig";
  competition: "Sehr hoch" | "Hoch" | "Mittel" | "Niedrig";
  avgCPC: string;
}

const specialties: Specialty[] = [
  {
    id: "allgemeinmedizin",
    name: "Allgemeinmedizin / Hausarzt",
    icon: "🏥",
    mainKeywords: ["Hausarzt [Stadt]", "Allgemeinmediziner [Stadt]", "Hausarztpraxis [Stadt]"],
    longTailKeywords: ["Hausarzt mit Abendsprechstunde", "Hausarzt Samstag geöffnet", "Hausarzt ohne Termin", "Hausarzt Hausbesuche"],
    emergencyKeywords: ["Hausarzt Notdienst", "Ärztlicher Bereitschaftsdienst"],
    searchVolume: "Sehr hoch",
    competition: "Sehr hoch",
    avgCPC: "2,50€"
  },
  {
    id: "zahnarzt",
    name: "Zahnarzt",
    icon: "🦷",
    mainKeywords: ["Zahnarzt [Stadt]", "Zahnärztin [Stadt]", "Zahnarztpraxis [Stadt]"],
    longTailKeywords: ["Zahnarzt Angstpatienten", "Zahnimplantate Kosten", "Professionelle Zahnreinigung", "Zahnarzt Kinder freundlich"],
    emergencyKeywords: ["Zahnarzt Notdienst", "Zahnschmerzen Notfall", "Zahnarzt Wochenende"],
    searchVolume: "Sehr hoch",
    competition: "Sehr hoch",
    avgCPC: "3,80€"
  },
  {
    id: "orthopaedie",
    name: "Orthopädie",
    icon: "🦴",
    mainKeywords: ["Orthopäde [Stadt]", "Orthopädische Praxis [Stadt]", "Sportmediziner [Stadt]"],
    longTailKeywords: ["Knieschmerzen Spezialist", "Rückenschmerzen Arzt", "Bandscheibenvorfall Behandlung", "Arthrose Therapie"],
    emergencyKeywords: ["Orthopäde Notfall", "Sportverletzung Arzt"],
    searchVolume: "Hoch",
    competition: "Hoch",
    avgCPC: "2,90€"
  },
  {
    id: "dermatologie",
    name: "Dermatologie / Hautarzt",
    icon: "🔬",
    mainKeywords: ["Hautarzt [Stadt]", "Dermatologe [Stadt]", "Hautklinik [Stadt]"],
    longTailKeywords: ["Muttermal kontrollieren", "Akne Behandlung", "Hautkrebsvorsorge", "Neurodermitis Spezialist"],
    emergencyKeywords: ["Hautarzt akut Termin", "Hautausschlag Arzt"],
    searchVolume: "Hoch",
    competition: "Hoch",
    avgCPC: "2,20€"
  },
  {
    id: "gynaekologie",
    name: "Gynäkologie / Frauenarzt",
    icon: "👩‍⚕️",
    mainKeywords: ["Frauenarzt [Stadt]", "Gynäkologe [Stadt]", "Frauenärztin [Stadt]"],
    longTailKeywords: ["Schwangerschaftsvorsorge", "Verhütungsberatung", "Kinderwunsch Spezialist", "Wechseljahre Behandlung"],
    emergencyKeywords: ["Frauenarzt Notfall", "Gynäkologischer Notdienst"],
    searchVolume: "Hoch",
    competition: "Hoch",
    avgCPC: "2,10€"
  },
  {
    id: "augenheilkunde",
    name: "Augenheilkunde / Augenarzt",
    icon: "👁️",
    mainKeywords: ["Augenarzt [Stadt]", "Augenklinik [Stadt]", "Ophthalmologe [Stadt]"],
    longTailKeywords: ["Grauer Star OP", "Lasik [Stadt]", "Augendruckmessung", "Makuladegeneration Behandlung"],
    emergencyKeywords: ["Augenarzt Notdienst", "Augenverletzung Notfall"],
    searchVolume: "Mittel",
    competition: "Mittel",
    avgCPC: "2,60€"
  },
  {
    id: "hno",
    name: "HNO-Heilkunde",
    icon: "👂",
    mainKeywords: ["HNO Arzt [Stadt]", "Hals-Nasen-Ohren Arzt [Stadt]", "HNO Praxis [Stadt]"],
    longTailKeywords: ["Hörtest machen", "Nasenscheidewand OP", "Schnarchen Behandlung", "Tinnitus Spezialist"],
    emergencyKeywords: ["HNO Notdienst", "Nasenbluten Arzt"],
    searchVolume: "Mittel",
    competition: "Mittel",
    avgCPC: "1,80€"
  },
  {
    id: "paediatrie",
    name: "Pädiatrie / Kinderarzt",
    icon: "👶",
    mainKeywords: ["Kinderarzt [Stadt]", "Kinderärztin [Stadt]", "Kinderarztpraxis [Stadt]"],
    longTailKeywords: ["U-Untersuchungen", "Kinderarzt Impfungen", "ADHS Spezialist Kinder", "Allergietest Kind"],
    emergencyKeywords: ["Kinderarzt Notdienst", "Kinderärztlicher Notfall", "Kinderarzt Wochenende"],
    searchVolume: "Hoch",
    competition: "Hoch",
    avgCPC: "2,00€"
  },
  {
    id: "kardiologie",
    name: "Kardiologie",
    icon: "❤️",
    mainKeywords: ["Kardiologe [Stadt]", "Herzspezlist [Stadt]", "Kardiologische Praxis [Stadt]"],
    longTailKeywords: ["Herzultraschall", "Bluthochdruck Spezialist", "EKG machen lassen", "Herzrhythmusstörungen"],
    emergencyKeywords: ["Kardiologe Notfall", "Brustschmerzen Arzt"],
    searchVolume: "Mittel",
    competition: "Mittel",
    avgCPC: "3,20€"
  },
  {
    id: "neurologie",
    name: "Neurologie",
    icon: "🧠",
    mainKeywords: ["Neurologe [Stadt]", "Neurologische Praxis [Stadt]", "Nervenarzt [Stadt]"],
    longTailKeywords: ["Kopfschmerzen Spezialist", "Migräne Therapie", "Multiple Sklerose Arzt", "Parkinson Spezialist"],
    emergencyKeywords: ["Neurologe Notfall", "Schlaganfall Symptome"],
    searchVolume: "Mittel",
    competition: "Mittel",
    avgCPC: "2,40€"
  },
  {
    id: "psychiatrie",
    name: "Psychiatrie / Psychotherapie",
    icon: "🧘",
    mainKeywords: ["Psychiater [Stadt]", "Psychotherapeut [Stadt]", "Psychologische Praxis [Stadt]"],
    longTailKeywords: ["Burnout Behandlung", "Depressionen Hilfe", "Angststörung Therapie", "ADHS Erwachsene"],
    emergencyKeywords: ["Psychiatrischer Notdienst", "Krisenintervention"],
    searchVolume: "Hoch",
    competition: "Mittel",
    avgCPC: "1,90€"
  },
  {
    id: "urologie",
    name: "Urologie",
    icon: "🩺",
    mainKeywords: ["Urologe [Stadt]", "Urologische Praxis [Stadt]", "Urologie [Stadt]"],
    longTailKeywords: ["Prostata Vorsorge", "Vasektomie Kosten", "Blasenentzündung Mann", "Nierensteine Behandlung"],
    emergencyKeywords: ["Urologe Notfall", "Urologischer Notdienst"],
    searchVolume: "Mittel",
    competition: "Mittel",
    avgCPC: "2,30€"
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

const MedicalSpecialtySelector = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(specialties[0]);

  return (
    <div className="my-8 space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {specialties.map((specialty) => (
          <button
            key={specialty.id}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`p-3 rounded-lg border text-center transition-all hover:scale-105 ${
              selectedSpecialty?.id === specialty.id
                ? "border-primary bg-primary/10 shadow-md"
                : "border-border hover:border-primary/50"
            }`}
          >
            <span className="text-2xl block mb-1">{specialty.icon}</span>
            <span className="text-xs font-medium leading-tight block">
              {specialty.name.split(" / ")[0]}
            </span>
          </button>
        ))}
      </div>

      {selectedSpecialty && (
        <Card className="border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3">
              <span className="text-3xl">{selectedSpecialty.icon}</span>
              <div>
                <span className="text-xl">{selectedSpecialty.name}</span>
                <div className="flex gap-2 mt-2">
                  <Badge className={getVolumeColor(selectedSpecialty.searchVolume)}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Suchvolumen: {selectedSpecialty.searchVolume}
                  </Badge>
                  <Badge className={getCompetitionColor(selectedSpecialty.competition)}>
                    Wettbewerb: {selectedSpecialty.competition}
                  </Badge>
                  <Badge variant="outline">
                    Ø CPC: {selectedSpecialty.avgCPC}
                  </Badge>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Haupt-Keywords (lokal)
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSpecialty.mainKeywords.map((keyword, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3">
                    <Search className="h-3 w-3 mr-1.5 opacity-50" />
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Long-Tail Keywords (hohe Conversion)
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSpecialty.longTailKeywords.map((keyword, i) => (
                  <Badge key={i} variant="outline" className="text-sm py-1.5 px-3">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-500" />
                Notdienst-Keywords (höchste Kaufabsicht)
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSpecialty.emergencyKeywords.map((keyword, i) => (
                  <Badge key={i} className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-sm py-1.5 px-3">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>💡 Tipp:</strong> Kombinieren Sie Haupt-Keywords mit Ihrem Stadtteil für noch gezieltere Rankings. 
                Beispiel: <em>"{selectedSpecialty.mainKeywords[0].replace("[Stadt]", "Berlin Mitte")}"</em>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MedicalSpecialtySelector;
