import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, RefreshCw, Lightbulb } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  category: string;
  yesIssue: boolean; // true = "Ja" bedeutet Problem, false = "Nein" bedeutet Problem
  explanation: string;
  solution: string;
  severity: "critical" | "high" | "medium" | "low";
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "gmb-verified",
    question: "Ist dein Google Business Profil verifiziert?",
    category: "Google Business",
    yesIssue: false,
    explanation: "Ohne Verifizierung erscheint dein Unternehmen nicht im Local Pack und kannst keine Statistiken sehen.",
    solution: "Verifiziere dein Profil über Google Business. Du erhältst eine Postkarte mit Code oder kannst per Video verifizieren.",
    severity: "critical",
  },
  {
    id: "nap-consistent",
    question: "Sind Name, Adresse und Telefon überall identisch?",
    category: "NAP-Konsistenz",
    yesIssue: false,
    explanation: "Inkonsistente NAP-Daten verwirren Google und schwächen deine lokale Autorität.",
    solution: "Führe einen NAP-Audit durch und korrigiere alle Abweichungen auf Verzeichnissen, Website und Social Media.",
    severity: "high",
  },
  {
    id: "mobile-friendly",
    question: "Ist deine Website mobil-optimiert?",
    category: "Technik",
    yesIssue: false,
    explanation: "80% der lokalen Suchen erfolgen mobil. Ohne Mobile-Optimierung verlierst du die meisten Kunden.",
    solution: "Nutze den Mobile-Friendly Test von Google und implementiere ein responsives Design.",
    severity: "critical",
  },
  {
    id: "duplicate-listings",
    question: "Hast du mehrere Google Business Profile für die gleiche Adresse?",
    category: "Google Business",
    yesIssue: true,
    explanation: "Doppelte Einträge kannibalisieren sich gegenseitig und können zu Sperrung führen.",
    solution: "Lösche alle doppelten Profile und behalte nur eines. Führe ggf. Einträge zusammen.",
    severity: "high",
  },
  {
    id: "reviews-response",
    question: "Beantwortest du alle Google Bewertungen?",
    category: "Bewertungen",
    yesIssue: false,
    explanation: "Unbeantwortete Bewertungen signalisieren mangelndes Interesse an Kunden.",
    solution: "Antworte auf JEDE Bewertung - positiv wie negativ. Am besten innerhalb von 24 Stunden.",
    severity: "medium",
  },
  {
    id: "ssl",
    question: "Hat deine Website ein SSL-Zertifikat (HTTPS)?",
    category: "Technik",
    yesIssue: false,
    explanation: "Websites ohne HTTPS werden von Browsern als unsicher markiert und schlechter gerankt.",
    solution: "Installiere ein SSL-Zertifikat (oft kostenlos über Let's Encrypt) und leite HTTP auf HTTPS um.",
    severity: "critical",
  },
  {
    id: "local-keywords",
    question: "Verwendest du lokale Keywords auf deiner Website?",
    category: "Content",
    yesIssue: false,
    explanation: "Ohne lokale Keywords versteht Google nicht, für welche Region du relevant bist.",
    solution: "Integriere Stadt- und Stadtteil-Keywords natürlich in Title, H1, Content und Meta Description.",
    severity: "high",
  },
  {
    id: "wrong-category",
    question: "Hast du bei Google Business nur eine oder gar keine Kategorie gewählt?",
    category: "Google Business",
    yesIssue: true,
    explanation: "Fehlende oder falsche Kategorien reduzieren deine Sichtbarkeit für relevante Suchanfragen.",
    solution: "Wähle eine primäre Kategorie und bis zu 9 sekundäre Kategorien, die zu deinem Angebot passen.",
    severity: "high",
  },
  {
    id: "opening-hours",
    question: "Sind deine Öffnungszeiten bei Google aktuell?",
    category: "Google Business",
    yesIssue: false,
    explanation: "Falsche Öffnungszeiten führen zu negativen Bewertungen und Vertrauensverlust.",
    solution: "Aktualisiere deine Öffnungszeiten regelmäßig, besonders an Feiertagen.",
    severity: "medium",
  },
  {
    id: "page-speed",
    question: "Lädt deine Website in unter 3 Sekunden?",
    category: "Technik",
    yesIssue: false,
    explanation: "Langsame Websites haben höhere Absprungraten und werden schlechter gerankt.",
    solution: "Optimiere Bilder, nutze Caching, minimiere JavaScript und CSS.",
    severity: "medium",
  },
  {
    id: "keyword-stuffing",
    question: "Wiederholst du Keywords unnatürlich oft auf deiner Website?",
    category: "Content",
    yesIssue: true,
    explanation: "Keyword-Stuffing wird von Google erkannt und kann zu Ranking-Verlust führen.",
    solution: "Schreibe natürlich für Menschen, nicht für Suchmaschinen. Nutze Synonyme und verwandte Begriffe.",
    severity: "medium",
  },
  {
    id: "fake-reviews",
    question: "Hast du jemals Fake-Bewertungen gekauft oder selbst geschrieben?",
    category: "Bewertungen",
    yesIssue: true,
    explanation: "Google erkennt gefälschte Bewertungen und kann dein Profil sperren oder entfernen.",
    solution: "Lösche alle gefälschten Bewertungen und sammle nur echte Bewertungen von echten Kunden.",
    severity: "critical",
  },
];

const FehlerDiagnoseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const question = quizQuestions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: answer }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getIssues = () => {
    return quizQuestions.filter(q => {
      const answer = answers[q.id];
      if (answer === undefined) return false;
      return q.yesIssue ? answer : !answer;
    });
  };

  const getScore = () => {
    const issues = getIssues();
    const criticalIssues = issues.filter(i => i.severity === "critical").length;
    const highIssues = issues.filter(i => i.severity === "high").length;
    
    let score = 100;
    score -= criticalIssues * 25;
    score -= highIssues * 15;
    score -= issues.filter(i => i.severity === "medium").length * 8;
    score -= issues.filter(i => i.severity === "low").length * 3;
    
    return Math.max(0, score);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getSeverityColor = (severity: QuizQuestion["severity"]) => {
    switch (severity) {
      case "critical": return "bg-red-500/10 text-red-600 border-red-500/20";
      case "high": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "medium": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "low": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    }
  };

  const getSeverityLabel = (severity: QuizQuestion["severity"]) => {
    switch (severity) {
      case "critical": return "Kritisch";
      case "high": return "Hoch";
      case "medium": return "Mittel";
      case "low": return "Niedrig";
    }
  };

  if (showResults) {
    const issues = getIssues();
    const score = getScore();

    return (
      <Card className="my-8 border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Deine Local SEO Diagnose
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Score */}
          <div className="text-center p-6 rounded-lg bg-muted">
            <div className={`text-5xl font-bold ${
              score >= 80 ? "text-green-500" :
              score >= 60 ? "text-yellow-500" :
              score >= 40 ? "text-orange-500" :
              "text-red-500"
            }`}>
              {score}/100
            </div>
            <p className="mt-2 text-muted-foreground">
              {score >= 80 ? "Sehr gut! Nur kleine Optimierungen nötig." :
               score >= 60 ? "Gut, aber es gibt Verbesserungspotenzial." :
               score >= 40 ? "Achtung! Mehrere wichtige Probleme gefunden." :
               "Dringender Handlungsbedarf!"}
            </p>
            <Progress value={score} className="mt-4 h-3" />
          </div>

          {/* Issues Found */}
          {issues.length > 0 ? (
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                {issues.length} Problem{issues.length > 1 ? "e" : ""} gefunden
              </h4>

              {issues
                .sort((a, b) => {
                  const order = { critical: 0, high: 1, medium: 2, low: 3 };
                  return order[a.severity] - order[b.severity];
                })
                .map((issue, index) => (
                  <div key={issue.id} className="p-4 rounded-lg border bg-card">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{issue.question}</span>
                          <Badge className={getSeverityColor(issue.severity)} variant="outline">
                            {getSeverityLabel(issue.severity)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{issue.explanation}</p>
                        <div className="p-3 bg-green-500/5 rounded border border-green-500/20">
                          <p className="text-sm">
                            <strong className="text-green-600">Lösung:</strong> {issue.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center p-8 bg-green-500/5 rounded-lg border border-green-500/20">
              <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <h4 className="font-semibold text-lg">Ausgezeichnet!</h4>
              <p className="text-muted-foreground">
                Keine kritischen Local SEO Fehler gefunden. Weiter so!
              </p>
            </div>
          )}

          <Button onClick={reset} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Quiz wiederholen
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-primary" />
          Local SEO Fehler-Diagnose Quiz
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Beantworte 12 Fragen und finde heraus, welche Local SEO Fehler dich Kunden kosten.
        </p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Frage {currentQuestion + 1} von {quizQuestions.length}</span>
            <Badge variant="outline">{question.category}</Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="p-6 bg-muted rounded-lg text-center">
          <h3 className="text-xl font-semibold">{question.question}</h3>
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleAnswer(true)}
            className="h-16 text-lg hover:bg-green-500/10 hover:border-green-500"
          >
            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
            Ja
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleAnswer(false)}
            className="h-16 text-lg hover:bg-red-500/10 hover:border-red-500"
          >
            <XCircle className="w-5 h-5 mr-2 text-red-500" />
            Nein
          </Button>
        </div>

        {/* Skip */}
        <div className="text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (currentQuestion < quizQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                setShowResults(true);
              }
            }}
          >
            Überspringen
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FehlerDiagnoseQuiz;
