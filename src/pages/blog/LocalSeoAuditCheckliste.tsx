import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  CheckCircle, 
  Circle,
  AlertTriangle, 
  Lightbulb, 
  Search,
  Globe,
  Star,
  BarChart3,
  FileCheck,
  Zap,
  Target,
  Users,
  Link as LinkIcon
} from "lucide-react";

const LocalSeoAuditCheckliste = () => {
  const article = getArticleBySlug("local-seo-audit-checkliste");

  if (!article) return null;

  const tocItems = [
    { id: "einfuehrung", title: "Warum ein Audit wichtig ist" },
    { id: "google-business-audit", title: "Google Business Profil (15 Punkte)" },
    { id: "website-audit", title: "Website Local SEO (15 Punkte)" },
    { id: "citation-audit", title: "Citation Audit (10 Punkte)" },
    { id: "bewertungs-audit", title: "Bewertungs-Audit (10 Punkte)" },
    { id: "wettbewerber", title: "Wettbewerber-Analyse" },
    { id: "priorisierung", title: "Priorisierungs-Matrix" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie oft sollte ich einen Local SEO Audit durchführen?",
      answer: "Wir empfehlen einen vollständigen Audit alle 3-6 Monate. Wichtige Metriken wie Rankings, Bewertungen und Google Business Insights solltest du monatlich prüfen. Nach größeren Google-Updates ist ein sofortiger Check sinnvoll."
    },
    {
      question: "Kann ich den Local SEO Audit selbst durchführen?",
      answer: "Ja, mit dieser Checkliste kannst du einen Basisaudit selbst machen. Für tiefgehende technische Analysen (wie Schema Markup Validierung oder Core Web Vitals) brauchst du eventuell spezialisierte Tools oder Experten."
    },
    {
      question: "Welche Tools brauche ich für einen vollständigen Audit?",
      answer: "Kostenlose Tools: Google Search Console, Google Business Insights, PageSpeed Insights, Mobile-Friendly Test. Kostenpflichtige Empfehlungen: Semrush, Ahrefs, BrightLocal, Whitespark für tiefere Analysen."
    },
    {
      question: "Was kostet ein professioneller Local SEO Audit?",
      answer: "Einmalige Audits kosten typischerweise 300-1.500€ je nach Umfang. Inkludierte Leistungen variieren: Basisaudit (Checkliste durchgehen) vs. Vollaudit (mit Handlungsempfehlungen und Priorisierung). Bei Local Dominator ist der Audit im Setup enthalten."
    },
    {
      question: "Wie lange dauert ein vollständiger Local SEO Audit?",
      answer: "Ein Basisaudit mit dieser Checkliste dauert 2-4 Stunden. Ein professioneller Vollaudit mit Wettbewerbsanalyse und detaillierten Empfehlungen kann 1-2 Arbeitstage in Anspruch nehmen."
    },
    {
      question: "Was sind die häufigsten Fehler, die bei Audits gefunden werden?",
      answer: "Top 5 Fehler: 1) Unvollständiges Google Business Profil, 2) Fehlende oder falsche NAP-Daten, 3) Keine lokalen Keywords in Title Tags, 4) Fehlendes LocalBusiness Schema, 5) Keine aktive Bewertungsstrategie."
    },
    {
      question: "Wie priorisiere ich die gefundenen Maßnahmen?",
      answer: "Nutze die Impact/Effort-Matrix: Zuerst Low Effort + High Impact (Quick Wins), dann High Effort + High Impact. Kritische Fehler wie falsche NAP-Daten immer zuerst beheben, da sie alle anderen Maßnahmen untergraben."
    },
    {
      question: "Brauche ich technisches Wissen für den Audit?",
      answer: "Für den Basisaudit nicht. Die meisten Punkte sind ohne Programmierkenntnisse prüfbar. Für technische Aspekte wie Schema Markup, Core Web Vitals oder Servereinstellungen ist Grundwissen hilfreich oder ein Entwickler sinnvoll."
    },
    {
      question: "Was ist der wichtigste einzelne Ranking-Faktor?",
      answer: "Es gibt keinen einzelnen Faktor, aber das Google Business Profil hat den größten direkten Einfluss auf Local Pack Rankings. Dahinter: Bewertungen (Anzahl + Durchschnitt), NAP-Konsistenz und Website-Relevanz."
    },
    {
      question: "Wie messe ich den Erfolg nach dem Audit?",
      answer: "Tracke: Google Business Impressionen/Aktionen, Local Pack Ranking für Top-Keywords, organischen Traffic für lokale Seiten, Anzahl + Qualität der Bewertungen, Telefonanrufe und Kontaktanfragen."
    },
    {
      question: "Was tun, wenn der Audit viele Probleme aufdeckt?",
      answer: "Keine Panik! Priorisiere nach Impact. Behebe zuerst kritische Fehler (NAP-Inkonsistenzen, nicht verifiziertes GBP). Arbeite dann systematisch die Quick Wins ab. Ein guter Audit ist der erste Schritt zur Verbesserung."
    },
    {
      question: "Lohnt sich ein monatlicher Mini-Check?",
      answer: "Absolut! Prüfe monatlich: Neue Bewertungen + Antworten, GBP Insights, Ranking für 5-10 Top-Keywords, Website-Traffic, Auffälligkeiten in Google Search Console. Das dauert 30-60 Minuten."
    },
    {
      question: "Wie finde ich meine lokalen Konkurrenten für die Analyse?",
      answer: "Suche deine wichtigsten Keywords bei Google Maps und notiere die Top 5 Ergebnisse. Nutze auch 'in der Nähe'-Suchen. Achte auf unterschiedliche Suchanfragen – oft ranken verschiedene Wettbewerber für verschiedene Keywords."
    },
    {
      question: "Was ist ein Citation Score und wie prüfe ich ihn?",
      answer: "Ein Citation Score bewertet Quantität und Qualität deiner Verzeichniseinträge. Tools wie Moz Local oder BrightLocal berechnen ihn. Ein Score über 80% ist gut. Unter 50% zeigt dringenden Handlungsbedarf."
    },
    {
      question: "Wie prüfe ich die Ladezeit meiner Website?",
      answer: "Nutze Google PageSpeed Insights (pagespeed.web.dev) oder GTmetrix. Zielwerte: Largest Contentful Paint unter 2,5s, First Input Delay unter 100ms, Cumulative Layout Shift unter 0,1. Mobile-Werte sind wichtiger als Desktop."
    },
    {
      question: "Was bedeutet Schema Markup und wie prüfe ich es?",
      answer: "Schema Markup ist strukturierter Code, der Google hilft, deine Daten zu verstehen. Prüfe mit dem Google Rich Results Test (search.google.com/test/rich-results). Suche nach LocalBusiness, Organization und eventuell FAQPage Schema."
    },
    {
      question: "Wie erkenne ich Duplicate Content auf meiner Website?",
      answer: "Nutze Siteliner.com oder Screaming Frog. Prüfe speziell Städte-Landingpages – häufigster Fehler: Nur den Städtenamen austauschen. Auch Title Tags und Meta Descriptions sollten einzigartig sein."
    },
    {
      question: "Brauche ich für den Audit einen SEO-Experten?",
      answer: "Für den Basisaudit nicht. Diese Checkliste ermöglicht dir einen soliden DIY-Audit. Für komplexe technische Probleme, Penalty-Analyse oder umfangreiche Wettbewerbsanalysen lohnt sich professionelle Hilfe."
    },
    {
      question: "Wie wichtig ist Social Media im Local SEO Audit?",
      answer: "Social Media ist kein direkter Ranking-Faktor, aber relevant für: NAP-Konsistenz (Profile zählen als Citations), Vertrauenssignale, lokale Engagement-Signale. Prüfe, ob alle Profile vollständig und aktuell sind."
    },
    {
      question: "Was sind lokale Backlinks und wie finde ich sie?",
      answer: "Lokale Backlinks sind Links von Websites in deiner Region: Lokale Zeitungen, Stadtportale, IHK, Handwerkskammer, lokale Blogs. Prüfe mit Ahrefs oder Semrush deine bestehenden Backlinks und die deiner Konkurrenten."
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const ChecklistItem = ({ checked = false, children }: { checked?: boolean; children: React.ReactNode }) => (
    <li className="flex items-start gap-3 py-2">
      {checked ? (
        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
      ) : (
        <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
      )}
      <span className="text-muted-foreground">{children}</span>
    </li>
  );

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema}>
      <TableOfContents items={tocItems} />

      {/* Einleitung */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Du investierst in Local SEO, aber weißt nicht, wo du stehst? Ein systematischer Audit deckt 
        Schwachstellen auf und zeigt dir, wo die größten Potenziale liegen. Diese <strong>50+ Punkte 
        Checkliste</strong> führt dich durch alle wichtigen Bereiche – von Google Business bis zu Backlinks.
      </p>

      {/* Einführung */}
      <section id="einfuehrung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          Warum ein regelmäßiger Local SEO Audit wichtig ist
        </h2>

        <p className="text-muted-foreground mb-6">
          Local SEO ist kein "Set and Forget". Google ändert regelmäßig Algorithmen, Wettbewerber 
          optimieren ihre Präsenz, und deine eigenen Daten können veralten. Ein Audit hilft dir:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: <Search className="h-5 w-5" />, title: "Schwachstellen finden", desc: "Technische Fehler und verpasste Chancen aufdecken" },
            { icon: <Target className="h-5 w-5" />, title: "Priorisieren", desc: "Wissen, wo Maßnahmen den größten Impact haben" },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Fortschritt messen", desc: "Vorher-Nachher-Vergleich für ROI-Nachweis" },
            { icon: <Users className="h-5 w-5" />, title: "Konkurrenz analysieren", desc: "Verstehen, warum andere besser ranken" }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 flex gap-3">
              <div className="text-primary flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">So nutzt du diese Checkliste</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Gehe jeden Punkt durch und notiere den Status: ✅ Erledigt, ⚠️ Teilweise, ❌ Fehlt. 
                Am Ende hast du eine priorisierte To-Do-Liste für deine Local SEO Optimierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Audit */}
      <section id="google-business-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          Google Business Profil Audit (15 Punkte)
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein Google Business Profil ist das Herzstück deiner lokalen Sichtbarkeit. 
          Prüfe jeden dieser 15 Punkte:
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Grundlagen</h3>
          <ul className="space-y-1">
            <ChecklistItem>Profil ist verifiziert (grünes Häkchen)</ChecklistItem>
            <ChecklistItem>Unternehmensname ist exakt korrekt (keine Keywords hinzugefügt)</ChecklistItem>
            <ChecklistItem>Adresse ist vollständig und korrekt formatiert</ChecklistItem>
            <ChecklistItem>Telefonnummer mit lokaler Vorwahl</ChecklistItem>
            <ChecklistItem>Website-URL ist korrekt verlinkt</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Kategorien & Beschreibung</h3>
          <ul className="space-y-1">
            <ChecklistItem>Primäre Kategorie ist die relevanteste für dein Geschäft</ChecklistItem>
            <ChecklistItem>Zusätzliche Kategorien sind gesetzt (bis zu 9)</ChecklistItem>
            <ChecklistItem>Unternehmensbeschreibung ist ausgefüllt (750 Zeichen genutzt)</ChecklistItem>
            <ChecklistItem>Beschreibung enthält relevante Keywords natürlich eingebunden</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Medien & Inhalte</h3>
          <ul className="space-y-1">
            <ChecklistItem>Mindestens 20 hochwertige Fotos hochgeladen</ChecklistItem>
            <ChecklistItem>Logo und Titelbild sind gesetzt</ChecklistItem>
            <ChecklistItem>Regelmäßige Google Posts (mindestens 1x/Woche)</ChecklistItem>
            <ChecklistItem>Produkte/Dienstleistungen sind gelistet</ChecklistItem>
            <ChecklistItem>Öffnungszeiten sind korrekt und vollständig</ChecklistItem>
            <ChecklistItem>Attribute sind gesetzt (Zahlungsarten, Barrierefreiheit etc.)</ChecklistItem>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Kritischer Fehler</p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Ein nicht verifiziertes Profil rankt praktisch nicht. Falls dein Profil noch nicht 
                verifiziert ist, hat dies absolute Priorität.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Website Audit */}
      <section id="website-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Search className="h-6 w-6 text-primary" />
          Website Local SEO Audit (15 Punkte)
        </h2>

        <p className="text-muted-foreground mb-6">
          Deine Website verstärkt die Signale deines Google Business Profils. 
          Diese Punkte sollten erfüllt sein:
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">On-Page Local SEO</h3>
          <ul className="space-y-1">
            <ChecklistItem>NAP (Name, Adresse, Telefon) im Footer auf jeder Seite</ChecklistItem>
            <ChecklistItem>Title Tags enthalten Stadt/Region + Keyword</ChecklistItem>
            <ChecklistItem>Meta Descriptions mit lokalem Bezug</ChecklistItem>
            <ChecklistItem>H1-Überschriften mit lokalem Fokus</ChecklistItem>
            <ChecklistItem>Lokale Landingpages für wichtige Einzugsgebiete</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Technische SEO</h3>
          <ul className="space-y-1">
            <ChecklistItem>LocalBusiness Schema Markup implementiert</ChecklistItem>
            <ChecklistItem>Schema ist fehlerfrei (Google Rich Results Test)</ChecklistItem>
            <ChecklistItem>Website ist mobile-friendly</ChecklistItem>
            <ChecklistItem>Ladezeit unter 3 Sekunden (PageSpeed Insights)</ChecklistItem>
            <ChecklistItem>HTTPS ist aktiv (SSL-Zertifikat)</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Content & Struktur</h3>
          <ul className="space-y-1">
            <ChecklistItem>Google Maps Embed auf Kontaktseite</ChecklistItem>
            <ChecklistItem>Kontaktformular funktioniert</ChecklistItem>
            <ChecklistItem>Click-to-Call auf Mobilgeräten</ChecklistItem>
            <ChecklistItem>Lokale Testimonials/Bewertungen eingebunden</ChecklistItem>
            <ChecklistItem>Kein Duplicate Content auf Städte-Seiten</ChecklistItem>
          </ul>
        </div>
      </section>

      {/* Citation Audit */}
      <section id="citation-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <LinkIcon className="h-6 w-6 text-primary" />
          Citation Audit (10 Punkte)
        </h2>

        <p className="text-muted-foreground mb-6">
          Citations sind Erwähnungen deines Unternehmens in Branchenverzeichnissen. 
          Konsistenz ist hier der Schlüssel:
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Verzeichniseinträge prüfen</h3>
          <ul className="space-y-1">
            <ChecklistItem>Google Business Profil NAP stimmt mit Website überein</ChecklistItem>
            <ChecklistItem>Bing Places Eintrag vorhanden und korrekt</ChecklistItem>
            <ChecklistItem>Apple Maps Connect Eintrag vorhanden</ChecklistItem>
            <ChecklistItem>Facebook Business Seite mit korrekten Daten</ChecklistItem>
            <ChecklistItem>Top 10 deutsche Verzeichnisse geprüft (Das Örtliche, Gelbe Seiten, etc.)</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Qualitätsprüfung</h3>
          <ul className="space-y-1">
            <ChecklistItem>Keine Duplikate in Verzeichnissen</ChecklistItem>
            <ChecklistItem>Keine veralteten Adressen/Telefonnummern</ChecklistItem>
            <ChecklistItem>Branchenspezifische Verzeichnisse genutzt</ChecklistItem>
            <ChecklistItem>Regionale/lokale Verzeichnisse genutzt</ChecklistItem>
            <ChecklistItem>Social Media Profile haben konsistente NAP-Daten</ChecklistItem>
          </ul>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Verzeichnis</th>
                <th className="border border-border p-3 text-left">Priorität</th>
                <th className="border border-border p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Google Business", priority: "Kritisch", status: "□ Prüfen" },
                { name: "Bing Places", priority: "Hoch", status: "□ Prüfen" },
                { name: "Apple Maps", priority: "Hoch", status: "□ Prüfen" },
                { name: "Facebook", priority: "Hoch", status: "□ Prüfen" },
                { name: "Das Örtliche", priority: "Mittel", status: "□ Prüfen" },
                { name: "Gelbe Seiten", priority: "Mittel", status: "□ Prüfen" },
                { name: "Yelp", priority: "Mittel", status: "□ Prüfen" },
                { name: "11880", priority: "Niedrig", status: "□ Prüfen" }
              ].map((item, index) => (
                <tr key={index}>
                  <td className="border border-border p-3">{item.name}</td>
                  <td className="border border-border p-3">{item.priority}</td>
                  <td className="border border-border p-3">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bewertungs-Audit */}
      <section id="bewertungs-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          Bewertungs-Audit (10 Punkte)
        </h2>

        <p className="text-muted-foreground mb-6">
          Bewertungen sind ein starkes Ranking-Signal und entscheidend für die Conversion:
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Quantitative Analyse</h3>
          <ul className="space-y-1">
            <ChecklistItem>Durchschnittsbewertung mindestens 4,5 Sterne</ChecklistItem>
            <ChecklistItem>Mindestens 20 Google Bewertungen vorhanden</ChecklistItem>
            <ChecklistItem>Neue Bewertungen in den letzten 30 Tagen</ChecklistItem>
            <ChecklistItem>Bewertungsanzahl im Vergleich zu Wettbewerbern</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Qualitative Analyse</h3>
          <ul className="space-y-1">
            <ChecklistItem>Alle Bewertungen werden beantwortet</ChecklistItem>
            <ChecklistItem>Antworten erfolgen innerhalb von 24-48 Stunden</ChecklistItem>
            <ChecklistItem>Negative Bewertungen werden professionell behandelt</ChecklistItem>
            <ChecklistItem>Bewertungen enthalten relevante Keywords (organisch)</ChecklistItem>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Strategie & Prozess</h3>
          <ul className="space-y-1">
            <ChecklistItem>Aktive Bewertungsstrategie vorhanden</ChecklistItem>
            <ChecklistItem>QR-Codes/Links für Bewertungsanfragen erstellt</ChecklistItem>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">4,8+ ⭐</div>
            <p className="text-xs text-green-600 dark:text-green-400">Optimal</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">4,0-4,7 ⭐</div>
            <p className="text-xs text-amber-600 dark:text-amber-400">Akzeptabel</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-700 dark:text-red-300 mb-1">&lt;4,0 ⭐</div>
            <p className="text-xs text-red-600 dark:text-red-400">Kritisch</p>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Wettbewerber-Analyse */}
      <section id="wettbewerber" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-primary" />
          Wettbewerber-Analyse
        </h2>

        <p className="text-muted-foreground mb-6">
          Verstehe, warum deine Konkurrenten besser (oder schlechter) ranken:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Faktor</th>
                <th className="border border-border p-3 text-left">Dein Wert</th>
                <th className="border border-border p-3 text-left">Konkurrent 1</th>
                <th className="border border-border p-3 text-left">Konkurrent 2</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Google Bewertungen (Anzahl)",
                "Durchschnittliche Sterne",
                "GBP Fotos Anzahl",
                "GBP Posts (letzte 30 Tage)",
                "Website Domain Authority",
                "Anzahl Städte-Landingpages",
                "Schema Markup vorhanden?"
              ].map((faktor, index) => (
                <tr key={index}>
                  <td className="border border-border p-3">{faktor}</td>
                  <td className="border border-border p-3">___</td>
                  <td className="border border-border p-3">___</td>
                  <td className="border border-border p-3">___</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Analyse-Tipp</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Suche "dein Keyword + Stadt" bei Google Maps und notiere die Top 3. 
                Analysiere deren Profile detailliert – was machen sie besser?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Priorisierung */}
      <section id="priorisierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" />
          Priorisierungs-Matrix
        </h2>

        <p className="text-muted-foreground mb-6">
          Nicht alle Maßnahmen sind gleich wichtig. Priorisiere nach Impact und Aufwand:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">🚀 Quick Wins (sofort machen)</h3>
            <p className="text-green-700 dark:text-green-300 text-sm mb-2">Hoher Impact, niedriger Aufwand:</p>
            <ul className="space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li>• GBP Profil vervollständigen</li>
              <li>• NAP-Inkonsistenzen beheben</li>
              <li>• Auf Bewertungen antworten</li>
              <li>• Fotos hochladen</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📈 Strategische Projekte</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Hoher Impact, hoher Aufwand:</p>
            <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
              <li>• Städte-Landingpages erstellen</li>
              <li>• Bewertungsstrategie aufbauen</li>
              <li>• Schema Markup implementieren</li>
              <li>• Content-Strategie entwickeln</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-5">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">⚡ Fill-Ins</h3>
            <p className="text-amber-700 dark:text-amber-300 text-sm mb-2">Niedriger Impact, niedriger Aufwand:</p>
            <ul className="space-y-1 text-amber-700 dark:text-amber-300 text-sm">
              <li>• Zusätzliche Verzeichniseinträge</li>
              <li>• Social Media Profile</li>
              <li>• Kleine Content-Updates</li>
              <li>• Attribute optimieren</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-950/30 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">🔍 Später prüfen</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Niedriger Impact, hoher Aufwand:</p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>• Kompletter Website-Relaunch</li>
              <li>• Umfangreiche Backlink-Kampagnen</li>
              <li>• Internationale Expansion</li>
              <li>• Perfektionismus-Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zum Local SEO Audit
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoAuditCheckliste;
