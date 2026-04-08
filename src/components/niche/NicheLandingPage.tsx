import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Check, Star, MapPin, Camera, BarChart3, Users, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackButtonClick, trackScrollDepth } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { NicheConfig } from "@/data/nicheConfigs";
import NicheStickyMobileCTA from "./NicheStickyMobileCTA";
import NicheStickyDesktopCTA from "./NicheStickyDesktopCTA";
import MicroTrustBadge from "./MicroTrustBadge";
import GoogleMapsMockup from "./GoogleMapsMockup";
import NicheLeadForm from "./NicheLeadForm";
import SectionFadeIn from "./SectionFadeIn";
import InlineCTA from "./InlineCTA";
import NicheTransformationSection from "./NicheTransformationSection";
import NicheWebsiteAddon from "./NicheWebsiteAddon";

const BASE_URL = "https://ejdhisidjs.lovable.app";

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

const buildJsonLd = (c: NicheConfig) => [
  {
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/${c.slug}#business`,
    "name": `Local Dominator – ${c.niche} Marketing ${c.city}`,
    "description": c.metaDescription,
    "url": `${BASE_URL}/${c.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": c.city,
      "addressRegion": "Bavaria",
      "addressCountry": "DE"
    },
    "areaServed": {
      "@type": "City",
      "name": c.city,
      "sameAs": `https://en.wikipedia.org/wiki/${c.city}`
    },
    "priceRange": "€€",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.582 },
      "geoRadius": "25000"
    }
  },
  {
    "@type": "Service",
    "name": `${c.niche} Marketing ${c.city}`,
    "description": `Done-for-you marketing system that brings new clients to ${c.nicheLabel.toLowerCase()} in ${c.city} via Google Maps optimization.`,
    "provider": { "@id": `${BASE_URL}/${c.slug}#business` },
    "areaServed": { "@type": "City", "name": c.city }
  },
  {
    "@type": "FAQPage",
    "mainEntity": (c.faqs || []).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }
];

interface Props {
  config: NicheConfig;
}

