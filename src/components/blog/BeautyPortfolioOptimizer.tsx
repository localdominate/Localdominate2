import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Copy, 
  Check, 
  Camera, 
  Instagram, 
  Image as ImageIcon,
  Sparkles,
  Hash,
  FileImage
} from 'lucide-react';

const BeautyPortfolioOptimizer: React.FC = () => {
  const [city, setCity] = useState('');
  const [service, setService] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('hashtags');

  const serviceTypes = [
    'Balayage', 'Highlights', 'Brautfrisur', 'Herrenhaarschnitt', 'Fade',
    'Microblading', 'Wimpernverlängerung', 'Gelnägel', 'Maniküre', 'Gesichtsbehandlung'
  ];

  const photoChecklist = [
    { id: 'exterior', label: 'Außenansicht mit Logo', category: 'Pflicht' },
    { id: 'reception', label: 'Empfangsbereich', category: 'Pflicht' },
    { id: 'stations', label: 'Arbeitsplätze/Stühle', category: 'Pflicht' },
    { id: 'team', label: 'Team-Foto', category: 'Pflicht' },
    { id: 'products', label: 'Produkt-Regal', category: 'Pflicht' },
    { id: 'washstation', label: 'Waschplatz', category: 'Friseur' },
    { id: 'treatment', label: 'Behandlungsraum', category: 'Kosmetik' },
    { id: 'nailstation', label: 'Nageldesign-Platz', category: 'Nails' },
    { id: 'beforeafter1', label: 'Vorher/Nachher #1', category: 'Empfohlen' },
    { id: 'beforeafter2', label: 'Vorher/Nachher #2', category: 'Empfohlen' },
    { id: 'beforeafter3', label: 'Vorher/Nachher #3', category: 'Empfohlen' },
    { id: 'ambience', label: 'Ambiente/Details', category: 'Empfohlen' },
    { id: 'waiting', label: 'Wartebereich', category: 'Optional' },
    { id: 'equipment', label: 'Equipment/Tools', category: 'Optional' },
    { id: 'customeraction', label: 'Kunde wird behandelt (mit Einwilligung)', category: 'Optional' },
  ];

  const [checkedPhotos, setCheckedPhotos] = useState<string[]>([]);

  const generateHashtags = () => {
    const cityLower = city.toLowerCase().replace(/\s+/g, '');
    const serviceLower = service.toLowerCase().replace(/\s+/g, '');
    
    const baseHashtags = [
      '#friseur', '#hairstylist', '#hairsalon', '#beauty', '#hairstyle',
      '#haircut', '#hairdresser', '#salon', '#beautysalon', '#haircolor',
      '#hairtransformation', '#beforeandafter', '#hairgoals', '#hairstyles',
      '#instahair', '#hairofinstagram', '#salonlife', '#behindthechair'
    ];

    const germanHashtags = [
      '#friseurliebe', '#friseursalon', '#haarefarben', '#haarschnitt',
      '#newhaircut', '#hairstylistgermany', '#beautygermany', '#salonleben'
    ];

    const localHashtags = city ? [
      `#friseur${cityLower}`,
      `#hairstylist${cityLower}`,
      `#beauty${cityLower}`,
      `#salon${cityLower}`,
      `#${cityLower}friseur`,
      `#${cityLower}beauty`
    ] : [];

    const serviceHashtags = service ? [
      `#${serviceLower}`,
      `#${serviceLower}${cityLower}`,
      `#${serviceLower}specialist`,
      `#${serviceLower}expert`
    ] : [];

    return [...localHashtags, ...serviceHashtags, ...baseHashtags.slice(0, 10), ...germanHashtags.slice(0, 5)];
  };

  const generateFilename = () => {
    if (!city || !service) return null;
    
    const citySlug = city.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae');
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
    
    return {
      main: `${serviceSlug}-${citySlug}.jpg`,
      beforeAfter: `${serviceSlug}-vorher-nachher-${citySlug}.jpg`,
      alt: `${service} beim Friseur in ${city} - Vorher/Nachher Transformation`,
      title: `${service} ${city} - Professionelle Behandlung`
    };
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const hashtags = generateHashtags();
  const filename = generateFilename();
  const completedPhotos = checkedPhotos.length;
  const requiredPhotos = photoChecklist.filter(p => p.category === 'Pflicht').length;
  const completedRequired = photoChecklist
    .filter(p => p.category === 'Pflicht')
    .filter(p => checkedPhotos.includes(p.id)).length;

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-purple-500" />
          Beauty-Portfolio-Optimierer
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Optimiere deine Fotos für Google Business & Instagram
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Eingabefelder */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Deine Stadt</label>
            <Input
              placeholder="z.B. Hamburg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Service/Behandlung</label>
            <div className="flex gap-2">
              <Input
                placeholder="z.B. Balayage"
                value={service}
                onChange={(e) => setService(e.target.value)}
                list="services"
              />
              <datalist id="services">
                {serviceTypes.map(s => <option key={s} value={s} />)}
              </datalist>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="hashtags" className="gap-2">
              <Hash className="h-4 w-4" />
              Hashtags
            </TabsTrigger>
            <TabsTrigger value="filenames" className="gap-2">
              <FileImage className="h-4 w-4" />
              Dateinamen
            </TabsTrigger>
            <TabsTrigger value="checklist" className="gap-2">
              <ImageIcon className="h-4 w-4" />
              Foto-Checkliste
            </TabsTrigger>
          </TabsList>

          {/* Hashtags Tab */}
          <TabsContent value="hashtags">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{hashtags.length} Hashtags generiert:</h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(hashtags.join(' '), 'hashtags')}
                  className="gap-2"
                >
                  {copied === 'hashtags' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  Alle kopieren
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
                {hashtags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`cursor-pointer transition-colors ${
                      idx < (city ? 6 : 0) + (service ? 4 : 0) 
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
                        : ''
                    }`}
                    onClick={() => copyToClipboard(tag, tag)}
                  >
                    {copied === tag ? <Check className="h-3 w-3 mr-1" /> : null}
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="h-5 w-5 text-pink-500" />
                  <h5 className="font-semibold">Instagram-Tipps:</h5>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Nutze max. 30 Hashtags pro Post</li>
                  <li>• Lokale Hashtags (violett markiert) erhöhen lokale Reichweite</li>
                  <li>• Mische große und kleine Hashtags für beste Sichtbarkeit</li>
                  <li>• Wechsle Hashtag-Sets regelmäßig ab</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Dateinamen Tab */}
          <TabsContent value="filenames">
            {filename ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Hauptbild Dateiname:</label>
                        <p className="font-mono text-sm">{filename.main}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(filename.main, 'main')}
                      >
                        {copied === 'main' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Vorher/Nachher Dateiname:</label>
                        <p className="font-mono text-sm">{filename.beforeAfter}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(filename.beforeAfter, 'beforeafter')}
                      >
                        {copied === 'beforeafter' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Alt-Text für SEO:</label>
                        <p className="text-sm">{filename.alt}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(filename.alt, 'alt')}
                      >
                        {copied === 'alt' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Title-Attribut:</label>
                        <p className="text-sm">{filename.title}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(filename.title, 'title')}
                      >
                        {copied === 'title' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h5 className="font-semibold mb-2">💡 Warum SEO-Dateinamen wichtig sind:</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Google liest Dateinamen zur Bild-Indexierung</li>
                    <li>• Beschreibende Namen verbessern die Bild-Suche</li>
                    <li>• Lokale Keywords im Dateinamen stärken Local SEO</li>
                    <li>• Vermeide generische Namen wie "IMG_1234.jpg"</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileImage className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Gib Stadt und Service ein, um optimierte Dateinamen zu generieren</p>
              </div>
            )}
          </TabsContent>

          {/* Foto-Checkliste Tab */}
          <TabsContent value="checklist">
            <div className="space-y-4">
              {/* Fortschrittsanzeige */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Fortschritt</span>
                  <span className="text-sm text-muted-foreground">
                    {completedPhotos}/{photoChecklist.length} Fotos
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${(completedPhotos / photoChecklist.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Pflicht-Fotos: {completedRequired}/{requiredPhotos} ✓
                </p>
              </div>

              {/* Checkliste nach Kategorie */}
              {['Pflicht', 'Friseur', 'Kosmetik', 'Nails', 'Empfohlen', 'Optional'].map(category => {
                const items = photoChecklist.filter(p => p.category === category);
                if (items.length === 0) return null;
                
                return (
                  <div key={category}>
                    <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                      {category === 'Pflicht' && <Badge variant="destructive">Pflicht</Badge>}
                      {category === 'Empfohlen' && <Badge className="bg-green-500">Empfohlen</Badge>}
                      {category === 'Optional' && <Badge variant="secondary">Optional</Badge>}
                      {['Friseur', 'Kosmetik', 'Nails'].includes(category) && (
                        <Badge variant="outline">{category}</Badge>
                      )}
                    </h5>
                    <div className="space-y-2">
                      {items.map(item => (
                        <label
                          key={item.id}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                            checkedPhotos.includes(item.id)
                              ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800'
                              : 'bg-muted/50 hover:bg-muted'
                          }`}
                        >
                          <Checkbox
                            checked={checkedPhotos.includes(item.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setCheckedPhotos([...checkedPhotos, item.id]);
                              } else {
                                setCheckedPhotos(checkedPhotos.filter(id => id !== item.id));
                              }
                            }}
                          />
                          <span className={checkedPhotos.includes(item.id) ? 'line-through text-muted-foreground' : ''}>
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Foto-Tipps */}
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Foto-Qualitäts-Tipps:
                </h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Nutze natürliches Licht oder Ring-Lichter</li>
                  <li>• Smartphone im Hochformat für Stories, Querformat für Google</li>
                  <li>• Aufgeräumter Hintergrund ohne Ablenkung</li>
                  <li>• Konsistenter Stil/Filter für Wiedererkennungswert</li>
                  <li>• Vorher/Nachher immer gleicher Winkel & Beleuchtung</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BeautyPortfolioOptimizer;
