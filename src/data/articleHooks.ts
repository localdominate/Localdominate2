/**
 * Centralized article intro hooks with strong opening lines and clear value propositions.
 * Each hook has a DE and EN version. Rendered automatically by ArticleLayout via ArticleHook component.
 */

export interface ArticleHookData {
  de: string;
  en: string;
}

export const articleHooks: Record<string, ArticleHookData> = {
  // === PILLAR PAGES ===
  "ultimate-guide-local-seo": {
    de: "46 % aller Google-Suchen haben eine lokale Absicht — doch die meisten Unternehmen verschenken dieses Potenzial. Dieser Guide zeigt dir in 10 Schritten, wie du vom unsichtbaren Eintrag zum dominierenden Local-Pack-Ergebnis wirst.",
    en: "46% of all Google searches have local intent — yet most businesses waste this potential. This guide shows you in 10 steps how to go from invisible listing to dominant Local Pack result."
  },
  "kostenloses-seo-guide": {
    de: "Du denkst, SEO kostet Tausende? Falsch. Mit den richtigen Gratis-Tools und dieser Anleitung erreichst du 80 % der Ergebnisse — ohne einen Cent auszugeben. Hier sind 50+ Strategien, die sofort wirken.",
    en: "Think SEO costs thousands? Wrong. With the right free tools and this guide, you'll achieve 80% of results — without spending a cent. Here are 50+ strategies that work immediately."
  },
  "local-seo-strategie-kleine-unternehmen": {
    de: "Große Ketten haben Marketing-Teams. Du hast diesen Guide. Der 90-Tage-Aktionsplan macht dein KMU in jeder lokalen Suche sichtbar — kostenlos umsetzbar, ohne Agentur.",
    en: "Big chains have marketing teams. You have this guide. The 90-day action plan makes your SMB visible in every local search — free to implement, no agency needed."
  },
  "local-seo-ranking-faktoren-erklaert": {
    de: "Google nutzt über 200 Ranking-Signale — aber nur 6 Kategorien entscheiden über deine lokale Sichtbarkeit. Hier erfährst du die exakte Gewichtung und welche Faktoren den größten Hebel haben.",
    en: "Google uses over 200 ranking signals — but only 6 categories decide your local visibility. Here you'll learn the exact weighting and which factors have the biggest impact."
  },
  "ai-suche-lokale-unternehmen": {
    de: "ChatGPT, Perplexity und Google AI Overviews empfehlen bereits lokale Unternehmen — aber nach anderen Regeln als die klassische Suche. Wer jetzt nicht optimiert, wird in der AI-Ära unsichtbar.",
    en: "ChatGPT, Perplexity and Google AI Overviews already recommend local businesses — but by different rules than traditional search. Those who don't optimize now will become invisible in the AI era."
  },
  "local-link-building-blueprint": {
    de: "Links von der IHK, dem lokalen Sportverein oder der Tageszeitung — sie alle boosten dein Ranking. Dieser Blueprint zeigt dir 15+ erprobte Strategien mit Copy-Paste Outreach-Templates.",
    en: "Links from the chamber of commerce, local sports clubs or newspapers — they all boost your ranking. This blueprint shows you 15+ proven strategies with copy-paste outreach templates."
  },
  "local-seo-checkliste-komplett": {
    de: "80+ Maßnahmen, 8 Phasen, 1 Ziel: Local Pack Platz 1. Diese Implementierungs-Checkliste ist dein Fahrplan von der ersten Google-Business-Optimierung bis zum monatlichen Reporting.",
    en: "80+ actions, 8 phases, 1 goal: Local Pack position 1. This implementation checklist is your roadmap from the first Google Business optimization to monthly reporting."
  },
  "technisches-local-seo-guide": {
    de: "Schema Markup, Core Web Vitals, Mobile-First — technisches SEO klingt komplex, ist aber der unterschätzte Hebel für lokale Rankings. Diese 40-Punkte-Checkliste macht es umsetzbar.",
    en: "Schema Markup, Core Web Vitals, Mobile-First — technical SEO sounds complex, but it's the underrated lever for local rankings. This 40-point checklist makes it actionable."
  },

  // === KEYWORDS & STRATEGIE ===
  "local-seo-keywords-finden": {
    de: "Das falsche Keyword kostet dich Monate. Das richtige bringt dir täglich Kunden. Lerne, wie du die Keywords findest, die wirklich Umsatz bringen — nicht nur Traffic.",
    en: "The wrong keyword costs you months. The right one brings customers daily. Learn how to find keywords that actually generate revenue — not just traffic."
  },
  "google-maps-ranking-verbessern": {
    de: "Platz 4 bei Google Maps? Unsichtbar. Nur die Top 3 zählen — und mit diesem 7-Schritte-Plan erreichst du sie in 30 Tagen.",
    en: "Position 4 on Google Maps? Invisible. Only the top 3 matter — and with this 7-step plan you'll reach them in 30 days."
  },
  "google-bewertungen-bekommen": {
    de: "Ein Unternehmen mit 47 Bewertungen bekommt 4x mehr Klicks als eines mit 5. Diese 7 Strategien bringen dir ethisch und systematisch mehr echte Rezensionen.",
    en: "A business with 47 reviews gets 4x more clicks than one with 5. These 7 strategies bring you more genuine reviews — ethically and systematically."
  },
  "google-my-business-optimieren": {
    de: "Dein Google Business Profil ist dein digitales Schaufenster — und 56 % aller Unternehmen nutzen es falsch. In 10 Schritten machst du es zum Kundenmagneten.",
    en: "Your Google Business Profile is your digital storefront — and 56% of all businesses use it wrong. In 10 steps you'll turn it into a customer magnet."
  },
  "lokale-suchmaschinenoptimierung-2026": {
    de: "AI Overviews, Voice Search, Zero-Click — die lokale Suche 2026 folgt neuen Regeln. Wer die alten Strategien weiterfährt, verliert. Hier sind die Trends, die jetzt zählen.",
    en: "AI Overviews, Voice Search, Zero-Click — local search in 2026 follows new rules. Those who stick with old strategies lose. Here are the trends that matter now."
  },
  "nap-konsistenz-local-seo": {
    de: "Eine falsche Telefonnummer auf einer vergessenen Verzeichnisseite kann dein gesamtes Ranking zerstören. NAP-Konsistenz ist die Grundlage — und hier lernst du, sie zu sichern.",
    en: "One wrong phone number on a forgotten directory page can destroy your entire ranking. NAP consistency is the foundation — and here you'll learn how to secure it."
  },
  "local-seo-audit-checkliste": {
    de: "Du weißt nicht, warum du nicht rankst? Diese 50+ Diagnose-Punkte mit Scoring-System decken jede Schwachstelle auf — von GBP über Website bis Citations.",
    en: "Don't know why you're not ranking? These 50+ diagnostic points with scoring system uncover every weakness — from GBP to website to citations."
  },
  "local-seo-fehler": {
    de: "Du investierst Zeit in SEO, aber die Kunden bleiben aus? Einer dieser 15 Fehler ist fast sicher schuld. Das interaktive Diagnose-Quiz verrät dir welcher.",
    en: "You invest time in SEO but customers stay away? One of these 15 mistakes is almost certainly the cause. The interactive diagnosis quiz reveals which one."
  },

  // === BRANCHEN-GUIDES ===
  "local-seo-fuer-restaurants": {
    de: "'Restaurant in der Nähe' wird 5 Millionen Mal pro Monat gesucht. Wenn dein Restaurant nicht in den Top 3 erscheint, reserviert der Gast bei der Konkurrenz. So änderst du das.",
    en: "'Restaurant near me' is searched 5 million times per month. If your restaurant doesn't appear in the top 3, the guest books at the competition. Here's how to change that."
  },
  "local-seo-handwerker": {
    de: "Wenn das Rohr platzt, googelt niemand auf Seite 2. Handwerker, die lokal nicht sichtbar sind, verlieren täglich Aufträge an die Konkurrenz. Dieser Guide macht Schluss damit.",
    en: "When the pipe bursts, nobody looks at page 2. Contractors who aren't locally visible lose jobs daily to the competition. This guide puts an end to that."
  },
  "local-seo-aerzte-praxen": {
    de: "77 % der Patienten suchen ihren nächsten Arzt bei Google — nicht mehr im Telefonbuch. Wenn deine Praxis dort nicht auftaucht, existierst du für neue Patienten nicht.",
    en: "77% of patients search for their next doctor on Google — not in the phone book anymore. If your practice doesn't appear there, you don't exist for new patients."
  },
  "local-seo-anwaelte-kanzleien": {
    de: "Mandanten mit akutem Rechtsproblem suchen 'Anwalt + Stadt' — und rufen die erste Kanzlei an, die sie finden. Bist du das? Dieser Guide sorgt dafür.",
    en: "Clients with urgent legal issues search 'lawyer + city' — and call the first firm they find. Is that you? This guide makes sure it is."
  },
  "local-seo-hotels": {
    de: "Booking.com nimmt bis zu 25 % Provision. Jede Direktbuchung über Google ist purer Gewinn. Dieser Guide zeigt, wie du den Kampf gegen die Portale gewinnst.",
    en: "Booking.com takes up to 25% commission. Every direct booking through Google is pure profit. This guide shows you how to win the battle against the portals."
  },
  "local-seo-fitness": {
    de: "Im Januar suchen 3x mehr Menschen nach 'Fitnessstudio in der Nähe'. Wer dann nicht sichtbar ist, verpasst die wichtigsten Mitglieder-Monate des Jahres.",
    en: "In January, 3x more people search for 'gym near me'. If you're not visible then, you miss the most important membership months of the year."
  },
  "local-seo-doener-kebab-imbiss": {
    de: "Deutschland hat über 18.000 Döner-Läden — aber nur die Top 3 bei Google Maps bekommen die hungrigen Kunden. Von Keywords bis Lieferportal: So wirst du die Nr. 1 im Viertel.",
    en: "Germany has over 18,000 döner shops — but only the top 3 on Google Maps get the hungry customers. From keywords to delivery portals: How to become #1 in your neighborhood."
  },
  "local-seo-friseursalon-beauty": {
    de: "'Friseur in der Nähe' — diese vier Worte entscheiden über volle oder leere Stühle. Hier ist der kompletteste SEO-Guide für Salons, den es im deutschsprachigen Raum gibt.",
    en: "'Hairdresser near me' — these four words decide whether your chairs are full or empty. Here's the most complete SEO guide for salons in the German-speaking market."
  },
  "local-seo-immobilienmakler": {
    de: "Immobilienkäufer starten ihre Suche online — und der Makler, den sie zuerst finden, bekommt den Auftrag. So werden Sie zur ersten Adresse in Ihrer Region.",
    en: "Property buyers start their search online — and the agent they find first gets the job. Here's how to become the go-to address in your region."
  },
  "local-seo-steuerberater": {
    de: "Wenn 'Steuerberater + Stadt' gesucht wird, entscheiden Sekunden. Der Mandant ruft die erste Kanzlei an, die er findet. Dieser Guide bringt Sie dorthin.",
    en: "When 'tax consultant + city' is searched, seconds decide. The client calls the first practice they find. This guide gets you there."
  },
  "local-seo-autowerkstatt": {
    de: "Bei Autoproblemen zählt Geschwindigkeit — sowohl für den Kunden als auch für Google. Die Werkstatt, die zuerst gefunden wird, bekommt den Auftrag.",
    en: "With car problems, speed counts — both for the customer and for Google. The workshop found first gets the job."
  },
  "local-seo-tierarzt": {
    de: "Wenn das Haustier krank ist, suchen Besitzer panisch nach 'Tierarzt in der Nähe'. Wer dann nicht sofort erscheint, verliert diese Patienten für immer an die Konkurrenz.",
    en: "When a pet is sick, owners frantically search for 'vet near me'. If you don't appear immediately, you lose those patients to the competition forever."
  },
  "local-seo-yoga-studios": {
    de: "Yoga-Schüler sind loyal — wenn sie dich einmal gefunden haben. Das Problem: 73 % suchen ihren ersten Kurs bei Google. Bist du sichtbar, wenn sie suchen?",
    en: "Yoga students are loyal — once they've found you. The problem: 73% search for their first class on Google. Are you visible when they search?"
  },
  "local-seo-tattoo-studios": {
    de: "Ein Tattoo ist eine Vertrauensentscheidung. Kunden verbringen Stunden mit der Online-Recherche — und buchen beim Studio, das professionell und sichtbar auftritt.",
    en: "A tattoo is a trust decision. Customers spend hours researching online — and book with the studio that appears professional and visible."
  },
  "local-seo-apotheken": {
    de: "Apotheken konkurrieren nicht nur mit anderen Apotheken, sondern mit Online-Versandhändlern. Lokale Sichtbarkeit ist der entscheidende Vorteil — und dieser Guide zeigt wie.",
    en: "Pharmacies compete not just with other pharmacies, but with online retailers. Local visibility is the decisive advantage — and this guide shows how."
  },
  "local-seo-zahnarzt": {
    de: "85 % der Patienten lesen Google-Bewertungen, bevor sie einen Zahnarzt wählen. Wer weniger als 4,5 Sterne hat, wird übergangen. Dieser Guide ändert das.",
    en: "85% of patients read Google reviews before choosing a dentist. Those with less than 4.5 stars get passed over. This guide changes that."
  },
  "local-seo-physiotherapie": {
    de: "Physiotherapeuten leben von Empfehlungen — aber die moderne Empfehlung ist ein 5-Sterne-Eintrag bei Google. So baust du dir eine digitale Überweisungskette auf.",
    en: "Physical therapists live from referrals — but the modern referral is a 5-star Google listing. Here's how to build a digital referral chain."
  },
  "local-seo-optiker": {
    de: "Der Brillenkauf beginnt online — auch wenn er im Laden endet. Optiker, die bei 'Optiker in der Nähe' nicht erscheinen, verschenken ihre wertvollsten Neukunden.",
    en: "Glasses shopping starts online — even if it ends in the store. Opticians who don't appear for 'optician near me' waste their most valuable new customers."
  },
  "local-seo-elektrotechnik": {
    de: "Wenn der Strom ausfällt, googelt der Kunde 'Elektriker Notdienst'. Wer dann nicht auf Position 1 steht, bekommt weder den Notfall noch den Folgeauftrag.",
    en: "When the power goes out, the customer googles 'electrician emergency'. If you're not in position 1 then, you get neither the emergency call nor the follow-up contract."
  },
  "local-seo-fotograf": {
    de: "Fotografen verkaufen Emotionen — aber gefunden werden sie über Keywords. Wer 'Hochzeitsfotograf + Stadt' nicht dominiert, lässt die profitabelsten Aufträge liegen.",
    en: "Photographers sell emotions — but they're found through keywords. Those who don't dominate 'wedding photographer + city' leave the most profitable jobs on the table."
  },
  "local-seo-baeckerei": {
    de: "'Bäckerei in der Nähe offen' — diese Suchanfrage hat eine Conversion-Rate von über 70 %. Bäckereien, die bei Google sichtbar sind, füllen ihre Theke bereits vor der Öffnung.",
    en: "'Bakery near me open' — this search query has a conversion rate of over 70%. Bakeries visible on Google fill their counter before opening."
  },
  "local-seo-sanitaer-heizung": {
    de: "Die Heizung fällt im Winter aus, das Rohr bricht am Wochenende — SHK-Notdienste, die bei Google nicht sofort erscheinen, existieren für verzweifelte Kunden schlicht nicht.",
    en: "The heating fails in winter, the pipe breaks on weekends — HVAC emergency services not immediately visible on Google simply don't exist for desperate customers."
  },
  "local-seo-case-study-baecker": {
    de: "Von 3 Google-Bewertungen zu 47. Von null Maps-Aufrufen zu 600 pro Monat. Eine echte Bäckerei, echte Zahlen — und die exakten Schritte zum Nachmachen.",
    en: "From 3 Google reviews to 47. From zero Maps views to 600 per month. A real bakery, real numbers — and the exact steps to replicate."
  },

  // === REGIONEN ===
  "local-seo-schweiz": {
    de: "Die Schweiz hat 4 Amtssprachen, eigene Verzeichnisse und Kunden, die 'Coiffeur' statt 'Friseur' suchen. Standard-SEO aus Deutschland funktioniert hier nicht. Dieser Guide schon.",
    en: "Switzerland has 4 official languages, its own directories and customers who search differently. Standard SEO from Germany doesn't work here. This guide does."
  },
  "local-seo-zuerich": {
    de: "Zürich hat die höchste Kaufkraft der Schweiz — aber auch den härtesten Wettbewerb. Wer hier im Local Pack steht, hat gewonnen. So schaffst du es.",
    en: "Zurich has the highest purchasing power in Switzerland — but also the toughest competition. Those in the Local Pack here have won. Here's how you make it."
  },
  "local-seo-muenchen": {
    de: "Von Schwabing bis Giesing: München hat 25 Stadtbezirke mit eigenen Suchmustern. Wer nur 'München' optimiert, verpasst 60 % der lokalen Suchanfragen.",
    en: "From Schwabing to Giesing: Munich has 25 districts with their own search patterns. Those who only optimize for 'Munich' miss 60% of local searches."
  },
  "local-seo-hamburg": {
    de: "2 Millionen Einwohner, 104 Stadtteile, 1 Frage: Findet man dich, wenn jemand in Eimsbüttel nach deiner Dienstleistung sucht? Dieser Guide gibt die Antwort.",
    en: "2 million residents, 104 neighborhoods, 1 question: Can someone find you when they search for your service in Eimsbüttel? This guide has the answer."
  },
  "local-seo-frankfurt": {
    de: "Frankfurts Finanzsektor bringt B2B-Kunden mit hohem Budget. Wer hier lokal sichtbar ist, spielt in einer anderen Liga. So nutzt du das Potenzial der Mainmetropole.",
    en: "Frankfurt's financial sector brings B2B clients with high budgets. Being locally visible here puts you in a different league. How to leverage the Main metropolis."
  },
  "local-seo-berlin": {
    de: "3,7 Millionen Einwohner, 96 Ortsteile, unendliche Nischen — Berlin ist Deutschlands härtester lokaler Markt. Aber auch der mit dem größten Potenzial. So nutzt du es.",
    en: "3.7 million residents, 96 neighborhoods, endless niches — Berlin is Germany's toughest local market. But also the one with the greatest potential. How to use it."
  },
  "local-seo-koeln": {
    de: "Kölner suchen nach 'Veedel', nicht nach 'Stadtteil'. Wer die lokale Sprache und Suchkultur versteht, dominiert das Kölner Local Pack. Dieser Guide macht dich zum Kölsch-SEO-Experten.",
    en: "Cologne locals search for 'Veedel', not 'district'. Those who understand local language and search culture dominate the Cologne Local Pack. This guide makes you a local expert."
  },
  "local-seo-wien": {
    de: "Wien ist nicht Deutschland — andere Suchbegriffe, andere Verzeichnisse, andere Google-Eigenheiten. Dieser Guide ist speziell für den österreichischen Markt geschrieben.",
    en: "Vienna is not Germany — different search terms, different directories, different Google quirks. This guide is written specifically for the Austrian market."
  },
  "local-seo-stuttgart": {
    de: "Stuttgart ist Deutschlands Automobilhauptstadt — aber auch Zulieferer, Handwerker und Gastronomen profitieren von der Kaufkraft der Region. So wirst du lokal sichtbar.",
    en: "Stuttgart is Germany's automotive capital — but suppliers, contractors and restaurants also benefit from the region's purchasing power. How to become locally visible."
  },
  "local-seo-duesseldorf": {
    de: "Mode, Messe, Medien — Düsseldorf hat eine der vielfältigsten Wirtschaften Deutschlands. Von der Kö bis Flingern: So dominierst du den lokalen Markt.",
    en: "Fashion, trade fairs, media — Düsseldorf has one of Germany's most diverse economies. From the Kö to Flingern: How to dominate the local market."
  },
  "local-seo-basel": {
    de: "Basel liegt im Dreiländereck — deine Kunden kommen aus der Schweiz, Deutschland und Frankreich. Wer nur auf Deutsch optimiert, verschenkt zwei Drittel des Potenzials.",
    en: "Basel sits at the tri-border — your customers come from Switzerland, Germany and France. Those who only optimize in German waste two-thirds of the potential."
  },
  "local-seo-hannover": {
    de: "Hannover ist Messemetropole und Versicherungsstandort — zwei Branchen, die massiv von Local SEO profitieren. So nutzt du die niedersächsische Landeshauptstadt.",
    en: "Hannover is a trade fair metropolis and insurance hub — two industries that massively benefit from Local SEO. How to leverage Lower Saxony's capital."
  },

  // === TECHNIK ===
  "schema-markup-local-seo": {
    de: "Rich Snippets bringen bis zu 30 % mehr Klicks — aber nur, wenn das Schema Markup fehlerfrei ist. Dieser Guide gibt dir kopierfertigen JSON-LD Code für jede Branche.",
    en: "Rich Snippets bring up to 30% more clicks — but only if the Schema Markup is error-free. This guide gives you copy-ready JSON-LD code for every industry."
  },
  "mobile-local-seo": {
    de: "80 % aller lokalen Suchen passieren auf dem Smartphone — und Google rankt Mobile-First. Wenn deine Seite auf dem Handy nicht perfekt läuft, existierst du nicht.",
    en: "80% of all local searches happen on smartphones — and Google ranks Mobile-First. If your site doesn't run perfectly on mobile, you don't exist."
  },
  "google-maps-seo-ranking-faktoren": {
    de: "Google Maps nutzt 20 Ranking-Signale — aber nicht alle wiegen gleich. GBP-Signale machen 32 %, Bewertungen 16 %. Hier ist die vollständige Signal-Tabelle mit Gewichtung.",
    en: "Google Maps uses 20 ranking signals — but not all weigh equally. GBP signals account for 32%, reviews 16%. Here's the complete signal table with weighting."
  },
  "google-maps-spam-erkennen": {
    de: "Dein Konkurrent steht vor dir bei Google Maps? Vielleicht ist sein Eintrag Spam. Lerne die 8 häufigsten Spam-Arten zu erkennen und effektiv zu melden.",
    en: "Your competitor ranks above you on Google Maps? Maybe their listing is spam. Learn to identify the 8 most common spam types and report them effectively."
  },
  "google-maps-konkurrenzanalyse": {
    de: "Du willst wissen, warum die Konkurrenz vor dir rankt? Diese systematische Analyse deckt ihre Stärken und deine Chancen auf — Schritt für Schritt.",
    en: "Want to know why the competition ranks above you? This systematic analysis reveals their strengths and your opportunities — step by step."
  },
  "google-maps-ranking-case-studies": {
    de: "Theorie ist gut, Ergebnisse sind besser. 6 echte Unternehmen, 6 Branchen, 6 dokumentierte Erfolge — mit den exakten Maßnahmen zum Nachbauen.",
    en: "Theory is good, results are better. 6 real businesses, 6 industries, 6 documented successes — with the exact measures to replicate."
  },
  "entity-seo-guide": {
    de: "Google versteht keine Keywords mehr — es versteht Entitäten. Wer als 'Entity' erkannt wird, bekommt Knowledge Panels, Rich Snippets und AI-Empfehlungen.",
    en: "Google no longer understands keywords — it understands entities. Those recognized as an 'entity' get Knowledge Panels, Rich Snippets and AI recommendations."
  },
  "semantic-seo-topical-authority": {
    de: "Ein einzelner Blog-Artikel rankt selten dauerhaft. Topical Authority durch vernetzte Inhalte schon. So baust du semantische Themenwelten, die Google liebt.",
    en: "A single blog article rarely ranks permanently. Topical Authority through interlinked content does. How to build semantic topic clusters that Google loves."
  },
  "core-web-vitals-local-seo": {
    de: "Deine Website lädt 4 Sekunden? Dann verlierst du 53 % der mobilen Besucher — und Google bestraft dich obendrein. Core Web Vitals sind kein Bonus, sondern Pflicht.",
    en: "Your website takes 4 seconds to load? Then you lose 53% of mobile visitors — and Google penalizes you on top. Core Web Vitals aren't a bonus, they're mandatory."
  },
  "localbusiness-schema-implementierung": {
    de: "Ohne LocalBusiness Schema sieht Google dein Unternehmen wie einen gesichtslosen Text. Mit dem richtigen Markup bekommst du Rich Snippets, Öffnungszeiten und Bewertungssterne direkt in den Suchergebnissen.",
    en: "Without LocalBusiness Schema, Google sees your business as faceless text. With the right markup you get Rich Snippets, opening hours and review stars right in search results."
  },
  "review-schema-implementierung": {
    de: "Bewertungssterne in den Suchergebnissen erhöhen die Klickrate um bis zu 35 %. So implementierst du Review Schema korrekt — ohne Googles Richtlinien zu verletzen.",
    en: "Review stars in search results increase click-through rates by up to 35%. How to implement Review Schema correctly — without violating Google's guidelines."
  },
  "wie-google-maps-ranking-funktioniert": {
    de: "Nähe, Relevanz, Bekanntheit — drei Wörter bestimmen, ob du bei Google Maps erscheinst oder nicht. Verstehe den Algorithmus, und du verstehst, was du ändern musst.",
    en: "Proximity, relevance, prominence — three words determine whether you appear on Google Maps or not. Understand the algorithm, and you'll know what to change."
  },
  "schema-strategie-dokument": {
    de: "Article, FAQPage, HowTo, LocalBusiness — welches Schema gehört auf welche Seite? Die Entscheidungsmatrix verhindert teure Fehler und maximiert Rich Snippets.",
    en: "Article, FAQPage, HowTo, LocalBusiness — which schema belongs on which page? The decision matrix prevents costly mistakes and maximizes Rich Snippets."
  },

  // === BEWERTUNGEN ===
  "negative-google-bewertungen": {
    de: "Eine einzige 1-Stern-Bewertung kann 22 % der potenziellen Kunden vertreiben. Aber die richtige Antwort kann sie zurückgewinnen. Hier lernst du die Kunst der professionellen Reaktion.",
    en: "A single 1-star review can drive away 22% of potential customers. But the right response can win them back. Here you'll learn the art of professional responses."
  },
  "bewertungs-antworten-vorlagen": {
    de: "Du starrst auf eine Bewertung und weißt nicht, was du schreiben sollst? Diese 50 Vorlagen geben dir für jede Situation die perfekte Antwort — von begeistert bis verärgert.",
    en: "Staring at a review and don't know what to write? These 50 templates give you the perfect response for every situation — from thrilled to angry."
  },

  // === GOOGLE BUSINESS SPEZIFISCH ===
  "google-business-kategorien-guide": {
    de: "Die falsche Google Business Kategorie kostet dich bis zu 41 % der Sichtbarkeit. Die richtige Haupt- und Nebenkategorie zu wählen, ist eine der wirkungsvollsten SEO-Maßnahmen überhaupt.",
    en: "The wrong Google Business category costs you up to 41% of visibility. Choosing the right primary and secondary category is one of the most impactful SEO measures."
  },
  "google-business-messaging": {
    de: "Kunden wollen chatten, nicht telefonieren. Google Business Messaging verwandelt Suchende in Kunden — in Echtzeit. So richtest du es ein und nutzt es optimal.",
    en: "Customers want to chat, not call. Google Business Messaging converts searchers into customers — in real time. How to set it up and use it optimally."
  },
  "google-business-produkte-services": {
    de: "Dein Google Business Profil hat einen kostenlosen Produktkatalog — und kaum jemand nutzt ihn. Unternehmen mit Produkten und Services bekommen 2x mehr Klicks.",
    en: "Your Google Business Profile has a free product catalog — and hardly anyone uses it. Businesses with products and services get 2x more clicks."
  },
  "google-business-insights-verstehen": {
    de: "Google Business Insights zeigt dir genau, woher deine Kunden kommen und was sie tun. Das Problem: Die meisten lesen die Daten falsch. Dieser Guide zeigt, wie es richtig geht.",
    en: "Google Business Insights shows you exactly where your customers come from and what they do. The problem: Most people read the data wrong. This guide shows how to do it right."
  },
  "gbp-fotos-optimieren": {
    de: "Unternehmen mit über 100 Google-Fotos bekommen 520 % mehr Anrufe. Aber es kommt nicht auf die Menge an — sondern auf die richtige Strategie. Hier ist sie.",
    en: "Businesses with 100+ Google photos get 520% more calls. But it's not about quantity — it's about the right strategy. Here it is."
  },
  "google-posts-ranking-faktor": {
    de: "Google Posts sind kostenlose Werbung direkt in den Suchergebnissen — aber nur 13 % der Unternehmen nutzen sie. Wer regelmäßig postet, signalisiert Aktivität und bekommt mehr Klicks.",
    en: "Google Posts are free advertising right in search results — but only 13% of businesses use them. Those who post regularly signal activity and get more clicks."
  },

  // === TROUBLESHOOTING ===
  "gbp-suspendiert-reaktivieren": {
    de: "Dein Google Business Profil wurde gesperrt? Keine Panik — aber schnelles Handeln ist entscheidend. Diese Anleitung hat eine Reaktivierungsrate von über 90 %.",
    en: "Your Google Business Profile was suspended? Don't panic — but quick action is crucial. This guide has a reactivation rate of over 90%."
  },
  "gbp-verifizierung-fehlgeschlagen": {
    de: "Die Postkarte kam nicht, der Videoanruf scheiterte, die Verifizierung hängt seit Wochen? Hier sind alle Alternativen und der direkte Weg zum Google-Support.",
    en: "The postcard didn't arrive, the video call failed, verification has been stuck for weeks? Here are all alternatives and the direct path to Google support."
  },
  "duplicate-listing-entfernen": {
    de: "Duplicate Listings verwirren Kunden und zersplittern deine Bewertungen. Jeder Tag mit einem Duplikat kostet dich Ranking-Power. So wirst du sie los.",
    en: "Duplicate listings confuse customers and fragment your reviews. Every day with a duplicate costs you ranking power. Here's how to get rid of them."
  },
  "gbp-bewertung-loeschen-anleitung": {
    de: "Fake-Bewertung? Beleidigung? Konkurrenz-Sabotage? Google löscht nicht einfach jede Bewertung — aber mit der richtigen Begründung und Strategie hast du gute Chancen.",
    en: "Fake review? Insult? Competitor sabotage? Google doesn't simply delete every review — but with the right justification and strategy, you have good chances."
  },
  "ranking-ploetzlich-verschwunden": {
    de: "Gestern noch auf Platz 1, heute unsichtbar — ein Ranking-Verlust fühlt sich wie ein Herzinfarkt an. Bleib ruhig. Diese 12 Ursachen und Sofort-Maßnahmen helfen.",
    en: "Yesterday at position 1, today invisible — a ranking loss feels like a heart attack. Stay calm. These 12 causes and immediate measures help."
  },
  "gbp-nicht-in-suche-sichtbar": {
    de: "Dein Google Business Profil existiert, aber niemand findet es? Das ist häufiger als du denkst — und hat meist eine einfache Ursache. Hier sind alle 12 Lösungen.",
    en: "Your Google Business Profile exists but nobody finds it? That's more common than you think — and usually has a simple cause. Here are all 12 solutions."
  },
  "gbp-mehrere-standorte": {
    de: "Mehrere Standorte, ein Chaos? Multi-Location Management ohne System frisst Stunden. Dieser Guide zeigt dir Bulk-Tools und Organisationsstrategien, die skalieren.",
    en: "Multiple locations, one chaos? Multi-location management without a system eats hours. This guide shows you bulk tools and organizational strategies that scale."
  },
  "gbp-oeffnungszeiten-sondertage": {
    de: "Falsche Öffnungszeiten = verlorene Kunden, die vor verschlossener Tür stehen. Feiertage, Betriebsferien, Sonderöffnungen — so stellst du alles korrekt ein.",
    en: "Wrong opening hours = lost customers standing at a closed door. Holidays, vacation periods, special hours — how to set everything up correctly."
  },
  "gbp-attribute-richtig-nutzen": {
    de: "Von 'Rollstuhlgerecht' bis 'LGBTQ+-freundlich' — Google Business Attribute filtern Kunden direkt zu dir. Die meisten Unternehmen ignorieren diese kostenlose Sichtbarkeit.",
    en: "From 'wheelchair accessible' to 'LGBTQ+-friendly' — Google Business attributes filter customers directly to you. Most businesses ignore this free visibility."
  },

  // === TOOLS & RESSOURCEN ===
  "seo-toolbox-kostenlose-ressourcen": {
    de: "50+ kostenlose SEO-Tools an einem Ort — kein Zusammensuchen mehr. Von Keyword-Recherche über Schema-Generatoren bis Ranking-Tracker: Deine komplette Werkzeugkiste.",
    en: "50+ free SEO tools in one place — no more searching. From keyword research to schema generators to ranking trackers: Your complete toolkit."
  },
  "ki-tools-local-seo": {
    de: "ChatGPT schreibt deine Google Posts, Gemini analysiert deine Konkurrenz, AI generiert deine Schema Markups — willkommen in der Zukunft des Local SEO.",
    en: "ChatGPT writes your Google Posts, Gemini analyzes your competition, AI generates your Schema Markups — welcome to the future of Local SEO."
  },
  "google-ai-overviews-local-seo": {
    de: "Google AI Overviews erscheinen bereits bei 30 % der lokalen Suchanfragen — und verdrängen klassische Ergebnisse. Wer nicht darauf optimiert, wird zum Opfer der AI-Revolution.",
    en: "Google AI Overviews already appear for 30% of local searches — and push down traditional results. Those who don't optimize for them become victims of the AI revolution."
  },
  "local-seo-voice-search": {
    de: "'Hey Google, wo ist der nächste Zahnarzt?' — Voice Search wächst bei lokalen Suchen um 25 % pro Jahr. Optimierst du schon für gesprochene Anfragen?",
    en: "'Hey Google, where's the nearest dentist?' — Voice search grows 25% annually for local queries. Are you already optimizing for spoken questions?"
  },
  "e-e-a-t-lokale-unternehmen": {
    de: "Google vertraut nicht jedem. E-E-A-T (Experience, Expertise, Authority, Trust) entscheidet, ob du als verlässliche Quelle eingestuft wirst — oder ignoriert.",
    en: "Google doesn't trust everyone. E-E-A-T (Experience, Expertise, Authority, Trust) decides whether you're classified as a reliable source — or ignored."
  },
  "lokale-seo-fuer-neugruender": {
    de: "Tag 1 nach der Gründung — und Google weiß noch nichts von dir. Dieser 90-Tage-Plan bringt dich von null auf lokal sichtbar, Schritt für Schritt.",
    en: "Day 1 after founding — and Google doesn't know you exist yet. This 90-day plan takes you from zero to locally visible, step by step."
  },
  "local-seo-notdienst-keywords": {
    de: "'Schlüsseldienst sofort' hat eine Conversion-Rate von über 50 %. Wer bei Notdienst-Suchen nicht auf Platz 1 steht, lässt die profitabelsten Kunden ziehen.",
    en: "'Locksmith now' has a conversion rate of over 50%. Those not in position 1 for emergency searches let the most profitable customers go."
  },
  "local-content-marketing": {
    de: "Lokaler Content ist kein Blog über dein Firmenfest. Es sind Stadtteil-Guides, Event-Kalender und Nachbarschafts-Stories — Inhalte, die Google und Kunden gleichermaßen lieben.",
    en: "Local content isn't a blog about your company party. It's district guides, event calendars and neighborhood stories — content that both Google and customers love."
  },
  "local-link-building": {
    de: "Backlinks sind der Ranking-Faktor Nr. 3 — und für lokale Unternehmen einfacher zu bekommen als du denkst. Sponsoring, Vereine, Presse: 15+ Strategien, die funktionieren.",
    en: "Backlinks are ranking factor #3 — and easier to get for local businesses than you think. Sponsoring, clubs, press: 15+ strategies that work."
  },
  "lokale-events-marketing": {
    de: "Ein lokales Sponsoring kostet 200 € und bringt dir einen Backlink, Presseerwähnung und 100+ potenzielle Neukunden. Hier lernst du, Events strategisch für SEO zu nutzen.",
    en: "A local sponsorship costs €200 and brings you a backlink, press mention and 100+ potential new customers. Here you'll learn to use events strategically for SEO."
  },
  "lokale-influencer-kooperationen": {
    de: "Ein Mikro-Influencer mit 2.000 lokalen Followern kann mehr Kunden bringen als eine Google-Ads-Kampagne. So findest du die richtigen Partner in deiner Stadt.",
    en: "A micro-influencer with 2,000 local followers can bring more customers than a Google Ads campaign. How to find the right partners in your city."
  },

  // === WEITERE ===
  "local-seo-vs-maps-seo": {
    de: "Local SEO und Maps SEO — gleich oder verschieden? Die Antwort: beides. Und wer den Unterschied kennt, optimiert gezielter und rankt schneller.",
    en: "Local SEO and Maps SEO — same or different? The answer: both. And those who know the difference optimize more precisely and rank faster."
  },
  "local-citations-2025": {
    de: "Nicht jedes Verzeichnis zählt gleich. Diese nach Branche sortierte Liste zeigt dir die Top-Verzeichnisse mit Relevanz-Score — damit du keine Zeit an wertlose Einträge verschwendest.",
    en: "Not every directory counts equally. This industry-sorted list shows you the top directories with relevance scores — so you don't waste time on worthless listings."
  },
  "local-seo-mehrstufig-unternehmen": {
    de: "5 Standorte, 5 Google-Profile, 1 Marke — Multi-Location SEO ohne System wird zum Albtraum. Dieser Enterprise-Guide zeigt, wie du skalierst ohne die Kontrolle zu verlieren.",
    en: "5 locations, 5 Google profiles, 1 brand — multi-location SEO without a system becomes a nightmare. This enterprise guide shows how to scale without losing control."
  },
  "ai-search-optimization-2026": {
    de: "2026 kommen 15 % der lokalen Suchanfragen bereits über AI-Plattformen. GEO (Generative Engine Optimization) ist das neue SEO — und dieser Guide ist dein Einstieg.",
    en: "In 2026, 15% of local searches already come through AI platforms. GEO (Generative Engine Optimization) is the new SEO — and this guide is your entry point."
  },
  "website-content-ai-suchmaschinen": {
    de: "ChatGPT zitiert Websites, die semantisch strukturiert sind. Ist deine dabei? Dieser Guide zeigt dir, wie du deine Inhalte maschinenlesbar und zitierfähig machst.",
    en: "ChatGPT cites websites that are semantically structured. Is yours among them? This guide shows you how to make your content machine-readable and citable."
  },
  "seo-ferienwohnungen": {
    de: "Airbnb und Booking dominieren die Suche — aber Direktbuchungen über Google bringen 20-25 % mehr Gewinn. So werden Ferienwohnungen ohne Portal-Provision gefunden.",
    en: "Airbnb and Booking dominate search — but direct bookings via Google bring 20-25% more profit. How vacation rentals get found without portal commissions."
  },
  "local-seo-reporting-template": {
    de: "Du machst Local SEO, aber kannst den Erfolg nicht beweisen? Dieses Reporting-Template zeigt Kunden und Chefs in 5 Minuten, was deine Arbeit wirklich bringt.",
    en: "You do Local SEO but can't prove the success? This reporting template shows clients and bosses in 5 minutes what your work really delivers."
  },
  "google-maps-ranking-tracker": {
    de: "Dein Maps-Ranking ändert sich mit jedem Straßenblock — Grid-Tracking zeigt dir das vollständige Bild. Dieser Guide erklärt die Methode und vergleicht 7 Tools.",
    en: "Your Maps ranking changes with every city block — grid tracking shows you the complete picture. This guide explains the method and compares 7 tools."
  },
  "local-seo-statistiken-daten": {
    de: "88+ Datenpunkte, 22 Branchen, 1 Ziel: datenbasierte Entscheidungen. Ob Bewertungs-Benchmarks oder Mobile-Trends — hier findest du die Zahlen, die deine Strategie untermauern.",
    en: "88+ data points, 22 industries, 1 goal: data-driven decisions. Whether review benchmarks or mobile trends — here you'll find the numbers that back up your strategy."
  },

  // === COMPARISON ===
  "local-seo-vs-organisch": {
    de: "Klassisches SEO oder Local SEO — zwei Disziplinen, die oft verwechselt werden, aber fundamental unterschiedliche Strategien erfordern. Wer beides versteht, investiert gezielter und gewinnt schneller.",
    en: "Classic SEO or Local SEO — two disciplines often confused, yet requiring fundamentally different strategies. Understanding both means investing smarter and winning faster."
  },
  "google-maps-seo-vs-organic-seo": {
    de: "Das Local Pack erhält 42 % aller Klicks bei lokalen Suchen — doch die organischen Ergebnisse darunter bringen den langfristigen Traffic. Wer versteht, wie sich beide Kanäle ergänzen, maximiert seine lokale Sichtbarkeit.",
    en: "The Local Pack captures 42% of all clicks for local searches — yet organic results below bring long-term traffic. Understanding how both channels complement each other maximizes your local visibility."
  },
  "ai-search-vs-traditional-search": {
    de: "40 % der Google-Suchen zeigen bereits AI Overviews — und Nutzer klicken immer seltener auf Websites. Wer als lokales Unternehmen nur auf klassisches SEO setzt, verliert Sichtbarkeit an die neue AI-Suche.",
    en: "40% of Google searches already show AI Overviews — and users click on websites less and less. Local businesses relying solely on traditional SEO are losing visibility to the new AI search."
  },
};

/**
 * Get the hook for a given article slug and language.
 * Returns null if no hook is defined for the slug.
 */
export const getArticleHook = (slug: string, language: "de" | "en" = "de"): string | null => {
  const hook = articleHooks[slug];
  if (!hook) return null;
  return hook[language] || hook.de;
};
