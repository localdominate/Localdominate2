import { ExternalLink, Star, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Directory {
  name: string;
  url: string;
  type: string;
  priority: "hoch" | "mittel" | "niedrig";
  free: boolean;
  doFollow: boolean;
  description: string;
}

const directories: Directory[] = [
  {
    name: "Google Business Profile",
    url: "https://business.google.com",
    type: "Suchmaschine",
    priority: "hoch",
    free: true,
    doFollow: false,
    description: "Absolut Pflicht – das wichtigste Verzeichnis für Local SEO in der Schweiz"
  },
  {
    name: "local.ch",
    url: "https://local.ch",
    type: "Branchenverzeichnis",
    priority: "hoch",
    free: true,
    doFollow: true,
    description: "Schweizer Telefonbuch – sehr hohe Nutzung, guter lokaler Trust"
  },
  {
    name: "search.ch",
    url: "https://search.ch",
    type: "Branchenverzeichnis",
    priority: "hoch",
    free: true,
    doFollow: true,
    description: "Gehört zu local.ch – gleiche Datenbasis, zusätzliche Reichweite"
  },
  {
    name: "Bing Places",
    url: "https://bingplaces.com",
    type: "Suchmaschine",
    priority: "hoch",
    free: true,
    doFollow: false,
    description: "Wichtig für Cortana und Windows-Nutzer – oft vernachlässigt"
  },
  {
    name: "Apple Maps",
    url: "https://mapsconnect.apple.com",
    type: "Karten",
    priority: "hoch",
    free: true,
    doFollow: false,
    description: "Für iPhone-Nutzer essentiell – hohe Nutzung in der Schweiz"
  },
  {
    name: "TrustPilot",
    url: "https://www.trustpilot.com",
    type: "Bewertungsportal",
    priority: "mittel",
    free: true,
    doFollow: true,
    description: "Internationales Bewertungsportal mit guter Schweizer Nutzung"
  },
  {
    name: "Yelp",
    url: "https://www.yelp.ch",
    type: "Bewertungsportal",
    priority: "mittel",
    free: true,
    doFollow: true,
    description: "Besonders für Gastronomie und Dienstleistungen relevant"
  },
  {
    name: "Cylex Schweiz",
    url: "https://www.cylex.ch",
    type: "Branchenverzeichnis",
    priority: "mittel",
    free: true,
    doFollow: true,
    description: "Kostenloser Eintrag mit DoFollow-Link"
  },
  {
    name: "Hotfrog",
    url: "https://www.hotfrog.ch",
    type: "Branchenverzeichnis",
    priority: "mittel",
    free: true,
    doFollow: true,
    description: "Internationales Verzeichnis mit Schweizer Ableger"
  },
  {
    name: "Gelbe Seiten CH",
    url: "https://www.gelbeseiten.ch",
    type: "Branchenverzeichnis",
    priority: "mittel",
    free: false,
    doFollow: true,
    description: "Klassisches Branchenbuch – kostenpflichtig aber relevant"
  },
  {
    name: "Handelsregister",
    url: "https://zefix.ch",
    type: "Offiziell",
    priority: "niedrig",
    free: true,
    doFollow: true,
    description: "Offizielles Firmenregister – für B2B Vertrauen wichtig"
  },
  {
    name: "Moneycab",
    url: "https://www.moneycab.com",
    type: "Wirtschaftsportal",
    priority: "niedrig",
    free: false,
    doFollow: true,
    description: "Schweizer Wirtschaftsportal – gut für B2B-Sichtbarkeit"
  }
];

const priorityColors = {
  hoch: "bg-green-500/10 text-green-700 border-green-500/20",
  mittel: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  niedrig: "bg-gray-500/10 text-gray-700 border-gray-500/20"
};

const SwissDirectoriesTable = () => {
  return (
    <div className="my-8 overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border rounded-xl">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Verzeichnis</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Typ</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Priorität</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Kostenlos</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">DoFollow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-background">
              {directories.map((dir, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <a
                        href={dir.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline flex items-center gap-1"
                      >
                        {dir.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{dir.description}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{dir.type}</td>
                  <td className="px-4 py-3 text-center">
                    <Badge className={`${priorityColors[dir.priority]} border`}>
                      {dir.priority === "hoch" && <Star className="h-3 w-3 mr-1" />}
                      {dir.priority}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {dir.free ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {dir.doFollow ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SwissDirectoriesTable;
