import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Check, Scissors, Star, MapPin, Camera, BarChart3, Users, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { trackButtonClick, trackScrollDepth } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Scroll depth tracking hook (local, no global mutation)
const useLocalScrollTracking = () => {
  useEffect(() => {
    const tracked = new Set<number>();
    const handleScroll = () => {
      const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75, 100].forEach(m => {
        if (pct >= m && !tracked.has(m)) {
          tracked.add(m);
          trackScrollDepth(m);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

const trackCta = (location: string) => {
  trackButtonClick("hairdresser_cta", location, 299);
  openStripeCheckout("standard", location, "Free Salon Demo");
};

const scrollToDemo = () => {
  document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" });
};

// --- JSON-LD Schema ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ejdhisidjs.lovable.app/hairdressers-munich#business",
      "name": "Local Dominator – Hairdresser Marketing Munich",
      "description": "Get more clients for your hair salon in Munich. Fully done-for-you Google visibility system.",
      "areaServed": { "@type": "City", "name": "Munich" },
      "url": "https://ejdhisidjs.lovable.app/hairdressers-munich"
    },
    {
      "@type": "Service",
      "name": "Salon Marketing Munich",
      "description": "Done-for-you marketing system that brings new clients to hair salons in Munich via Google Maps optimization.",
      "provider": { "@id": "https://ejdhisidjs.lovable.app/hairdressers-munich#business" },
      "areaServed": { "@type": "City", "name": "Munich" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "I don't understand marketing – can I still use this?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You don't need to understand marketing at all. We handle everything for you – from setup to optimization. You just focus on your clients." }
        },
        {
          "@type": "Question",
          "name": "I don't have time for this – how much effort is needed?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zero effort from your side. We do all the work. You'll just see more clients walking through your door." }
        },
        {
          "@type": "Question",
          "name": "What if it doesn't work?",
          "acceptedAnswer": { "@type": "Answer", "text": "There's no risk. We offer a satisfaction guarantee. If you don't see results, you don't pay." }
        }
      ]
    }
  ]
};

