import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Star, Check, X } from "lucide-react";

interface Portal {
  name: string;
  url: string;
  region: "DE" | "AT" | "CH" | "DACH";
  monthlyVisitors: string;
  costFree: boolean;
  premiumFrom: string | null;
  priority: number;
  features: string[];
  bestFor: string;
}

const portals: Portal[] = [
  {
    name: "anwalt.de",
    url: "https://www.anwalt.de",
    region: "DE",
    monthlyVisitors: "5 Mio.",
    costFree: true,
    premiumFrom: "99 €/Monat",
    priority: 5,
    features: ["Mandatsanfragen", "Fachartikel", "Bewertungen", "Profil-SEO"],
    bestFor: "Alle Rechtsgebiete"
  },
  {
    name: "BRAK Anwaltssuche",
    url: "https://www.rechtsanwaltsregister.org",
    region: "DE",
    monthlyVisitors: "2 Mio.",
    costFree: true,
    premiumFrom: null,
    priority: 5,
    features: ["Offizielle Kammer-Suche", "Pflichtprofil", "Fachanwalt-Filter"],
    bestFor: "Grundpräsenz (Pflicht)"
  },
  {
    name: "advocado",
    url: "https://www.advocado.de",
    region: "DE",
    monthlyVisitors: "800k",
    costFree: false,
    premiumFrom: "79 €/Monat",
    priority: 4,
    features: ["Mandatsvermittlung", "Erstberatung-Buchung", "Bewertungen"],
    bestFor: "Privatmandanten"
  },
  {
    name: "frag-einen-anwalt.de",
    url: "https://www.frag-einen-anwalt.de",
    region: "DE",
    monthlyVisitors: "500k",
    costFree: true,
    premiumFrom: "Provision/Mandat",
    priority: 4,
    features: ["Online-Rechtsberatung", "Expertise zeigen", "Lead-Generierung"],
    bestFor: "Online-affine Kanzleien"
  },
  {
    name: "Anwalt24",
    url: "https://www.anwalt24.de",
    region: "DE",
    monthlyVisitors: "400k",
    costFree: true,
    premiumFrom: "69 €/Monat",
    priority: 3,
    features: ["Profil", "Fachartikel", "Bewertungen"],
    bestFor: "Ergänzende Präsenz"
  },
  {
    name: "123recht.de",
    url: "https://www.123recht.de",
    region: "DE",
    monthlyVisitors: "300k",
    costFree: true,
    premiumFrom: "49 €/Monat",
    priority: 3,
    features: ["Forum-Beratung", "Ratgeber", "Profil"],
    bestFor: "Content-Marketing"
  },
  {
    name: "rechtsanwalt.com",
    url: "https://www.rechtsanwalt.com",
    region: "DE",
    monthlyVisitors: "200k",
    costFree: true,
    premiumFrom: "59 €/Monat",
    priority: 3,
    features: ["Profilseite", "Rechtsgebiete-Filter", "SEO-Links"],
    bestFor: "Backlink-Aufbau"
  },
  {
    name: "fachanwalt.de",
    url: "https://www.fachanwalt.de",
    region: "DE",
    monthlyVisitors: "150k",
    costFree: true,
    premiumFrom: "89 €/Monat",
    priority: 3,
    features: ["Fachanwalt-Fokus", "Spezialisierung", "Qualitätssiegel"],
    bestFor: "Fachanwälte"
  },
  {
    name: "Anwaltssuchdienst.ch",
    url: "https://www.anwaltssuchdienst.ch",
    region: "CH",
    monthlyVisitors: "80k",
    costFree: true,
    premiumFrom: "Auf Anfrage",
    priority: 4,
    features: ["Kantonale Suche", "Rechtsgebiete", "Sprachfilter"],
    bestFor: "Schweizer Kanzleien"
  },
  {
    name: "Schweizerischer Anwaltsverband",
    url: "https://www.sav-fsa.ch",
    region: "CH",
    monthlyVisitors: "50k",
    costFree: true,
    premiumFrom: null,
    priority: 5,
    features: ["Offizielle Suche", "Verbandslogo", "Vertrauenswürdigkeit"],
    bestFor: "Grundpräsenz CH (Pflicht)"
  },
  {
    name: "rechtsanwaelte.at",
    url: "https://www.rechtsanwaelte.at",
    region: "AT",
    monthlyVisitors: "100k",
    costFree: true,
    premiumFrom: "Auf Anfrage",
    priority: 4,
    features: ["ÖRAK-Suche", "Fachgebiete", "Kontaktdaten"],
    bestFor: "Österreichische Kanzleien"
  },
  {
    name: "Österr. Rechtsanwaltskammer",
    url: "https://www.rakwien.at",
    region: "AT",
    monthlyVisitors: "40k",
    costFree: true,
    premiumFrom: null,
    priority: 5,
    features: ["Offizielles Register", "Kammerzugehörigkeit"],
    bestFor: "Grundpräsenz AT (Pflicht)"
  }
];

const LawyerPortalsTable = () => {
  const [regionFilter, setRegionFilter] = useState<"all" | "DE" | "AT" | "CH">("all");

  const filteredPortals = portals.filter(portal => {
    if (regionFilter === "all") return true;
    return portal.region === regionFilter || portal.region === "DACH";
  });

  const renderPriority = (priority: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < priority ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
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

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Portal</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Reichweite</TableHead>
              <TableHead>Kostenlos</TableHead>
              <TableHead>Premium</TableHead>
              <TableHead>Priorität</TableHead>
              <TableHead>Beste für</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPortals.map((portal) => (
              <TableRow key={portal.name}>
                <TableCell>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {portal.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {portal.features.slice(0, 2).map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{portal.region}</Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {portal.monthlyVisitors}
                </TableCell>
                <TableCell>
                  {portal.costFree ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </TableCell>
                <TableCell className="text-sm">
                  {portal.premiumFrom || "—"}
                </TableCell>
                <TableCell>{renderPriority(portal.priority)}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-[150px]">
                  {portal.bestFor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
        💡 <strong>Empfehlung:</strong> Starten Sie mit den 5-Sterne-Portalen (Pflichtpräsenz), 
        dann anwalt.de mit Premium-Profil. Die anderen Portale ergänzen Ihre Online-Präsenz 
        und stärken Ihr Backlink-Profil.
      </p>
    </div>
  );
};

export default LawyerPortalsTable;
