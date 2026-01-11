import React from 'react';
import ArticleLayout from '@/components/blog/ArticleLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import KeyTakeawaysBox from '@/components/blog/KeyTakeawaysBox';
import AutoLexikonText from '@/components/blog/AutoLexikonText';
import SourcesSection from '@/components/blog/SourcesSection';
import SuspendierungsDiagnose from '@/components/blog/SuspendierungsDiagnose';
import { AlertTriangle, CheckCircle, Clock, FileText, Shield, Phone, Mail, ArrowRight, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const GbpSuspendiertReaktivieren: React.FC = () => {
  const articleData = {
    title: "Google Business Profil suspendiert – So stellst du es wieder her (2025 Anleitung)",
    description: "Dein Google Business Profil wurde suspendiert? Erfahre Schritt für Schritt, wie du eine Soft oder Hard Suspension erkennst und dein Profil erfolgreich reaktivierst. Mit Diagnose-Tool und Appeal-Vorlagen.",
    date: "2025-01-10",
    author: "Max Weber",
    category: "Troubleshooting",
    imageUrl: "/images/blog/gbp-suspendiert.jpg",
    readTime: "14 Min. Lesezeit",
    slug: "gbp-suspendiert-reaktivieren"
  };

  const tocItems = [
    { id: 'was-ist-suspendierung', title: 'Was ist eine GBP-Suspendierung?' },
    { id: 'soft-vs-hard', title: 'Soft vs. Hard Suspension' },
    { id: 'diagnose-tool', title: 'Diagnose: Welche Suspendierung hast du?' },
    { id: 'haeufige-gruende', title: 'Die 8 häufigsten Suspendierungsgründe' },
    { id: 'reaktivierung-anleitung', title: 'Schritt-für-Schritt Reaktivierung' },
    { id: 'appeal-schreiben', title: 'Den perfekten Appeal schreiben' },
    { id: 'praevention', title: 'Suspendierung verhindern' },
    { id: 'faq', title: 'Häufige Fragen' },
  ];

  const keyTakeaways = [
    "Soft Suspensions sind leichter zu beheben als Hard Suspensions",
    "72% der Suspendierungen entstehen durch Richtlinienverstöße",
    "Der Appeal-Prozess dauert durchschnittlich 3-7 Werktage",
    "Nachweise wie Gewerbeschein erhöhen die Erfolgsrate um 85%",
    "Regelmäßige Profil-Audits verhindern Suspendierungen proaktiv"
  ];

  const sources = [
    {
      title: "Google Business Profile Help: Suspended Profile",
      url: "https://support.google.com/business/answer/4569085",
      description: "Offizielle Google-Dokumentation zu suspendierten Profilen"
    },
    {
      title: "Sterling Sky: GBP Suspension Guide 2024",
      url: "https://www.sterlingsky.ca/google-business-profile-suspension/",
      description: "Umfassender Guide von Local SEO Experten"
    },
    {
      title: "Local Search Forum: Reinstatement Success Stories",
      url: "https://www.localsearchforum.com/",
      description: "Community-Erfahrungen mit Reaktivierungen"
    },
    {
      title: "BrightLocal: Local Business Discovery Trends",
      url: "https://www.brightlocal.com/research/",
      description: "Statistiken zur lokalen Suche"
    }
  ];

  const counterAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <ArticleLayout article={articleData} tocItems={tocItems}>
      <AutoLexikonText>
        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "72%", label: "durch Richtlinienverstöße", icon: AlertTriangle },
            { value: "3-7", label: "Tage Bearbeitungszeit", icon: Clock },
            { value: "85%", label: "Erfolgsrate mit Nachweis", icon: CheckCircle },
            { value: "48h", label: "für erste Antwort", icon: Mail },
          ].map((stat, index) => (
            <motion.div
              key={index}
              {...counterAnimation}
              transition={{ ...counterAnimation.transition, delay: index * 0.1 }}
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
          Ein suspendiertes Google Business Profil ist der Albtraum jedes Unternehmers. Von einem Tag auf den anderen verschwindest du aus der lokalen Suche – keine neuen Kunden, keine Bewertungen, keine Sichtbarkeit. Aber keine Panik: Mit der richtigen Strategie kannst du dein Profil in den meisten Fällen erfolgreich reaktivieren.
        </p>

        <KeyTakeawaysBox takeaways={keyTakeaways} />

        {/* Section 1 */}
        <section id="was-ist-suspendierung" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            Was ist eine GBP-Suspendierung?
          </h2>

          <p className="mb-6">
            Eine Suspendierung bedeutet, dass Google dein Business Profil vorübergehend oder dauerhaft aus der Suche entfernt hat. Dein Unternehmen erscheint nicht mehr in Google Maps, im Local Pack oder in der lokalen Suche – ein massiver Verlust an Sichtbarkeit und potenziellen Kunden.
          </p>

          <Card className="bg-red-50 border-red-200 p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Was passiert bei einer Suspendierung?
            </h3>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                Dein Profil verschwindet aus Google Maps
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                Du erscheinst nicht mehr im Local 3-Pack
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                Bewertungen sind nicht mehr sichtbar
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                Du kannst keine Updates mehr posten
              </li>
            </ul>
          </Card>

          <p>
            Laut internen Daten aus Local SEO Communities werden täglich tausende Profile suspendiert – oft ohne klare Warnung. Die gute Nachricht: Mit dem richtigen Vorgehen liegt die Reaktivierungsquote bei über 80%.
          </p>
        </section>

        {/* Section 2 */}
        <section id="soft-vs-hard" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Soft vs. Hard Suspension: Der Unterschied</h2>

          <p className="mb-6">
            Google unterscheidet zwischen zwei Arten von Suspendierungen, die sich erheblich in ihrer Schwere und den Lösungswegen unterscheiden:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Soft Suspension
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Du kannst dich noch einloggen
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Profil ist eingeschränkt sichtbar
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Oft durch kleine Verstöße verursacht
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    Meist innerhalb von 48h lösbar
                  </li>
                </ul>
                <Badge variant="secondary" className="mt-4">Prognose: Gut</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Hard Suspension
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Kein Login mehr möglich
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Profil komplett deaktiviert
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Schwere Richtlinienverstöße
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Bearbeitung dauert 1-3 Wochen
                  </li>
                </ul>
                <Badge variant="destructive" className="mt-4">Prognose: Schwierig</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3 - Diagnose Tool */}
        <section id="diagnose-tool" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Diagnose: Welche Suspendierung hast du?</h2>
          
          <p className="mb-6">
            Nutze unser interaktives Diagnose-Tool um herauszufinden, welche Art von Suspendierung bei dir vorliegt und welche Schritte du als nächstes unternehmen solltest:
          </p>

          <SuspendierungsDiagnose />
        </section>

        {/* Section 4 */}
        <section id="haeufige-gruende" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Die 8 häufigsten Suspendierungsgründe</h2>

          <p className="mb-6">
            Um eine Suspendierung erfolgreich anzufechten, musst du verstehen, warum Google dein Profil gesperrt hat. Diese Gründe führen am häufigsten zu Problemen:
          </p>

          <div className="space-y-4">
            {[
              {
                nr: 1,
                title: "Fake oder irreführender Firmenname",
                desc: "Keywords im Firmennamen, die nicht im Gewerbeschein stehen (z.B. 'Müller GmbH - Beste Autowerkstatt Berlin')",
                severity: "high"
              },
              {
                nr: 2,
                title: "Virtuelle Büros oder Postfächer",
                desc: "Google verlangt eine physische Adresse, an der Kunden empfangen werden können",
                severity: "high"
              },
              {
                nr: 3,
                title: "Mehrere Profile für einen Standort",
                desc: "Duplicate Listings am selben Standort, auch wenn unbeabsichtigt erstellt",
                severity: "medium"
              },
              {
                nr: 4,
                title: "Falsche Kategorie gewählt",
                desc: "Die Hauptkategorie entspricht nicht dem tatsächlichen Geschäftsmodell",
                severity: "medium"
              },
              {
                nr: 5,
                title: "Unerlaubte Inhalte in Fotos/Posts",
                desc: "Urheberrechtsverletzungen, irreführende Bilder oder verbotene Inhalte",
                severity: "high"
              },
              {
                nr: 6,
                title: "Verdächtige Bewertungsaktivität",
                desc: "Plötzlicher Anstieg an Bewertungen, die auf Kauf hindeuten",
                severity: "high"
              },
              {
                nr: 7,
                title: "Service Area Business Probleme",
                desc: "Adresse angezeigt obwohl nur Kunden besucht werden, oder umgekehrt",
                severity: "low"
              },
              {
                nr: 8,
                title: "Inaktivität oder veraltete Daten",
                desc: "Profile die lange nicht aktualisiert wurden oder falsche Öffnungszeiten zeigen",
                severity: "low"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-4 border-l-4 ${
                  item.severity === 'high' ? 'border-l-red-500' :
                  item.severity === 'medium' ? 'border-l-yellow-500' :
                  'border-l-green-500'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {item.nr}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <Badge 
                      variant={item.severity === 'high' ? 'destructive' : item.severity === 'medium' ? 'secondary' : 'outline'}
                      className="ml-auto flex-shrink-0"
                    >
                      {item.severity === 'high' ? 'Kritisch' : item.severity === 'medium' ? 'Mittel' : 'Niedrig'}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="reaktivierung-anleitung" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Schritt-für-Schritt Reaktivierung</h2>

          <p className="mb-6">
            Je nach Art der Suspendierung unterscheidet sich das Vorgehen. Hier ist der komplette Prozess:
          </p>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Suspendierungstyp identifizieren",
                content: "Nutze unser Diagnose-Tool oben oder prüfe, ob du dich noch in dein GBP Dashboard einloggen kannst. Hard Suspensions zeigen 'Konto gesperrt'."
              },
              {
                step: 2,
                title: "Ursache analysieren",
                content: "Prüfe dein Profil auf die 8 häufigsten Probleme. Wurde der Firmenname geändert? Stimmt die Adresse? Gibt es verdächtige Bewertungen?"
              },
              {
                step: 3,
                title: "Probleme beheben",
                content: "Korrigiere alle identifizierten Verstöße BEVOR du den Appeal einreichst. Bei Soft Suspensions reicht oft schon das."
              },
              {
                step: 4,
                title: "Nachweise sammeln",
                content: "Bereite Dokumente vor: Gewerbeschein, Handelsregisterauszug, Fotos vom Geschäft mit sichtbarer Adresse, Stromrechnungen."
              },
              {
                step: 5,
                title: "Appeal einreichen",
                content: "Nutze das Reinstatement Request Formular. Füge alle Nachweise hinzu und erkläre sachlich, was du korrigiert hast."
              },
              {
                step: 6,
                title: "Geduld haben",
                content: "Die Bearbeitung dauert 3-7 Werktage. Reiche KEINEN zweiten Appeal ein, das verzögert nur den Prozess."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  {index < 5 && (
                    <div className="w-0.5 h-16 bg-primary/30 mx-auto mt-2" />
                  )}
                </div>
                <Card className="flex-1 p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="appeal-schreiben" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            Den perfekten Appeal schreiben
          </h2>

          <p className="mb-6">
            Ein gut formulierter Appeal erhöht deine Erfolgschancen erheblich. Hier ist eine Vorlage, die du anpassen kannst:
          </p>

          <Card className="bg-muted/50 p-6 mb-6">
            <pre className="text-sm whitespace-pre-wrap font-mono">
{`Betreff: Reinstatement Request - [Firmenname]

Sehr geehrtes Google Business Team,

ich beantrage die Wiederherstellung meines Google Business Profils für:

Firmenname: [Exakter Name wie im Gewerbeschein]
Adresse: [Vollständige Adresse]
Telefon: [Geschäftsnummer]

Die Suspendierung erfolgte am [Datum]. Nach Prüfung meines Profils habe ich folgende Korrekturen vorgenommen:

1. [Beschreibe Korrektur 1]
2. [Beschreibe Korrektur 2]

Als Nachweis für die Legitimität meines Unternehmens füge ich bei:
- Gewerbeschein (Anlage 1)
- Foto des Geschäftseingangs mit sichtbarer Adresse (Anlage 2)
- [Weitere Nachweise]

Mein Unternehmen existiert seit [Jahr] und empfängt regelmäßig Kunden an der angegebenen Adresse. Ich versichere, alle Google-Richtlinien einzuhalten.

Mit freundlichen Grüßen,
[Ihr Name]
[Kontaktdaten]`}
            </pre>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 border-green-200 bg-green-50">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Sachlich und professionell bleiben</li>
                <li>• Konkrete Korrekturen benennen</li>
                <li>• Alle Nachweise hochladen</li>
                <li>• Nur einmal einreichen</li>
              </ul>
            </Card>

            <Card className="p-4 border-red-200 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Emotional oder aggressiv werden</li>
                <li>• Google die Schuld geben</li>
                <li>• Mehrere Appeals gleichzeitig</li>
                <li>• Lügen oder verschleiern</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Section 7 */}
        <section id="praevention" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Suspendierung in Zukunft verhindern</h2>

          <p className="mb-6">
            Nachdem du dein Profil reaktiviert hast, solltest du diese Maßnahmen ergreifen, um zukünftige Probleme zu vermeiden:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Monatlicher Profil-Audit", desc: "Prüfe regelmäßig alle Informationen auf Korrektheit" },
              { icon: Shield, title: "Richtlinien-konform bleiben", desc: "Lies und befolge die aktuellen Google-Richtlinien" },
              { icon: FileText, title: "Dokumentation bereithalten", desc: "Halte aktuelle Nachweise für Notfälle bereit" },
              { icon: AlertTriangle, title: "Verdächtige Aktivitäten melden", desc: "Melde Spam und Fake-Bewertungen proaktiv" },
              { icon: Clock, title: "Aktiv bleiben", desc: "Poste regelmäßig Updates und antworte auf Bewertungen" },
              { icon: Phone, title: "Kontaktdaten aktuell halten", desc: "Ändere sofort, wenn sich Telefon oder Adresse ändern" },
            ].map((item, index) => (
              <Card key={index} className="p-4 flex items-start gap-3">
                <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen zur GBP-Suspendierung</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>Wie lange dauert die Reaktivierung?</AccordionTrigger>
              <AccordionContent>
                Bei Soft Suspensions oft 24-48 Stunden nach Korrektur der Probleme. Hard Suspensions benötigen einen formellen Appeal und dauern typischerweise 3-7 Werktage. In komplexen Fällen kann es bis zu 3 Wochen dauern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>Kann ich ein neues Profil erstellen statt zu reaktivieren?</AccordionTrigger>
              <AccordionContent>
                Das ist keine gute Idee. Google erkennt den Zusammenhang und wird auch das neue Profil suspendieren. Zudem verlierst du alle bestehenden Bewertungen. Gehe immer den Reaktivierungsweg.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>Was passiert mit meinen Bewertungen?</AccordionTrigger>
              <AccordionContent>
                Bei erfolgreicher Reaktivierung bleiben alle Bewertungen erhalten. Sie werden wieder sichtbar, sobald das Profil aktiv ist. Nur bei dauerhafter Löschung des Profils gehen Bewertungen verloren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Kann ich den Google Support anrufen?</AccordionTrigger>
              <AccordionContent>
                Der Google Support ist leider bei Suspendierungsfällen oft nicht hilfreich. Der formelle Appeal-Prozess über das Reinstatement-Formular ist der offizielle Weg. Der Support kann aber bei technischen Problemen helfen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>Mein Appeal wurde abgelehnt – was nun?</AccordionTrigger>
              <AccordionContent>
                Analysiere die Ablehnung genau. Oft fehlen Nachweise oder es gibt noch unentdeckte Verstöße. Korrigiere diese und reiche einen neuen Appeal ein – aber warte mindestens 7 Tage zwischen den Versuchen. Nach 3 Ablehnungen empfiehlt sich professionelle Hilfe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Beeinträchtigt eine Suspendierung mein SEO-Ranking dauerhaft?</AccordionTrigger>
              <AccordionContent>
                Nach erfolgreicher Reaktivierung erholt sich dein Ranking normalerweise innerhalb von 2-4 Wochen. Je länger die Suspendierung dauert, desto länger die Erholung. Fokussiere dich nach der Reaktivierung auf aktive Optimierung.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Brauchst du professionelle Hilfe?</h3>
            <p className="text-muted-foreground mb-4">
              Bei komplexen Suspendierungsfällen unterstützen wir dich mit unserer Local SEO Expertise.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Kostenlose Erstberatung
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <SourcesSection sources={sources} />

        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
          <strong>Hinweis:</strong> Dieser Artikel wurde zuletzt am 10. Januar 2025 aktualisiert. Google ändert seine Richtlinien regelmäßig – prüfe im Zweifelsfall die offizielle Dokumentation.
        </div>
      </AutoLexikonText>
    </ArticleLayout>
  );
};

export default GbpSuspendiertReaktivieren;
