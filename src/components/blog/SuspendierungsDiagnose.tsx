import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, RotateCcw, ShieldAlert, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DiagnoseStep {
  id: string;
  question: string;
  description: string;
  yesNext: string | null;
  noNext: string | null;
  result?: {
    type: 'soft' | 'hard' | 'not-suspended' | 'action';
    title: string;
    description: string;
    actions: string[];
    severity: 'low' | 'medium' | 'high';
  };
}

const diagnoseSteps: DiagnoseStep[] = [
  {
    id: 'start',
    question: 'Kannst du dich in dein Google Business Profil einloggen?',
    description: 'Versuche dich unter business.google.com anzumelden.',
    yesNext: 'visible-search',
    noNext: 'login-error',
  },
  {
    id: 'login-error',
    question: 'Siehst du eine Fehlermeldung beim Login?',
    description: 'Z.B. "Konto gesperrt" oder "Zugriff verweigert".',
    yesNext: 'hard-suspended',
    noNext: 'account-issue',
  },
  {
    id: 'visible-search',
    question: 'Ist dein Unternehmen in der Google-Suche sichtbar?',
    description: 'Suche nach deinem Firmennamen + Stadt.',
    yesNext: 'check-status',
    noNext: 'not-visible',
  },
  {
    id: 'check-status',
    question: 'Siehst du im Dashboard die Meldung "Profil suspendiert"?',
    description: 'Prüfe den Status-Bereich in deinem GBP Dashboard.',
    yesNext: 'soft-suspended',
    noNext: 'not-suspended',
  },
  {
    id: 'not-visible',
    question: 'Wurde dein Profil kürzlich verifiziert?',
    description: 'Neue Profile können 1-2 Wochen brauchen um sichtbar zu werden.',
    yesNext: 'wait-indexing',
    noNext: 'soft-suspended',
  },
  {
    id: 'hard-suspended',
    question: '',
    description: '',
    yesNext: null,
    noNext: null,
    result: {
      type: 'hard',
      title: 'Hard Suspension erkannt',
      description: 'Dein Profil wurde vollständig deaktiviert. Dies passiert bei schweren Richtlinienverstößen.',
      actions: [
        'Prüfe ob du gegen Googles Richtlinien verstoßen hast',
        'Reiche einen Appeal über das Reinstatement-Formular ein',
        'Bereite Nachweise vor (Gewerbeschein, Fotos vom Geschäft)',
        'Erwarte eine Wartezeit von 7-21 Tagen',
      ],
      severity: 'high',
    },
  },
  {
    id: 'soft-suspended',
    question: '',
    description: '',
    yesNext: null,
    noNext: null,
    result: {
      type: 'soft',
      title: 'Soft Suspension erkannt',
      description: 'Dein Profil ist eingeschränkt sichtbar. Dies ist oft leichter zu beheben.',
      actions: [
        'Überprüfe alle Profil-Informationen auf Korrektheit',
        'Stelle sicher, dass NAP-Daten konsistent sind',
        'Entferne verdächtige Änderungen der letzten Tage',
        'Warte 24-48 Stunden und prüfe erneut',
        'Bei Fortbestehen: Appeal einreichen',
      ],
      severity: 'medium',
    },
  },
  {
    id: 'not-suspended',
    question: '',
    description: '',
    yesNext: null,
    noNext: null,
    result: {
      type: 'not-suspended',
      title: 'Keine Suspendierung',
      description: 'Dein Profil scheint nicht suspendiert zu sein. Das Problem liegt woanders.',
      actions: [
        'Prüfe ob dein Profil vollständig verifiziert ist',
        'Optimiere deine Profil-Informationen',
        'Überprüfe die Indexierung bei Google',
        'Warte bei neuen Profilen 1-2 Wochen',
      ],
      severity: 'low',
    },
  },
  {
    id: 'wait-indexing',
    question: '',
    description: '',
    yesNext: null,
    noNext: null,
    result: {
      type: 'action',
      title: 'Indexierung abwarten',
      description: 'Neue Profile brauchen Zeit um in der Suche zu erscheinen.',
      actions: [
        'Warte 1-2 Wochen nach der Verifizierung',
        'Füge in der Zwischenzeit Fotos und Beschreibung hinzu',
        'Bitte erste Kunden um Bewertungen',
        'Wenn nach 2 Wochen nicht sichtbar: Support kontaktieren',
      ],
      severity: 'low',
    },
  },
  {
    id: 'account-issue',
    question: '',
    description: '',
    yesNext: null,
    noNext: null,
    result: {
      type: 'action',
      title: 'Account-Problem',
      description: 'Es scheint ein Problem mit deinem Google-Konto zu geben.',
      actions: [
        'Stelle sicher, dass du den richtigen Google-Account verwendest',
        'Prüfe ob dein Google-Konto gesperrt wurde',
        'Versuche die Passwort-Wiederherstellung',
        'Kontaktiere den Google Support',
      ],
      severity: 'medium',
    },
  },
];

export const SuspendierungsDiagnose: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);

  const step = diagnoseSteps.find(s => s.id === currentStep);

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (!step) return;
    const nextStep = answer === 'yes' ? step.yesNext : step.noNext;
    if (nextStep) {
      setHistory([...history, currentStep]);
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousStep = newHistory.pop();
      setHistory(newHistory);
      setCurrentStep(previousStep || 'start');
    }
  };

  const handleReset = () => {
    setCurrentStep('start');
    setHistory([]);
  };

  const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-green-500 bg-green-50';
    }
  };

  const getSeverityIcon = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'high':
        return <ShieldAlert className="h-8 w-8 text-red-600" />;
      case 'medium':
        return <AlertTriangle className="h-8 w-8 text-yellow-600" />;
      case 'low':
        return <ShieldCheck className="h-8 w-8 text-green-600" />;
    }
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <HelpCircle className="h-6 w-6 text-primary" />
          Suspendierungs-Diagnose Tool
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Beantworte die Fragen um herauszufinden, welche Art von Suspendierung vorliegt.
        </p>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {step?.result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`rounded-lg border-2 p-6 ${getSeverityColor(step.result.severity)}`}
            >
              <div className="flex items-start gap-4">
                {getSeverityIcon(step.result.severity)}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{step.result.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.result.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Empfohlene Schritte:</h4>
                    <ul className="space-y-2">
                      {step.result.actions.map((action, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button onClick={handleReset} variant="outline" className="mt-6 w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Diagnose neu starten
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>Schritt {history.length + 1}</span>
                <span>•</span>
                <span>{history.length + 1} von max. 4 Fragen</span>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{step?.question}</h3>
                <p className="text-muted-foreground">{step?.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => handleAnswer('yes')}
                  className="h-16 text-lg"
                  variant="default"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Ja
                </Button>
                <Button
                  onClick={() => handleAnswer('no')}
                  className="h-16 text-lg"
                  variant="outline"
                >
                  <XCircle className="h-5 w-5 mr-2" />
                  Nein
                </Button>
              </div>
              
              {history.length > 0 && (
                <Button onClick={handleBack} variant="ghost" className="w-full">
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Zurück zur vorherigen Frage
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default SuspendierungsDiagnose;
