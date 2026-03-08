import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  FileSpreadsheet, 
  Image, 
  MessageSquare,
  QrCode,
  Clock,
  Shield,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { trackConversion } from "@/lib/analyticsStorage";

const DIY_TOOLKIT_URL = "https://buy.stripe.com/diy_toolkit_49";

const toolkitItems = [
  {
    icon: FileText,
    title: "Google Business Checkliste",
    description: "30-Punkte Checkliste für perfekte Profil-Optimierung",
    format: "PDF"
  },
  {
    icon: FileSpreadsheet,
    title: "Keyword-Recherche Vorlage",
    description: "Excel-Template für lokale Keyword-Analyse",
    format: "XLSX"
  },
  {
    icon: Image,
    title: "Foto-Optimierung Guide",
    description: "Anleitung für Google-optimierte Businessfotos",
    format: "PDF"
  },
  {
    icon: MessageSquare,
    title: "Bewertungs-Antwort Templates",
    description: "50+ Vorlagen für professionelle Review-Antworten",
    format: "PDF"
  },
  {
    icon: QrCode,
    title: "QR-Code Generator",
    description: "Vorlage für Bewertungs-QR-Codes",
    format: "PDF + Canva"
  },
  {
    icon: FileText,
    title: "NAP-Konsistenz Tracker",
    description: "Spreadsheet für Branchenverzeichnis-Management",
    format: "XLSX"
  }
];

const bonusItems = [
  "Wettbewerber-Analyse Template",
  "Monatlicher SEO-Report Vorlage",
  "Social Media Content Kalender",
  "Lokale Backlink-Quellen Liste"
];

export default function DIYToolkit() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePurchase = () => {
    trackConversion("stripe_checkout", "diy_toolkit_page", "Jetzt kaufen", 49);
    window.open(DIY_TOOLKIT_URL, "_blank");
  };

  return (
    <>
      <SEOHead 
        title="Local SEO DIY-Toolkit | Checklisten & Vorlagen für 49€"
        description="Das komplette DIY-Toolkit für lokale Suchmaschinenoptimierung: Checklisten, Excel-Vorlagen, Foto-Guides und Bewertungs-Templates. Sofort-Download für nur 49€."
        canonicalUrl="https://localdominator.de/diy-toolkit"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <SiteBreadcrumbs includeSchema className="mb-8" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Download className="w-4 h-4" />
                Sofort-Download
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Das komplette <span className="text-primary">Local SEO</span><br />
                DIY-Toolkit
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Alle Checklisten, Vorlagen und Templates die du brauchst, 
                um dein Google Business Profil selbst zu optimieren.
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">von 200+ zufriedenen Kunden</span>
              </div>
            </motion.div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <Card className="border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <span className="text-muted-foreground line-through text-lg">99€</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-primary">49</span>
                      <span className="text-2xl text-primary">€</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Einmalzahlung • Sofort-Download</span>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6 mb-4 group"
                    onClick={handlePurchase}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Jetzt kaufen & downloaden
                    <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Sichere Zahlung
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Sofort-Zugang
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Das ist alles enthalten
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Über 100 Seiten an professionellen Vorlagen und Checklisten
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {toolkitItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded">
                              {item.format}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bonus Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  BONUS
                </span>
                <span className="text-muted-foreground">Nur für kurze Zeit</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">
                4 zusätzliche Bonus-Templates gratis dazu
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {bonusItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Warum das DIY-Toolkit?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sofort starten</h3>
                <p className="text-muted-foreground">
                  Kein Warten auf Agenturen. Download und loslegen in 5 Minuten.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Praxiserprobt</h3>
                <p className="text-muted-foreground">
                  Die gleichen Tools, die wir für unsere 500+ Kunden nutzen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lebenslanger Zugang</h3>
                <p className="text-muted-foreground">
                  Einmal kaufen, für immer nutzen. Inkl. zukünftiger Updates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit für bessere Rankings?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Starte jetzt mit dem DIY-Toolkit und optimiere dein 
                Google Business Profil wie ein Profi.
              </p>

              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handlePurchase}
              >
                Für nur 49€ jetzt starten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">
                30 Tage Geld-zurück-Garantie • Keine versteckten Kosten
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
