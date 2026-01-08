import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Copy, Check, RefreshCw, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type ComplaintType = "service" | "product" | "waiting" | "staff" | "price" | "cleanliness" | "communication";
type SeverityLevel = "light" | "medium" | "severe" | "aggressive";
type IndustryType = "restaurant" | "retail" | "service" | "craft" | "medical" | "hotel" | "other";

interface GeneratorState {
  complaintType: ComplaintType | null;
  severity: SeverityLevel | null;
  industry: IndustryType | null;
  customerKnown: boolean;
  problemSolved: boolean;
  compensationOffered: boolean;
  companyName: string;
}

const complaintOptions: { value: ComplaintType; label: string; icon: string }[] = [
  { value: "service", label: "Service / Dienstleistung", icon: "🛎️" },
  { value: "product", label: "Produkt / Qualität", icon: "📦" },
  { value: "waiting", label: "Wartezeit / Verzögerung", icon: "⏰" },
  { value: "staff", label: "Mitarbeiter / Personal", icon: "👥" },
  { value: "price", label: "Preis / Kosten", icon: "💰" },
  { value: "cleanliness", label: "Sauberkeit / Ambiente", icon: "✨" },
  { value: "communication", label: "Kommunikation", icon: "💬" },
];

const severityOptions: { value: SeverityLevel; label: string; stars: string; color: string }[] = [
  { value: "light", label: "Leichte Kritik", stars: "3-4 ⭐", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
  { value: "medium", label: "Mittlere Kritik", stars: "2-3 ⭐", color: "bg-orange-100 border-orange-300 text-orange-800" },
  { value: "severe", label: "Schwere Kritik", stars: "1-2 ⭐", color: "bg-red-100 border-red-300 text-red-800" },
  { value: "aggressive", label: "Aggressive Kritik", stars: "1 ⭐ + unfair", color: "bg-red-200 border-red-400 text-red-900" },
];

const industryOptions: { value: IndustryType; label: string; icon: string }[] = [
  { value: "restaurant", label: "Restaurant / Gastronomie", icon: "🍽️" },
  { value: "retail", label: "Einzelhandel", icon: "🛒" },
  { value: "service", label: "Dienstleistung", icon: "💼" },
  { value: "craft", label: "Handwerk", icon: "🔧" },
  { value: "medical", label: "Arztpraxis", icon: "🏥" },
  { value: "hotel", label: "Hotel / Unterkunft", icon: "🏨" },
  { value: "other", label: "Anderes", icon: "📋" },
];

const responseTemplates: Record<string, Record<string, Record<string, string[]>>> = {
  service: {
    light: {
      restaurant: [
        "Vielen Dank für Ihr Feedback, {name}! Es tut uns leid zu hören, dass Ihr Besuch nicht ganz Ihren Erwartungen entsprochen hat. Wir nehmen Ihre Anmerkungen zum Service sehr ernst und werden diese mit unserem Team besprechen. Wir würden uns freuen, Sie bald wieder bei uns begrüssen zu dürfen, um Ihnen ein besseres Erlebnis zu bieten.",
        "Herzlichen Dank für Ihre ehrliche Rückmeldung! Wir bedauern, dass Sie mit dem Service nicht vollständig zufrieden waren. Ihr Feedback hilft uns, besser zu werden. Gerne laden wir Sie zu einem erneuten Besuch ein – kontaktieren Sie uns unter [E-Mail/Telefon] für eine persönliche Reservierung.",
      ],
      default: [
        "Vielen Dank für Ihre Rückmeldung! Es tut uns leid, dass Sie nicht vollständig zufrieden waren. Wir nehmen Ihr Feedback sehr ernst und arbeiten kontinuierlich an der Verbesserung unseres Services. Bitte kontaktieren Sie uns direkt unter [Kontakt], damit wir die Situation klären können.",
      ],
    },
    medium: {
      default: [
        "Wir bedanken uns für Ihr offenes Feedback. Es tut uns aufrichtig leid, dass Ihre Erfahrung mit unserem Service nicht Ihren Erwartungen entsprochen hat. Wir verstehen Ihre Frustration und möchten die Gelegenheit nutzen, dies wiedergutzumachen. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten gemeinsam eine Lösung finden.",
      ],
    },
    severe: {
      default: [
        "Vielen Dank, dass Sie sich die Zeit genommen haben, uns Ihre Erfahrung mitzuteilen. Wir entschuldigen uns aufrichtig für die Unannehmlichkeiten, die Sie erlebt haben. Das entspricht nicht unserem Qualitätsanspruch. Wir haben Ihr Feedback intern besprochen und Massnahmen eingeleitet. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten dies persönlich klären und wiedergutmachen.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank für Ihr Feedback. Wir bedauern sehr, dass Sie so negative Erfahrungen gemacht haben. Ihre Zufriedenheit ist uns wichtig, und wir nehmen Ihre Kritik ernst. Um die Situation besser zu verstehen und eine Lösung zu finden, bitten wir Sie, uns direkt zu kontaktieren: [Kontakt]. Wir sind überzeugt, dass wir gemeinsam eine zufriedenstellende Lösung finden können.",
      ],
    },
  },
  product: {
    light: {
      default: [
        "Vielen Dank für Ihre Rückmeldung zur Produktqualität! Es tut uns leid, dass das Produkt nicht vollständig Ihren Erwartungen entsprochen hat. Wir legen grossen Wert auf Qualität und werden Ihr Feedback an unsere Qualitätssicherung weiterleiten. Kontaktieren Sie uns gerne unter [Kontakt] für einen Umtausch oder eine alternative Lösung.",
      ],
    },
    medium: {
      default: [
        "Wir bedauern sehr, dass Sie mit der Produktqualität unzufrieden sind. Ihr Feedback ist uns wichtig, und wir möchten die Situation klären. Bitte kontaktieren Sie uns unter [Kontakt] mit Ihrer Bestellnummer – wir finden gemeinsam eine Lösung, sei es Ersatz, Rückerstattung oder eine andere Option.",
      ],
    },
    severe: {
      default: [
        "Vielen Dank, dass Sie uns auf dieses Problem aufmerksam machen. Wir entschuldigen uns aufrichtig für die mangelhafte Produktqualität. Das entspricht nicht unserem Standard. Bitte kontaktieren Sie uns umgehend unter [Kontakt] – wir werden das Problem schnellstmöglich lösen und Sie natürlich entschädigen.",
      ],
    },
    aggressive: {
      default: [
        "Wir verstehen Ihre Frustration und entschuldigen uns für die Unannehmlichkeiten. Die beschriebene Produktqualität entspricht nicht unseren Standards, und wir nehmen Ihre Kritik sehr ernst. Um Ihnen schnellstmöglich zu helfen, bitten wir Sie, uns direkt zu kontaktieren: [Kontakt]. Wir werden die Angelegenheit prioritär behandeln.",
      ],
    },
  },
  waiting: {
    light: {
      default: [
        "Vielen Dank für Ihre Geduld und Ihr Feedback! Es tut uns leid, dass die Wartezeit länger war als gewünscht. Wir arbeiten kontinuierlich daran, unsere Abläufe zu optimieren. Wir hoffen, Sie bald wieder begrüssen zu dürfen und Ihnen einen schnelleren Service bieten zu können.",
      ],
    },
    medium: {
      default: [
        "Wir bedauern sehr, dass Sie so lange warten mussten. Das entspricht nicht unserem Serviceanspruch. Ihr Feedback nehmen wir zum Anlass, unsere Prozesse zu überprüfen. Wir würden uns freuen, Ihnen bei Ihrem nächsten Besuch ein besseres Erlebnis bieten zu können.",
      ],
    },
    severe: {
      default: [
        "Wir entschuldigen uns aufrichtig für die unzumutbare Wartezeit. Das ist inakzeptabel und entspricht nicht unseren Standards. Wir haben bereits Massnahmen ergriffen, um solche Situationen künftig zu vermeiden. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten Ihnen für die Unannehmlichkeiten eine Wiedergutmachung anbieten.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank für Ihre Rückmeldung. Wir verstehen Ihre Frustration über die Wartezeit vollkommen. Eine solche Verzögerung ist nicht akzeptabel, und wir entschuldigen uns dafür. Um die Situation zu klären und eine angemessene Entschädigung anzubieten, bitten wir Sie, uns unter [Kontakt] zu kontaktieren.",
      ],
    },
  },
  staff: {
    light: {
      default: [
        "Vielen Dank für Ihr Feedback zu unserem Team. Es tut uns leid, dass die Interaktion nicht Ihren Erwartungen entsprach. Wir legen grossen Wert auf freundlichen Service und werden Ihre Rückmeldung in unserem nächsten Teammeeting besprechen. Wir hoffen, Sie bei Ihrem nächsten Besuch positiv überraschen zu können.",
      ],
    },
    medium: {
      default: [
        "Wir bedauern sehr, dass Sie mit dem Verhalten unserer Mitarbeitenden unzufrieden waren. Das entspricht nicht unseren Werten. Wir nehmen Ihr Feedback sehr ernst und werden intern entsprechende Massnahmen ergreifen. Vielen Dank, dass Sie uns die Möglichkeit geben, uns zu verbessern.",
      ],
    },
    severe: {
      default: [
        "Wir entschuldigen uns aufrichtig für das Verhalten, das Sie erlebt haben. So sollte kein Kunde behandelt werden. Wir haben Ihr Feedback mit der Geschäftsleitung besprochen und werden entsprechende Konsequenzen ziehen. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten dies persönlich mit Ihnen klären.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank, dass Sie sich die Zeit genommen haben, uns zu schreiben. Das von Ihnen beschriebene Verhalten ist inakzeptabel und entspricht in keiner Weise unseren Unternehmenswerten. Wir nehmen solche Vorfälle sehr ernst und haben bereits Massnahmen eingeleitet. Bitte kontaktieren Sie uns unter [Kontakt] für eine persönliche Klärung.",
      ],
    },
  },
  price: {
    light: {
      default: [
        "Vielen Dank für Ihr Feedback zur Preisgestaltung! Wir verstehen, dass Preis-Leistung wichtig ist. Unsere Preise spiegeln die Qualität unserer Produkte/Dienstleistungen und faire Löhne wider. Gerne beraten wir Sie zu unseren verschiedenen Optionen – kontaktieren Sie uns unter [Kontakt].",
      ],
    },
    medium: {
      default: [
        "Wir bedanken uns für Ihre ehrliche Rückmeldung zum Preis. Wir verstehen Ihre Bedenken. Unser Preis basiert auf [Qualität/Service/fairen Löhnen]. Gerne erläutern wir Ihnen unsere Preisstruktur persönlich und finden vielleicht eine passende Alternative. Kontaktieren Sie uns unter [Kontakt].",
      ],
    },
    severe: {
      default: [
        "Vielen Dank für Ihr Feedback. Es tut uns leid, dass Sie den Preis als nicht angemessen empfunden haben. Wenn es Missverständnisse bezüglich der enthaltenen Leistungen gab, klären wir diese gerne auf. Bitte kontaktieren Sie uns unter [Kontakt], um die Situation zu besprechen.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank für Ihre Rückmeldung. Wir bedauern, dass Sie mit dem Preis-Leistungs-Verhältnis unzufrieden sind. Unsere Preise sind transparent und basieren auf [Qualitätsstandards]. Sollte es zu Missverständnissen gekommen sein, klären wir diese gerne persönlich. Kontaktieren Sie uns unter [Kontakt].",
      ],
    },
  },
  cleanliness: {
    light: {
      default: [
        "Vielen Dank für Ihr Feedback! Es tut uns leid, dass die Sauberkeit nicht Ihren Erwartungen entsprach. Wir legen grossen Wert auf Hygiene und werden Ihren Hinweis sofort mit unserem Reinigungsteam besprechen. Vielen Dank, dass Sie uns helfen, besser zu werden.",
      ],
    },
    medium: {
      default: [
        "Wir bedauern sehr, dass die Sauberkeit nicht unserem gewohnten Standard entsprach. Das ist für uns nicht akzeptabel. Wir haben sofortige Massnahmen ergriffen und unsere Reinigungsprozesse überprüft. Vielen Dank für Ihren wichtigen Hinweis.",
      ],
    },
    severe: {
      default: [
        "Wir entschuldigen uns aufrichtig für die unzureichende Sauberkeit. Das entspricht absolut nicht unserem Anspruch. Wir haben umgehend gehandelt und unsere Hygienemassnahmen verstärkt. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten Ihnen eine Wiedergutmachung anbieten.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank für Ihre Rückmeldung. Die von Ihnen beschriebenen Zustände sind inakzeptabel und entsprechen nicht unseren Standards. Wir haben sofort Massnahmen ergriffen. Bitte kontaktieren Sie uns unter [Kontakt], damit wir die Situation klären und Sie angemessen entschädigen können.",
      ],
    },
  },
  communication: {
    light: {
      default: [
        "Vielen Dank für Ihr Feedback zur Kommunikation! Es tut uns leid, wenn Informationen unklar waren. Wir arbeiten daran, unsere Kommunikation zu verbessern. Bei Fragen stehen wir Ihnen gerne unter [Kontakt] zur Verfügung.",
      ],
    },
    medium: {
      default: [
        "Wir bedauern, dass die Kommunikation nicht Ihren Erwartungen entsprach. Klare Information ist uns wichtig, und wir werden Ihre Rückmeldung zum Anlass nehmen, unsere Prozesse zu verbessern. Kontaktieren Sie uns gerne direkt unter [Kontakt].",
      ],
    },
    severe: {
      default: [
        "Wir entschuldigen uns aufrichtig für die mangelnde Kommunikation. Das hätte nicht passieren dürfen. Wir haben Ihr Feedback intern besprochen und werden unsere Kommunikationsprozesse überarbeiten. Bitte kontaktieren Sie uns unter [Kontakt] – wir möchten die Situation klären.",
      ],
    },
    aggressive: {
      default: [
        "Vielen Dank für Ihre Rückmeldung. Wir verstehen Ihre Frustration über die Kommunikationsprobleme. Das entspricht nicht unserem Standard. Um Missverständnisse auszuräumen und eine Lösung zu finden, bitten wir Sie, uns direkt zu kontaktieren: [Kontakt].",
      ],
    },
  },
};

const getResponse = (state: GeneratorState): string => {
  if (!state.complaintType || !state.severity || !state.industry) return "";
  
  const templates = responseTemplates[state.complaintType]?.[state.severity];
  const industryTemplates = templates?.[state.industry] || templates?.["default"] || [];
  
  if (industryTemplates.length === 0) return "";
  
  let response = industryTemplates[Math.floor(Math.random() * industryTemplates.length)];
  
  // Replace company name placeholder
  if (state.companyName) {
    response = response.replace(/Wir /g, `${state.companyName} `);
  }
  
  // Add solved/compensation additions
  if (state.problemSolved) {
    response += "\n\nWir freuen uns, dass wir das Problem bereits lösen konnten.";
  }
  
  if (state.compensationOffered) {
    response += " Wie besprochen haben wir Ihnen eine Entschädigung angeboten.";
  }
  
  if (state.customerKnown && !state.problemSolved) {
    response += "\n\nWir haben Ihre Kontaktdaten in unserem System gefunden und werden uns in Kürze persönlich bei Ihnen melden.";
  }
  
  return response;
};

const ReviewResponseGenerator = () => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<GeneratorState>({
    complaintType: null,
    severity: null,
    industry: null,
    customerKnown: false,
    problemSolved: false,
    compensationOffered: false,
    companyName: "",
  });
  const [copied, setCopied] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Generate response
      const response = getResponse(state);
      setGeneratedResponse(response);
      setStep(5);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setState({
      complaintType: null,
      severity: null,
      industry: null,
      customerKnown: false,
      problemSolved: false,
      compensationOffered: false,
      companyName: "",
    });
    setGeneratedResponse("");
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    const response = getResponse(state);
    setGeneratedResponse(response);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return state.complaintType !== null;
      case 2: return state.severity !== null;
      case 3: return state.industry !== null;
      case 4: return true;
      default: return false;
    }
  };

  const progress = (step / 5) * 100;

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">✍️</span>
          Antwort-Generator für negative Bewertungen
        </CardTitle>
        <Progress value={progress} className="mt-4" />
        <p className="text-sm text-muted-foreground mt-2">
          Schritt {Math.min(step, 4)} von 4
        </p>
      </CardHeader>
      <CardContent className="p-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Worum geht es in der Beschwerde?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {complaintOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, complaintType: option.value })}
                  className={cn(
                    "p-4 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                    state.complaintType === option.value
                      ? "border-primary bg-primary/10"
                      : "border-muted"
                  )}
                >
                  <span className="text-2xl mr-2">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Wie schwer ist die Kritik?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {severityOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, severity: option.value })}
                  className={cn(
                    "p-4 rounded-lg border-2 text-left transition-all",
                    state.severity === option.value
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-muted hover:border-primary/50"
                  )}
                >
                  <div className={cn("inline-block px-2 py-1 rounded text-sm font-medium mb-2", option.color)}>
                    {option.stars}
                  </div>
                  <p className="font-medium">{option.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">In welcher Branche sind Sie?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, industry: option.value })}
                  className={cn(
                    "p-4 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                    state.industry === option.value
                      ? "border-primary bg-primary/10"
                      : "border-muted"
                  )}
                >
                  <span className="text-2xl mr-2">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Zusätzliche Optionen</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="customerKnown"
                  checked={state.customerKnown}
                  onCheckedChange={(checked) => 
                    setState({ ...state, customerKnown: checked as boolean })
                  }
                />
                <Label htmlFor="customerKnown" className="cursor-pointer">
                  Der Kunde ist mir bekannt
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="problemSolved"
                  checked={state.problemSolved}
                  onCheckedChange={(checked) => 
                    setState({ ...state, problemSolved: checked as boolean })
                  }
                />
                <Label htmlFor="problemSolved" className="cursor-pointer">
                  Das Problem wurde bereits gelöst
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="compensationOffered"
                  checked={state.compensationOffered}
                  onCheckedChange={(checked) => 
                    setState({ ...state, compensationOffered: checked as boolean })
                  }
                />
                <Label htmlFor="compensationOffered" className="cursor-pointer">
                  Eine Entschädigung wurde angeboten
                </Label>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="companyName">Firmenname (optional)</Label>
                <Input
                  id="companyName"
                  placeholder="z.B. Restaurant Zum Goldenen Löwen"
                  value={state.companyName}
                  onChange={(e) => setState({ ...state, companyName: e.target.value })}
                />
                <p className="text-sm text-muted-foreground">
                  Wird in der Antwort verwendet, falls angegeben.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-green-700 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Ihre Antwort ist fertig!
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleRegenerate}>
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Variante
                </Button>
                <Button size="sm" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Kopiert!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Kopieren
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 border">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {generatedResponse}
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>💡 Tipp:</strong> Personalisieren Sie die Antwort! Ersetzen Sie [Kontakt] 
                mit Ihrer E-Mail oder Telefonnummer und passen Sie den Text an die spezifische 
                Situation an.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6 pt-4 border-t">
          {step > 1 && step < 5 ? (
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Zurück
            </Button>
          ) : step === 5 ? (
            <Button variant="outline" onClick={handleReset}>
              Neu starten
            </Button>
          ) : (
            <div />
          )}

          {step < 5 && (
            <Button onClick={handleNext} disabled={!canProceed()}>
              {step === 4 ? "Antwort generieren" : "Weiter"}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewResponseGenerator;
