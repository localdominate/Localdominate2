import { useState } from "react";
import { ExternalLink, Star, Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Portal {
  name: string;
  url: string;
  region: ("DE" | "AT" | "CH")[];
  monthlyVisitors: string;
  costFree: boolean;
  premiumFrom: string | null;
  priority: number;
  features: string[];
  bestFor: string;
}

const portals: Portal[] = [
  {
    name: "Jameda",
    url: "https://www.jameda.de",
    region: ["DE"],
    monthlyVisitors: "6 Mio.",
    costFree: true,
    premiumFrom: "59€/Monat",
    priority: 5,
    features: ["Online-Terminbuchung", "Video-Sprechstunde", "Arzt-Profil"],
    bestFor: "Alle Fachrichtungen in Deutschland"
  },
  {
    name: "Doctolib",
    url: "https://www.doctolib.de",
    region: ["DE"],
    monthlyVisitors: "60 Mio. (EU)",
    costFree: false,
    premiumFrom: "109€/Monat",
    priority: 5,
    features: ["Online-Terminbuchung", "Praxismanagement", "Patientenkommunikation"],
    bestFor: "Praxen mit hohem Terminvolumen"
  },
  {
    name: "DocFinder",
    url: "https://www.docfinder.at",
    region: ["AT", "CH"],
    monthlyVisitors: "2 Mio.",
    costFree: true,
    premiumFrom: "Ab 49€/Monat",
    priority: 5,
    features: ["Arztsuche", "Bewertungen", "Terminbuchung"],
    bestFor: "Ärzte in Österreich und Schweiz"
  },
  {
    name: "Sanego",
    url: "https://www.sanego.de",
    region: ["DE"],
    monthlyVisitors: "1 Mio.",
    costFree: true,
    premiumFrom: null,
    priority: 4,
    features: ["Arztbewertungen", "Medikamenten-Bewertungen", "Erfahrungsberichte"],
    bestFor: "Reputation Management"
  },
  {
    name: "Doctena",
    url: "https://www.doctena.de",
    region: ["DE", "CH"],
    monthlyVisitors: "500k",
    costFree: false,
    premiumFrom: "49€/Monat",
    priority: 4,
    features: ["Online-Terminbuchung", "Praxissoftware-Integration", "SMS-Erinnerungen"],
    bestFor: "Terminmanagement"
  },
  {
    name: "Top Doctors",
    url: "https://www.topdoctors.de",
    region: ["DE", "AT", "CH"],
    monthlyVisitors: "300k",
    costFree: false,
    premiumFrom: "Auf Anfrage",
    priority: 3,
    features: ["Premium-Positionierung", "Internationale Reichweite", "Video-Profil"],
    bestFor: "Spezialisten und Privatpraxen"
  },
  {
    name: "Arzt-Auskunft",
    url: "https://www.arzt-auskunft.de",
    region: ["DE"],
    monthlyVisitors: "200k",
    costFree: true,
    premiumFrom: null,
    priority: 3,
    features: ["Offizielles BÄK-Verzeichnis", "Basisinformationen"],
    bestFor: "Grundlegende Online-Präsenz"
  },
  {
    name: "Jameda Österreich",
    url: "https://www.jameda.at",
    region: ["AT"],
    monthlyVisitors: "800k",
    costFree: true,
    premiumFrom: "59€/Monat",
    priority: 4,
    features: ["Online-Terminbuchung", "Arzt-Profil", "Bewertungen"],
    bestFor: "Alle Fachrichtungen in Österreich"
  }
];

const MedicalPortalsTable = () => {
  const [regionFilter, setRegionFilter] = useState<"all" | "DE" | "AT" | "CH">("all");

  const filteredPortals = portals.filter(portal => 
    regionFilter === "all" || portal.region.includes(regionFilter as "DE" | "AT" | "CH")
  );

  const renderPriority = (priority: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < priority ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="my-8 space-y-4">
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium self-center mr-2">Region:</span>
        {(["all", "DE", "AT", "CH"] as const).map((region) => (
          <Button
            key={region}
            variant={regionFilter === region ? "default" : "outline"}
            size="sm"
            onClick={() => setRegionFilter(region)}
          >
            {region === "all" ? "Alle" : region}
          </Button>
        ))}
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Portal</TableHead>
              <TableHead className="font-semibold">Region</TableHead>
              <TableHead className="font-semibold">Reichweite</TableHead>
              <TableHead className="font-semibold">Kosten</TableHead>
              <TableHead className="font-semibold">Priorität</TableHead>
              <TableHead className="font-semibold">Am besten für</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPortals.map((portal) => (
              <TableRow key={portal.name} className="hover:bg-muted/30">
                <TableCell>
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-primary hover:underline"
                  >
                    {portal.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {portal.region.map(r => (
                      <Badge key={r} variant="secondary" className="text-xs">
                        {r}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {portal.monthlyVisitors}/Monat
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 text-sm">
                      {portal.costFree ? (
                        <><Check className="h-4 w-4 text-green-500" /> Kostenlos</>
                      ) : (
                        <><X className="h-4 w-4 text-red-500" /> Nur Premium</>
                      )}
                    </span>
                    {portal.premiumFrom && (
                      <span className="text-xs text-muted-foreground">
                        Premium: {portal.premiumFrom}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>{renderPriority(portal.priority)}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-[200px]">
                  {portal.bestFor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground italic">
        * Reichweite basiert auf öffentlich verfügbaren Daten. Kosten können je nach Paket variieren.
      </p>
    </div>
  );
};

export default MedicalPortalsTable;
