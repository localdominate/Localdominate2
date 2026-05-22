import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bot, Workflow, ListChecks, AlertTriangle, BarChart3, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "ai-agents-lokale-buchungen-2026";

const AiAgentsLokaleBuchungen2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum-agents", title: "Warum AI Agents 2026 zum Buchungskanal werden" },
    { id: "drei-agents", title: "Operator, ChatGPT Agent & Gemini im Vergleich" },
    { id: "wie-funktioniert", title: "Wie ein Agent eine lokale Buchung durchführt" },
    { id: "ranking-signale", title: "Welche Signale Agents priorisieren" },
    { id: "strategie", title: "7-Schritte-Plan: agent-ready werden" },
    { id: "messung", title: "Agent-Traffic messen" },
    { id: "fehler", title: "5 Fehler, die Agents abbrechen lassen" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was sind AI Agents im Local-SEO-Kontext?",
      answer:
        "AI Agents sind autonome Assistenten (OpenAI Operator, ChatGPT Agent Mode, Google Gemini Agents, Perplexity Comet), die im Auftrag von Nutzern Webseiten bedienen, Formulare ausfüllen und Buchungen abschließen. Für lokale Unternehmen heißt das: 2026 entscheidet nicht nur ein Mensch über die Buchung, sondern ein Software-Agent, der Webseite, Buchungssystem und Bewertungen automatisch auswertet — innerhalb von Sekunden.",
    },
    {
      question: "Welche AI Agents sind 2026 für DACH-Unternehmen relevant?",
      answer:
        "Vier zentrale Systeme: 1) OpenAI Operator und ChatGPT Agent Mode (führt Aufgaben im Browser aus, nutzt Bing-Index). 2) Google Gemini Agents in Android, Chrome und Workspace (nutzt Google Business Profil). 3) Perplexity Comet Browser (nutzt eigenen Crawler plus Wikipedia/Wikidata). 4) Anthropic Claude mit Computer Use. Alle vier können Termine vereinbaren, Tische reservieren und Bestellungen aufgeben — wenn deine Webseite es zulässt.",
    },
    {
      question: "Wie unterscheidet sich Agent-Traffic von normalem Traffic?",
      answer:
        "Agent-Traffic kommt mit erkennbaren User-Agents (ChatGPT-User, GPTBot/Operator, Google-Extended, PerplexityBot), liest sehr schnell mehrere Seiten und folgt strukturierten Daten statt visuellem Layout. Agents überspringen Hero-Bilder, lesen JSON-LD, Buttons mit klaren Labels und ARIA-Attribute. Wer rein visuell baut (Image-Slider, JS-only-Formulare), verliert Agent-Buchungen — der Agent bricht ab, bevor der Nutzer es merkt.",
    },
    {
      question: "Welche technischen Voraussetzungen brauche ich, damit Agents buchen können?",
      answer:
        "Fünf Pflicht-Bausteine: 1) Buchungsformular ohne JS-Dependency-Wall (server-rendered Forms oder Progressive Enhancement). 2) ARIA-Labels und semantisches HTML (button statt div). 3) LocalBusiness- und Reservation-Schema. 4) Klare CTAs mit eindeutigem Label (\"Tisch reservieren\", nicht \"Jetzt klicken\"). 5) Keine CAPTCHAs auf dem Hauptpfad — sonst verliert der Agent. Externe Buchungstools (OpenTable, Treatwell, Doctolib) sind oft bereits agent-ready.",
    },
    {
      question: "Wie wähle ich aus, welcher Anbieter empfohlen wird?",
      answer:
        "Agents wählen anhand von vier Hauptkriterien: 1) Verfügbarkeit in Echtzeit (Termin-API erreichbar). 2) Bewertungssentiment in den Hauptquellen (Google, Yelp, Tripadvisor, Doctolib). 3) Strukturierte Daten (LocalBusiness, Service, OpeningHours, AggregateRating). 4) Erreichbarkeit (Klick-zu-Buchung ≤ 3 Schritte). Wer alle vier Felder vollständig hat, wird gegenüber Konkurrenz mit weißen Flecken bevorzugt — selbst bei schlechterer Klassikposition.",
    },
    {
      question: "Wie messe ich, ob Agents auf meiner Seite buchen?",
      answer:
        "Drei Quellen: 1) Server-Logs nach Agent-User-Agents filtern (ChatGPT-User, GPTBot, PerplexityBot, Google-Extended, ClaudeBot). 2) Buchungssystem-Auswertung: Anteil Buchungen ohne klassisches UTM oder Referer. 3) Manuelle Test-Buchungen über Operator oder Comet mit Top-Keywords. Steigender Anteil von Direkt- oder Agent-Traffic bei stabilem Such-Traffic ist der zuverlässigste Indikator.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        2026 ist das Jahr, in dem AI Agents lokal buchen lernen. OpenAI Operator, ChatGPT Agent Mode, Google Gemini Agents und Perplexity Comet bedienen Webseiten autonom — sie reservieren Tische, vereinbaren Arzttermine und bestellen Handwerker, ohne dass der Nutzer die Seite jemals sieht. Für lokale Unternehmen entscheidet damit nicht mehr nur das Ranking, sondern ob die Webseite agent-ready ist. Dieser Guide zeigt, wie Agents auswählen, welche Signale sie gewichten und wie du mit 7 Schritten in der Agent-Welt sichtbar wirst.
      </p>

      <KeyTakeawaysBox
        items={[
          "AI Agents (Operator, ChatGPT Agent, Gemini, Comet) führen 2026 messbare Anteile lokaler Buchungen autonom durch",
          "Agents bewerten Seiten anhand strukturierter Daten, semantischem HTML und Buchungs-Erreichbarkeit",
          "LocalBusiness-, Reservation- und Service-Schema sind Pflicht — JSON-LD ist die primäre Lesequelle",
          "CAPTCHAs, reine JS-Formulare und unklare CTAs sind die häufigsten Abbruchgründe",
          "Externe Buchungstools (Doctolib, OpenTable, Treatwell) sind oft bereits agent-ready",
          "Agent-Traffic ist über Server-Logs und User-Agents (ChatGPT-User, PerplexityBot, GPTBot) messbar",
        ]}
      />

      <section id="warum-agents" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Bot className="w-7 h-7 text-primary" />
          Warum sind AI Agents 2026 ein Buchungskanal?
        </h2>
        <AnswerBlock question="Warum sollten lokale Unternehmen 2026 AI Agents ernst nehmen?">
          Weil sie 2026 zum ersten Mal in der Lage sind, lokale Buchungen autonom durchzuführen. OpenAI Operator, ChatGPT Agent Mode, Google Gemini Agents und Perplexity Comet öffnen Webseiten, lesen Formulare, wählen Termine und schließen Reservierungen ab — ohne menschliche Bedienung. In DACH werden 2026 schätzungsweise 8–12 % aller Online-Buchungen für Restaurants, Praxen und Handwerk über Agents abgewickelt — Tendenz stark steigend.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Computer Use / Operator:</strong> Agents steuern echte Browser, klicken, scrollen, tippen.</li>
          <li><strong>Mainstream-Verfügbarkeit:</strong> ChatGPT Plus, Gemini Advanced und Comet sind 2026 in DACH frei nutzbar.</li>
          <li><strong>Plattform-Integration:</strong> Operator und Comet sind direkt in Browser eingebettet, Gemini in Android.</li>
        </ul>
      </section>

      <section id="drei-agents" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          OpenAI Operator, Google Gemini Agents & Perplexity Comet im Vergleich
        </h2>
        <AnswerBlock question="Welche AI-Agent-Plattformen sind für DACH-Unternehmen 2026 relevant?">
          Vier dominieren: OpenAI Operator und ChatGPT Agent Mode (nutzt Bing-Index, Browser-Use), Google Gemini Agents (nutzt Google Business Profil, Android-integriert), Perplexity Comet (eigener Crawler plus Wikidata), Anthropic Claude mit Computer Use (Entwickler-fokussiert). Sie unterscheiden sich in Datenquellen, Browserzugriff und Vertrauen in strukturierte Daten — wer für alle vier sichtbar sein will, muss Schema, ARIA und externe Buchungstools parallel pflegen.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Merkmal</th>
                <th className="border p-3 text-left">OpenAI Operator / Agent</th>
                <th className="border p-3 text-left">Google Gemini Agents</th>
                <th className="border p-3 text-left">Perplexity Comet</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Datenquelle</td><td className="border p-3">Bing + Web-Crawl</td><td className="border p-3">Google Index + GBP</td><td className="border p-3">Eigener Crawler + Wikidata</td></tr>
              <tr><td className="border p-3 font-semibold">Browser</td><td className="border p-3">Eigene Cloud-Browser</td><td className="border p-3">Chrome + Android</td><td className="border p-3">Comet Browser (Chromium)</td></tr>
              <tr><td className="border p-3 font-semibold">User-Agent</td><td className="border p-3">ChatGPT-User, GPTBot</td><td className="border p-3">Google-Extended</td><td className="border p-3">PerplexityBot</td></tr>
              <tr><td className="border p-3 font-semibold">Stärke</td><td className="border p-3">Komplexe Multi-Step-Tasks</td><td className="border p-3">Android-Buchungen, Maps</td><td className="border p-3">Recherche + Buchung kombiniert</td></tr>
              <tr><td className="border p-3 font-semibold">Schema-Vertrauen</td><td className="border p-3">Hoch</td><td className="border p-3">Sehr hoch</td><td className="border p-3">Hoch</td></tr>
              <tr><td className="border p-3 font-semibold">Pflichtsetup</td><td className="border p-3">Bing Places + Schema</td><td className="border p-3">GBP + Reservation Schema</td><td className="border p-3">Schema + Wikidata-Entity</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="wie-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Workflow className="w-7 h-7 text-primary" />
          Wie führt ein AI Agent eine lokale Buchung durch?
        </h2>
        <AnswerBlock question="Was passiert Schritt für Schritt, wenn ein Agent für einen Nutzer einen Tisch reserviert?">
          In fünf Stufen: 1) Der Nutzer formuliert eine Aufgabe („Reserviere mir morgen 19 Uhr Italiener in Köln, ≥4 Sterne"). 2) Der Agent ruft eine Suchquelle ab (Bing, Google, Perplexity-Index). 3) Er filtert Kandidaten nach Schema-Daten, Bewertungssentiment und Verfügbarkeit. 4) Er öffnet die Top-Kandidatenseite im Browser, sucht das Buchungsformular, füllt es aus. 5) Er bestätigt die Reservierung und meldet den Erfolg an den Nutzer.
        </AnswerBlock>
        <p className="mt-4">
          Entscheidend: In Schritt 4 entscheidet die technische Qualität deiner Webseite, ob die Buchung gelingt oder abbricht. Ein Agent erkennt eine "Tisch reservieren"-Schaltfläche mit klarem ARIA-Label, fehlerhaftem JavaScript oder Cookie-Wall scheitert er typisch nach 2–3 Versuchen — und der Nutzer bekommt: „Ich konnte dort nicht buchen, ich versuche es bei der nächsten Option."
        </p>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Welche Signale priorisieren AI Agents?
        </h2>
        <AnswerBlock question="Welche Faktoren entscheiden, ob mein Unternehmen vom Agent ausgewählt wird?">
          Sechs Hauptsignale: 1) Strukturierte Daten (LocalBusiness, Reservation, OpeningHours, AggregateRating). 2) Bewertungssentiment ≥ 4,2 Sterne über mindestens zwei Hauptquellen. 3) Echtzeit-Verfügbarkeit (Buchungs-API erreichbar, Slots sichtbar). 4) Klick-zu-Buchung ≤ 3 Schritte. 5) Semantisches HTML mit ARIA-Labels. 6) Keine CAPTCHA-Wall auf dem Buchungspfad. Wer alle sechs Signale erfüllt, wird selbst bei schlechterer Klassikposition gegenüber lückenhaften Wettbewerbern bevorzugt.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Schema (~25 %):</strong> LocalBusiness, Reservation, OpeningHours, AggregateRating, Service.</li>
          <li><strong>Bewertungssentiment (~20 %):</strong> ≥ 4,2 Sterne, ≥ 30 Bewertungen über zwei Hauptquellen.</li>
          <li><strong>Echtzeit-Verfügbarkeit (~20 %):</strong> Slot-API oder externes Buchungstool aktiv.</li>
          <li><strong>Buchungs-Reibung (~15 %):</strong> Klick-zu-Buchung ≤ 3 Schritte ohne Account-Pflicht.</li>
          <li><strong>Semantisches HTML (~10 %):</strong> ARIA-Labels, button-Element, eindeutige CTAs.</li>
          <li><strong>Sicherheits-Friktion (~10 %):</strong> CAPTCHA, Cloudflare-Challenge oder Login blockieren Agents.</li>
        </ul>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Plan: Wie wirst du agent-ready?
        </h2>
        <AnswerBlock question="Wie optimiere ich meine Webseite systematisch für AI Agents?">
          1) Reservation- und LocalBusiness-Schema implementieren. 2) Buchungspfad auf ≤ 3 Klicks reduzieren. 3) Alle Buttons semantisch (button-Element + ARIA-Label) bauen. 4) CAPTCHAs vom Buchungspfad entfernen oder via Risk-Score umgehen. 5) Bing Places und Apple Business Connect synchronisieren. 6) Externes Buchungstool (Doctolib, OpenTable, Treatwell) integrieren. 7) Monatliche Test-Buchungen über Operator und Comet durchführen. Erste Effekte sind in 6–10 Wochen messbar.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li><strong>Schema-Setup:</strong> Reservation-, LocalBusiness-, OpeningHours- und AggregateRating-Schema via Rich Results Test validieren.</li>
          <li><strong>Pfad-Reduktion:</strong> Buchungs-CTA „above the fold", maximal 3 Klicks bis zur Bestätigung.</li>
          <li><strong>Semantisches HTML:</strong> Alle CTAs als &lt;button&gt; mit eindeutigem aria-label („Tisch reservieren", nicht „Jetzt klicken").</li>
          <li><strong>Sicherheits-Friktion entfernen:</strong> CAPTCHA-frei für ersten Buchungsschritt, Honeypot statt Bot-Wall.</li>
          <li><strong>Multi-Plattform-Sichtbarkeit:</strong> Bing Places aufsetzen (<Link to="/blog/bing-copilot-local-seo-2026" className="text-primary underline">Bing-Guide</Link>) und Apple Business Connect (<Link to="/blog/apple-business-connect-local-seo-2026" className="text-primary underline">ABC-Leitfaden</Link>).</li>
          <li><strong>Externe Tools nutzen:</strong> Doctolib, Treatwell, OpenTable sind bereits agent-ready — Integration über &lt;link rel="alternate"&gt; oder direktes Embed.</li>
          <li><strong>Agent-Test-Audit:</strong> Monatlich je 5 Test-Buchungen über Operator, ChatGPT Agent Mode und Comet — Abbrüche dokumentieren und beheben.</li>
        </ol>
        <p className="mt-6">
          Kombiniere die Strategie mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link>, dem <Link to="/blog/voice-search-sprachassistenten-local-seo-2026" className="text-primary underline">Voice-Search-Leitfaden</Link> und dem <Link to="/blog/google-ai-mode-local-seo-2026" className="text-primary underline">Google AI Mode Guide</Link>.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich Agent-Traffic und Agent-Buchungen?
        </h2>
        <AnswerBlock question="Welche Metriken zeigen, ob AI Agents auf meiner Seite buchen?">
          Vier Quellen: 1) Server-Logs nach Agent-User-Agents filtern (ChatGPT-User, GPTBot, PerplexityBot, Google-Extended, ClaudeBot, Operator). 2) Buchungssystem nach Sessions ohne klassisches UTM und ohne menschliche Maus-Bewegung. 3) Cloudflare- oder CDN-Bot-Reports. 4) Manuelle Test-Buchungen via Operator/Comet mit Top-10-Keywords. Steigender Direkt- oder Agent-Traffic bei stabilem Such-Traffic ist der zuverlässigste Frühindikator.
        </AnswerBlock>
        <p className="mt-4">
          Trage die Ergebnisse in den <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> ein, um Agent-Performance gegen ChatGPT Search, AI Mode und Voice zu vergleichen.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler lassen AI Agents abbrechen?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Gründe, warum Agents auf meiner Seite scheitern?">
          1) CAPTCHA auf dem Buchungspfad — Agents brechen sofort ab. 2) Buchung nur via JavaScript-Modal ohne Fallback. 3) CTAs mit unklarem Label („Jetzt klicken" statt „Termin buchen"). 4) Cookie-Wall blockiert HTML-Parsing. 5) Fehlendes Schema — Agent erkennt Unternehmen nicht als buchbar. Wer diese fünf Punkte behebt, gewinnt typisch 15–25 % zusätzliche agent-gestützte Buchungen.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>CAPTCHA:</strong> Sofortiger Abbruch — Honeypot oder Risk-Score nutzen.</li>
          <li><strong>JS-only-Buchung:</strong> Server-rendered Form oder Progressive Enhancement implementieren.</li>
          <li><strong>Unklare CTAs:</strong> Eindeutige Labels mit Verb + Objekt („Termin buchen").</li>
          <li><strong>Cookie-Wall:</strong> Essentielle Buchung ohne Consent ermöglichen.</li>
          <li><strong>Schema-Lücken:</strong> Reservation und LocalBusiness ohne diese keine Agent-Empfehlung.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Agent-Readiness deiner Webseite prüfen lassen</h3>
        <p className="mb-4">
          Wir auditieren deine Webseite gegen Operator, ChatGPT Agent Mode, Gemini Agents und Comet — inklusive Schema, semantischem HTML und Buchungs-Reibung. Du erhältst eine priorisierte Maßnahmenliste, mit der du in 6–10 Wochen messbar mehr Agent-Buchungen gewinnst.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Kostenlosen Agent-Audit anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default AiAgentsLokaleBuchungen2026;
