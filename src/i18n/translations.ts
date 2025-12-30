export type Language = "de" | "en";

export const translations = {
  de: {
    // AnnouncementBar
    announcement: {
      warning: "⚠️ Achtung: Wir nehmen pro Stadt maximal 3 Dienstleister an, um Konkurrenz-Konflikte zu vermeiden.",
      checkAvailability: "Prüfe jetzt deine Verfügbarkeit.",
    },
    // HeroSection
    hero: {
      eyebrow: "⚠️ ACHTUNG AN UNTERNEHMER IN DEINER REGION ⚠️",
      headline: "Während du das liest, ruft dein nächster Kunde gerade bei",
      headlineHighlight: "deiner Konkurrenz",
      headlineEnd: "an.",
      subheadline: "Du bist auf Google Maps",
      invisible: "unsichtbar",
      subheadlineMid: ". Deine Konkurrenten stehen oben.",
      stopIt: "Schluss damit.",
      subheadlineEnd: "Wir katapultieren dich in die Top 3 – zum Festpreis.",
      ctaFull: "Jetzt Marktherrschaft sichern (299€)",
      ctaShort: "Jetzt starten (299€)",
      guarantee: "100% Geld-zurück-Garantie • Kein Risiko",
      urgency: "🔥 NUR NOCH",
      spotsLeft: "7 PLÄTZE",
      urgencyEnd: "DIESEN MONAT VERFÜGBAR",
    },
    // TrustBadges
    trust: {
      securePayment: "Sichere Zahlung via:",
    },
    // PainSection
    pain: {
      headline: "Die brutale Wahrheit über lokale Geschäfte:",
      subheadline: "(Die dir keiner erzählt, weil alle davon profitieren, dass du unsichtbar bleibst)",
      bottomPunch: "Wie viele Kunden hast du HEUTE verloren?",
      points: [
        {
          title: "Platz 4 ist der Friedhof",
          description: "Wer nicht in den Top 3 (Map-Pack) ist, existiert für Kunden schlicht nicht. 92% aller Klicks gehen an die ersten drei Ergebnisse.",
        },
        {
          title: "Bewertungen sind Währung",
          description: "Dein Angebot ist völlig egal, wenn dein Nachbar 50 Sterne mehr hat. Menschen kaufen Vertrauen – nicht Produkte.",
        },
        {
          title: "Geldverbrennung",
          description: "Warum teure Google Ads schalten, wenn du den kostenlosen organischen Traffic komplett liegen lässt? Jeden Tag.",
        },
      ],
    },
    // ComparisonTable
    comparison: {
      headline: "Warum",
      headlineHighlight: "Local Dominator",
      headlineEnd: "anders ist",
      headers: {
        agencies: "Andere Agenturen",
        diy: "Selber machen",
        localDominator: "Local Dominator",
      },
      bestseller: "Bestseller",
      rows: {
        cost: { label: "• Kosten:", agency: "1.500€+", diy: "Deine Lebenszeit", local: "299€ Festpreis" },
        duration: { label: "• Dauer:", agency: "Monate", diy: "Ewig", local: "48 Stunden" },
        guarantee: { label: "• Garantie:", agency: "Keine", diy: "Keine", local: "100% Geld-zurück" },
        result: { label: "• Ergebnis:", agency: "Vielleicht", diy: "Frust", local: "Top-Rankings" },
      },
    },
    // SolutionSection
    solution: {
      eyebrow: "Die Lösung",
      headline: "Das 3-Phasen System zur lokalen Dominanz",
      subheadline: "Keine leeren Versprechungen. Keine Buzzwords. Nur ein bewährtes System, das funktioniert.",
      phases: [
        {
          number: "01",
          title: "Die Keyword-Injektion",
          subtitle: "(Statt SEO)",
          description: "Wir erraten nicht, was deine Kunden suchen. Wir injizieren exakt die umsatzstärksten Suchbegriffe (Zahnarzt Notdienst statt nur Zahnarzt) tief in die Metadaten deines Profils, sodass Google dich als DIE Autorität erkennt.",
        },
        {
          number: "02",
          title: "Der Psycho-Visuelle Anker",
          subtitle: "(Statt Bilder hochladen)",
          description: "Menschen kaufen mit den Augen. Wir strukturieren deine Galerie nach verkaufspsychologischen Mustern, die Vertrauen erzwingen, noch bevor der Kunde den ersten Satz gelesen hat. Dein Profil wird zum digitalen Schaufenster, an dem niemand vorbeigeht.",
        },
        {
          number: "03",
          title: "Der 5-Sterne-Automatismus",
          subtitle: "(Statt Bewertungen sammeln)",
          description: "Betteln funktioniert nicht. Wir installieren einen simplen Prozess (QR und Link-Strategie), der zufriedene Kunden psychologisch nudged, dir sofort 5 Sterne zu geben. So baust du eine Festung aus Social Proof, die von der Konkurrenz nicht mehr einzuholen ist.",
        },
      ],
    },
    // TestimonialsSection
    testimonials: {
      eyebrow: "Echte Ergebnisse",
      headline: "Was unsere Kunden sagen",
      subheadline: "Keine leeren Versprechungen – hier sind echte Unternehmer, die mit Local Dominator ihre lokale Sichtbarkeit explodieren ließen.",
      trustIndicator: "100+ zufriedene Unternehmer",
      items: [
        {
          name: "Michael Bauer",
          business: "Schlüsseldienst München",
          quote: "Vorher Seite 2, jetzt Platz 1. In 3 Wochen hatte ich 47 neue Anrufe. Das System funktioniert einfach.",
          result: "+47 Anrufe/Monat",
        },
        {
          name: "Sandra Keller",
          business: "Zahnarztpraxis Hamburg",
          quote: "Wir waren skeptisch, aber die Ergebnisse sprechen für sich. 23 neue Patienten im ersten Monat – nur über Google Maps.",
          result: "+23 Neupatienten",
        },
        {
          name: "Thomas Richter",
          business: "Elektro Richter Berlin",
          quote: "Die Keyword-Injektion war ein Gamechanger. Kunden finden mich jetzt für Begriffe, an die ich nie gedacht hätte.",
          result: "Platz 1 für 12 Keywords",
        },
      ],
    },
    // ValueStackSection
    valueStack: {
      eyebrow: "Dein Lieferumfang",
      headline: "Nicht nur eine Dienstleistung. Ein komplettes Waffen-Arsenal.",
      items: [
        {
          title: "Die Core-Optimierung",
          text: "Komplettes Setup deines Google Profils mit Keyword-Injektion und Premium-Foto-Uploads.",
          value: "Wert: 299€",
        },
        {
          title: "Der Bewertungs-Magnet",
          text: "Druckfertiges Design für deinen Tresen-Aufsteller mit Smart-Link Technologie für sofortige 5-Sterne.",
          value: "Wert: 149€",
        },
        {
          title: "Das Mitarbeiter-Skript",
          text: "Psychologischer Gesprächsleitfaden: So fragen deine Mitarbeiter nach Bewertungen, ohne zu nerven.",
          value: "Wert: 99€",
        },
        {
          title: "Die Ranking-Versicherung",
          text: "Anti-Sperr-Checkliste & Guide, damit dein Profil sicher oben bleibt.",
          value: "Wert: 79€",
        },
      ],
      totalLabel: "Gesamtwert des Pakets:",
      totalValue: "626€",
      todayPrice: "Heute nur: 299€",
    },
    // OfferSection
    offer: {
      eyebrow: "Das Angebot",
      headline: "Der unwiderstehliche Deal",
      benefitsTitle: "Das bekommst du:",
      benefits: [
        "Komplette Profil-Optimierung (Titel, Beschreibung, Kategorien)",
        "Keyword-Bombe: Die 50 umsatzstärksten Suchbegriffe deiner Branche",
        "Psychologische Bilder-Strategie für maximale Klicks",
        "5-Sterne-Automatismus Setup (QR-Codes + Link-Strategie)",
        "Anti-Spam Schutz für deine Bewertungen",
        "Schritt-für-Schritt Video-Anleitung",
        "30 Tage E-Mail Support",
      ],
      agencyPrice: "Agentur-Normalpreis:",
      yourPrice: "Dein Preis heute:",
      oneTime: "Einmalig. Keine versteckten Kosten.",
      ctaButton: "Sofort-Zugang kaufen",
      bonus: "🎁 BONUS: Bestelle heute und erhalte unser \"Google Maps Ranking Cheat Sheet\" GRATIS dazu (Wert: 97€)",
    },
    // GuaranteeSection
    guarantee: {
      headline: "Eisenharte 30-Tage Geld-zurück-Garantie",
      text: "Solltest du innerhalb von",
      textBold1: "30 Tagen nach Umsetzung keine messbare Steigerung deiner Anfragen",
      textMid: "verzeichnen, erstatten wir dir auf Anfrage",
      textBold2: "den vollen Kaufpreis",
      textEnd: ". Voraussetzung: Du hast alle Optimierungen gemäß unserer Anleitung umgesetzt und uns die Möglichkeit zur Nachbesserung gegeben.",
      onlyRisk: "Dein einziges Risiko: Nicht zu handeln.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen (ehrlich beantwortet)",
      items: [
        {
          question: "Was passiert, wenn es nicht funktioniert?",
          answer: "Du bekommst dein Geld zurück – ohne Diskussion. Unsere 30-Tage Geld-zurück-Garantie schützt dich vollständig. Wenn du nach Umsetzung keine messbare Steigerung deiner Anfragen siehst, schreibst du uns eine E-Mail und wir erstatten den vollen Kaufpreis. Du gehst also kein Risiko ein.",
        },
        {
          question: "Ist das nicht einfach SEO?",
          answer: "Nein, und das ist der entscheidende Unterschied. Klassische SEO-Agenturen verkaufen dir monatelange Verträge für Websites. Wir fokussieren uns laser-scharf auf Google Maps – den Ort, wo 86% aller lokalen Suchanfragen enden. Das ist unser Spezialgebiet, nicht ein Nebenprojekt.",
        },
        {
          question: "Funktioniert das für meine Branche?",
          answer: "Ja, wenn du ein lokales Geschäft betreibst und Kunden aus deiner Region anziehen willst. Handwerker, Ärzte, Restaurants, Friseure, Anwälte, Fitnessstudios – das System funktioniert branchenübergreifend. Die Prinzipien lokaler Sichtbarkeit sind universell.",
        },
        {
          question: "Wie schnell sehe ich Ergebnisse?",
          answer: "Die meisten Kunden sehen erste Ranking-Verbesserungen innerhalb von 14-21 Tagen. Die volle Wirkung entfaltet sich nach etwa 4-6 Wochen, wenn Google alle Änderungen indexiert hat. Und wenn nicht? Dann greift unsere Garantie.",
        },
        {
          question: "Muss ich technisch versiert sein?",
          answer: "Überhaupt nicht. Wir übernehmen die gesamte technische Arbeit. Du gibst uns den Zugang und folgst unserer einfachen Video-Anleitung für den 5-Sterne-Automatismus. Das kann wirklich jeder – auch ohne Vorkenntnisse.",
        },
        {
          question: "Wie viel Zeit muss ich investieren?",
          answer: "Genau 7 Minuten. Nach der Buchung füllst du ein kurzes Formular aus. Danach übernehmen wir alles. Du musst keine Technik verstehen und keine Texte schreiben. Wir erledigen die Arbeit – du erntest die Ergebnisse.",
        },
        {
          question: "Brauche ich Zugang zu meinem Google-Konto?",
          answer: "Ja, du gewährst uns temporären Zugang zu deinem Google Business Profil. Das ist 100% sicher – wir arbeiten nach DSGVO-Standards und du kannst den Zugang jederzeit widerrufen. Ohne diesen Zugang können wir die Optimierungen nicht durchführen.",
        },
      ],
    },
    // FinalCTASection
    finalCta: {
      headline: "Die Frage ist nicht",
      headlineIf: "ob",
      headlineMid: ", sondern",
      headlineWhen: "wann",
      headlineEnd: "du handelst.",
      subheadline: "Jeden Tag, an dem du wartest, rufen Kunden bei deiner Konkurrenz an. Du kannst das ändern. Heute.",
      ctaFull: "Jetzt Local Dominator starten (299€)",
      ctaShort: "Jetzt starten (299€)",
      footer: "30-Tage Geld-zurück-Garantie • Einmalzahlung • Sofort-Zugang",
    },
    // Footer
    footer: {
      copyright: "© 2025 Local Dominator. All rights reserved.",
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
      withdrawal: "Widerrufsrecht",
      disclaimer: "Dieses Angebot steht in keiner Verbindung zu Google™ oder Facebook™. Dies sind Marken der jeweiligen Inhaber.",
    },
    // ExpertSection
    expert: {
      eyebrow: "Ihr Experte für lokale Sichtbarkeit",
      text: "Wir sind keine anonyme KI-Firma. Mein Team und ich haben uns darauf spezialisiert, lokale Dienstleister in Deutschland, Österreich und der Schweiz sichtbar zu machen. Wir arbeiten nicht mit jedem – nur mit denen, die wachsen wollen.",
      signature: "– Das Local Dominator Team",
    },
    // MobileStickyBar
    mobileBar: {
      spotsLeft: "Nur noch",
      spotsCount: "2 Plätze",
      spotsFor: "für",
      cta: "Jetzt sichern",
    },
    // ROICalculator
    roiCalculator: {
      eyebrow: "ROI-Rechner",
      headline: "Berechne dein Umsatz-Potenzial",
      subheadline: "Gib deine aktuellen Zahlen ein und sieh, wie viel zusätzlichen Umsatz du mit Local Dominator generieren kannst.",
      inputTitle: "Deine Daten",
      guestsLabel: "Durchschnittliche Gäste pro Tag",
      avgTicketLabel: "Durchschnittlicher Bon-Wert",
      reviewsLabel: "Aktuelle Google Bewertungen",
      potentialTitle: "Dein Potenzial",
      beforeLabel: "Aktueller Monatsumsatz",
      afterLabel: "Mit Local Dominator",
      additionalRevenue: "Zusätzlicher Jahresumsatz",
      perYear: "pro Jahr möglich",
      breakeven: "Breakeven nach",
      days: "Tagen",
      roi: "Return on Investment",
      cta: "Jetzt für nur 299€ starten",
    },
    // Restaurant Marketing
    restaurant: {
      degustation: "Dégustation",
      headline: "Local Dominator",
      subtitle: "Ein kuratiertes Erlebnis für Restaurants, die online gefunden werden möchten.",
      leParcours: "le parcours",
      lesExtras: "les extras",
      amuseBouche: {
        title: "Amuse-Bouche",
        name: "Kostenlose Analyse",
        description: "Ein erster Eindruck Ihrer digitalen Präsenz. Wir analysieren Ihren aktuellen Stand und zeigen Potenziale auf.",
        price: "Offert",
        duration: "15 Minuten",
        nonBinding: "Unverbindlich",
      },
      entree: {
        title: "Entrée",
        name: "Website Erstellung",
        description: "Eine elegante, mobile-optimierte Präsenz. Ladezeit unter 2 Sekunden. Ihre digitale Visitenkarte.",
        price: "ab 250€",
      },
      intermezzo: {
        title: "Intermezzo",
        name: "Strategische Marketingberatung",
        description: "Persönliche 1:1 Beratung mit Ihrem dedizierten Marketing-Experten. Maßgeschneiderte Strategien für Ihr Restaurant.",
        price: "59€ / Stunde",
        features: ["Pre-Analyse inklusive", "Individuelle 1:1 Session", "Detaillierter Post-Bericht"],
        regularPrice: "Regulär 120€/h · Jetzt nur 59€/h",
      },
      platPrincipal: {
        title: "Plat Principal",
        name: "Rundum-Sorglos-Paket",
        description: "Alles, was Ihr Restaurant digital braucht. Website, Google Maps, Wartung und persönlicher Support.",
        offerEnds: "Angebot endet in",
        chefRecommendation: "Empfehlung des Küchenchefs",
        cta: "Jetzt reservieren",
        scarcity: "Nur noch 3 Plätze in diesem Monat verfügbar",
        features: {
          premiumWebsite: "Premium Website Design",
          googleMaps: "Google Maps Optimierung",
          mobileMenu: "Mobile Speisekarte",
          support: "Technischer Support",
          updates: "Monatliche Updates",
          included: "inkl.",
        },
      },
      fromages: {
        title: "Fromages",
        name: "Bonus-Kollektion",
        description: "Zusätzliche Ressourcen für Ihren Erfolg. Bei Buchung des Hauptgangs inklusive.",
        price: "Offert",
        bonuses: [
          { name: "Google Ranking Guide", value: "49€" },
          { name: "Social Media Vorlagen", value: "79€" },
          { name: "SEO Checkliste", value: "29€" },
        ],
        totalValue: "Gesamtwert:",
        free: "Gratis",
      },
      dessert: {
        title: "Dessert",
        name: "Zufriedenheitsgarantie",
        description: "30 Tage Geld-zurück ohne Wenn und Aber. Kein Risiko, nur Genuss.",
        riskFree: "100% Risikofrei",
      },
      finalCta: {
        headline: "Bereit für die Reservierung?",
        subtitle: "Sichern Sie sich Ihren Platz in der digitalen Spitzenklasse.",
        cta: "Tisch reservieren",
        callUs: "Oder rufen Sie uns an",
      },
      footer: {
        taxNote: "Service et taxes inclus",
        backToMain: "Zurück zur Hauptseite",
      },
      comingSoon: {
        badge: "Variante",
        headline: "Restaurant Marketing",
        description: "Wir arbeiten an etwas Besonderem. Bald verfügbar – exklusive Marketing-Lösungen für Gastronomen.",
        backButton: "Zurück zur Startseite",
      },
    },
  },
  en: {
    // AnnouncementBar
    announcement: {
      warning: "⚠️ Attention: We only accept 3 service providers per city to avoid competition conflicts.",
      checkAvailability: "Check your availability now.",
    },
    // HeroSection
    hero: {
      eyebrow: "⚠️ ATTENTION BUSINESS OWNERS IN YOUR AREA ⚠️",
      headline: "While you're reading this, your next customer is calling",
      headlineHighlight: "your competitor",
      headlineEnd: ".",
      subheadline: "You are",
      invisible: "invisible",
      subheadlineMid: "on Google Maps. Your competitors are on top.",
      stopIt: "Enough.",
      subheadlineEnd: "We catapult you into the Top 3 – for a fixed price.",
      ctaFull: "Claim Market Domination Now ($299)",
      ctaShort: "Get Started ($299)",
      guarantee: "100% Money-Back Guarantee • Zero Risk",
      urgency: "🔥 ONLY",
      spotsLeft: "7 SPOTS",
      urgencyEnd: "LEFT THIS MONTH",
    },
    // TrustBadges
    trust: {
      securePayment: "Secure payment via:",
    },
    // PainSection
    pain: {
      headline: "The Brutal Truth About Local Businesses:",
      subheadline: "(That no one tells you because they all profit from your invisibility)",
      bottomPunch: "How many customers did you lose TODAY?",
      points: [
        {
          title: "Position 4 is the Graveyard",
          description: "If you're not in the Top 3 (Map Pack), you simply don't exist for customers. 92% of all clicks go to the first three results.",
        },
        {
          title: "Reviews are Currency",
          description: "Your offer doesn't matter if your neighbor has 50 more stars. People buy trust – not products.",
        },
        {
          title: "Burning Money",
          description: "Why run expensive Google Ads when you're completely ignoring the free organic traffic? Every single day.",
        },
      ],
    },
    // ComparisonTable
    comparison: {
      headline: "Why",
      headlineHighlight: "Local Dominator",
      headlineEnd: "is different",
      headers: {
        agencies: "Other Agencies",
        diy: "DIY",
        localDominator: "Local Dominator",
      },
      bestseller: "Bestseller",
      rows: {
        cost: { label: "• Cost:", agency: "$1,500+", diy: "Your lifetime", local: "$299 fixed" },
        duration: { label: "• Duration:", agency: "Months", diy: "Forever", local: "48 hours" },
        guarantee: { label: "• Guarantee:", agency: "None", diy: "None", local: "100% money-back" },
        result: { label: "• Result:", agency: "Maybe", diy: "Frustration", local: "Top Rankings" },
      },
    },
    // SolutionSection
    solution: {
      eyebrow: "The Solution",
      headline: "The 3-Phase System for Local Domination",
      subheadline: "No empty promises. No buzzwords. Just a proven system that works.",
      phases: [
        {
          number: "01",
          title: "The Keyword Injection",
          subtitle: "(Instead of SEO)",
          description: "We don't guess what your customers search for. We inject exactly the highest-revenue search terms (Emergency Dentist instead of just Dentist) deep into your profile's metadata, so Google recognizes you as THE authority.",
        },
        {
          number: "02",
          title: "The Psycho-Visual Anchor",
          subtitle: "(Instead of uploading images)",
          description: "People buy with their eyes. We structure your gallery according to sales psychology patterns that force trust before the customer reads a single word. Your profile becomes a digital storefront no one walks past.",
        },
        {
          number: "03",
          title: "The 5-Star Automatism",
          subtitle: "(Instead of collecting reviews)",
          description: "Begging doesn't work. We install a simple process (QR and link strategy) that psychologically nudges satisfied customers to give you 5 stars immediately. This builds a fortress of social proof your competition can never catch up to.",
        },
      ],
    },
    // TestimonialsSection
    testimonials: {
      eyebrow: "Real Results",
      headline: "What Our Clients Say",
      subheadline: "No empty promises – here are real entrepreneurs who exploded their local visibility with Local Dominator.",
      trustIndicator: "100+ satisfied entrepreneurs",
      items: [
        {
          name: "Michael Bauer",
          business: "Locksmith Munich",
          quote: "Before page 2, now #1. In 3 weeks I had 47 new calls. The system just works.",
          result: "+47 calls/month",
        },
        {
          name: "Sandra Keller",
          business: "Dental Practice Hamburg",
          quote: "We were skeptical, but the results speak for themselves. 23 new patients in the first month – just from Google Maps.",
          result: "+23 new patients",
        },
        {
          name: "Thomas Richter",
          business: "Richter Electric Berlin",
          quote: "The keyword injection was a gamechanger. Customers now find me for terms I never thought of.",
          result: "#1 for 12 keywords",
        },
      ],
    },
    // ValueStackSection
    valueStack: {
      eyebrow: "Your Deliverables",
      headline: "Not Just a Service. A Complete Weapons Arsenal.",
      items: [
        {
          title: "The Core Optimization",
          text: "Complete setup of your Google profile with keyword injection and premium photo uploads.",
          value: "Value: $299",
        },
        {
          title: "The Review Magnet",
          text: "Print-ready design for your counter display with smart-link technology for instant 5-stars.",
          value: "Value: $149",
        },
        {
          title: "The Employee Script",
          text: "Psychological conversation guide: How your employees ask for reviews without being annoying.",
          value: "Value: $99",
        },
        {
          title: "The Ranking Insurance",
          text: "Anti-suspension checklist & guide to keep your profile safely at the top.",
          value: "Value: $79",
        },
      ],
      totalLabel: "Total package value:",
      totalValue: "$626",
      todayPrice: "Today only: $299",
    },
    // OfferSection
    offer: {
      eyebrow: "The Offer",
      headline: "The Irresistible Deal",
      benefitsTitle: "What you get:",
      benefits: [
        "Complete profile optimization (title, description, categories)",
        "Keyword bomb: The 50 highest-revenue search terms in your industry",
        "Psychological image strategy for maximum clicks",
        "5-star automatism setup (QR codes + link strategy)",
        "Anti-spam protection for your reviews",
        "Step-by-step video tutorial",
        "30 days email support",
      ],
      agencyPrice: "Agency standard price:",
      yourPrice: "Your price today:",
      oneTime: "One-time. No hidden costs.",
      ctaButton: "Buy Instant Access",
      bonus: "🎁 BONUS: Order today and get our \"Google Maps Ranking Cheat Sheet\" FREE (Value: $97)",
    },
    // GuaranteeSection
    guarantee: {
      headline: "Ironclad 30-Day Money-Back Guarantee",
      text: "If you don't see a",
      textBold1: "measurable increase in inquiries within 30 days of implementation",
      textMid: ", we will refund",
      textBold2: "the full purchase price",
      textEnd: " upon request. Condition: You have implemented all optimizations according to our instructions and given us the opportunity to make improvements.",
      onlyRisk: "Your only risk: Not taking action.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Frequently Asked Questions (Honestly Answered)",
      items: [
        {
          question: "What happens if it doesn't work?",
          answer: "You get your money back – no discussion. Our 30-day money-back guarantee protects you completely. If you don't see a measurable increase in inquiries after implementation, you send us an email and we refund the full purchase price. You take zero risk.",
        },
        {
          question: "Isn't this just SEO?",
          answer: "No, and that's the crucial difference. Classic SEO agencies sell you months-long contracts for websites. We focus laser-sharp on Google Maps – the place where 86% of all local searches end. This is our specialty, not a side project.",
        },
        {
          question: "Does this work for my industry?",
          answer: "Yes, if you run a local business and want to attract customers from your region. Tradesmen, doctors, restaurants, hairdressers, lawyers, gyms – the system works across industries. The principles of local visibility are universal.",
        },
        {
          question: "How quickly will I see results?",
          answer: "Most customers see initial ranking improvements within 14-21 days. The full effect unfolds after about 4-6 weeks when Google has indexed all changes. And if not? Our guarantee kicks in.",
        },
        {
          question: "Do I need to be tech-savvy?",
          answer: "Not at all. We handle all the technical work. You provide access and follow our simple video tutorial for the 5-star automatism. Anyone can do it – even without prior knowledge.",
        },
        {
          question: "How much time do I need to invest?",
          answer: "Exactly 7 minutes. After booking, you fill out a short form. After that, we take over everything. You don't need to understand technology or write any texts. We do the work – you reap the results.",
        },
        {
          question: "Do I need access to my Google account?",
          answer: "Yes, you grant us temporary access to your Google Business Profile. This is 100% secure – we work according to GDPR standards and you can revoke access at any time. Without this access, we cannot perform the optimizations.",
        },
      ],
    },
    // FinalCTASection
    finalCta: {
      headline: "The question isn't",
      headlineIf: "if",
      headlineMid: ", but",
      headlineWhen: "when",
      headlineEnd: "you act.",
      subheadline: "Every day you wait, customers are calling your competition. You can change that. Today.",
      ctaFull: "Start Local Dominator Now ($299)",
      ctaShort: "Get Started ($299)",
      footer: "30-Day Money-Back Guarantee • One-Time Payment • Instant Access",
    },
    // Footer
    footer: {
      copyright: "© 2025 Local Dominator. All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      terms: "Terms",
      withdrawal: "Right of Withdrawal",
      disclaimer: "This offer is not affiliated with Google™ or Facebook™. These are trademarks of their respective owners.",
    },
    // ExpertSection
    expert: {
      eyebrow: "Your Expert for Local Visibility",
      text: "We are not an anonymous AI company. My team and I specialize in making local service providers visible in Germany, Austria, and Switzerland. We don't work with everyone – only those who want to grow.",
      signature: "– The Local Dominator Team",
    },
    // MobileStickyBar
    mobileBar: {
      spotsLeft: "Only",
      spotsCount: "2 spots",
      spotsFor: "left for",
      cta: "Get it now",
    },
    // ROICalculator
    roiCalculator: {
      eyebrow: "ROI Calculator",
      headline: "Calculate Your Revenue Potential",
      subheadline: "Enter your current numbers and see how much additional revenue you can generate with Local Dominator.",
      inputTitle: "Your Data",
      guestsLabel: "Average Guests per Day",
      avgTicketLabel: "Average Ticket Value",
      reviewsLabel: "Current Google Reviews",
      potentialTitle: "Your Potential",
      beforeLabel: "Current Monthly Revenue",
      afterLabel: "With Local Dominator",
      additionalRevenue: "Additional Yearly Revenue",
      perYear: "per year possible",
      breakeven: "Breakeven after",
      days: "days",
      roi: "Return on Investment",
      cta: "Start now for only $299",
    },
    // Restaurant Marketing
    restaurant: {
      degustation: "Tasting Menu",
      headline: "Local Dominator",
      subtitle: "A curated experience for restaurants that want to be found online.",
      leParcours: "the journey",
      lesExtras: "the extras",
      amuseBouche: {
        title: "Amuse-Bouche",
        name: "Free Analysis",
        description: "A first impression of your digital presence. We analyze your current status and reveal potential.",
        price: "Complimentary",
        duration: "15 Minutes",
        nonBinding: "Non-binding",
      },
      entree: {
        title: "Entrée",
        name: "Website Creation",
        description: "An elegant, mobile-optimized presence. Load time under 2 seconds. Your digital business card.",
        price: "from €250",
      },
      intermezzo: {
        title: "Intermezzo",
        name: "Strategic Marketing Consultation",
        description: "Personal 1:1 consultation with your dedicated marketing expert. Tailored strategies for your restaurant.",
        price: "€59 / hour",
        features: ["Pre-analysis included", "Individual 1:1 session", "Detailed post-report"],
        regularPrice: "Regular €120/h · Now only €59/h",
      },
      platPrincipal: {
        title: "Main Course",
        name: "All-Inclusive Package",
        description: "Everything your restaurant needs digitally. Website, Google Maps, maintenance, and personal support.",
        offerEnds: "Offer ends in",
        chefRecommendation: "Chef's Recommendation",
        cta: "Reserve Now",
        scarcity: "Only 3 spots left this month",
        features: {
          premiumWebsite: "Premium Website Design",
          googleMaps: "Google Maps Optimization",
          mobileMenu: "Mobile Menu",
          support: "Technical Support",
          updates: "Monthly Updates",
          included: "incl.",
        },
      },
      fromages: {
        title: "Cheese Course",
        name: "Bonus Collection",
        description: "Additional resources for your success. Included with main course booking.",
        price: "Complimentary",
        bonuses: [
          { name: "Google Ranking Guide", value: "€49" },
          { name: "Social Media Templates", value: "€79" },
          { name: "SEO Checklist", value: "€29" },
        ],
        totalValue: "Total value:",
        free: "Free",
      },
      dessert: {
        title: "Dessert",
        name: "Satisfaction Guarantee",
        description: "30-day money-back, no questions asked. No risk, only pleasure.",
        riskFree: "100% Risk-Free",
      },
      finalCta: {
        headline: "Ready to Reserve?",
        subtitle: "Secure your place in the digital elite.",
        cta: "Reserve a Table",
        callUs: "Or give us a call",
      },
      footer: {
        taxNote: "Service and taxes included",
        backToMain: "Back to Homepage",
      },
      comingSoon: {
        badge: "Variant",
        headline: "Restaurant Marketing",
        description: "We're working on something special. Coming soon – exclusive marketing solutions for restaurateurs.",
        backButton: "Back to Homepage",
      },
    },
  },
} as const;
