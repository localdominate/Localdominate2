import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import LocalPartnershipOutreachTemplates from "@/components/blog/LocalPartnershipOutreachTemplates";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";

const tocItems = [
  { id: "warum-influencer", title: "Warum lokale Influencer?" },
  { id: "influencer-finden", title: "Die richtigen Influencer finden" },
  { id: "kooperationsmodelle", title: "Kooperationsmodelle" },
  { id: "seo-vorteile", title: "SEO-Vorteile von Influencer-Kooperationen" },
  { id: "outreach", title: "Outreach: So sprichst du Influencer an" },
  { id: "kampagne-messen", title: "Kampagnen-Erfolg messen" },
  { id: "branchen-beispiele", title: "Branchen-Beispiele" },
  { id: "fehler-vermeiden", title: "Häufige Fehler vermeiden" },
  { id: "faq", title: "Häufige Fragen" },
];

const keyTakeaways = [
  "Mikro-Influencer (1.000–10.000 Follower) liefern die höchste lokale Relevanz und Engagement-Rate",
  "Influencer-Content erzeugt natürliche lokale Backlinks, Social Signals und Markenerwähnungen",
  "Produkttausch und Erlebnis-Kooperationen sind für lokale Unternehmen oft effektiver als Bezahlung",
  "Langfristige Partnerschaften wirken stärker als einmalige Posts – für SEO und Markenbekanntheit",
];

