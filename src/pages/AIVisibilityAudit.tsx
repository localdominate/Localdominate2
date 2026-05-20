import { useState } from "react";
import { ArrowRight, ArrowLeft, Loader2, ShieldCheck, Sparkles, Bot, MapPin, Star, Database, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import SEOHead from "@/components/SEOHead";
import { trackButtonClick } from "@/lib/dataLayer";
import { useLanguage } from "@/i18n/LanguageContext";

interface FormState {
  business: string;
  website: string;
  city: string;
  category: string;
  hasGbp: "yes" | "no" | "unsure" | "";
  reviewCount: "0-10" | "11-50" | "51-200" | "200+" | "";
  hasSchema: "yes" | "no" | "unsure" | "";
  publishesContent: "weekly" | "monthly" | "rarely" | "never" | "";
  email: string;
}

interface ScoreResult {
  total: number;
  entityAuthority: number;
  citationDensity: number;
  reviewVelocity: number;
  schemaCoverage: number;
  aiRetrievability: number;
  grade: string;
  summary: string;
}

const initial: FormState = {
  business: "", website: "", city: "", category: "",
  hasGbp: "", reviewCount: "", hasSchema: "", publishesContent: "", email: "",
};

function calculateScore(f: FormState): ScoreResult {
  let entityAuthority = 30;
  if (f.website && /^https?:\/\//i.test(f.website)) entityAuthority += 25;
  if (f.business.length > 3) entityAuthority += 15;
  if (f.city.length > 2) entityAuthority += 15;

  let citationDensity = 25;
  if (f.hasGbp === "yes") citationDensity += 45;
  else if (f.hasGbp === "unsure") citationDensity += 15;
  if (f.category.length > 3) citationDensity += 20;

  let reviewVelocity = 20;
  if (f.reviewCount === "200+") reviewVelocity += 70;
  else if (f.reviewCount === "51-200") reviewVelocity += 55;
  else if (f.reviewCount === "11-50") reviewVelocity += 35;
  else if (f.reviewCount === "0-10") reviewVelocity += 10;

  let schemaCoverage = 15;
  if (f.hasSchema === "yes") schemaCoverage += 65;
  else if (f.hasSchema === "unsure") schemaCoverage += 20;

  let aiRetrievability = 20;
  if (f.publishesContent === "weekly") aiRetrievability += 60;
  else if (f.publishesContent === "monthly") aiRetrievability += 40;
  else if (f.publishesContent === "rarely") aiRetrievability += 15;
  if (f.hasSchema === "yes") aiRetrievability += 15;

  const cap = (n: number) => Math.min(100, Math.max(0, n));
  entityAuthority = cap(entityAuthority);
  citationDensity = cap(citationDensity);
  reviewVelocity = cap(reviewVelocity);
  schemaCoverage = cap(schemaCoverage);
  aiRetrievability = cap(aiRetrievability);

  const total = Math.round(
    entityAuthority * 0.2 + citationDensity * 0.2 + reviewVelocity * 0.2 +
    schemaCoverage * 0.2 + aiRetrievability * 0.2
  );

  let grade = "Aufbau erforderlich";
  let summary = "Dein Unternehmen ist für KI-Suchmaschinen derzeit kaum sichtbar. Schon mit gezielten Schritten lässt sich das deutlich verbessern.";
  if (total >= 75) { grade = "Stark sichtbar"; summary = "Dein Unternehmen hat bereits starke Signale für KI-Sichtbarkeit. Mit Feinschliff erreichst du Kategorie-Dominanz."; }
  else if (total >= 55) { grade = "Solide Basis"; summary = "Dein Unternehmen hat eine solide Basis. Mit gezielten Optimierungen bei Schema, Bewertungen und Content steigerst du die KI-Sichtbarkeit deutlich."; }
  else if (total >= 35) { grade = "Lückenhaft"; summary = "Es gibt deutliche Lücken in deiner KI-Sichtbarkeits-Infrastruktur. Fokus auf strukturierte Daten und Citation-Density bringt schnellen Lift."; }

  return { total, entityAuthority, citationDensity, reviewVelocity, schemaCoverage, aiRetrievability, grade, summary };
}

const ScoreBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: any }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 font-medium"><Icon className="w-4 h-4 text-primary" />{label}</span>
      <span className="font-bold tabular-nums">{value}/100</span>
    </div>
    <Progress value={value} className="h-2" />
  </div>
);

