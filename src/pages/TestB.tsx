import { useEffect, useRef, useCallback, useState } from "react";
import { Check, Shield, ChevronDown, ChevronUp, ArrowRight, Clock, Zap, Eye, Phone, Search, TrendingUp, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openStripeCheckout } from "@/lib/stripe";
import { trackButtonClick } from "@/lib/dataLayer";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";

// ─── Tracking ───
const trackGA = (event: string, params: Record<string, string | number>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, { ...params, test_variant: "B" });
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
          trackGA("section_view", { section_name: sectionName, page_location: "/test-b" });
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

const handleCtaClick = (location: string) => {
  trackButtonClick("test_b_cta", location, 299);
  trackGA("cta_click", { cta_location: location });
  openStripeCheckout("standard", `test_b_${location}`, "Kostenloses Audit anfordern");
};

// ─── Section 1: Hero ───
const HeroSection = () => {
  const ref = useInViewTracker("hero");
  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center px-4 py-24 md:py-36 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Trust chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          127+ lokale Unternehmen vertrauen uns
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight"
        >
          Deine Kunden suchen lokal.
          <br />
          <span className="text-primary">Finden sie dich?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Wir prüfen dein Google-Profil, zeigen dir genau wo Sichtbarkeit verloren geht – und beheben es. Einmalig. Messbar. In unter 14 Tagen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="text-base px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            onClick={() => handleCtaClick("hero")}
          >
            Kostenloses Audit anfordern
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Kein Vertrag · Keine Kosten · Ergebnis in 48h
          </span>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Proof Bar ───
const ProofBar = () => {
  const ref = useInViewTracker("proof_bar");
  const stats = [
    { value: "127+", label: "Optimierte Profile" },
    { value: "3,2×", label: "Mehr Anrufe (Ø 30 Tage)" },
    { value: "100%", label: "Geld-zurück-Garantie" },
  ];
  return (
    <section ref={ref} className="border-y border-border bg-muted/30 py-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 px-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center sm:border-r sm:last:border-r-0 border-border">
            <span className="text-2xl font-bold text-foreground">{s.value}</span>
            <span className="text-sm text-muted-foreground mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Section 2: Problem Clarification ───
const ProblemSection = () => {
  const ref = useInViewTracker("problem");
  const problems = [
    {
      icon: Search,
      text: "Dein Profil erscheint nicht im Local Pack – deine Konkurrenz schon.",
    },
    {
      icon: Phone,
      text: "Potenzielle Kunden rufen bei dem Unternehmen an, das sie zuerst finden. Nicht beim besten.",
    },
    {
      icon: Eye,
      text: "Du investierst in dein Geschäft, aber nicht in deine Sichtbarkeit. Das kostet dich jeden Tag Umsatz.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Das Problem ist nicht dein Angebot.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center text-lg mb-14 max-w-xl mx-auto"
        >
          Es ist, dass Google dich nicht zeigt.
        </motion.p>

        <div className="space-y-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-muted/40 border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center">
                <p.icon className="w-5 h-5" />
              </div>
              <p className="text-foreground leading-relaxed pt-1.5">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 3: Why This Works ───
const WhyItWorksSection = () => {
  const ref = useInViewTracker("solution");
  const reasons = [
    {
      title: "Keyword-Injektion",
      desc: "Wir platzieren exakt die Suchbegriffe in deinem Profil, nach denen deine Kunden tatsächlich suchen – nicht allgemeine Keywords.",
      icon: Zap,
    },
    {
      title: "Psycho-Visuelle Anker",
      desc: "Deine Galerie wird nach verkaufspsychologischen Prinzipien strukturiert. Vertrauen entsteht, bevor ein Wort gelesen wird.",
      icon: Eye,
    },
    {
      title: "5-Sterne-Automatismus",
      desc: "Ein System, das zufriedene Kunden im richtigen Moment zur Bewertung führt – ohne Betteln, ohne Tricks.",
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Warum es funktioniert
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center text-lg mb-14 max-w-xl mx-auto"
        >
          Drei gezielte Eingriffe. Kein laufender Aufwand.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <r.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 4: How It Works ───
const HowItWorksSection = () => {
  const ref = useInViewTracker("process");
  const steps = [
    {
      num: "01",
      title: "Analyse",
      desc: "Wir prüfen dein Profil, deine Konkurrenz und die relevanten Suchbegriffe in deiner Stadt. Ergebnis in 48 Stunden.",
      time: "Tag 1–2",
    },
    {
      num: "02",
      title: "Umsetzung",
      desc: "Keywords, Kategorien, Fotos, Bewertungslogik – wir optimieren alles. Du musst nichts tun.",
      time: "Tag 3–7",
    },
    {
      num: "03",
      title: "Ergebnisse",
      desc: "Du siehst die Veränderungen in deinem Google Dashboard. Messbar. Nachvollziehbar.",
      time: "Tag 14–30",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          So läuft es ab
        </motion.h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-12 bottom-12 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold border border-primary/20">
                  {step.num}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <span className="text-xs font-medium text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">{step.time}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 5: Trust & Reassurance ───
const TrustSection = () => {
  const ref = useInViewTracker("trust");
  const items = [
    { icon: FileCheck, text: "127+ Profile optimiert – branchenübergreifend" },
    { icon: Clock, text: "Ergebnisse in 14–30 Tagen messbar" },
    { icon: Shield, text: "30 Tage Geld-zurück-Garantie – ohne Bedingungen" },
    { icon: Zap, text: "Einmalzahlung. Kein Abo. Keine laufenden Kosten." },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Warum Unternehmer uns vertrauen
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-foreground font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Section 6: Risk Reversal ───
const RiskReversalSection = () => {
  const ref = useInViewTracker("guarantee");
  const points = [
    "Nicht zufrieden? Volle Erstattung innerhalb von 30 Tagen. Eine E-Mail genügt.",
    "Kein Abo, kein Vertrag, keine versteckten Folgekosten.",
    "Dein einziges Risiko ist, nichts zu ändern.",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8"
        >
          <Shield className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground mb-10"
        >
          Null Risiko. Garantiert.
        </motion.h2>

        <div className="space-y-4 mb-10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 text-left max-w-lg mx-auto"
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{point}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          Es gelten unsere AGB. Die Erstattung erfolgt innerhalb von 7 Werktagen auf das ursprüngliche Zahlungsmittel.
        </p>
      </div>
    </section>
  );
};

// ─── Section 7: Final CTA ───
const FinalCTASection = () => {
  const ref = useInViewTracker("final_cta");

  return (
    <section ref={ref} className="py-20 md:py-28 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/15 rounded-3xl p-10 md:p-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Bereit, sichtbar zu werden?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Finde heraus, was dein Profil aktuell kostet – und was es bringen könnte.
          </p>
          <Button
            size="lg"
            className="text-base px-10 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            onClick={() => handleCtaClick("final_cta")}
          >
            Kostenloses Audit anfordern
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Kein Vertrag · Kein Risiko · Ergebnis in 48h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ─── FAQ ───
const FAQSection = () => {
  const ref = useInViewTracker("faq");
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Was genau passiert nach der Bestellung?",
      a: "Du erhältst innerhalb von 48 Stunden eine Analyse deines Profils mit konkreten Handlungsempfehlungen. Danach setzen wir alles für dich um – du musst nichts tun.",
    },
    {
      q: "Muss ich Zugangsdaten teilen?",
      a: "Nur den Zugang zu deinem Google Unternehmensprofil. Keine Passwörter zu anderen Systemen. Du behältst die volle Kontrolle.",
    },
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "Erste messbare Verbesserungen bei Profilaufrufen und Suchanfragen innerhalb von 7–14 Tagen. Volle Wirkung nach 30 Tagen.",
    },
    {
      q: "Was wenn es nicht funktioniert?",
      a: "Dann bekommst du dein Geld zurück. Vollständig. Innerhalb von 30 Tagen. Eine E-Mail genügt – keine Begründung nötig.",
    },
    {
      q: "Ist das ein Abo?",
      a: "Nein. Einmalige Zahlung. Keine Folgekosten, kein Vertrag, keine automatische Verlängerung.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          Häufige Fragen
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-foreground font-medium pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border p-3 md:hidden"
    >
      <Button
        size="sm"
        className="w-full text-sm shadow-sm"
        onClick={() => handleCtaClick("sticky_footer")}
      >
        Kostenloses Audit anfordern
        <ArrowRight className="ml-2 h-3.5 w-3.5" />
      </Button>
    </motion.div>
  );
};

// ─── Minimal Footer ───
const MinimalFooter = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} Local Dominator</span>
      <div className="flex gap-6">
        <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
        <a href="/agb" className="hover:text-foreground transition-colors">AGB</a>
      </div>
    </div>
  </footer>
);

// ─── Page ───
export default function TestB() {
  useEffect(() => {
    trackGA("page_view", { page_location: "/test-b", page_title: "Test B – Local Dominator" });
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
          trackGA("scroll_depth", { percent_scrolled: m });
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Lokale Sichtbarkeit steigern – Local Dominator"
        description="Wir optimieren dein Google-Profil für mehr Kundenanfragen. Einmalig. Messbar. Mit Geld-zurück-Garantie."
        noindex={true}
      />
      <div className="min-h-screen bg-background">
        <HeroSection />
        <ProofBar />
        <ProblemSection />
        <WhyItWorksSection />
        <HowItWorksSection />
        <TrustSection />
        <RiskReversalSection />
        <FinalCTASection />
        <FAQSection />
        <MinimalFooter />
        <StickyFooterCTA />
      </div>
    </>
  );
}
