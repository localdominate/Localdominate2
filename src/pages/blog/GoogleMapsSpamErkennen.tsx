import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  AlertTriangle,
  Search,
  Flag,
  CheckCircle,
  XCircle,
  Eye,
  FileWarning,
  Users,
  MapPin,
  Scale,
  Zap,
} from "lucide-react";

const GoogleMapsSpamErkennen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-spam-erkennen", language);

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-spam", title: "Was ist Google Maps Spam?" },
    { id: "spam-arten", title: "Die 8 häufigsten Spam-Arten" },
    { id: "erkennung", title: "Spam erkennen: Checkliste" },
    { id: "melden", title: "Spam melden: Schritt-für-Schritt" },
    { id: "eigenes-profil", title: "Eigenes Profil schützen" },
    { id: "google-richtlinien", title: "Google-Richtlinien verstehen" },
    { id: "auswirkungen", title: "Auswirkungen auf dein Ranking" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Wie lange dauert es, bis Google gemeldeten Spam entfernt?",
      answer:
        "In der Regel 3-7 Werktage bei einfachen Fällen. Komplexere Fälle wie gefälschte Standorte oder Keyword-Stuffing im Namen können 2-4 Wochen dauern. Bei Massenspam über das Redressal-Formular reagiert Google oft schneller.",
    },
    {
      question: "Kann ich einen Konkurrenten melden, der Keywords im Firmennamen hat?",
      answer:
        "Ja, wenn der angezeigte Name nicht dem echten, rechtlich eingetragenen Geschäftsnamen entspricht, verstößt das gegen Googles Richtlinien. Melden Sie es über 'Änderung vorschlagen' im Google Maps Eintrag oder über das Business Redressal-Formular.",
    },
    {
      question: "Was passiert, wenn mein eigener Eintrag fälschlich als Spam gemeldet wird?",
      answer:
        "Wenn Ihr Eintrag zu Unrecht suspendiert wird, können Sie über das Google Business Support-Formular eine Überprüfung beantragen. Halten Sie Nachweise bereit: Gewerbeanmeldung, Mietvertrag, Fotos des Standorts. Die Wiederherstellung dauert in der Regel 1-2 Wochen.",
    },
    {
      question: "Sind gefälschte Bewertungen auch Google Maps Spam?",
      answer:
        "Ja, gefälschte Bewertungen - sowohl positive eigene als auch negative für Konkurrenten - sind ein Verstoß gegen Googles Richtlinien. Sie können einzelne Bewertungen direkt in Google Maps melden.",
    },
    {
      question: "Lohnt es sich, Spam-Konkurrenten zu melden?",
      answer:
        "Absolut. Spam-Profile erschleichen sich unfaire Ranking-Vorteile. Wenn ein Konkurrent durch Keyword-Stuffing oder gefälschte Standorte vor Ihnen rankt, kann eine erfolgreiche Meldung Ihre eigene Position verbessern. Es ist auch ein Beitrag zur Qualität der lokalen Suchergebnisse.",
    },
    {
      question: "Kann Google Maps Spam automatisch erkennen?",
      answer:
        "Ja, Google nutzt KI-basierte Systeme und hat 2024 über 200 Millionen gefälschte Beiträge und 12 Millionen Fake-Profile entfernt. Aber das System ist nicht perfekt - manuelle Meldungen helfen Google, Spam schneller zu identifizieren.",
    },
  ];

  const spamArten = [
    {
      icon: <FileWarning className="h-6 w-6 text-red-500" />,
      title: "Keyword-Stuffing im Firmennamen",
      description:
        'Statt "Müller Sanitär" steht "Müller Sanitär | Klempner | Notdienst | 24h | Hamburg | Günstig" im Profil.',
      severity: "Sehr häufig",
      example:
        'Real: "Pizza Roma" → Spam: "Pizza Roma | Beste Pizza | Lieferdienst | Italienisch Hamburg"',
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: "Gefälschte Standorte",
      description:
        "Unternehmen erstellen Einträge an Adressen, an denen sie physisch nicht präsent sind, um in mehr Gebieten zu ranken.",
      severity: "Häufig",
      example:
        "Ein Schlüsseldienst aus Berlin erstellt 15 Profile in verschiedenen Stadtteilen mit virtuellen Büros.",
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Gefälschte Bewertungen",
      description:
        "Kauf positiver Bewertungen oder Erstellen negativer Bewertungen für Konkurrenten.",
      severity: "Sehr häufig",
      example:
        "20 Fünf-Sterne-Bewertungen in einer Woche, alle von Profilen ohne Profilbild und nur 1 Bewertung.",
    },
    {
      icon: <Eye className="h-6 w-6 text-red-500" />,
      title: "Doppelte Einträge",
      description:
        "Dasselbe Unternehmen erstellt mehrere Profile für den gleichen Standort, um mehr Plätze im Local Pack zu belegen.",
      severity: "Häufig",
      example:
        '"Meier Rechtsanwalt", "Kanzlei Meier", "RA Meier Hamburg" - alles derselbe Anwalt.',
    },
    {
      icon: <Scale className="h-6 w-6 text-red-500" />,
      title: "Falsche Kategorien",
      description:
        "Unternehmen wählen irrelevante Kategorien, um für mehr Suchanfragen zu erscheinen.",
      severity: "Mittel",
      example:
        'Ein Friseur fügt "Schönheitssalon", "Nagelstudio", "Massagepraxis" als Kategorien hinzu, obwohl er nur Haare schneidet.',
    },
    {
      icon: <Flag className="h-6 w-6 text-red-500" />,
      title: "Lead-Generator-Spam",
      description:
        "Fake-Profile, die Anfragen sammeln und an echte Unternehmen weiterverkaufen (häufig bei Schlüsseldiensten, Rohrreinigern).",
      severity: "Häufig",
      example:
        "10 verschiedene Schlüsseldienst-Profile in einer Stadt, die alle zur selben Telefonnummer weiterleiten.",
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: "Manipulierte Fotos",
      description:
        "Verwendung von Stock-Fotos, Fotos anderer Unternehmen oder KI-generierte Bilder statt echter Geschäftsfotos.",
      severity: "Mittel",
      example:
        "Ein Restaurant zeigt professionelle Stock-Fotos von Gerichten, die es gar nicht anbietet.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "Service-Area-Missbrauch",
      description:
        "Unternehmen geben ein unrealistisch großes Einzugsgebiet an, um überall sichtbar zu sein.",
      severity: "Mittel",
      example:
        'Ein Handwerker aus München gibt ganz Bayern als Servicegebiet an, obwohl er nur im Umkreis von 30 km arbeitet.',
    },
  ];

  const meldeSchritte = [
    {
      title: "Methode 1: Direkt in Google Maps",
      steps: [
        "Öffne Google Maps und suche den verdächtigen Eintrag",
        'Klicke auf den Firmennamen, um das Profil zu öffnen',
        'Scrolle nach unten und klicke auf "Änderung vorschlagen"',
        'Wähle "Schließen oder entfernen" → "Spam oder Fake"',
        "Beschreibe das Problem möglichst detailliert",
        "Absenden und auf Googles Überprüfung warten (3-7 Tage)",
      ],
    },
    {
      title: "Methode 2: Business Redressal-Formular",
      steps: [
        "Öffne das Google Business Redressal-Formular (support.google.com/business/contact/business_redressal_form)",
        "Melde dich mit deinem Google-Konto an",
        "Fülle alle Pflichtfelder aus: Dein Unternehmen, das Spam-Profil, die Art des Verstoßes",
        "Lade Screenshots als Beweise hoch",
        "Beschreibe den Verstoß detailliert mit konkreten Beispielen",
        "Absenden - Google antwortet normalerweise innerhalb von 3-5 Werktagen",
      ],
    },
    {
      title: "Methode 3: Gefälschte Bewertungen melden",
      steps: [
        "Öffne die verdächtige Bewertung in Google Maps",
        "Klicke auf die drei Punkte neben der Bewertung",
        'Wähle "Als unangemessen melden"',
        "Wähle den passenden Grund (Spam, Fake, Off-Topic, etc.)",
        "Optional: Mehrere Team-Mitglieder melden die gleiche Bewertung",
        "Ergebnis: Google prüft in 3-14 Tagen",
      ],
    },
  ];

  const erkennungsCheckliste = [
    {
      kategorie: "Firmennamen prüfen",
      icon: <Search className="h-5 w-5 text-primary" />,
      punkte: [
        "Enthält der Name unnatürlich viele Keywords?",
        "Stimmt der Name mit dem Schild am Gebäude überein?",
        "Ist der Name im Handelsregister so eingetragen?",
        "Enthält der Name Städtenamen oder Servicebeschreibungen?",
      ],
    },
    {
      kategorie: "Standort verifizieren",
      icon: <MapPin className="h-5 w-5 text-primary" />,
      punkte: [
        "Existiert die angegebene Adresse wirklich?",
        "Zeigt Street View ein echtes Geschäft?",
        "Teilen sich mehrere Unternehmen dieselbe Adresse?",
        "Ist es eine virtuelle Büroadresse oder ein Co-Working Space?",
      ],
    },
    {
      kategorie: "Bewertungen analysieren",
      icon: <Users className="h-5 w-5 text-primary" />,
      punkte: [
        "Kommen viele Bewertungen in kurzer Zeit?",
        "Haben die Reviewer nur 1-2 Bewertungen insgesamt?",
        "Fehlen Profilbilder bei den meisten Reviewern?",
        "Sind die Texte auffällig ähnlich oder generisch?",
      ],
    },
    {
      kategorie: "Profilvollständigkeit",
      icon: <Eye className="h-5 w-5 text-primary" />,
      punkte: [
        "Gibt es echte Fotos oder nur Stock-Bilder?",
        "Stimmt die Website mit dem angegebenen Unternehmen überein?",
        "Sind die Öffnungszeiten realistisch (24/7 bei einem Einzelhändler)?",
        "Gibt es Google Posts oder andere Aktivitätszeichen?",
      ],
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-red-500/5 to-red-500/10 border-red-500/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-red-600">200 Mio+</div>
            <div className="text-sm text-muted-foreground">
              Fake-Beiträge entfernt (2024)
            </div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-red-500/5 to-red-500/10 border-red-500/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-red-600">12 Mio</div>
            <div className="text-sm text-muted-foreground">
              Fake-Profile gelöscht
            </div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">73%</div>
            <div className="text-sm text-muted-foreground">
              der Spam-Meldungen erfolgreich
            </div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">3-7 Tage</div>
            <div className="text-sm text-muted-foreground">
              bis zur Spam-Entfernung
            </div>
          </CardContent>
        </Card>
      </div>

      <AutoLexikonParagraph>
        <p className="lead text-xl text-muted-foreground mb-8" id="intro">
          <strong>
            Google Maps Spam schadet nicht nur der Suchqualität - er schadet
            deinem Ranking.
          </strong>{" "}
          Gefälschte Einträge, Keyword-Stuffing und Fake-Bewertungen
          verschaffen unlauteren Konkurrenten Vorteile auf Kosten ehrlicher
          Unternehmen. Dieser Guide zeigt dir, wie du Spam erkennst, meldest
          und dein eigenes{" "}
          <Link
            to="/blog/google-my-business-optimieren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Business Profil
          </Link>{" "}
          vor Angriffen schützt.
        </p>
      </AutoLexikonParagraph>

      <KeyTakeawaysBox
        items={[
          "Die 8 häufigsten Spam-Arten auf Google Maps erkennen",
          "3 Methoden zum Melden: Maps, Redressal-Formular, Bewertungen",
          "Checkliste zur Spam-Erkennung bei Konkurrenten",
          "So schützt du dein eigenes Profil vor Spam-Angriffen",
          "Google-Richtlinien verstehen und einhalten",
        ]}
      />

      <BlogCTAABTest
        articleSlug="google-maps-spam-erkennen"
        position="intro"
      />

      {/* Was ist Spam */}
      <section id="was-ist-spam" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Was ist Google Maps Spam?
        </h2>

        <AutoLexikonParagraph>
          <p className="mb-6">
            Google Maps Spam umfasst alle <strong>manipulativen Praktiken</strong>,
            die darauf abzielen, einem Unternehmen einen unfairen Vorteil in den
            lokalen Suchergebnissen zu verschaffen. Das reicht von
            Keyword-Stuffing im Firmennamen über gefälschte Standorte bis hin zu
            gekauften Bewertungen.
          </p>
        </AutoLexikonParagraph>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Warum ist Spam ein Problem?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                • <strong>Unfaire Rankings:</strong> Spam-Profile verdrängen
                legitime Unternehmen
              </p>
              <p>
                • <strong>Vertrauensverlust:</strong> Kunden werden zu
                unseriösen Anbietern geleitet
              </p>
              <p>
                • <strong>Preismanipulation:</strong> Besonders bei
                Notdiensten werden Kunden abgezockt
              </p>
              <p>
                • <strong>Qualitätsverlust:</strong> Die Gesamtqualität der
                Suchergebnisse sinkt
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Was Google dagegen tut
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                • <strong>KI-Erkennung:</strong> Automatische Spam-Filter
              </p>
              <p>
                • <strong>Manuelle Prüfung:</strong> Team für gemeldete Fälle
              </p>
              <p>
                • <strong>2024 Bilanz:</strong> 200 Mio+ Fake-Beiträge
                entfernt
              </p>
              <p>
                • <strong>Suspendierung:</strong> Wiederholte Verstöße führen
                zur Profilsperrung
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8 Spam-Arten */}
      <section id="spam-arten" className="mb-12">
        <h2 className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          Die 8 häufigsten Spam-Arten auf Google Maps
        </h2>

        <p className="mb-6">
          Um Spam effektiv zu bekämpfen, musst du ihn zuerst erkennen. Hier
          sind die häufigsten Formen von Google Maps Spam mit konkreten
          Beispielen:
        </p>

        <div className="space-y-4 mb-8">
          {spamArten.map((spam, index) => (
            <Card key={index} className="border-l-4 border-l-red-500/70">
              <CardContent className="pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{spam.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{spam.title}</h3>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          spam.severity === "Sehr häufig"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : spam.severity === "Häufig"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {spam.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {spam.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3 text-sm">
                      <strong>Beispiel:</strong>{" "}
                      <span className="text-muted-foreground">
                        {spam.example}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          Mehr zum Thema manipulierte Profile:{" "}
          <Link
            to="/blog/duplicate-listing-entfernen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Doppelte Einträge entfernen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/gbp-suspendiert-reaktivieren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Suspendiertes Profil reaktivieren
          </Link>
          .
        </p>
      </section>

      <BlogCTAABTest
        articleSlug="google-maps-spam-erkennen"
        position="middle"
      />

      {/* Erkennung */}
      <section id="erkennung" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Spam erkennen: Deine Checkliste
        </h2>

        <p className="mb-6">
          Nutze diese systematische Checkliste, um verdächtige Einträge in
          deiner Branche und Region zu identifizieren:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {erkennungsCheckliste.map((kategorie, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {kategorie.icon}
                  {kategorie.kategorie}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {kategorie.punkte.map((punkt, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
            <p className="text-sm">
              <strong>Profi-Tipp:</strong> Nutze Google Street View, um
              angegebene Adressen zu verifizieren. Viele Spam-Profile führen
              zu Wohnhäusern, leeren Grundstücken oder Gebäuden ohne
              sichtbares Geschäft.
            </p>
          </div>
        </div>
      </section>

      {/* Melden */}
      <section id="melden" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Flag className="h-6 w-6 text-primary" />
          Spam melden: Schritt-für-Schritt Anleitung
        </h2>

        <p className="mb-6">
          Es gibt drei Hauptwege, Google Maps Spam zu melden. Die Wahl der
          Methode hängt von der Art des Spam ab:
        </p>

        <div className="space-y-6 mb-8">
          {meldeSchritte.map((methode, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  {methode.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {methode.steps.map((step, sIndex) => (
                    <li
                      key={sIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="bg-muted text-muted-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {sIndex + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Effektivitäts-Vergleich */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Methode</th>
                <th className="border border-border p-3 text-left">
                  Beste für
                </th>
                <th className="border border-border p-3 text-left">
                  Reaktionszeit
                </th>
                <th className="border border-border p-3 text-left">
                  Erfolgsrate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">
                  Google Maps direkt
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  Einzelne Spam-Profile
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  3-7 Tage
                </td>
                <td className="border border-border p-3">
                  <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-0.5 rounded text-xs">
                    Mittel
                  </span>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="border border-border p-3 font-medium">
                  Redressal-Formular
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  Schwere Verstöße, Massenspam
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  3-5 Tage
                </td>
                <td className="border border-border p-3">
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded text-xs">
                    Hoch
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">
                  Bewertungen melden
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  Fake-Reviews
                </td>
                <td className="border border-border p-3 text-muted-foreground">
                  3-14 Tage
                </td>
                <td className="border border-border p-3">
                  <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-0.5 rounded text-xs">
                    Mittel
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Eigenes Profil schützen */}
      <section id="eigenes-profil" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Eigenes Profil vor Spam-Angriffen schützen
        </h2>

        <p className="mb-6">
          Auch dein eigenes Profil kann Ziel von Spam-Angriffen werden -
          z.B. durch gefälschte negative Bewertungen oder manipulierte
          Änderungsvorschläge. So schützt du dich:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Präventive Maßnahmen</h3>
            {[
              "Profil zu 100% vervollständigen - lückenlose Profile sind schwerer angreifbar",
              "Eigene Fotos regelmäßig hochladen, damit Spam-Fotos nicht dominieren",
              "Google Business Benachrichtigungen aktivieren für Änderungsvorschläge",
              "Profil mindestens wöchentlich auf unautorisierte Änderungen prüfen",
              "Verifizierung abschließen - verifizierte Profile sind besser geschützt",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Bei einem Angriff</h3>
            {[
              "Fake-Bewertungen sofort melden und dokumentieren (Screenshots!)",
              "Bei falschen Änderungsvorschlägen: Korrekte Infos erneut bestätigen",
              "Google Support kontaktieren bei wiederholten Angriffen",
              "Eigene echte Bewertungen aktiv sammeln als Gegengewicht",
              "Rechtliche Schritte prüfen bei nachweislicher Verleumdung",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          Weitere Schutzstrategien:{" "}
          <Link
            to="/blog/negative-google-bewertungen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Negative Bewertungen managen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/gbp-bewertung-loeschen-anleitung"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Bewertungen löschen lassen
          </Link>
          .
        </p>
      </section>

      {/* Google-Richtlinien */}
      <section id="google-richtlinien" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          Google-Richtlinien verstehen
        </h2>

        <p className="mb-6">
          Um Spam zu erkennen, musst du wissen, was Google erlaubt und was
          nicht. Hier die wichtigsten Regeln:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-600 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Erlaubt
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>✅ Echter, rechtlich registrierter Geschäftsname</p>
              <p>✅ Reale Adresse mit physischer Präsenz</p>
              <p>✅ Echte Kunden um Bewertungen bitten</p>
              <p>✅ Alle relevanten Kategorien hinzufügen</p>
              <p>✅ Echte Fotos des Geschäfts hochladen</p>
              <p>✅ Realistisches Servicegebiet angeben</p>
            </CardContent>
          </Card>

          <Card className="border-red-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-600 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Verboten
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>❌ Keywords im Geschäftsnamen hinzufügen</p>
              <p>❌ Fake-Adressen oder virtuelle Büros nutzen</p>
              <p>❌ Bewertungen kaufen oder tauschen</p>
              <p>❌ Irrelevante Kategorien wählen</p>
              <p>❌ Stock-Fotos als eigene Bilder ausgeben</p>
              <p>❌ Mehrere Profile für einen Standort erstellen</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Auswirkungen */}
      <section id="auswirkungen" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Auswirkungen von Spam auf dein Ranking
        </h2>

        <p className="mb-6">
          Spam-Profile in deiner Branche beeinflussen dein{" "}
          <Link
            to="/blog/google-maps-seo-ranking-faktoren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Maps Ranking
          </Link>{" "}
          direkt:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">
                  Spam-Art
                </th>
                <th className="border border-border p-3 text-left">
                  Ranking-Auswirkung
                </th>
                <th className="border border-border p-3 text-left">
                  Deine Gegenmaßnahme
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  art: "Keyword-Stuffing im Namen",
                  auswirkung: "Spam-Profil rankt unfair höher",
                  gegen: "Melden + eigenes SEO optimieren",
                },
                {
                  art: "Gefälschte Standorte",
                  auswirkung: "Mehr Konkurrenz im Local Pack",
                  gegen: "Über Redressal-Formular melden",
                },
                {
                  art: "Fake-Bewertungen (positiv)",
                  auswirkung: "Höherer Durchschnitt des Konkurrenten",
                  gegen:
                    "Bewertungen melden + eigene echte sammeln",
                },
                {
                  art: "Fake-Bewertungen (negativ, gegen dich)",
                  auswirkung: "Dein Durchschnitt sinkt",
                  gegen: "Sofort melden + Google Support kontaktieren",
                },
                {
                  art: "Doppelte Listings",
                  auswirkung: "Konkurrent belegt mehrere Plätze",
                  gegen: "Alle Duplikate einzeln melden",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-muted/20" : ""}
                >
                  <td className="border border-border p-3 font-medium">
                    {row.art}
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">
                    {row.auswirkung}
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">
                    {row.gegen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Stärke dein eigenes Profil:{" "}
          <Link
            to="/blog/google-maps-ranking-verbessern"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Maps Ranking verbessern
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/google-bewertungen-bekommen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Mehr echte Bewertungen sammeln
          </Link>
          .
        </p>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Fazit: Aktiv gegen Spam vorgehen
        </h2>

        <p className="mb-4">
          Google Maps Spam ist ein ernstes Problem, aber du bist nicht
          machtlos. Durch regelmäßiges Monitoring, konsequentes Melden und
          die Stärkung deines eigenen Profils kannst du dafür sorgen, dass
          faire Bedingungen herrschen.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">
            Dein Anti-Spam Aktionsplan:
          </h3>
          <ol className="space-y-3">
            {[
              "Wöchentlich: Top-5-Suchanfragen checken und Spam-Profile identifizieren",
              "Bei Spam: Screenshot machen und über das passende Formular melden",
              "Eigenes Profil: Zu 100% vervollständigen und regelmäßig aktualisieren",
              "Bewertungen: Aktiv echte Reviews sammeln als Schutzschild",
              "Benachrichtigungen: Google Alerts für Änderungsvorschläge aktivieren",
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection
        sources={[
          {
            title: "Google: Richtlinien für Unternehmensprofile",
            url: "https://support.google.com/business/answer/3038177",
            type: "documentation",
            description:
              "Offizielle Google-Richtlinien für Google Business Profile",
          },
          {
            title: "Google: Fake Engagement Transparency Report 2024",
            url: "https://blog.google/products/maps/google-maps-fake-reviews-2024/",
            type: "study",
            description:
              "Googles Transparenzbericht zu entferntem Spam",
          },
          {
            title: "Google Business Redressal Form",
            url: "https://support.google.com/business/contact/business_redressal_form",
            type: "documentation",
            description:
              "Offizielles Formular zum Melden von Richtlinienverstößen",
          },
          {
            title: "Sterling Sky: Fighting Google Maps Spam",
            url: "https://www.sterlingsky.ca/fighting-google-maps-spam/",
            type: "article",
            description:
              "Praxisguide zur Spam-Bekämpfung von Local SEO Experten",
          },
        ]}
      />

      <HelpfulnessWidget articleSlug="google-maps-spam-erkennen" />
    </ArticleLayout>
  );
};

export default GoogleMapsSpamErkennen;
