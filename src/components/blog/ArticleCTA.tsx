import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCTAProps {
  variant?: "inline" | "box";
}

const ArticleCTA = ({ variant = "box" }: ArticleCTAProps) => {
  const isEn = useLanguage().language === "en";
  if (variant === "inline") {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
        <p className="text-foreground mb-4">
          <strong>Keine Zeit für DIY?</strong> Lass uns dein Google-Profil optimieren und konzentriere dich auf dein Geschäft.
        </p>
        <Link to="/#angebot">
          <Button variant="cta" size="sm" className="group">
            Jetzt Angebot sichern
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
      <h3 className="text-2xl font-bold mb-2">🎯 Professionelle Optimierung zum Festpreis</h3>
      <p className="text-primary-foreground/90 mb-6">
        Spare Zeit und Nerven. Wir optimieren dein Google-Profil für maximale lokale Sichtbarkeit.
      </p>
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4" />
          {isEn ? "100% money-back guarantee" : "100% Geld-zurück-Garantie"}
        </span>
        <span className="inline-flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          {isEn ? "Completed within 7 days" : "Fertig in 7 Tagen"}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link to="/#angebot">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 group"
          >
            Für nur 299€ starten
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <span className="text-sm text-primary-foreground/80">
          {isEn ? "One-time payment, no hidden fees" : "Einmalig, keine versteckten Kosten"}
        </span>
      </div>
    </div>
  );
};

export default ArticleCTA;
