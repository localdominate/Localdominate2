import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import LastReviewedBadge from "@/components/blog/LastReviewedBadge";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { useLanguage } from "@/i18n/LanguageContext";
import LegalSpecialtySelector from "@/components/blog/LegalSpecialtySelector";
import LawyerPortalsTable from "@/components/blog/LawyerPortalsTable";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, Search, Star, TrendingUp, Check, X, 
  AlertTriangle, Shield, Building2, MessageSquare,
  FileText, Target, Award, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const LocalSeoAnwaelte = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-anwaelte-kanzleien", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "mandanten", title: "Mandantengewinnung heute" },
    { id: "keywords", title: "Rechtsgebiets-Keywords" },
    { id: "portale", title: "Anwaltsportale" },
    { id: "eeat", title: "E-E-A-T für Juristen" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "bewertungen", title: "Bewertungsmanagement" },
    { id: "case-study", title: "Case Study" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Dürfen Anwälte überhaupt Werbung machen?",
      answer: "Ja, seit der Liberalisierung des anwaltlichen Berufsrechts ist sachliche Werbung erlaubt. Die Grenzen sind: keine irreführende Werbung, keine Erfolgsgarantien, keine aggressive Mandantenwerbung im Einzelfall. Local SEO und Informationsangebote auf der Website sind unproblematisch."
    },
    {
      question: "Welche Bewertungsportale sind für Anwälte wichtig?",
      answer: "Priorität haben: Google Business (absolut wichtig), anwalt.de (branchenspezifisch), die BRAK-Anwaltssuche (Pflicht). Für die Schweiz: SAV-Suche und Anwaltssuchdienst.ch. Für Österreich: ÖRAK und rechtsanwaelte.at."
    },
    {
      question: "Wie antworte ich auf negative Bewertungen ohne Mandatsgeheimnisse zu verletzen?",
      answer: "Halten Sie die Antwort allgemein: 'Es tut uns leid, dass Sie unzufrieden sind. Bitte kontaktieren Sie uns direkt unter [Telefon], damit wir das klären können.' Nennen Sie nie Details zum Mandat, auch nicht zur Verteidigung."
    },
    {
      question: "Ist ein Blog für Kanzleien sinnvoll?",
      answer: "Absolut. Rechtstipps, FAQ-Artikel und Erklärungen zu aktuellen Urteilen zeigen Expertise (E-E-A-T) und ranken für Long-Tail-Keywords. Wichtig: Rechtliche Hinweise als 'allgemeine Information' kennzeichnen, Aktualitätsdatum angeben."
    },
    {
      question: "Wie viel kostet Local SEO für Anwälte?",
      answer: "DIY mit anwalt.de Basis-Profil: kostenlos. Premium-Profile: 50-150 €/Monat. Professionelle Local SEO Agentur: 500-2.000 €/Monat. ROI: Ein gewonnenes Mandat (oft 1.000-10.000 €+) rechtfertigt die Investition meist schnell."
    },
    {
      question: "Soll jeder Partner der Kanzlei ein eigenes Google-Profil haben?",
      answer: "Nein, ein Profil pro physischem Standort. Einzelne Anwälte können aber eigene Profile auf anwalt.de haben. Bei mehreren Standorten: je ein Google Business Profil pro Adresse."
    },
    {
      question: "Welche Keywords sind für mein Rechtsgebiet wichtig?",
      answer: "Nutzen Sie unseren interaktiven Keyword-Finder oben im Artikel. Grundformel: '[Rechtsgebiet] Anwalt [Stadt]' plus Long-Tail wie '[Problem] was tun'. Beispiel: 'Scheidungsanwalt München' + 'Scheidung Unterhalt berechnen'."
    },
    {
      question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?",
      answer: "Google Business Optimierung: 2-4 Wochen für erste Verbesserungen. Vollständige Local SEO Strategie: 3-6 Monate für signifikante Ranking-Verbesserungen. Bewertungsaufbau ist ein kontinuierlicher Prozess."
    },
    {
      question: "Darf ich Erfolgsquoten auf meiner Website nennen?",
      answer: "Vorsicht: Pauschale Erfolgsgarantien sind berufsrechtlich problematisch. Erlaubt sind sachliche Angaben wie 'X Jahre Erfahrung im Familienrecht' oder 'Y betreute Mandate'. Vermeiden Sie: '95% Erfolgsquote'."
    },
    {
      question: "Wie gehe ich mit Konkurrenten um, die gekaufte Bewertungen haben?",
      answer: "Konzentrieren Sie sich auf echte Bewertungen zufriedener Mandanten. Fake-Bewertungen können Sie bei Google melden. Langfristig gewinnt Qualität: Echte, detaillierte Bewertungen wirken authentischer."
    },
    {
      question: "Brauche ich einen Fachanwalt-Titel für gutes Ranking?",
      answer: "Nicht zwingend, aber es hilft. Der Fachanwalt-Titel ist ein starkes E-E-A-T-Signal für Google. Ohne Titel: Zeigen Sie Expertise durch Fallzahlen, Fortbildungen, Veröffentlichungen und spezialisierte Inhalte."
    },
    {
      question: "Wie wichtig ist die Kanzlei-Website für das Google-Ranking?",
      answer: "Sehr wichtig. Das Google Business Profil verlinkt auf Ihre Website. Eine langsame, nicht-mobile Website schadet dem Ranking. Investieren Sie in schnelle Ladezeiten, Mobile-First Design und lokalisierte Inhalte."
    }
  ];

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      faqItems={faqItems}
      articleType="legal"
      reviewedBy={{
        name: "Rechtsanwalt Fachredaktion",
        credentials: "Juristische Fachredaktion",
        reviewDate: "2026-01-08"
      }}
    >
      <LastReviewedBadge 
        reviewDate="2026-01-08" 
        reviewerName="Rechtsanwalt Fachredaktion" 
        variant="detailed" 
      />

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center p-4">
          <div className="text-3xl font-bold text-primary">82%</div>
          <div className="text-sm text-muted-foreground">suchen Anwälte online</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-3xl font-bold text-primary">65%</div>
          <div className="text-sm text-muted-foreground">prüfen Bewertungen</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-3xl font-bold text-primary">YMYL</div>
          <div className="text-sm text-muted-foreground">Höchste Google-Standards</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-3xl font-bold text-primary">3x</div>
          <div className="text-sm text-muted-foreground">höhere lokale Conversion</div>
        </Card>
      </div>

      {/* Intro */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          Die Mandantengewinnung hat sich fundamental verändert: <strong>82% der potenziellen 
          Mandanten suchen heute online nach einem Anwalt</strong>. Wer bei "Scheidungsanwalt München" 
          oder "Arbeitsrecht Anwalt Hamburg" nicht auf Seite 1 erscheint, existiert für diese 
          Mandanten praktisch nicht.
        </p>
        <p className="mb-4">
          Gleichzeitig stellt Google an rechtliche Inhalte die höchsten Anforderungen: Als 
          <strong> YMYL-Bereich</strong> (Your Money, Your Life) werden Anwalts-Websites besonders 
          streng auf Expertise, Erfahrung, Autorität und Vertrauenswürdigkeit (E-E-A-T) geprüft.
        </p>
        <p className="mb-4">
          Dieser Leitfaden zeigt Ihnen, wie Sie als Rechtsanwalt oder Kanzlei Ihre lokale 
          Sichtbarkeit maximieren – von rechtsgebietsspezifischen Keywords über die wichtigsten 
          Anwaltsportale bis zum berufsrechtskonformen Bewertungsmanagement.
        </p>
      </section>

      <ArticleCTA />

      {/* Mandantengewinnung heute */}
      <section id="mandanten" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Mandantengewinnung im digitalen Zeitalter
        </h2>
        
        <h3>Die Customer Journey eines Mandanten</h3>
        <p className="mb-4">
          Verstehen Sie, wie potenzielle Mandanten heute nach rechtlicher Hilfe suchen:
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <div className="font-semibold">Problem entsteht</div>
              <div className="text-muted-foreground text-sm">Kündigung erhalten, Scheidung steht an, Bußgeldbescheid im Briefkasten</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <div className="font-semibold">Google-Suche</div>
              <div className="text-muted-foreground text-sm">"Arbeitsrecht Anwalt [Stadt]", "Scheidung was tun", "Bußgeld anfechten"</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <div className="font-semibold">Top-3 Ergebnisse prüfen</div>
              <div className="text-muted-foreground text-sm">76% klicken nur auf die ersten 3 Ergebnisse im Local Pack</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <div className="font-semibold">Bewertungen lesen</div>
              <div className="text-muted-foreground text-sm">65% prüfen Google-Bewertungen vor der Kontaktaufnahme</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">5</div>
            <div>
              <div className="font-semibold">Kontaktaufnahme</div>
              <div className="text-muted-foreground text-sm">Anruf, E-Mail oder Online-Terminbuchung</div>
            </div>
          </div>
        </div>

        <Card className="mb-6 border-primary">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Warum Local SEO für Kanzleien kritisch ist
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                <span><strong>76%</strong> der lokalen Suchanfragen führen zu Besuch/Kontakt innerhalb 24 Stunden</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                <span>Mandanten wählen <strong>fast immer</strong> einen Anwalt in ihrer Nähe (Besprechungstermine)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                <span>Die Konkurrenz um lokale Keywords ist <strong>3x geringer</strong> als bei nationalen</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                <span>Ein Neukunde rechtfertigt den <strong>Marketing-Aufwand mehrerer Monate</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Rechtsgebiets-Keywords */}
      <section id="keywords" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Rechtsgebiets-Keywords für Ihre Kanzlei
        </h2>
        <p className="mb-6">
          Jedes Rechtsgebiet hat eigene Keywords mit unterschiedlichem Suchvolumen und Wettbewerb. 
          Wählen Sie Ihr Rechtsgebiet, um die passenden Keywords zu finden:
        </p>
        
        <LegalSpecialtySelector />

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Keyword-Strategie für Kanzleien</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Haupt-Keywords:</strong> Für Google Business und Homepage optimieren</li>
            <li>• <strong>Long-Tail:</strong> Für Blog-Artikel und FAQ-Seiten – hohe Conversion!</li>
            <li>• <strong>Notfall-Keywords:</strong> Besonders für Strafrecht, Festnahmen, Hausdurchsuchungen</li>
            <li>• <strong>Multi-Location:</strong> Bei mehreren Standorten je eine Landingpage pro Stadt</li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-anwaelte-kanzleien" position="intro" />

      {/* Anwaltsportale */}
      <section id="portale" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          Anwaltsverzeichnisse und Portale
        </h2>
        <p className="mb-6">
          Neben dem <Link to="/blog/google-my-business-optimieren" className="text-primary hover:underline">
          Google Business Profil</Link> sind branchenspezifische Anwaltsportale essenziell für Ihre 
          lokale Sichtbarkeit. Sie stärken Ihre <Link to="/blog/nap-konsistenz-local-seo" className="text-primary hover:underline">
          NAP-Konsistenz</Link> und generieren qualifizierte Mandatsanfragen.
        </p>

        <LawyerPortalsTable />

        <div className="mt-6">
          <h3>anwalt.de optimal nutzen</h3>
          <p className="mb-4">
            Mit über 5 Millionen monatlichen Besuchern ist anwalt.de das wichtigste Anwaltsportal 
            im deutschsprachigen Raum. So optimieren Sie Ihr Profil:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-green-600">✓ Do's</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Alle Rechtsgebiete korrekt angeben</li>
                  <li>• Professionelles Portraitfoto</li>
                  <li>• Ausführliche Vita mit Stationen</li>
                  <li>• Fachanwalt-Titel prominent zeigen</li>
                  <li>• Regelmässig Fachartikel veröffentlichen</li>
                  <li>• Auf jede Bewertung antworten</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-red-600">✗ Don'ts</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Veraltete Kontaktdaten</li>
                  <li>• Kein Foto oder unprofessionelles Bild</li>
                  <li>• Leere Profilbereiche</li>
                  <li>• Übertriebene Selbstdarstellung</li>
                  <li>• Konkurrenz-Kritik in Artikeln</li>
                  <li>• Negative Bewertungen ignorieren</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section id="eeat" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          E-E-A-T für juristische Inhalte
        </h2>
        <p className="mb-4">
          Rechtliche Inhalte gehören zu den sogenannten <strong>YMYL-Themen</strong> (Your Money, 
          Your Life). Google prüft diese besonders streng auf Expertise und Vertrauenswürdigkeit, 
          da falsche Informationen erheblichen Schaden anrichten können.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">E-E-A-T Faktor</th>
                <th className="text-left py-3 px-4 font-semibold">Anforderung</th>
                <th className="text-left py-3 px-4 font-semibold">Umsetzung für Kanzleien</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Experience</td>
                <td className="py-3 px-4 text-muted-foreground">Praxiserfahrung nachweisen</td>
                <td className="py-3 px-4 text-muted-foreground">Fallzahlen, Jahre Berufserfahrung, Mandate in Zahlen</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Expertise</td>
                <td className="py-3 px-4 text-muted-foreground">Qualifikation zeigen</td>
                <td className="py-3 px-4 text-muted-foreground">Fachanwalt-Titel, Zusatzqualifikationen, Fortbildungen</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Authoritativeness</td>
                <td className="py-3 px-4 text-muted-foreground">Anerkennung durch Dritte</td>
                <td className="py-3 px-4 text-muted-foreground">Medienauftritte, Fachpublikationen, Lehraufträge, Vorträge</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Trustworthiness</td>
                <td className="py-3 px-4 text-muted-foreground">Vertrauenswürdigkeit</td>
                <td className="py-3 px-4 text-muted-foreground">Impressum, Kammerzugehörigkeit, Berufshaftpflicht, Bewertungen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="mb-6 border-yellow-500">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Rechtliche Inhalte korrekt kennzeichnen
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-green-600 mb-2">✓ Richtig</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• "Dieser Artikel dient der allgemeinen Information..."</li>
                  <li>• Aktualitätsdatum bei jedem Artikel</li>
                  <li>• Autor mit Qualifikation nennen</li>
                  <li>• Auf Einzelfallprüfung hinweisen</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-red-600 mb-2">✗ Falsch</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• "Garantiert Ihre Abfindung erhöhen"</li>
                  <li>• Veraltete Rechtsinfos ohne Datum</li>
                  <li>• Anonyme Rechtstipps</li>
                  <li>• Individuelle Beratung als "Tipp" tarnen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground">
          <strong>Praxis-Tipp:</strong> Jeder Blogartikel sollte mit Name, Fachanwalt-Status und 
          Kontaktdaten des Autors versehen sein. Das stärkt E-E-A-T und ermöglicht direkte 
          Mandatsanfragen.
        </p>
      </section>

      {/* Google Business */}
      <section id="google-business" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Google Business für Kanzleien optimieren
        </h2>
        <p className="mb-4">
          Ihr <Link to="/blog/google-my-business-optimieren" className="text-primary hover:underline">
          Google Business Profil</Link> ist das Fundament Ihrer lokalen Sichtbarkeit. Für Kanzleien 
          gelten besondere Anforderungen:
        </p>

        <h3>Kategorien für verschiedene Kanzlei-Typen</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Kanzlei-Art</th>
                <th className="text-left py-3 px-4 font-semibold">Hauptkategorie</th>
                <th className="text-left py-3 px-4 font-semibold">Zusätzliche Kategorien</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Allgemeine Kanzlei</td>
                <td className="py-3 px-4"><Badge>Rechtsanwaltskanzlei</Badge></td>
                <td className="py-3 px-4 text-muted-foreground">Notar (falls zutreffend)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Strafverteidiger</td>
                <td className="py-3 px-4"><Badge>Strafverteidiger</Badge></td>
                <td className="py-3 px-4 text-muted-foreground">Rechtsanwaltskanzlei</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Familienrechtler</td>
                <td className="py-3 px-4"><Badge>Familienrechtskanzlei</Badge></td>
                <td className="py-3 px-4 text-muted-foreground">Mediator, Rechtsanwaltskanzlei</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Wirtschaftskanzlei</td>
                <td className="py-3 px-4"><Badge>Rechtsanwaltskanzlei</Badge></td>
                <td className="py-3 px-4 text-muted-foreground">Unternehmensberatung, Steuerberater</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Kanzlei-spezifische Attribute</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Barrierefreier Zugang</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Parkplätze vorhanden</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Online-Terminbuchung</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Sprachen (Englisch, etc.)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Erstberatung kostenlos/vergünstigt</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600" />
              <span>Videoberatung möglich</span>
            </div>
          </div>
        </div>

        <h3>Foto-Strategie für Kanzleien</h3>
        <p className="mb-4 text-muted-foreground">
          Professionelle Fotos vermitteln Kompetenz und Vertrauenswürdigkeit:
        </p>
        <ul className="space-y-2 text-sm mb-6">
          <li className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-primary mt-1" />
            <span><strong>Aussenansicht:</strong> Gebäude, Eingang, Kanzlei-Schild</span>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-primary mt-1" />
            <span><strong>Empfang:</strong> Professionell, einladend, diskret</span>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-primary mt-1" />
            <span><strong>Besprechungsräume:</strong> Modern, gut ausgestattet</span>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-primary mt-1" />
            <span><strong>Anwalts-Portraits:</strong> Seriös, sympathisch, im Anzug/Kostüm</span>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-primary mt-1" />
            <span><strong>Team-Foto:</strong> Alle Mitarbeiter, professionell</span>
          </li>
        </ul>
      </section>

      {/* Bewertungsmanagement */}
      <section id="bewertungen" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          Bewertungsmanagement für Anwälte
        </h2>
        <p className="mb-4">
          <Link to="/blog/google-bewertungen-bekommen" className="text-primary hover:underline">
          Google Bewertungen</Link> sind für Kanzleien besonders wichtig – und gleichzeitig 
          besonders heikel wegen der anwaltlichen Schweigepflicht.
        </p>

        <Card className="mb-6 border-red-200 dark:border-red-900">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 text-red-600 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Schweigepflicht beachten!
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Bei Antworten auf Bewertungen gelten strenge Regeln:
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <strong>Niemals</strong> Details zum Mandat nennen – auch nicht zur Verteidigung</li>
              <li>• <strong>Keine</strong> Bestätigung, dass Person Mandant war/ist</li>
              <li>• <strong>Keine</strong> Aussagen zum Ausgang des Falls</li>
              <li>• Nur allgemeine, unverfängliche Formulierungen verwenden</li>
            </ul>
          </CardContent>
        </Card>

        <h3>Mandantenbewertungen ethisch sammeln</h3>
        <p className="mb-4">
          Anders als in anderen Branchen sind Incentives (Rabatte, Geschenke) für Bewertungen 
          berufsrechtlich problematisch. Erlaubt ist:
        </p>
        <ul className="space-y-2 text-sm mb-6">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Nach erfolgreichem Mandatsabschluss <strong>freundlich bitten</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Bewertungskarte mit QR-Code in der Kanzlei auslegen</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Follow-up E-Mail mit Bewertungslink (nicht aufdringlich)</span>
          </li>
          <li className="flex items-start gap-2">
            <X className="h-4 w-4 text-red-600 mt-1" />
            <span>Keine Rabatte oder Geschenke als Gegenleistung</span>
          </li>
        </ul>

        <h3>Antwort-Vorlagen für Kanzleien</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-600 mb-2">Positive Bewertung</h4>
              <p className="text-sm text-muted-foreground italic">
                "Herzlichen Dank für Ihre positive Rückmeldung. Es freut uns sehr, dass Sie 
                mit unserer Beratung zufrieden waren. Wir stehen Ihnen auch in Zukunft gerne 
                zur Verfügung. Mit freundlichen Grüssen, Ihr Kanzlei-Team"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-red-600 mb-2">Negative Bewertung</h4>
              <p className="text-sm text-muted-foreground italic">
                "Es tut uns leid zu hören, dass Sie unzufrieden sind. Wir nehmen jede Rückmeldung 
                ernst. Bitte kontaktieren Sie uns direkt unter [Telefon], damit wir die 
                Angelegenheit persönlich besprechen können. Mit freundlichen Grüssen, [Name]"
              </p>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4">
          Mehr zum professionellen Umgang mit kritischen Bewertungen finden Sie in unserem 
          Artikel zu <Link to="/blog/negative-google-bewertungen" className="text-primary hover:underline">
          negativen Google Bewertungen</Link>.
        </p>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Case Study: Familienrechtskanzlei Frankfurt
        </h2>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">Platz 15</div>
                <div className="text-sm text-muted-foreground">Vorher: "Scheidungsanwalt Frankfurt"</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-sm text-muted-foreground">8 Monate Optimierung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Platz 3</div>
                <div className="text-sm text-muted-foreground">Nachher: Top 3 im Local Pack</div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Durchgeführte Massnahmen:</h4>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1" />
                <span>Google Business Profil vollständig optimiert (Kategorien, Attribute, Fotos)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1" />
                <span>Premium-Profil bei anwalt.de mit regelmässigen Fachartikeln</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1" />
                <span>NAP-Konsistenz in 15+ Verzeichnissen hergestellt</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1" />
                <span>12 Fachartikel zu Familienrecht-Themen (Long-Tail Keywords)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-1" />
                <span>Aktives Bewertungsmanagement: Von 4 auf 28 Bewertungen</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
              <div>
                <div className="text-2xl font-bold text-primary">+180%</div>
                <div className="text-sm text-muted-foreground">Mehr Erstberatungs-Anfragen</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">+320%</div>
                <div className="text-sm text-muted-foreground">Mehr Website-Besucher (lokal)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <ArticleCTA />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
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

      <IndustryLandingCTA industry="anwalt" />

      {/* Fazit */}
      <section className="mb-12 p-6 bg-muted rounded-lg">
        <h2>Fazit: Local SEO als Mandanten-Magnet</h2>
        <p className="mb-4">
          Für Anwälte und Kanzleien ist Local SEO keine Option, sondern eine Notwendigkeit. 
          Die Kombination aus optimiertem Google Business Profil, Präsenz auf anwalt.de und 
          anderen Portalen sowie hochwertigem Content zu Ihren Rechtsgebieten macht Sie zur 
          ersten Wahl für potenzielle Mandanten.
        </p>
        <p className="mb-4">
          <strong>Die wichtigsten Takeaways:</strong>
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Google Business Profil ist Ihr wichtigstes lokales Asset</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>E-E-A-T ist für juristische Inhalte besonders wichtig</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Rechtsgebietsspezifische Keywords für maximale Relevanz nutzen</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Bewertungen sammeln – aber die Schweigepflicht beachten</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            <span>Anwaltsportale für Backlinks und Mandatsanfragen nutzen</span>
          </li>
        </ul>

        <IndustryRankingChallenges config={industryRankingConfigs.anwaelte} />
        <HelpfulnessWidget articleSlug="local-seo-anwaelte-kanzleien" />

        <BlogCTAABTest articleSlug="local-seo-anwaelte-kanzleien" position="end" />
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoAnwaelte;
