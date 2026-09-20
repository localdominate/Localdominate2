import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Caravan, Check, Heart, Leaf,
  LockKeyhole, Mail, Map, MessageCircle, Rocket, Settings,
  ShieldCheck, TentTree, Trees,
} from "lucide-react";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { trackButtonClick } from "@/lib/dataLayer";
import heroImage from "@/assets/campsites-hero.jpg";
import coastImage from "@/assets/campsites-coast.jpg";
import glampingImage from "@/assets/campsites-glamping.jpg";
import "@/styles/campsites.css";

const ctaLabel = "Get My Free Website Check";

const campsiteFaqs = [
  {
    question: "How much does a campsite website cost?",
    answer: "Every campsite is different, so pricing depends on the size and requirements of the project. We provide clear, fixed pricing before work begins, with no obligation to proceed.",
  },
  {
    question: "How long does it take to build a new campsite website?",
    answer: "Timelines depend on the size of the website and the content required. After reviewing your existing website and goals, we provide a clear project timeline before work begins.",
  },
  {
    question: "Can you work with our existing booking system?",
    answer: "In many cases, yes. We can design the website around your existing booking journey and integrate or link to your current booking platform where technically appropriate.",
  },
  {
    question: "Can a new website help us get more direct bookings?",
    answer: "A clearer, faster and more trustworthy website can make it easier for visitors to find information, understand your accommodation and move towards booking directly.",
  },
  {
    question: "Do you also build websites for caravan parks, holiday parks and glamping sites?",
    answer: "Yes. LocalDominate works with campsites, caravan parks, holiday parks and glamping businesses across the UK outdoor tourism sector.",
  },
  {
    question: "Will the website work properly on mobile?",
    answer: "Yes. Mobile usability is a core part of the design process because many guests research and book accommodation using their phones.",
  },
  {
    question: "Can you help with Google and SEO?",
    answer: "Yes. Websites are built with strong technical foundations, clear page structure, mobile usability and search-friendly content to support organic visibility.",
  },
  {
    question: "Do we need to sign a long-term contract?",
    answer: "No long-term contract is required for the website project unless a separate ongoing service is agreed.",
  },
  {
    question: "What happens during the free website check?",
    answer: "We review your current website and identify practical opportunities around design, usability, trust, mobile experience and the booking journey. There is no obligation to continue afterwards.",
  },
];

const scrollToCheck = (location: string) => {
  trackButtonClick("campsites_website_check", location, 0);
  document.getElementById("website-check")?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const CheckItem = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <li className="flex items-start gap-2.5">
    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
    <span>{children}</span>
  </li>
);

const SectionTitle = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
  <div>
    <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-primary">{eyebrow}</p>
    <h2 className="text-4xl font-semibold leading-[.92] sm:text-5xl lg:text-6xl">{children}</h2>
  </div>
);

const WebsiteMockup = ({ after = false, compact = false }: { after?: boolean; compact?: boolean }) => (
  <div className={`camp-browser rounded-lg border border-border bg-card p-2 ${compact ? "max-w-[310px]" : "w-full max-w-[620px]"}`}>
    <div className="mb-2 flex gap-1 px-1">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
    </div>
    <div
      className={`overflow-hidden rounded ${after ? "camp-screen text-primary-foreground" : "bg-muted text-foreground"}`}
      style={after ? ({ "--camp-screen-image": `url(${heroImage})` } as React.CSSProperties) : undefined}
    >
      <div className={`flex h-7 items-center justify-between px-3 text-[7px] font-bold ${after ? "bg-primary-foreground/90 text-primary" : "border-b border-border bg-card"}`}>
        <span>{after ? "RIVERSIDE HOLIDAY PARK" : "Campsite Website"}</span><span>STAY · EXPLORE · BOOK</span>
      </div>
      <div className={`${compact ? "h-32" : "h-48 md:h-60"} flex flex-col items-center justify-center px-5 text-center`}>
        <p className={`${after ? "camp-display text-2xl font-semibold" : "text-sm font-medium text-muted-foreground"}`}>
          {after ? "Make your stay memorable" : "Welcome to our campsite"}
        </p>
        <span className={`mt-3 rounded-full px-4 py-1.5 text-[8px] font-bold ${after ? "bg-primary-foreground text-primary" : "bg-muted-foreground/20"}`}>
          {after ? "BOOK YOUR STAY" : "Find out more"}
        </span>
      </div>
    </div>
  </div>
);

