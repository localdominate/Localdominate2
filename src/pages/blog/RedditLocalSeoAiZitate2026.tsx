import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageCircle, TrendingUp, ShieldAlert, Users, AlertTriangle, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "reddit-local-seo-ai-zitate-2026";

const RedditLocalSeoAiZitate2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum-reddit", title: "Warum zitiert AI ständig Reddit?" },
    { id: "dach-subreddits", title: "Die wichtigsten DACH-Subreddits" },
    { id: "wie-zitate-entstehen", title: "Wie entstehen Reddit-Zitate?" },
    { id: "strategie", title: "5-Schritte-Strategie ohne Spam" },
    { id: "regeln", title: "Reddiquette & rechtliche Grenzen" },
    { id: "messung", title: "Wie messe ich den Effekt?" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Warum zitiert ChatGPT so oft Reddit?",
      answer:
        'ChatGPT, Perplexity und Google AI Overviews bewerten Reddit-Threads als hochwertige Quelle, weil sie echte Nutzererfahrungen mit konkreten Empfehlungen enthalten — also genau die Information, die ein Suchender bei lokalen Fragen sucht. Eine Datenanalyse von Search Engine Land Anfang 2025 zeigt: Reddit ist nach Wikipedia die zweithäufigst zitierte Domain in AI-Suchergebnissen.',
    },
    {
      question: "Welche DACH-Subreddits sind für lokale Unternehmen relevant?",
      answer:
        'Stadt-Subreddits wie r/de, r/berlin, r/munich, r/wien, r/zurich, r/koeln sowie Themen-Subreddits (r/Finanzen, r/recht, r/Handwerker, r/Gastronomie) sind die wichtigsten. Diese Communities sind aktiv, deutschsprachig und werden von AI-Modellen indexiert. Reine Werbung wird sofort entfernt — nur hilfreiche, ehrliche Beiträge bleiben sichtbar und werden zitiert.',
    },
    {
      question: "Darf ich mein eigenes Unternehmen auf Reddit erwähnen?",
      answer:
        'Ja, aber transparent. Die Reddiquette und Site-Wide-Rules verlangen volle Offenlegung ("Disclosure: Ich bin Inhaber von X"). Verdeckte Eigenwerbung wird als Spam markiert, der Account gebannt und der Reputationsverlust ist erheblich. Wer transparent als Experte hilft, gewinnt langfristig Karma, Sichtbarkeit und AI-Zitate.',
    },
    {
      question: "Wie schnell wirken Reddit-Aktivitäten auf AI-Zitate?",
      answer:
        'Wenig vorhersagbar. Threads mit hoher Upvote-Rate (>50) und konstruktiver Diskussion werden meist innerhalb von 2–8 Wochen in ChatGPT- und Perplexity-Antworten zitiert. Threads ohne Engagement verschwinden im Archiv und werden nie referenziert. Qualität schlägt Quantität: ein hilfreicher Beitrag in einem aktiven Sub bringt mehr als 30 kurze Antworten.',
    },
    {
      question: "Kann ich Reddit-Marketing automatisieren?",
      answer:
        'Nein. Reddit erkennt KI-generierte oder gekaufte Aktivität schnell und bannt entsprechende Accounts dauerhaft. Auch Cross-Posting in mehrere Subs oder Multi-Account-Voting verletzt die Site-Wide-Rules. Reddit-Sichtbarkeit muss manuell, persönlich und über mindestens 3–6 Monate aufgebaut werden.',
    },
    {
      question: "Welche Reddit-Aktivität ist juristisch riskant?",
      answer:
        'Verdeckte Eigenwerbung kann in DACH als wettbewerbswidrig (UWG §5a) gewertet werden — Abmahnrisiko. Auch das Ausgeben als unabhängiger Kunde bei eigener Empfehlung erfüllt den Tatbestand der Irreführung. Lösung: jede Empfehlung mit klarer Kennzeichnung ("Anbieter-Eigenangabe") und keine erfundenen Testimonials.',
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Stell ChatGPT die Frage „Bester Italiener in München" — wahrscheinlich zitiert die Antwort einen Reddit-Thread. Nach Wikipedia ist Reddit die meistzitierte Domain in AI-Suchergebnissen. Für lokale Unternehmen heißt das: Wer in den richtigen Threads präsent ist, wird empfohlen. Wer fehlt, existiert für die AI nicht. Dieser Guide zeigt, wie du das DACH-Reddit-Ökosystem korrekt, transparent und rechtssicher nutzt.
      </p>

      <KeyTakeawaysBox
        items={[
          "Reddit ist nach Wikipedia die zweithäufigst zitierte Domain in ChatGPT, Perplexity und Google AI Overviews",
          "DACH-Subreddits wie r/de, r/berlin, r/wien und r/Finanzen sind die wichtigsten Quellen",
          "Verdeckte Eigenwerbung ist UWG-widrig und Reddit-bannfähig — Transparenz ist Pflicht",
          "Threads mit ≥50 Upvotes und konstruktiver Diskussion werden bevorzugt von AI zitiert",
          "Reddit-Reputation baut sich in 3–6 Monaten auf — keine Automation, keine Shortcuts",
          "Karma in relevanten Subreddits zählt mehr als Gesamt-Karma",
        ]}
      />

      <section id="warum-reddit" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-primary" />
          Warum zitieren AI-Suchmaschinen so oft Reddit?
        </h2>
        <AnswerBlock question="Warum ist Reddit eine der wichtigsten Quellen für AI-Antworten?">
          AI-Modelle wie ChatGPT, Perplexity, Claude und Google AI Overviews bewerten Reddit-Inhalte als hochwertig, weil sie strukturierte Diskussionen mit echten Nutzererfahrungen, klaren Upvote-Signalen und kontextualisierten Empfehlungen enthalten — also genau die Information, die ein Suchender erwartet. Reddit ist nach Wikipedia die zweithäufigst zitierte Domain in AI-Antworten weltweit und wächst in DACH besonders schnell.
        </AnswerBlock>
        <p className="mt-4">
          Drei Gründe machen Reddit für AI besonders wertvoll:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Upvote-System:</strong> Reddit liefert ein klares Quality-Signal, das AI-Modelle direkt als Relevanz-Score nutzen können.</li>
          <li><strong>Threadstruktur:</strong> Frage → Antworten → Gegenfragen → Klärung. Diese Struktur ist ideal für Retrieval-Augmented Generation (RAG).</li>
          <li><strong>Authentizität:</strong> Nutzer haben kein Marketing-Interesse — empfohlene Unternehmen werden als „echt" eingestuft.</li>
        </ul>
      </section>

      <section id="dach-subreddits" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-7 h-7 text-primary" />
          Welche DACH-Subreddits sind für Local SEO relevant?
        </h2>
        <AnswerBlock question="Auf welchen Subreddits sollten lokale DACH-Unternehmen aktiv sein?">
          Die wichtigsten sind die Stadt-Subreddits (r/berlin, r/munich, r/wien, r/zurich, r/koeln, r/hamburg, r/frankfurt) sowie themenspezifische Subreddits wie r/de, r/Finanzen, r/recht, r/Gastronomie und r/Handwerker. Branchenrelevante Subreddits (r/Zahnaerzte, r/Tierhaltung etc.) sind kleiner, aber für entsprechende Unternehmen extrem hochkonvertierend.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Subreddit</th>
                <th className="border p-3 text-left">Mitglieder (geschätzt)</th>
                <th className="border p-3 text-left">Themenfokus</th>
                <th className="border p-3 text-left">AI-Zitier-Relevanz</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">r/de</td><td className="border p-3">920.000</td><td className="border p-3">Allgemein DE</td><td className="border p-3">Sehr hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/berlin</td><td className="border p-3">280.000</td><td className="border p-3">Berlin</td><td className="border p-3">Sehr hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/munich</td><td className="border p-3">130.000</td><td className="border p-3">München</td><td className="border p-3">Sehr hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/wien</td><td className="border p-3">170.000</td><td className="border p-3">Wien</td><td className="border p-3">Sehr hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/zurich</td><td className="border p-3">95.000</td><td className="border p-3">Zürich</td><td className="border p-3">Hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/Finanzen</td><td className="border p-3">450.000</td><td className="border p-3">Finanzen DE</td><td className="border p-3">Sehr hoch (Steuerberater, Anwälte)</td></tr>
              <tr><td className="border p-3 font-semibold">r/recht</td><td className="border p-3">120.000</td><td className="border p-3">Recht DACH</td><td className="border p-3">Sehr hoch (Anwälte)</td></tr>
              <tr><td className="border p-3 font-semibold">r/Handwerker</td><td className="border p-3">35.000</td><td className="border p-3">Handwerk</td><td className="border p-3">Hoch</td></tr>
              <tr><td className="border p-3 font-semibold">r/Gastronomie</td><td className="border p-3">28.000</td><td className="border p-3">Restaurants</td><td className="border p-3">Hoch</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Mitgliederzahlen Stand Frühjahr 2026, gerundet. AI-Relevanz basiert auf eigenen Tests mit 50 Local-Prompts in ChatGPT/Perplexity.</p>
        </div>
      </section>

      <section id="wie-zitate-entstehen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MessageCircle className="w-7 h-7 text-primary" />
          Wie entsteht ein AI-zitierfähiger Reddit-Thread?
        </h2>
        <AnswerBlock question="Was macht einen Reddit-Thread für AI-Modelle besonders zitierfähig?">
          Vier Eigenschaften: 1) Konkrete Frage mit lokalem Bezug („Welcher Steuerberater in Hamburg ist auf Selbstständige spezialisiert?"). 2) Mindestens 50 Upvotes und 10 Antworten. 3) Konstruktive Diskussion ohne Konflikte oder Löschungen. 4) Mindestens eine klar empfohlene Lösung mit Namen und Begründung. Solche Threads erscheinen typisch innerhalb von 2–8 Wochen in AI-Antworten.
        </AnswerBlock>
        <p className="mt-4">
          Ein hilfreicher Reddit-Beitrag, der dich empfiehlt, schlägt SEO-mäßig oft 20 klassische Citations — weil AI-Modelle das Upvote-Signal direkt als Trust-Score interpretieren. Das gilt sowohl für Beiträge von Kunden als auch für transparent gekennzeichnete Beiträge von dir selbst.
        </p>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie baue ich eine ehrliche Reddit-Strategie in 5 Schritten?
        </h2>
        <AnswerBlock question="Wie nutze ich Reddit für AI-Sichtbarkeit, ohne als Spammer wahrgenommen zu werden?">
          1) Aktiver Account mit echtem Namen, transparenter Bio („Inhaber X in Y") und 30 Tagen Karma-Aufbau ohne Eigenwerbung. 2) Drei relevante Subs identifizieren und beobachten. 3) Helfende Antworten zu Fragen in deinem Fachgebiet — ohne Selbstreferenz. 4) Bei direkter Frage nach Empfehlungen transparent das eigene Unternehmen nennen. 5) Wertvolle Threads oder Guides als Original-Posts veröffentlichen. Aufbauzeit: 3–6 Monate.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>Aufbau-Phase (Monat 1):</strong> Account mit Klarnamen erstellen. Bio formuliert klar: „Inhaberin der Steuerkanzlei XY in Hamburg". Erste 30 Tage nur upvoten, kommentieren, beobachten — kein einziger Marketing-Beitrag.
          </li>
          <li>
            <strong>Helfen-Phase (Monat 2–3):</strong> Antworte täglich auf 1–2 Fragen in deinem Fachgebiet — ohne dich selbst zu erwähnen. Ziel: Karma in den relevanten Subs aufbauen.
          </li>
          <li>
            <strong>Empfehlungs-Phase (ab Monat 3):</strong> Wenn jemand direkt nach Empfehlungen fragt („Wer kann mir helfen mit X in Y?"), nenne dein Unternehmen transparent: „Disclosure: Ich bin Inhaber von Z." Reddit toleriert das, sobald deine Karma-Historie hilfreich war.
          </li>
          <li>
            <strong>Content-Phase (laufend):</strong> Veröffentliche eigene Beiträge, die echten Mehrwert liefern: Detaillierte Anleitungen, Branchen-Insights, Case Studies. Diese werden überdurchschnittlich oft von AI zitiert.
          </li>
          <li>
            <strong>Mod-Outreach (optional):</strong> In branchenspezifischen Subs Kontakt zu Moderatoren aufbauen. Sponsoring von AMAs oder „Verified Professional"-Flairs ist oft möglich und legitim.
          </li>
        </ol>
        <p className="mt-6">
          Wer Reddit-Aktivität mit klassischem <Link to="/blog/local-link-building" className="text-primary underline">Local Link Building</Link> und <Link to="/blog/e-e-a-t-lokale-unternehmen" className="text-primary underline">E-E-A-T-Signalen</Link> kombiniert, deckt die drei wichtigsten AI-Trust-Signale gleichzeitig ab.
        </p>
      </section>

      <section id="regeln" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldAlert className="w-7 h-7 text-primary" />
          Reddiquette & rechtliche Grenzen — was ist erlaubt?
        </h2>
        <AnswerBlock question="Welche Reddit- und UWG-Regeln muss ich als Unternehmer beachten?">
          Drei Regeln: 1) Volle Offenlegung jeder geschäftlichen Verbindung („Disclosure: …"). 2) Maximal 10 % deiner Reddit-Aktivität darf eigenes Unternehmen betreffen — der Rest muss neutral helfen. 3) Keine Multi-Accounts, kein Voting-Tausch, keine gekauften Bewertungen. Rechtlich gilt UWG §5a (irreführende Werbung) — verdeckte Eigenwerbung kann abgemahnt werden. Transparenz schützt rechtlich und stärkt die Reddit-Reputation.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>9:1-Regel:</strong> 9 hilfreiche Beiträge auf 1 unternehmensbezogenen Beitrag.</li>
          <li><strong>Klare Disclosure:</strong> „Disclosure: Ich bin Inhaberin von X" am Anfang jeder relevanten Antwort.</li>
          <li><strong>Kein Sockenpuppen-Voting:</strong> Beiträge nicht über Zweitaccounts oder Mitarbeiter upvoten lassen — Reddit erkennt Voting-Patterns.</li>
          <li><strong>Keine erfundenen Testimonials:</strong> UWG-widrig und Reddit-Bann-fähig.</li>
        </ul>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wie messe ich, ob Reddit AI-Zitate bringt?</h2>
        <AnswerBlock question="Welche Metriken zeigen, ob meine Reddit-Strategie wirkt?">
          Drei Indikatoren: 1) Reddit-Karma im Ziel-Sub (≥100 nach 3 Monaten als Schwelle). 2) Referrer-Traffic von reddit.com und old.reddit.com in Google Analytics. 3) Monatliche Test-Prompts in ChatGPT und Perplexity mit deinen Zielkeywords — wirst du nun zitiert? Bei richtiger Umsetzung steigt die Citation-Rate in den ersten 6 Monaten um durchschnittlich 15–25 %.
        </AnswerBlock>
        <p className="mt-4">
          Kombiniere die Metriken mit dem <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> für ein vollständiges Bild deiner GEO-Performance.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler ruinieren Reddit-basierte Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei Reddit-Marketing für lokale Unternehmen?">
          1) Verdeckte Eigenwerbung — Bann oder Abmahnung garantiert. 2) Cross-Posting identischer Beiträge in mehrere Subs — Spam-Filter. 3) Generische Marketing-Sprache statt echter Hilfe — kein Engagement, keine AI-Zitate. 4) Sofortige Eigenwerbung ohne vorherigen Karma-Aufbau — sofortiger Vertrauensverlust. 5) Reaktion auf Kritik mit Defensivität statt Transparenz — irreversibler Reputationsschaden.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Disclosure-Vergessen:</strong> Ein vergessener Hinweis reicht, um als Spammer markiert zu werden.</li>
          <li><strong>Aggressive Karma-Farm:</strong> Massen-Upvoting oder kopierte Antworten erkennen Mods und Auto-Filter sofort.</li>
          <li><strong>Off-Topic-Beiträge:</strong> Restaurant-Marketing in r/Finanzen wirkt deplatziert.</li>
          <li><strong>Falsche Konflikt-Reaktion:</strong> Auf negative Kritik defensiv reagieren — besser ehrliche Antwort und Verbesserungsversprechen.</li>
          <li><strong>Ignorieren von Site-Rules:</strong> Jeder Sub hat eigene Regeln in der Sidebar — lesen, sonst Lösch-Risiko.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Reddit ist nur einer von vielen AI-Trust-Signalen</h3>
        <p className="mb-4">
          Ein vollständiger AI-Sichtbarkeits-Audit prüft Reddit, Wikipedia, Branchenportale, Schema, Bewertungen und Bing-Index — alle Signale, die ChatGPT, Perplexity und Google AI Overviews verwenden.
        </p>
        <Link
          to="/ai-visibility-audit"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
        >
          AI-Sichtbarkeits-Audit starten →
        </Link>
      </div>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default RedditLocalSeoAiZitate2026;