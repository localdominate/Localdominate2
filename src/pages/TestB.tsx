import { useEffect, useRef, useCallback } from "react";
import { ArrowDown, Check, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openStripeCheckout } from "@/lib/stripe";
import { trackButtonClick } from "@/lib/dataLayer";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { motion } from "framer-motion";

// ─── Tracking helper ───
const trackSectionView = (sectionName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "section_view", {
      section_name: sectionName,
      test_variant: "B",
      page_location: "/test-b",
    });
  }
};

const useInViewTracker = (sectionName: string) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackSectionView(sectionName);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);
  return ref;
};

// ─── Section 1: Hero ───
const HeroSection = () => {
  const ref = useInViewTracker("hero");
  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight"
        >
          Dein Google-Profil arbeitet gegen dich – und du merkst es nicht.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Jeden Monat gehen 15–30 Kundenanfragen an Wettbewerber, die nicht besser sind – nur sichtbarer. Wir ändern das. Einmalig. In unter 14 Tagen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

// ─── Section 2: Proof Bar ───
const ProofBar = () => {
  const ref = useInViewTracker("proof_bar");
  return (
    <section ref={ref} className="border-y border-border bg-muted/40 py-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 text-sm text-muted-foreground">
        <span className="font-medium">127+ optimierte Profile</span>
        <span className="hidden sm:inline text-border">·</span>
        <span className="font-medium">Ø 3,2× mehr Anrufe nach 30 Tagen</span>
        <span className="hidden sm:inline text-border">·</span>
        <span className="font-medium">100% Geld-zurück-Garantie</span>
      </div>
    </section>
  );
};

// ─── Section 3: Problem Timeline ───
const ProblemSection = () => {
  const ref = useInViewTracker("problem");
  const steps = [
    { num: "1", text: 'Kunde sucht "Branche + Stadt" bei Google' },
    { num: "2", text: "Findet 3 Ergebnisse im Local Pack – du bist nicht dabei" },
    { num: "3", text: "Ruft bei der Konkurrenz an und bucht dort" },
  ];
  return (
    <section ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Was gerade passiert – ohne dass du es siehst
        </h2>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">
                  {step.num}
                </div>
                <p className="text-lg text-foreground pt-2.5">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 4: Solution (Before/After) ───
const SolutionSection = () => {
  const ref = useInViewTracker("solution");
  const items = [
    {
      title: "Keyword-Injektion",
      before: "Generisches Profil ohne Suchrelevanz",
      after: "Suchmaschinen-dominantes Profil mit den richtigen Begriffen",
    },
    {
      title: "Psycho-Visuelle Anker",
      before: "Zufällige Fotos ohne Wirkung",
      after: "Verkaufspsychologisch strukturierte Galerie",
    },
    {
      title: "5-Sterne-Automatismus",
      before: "Gelegentliche Bewertungen",
      after: "Systematischer Bewertungsstrom von zufriedenen Kunden",
    },
  ];
  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Was nach der Optimierung anders ist
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Drei gezielte Eingriffe, die dein Profil von unsichtbar zu dominant verwandeln.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{item.title}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-muted-foreground text-sm mt-0.5">Vorher:</span>
                  <span className="text-sm text-muted-foreground">{item.before}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-start gap-2">
                  <span className="text-primary text-sm font-medium mt-0.5">Nachher:</span>
                  <span className="text-sm text-foreground font-medium">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 5: Case Metrics ───
const TestimonialsSection = () => {
  const ref = useInViewTracker("testimonials");
  const cases = [
    { metric: "+312% Profilaufrufe", context: "Zahnarztpraxis · München · nach 21 Tagen" },
    { metric: "4× mehr Anrufe", context: "Restaurant · Berlin · nach 18 Tagen" },
    { metric: "Von Seite 3 auf Platz 2", context: "Handwerksbetrieb · Hamburg · nach 28 Tagen" },
  ];
  return (
    <section ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Messbare Ergebnisse
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{c.metric}</div>
              <div className="text-sm text-muted-foreground">{c.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 6: Offer + Value Stack ───
const OfferSection = () => {
  const ref = useInViewTracker("offer");
  const handleCta = useCallback(() => {
    trackButtonClick("test_b_cta", "offer_section", 299);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", { cta_location: "offer", test_variant: "B" });
    }
    openStripeCheckout("standard", "test_b_offer", "Jetzt Profil optimieren lassen");
  }, []);

  const stack = [
    { name: "Core-Optimierung", value: "299" },
    { name: "Bewertungs-Magnet System", value: "149" },
    { name: "Mitarbeiter-Skript", value: "99" },
    { name: "Ranking-Versicherung", value: "79" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Alles in einem Paket
        </h2>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="space-y-3 mb-6">
            {stack.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item.name}</span>
                </div>
                <span className="text-muted-foreground line-through text-sm">{item.value}€</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-6 mb-6">
            <div className="flex items-baseline justify-between">
              <span className="text-muted-foreground">Gesamtwert</span>
              <span className="text-muted-foreground line-through">626€</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-bold text-foreground">Dein Preis</span>
              <span className="text-3xl font-bold text-primary">299€</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Einmalzahlung · Keine versteckten Kosten</p>
          </div>
          <Button
            size="lg"
            className="w-full text-base py-6"
            onClick={handleCta}
          >
            Jetzt Profil optimieren lassen – 299€ einmalig
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Einmalzahlung · Keine versteckten Kosten · 30 Tage Geld-zurück-Garantie
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── Section 7: Guarantee ───
const GuaranteeSection = () => {
  const ref = useInViewTracker("guarantee");
  const handleCta = useCallback(() => {
    trackButtonClick("test_b_cta_guarantee", "guarantee_section", 299);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", { cta_location: "guarantee", test_variant: "B" });
    }
    openStripeCheckout("standard", "test_b_guarantee", "Jetzt Profil optimieren lassen");
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          30 Tage testen. Kein Risiko.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-2">
          Wenn du innerhalb von 30 Tagen nach der Optimierung nicht messbar mehr Profilaufrufe oder Kundenanfragen bekommst, erstatten wir den vollen Betrag.
        </p>
        <p className="text-muted-foreground mb-2">
          Kein Formular. Keine Begründung. Eine E-Mail genügt.
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          Es gelten unsere AGB. Die Erstattung erfolgt innerhalb von 7 Werktagen auf das ursprüngliche Zahlungsmittel.
        </p>
        <Button
          size="lg"
          className="text-base px-8 py-6"
          onClick={handleCta}
        >
          Jetzt Profil optimieren lassen – 299€ einmalig
        </Button>
        <p className="text-xs text-muted-foreground mt-3">
          Einmalzahlung · Keine versteckten Kosten · 30 Tage Geld-zurück-Garantie
        </p>
      </div>
    </section>
  );
};

// ─── Section 8: FAQ ───
const FAQSection = () => {
  const ref = useInViewTracker("faq");
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Muss ich selbst etwas tun?",
      a: "Nein. Wir übernehmen die komplette Optimierung. Du gibst uns Zugang zu deinem Google-Profil, den Rest erledigen wir.",
    },
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "Erste messbare Verbesserungen bei Profilaufrufen und Suchanfragen siehst du in der Regel innerhalb von 7–14 Tagen.",
    },
    {
      q: "Was wenn ich schon ein Google-Profil habe?",
      a: "Perfekt. Wir optimieren dein bestehendes Profil. Du verlierst keine bestehenden Bewertungen oder Daten.",
    },
    {
      q: "Ist das wirklich eine einmalige Zahlung?",
      a: "Ja. 299€ einmalig. Kein Abo, keine monatlichen Gebühren, keine versteckten Kosten. Was du zahlst, ist was du zahlst.",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Häufige Fragen
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-foreground font-medium pr-4">{faq.q}</span>
                {open === i ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Mobile Sticky CTA ───
const StickyFooterCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setVisible(scrollPercent > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCta = () => {
    trackButtonClick("test_b_sticky_cta", "sticky_footer", 299);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", { cta_location: "sticky_footer", test_variant: "B" });
    }
    openStripeCheckout("standard", "test_b_sticky", "Jetzt Profil optimieren lassen");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border p-3 md:hidden">
      <Button size="sm" className="w-full text-sm" onClick={handleCta}>
        Jetzt Profil optimieren – 299€
      </Button>
    </div>
  );
};

// ─── Page ───
export default function TestB() {
  // Track page view with test variant
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_location: "/test-b",
        page_title: "Test B – Local Dominator",
        test_variant: "B",
      });
    }
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    const milestones = new Set<number>();
    const handleScroll = () => {
      const percent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      [25, 50, 75, 100].forEach((m) => {
        if (percent >= m && !milestones.has(m)) {
          milestones.add(m);
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              percent_scrolled: m,
              test_variant: "B",
            });
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Google-Profil Optimierung – Local Dominator"
        description="Mehr Kundenanfragen über Google. Einmalig optimiert. 30 Tage Geld-zurück-Garantie."
        noindex={true}
      />
      <div className="min-h-screen bg-background">
        <HeroSection />
        <ProofBar />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <StickyFooterCTA />
      </div>
    </>
  );
}
