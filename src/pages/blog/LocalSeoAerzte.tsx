import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import IndustryRankingChallenges from "@/components/blog/IndustryRankingChallenges";
import { industryRankingConfigs } from "@/data/industryRankingData";
import LastReviewedBadge from "@/components/blog/LastReviewedBadge";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Star, Shield, Award, CheckCircle2, XCircle, AlertTriangle, FileText, Building2, MessageSquare } from "lucide-react";
import MedicalPortalsTable from "@/components/blog/MedicalPortalsTable";
import MedicalSpecialtySelector from "@/components/blog/MedicalSpecialtySelector";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import IndustryBenchmarkTable from "@/components/blog/IndustryBenchmarkTable";
import { industryBenchmarkData } from "@/data/industryBenchmarkData";

const LocalSeoAerzte = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-aerzte-praxen", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "ymyl", title: "YMYL-Anforderungen" },
    { id: "arztportale", title: "Arzt-Bewertungsportale" },
    { id: "keywords", title: "Fachgebiets-Keywords" },
    { id: "google-business", title: "Google Business für Praxen" },
    { id: "bewertungen", title: "Medizinische Bewertungen" },
    { id: "case-study", title: "Erfolgsbeispiel" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Darf ich als Arzt aktiv um Bewertungen bitten?", answer: "Ja, Sie dürfen Patienten höflich auf die Möglichkeit einer Bewertung hinweisen. Wichtig: Keine Belohnungen oder Rabatte im Gegenzug anbieten – das verstößt gegen das ärztliche Berufsrecht und die Richtlinien der Bewertungsportale." },
    { question: "Wie antworte ich auf negative Bewertungen ohne Datenschutz zu verletzen?", answer: "Bestätigen Sie niemals das Arzt-Patienten-Verhältnis öffentlich. Antworten Sie allgemein: 'Wir nehmen Feedback ernst und laden Sie ein, uns direkt zu kontaktieren.' Nennen Sie keine Behandlungsdetails." },
    { question: "Ist Jameda Premium die Investition wert?", answer: "Für die meisten Praxen ja. Jameda Premium (ab 59€/Monat) bietet bessere Sichtbarkeit, keine Werbung für Mitbewerber auf Ihrem Profil und erweiterte Profil-Funktionen. Der ROI ist meist positiv, wenn dadurch 1-2 Neupatienten pro Monat gewonnen werden." },
    { question: "Welche Google Business Kategorie für Gemeinschaftspraxen?", answer: "Wählen Sie die Hauptkategorie nach dem Praxisschwerpunkt (z.B. 'Hausarztpraxis'). Für MVZs mit verschiedenen Fachrichtungen können Sie ein Hauptprofil plus separate Profile für jede Fachabteilung anlegen." },
    { question: "Wie wichtig sind Arztportale vs. Google Bewertungen?", answer: "Beide sind wichtig, aber für unterschiedliche Zwecke. Google Bewertungen beeinflussen Ihr lokales Ranking direkt. Arztportale wie Jameda sind oft die erste Anlaufstelle für Patienten, die gezielt einen Spezialisten suchen. Idealerweise pflegen Sie beide aktiv." },
    { question: "Darf ich Behandlungsergebnisse auf meiner Website zeigen?", answer: "Nur mit schriftlicher Einwilligung des Patienten und unter Beachtung des Heilmittelwerbegesetzes (HWG). Vorher-Nachher-Bilder sind bei vielen Behandlungen nicht erlaubt. Bei Zahnärzten und ästhetischen Eingriffen gelten besondere Regeln." },
    { question: "Wie gehe ich mit Fake-Bewertungen um?", answer: "Melden Sie offensichtliche Fake-Bewertungen direkt beim Portal mit Begründung. Bei falschen Tatsachenbehauptungen haben Sie einen Löschungsanspruch. Dokumentieren Sie alles für eventuelle rechtliche Schritte." },
    { question: "Braucht jeder Arzt in der Gemeinschaftspraxis ein eigenes Profil?", answer: "Auf Arztportalen: Ja, jeder Arzt sollte ein eigenes Profil haben. Bei Google Business: Die Praxis hat ein Profil, einzelne Ärzte können im 'Team'-Bereich vorgestellt werden. Bei MVZs mit verschiedenen Standorten: Jeder Standort braucht ein eigenes Google-Profil." },
    { question: "Welche SEO-Maßnahmen sind für Ärzte erlaubt?", answer: "Alle seriösen SEO-Maßnahmen sind erlaubt: Website-Optimierung, Google Business Profil, Einträge in Arztportalen, informative Inhalte. Verboten sind: irreführende Werbung, Heilversprechen, unlautere Methoden wie gekaufte Bewertungen." },
    { question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?", answer: "Erste Verbesserungen sind oft nach 4-8 Wochen sichtbar. Signifikante Ranking-Verbesserungen dauern 3-6 Monate. Der Aufbau einer starken Online-Reputation (Bewertungen, Autorität) ist ein kontinuierlicher Prozess über 12+ Monate." },
    { question: "Soll ich einen Blog mit Gesundheitstipps führen?", answer: "Ein Praxisblog kann sehr wertvoll sein – aber nur bei korrekter Umsetzung. Alle Inhalte müssen medizinisch korrekt, aktuell und mit Autor (Arzt) versehen sein. Halbherzige oder veraltete Inhalte schaden mehr als sie nützen." },
    { question: "Wie wichtig ist die Praxis-Website für das Google Ranking?", answer: "Sehr wichtig. Die Website ist die Basis Ihrer Online-Präsenz. Sie muss mobilfreundlich, schnell, mit korrekten NAP-Daten und relevanten lokalen Inhalten ausgestattet sein. Google verknüpft Ihr Business Profil mit der Website-Autorität." }
  ];


  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Beispiel Arztpraxis",
    "description": "Local SEO Best Practices für Arztpraxen",
    "medicalSpecialty": "GeneralPractice"
  };

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      faqItems={faqItems}
      additionalSchema={medicalBusinessSchema}
      articleType="medical"
      reviewedBy={{
        name: "Dr. Med. Fachredaktion",
        credentials: "Medizinische Fachredaktion",
        reviewDate: "2026-01-08"
      }}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 not-prose">
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-3xl font-bold text-primary">78%</p>
            <p className="text-sm text-muted-foreground">suchen Ärzte online</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-3xl font-bold text-primary">70%</p>
            <p className="text-sm text-muted-foreground">prüfen Bewertungen</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Shield className="h-8 w-8 mx-auto mb-2 text-red-500" />
            <p className="text-3xl font-bold text-primary">YMYL</p>
            <p className="text-sm text-muted-foreground">Höchste Anforderungen</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Award className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-3xl font-bold text-primary">4,5★</p>
            <p className="text-sm text-muted-foreground">Mindest-Bewertung</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro" className="mb-12">
        <LastReviewedBadge 
          reviewDate="2026-01-08" 
          reviewerName="Dr. med. Fachredaktion" 
          variant="detailed" 
        />

        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Die Patientengewinnung hat sich fundamental verändert:</strong> Über 78% aller 
          Patienten recherchieren heute online, bevor sie einen Arzttermin vereinbaren. Eine starke 
          lokale Sichtbarkeit entscheidet darüber, ob Ihre Praxis gefunden wird – oder die Konkurrenz.
        </p>

        <p>
          Als Arzt oder Praxisinhaber stehen Sie vor besonderen Herausforderungen: Google stellt an 
          medizinische Inhalte höchste Qualitätsanforderungen (YMYL), Bewertungsportale wie Jameda 
          dominieren die Suchergebnisse, und das ärztliche Berufsrecht setzt enge Grenzen für Werbung.
        </p>

        <p>
          Dieser umfassende Guide zeigt Ihnen, wie Sie als Arzt oder Praxisinhaber Local SEO 
          erfolgreich umsetzen – unter Berücksichtigung aller rechtlichen Anforderungen und mit 
          praxiserprobten Strategien für mehr Patienten.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Was Sie in diesem Artikel lernen:
          </h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>YMYL-Anforderungen verstehen und erfüllen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Arztportale wie Jameda optimal nutzen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Keywords für Ihr Fachgebiet identifizieren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Google Business für Praxen optimieren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Mit Patientenbewertungen rechtssicher umgehen</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA />

      {/* YMYL Section */}
      <section id="ymyl" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-red-500" />
          YMYL-Anforderungen für medizinische Websites
        </h2>

        <p>
          <strong><LexikonLink term="YMYL">YMYL</LexikonLink> steht für "Your Money or Your Life"</strong> – Inhalte, die direkten Einfluss 
          auf die Gesundheit, Finanzen oder Sicherheit von Menschen haben. Google prüft diese Inhalte
          besonders streng, denn falsche medizinische Informationen können Leben gefährden.
        </p>

        <h3>Was bedeutet das für Ihre Praxiswebsite?</h3>

        <p>
          Ihre Website wird von Google nach dem <strong>E-E-A-T-Prinzip</strong> bewertet:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">🎓 Experience (Erfahrung)</h4>
              <p className="text-muted-foreground text-sm">
                Zeigen Sie praktische Erfahrung: Behandlungszahlen, Jahre in der Praxis, 
                Spezialisierungen. Echte Fallbeispiele (anonymisiert) unterstreichen Ihre Kompetenz.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">📚 Expertise (Fachwissen)</h4>
              <p className="text-muted-foreground text-sm">
                Ihre Qualifikationen müssen klar erkennbar sein: Approbation, Facharztausbildung, 
                Zusatzqualifikationen. Jeder Inhalt braucht einen benannten Autor.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">🏆 Authoritativeness (Autorität)</h4>
              <p className="text-muted-foreground text-sm">
                Externe Anerkennung zählt: Publikationen, Kongressvorträge, Medienauftritte, 
                Mitgliedschaften in Fachgesellschaften, Zertifizierungen.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">🤝 Trustworthiness (Vertrauen)</h4>
              <p className="text-muted-foreground text-sm">
                Transparenz schafft Vertrauen: Vollständiges Impressum, Datenschutzerklärung, 
                klare Kontaktmöglichkeiten, aktuelle und korrekte Informationen.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3>YMYL-Checkliste für Ihre Praxiswebsite</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Anforderung</th>
                <th className="border p-3 text-left">Umsetzung</th>
                <th className="border p-3 text-left">Priorität</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Autor-Kennzeichnung</td>
                <td className="border p-3">Jeder medizinische Inhalt mit Arzt-Name, Qualifikation und Foto</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Kritisch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Quellenangaben</td>
                <td className="border p-3">Medizinische Aussagen mit Studien/Leitlinien belegen</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Kritisch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Aktualisierungsdatum</td>
                <td className="border p-3">"Letzte Aktualisierung" bei allen Inhalten anzeigen</td>
                <td className="border p-3"><Badge className="bg-orange-100 text-orange-800">Wichtig</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Arzt-Profil-Seite</td>
                <td className="border p-3">Detaillierte Vita, Lebenslauf, Publikationen</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Kritisch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Haftungsausschluss</td>
                <td className="border p-3">"Ersetzt keine ärztliche Beratung" bei Gesundheitstipps</td>
                <td className="border p-3"><Badge className="bg-orange-100 text-orange-800">Wichtig</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Impressum/Datenschutz</td>
                <td className="border p-3">Vollständig, aktuell, leicht auffindbar</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Kritisch</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Dos und Don'ts für medizinische Inhalte</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Das sollten Sie tun
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Medizinische Aussagen mit Quellen belegen</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Autor (Arzt) bei jedem Artikel nennen</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Inhalte regelmäßig auf Aktualität prüfen</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Fachterminologie verständlich erklären</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Auf offizielle Leitlinien verweisen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-red-700 dark:text-red-400 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> Das sollten Sie vermeiden
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 mt-0.5 text-red-600 shrink-0" />
                  <span>Heilversprechen oder Erfolgsgarantien</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 mt-0.5 text-red-600 shrink-0" />
                  <span>Unseriöse oder nicht zugelassene Behandlungen</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 mt-0.5 text-red-600 shrink-0" />
                  <span>Veraltete medizinische Informationen</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 mt-0.5 text-red-600 shrink-0" />
                  <span>Anonyme oder nicht nachprüfbare Inhalte</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 mt-0.5 text-red-600 shrink-0" />
                  <span>Vergleichende Werbung gegen Kollegen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arztportale Section */}
      <section id="arztportale" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-primary" />
          Arzt-Bewertungsportale: Ihr zweites Standbein
        </h2>

        <p>
          Neben Google sind spezialisierte Arztportale oft die erste Anlaufstelle für Patienten. 
          <strong> Jameda allein verzeichnet über 6 Millionen Besucher monatlich</strong> – diese 
          Reichweite sollten Sie nutzen.
        </p>

        <h3>Die wichtigsten Arztportale im Überblick</h3>

        <MedicalPortalsTable />

        <h3>Jameda-Profil optimal gestalten</h3>

        <p>
          Als Marktführer in Deutschland verdient Jameda besondere Aufmerksamkeit. So optimieren 
          Sie Ihr Profil:
        </p>

        <div className="bg-muted rounded-lg p-6 my-6">
          <h4 className="font-bold mb-4">Jameda-Optimierung in 7 Schritten:</h4>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <div>
                <strong>Professionelles Portraitfoto:</strong> Freundlich, professionell, aktuell. 
                Kein Gruppenfoto, keine Freizeit-Aufnahmen.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <strong>Vollständige Vita:</strong> Ausbildung, Facharztausbildung, Zusatzqualifikationen, 
                Berufsstationen.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <div>
                <strong>Alle Leistungen auflisten:</strong> Je detaillierter, desto besser. 
                Patienten suchen oft nach spezifischen Behandlungen.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <div>
                <strong>Sprechzeiten aktuell halten:</strong> Nichts frustriert Patienten mehr als 
                veraltete Öffnungszeiten.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <div>
                <strong>Online-Terminbuchung aktivieren:</strong> Senkt die Hürde für Neupatienten 
                erheblich.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <div>
                <strong>Auf Bewertungen antworten:</strong> Zeigt Engagement – aber immer 
                datenschutzkonform!
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">7</span>
              <div>
                <strong>Premium prüfen:</strong> Ab 59€/Monat keine Konkurrenz-Werbung auf Ihrem 
                Profil – oft lohnende Investition.
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
          <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" /> Rechtliche Hinweise zu Arztbewertungen
          </h4>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
            <li>• <strong>Datenschutz:</strong> Bestätigen Sie niemals öffentlich das Arzt-Patienten-Verhältnis</li>
            <li>• <strong>Löschungsanspruch:</strong> Bei nachweislich falschen Tatsachenbehauptungen</li>
            <li>• <strong>Keine Belohnungen:</strong> Rabatte für Bewertungen verstoßen gegen Berufsrecht</li>
            <li>• <strong>Anonyme Bewertungen:</strong> Grundsätzlich zulässig, aber anfechtbar bei Missbrauch</li>
          </ul>
        </div>
      </section>

      {/* Keywords Section */}
      <section id="keywords" className="mb-12">
        <h2 className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Fachgebiets-Keywords: Die richtigen Suchbegriffe finden
        </h2>

        <p>
          Jedes medizinische Fachgebiet hat spezifische Keywords, nach denen Patienten suchen. 
          Wählen Sie unten Ihr Fachgebiet, um die relevanten Suchbegriffe zu sehen:
        </p>

        <MedicalSpecialtySelector />

        <h3>Keyword-Strategie für Arztpraxen</h3>

        <p>
          Eine effektive Keyword-Strategie für Ärzte kombiniert verschiedene Suchintentionen:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-2">🎯 Lokale Keywords</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Kombination aus Fachgebiet + Stadt/Stadtteil
              </p>
              <ul className="text-sm space-y-1">
                <li>• "Zahnarzt München Schwabing"</li>
                <li>• "Hautarzt Berlin Mitte"</li>
                <li>• "Orthopäde Hamburg Altona"</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-2">🔍 Behandlungs-Keywords</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Spezifische Behandlungen + Ort
              </p>
              <ul className="text-sm space-y-1">
                <li>• "Wurzelbehandlung Kosten"</li>
                <li>• "Lasik OP Frankfurt"</li>
                <li>• "Knieprothese Spezialist"</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold mb-2">🚨 Notfall-Keywords</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Höchste Conversion-Rate
              </p>
              <ul className="text-sm space-y-1">
                <li>• "Zahnarzt Notdienst heute"</li>
                <li>• "Kinderarzt Wochenende"</li>
                <li>• "Augenarzt Notfall"</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            💡 Profi-Tipp: Stadtteil-SEO
          </h4>
          <p className="text-green-800 dark:text-green-200">
            Statt nur auf "Zahnarzt Berlin" zu optimieren, fokussieren Sie sich auf Ihren Stadtteil: 
            "Zahnarzt Berlin Prenzlauer Berg". Weniger Wettbewerb, höhere Relevanz für Patienten in 
            Ihrer Nähe.
          </p>
        </div>
      </section>

      <ArticleCTA />

      {/* Google Business Section */}
      <section id="google-business" className="mb-12">
        <h2>Google Business Profile für Arztpraxen</h2>

        <p>
          Ihr <Link to="/blog/google-my-business-optimieren" className="text-primary hover:underline">
          Google Business Profile</Link> ist oft der erste Kontaktpunkt mit potenziellen Patienten. 
          Für Arztpraxen gelten besondere Optimierungsstrategien.
        </p>

        <h3>Die richtige Kategorie wählen</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Fachgebiet</th>
                <th className="border p-3 text-left">Hauptkategorie</th>
                <th className="border p-3 text-left">Zusätzliche Kategorien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Allgemeinmedizin</td>
                <td className="border p-3">Hausarztpraxis</td>
                <td className="border p-3">Arztpraxis, Impfzentrum</td>
              </tr>
              <tr>
                <td className="border p-3">Zahnarzt</td>
                <td className="border p-3">Zahnarztpraxis</td>
                <td className="border p-3">Kosmetische Zahnmedizin, Kieferorthopäde</td>
              </tr>
              <tr>
                <td className="border p-3">Orthopädie</td>
                <td className="border p-3">Orthopädische Praxis</td>
                <td className="border p-3">Sportmediziner, Physiotherapeut</td>
              </tr>
              <tr>
                <td className="border p-3">Dermatologie</td>
                <td className="border p-3">Dermatologe</td>
                <td className="border p-3">Hautkrebszentrum, Allergologe</td>
              </tr>
              <tr>
                <td className="border p-3">Gynäkologie</td>
                <td className="border p-3">Gynäkologe</td>
                <td className="border p-3">Geburtshilfe, Kinderwunschzentrum</td>
              </tr>
              <tr>
                <td className="border p-3">Gemeinschaftspraxis</td>
                <td className="border p-3">Nach Hauptschwerpunkt</td>
                <td className="border p-3">Alle vertretenen Fachrichtungen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Praxis-spezifische Attribute nutzen</h3>

        <p>
          Google bietet für Arztpraxen spezielle Attribute, die Sie unbedingt pflegen sollten:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Barrierefreiheit</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Rollstuhlgerechter Eingang</li>
              <li>✓ Aufzug vorhanden</li>
              <li>✓ Barrierefreie Toiletten</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Service-Optionen</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Online-Terminbuchung</li>
              <li>✓ Video-Sprechstunde</li>
              <li>✓ Hausbesuche möglich</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Patientengruppen</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Privatpatienten</li>
              <li>✓ Kassenpatienten</li>
              <li>✓ Selbstzahler</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Sprachen</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Deutsch</li>
              <li>✓ Englisch</li>
              <li>✓ Weitere Sprachen</li>
            </ul>
          </div>
        </div>

        <h3>Foto-Strategie für Praxen</h3>

        <p>
          Hochwertige Fotos sind entscheidend – aber beachten Sie den Datenschutz:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-400">✅ Empfohlene Fotos</h4>
              <ul className="text-sm space-y-2">
                <li>• Außenansicht mit Praxisschild</li>
                <li>• Moderner Empfangsbereich</li>
                <li>• Sauberes, einladendes Wartezimmer</li>
                <li>• Behandlungsräume (ohne Patienten!)</li>
                <li>• Hightech-Geräte</li>
                <li>• Team-Foto (mit Einwilligung)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="pt-6">
              <h4 className="font-bold mb-3 text-red-700 dark:text-red-400">❌ Vermeiden</h4>
              <ul className="text-sm space-y-2">
                <li>• Fotos mit erkennbaren Patienten</li>
                <li>• Behandlungsfotos (Vorher/Nachher)</li>
                <li>• Unordentliche Bereiche</li>
                <li>• Veraltete Ausstattung</li>
                <li>• Stock-Fotos statt echter Praxis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bewertungen Section */}
      <section id="bewertungen" className="mb-12">
        <h2 className="flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-primary" />
          Medizinische Bewertungen rechtssicher handhaben
        </h2>

        <p>
          Der Umgang mit Patientenbewertungen erfordert besondere Sorgfalt. Die ärztliche 
          Schweigepflicht gilt auch in Online-Antworten – und doch sollten Sie aktiv auf 
          Feedback reagieren.
        </p>

        <h3>DSGVO-konforme Antworten auf Bewertungen</h3>

        <div className="bg-muted rounded-lg p-6 my-6">
          <h4 className="font-bold mb-4">Muster-Antworten nach Bewertungstyp:</h4>
          
          <div className="space-y-4">
            <div className="bg-background rounded p-4">
              <p className="font-medium text-green-600 mb-2">Positive Bewertung (5 Sterne)</p>
              <p className="text-sm italic text-muted-foreground">
                "Vielen Dank für Ihre positive Rückmeldung! Es freut uns sehr, dass Sie mit 
                unserer Betreuung zufrieden sind. Wir sind jederzeit gerne für Sie da."
              </p>
            </div>
            
            <div className="bg-background rounded p-4">
              <p className="font-medium text-yellow-600 mb-2">Kritische Bewertung (3 Sterne)</p>
              <p className="text-sm italic text-muted-foreground">
                "Danke für Ihr Feedback. Wir nehmen jeden Hinweis ernst und arbeiten 
                kontinuierlich an Verbesserungen. Bitte kontaktieren Sie uns direkt, 
                damit wir Ihr Anliegen persönlich besprechen können."
              </p>
            </div>
            
            <div className="bg-background rounded p-4">
              <p className="font-medium text-red-600 mb-2">Negative Bewertung (1-2 Sterne)</p>
              <p className="text-sm italic text-muted-foreground">
                "Es tut uns leid zu hören, dass Ihre Erwartungen nicht erfüllt wurden. 
                Wir laden Sie herzlich ein, uns unter [Telefon] zu kontaktieren, um Ihr 
                Anliegen zu besprechen. Ihre Zufriedenheit ist uns wichtig."
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-200">
              <strong>⚠️ Wichtig:</strong> Bestätigen Sie NIEMALS das Arzt-Patienten-Verhältnis 
              in öffentlichen Antworten. Vermeiden Sie Formulierungen wie "Bei Ihrer Behandlung..." 
              oder "Als Sie bei uns waren...".
            </p>
          </div>
        </div>

        <h3>Bewertungen ethisch sammeln</h3>

        <p>
          Sie dürfen Patienten auf Bewertungsmöglichkeiten hinweisen – aber mit Maß:
        </p>

        <ul className="my-4 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 shrink-0" />
            <span>Dezenter Hinweis an der Rezeption: "Ihre Meinung ist uns wichtig"</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 shrink-0" />
            <span>QR-Code zu Google/Jameda in der Praxis</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 shrink-0" />
            <span>Freundliche Erinnerung per E-Mail (mit Opt-in!)</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="h-5 w-5 mt-0.5 text-red-500 shrink-0" />
            <span>Niemals Rabatte oder Geschenke für Bewertungen anbieten</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="h-5 w-5 mt-0.5 text-red-500 shrink-0" />
            <span>Keinen Druck ausüben oder gezielt nur zufriedene Patienten ansprechen</span>
          </li>
        </ul>

        <p>
          Weitere Strategien für den Umgang mit negativen Bewertungen finden Sie in unserem 
          Artikel zu <Link to="/blog/google-bewertungen-sammeln" className="text-primary hover:underline">
          Google Bewertungen</Link>.
        </p>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="mb-12">
        <h2>Erfolgsbeispiel: Arztpraxis mit Local SEO</h2>
        {industryCaseStudies.aerzte.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
        <p className="text-muted-foreground italic text-sm mt-4">
          * Anonymisiertes Beispiel basierend auf typischen Ergebnissen. Individuelle Ergebnisse können variieren.
        </p>
      </section>

      <ArticleCTA />

      {industryStats.aerzte?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.aerzte} />

      <IndustryBenchmarkTable data={industryBenchmarkData.aerzte} />

      <IndustryComparisonTable data={industryComparisonData.aerzte} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Darf ich als Arzt aktiv um Bewertungen bitten?</AccordionTrigger>
            <AccordionContent>
              <p>
                Ja, Sie dürfen Patienten höflich auf die Möglichkeit einer Bewertung hinweisen. 
                <strong> Wichtig:</strong> Keine Belohnungen oder Rabatte im Gegenzug anbieten – 
                das verstößt gegen das ärztliche Berufsrecht und die Richtlinien der Bewertungsportale.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie antworte ich auf negative Bewertungen ohne Datenschutz zu verletzen?</AccordionTrigger>
            <AccordionContent>
              <p>
                Bestätigen Sie niemals das Arzt-Patienten-Verhältnis öffentlich. Antworten Sie 
                allgemein: "Wir nehmen Feedback ernst und laden Sie ein, uns direkt zu kontaktieren." 
                Nennen Sie keine Behandlungsdetails.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Ist Jameda Premium die Investition wert?</AccordionTrigger>
            <AccordionContent>
              <p>
                Für die meisten Praxen ja. Jameda Premium (ab 59€/Monat) bietet bessere Sichtbarkeit, 
                keine Werbung für Mitbewerber auf Ihrem Profil und erweiterte Funktionen. Der ROI ist 
                meist positiv, wenn dadurch 1-2 Neupatienten pro Monat gewonnen werden.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Welche Google Business Kategorie für Gemeinschaftspraxen?</AccordionTrigger>
            <AccordionContent>
              <p>
                Wählen Sie die Hauptkategorie nach dem Praxisschwerpunkt (z.B. "Hausarztpraxis"). 
                Für MVZs mit verschiedenen Fachrichtungen können Sie ein Hauptprofil plus separate 
                Profile für jede Fachabteilung anlegen.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Wie wichtig sind Arztportale vs. Google Bewertungen?</AccordionTrigger>
            <AccordionContent>
              <p>
                Beide sind wichtig, aber für unterschiedliche Zwecke. Google Bewertungen beeinflussen 
                Ihr lokales Ranking direkt. Arztportale wie Jameda sind oft die erste Anlaufstelle 
                für Patienten, die gezielt einen Spezialisten suchen. Idealerweise pflegen Sie beide aktiv.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Darf ich Behandlungsergebnisse auf meiner Website zeigen?</AccordionTrigger>
            <AccordionContent>
              <p>
                Nur mit schriftlicher Einwilligung des Patienten und unter Beachtung des 
                Heilmittelwerbegesetzes (HWG). Vorher-Nachher-Bilder sind bei vielen Behandlungen 
                nicht erlaubt. Bei Zahnärzten und ästhetischen Eingriffen gelten besondere Regeln.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Wie gehe ich mit Fake-Bewertungen um?</AccordionTrigger>
            <AccordionContent>
              <p>
                Melden Sie offensichtliche Fake-Bewertungen direkt beim Portal mit Begründung. 
                Bei falschen Tatsachenbehauptungen haben Sie einen Löschungsanspruch. 
                Dokumentieren Sie alles für eventuelle rechtliche Schritte.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Braucht jeder Arzt in der Gemeinschaftspraxis ein eigenes Profil?</AccordionTrigger>
            <AccordionContent>
              <p>
                Auf Arztportalen: Ja, jeder Arzt sollte ein eigenes Profil haben. Bei Google Business: 
                Die Praxis hat ein Profil, einzelne Ärzte können im "Team"-Bereich vorgestellt werden. 
                Bei MVZs mit verschiedenen Standorten: Jeder Standort braucht ein eigenes Google-Profil.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Welche SEO-Maßnahmen sind für Ärzte erlaubt?</AccordionTrigger>
            <AccordionContent>
              <p>
                Alle seriösen SEO-Maßnahmen sind erlaubt: Website-Optimierung, Google Business Profil, 
                Einträge in Arztportalen, informative Inhalte. Verboten sind: irreführende Werbung, 
                Heilversprechen, unlautere Methoden wie gekaufte Bewertungen.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Wie lange dauert es, bis Local SEO Ergebnisse zeigt?</AccordionTrigger>
            <AccordionContent>
              <p>
                Erste Verbesserungen sind oft nach 4-8 Wochen sichtbar. Signifikante Ranking-Verbesserungen 
                dauern 3-6 Monate. Der Aufbau einer starken Online-Reputation (Bewertungen, Autorität) 
                ist ein kontinuierlicher Prozess über 12+ Monate.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger>Soll ich einen Blog mit Gesundheitstipps führen?</AccordionTrigger>
            <AccordionContent>
              <p>
                Ein Praxisblog kann sehr wertvoll sein – aber nur bei korrekter Umsetzung. 
                Alle Inhalte müssen medizinisch korrekt, aktuell und mit Autor (Arzt) versehen sein. 
                Halbherzige oder veraltete Inhalte schaden mehr als sie nützen.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger>Wie wichtig ist die Praxis-Website für das Google Ranking?</AccordionTrigger>
            <AccordionContent>
              <p>
                Sehr wichtig. Die Website ist die Basis Ihrer Online-Präsenz. Sie muss mobilfreundlich, 
                schnell, mit korrekten NAP-Daten und relevanten lokalen Inhalten ausgestattet sein. 
                Google verknüpft Ihr Business Profil mit der Website-Autorität.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <IndustryLandingCTA industry="arztpraxis" />

      {/* Final CTA */}
      <section className="mb-12">
        <h2>Fazit: Local SEO für Ärzte lohnt sich</h2>

        <p>
          Die Investition in Local SEO zahlt sich für Arztpraxen mehrfach aus: Mehr Sichtbarkeit, 
          mehr Neupatienten, bessere Reputation. Der Schlüssel liegt in der konsequenten Umsetzung 
          unter Beachtung der besonderen Anforderungen des Gesundheitssektors.
        </p>

        <p>
          <strong>Die wichtigsten Schritte zusammengefasst:</strong>
        </p>

        <ol className="my-4 space-y-2">
          <li>1. YMYL-konforme Website mit E-E-A-T-Signalen aufbauen</li>
          <li>2. Google Business Profile vollständig optimieren</li>
          <li>3. Arztportale (besonders Jameda) aktiv pflegen</li>
          <li>4. Fachspezifische Keywords gezielt einsetzen</li>
          <li>5. Bewertungsmanagement rechtssicher etablieren</li>
          <li>6. <Link to="/blog/nap-konsistenz" className="text-primary hover:underline">NAP-Konsistenz</Link> in allen Verzeichnissen sicherstellen</li>
        </ol>

        <p>
          Starten Sie heute mit der Optimierung Ihrer Praxis-Präsenz und sichern Sie sich einen 
          Wettbewerbsvorteil in Ihrer Region.
        </p>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-aerzte-praxen" />
    </ArticleLayout>
  );
};

export default LocalSeoAerzte;
