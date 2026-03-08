import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackButtonClick } from "@/lib/dataLayer";

interface LocalSEOAuditCTAProps {
  /** Visual variant */
  variant?: "standard" | "compact" | "checklist";
  /** Article slug for tracking */
  articleSlug?: string;
}

const auditSteps = {
  de: [
    { icon: Search, text: "Google Business Profil auf Vollständigkeit prüfen" },
    { icon: MapPin, text: "NAP-Konsistenz über alle Verzeichnisse checken" },
    { icon: Star, text: "Bewertungsprofil & Antwortrate analysieren" },
    { icon: ClipboardCheck, text: "Technische Local SEO Faktoren bewerten" },
  ],
  en: [
    { icon: Search, text: "Check your Google Business Profile completeness" },
    { icon: MapPin, text: "Verify NAP consistency across all directories" },
    { icon: Star, text: "Analyze review profile & response rate" },
    { icon: ClipboardCheck, text: "Evaluate technical Local SEO factors" },
  ],
};

const t = {
  de: {
    headline: "Wie sichtbar ist dein Unternehmen wirklich?",
    subline: "Finde es heraus – mit unserem kostenlosen 75+ Punkte Local SEO Audit.",
    ctaTemplate: "Kostenloses Audit-Template starten",
    ctaPro: "Professionelles Audit beauftragen – 299 €",
    ctaProShort: "Profi-Audit beauftragen",
    or: "oder",
    compactHeadline: "🔍 Jetzt Local SEO Audit durchführen",
    compactText: "Prüfe dein Google-Profil mit unserem 75+ Punkte Audit-Template — kostenlos & sofort nutzbar.",
    checklistHeadline: "Dein Local SEO Quick-Check",
    checklistSubline: "Diese 4 Bereiche solltest du regelmäßig prüfen:",
    checklistCta: "Vollständiges Audit-Template öffnen",
  },
  en: {
    headline: "How visible is your business really?",
    subline: "Find out — with our free 75+ point Local SEO audit.",
    ctaTemplate: "Start free audit template",
    ctaPro: "Order professional audit – €299",
    ctaProShort: "Order pro audit",
    or: "or",
    compactHeadline: "🔍 Run a Local SEO Audit now",
    compactText: "Check your Google profile with our 75+ point audit template — free & ready to use.",
    checklistHeadline: "Your Local SEO Quick Check",
    checklistSubline: "Regularly review these 4 areas:",
    checklistCta: "Open full audit template",
  },
};

const LocalSEOAuditCTA = ({
  variant = "standard",
  articleSlug = "unknown",
}: LocalSEOAuditCTAProps) => {
  const { language } = useLanguage();
  const texts = t[language];
  const steps = auditSteps[language];

  const handleTemplateClick = () => {
    trackButtonClick("audit_cta_template", `blog_${articleSlug}`, 0);
  };

  const handleProClick = () => {
    trackButtonClick("audit_cta_pro", `blog_${articleSlug}`, 299);
  };

  if (variant === "compact") {
    return (
      <div className="my-8 p-5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
        <p className="text-foreground font-semibold mb-2">{texts.compactHeadline}</p>
        <p className="text-muted-foreground text-sm mb-4">{texts.compactText}</p>
        <Link to="/blog/google-maps-audit-template" onClick={handleTemplateClick}>
          <Button variant="cta" size="sm" className="group">
            {texts.ctaTemplate}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === "checklist") {
    return (
      <div className="my-10 p-6 md:p-8 bg-muted/50 border border-border rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-1">{texts.checklistHeadline}</h3>
        <p className="text-muted-foreground text-sm mb-5">{texts.checklistSubline}</p>
        <ul className="space-y-3 mb-6">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <step.icon className="h-4 w-4 text-primary" />
              </span>
              <span className="text-foreground text-sm font-medium">{step.text}</span>
            </li>
          ))}
        </ul>
        <Link to="/blog/google-maps-audit-template" onClick={handleTemplateClick}>
          <Button variant="default" size="sm" className="group">
            {texts.checklistCta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    );
  }

  // Standard (full) variant
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
      <h3 className="text-2xl font-bold mb-2">🔍 {texts.headline}</h3>
      <p className="text-primary-foreground/90 mb-6">{texts.subline}</p>

      <ul className="space-y-2.5 mb-8">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className="shrink-0 h-7 w-7 rounded-full bg-primary-foreground/15 flex items-center justify-center">
              <step.icon className="h-3.5 w-3.5" />
            </span>
            {step.text}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-4">
        <Link to="/blog/google-maps-audit-template" onClick={handleTemplateClick}>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 group font-semibold"
          >
            {texts.ctaTemplate}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <span className="text-sm text-primary-foreground/70">{texts.or}</span>
        <Link to="/#angebot" onClick={handleProClick}>
          <Button variant="ghost" size="sm" className="text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/80 hover:bg-transparent">
            <span className="hidden sm:inline">{texts.ctaPro}</span>
            <span className="sm:hidden">{texts.ctaProShort}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalSEOAuditCTA;
