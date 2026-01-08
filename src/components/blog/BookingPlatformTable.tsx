import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Calendar, 
  Check, 
  X, 
  Star, 
  Euro, 
  Users, 
  Zap,
  ExternalLink,
  Info
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Platform {
  name: string;
  logo: string;
  pricing: string;
  pricingType: 'commission' | 'subscription' | 'free';
  commission?: string;
  monthlyFee?: string;
  reach: 'Sehr hoch' | 'Hoch' | 'Mittel' | 'Niedrig';
  googleSync: boolean;
  googleReserve: boolean;
  features: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  website: string;
}

const platforms: Platform[] = [
  {
    name: 'Treatwell',
    logo: '🟣',
    pricing: '25-30% pro Buchung',
    pricingType: 'commission',
    commission: '25-30%',
    reach: 'Sehr hoch',
    googleSync: true,
    googleReserve: true,
    features: ['Marktplatz', 'App', 'Marketing', 'Zahlungsabwicklung'],
    bestFor: 'Salons die Neukunden wollen',
    pros: ['Größte Reichweite in DE', 'Starke App', 'Keine Grundgebühr'],
    cons: ['Hohe Provision', 'Preisdruck durch Vergleich', 'Abhängigkeit'],
    website: 'treatwell.de'
  },
  {
    name: 'Shore',
    logo: '🔵',
    pricing: 'Ab 39€/Monat',
    pricingType: 'subscription',
    monthlyFee: '39-119€',
    reach: 'Mittel',
    googleSync: true,
    googleReserve: true,
    features: ['Terminbuch', 'Kassensystem', 'Marketing', 'Kundenverwaltung'],
    bestFor: 'Etablierte Salons',
    pros: ['All-in-One Lösung', 'Deutsches Unternehmen', 'Guter Support'],
    cons: ['Höhere Fixkosten', 'Vertragsbindung', 'Komplexität'],
    website: 'shore.com'
  },
  {
    name: 'Fresha',
    logo: '🟢',
    pricing: '0€ Basis / 2% Zahlung',
    pricingType: 'free',
    reach: 'Hoch',
    googleSync: true,
    googleReserve: true,
    features: ['Terminbuch', 'App', 'Zahlungen', 'Marketing'],
    bestFor: 'Starter & kleine Salons',
    pros: ['Kostenlose Basisversion', 'Moderne Oberfläche', 'Schneller Start'],
    cons: ['Premium-Funktionen kosten', 'Weniger lokale Reichweite', 'Englischer Support'],
    website: 'fresha.com'
  },
  {
    name: 'Planity',
    logo: '🟡',
    pricing: 'Ab 49€/Monat',
    pricingType: 'subscription',
    monthlyFee: '49-99€',
    reach: 'Mittel',
    googleSync: true,
    googleReserve: true,
    features: ['Terminbuch', 'Online-Zahlung', 'Kundenbindung', 'Marketing'],
    bestFor: 'Premium-Salons',
    pros: ['Starkes Marketing', 'Hochwertige Optik', 'Gute Integration'],
    cons: ['Höherer Preis', 'Weniger bekannt in DE', 'Weniger Marktplatz-Traffic'],
    website: 'planity.com'
  },
  {
    name: 'SimplyBook',
    logo: '🟠',
    pricing: 'Ab 8€/Monat',
    pricingType: 'subscription',
    monthlyFee: '8-50€',
    reach: 'Niedrig',
    googleSync: true,
    googleReserve: false,
    features: ['Terminbuch', 'Website-Widget', 'Erinnerungen', 'Berichte'],
    bestFor: 'Budget-bewusste Salons',
    pros: ['Sehr günstig', 'Flexibel', 'Viele Integrationen'],
    cons: ['Kein Marktplatz', 'Basic Design', 'Selbst-Marketing nötig'],
    website: 'simplybook.me'
  },
  {
    name: 'Terminland',
    logo: '🔴',
    pricing: 'Ab 15€/Monat',
    pricingType: 'subscription',
    monthlyFee: '15-50€',
    reach: 'Niedrig',
    googleSync: true,
    googleReserve: false,
    features: ['Terminbuch', 'Ressourcen', 'Erinnerungen', 'API'],
    bestFor: 'Multi-Location Salons',
    pros: ['Deutsches Unternehmen', 'DSGVO-konform', 'Guter Support'],
    cons: ['Veraltetes Design', 'Kein Marktplatz', 'Eingeschränkte Features'],
    website: 'terminland.de'
  },
  {
    name: 'Appointy',
    logo: '🔷',
    pricing: 'Ab 19$/Monat',
    pricingType: 'subscription',
    monthlyFee: '19-79$',
    reach: 'Niedrig',
    googleSync: true,
    googleReserve: true,
    features: ['Terminbuch', 'Zahlungen', 'Marketing', 'Team-Management'],
    bestFor: 'Internationale Salons',
    pros: ['Gute Google-Integration', 'Flexibel', 'Multi-Sprache'],
    cons: ['US-Fokus', 'Dollar-Preise', 'Weniger lokaler Support'],
    website: 'appointy.com'
  },
  {
    name: 'Phorest',
    logo: '⚪',
    pricing: 'Auf Anfrage',
    pricingType: 'subscription',
    reach: 'Mittel',
    googleSync: true,
    googleReserve: true,
    features: ['Terminbuch', 'Kassensystem', 'CRM', 'Marketing-Suite'],
    bestFor: 'Premium & Ketten',
    pros: ['Umfangreiche Features', 'Starkes CRM', 'Professionell'],
    cons: ['Teuer', 'Komplex', 'Lange Einarbeitung'],
    website: 'phorest.com'
  }
];