const HairdressersMunich = () => {
  useLocalScrollTracking();

  return (
    <>
      <SEOHead
        title="Hairdresser Marketing Munich | Get More Clients for Your Salon"
        description="Get more clients for your hair salon in Munich. Fully done-for-you system. No effort needed. Free demo available."
        canonicalUrl="https://ejdhisidjs.lovable.app/hairdressers-munich"
        lang="en"
        jsonLd={jsonLd["@graph"]}
      />

      <div className="bg-background text-foreground">
        {/* ===== 1. HERO ===== */}
        <section className="min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24">
          <div className="container max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Scissors className="w-4 h-4" />
              For Hair Salons in Munich
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get More Clients for Your Salon in Munich –{" "}
              <span className="text-gradient">Without Doing Anything Yourself</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We help hair salons appear on Google, attract new clients, and fill empty chairs – fully done for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto" onClick={() => trackCta("hero")}>
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToDemo}>
                See How It Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-success" />
              No contracts. No risk. Results first.
            </p>
          </div>
        </section>

        {/* ===== 2. PROBLEM ===== */}
        <section className="bg-[hsl(var(--pain-bg))] text-[hsl(var(--pain-fg))] px-4 py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
              Empty chairs cost you money –{" "}
              <span className="text-[hsl(var(--highlight))]">every single day</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[
                "You rely on walk-ins or old clients",
                "New clients go to competitors on Google",
                "Your salon is not visible online",
                "You don't have time for marketing"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-destructive flex-shrink-0" />
                  <p className="text-base md:text-lg opacity-90">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-lg md:text-xl font-semibold opacity-80">
              If people can't find you, they won't book.
            </p>
          </div>
        </section>

        {/* ===== 3. SOLUTION (3 Steps) ===== */}
        <section className="px-4 py-16 md:py-24">
          <div className="container max-w-4xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-12">
              We bring clients directly to your salon
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "We put your salon on top of Google", desc: "Your salon appears when people search for hairdressers in Munich." },
                { icon: Star, title: "We make you look better than competitors", desc: "More reviews, better photos, stronger first impression." },
                { icon: Users, title: "We send you ready-to-book clients", desc: "People find you, trust you, and book an appointment." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
            <Button variant="cta" size="lg" className="mt-10 group" onClick={() => trackCta("solution")}>
              See your salon potential
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* ===== 4. WHAT YOU GET ===== */}
        <section className="bg-background-alt px-4 py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What we do for you</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: MapPin, text: "Google Maps optimization" },
                { icon: Star, text: "More 5-star reviews" },
                { icon: Camera, text: "Better photos & presentation" },
                { icon: Users, text: "More visibility in Munich" },
                { icon: BarChart3, text: "Monthly performance tracking" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-lg font-semibold text-muted-foreground">
              You cut hair. <span className="text-foreground">We bring clients.</span>
            </p>
          </div>
        </section>

        {/* ===== 5. PROOF ===== */}
        <section className="px-4 py-16 md:py-24">
          <div className="container max-w-4xl text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Proven Results</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Real results for local businesses</h2>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10">
              {[
                { value: "+40%", label: "More bookings" },
                { value: "Top 3", label: "Google Maps" },
                { value: "100%", label: "Weekends booked" }
              ].map((stat, i) => (
                <div key={i} className="p-4 md:p-6 bg-card border border-border/50 rounded-2xl">
                  <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <blockquote className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
              <p className="text-lg italic text-foreground mb-3">
                "We finally have consistent new clients every week."
              </p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--highlight))] text-[hsl(var(--highlight))]" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">– Salon Owner, Munich</p>
            </blockquote>
          </div>
        </section>

        {/* ===== 6. DEMO SECTION ===== */}
        <section id="demo-section" className="bg-primary/5 px-4 py-16 md:py-24">
          <div className="container max-w-4xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              See your salon's potential <span className="text-primary">(free)</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Get a personalized report showing exactly how to get more clients.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {[
                "Missed client opportunities",
                "Competitor comparison",
                "Custom growth plan"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-card rounded-xl p-3 border border-border/50">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="cta" size="ctaLarge" className="group" onClick={() => trackCta("demo")}>
              Get Free Salon Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* ===== 7. PRICING ===== */}
        <section className="px-4 py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-lg text-muted-foreground mb-2">Fixed monthly price. Cancel anytime.</p>
            <p className="text-muted-foreground mb-8">Only pay if you get results.</p>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-10 max-w-md mx-auto">
              <div className="text-sm text-primary font-semibold uppercase tracking-widest mb-2">Salon Growth Package</div>
              <div className="text-4xl md:text-5xl font-bold mb-1">€299</div>
              <div className="text-muted-foreground text-sm mb-6">one-time setup</div>
              <div className="space-y-3 text-left mb-8">
                {[
                  "Full Google Maps optimization",
                  "Review generation system",
                  "Photo & profile enhancement",
                  "Monthly performance reports",
                  "30-day satisfaction guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="ctaLarge" className="w-full group" onClick={() => trackCta("pricing")}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                <Clock className="w-3 h-3 inline mr-1" />
                One extra client per day pays for this.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 8. OBJECTION HANDLING ===== */}
        <section className="bg-background-alt px-4 py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Common Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "I don't understand marketing – can I still use this?",
                  a: "Absolutely. You don't need to understand marketing at all. We handle everything for you – from setup to optimization. You just focus on your clients."
                },
                {
                  q: "I don't have time for this – how much effort is needed?",
                  a: "Zero effort from your side. We do all the work. The initial setup takes about 15 minutes of your time (answering a few questions), and after that, you'll just see more clients walking through your door."
                },
                {
                  q: "What if it doesn't work?",
                  a: "There's no risk. We offer a 30-day satisfaction guarantee. If you don't see results, you get your money back. We've helped dozens of local businesses grow – and we're confident we can help yours too."
                }
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border/50 rounded-xl px-4 md:px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline hover:text-primary py-4 md:py-5 min-h-[56px]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== 9. FINAL CTA ===== */}
        <section className="bg-[hsl(var(--pain-bg))] text-[hsl(var(--pain-fg))] px-4 py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's fill your chairs
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Takes 2 minutes. No commitment.
            </p>
            <Button variant="cta" size="ctaLarge" className="group" onClick={() => trackCta("final_cta")}>
              Get My Free Salon Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm opacity-70">
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> No contracts</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> No risk</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Results first</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HairdressersMunich;
