import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, Phone, Video, MapPin, Clock, AlertCircle, 
  CheckCircle, ArrowRight, RotateCcw, Lightbulb,
  FileText, Camera, Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Problem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  causes: string[];
  solutions: {
    step: string;
    detail: string;
  }[];
  alternativeMethod?: string;
  successRate: number;
  timeEstimate: string;
}

const problems: Problem[] = [
  {
    id: 'postcard-not-received',
    title: 'Postkarte nicht erhalten',
    icon: <Mail className="h-5 w-5" />,
    description: 'Die Verifizierungs-Postkarte ist nach 14 Tagen nicht angekommen.',
    causes: [
      'Falsche oder unvollständige Adresse',
      'Postkarte wurde als Werbung entsorgt',
      'Postfach statt Straßenadresse verwendet',
      'Adresse entspricht nicht dem Firmensitz',
    ],
    solutions: [
      { step: 'Adresse prüfen', detail: 'Stelle sicher, dass die Adresse exakt mit deinem Gewerbeschein übereinstimmt.' },
      { step: 'Neue Postkarte anfordern', detail: 'Klicke auf "Neue Postkarte senden" im GBP Dashboard. Du kannst bis zu 5x anfordern.' },
      { step: 'Alternative Methode wählen', detail: 'Nach 2 fehlgeschlagenen Versuchen wird oft Telefon- oder Video-Verifizierung angeboten.' },
      { step: 'Support kontaktieren', detail: 'Wenn nichts hilft: Google Support mit Nachweis der Adresse kontaktieren.' },
    ],
    alternativeMethod: 'Video-Verifizierung',
    successRate: 78,
    timeEstimate: '3-14 Tage',
  },
  {
    id: 'code-invalid',
    title: 'Verifizierungscode ungültig',
    icon: <AlertCircle className="h-5 w-5" />,
    description: 'Der eingegebene Code wird nicht akzeptiert.',
    causes: [
      'Code ist abgelaufen (älter als 30 Tage)',
      'Tippfehler bei der Eingabe',
      'Code bereits verwendet',
      'Profildaten wurden nach Codeversand geändert',
    ],
    solutions: [
      { step: 'Eingabe prüfen', detail: 'Achte auf Groß-/Kleinschreibung und verwechsle nicht O/0 oder I/1.' },
      { step: 'Ablaufdatum checken', detail: 'Der Code ist nur 30 Tage gültig. Prüfe das Datum auf der Postkarte.' },
      { step: 'Profil unverändert lassen', detail: 'Ändere KEINE Daten zwischen Codeversand und Verifizierung.' },
      { step: 'Neuen Code anfordern', detail: 'Bei abgelaufenem Code: Neue Verifizierung starten.' },
    ],
    successRate: 92,
    timeEstimate: '1-3 Tage',
  },
  {
    id: 'phone-verification-fails',
    title: 'Telefon-Verifizierung schlägt fehl',
    icon: <Phone className="h-5 w-5" />,
    description: 'Der Anruf kommt nicht an oder der Code funktioniert nicht.',
    causes: [
      'Falsche Telefonnummer hinterlegt',
      'Anrufweiterleitung oder Mailbox aktiv',
      'Nummer ist nicht die Geschäftsnummer',
      'Spam-Filter blockiert den Anruf',
    ],
    solutions: [
      { step: 'Nummer aktualisieren', detail: 'Trage die Festnetznummer deines Geschäfts ein, keine Handynummer.' },
      { step: 'Mailbox deaktivieren', detail: 'Schalte vorübergehend die Mailbox aus und deaktiviere Anrufweiterleitungen.' },
      { step: 'Spam-Filter prüfen', detail: 'Stelle sicher, dass Google-Nummern (+1 650...) nicht blockiert sind.' },
      { step: 'Alternative wählen', detail: 'Wenn Telefon nicht klappt: Postkarte oder Video-Verifizierung nutzen.' },
    ],
    alternativeMethod: 'Postkarte',
    successRate: 85,
    timeEstimate: 'Sofort',
  },
  {
    id: 'video-verification-rejected',
    title: 'Video-Verifizierung abgelehnt',
    icon: <Video className="h-5 w-5" />,
    description: 'Das hochgeladene Video wurde von Google abgelehnt.',
    causes: [
      'Video zeigt nicht alle geforderten Elemente',
      'Schlechte Videoqualität',
      'Straßenschild oder Hausnummer nicht sichtbar',
      'Innenaufnahmen fehlen',
    ],
    solutions: [
      { step: 'Checkliste befolgen', detail: 'Video muss zeigen: Straßenschild, Hausnummer, Eingang, Schaufenster, Innenraum.' },
      { step: 'Qualität verbessern', detail: 'Filme bei Tageslicht, halte die Kamera ruhig, mind. 30 Sekunden pro Bereich.' },
      { step: 'Durchgehend filmen', detail: 'Das Video muss OHNE SCHNITT von der Straße bis in den Laden führen.' },
      { step: 'Gewerbeschein zeigen', detail: 'Halte am Ende kurz den Gewerbeschein mit sichtbarer Adresse in die Kamera.' },
    ],
    successRate: 89,
    timeEstimate: '1-5 Tage',
  },
  {
    id: 'address-mismatch',
    title: 'Adresse wird nicht akzeptiert',
    icon: <MapPin className="h-5 w-5" />,
    description: 'Google akzeptiert die eingegebene Geschäftsadresse nicht.',
    causes: [
      'Adresse existiert nicht in Google Maps',
      'Abweichung von offizieller Schreibweise',
      'Neubaugebiet noch nicht kartiert',
      'Shared Office oder Coworking Space',
    ],
    solutions: [
      { step: 'Maps-Schreibweise nutzen', detail: 'Suche die Adresse in Google Maps und kopiere die exakte Schreibweise.' },
      { step: 'Fehlenden Ort melden', detail: 'Melde fehlende Adressen über Google Maps als "Fehlenden Ort hinzufügen".' },
      { step: 'Offizielle Dokumente nutzen', detail: 'Verwende die Adresse exakt wie auf dem Gewerbeschein.' },
      { step: 'Coworking vermeiden', detail: 'Shared Offices sind problematisch - nutze wenn möglich eine eigene Adresse.' },
    ],
    successRate: 75,
    timeEstimate: '1-7 Tage',
  },
  {
    id: 'verification-option-missing',
    title: 'Verifizierungsoption nicht verfügbar',
    icon: <Clock className="h-5 w-5" />,
    description: 'Die gewünschte Verifizierungsmethode wird nicht angeboten.',
    causes: [
      'Branche unterstützt Methode nicht',
      'Region hat eingeschränkte Optionen',
      'Profil wurde bereits mehrfach abgelehnt',
      'Verdacht auf Missbrauch',
    ],
    solutions: [
      { step: 'Alle Optionen prüfen', detail: 'Scrolle im Verifizierungsmenü nach unten - manchmal sind Optionen versteckt.' },
      { step: 'Profil optimieren', detail: 'Vollständige Profile erhalten mehr Verifizierungsoptionen.' },
      { step: 'Warten und erneut prüfen', detail: 'Nach 24-48 Stunden können neue Optionen erscheinen.' },
      { step: 'Support kontaktieren', detail: 'Google Support kann manuell weitere Optionen freischalten.' },
    ],
    alternativeMethod: 'Google Support',
    successRate: 70,
    timeEstimate: '2-7 Tage',
  },
  {
    id: 'business-type-issue',
    title: 'Unternehmenstyp wird abgelehnt',
    icon: <Building className="h-5 w-5" />,
    description: 'Google akzeptiert die gewählte Unternehmenskategorie nicht.',
    causes: [
      'Kategorie entspricht nicht dem tatsächlichen Geschäft',
      'Service-Area-Business falsch eingestellt',
      'Home-Based Business ohne Kundenempfang',
      'Online-Only Geschäft',
    ],
    solutions: [
      { step: 'Passende Kategorie wählen', detail: 'Wähle die Kategorie, die dein Hauptgeschäft am besten beschreibt.' },
      { step: 'SAB korrekt einstellen', detail: 'Wenn du Kunden besuchst: Service-Area-Business aktivieren, Adresse verbergen.' },
      { step: 'Kundenempfang ermöglichen', detail: 'Home-Businesses brauchen echten Kundenempfang für GBP.' },
      { step: 'Alternative prüfen', detail: 'Reine Online-Shops können kein GBP erstellen - nutze Google Merchant Center.' },
    ],
    successRate: 82,
    timeEstimate: '1-3 Tage',
  },
  {
    id: 'document-rejected',
    title: 'Nachweis-Dokumente abgelehnt',
    icon: <FileText className="h-5 w-5" />,
    description: 'Die eingereichten Dokumente wurden nicht akzeptiert.',
    causes: [
      'Dokument ist unlesbar oder zu klein',
      'Adresse im Dokument stimmt nicht überein',
      'Dokument ist zu alt',
      'Falscher Dokumenttyp eingereicht',
    ],
    solutions: [
      { step: 'Hochauflösend scannen', detail: 'Mindestens 300 DPI, alle Ecken sichtbar, keine Reflexionen.' },
      { step: 'Aktuelle Dokumente nutzen', detail: 'Dokumente sollten nicht älter als 3 Monate sein.' },
      { step: 'Richtige Dokumente wählen', detail: 'Akzeptiert: Gewerbeschein, Stromrechnung, Kontoauszug mit Adresse.' },
      { step: 'Mehrere Dokumente einreichen', detail: 'Lade 2-3 verschiedene Nachweise hoch für höhere Erfolgsrate.' },
    ],
    successRate: 88,
    timeEstimate: '3-7 Tage',
  },
];

