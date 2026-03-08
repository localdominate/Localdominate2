import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import ReviewResponseGenerator from "@/components/blog/ReviewResponseGenerator";
import ReviewResponseTemplates from "@/components/blog/ReviewResponseTemplates";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import StepByStepProcess from "@/components/blog/StepByStepProcess";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Shield, 
  Scale,
  Flag,
  TrendingDown,
  Heart,
  Lightbulb,
  FileWarning,
  Ban
} from "lucide-react";
import { Link } from "react-router-dom";

const NegativeGoogleBewertungen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("negative-google-bewertungen", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "psychologie", title: "Psychologie negativer Bewertungen" },
    { id: "antwort-struktur", title: "Die perfekte Antwort (HEART)" },
    { id: "loeschen", title: "Wann Löschen möglich ist" },
    { id: "fake-bewertungen", title: "Fake-Bewertungen erkennen" },
    { id: "praevention", title: "Prävention" },
    { id: "generator", title: "Antwort-Generator" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Sollte ich auf jede negative Bewertung antworten?", answer: "Ja, Sie sollten auf jede negative Bewertung antworten. Studien zeigen, dass 45% der Kunden eher bei einem Unternehmen kaufen, das auf Kritik reagiert. Eine professionelle Antwort zeigt anderen potenziellen Kunden, dass Sie Feedback ernst nehmen." },
    { question: "Wie schnell sollte ich auf negative Bewertungen reagieren?", answer: "Idealerweise innerhalb von 24-48 Stunden. 53% der Kunden erwarten eine Antwort innerhalb einer Woche. Schnelle Reaktionen zeigen Engagement und können die Situation oft noch retten." },
    { question: "Darf ich den Kunden bitten, seine Bewertung zu ändern?", answer: "Ja, aber nur nachdem Sie das Problem tatsächlich gelöst haben. Bitten Sie niemals um eine Änderung ohne vorherige Problemlösung. Ein freundlicher Hinweis wie 'Wir würden uns freuen, wenn Sie Ihre Erfahrung aktualisieren' ist akzeptabel." },
    { question: "Kann ich rechtlich gegen negative Bewertungen vorgehen?", answer: "Nur bei falschen Tatsachenbehauptungen oder Beleidigungen. Meinungsäusserungen sind durch die Meinungsfreiheit geschützt. Rechtliche Schritte sind teuer und sollten nur als letztes Mittel in Betracht gezogen werden." },
    { question: "Wie gehe ich mit 1-Stern-Bewertungen ohne Text um?", answer: "Antworten Sie höflich und bitten Sie um mehr Informationen: 'Es tut uns leid, dass Sie unzufrieden waren. Damit wir uns verbessern können, würden wir gerne mehr erfahren. Bitte kontaktieren Sie uns unter [Kontakt].'" },
    { question: "Wann lohnt sich ein Anwalt bei Fake-Bewertungen?", answer: "Erst wenn Google die Bewertung nicht entfernt und ein erheblicher Geschäftsschaden nachweisbar ist. Anwaltskosten beginnen bei ca. 500-1.000€. Dokumentieren Sie alle Beweise vorher sorgfältig." },
    { question: "Wie verhindere ich emotionale Reaktionen auf Kritik?", answer: "Warten Sie mindestens 1-2 Stunden vor der Antwort. Lesen Sie die Bewertung mehrmals. Lassen Sie einen Kollegen gegenlesen. Nutzen Sie Vorlagen als Ausgangspunkt. Erinnern Sie sich: Die Antwort ist für alle sichtbar." },
    { question: "Kann ich negative Bewertungen ausblenden lassen?", answer: "Nein, Google erlaubt kein Ausblenden von Bewertungen. Sie können nur gegen Richtlinienverstösse melden. Die beste Strategie ist, durch viele positive Bewertungen die negativen zu relativieren." },
    { question: "Wie lange bleiben Bewertungen sichtbar?", answer: "Google Bewertungen bleiben grundsätzlich unbegrenzt sichtbar. Sie können nur durch Löschung seitens des Verfassers, erfolgreiche Meldung bei Richtlinienverstoss oder rechtliche Anordnung entfernt werden." },
    { question: "Beeinflusst meine Antwort das Google-Ranking?", answer: "Indirekt ja. Google bewertet Engagement positiv. Antworten auf Bewertungen signalisieren Aktivität und Kundenorientierung. Dies kann sich positiv auf das lokale Ranking auswirken." },
    { question: "Was tun bei offensichtlich falschen Behauptungen?", answer: "Dokumentieren Sie die Falschbehauptung, antworten Sie sachlich und korrigieren Sie höflich. Melden Sie die Bewertung bei Google. Bei nachweislich falschen Tatsachenbehauptungen können Sie rechtliche Schritte prüfen." },
    { question: "Sollte ich negative Bewertungen öffentlich diskutieren?", answer: "Nein, vermeiden Sie öffentliche Diskussionen. Antworten Sie einmal professionell und bieten Sie den direkten Kontakt an. Lange öffentliche Debatten schaden dem Image und wirken unprofessionell." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 not-prose">
        <Card className="text-center bg-gradient-to-br from-red-50 to-white border-red-100">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-red-600">94%</div>
            <p className="text-sm text-muted-foreground mt-1">vermeiden Geschäfte nach negativen Bewertungen</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-green-50 to-white border-green-100">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600">45%</div>
            <p className="text-sm text-muted-foreground mt-1">kaufen eher bei Unternehmen die antworten</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-blue-50 to-white border-blue-100">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-600">53%</div>
            <p className="text-sm text-muted-foreground mt-1">erwarten Antwort innerhalb 1 Woche</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-purple-600">70%</div>
            <p className="text-sm text-muted-foreground mt-1">ändern Meinung nach guter Antwort</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Negative Bewertungen gehören zum Geschäftsleben</strong> – selbst die besten 
          Unternehmen erhalten sie. Der entscheidende Unterschied zwischen erfolgreichen und 
          erfolglosen Unternehmen liegt nicht in der Vermeidung negativer Bewertungen, sondern 
          in der <strong>professionellen Reaktion</strong> darauf.
        </p>

        <p>
          Eine gut formulierte Antwort auf eine negative Bewertung kann mehr Vertrauen schaffen 
          als zehn positive Bewertungen. Sie zeigt potenziellen Kunden, dass Ihnen Feedback wichtig 
          ist und Sie sich um Problemlösungen bemühen. In diesem umfassenden Guide erfahren Sie:
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span>Warum Menschen negative Bewertungen schreiben (Psychologie)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span>Die <strong>HEART-Methode</strong> für perfekte Antworten</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span>Wann und wie Sie Bewertungen löschen lassen können</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span>Fake-Bewertungen erkennen und melden</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span>Unseren <strong>interaktiven Antwort-Generator</strong> für sofort nutzbare Vorlagen</span>
          </li>
        </ul>
      </section>

      <BlogCTAABTest articleSlug="negative-google-bewertungen" position="intro" />

      {/* Psychology Section */}
      <section id="psychologie" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingDown className="h-6 w-6 text-primary" />
          Psychologie negativer Bewertungen
        </h2>

        <p>
          Um professionell auf Kritik zu reagieren, müssen Sie zunächst verstehen, 
          <strong>warum</strong> Menschen negative Bewertungen schreiben. Die Motivationen 
          sind vielfältig – und nicht immer böswillig.
        </p>

        <h3>Warum schreiben Menschen negative Bewertungen?</h3>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left font-semibold">Motivation</th>
                <th className="border p-3 text-left font-semibold">Häufigkeit</th>
                <th className="border p-3 text-left font-semibold">Richtige Reaktion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  <strong>Echte Unzufriedenheit</strong>
                  <p className="text-muted-foreground text-xs mt-1">Berechtigte Kritik an Service oder Produkt</p>
                </td>
                <td className="border p-3 text-center">~60%</td>
                <td className="border p-3">Empathie zeigen, konkrete Lösung anbieten</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">
                  <strong>Frustration abbauen</strong>
                  <p className="text-muted-foreground text-xs mt-1">Emotionale Reaktion im Moment</p>
                </td>
                <td className="border p-3 text-center">~20%</td>
                <td className="border p-3">Verständnis zeigen, Dampf ablassen lassen</td>
              </tr>
              <tr>
                <td className="border p-3">
                  <strong>Andere warnen</strong>
                  <p className="text-muted-foreground text-xs mt-1">Will andere vor schlechten Erfahrungen schützen</p>
                </td>
                <td className="border p-3 text-center">~15%</td>
                <td className="border p-3">Sachlich korrigieren, Verbesserungen zeigen</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">
                  <strong>Rache / Bösartigkeit</strong>
                  <p className="text-muted-foreground text-xs mt-1">Fake-Bewertung oder Konkurrenz</p>
                </td>
                <td className="border p-3 text-center">~5%</td>
                <td className="border p-3">Fakten prüfen, ggf. melden</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Die emotionale Seite verstehen</h3>

        <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-4">
              <h4 className="font-semibold mb-2">Negativity Bias</h4>
              <p className="text-sm text-muted-foreground">
                Negative Erlebnisse werden <strong>3x häufiger</strong> geteilt als positive. 
                Das liegt in unserer Evolution begründet – Gefahren mussten kommuniziert werden.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-4">
              <h4 className="font-semibold mb-2">Peak-End-Regel</h4>
              <p className="text-sm text-muted-foreground">
                Menschen erinnern sich hauptsächlich an den <strong>Höhepunkt</strong> und 
                das <strong>Ende</strong> einer Erfahrung. Ein schlechter Abschluss wiegt schwer.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-4">
              <h4 className="font-semibold mb-2">Kontrollbedürfnis</h4>
              <p className="text-sm text-muted-foreground">
                Kunden wollen <strong>gehört werden</strong>. Eine Bewertung gibt ihnen 
                das Gefühl von Kontrolle und Einfluss auf das Unternehmen.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
          <p className="text-amber-800 text-sm">
            <strong>💡 Wichtige Erkenntnis:</strong> Die meisten negativen Bewertungen kommen 
            von Menschen, die sich ungehört fühlen. Eine persönliche, empathische Antwort 
            kann die Situation oft komplett drehen.
          </p>
        </div>
      </section>

      {/* HEART Method Section */}
      <section id="antwort-struktur" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          Die HEART-Methode: Die perfekte Antwort-Struktur
        </h2>

        <p>
          Die <strong>HEART-Methode</strong> ist ein bewährtes Framework für professionelle 
          Antworten auf negative Bewertungen. Sie stellt sicher, dass Sie alle wichtigen 
          Elemente abdecken und dabei empathisch bleiben.
        </p>

        <div className="space-y-6 my-8 not-prose">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500 text-white font-bold px-3 py-1 rounded">H</span>
                <h3 className="font-bold text-lg m-0">Hear – Zuhören & Anerkennen</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Zeigen Sie, dass Sie die Bewertung gelesen und das Problem verstanden haben.
              </p>
              <div className="bg-muted/50 rounded p-3">
                <p className="text-sm italic">
                  "Vielen Dank, dass Sie sich die Zeit genommen haben, uns Ihre Erfahrung mitzuteilen."
                </p>
                <p className="text-sm italic mt-2">
                  "Wir haben Ihr Feedback zu [spezifisches Problem] aufmerksam gelesen."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded">E</span>
                <h3 className="font-bold text-lg m-0">Empathize – Mitgefühl zeigen</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Versetzen Sie sich in die Lage des Kunden und zeigen Sie Verständnis.
              </p>
              <div className="bg-muted/50 rounded p-3">
                <p className="text-sm italic">
                  "Wir verstehen Ihre Frustration vollkommen."
                </p>
                <p className="text-sm italic mt-2">
                  "Es ist nachvollziehbar, dass Sie enttäuscht sind – das wären wir auch."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500 text-white font-bold px-3 py-1 rounded">A</span>
                <h3 className="font-bold text-lg m-0">Apologize – Sich entschuldigen</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Eine aufrichtige Entschuldigung – auch wenn Sie nicht "schuld" sind.
              </p>
              <div className="bg-muted/50 rounded p-3">
                <p className="text-sm italic">
                  "Es tut uns aufrichtig leid, dass Ihre Erfahrung nicht unseren Standards entsprochen hat."
                </p>
                <p className="text-sm italic mt-2">
                  "Wir entschuldigen uns für die Unannehmlichkeiten, die Ihnen entstanden sind."
                </p>
              </div>
              <div className="mt-3 p-2 bg-red-50 rounded text-sm text-red-700">
                <strong>Wichtig:</strong> Entschuldigen Sie sich für das <em>Erlebnis</em> des Kunden, 
                nicht unbedingt für einen Fehler. "Es tut uns leid, dass Sie diese Erfahrung gemacht haben" 
                ist neutral und empathisch.
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500 text-white font-bold px-3 py-1 rounded">R</span>
                <h3 className="font-bold text-lg m-0">Resolve – Lösung anbieten</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Bieten Sie eine konkrete Lösung oder den nächsten Schritt an.
              </p>
              <div className="bg-muted/50 rounded p-3">
                <p className="text-sm italic">
                  "Wir würden die Situation gerne persönlich klären. Bitte kontaktieren Sie uns unter..."
                </p>
                <p className="text-sm italic mt-2">
                  "Wir haben bereits Massnahmen ergriffen, um dies in Zukunft zu verhindern."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded">T</span>
                <h3 className="font-bold text-lg m-0">Thank – Danken</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Bedanken Sie sich für das Feedback – es hilft Ihnen, besser zu werden.
              </p>
              <div className="bg-muted/50 rounded p-3">
                <p className="text-sm italic">
                  "Vielen Dank, dass Sie uns die Möglichkeit geben, uns zu verbessern."
                </p>
                <p className="text-sm italic mt-2">
                  "Wir schätzen Ihr Feedback und hoffen, Sie bald wieder begrüssen zu dürfen."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3>Dos und Don'ts bei Antworten</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <h4 className="font-bold text-green-700 flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Innerhalb von 24-48 Stunden antworten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Persönlich und individuell formulieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Konkrete Kontaktmöglichkeit anbieten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Sachlich und professionell bleiben</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Verbesserungsmassnahmen erwähnen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Mit Namen unterschreiben</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="pt-6">
              <h4 className="font-bold text-red-700 flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Defensiv oder rechtfertigend reagieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Dem Kunden die Schuld geben</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Öffentlich streiten oder diskutieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Copy-Paste-Antworten verwenden</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Sarkastisch oder passiv-aggressiv sein</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                  <span>Persönliche Details des Kunden nennen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deletion Section */}
      <section id="loeschen" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Ban className="h-6 w-6 text-primary" />
          Wann ist das Löschen einer Bewertung möglich?
        </h2>

        <p>
          Nicht jede negative Bewertung kann oder sollte gelöscht werden. Google entfernt 
          Bewertungen nur bei eindeutigen <strong>Richtlinienverstössen</strong>. Hier eine 
          Übersicht, wann Sie Chancen auf eine Löschung haben:
        </p>

        <h3>Google-Richtlinienverstösse</h3>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left font-semibold">Verstoss-Art</th>
                <th className="border p-3 text-left font-semibold">Beispiel</th>
                <th className="border p-3 text-center font-semibold">Erfolgs-Chance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Spam / Fake</td>
                <td className="border p-3">Bewertung von Nicht-Kunden, bezahlte Bewertungen</td>
                <td className="border p-3 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Hoch</span>
                </td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Hassrede / Beleidigung</td>
                <td className="border p-3">Diskriminierende Äusserungen, persönliche Angriffe</td>
                <td className="border p-3 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Sehr hoch</span>
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Interessenkonflikt</td>
                <td className="border p-3">Bewertung von Konkurrenten, ehemaligen Mitarbeitern</td>
                <td className="border p-3 text-center">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">Mittel</span>
                </td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Irrelevanter Inhalt</td>
                <td className="border p-3">Politische Statements, kein Bezug zum Geschäft</td>
                <td className="border p-3 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Hoch</span>
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Sexuelle Inhalte</td>
                <td className="border p-3">Unangemessene, anzügliche Bemerkungen</td>
                <td className="border p-3 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Sehr hoch</span>
                </td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Falsche Tatsachenbehauptung</td>
                <td className="border p-3">Nachweislich falsche Aussagen über Ihr Geschäft</td>
                <td className="border p-3 text-center">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">Mittel</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Schritt-für-Schritt: Bewertung melden</h3>

        <StepByStepProcess
          steps={[
            {
              title: "Google Business Profil öffnen",
              description: "Melden Sie sich in Ihrem Google Business Profil an.",
              duration: "1 Min."
            },
            {
              title: "Bewertungen aufrufen",
              description: "Navigieren Sie zu 'Rezensionen' in der linken Seitenleiste.",
              tip: "Filtern Sie nach Bewertungen mit 1-2 Sternen, um problematische Reviews schnell zu finden."
            },
            {
              title: "Drei-Punkte-Menü klicken",
              description: "Bei der betreffenden Bewertung auf die drei Punkte klicken."
            },
            {
              title: "'Als unangemessen melden' wählen",
              description: "Die passende Verstoß-Kategorie auswählen. Wählen Sie die Kategorie, die am besten zum Verstoß passt.",
              warning: "Melden Sie nur Bewertungen, die tatsächlich gegen die Richtlinien verstoßen. Unbegründete Meldungen können Ihren Account negativ beeinflussen."
            },
            {
              title: "Warten & ggf. eskalieren",
              description: "Google prüft die Meldung innerhalb von 3-14 Tagen. Bei Ablehnung können Sie über den Google Business Support erneut Einspruch einlegen.",
              duration: "3-14 Tage",
              tip: "Dokumentieren Sie den Verstoß mit Screenshots, falls Sie eskalieren müssen."
            }
          ]}
        />

        <h3>Rechtliche Optionen (DE/AT/CH)</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <Scale className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Unterlassungsanspruch</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Bei <strong>falschen Tatsachenbehauptungen</strong> können Sie rechtlich vorgehen. 
                Meinungsäusserungen sind jedoch geschützt.
              </p>
              <p className="text-xs text-muted-foreground">
                Kosten: Ab 500-1.000€ für Anwaltsschreiben
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <AlertTriangle className="h-8 w-8 text-amber-500 mb-3" />
              <h4 className="font-semibold mb-2">Wichtig zu beachten</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rechtliche Schritte sind <strong>teuer und zeitaufwendig</strong>. Oft ist eine 
                professionelle Antwort effektiver als ein Rechtsstreit.
              </p>
              <p className="text-xs text-muted-foreground">
                Empfehlung: Nur bei erheblichem Geschäftsschaden
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fake Reviews Section */}
      <section id="fake-bewertungen" className="mb-12">
        <h2 className="flex items-center gap-2">
          <FileWarning className="h-6 w-6 text-primary" />
          Fake-Bewertungen erkennen
        </h2>

        <p>
          Etwa 5% aller negativen Bewertungen sind Fake – von Konkurrenten, Trollen oder 
          unzufriedenen Ex-Mitarbeitern. So erkennen Sie gefälschte Bewertungen:
        </p>

        <h3>10 Warnsignale für Fake-Bewertungen</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card className="border-red-100">
            <CardContent className="pt-4">
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">1</span>
                  <span><strong>Nur diese eine Bewertung</strong> – Profil wurde nur für diese Bewertung erstellt</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">2</span>
                  <span><strong>Timing verdächtig</strong> – Viele negative Bewertungen gleichzeitig</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">3</span>
                  <span><strong>Keine Details</strong> – Vage Beschreibung ohne konkrete Erfahrung</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">4</span>
                  <span><strong>Unnatürliche Sprache</strong> – Maschinell oder unlogisch formuliert</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">5</span>
                  <span><strong>Kunde unbekannt</strong> – Nicht in Kundendatenbank auffindbar</span>
                </li>
              </ol>
            </CardContent>
          </Card>
          <Card className="border-red-100">
            <CardContent className="pt-4">
              <ol className="space-y-3 text-sm" start={6}>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">6</span>
                  <span><strong>Bei Konkurrenz aktiv</strong> – Profil bewertet auch Wettbewerber positiv</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">7</span>
                  <span><strong>Anderes Land</strong> – Bewertung aus entferntem Standort</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">8</span>
                  <span><strong>Vor Eröffnung</strong> – Bewertung datiert vor Geschäftseröffnung</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">9</span>
                  <span><strong>Ähnliche Muster</strong> – Mehrere Bewertungen mit gleichen Formulierungen</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-xs">10</span>
                  <span><strong>Gleiche Uhrzeit</strong> – Mehrere Bewertungen zur exakt gleichen Zeit</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <h3>Dokumentation für die Meldung</h3>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
          <p className="text-blue-800 text-sm">
            <strong>📋 Checkliste zur Dokumentation:</strong>
          </p>
          <ul className="text-blue-800 text-sm mt-2 space-y-1">
            <li>✓ Screenshots mit Datum und Uhrzeit</li>
            <li>✓ Auszug aus Kundendatenbank (Kunde nicht vorhanden)</li>
            <li>✓ Zeitliche Korrelation dokumentieren (z.B. nach Konkurrenz-Eröffnung)</li>
            <li>✓ Ähnliche Muster bei anderen Bewertungen notieren</li>
            <li>✓ Profil-Aktivität des Bewerters analysieren</li>
          </ul>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="praevention" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Prävention: Negative Erfahrungen abfangen
        </h2>

        <p>
          Die beste Strategie gegen negative Bewertungen ist <strong>Prävention</strong>. 
          Fangen Sie unzufriedene Kunden ab, bevor sie zur Bewertung greifen.
        </p>

        <h3>Beschwerde-Management vor der Bewertung</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Feedback-Karten vor Ort</h4>
              <p className="text-sm text-muted-foreground">
                Platzieren Sie Feedback-Karten mit direktem Kontakt. "Nicht zufrieden? 
                Sprechen Sie uns direkt an: [Telefon/E-Mail]"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Flag className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Follow-up E-Mail</h4>
              <p className="text-sm text-muted-foreground">
                Nach dem Kauf/Besuch eine E-Mail mit direktem Feedback-Kanal senden. 
                Unzufriedene Kunden können sich privat melden.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Lightbulb className="h-8 w-8 text-amber-500 mb-3" />
              <h4 className="font-semibold mb-2">Aufsteller im Geschäft</h4>
              <p className="text-sm text-muted-foreground">
                "Probleme? Wir möchten es wissen!" – mit QR-Code zu einem 
                internen Feedback-Formular.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold mb-2">Exit-Interview</h4>
              <p className="text-sm text-muted-foreground">
                Bei Service-Unternehmen: "War alles zu Ihrer Zufriedenheit?" 
                Direktes Nachfragen vor dem Abschied.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3>Proaktive Strategien</h3>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
              <span><strong>10:1 Regel:</strong> Bitten Sie zufriedene Kunden aktiv um Bewertungen – 
              10 positive relativieren 1 negative</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
              <span><strong>Interne Qualitätskontrolle:</strong> Regelmässige Service-Checks und 
              Mitarbeiter-Schulungen</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
              <span><strong>Mystery Shopping:</strong> Lassen Sie Ihr Geschäft anonym testen</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
              <span><strong>Beschwerdekanal:</strong> Machen Sie es einfach, sich direkt zu beschweren – 
              bevor es zur öffentlichen Bewertung kommt</span>
            </li>
          </ul>
        </div>

        <p>
          Mehr dazu, wie Sie aktiv positive Bewertungen sammeln, finden Sie in unserem 
          Artikel <Link to="/blog/google-bewertungen-bekommen" className="text-primary hover:underline">
          Google Bewertungen bekommen</Link>.
        </p>
      </section>

      {/* Generator Section */}
      <section id="generator" className="mb-12">
        <h2 className="flex items-center gap-2">
          ✍️ Interaktiver Antwort-Generator
        </h2>

        <p className="mb-6">
          Nutzen Sie unseren <strong>kostenlosen Antwort-Generator</strong>, um in 
          wenigen Schritten eine professionelle Antwort auf negative Bewertungen zu 
          erstellen. Wählen Sie die Art der Beschwerde, die Schwere und Ihre Branche – 
          und erhalten Sie eine individualisierte Vorlage.
        </p>

        <div className="not-prose">
          <ReviewResponseGenerator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen</h2>

        <div className="space-y-6 mt-6">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Sollte ich auf jede negative Bewertung antworten?</h3>
            <p className="text-muted-foreground">
              Ja, Sie sollten auf jede negative Bewertung antworten. Studien zeigen, dass 45% der 
              Kunden eher bei einem Unternehmen kaufen, das auf Kritik reagiert. Eine professionelle 
              Antwort zeigt anderen potenziellen Kunden, dass Sie Feedback ernst nehmen.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Wie schnell sollte ich auf negative Bewertungen reagieren?</h3>
            <p className="text-muted-foreground">
              Idealerweise innerhalb von 24-48 Stunden. 53% der Kunden erwarten eine Antwort innerhalb 
              einer Woche. Schnelle Reaktionen zeigen Engagement und können die Situation oft noch retten.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Darf ich den Kunden bitten, seine Bewertung zu ändern?</h3>
            <p className="text-muted-foreground">
              Ja, aber nur nachdem Sie das Problem tatsächlich gelöst haben. Bitten Sie niemals um eine 
              Änderung ohne vorherige Problemlösung. Ein freundlicher Hinweis wie "Wir würden uns freuen, 
              wenn Sie Ihre Erfahrung aktualisieren" ist akzeptabel.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Was tun bei offensichtlich falschen Behauptungen?</h3>
            <p className="text-muted-foreground">
              Dokumentieren Sie die Falschbehauptung, antworten Sie sachlich und korrigieren Sie höflich. 
              Melden Sie die Bewertung bei Google. Bei nachweislich falschen Tatsachenbehauptungen können 
              Sie rechtliche Schritte prüfen.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Kann ich rechtlich gegen negative Bewertungen vorgehen?</h3>
            <p className="text-muted-foreground">
              Nur bei falschen Tatsachenbehauptungen oder Beleidigungen. Meinungsäusserungen sind durch 
              die Meinungsfreiheit geschützt. Rechtliche Schritte sind teuer und sollten nur als letztes 
              Mittel in Betracht gezogen werden.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Wie gehe ich mit 1-Stern-Bewertungen ohne Text um?</h3>
            <p className="text-muted-foreground">
              Antworten Sie höflich und bitten Sie um mehr Informationen: "Es tut uns leid, dass Sie 
              unzufrieden waren. Damit wir uns verbessern können, würden wir gerne mehr erfahren. 
              Bitte kontaktieren Sie uns unter [Kontakt]."
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Wann lohnt sich ein Anwalt bei Fake-Bewertungen?</h3>
            <p className="text-muted-foreground">
              Erst wenn Google die Bewertung nicht entfernt und ein erheblicher Geschäftsschaden 
              nachweisbar ist. Anwaltskosten beginnen bei ca. 500-1.000€. Dokumentieren Sie alle 
              Beweise vorher sorgfältig.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Wie verhindere ich emotionale Reaktionen auf Kritik?</h3>
            <p className="text-muted-foreground">
              Warten Sie mindestens 1-2 Stunden vor der Antwort. Lesen Sie die Bewertung mehrmals. 
              Lassen Sie einen Kollegen gegenlesen. Nutzen Sie Vorlagen als Ausgangspunkt. 
              Erinnern Sie sich: Die Antwort ist für alle sichtbar.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Kann ich negative Bewertungen ausblenden lassen?</h3>
            <p className="text-muted-foreground">
              Nein, Google erlaubt kein Ausblenden von Bewertungen. Sie können nur gegen 
              Richtlinienverstösse melden. Die beste Strategie ist, durch viele positive 
              Bewertungen die negativen zu relativieren.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Wie lange bleiben Bewertungen sichtbar?</h3>
            <p className="text-muted-foreground">
              Google Bewertungen bleiben grundsätzlich unbegrenzt sichtbar. Sie können nur durch 
              Löschung seitens des Verfassers, erfolgreiche Meldung bei Richtlinienverstoss oder 
              rechtliche Anordnung entfernt werden.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Beeinflusst meine Antwort das Google-Ranking?</h3>
            <p className="text-muted-foreground">
              Indirekt ja. Google bewertet Engagement positiv. Antworten auf Bewertungen signalisieren 
              Aktivität und Kundenorientierung. Dies kann sich positiv auf das lokale Ranking auswirken.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Sollte ich negative Bewertungen öffentlich diskutieren?</h3>
            <p className="text-muted-foreground">
              Nein, vermeiden Sie öffentliche Diskussionen. Antworten Sie einmal professionell und 
              bieten Sie den direkten Kontakt an. Lange öffentliche Debatten schaden dem Image und 
              wirken unprofessionell.
            </p>
          </div>
        </div>
      </section>

      <ReviewResponseTemplates
        title="Antwort-Vorlagen fuer negative Bewertungen"
        description="Kopierfertige Vorlagen fuer jede Art von Kritik. Passe die [Platzhalter] an dein Unternehmen an."
        categories={["negative", "fake", "escalation"]}
      />

      <HelpfulnessWidget articleSlug="negative-google-bewertungen" />

      <BlogCTAABTest articleSlug="negative-google-bewertungen" position="end" />
    </ArticleLayout>
  );
};

export default NegativeGoogleBewertungen;
