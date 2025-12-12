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
        cost: { label: "Kosten", agency: "1.500€+", diy: "Deine Lebenszeit", local: "299€ Festpreis" },
        duration: { label: "Dauer", agency: "Monate", diy: "Ewig", local: "48 Stunden" },
        guarantee: { label: "Garantie", agency: "Keine", diy: "Keine", local: "100% Geld-zurück" },
        result: { label: "Ergebnis", agency: "Vielleicht", diy: "Frust", local: "Top-Rankings" },
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
      text: "Wenn du nicht in",
      textBold1: "30 Tagen mehr Anrufe",
      textMid: "bekommst, erstatten wir",
      textBold2: "jeden einzelnen Cent",
      textEnd: ". Kein Kleingedrucktes. Kein Risiko für dich.",
      onlyRisk: "Dein einziges Risiko ist, nichts zu tun.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen (ehrlich beantwortet)",
      items: [
        {
          question: "Brauche ich Zugang zu meinem Google-Konto?",
          answer: "Ja, du gewährst uns temporären Zugang zu deinem Google Business Profil. Das ist 100% sicher – wir arbeiten nach DSGVO-Standards und du kannst den Zugang jederzeit widerrufen. Ohne Zugang können wir die Optimierungen nicht durchführen.",
        },
        {
          question: "Funktioniert das für meine Branche?",
          answer: "Ja, wenn du ein lokales Geschäft betreibst und Kunden aus deiner Region anziehen willst. Egal ob Handwerker, Arztpraxis, Restaurant, Friseur, Anwalt oder Fitnessstudio – das System funktioniert branchenübergreifend.",
        },
        {
          question: "Wie schnell sehe ich Ergebnisse?",
          answer: "Die meisten Kunden sehen erste Ranking-Verbesserungen innerhalb von 14-21 Tagen. Die volle Wirkung entfaltet sich nach etwa 4-6 Wochen, wenn Google alle Änderungen indexiert hat.",
        },
        {
          question: "Was passiert, wenn es nicht funktioniert?",
          answer: "Dann bekommst du dein Geld zurück. Punkt. Wir haben eine 30-Tage Geld-zurück-Garantie ohne Wenn und Aber. Wenn du nicht mehr Anrufe bekommst, schreibst du uns eine E-Mail und wir erstatten dir den vollen Betrag.",
        },
        {
          question: "Ist das nicht einfach SEO?",
          answer: "Nein. Klassische SEO-Agenturen verkaufen dir monatelange Verträge für Websites. Wir fokussieren uns laser-scharf auf Google Maps – den Ort, wo 86% aller lokalen Suchanfragen enden. Unterschiedliches Spielfeld, unterschiedliche Regeln.",
        },
        {
          question: "Muss ich technisch versiert sein?",
          answer: "Überhaupt nicht. Wir machen die gesamte technische Arbeit. Du musst nur den Zugang bereitstellen und unserer Video-Anleitung für den 5-Sterne-Automatismus folgen. Das kann wirklich jeder.",
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
      copyright: "© 2024 Local Dominator. Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
    },
    // MobileStickyBar
    mobileBar: {
      spotsLeft: "Nur noch",
      spotsCount: "2 Plätze",
      spotsFor: "für",
      cta: "Jetzt sichern",
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
        cost: { label: "Cost", agency: "$1,500+", diy: "Your lifetime", local: "$299 fixed" },
        duration: { label: "Duration", agency: "Months", diy: "Forever", local: "48 hours" },
        guarantee: { label: "Guarantee", agency: "None", diy: "None", local: "100% money-back" },
        result: { label: "Result", agency: "Maybe", diy: "Frustration", local: "Top Rankings" },
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
      text: "If you don't get",
      textBold1: "more calls in 30 days",
      textMid: ", we refund",
      textBold2: "every single cent",
      textEnd: ". No fine print. Zero risk for you.",
      onlyRisk: "Your only risk is doing nothing.",
    },
    // FAQSection
    faq: {
      eyebrow: "FAQ",
      headline: "Frequently Asked Questions (Honestly Answered)",
      items: [
        {
          question: "Do I need access to my Google account?",
          answer: "Yes, you grant us temporary access to your Google Business Profile. This is 100% secure – we work according to GDPR standards and you can revoke access at any time. Without access, we cannot perform the optimizations.",
        },
        {
          question: "Does this work for my industry?",
          answer: "Yes, if you run a local business and want to attract customers from your region. Whether tradesman, medical practice, restaurant, hairdresser, lawyer, or gym – the system works across industries.",
        },
        {
          question: "How quickly will I see results?",
          answer: "Most customers see initial ranking improvements within 14-21 days. The full effect unfolds after about 4-6 weeks when Google has indexed all changes.",
        },
        {
          question: "What happens if it doesn't work?",
          answer: "Then you get your money back. Period. We have a 30-day money-back guarantee with no ifs or buts. If you don't get more calls, you send us an email and we refund the full amount.",
        },
        {
          question: "Isn't this just SEO?",
          answer: "No. Classic SEO agencies sell you months-long contracts for websites. We focus laser-sharp on Google Maps – the place where 86% of all local searches end. Different playing field, different rules.",
        },
        {
          question: "Do I need to be tech-savvy?",
          answer: "Not at all. We do all the technical work. You just need to provide access and follow our video tutorial for the 5-star automatism. Anyone can do it.",
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
      copyright: "© 2024 Local Dominator. All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      terms: "Terms",
    },
    // MobileStickyBar
    mobileBar: {
      spotsLeft: "Only",
      spotsCount: "2 spots",
      spotsFor: "left for",
      cta: "Get it now",
    },
  },
} as const;
