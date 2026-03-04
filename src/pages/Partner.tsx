import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  MapPin,
  DollarSign,
  Users,
  Briefcase,
  Rocket,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  Star,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  Target,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const formData = {
      full_name: data.get("full_name") as string,
      email: data.get("email") as string,
      country: data.get("country") as string,
      sales_experience: data.get("sales_experience") as string,
      preferred_method: data.get("preferred_method") as string,
      message: data.get("message") as string,
    };

    const { error } = await supabase.from("partner_applications").insert(formData);

    if (error) {
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again.");
      return;
    }

    // Send email notification
    try {
      await supabase.functions.invoke("send-partner-notification", {
        body: formData,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Application submitted! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.03)] via-background to-[hsl(var(--primary)/0.06)] min-h-[90vh] flex items-center">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container max-w-6xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
              <Globe className="w-4 h-4" />
              Now Recruiting Partners Worldwide
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Earn up to{" "}
              <span className="text-primary">€120 per Sale</span>{" "}
              Helping Local Businesses Dominate Google Maps
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              LocalDominate helps restaurants, salons, dentists, cafés, and local businesses improve their visibility on Google Maps. We are expanding our global partner network and are looking for independent sales partners working on commission.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="ctaLarge" className="group text-lg" onClick={scrollToForm}>
                Apply as a Sales Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base" onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}>
                See How It Works
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
              {["No upfront costs", "Work from anywhere", "40% commission"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU WILL SELL */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">The Product</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A Simple Product Businesses Understand Instantly
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">
              Local businesses depend heavily on Google Maps visibility. More than 80% of customers choose businesses from the top 3 search results.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Google Business Profile optimization" },
                { icon: Target, title: "Category & keyword improvements" },
                { icon: Zap, title: "Business description optimization" },
                { icon: Star, title: "Image optimization" },
                { icon: TrendingUp, title: "Local search visibility improvements" },
                { icon: Award, title: "Actionable ranking recommendations" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{item.title}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-6 py-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Client price</p>
                <p className="text-2xl font-bold">€299 <span className="text-base font-normal text-muted-foreground">one-time</span></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YOUR COMMISSION */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Your Earnings</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              High Commission for Every Sale
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Service Price", value: "€299", sub: "per client" },
                { label: "Your Commission", value: "40%", sub: "per sale" },
                { label: "Your Earnings", value: "€120", sub: "per client", highlight: true },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl p-8 text-center border ${item.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
                  <p className={`text-sm font-medium mb-2 ${item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{item.label}</p>
                  <p className="text-4xl md:text-5xl font-bold mb-1">{item.value}</p>
                  <p className={`text-sm ${item.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {[
                { sales: "5 sales / week", earnings: "€600 weekly" },
                { sales: "20 sales / month", earnings: "€2,400 monthly" },
              ].map((item) => (
                <div key={item.sales} className="flex items-center justify-between p-5 rounded-xl border border-border bg-card">
                  <span className="text-muted-foreground">{item.sales}</span>
                  <span className="font-bold text-lg text-primary">{item.earnings}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-6 text-muted-foreground">
              Top partners earn significantly more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Perfect Fit</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ideal for Sales Professionals Who Want Flexible Income
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">
              Work from anywhere in the world. No fixed hours and no limits on earnings.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Phone, label: "Freelance sales representatives" },
                { icon: Target, label: "Cold calling specialists" },
                { icon: TrendingUp, label: "Lead generation professionals" },
                { icon: Briefcase, label: "Marketing freelancers" },
                { icon: Globe, label: "Digital nomads" },
                { icon: Users, label: "Consultants with local business contacts" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Your Toolkit</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              We Provide Everything You Need to Sell
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: "Cold outreach scripts", desc: "Proven scripts that convert prospects into clients" },
                { icon: Mail, title: "Email & WhatsApp templates", desc: "Ready-to-use templates for every channel" },
                { icon: Briefcase, title: "Sales presentation", desc: "A short, compelling deck for client meetings" },
                { icon: Rocket, title: "Onboarding training", desc: "Everything you need to start selling fast" },
                { icon: TrendingUp, title: "Partner dashboard", desc: "Track your sales and commissions in real-time" },
                { icon: Shield, title: "Fast partner support", desc: "Dedicated support to help you succeed" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Process</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
              Simple 3-Step Process
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Find Businesses", desc: "Find local businesses that could benefit from better Google Maps visibility." },
                { step: "02", title: "Introduce the Service", desc: "Introduce the LocalDominate service using our scripts and explain the benefits." },
                { step: "03", title: "Earn Commission", desc: "Once the client signs up, our team handles the optimization work. You earn your commission." },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-7xl md:text-8xl font-bold text-primary/10 absolute -top-6 -left-2">{item.step}</span>
                  <div className="relative pt-12">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY BUSINESSES BUY */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Market Demand</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Businesses Love This Offer
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">
              Local businesses constantly struggle to appear in Google Maps results. Our service offers clear value at an accessible price point.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                "Improved local search visibility",
                "Increased customer discovery",
                "Stronger Google presence",
                "Competitive advantage against nearby businesses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-muted-foreground">
              Because the service costs only <span className="font-semibold text-foreground">€299 once</span>, many businesses decide quickly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Partner Success</motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </motion.div>
            <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic mb-8">
              "LocalDominate is one of the easiest services I've ever sold. Local businesses immediately understand the value of better Google Maps visibility."
            </motion.blockquote>
            <motion.p variants={fadeInUp} className="text-muted-foreground">— Sales Partner</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-primary">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Join our growing network of sales partners worldwide.
          </p>
          <Button
            variant="outline"
            size="ctaLarge"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none text-lg font-bold"
            onClick={scrollToForm}
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section ref={formRef} className="py-20 md:py-28 bg-background" id="apply">
        <div className="container max-w-2xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">Apply Now</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Join the LocalDominate Partner Network
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-12 text-lg">
              We are currently onboarding motivated sales partners worldwide. Fill out the form and our team will contact you shortly.
            </motion.p>

            {submitted ? (
              <motion.div variants={fadeInUp} className="text-center p-12 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Application Received!</h3>
                <p className="text-muted-foreground">Thank you for your interest. Our team will review your application and get back to you within 48 hours.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input id="full_name" name="full_name" required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" placeholder="Germany" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sales_experience">Sales Experience</Label>
                    <Input id="sales_experience" name="sales_experience" placeholder="e.g. 3 years B2B sales" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred_method">Preferred Sales Method</Label>
                  <div className="flex flex-wrap gap-3">
                    {["Calls", "Social", "Both"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferred_method"
                          value={method}
                          defaultChecked={method === "Both"}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell us about your experience and why you'd be a great partner..." />
                </div>

                <Button type="submit" size="ctaLarge" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted about the LocalDominate partner program.
                </p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border bg-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            LocalDominate is building a global partner network helping local businesses improve their online visibility. Partners operate independently and earn commission for successful client referrals.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} LocalDominate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Partner;
