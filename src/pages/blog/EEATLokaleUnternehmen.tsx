import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Lightbulb, 
  User,
  BookOpen,
  Star,
  Building
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EEATLokaleUnternehmen = () => {
  const article = getArticleBySlug("e-e-a-t-lokale-unternehmen");

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-eeat", title: "Was ist E-E-A-T?" },
    { id: "experience", title: "Experience: Erfahrung zeigen" },
    { id: "expertise", title: "Expertise: Fachwissen beweisen" },
    { id: "authority", title: "Authoritativeness: Autorität aufbauen" },
    { id: "trust", title: "Trustworthiness: Vertrauen schaffen" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie wichtig ist E-E-A-T für lokale Unternehmen?",
      answer: "Sehr wichtig, besonders für YMYL-Branchen (Gesundheit, Finanzen, Recht). Google bewertet die Glaubwürdigkeit deiner Inhalte und deines Unternehmens. Gute E-E-A-T-Signale verbessern dein Ranking."
    },
    {
      question: "Kann ich E-E-A-T schnell verbessern?",
      answer: "E-E-A-T ist ein langfristiger Prozess. Erste Verbesserungen wie Autoren-Bios und Zertifikate kannst du sofort umsetzen. Echte Autorität baut sich über Monate und Jahre auf."
    },
    {
      question: "Brauche ich als kleines lokales Unternehmen E-E-A-T?",
      answer: "Ja, aber in angepasster Form. Du konkurrierst lokal, nicht national. Lokale Expertise (Ortskenntnis, lokale Referenzen) ist für dich wichtiger als nationale Bekanntheit."
    },
    {
      question: "Wie zeige ich Expertise auf meiner Website?",
      answer: "Detaillierte Autoren-Bios, Qualifikationen und Zertifikate, ausführliche Fallstudien, Fachartikel im Blog, Vorträge und Veröffentlichungen, und Mitgliedschaften in Fachverbänden."
    }
  ];

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

  const eeatComponents = [
    { letter: "E", title: "Experience", deutsch: "Erfahrung", icon: "👤", color: "bg-blue-100 text-blue-800" },
    { letter: "E", title: "Expertise", deutsch: "Fachwissen", icon: "🎓", color: "bg-green-100 text-green-800" },
    { letter: "A", title: "Authoritativeness", deutsch: "Autorität", icon: "🏆", color: "bg-purple-100 text-purple-800" },
    { letter: "T", title: "Trustworthiness", deutsch: "Vertrauen", icon: "🛡️", color: "bg-amber-100 text-amber-800" }
  ];

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Google bewertet nicht nur deine Inhalte, sondern auch <strong>wer sie erstellt hat</strong>. 
        E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) ist ein zentraler Ranking-Faktor – 
        besonders für lokale Unternehmen in sensiblen Branchen. Dieser Guide zeigt dir, wie du als 
        lokales Unternehmen <strong>Glaubwürdigkeit und Autorität</strong> aufbaust.
      </p>

      <KeyTakeawaysBox 
        items={[
          "E-E-A-T steht für Experience, Expertise, Authoritativeness, Trustworthiness",
          "Besonders wichtig für YMYL-Branchen (Gesundheit, Finanzen, Recht)",
          "Lokale Expertise ist für lokale Unternehmen besonders wertvoll",
          "Zeige echte Erfahrung durch Fallstudien und Kundenprojekte",
          "Vertrauen durch Transparenz, Bewertungen und Kontaktmöglichkeiten"
        ]}
      />

      {/* E-E-A-T Übersicht */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {eeatComponents.map((item, index) => (
          <div key={index} className={`rounded-lg p-4 text-center ${item.color}`}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-2xl font-bold">{item.letter}</div>
            <p className="text-xs font-medium">{item.title}</p>
            <p className="text-xs opacity-75">{item.deutsch}</p>
          </div>
        ))}
      </div>

      {/* Was ist E-E-A-T */}
      <section id="was-ist-eeat" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          Was ist E-E-A-T?
        </h2>

        <p className="text-muted-foreground mb-6">
          E-E-A-T ist ein Konzept aus Googles Search Quality Rater Guidelines. Es beschreibt, 
          wie Google die <strong>Qualität und Vertrauenswürdigkeit</strong> von Inhalten bewertet:
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">YMYL = Your Money or Your Life</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Für Branchen, die Gesundheit, Finanzen oder Sicherheit betreffen, ist E-E-A-T besonders wichtig. 
                Google will sicherstellen, dass nur vertrauenswürdige Quellen für diese sensiblen Themen ranken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <User className="h-6 w-6 text-primary" />
          Experience: Erfahrung zeigen
        </h2>

        <p className="text-muted-foreground mb-6">
          Das "erste E" wurde 2022 hinzugefügt und betont die <strong>persönliche Erfahrung</strong>. 
          Google will wissen: Hat der Autor das Thema selbst erlebt?
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Zeige abgeschlossene Projekte mit echten Bildern",
            "Teile Vorher-Nachher-Fotos deiner Arbeit",
            "Schreibe Fallstudien mit konkreten Ergebnissen",
            "Lass Kunden ihre Erfahrung in Testimonials beschreiben",
            "Dokumentiere deine Arbeit in einem Blog oder auf Social Media"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Expertise */}
      <section id="expertise" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />
          Expertise: Fachwissen beweisen
        </h2>

        <p className="text-muted-foreground mb-6">
          Zeige, dass du und dein Team echte Experten in eurem Fachgebiet seid:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Qualifikationen", items: ["Ausbildung und Zertifikate", "Fortbildungen und Schulungen", "Berufserfahrung in Jahren"] },
            { title: "Nachweise", items: ["Meisterbriefe, Approbationen", "Mitgliedschaften in Verbänden", "Auszeichnungen und Preise"] }
          ].map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Authority */}
      <section id="authority" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Building className="h-6 w-6 text-primary" />
          Authoritativeness: Autorität aufbauen
        </h2>

        <p className="text-muted-foreground mb-6">
          Autorität bedeutet, dass andere dich als Experten anerkennen. Für lokale Unternehmen 
          ist <strong>lokale Autorität</strong> besonders wichtig:
        </p>

        <ol className="space-y-4 mb-6">
          {[
            { title: "Lokale Erwähnungen", beschreibung: "In lokalen Zeitungen, Blogs, Vereinsseiten genannt werden" },
            { title: "Backlinks", beschreibung: "Links von lokalen Organisationen, Partnern, Lieferanten" },
            { title: "Soziales Engagement", beschreibung: "Sponsoring lokaler Events, Vereinsmitgliedschaften" },
            { title: "Expertenstatus", beschreibung: "Vorträge halten, in lokalen Medien als Experte auftreten" }
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.beschreibung}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Trust */}
      <section id="trust" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Shield className="h-6 w-6 text-primary" />
          Trustworthiness: Vertrauen schaffen
        </h2>

        <p className="text-muted-foreground mb-6">
          Trust ist das Fundament von E-E-A-T. Ohne Vertrauen nützt alle Expertise nichts:
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Vertrauenssignale für lokale Unternehmen:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Bewertungen:</strong> Viele echte, positive Google-Bewertungen</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Transparenz:</strong> Impressum, Datenschutz, klare Kontaktinfos</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Siegel:</strong> TÜV, Trusted Shops, Branchenzertifikate</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Erreichbarkeit:</strong> Echte Adresse, Telefonnummer, Öffnungszeiten</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="e-e-a-t-lokale-unternehmen" />

      <SourcesSection sources={[
        { name: "Google: Search Quality Rater Guidelines", url: "https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" },
        { name: "Google: Was ist E-E-A-T", url: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" }
      ]} />
    </ArticleLayout>
  );
};

export default EEATLokaleUnternehmen;