const LokaleInfluencerKooperationen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("lokale-influencer-kooperationen", language)!;

  const faqItems = [
    { question: "Was kostet eine Influencer-Kooperation für lokale Unternehmen?", answer: "Viele lokale Kooperationen funktionieren über Produkttausch (0 € Cashkosten). Bei bezahlten Kooperationen liegen Mikro-Influencer typischerweise bei 50–300 € pro Post." },
    { question: "Bringen Influencer-Kooperationen wirklich SEO-Vorteile?", answer: "Ja, über mehrere Wege: Blogger mit eigener Website liefern Backlinks, Social-Media-Posts generieren Brand Mentions und Geo-Signale, und der erhöhte Brand Search Traffic ist ein positives Ranking-Signal." },
    { question: "Wie finde ich Influencer in meiner Stadt?", answer: "Suchen Sie auf Instagram nach lokalen Hashtags, prüfen Sie Location Tags Ihrer Gegend, googlen Sie 'Blogger [Stadt]' und fragen Sie Ihre bestehenden Kunden – oft haben Sie bereits Kunden mit Reichweite." },
    { question: "Wie oft sollte ein Influencer über mein Unternehmen posten?", answer: "Für maximale Wirkung empfehlen wir 2–4 Posts pro Monat über mindestens 3 Monate. Einmalige Posts haben kaum nachhaltigen SEO-Effekt. Regelmäßige Erwähnungen bauen echte Markenassoziation auf." },
    { question: "Muss Influencer-Werbung gekennzeichnet werden?", answer: "Ja, in Deutschland, Österreich und der Schweiz ist die Kennzeichnung von Werbung Pflicht. Auch Produkttausch gilt als Werbung und muss gekennzeichnet werden." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Warum lokale Influencer */}
      <section id="warum-influencer">
        <h2>Warum lokale Influencer für Ihr Unternehmen wichtig sind</h2>
        <AutoLexikonText>
          <p>
            Lokale Influencer sind Personen mit einer engagierten Followerschaft in einer bestimmten
            Stadt oder Region. Im Gegensatz zu großen Influencern mit Millionen-Reichweite haben
            Mikro-Influencer eine deutlich höhere Engagement-Rate und ein Publikum, das tatsächlich
            in Ihrem Einzugsgebiet lebt.
          </p>
          <h3>Warum Mikro-Influencer für Local SEO ideal sind</h3>
          <ul>
            <li><strong>Lokale Relevanz:</strong> Ihre Follower leben in Ihrer Stadt – das ist Ihre Zielgruppe</li>
            <li><strong>Hohe Glaubwürdigkeit:</strong> Empfehlungen wirken authentisch und vertrauenswürdig</li>
            <li><strong>Bezahlbar:</strong> Oft reichen Produkttausch oder kleine Budgets (50–300 €)</li>
            <li><strong>SEO-Signale:</strong> Backlinks, Brand Mentions und Social Signals stärken lokale Rankings</li>
            <li><strong>User Generated Content:</strong> Hochwertiger Content, den Sie weiterverwenden können</li>
          </ul>
          <h3>Mikro vs. Makro: Zahlen im Vergleich</h3>
          <ul>
            <li><strong>Mikro-Influencer (1K–10K):</strong> 3–8 % Engagement-Rate, hohe lokale Relevanz</li>
            <li><strong>Mittlere Influencer (10K–100K):</strong> 1–3 % Engagement-Rate, regionale Reichweite</li>
            <li><strong>Makro-Influencer (100K+):</strong> 0,5–1 % Engagement-Rate, breite aber unspezifische Reichweite</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Influencer finden */}
      <section id="influencer-finden">
        <h2>Die richtigen lokalen Influencer finden</h2>
        <AutoLexikonText>
          <p>
            Die Suche nach passenden lokalen Influencern erfordert Strategie. Nicht jeder
            Account mit vielen Followern ist der richtige Partner für Ihr Unternehmen.
          </p>
          <h3>Suchstrategien</h3>
          <ul>
            <li><strong>Instagram Hashtags:</strong> Suchen Sie nach #[IhreStadt], #[StadtFood], #[StadtTipps]</li>
            <li><strong>Instagram Location Tags:</strong> Wer postet regelmäßig aus Ihrer Gegend?</li>
            <li><strong>Google „Blogger [Stadt]":</strong> Lokale Blogger mit eigener Website = potenzielle Backlinks</li>
            <li><strong>TikTok Ortsbezug:</strong> Lokale Creators mit Stadt-Content</li>
            <li><strong>YouTube „[Stadt] Tipps":</strong> Video-Creators mit lokaler Ausrichtung</li>
            <li><strong>Kundenstamm prüfen:</strong> Haben Sie bereits Kunden mit Reichweite?</li>
          </ul>
          <h3>Qualitätskriterien für lokale Influencer</h3>
          <ul>
            <li>Mindestens 60 % der Follower aus Ihrer Region</li>
            <li>Regelmäßige Posts (mindestens 2–3 pro Woche)</li>
            <li>Echtes Engagement (Kommentare, nicht nur Likes)</li>
            <li>Content-Stil passt zu Ihrer Marke</li>
            <li>Keine übermäßige Werbung (maximal 20 % Sponsored Posts)</li>
            <li>Eigene Website oder Blog (für Backlink-Potenzial)</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Kooperationsmodelle */}
      <section id="kooperationsmodelle">
        <h2>Kooperationsmodelle für lokale Unternehmen</h2>
        <AutoLexikonText>
          <p>
            Je nach Branche, Budget und Ziel gibt es verschiedene Kooperationsformen.
            Für lokale Unternehmen sind Sachleistungen oft effektiver als Geldzahlungen.
          </p>
          <h3>1. Produkttausch / Barter Deal</h3>
          <p>
            Sie bieten Ihr Produkt oder Ihre Dienstleistung kostenlos an, der Influencer
            erstellt dafür Content. Ideal für Gastronomie, Beauty, Fitness und Einzelhandel.
          </p>
          <h3>2. Erlebnis-Kooperation</h3>
          <p>
            Laden Sie Influencer zu exklusiven Events, Workshops oder Behind-the-Scenes-Erlebnissen
            ein. Das erzeugt authentischeren Content als ein einfacher Produktpost.
          </p>
          <h3>3. Affiliate / Provision</h3>
          <p>
            Der Influencer erhält eine Provision für jeden vermittelten Kunden. Über individuelle
            Rabattcodes oder Tracking-Links messbar.
          </p>
          <h3>4. Langfristige Markenbotschafter</h3>
          <p>
            Monatliche Vereinbarung mit regelmäßigem Content. Baut über Zeit eine authentische
            Verbindung zwischen Influencer und Marke auf – stärkste SEO-Wirkung.
          </p>
          <h3>5. Gemeinsame Produkte / Co-Creation</h3>
          <p>
            Entwickeln Sie gemeinsam ein Produkt oder eine Aktion. Beispiel: Ein Café kreiert
            mit einem Food-Blogger ein „Signature-Getränk" – generiert massiv Content und Aufmerksamkeit.
          </p>
        </AutoLexikonText>
      </section>

      {/* SEO-Vorteile */}
      <section id="seo-vorteile">
        <h2>SEO-Vorteile von Influencer-Kooperationen</h2>
        <AutoLexikonText>
          <p>
            Influencer-Marketing wirkt sich über mehrere Kanäle positiv auf Ihre
            lokale Suchmaschinenoptimierung aus.
          </p>
          <h3>Direkte SEO-Effekte</h3>
          <ul>
            <li><strong>Backlinks:</strong> Blogger mit eigener Website verlinken auf Ihr Unternehmen – oft DoFollow-Links mit DA 20–50</li>
            <li><strong>Brand Mentions:</strong> Namentliche Erwähnungen in Posts und Stories – auch ohne Link ein Ranking-Signal</li>
            <li><strong>Google Business Bewertungen:</strong> Influencer hinterlassen oft hochwertige Bewertungen mit Fotos</li>
            <li><strong>Lokaler Content:</strong> Beiträge mit Geo-Tags und Standort-Erwähnungen stärken lokale Signale</li>
          </ul>
          <h3>Indirekte SEO-Effekte</h3>
          <ul>
            <li><strong>Brand Search Volume:</strong> Mehr Menschen suchen nach Ihrem Unternehmensnamen</li>
            <li><strong>Direct Traffic:</strong> Besucher kommen direkt auf Ihre Website – positives User-Signal</li>
            <li><strong>Social Signals:</strong> Shares, Likes und Kommentare erhöhen die Sichtbarkeit</li>
            <li><strong>User Generated Content:</strong> Wiederverwendbar für Ihre eigenen Kanäle und Website</li>
            <li><strong>E-E-A-T:</strong> Empfehlungen von vertrauenswürdigen Personen stärken Ihre Expertise und Vertrauenswürdigkeit</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* Outreach */}
      <section id="outreach">
        <h2>Outreach: So sprechen Sie Influencer richtig an</h2>
        <AutoLexikonText>
          <p>
            Der erste Kontakt entscheidet über Erfolg oder Misserfolg der Kooperation.
            Hier sind bewährte Strategien für lokale Unternehmen.
          </p>
          <h3>Vor dem Kontakt</h3>
          <ul>
            <li>Folgen Sie dem Influencer mindestens 2 Wochen vorher</li>
            <li>Interagieren Sie authentisch mit deren Content (Kommentare, Shares)</li>
            <li>Recherchieren Sie deren bisherige Kooperationen und Content-Stil</li>
          </ul>
          <h3>Die perfekte Erstansprache</h3>
          <ul>
            <li><strong>Personalisieren:</strong> Beziehen Sie sich auf einen konkreten Post</li>
            <li><strong>Wertschätzung:</strong> Erklären Sie, warum gerade diese Person passt</li>
            <li><strong>Konkretes Angebot:</strong> Was bieten Sie an? (kein vages „lass uns zusammenarbeiten")</li>
            <li><strong>Kein Druck:</strong> Geben Sie Zeit zum Überlegen</li>
            <li><strong>Kurz halten:</strong> Maximal 5–6 Sätze in der ersten Nachricht</li>
          </ul>
          <h3>Outreach-Template</h3>
          <p>
            <em>„Hi [Name], ich folge dir schon eine Weile und finde deinen Content über [Thema]
            super authentisch – besonders dein Post über [konkreter Post]. Ich bin [Ihr Name] von
            [Unternehmen] in [Stadt]. Wir würden dich gerne zu [konkretes Angebot] einladen und
            würden uns freuen, wenn du deine Erfahrung mit deiner Community teilst. Kein Druck –
            meld dich einfach, wenn es dich interessiert! 😊"</em>
          </p>
        </AutoLexikonText>
      </section>

      {/* Kampagne messen */}
      <section id="kampagne-messen">
        <h2>Kampagnen-Erfolg messen</h2>
        <AutoLexikonText>
          <p>
            Ohne Messung wissen Sie nicht, ob sich die Kooperation lohnt.
            Definieren Sie KPIs vor Kampagnenstart.
          </p>
          <h3>KPIs für lokale Influencer-Kampagnen</h3>
          <ul>
            <li><strong>Neue Backlinks:</strong> Prüfen Sie mit Ahrefs oder SEMrush, ob neue Links entstanden sind</li>
            <li><strong>Brand Mentions:</strong> Google Alerts für Ihren Unternehmensnamen einrichten</li>
            <li><strong>Referral Traffic:</strong> In Google Analytics nach Traffic von Influencer-Kanälen filtern</li>
            <li><strong>Rabattcode-Einlösungen:</strong> Direkter Umsatz-Nachweis durch individuelle Codes</li>
            <li><strong>Google Business Aufrufe:</strong> Steigerung bei Profilaufrufen und Wegbeschreibungen</li>
            <li><strong>Neue Follower:</strong> Wachstum Ihrer eigenen Social-Media-Kanäle</li>
            <li><strong>Bewertungen:</strong> Neue Google-Bewertungen nach der Kampagne</li>
          </ul>
          <h3>ROI berechnen</h3>
          <p>
            Vergleichen Sie die Kosten der Kooperation (Produkte, Bezahlung, Zeitaufwand) mit dem
            generierten Wert: neue Kunden × durchschnittlicher Kundenwert + SEO-Wert der Backlinks
            + Content-Wert für Wiederverwendung.
          </p>
        </AutoLexikonText>
      </section>

      {/* Branchen-Beispiele */}
      <section id="branchen-beispiele">
        <h2>Branchen-Beispiele: So funktioniert es in der Praxis</h2>
        <AutoLexikonText>
          <h3>🍕 Gastronomie</h3>
          <p>
            Ein Restaurant lädt 5 lokale Food-Blogger zum exklusiven Tasting ein. Ergebnis:
            5 Blog-Artikel mit Backlinks, 15+ Instagram-Posts mit Geo-Tag, 3 neue Google-Bewertungen
            mit Fotos. Kosten: Essen und Getränke für 5 Personen (~250 €).
          </p>
          <h3>💇 Beauty & Wellness</h3>
          <p>
            Ein Friseur bietet einem lokalen Lifestyle-Blogger ein kostenloses Styling an.
            Ergebnis: Vorher/Nachher-Content auf Instagram + Blog-Artikel „Die besten Friseure
            in [Stadt]" mit DoFollow-Link.
          </p>
          <h3>🏋️ Fitness</h3>
          <p>
            Ein Fitnessstudio vergibt 3 Monats-Mitgliedschaften an lokale Fitness-Influencer.
            Wöchentliche Gym-Content-Posts mit Location-Tag erzeugen kontinuierliche lokale Signale.
          </p>
          <h3>🛍️ Einzelhandel</h3>
          <p>
            Ein Concept Store veranstaltet einen „Influencer Shopping Day" mit Goodie Bags.
            Content wird gleichzeitig generiert und sorgt für Buzz auf mehreren Kanälen.
          </p>
          <h3>🔧 Handwerk</h3>
          <p>
            Ein Schreiner dokumentiert mit einem DIY-Blogger einen Workshop. Der ausführliche
            Blog-Artikel mit Schritt-für-Schritt-Fotos rankt langfristig für „Holzworkshop [Stadt]".
          </p>
        </AutoLexikonText>
      </section>

      {/* Fehler vermeiden */}
      <section id="fehler-vermeiden">
        <h2>Häufige Fehler bei Influencer-Kooperationen</h2>
        <AutoLexikonText>
          <ul>
            <li><strong>Nur auf Followerzahl schauen:</strong> Engagement-Rate und lokale Relevanz sind wichtiger</li>
            <li><strong>Zu strikte Vorgaben:</strong> Lassen Sie dem Influencer kreative Freiheit – authentischer Content performt besser</li>
            <li><strong>Einmalige Aktionen:</strong> Langfristige Partnerschaften wirken stärker für SEO und Marke</li>
            <li><strong>Kein Vertrag:</strong> Halten Sie Umfang, Rechte und Erwartungen schriftlich fest</li>
            <li><strong>Keine Nachverfolgung:</strong> Ohne Tracking verpassen Sie wertvolle Erkenntnisse</li>
            <li><strong>Fehlende Kennzeichnung:</strong> Werbung muss als solche gekennzeichnet werden – Pflicht in DACH</li>
            <li><strong>Falsche Plattform:</strong> Wählen Sie die Plattform basierend auf Ihrer Zielgruppe, nicht nach Trend</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Was kostet eine Influencer-Kooperation für lokale Unternehmen?</AccordionTrigger>
            <AccordionContent>
              Viele lokale Kooperationen funktionieren über Produkttausch (0 € Cashkosten). Bei
              bezahlten Kooperationen liegen Mikro-Influencer typischerweise bei 50–300 € pro Post.
              Der effektivste Ansatz ist oft eine Mischung: Produkt/Erlebnis + kleines Honorar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Bringen Influencer-Kooperationen wirklich SEO-Vorteile?</AccordionTrigger>
            <AccordionContent>
              Ja, über mehrere Wege: Blogger mit eigener Website liefern Backlinks, Social-Media-Posts
              generieren Brand Mentions und Geo-Signale, und der erhöhte Brand Search Traffic ist ein
              positives Ranking-Signal. Am stärksten wirken Kooperationen mit Bloggern, die auch
              eine Website pflegen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie finde ich Influencer in meiner Stadt?</AccordionTrigger>
            <AccordionContent>
              Suchen Sie auf Instagram nach lokalen Hashtags (#[Stadt]Food, #[Stadt]Tipps), prüfen Sie
              Location Tags Ihrer Gegend, googlen Sie „Blogger [Stadt]" und fragen Sie Ihre bestehenden
              Kunden – oft haben Sie bereits Kunden mit Reichweite, ohne es zu wissen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie oft sollte ein Influencer über mein Unternehmen posten?</AccordionTrigger>
            <AccordionContent>
              Für maximale Wirkung empfehlen wir eine langfristige Partnerschaft mit 2–4 Posts pro Monat
              über mindestens 3 Monate. Einmalige Posts haben kaum nachhaltigen SEO-Effekt. Regelmäßige
              Erwähnungen bauen echte Markenassoziation und kontinuierliche Signale auf.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Muss Influencer-Werbung gekennzeichnet werden?</AccordionTrigger>
            <AccordionContent>
              Ja, in Deutschland, Österreich und der Schweiz ist die Kennzeichnung von Werbung Pflicht.
              Nutzen Sie klare Kennzeichnungen wie „Werbung", „Anzeige" oder „bezahlte Partnerschaft".
              Auch Produkttausch gilt als Werbung und muss gekennzeichnet werden.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <LocalPartnershipOutreachTemplates
        types={["influencer", "cross-promo"]}
        title="Outreach-Vorlagen: Influencer & Cross-Promotion"
        description="Kopierfertige E-Mail-Templates fuer Mikro-Influencer-Kooperationen und lokale Cross-Promotions."
      />

      <HelpfulnessWidget articleSlug="lokale-influencer-kooperationen" />

      <SourcesSection sources={[
        { title: "HubSpot: Micro-Influencer Marketing Guide", url: "https://blog.hubspot.com/marketing/micro-influencer-marketing" },
        { title: "Moz: How Influencer Marketing Impacts SEO", url: "https://moz.com/blog/influencer-marketing-seo" },
        { title: "BrightLocal: Local Consumer Review Survey", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
      ]} />
    </ArticleLayout>
  );
};

export default LokaleInfluencerKooperationen;
