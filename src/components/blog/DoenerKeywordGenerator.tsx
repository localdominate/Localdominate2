import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface KeywordData {
  keyword: string;
  volume: 'sehr hoch' | 'hoch' | 'mittel' | 'niedrig';
  difficulty: 'leicht' | 'mittel' | 'schwer';
  intent: 'transaktional' | 'informational' | 'lokal';
}

const DoenerKeywordGenerator: React.FC = () => {
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('basis');

  const keywordTemplates: Record<string, KeywordData[]> = {
    basis: [
      { keyword: 'Döner {city}', volume: 'sehr hoch', difficulty: 'schwer', intent: 'lokal' },
      { keyword: 'Kebab {city}', volume: 'sehr hoch', difficulty: 'schwer', intent: 'lokal' },
      { keyword: 'Döner in der Nähe', volume: 'sehr hoch', difficulty: 'schwer', intent: 'lokal' },
      { keyword: 'Döner {district}', volume: 'hoch', difficulty: 'mittel', intent: 'lokal' },
      { keyword: 'Türkisches Restaurant {city}', volume: 'hoch', difficulty: 'mittel', intent: 'lokal' },
      { keyword: 'Imbiss {city}', volume: 'hoch', difficulty: 'schwer', intent: 'lokal' },
    ],
    spezialitaeten: [
      { keyword: 'Lahmacun {city}', volume: 'hoch', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Dürüm {city}', volume: 'hoch', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Köfte {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Pide {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Adana Kebab {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Iskender Kebab {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Tantuni {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Sucuk {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
    ],
    qualitaet: [
      { keyword: 'Bester Döner {city}', volume: 'sehr hoch', difficulty: 'schwer', intent: 'transaktional' },
      { keyword: 'Guter Döner {city}', volume: 'hoch', difficulty: 'mittel', intent: 'transaktional' },
      { keyword: 'Top Döner {city}', volume: 'mittel', difficulty: 'mittel', intent: 'transaktional' },
      { keyword: 'Döner Empfehlung {city}', volume: 'mittel', difficulty: 'leicht', intent: 'informational' },
      { keyword: 'Döner Test {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'informational' },
      { keyword: 'Authentischer Döner {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
    ],
    lieferung: [
      { keyword: 'Döner Lieferservice {city}', volume: 'hoch', difficulty: 'mittel', intent: 'transaktional' },
      { keyword: 'Döner bestellen {city}', volume: 'hoch', difficulty: 'mittel', intent: 'transaktional' },
      { keyword: 'Döner Lieferung {district}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner online bestellen {city}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner Lieferando {city}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner Wolt {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
    ],
    oeffnungszeiten: [
      { keyword: 'Döner offen jetzt {city}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner Nachtimbiss {city}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner 24 Stunden {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner spät offen {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner Sonntag {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
    ],
    vegetarisch: [
      { keyword: 'Falafel {city}', volume: 'hoch', difficulty: 'mittel', intent: 'lokal' },
      { keyword: 'Vegetarischer Döner {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Veganer Döner {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Halloumi Döner {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Gemüse Döner {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
    ],
    longtail: [
      { keyword: 'Döner mit viel Fleisch {city}', volume: 'mittel', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner ohne Zwiebeln {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner mit scharfer Soße {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
      { keyword: 'Döner Teller {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Döner Box {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Döner Pommes {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Halal Döner {city}', volume: 'mittel', difficulty: 'leicht', intent: 'lokal' },
      { keyword: 'Döner Catering {city}', volume: 'niedrig', difficulty: 'leicht', intent: 'transaktional' },
    ],
  };

  const categoryLabels: Record<string, string> = {
    basis: 'Basis-Keywords',
    spezialitaeten: 'Spezialitäten',
    qualitaet: 'Qualität',
    lieferung: 'Lieferung',
    oeffnungszeiten: 'Öffnungszeiten',
    vegetarisch: 'Vegetarisch/Vegan',
    longtail: 'Long-Tail',
  };

  const generatedKeywords = useMemo(() => {
    const cityName = city.trim() || '[Stadt]';
    const districtName = district.trim() || '[Stadtteil]';
    
    return keywordTemplates[activeCategory].map(kw => ({
      ...kw,
      keyword: kw.keyword.replace('{city}', cityName).replace('{district}', districtName),
    }));
  }, [city, district, activeCategory]);

  const copyToClipboard = (keyword: string) => {
    navigator.clipboard.writeText(keyword);
    setCopiedKeyword(keyword);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const copyAllKeywords = () => {
    const allKeywords = generatedKeywords.map(kw => kw.keyword).join('\n');
    navigator.clipboard.writeText(allKeywords);
    setCopiedKeyword('all');
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const getVolumeColor = (volume: string) => {
    switch (volume) {
      case 'sehr hoch': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'hoch': return 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30';
      case 'mittel': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'niedrig': return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'leicht': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'mittel': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'schwer': return 'bg-red-500/20 text-red-700 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  return (
    <Card className="my-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Search className="h-5 w-5 text-primary" />
          Döner-Keyword-Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Gib deinen Standort ein und erhalte sofort relevante Keywords für dein Döner-SEO
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Stadt
            </label>
            <Input
              placeholder="z.B. Berlin, München, Hamburg..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Stadtteil (optional)
            </label>
            <Input
              placeholder="z.B. Kreuzberg, Schwabing..."
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="bg-background"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsTrigger key={key} value={key} className="text-xs px-3 py-1.5">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="space-y-2">
                {generatedKeywords.map((kw, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <code className="text-sm font-medium bg-muted px-2 py-1 rounded">
                        {kw.keyword}
                      </code>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={`text-xs ${getVolumeColor(kw.volume)}`}>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {kw.volume}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(kw.difficulty)}`}>
                          {kw.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(kw.keyword)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedKeyword === kw.keyword ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Copy All Button */}
        <div className="flex justify-end pt-4 border-t">
          <Button onClick={copyAllKeywords} variant="outline" className="gap-2">
            {copiedKeyword === 'all' ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Alle kopiert!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Alle Keywords kopieren
              </>
            )}
          </Button>
        </div>

        {/* Tips */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-4">
          <h4 className="font-semibold text-amber-700 mb-2">💡 Profi-Tipps zur Keyword-Nutzung:</h4>
          <ul className="text-sm text-amber-700/80 space-y-1">
            <li>• Verwende <strong>Basis-Keywords</strong> in deinem Google Business Titel</li>
            <li>• Integriere <strong>Spezialitäten</strong> in deine Speisekarten-Beschreibungen</li>
            <li>• Nutze <strong>Long-Tail-Keywords</strong> für FAQ-Beiträge auf deiner Website</li>
            <li>• <strong>Vegetarische Keywords</strong> gewinnen an Suchvolumen – nicht ignorieren!</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoenerKeywordGenerator;
