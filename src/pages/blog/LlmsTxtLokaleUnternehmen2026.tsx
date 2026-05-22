import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { FileText, Layers, ListChecks, AlertTriangle, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "llms-txt-lokale-unternehmen-2026";

const LlmsTxtLokaleUnternehmen2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "was-ist-llms-txt", title: "Was ist llms.txt?" },
    { id: "warum-relevant", title: "Warum llms.txt 2026 Pflicht wird" },
    { id: "wer-nutzt", title: "Welche AI-Systeme llms.txt lesen" },
    { id: "aufbau", title: "Aufbau einer guten llms.txt" },
    { id: "beispiel", title: "Vollständiges Beispiel für lokale Unternehmen" },
    { id: "strategie", title: "7-Schritte-Setup" },
    { id: "fehler", title: "5 typische Fehler" },
    { id: "messung", title: "Wirkung messen" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist eine llms.txt-Datei?",
      answer:
        "llms.txt ist eine Markdown-Datei im Site-Root (/llms.txt), die KI-Assistenten kompakt erklärt, worum es auf der Webseite geht und wo die wichtigsten Inhalte liegen. Anders als robots.txt steuert sie nichts technisch — sie liefert eine kuratierte Inhaltskarte, damit Crawler wie ChatGPT, Perplexity oder Claude den JS-Shell überspringen und direkt die relevanten Seiten lesen. Der Spec liegt unter llmstxt.org.",
    },
    {
      question: "Warum sollte ein lokales Unternehmen 2026 eine llms.txt einsetzen?",
      answer:
        "Weil AI-Assistenten 2026 zur wichtigsten Empfehlungsquelle werden. Eine saubere llms.txt erhöht die Wahrscheinlichkeit, dass ChatGPT, Perplexity und Claude die richtige Dienstleistungsseite, das richtige Standortprofil und die richtige Buchungsseite zitieren. Ohne llms.txt müssen Crawler raten — und wählen oft veraltete oder schwächere Unterseiten. Studien zeigen 15–30 % mehr korrekte Zitate nach Einführung einer strukturierten llms.txt.",
    },
    {
      question: "Welche AI-Systeme lesen llms.txt aktuell?",
      answer:
        "Bestätigt oder beobachtet: OpenAI (ChatGPT, GPTBot, ChatGPT-User, Operator), Anthropic (Claude, ClaudeBot, Computer Use), Perplexity (PerplexityBot, Comet Browser), Mistral und mehrere kleinere Indexierer. Google Gemini und Bing/Copilot lesen primär Schema-Daten, profitieren aber indirekt, weil Drittquellen wie Perplexity in deren Antworten einfließen. Eine llms.txt ist 2026 Pflicht-Hygienemaßnahme — der Aufwand ist minimal, der Effekt messbar.",
    },
    {
      question: "Was gehört in eine llms.txt für ein lokales Unternehmen?",
      answer:
        "Mindestens vier Blöcke: 1) H1 mit Unternehmensname und Standort. 2) Ein-Satz-Blockquote mit dem Kernangebot. 3) Kurzbeschreibung mit Region, Sprache, Zielgruppe. 4) H2-Sektionen mit Markdown-Linklisten zu Hauptseiten (Dienstleistungen, Standorte, Buchung, Über uns, Bewertungen). Optional eine Section „Optional" mit Sekundär-Links. Keine internen Admin-, Login- oder Account-Routen aufnehmen.",
    },
    {
      question: "Wo lege ich llms.txt ab?",
      answer:
        "Im Site-Root, abrufbar unter https://deine-domain/llms.txt — analog zu robots.txt. Bei Vite/React lege die Datei in public/llms.txt ab, dann wird sie automatisch unter /llms.txt ausgeliefert. Content-Type sollte text/markdown oder text/plain sein, UTF-8 Kodierung. Die Datei darf nicht durch robots.txt blockiert sein und sollte nicht hinter einer Auth-Wall liegen.",
    },
    {
      question: "Wie messe ich, ob die llms.txt wirkt?",
      answer:
        "Drei Wege: 1) Server-Logs nach Zugriffen auf /llms.txt filtern (typischerweise GPTBot, ClaudeBot, PerplexityBot). 2) Manuelle Test-Queries in ChatGPT, Perplexity und Claude mit deinen Top-Keywords — beobachte, ob deine korrekten Service-URLs zitiert werden. 3) Anteil korrekter Deep-Links in AI-Antworten über Zeit. Erste Effekte sind typischerweise in 4–8 Wochen messbar.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        llms.txt ist 2026 das, was robots.txt für klassisches SEO war: eine winzige Datei mit großer Wirkung. Sie sagt ChatGPT, Perplexity und Claude in unter 100 Zeilen, was dein Unternehmen macht, wo es sitzt und welche Seiten zuerst gelesen werden sollen. Dieser Guide zeigt den Aufbau einer rechtssicheren, korrekt strukturierten llms.txt für lokale Unternehmen — inklusive vollständiges Beispiel, 7-Schritte-Setup und 5 häufige Fehler.
      </p>

      <KeyTakeawaysBox
        items={[
          "llms.txt liegt im Site-Root unter /llms.txt und ist eine Markdown-Datei",
          "Aufbau: H1, Blockquote, freier Markdown, H2-Sektionen mit Linklisten",
          "Gelesen wird sie u. a. von ChatGPT, Claude, Perplexity und Comet",
          "Keine Admin-, Auth- oder API-Routen aufnehmen — nur öffentliche Seiten",
          "Bei Vite/React liegt die Datei in public/llms.txt",
          "Erste Effekte (korrekte Zitate, Deep-Links) sind in 4–8 Wochen messbar",
        ]}
      />

      <section id="was-ist-llms-txt" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary" />
          Was genau ist llms.txt?
        </h2>
        <AnswerBlock question="Was ist llms.txt und was unterscheidet sie von robots.txt oder sitemap.xml?">
          llms.txt ist eine Markdown-Datei im Site-Root, die KI-Crawlern eine kuratierte Inhaltskarte liefert. Anders als robots.txt (steuert Zugriff) oder sitemap.xml (listet alle URLs maschinenlesbar) erklärt llms.txt menschen- und LLM-lesbar, worum es geht und welche Seiten priorisiert werden sollten. Der Spec stammt von Jeremy Howard und liegt unter llmstxt.org — Format ist strikt: H1, optionales Blockquote, freier Markdown, H2-Sektionen mit Linklisten.
        </AnswerBlock>
      </section>

      <section id="warum-relevant" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Warum ist llms.txt 2026 Pflicht-Hygiene?
        </h2>
        <AnswerBlock question="Welchen messbaren Effekt hat eine llms.txt für lokale Unternehmen?">
          Drei Effekte: 1) Höhere Zitatrate in AI-Antworten (typisch +15–30 %). 2) Bessere Deep-Links — Assistenten verlinken die richtige Service- oder Standortseite statt der Startseite. 3) Schnellere Erstindexierung neuer Seiten durch KI-Crawler. Aufwand: 30–90 Minuten initial. ROI: dauerhaft besseres Citation-Targeting bei OpenAI, Anthropic und Perplexity — und damit mehr qualifizierten Direkt-Traffic.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Kuratierter Index:</strong> Du steuerst, welche Seiten Crawler bevorzugen.</li>
          <li><strong>Geringer Aufwand:</strong> Eine statische Datei, einmal aufgesetzt, monatlich gepflegt.</li>
          <li><strong>Wachsende Akzeptanz:</strong> OpenAI, Anthropic, Perplexity und Mistral haben llms.txt-Support bestätigt oder dokumentiert.</li>
        </ul>
      </section>

      <section id="wer-nutzt" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          Welche AI-Systeme lesen llms.txt 2026?
        </h2>
        <AnswerBlock question="Welche AI-Crawler und Assistenten nutzen llms.txt aktiv?">
          Bestätigt oder beobachtet: OpenAI (GPTBot, ChatGPT-User, Operator), Anthropic (ClaudeBot, Computer Use), Perplexity (PerplexityBot, Comet Browser), Mistral und mehrere kleinere AI-Indexierer. Google Gemini und Bing/Copilot setzen primär auf Schema.org, profitieren aber indirekt, weil Perplexity und ChatGPT in deren Antworten als Drittquelle einfließen. llms.txt ist damit 2026 ein Pflicht-Baustein für Multi-Plattform-AI-Sichtbarkeit.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">System</th>
                <th className="border p-3 text-left">User-Agent</th>
                <th className="border p-3 text-left">llms.txt-Nutzung</th>
                <th className="border p-3 text-left">Primärer Effekt</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">ChatGPT / Operator</td><td className="border p-3">GPTBot, ChatGPT-User</td><td className="border p-3">Aktiv</td><td className="border p-3">Korrekte Service-Zitate</td></tr>
              <tr><td className="border p-3 font-semibold">Claude / Computer Use</td><td className="border p-3">ClaudeBot</td><td className="border p-3">Aktiv</td><td className="border p-3">Bessere Deep-Links</td></tr>
              <tr><td className="border p-3 font-semibold">Perplexity / Comet</td><td className="border p-3">PerplexityBot</td><td className="border p-3">Aktiv</td><td className="border p-3">Schnellere Indexierung</td></tr>
              <tr><td className="border p-3 font-semibold">Mistral Le Chat</td><td className="border p-3">MistralBot</td><td className="border p-3">Beobachtet</td><td className="border p-3">EU-Fokus</td></tr>
              <tr><td className="border p-3 font-semibold">Google Gemini / AI Mode</td><td className="border p-3">Google-Extended</td><td className="border p-3">Indirekt</td><td className="border p-3">Über Drittquellen</td></tr>
              <tr><td className="border p-3 font-semibold">Microsoft Copilot</td><td className="border p-3">Bingbot</td><td className="border p-3">Indirekt</td><td className="border p-3">Über Bing-Index</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="aufbau" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Workflow className="w-7 h-7 text-primary" />
          Wie ist eine gute llms.txt aufgebaut?
        </h2>
        <AnswerBlock question="Welche Struktur muss eine spec-konforme llms.txt haben?">
          Vier Pflichtblöcke: 1) H1 mit Site- bzw. Unternehmensnamen. 2) Optionales Blockquote als Ein-Satz-Zusammenfassung. 3) Freier Markdown mit 2–4 Absätzen Kontext. 4) Mehrere H2-Sektionen mit Markdown-Linklisten im Format `- [Titel](/pfad): Beschreibung`. Optional am Ende eine Sektion „Optional" für Sekundär-Links, die bei knappem Context-Budget übersprungen werden dürfen. Keine tieferen Headings als H2 — die Datei muss flach bleiben.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>H1:</strong> Unternehmensname, optional Standort („Local Dominate – Local SEO Agentur DACH").</li>
          <li><strong>Blockquote:</strong> Ein Satz, der erklärt was, für wen, in welcher Region.</li>
          <li><strong>Markdown-Kontext:</strong> 2–4 Absätze über Leistungen, Sprachen, Zielgruppen.</li>
          <li><strong>H2 + Linkliste:</strong> Pro Hauptkategorie eine Sektion (Services, Blog, Standorte, Über uns).</li>
          <li><strong>Optional-Sektion:</strong> Sekundärinhalte, die übersprungen werden dürfen.</li>
        </ul>
      </section>

      <section id="beispiel" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary" />
          Vollständiges Beispiel: llms.txt für einen Zahnarzt
        </h2>
        <AnswerBlock question="Wie sieht eine produktionsreife llms.txt für eine lokale Praxis aus?">
          Eine gute lokale llms.txt ist 40–80 Zeilen lang, listet 8–15 Hauptseiten und gruppiert sie nach Funktion: Leistungen, Standort, Buchung, Über uns. Sie verzichtet auf interne Bereiche, Patientenportale und Login-URLs. Das folgende Beispiel ist direkt übertragbar — Name, Stadt und Pfade ersetzen, sonst nichts ändern.
        </AnswerBlock>
        <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm mt-6"><code>{`# Zahnarztpraxis Dr. Schmidt – Köln Innenstadt

