import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageSquareQuote, Database, ShieldCheck, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ChatgptZitiertLokaleUnternehmen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("chatgpt-zitiert-lokale-unternehmen", language);
  if (!article) return null;

  const tocItems = [
    { id: "wie-chatgpt-funktioniert", title: "Wie ChatGPT lokale Quellen wählt" },
    { id: "signale", title: "Die 5 Schlüsselsignale" },
    { id: "schritte", title: "Schritte zur Zitierfähigkeit" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Liest ChatGPT meine Website wirklich?", answer: "Ja — wenn deine Seite nicht via robots.txt oder ai.txt blockiert ist. ChatGPT Search nutzt einen eigenen Crawler (OAI-SearchBot) plus Bing-Index." },
    { question: "Wie schnell wird ChatGPT mich zitieren?", answer: "Nach Indexierung in der Regel innerhalb von 2–6 Wochen — vorausgesetzt, deine Seite ist strukturell sauber, hat Schema-Markup und etablierte Citations." },
    { question: "Kann ich sehen, ob ich zitiert werde?", answer: "Direkt nein, aber indirekt: Referrer-Traffic von chatgpt.com in Analytics, plus regelmäßige Test-Prompts in ChatGPT mit deinen Zielkeywords." },
    { question: "Brauche ich ein eigenes Konto bei OpenAI?", answer: "Nein. Die Optimierung ist rein technisch (Crawl-Zugriff, Schema, Content) und unabhängig von OpenAI-Konten." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        ChatGPT empfiehlt täglich Millionen lokaler Unternehmen — Restaurants, Ärzte, Handwerker, Anwälte. Wer diese Empfehlungen bekommt, ist kein Zufall. Hier erfährst du, welche Signale das Modell auswertet und wie du in seinen Antworten landest.
      </p>

      <KeyTakeawaysBox items={[
        "ChatGPT zieht lokale Empfehlungen aus Bing-Index + Live-Web-Suche",
        "Verifizierte Bewertungen und konsistente NAP-Daten sind Pflicht",
        "Schema-Markup (LocalBusiness + Service) erhöht die Zitierfähigkeit drastisch",
        "Zitate aus Branchenportalen erzeugen Trust-Signale",
        "AnswerBlocks im eigenen Content erleichtern direkte Zitate"
      ]} />

      <section id="wie-chatgpt-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><MessageSquareQuote className="w-7 h-7 text-primary" />Wie ChatGPT lokale Quellen wählt</h2>
        <AnswerBlock question="Wie wählt ChatGPT lokale Unternehmen für seine Empfehlungen aus?">
          ChatGPT kombiniert den Bing-Suchindex mit eigener Live-Web-Suche. Für lokale Empfehlungen priorisiert das Modell Quellen mit konsistenten NAP-Daten, LocalBusiness-Schema, mindestens 30 verifizierten Bewertungen und Erwähnungen auf etablierten Verzeichnissen wie Google Business, Yelp oder branchenspezifischen Portalen. Inhalte mit klaren Antwortblöcken werden bevorzugt zitiert.
        </AnswerBlock>
      </section>

      <section id="signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 5 Schlüsselsignale</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>NAP-Konsistenz:</strong> Name, Adresse, Telefonnummer identisch über alle Verzeichnisse</li>
          <li><strong>Bewertungs-Velocity:</strong> regelmäßiger Strom echter Bewertungen mit Antworten</li>
          <li><strong>Schema-Markup:</strong> LocalBusiness + Service + FAQPage in JSON-LD</li>
          <li><strong>Entity-Klarheit:</strong> eindeutige Beschreibung „wer du bist, wofür, wo"</li>
          <li><strong>External Citations:</strong> Erwähnungen in Branchenmedien und Verzeichnissen</li>
        </ol>
      </section>

      <section id="schritte" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="w-7 h-7 text-primary" />Schritte zur Zitierfähigkeit</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Crawler-Zugriff für GPTBot und OAI-SearchBot in robots.txt erlauben</li>
          <li>llms.txt + ai.txt im Root hinterlegen</li>
          <li>AnswerBlocks (40–60 Wörter) am Anfang jedes Abschnitts</li>
          <li>Schema-Markup vollständig implementieren</li>
          <li>Citation-Profil über Bing Places & Branchenportale stärken</li>
        </ol>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufige Fehler</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>GPTBot via robots.txt blockiert (oft Standardwert)</li>
          <li>Inkonsistente NAP-Daten zwischen Website, Google Business und Bing</li>
          <li>Kein Schema-Markup oder veraltetes Format</li>
          <li>Keine echten Antwortblöcke — nur Marketing-Slogans</li>
        </ul>
        <p className="mt-6">Mit unserem <Link to="/ai-visibility-audit" className="text-primary underline">AI-Sichtbarkeits-Audit</Link> findest du heraus, welche Signale dir aktuell fehlen.</p>
      </section>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default ChatgptZitiertLokaleUnternehmen;