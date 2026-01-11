import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, CheckCircle, Circle, AlertTriangle, 
  ExternalLink, RotateCcw, Copy, MapPin, Phone, Globe,
  Building, Star, Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  howTo: string;
  tip?: string;
  critical: boolean;
}

const checklistItems: ChecklistItem[] = [
  {
    id: 'google-search-name',
    title: 'Google-Suche: Firmenname',
    description: 'Suche nach deinem exakten Firmennamen bei Google.',
    howTo: 'Gib "Firmenname Stadt" in die Google-Suche ein und prüfe alle Ergebnisse auf der ersten Seite.',
    tip: 'Achte auf leicht abweichende Schreibweisen (z.B. GmbH vs. "GmbH").',
    critical: true,
  },
  {
    id: 'google-search-address',
    title: 'Google-Suche: Adresse',
    description: 'Suche nach deiner Geschäftsadresse.',
    howTo: 'Gib deine vollständige Adresse in die Suche ein. Prüfe ob mehrere Unternehmen mit gleichem Namen erscheinen.',
    critical: true,
  },
  {
    id: 'google-maps-search',
    title: 'Google Maps: Kartensuche',
    description: 'Durchsuche Google Maps nach deinem Unternehmen.',
    howTo: 'Öffne maps.google.com, suche nach deinem Firmennamen und zoome an deinen Standort heran.',
    tip: 'Klicke auf verschiedene Pins in der Nähe - manchmal verstecken sich Duplicates.',
    critical: true,
  },
  {
    id: 'gbp-dashboard',
    title: 'GBP Dashboard prüfen',
    description: 'Prüfe dein Google Business Profil Dashboard auf mehrere Einträge.',
    howTo: 'Logge dich auf business.google.com ein und prüfe ob mehrere Standorte aufgelistet sind.',
    critical: true,
  },
  {
    id: 'phone-search',
    title: 'Telefonnummer-Suche',
    description: 'Suche nach deiner Geschäfts-Telefonnummer.',
    howTo: 'Gib deine Telefonnummer mit Vorwahl in die Google-Suche ein.',
    tip: 'Teste verschiedene Formate: mit/ohne Leerzeichen, mit/ohne Ländercode.',
    critical: false,
  },
  {
    id: 'old-addresses',
    title: 'Alte Adressen prüfen',
    description: 'Suche nach Einträgen an früheren Standorten.',
    howTo: 'Falls du umgezogen bist: Suche nach deinem Firmennamen + alter Adresse.',
    tip: 'Auch Einträge von vor Jahren können noch existieren.',
    critical: false,
  },
  {
    id: 'spelling-variations',
    title: 'Schreibweisen-Varianten',
    description: 'Teste verschiedene Schreibweisen deines Namens.',
    howTo: 'Suche nach häufigen Varianten: mit/ohne Bindestriche, Umlaute (ä/ae), Abkürzungen.',
    tip: 'Beispiel: "Müller" vs "Mueller", "Dr." vs "Doktor"',
    critical: false,
  },
  {
    id: 'citation-sources',
    title: 'Branchenverzeichnisse',
    description: 'Prüfe große Verzeichnisse auf doppelte Einträge.',
    howTo: 'Suche in gelbeseiten.de, yelp.de, golocal.de nach deinem Unternehmen.',
    tip: 'Diese Verzeichnisse werden oft automatisch von Google übernommen.',
    critical: false,
  },
  {
    id: 'department-listings',
    title: 'Abteilungs-Einträge',
    description: 'Prüfe ob einzelne Abteilungen eigene Einträge haben.',
    howTo: 'Suche nach "Firmenname + Abteilung" (z.B. "Müller GmbH Werkstatt").',
    tip: 'Separate Abteilungs-Profile sind nur erlaubt, wenn sie eigene Eingänge haben.',
    critical: false,
  },
  {
    id: 'competitor-check',
    title: 'Wettbewerber-Check',
    description: 'Stelle sicher, dass niemand deinen Namen missbraucht.',
    howTo: 'Suche nach deinem Firmennamen und prüfe alle Einträge auf Legitimität.',
    tip: 'Spam-Einträge von Wettbewerbern können dein Ranking schädigen.',
    critical: true,
  },
];

interface DuplicateResult {
  found: boolean;
  items: string[];
}