> Moderne Zahnmedizin in Köln: Vorsorge, Ästhetik und Implantologie für Familien, mit Online-Terminbuchung und Notdienst.

Die Praxis Dr. Schmidt behandelt seit 2008 Patientinnen und Patienten aus Köln und dem Rheinland in den Bereichen Vorsorge, Ästhetik, Implantologie und Kinderzahnheilkunde. Sprachen: Deutsch, Englisch. Terminbuchung über Doctolib oder direkt auf der Webseite.

## Leistungen
- [Vorsorge & Prophylaxe](/leistungen/vorsorge): Professionelle Zahnreinigung, Fissurenversiegelung, Bleaching.
- [Implantologie](/leistungen/implantate): Einzelimplantate, Brücken, All-on-4.
- [Kinderzahnheilkunde](/leistungen/kinder): Angstfreie Behandlung ab 3 Jahren.
- [Ästhetische Zahnmedizin](/leistungen/aesthetik): Veneers, Bleaching, Komposit-Restaurationen.

## Standort & Termine
- [Praxis Köln Innenstadt](/standort): Adresse, Anfahrt, Öffnungszeiten.
- [Online-Termin buchen](/termin): Direkt-Buchung über Doctolib.
- [Notdienst](/notdienst): Erreichbarkeit am Wochenende.

