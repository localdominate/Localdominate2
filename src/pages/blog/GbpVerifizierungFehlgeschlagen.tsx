import React from 'react';
import ArticleLayout from '@/components/blog/ArticleLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import KeyTakeawaysBox from '@/components/blog/KeyTakeawaysBox';
import AutoLexikonText from '@/components/blog/AutoLexikonText';
import SourcesSection from '@/components/blog/SourcesSection';
import VerifizierungsProblemWizard from '@/components/blog/VerifizierungsProblemWizard';
import StepByStepProcess from '@/components/blog/StepByStepProcess';
import { Mail, Phone, Video, MapPin, CheckCircle, Clock, AlertCircle, ArrowRight, FileText, Camera, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const GbpVerifizierungFehlgeschlagen: React.FC = () => {
  const articleData = {
    slug: "gbp-verifizierung-fehlgeschlagen",
    title: "Google Business Verifizierung schlägt fehl – 8 Lösungen für alle Probleme (2026)",
    metaTitle: "GBP Verifizierung fehlgeschlagen? 8 Lösungen | Guide 2026",
    metaDescription: "Deine Google Business Verifizierung klappt nicht? Postkarte nicht erhalten, Code ungültig oder Video abgelehnt? Unser Problemlöser-Wizard zeigt dir die passende Lösung.",
    excerpt: "Der komplette Troubleshooting-Guide für alle Google Business Verifizierungsprobleme mit interaktivem Problemlöser.",
    category: "Troubleshooting",
    readingTime: 12,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "✅",
    keywords: ["gbp verifizierung", "google verifizierung fehlgeschlagen", "postkarte nicht erhalten", "verifizierungscode", "video verifizierung"]
  };

  const tocItems = [
    { id: 'warum-wichtig', title: 'Warum Verifizierung so wichtig ist' },
    { id: 'verifizierungsmethoden', title: 'Die 5 Verifizierungsmethoden' },
    { id: 'problemloeser', title: 'Interaktiver Problemlöser' },
    { id: 'postkarte-probleme', title: 'Postkarte nicht erhalten' },
    { id: 'code-ungueltig', title: 'Code wird nicht akzeptiert' },
    { id: 'video-abgelehnt', title: 'Video-Verifizierung abgelehnt' },
    { id: 'support-eskalation', title: 'Google Support kontaktieren' },
    { id: 'faq', title: 'Häufige Fragen' },
  ];

  const keyTakeaways = [
    "Verifizierungscodes sind nur 30 Tage gültig",
    "Video-Verifizierung hat die höchste Erfolgsrate (89%)",
    "45% aller Probleme entstehen durch falsche Adressangaben",
    "Du kannst bis zu 5 Postkarten anfordern bevor gesperrt wird",
    "Nach 2 Fehlversuchen werden oft alternative Methoden angeboten"
  ];

  const sources = [
    {
      title: "Google Business Profile Help: Verify your business",
      url: "https://support.google.com/business/answer/7107242",
      description: "Offizielle Verifizierungs-Dokumentation"
    },
    {
      title: "BrightLocal: GBP Verification Guide",
      url: "https://www.brightlocal.com/learn/google-business-profile-verification/",
      description: "Detaillierter Verifizierungs-Guide"
    },
    {
      title: "LocalU: Video Verification Best Practices",
      url: "https://localu.org/",
      description: "Best Practices für Video-Verifizierung"
    }
  ];

  const verificationMethods = [
    {
      icon: Mail,
      title: "Postkarte",
      description: "Google sendet eine Postkarte mit 5-stelligem Code",
      timeframe: "5-14 Tage",
      successRate: "78%",
      availability: "Standard für alle"
    },
    {
      icon: Phone,
      title: "Telefon",
      description: "Automatischer Anruf mit Code-Ansage",
      timeframe: "Sofort",
      successRate: "85%",
      availability: "Nur für bestimmte Branchen"
    },
    {
      icon: Video,
      title: "Video",
      description: "Video-Rundgang durch das Geschäft",
      timeframe: "1-5 Tage",
      successRate: "89%",
      availability: "Nach Postkarten-Fehlversuchen"
    },
    {
      icon: Mail,
      title: "E-Mail",
      description: "Verifizierungslink per E-Mail",
      timeframe: "Sofort",
      successRate: "92%",
      availability: "Für etablierte Domains"
    },
    {
      icon: FileText,
      title: "Sofort-Verifizierung",
      description: "Automatisch bei Search Console Verknüpfung",
      timeframe: "Sofort",
      successRate: "95%",
      availability: "Für Search Console Nutzer"
    }
  ];
  const faqItems = [
    { question: "Wie oft kann ich eine neue Postkarte anfordern?", answer: "Du kannst maximal 5 Postkarten für dieselbe Adresse anfordern. Danach sperrt Google die Methode und du musst 30 Tage warten." },
    { question: "Kann ich die Verifizierungsmethode wechseln?", answer: "Nur bedingt. Google entscheidet, welche Methoden angeboten werden. Nach mehreren Fehlversuchen werden oft alternative Methoden freigeschaltet." },
    { question: "Was wenn mein Geschäft noch nicht eröffnet hat?", answer: "Du kannst das Profil erstellen und als 'bald eröffnend' markieren. Die Verifizierung sollte aber erst nach der Eröffnung erfolgen." },
    { question: "Kann jemand anderes mein Profil verifizieren?", answer: "Ja, du kannst eine bevollmächtigte Person als Manager hinzufügen. Diese Person muss aber Zugang zur Geschäftsadresse haben." },
    { question: "Wie lange ist die Verifizierung gültig?", answer: "Die Verifizierung ist unbegrenzt gültig, solange du die Richtlinien einhältst. Bei größeren Änderungen kann Google eine erneute Verifizierung verlangen." },
    { question: "Was bedeutet 'Verifizierung ausstehend'?", answer: "Dieser Status bedeutet, dass Google deinen Verifizierungsversuch prüft. Bei Video-Verifizierung wird das Video manuell geprüft (1-5 Tage)." },
    { question: "Kann ich mein Profil vor der Verifizierung bearbeiten?", answer: "Ja, aber ändere NICHT Name oder Adresse nach dem Anfordern eines Codes – das macht den Code ungültig!" },
    { question: "Was wenn ich ein Service Area Business habe?", answer: "Bei SABs wird die Verifizierung an deine Privatadresse geschickt, die du dann verbergen kannst." }
  ];

  return (
    <ArticleLayout article={articleData} tocItems={tocItems} faqItems={faqItems}>
      <AutoLexikonText>
        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "89%", label: "Video-Erfolgsrate", icon: Video },
            { value: "45%", label: "Adress-Fehler", icon: MapPin },
            { value: "30", label: "Tage Code-Gültigkeit", icon: Clock },
            { value: "5x", label: "max. Postkarten", icon: Mail },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center p-4 bg-gradient-to-br from-background to-muted/30 border-primary/20">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="lead text-lg mb-8">
          Du hast dein Google Business Profil erstellt, aber die Verifizierung will einfach nicht klappen? Du bist nicht allein – die Verifizierung ist einer der häufigsten Stolpersteine für lokale Unternehmen. In diesem Guide zeigen wir dir, wie du jedes Verifizierungsproblem lösen kannst.
        </p>

        <KeyTakeawaysBox items={keyTakeaways} />

        {/* Section 1 */}
        <section id="warum-wichtig" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            Warum Verifizierung so wichtig ist
          </h2>

          <p className="mb-6">
            Ein verifiziertes Google Business Profil ist die Grundlage für deine lokale Online-Präsenz. Ohne Verifizierung kannst du:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4 border-red-200 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-3">Ohne Verifizierung:</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Keine Sichtbarkeit in Google Maps
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Kein Local Pack Ranking
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Keine Antworten auf Bewertungen
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Keine Google Posts möglich
                </li>
              </ul>
            </Card>

            <Card className="p-4 border-green-200 bg-green-50">
              <h4 className="font-semibold text-green-800 mb-3">Mit Verifizierung:</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Volle Kontrolle über dein Profil
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Erscheinen im Local 3-Pack
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Insights und Statistiken
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Messaging-Funktion nutzbar
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200 p-4">
            <p className="text-sm text-blue-800">
              <strong>Wichtig:</strong> Laut BrightLocal nutzen 87% der Verbraucher Google, um lokale Unternehmen zu finden. Ohne verifiziertes Profil verlierst du diese potentiellen Kunden.
            </p>
          </Card>
        </section>

        {/* Section 2 */}
        <section id="verifizierungsmethoden" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Die 5 Verifizierungsmethoden im Überblick</h2>

          <p className="mb-6">
            Google bietet verschiedene Methoden zur Verifizierung an. Welche dir angeboten werden, hängt von deiner Branche, deinem Standort und deiner bisherigen Historie ab:
          </p>

          <div className="space-y-4">
            {verificationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold">{method.title}</h3>
                        <Badge variant="outline">{method.successRate} Erfolg</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {method.timeframe}
                        </span>
                        <span>{method.availability}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3 - Problem Solver */}
        <section id="problemloeser" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Interaktiver Problemlöser</h2>
          
          <p className="mb-6">
            Wähle dein spezifisches Problem aus und erhalte eine maßgeschneiderte Schritt-für-Schritt Lösung:
          </p>

          <VerifizierungsProblemWizard />
        </section>

        {/* Section 4 */}
        <section id="postkarte-probleme" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Postkarte nicht erhalten – Was tun?
          </h2>

          <p className="mb-6">
            Die Postkarten-Verifizierung ist die häufigste Methode, aber auch die fehleranfälligste. So gehst du vor, wenn die Postkarte nicht ankommt:
          </p>

          <StepByStepProcess
            title="Postkarte nicht erhalten – So gehst du vor"
            steps={[
              {
                title: "Warte die volle Zeitspanne ab",
                description: "In Deutschland dauert die Zustellung 5-14 Tage. Fordere erst nach 14 Tagen eine neue Postkarte an. Google zählt die Versuche.",
                duration: "5-14 Tage",
                warning: "Fordere keine neue Postkarte vor Ablauf der 14 Tage an – das kann als verdächtiges Verhalten gewertet werden."
              },
              {
                title: "Prüfe die Adresse",
                description: "Ist die Adresse exakt wie auf dem Briefkasten? Fehlt die Hausnummer-Ergänzung (z.B. 'a' oder 'Hinterhaus')? Ist der Firmenname auf dem Briefkasten lesbar?",
                duration: "5 Min.",
                tip: "Der Firmenname muss exakt so auf dem Briefkasten stehen, wie im Google Business Profile angegeben."
              },
              {
                title: "Fordere eine neue Postkarte an",
                description: "Im GBP Dashboard: Verifizierung → Neue Postkarte senden. Du kannst maximal 5 Postkarten anfordern, bevor Google die Methode sperrt.",
                duration: "2 Min.",
                warning: "Maximal 5 Versuche möglich. Danach wird die Postkarten-Methode für dein Profil deaktiviert."
              },
              {
                title: "Alternative Methode anfordern",
                description: "Nach 2 gescheiterten Postkarten-Versuchen wird oft Video-Verifizierung angeboten. Diese hat eine höhere Erfolgsrate (89%) und ist schneller.",
                icon: Video,
                tip: "Die Video-Verifizierung ist die schnellste und zuverlässigste Methode – nutze sie, sobald sie angeboten wird."
              }
            ]}
          />
        </section>

        {/* Section 5 */}
        <section id="code-ungueltig" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Code wird nicht akzeptiert</h2>

          <p className="mb-6">
            Du hast die Postkarte erhalten, aber der Code funktioniert nicht? Hier sind die häufigsten Ursachen und Lösungen:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                problem: "Code abgelaufen",
                solution: "Der Code ist nur 30 Tage gültig. Prüfe das Datum auf der Postkarte und fordere ggf. einen neuen Code an.",
                icon: Clock
              },
              {
                problem: "Tippfehler",
                solution: "Achte auf Verwechslungen: O vs 0, I vs 1, B vs 8. Der Code ist case-sensitive.",
                icon: AlertCircle
              },
              {
                problem: "Profil geändert",
                solution: "Wenn du Name oder Adresse nach dem Anfordern geändert hast, wird der alte Code ungültig.",
                icon: FileText
              },
              {
                problem: "Bereits verwendet",
                solution: "Jeder Code kann nur einmal verwendet werden. Bei Fehlern neuen Code anfordern.",
                icon: Shield
              }
            ].map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{item.problem}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="video-abgelehnt" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Camera className="h-8 w-8 text-primary" />
            Video-Verifizierung: So klappt es beim ersten Mal
          </h2>

          <p className="mb-6">
            Die Video-Verifizierung hat die höchste Erfolgsrate, erfordert aber ein korrekt aufgenommenes Video. So gehst du vor:
          </p>

          <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h4 className="font-bold mb-4">Video-Checkliste für 100% Erfolg:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Straßenschild mit Straßenname zeigen",
                "Hausnummer groß und deutlich filmen",
                "Eingang zum Geschäft zeigen",
                "Schild/Logo am Eingang sichtbar",
                "Innenraum des Geschäfts zeigen",
                "Arbeitsbereich mit Produkten/Equipment",
                "Durchgehend ohne Schnitt filmen",
                "Am Ende Gewerbeschein zeigen (optional)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 border-green-200 bg-green-50">
              <h4 className="font-semibold text-green-800 mb-3">Do's</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Filme bei Tageslicht</li>
                <li>• Halte die Kamera ruhig</li>
                <li>• Sprich während des Videos</li>
                <li>• Mind. 30 Sek. pro Bereich</li>
              </ul>
            </Card>

            <Card className="p-4 border-red-200 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-3">Don'ts</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Keine Schnitte oder Bearbeitung</li>
                <li>• Keine verschwommenen Aufnahmen</li>
                <li>• Nicht im Dunkeln filmen</li>
                <li>• Keine Kunden im Bild zeigen</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Section 7 */}
        <section id="support-eskalation" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Google Support kontaktieren</h2>

          <p className="mb-6">
            Wenn alle Methoden fehlschlagen, kannst du den Google Support einschalten:
          </p>

          <div className="space-y-4">
            <Card className="p-4">
              <h4 className="font-semibold mb-2">1. Über das GBP Dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Hilfe → Kontakt → Wähle "Verifizierung" als Thema. Beschreibe dein Problem detailliert und füge Screenshots bei.
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-2">2. Google Business Community</h4>
              <p className="text-sm text-muted-foreground">
                In der offiziellen Community (support.google.com/business/community) helfen Google-Mitarbeiter und Experten. Oft die schnellste Lösung.
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-2">3. Twitter/X: @GoogleMyBiz</h4>
              <p className="text-sm text-muted-foreground">
                Für öffentlichen Druck bei ignorierten Anfragen. Schreibe professionell und verlinke dein Anliegen.
              </p>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen zur GBP-Verifizierung</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>Wie oft kann ich eine neue Postkarte anfordern?</AccordionTrigger>
              <AccordionContent>
                Du kannst maximal 5 Postkarten für dieselbe Adresse anfordern. Danach sperrt Google die Methode und du musst 30 Tage warten oder eine alternative Methode nutzen (falls angeboten).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>Kann ich die Verifizierungsmethode wechseln?</AccordionTrigger>
              <AccordionContent>
                Nur bedingt. Google entscheidet, welche Methoden dir angeboten werden. Nach mehreren Postkarten-Fehlversuchen werden oft alternative Methoden freigeschaltet. Du kannst auch den Support bitten, eine andere Methode zu aktivieren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>Was wenn mein Geschäft noch nicht eröffnet hat?</AccordionTrigger>
              <AccordionContent>
                Du kannst das Profil erstellen und als "bald eröffnend" markieren. Die Verifizierung sollte aber erst nach der Eröffnung erfolgen, da Google Nachweise vom tatsächlichen Betrieb verlangt.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Kann jemand anderes mein Profil verifizieren?</AccordionTrigger>
              <AccordionContent>
                Ja, du kannst eine bevollmächtigte Person (z.B. eine Agentur) als Manager hinzufügen. Diese Person muss aber Zugang zur Geschäftsadresse haben, um die Postkarte zu empfangen oder das Video aufzunehmen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>Wie lange ist die Verifizierung gültig?</AccordionTrigger>
              <AccordionContent>
                Die Verifizierung ist unbegrenzt gültig, solange du die Richtlinien einhältst. Bei größeren Änderungen (Umzug, Namensänderung) kann Google eine erneute Verifizierung verlangen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Was bedeutet "Verifizierung ausstehend"?</AccordionTrigger>
              <AccordionContent>
                Dieser Status bedeutet, dass Google deinen Verifizierungsversuch prüft. Bei Postkarten heißt das, die Karte ist unterwegs. Bei Video-Verifizierung wird das Video manuell geprüft (1-5 Tage).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>Kann ich mein Profil vor der Verifizierung bearbeiten?</AccordionTrigger>
              <AccordionContent>
                Ja, du kannst das Profil vorbereiten (Beschreibung, Fotos, Kategorien). ABER: Ändere NICHT Name oder Adresse nach dem Anfordern eines Codes – das macht den Code ungültig!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>Was wenn ich ein Service Area Business habe?</AccordionTrigger>
              <AccordionContent>
                Bei SABs (Handwerker, Lieferdienste etc.) wird die Verifizierung an deine Privatadresse geschickt, die du dann verbergen kannst. Du brauchst trotzdem eine physische Adresse im Servicegebiet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Verifizierung klappt trotzdem nicht?</h3>
            <p className="text-muted-foreground mb-4">
              Wir helfen dir bei komplexen Verifizierungsfällen und übernehmen die Kommunikation mit Google.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Jetzt Hilfe anfordern
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <SourcesSection sources={sources} />

        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
          <strong>Hinweis:</strong> Google ändert die Verifizierungsmethoden regelmäßig. Dieser Artikel wurde am 10. Januar 2025 aktualisiert. Prüfe bei Problemen auch die aktuelle Google-Dokumentation.
        </div>
      </AutoLexikonText>
    </ArticleLayout>
  );
};

export default GbpVerifizierungFehlgeschlagen;