const NicheLandingPage = ({ config: c }: Props) => {
  useLocalScrollTracking();

  const trackCta = (location: string) => {
    trackButtonClick(`${c.slug}_cta`, location, 299);
    openStripeCheckout("standard", location, c.finalCta);
  };

  const scrollToDemo = () => {
    document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const Icon = c.icon;
  const urgencyText = `Limited spots available in ${c.city}`;

  return (
    <>
      <SEOHead
        title={c.metaTitle}
        description={c.metaDescription}
        canonicalUrl={`${BASE_URL}/${c.slug}`}
        lang="en"
        jsonLd={buildJsonLd(c)}
      />

      {/* Sticky CTAs */}
      <NicheStickyMobileCTA ctaText="Get Free Demo" onCtaClick={() => trackCta("sticky_mobile")} />
      <NicheStickyDesktopCTA ctaText="Get Free Demo" onCtaClick={() => trackCta("sticky_desktop")} />

      <div className="bg-background text-foreground">
        {/* 1. HERO */}
        <section className="min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24">
          <div className="container max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Icon className="w-4 h-4" />
              {c.heroEyebrow}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {c.heroH1}{" "}
              <span className="text-gradient">{c.heroH1Highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 leading-relaxed">
              {c.heroSubheadline}
            </p>
            <p className="text-sm text-primary font-medium mb-4">
              More visibility. More bookings. Less uncertainty.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by {c.nicheLabel.toLowerCase()} across {c.city} · Powered by{" "}
              <Link to="/" className="text-primary hover:underline">Local Dominator</Link>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto" onClick={() => trackCta("hero")}>
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToDemo}>
                See How It Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-[hsl(var(--success))]" />
              No contracts. No risk. Results first.
            </p>
            <MicroTrustBadge city={c.city} />
            <GoogleMapsMockup serviceName={c.service} city={c.city} />
          </div>
        </section>

        {/* 1.5 OUTREACH BRIDGE */}
        <SectionFadeIn>
          <section className="px-4 py-12 md:py-16 border-b border-border/30">
            <div className="container max-w-3xl text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                We found something interesting about your {c.service}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                We analyzed {c.nicheLabel.toLowerCase()} in {c.city} and found that many are missing easy opportunities to get more clients from Google.
              </p>
              <Button variant="cta" size="lg" className="group" onClick={scrollToDemo}>
                See your free analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </SectionFadeIn>

        {/* 2. PROBLEM */}
        <SectionFadeIn>
          <section className="bg-[hsl(var(--pain-bg))] text-[hsl(var(--pain-fg))] px-4 py-16 md:py-24">
            <div className="container max-w-4xl">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                {c.problemHeadline}{" "}
                <span className="text-[hsl(var(--highlight))]">{c.problemHighlight}</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                {c.problemBullets.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-destructive flex-shrink-0" />
                    <p className="text-base md:text-lg opacity-90">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-10 text-lg md:text-xl font-semibold opacity-80">
                {c.problemClosing}
              </p>
            </div>
          </section>
        </SectionFadeIn>

        {/* Inline CTA after Problem */}
        <InlineCTA text={c.solutionCta} urgency={urgencyText} onClick={() => trackCta("after_problem")} />

        {/* 3. SOLUTION */}
        <SectionFadeIn>
          <section className="px-4 py-16 md:py-24">
            <div className="container max-w-4xl text-center">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">How It Works</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                We make sure your {c.service} stays visible – and gets booked
              </h2>
              <p className="text-muted-foreground mb-12">So you can plan your weeks with more certainty.</p>
              <div className="grid md:grid-cols-3 gap-8">
                {c.solutionSteps.map((step, i) => {
                  const icons = [MapPin, Star, Users];
                  const StepIcon = icons[i] || MapPin;
                  return (
                    <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <StepIcon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
              <Button variant="cta" size="lg" className="mt-10 group" onClick={() => trackCta("solution")}>
                {c.solutionCta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </SectionFadeIn>

        {/* 3.5 TRANSFORMATION BEFORE/AFTER */}
        <SectionFadeIn>
          <NicheTransformationSection service={c.service} onCtaClick={() => trackCta("transformation")} />
        </SectionFadeIn>

        {/* 4. WHAT YOU GET */}
        <SectionFadeIn>
          <section className="bg-background-alt px-4 py-16 md:py-24">
            <div className="container max-w-4xl">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What we do for you</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: MapPin, text: "Google Maps optimization" },
                  { icon: Star, text: "More 5-star reviews" },
                  { icon: Camera, text: "Better photos & presentation" },
                  { icon: Users, text: c.visibilityLabel },
                  { icon: BarChart3, text: "Monthly performance tracking" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-center mt-10 text-lg font-semibold text-muted-foreground">
                {c.whatYouGetClosingPrefix} <span className="text-foreground">{c.whatYouGetClosingSuffix}</span>
              </p>
            </div>
          </section>
        </SectionFadeIn>

        {/* Inline CTA after What You Get */}
        <InlineCTA text="Get Free Demo" urgency={urgencyText} onClick={() => trackCta("after_features")} />

        {/* 5. PROOF */}
        <SectionFadeIn>
          <section className="px-4 py-16 md:py-24">
            <div className="container max-w-4xl text-center">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Proven Results</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-10">Real results for {c.nicheLabel.toLowerCase()} in {c.city}</h2>
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10">
                {c.proofStats.map((stat, i) => (
                  <div key={i} className="p-4 md:p-6 bg-card border border-border/50 rounded-2xl">
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
                <p className="text-lg italic text-foreground mb-3">"{c.proofTestimonial}"</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--highlight))] text-[hsl(var(--highlight))]" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">– {c.proofAuthor}</p>
              </blockquote>
            </div>
          </section>
        </SectionFadeIn>

        {/* 6. DEMO with Lead Form */}
        <SectionFadeIn>
          <section id="demo-section" className="bg-primary/5 px-4 py-16 md:py-24">
            <div className="container max-w-4xl text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                See what's currently missing – <span className="text-primary">for free</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                We show you where you lose clients today, how other {c.nicheLabel.toLowerCase()} in {c.city} get booked, and what can be improved immediately.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                {["Where you lose clients today", `How other ${c.nicheLabel.toLowerCase()} in ${c.city} get booked`, "What can be improved immediately"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-card rounded-xl p-3 border border-border/50">
                    <Check className="w-4 h-4 text-[hsl(var(--success))] flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <NicheLeadForm slug={c.slug} ctaText={`Get your free ${c.service} check`} city={c.city} />
            </div>
          </section>
        </SectionFadeIn>

        {/* 7. GUARANTEE / PRICING */}
        <SectionFadeIn>
          <section className="px-4 py-16 md:py-24">
            <div className="container max-w-3xl text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Simple. Transparent. No risk.</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                You invest in your {c.service} – and you should feel safe doing it.
              </p>
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-10 max-w-md mx-auto">
                <div className="text-sm text-primary font-semibold uppercase tracking-widest mb-2">{c.pricingPackageName}</div>
                <div className="text-4xl md:text-5xl font-bold mb-1">€299</div>
                <div className="text-muted-foreground text-sm mb-6">one-time setup</div>
                <div className="bg-primary/5 rounded-xl p-5 mb-6 text-left">
                  <p className="text-sm leading-relaxed text-foreground">
                    That's why we offer a simple guarantee: <strong>If you're not satisfied within the first 30 days, you get your money back.</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">No questions asked.</p>
                </div>
                <div className="space-y-3 text-left mb-8">
                  {[
                    "Full Google Maps optimization",
                    "Review generation system",
                    "Photo & profile enhancement",
                    "Monthly performance reports",
                    "30-day satisfaction guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[hsl(var(--success))] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="ctaLarge" className="w-full group" onClick={() => trackCta("pricing")}>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  You only continue if you truly see the value.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Most {c.nicheLabel.toLowerCase()} recover the investment with just a few new clients.
                </p>
              </div>
            </div>
          </section>
        </SectionFadeIn>

        {/* 8. FAQ */}
        <SectionFadeIn>
          <section className="bg-background-alt px-4 py-16 md:py-24">
            <div className="container max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Common Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {(c.faqs || []).map((faq, i) => (
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
        </SectionFadeIn>

        {/* 9. WEBSITE ADD-ON */}
        <SectionFadeIn>
          <NicheWebsiteAddon service={c.service} nicheLabel={c.nicheLabel} onRequestClick={() => trackCta("website_addon")} />
        </SectionFadeIn>

        {/* 10. FINAL CTA */}
        <section className="bg-[hsl(var(--pain-bg))] text-[hsl(var(--pain-fg))] px-4 py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">{c.finalHeadline}</h2>
            <p className="text-lg opacity-80 mb-4">Takes 2 minutes. No commitment.</p>
            <p className="text-sm opacity-60 mb-8 flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" />
              {urgencyText}
            </p>
            <Button variant="cta" size="ctaLarge" className="group" onClick={() => trackCta("final_cta")}>
              {c.finalCta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm opacity-70">
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> No contracts</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> No risk</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Results first</span>
            </div>
            <p className="mt-6 text-xs opacity-50">
              <Link to="/" className="hover:underline">Local Dominator</Link> · Marketing for {c.nicheLabel.toLowerCase()} in {c.city}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default NicheLandingPage;