export const DuplicateFinderCheckliste: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [duplicatesFound, setDuplicatesFound] = useState<Map<string, boolean>>(new Map());
  const [showResults, setShowResults] = useState(false);

  const handleToggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const handleMarkDuplicate = (id: string, found: boolean) => {
    const newDuplicates = new Map(duplicatesFound);
    newDuplicates.set(id, found);
    setDuplicatesFound(newDuplicates);
  };

  const handleReset = () => {
    setCheckedItems(new Set());
    setDuplicatesFound(new Map());
    setShowResults(false);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const progress = (checkedItems.size / checklistItems.length) * 100;
  const duplicateCount = Array.from(duplicatesFound.values()).filter(v => v).length;
  const criticalItems = checklistItems.filter(item => item.critical);
  const criticalChecked = criticalItems.filter(item => checkedItems.has(item.id)).length;

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Search className="h-6 w-6 text-primary" />
          Duplicate-Finder Checkliste
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Gehe alle Punkte durch um doppelte Einträge zu finden. Markiere ob du Duplicates gefunden hast.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Fortschritt</span>
            <span className="text-sm text-muted-foreground">
              {checkedItems.size}/{checklistItems.length} geprüft
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="text-xl font-bold text-primary">{checkedItems.size}</div>
              <div className="text-xs text-muted-foreground">Geprüft</div>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="text-xl font-bold text-yellow-600">{duplicateCount}</div>
              <div className="text-xs text-muted-foreground">Duplicates</div>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="text-xl font-bold text-green-600">{criticalChecked}/{criticalItems.length}</div>
              <div className="text-xs text-muted-foreground">Kritische</div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <AnimatePresence>
          {!showResults ? (
            <motion.div
              key="checklist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {checklistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    checkedItems.has(item.id)
                      ? duplicatesFound.get(item.id)
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-green-500 bg-green-50'
                      : 'border-muted hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleToggleItem(item.id)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      {checkedItems.has(item.id) ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">{item.title}</h4>
                        {item.critical && (
                          <Badge variant="destructive" className="text-xs">Kritisch</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      
                      <div className="mt-3 p-3 bg-muted/50 rounded text-sm">
                        <strong>So geht's:</strong> {item.howTo}
                        {item.tip && (
                          <p className="mt-2 text-primary">
                            <strong>💡 Tipp:</strong> {item.tip}
                          </p>
                        )}
                      </div>

                      {checkedItems.has(item.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 flex gap-2"
                        >
                          <Button
                            size="sm"
                            variant={duplicatesFound.get(item.id) === true ? 'default' : 'outline'}
                            onClick={() => handleMarkDuplicate(item.id, true)}
                            className="flex-1"
                          >
                            <AlertTriangle className="h-4 w-4 mr-1" />
                            Duplicate gefunden
                          </Button>
                          <Button
                            size="sm"
                            variant={duplicatesFound.get(item.id) === false ? 'default' : 'outline'}
                            onClick={() => handleMarkDuplicate(item.id, false)}
                            className="flex-1"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Kein Duplicate
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleShowResults}
                  disabled={checkedItems.size < criticalItems.length}
                  className="flex-1"
                >
                  Ergebnis anzeigen
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {duplicateCount > 0 ? (
                <div className="p-6 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h3 className="text-lg font-bold text-yellow-800">
                        {duplicateCount} Duplicate(s) gefunden
                      </h3>
                      <p className="text-sm text-yellow-700">
                        Du solltest diese doppelten Einträge entfernen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Gefunden bei:</h4>
                    <ul className="space-y-1">
                      {Array.from(duplicatesFound.entries())
                        .filter(([_, found]) => found)
                        .map(([id]) => {
                          const item = checklistItems.find(i => i.id === id);
                          return (
                            <li key={id} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-yellow-600" />
                              {item?.title}
                            </li>
                          );
                        })}
                    </ul>
                  </div>

                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2">Nächste Schritte:</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-primary">1.</span>
                        Öffne jedes Duplicate in Google Maps
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-primary">2.</span>
                        Klicke auf "Änderung vorschlagen" → "Schließen oder entfernen"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-primary">3.</span>
                        Wähle "Duplicate eines anderen Ortes" als Grund
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-primary">4.</span>
                        Warte 3-7 Tage auf die Bearbeitung
                      </li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-green-800">Keine Duplicates gefunden!</h3>
                  <p className="text-sm text-green-700 mt-1">
                    Dein Google Business Profil ist sauber. Führe diese Prüfung alle 3 Monate durch.
                  </p>
                </div>
              )}

              <Button variant="outline" onClick={handleReset} className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Prüfung wiederholen
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default DuplicateFinderCheckliste;