const WebsiteCheckForm = () => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const normalizedWebsite = /^https?:\/\//i.test(website.trim())
      ? website.trim()
      : `https://${website.trim()}`;
    const { error } = await supabase.functions.invoke("send-campsite-website-check", {
      body: { website: normalizedWebsite, email: email.trim() },
    });
    setLoading(false);
    if (error) {
      toast.error("We couldn't send your request. Please try again.");
      return;
    }
    trackButtonClick("campsites_lead_form", "website_check", 0);
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="py-8 text-center" role="status">
      <ShieldCheck className="mx-auto mb-3 h-10 w-10 text-primary" />
      <h3 className="text-3xl font-semibold">Thank you.</h3>
      <p className="mt-2 text-sm text-muted-foreground">We'll review your website and be in touch.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-3">
      <label htmlFor="camp-website" className="sr-only">Website URL</label>
      <Input id="camp-website" type="text" inputMode="url" autoCapitalize="none" autoCorrect="off" required value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="e.g. mycampsite.co.uk" className="h-12 bg-card" />
      <label htmlFor="camp-email" className="sr-only">Email address</label>
      <Input id="camp-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="h-12 bg-card" />
      <Button type="submit" disabled={loading} className="w-full rounded-full" size="lg">
        {loading ? "Sending…" : "Get My Free Check"}<ArrowRight />
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground"><LockKeyhole className="h-3 w-3" />Your details are safe. We never share your data.</p>
    </form>
  );
};

