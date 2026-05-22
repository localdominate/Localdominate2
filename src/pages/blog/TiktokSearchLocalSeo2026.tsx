import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Music2, Search, Users, ListChecks, AlertTriangle, BarChart3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "tiktok-search-local-seo-2026";

const TiktokSearchLocalSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum-tiktok", title: "Warum TikTok zur Suchmaschine wurde" },
    { id: "wie-funktioniert", title: "Wie funktioniert TikTok Search?" },
    { id: "ranking-signale", title: "Ranking-Signale für lokale Inhalte" },
    { id: "content-formate", title: "Welche Content-Formate funktionieren?" },
    { id: "strategie", title: "7-Schritte-Plan" },
    { id: "messung", title: "Sichtbarkeit messen" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Nutzen DACH-Kunden TikTok wirklich als Suchmaschine?",
      answer:
        'Ja. Laut Google-eigenen Studien suchen über 40 % der unter 25-Jährigen lokale Empfehlungen (Restaurants, Cafés, Friseure, Events) zuerst auf TikTok statt auf Google. In DACH ist der Trend leicht verzögert, aber zwischen 2024 und 2026 ist die Nutzung von TikTok als Such-Tool für lokale Inhalte um über 80 % gestiegen. Wer Gen Z erreichen will, muss in TikTok Search auffindbar sein.',
    },
    {
      question: "Wie funktioniert die TikTok-Suche im Vergleich zu Google?",
      answer:
        'TikTok Search analysiert Video-Untertitel, Voice-to-Text-Transkripte, On-Screen-Text (OCR), Hashtags, Beschreibungen und Engagement-Signale (Watch-Time, Saves, Shares). Im Unterschied zu Google bewertet TikTok kein PageRank, sondern Content-Engagement und Recency. Ein 3 Wochen altes Video mit hoher Watch-Time kann ein klassisches Top-Google-Ergebnis verdrängen — innerhalb der TikTok-Zielgruppe.',
    },
    {
      question: "Welche Branchen profitieren am stärksten von TikTok Local Search?",
      answer:
        'Gastronomie, Cafés, Bars, Friseure, Beauty-Studios, Fitness-Studios, Event-Locations und alle visuell starken Dienstleistungen. Branchen mit hoher Visual-Appeal-Komponente erzielen 5–10× mehr lokale Reichweite über TikTok als über klassische Local-SEO-Kanäle. Für B2B oder hochregulierte Branchen (Recht, Steuern) bleibt LinkedIn relevanter.',
    },
    {
      question: "Was sind die wichtigsten Ranking-Signale in TikTok Search?",
      answer:
        'Sechs Hauptsignale: 1) Watch-Time-Rate (>70 % des Videos angeschaut). 2) Saves und Shares pro View. 3) Vollständige Untertitel und Caption mit Suchbegriffen. 4) Standort-Tag im Video. 5) Konsistente Hashtag-Strategie (#cityName + #branche). 6) Account-Authority (Follower, Konsistenz, Verified-Status). Anders als bei Google zählt Recency stark — Videos älter als 6 Monate fallen schnell.',
    },
    {
      question: "Wie integriere ich TikTok in meine Local-SEO-Strategie?",
      answer:
        'Drei Bausteine: 1) Business-Account mit Standort, Kategorie, vollständigem Profil und Link-in-Bio zur Website. 2) Mindestens 2 Videos pro Woche mit Standort-Tag, Untertiteln und lokal relevanten Hashtags. 3) Cross-Promotion zwischen Google Business Profil (TikTok-Video als Post einbetten) und Website (TikTok-Embed in relevanten Artikeln). Aufbauzeit für stabile Reichweite: 3–6 Monate.',
    },
    {
      question: "Welche rechtlichen Risiken muss ich bei TikTok beachten?",
      answer:
        'In DACH gelten DSGVO, UWG (Schleichwerbung) und Urheberrecht (Musik, Bildmaterial). Wichtig: jedes Video mit kommerziellem Bezug als „Werbung" oder „Anzeige" kennzeichnen, fremde Musik nur über TikToks Commercial Music Library nutzen und kein Bildmaterial von Kunden ohne schriftliches Einverständnis veröffentlichen. Verstöße können Abmahnungen kosten — Vorlagen finden sich in jedem Social-Media-Recht-Ratgeber.',
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Über 40 % der Gen Z nutzt TikTok als Suchmaschine — auch in DACH. Wer „bestes Café in Berlin" sucht, tippt das zunehmend in TikTok statt in Google. Gleichzeitig ist TikTok Search der mit Abstand am stärksten unterschätzte Local-SEO-Kanal: Konkurrenzdruck niedrig, organische Reichweite hoch, lokale Conversion-Wirkung sofort messbar. Dieser Guide zeigt, wie du TikTok systematisch als Suchmaschinen-Kanal einsetzt — mit Ranking-Signalen, Content-Formaten und 7-Schritte-Plan für DACH-Unternehmen.
      </p>

      <KeyTakeawaysBox
        items={[
          "Über 40 % der Gen Z sucht lokale Empfehlungen zuerst in TikTok statt in Google",
          "TikTok Search analysiert Untertitel, OCR, Hashtags, Engagement und Recency — nicht PageRank",
          "Watch-Time, Saves und Shares sind die wichtigsten Ranking-Signale",
          "Standort-Tag im Video ist Pflicht für lokale Auffindbarkeit",
          "Gastronomie, Beauty, Fitness und Event-Branchen profitieren am stärksten",
          "Recency schlägt Backlinks — Videos älter als 6 Monate verlieren schnell Reichweite",
        ]}
      />

      <section id="warum-tiktok" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-7 h-7 text-primary" />
          Warum wurde TikTok zur Suchmaschine?
        </h2>
        <AnswerBlock question="Warum nutzt die jüngere Generation TikTok zunehmend als Suchmaschine?">
          TikTok liefert auf lokale Fragen visuelle, authentische Antworten in 15–60 Sekunden — schneller und glaubwürdiger als ein Google-Suchergebnis mit zehn Links. Echte Nutzer zeigen echte Erfahrungen, statt SEO-optimierte Texte. Für Gen Z ist „TikTok Made Me Buy It" inzwischen ein Standard-Kaufpfad. Google bestätigt diesen Trend selbst — in einer 2024er Analyse nannte Google TikTok als ersten Such-Wettbewerber bei lokalen Themen.
        </AnswerBlock>
        <p className="mt-4">
          Drei Faktoren erklären die Verschiebung:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Video-First-Konsum:</strong> Visuelle Eindrücke schlagen Textbeschreibungen bei lokalen Empfehlungen.</li>
          <li><strong>Authentizität:</strong> Nutzer-Videos wirken glaubwürdiger als gestaltete Website-Texte.</li>
          <li><strong>Recency-Vorteil:</strong> Frische Inhalte (≤30 Tage) zeigen aktuelle Realität — Google zeigt oft ältere Daten.</li>
        </ul>
      </section>

      <section id="wie-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie funktioniert die TikTok-Suche technisch?
        </h2>
        <AnswerBlock question="Welche Daten analysiert die TikTok-Suche bei einer lokalen Anfrage?">
          TikTok Search analysiert: 1) Caption-Text inkl. Hashtags. 2) On-Screen-Text via OCR (Erkennung von Text in Videos). 3) Voice-to-Text-Transkript der Audio-Spur. 4) Standort-Tags und Geo-Metadaten. 5) Account-Profil-Felder. 6) Engagement-Daten (Watch-Time, Saves, Shares, Kommentare). Diese Signale werden kombiniert mit personalisierten Empfehlungen aus dem „For You"-Algorithmus, die Nutzerverhalten und -kontext einbeziehen.
        </AnswerBlock>
        <p className="mt-4">
          Praxis-Beispiel: Sucht ein Nutzer in München nach „Brunch München", priorisiert TikTok Search Videos mit Standort-Tag München, OCR-Erkennung von „Brunch", Hashtags wie #brunchmunich #brunchmünchen, vollständige Caption mit Begriff „Brunch" und hoher Engagement-Rate der letzten 4 Wochen. Wer keinen Standort-Tag setzt, ist faktisch unsichtbar.
        </p>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Welche Ranking-Signale gewichtet TikTok Search?
        </h2>
        <AnswerBlock question="Was sind die wichtigsten Ranking-Faktoren in TikTok Search?">
          Sechs Faktoren mit Gewichtung: Watch-Time-Rate (~30 %), Save- und Share-Rate (~20 %), Caption- und Hashtag-Qualität (~15 %), Standort-Tag und Geo-Konsistenz (~15 %), Account-Authority (~10 %), Recency (~10 %). Anders als bei Google gibt es kein klassisches Linksignal — TikTok bewertet ausschließlich Engagement und Kontext. Recency ist deutlich stärker als bei Google, ältere Videos verlieren schnell Reichweite.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Signal</th>
                <th className="border p-3 text-left">Gewichtung (geschätzt)</th>
                <th className="border p-3 text-left">Optimierungs-Hebel</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Watch-Time</td><td className="border p-3">~30 %</td><td className="border p-3">Hook in ersten 3 Sek., klare Story-Struktur</td></tr>
              <tr><td className="border p-3 font-semibold">Saves & Shares</td><td className="border p-3">~20 %</td><td className="border p-3">Praktischer Nutzen, klare Empfehlung</td></tr>
              <tr><td className="border p-3 font-semibold">Caption & Hashtags</td><td className="border p-3">~15 %</td><td className="border p-3">Suchbegriffe + Stadt-Hashtag</td></tr>
              <tr><td className="border p-3 font-semibold">Standort-Tag</td><td className="border p-3">~15 %</td><td className="border p-3">Konsistent über alle Videos</td></tr>
              <tr><td className="border p-3 font-semibold">Account-Authority</td><td className="border p-3">~10 %</td><td className="border p-3">Konsistente Posts, Business-Account verifizieren</td></tr>
              <tr><td className="border p-3 font-semibold">Recency</td><td className="border p-3">~10 %</td><td className="border p-3">Mindestens 2 Videos/Woche</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Gewichtungen basieren auf eigenen Tests in DACH-Märkten Q1/2026. Offizielle Werte sind nicht dokumentiert.</p>
        </div>
      </section>

      <section id="content-formate" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Music2 className="w-7 h-7 text-primary" />
          Welche Content-Formate funktionieren für Local Search?
        </h2>
        <AnswerBlock question="Welche Video-Formate ranken in TikTok Search für lokale Anfragen am besten?">
          Vier Formate: 1) „Top 3 in [Stadt]"-Listen (Restaurants, Cafés, Bars). 2) Behind-the-Scenes-Videos aus dem Unternehmen mit Standort-Tag. 3) Tutorials und Tipps mit lokalem Bezug („3 Tipps für Hochzeitsfotografie in Hamburg"). 4) Reaction- oder Walkthrough-Videos bei Produkten und Locations. Wichtig: Untertitel einblenden — TikTok Search liest sie via OCR.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>„Top N in [Stadt]"-Listen:</strong> Hohe Save-Rate, dauerhaft suchbar, Stadt-Tag und Branche im Titel.</li>
          <li><strong>Behind-the-Scenes:</strong> Wirkt authentisch, hohe Watch-Time bei Stamm-Followern.</li>
          <li><strong>Lokale Tutorials:</strong> Praktischer Nutzen → hohe Save- und Share-Rate.</li>
          <li><strong>Reaction / Walkthrough:</strong> Erste-Person-Perspektive, hohe Glaubwürdigkeit.</li>
        </ul>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Plan für TikTok Local Search
        </h2>
        <AnswerBlock question="Wie baue ich systematisch TikTok-Local-Search-Sichtbarkeit auf?">
          1) Business-Account aktivieren mit Standort, Kategorie und Link-in-Bio. 2) Stadt- und Branchen-Hashtag-Set festlegen (5–10 Stück). 3) Mindestens 2 Videos pro Woche mit Standort-Tag posten. 4) Untertitel und On-Screen-Text bei jedem Video. 5) Erste 3 Sekunden als visueller Hook gestalten. 6) Cross-Promotion über Google Business Profil und Website. 7) Monatlich Test-Suchen durchführen und Lücken schließen. Aufbauzeit: 3–6 Monate.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>Account-Setup:</strong> Umstieg auf Business-Account, vollständige Bio mit Standort, Kategorie und Link-in-Bio. Verified-Status anstreben, falls möglich.
          </li>
          <li>
            <strong>Hashtag-Set:</strong> 5–10 feste Hashtags pro Stadt und Branche definieren (#cafemunich #brunchmunich #munichfood), Variation pro Video.
          </li>
          <li>
            <strong>Posting-Rhythmus:</strong> Mindestens 2 Videos pro Woche. Konsistenz schlägt Perfektion — TikTok bevorzugt aktive Accounts.
          </li>
          <li>
            <strong>Untertitel-Pflicht:</strong> TikTok-eigene Untertitel-Funktion oder On-Screen-Text. OCR scannt beides für Search-Indexierung.
          </li>
          <li>
            <strong>3-Sekunden-Hook:</strong> Erste Sekunden entscheiden über Watch-Time. Visueller Hook, klare Frage oder unerwarteter Twist.
          </li>
          <li>
            <strong>Cross-Promotion:</strong> Top-Videos als Post in Google Business Profil einbetten, in relevanten <Link to="/blog/ai-suche-lokale-unternehmen" className="text-primary underline">Local-SEO-Inhalten</Link> verlinken.
          </li>
          <li>
            <strong>Search-Audit:</strong> Monatlich 5 Top-Keywords in TikTok suchen, eigene Position prüfen, Lücken schließen.
          </li>
        </ol>
        <p className="mt-6">
          TikTok ist nur einer der neuen Suchkanäle 2026. Kombiniere die Strategie mit der <Link to="/blog/google-ai-mode-local-seo-2026" className="text-primary underline">Google-AI-Mode-Optimierung</Link> und der <Link to="/blog/reddit-local-seo-ai-zitate-2026" className="text-primary underline">Reddit-Strategie</Link> für vollständige Multi-Plattform-Sichtbarkeit.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich TikTok-Search-Performance?
        </h2>
        <AnswerBlock question="Welche Metriken zeigen, ob meine TikTok-Strategie auf Suchanfragen wirkt?">
          Drei Quellen: 1) TikTok Analytics → Reichweite-Quellen-Tab zeigt Anteil aus „Search" und „FYP". 2) Manuelle Test-Suchen mit Top-Keywords (Stadt + Branche). 3) Referrer-Traffic von tiktok.com in Google Analytics — meist über Link-in-Bio. Zielwert: 20–30 % der Reichweite aus Search nach 6 Monaten. Wer unter 5 % bleibt, hat ein Caption- oder Hashtag-Problem.
        </AnswerBlock>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern TikTok-Search-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei TikTok Local Search?">
          1) Standort-Tag wird vergessen — Video ist faktisch unsichtbar für lokale Suche. 2) Keine Untertitel oder On-Screen-Text — OCR-Indexierung fällt weg. 3) Generische Hashtags ohne Stadt-Bezug. 4) Inkonsistente Posting-Frequenz — TikTok bevorzugt aktive Accounts. 5) Keine klare Hook in den ersten 3 Sekunden — Watch-Time-Rate sinkt unter Ranking-Schwelle.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Fehlender Standort-Tag:</strong> Ohne Geo-Signal ranken Videos in Local Search nicht.</li>
          <li><strong>Keine Untertitel:</strong> OCR ist primäres Such-Signal — ohne sie versteht TikTok den Inhalt nicht.</li>
          <li><strong>Generische Hashtags:</strong> #food #lecker ist Wettbewerbs-Niemandsland. Stadt-spezifische Hashtags wirken sofort.</li>
          <li><strong>Inkonsistenz:</strong> 1 Video pro Monat reicht nicht — Algorithmus bestraft inaktive Accounts.</li>
          <li><strong>Schwache Hook:</strong> Unter 50 % Watch-Time-Rate ist faktisch keine Reichweite zu erwarten.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">TikTok ist nur einer von vielen neuen Suchkanälen</h3>
        <p className="mb-4">
          Unser AI-Sichtbarkeits-Audit prüft Google, ChatGPT Search, TikTok, Reddit, Bing Copilot und weitere — mit konkretem Aktionsplan für DACH-Unternehmen.
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

export default TiktokSearchLocalSeo2026;