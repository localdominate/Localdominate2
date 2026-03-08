import React from 'react';
import ArticleLayout from '@/components/blog/ArticleLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import KeyTakeawaysBox from '@/components/blog/KeyTakeawaysBox';
import AutoLexikonText from '@/components/blog/AutoLexikonText';
import SourcesSection from '@/components/blog/SourcesSection';
import DuplicateFinderCheckliste from '@/components/blog/DuplicateFinderCheckliste';
import StepByStepProcess from '@/components/blog/StepByStepProcess';
import { Copy, Search, Trash2, GitMerge, AlertTriangle, CheckCircle, Clock, ArrowRight, MapPin, Building, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const DuplicateListingEntfernen: React.FC = () => {
  const articleData = {
    slug: "duplicate-listing-entfernen",
    title: "Doppelte Google-Einträge löschen – Duplicate Listing Anleitung (2026)",
    metaTitle: "Duplicate Listing entfernen: Doppelte Google-Einträge löschen | 2026",
    metaDescription: "Hast du mehrere Google Business Einträge für denselben Standort? Lerne wie du Duplicates findest, richtig entfernst und zukünftige Dopplungen verhinderst.",
    excerpt: "Der komplette Guide zum Finden und Entfernen von doppelten Google Business Einträgen mit interaktiver Checkliste.",
    category: "Troubleshooting",
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "📋",
    keywords: ["duplicate listing", "doppelte einträge", "google business duplicate", "duplicate entfernen", "mehrere google einträge"]
  };

  const tocItems = [
    { id: 'was-sind-duplicates', title: 'Was sind Duplicate Listings?' },
    { id: 'warum-schaedlich', title: 'Warum Duplicates schädlich sind' },
    { id: 'wie-entstehen', title: 'Wie Duplicates entstehen' },
    { id: 'finder-checkliste', title: 'Duplicate-Finder Checkliste' },
    { id: 'merge-vs-loeschen', title: 'Merge vs. Löschen' },
    { id: 'entfernung-anleitung', title: 'Schritt-für-Schritt Entfernung' },
    { id: 'praevention', title: 'Duplicates verhindern' },
    { id: 'faq', title: 'Häufige Fragen' },
  ];

  const keyTakeaways = [
    "23% aller Unternehmen haben mindestens ein Duplicate Listing",
    "Duplicates reduzieren deine Local Pack Chancen um bis zu 35%",
    "Bewertungen können bei einem Merge teilweise übertragen werden",
    "Die Löschung dauert typischerweise 3-7 Werktage",
    "Regelmäßige Audits alle 3 Monate verhindern neue Duplicates"
  ];

  const sources = [
    {
      title: "Google Business Profile Help: Remove duplicate listings",
      url: "https://support.google.com/business/answer/4566671",
      description: "Offizielle Google-Dokumentation zu Duplicates"
    },
    {
      title: "BrightLocal: Duplicate Listing Study 2024",
      url: "https://www.brightlocal.com/research/",
      description: "Statistiken zu Duplicate Listings"
    },
    {
      title: "Moz: Local SEO Ranking Factors",
      url: "https://moz.com/local-search-ranking-factors",
      description: "Einfluss von Duplicates auf Rankings"
    },
    {
      title: "Sterling Sky: Managing Duplicate GBP",
      url: "https://www.sterlingsky.ca/",
      description: "Best Practices für Duplicate-Management"
    }
  ];

  const duplicateTypes = [
    {
      icon: Copy,
      title: "Exakte Duplicates",
      description: "Identischer Name und Adresse, oft durch versehentliches Erstellen",
      frequency: "45%",
      severity: "Hoch"
    },
    {
      icon: Building,
      title: "Abteilungs-Duplicates",
      description: "Separate Einträge für Abteilungen ohne eigenen Eingang",
      frequency: "25%",
      severity: "Mittel"
    },
    {
      icon: MapPin,
      title: "Adress-Varianten",
      description: "Gleiche Firma, leicht unterschiedliche Adressschreibweise",
      frequency: "20%",
      severity: "Mittel"
    },
    {
      icon: Phone,
      title: "Telefon-Duplicates",
      description: "Unterschiedliche Namen, aber gleiche Telefonnummer",
      frequency: "10%",
      severity: "Niedrig"
    }
  ];

  return (
    <ArticleLayout article={articleData} tocItems={tocItems}>
      <AutoLexikonText>
        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "23%", label: "haben Duplicates", icon: Copy },
            { value: "-35%", label: "Ranking-Verlust", icon: AlertTriangle },
            { value: "3-7", label: "Tage Löschung", icon: Clock },
            { value: "Q3", label: "Audit-Intervall", icon: Search },
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
          Duplicate Listings sind einer der häufigsten und gleichzeitig am meisten unterschätzten Fehler im Local SEO. Sie verwirren nicht nur Kunden, sondern signalisieren Google auch mangelnde Datenqualität – was dein Ranking direkt beeinflusst. In diesem Guide zeigen wir dir, wie du Duplicates findest und professionell entfernst.
        </p>

        <KeyTakeawaysBox items={keyTakeaways} />

        {/* Section 1 */}
        <section id="was-sind-duplicates" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Copy className="h-8 w-8 text-primary" />
            Was sind Duplicate Listings?
          </h2>

          <p className="mb-6">
            Ein Duplicate Listing ist ein zusätzlicher Google Business Eintrag für dasselbe Unternehmen am selben Standort. Das können exakte Kopien sein oder Varianten mit leicht unterschiedlichen Daten.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {duplicateTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <type.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-semibold">{type.title}</h3>
                        <Badge variant={type.severity === 'Hoch' ? 'destructive' : type.severity === 'Mittel' ? 'secondary' : 'outline'}>
                          {type.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      <p className="text-xs text-primary mt-2">Häufigkeit: {type.frequency}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section id="warum-schaedlich" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Warum Duplicates deinem Ranking schaden</h2>

          <p className="mb-6">
            Duplicate Listings sind mehr als nur ein Ärgernis – sie haben messbare negative Auswirkungen auf deine lokale Sichtbarkeit:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 bg-red-50 border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Ranking-Verlust</h4>
              <p className="text-sm text-red-700">
                Google kann nicht entscheiden, welches Profil zu ranken ist. Das Ergebnis: Beide verlieren.
              </p>
              <div className="mt-3 text-2xl font-bold text-red-600">-35%</div>
              <div className="text-xs text-red-600">Local Pack Chancen</div>
            </Card>

            <Card className="p-4 bg-orange-50 border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Bewertungs-Split</h4>
              <p className="text-sm text-orange-700">
                Bewertungen verteilen sich auf mehrere Profile. Keines erreicht eine starke Reputation.
              </p>
              <div className="mt-3 text-2xl font-bold text-orange-600">÷2</div>
              <div className="text-xs text-orange-600">Bewertungen pro Profil</div>
            </Card>

            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Kunden-Verwirrung</h4>
              <p className="text-sm text-yellow-700">
                Unterschiedliche Daten verwirren Kunden und führen zu negativen Erfahrungen.
              </p>
              <div className="mt-3 text-2xl font-bold text-yellow-600">-28%</div>
              <div className="text-xs text-yellow-600">Conversion Rate</div>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200 p-4">
            <p className="text-sm text-blue-800">
              <strong>Studie:</strong> Laut BrightLocal haben Unternehmen mit Duplicate Listings eine 35% geringere Chance, im Local 3-Pack zu erscheinen, verglichen mit Unternehmen mit nur einem sauberen Profil.
            </p>
          </Card>
        </section>

        {/* Section 3 */}
        <section id="wie-entstehen" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Wie entstehen Duplicate Listings?</h2>

          <p className="mb-6">
            Zu verstehen, wie Duplicates entstehen, hilft dir, sie in Zukunft zu vermeiden:
          </p>

          <div className="space-y-4">
            {[
              {
                nr: 1,
                title: "Vergessene alte Profile",
                desc: "Ein früherer Mitarbeiter oder Vorgänger hat bereits ein Profil erstellt, das niemand mehr kennt."
              },
              {
                nr: 2,
                title: "Agentur-Fehler",
                desc: "Eine Marketing-Agentur erstellt ein neues Profil, ohne das bestehende zu prüfen."
              },
              {
                nr: 3,
                title: "Google-Auto-Erstellung",
                desc: "Google erstellt automatisch Profile aus Web-Daten, besonders bei Branchenverzeichnis-Einträgen."
              },
              {
                nr: 4,
                title: "Umzug oder Umbenennung",
                desc: "Bei Adress- oder Namensänderungen wird ein neues Profil erstellt statt das alte zu aktualisieren."
              },
              {
                nr: 5,
                title: "Mitarbeiter-Aktionen",
                desc: "Verschiedene Mitarbeiter erstellen Profile ohne Abstimmung."
              },
              {
                nr: 6,
                title: "Übernahme/Fusion",
                desc: "Nach Unternehmensübernahmen existieren oft Profile beider Vorgänger."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {item.nr}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4 - Interactive Checklist */}
        <section id="finder-checkliste" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Duplicate-Finder Checkliste</h2>
          
          <p className="mb-6">
            Nutze unsere interaktive Checkliste, um systematisch nach Duplicate Listings zu suchen:
          </p>

          <DuplicateFinderCheckliste />
        </section>

        {/* Section 5 */}
        <section id="merge-vs-loeschen" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <GitMerge className="h-8 w-8 text-primary" />
            Merge vs. Löschen: Was ist besser?
          </h2>

          <p className="mb-6">
            Bei Duplicates hast du zwei Optionen: Zusammenführen (Merge) oder Löschen. Die richtige Wahl hängt von deiner Situation ab:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-2 border-green-400 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <GitMerge className="h-5 w-5" />
                Merge (Zusammenführen)
              </h3>
              <p className="text-sm text-green-700 mb-4">
                Google kombiniert zwei Profile zu einem. Bewertungen werden teilweise übertragen.
              </p>
              <h4 className="font-semibold text-green-800 mb-2">Wann nutzen?</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Beide Profile haben viele Bewertungen
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Eines ist verifiziert, eines nicht
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Du kontrollierst beide Profile
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-red-400 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                <Trash2 className="h-5 w-5" />
                Löschen
              </h3>
              <p className="text-sm text-red-700 mb-4">
                Das Duplicate wird komplett entfernt. Bewertungen gehen verloren.
              </p>
              <h4 className="font-semibold text-red-800 mb-2">Wann nutzen?</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Das Duplicate hat keine/wenige Bewertungen
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Du hast keinen Zugriff auf das Duplicate
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Das Duplicate hat falsche/veraltete Daten
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200 p-4">
            <p className="text-sm text-blue-800">
              <strong>Wichtig:</strong> Beim Merge garantiert Google NICHT, dass alle Bewertungen übertragen werden. Erfahrungsgemäß werden 70-80% der Bewertungen übernommen. Plane diesen Verlust ein.
            </p>
          </Card>
        </section>

        {/* Section 6 */}
        <section id="entfernung-anleitung" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Schritt-für-Schritt: Duplicate entfernen</h2>

          <p className="mb-6">
            Je nachdem ob du Zugriff auf das Duplicate hast, unterscheidet sich das Vorgehen:
          </p>

          <h3 className="text-xl font-semibold mb-4">Variante A: Du hast Zugriff auf das Duplicate</h3>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: "Im GBP Dashboard anmelden", content: "Gehe zu business.google.com und wähle das Duplicate-Profil aus." },
              { step: 2, title: "Zu Profil-Einstellungen navigieren", content: "Klicke auf das Drei-Punkte-Menü → 'Profil entfernen' oder 'Als dauerhaft geschlossen markieren'." },
              { step: 3, title: "Grund angeben", content: "Wähle 'Duplicate eines anderen Eintrags' als Grund und verlinke dein Hauptprofil." },
              { step: 4, title: "Bestätigen und warten", content: "Die Entfernung dauert 3-7 Tage. Prüfe danach die Google-Suche." },
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
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <Card className="flex-1 p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Variante B: Du hast KEINEN Zugriff</h3>
          <div className="space-y-4">
            {[
              { step: 1, title: "In Google Maps öffnen", content: "Suche das Duplicate in Google Maps und öffne das Profil." },
              { step: 2, title: "Änderung vorschlagen", content: "Klicke auf 'Änderung vorschlagen' → 'Schließen oder entfernen'." },
              { step: 3, title: "Duplicate melden", content: "Wähle 'Duplicate eines anderen Ortes' und füge den Link zu deinem echten Profil hinzu." },
              { step: 4, title: "Geduld haben", content: "Externe Meldungen dauern länger (1-3 Wochen). Bei Ablehnung: Google Support kontaktieren." },
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
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <Card className="flex-1 p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="praevention" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Duplicates in Zukunft verhindern</h2>

          <p className="mb-6">
            Nachdem du Duplicates entfernt hast, solltest du diese Maßnahmen ergreifen:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Search, title: "Vierteljährlicher Audit", desc: "Prüfe alle 3 Monate mit unserer Checkliste auf neue Duplicates" },
              { icon: Building, title: "Zentrale Verantwortung", desc: "Definiere eine Person, die für das GBP verantwortlich ist" },
              { icon: CheckCircle, title: "Zugangsdaten dokumentieren", desc: "Halte Login-Daten sicher, aber zugänglich für Nachfolger" },
              { icon: AlertTriangle, title: "Agenturen briefen", desc: "Weise externe Partner an, keine neuen Profile zu erstellen" },
              { icon: MapPin, title: "NAP-Konsistenz", desc: "Einheitliche Daten in allen Verzeichnissen reduzieren Auto-Erstellungen" },
              { icon: Star, title: "Bewertungs-Monitoring", desc: "Prüfe, ob Kunden auf dem richtigen Profil bewerten" },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen zu Duplicate Listings</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>Kann ich Bewertungen von Duplicates übertragen?</AccordionTrigger>
              <AccordionContent>
                Bei einem Merge können Bewertungen teilweise übertragen werden (ca. 70-80%). Bei einer Löschung gehen alle Bewertungen verloren. Deshalb ist Merge die bessere Option, wenn das Duplicate Bewertungen hat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>Wie lange dauert die Löschung?</AccordionTrigger>
              <AccordionContent>
                Wenn du selbst löschst: 3-7 Werktage. Bei "Änderung vorschlagen" durch Externe: 1-3 Wochen. In manchen Fällen lehnt Google die Löschung ab – dann muss man den Support kontaktieren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>Schadet es meinem Ranking, wenn ich ein Duplicate lösche?</AccordionTrigger>
              <AccordionContent>
                Nein, im Gegenteil. Die Entfernung von Duplicates verbessert typischerweise dein Ranking, da Google dein Hauptprofil nun als einzige Quelle sieht. Erwarte eine Verbesserung innerhalb von 2-4 Wochen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Was wenn jemand anders das Duplicate kontrolliert?</AccordionTrigger>
              <AccordionContent>
                Nutze "Änderung vorschlagen" in Google Maps. Wenn das nicht klappt, kontaktiere den Google Support mit Nachweisen, dass du der legitime Eigentümer bist (Gewerbeschein, etc.). In hartnäckigen Fällen kann rechtliche Beratung nötig sein.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>Sind Abteilungs-Einträge erlaubt?</AccordionTrigger>
              <AccordionContent>
                Ja, aber nur wenn die Abteilung einen eigenen Eingang hat, eigene Öffnungszeiten und eine eigene Kategorie. Beispiel: Ein Autohaus mit separatem Werkstatt-Eingang darf zwei Profile haben. Eine Bäckerei mit Café-Bereich im selben Raum darf das nicht.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Google erstellt immer wieder neue Duplicates – was tun?</AccordionTrigger>
              <AccordionContent>
                Das passiert oft durch inkonsistente NAP-Daten in Branchenverzeichnissen. Prüfe alle wichtigen Verzeichnisse auf einheitliche Daten. Nutze ein NAP-Audit-Tool. Melde das Problem zusätzlich dem Google Support mit dem Muster.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Duplicate-Problem nicht gelöst?</h3>
            <p className="text-muted-foreground mb-4">
              Wir helfen dir bei hartnäckigen Duplicate Listings und führen einen vollständigen Profil-Audit durch.
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
          <strong>Hinweis:</strong> Dieser Artikel wurde zuletzt am 10. Januar 2025 aktualisiert. Google ändert seine Prozesse regelmäßig – prüfe im Zweifelsfall die offizielle Dokumentation.
        </div>
      </AutoLexikonText>
    </ArticleLayout>
  );
};

export default DuplicateListingEntfernen;