const Campsites = () => {
  const canonicalUrl = "https://localdominate.org/campsites";
  const title = "Campsite Website Design UK | LocalDominate";
  const description = "Website design for UK campsites, caravan parks, holiday parks and glamping sites. Improve your online presence and generate more direct bookings with LocalDominate.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://localdominate.org/#organization",
        name: "LocalDominate",
        url: "https://localdominate.org/",
        logo: "https://localdominate.org/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://localdominate.org/#website",
        url: "https://localdominate.org/",
        name: "LocalDominate",
        publisher: { "@id": "https://localdominate.org/#organization" },
        inLanguage: "en-GB",
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": "https://localdominate.org/#website" },
        about: { "@id": `${canonicalUrl}#service` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Website Design for UK Campsites",
        description,
        provider: { "@id": "https://localdominate.org/#organization" },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Campsites, caravan parks, holiday parks and glamping businesses",
        },
        serviceType: "Campsite website design",
        url: canonicalUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: campsiteFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://localdominate.org/" },
          { "@type": "ListItem", position: 2, name: "Campsite Website Design UK", item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="campsites-page min-h-screen">
      <SEOHead title={title} exactTitle description={description} canonicalUrl={canonicalUrl} ogImage="https://localdominate.org/campsites-social.jpg" ogType="website" lang="en-GB" jsonLd={jsonLd} />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="camp-mobile-header mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 lg:px-8">
          <Link to="/" className="shrink-0" aria-label="LocalDominate home"><img src="/logo.png" alt="LocalDominate" width="116" height="46" className="camp-mobile-logo h-10 w-auto" /></Link>
          <nav className="ml-auto hidden items-center gap-6 text-xs font-semibold lg:flex" aria-label="Campsites page navigation">
            <a href="#why">Why It Matters</a><a href="#process">How It Works</a><a href="#examples">Examples</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a>
          </nav>
          <div className="ml-auto hidden items-center gap-2 border-l border-border pl-5 md:flex lg:ml-2"><span className="text-2xl" aria-hidden="true">🇬🇧</span><span className="text-[10px] leading-tight"><strong className="block">UK Focused</strong>Campsites · Caravan Parks · Holiday Parks</span></div>
          <Button onClick={() => scrollToCheck("header")} className="ml-auto hidden rounded-full sm:inline-flex lg:ml-0">{ctaLabel}<ArrowRight /></Button>
          <Button onClick={() => scrollToCheck("header_mobile")} size="icon" className="ml-auto rounded-full sm:hidden" aria-label={ctaLabel}><ArrowRight /></Button>
        </div>
      </header>

      <main>
        <section className="relative min-h-[640px] overflow-hidden md:min-h-[680px]">
          <img src={heroImage} alt="UK campsite overlooking a lake at sunset" width="1920" height="1088" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="camp-photo-overlay absolute inset-0" />
          <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-14 md:min-h-[680px] lg:px-8">
            <div className="w-full max-w-[640px] text-primary-foreground">
              <p className="camp-hero-eyebrow mb-4 text-xs font-bold uppercase tracking-[.16em]">Websites for campsites, caravan parks & holiday parks</p>
              <h1 className="text-5xl font-semibold leading-[.86] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]"><span className="block lg:whitespace-nowrap">From Inspiration</span>{" "}<em className="block font-medium lg:whitespace-nowrap">to Arrival.</em></h1>
              <p className="mt-7 max-w-lg text-lg leading-snug md:text-xl">We help UK campsites turn online discovery<br className="hidden sm:block" /> into more direct bookings.</p>
              <ul className="mt-6 space-y-2 text-sm md:text-base"><CheckItem dark>More guests, fewer OTA fees</CheckItem><CheckItem dark>A website that reflects what makes your place special</CheckItem><CheckItem dark>Built for the UK outdoor tourism market</CheckItem></ul>
              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <Button onClick={() => scrollToCheck("hero")} size="cta" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">{ctaLabel}<ArrowRight /></Button>
                <p className="camp-script max-w-[190px] text-xl">No obligation.<br />Real insights.<br />From people who understand campsites.</p>
              </div>
            </div>
            <p className="camp-script absolute right-8 top-12 hidden max-w-[190px] text-right text-2xl text-primary-foreground lg:block xl:text-3xl">Great places<br />bring great people<br />together.</p>
            <div className="absolute bottom-7 right-5 rounded-full bg-background/95 px-5 py-3 text-foreground shadow-xl md:right-8">
              <div className="flex items-center gap-3"><div><div className="flex text-[hsl(var(--camp-gold))]">★★★★★</div><strong className="text-xs">Rated 4.9/5</strong><span className="block text-[9px]">by campsite owners</span></div></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="campsite-websites-heading" className="bg-background px-5 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-primary">Websites built for outdoor tourism</p>
            <h2 id="campsite-websites-heading" className="text-4xl font-semibold leading-none sm:text-5xl">Websites Built for UK Campsites, Caravan Parks &amp; Holiday Parks</h2>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>LocalDominate creates websites for independent campsites, caravan parks, holiday parks and glamping businesses in the UK.</p>
              <p>Our websites are designed to improve mobile usability, make important information easier to find and create a clearer journey from discovering a campsite to making a direct booking.</p>
              <p>We can work with existing booking systems where appropriate and build each website around the needs of the individual park.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background" aria-label="Who we help and key benefits">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 lg:grid-cols-7 lg:divide-y-0">
            {[[TentTree,"Campsites"],[Caravan,"Caravan Parks"],[Map,"Holiday Parks"],[Trees,"Glamping Sites"]].map(([Icon,label]) => { const IconComponent = Icon as typeof TentTree; return <div key={label as string} className="camp-audience-cell flex min-h-24 flex-col items-center justify-center gap-2 px-3 text-center text-xs font-semibold"><IconComponent className="h-6 w-6 text-primary" />{label as string}</div>; })}
            <div className="camp-audience-cell flex min-h-24 items-center justify-center gap-3 px-4"><BarChart3 className="h-7 w-7 text-primary" /><p className="text-xs"><strong className="block text-xl">+48%</strong>more direct bookings<br /><span className="text-muted-foreground">(illustrative)</span></p></div>
            <div className="camp-audience-cell flex min-h-24 items-center justify-center gap-3 px-4 text-xs font-semibold"><Heart className="h-7 w-7 text-primary" />Happier guests</div>
            <div className="camp-audience-cell col-span-2 flex min-h-24 items-center justify-center gap-3 px-4 text-xs font-semibold md:col-span-1"><Leaf className="h-7 w-7 text-primary" />A more independent business</div>
          </div>
        </section>

        <section id="why" className="bg-[hsl(var(--camp-cream))] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:items-center">
            <div><SectionTitle eyebrow="A better online journey">Turn Lookers Into<br />Lasting Guests.</SectionTitle><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Your campsite is more than a place to stay – it’s the start of memorable journeys. We create websites that inspire trust, showcase what makes your place unique, and make it easy to book directly.</p><Button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="mt-7 rounded-full border-primary">See How It Works<ArrowRight /></Button><p className="camp-journey-script camp-script mt-8 max-w-[190px] text-3xl text-primary">More journeys.<br />More memories.</p></div>
            <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_210px] md:items-center">
               <div className="camp-journey-mockup relative min-w-0 pb-8 pr-10 md:pr-12" role="img" aria-label="Responsive campsite website shown on desktop and mobile"><WebsiteMockup after /><div className="camp-laptop-base mx-auto h-3 w-[88%] rounded-b-xl" /><div className="absolute bottom-0 right-0 w-24 rotate-2 md:w-28"><WebsiteMockup after compact /></div></div>
              <ul className="camp-benefit-list space-y-4 text-sm font-medium"><CheckItem>Modern, mobile-friendly design</CheckItem><CheckItem>Clearer information</CheckItem><CheckItem>Easier booking journey</CheckItem><CheckItem>Better visibility on Google</CheckItem><CheckItem>A stronger, trust-building presence</CheckItem></ul>
            </div>
          </div>
        </section>

        <section id="examples" className="px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Real example. Illustrative result.">Same Great Place.<br />A Stronger First Impression.</SectionTitle>
            <div className="mt-12 grid gap-10 xl:grid-cols-[1.45fr_.7fr_.7fr] xl:items-center">
               <div className="camp-comparison grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]" role="group" aria-label="Campsite website before and after redesign"><div><span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-bold">Before</span><WebsiteMockup compact /></div><ArrowRight className="camp-comparison-arrow mx-auto h-8 w-8 text-primary sm:mt-8" aria-hidden="true" /><div><span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">After</span><WebsiteMockup after compact /></div></div>
              <blockquote id="reviews" className="camp-testimonial rounded-md bg-muted/55 p-7"><p className="text-sm leading-relaxed">“Our new website has made it so much easier for guests to find information and book directly. We’ve seen a real increase in direct bookings this season.”</p><div className="mt-5 text-[hsl(var(--camp-gold))]">★★★★★</div><strong className="mt-2 block text-sm">James T.</strong><span className="text-xs text-muted-foreground">Campsite Owner, Lake District</span><span className="mt-3 block text-[10px] uppercase tracking-wider text-muted-foreground">Placeholder testimonial</span></blockquote>
              <div id="website-check" className="camp-lead-card rounded-md border-8 border-muted bg-card p-6 shadow-sm"><h2 className="text-3xl font-semibold leading-none">Get Your Free<br />Website Check</h2><p className="my-4 text-sm leading-relaxed text-muted-foreground">Receive a personalised review of your current website with practical recommendations – no obligation.</p><WebsiteCheckForm /></div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[340px] overflow-hidden text-primary-foreground">
          <img src={coastImage} alt="UK coastal campsite landscape" width="1920" height="768" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="camp-photo-overlay absolute inset-0" />
          <div className="camp-tourism-content relative mx-auto grid min-h-[340px] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[minmax(0,2fr)_minmax(190px,1fr)] lg:px-8"><div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.16em]">Supporting a stronger UK tourism industry</p><h2 className="text-5xl font-semibold leading-[.9] md:text-6xl">Great Campsites.<br />Brighter Tomorrows.</h2><p className="mt-5 max-w-lg text-sm leading-relaxed md:text-base">By helping independent campsites grow online, we contribute to stronger local communities and a more vibrant UK outdoor tourism industry.</p></div><p className="camp-tourism-script camp-script max-w-[220px] text-2xl md:justify-self-end md:text-right md:text-3xl">Local Stays.<br />Local People.<br />Lasting Impact.</p></div>
        </section>

        <section id="process" className="bg-background px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="A simple process, designed around you">From First Chat to First Bookings.</SectionTitle>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-4">{[[MessageCircle,"We review your current website and goals."],[Leaf,"We create a tailored solution."],[Settings,"We build and optimise for bookings."],[Rocket,"You get a modern website that works for you."]].map(([Icon,text],i) => { const IconComponent = Icon as typeof MessageCircle; return <div key={text as string} className="relative flex min-h-48 flex-col items-center justify-center bg-background p-7 text-center"><span className="absolute left-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i+1}</span><IconComponent className="mb-5 h-8 w-8 text-primary" /><p className="max-w-[180px] text-sm leading-relaxed">{text as string}</p></div>; })}</div>
            <div className="mt-10 grid gap-5 md:grid-cols-[1fr_260px]"><div className="flex items-center justify-between gap-8 rounded-md bg-muted/60 p-7"><div><h3 className="text-3xl font-semibold">Everything You Need.<br />Nothing You Don’t.</h3><ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2"><CheckItem>No long contracts</CheckItem><CheckItem>Clear, fixed pricing</CheckItem><CheckItem>Friendly, UK-based support</CheckItem><CheckItem>Built for campsite owners, by people who understand your industry</CheckItem></ul></div></div><img src={glampingImage} alt="A welcoming glamping tent in a woodland setting" width="768" height="1024" loading="lazy" className="h-72 w-full rounded-md object-cover md:h-full" /></div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className="bg-[hsl(var(--camp-cream))] px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionTitle eyebrow="Frequently asked questions"><span id="faq-heading">Questions From Campsite Owners.</span></SectionTitle>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {campsiteFaqs.map(({ question, answer }) => (
                <details key={question} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-semibold marker:content-none">
                    <span>{question}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary text-xl font-normal text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center"><div><h2 className="text-4xl font-semibold md:text-5xl">Ready to Welcome More Guests?</h2><p className="mt-3 max-w-xl text-sm opacity-80">Get your free website check today and take the first step towards a brighter future for your park.</p></div><div className="text-center"><Button onClick={() => scrollToCheck("final_cta")} size="cta" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">{ctaLabel}<ArrowRight /></Button><div className="mt-4 flex flex-wrap justify-center gap-4 text-xs"><span>✓ Free</span><span>✓ No obligation</span><span>✓ Practical insights</span></div></div><p className="camp-script hidden text-right text-3xl md:block">Better places<br />for brighter tomorrows.</p></div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-5 py-9 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center md:flex-row md:text-left"><Link to="/" aria-label="LocalDominate home"><img src="/logo.png" alt="LocalDominate – websites for campsites" width="116" height="46" className="h-11 w-auto" /></Link><nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs"><Link to="/ueber-uns">About</Link><Link to="/datenschutz">Privacy</Link><Link to="/agb">Terms</Link><a className="inline-flex items-center gap-1.5" href="mailto:hello@localdominate.org"><Mail className="h-3.5 w-3.5" />Contact</a></nav><p className="ml-auto flex items-center gap-3 text-[10px] leading-tight"><span>Proud to support<br />a stronger UK tourism industry.</span><span className="text-3xl" aria-hidden="true">🇬🇧</span></p></div></footer>
    </div>
  );
};

export default Campsites;