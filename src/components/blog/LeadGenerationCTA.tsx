import { useState, useRef, useEffect } from "react";
import { ArrowRight, Shield, Clock, CheckCircle, Loader2, Mail, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useABTest } from "@/hooks/useABTest";
import { toast } from "sonner";
import { z } from "zod";

const leadSchema = z.object({
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein.").max(255),
  business_name: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(30).optional(),
});

type LeadVariant = "compact" | "full" | "inline";

interface LeadGenerationCTAProps {
  articleSlug: string;
  position: "intro" | "middle" | "end";
  variant?: LeadVariant;
  heading?: string;
  subheading?: string;
}

const LeadGenerationCTA = ({
  articleSlug,
  position,
  variant = "compact",
  heading,
  subheading,
}: LeadGenerationCTAProps) => {
  const { variant: abVariant } = useABTest();
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    const sessionId = sessionStorage.getItem("analytics_session_id") || "anonymous";
    supabase.from("ab_test_views").insert({
      session_id: sessionId,
      test_id: "lead_gen_cta",
      variant: abVariant,
      page_url: `/blog/${articleSlug}`,
    }).then(() => {});
  }, [abVariant, articleSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = leadSchema.safeParse({ email, business_name: businessName || undefined, phone: phone || undefined });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    const sessionId = sessionStorage.getItem("analytics_session_id") || "anonymous";

    try {
      const { error: dbError } = await supabase.from("leads").insert({
        email: result.data.email,
        business_name: result.data.business_name || null,
        phone: result.data.phone || null,
        source_page: `/blog/${articleSlug}`,
        source_cta: position,
        lead_type: "blog_cta",
        session_id: sessionId,
        ab_variant: abVariant,
      });

      if (dbError) throw dbError;

      await supabase.from("analytics_conversions").insert({
        session_id: sessionId,
        conversion_type: "lead_form_submit",
        cta_location: position,
        cta_text: "Lead Form",
        page_path: `/blog/${articleSlug}`,
        ab_variant_color: abVariant,
        blog_article_slug: articleSlug,
        blog_cta_position: position,
        blog_cta_variant: abVariant,
        ab_test_id: "lead_gen_cta",
      });

      setIsSubmitted(true);
      toast.success("Vielen Dank! Wir melden uns in Kürze bei dir.");
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBlue = abVariant === "blue";
  const gradientClass = isBlue
    ? "from-blue-600 to-blue-700"
    : "from-red-500 to-red-600";

  const defaultHeading = heading || "🎯 Kostenlose Erstberatung für dein Business";
  const defaultSubheading = subheading || "Lass uns dein Google-Profil analysieren. Wir zeigen dir, wo du Potenzial verschenkst – kostenlos und unverbindlich.";

  if (isSubmitted) {
    return (
      <div className={`my-12 p-8 rounded-2xl text-white bg-gradient-to-br ${gradientClass}`}>
        <div className="flex flex-col items-center text-center gap-4">
          <CheckCircle className="h-12 w-12 text-white" />
          <h3 className="text-2xl font-bold">Danke für dein Interesse!</h3>
          <p className="text-white/90 max-w-md">
            Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden bei dir.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
        <p className="text-foreground mb-4 font-semibold">
          📧 Kostenlose Analyse deines Google-Profils
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="deine@email.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background"
            required
          />
          <Button type="submit" disabled={isSubmitting} className="shrink-0 group">
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Kostenlos anfragen
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
        {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        <p className="text-xs text-muted-foreground mt-2">
          Kein Spam, keine versteckten Kosten. Unverbindlich.
        </p>
      </div>
    );
  }

  return (
    <div className={`my-12 p-8 rounded-2xl text-white bg-gradient-to-br ${gradientClass}`}>
      <h3 className="text-2xl font-bold mb-2">{defaultHeading}</h3>
      <p className="text-white/90 mb-6">{defaultSubheading}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4" /> 100% kostenlos & unverbindlich
        </span>
        <span className="inline-flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" /> Antwort innerhalb 24h
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className={`grid gap-3 ${variant === "full" ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="deine@email.de *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white/95 text-foreground border-0 placeholder:text-muted-foreground"
              required
            />
          </div>
          {variant === "full" && (
            <>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Firmenname"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="pl-10 bg-white/95 text-foreground border-0 placeholder:text-muted-foreground"
                  maxLength={100}
                />
              </div>
              <div className="relative sm:col-span-2">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Telefonnummer (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 bg-white/95 text-foreground border-0 placeholder:text-muted-foreground"
                  maxLength={30}
                />
              </div>
            </>
          )}
        </div>

        {error && <p className="text-white/90 text-sm bg-white/20 px-3 py-1 rounded">{error}</p>}

        <div className="flex flex-wrap items-center gap-4">
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            disabled={isSubmitting}
            className="bg-white text-gray-900 hover:bg-white/90 group font-semibold"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Jetzt kostenlos beraten lassen
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
          <span className="text-sm text-white/80">
            Keine Kreditkarte erforderlich
          </span>
        </div>
      </form>
    </div>
  );
};

export default LeadGenerationCTA;
