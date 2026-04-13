export type Language = "de" | "en" | "ar";

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
      trustBullets: {
        fixedPrice: "Einmaliger Festpreis",
        noSubscription: "Keine Abo-Falle",
        provenResults: "Nachweisbare Ergebnisse",
      },
    },
    // Ranking Comparison
    ranking: {
      eyebrow: "Echte Resultate",
      headline: "So sehen unsere Ergebnisse aus",
      tagline: "Wir verwandeln deine Standorte in lokale Marktführer.",
      before: "VORHER",
      after: "NACHHER",
      position: "Position",
      visibility: "Sichtbarkeit",
      calls: "Anrufe/Monat",
      beforePosition: "Platz 8-15",
      afterPosition: "Top 3",
      beforeVisibility: "Kaum sichtbar",
      afterVisibility: "Maximale Präsenz",
      beforeCalls: "2-5 Anrufe",
      afterCalls: "30+ Anrufe",
      searchQuery: "Restaurant in deiner Nähe",
      competitor1: "Trattoria Bella Vista",
      competitor2: "Zum Goldenen Löwen",
      competitor3: "Asia Garden",
      yourBusiness: "Dein Geschäft",
      notVisible: "Nicht sichtbar",
      nowTop3: "TOP 1",
      openNow: "Geöffnet",
      moreResults: "weitere Ergebnisse",
      avgImprovement: "Durchschnittliche Verbesserung:",
      moreVisibility: "mehr Sichtbarkeit",
      avgIncrease: "Durchschnittlicher Anstieg:",
      moreCalls: "mehr Anrufe",
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
          stat: "92%",
          statLabel: "aller Klicks gehen an die Top 3",
          bullets: [
            "Wer nicht oben ist, existiert für Kunden nicht",
            "Deine Konkurrenz kassiert deine Anrufe"
          ],
        },
        {
          title: "Bewertungen sind Währung",
          stat: "4.7★",
          statLabel: "Minimum für Vertrauen",
          bullets: [
            "Dein Angebot ist egal ohne Social Proof",
            "Menschen kaufen Vertrauen – nicht Produkte"
          ],
        },
        {
          title: "Geldverbrennung",
          stat: "86%",
          statLabel: "der lokalen Suchen enden auf Maps",
          bullets: [
            "Kostenloser Traffic bleibt komplett ungenutzt",
            "Jeden Tag verschenkst du Neukunden"
          ],
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
          hook: "Wir erraten nicht. Wir wissen.",
          bullets: [
            "Analyse der umsatzstärksten Suchbegriffe deiner Branche",
            "Injektion in Titel, Beschreibung & Metadaten",
            "Google erkennt dich als DIE Autorität"
          ],
          result: "Beispiel: \"Zahnarzt Notdienst\" statt nur \"Zahnarzt\"",
        },
        {
          number: "02",
          title: "Der Psycho-Visuelle Anker",
          subtitle: "(Statt Bilder hochladen)",
          hook: "Menschen kaufen mit den Augen.",
          bullets: [
            "Galerie nach verkaufspsychologischen Mustern strukturiert",
            "Vertrauensaufbau in Millisekunden",
            "Dein Profil wird zum digitalen Schaufenster"
          ],
          result: "Ergebnis: Höhere Klickrate, mehr Anfragen",
        },
        {
          number: "03",
          title: "Der 5-Sterne-Automatismus",
          subtitle: "(Statt Bewertungen sammeln)",
          hook: "Betteln funktioniert nicht. Systeme schon.",
          bullets: [
            "QR-Code und Smart-Link Strategie",
            "Psychologisches Nudging für zufriedene Kunden",
            "Festung aus Social Proof aufbauen"
          ],
          result: "Ergebnis: 5-Sterne Bewertungen auf Autopilot",
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
      includedBadge: "INKL.",
      items: [
        {
          title: "Die Core-Optimierung",
          text: "Komplettes Setup deines Google Profils mit Keyword-Injektion und Premium-Foto-Uploads.",
          value: "299€",
          included: true,
        },
        {
          title: "Der Bewertungs-Magnet",
          text: "Druckfertiges Design für deinen Tresen-Aufsteller mit Smart-Link Technologie für sofortige 5-Sterne.",
          value: "149€",
          included: true,
        },
        {
          title: "Das Mitarbeiter-Skript",
          text: "Psychologischer Gesprächsleitfaden: So fragen deine Mitarbeiter nach Bewertungen, ohne zu nerven.",
          value: "99€",
          included: true,
        },
        {
          title: "Die Ranking-Versicherung",
          text: "Anti-Sperr-Checkliste & Guide, damit dein Profil sicher oben bleibt.",
          value: "79€",
          included: true,
        },
      ],
      totalLabel: "Gesamtwert des Pakets:",
      totalValue: "626€",
      todayPrice: "Heute nur: 299€",
      freeLabel: "GRATIS",
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
        "Schritt-für-Schritt Handbuch für die Implementierung",
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
      subheadline: "Kein Risiko. Nur Ergebnisse.",
      points: [
        {
          title: "30 Tage Geld-zurück",
          description: "Keine messbaren Ergebnisse? Volle Erstattung.",
        },
        {
          title: "Keine Fragen gestellt",
          description: "Eine E-Mail genügt. Kein Kleingedrucktes.",
        },
        {
          title: "100% Risikofrei",
          description: "Du gewinnst oder bekommst dein Geld zurück.",
        },
      ],
      onlyRisk: "Dein einziges Risiko: Nicht zu handeln.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen (ehrlich beantwortet)",
      items: [
        {
          question: "Wie lange dauert es bis zu den Top 3?",
          answer: "Die meisten Kunden sehen erste Verbesserungen innerhalb von 2-4 Wochen. Die vollständige Optimierung zeigt ihre volle Wirkung nach 4-8 Wochen, abhängig von deiner Branche und lokalem Wettbewerb.",
        },
        {
          question: "Für welche Branchen funktioniert das?",
          answer: "Das System funktioniert für alle lokalen Dienstleister: Handwerker, Ärzte, Anwälte, Restaurants, Friseure, Fitnessstudios, Immobilienmakler und mehr. Wenn du lokale Kunden brauchst, ist Local Dominator für dich.",
        },
        {
          question: "Was genau ist im Festpreis enthalten?",
          answer: "Alles: Komplette Profil-Optimierung, Keyword-Analyse, Bilder-Strategie, Bewertungs-System Setup, Anti-Spam Schutz, Implementierungs-Handbuch und 30 Tage E-Mail Support. Keine versteckten Kosten, keine monatlichen Gebühren.",
        },
        {
          question: "Was passiert, wenn es nicht funktioniert?",
          answer: "Du bekommst dein Geld zurück – ohne Diskussion. Unsere 30-Tage Geld-zurück-Garantie schützt dich vollständig. Wenn du nach Umsetzung keine messbare Steigerung deiner Anfragen siehst, schreibst du uns eine E-Mail und wir erstatten den vollen Kaufpreis. Du gehst also kein Risiko ein.",
        },
        {
          question: "Ist das nicht einfach SEO?",
          answer: "Nein, und das ist der entscheidende Unterschied. Klassische SEO-Agenturen verkaufen dir monatelange Verträge für Websites. Wir fokussieren uns laser-scharf auf Google Maps – den Ort, wo 86% aller lokalen Suchanfragen enden. Das ist unser Spezialgebiet, nicht ein Nebenprojekt.",
        },
        {
          question: "Muss ich technisch versiert sein?",
          answer: "Überhaupt nicht. Wir übernehmen die gesamte technische Arbeit. Du gibst uns den Zugang und folgst unserem einfachen Handbuch für den 5-Sterne-Automatismus. Das kann wirklich jeder – auch ohne Vorkenntnisse.",
        },
        {
          question: "Wie viel Zeit muss ich investieren?",
          answer: "Genau 7 Minuten. Nach der Buchung füllst du ein kurzes Formular aus. Danach übernehmen wir alles. Du musst keine Technik verstehen und keine Texte schreiben. Wir erledigen die Arbeit – du erntest die Ergebnisse.",
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
      headline: "Berechne deinen zusätzlichen GEWINN",
      subheadline: "Keine Fantasie-Zahlen. Realistische Berechnung basierend auf Branchendaten.",
      inputTitle: "Deine Daten",
      scenarioLabel: "Berechnungs-Szenario",
      guestsLabel: "Durchschnittliche Gäste pro Tag",
      avgTicketLabel: "Durchschnittlicher Bon-Wert",
      reviewsLabel: "Aktuelle Google Bewertungen",
      potentialTitle: "Dein Potenzial",
      beforeLabel: "Aktueller Monatsumsatz",
      afterLabel: "Mit Local Dominator",
      additionalProfit: "Dein zusätzlicher GEWINN",
      perYear: "pro Jahr (netto)",
      breakeven: "Investition amortisiert nach",
      breakevenFast: "In unter einem Monat zurückverdient!",
      days: "Tagen",
      roi: "Return on Investment",
      profitMarginLabel: "Branchenmarge",
      costOfInaction: "Kosten des Nichtstuns",
      weeklyLoss: "Diese Woche entgeht dir",
      waitingCost: "Jeden Tag den du wartest, verlierst du Gewinn.",
      alternativesTitle: "Was kosten Alternativen?",
      yearlyAlternative: "Pro Jahr",
      oneTime: "einmalig",
      conservativeBadge: "Konservative Berechnung basierend auf durchschnittlichen Branchenwerten. Echte Ergebnisse können höher ausfallen.",
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
    // Add-Ons Section
    addOns: {
      eyebrow: "Maximiere deine Ergebnisse",
      headline: "Optionale Upgrades",
      selected: "ausgewählt",
      items: {
        express: {
          title: "Express-Setup",
          description: "24h statt 48h Lieferzeit",
        },
        competitor: {
          title: "Konkurrenzanalyse",
          description: "Detaillierter Wettbewerbsreport",
        },
        premium_texts: {
          title: "Premium Texte",
          description: "SEO-optimierte Langbeschreibung",
        },
        photo_pack: {
          title: "Foto-Optimierung Pro",
          description: "15 zusätzliche optimierte Bilder",
        },
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
      trustBullets: {
        fixedPrice: "One-time fixed price",
        noSubscription: "No subscription trap",
        provenResults: "Proven results",
      },
    },
    // Ranking Comparison
    ranking: {
      eyebrow: "Real Results",
      headline: "This is what our results look like",
      tagline: "We transform your locations into local market leaders.",
      before: "BEFORE",
      after: "AFTER",
      position: "Position",
      visibility: "Visibility",
      calls: "Calls/Month",
      beforePosition: "Position 8-15",
      afterPosition: "Top 3",
      beforeVisibility: "Barely visible",
      afterVisibility: "Maximum presence",
      beforeCalls: "2-5 calls",
      afterCalls: "30+ calls",
      searchQuery: "Restaurant near you",
      competitor1: "Trattoria Bella Vista",
      competitor2: "The Golden Lion",
      competitor3: "Asia Garden",
      yourBusiness: "Your Business",
      notVisible: "Not visible",
      nowTop3: "TOP 1",
      openNow: "Open",
      moreResults: "more results",
      avgImprovement: "Average improvement:",
      moreVisibility: "more visibility",
      avgIncrease: "Average increase:",
      moreCalls: "more calls",
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
          stat: "92%",
          statLabel: "of clicks go to the Top 3",
          bullets: [
            "If you're not on top, you don't exist for customers",
            "Your competition is stealing your calls"
          ],
        },
        {
          title: "Reviews are Currency",
          stat: "4.7★",
          statLabel: "minimum for trust",
          bullets: [
            "Your offer doesn't matter without social proof",
            "People buy trust – not products"
          ],
        },
        {
          title: "Burning Money",
          stat: "86%",
          statLabel: "of local searches end on Maps",
          bullets: [
            "Free organic traffic is completely ignored",
            "You're losing new customers every day"
          ],
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
          hook: "We don't guess. We know.",
          bullets: [
            "Analysis of highest-revenue search terms in your industry",
            "Injection into title, description & metadata",
            "Google recognizes you as THE authority"
          ],
          result: "Example: \"Emergency Dentist\" instead of just \"Dentist\"",
        },
        {
          number: "02",
          title: "The Psycho-Visual Anchor",
          subtitle: "(Instead of uploading images)",
          hook: "People buy with their eyes.",
          bullets: [
            "Gallery structured by sales psychology patterns",
            "Trust built in milliseconds",
            "Your profile becomes a digital storefront"
          ],
          result: "Result: Higher click rate, more inquiries",
        },
        {
          number: "03",
          title: "The 5-Star Automatism",
          subtitle: "(Instead of collecting reviews)",
          hook: "Begging doesn't work. Systems do.",
          bullets: [
            "QR code and smart-link strategy",
            "Psychological nudging for satisfied customers",
            "Build a fortress of social proof"
          ],
          result: "Result: 5-star reviews on autopilot",
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
      includedBadge: "INCL.",
      items: [
        {
          title: "The Core Optimization",
          text: "Complete setup of your Google profile with keyword injection and premium photo uploads.",
          value: "$299",
          included: true,
        },
        {
          title: "The Review Magnet",
          text: "Print-ready design for your counter display with smart-link technology for instant 5-stars.",
          value: "$149",
          included: true,
        },
        {
          title: "The Employee Script",
          text: "Psychological conversation guide: How your employees ask for reviews without being annoying.",
          value: "$99",
          included: true,
        },
        {
          title: "The Ranking Insurance",
          text: "Anti-suspension checklist & guide to keep your profile safely at the top.",
          value: "$79",
          included: true,
        },
      ],
      totalLabel: "Total package value:",
      totalValue: "$626",
      todayPrice: "Today only: $299",
      freeLabel: "FREE",
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
      subheadline: "No risk. Only results.",
      points: [
        {
          title: "30-Day Money-Back",
          description: "No measurable results? Full refund.",
        },
        {
          title: "No Questions Asked",
          description: "One email is enough. No fine print.",
        },
        {
          title: "100% Risk-Free",
          description: "You win or you get your money back.",
        },
      ],
      onlyRisk: "Your only risk: Not taking action.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Frequently Asked Questions (Honestly Answered)",
      items: [
        {
          question: "How long does it take to reach the Top 3?",
          answer: "Most customers see initial improvements within 2-4 weeks. The full optimization shows its complete effect after 4-8 weeks, depending on your industry and local competition.",
        },
        {
          question: "Which industries does this work for?",
          answer: "The system works for all local service providers: tradesmen, doctors, lawyers, restaurants, hairdressers, gyms, real estate agents, and more. If you need local customers, Local Dominator is for you.",
        },
        {
          question: "What exactly is included in the fixed price?",
          answer: "Everything: Complete profile optimization, keyword analysis, image strategy, review system setup, anti-spam protection, video tutorial, and 30 days email support. No hidden costs, no monthly fees.",
        },
        {
          question: "What happens if it doesn't work?",
          answer: "You get your money back – no discussion. Our 30-day money-back guarantee protects you completely. If you don't see a measurable increase in inquiries after implementation, you send us an email and we refund the full purchase price. You take zero risk.",
        },
        {
          question: "Isn't this just SEO?",
          answer: "No, and that's the crucial difference. Classic SEO agencies sell you months-long contracts for websites. We focus laser-sharp on Google Maps – the place where 86% of all local searches end. This is our specialty, not a side project.",
        },
        {
          question: "Do I need to be tech-savvy?",
          answer: "Not at all. We handle all the technical work. You provide access and follow our simple video tutorial for the 5-star automatism. Anyone can do it – even without prior knowledge.",
        },
        {
          question: "How much time do I need to invest?",
          answer: "Exactly 7 minutes. After booking, you fill out a short form. After that, we take over everything. You don't need to understand technology or write any texts. We do the work – you reap the results.",
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
      headline: "Calculate Your Additional PROFIT",
      subheadline: "No fantasy numbers. Realistic calculation based on industry data.",
      inputTitle: "Your Data",
      scenarioLabel: "Calculation Scenario",
      guestsLabel: "Average Guests per Day",
      avgTicketLabel: "Average Ticket Value",
      reviewsLabel: "Current Google Reviews",
      potentialTitle: "Your Potential",
      beforeLabel: "Current Monthly Revenue",
      afterLabel: "With Local Dominator",
      additionalProfit: "Your Additional PROFIT",
      perYear: "per year (net)",
      breakeven: "Investment pays back after",
      breakevenFast: "Paid back in less than a month!",
      days: "days",
      roi: "Return on Investment",
      profitMarginLabel: "Industry Margin",
      costOfInaction: "Cost of Inaction",
      weeklyLoss: "This week you're missing out on",
      waitingCost: "Every day you wait, you lose profit.",
      alternativesTitle: "What do alternatives cost?",
      yearlyAlternative: "Per year",
      oneTime: "one-time",
      conservativeBadge: "Conservative calculation based on average industry values. Actual results may be higher.",
      cta: "Start now for only €299",
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
    // Add-Ons Section
    addOns: {
      eyebrow: "Maximize your results",
      headline: "Optional Upgrades",
      selected: "selected",
      items: {
        express: {
          title: "Express Setup",
          description: "24h instead of 48h delivery",
        },
        competitor: {
          title: "Competitor Analysis",
          description: "Detailed competitor report",
        },
        premium_texts: {
          title: "Premium Copy",
          description: "SEO-optimized long description",
        },
        photo_pack: {
          title: "Photo Optimization Pro",
          description: "15 additional optimized images",
        },
      },
    },
  },
  ar: {
    // AnnouncementBar
    announcement: {
      warning: "⚠️ تنبيه: نقبل فقط 3 مزودي خدمة لكل مدينة لتجنب تعارض المنافسة.",
      checkAvailability: "تحقق من توفرك الآن.",
    },
    // HeroSection
    hero: {
      eyebrow: "⚠️ انتباه لأصحاب الأعمال في منطقتك ⚠️",
      headline: "بينما تقرأ هذا، عميلك القادم يتصل بـ",
      headlineHighlight: "منافسك",
      headlineEnd: ".",
      subheadline: "أنت",
      invisible: "غير مرئي",
      subheadlineMid: "على خرائط Google. منافسوك في المقدمة.",
      stopIt: "كفى.",
      subheadlineEnd: "نضعك في المراكز الثلاثة الأولى – بسعر ثابت.",
      ctaFull: "احجز هيمنتك الآن ($329)",
      ctaShort: "ابدأ الآن ($329)",
      guarantee: "ضمان استرداد الأموال 100% • بدون مخاطر",
      urgency: "🔥 فقط",
      spotsLeft: "7 أماكن",
      urgencyEnd: "متبقية هذا الشهر",
      trustBullets: {
        fixedPrice: "سعر ثابت لمرة واحدة",
        noSubscription: "بدون فخ الاشتراكات",
        provenResults: "نتائج مثبتة",
      },
    },
    // Ranking Comparison
    ranking: {
      eyebrow: "نتائج حقيقية",
      headline: "هكذا تبدو نتائجنا",
      tagline: "نحوّل مواقعك إلى رواد السوق المحلي.",
      before: "قبل",
      after: "بعد",
      position: "الترتيب",
      visibility: "الظهور",
      calls: "المكالمات/الشهر",
      beforePosition: "المركز 8-15",
      afterPosition: "المراكز الثلاثة الأولى",
      beforeVisibility: "بالكاد مرئي",
      afterVisibility: "أقصى حضور",
      beforeCalls: "2-5 مكالمات",
      afterCalls: "+30 مكالمة",
      searchQuery: "مطعم بالقرب منك",
      competitor1: "تراتوريا بيلا فيستا",
      competitor2: "الأسد الذهبي",
      competitor3: "حديقة آسيا",
      yourBusiness: "نشاطك التجاري",
      notVisible: "غير مرئي",
      nowTop3: "المركز الأول",
      openNow: "مفتوح",
      moreResults: "المزيد من النتائج",
      avgImprovement: "متوسط التحسن:",
      moreVisibility: "ظهور أكثر",
      avgIncrease: "متوسط الزيادة:",
      moreCalls: "مكالمات أكثر",
    },
    // TrustBadges
    trust: {
      securePayment: "دفع آمن عبر:",
    },
    // PainSection
    pain: {
      headline: "الحقيقة القاسية عن الأعمال المحلية:",
      subheadline: "(التي لا يخبرك بها أحد لأن الجميع يستفيد من بقائك غير مرئي)",
      bottomPunch: "كم عميلاً خسرت اليوم؟",
      points: [
        {
          title: "المركز الرابع هو المقبرة",
          stat: "92%",
          statLabel: "من النقرات تذهب للمراكز الثلاثة الأولى",
          bullets: [
            "إذا لم تكن في المقدمة، فأنت غير موجود للعملاء",
            "منافسوك يسرقون مكالماتك"
          ],
        },
        {
          title: "التقييمات هي العملة",
          stat: "4.7★",
          statLabel: "الحد الأدنى للثقة",
          bullets: [
            "عرضك لا يهم بدون إثبات اجتماعي",
            "الناس يشترون الثقة – لا المنتجات"
          ],
        },
        {
          title: "حرق الأموال",
          stat: "86%",
          statLabel: "من عمليات البحث المحلية تنتهي في الخرائط",
          bullets: [
            "حركة مرور مجانية تُهدر بالكامل",
            "تخسر عملاء جدد كل يوم"
          ],
        },
      ],
    },
    // ComparisonTable
    comparison: {
      headline: "لماذا",
      headlineHighlight: "Local Dominator",
      headlineEnd: "مختلف",
      headers: {
        agencies: "وكالات أخرى",
        diy: "افعلها بنفسك",
        localDominator: "Local Dominator",
      },
      bestseller: "الأكثر مبيعاً",
      rows: {
        cost: { label: "• التكلفة:", agency: "+$1,650", diy: "وقت حياتك", local: "$329 سعر ثابت" },
        duration: { label: "• المدة:", agency: "أشهر", diy: "للأبد", local: "48 ساعة" },
        guarantee: { label: "• الضمان:", agency: "لا يوجد", diy: "لا يوجد", local: "استرداد 100%" },
        result: { label: "• النتيجة:", agency: "ربما", diy: "إحباط", local: "مراكز متقدمة" },
      },
    },
    // SolutionSection
    solution: {
      eyebrow: "الحل",
      headline: "نظام المراحل الثلاث للهيمنة المحلية",
      subheadline: "بدون وعود فارغة. بدون كلمات رنانة. فقط نظام مثبت يعمل.",
      phases: [
        {
          number: "01",
          title: "حقن الكلمات المفتاحية",
          subtitle: "(بدلاً من SEO)",
          hook: "لا نخمن. نحن نعرف.",
          bullets: [
            "تحليل أكثر مصطلحات البحث ربحية في مجالك",
            "حقنها في العنوان والوصف والبيانات الوصفية",
            "Google يتعرف عليك كالمرجع الأول"
          ],
          result: "مثال: \"طبيب أسنان طوارئ\" بدلاً من \"طبيب أسنان\" فقط",
        },
        {
          number: "02",
          title: "المرساة البصرية النفسية",
          subtitle: "(بدلاً من رفع الصور فقط)",
          hook: "الناس يشترون بأعينهم.",
          bullets: [
            "معرض منظم وفق أنماط علم نفس المبيعات",
            "بناء الثقة في أجزاء من الثانية",
            "ملفك يصبح واجهة عرض رقمية"
          ],
          result: "النتيجة: معدل نقر أعلى، استفسارات أكثر",
        },
        {
          number: "03",
          title: "آلية النجوم الخمس",
          subtitle: "(بدلاً من جمع التقييمات)",
          hook: "التسول لا يعمل. الأنظمة تعمل.",
          bullets: [
            "استراتيجية رمز QR والرابط الذكي",
            "تحفيز نفسي للعملاء الراضين",
            "بناء حصن من الإثبات الاجتماعي"
          ],
          result: "النتيجة: تقييمات 5 نجوم تلقائياً",
        },
      ],
    },
    // TestimonialsSection
    testimonials: {
      eyebrow: "نتائج حقيقية",
      headline: "ماذا يقول عملاؤنا",
      subheadline: "بدون وعود فارغة – هؤلاء رواد أعمال حقيقيون حققوا نتائج مذهلة مع Local Dominator.",
      trustIndicator: "+100 رائد أعمال راضٍ",
      items: [
        {
          name: "مايكل باور",
          business: "خدمات أقفال ميونخ",
          quote: "كنت في الصفحة الثانية، الآن في المركز الأول. في 3 أسابيع حصلت على 47 مكالمة جديدة. النظام يعمل ببساطة.",
          result: "+47 مكالمة/شهر",
        },
        {
          name: "ساندرا كيلر",
          business: "عيادة أسنان هامبورغ",
          quote: "كنا متشككين، لكن النتائج تتحدث عن نفسها. 23 مريضاً جديداً في الشهر الأول – فقط من خرائط Google.",
          result: "+23 مريض جديد",
        },
        {
          name: "توماس ريختر",
          business: "كهرباء ريختر برلين",
          quote: "حقن الكلمات المفتاحية كان نقطة تحول. العملاء يجدونني الآن بمصطلحات لم أفكر فيها أبداً.",
          result: "المركز الأول لـ 12 كلمة مفتاحية",
        },
      ],
    },
    // ValueStackSection
    valueStack: {
      eyebrow: "ما ستحصل عليه",
      headline: "ليست مجرد خدمة. ترسانة أسلحة كاملة.",
      includedBadge: "مشمول",
      items: [
        {
          title: "التحسين الأساسي",
          text: "إعداد كامل لملفك على Google مع حقن الكلمات المفتاحية ورفع صور احترافية.",
          value: "$329",
          included: true,
        },
        {
          title: "مغناطيس التقييمات",
          text: "تصميم جاهز للطباعة لحامل المنضدة مع تقنية الرابط الذكي لنجوم خمس فورية.",
          value: "$164",
          included: true,
        },
        {
          title: "سيناريو الموظفين",
          text: "دليل محادثة نفسي: كيف يطلب موظفوك التقييمات دون إزعاج.",
          value: "$109",
          included: true,
        },
        {
          title: "تأمين الترتيب",
          text: "قائمة مراجعة ودليل لحماية ملفك من الحظر وإبقائه في المقدمة.",
          value: "$87",
          included: true,
        },
      ],
      totalLabel: "القيمة الإجمالية للحزمة:",
      totalValue: "$689",
      todayPrice: "اليوم فقط: $329",
      freeLabel: "مجاناً",
    },
    // OfferSection
    offer: {
      eyebrow: "العرض",
      headline: "الصفقة التي لا تُقاوم",
      benefitsTitle: "ما ستحصل عليه:",
      benefits: [
        "تحسين كامل للملف (العنوان، الوصف، الفئات)",
        "قنبلة الكلمات المفتاحية: أكثر 50 مصطلح بحث ربحية في مجالك",
        "استراتيجية صور نفسية لأقصى نقرات",
        "إعداد آلية النجوم الخمس (رموز QR + استراتيجية الروابط)",
        "حماية من الرسائل المزعجة لتقييماتك",
        "دليل خطوة بخطوة للتنفيذ",
        "30 يوم دعم عبر البريد الإلكتروني",
      ],
      agencyPrice: "السعر المعتاد للوكالات:",
      yourPrice: "سعرك اليوم:",
      oneTime: "لمرة واحدة. بدون تكاليف مخفية.",
      ctaButton: "اشترِ الوصول الفوري",
      bonus: "🎁 مكافأة: اطلب اليوم واحصل على \"ورقة غش ترتيب خرائط Google\" مجاناً (القيمة: $107)",
    },
    // GuaranteeSection
    guarantee: {
      headline: "ضمان استرداد الأموال لمدة 30 يوماً",
      subheadline: "بدون مخاطر. فقط نتائج.",
      points: [
        {
          title: "استرداد خلال 30 يوم",
          description: "لا نتائج قابلة للقياس؟ استرداد كامل.",
        },
        {
          title: "بدون أسئلة",
          description: "بريد إلكتروني واحد يكفي. بدون شروط مخفية.",
        },
        {
          title: "بدون مخاطر 100%",
          description: "إما تربح أو تسترد أموالك.",
        },
      ],
      onlyRisk: "مخاطرتك الوحيدة: عدم التصرف.",
    },
    // FAQSection
    faq: {
      eyebrow: "أسئلة مهمة",
      headline: "كل ما تحتاج معرفته قبل اتخاذ القرار",
      items: [
        {
          question: "ماذا لو لم أحصل على نتائج؟ هل سأخسر أموالي؟",
          answer: "مستحيل أن تخسر. لديك ضمان استرداد كامل لمدة 30 يوماً. إذا لم ترَ تحسناً ملموساً في ترتيبك على خرائط Google، ترسل لنا بريداً إلكترونياً واحداً ونعيد لك كل دولار. بدون شروط، بدون أسئلة، بدون تعقيدات. المخاطرة الوحيدة هي أن تبقى غير مرئي.",
        },
        {
          question: "متى سأبدأ برؤية مكالمات وعملاء جدد؟",
          answer: "أغلب عملائنا يلاحظون زيادة في المكالمات خلال أول 2-4 أسابيع. التأثير الكامل يظهر بعد 4-8 أسابيع. في المتوسط، عملاؤنا يتقدمون 8 مراكز في نتائج البحث المحلي – وهذا يعني عشرات المكالمات الإضافية شهرياً.",
        },
        {
          question: "$329 فقط؟ ما الفخ؟ أين التكاليف المخفية؟",
          answer: "لا يوجد فخ ولا تكاليف مخفية. $329 هو السعر الكامل والنهائي – دفعة واحدة فقط. لا اشتراكات شهرية، لا رسوم إضافية، لا مفاجآت. بينما الوكالات تطلب $1,500+ شهرياً بعقود طويلة، نحن نقدم نفس النتائج بسعر ثابت لمرة واحدة.",
        },
        {
          question: "هل يعمل هذا في مجالي ومنطقتي؟",
          answer: "نعم. النظام مصمم لجميع مقدمي الخدمات المحلية بدون استثناء: أطباء أسنان، محامون، مطاعم، صالونات تجميل، حرفيون، عقارات، صالات رياضية وأكثر. إذا كان لديك عملاء محليون يبحثون عنك على Google، فهذا النظام مصنوع لك.",
        },
        {
          question: "ما الفرق بينكم وبين وكالة SEO تقليدية؟",
          answer: "الفرق جوهري. وكالات SEO تبيعك عقوداً لأشهر وتعمل على موقعك الإلكتروني. نحن نركز حصرياً على خرائط Google – حيث تنتهي 86% من عمليات البحث المحلية. نتيجة أسرع، تكلفة أقل بـ 10 مرات، وبدون التزام شهري.",
        },
        {
          question: "هل أحتاج أي خبرة تقنية أو وقت كثير؟",
          answer: "لا تحتاج أي خبرة تقنية إطلاقاً. كل ما تحتاجه هو 7 دقائق لملء نموذج بسيط بعد الشراء. بعدها نتولى نحن كل شيء: التحسين، الكلمات المفتاحية، الصور، واستراتيجية التقييمات. أنت تسترخي ونحن نعمل.",
        },
        {
          question: "لماذا هذا السعر المنخفض؟ ما السر؟",
          answer: "لأننا لا نوظف فرق مبيعات باهظة ولا نستأجر مكاتب فاخرة. أنظمتنا مؤتمتة وفعالة. نفضل أن نقدم قيمة حقيقية بسعر عادل بدلاً من أن نبالغ في الأسعار مثل الوكالات التقليدية. هدفنا: عميل سعيد يوصي بنا.",
        },
      ],
    },
    // FinalCTASection
    finalCta: {
      headline: "السؤال ليس",
      headlineIf: "هل",
      headlineMid: "، بل",
      headlineWhen: "متى",
      headlineEnd: "ستتصرف.",
      subheadline: "كل يوم تنتظره، يتصل العملاء بمنافسيك. يمكنك تغيير ذلك. اليوم.",
      ctaFull: "ابدأ Local Dominator الآن ($329)",
      ctaShort: "ابدأ الآن ($329)",
      footer: "ضمان استرداد 30 يوم • دفعة واحدة • وصول فوري",
    },
    // Footer
    footer: {
      copyright: "© 2025 Local Dominator. جميع الحقوق محفوظة.",
      imprint: "بيانات الناشر",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      withdrawal: "حق الانسحاب",
      disclaimer: "هذا العرض ليس مرتبطاً بـ Google™ أو Facebook™. هذه علامات تجارية لأصحابها.",
    },
    // ExpertSection
    expert: {
      eyebrow: "خبيرك في الظهور المحلي",
      text: "نحن لسنا شركة ذكاء اصطناعي مجهولة. فريقي وأنا متخصصون في جعل مقدمي الخدمات المحلية مرئيين. لا نعمل مع الجميع – فقط مع من يريدون النمو.",
      signature: "– فريق Local Dominator",
    },
    // MobileStickyBar
    mobileBar: {
      spotsLeft: "فقط",
      spotsCount: "مكانان",
      spotsFor: "متبقيان لـ",
      cta: "احجز الآن",
    },
    // ROICalculator
    roiCalculator: {
      eyebrow: "حاسبة العائد",
      headline: "احسب أرباحك الإضافية",
      subheadline: "أرقام واقعية مبنية على بيانات السوق.",
      inputTitle: "بياناتك",
      scenarioLabel: "سيناريو الحساب",
      guestsLabel: "متوسط الضيوف يومياً",
      avgTicketLabel: "متوسط قيمة الفاتورة",
      reviewsLabel: "تقييمات Google الحالية",
      potentialTitle: "إمكانياتك",
      beforeLabel: "الإيرادات الشهرية الحالية",
      afterLabel: "مع Local Dominator",
      additionalProfit: "أرباحك الإضافية",
      perYear: "سنوياً (صافي)",
      breakeven: "الاستثمار يُسترد بعد",
      breakevenFast: "تُسترد في أقل من شهر!",
      days: "أيام",
      roi: "العائد على الاستثمار",
      profitMarginLabel: "هامش الصناعة",
      costOfInaction: "تكلفة عدم التصرف",
      weeklyLoss: "هذا الأسبوع تفوتك",
      waitingCost: "كل يوم تنتظره، تخسر أرباحاً.",
      alternativesTitle: "كم تكلف البدائل؟",
      yearlyAlternative: "سنوياً",
      oneTime: "لمرة واحدة",
      conservativeBadge: "حساب متحفظ مبني على متوسطات الصناعة. النتائج الفعلية قد تكون أعلى.",
      cta: "ابدأ الآن بـ $329 فقط",
    },
    // Restaurant Marketing
    restaurant: {
      degustation: "قائمة التذوق",
      headline: "Local Dominator",
      subtitle: "تجربة مميزة للمطاعم التي تريد أن تُوجد على الإنترنت.",
      leParcours: "الرحلة",
      lesExtras: "الإضافات",
      amuseBouche: {
        title: "المقبلات",
        name: "تحليل مجاني",
        description: "انطباع أول عن حضورك الرقمي. نحلل وضعك الحالي ونكشف الإمكانيات.",
        price: "مجاناً",
        duration: "15 دقيقة",
        nonBinding: "غير ملزم",
      },
      entree: {
        title: "المدخل",
        name: "إنشاء موقع إلكتروني",
        description: "حضور أنيق محسّن للجوال. وقت تحميل أقل من ثانيتين. بطاقة عملك الرقمية.",
        price: "من $275",
      },
      intermezzo: {
        title: "استراحة",
        name: "استشارة تسويقية استراتيجية",
        description: "استشارة شخصية 1:1 مع خبير التسويق المخصص لك. استراتيجيات مصممة لمطعمك.",
        price: "$65 / ساعة",
        features: ["تحليل مسبق مشمول", "جلسة فردية 1:1", "تقرير مفصل"],
        regularPrice: "العادي $132/س · الآن فقط $65/س",
      },
      platPrincipal: {
        title: "الطبق الرئيسي",
        name: "الحزمة الشاملة",
        description: "كل ما يحتاجه مطعمك رقمياً. موقع، خرائط Google، صيانة ودعم شخصي.",
        offerEnds: "العرض ينتهي في",
        chefRecommendation: "توصية الشيف",
        cta: "احجز الآن",
        scarcity: "فقط 3 أماكن متبقية هذا الشهر",
        features: {
          premiumWebsite: "تصميم موقع متميز",
          googleMaps: "تحسين خرائط Google",
          mobileMenu: "قائمة طعام للجوال",
          support: "دعم تقني",
          updates: "تحديثات شهرية",
          included: "مشمول",
        },
      },
      fromages: {
        title: "الأجبان",
        name: "مجموعة المكافآت",
        description: "موارد إضافية لنجاحك. مشمولة مع حجز الطبق الرئيسي.",
        price: "مجاناً",
        bonuses: [
          { name: "دليل ترتيب Google", value: "$54" },
          { name: "قوالب وسائل التواصل", value: "$87" },
          { name: "قائمة مراجعة SEO", value: "$32" },
        ],
        totalValue: "القيمة الإجمالية:",
        free: "مجاناً",
      },
      dessert: {
        title: "الحلوى",
        name: "ضمان الرضا",
        description: "استرداد خلال 30 يوماً بدون شروط. بدون مخاطر.",
        riskFree: "بدون مخاطر 100%",
      },
      finalCta: {
        headline: "مستعد للحجز؟",
        subtitle: "احجز مكانك في النخبة الرقمية.",
        cta: "احجز طاولة",
        callUs: "أو اتصل بنا",
      },
      footer: {
        taxNote: "الخدمة والضرائب مشمولة",
        backToMain: "العودة للصفحة الرئيسية",
      },
      comingSoon: {
        badge: "نسخة",
        headline: "تسويق المطاعم",
        description: "نعمل على شيء مميز. قريباً – حلول تسويقية حصرية لأصحاب المطاعم.",
        backButton: "العودة للصفحة الرئيسية",
      },
    },
    // Add-Ons Section
    addOns: {
      eyebrow: "عزز نتائجك",
      headline: "ترقيات اختيارية",
      selected: "مختار",
      items: {
        express: {
          title: "إعداد سريع",
          description: "تسليم خلال 24 ساعة بدلاً من 48",
        },
        competitor: {
          title: "تحليل المنافسين",
          description: "تقرير تنافسي مفصل",
        },
        premium_texts: {
          title: "نصوص متميزة",
          description: "وصف طويل محسّن لمحركات البحث",
        },
        photo_pack: {
          title: "حزمة الصور الاحترافية",
          description: "15 صورة إضافية محسّنة",
        },
      },
    },
  },
} as const;
