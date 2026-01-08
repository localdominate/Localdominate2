import React, { useState } from 'react';
import { ChefHat, Copy, Check, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItemOptimization {
  category: string;
  before: string;
  after: string;
  tips: string[];
  seoBoost: number;
}

const DoenerMenuOptimizer: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const optimizations: MenuItemOptimization[] = [
    {
      category: 'Döner',
      before: 'Döner',
      after: 'Döner Kebab im frischen Fladenbrot mit Salat, Tomaten, Zwiebeln und hausgemachter Joghurt-Knoblauch-Soße',
      tips: [
        'Zutaten aufzählen verbessert Suchrelevanz',
        'Hausgemacht signalisiert Qualität',
        'Soßen-Varianten nennen'
      ],
      seoBoost: 85,
    },
    {
      category: 'Döner',
      before: 'Döner Teller',
      after: 'Döner-Teller mit duftendem Reis, frischem Salat, gegrillten Paprika und drei Soßen nach Wahl',
      tips: [
        'Beilagen detailliert beschreiben',
        'Portionsgröße signalisieren',
        'Wahlmöglichkeiten hervorheben'
      ],
      seoBoost: 75,
    },
    {
      category: 'Dürüm',
      before: 'Dürüm',
      after: 'Dürüm Döner – zarter Döner-Kebab im dünnen Yufka-Fladenbrot gerollt, mit frischem Gemüse und Soße',
      tips: [
        'Erklärung für Nicht-Kenner',
        'Yufka als Keyword nutzen',
        'Zubereitungsart beschreiben'
      ],
      seoBoost: 80,
    },
    {
      category: 'Lahmacun',
      before: 'Lahmacun',
      after: 'Lahmacun – türkische Pizza mit würzigem Hackfleisch, frischen Kräutern und Zitrone, auf Wunsch mit Döner-Fleisch',
      tips: [
        'Türkische Pizza als Erklärung',
        'Upselling-Option mit Döner',
        'Zitrone als typisches Extra'
      ],
      seoBoost: 90,
    },
    {
      category: 'Vegetarisch',
      before: 'Falafel',
      after: 'Falafel – knusprige Kichererbsen-Bällchen mit Hummus, Tabouleh-Salat und Tahini-Soße (vegan)',
      tips: [
        'Vegan explizit erwähnen',
        'Internationale Begriffe nutzen',
        'Beilagen aufzählen'
      ],
      seoBoost: 85,
    },
    {
      category: 'Vegetarisch',
      before: 'Vegetarisch',
      after: 'Halloumi-Döner – gegrillter zyprischer Käse im Fladenbrot mit mediterranem Gemüse und Joghurt-Minz-Dip',
      tips: [
        'Konkrete Alternative statt generisch',
        'Käse-Herkunft erwähnen',
        'Mediterran als Qualitätsmerkmal'
      ],
      seoBoost: 95,
    },
    {
      category: 'Spezialitäten',
      before: 'Iskender',
      after: 'Iskender Kebab – dünn geschnittenes Döner-Fleisch auf Fladenbrot mit würziger Tomatensoße, brauner Butter und cremigem Joghurt',
      tips: [
        'Authentische Zubereitung beschreiben',
        'Premium-Gericht hervorheben',
        'Schichtung erklären'
      ],
      seoBoost: 80,
    },
    {
      category: 'Spezialitäten',
      before: 'Adana',
      after: 'Adana Kebab – handgehacktes, scharf gewürztes Lammhackfleisch vom Holzkohlegrill mit Bulgur und gegrilltem Gemüse',
      tips: [
        'Handarbeit betonen',
        'Holzkohlegrill als USP',
        'Herkunft Adana erwähnen'
      ],
      seoBoost: 85,
    },
    {
      category: 'Beilagen',
      before: 'Pommes',
      after: 'Knusprige Pommes Frites – goldbraun frittiert, auf Wunsch mit Döner-Fleisch und Käse überbacken',
      tips: [
        'Zubereitungsart beschreiben',
        'Upgrade-Optionen anbieten',
        'Frisch betonen'
      ],
      seoBoost: 60,
    },
    {
      category: 'Getränke',
      before: 'Ayran',
      after: 'Ayran – traditionelles türkisches Joghurtgetränk, erfrischend und perfekt zum Döner',
      tips: [
        'Tradition erwähnen',
        'Kombination empfehlen',
        'Erfrischung hervorheben'
      ],
      seoBoost: 70,
    },
  ];

  const categories = [...new Set(optimizations.map(o => o.category))];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const getSeoBoostColor = (boost: number) => {
    if (boost >= 85) return 'text-green-600 bg-green-500/20';
    if (boost >= 70) return 'text-yellow-600 bg-yellow-500/20';
    return 'text-orange-600 bg-orange-500/20';
  };

  return (
    <Card className="my-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <ChefHat className="h-5 w-5 text-primary" />
          Döner-Speisekarten-Optimierer
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Vergleiche kurze vs. optimierte Menübeschreibungen und kopiere die besten Texte für deine Speisekarte
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs px-3 py-1.5">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {optimizations
                .filter((o) => o.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl border overflow-hidden"
                  >
                    {/* Before/After Comparison */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x">
                      {/* Before */}
                      <div className="p-4 bg-red-500/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-red-500/20 text-red-700 border-red-500/30">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Vorher
                          </Badge>
                        </div>
                        <p className="text-lg font-medium text-muted-foreground line-through decoration-red-500/50">
                          {item.before}
                        </p>
                      </div>

                      {/* After */}
                      <div className="p-4 bg-green-500/5">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-green-500/20 text-green-700 border-green-500/30">
                            <Sparkles className="h-3 w-3 mr-1" />
                            SEO-optimiert
                          </Badge>
                          <Badge className={`${getSeoBoostColor(item.seoBoost)}`}>
                            +{item.seoBoost}% SEO
                          </Badge>
                        </div>
                        <p className="text-lg font-medium text-foreground">
                          {item.after}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(item.after)}
                          className="mt-2 gap-2"
                        >
                          {copiedItem === item.after ? (
                            <>
                              <Check className="h-4 w-4 text-green-500" />
                              Kopiert!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Text kopieren
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="px-4 py-3 bg-muted/30 border-t">
                      <div className="flex flex-wrap gap-2">
                        {item.tips.map((tip, tipIndex) => (
                          <span
                            key={tipIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            💡 {tip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* General Tips */}
        <div className="mt-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-5">
          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Allgemeine Speisekarten-SEO-Regeln
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Zutaten aufzählen</strong> – Hilft bei Suchen wie "Döner mit Zwiebeln"</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Zubereitungsart</strong> – "vom Holzkohlegrill", "frisch gerollt"</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Herkunft/Tradition</strong> – "türkisch", "authentisch", "original"</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Allergene/Diäten</strong> – "vegan", "halal", "glutenfrei möglich"</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Portionsgrößen</strong> – "groß", "für 2 Personen", "extra viel"</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Soßen-Optionen</strong> – Kunden suchen nach spezifischen Soßen!</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoenerMenuOptimizer;
