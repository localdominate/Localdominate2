import { useState } from "react";
import { Copy, Check, ChevronDown, Star, AlertTriangle, ThumbsUp, MessageSquare, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface ReviewTemplate {
  id: string;
  scenario: string;
  stars: number;
  category: "positive" | "negative" | "neutral" | "fake" | "escalation";
  industry?: string;
  template: string;
  notes?: string;
}

interface ReviewResponseTemplatesProps {
  /** Filter to specific categories */
  categories?: ReviewTemplate["category"][];
  /** Title override */
  title?: string;
  /** Description override */
  description?: string;
  /** Show only specific template IDs */
  templateIds?: string[];
}

const categoryMeta: Record<ReviewTemplate["category"], { label: string; icon: React.ReactNode; color: string }> = {
  positive: { label: "Positive Bewertung", icon: <ThumbsUp className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  negative: { label: "Negative Bewertung", icon: <AlertTriangle className="w-4 h-4" />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  neutral: { label: "Neutrale Bewertung", icon: <MessageSquare className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  fake: { label: "Fake / Richtlinienwidrig", icon: <Shield className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  escalation: { label: "Eskalation", icon: <AlertTriangle className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
};

/* ── All templates ── */
export const allReviewTemplates: ReviewTemplate[] = [
  // Positive
  {
    id: "pos-5star-general",
    scenario: "5-Sterne-Bewertung mit Lob",
    stars: 5,
    category: "positive",
    template: `Vielen herzlichen Dank fuer Ihre wunderbare Bewertung, [Kundenname]! Es freut uns sehr, dass Sie mit [konkreter Aspekt] zufrieden waren. Ihr Feedback motiviert unser gesamtes Team. Wir freuen uns auf Ihren naechsten Besuch bei [Firmenname] in [Stadt]!`,
    notes: "Keywords natuerlich einbauen: Branche + Stadt. Konkret auf genanntes Lob eingehen.",
  },
  {
    id: "pos-returning",
    scenario: "Stammkunde lobt erneut",
    stars: 5,
    category: "positive",
    template: `Liebe/r [Kundenname], es ist immer wieder eine Freude, Sie bei uns in [Stadt] begruessen zu duerfen! Dass Sie als treuer Kunde so zufrieden sind, bedeutet uns sehr viel. Ihr Feedback zu [konkreter Aspekt] teilen wir gerne mit unserem Team. Bis zum naechsten Mal!`,
  },
  {
    id: "pos-4star",
    scenario: "4-Sterne-Bewertung (fast perfekt)",
    stars: 4,
    category: "positive",
    template: `Vielen Dank fuer Ihre tolle Bewertung, [Kundenname]! Wir freuen uns, dass Ihnen [konkreter Aspekt] bei [Firmenname] gefallen hat. Falls Sie uns verraten moechten, was wir noch besser machen koennen, sind wir ganz Ohr - wir streben immer nach 5 Sternen! Herzliche Gruesse aus [Stadt].`,
    notes: "Subtil nach Verbesserungsvorschlaegen fragen, ohne fordernd zu wirken.",
  },
  // Negative
  {
    id: "neg-service",
    scenario: "Unzufrieden mit Service/Wartezeit",
    stars: 2,
    category: "negative",
    template: `Sehr geehrte/r [Kundenname], vielen Dank, dass Sie sich die Zeit genommen haben, uns Ihr Feedback mitzuteilen. Es tut uns aufrichtig leid, dass Ihr Besuch bei [Firmenname] nicht Ihren Erwartungen entsprochen hat. [Konkretes Problem] entspricht nicht unserem Anspruch. Wir haben Ihr Feedback intern besprochen und bereits [konkrete Massnahme] eingeleitet. Wir wuerden uns freuen, Ihnen bei einem erneuten Besuch zu zeigen, dass dies nicht unser Standard ist. Kontaktieren Sie uns gerne direkt unter [Telefon/E-Mail].`,
    notes: "HEART-Methode: Hear, Empathize, Apologize, Resolve, Thank. Problem anerkennen, konkrete Loesung nennen.",
  },
  {
    id: "neg-product",
    scenario: "Produktqualitaet bemaengelt",
    stars: 1,
    category: "negative",
    template: `Sehr geehrte/r [Kundenname], wir bedauern sehr, dass Sie mit [Produkt/Service] nicht zufrieden waren. Qualitaet hat bei [Firmenname] hoechste Prioritaet, und Ihre Erfahrung entspricht nicht dem, was wir unseren Kunden in [Stadt] bieten moechten. Wir wuerden die Situation gerne persoenlich klaeren und eine Loesung finden. Bitte kontaktieren Sie uns unter [Telefon] oder [E-Mail], damit wir das direkt besprechen koennen. Vielen Dank fuer Ihr ehrliches Feedback.`,
  },
  {
    id: "neg-staff",
    scenario: "Kritik am Personal/Mitarbeiter",
    stars: 1,
    category: "negative",
    template: `Sehr geehrte/r [Kundenname], vielen Dank fuer Ihr offenes Feedback. Es tut uns sehr leid, dass Sie eine unangenehme Erfahrung mit einem unserer Mitarbeiter gemacht haben. Freundlichkeit und Professionalitaet sind Grundwerte bei [Firmenname]. Wir nehmen Ihre Rueckmeldung sehr ernst und werden dies intern ansprechen. Bitte kontaktieren Sie mich persoenlich unter [Kontakt], damit ich mich um Ihr Anliegen kuemmern kann. Mit freundlichen Gruessen, [Name/Position]`,
    notes: "Persoenlichen Kontakt anbieten. Keine Schuldzuweisungen an Mitarbeiter in der oeffentlichen Antwort.",
  },
  {
    id: "neg-price",
    scenario: "Preis als zu hoch empfunden",
    stars: 2,
    category: "negative",
    template: `Vielen Dank fuer Ihr Feedback, [Kundenname]. Wir verstehen, dass der Preis ein wichtiger Faktor ist. Bei [Firmenname] legen wir grossen Wert auf [Qualitaetsmerkmal, z.B. hochwertige Materialien, individuelle Beratung, zertifizierte Fachkraefte], was sich im Preis widerspiegelt. Gerne beraten wir Sie persoenlich zu unseren verschiedenen Optionen und finden eine passende Loesung. Kontaktieren Sie uns unter [Telefon].`,
    notes: "Wert kommunizieren, nicht den Preis verteidigen. Alternative Optionen anbieten.",
  },
  // Neutral
  {
    id: "neutral-3star",
    scenario: "3-Sterne ohne klare Kritik",
    stars: 3,
    category: "neutral",
    template: `Vielen Dank fuer Ihre Bewertung, [Kundenname]! Wir freuen uns, dass einiges gut war, sehen aber auch, dass wir noch Luft nach oben haben. Ihr Feedback hilft uns, unseren Service in [Stadt] weiter zu verbessern. Falls Sie uns verraten moechten, was wir konkret besser machen koennen, kontaktieren Sie uns gerne unter [Kontakt]. Wir wuerden uns freuen, Sie beim naechsten Mal voll zu ueberzeugen!`,
  },
  {
    id: "neutral-no-text",
    scenario: "Bewertung ohne Text (nur Sterne)",
    stars: 3,
    category: "neutral",
    template: `Vielen Dank fuer Ihre Bewertung, [Kundenname]! Wir wuerden gerne erfahren, wie wir Ihren Besuch bei [Firmenname] noch besser machen koennen. Ihr Feedback ist uns wichtig - kontaktieren Sie uns gerne direkt unter [Telefon/E-Mail]. Wir freuen uns auf Ihre Rueckmeldung!`,
    notes: "Kurz halten, da der Kunde selbst wenig geschrieben hat. Zum Dialog einladen.",
  },
  // Fake / Richtlinienwidrig
  {
    id: "fake-never-customer",
    scenario: "Bewertung von Nicht-Kunde",
    stars: 1,
    category: "fake",
    template: `Vielen Dank fuer Ihre Rueckmeldung. Nach sorgfaeltiger Pruefung unserer Unterlagen koennen wir leider keinen Besuch oder Auftrag zuordnen, der zu dieser Beschreibung passt. Wir nehmen jedes Feedback ernst und moechten die Situation gerne klaeren. Bitte kontaktieren Sie uns direkt unter [Telefon/E-Mail] mit Ihren Auftragsdaten, damit wir dem nachgehen koennen. Falls ein Missverstaendnis vorliegt, sind wir gerne zur Klaerung bereit.`,
    notes: "Sachlich bleiben, nicht direkt 'Fake' nennen. Beweislast subtil umkehren. Parallel bei Google melden.",
  },
  {
    id: "fake-competitor",
    scenario: "Verdacht auf Konkurrenz-Bewertung",
    stars: 1,
    category: "fake",
    template: `Vielen Dank fuer Ihr Feedback. Leider koennen wir die beschriebene Situation anhand unserer Aufzeichnungen nicht nachvollziehen. Bei [Firmenname] in [Stadt] legen wir groessten Wert auf [relevanter Aspekt] und haben dazu klare Qualitaetsstandards. Wir laden Sie herzlich ein, uns direkt zu kontaktieren, damit wir Ihr Anliegen persoenlich klaeren koennen: [Kontakt].`,
    notes: "Nie oeffentlich einen Konkurrenten beschuldigen. Bewertung parallel bei Google als Fake melden.",
  },
  {
    id: "fake-insult",
    scenario: "Beleidigende/diffamierende Bewertung",
    stars: 1,
    category: "fake",
    template: `Wir bedauern, dass Sie eine negative Erfahrung hatten. Allerdings enthaelt diese Bewertung Aussagen, die nicht den Tatsachen entsprechen. [Firmenname] steht fuer [Werte] und wir laden Sie ein, das Gespraech auf sachlicher Ebene fortzusetzen. Kontaktieren Sie uns gerne unter [Kontakt]. Wir haben diese Bewertung zur Pruefung an Google gemeldet.`,
    notes: "Bei Beleidigungen: Sofort bei Google melden + Screenshot sichern. Bei Verleumdung: Anwaltliche Beratung erwaegen.",
  },
  // Eskalation
  {
    id: "esc-after-fix",
    scenario: "Nach Problemloesung um Update bitten",
    stars: 1,
    category: "escalation",
    template: `Liebe/r [Kundenname], vielen Dank nochmals fuer Ihr Feedback und Ihre Geduld. Wir hoffen, dass wir mit [konkrete Loesung] Ihr Anliegen zu Ihrer Zufriedenheit klaeren konnten. Falls Sie mit unserer Loesung zufrieden sind, wuerden wir uns freuen, wenn Sie Ihre Bewertung aktualisieren moechten. So oder so - Sie sind bei [Firmenname] in [Stadt] jederzeit herzlich willkommen!`,
    notes: "Nur nach tatsaechlicher Problemloesung senden. Nie um Loeschung bitten, nur um 'Aktualisierung'.",
  },
  {
    id: "esc-google-support",
    scenario: "Google Support kontaktieren (intern)",
    stars: 0,
    category: "escalation",
    template: `[Interne Vorlage - Nicht oeffentlich posten]\n\nBetreff: Richtlinienwidrige Bewertung melden - [Firmenname]\n\nSehr geehrtes Google Support Team,\n\nwir moechten folgende Bewertung zur Pruefung melden:\n- Bewertung von: [Reviewer-Name]\n- Datum: [Datum]\n- Verstoss gegen: [Spam / Fake / Beleidigung / Interessenkonflikt]\n\nBegruendung: [Konkrete Begruendung mit Beweisen]\n\nWir bitten um Pruefung und ggf. Entfernung gemaess Googles Bewertungsrichtlinien.\n\nMit freundlichen Gruessen,\n[Name, Position, Firmenname]`,
    notes: "Diese Vorlage ist fuer den internen Gebrauch bei Google Support Eskalation.",
  },
];

const StarDisplay = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={cn("w-3.5 h-3.5", i <= count ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30")}
      />
    ))}
  </div>
);

const ReviewResponseTemplates: React.FC<ReviewResponseTemplatesProps> = ({
  categories,
  title = "Bewertungs-Antwort Vorlagen zum Kopieren",
  description = "Professionelle Antwortvorlagen fuer jedes Szenario. Passe [Platzhalter] an und kopiere die Vorlage direkt.",
  templateIds,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<ReviewTemplate["category"] | "all">("all");

  let templates = templateIds
    ? allReviewTemplates.filter((t) => templateIds.includes(t.id))
    : categories
    ? allReviewTemplates.filter((t) => categories.includes(t.category))
    : allReviewTemplates;

  if (activeCategory !== "all") {
    templates = templates.filter((t) => t.category === activeCategory);
  }

  const availableCategories = (categories || ["positive", "negative", "neutral", "fake", "escalation"] as ReviewTemplate["category"][]);

  const copyTemplate = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="my-10 not-prose" data-ai-summary="review-response-templates">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-3 py-1.5 text-xs rounded-full font-medium border transition-all",
            activeCategory === "all"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:border-primary/30"
          )}
        >
          Alle ({allReviewTemplates.filter((t) => !categories || categories.includes(t.category)).length})
        </button>
        {availableCategories.map((cat) => {
          const meta = categoryMeta[cat];
          const count = allReviewTemplates.filter((t) => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 text-xs rounded-full font-medium border transition-all flex items-center gap-1.5",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/30"
              )}
            >
              {meta.icon}
              {meta.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Template cards */}
      <div className="space-y-3">
        {templates.map((tmpl) => {
          const meta = categoryMeta[tmpl.category];
          const isExpanded = expandedId === tmpl.id;
          const isCopied = copiedId === tmpl.id;

          return (
            <Card key={tmpl.id} className="overflow-hidden border-border hover:border-primary/20 transition-all">
              <button
                onClick={() => setExpandedId(isExpanded ? null : tmpl.id)}
                className="w-full p-4 flex items-center gap-3 text-left"
              >
                <div className="flex-shrink-0">
                  {tmpl.stars > 0 ? <StarDisplay count={tmpl.stars} /> : <Shield className="w-4 h-4 text-muted-foreground" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-foreground">{tmpl.scenario}</div>
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0", meta.color)}>
                  {meta.label}
                </span>
                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", isExpanded && "rotate-180")} />
              </button>

              {isExpanded && (
                <CardContent className="pt-0 px-4 pb-4">
                  <div className="bg-muted/50 rounded-lg p-4 relative group">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                      {tmpl.template}
                    </pre>
                    <button
                      onClick={() => copyTemplate(tmpl.id, tmpl.template)}
                      className={cn(
                        "absolute top-2 right-2 p-2 rounded-lg border transition-all",
                        isCopied
                          ? "bg-green-100 border-green-300 text-green-700"
                          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                      )}
                      title="Vorlage kopieren"
                    >
                      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {tmpl.notes && (
                    <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{tmpl.notes}</span>
                    </div>
                  )}

                  {/* Placeholder hint */}
                  <p className="mt-2 text-xs text-muted-foreground">
                    Ersetze alle <code className="bg-muted px-1 rounded text-primary">[Platzhalter]</code> mit deinen echten Daten vor dem Absenden.
                  </p>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {templates.length === 0 && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          Keine Vorlagen in dieser Kategorie.
        </div>
      )}
    </div>
  );
};

export default ReviewResponseTemplates;
