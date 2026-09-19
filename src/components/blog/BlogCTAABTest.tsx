import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useRef } from "react";

interface BlogCTAABTestProps {
  articleSlug: string;
  position: "intro" | "middle" | "end";
}

const BlogCTAABTest = ({ articleSlug, position }: BlogCTAABTestProps) => {
  const { language } = useLanguage();
  const copy = {
    de: { title: "🎯 Professionelle Optimierung zum Festpreis", text: "Spare Zeit und Nerven. Wir optimieren dein Google-Profil für maximale lokale Sichtbarkeit.", guarantee: "100% Geld-zurück-Garantie", delivery: "Fertig in 7 Tagen", cta: "Für nur 299 € starten", payment: "Einmalig, keine versteckten Kosten" },
    en: { title: "🎯 Professional optimisation at a fixed price", text: "Save time and effort. We optimise your Google profile for maximum local visibility.", guarantee: "100% money-back guarantee", delivery: "Completed within 7 days", cta: "Start for just €299", payment: "One-time payment, no hidden fees" },
    ar: { title: "🎯 تحسين احترافي بسعر ثابت", text: "وفّر وقتك وجهدك. نحسّن ملفك على Google لأقصى ظهور محلي.", guarantee: "ضمان استرداد الأموال 100%", delivery: "يكتمل خلال 7 أيام", cta: "ابدأ مقابل $329 فقط", payment: "دفعة واحدة، بدون رسوم مخفية" },
  }[language];
  const { variant } = useABTest();
  const hasTrackedView = useRef(false);

  // Track view impression
  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;

    const sessionId = sessionStorage.getItem("analytics_session_id") || "anonymous";
    
    supabase.from("ab_test_views").insert({
      session_id: sessionId,
      test_id: "blog_cta_color",
      variant: variant,
      page_url: `/blog/${articleSlug}`
    }).then(() => {});
  }, [variant, articleSlug]);

  const handleClick = async () => {
    const sessionId = sessionStorage.getItem("analytics_session_id") || "anonymous";
    
    // Track conversion in database
    await supabase.from("analytics_conversions").insert({
      session_id: sessionId,
      conversion_type: "blog_cta_click",
      cta_location: position,
      cta_text: copy.cta,
      page_path: `/blog/${articleSlug}`,
      ab_variant_color: variant,
      blog_article_slug: articleSlug,
      blog_cta_position: position,
      blog_cta_variant: variant,
      ab_test_id: "blog_cta_color"
    });

    // Also push to dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "blog_cta_click",
        blog_article_slug: articleSlug,
        blog_cta_position: position,
        blog_cta_variant: variant,
        ab_variant_color: variant
      });
    }
  };

  const isBlue = variant === "blue";

  return (
    <div 
      className={`my-12 p-8 rounded-2xl text-white ${
        isBlue 
          ? "bg-gradient-to-br from-blue-600 to-blue-700" 
          : "bg-gradient-to-br from-red-500 to-red-600"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">
        {copy.title}
      </h3>
      <p className="text-white/90 mb-6">
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
        <Link to="/#angebot" onClick={handleClick}>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-white/90 group font-semibold"
          >
            {copy.cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <span className="text-sm text-white/80">
          {copy.payment}
        </span>
      </div>
    </div>
  );
};

export default BlogCTAABTest;
