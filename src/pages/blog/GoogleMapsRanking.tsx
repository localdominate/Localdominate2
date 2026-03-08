import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import googleMapsRankingImg from "@/assets/blog/google-maps-ranking.jpg";

const GoogleMapsRanking = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-ranking-verbessern", language)!;

  const content = {
    de: {
      tocItems: [
        { id: "warum-wichtig", title: "Warum ist Google Maps wichtiger als deine Website?" },
        { id: "ranking-faktoren", title: "Welche 7 Faktoren bestimmen dein Google Maps Ranking?" },
        { id: "optimierung", title: "Wie optimierst du dein Google Maps Ranking Schritt für Schritt?" },
        { id: "fehler", title: "Welche Fehler solltest du beim Google Maps Ranking vermeiden?" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ],
      intro: {
        stat: "46% aller Google-Suchen",
        text: "haben eine lokale Absicht. Wenn dein Unternehmen nicht in den Top 3 der Google Maps Ergebnisse erscheint, verlierst du täglich potenzielle Kunden an deine Konkurrenz. In diesem Guide zeige ich dir, wie du dein Google Maps Ranking nachhaltig verbesserst."
      },
      section1: {
        title: "Warum ist Google Maps wichtiger als deine Website?",
        p1: "Die meisten Kunden entscheiden sich für ein lokales Unternehmen, bevor sie jemals dessen Website besuchen. Der Google Maps Eintrag ist oft der erste und einzige Kontaktpunkt.",
        tip: "Wusstest du?",
        tipText: "76% der Nutzer, die nach einem lokalen Unternehmen suchen, besuchen innerhalb von 24 Stunden ein Geschäft.",
        p2: "Dein Google Business Profil zeigt Öffnungszeiten, Bewertungen, Fotos und den direkten Anfahrtsweg – alles, was ein Kunde für eine schnelle Entscheidung braucht.",
        p2WithLinks: true
      },
      section2: {
        title: "Welche 7 Faktoren bestimmen dein Google Maps Ranking?",
        intro: "Google bewertet lokale Unternehmen nach drei Hauptkriterien:",
        criteria: ["Relevanz", "Entfernung", "Bekanntheit"],
        criteriaEnd: "Diese setzen sich aus verschiedenen Faktoren zusammen:",
        factors: [
          { title: "Profil-Vollständigkeit", desc: "Je mehr Informationen du bereitstellst, desto besser versteht Google dein Unternehmen." },
          { title: "Kategoriewahl", desc: "Die richtige Haupt- und Nebenkategorien bestimmen, für welche Suchanfragen du erscheinst." },
          { title: "Bewertungen", desc: "Anzahl, Durchschnitt und Aktualität deiner Google Bewertungen." },
          { title: "NAP-Konsistenz", desc: "Name, Adresse, Telefonnummer müssen überall identisch sein.", hasLink: true },
          { title: "Fotos & Medien", desc: "Regelmäßig neue, hochwertige Bilder signalisieren Aktivität." },
          { title: "Google Posts", desc: "Regelmäßige Updates zeigen, dass dein Unternehmen aktiv ist." },
          { title: "Website-Signale", desc: "Eine optimierte Website stärkt dein gesamtes lokales Profil." },
        ]
      },
      section3: {
        title: "Wie optimierst du dein Google Maps Ranking Schritt für Schritt?",
        step1: {
          title: "1. Profil vollständig ausfüllen",
          intro: "Gehe jeden Bereich deines Google Business Profils durch und fülle alle Felder aus. Besonders wichtig:",
          items: [
            "Exakte Öffnungszeiten (inkl. Feiertage)",
            "Ausführliche Unternehmensbeschreibung mit Keywords",
            "Alle angebotenen Dienstleistungen/Produkte",
            "Attribute (z.B. \"rollstuhlgerecht\", \"WLAN verfügbar\")"
          ]
        },
        step2: {
          title: "2. Kategorien strategisch wählen",
          text: "Wähle eine präzise Hauptkategorie und ergänze 2-3 relevante Nebenkategorien. Ein Restaurant könnte z.B. \"Italienisches Restaurant\" als Hauptkategorie und \"Pizzeria\" sowie \"Catering\" als Nebenkategorien wählen."
        },
        step3: {
          title: "3. Hochwertige Fotos hinzufügen",
          intro: "Unternehmen mit Fotos erhalten 42% mehr Wegbeschreibungsanfragen. Lade mindestens 10 professionelle Fotos hoch:",
          items: [
            "Außenansicht (Erkennungswert)",
            "Innenraum (Atmosphäre)",
            "Team (Vertrauen)",
            "Produkte/Dienstleistungen"
          ]
        },
        step4: {
          title: "4. Bewertungen aktiv managen",
          text: "Bitte zufriedene Kunden aktiv um Bewertungen und antworte auf alle Rezensionen – positiv wie negativ. Mehr dazu in unserem Artikel über",
          linkText: "Google Bewertungen bekommen"
        }
      },
      section4: {
        title: "Welche Fehler solltest du beim Google Maps Ranking vermeiden?",
        mistakes: [
          { title: "Keyword-Stuffing im Namen", desc: "Füge keine Keywords in deinen Unternehmensnamen ein – das verstößt gegen Googles Richtlinien." },
          { title: "Inkonsistente NAP-Daten", desc: "Unterschiedliche Adressen auf verschiedenen Plattformen verwirren Google." },
          { title: "Fake-Bewertungen kaufen", desc: "Google erkennt diese und kann dein Profil abstrafen oder löschen." },
          { title: "Vernachlässigung nach Setup", desc: "Ein Google Profil braucht regelmäßige Pflege und Updates." },
        ]
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          {
            q: "Wie lange dauert es, bis sich das Ranking verbessert?",
            a: "Erste Verbesserungen sind oft nach 2-4 Wochen sichtbar. Für signifikante Ranking-Steigerungen solltest du 2-3 Monate einplanen, da Google Zeit braucht, um Änderungen zu verarbeiten."
          },
          {
            q: "Kann ich mein Ranking in mehreren Städten verbessern?",
            a: "Ja, aber nur wenn du dort physisch präsent bist. Für jeden Standort brauchst du ein separates, verifiziertes Google Business Profil."
          },
          {
            q: "Sind bezahlte Anzeigen besser als organisches Ranking?",
            a: "Beide haben ihre Berechtigung. Organisches Ranking ist langfristig kosteneffizienter und vertrauenswürdiger. Anzeigen können für schnelle Ergebnisse sinnvoll sein."
          },
          {
            q: "Was kostet professionelle Google Maps Optimierung?",
            a: "Professionelle Optimierung beginnt bei etwa 300€ einmalig. Bei Local Dominator erhältst du ein komplettes Optimierungspaket für 299€ mit Geld-zurück-Garantie."
          }
        ]
      }
    },
    en: {
      tocItems: [
        { id: "warum-wichtig", title: "Why Google Maps Matters More Than Your Website" },
        { id: "ranking-faktoren", title: "The 7 Decisive Ranking Factors" },
        { id: "optimierung", title: "Step-by-Step Optimization" },
        { id: "fehler", title: "Common Mistakes to Avoid" },
        { id: "faq", title: "Frequently Asked Questions" },
      ],
      intro: {
        stat: "46% of all Google searches",
        text: "have local intent. If your business doesn't appear in the top 3 Google Maps results, you're losing potential customers to your competition every day. In this guide, I'll show you how to sustainably improve your Google Maps ranking."
      },
      section1: {
        title: "Why Google Maps Matters More Than Your Website",
        p1: "Most customers decide on a local business before ever visiting its website. The Google Maps listing is often the first and only point of contact.",
        tip: "Did you know?",
        tipText: "76% of users who search for a local business visit a store within 24 hours.",
        p2: "Your Google Business Profile shows opening hours, reviews, photos, and direct directions – everything a customer needs for a quick decision."
      },
      section2: {
        title: "The 7 Decisive Ranking Factors",
        intro: "Google evaluates local businesses based on three main criteria:",
        criteria: ["Relevance", "Distance", "Prominence"],
        criteriaEnd: "These are composed of various factors:",
        factors: [
          { title: "Profile Completeness", desc: "The more information you provide, the better Google understands your business." },
          { title: "Category Selection", desc: "The right primary and secondary categories determine which search queries you appear for." },
          { title: "Reviews", desc: "Number, average rating, and recency of your Google reviews." },
          { title: "NAP Consistency", desc: "Name, address, phone number must be identical everywhere." },
          { title: "Photos & Media", desc: "Regular new, high-quality images signal activity." },
          { title: "Google Posts", desc: "Regular updates show that your business is active." },
          { title: "Website Signals", desc: "An optimized website strengthens your entire local profile." },
        ]
      },
      section3: {
        title: "Step-by-Step Optimization",
        step1: {
          title: "1. Complete Your Profile Fully",
          intro: "Go through every section of your Google Business Profile and fill out all fields. Especially important:",
          items: [
            "Exact opening hours (including holidays)",
            "Detailed business description with keywords",
            "All offered services/products",
            "Attributes (e.g., \"wheelchair accessible\", \"WiFi available\")"
          ]
        },
        step2: {
          title: "2. Choose Categories Strategically",
          text: "Choose a precise primary category and add 2-3 relevant secondary categories. For example, a restaurant could choose \"Italian Restaurant\" as the primary category and \"Pizzeria\" and \"Catering\" as secondary categories."
        },
        step3: {
          title: "3. Add High-Quality Photos",
          intro: "Businesses with photos receive 42% more direction requests. Upload at least 10 professional photos:",
          items: [
            "Exterior view (recognition value)",
            "Interior (atmosphere)",
            "Team (trust)",
            "Products/Services"
          ]
        },
        step4: {
          title: "4. Actively Manage Reviews",
          text: "Actively ask satisfied customers for reviews and respond to all reviews – positive and negative. Learn more in our article about",
          linkText: "getting Google reviews"
        }
      },
      section4: {
        title: "Common Mistakes to Avoid",
        mistakes: [
          { title: "Keyword Stuffing in Name", desc: "Don't add keywords to your business name – this violates Google's guidelines." },
          { title: "Inconsistent NAP Data", desc: "Different addresses on different platforms confuse Google." },
          { title: "Buying Fake Reviews", desc: "Google detects these and can penalize or delete your profile." },
          { title: "Neglecting After Setup", desc: "A Google profile needs regular maintenance and updates." },
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How long does it take for rankings to improve?",
            a: "Initial improvements are often visible after 2-4 weeks. For significant ranking increases, plan for 2-3 months, as Google needs time to process changes."
          },
          {
            q: "Can I improve my ranking in multiple cities?",
            a: "Yes, but only if you have a physical presence there. You need a separate, verified Google Business Profile for each location."
          },
          {
            q: "Are paid ads better than organic ranking?",
            a: "Both have their place. Organic ranking is more cost-effective and trustworthy in the long run. Ads can be useful for quick results."
          },
          {
            q: "What does professional Google Maps optimization cost?",
            a: "Professional optimization starts at around €300 one-time. At Local Dominator, you get a complete optimization package for €299 with a money-back guarantee."
          }
        ]
      }
    }
  };

  const t = content[language];

  const faqItems = t.faq.items.map(item => ({
    question: item.q,
    answer: item.a
  }));

  return (
    <ArticleLayout article={article} tocItems={t.tocItems} faqItems={faqItems}>
      <TableOfContents items={t.tocItems} />

      <p className="text-xl leading-relaxed mb-4">
        <strong>{t.intro.stat}</strong> {t.intro.text}
      </p>

      <p data-featured-snippet="true" data-speakable="true">
        <strong>Google Maps Ranking verbessern</strong> bedeutet, das Google Business Profil, Bewertungen, NAP-Konsistenz und lokale Signale so zu optimieren, dass ein Unternehmen in den Top 3 des Local Packs erscheint. Google bewertet lokale Unternehmen nach drei Hauptkriterien: Nähe zum Suchenden, Relevanz der Suchanfrage und Bekanntheit (Prominence). 76 % der Nutzer, die lokal suchen, besuchen innerhalb von 24 Stunden ein Geschäft.
      </p>

      <BlogImage 
        src={googleMapsRankingImg} 
        alt={language === "de" ? "Google Maps Ranking für lokale Unternehmen" : "Google Maps ranking for local businesses"}
        caption={language === "de" ? "Sichtbarkeit auf Google Maps ist entscheidend für lokale Unternehmen" : "Visibility on Google Maps is crucial for local businesses"}
      />

      <section id="warum-wichtig" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section1.title}
        </h2>
        <p className="mb-4">{t.section1.p1}</p>
        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">{t.section1.tip}</strong>
              <p className="text-muted-foreground mt-1">{t.section1.tipText}</p>
            </div>
          </div>
        </div>
        <p>
          Dein <LexikonLink term="Google Business Profile" /> zeigt Öffnungszeiten, <LexikonLink term="Reviews (Bewertungen)">Bewertungen</LexikonLink>, Fotos und den direkten Anfahrtsweg – alles, was ein Kunde für eine schnelle Entscheidung braucht.
        </p>
      </section>

      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section2.title}
        </h2>
        <p className="mb-6">
          {t.section2.intro} <strong>{t.section2.criteria[0]}</strong>, <strong>{t.section2.criteria[1]}</strong> {language === "de" ? "und" : "and"} <strong>{t.section2.criteria[2]}</strong>. {t.section2.criteriaEnd}
        </p>
        <div className="space-y-4">
          {t.section2.factors.map((factor, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{factor.title}:</strong>
                <span className="text-muted-foreground ml-1">
                  {factor.title === "NAP-Konsistenz" ? (
                    <><LexikonLink term="NAP">Name, Adresse, Telefonnummer</LexikonLink> müssen überall identisch sein.</>
                  ) : factor.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      <section id="optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section3.title}
        </h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.step1.title}</h3>
        <p className="mb-4">{t.section3.step1.intro}</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {t.section3.step1.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.step2.title}</h3>
        <p className="mb-4">{t.section3.step2.text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.step3.title}</h3>
        <p className="mb-4">{t.section3.step3.intro}</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {t.section3.step3.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.step4.title}</h3>
        <p>
          {t.section3.step4.text} <Link to="/blog/google-bewertungen-bekommen" className="text-primary hover:underline">{t.section3.step4.linkText}</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section4.title}
        </h2>
        <div className="space-y-4">
          {t.section4.mistakes.map((mistake, index) => (
            <div key={index} className="flex items-start gap-3 bg-destructive/5 p-4 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">{mistake.title}:</strong>
                <span className="text-muted-foreground ml-1">{mistake.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t.faq.title}
        </h2>
        <div className="space-y-6">
          {t.faq.items.map((item, index) => (
            <div key={index} className={index < t.faq.items.length - 1 ? "border-b border-border pb-4" : ""}>
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <HelpfulnessWidget articleSlug="google-maps-ranking-verbessern" />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default GoogleMapsRanking;