const AIVisibilityAudit = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [report, setReport] = useState<string | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const { language } = useLanguage();

  const totalSteps = 5;
  const progress = Math.round(((step + 1) / (totalSteps + 1)) * 100);

  const next = () => setStep(s => Math.min(s + 1, totalSteps));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const canProceed = () => {
    switch (step) {
      case 0: return form.business.trim().length > 1 && form.city.trim().length > 1;
      case 1: return form.category.trim().length > 2;
      case 2: return form.hasGbp !== "" && form.reviewCount !== "";
      case 3: return form.hasSchema !== "" && form.publishesContent !== "";
      case 4: return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email);
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setLoading(true);
    try {
      trackButtonClick("ai_visibility_audit_submit", "ai_audit", 1);
      const score = calculateScore(form);
      await supabase.from("leads").insert({
        email: form.email.trim(),
        business_name: form.business.trim(),
        source_page: "/ai-visibility-audit",
        source_cta: "ai_audit_funnel",
        lead_type: "ai_audit",
        notes: `Stadt: ${form.city} | Kategorie: ${form.category} | Website: ${form.website || "—"} | Score: ${score.total} (${score.grade}) | GBP: ${form.hasGbp} | Reviews: ${form.reviewCount} | Schema: ${form.hasSchema} | Content: ${form.publishesContent}`,
      });
      setResult(score);
      setStep(totalSteps);

      // Phase 7: generate AI narrative report (non-blocking UX)
      setReportLoading(true);
      supabase.functions
        .invoke("generate-ai-audit-report", {
          body: {
            business: form.business.trim(),
            city: form.city.trim(),
            category: form.category.trim(),
            website: form.website.trim() || undefined,
            hasGbp: form.hasGbp,
            reviewCount: form.reviewCount,
            hasSchema: form.hasSchema,
            publishesContent: form.publishesContent,
            score,
            language,
          },
        })
        .then(({ data, error }) => {
          if (error) {
            console.error("[audit] report error", error);
            return;
          }
          if (data?.report) setReport(data.report);
        })
        .finally(() => setReportLoading(false));
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Kostenloser AI-Sichtbarkeits-Audit | LocalDominate"
        description="Berechne deinen AI Visibility Index™ in 2 Minuten. Sieh wie sichtbar dein Unternehmen in ChatGPT, Gemini, Perplexity & Google AI Overviews ist."
        canonicalUrl="https://localdominate.org/ai-visibility-audit"
      />
      <StickyHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <SiteBreadcrumbs items={[{ label: "AI Visibility Audit" }]} />
        </div>

        <section className="container mx-auto px-4 pb-20 max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" /> AI Visibility Index™
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Wie sichtbar ist dein Unternehmen in ChatGPT & Google AI?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beantworte 4 kurze Fragen und erhalte deinen kostenlosen AI Visibility Index™ – inklusive konkreter Empfehlungen.
            </p>
          </div>

          {step < totalSteps && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Schritt {step + 1} von {totalSteps}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold">Dein Unternehmen</h2>
                <Input placeholder="Name deines Unternehmens" value={form.business} maxLength={120} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} className="h-12" />
                <Input placeholder="Stadt (z. B. München)" value={form.city} maxLength={80} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="h-12" />
                <Input placeholder="Website (optional, https://...)" value={form.website} maxLength={200} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} className="h-12" />
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold">Branche / Kategorie</h2>
                <p className="text-muted-foreground">In welcher Hauptkategorie ist dein Unternehmen aktiv?</p>
                <Input placeholder="z. B. Friseur, Anwaltskanzlei, Zahnarzt, Restaurant" value={form.category} maxLength={100} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="h-12" />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Google Business & Bewertungen</h2>
                <ChoiceGroup label="Hast du ein verifiziertes Google Business Profil?"
                  value={form.hasGbp}
                  onChange={v => setForm(f => ({ ...f, hasGbp: v as FormState["hasGbp"] }))}
                  options={[{v:"yes",l:"Ja, verifiziert"},{v:"no",l:"Nein"},{v:"unsure",l:"Unsicher"}]} />
                <ChoiceGroup label="Wie viele Google-Bewertungen hast du aktuell?"
                  value={form.reviewCount}
                  onChange={v => setForm(f => ({ ...f, reviewCount: v as FormState["reviewCount"] }))}
                  options={[{v:"0-10",l:"0–10"},{v:"11-50",l:"11–50"},{v:"51-200",l:"51–200"},{v:"200+",l:"200+"}]} />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Schema & Content</h2>
                <ChoiceGroup label="Nutzt deine Website strukturierte Daten (Schema.org / JSON-LD)?"
                  value={form.hasSchema}
                  onChange={v => setForm(f => ({ ...f, hasSchema: v as FormState["hasSchema"] }))}
                  options={[{v:"yes",l:"Ja"},{v:"no",l:"Nein"},{v:"unsure",l:"Weiß ich nicht"}]} />
                <ChoiceGroup label="Wie oft veröffentlichst du neue Inhalte (Blog, FAQ, GBP-Posts)?"
                  value={form.publishesContent}
                  onChange={v => setForm(f => ({ ...f, publishesContent: v as FormState["publishesContent"] }))}
                  options={[{v:"weekly",l:"Wöchentlich"},{v:"monthly",l:"Monatlich"},{v:"rarely",l:"Selten"},{v:"never",l:"Nie"}]} />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold">Deinen Index erhalten</h2>
                <p className="text-muted-foreground">Wir senden dir deinen AI Visibility Index™ und 3 konkrete Empfehlungen per E-Mail.</p>
                <Input placeholder="E-Mail-Adresse" type="email" value={form.email} maxLength={255} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="h-12" />
                <p className="text-xs text-muted-foreground flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" /> Keine Werbe-Mails. Wir senden dir nur deinen Audit-Report.</p>
              </div>
            )}

            {step === totalSteps && result && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground mb-4">
                    <div>
                      <div className="text-5xl font-bold">{result.total}</div>
                      <div className="text-xs uppercase tracking-wide opacity-90">/ 100</div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{result.grade}</h2>
                  <p className="text-muted-foreground max-w-lg mx-auto">{result.summary}</p>
                </div>

                <div className="space-y-4 bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Dein AI Visibility Index™</h3>
                  <ScoreBar label="Entity Authority" value={result.entityAuthority} icon={Bot} />
                  <ScoreBar label="Citation Density" value={result.citationDensity} icon={MapPin} />
                  <ScoreBar label="Review Velocity" value={result.reviewVelocity} icon={Star} />
                  <ScoreBar label="Schema Coverage" value={result.schemaCoverage} icon={Database} />
                  <ScoreBar label="AI Retrievability" value={result.aiRetrievability} icon={Search} />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Bereit für Kategorie-Dominanz?</h3>
                  <p className="text-muted-foreground mb-4">Wir bauen deine AI Visibility Infrastructure auf – mit dem 5-Sterne-Automatismus™ und Keyword-Injektion™.</p>
                  <Button size="lg" asChild>
                    <a href="/#preise">Jetzt starten – €299</a>
                  </Button>
                </div>
              </div>
            )}

            {step < totalSteps && (
              <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
                <Button variant="ghost" onClick={back} disabled={step === 0 || loading}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                </Button>
                {step < totalSteps - 1 ? (
                  <Button onClick={next} disabled={!canProceed()}>
                    Weiter <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canProceed() || loading}>
                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
                    Index berechnen
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ChoiceGroup = ({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) => (
  <div>
    <label className="block text-sm font-medium mb-3">{label}</label>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {options.map(o => (
        <button key={o.v} type="button" onClick={() => onChange(o.v)}
          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
            value === o.v
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-card hover:border-primary/40 hover:bg-muted/40"
          }`}>
          {o.l}
        </button>
      ))}
    </div>
  </div>
);

export default AIVisibilityAudit;