const BookingPlatformTable: React.FC = () => {
  const [salonSize, setSalonSize] = useState<'small' | 'medium' | 'large'>('small');
  const [sortBy, setSortBy] = useState<'price' | 'reach' | 'features'>('reach');

  const getRecommendation = () => {
    switch (salonSize) {
      case 'small':
        return {
          primary: 'Fresha',
          secondary: 'SimplyBook',
          reason: 'Geringe/keine Kosten, schneller Start, gute Basis-Funktionen'
        };
      case 'medium':
        return {
          primary: 'Shore',
          secondary: 'Treatwell',
          reason: 'Gutes Preis-Leistungs-Verhältnis, professionelle Features, lokale Reichweite'
        };
      case 'large':
        return {
          primary: 'Phorest',
          secondary: 'Shore',
          reason: 'Enterprise-Features, Multi-Location, umfangreiches CRM'
        };
    }
  };

  const recommendation = getRecommendation();

  const getReachColor = (reach: string) => {
    switch (reach) {
      case 'Sehr hoch': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Hoch': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getPricingBadge = (platform: Platform) => {
    switch (platform.pricingType) {
      case 'commission':
        return <Badge variant="destructive">Provision</Badge>;
      case 'subscription':
        return <Badge variant="secondary">Abo</Badge>;
      case 'free':
        return <Badge className="bg-green-500">Kostenlos</Badge>;
    }
  };

  const sortedPlatforms = [...platforms].sort((a, b) => {
    if (sortBy === 'reach') {
      const order = { 'Sehr hoch': 0, 'Hoch': 1, 'Mittel': 2, 'Niedrig': 3 };
      return order[a.reach] - order[b.reach];
    }
    return 0;
  });

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-blue-500" />
          Buchungsplattform-Vergleich 2026
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Finde das beste Buchungssystem für deinen Salon mit Google-Integration
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Salon-Größe Auswahl */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block">Wähle deine Salongröße für eine Empfehlung:</label>
          <Tabs value={salonSize} onValueChange={(v) => setSalonSize(v as typeof salonSize)}>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="small" className="gap-2">
                <Users className="h-4 w-4" />
                Klein (1-2 MA)
              </TabsTrigger>
              <TabsTrigger value="medium" className="gap-2">
                <Users className="h-4 w-4" />
                Mittel (3-6 MA)
              </TabsTrigger>
              <TabsTrigger value="large" className="gap-2">
                <Users className="h-4 w-4" />
                Groß (7+ MA)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Empfehlung */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-start gap-3">
            <Star className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200">
                Unsere Empfehlung für dich:
              </h4>
              <p className="text-sm mt-1">
                <strong>{recommendation.primary}</strong> (Erste Wahl) oder <strong>{recommendation.secondary}</strong> (Alternative)
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {recommendation.reason}
              </p>
            </div>
          </div>
        </div>

        {/* Vergleichstabelle */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Plattform</TableHead>
                <TableHead>Kosten</TableHead>
                <TableHead>Reichweite</TableHead>
                <TableHead className="text-center">Google Sync</TableHead>
                <TableHead className="text-center">Google Reserve</TableHead>
                <TableHead>Ideal für</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPlatforms.map((platform) => (
                <TableRow 
                  key={platform.name}
                  className={
                    platform.name === recommendation.primary 
                      ? 'bg-green-50 dark:bg-green-950/50' 
                      : platform.name === recommendation.secondary
                      ? 'bg-blue-50 dark:bg-blue-950/50'
                      : ''
                  }
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{platform.logo}</span>
                      <div>
                        <span className="font-medium">{platform.name}</span>
                        {platform.name === recommendation.primary && (
                          <Badge className="ml-2 bg-green-500 text-xs">Empfohlen</Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{platform.pricing}</div>
                      {getPricingBadge(platform)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getReachColor(platform.reach)}>
                      {platform.reach}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {platform.googleSync ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {platform.googleReserve ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Google Reserve ermöglicht Buchungen direkt aus Google Maps/Suche
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {platform.bestFor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Detail-Cards für Top-3 */}
        <div className="mt-8">
          <h4 className="font-semibold mb-4">Top 3 im Detail:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {platforms.slice(0, 3).map((platform) => (
              <Card key={platform.name} className="overflow-hidden">
                <CardHeader className="pb-3 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{platform.logo}</span>
                    <div>
                      <CardTitle className="text-lg">{platform.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{platform.pricing}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-xs font-medium text-green-600 mb-1">✓ Vorteile</h5>
                      <ul className="text-xs space-y-1">
                        {platform.pros.map((pro, idx) => (
                          <li key={idx} className="text-muted-foreground">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-red-600 mb-1">✗ Nachteile</h5>
                      <ul className="text-xs space-y-1">
                        {platform.cons.map((con, idx) => (
                          <li key={idx} className="text-muted-foreground">• {con}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2 gap-2"
                      onClick={() => window.open(`https://${platform.website}`, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Zu {platform.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info-Box */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg flex gap-3">
          <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <strong>Tipp:</strong> Achte besonders auf die <strong>Google Reserve</strong> Funktion – 
            diese ermöglicht es Kunden, direkt aus der Google-Suche oder Google Maps einen Termin zu buchen, 
            ohne deine Website besuchen zu müssen. Das erhöht die Conversion-Rate erheblich!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingPlatformTable;
