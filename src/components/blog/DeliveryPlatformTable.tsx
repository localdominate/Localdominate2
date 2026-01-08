import React, { useState } from 'react';
import { Truck, Star, AlertTriangle, Check, X, Filter, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DeliveryPlatform {
  name: string;
  logo: string;
  commission: string;
  commissionRange: [number, number];
  reach: 'sehr hoch' | 'hoch' | 'mittel' | 'niedrig';
  cities: number;
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  marketShare: number;
}

const DeliveryPlatformTable: React.FC = () => {
  const [sortBy, setSortBy] = useState<'commission' | 'reach' | 'rating'>('reach');
  const [filterReach, setFilterReach] = useState<string>('all');

  const platforms: DeliveryPlatform[] = [
    {
      name: 'Lieferando',
      logo: '🍕',
      commission: '13-30%',
      commissionRange: [13, 30],
      reach: 'sehr hoch',
      cities: 500,
      pros: [
        'Größte Reichweite in DACH',
        'Starke Markenbekanntheit',
        'Eigene Fahrer verfügbar',
        'Gutes Marketing'
      ],
      cons: [
        'Höchste Provision',
        'Starke Konkurrenz',
        'Wenig Kontrolle über Lieferung',
        'Algorithmus bevorzugt zahlende Partner'
      ],
      bestFor: 'Neue Restaurants, die schnell Reichweite brauchen',
      rating: 4.2,
      marketShare: 65,
    },
    {
      name: 'Wolt',
      logo: '💙',
      commission: '20-30%',
      commissionRange: [20, 30],
      reach: 'hoch',
      cities: 150,
      pros: [
        'Moderne App & UX',
        'Schnelle Lieferung',
        'Guter Kundenservice',
        'Wachsender Marktanteil'
      ],
      cons: [
        'Nicht überall verfügbar',
        'Hohe Provision',
        'Weniger Bekanntheit als Lieferando'
      ],
      bestFor: 'Restaurants in Großstädten mit jungem Publikum',
      rating: 4.5,
      marketShare: 15,
    },
    {
      name: 'Uber Eats',
      logo: '🚗',
      commission: '15-30%',
      commissionRange: [15, 30],
      reach: 'hoch',
      cities: 100,
      pros: [
        'Internationale Marke',
        'Touristen-Traffic',
        'Gute App-Integration',
        'Variable Provisionsmodelle'
      ],
      cons: [
        'Schwankende Lieferqualität',
        'Weniger Deutschland-Fokus',
        'Kleinerer Marktanteil'
      ],
      bestFor: 'Restaurants in touristischen Gebieten',
      rating: 4.0,
      marketShare: 12,
    },
    {
      name: 'Flink / Gorillas',
      logo: '⚡',
      commission: '25-35%',
      commissionRange: [25, 35],
      reach: 'mittel',
      cities: 30,
      pros: [
        'Ultra-schnelle Lieferung',
        'Junge Zielgruppe',
        'Premium-Positionierung'
      ],
      cons: [
        'Sehr begrenzte Verfügbarkeit',
        'Fokus auf Supermarkt',
        'Höchste Provision',
        'Unsichere Zukunft'
      ],
      bestFor: 'Experimentierfreudige Restaurants in Berlin/München',
      rating: 3.8,
      marketShare: 3,
    },
    {
      name: 'Eigene Lieferung',
      logo: '🏠',
      commission: '0%',
      commissionRange: [0, 0],
      reach: 'niedrig',
      cities: 1,
      pros: [
        'Keine Provision',
        'Volle Kontrolle',
        'Direkter Kundenkontakt',
        'Eigene Fahrer = bessere Qualität',
        'Höhere Marge'
      ],
      cons: [
        'Eigenes Personal nötig',
        'Logistik-Aufwand',
        'Keine externe Reichweite',
        'Eigene Bestell-Website nötig'
      ],
      bestFor: 'Etablierte Restaurants mit Stammkundschaft',
      rating: 4.8,
      marketShare: 5,
    },
  ];

  const getReachColor = (reach: string) => {
    switch (reach) {
      case 'sehr hoch': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'hoch': return 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30';
      case 'mittel': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'niedrig': return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

  const sortedPlatforms = [...platforms]
    .filter(p => filterReach === 'all' || p.reach === filterReach)
    .sort((a, b) => {
      switch (sortBy) {
        case 'commission':
          return a.commissionRange[0] - b.commissionRange[0];
        case 'rating':
          return b.rating - a.rating;
        case 'reach':
        default:
          const reachOrder = { 'sehr hoch': 0, 'hoch': 1, 'mittel': 2, 'niedrig': 3 };
          return reachOrder[a.reach] - reachOrder[b.reach];
      }
    });

  return (
    <Card className="my-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Truck className="h-5 w-5 text-primary" />
          Lieferportal-Vergleich für Döner-Läden
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Finde die beste Plattform für deinen Imbiss – mit Provisionen, Vor- und Nachteilen
        </p>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sortieren:</span>
            <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
              <SelectTrigger className="w-40 h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reach">Reichweite</SelectItem>
                <SelectItem value="commission">Provision (niedrig)</SelectItem>
                <SelectItem value="rating">Bewertung</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter:</span>
            <Select value={filterReach} onValueChange={setFilterReach}>
              <SelectTrigger className="w-40 h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Reichweiten</SelectItem>
                <SelectItem value="sehr hoch">Sehr hoch</SelectItem>
                <SelectItem value="hoch">Hoch</SelectItem>
                <SelectItem value="mittel">Mittel</SelectItem>
                <SelectItem value="niedrig">Niedrig</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-6 px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[140px]">Plattform</TableHead>
                <TableHead>Provision</TableHead>
                <TableHead>Reichweite</TableHead>
                <TableHead>Marktanteil</TableHead>
                <TableHead>Bewertung</TableHead>
                <TableHead className="min-w-[200px]">Empfohlen für</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPlatforms.map((platform) => (
                <TableRow key={platform.name} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{platform.logo}</span>
                      <span className="font-medium">{platform.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-mono font-medium ${
                      platform.commissionRange[0] === 0 
                        ? 'text-green-600' 
                        : platform.commissionRange[1] >= 30 
                          ? 'text-red-600' 
                          : 'text-yellow-600'
                    }`}>
                      {platform.commission}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getReachColor(platform.reach)}>
                      {platform.reach}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${platform.marketShare}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {platform.marketShare}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{platform.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {platform.bestFor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Detailed Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedPlatforms.slice(0, 4).map((platform) => (
            <div key={platform.name} className="bg-background rounded-xl border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{platform.logo}</span>
                  <div>
                    <h4 className="font-semibold">{platform.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Provision: <span className="font-mono font-medium">{platform.commission}</span>
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className={getReachColor(platform.reach)}>
                  {platform.cities}+ Städte
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-green-600 mb-1 flex items-center gap-1">
                    <Check className="h-3 w-3" /> Vorteile
                  </p>
                  <ul className="space-y-1">
                    {platform.pros.slice(0, 3).map((pro, i) => (
                      <li key={i} className="text-muted-foreground text-xs">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 mb-1 flex items-center gap-1">
                    <X className="h-3 w-3" /> Nachteile
                  </p>
                  <ul className="space-y-1">
                    {platform.cons.slice(0, 3).map((con, i) => (
                      <li key={i} className="text-muted-foreground text-xs">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Recommendation */}
        <div className="mt-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-5">
          <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Unsere Empfehlung: Die Hybrid-Strategie
          </h4>
          <div className="space-y-3 text-sm text-amber-700/90">
            <p>
              <strong>1. Neukunden über Lieferando/Wolt gewinnen</strong> – Die Portale sind perfekt für Sichtbarkeit und neue Kunden.
            </p>
            <p>
              <strong>2. Stammkunden auf eigene Kanäle lenken</strong> – Bei jeder Lieferung einen Flyer beilegen: "5% Rabatt bei Direktbestellung!"
            </p>
            <p>
              <strong>3. WhatsApp Business für Stammkunden</strong> – Direkter Kontakt, keine Provision, persönliche Beziehung.
            </p>
            <p>
              <strong>4. Eigene Website mit Bestell-Funktion</strong> – Langfristig die profitabelste Lösung.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryPlatformTable;
