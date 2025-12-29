import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Smartphone, 
  Settings, 
  ArrowRight,
  Check,
  Star,
  Users,
  TrendingUp,
  Clock,
  Shield,
  ChefHat,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const RestaurantMarketing = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-trust-dark text-trust-dark-foreground overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-action-green/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container max-w-4xl mx-auto text-center relative">
          <Badge 
            className="mb-6 bg-action-green/20 text-action-green border-action-green/40 px-4 py-2 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <Users className="w-4 h-4 mr-2 inline animate-pulse" />
            Bereits 50+ Restaurants in Ihrer Region optimiert
          </Badge>
          
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Verlieren Sie <span className="text-alert-orange">heute Abend wieder</span>{" "}
            <span className="relative inline-block">
              3-4 volle Tische
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-alert-orange/50 rounded-full" />
            </span>{" "}
            an die Konkurrenz?
          </h1>
          
          <p 
            className="text-lg md:text-xl text-trust-dark-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <strong>90% der Gäste entscheiden am Handy</strong>, wo sie essen gehen.{" "}
            <span className="text-alert-orange font-semibold">Wenn Ihre Karte dort nicht lädt, gehen sie woanders hin.</span>
          </p>
          
          <Button 
            size="lg" 
            className="bg-action-green hover:bg-action-green/90 text-action-green-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-action-green/40 cta-pulse hover:scale-105 transition-transform animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Gratis: Ihr Restaurant-Potenzial in 5 Min
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p 
            className="mt-4 text-sm text-trust-dark-foreground/70 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            ✓ Unverbindlich • ✓ Keine Kosten • ✓ In 24h Ergebnis
          </p>
        </div>
      </section>

      {/* Agitation Section - Split Screen Comparison */}
      <section id="comparison" className="px-4 py-16 md:py-24 bg-gradient-to-b from-trust-dark/50 to-trust-dark">
        <div className="container max-w-5xl mx-auto">
          <h2 
            className={`text-2xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
              visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Der Unterschied, den <span className="text-action-green">Ihre Gäste sehen</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Problem Side */}
            <Card 
              className={`bg-alert-orange/10 border-alert-orange/40 overflow-hidden hover-lift group transition-all duration-700 ${
                visibleSections.has('comparison') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-alert-orange animate-flicker" />
                  <span className="text-alert-orange font-bold text-sm uppercase tracking-wide">
                    Das Problem
                  </span>
                </div>
                
                <div className="bg-trust-dark rounded-xl p-4 mb-6 border border-alert-orange/30 group-hover:border-alert-orange/50 transition-colors">
                  <div className="aspect-[9/16] max-h-64 bg-trust-dark/80 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:animate-shake">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trust-dark/50" />
                    <div className="text-center p-4 blur-[2px] opacity-50">
                      <div className="w-full h-3 bg-trust-dark-foreground/20 rounded mb-2" />
                      <div className="w-3/4 h-3 bg-trust-dark-foreground/20 rounded mb-2 mx-auto" />
                      <div className="w-1/2 h-3 bg-trust-dark-foreground/20 rounded mx-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-alert-orange font-bold px-3 py-1.5 bg-alert-orange/30 rounded-full animate-flicker border border-alert-orange/50">
                        PDF lädt nicht...
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-trust-dark-foreground/90 text-center font-medium">
                  Ihre aktuelle Seite?{" "}
                  <span className="text-alert-orange font-bold">Gäste sind genervt.</span>
                </p>
              </CardContent>
            </Card>

            {/* Solution Side */}
            <Card 
              className={`bg-action-green/10 border-action-green/40 overflow-hidden hover-lift group transition-all duration-700 ${
                visibleSections.has('comparison') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-action-green animate-pulse" />
                  <span className="text-action-green font-bold text-sm uppercase tracking-wide">
                    Die Lösung
                  </span>
                </div>
                
                <div className="bg-trust-dark rounded-xl p-4 mb-6 border border-action-green/30 group-hover:border-action-green/50 group-hover:shadow-lg group-hover:shadow-action-green/20 transition-all">
                  <div className="aspect-[9/16] max-h-64 bg-gradient-to-b from-trust-dark to-trust-dark/80 rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-action-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <ChefHat className="w-8 h-8 text-action-green mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-center mb-4">
                      <p className="font-bold text-sm mb-1">Ristorante Milano</p>
                      <div className="flex items-center justify-center gap-1 text-yellow-400 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 w-full px-2">
                      <div className="h-2 bg-trust-dark-foreground/30 rounded w-full" />
                      <div className="h-2 bg-trust-dark-foreground/20 rounded w-3/4" />
                    </div>
                    <Button size="sm" className="mt-4 bg-action-green text-xs px-4 shadow-md shadow-action-green/30">
                      Tisch reservieren
                    </Button>
                  </div>
                </div>
                
                <p className="text-trust-dark-foreground/90 text-center font-medium">
                  Was Gäste wollen:{" "}
                  <span className="text-action-green font-bold">Schnell & übersichtlich.</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p 
            className={`text-center mt-10 text-lg md:text-xl text-alert-orange font-bold transition-all duration-700 ${
              visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            ⚠️ Ein Gast gibt Ihnen keine zweite Chance. Er klickt einfach weiter.
          </p>
        </div>
      </section>

      {/* ROI Calculation Section */}
      <section id="roi" className="px-4 py-16 md:py-24 bg-gradient-to-b from-roi-bg to-trust-dark">
        <div className="container max-w-3xl mx-auto">
          <Card 
            className={`bg-trust-dark border-action-green/60 shadow-2xl shadow-action-green/20 transition-all duration-700 ${
              visibleSections.has('roi') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-2 justify-center mb-8">
                <TrendingUp className="w-7 h-7 text-action-green" />
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  So schnell macht sich's bezahlt
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-action-green/15 rounded-xl border border-action-green/30 hover:border-action-green/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-action-green/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-action-green" />
                    </div>
                    <span className="font-medium">1 gewonnener Tisch (4 Personen)</span>
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-action-green">
                    ~<AnimatedCounter target={100} suffix="€" />
                  </span>
                </div>
                
                <div className="flex items-center justify-center text-3xl font-bold text-trust-dark-foreground/40">
                  −
                </div>
                
                <div className="flex items-center justify-between p-5 bg-trust-dark-foreground/5 rounded-xl border border-trust-dark-foreground/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-trust-dark-foreground/10 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-trust-dark-foreground/70" />
                    </div>
                    <span className="font-medium">Unsere Optimierung</span>
                  </div>
                  <span className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter target={49} suffix="€/Monat" />
                  </span>
                </div>
                
                <div className="flex items-center justify-center text-3xl font-bold text-trust-dark-foreground/40">
                  =
                </div>
                
                <div 
                  className={`p-6 bg-action-green/25 rounded-xl border-2 border-action-green text-center relative overflow-hidden transition-all duration-500 ${
                    visibleSections.has('roi') ? 'shadow-lg shadow-action-green/30' : ''
                  }`}
                >
                  {/* Success glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-action-green/0 via-action-green/10 to-action-green/0 animate-shimmer" />
                  
                  <Check className={`w-12 h-12 text-action-green mx-auto mb-3 transition-all duration-500 ${
                    visibleSections.has('roi') ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                  }`} style={{ transitionDelay: '0.5s' }} />
                  <p className="text-xl md:text-2xl font-bold relative z-10">
                    Bereits ab dem <span className="text-action-green">ersten zusätzlichen Gast</span> machen Sie Gewinn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section - Benefit-Led */}
      <section id="services" className="px-4 py-16 md:py-24 bg-trust-dark">
        <div className="container max-w-4xl mx-auto">
          <h2 
            className={`text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-700 ${
              visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Was Sie <span className="text-action-green">bekommen</span>
          </h2>
          <p 
            className={`text-center text-trust-dark-foreground/70 mb-12 max-w-xl mx-auto transition-all duration-700 ${
              visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Keine technischen Details – nur Ergebnisse, die zählen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Platz 1 bei "Italiener in der Nähe"',
                desc: 'Gefunden werden, wenn Gäste hungrig sind.',
                delay: '0.2s'
              },
              {
                icon: Smartphone,
                title: 'Speisekarte, die auf jedem Handy sofort lädt',
                desc: 'Keine PDFs, keine Wartezeit, keine genervten Gäste.',
                delay: '0.3s'
              },
              {
                icon: Settings,
                title: 'Technik, die einfach funktioniert',
                desc: 'Nie wieder Updates machen oder sich um Hosting kümmern.',
                delay: '0.4s'
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className={`bg-trust-dark-foreground/5 border-trust-dark-foreground/20 hover:border-action-green/60 hover:bg-action-green/5 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-action-green/10 ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: service.delay }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-action-green/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-action-green/20 group-hover:scale-110 transition-all">
                    <service.icon className="w-8 h-8 text-action-green group-hover:rotate-6 transition-transform" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-action-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-trust-dark-foreground/70 text-sm">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Scarcity */}
      <section id="pricing" className="px-4 py-16 md:py-24 bg-gradient-to-b from-trust-dark/50 to-trust-dark">
        <div className="container max-w-4xl mx-auto">
          <h2 
            className={`text-2xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
              visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Investition in <span className="text-action-green">Ihren Erfolg</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card 
              className={`bg-trust-dark border-trust-dark-foreground/30 hover:border-trust-dark-foreground/50 transition-all duration-700 hover-lift ${
                visibleSections.has('pricing') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <CardContent className="p-8">
                <p className="text-sm uppercase tracking-wide text-trust-dark-foreground/60 mb-2 font-semibold">
                  Einmalig
                </p>
                <h3 className="text-xl font-bold mb-4">Starter-Paket</h3>
                <p className="text-4xl font-bold mb-6">
                  <AnimatedCounter target={250} suffix="€" />
                  <span className="text-lg font-normal text-trust-dark-foreground/60"> Setup</span>
                </p>
                <ul className="space-y-3 text-sm text-trust-dark-foreground/80">
                  {['Website-Erstellung', 'Digitale Speisekarte', 'Google Maps Optimierung'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-action-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card 
              className={`bg-action-green/10 border-action-green relative overflow-hidden hover:shadow-2xl hover:shadow-action-green/30 transition-all duration-700 hover-lift ${
                visibleSections.has('pricing') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {/* Shine effect on badge */}
              <div className="absolute top-0 right-0 bg-action-green text-action-green-foreground px-4 py-1.5 text-xs font-bold overflow-hidden">
                <span className="relative z-10">⭐ Empfohlen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
              </div>
              <CardContent className="p-8 pt-10">
                <p className="text-sm uppercase tracking-wide text-action-green mb-2 font-bold">
                  Monatlich
                </p>
                <h3 className="text-xl font-bold mb-4">Growth-Abo</h3>
                <p className="text-4xl font-bold mb-6">
                  <AnimatedCounter target={49} suffix="€" />
                  <span className="text-lg font-normal text-trust-dark-foreground/60"> /Monat</span>
                </p>
                <ul className="space-y-3 text-sm text-trust-dark-foreground/80">
                  {['Hosting & Wartung', 'Monatliche Updates', 'Persönlicher Support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-action-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div 
            className={`text-center mt-10 transition-all duration-700 ${
              visibleSections.has('pricing') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <Badge className="bg-alert-orange/25 text-alert-orange border-alert-orange/50 px-6 py-2.5 text-sm font-bold shadow-lg shadow-alert-orange/20">
              <Clock className="w-4 h-4 mr-2 inline animate-pulse" />
              🔥 Nur noch 3 Neukunden-Plätze diesen Monat verfügbar
            </Badge>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="px-4 py-16 md:py-24 bg-gradient-to-b from-trust-dark to-trust-dark/90">
        <div className="container max-w-3xl mx-auto text-center">
          <Shield 
            className={`w-14 h-14 text-action-green mx-auto mb-6 transition-all duration-700 ${
              visibleSections.has('trust') ? 'opacity-100 translate-y-0 animate-bounce-subtle' : 'opacity-0 translate-y-8'
            }`}
          />
          <h2 
            className={`text-2xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              visibleSections.has('trust') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Kein Callcenter. <span className="text-action-green">Ihr Partner vor Ort.</span>
          </h2>
          <p 
            className={`text-trust-dark-foreground/80 mb-8 max-w-xl mx-auto text-lg transition-all duration-700 ${
              visibleSections.has('trust') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Ich bin kein anonymer Dienstleister, sondern Ihr persönlicher Ansprechpartner. 
            Bei Fragen erreichen Sie mich direkt – <strong className="text-action-green">keine Warteschleifen, keine Tickets.</strong>
          </p>
          
          <div 
            className={`flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-trust-dark-foreground/5 via-action-green/5 to-trust-dark-foreground/5 rounded-2xl max-w-sm mx-auto border border-action-green/20 hover:border-action-green/40 transition-all duration-500 hover:shadow-lg hover:shadow-action-green/10 ${
              visibleSections.has('trust') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-action-green to-action-green/50 flex items-center justify-center text-2xl font-bold shadow-lg shadow-action-green/30 animate-pulse-slow">
              JD
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Johannes Döring</p>
              <p className="text-sm text-action-green font-medium">Ihr lokaler Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="px-4 py-16 md:py-24 bg-gradient-to-b from-action-green/10 to-action-green/20">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 
            className={`text-2xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Bereit, <span className="text-action-green">mehr Gäste</span> zu gewinnen?
          </h2>
          <p 
            className={`text-trust-dark-foreground/80 mb-8 text-lg transition-all duration-700 ${
              visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Fordern Sie jetzt Ihre kostenlose Umsatz-Analyse an und erfahren Sie, 
            wie viel Potenzial in Ihrem Restaurant steckt.
          </p>
          
          <Button 
            size="lg" 
            className={`bg-action-green hover:bg-action-green/90 text-action-green-foreground px-10 py-6 text-lg font-bold shadow-xl shadow-action-green/40 cta-pulse hover:scale-105 transition-all duration-300 ${
              visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Jetzt Analyse anfordern
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Link 
            to="/" 
            className={`block mt-8 text-trust-dark-foreground/60 hover:text-action-green transition-colors font-medium ${
              visibleSections.has('cta') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            ← Zurück zur Hauptseite
          </Link>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-trust-dark/95 backdrop-blur-lg border-t border-action-green/30 p-3 flex gap-3 md:hidden z-50 shadow-2xl shadow-action-green/20">
        <Button 
          className="flex-1 bg-action-green hover:bg-action-green/90 text-action-green-foreground font-bold shadow-lg shadow-action-green/30 cta-pulse"
          asChild
        >
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-trust-dark-foreground/40 text-trust-dark-foreground hover:bg-trust-dark-foreground/10 font-semibold"
          asChild
        >
          <a href="tel:+491234567890">
            <Phone className="w-5 h-5 mr-2" />
            Anrufen
          </a>
        </Button>
      </div>
      
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default RestaurantMarketing;
