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
  ChefHat
} from "lucide-react";
import { Link } from "react-router-dom";

const RestaurantMarketing = () => {
  return (
    <div className="min-h-screen bg-trust-dark text-trust-dark-foreground">
      {/* Hero Section */}
      <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-action-green/20 text-action-green border-action-green/30 px-4 py-1.5">
            <Users className="w-4 h-4 mr-2 inline" />
            Bereits 50+ Restaurants in Ihrer Region optimiert
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Verlieren Sie jeden Abend{" "}
            <span className="text-alert-orange">3-4 Tische</span>{" "}
            an die Konkurrenz?
          </h1>
          
          <p className="text-lg md:text-xl text-trust-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            90% der Gäste checken das Handy, bevor sie essen gehen. 
            <strong className="text-alert-orange"> Wenn Ihre Karte dort nicht lädt, gehen sie woanders hin.</strong>
          </p>
          
          <Button 
            size="lg" 
            className="bg-action-green hover:bg-action-green/90 text-action-green-foreground px-8 py-6 text-lg font-semibold animate-pulse hover:animate-none shadow-lg shadow-action-green/30"
          >
            Kostenlose Umsatz-Analyse anfordern
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="mt-4 text-sm text-trust-dark-foreground/60">
            Unverbindlich • Keine Kosten • In 24h Ergebnis
          </p>
        </div>
      </section>

      {/* Agitation Section - Split Screen Comparison */}
      <section className="px-4 py-16 md:py-24 bg-trust-dark/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Der Unterschied, den Ihre Gäste sehen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Problem Side */}
            <Card className="bg-alert-orange/10 border-alert-orange/30 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-alert-orange animate-pulse" />
                  <span className="text-alert-orange font-semibold text-sm uppercase tracking-wide">
                    Das Problem
                  </span>
                </div>
                
                <div className="bg-trust-dark rounded-xl p-4 mb-6 border border-alert-orange/20">
                  <div className="aspect-[9/16] max-h-64 bg-trust-dark/80 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trust-dark/50" />
                    <div className="text-center p-4 blur-[2px] opacity-50">
                      <div className="w-full h-3 bg-trust-dark-foreground/20 rounded mb-2" />
                      <div className="w-3/4 h-3 bg-trust-dark-foreground/20 rounded mb-2 mx-auto" />
                      <div className="w-1/2 h-3 bg-trust-dark-foreground/20 rounded mx-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-alert-orange font-medium px-3 py-1 bg-alert-orange/20 rounded-full">
                        PDF lädt nicht...
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-trust-dark-foreground/80 text-center font-medium">
                  Ihre aktuelle Seite?{" "}
                  <span className="text-alert-orange">Gäste sind genervt.</span>
                </p>
              </CardContent>
            </Card>

            {/* Solution Side */}
            <Card className="bg-action-green/10 border-action-green/30 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-action-green" />
                  <span className="text-action-green font-semibold text-sm uppercase tracking-wide">
                    Die Lösung
                  </span>
                </div>
                
                <div className="bg-trust-dark rounded-xl p-4 mb-6 border border-action-green/20">
                  <div className="aspect-[9/16] max-h-64 bg-gradient-to-b from-trust-dark to-trust-dark/80 rounded-lg flex flex-col items-center justify-center p-4">
                    <ChefHat className="w-8 h-8 text-action-green mb-3" />
                    <div className="text-center mb-4">
                      <p className="font-semibold text-sm mb-1">Ristorante Milano</p>
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
                    <Button size="sm" className="mt-4 bg-action-green text-xs px-4">
                      Tisch reservieren
                    </Button>
                  </div>
                </div>
                
                <p className="text-trust-dark-foreground/80 text-center font-medium">
                  Was Gäste wollen:{" "}
                  <span className="text-action-green">Schnell & übersichtlich.</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-8 text-lg md:text-xl text-alert-orange font-medium">
            Ein Gast gibt Ihnen keine zweite Chance. Er klickt einfach weiter.
          </p>
        </div>
      </section>

      {/* ROI Calculation Section */}
      <section className="px-4 py-16 md:py-24 bg-roi-bg">
        <div className="container max-w-3xl mx-auto">
          <Card className="bg-trust-dark border-action-green/50 shadow-xl shadow-action-green/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-2 justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-action-green" />
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Die Rechnung ist einfach
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-action-green/10 rounded-xl border border-action-green/20">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-action-green" />
                    <span>1 gewonnener Tisch (4 Personen)</span>
                  </div>
                  <span className="text-2xl font-bold text-action-green">~100€</span>
                </div>
                
                <div className="flex items-center justify-center text-2xl font-bold text-trust-dark-foreground/50">
                  −
                </div>
                
                <div className="flex items-center justify-between p-4 bg-trust-dark-foreground/5 rounded-xl border border-trust-dark-foreground/10">
                  <div className="flex items-center gap-3">
                    <Settings className="w-6 h-6 text-trust-dark-foreground/70" />
                    <span>Unsere Optimierung</span>
                  </div>
                  <span className="text-2xl font-bold">49€/Monat</span>
                </div>
                
                <div className="flex items-center justify-center text-2xl font-bold text-trust-dark-foreground/50">
                  =
                </div>
                
                <div className="p-6 bg-action-green/20 rounded-xl border-2 border-action-green text-center">
                  <Check className="w-10 h-10 text-action-green mx-auto mb-3" />
                  <p className="text-xl md:text-2xl font-bold">
                    Bereits ab dem <span className="text-action-green">ersten zusätzlichen Gast</span> machen Sie Gewinn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section - Benefit-Led */}
      <section className="px-4 py-16 md:py-24 bg-trust-dark">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            Was Sie bekommen
          </h2>
          <p className="text-center text-trust-dark-foreground/60 mb-12 max-w-xl mx-auto">
            Keine technischen Details – nur Ergebnisse, die zählen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-trust-dark-foreground/5 border-trust-dark-foreground/10 hover:border-action-green/50 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="w-10 h-10 text-action-green mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  Platz 1 bei "Italiener in der Nähe"
                </h3>
                <p className="text-trust-dark-foreground/70 text-sm">
                  Gefunden werden, wenn Gäste hungrig sind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-trust-dark-foreground/5 border-trust-dark-foreground/10 hover:border-action-green/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-10 h-10 text-action-green mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  Speisekarte, die auf jedem Handy sofort lädt
                </h3>
                <p className="text-trust-dark-foreground/70 text-sm">
                  Keine PDFs, keine Wartezeit, keine genervten Gäste.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-trust-dark-foreground/5 border-trust-dark-foreground/10 hover:border-action-green/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Settings className="w-10 h-10 text-action-green mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  Technik, die einfach funktioniert
                </h3>
                <p className="text-trust-dark-foreground/70 text-sm">
                  Nie wieder Updates machen oder sich um Hosting kümmern.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section with Scarcity */}
      <section className="px-4 py-16 md:py-24 bg-trust-dark/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Investition in Ihren Erfolg
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="bg-trust-dark border-trust-dark-foreground/20">
              <CardContent className="p-8">
                <p className="text-sm uppercase tracking-wide text-trust-dark-foreground/60 mb-2">
                  Einmalig
                </p>
                <h3 className="text-xl font-bold mb-4">Starter-Paket</h3>
                <p className="text-4xl font-bold mb-6">
                  250€
                  <span className="text-lg font-normal text-trust-dark-foreground/60"> Setup</span>
                </p>
                <ul className="space-y-3 text-sm text-trust-dark-foreground/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Website-Erstellung
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Digitale Speisekarte
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Google Maps Optimierung
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-action-green/10 border-action-green relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-action-green text-action-green-foreground px-4 py-1 text-xs font-semibold">
                Empfohlen
              </div>
              <CardContent className="p-8">
                <p className="text-sm uppercase tracking-wide text-action-green mb-2">
                  Monatlich
                </p>
                <h3 className="text-xl font-bold mb-4">Growth-Abo</h3>
                <p className="text-4xl font-bold mb-6">
                  49€
                  <span className="text-lg font-normal text-trust-dark-foreground/60"> /Monat</span>
                </p>
                <ul className="space-y-3 text-sm text-trust-dark-foreground/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Hosting & Wartung
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Monatliche Updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-action-green" />
                    Persönlicher Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Badge className="bg-alert-orange/20 text-alert-orange border-alert-orange/30 px-6 py-2 text-sm font-semibold animate-pulse">
              <Clock className="w-4 h-4 mr-2 inline" />
              Nur noch 3 Neukunden-Plätze diesen Monat verfügbar
            </Badge>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-16 md:py-24 bg-trust-dark">
        <div className="container max-w-3xl mx-auto text-center">
          <Shield className="w-12 h-12 text-action-green mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Kein Callcenter. Ihr Partner vor Ort.
          </h2>
          <p className="text-trust-dark-foreground/70 mb-8 max-w-xl mx-auto">
            Ich bin kein anonymer Dienstleister, sondern Ihr persönlicher Ansprechpartner. 
            Bei Fragen erreichen Sie mich direkt – keine Warteschleifen, keine Tickets.
          </p>
          
          <div className="flex items-center justify-center gap-4 p-6 bg-trust-dark-foreground/5 rounded-2xl max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-action-green to-action-green/50 flex items-center justify-center text-2xl font-bold">
              JD
            </div>
            <div className="text-left">
              <p className="font-semibold">Johannes Döring</p>
              <p className="text-sm text-trust-dark-foreground/60">Ihr lokaler Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-action-green/10">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Bereit, mehr Gäste zu gewinnen?
          </h2>
          <p className="text-trust-dark-foreground/70 mb-8">
            Fordern Sie jetzt Ihre kostenlose Umsatz-Analyse an und erfahren Sie, 
            wie viel Potenzial in Ihrem Restaurant steckt.
          </p>
          
          <Button 
            size="lg" 
            className="bg-action-green hover:bg-action-green/90 text-action-green-foreground px-10 py-6 text-lg font-semibold shadow-lg shadow-action-green/30"
          >
            Jetzt Analyse anfordern
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Link to="/" className="block mt-8 text-trust-dark-foreground/60 hover:text-trust-dark-foreground transition-colors">
            ← Zurück zur Hauptseite
          </Link>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-trust-dark border-t border-trust-dark-foreground/10 p-3 flex gap-3 md:hidden z-50">
        <Button 
          className="flex-1 bg-action-green hover:bg-action-green/90 text-action-green-foreground font-semibold"
          asChild
        >
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-trust-dark-foreground/30 text-trust-dark-foreground hover:bg-trust-dark-foreground/10"
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
