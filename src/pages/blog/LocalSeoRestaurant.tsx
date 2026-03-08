import ArticleLayout from "@/components/blog/ArticleLayout";
import MiniSuccessStory from "@/components/blog/MiniSuccessStory";
import { miniSuccessStories } from "@/data/miniSuccessStories";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import ReviewAcquisitionScripts from "@/components/blog/ReviewAcquisitionScripts";
import ReviewEmailTemplates from "@/components/blog/ReviewEmailTemplates";
import SmsReviewTemplates from "@/components/blog/SmsReviewTemplates";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
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
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { UtensilsCrossed, Camera, Clock, MapPin, Star, Lightbulb } from "lucide-react";
import localSeoRestaurantImg from "@/assets/blog/local-seo-restaurant.jpg";

const LocalSeoRestaurant = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-fuer-restaurants", language)!;

  const content = {
    de: {
      tocItems: [
        { id: "ranking-faktoren", title: "Restaurant-spezifische Ranking-Faktoren" },
        { id: "speisekarte", title: "Speisekarte optimieren" },
        { id: "bilder", title: "Bilder-Strategie für Gastro" },
        { id: "reservierungen", title: "Reservierungen über Google" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ],
      intro: {
        keyword: "\"Restaurant in der Nähe\"",
        text: "ist eine der häufigsten Suchanfragen auf Google. Wenn hungrige Kunden in deiner Stadt suchen, sollte dein Restaurant ganz oben erscheinen. Dieser Guide zeigt dir, wie du mit Local SEO mehr Gäste gewinnst."
      },
      section1: {
        title: "Restaurant-spezifische Ranking-Faktoren",
        text: "Für Restaurants gelten besondere Regeln. Google bewertet zusätzlich zu den Standard-Faktoren auch gastronomie-spezifische Signale.",
        factors: [
          { title: "Küchen-Kategorie", desc: "Die richtige Kategorie (Italienisch, Asiatisch, etc.) ist entscheidend für Suchanfragen." },
          { title: "Aktuelle Öffnungszeiten", desc: "Besonders wichtig: Mittagspause, Ruhetage, Feiertage müssen stimmen." },
          { title: "Speisen-Fotos", desc: "Appetitliche Bilder deiner Gerichte sind der #1 Entscheidungsfaktor." },
          { title: "Bewertungen", desc: "Anzahl und Qualität der Reviews sind bei Restaurants besonders wichtig." },
        ]
      },
      section2: {
        title: "Speisekarte optimieren",
        text: "Deine Speisekarte ist eine SEO-Goldmine. Richtig optimiert, bringt sie dir Traffic für hunderte von Keywords.",
        sub1: "Keywords in Gerichtnamen",
        sub1Text: "Statt \"Spezial Nr. 12\" schreibe \"Hausgemachte Lasagne mit frischem Basilikum\". So wirst du für \"Lasagne [Stadt]\" gefunden.",
        sub2: "Beschreibungen hinzufügen",
        sub2Text: "Jedes Gericht sollte eine kurze, appetitliche Beschreibung haben. Erwähne Zutaten, Zubereitungsart und besondere Merkmale (bio, vegan, regional).",
        tip: "Lade deine komplette Speisekarte als PDF auf deine Website UND als Bilder in dein Google Business Profil. So indexiert Google alle Gerichte.",
        sub3: "Preise angeben",
        sub3Text: "Transparente Preise bauen Vertrauen auf. Google zeigt Preise auch in den Suchergebnissen an, was die Klickrate erhöht."
      },
      section3: {
        title: "Bilder-Strategie für Gastro",
        text: "Bei Restaurants sind Bilder oft entscheidender als Text. Ein appetitliches Foto kann den Unterschied zwischen \"Vorbeigehen\" und \"Reingehen\" machen.",
        steps: [
          { title: "Speisen fotografieren:", text: "Mindestens 10-15 deiner besten Gerichte in professioneller Qualität. Tageslicht, sauberer Hintergrund, appetitliche Anrichtung." },
          { title: "Ambiente zeigen:", text: "Innenraum, Terrasse, Bar-Bereich. Gäste wollen wissen, was sie erwartet." },
          { title: "Team vorstellen:", text: "Fotos vom Koch, Service-Team oder Inhaber schaffen persönliche Verbindung." },
          { title: "Regelmäßig aktualisieren:", text: "Füge monatlich neue Bilder hinzu. Saisonale Gerichte, Events, neue Einrichtung." },
        ],
        techTitle: "Technische Tipps für Bilder:",
        techTips: [
          "Auflösung mindestens 720x720 Pixel",
          "JPEG-Format für beste Komprimierung",
          "Dateinamen mit Keywords (pizza-margherita-restaurant-name.jpg)",
          "Keine Wasserzeichen oder Text-Overlays"
        ]
      },
      section4: {
        title: "Reservierungen über Google",
        text: "Google bietet die Möglichkeit, Reservierungen direkt aus den Suchergebnissen anzunehmen. Das reduziert Hürden und bringt mehr Gäste.",
        sub1: "Reservierungslink einrichten",
        sub1Text: "In deinem Google Business Profil kannst du einen Reservierungslink hinterlegen. Nutze dein eigenes Buchungssystem oder Partner wie OpenTable, Resy oder TheFork.",
        sub2: "Reservierungsbutton aktivieren",
        sub2Text: "Der \"Tisch reservieren\" Button erscheint prominent in deinem Profil. Je einfacher die Buchung, desto mehr Reservierungen.",
        walkIn: "Wichtig für Laufkundschaft:",
        walkInText: "Aktiviere auch \"Für Laufkundschaft geöffnet\" in den Attributen. So wissen Gäste, dass sie auch ohne Reservierung willkommen sind."
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Wie wichtig ist eine eigene Website für Restaurants?", a: "Sehr wichtig! Sie stärkt dein Google Ranking und bietet Platz für detaillierte Informationen, die nicht ins Google Profil passen (volle Speisekarte, Geschichte, Events)." },
          { q: "Sollte ich auf Lieferdienste wie Lieferando setzen?", a: "Sie können Traffic bringen, aber die Provisionen sind hoch. Optimiere lieber dein Google Profil für eigene Bestellungen und Reservierungen." },
          { q: "Wie gehe ich mit unfairen Bewertungen um?", a: "Antworte sachlich und professionell. Biete eine Lösung an. Potenzielle Gäste sehen, wie du mit Kritik umgehst – das kann sogar vertrauensbildend wirken." },
          { q: "Lohnt sich Local SEO auch für kleine Restaurants?", a: "Gerade für kleine Restaurants! Große Ketten haben zwar Budget für Werbung, aber lokale Suchergebnisse bevorzugen authentische, gut optimierte lokale Betriebe." },
        ]
      }
    },
    en: {
      tocItems: [
        { id: "ranking-faktoren", title: "Restaurant-Specific Ranking Factors" },
        { id: "speisekarte", title: "Optimizing Your Menu" },
        { id: "bilder", title: "Image Strategy for Gastronomy" },
        { id: "reservierungen", title: "Reservations via Google" },
        { id: "faq", title: "Frequently Asked Questions" },
      ],
      intro: {
        keyword: "\"Restaurant near me\"",
        text: "is one of the most common search queries on Google. When hungry customers search in your city, your restaurant should appear at the top. This guide shows you how to win more guests with Local SEO."
      },
      section1: {
        title: "Restaurant-Specific Ranking Factors",
        text: "Special rules apply to restaurants. In addition to standard factors, Google also evaluates gastronomy-specific signals.",
        factors: [
          { title: "Cuisine Category", desc: "The right category (Italian, Asian, etc.) is crucial for search queries." },
          { title: "Current Opening Hours", desc: "Especially important: lunch breaks, closing days, holidays must be accurate." },
          { title: "Food Photos", desc: "Appetizing pictures of your dishes are the #1 decision factor." },
          { title: "Reviews", desc: "The number and quality of reviews are particularly important for restaurants." },
        ]
      },
      section2: {
        title: "Optimizing Your Menu",
        text: "Your menu is an SEO goldmine. Properly optimized, it can bring you traffic for hundreds of keywords.",
        sub1: "Keywords in Dish Names",
        sub1Text: "Instead of \"Special No. 12\" write \"Homemade Lasagna with Fresh Basil\". This way you'll be found for \"Lasagna [City]\".",
        sub2: "Add Descriptions",
        sub2Text: "Every dish should have a short, appetizing description. Mention ingredients, preparation method, and special features (organic, vegan, local).",
        tip: "Upload your complete menu as a PDF on your website AND as images in your Google Business Profile. This way Google indexes all dishes.",
        sub3: "Include Prices",
        sub3Text: "Transparent prices build trust. Google also shows prices in search results, which increases click-through rate."
      },
      section3: {
        title: "Image Strategy for Gastronomy",
        text: "For restaurants, images are often more decisive than text. An appetizing photo can make the difference between \"walking by\" and \"walking in\".",
        steps: [
          { title: "Photograph dishes:", text: "At least 10-15 of your best dishes in professional quality. Daylight, clean background, appetizing presentation." },
          { title: "Show ambiance:", text: "Interior, terrace, bar area. Guests want to know what to expect." },
          { title: "Introduce your team:", text: "Photos of the chef, service team, or owner create personal connection." },
          { title: "Update regularly:", text: "Add new photos monthly. Seasonal dishes, events, new decor." },
        ],
        techTitle: "Technical Tips for Images:",
        techTips: [
          "Resolution at least 720x720 pixels",
          "JPEG format for best compression",
          "File names with keywords (pizza-margherita-restaurant-name.jpg)",
          "No watermarks or text overlays"
        ]
      },
      section4: {
        title: "Reservations via Google",
        text: "Google offers the ability to accept reservations directly from search results. This reduces barriers and brings more guests.",
        sub1: "Set Up Reservation Link",
        sub1Text: "In your Google Business Profile, you can add a reservation link. Use your own booking system or partners like OpenTable, Resy, or TheFork.",
        sub2: "Activate Reservation Button",
        sub2Text: "The \"Reserve a table\" button appears prominently in your profile. The easier the booking, the more reservations.",
        walkIn: "Important for Walk-in Customers:",
        walkInText: "Also activate \"Open for walk-in customers\" in the attributes. This lets guests know they're welcome even without a reservation."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "How important is a website for restaurants?", a: "Very important! It strengthens your Google ranking and provides space for detailed information that doesn't fit in the Google profile (full menu, history, events)." },
          { q: "Should I rely on delivery services like DoorDash?", a: "They can bring traffic, but commissions are high. Better optimize your Google profile for your own orders and reservations." },
          { q: "How do I handle unfair reviews?", a: "Respond objectively and professionally. Offer a solution. Potential guests see how you handle criticism – this can even build trust." },
          { q: "Is Local SEO worth it for small restaurants?", a: "Especially for small restaurants! Large chains have advertising budgets, but local search results favor authentic, well-optimized local businesses." },
        ]
      }
    }
  };

  const t = content[language];
  const factorIcons = [UtensilsCrossed, Clock, Camera, Star];
  const faqItems = t.faq.items.map(item => ({ question: item.q, answer: item.a }));

  return (
    <ArticleLayout article={article} tocItems={t.tocItems} faqItems={faqItems}>
      <TableOfContents items={t.tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>{t.intro.keyword}</strong> {t.intro.text} Mit dem richtigen <LexikonLink term="Google Business Profile" /> und 
        einer Strategie für <LexikonLink term="Reviews (Bewertungen)">Bewertungen</LexikonLink> erreichst du das <LexikonLink term="Local Pack" />.
      </p>

      <BlogImage 
        src={localSeoRestaurantImg} 
        alt={language === "de" ? "Restaurant Food-Fotografie für Google" : "Restaurant food photography for Google"}
        caption={language === "de" ? "Appetitliche Fotos sind entscheidend für den Erfolg auf Google" : "Appetizing photos are crucial for success on Google"}
      />

      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section1.title}</h2>
        <p className="mb-4">{t.section1.text}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {t.section1.factors.map((item, index) => {
            const Icon = factorIcons[index];
            return (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">{item.title}</strong>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="speisekarte" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section2.title}</h2>
        <p className="mb-4">{t.section2.text}</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section2.sub1}</h3>
        <p className="mb-4">{t.section2.sub1Text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section2.sub2}</h3>
        <p className="mb-4">{t.section2.sub2Text}</p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">{language === 'de' ? 'Profi-Tipp:' : 'Pro Tip:'}</strong>
              <p className="text-muted-foreground mt-1">
                {t.section2.tip} Das verbessert auch dein <LexikonLink term="Schema Markup" /> für <LexikonLink term="Rich Snippets" />.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section2.sub3}</h3>
        <p>{t.section2.sub3Text}</p>
      </section>

      {miniSuccessStories.restaurant?.map((story, i) => (
        <MiniSuccessStory key={i} story={story} />
      ))}

      <BlogCTAABTest articleSlug="local-seo-fuer-restaurants" position="middle" />

      <section id="bilder" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section3.title}</h2>
        <p className="mb-4">{t.section3.text} Vergiss nicht den <LexikonLink term="Alt-Text" /> für bessere <LexikonLink term="Indexierung" />.</p>

        <div className="space-y-4">
          {t.section3.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary font-bold text-sm">{index + 1}</span>
              </div>
              <div>
                <strong className="text-foreground">{step.title}</strong>
                <span className="text-muted-foreground ml-1">{step.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 mt-6">
          <h3 className="font-semibold text-foreground mb-3">{t.section3.techTitle}</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {t.section3.techTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="reservierungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section4.title}</h2>
        <p className="mb-4">{t.section4.text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section4.sub1}</h3>
        <p className="mb-4">{t.section4.sub1Text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section4.sub2}</h3>
        <p className="mb-4">{t.section4.sub2Text}</p>

        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-foreground">{t.section4.walkIn}</strong>
            <p className="text-muted-foreground mt-1">{t.section4.walkInText}</p>
          </div>
        </div>
      </section>

      {industryStats.restaurant?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.restaurant} />

      <IndustryBenchmarkTable data={industryBenchmarkData.restaurant} />

      <IndustryComparisonTable data={industryComparisonData.restaurant} />

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t.faq.title}</h2>
        <div className="space-y-6">
          {t.faq.items.map((item, index) => (
            <div key={index} className={index < t.faq.items.length - 1 ? "border-b border-border pb-4" : ""}>
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Praxisbeispiel: Restaurant steigert Auslastung durch Google</h2>
        {industryCaseStudies.restaurant.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <ReviewAcquisitionScripts
        industries={["restaurant"]}
        title="Bewertungs-Scripts fuer Restaurants"
        description="Kopierfertige Texte fuer die Gastronomie: Vor Ort, per E-Mail und SMS."
      />

      <ReviewEmailTemplates
        industries={["restaurant"]}
        title="E-Mail-Vorlagen fuer Restaurant-Bewertungen"
        description="Professionelle E-Mail-Templates speziell fuer die Gastronomie – nach dem Besuch oder als Follow-up."
      />

      <SmsReviewTemplates
        industries={["restaurant"]}
        title="SMS-Vorlagen fuer Restaurant-Bewertungen"
        description="Kurze SMS-Templates fuer die Gastronomie – direkt nach dem Besuch oder als Erinnerung."
      />

      <HelpfulnessWidget articleSlug="local-seo-fuer-restaurants" />

      <BlogCTAABTest articleSlug="local-seo-fuer-restaurants" position="end" />
    </ArticleLayout>
  );
};

export default LocalSeoRestaurant;
