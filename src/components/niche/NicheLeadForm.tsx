import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackButtonClick } from "@/lib/dataLayer";

interface Props {
  slug: string;
  ctaText: string;
  city: string;
}

const NicheLeadForm = ({ slug, ctaText, city }: Props) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.business.trim() || !form.phone.trim()) {
      toast.error("Bitte fülle alle Felder aus");
      return;
    }
    setLoading(true);
    try {
      trackButtonClick(`${slug}_lead_form`, "demo_form", 0);
      await supabase.from("leads").insert({
        email: `${form.phone.replace(/\s/g, "")}@phone.lead`,
        business_name: form.business.trim(),
        phone: form.phone.trim(),
        notes: `Name: ${form.name.trim()}`,
        source_page: `/${slug}`,
        source_cta: "demo_form",
        lead_type: "niche_landing",
      });
      setSubmitted(true);
      toast.success("Wir melden uns bei dir!");
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 max-w-md mx-auto text-center animate-scale-in">
        <div className="w-14 h-14 rounded-full bg-[hsl(var(--success))]/10 flex items-center justify-center mx-auto mb-4">
          <ArrowRight className="w-6 h-6 text-[hsl(var(--success))]" />
        </div>
        <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden mit deiner kostenlosen Analyse.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-2xl p-6 max-w-md mx-auto space-y-3">
      <Input
        placeholder="Dein Name"
        value={form.name}
        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
        maxLength={100}
        required
      />
      <Input
        placeholder="Name deines Salons"
        value={form.business}
        onChange={(e) => setForm(f => ({ ...f, business: e.target.value }))}
        maxLength={100}
        required
      />
      <Input
        placeholder="Telefonnummer"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
        maxLength={20}
        required
      />
      <Button variant="cta" size="ctaLarge" className="w-full group" type="submit" disabled={loading}>
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
          <>
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Kostenlos & unverbindlich. Nur für {city}.
      </p>
    </form>
  );
};

export default NicheLeadForm;