## Über uns
- [Team & Qualifikationen](/team): Dr. Schmidt, Dr. Müller, Praxisteam.
- [Bewertungen](/bewertungen): Google, Jameda, Doctolib.

## Optional
- [Blog: Zahngesundheit](/blog): Tipps zu Vorsorge und Ästhetik.
- [Patientenhinweise](/patienteninfo): Anamnese-Formulare und Versicherungsinfos.`}</code></pre>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Setup für deine llms.txt
        </h2>
        <AnswerBlock question="Wie erstelle und veröffentliche ich eine llms.txt Schritt für Schritt?">
          1) Top-Seiten und Routen sammeln (gleiche Liste wie Sitemap). 2) Admin-, Auth- und API-Routen entfernen. 3) Markdown-Datei nach Spec aufbauen (H1, Blockquote, Markdown, H2-Sektionen). 4) Unter public/llms.txt ablegen. 5) Im Browser /llms.txt prüfen. 6) In robots.txt nicht blockieren. 7) Monatlich nachpflegen, wenn neue Hauptseiten dazukommen. Initialaufwand: 30–90 Minuten.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li><strong>Seiten sammeln:</strong> Sitemap-Export oder Routen-Liste als Ausgangspunkt.</li>
          <li><strong>Filtern:</strong> Admin (/admin), Auth (/login, /signup), API (/api/*), Webhooks raus.</li>
          <li><strong>Strukturieren:</strong> H1 mit Markenname, Blockquote, 2–4 Absätze, H2-Sektionen.</li>
          <li><strong>Linkliste pro H2:</strong> `- [Titel](/pfad): kurze Beschreibung` — max. 15 Links pro Sektion.</li>
          <li><strong>Deployment:</strong> Datei unter public/llms.txt — Vite/React serviert sie automatisch unter /llms.txt.</li>
          <li><strong>Validierung:</strong> Browser-Aufruf, dann Test in ChatGPT und Perplexity mit „Lies https://domain/llms.txt".</li>
          <li><strong>Pflege:</strong> Monatlich Diff zur Sitemap prüfen, neue Hauptseiten ergänzen.</li>
        </ol>
        <p className="mt-6">
          Kombiniere die llms.txt mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link>, dem <Link to="/blog/schema-strategie-ai-retrieval" className="text-primary underline">Schema-AI-Retrieval-Guide</Link> und dem <Link to="/blog/ai-agents-lokale-buchungen-2026" className="text-primary underline">AI-Agents-Leitfaden</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern Wirkung?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler beim Aufsetzen einer llms.txt?">
          1) Datei nicht im Root, sondern in einem Unterordner — Crawler finden sie nicht. 2) Admin- oder Login-URLs aufgenommen — Sicherheitsrisiko und Vertrauensverlust. 3) Zu viele Links (200+) — Crawler überspringen aus Context-Budget. 4) Tiefe Headings (H3, H4) — verstößt gegen Spec, viele Crawler brechen ab. 5) Keine Pflege — veraltete Links liefern 404 und schwächen das Vertrauen der Assistenten dauerhaft.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Falscher Pfad:</strong> Immer /llms.txt im Root, nicht /content/llms.txt.</li>
          <li><strong>Interne Routen:</strong> Niemals /admin, /login, /api, Account-URLs aufnehmen.</li>
          <li><strong>Überladene Datei:</strong> Maximal 15 Links pro Sektion, insgesamt unter 100 Zeilen.</li>
          <li><strong>Spec-Verstöße:</strong> Nur H1 und H2 — keine tieferen Überschriften.</li>
          <li><strong>Keine Pflege:</strong> Monatlich gegen Sitemap und 404-Report prüfen.</li>
        </ul>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich die Wirkung der llms.txt?
        </h2>
        <AnswerBlock question="Welche Metriken zeigen, ob meine llms.txt wirkt?">
          Drei Quellen: 1) Server-Logs nach /llms.txt-Zugriffen filtern (GPTBot, ClaudeBot, PerplexityBot). 2) Manuelle Test-Queries in ChatGPT, Perplexity und Claude mit Top-10-Keywords — beobachte, ob die zitierten URLs die richtigen Service-Seiten sind. 3) Anteil von AI-Referrals im Web-Traffic (Direct/Unbekannt mit AI-User-Agent-Mustern). Erste Effekte sind in 4–8 Wochen messbar.
        </AnswerBlock>
        <p className="mt-4">
          Trage die Beobachtungen in den <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> ein, um die llms.txt-Wirkung gegen Schema, GBP und ABC vergleichbar zu machen.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">llms.txt für dein Unternehmen erstellen lassen</h3>
        <p className="mb-4">
          Wir erstellen eine spec-konforme llms.txt für deine Webseite, inklusive Routen-Audit, Filterung interner Bereiche und Vorschlag zur monatlichen Pflege. Du erhältst die fertige Datei plus Validierung in ChatGPT, Perplexity und Claude.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Kostenlose llms.txt anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LlmsTxtLokaleUnternehmen2026;