export const VerifizierungsProblemWizard: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const handleSelectProblem = (problem: Problem) => {
    setSelectedProblem(problem);
    setCompletedSteps(new Set());
  };

  const handleToggleStep = (index: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedSteps(newCompleted);
  };

  const handleReset = () => {
    setSelectedProblem(null);
    setCompletedSteps(new Set());
  };

  const progress = selectedProblem 
    ? (completedSteps.size / selectedProblem.solutions.length) * 100 
    : 0;

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Lightbulb className="h-6 w-6 text-primary" />
          Verifizierungs-Problemlöser
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Wähle dein Problem und erhalte eine Schritt-für-Schritt Lösung.
        </p>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {!selectedProblem ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {problems.map((problem) => (
                <motion.button
                  key={problem.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectProblem(problem)}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 hover:bg-muted/50 transition-all text-left"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {problem.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm">{problem.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {problem.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="solution"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {selectedProblem.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedProblem.title}</h3>
                    <p className="text-sm text-muted-foreground">{selectedProblem.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedProblem.successRate}%</div>
                  <div className="text-xs text-muted-foreground">Erfolgsrate</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedProblem.timeEstimate}</div>
                  <div className="text-xs text-muted-foreground">Zeitaufwand</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedProblem.solutions.length}</div>
                  <div className="text-xs text-muted-foreground">Schritte</div>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fortschritt</span>
                  <span>{completedSteps.size}/{selectedProblem.solutions.length} Schritte</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Causes */}
              <Accordion type="single" collapsible>
                <AccordionItem value="causes">
                  <AccordionTrigger className="text-sm">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Mögliche Ursachen ({selectedProblem.causes.length})
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {selectedProblem.causes.map((cause, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Solutions */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Lösungsschritte
                </h4>
                {selectedProblem.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleToggleStep(index)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      completedSteps.has(index)
                        ? 'border-green-500 bg-green-50'
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        completedSteps.has(index) ? 'bg-green-500 text-white' : 'bg-muted'
                      }`}>
                        {completedSteps.has(index) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium">{solution.step}</h5>
                        <p className="text-sm text-muted-foreground mt-1">{solution.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Alternative */}
              {selectedProblem.alternativeMethod && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Lightbulb className="h-4 w-4" />
                    <span className="font-medium">Alternative Methode:</span>
                    <Badge variant="secondary">{selectedProblem.alternativeMethod}</Badge>
                  </div>
                </div>
              )}

              {/* Complete */}
              {completedSteps.size === selectedProblem.solutions.length && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-100 border border-green-300 rounded-lg text-center"
                >
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-green-800">Alle Schritte abgeschlossen!</p>
                  <p className="text-sm text-green-700 mt-1">
                    Die Verifizierung sollte nun funktionieren. Falls nicht, kontaktiere den Google Support.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default VerifizierungsProblemWizard;
