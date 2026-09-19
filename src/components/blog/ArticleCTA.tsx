import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCTAProps {
  variant?: "inline" | "box";
}

const ArticleCTA = ({ variant = "box" }: ArticleCTAProps) => {
  const { language } = useLanguage();
  const copy = {
    de: { inlineTitle: "Keine Zeit für DIY?", inlineText: "Lass uns dein Google-Profil optimieren und konzentriere dich auf dein Geschäft.", offer: "Jetzt Angebot sichern", title: "🎯 Professionelle Optimierung zum Festpreis", text: "Spare Zeit und Nerven. Wir optimieren dein Google-Profil für maximale lokale Sichtbarkeit.", guarantee: "100% Geld-zurück-Garantie", delivery: "Fertig in 7 Tagen", cta: "Für nur 299 € starten", payment: "Einmalig, keine versteckten Kosten" },
    en: { inlineTitle: "No time for DIY?", inlineText: "Let us optimise your Google profile while you focus on your business.", offer: "View the offer", title: "🎯 Professional optimisation at a fixed price", text: "Save time and effort. We optimise your Google profile for maximum local visibility.", guarantee: "100% money-back guarantee", delivery: "Completed within 7 days", cta: "Start for just €299", payment: "One-time payment, no hidden fees" },
    ar: { inlineTitle: "لا وقت للعمل بنفسك؟", inlineText: "دعنا نحسّن ملفك على Google بينما تركز على نشاطك.", offer: "عرض الباقة", title: "🎯 تحسين احترافي بسعر ثابت", text: "وفّر وقتك وجهدك. نحسّن ملفك على Google لأقصى ظهور محلي.", guarantee: "ضمان استرداد الأموال 100%", delivery: "يكتمل خلال 7 أيام", cta: "ابدأ مقابل $329 فقط", payment: "دفعة واحدة، بدون رسوم مخفية" },
  }[language];
  if (variant === "inline") {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
        <p className="text-foreground mb-4">
          <strong>{copy.inlineTitle}</strong> {copy.inlineText}
        </p>
        <Link to="/#angebot">
          <Button variant="cta" size="sm" className="group">
            {copy.offer}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
      <h3 className="text-2xl font-bold mb-2">{copy.title}</h3>
      <p className="text-primary-foreground/90 mb-6">
        {copy.text}
      </p>
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4" />
          {copy.guarantee}
        </span>
        <span className="inline-flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          {copy.delivery}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link to="/#angebot">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 group"
          >
            {copy.cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <span className="text-sm text-primary-foreground/80">
          {copy.payment}
        </span>
      </div>
    </div>
  );
};

export default ArticleCTA;
