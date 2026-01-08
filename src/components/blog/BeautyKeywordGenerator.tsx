import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, Scissors, Sparkles, Heart, User } from 'lucide-react';

interface Keyword {
  keyword: string;
  volume: 'Sehr hoch' | 'Hoch' | 'Mittel' | 'Niedrig';
  competition: 'Hoch' | 'Mittel' | 'Niedrig';
  intent: 'Transaktional' | 'Informational' | 'Navigational';
}

const BeautyKeywordGenerator: React.FC = () => {
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('friseur');

  const categories = {
    friseur: {
      icon: Scissors,
      label: 'Friseur',
      color: 'bg-pink-500',
      keywords: [
        { base: 'Friseur', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Friseursalon', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Damenfriseur', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Herrenfriseur', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Kinderfriseur', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Bester Friseur', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Guter Friseur', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Günstiger Friseur', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Friseur Termin online', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Friseur ohne Termin', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
      ],
      services: [
        { base: 'Balayage', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Highlights', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Strähnchen', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Färben', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Keratin Glättung', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Haarverlängerung', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Hochsteckfrisur', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Brautfrisur', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Dauerwelle', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Olaplex Behandlung', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
      ]
    },
    barbershop: {
      icon: User,
      label: 'Barbershop',
      color: 'bg-amber-600',
      keywords: [
        { base: 'Barbershop', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Barber', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Herrenfriseur', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Bester Barbershop', volume: 'Hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Türkischer Barbershop', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Barber ohne Termin', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
      ],
      services: [
        { base: 'Fade Haarschnitt', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Skin Fade', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Bart trimmen', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Rasur', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Bartpflege', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Hot Towel Shave', volume: 'Niedrig', competition: 'Niedrig', intent: 'Transaktional' },
      ]
    },
    kosmetik: {
      icon: Sparkles,
      label: 'Kosmetik',
      color: 'bg-purple-500',
      keywords: [
        { base: 'Kosmetikstudio', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Kosmetikerin', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Schönheitssalon', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Beauty Studio', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Gesichtsbehandlung', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Bestes Kosmetikstudio', volume: 'Mittel', competition: 'Hoch', intent: 'Transaktional' },
      ],
      services: [
        { base: 'Microblading', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Permanent Make-up', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Wimpernverlängerung', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Microneedling', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Hydrafacial', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Chemical Peeling', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Augenbrauen zupfen', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Waxing', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Sugaring', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Lash Lifting', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
      ]
    },
    nails: {
      icon: Heart,
      label: 'Nagelstudio',
      color: 'bg-rose-500',
      keywords: [
        { base: 'Nagelstudio', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Maniküre', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Pediküre', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Nailart', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Bestes Nagelstudio', volume: 'Mittel', competition: 'Hoch', intent: 'Transaktional' },
      ],
      services: [
        { base: 'Gelnägel', volume: 'Sehr hoch', competition: 'Hoch', intent: 'Transaktional' },
        { base: 'Shellac', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Acrylnägel', volume: 'Hoch', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'French Nails', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Gel Pediküre', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
        { base: 'Nagelmodellage', volume: 'Mittel', competition: 'Mittel', intent: 'Transaktional' },
        { base: 'Nagelverlängerung', volume: 'Mittel', competition: 'Niedrig', intent: 'Transaktional' },
      ]
    }
  };

  const generateKeywords = (): Keyword[] => {
    if (!city) return [];
    
    const category = categories[activeCategory as keyof typeof categories];
    const location = district ? `${district}, ${city}` : city;
    const keywords: Keyword[] = [];
    
    // Basis-Keywords mit Stadt
    category.keywords.forEach(kw => {
      keywords.push({
        keyword: `${kw.base} ${city}`,
        volume: kw.volume as Keyword['volume'],
        competition: kw.competition as Keyword['competition'],
        intent: kw.intent as Keyword['intent']
      });
    });
    
    // Mit Stadtteil
    if (district) {
      category.keywords.slice(0, 3).forEach(kw => {
        keywords.push({
          keyword: `${kw.base} ${district}`,
          volume: 'Mittel',
          competition: 'Niedrig',
          intent: kw.intent as Keyword['intent']
        });
      });
    }
    
    // Service-Keywords
    category.services.forEach(service => {
      keywords.push({
        keyword: `${service.base} ${city}`,
        volume: service.volume as Keyword['volume'],
        competition: service.competition as Keyword['competition'],
        intent: service.intent as Keyword['intent']
      });
    });
    
    // Long-Tail Keywords
    const longTails = [
      { keyword: `${category.label} in der Nähe`, volume: 'Sehr hoch' as const, competition: 'Hoch' as const, intent: 'Transaktional' as const },
      { keyword: `${category.label} ${city} Bewertungen`, volume: 'Mittel' as const, competition: 'Niedrig' as const, intent: 'Informational' as const },
      { keyword: `${category.label} ${city} Preise`, volume: 'Hoch' as const, competition: 'Mittel' as const, intent: 'Informational' as const },
      { keyword: `${category.label} ${city} online buchen`, volume: 'Hoch' as const, competition: 'Niedrig' as const, intent: 'Transaktional' as const },
      { keyword: `${category.label} ${city} Termin`, volume: 'Hoch' as const, competition: 'Niedrig' as const, intent: 'Transaktional' as const },
    ];
    
    keywords.push(...longTails);
    
    return keywords;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAllKeywords = () => {
    const keywords = generateKeywords();
    const text = keywords.map(k => k.keyword).join('\n');
    navigator.clipboard.writeText(text);
    setCopied('all');
    setTimeout(() => setCopied(null), 2000);
  };

  const getVolumeColor = (volume: string) => {
    switch (volume) {
      case 'Sehr hoch': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Hoch': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'Hoch': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Mittel': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    }
  };

  const keywords = generateKeywords();

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-pink-500" />
          Beauty-Keyword-Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Generiere branchenspezifische Keywords für dein Beauty-Business
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Kategorie-Auswahl */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">1. Wähle deine Branche:</label>
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
              {Object.entries(categories).map(([key, cat]) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 py-3"
                  >
                    <Icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Stadt-Eingabe */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">2. Deine Stadt *</label>
            <Input
              placeholder="z.B. München"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Stadtteil (optional)</label>
            <Input
              placeholder="z.B. Schwabing"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>

        {/* Keywords-Liste */}
        {city && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">{keywords.length} Keywords generiert:</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={copyAllKeywords}
                className="gap-2"
              >
                {copied === 'all' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Alle kopieren
              </Button>
            </div>
            
            <div className="max-h-96 overflow-y-auto space-y-2">
              {keywords.map((kw, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex-1">
                    <span className="font-medium">{kw.keyword}</span>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary" className={getVolumeColor(kw.volume)}>
                        {kw.volume}
                      </Badge>
                      <Badge variant="secondary" className={getCompetitionColor(kw.competition)}>
                        Wettbewerb: {kw.competition}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(kw.keyword)}
                  >
                    {copied === kw.keyword ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
              <h5 className="font-semibold mb-2">💡 Verwendungs-Tipps:</h5>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Verwende "Sehr hoch" Volume-Keywords in Seitentiteln und H1</li>
                <li>• Service-Keywords eignen sich perfekt für Unterseiten</li>
                <li>• Long-Tail-Keywords haben weniger Konkurrenz und höhere Conversion</li>
                <li>• Nutze Stadtteil-Keywords für hyper-lokale Optimierung</li>
              </ul>
            </div>
          </>
        )}

        {!city && (
          <div className="text-center py-8 text-muted-foreground">
            <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Gib deine Stadt ein, um Keywords zu generieren</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BeautyKeywordGenerator;
