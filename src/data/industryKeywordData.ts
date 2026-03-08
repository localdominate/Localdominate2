import { IndustryKeywordConfig } from "@/components/blog/IndustryKeywordOpportunities";

export const industryKeywordConfigs: Record<string, IndustryKeywordConfig> = {
  aerzte: {
    industry: "Ärzte & Praxen",
    quickWin: "Fokussiere auf '[Fachrichtung] + [Stadt]' Keywords - diese haben hohe Transaktionsintention und oft moderate Konkurrenz.",
    clusters: [
      {
        name: "Fachrichtung + Stadt",
        icon: "🏥",
        keywords: [
          { keyword: "Hausarzt [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "2,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut", tip: "Google Business Profil optimieren" },
          { keyword: "Kinderarzt [Stadt]", searchVolume: "1.900/Mo", difficulty: "Hoch", cpc: "3,10€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "HNO Arzt [Stadt]", searchVolume: "1.200/Mo", difficulty: "Mittel", cpc: "2,50€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Orthopäde [Stadt]", searchVolume: "1.600/Mo", difficulty: "Mittel", cpc: "3,40€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Hautarzt [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "2,90€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
        ],
      },
      {
        name: "Leistungen & Behandlungen",
        icon: "💊",
        keywords: [
          { keyword: "Akupunktur [Stadt]", searchVolume: "880/Mo", difficulty: "Niedrig", cpc: "1,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Wenig Wettbewerb – schnell rankbar" },
          { keyword: "Vorsorgeuntersuchung [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "1,20€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
          { keyword: "Gesundheitscheck [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "2,10€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Impfung [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "0,90€", trend: "stabil", intent: "Informational", opportunity: "Mittel" },
        ],
      },
      {
        name: "Dringlichkeit & Notfall",
        icon: "🚨",
        keywords: [
          { keyword: "Arzt Notdienst [Stadt]", searchVolume: "3.200/Mo", difficulty: "Hoch", cpc: "1,50€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Arzt ohne Termin [Stadt]", searchVolume: "1.800/Mo", difficulty: "Mittel", cpc: "2,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Offene Sprechstunden prominent bewerben" },
          { keyword: "Arzt Samstag geöffnet [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "1,70€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  anwaelte: {
    industry: "Anwälte & Kanzleien",
    quickWin: "'Anwalt für [Rechtsgebiet] [Stadt]' Keywords konvertieren am besten - erstelle Landingpages pro Rechtsgebiet.",
    clusters: [
      {
        name: "Rechtsgebiet + Stadt",
        icon: "⚖️",
        keywords: [
          { keyword: "Anwalt Arbeitsrecht [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "8,50€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Anwalt Familienrecht [Stadt]", searchVolume: "1.300/Mo", difficulty: "Hoch", cpc: "7,20€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Anwalt Mietrecht [Stadt]", searchVolume: "980/Mo", difficulty: "Mittel", cpc: "6,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Anwalt Verkehrsrecht [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "9,10€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut", tip: "Hoher CPC = hohe Conversion-Werte" },
          { keyword: "Strafverteidiger [Stadt]", searchVolume: "590/Mo", difficulty: "Mittel", cpc: "11,40€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Beratung & Erstgespräch",
        icon: "📞",
        keywords: [
          { keyword: "Anwalt kostenlose Erstberatung [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "5,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Kostenlose Erstberatung als USP hervorheben" },
          { keyword: "Rechtsberatung online", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "4,80€", trend: "steigend", intent: "Informational", opportunity: "Mittel" },
          { keyword: "Anwalt Bewertungen [Stadt]", searchVolume: "390/Mo", difficulty: "Niedrig", cpc: "3,10€", trend: "steigend", intent: "Navigational", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Situationsbezogene Suchen",
        icon: "🔍",
        keywords: [
          { keyword: "Kündigung was tun", searchVolume: "4.400/Mo", difficulty: "Hoch", cpc: "3,90€", trend: "stabil", intent: "Informational", opportunity: "Mittel" },
          { keyword: "Abmahnung erhalten", searchVolume: "2.100/Mo", difficulty: "Mittel", cpc: "4,50€", trend: "stabil", intent: "Informational", opportunity: "Gut", tip: "Blog-Content mit Kanzlei-CTA" },
          { keyword: "Mieterhöhung Widerspruch", searchVolume: "1.800/Mo", difficulty: "Mittel", cpc: "3,20€", trend: "steigend", intent: "Informational", opportunity: "Gut" },
        ],
      },
    ],
  },

  restaurant: {
    industry: "Restaurants & Gastronomie",
    quickWin: "Optimiere für '[Küche] Restaurant [Stadt/Stadtteil]' - lokale Suchanfragen mit hoher Kaufabsicht.",
    clusters: [
      {
        name: "Küche + Standort",
        icon: "🍽️",
        keywords: [
          { keyword: "Italienisches Restaurant [Stadt]", searchVolume: "3.600/Mo", difficulty: "Hoch", cpc: "1,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Thai Restaurant [Stadt]", searchVolume: "1.400/Mo", difficulty: "Mittel", cpc: "1,50€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Sushi [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "1,70€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Brunch [Stadt]", searchVolume: "2.200/Mo", difficulty: "Mittel", cpc: "1,20€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Saisonaler Peak am Wochenende" },
        ],
      },
      {
        name: "Anlass & Erlebnis",
        icon: "🎉",
        keywords: [
          { keyword: "Restaurant Geburtstag [Stadt]", searchVolume: "880/Mo", difficulty: "Niedrig", cpc: "1,40€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut", tip: "Event-Seite erstellen" },
          { keyword: "Romantisches Restaurant [Stadt]", searchVolume: "720/Mo", difficulty: "Niedrig", cpc: "1,60€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Restaurant mit Terrasse [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "0,90€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Weihnachtsessen [Stadt]", searchVolume: "1.900/Mo", difficulty: "Mittel", cpc: "1,80€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Services & Besonderheiten",
        icon: "📋",
        keywords: [
          { keyword: "Restaurant Lieferservice [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "2,10€", trend: "stabil", intent: "Transaktional", opportunity: "Mittel" },
          { keyword: "Veganes Restaurant [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "1,30€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Wachsendes Segment – Early Mover Vorteil" },
          { keyword: "Glutenfrei essen [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "0,80€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  handwerker: {
    industry: "Handwerker",
    quickWin: "'[Gewerk] Notdienst [Stadt]' Keywords haben extrem hohe Conversion-Raten - Landing Pages mit Click-to-Call erstellen.",
    clusters: [
      {
        name: "Gewerk + Stadt",
        icon: "🔧",
        keywords: [
          { keyword: "Handwerker [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "4,20€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Elektriker [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "5,60€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Maler [Stadt]", searchVolume: "1.800/Mo", difficulty: "Mittel", cpc: "3,80€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Fliesenleger [Stadt]", searchVolume: "1.200/Mo", difficulty: "Mittel", cpc: "4,50€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut", tip: "Wenige optimierte Profile vorhanden" },
        ],
      },
      {
        name: "Notdienst & Dringlichkeit",
        icon: "🚨",
        keywords: [
          { keyword: "Rohrverstopfung Notdienst [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "12,50€", trend: "stabil", intent: "Transaktional", opportunity: "Gut", tip: "Höchste CPC-Werte im Handwerk" },
          { keyword: "Schlüsseldienst [Stadt]", searchVolume: "3.200/Mo", difficulty: "Sehr hoch", cpc: "8,90€", trend: "stabil", intent: "Transaktional", opportunity: "Mittel" },
          { keyword: "Heizung Notdienst [Stadt]", searchVolume: "890/Mo", difficulty: "Mittel", cpc: "7,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Projekte & Renovierung",
        icon: "🏠",
        keywords: [
          { keyword: "Bad renovieren Kosten", searchVolume: "5.400/Mo", difficulty: "Hoch", cpc: "3,20€", trend: "steigend", intent: "Informational", opportunity: "Mittel" },
          { keyword: "Küche montieren lassen [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "3,90€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Dachsanierung [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "5,10€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  friseur: {
    industry: "Friseure & Salons",
    quickWin: "'Friseur [Stadtteil]' rankt oft leichter als 'Friseur [Stadt]' - nutze hyper-lokale Keywords.",
    clusters: [
      {
        name: "Salon + Standort",
        icon: "💇",
        keywords: [
          { keyword: "Friseur [Stadt]", searchVolume: "4.400/Mo", difficulty: "Sehr hoch", cpc: "1,80€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Friseur [Stadtteil]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,50€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut", tip: "Hyper-lokale Optimierung" },
          { keyword: "Friseur in meiner Nähe", searchVolume: "6.600/Mo", difficulty: "Sehr hoch", cpc: "1,90€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Herrenfriseur [Stadt]", searchVolume: "1.200/Mo", difficulty: "Mittel", cpc: "1,40€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Spezialisierung",
        icon: "✨",
        keywords: [
          { keyword: "Balayage [Stadt]", searchVolume: "1.600/Mo", difficulty: "Mittel", cpc: "1,70€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Trend-Keyword mit wachsendem Volumen" },
          { keyword: "Locken Friseur [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "1,30€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Hochzeitsfrisur [Stadt]", searchVolume: "720/Mo", difficulty: "Niedrig", cpc: "2,10€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Haarverlängerung [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "2,40€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Preis & Bewertung",
        icon: "💰",
        keywords: [
          { keyword: "Friseur Preise [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "0,90€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
          { keyword: "Bester Friseur [Stadt]", searchVolume: "1.300/Mo", difficulty: "Hoch", cpc: "1,60€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Günstiger Friseur [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,10€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
        ],
      },
    ],
  },

  fitness: {
    industry: "Fitnessstudios & Gyms",
    quickWin: "'Fitnessstudio [Stadtteil]' und spezifische Kursangebote haben oft niedrige Konkurrenz und hohe Conversion.",
    clusters: [
      {
        name: "Studio + Standort",
        icon: "🏋️",
        keywords: [
          { keyword: "Fitnessstudio [Stadt]", searchVolume: "5.400/Mo", difficulty: "Sehr hoch", cpc: "2,80€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Gym [Stadtteil]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "2,10€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Fitnessstudio in der Nähe", searchVolume: "8.100/Mo", difficulty: "Sehr hoch", cpc: "3,20€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
        ],
      },
      {
        name: "Spezialisierung & Kurse",
        icon: "🧘",
        keywords: [
          { keyword: "CrossFit [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "2,40€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Frauen Fitnessstudio [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "2,60€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Wachsendes Nischensegment" },
          { keyword: "Personal Training [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "4,50€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "EMS Training [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "3,80€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Preise & Vergleich",
        icon: "💰",
        keywords: [
          { keyword: "Fitnessstudio Preise [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "1,80€", trend: "steigend", intent: "Informational", opportunity: "Gut" },
          { keyword: "Fitnessstudio ohne Vertrag [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "2,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Bestes Fitnessstudio [Stadt]", searchVolume: "480/Mo", difficulty: "Mittel", cpc: "2,50€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
        ],
      },
    ],
  },

  zahnarzt: {
    industry: "Zahnärzte",
    quickWin: "'Zahnarzt Angstpatienten [Stadt]' ist ein hoch-konvertierendes Long-Tail-Keyword mit geringem Wettbewerb.",
    clusters: [
      {
        name: "Zahnarzt + Stadt",
        icon: "🦷",
        keywords: [
          { keyword: "Zahnarzt [Stadt]", searchVolume: "4.400/Mo", difficulty: "Sehr hoch", cpc: "5,20€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Zahnarzt Notdienst [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "3,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Kinderzahnarzt [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "4,10€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Behandlungen",
        icon: "✨",
        keywords: [
          { keyword: "Zahnimplantat [Stadt]", searchVolume: "1.100/Mo", difficulty: "Hoch", cpc: "8,90€", trend: "stabil", intent: "Transaktional", opportunity: "Gut", tip: "Höchster CPC bei Zahnärzten" },
          { keyword: "Bleaching [Stadt]", searchVolume: "1.600/Mo", difficulty: "Mittel", cpc: "3,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Invisalign [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "6,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Professionelle Zahnreinigung [Stadt]", searchVolume: "1.900/Mo", difficulty: "Mittel", cpc: "2,10€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Patientenbedürfnisse",
        icon: "💙",
        keywords: [
          { keyword: "Zahnarzt Angstpatienten [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "4,50€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Hoch-konvertierendes Nischen-Keyword" },
          { keyword: "Zahnarzt ohne Wartezeit [Stadt]", searchVolume: "390/Mo", difficulty: "Niedrig", cpc: "3,20€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Zahnarzt Bewertungen [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "2,80€", trend: "steigend", intent: "Navigational", opportunity: "Gut" },
        ],
      },
    ],
  },

  immobilienmakler: {
    industry: "Immobilienmakler",
    quickWin: "'Immobilienmakler [Stadtteil]' Keywords sind weniger umkämpft und zeigen lokale Expertise.",
    clusters: [
      {
        name: "Makler + Standort",
        icon: "🏘️",
        keywords: [
          { keyword: "Immobilienmakler [Stadt]", searchVolume: "2.900/Mo", difficulty: "Sehr hoch", cpc: "6,80€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Makler [Stadtteil]", searchVolume: "480/Mo", difficulty: "Mittel", cpc: "5,20€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Hausverwaltung [Stadt]", searchVolume: "1.300/Mo", difficulty: "Hoch", cpc: "4,50€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
        ],
      },
      {
        name: "Service-spezifisch",
        icon: "📋",
        keywords: [
          { keyword: "Haus verkaufen [Stadt]", searchVolume: "1.100/Mo", difficulty: "Hoch", cpc: "7,20€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Immobilienbewertung [Stadt]", searchVolume: "1.600/Mo", difficulty: "Mittel", cpc: "5,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Kostenlose Bewertung als Lead-Magnet" },
          { keyword: "Wohnung mieten [Stadt]", searchVolume: "5.400/Mo", difficulty: "Sehr hoch", cpc: "2,10€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
        ],
      },
    ],
  },

  hotels: {
    industry: "Hotels & Unterkünfte",
    quickWin: "Long-Tail-Keywords wie „Hotel mit Pool [Stadt]" oder „Boutique Hotel [Stadt]" haben deutlich weniger Wettbewerb.",
    clusters: [
      {
        name: "Hotel + Standort",
        icon: "🏨",
        keywords: [
          { keyword: "Hotel [Stadt]", searchVolume: "12.100/Mo", difficulty: "Sehr hoch", cpc: "2,40€", trend: "stabil", intent: "Lokal", opportunity: "Gering" },
          { keyword: "Boutique Hotel [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "2,80€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Nischen-Positionierung schlägt Generisch" },
          { keyword: "Hotel mit Spa [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "3,10€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
      {
        name: "Anlass & Zielgruppe",
        icon: "🎯",
        keywords: [
          { keyword: "Familienhotel [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "2,20€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Hotel Hochzeit [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "3,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Tagungshotel [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "4,80€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  physiotherapie: {
    industry: "Physiotherapie",
    quickWin: "Behandlungsspezifische Keywords wie „Manuelle Therapie [Stadt]" konvertieren besser als generische Begriffe.",
    clusters: [
      {
        name: "Praxis + Standort",
        icon: "🏃",
        keywords: [
          { keyword: "Physiotherapie [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "3,40€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Krankengymnastik [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "2,80€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Physiotherapie ohne Rezept [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "2,10€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Selbstzahler-Keyword mit hoher Conversion" },
        ],
      },
      {
        name: "Behandlungen",
        icon: "💆",
        keywords: [
          { keyword: "Manuelle Therapie [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "2,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Osteopathie [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "3,90€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Lymphdrainage [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "1,80€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  steuerberater: {
    industry: "Steuerberater",
    quickWin: "Saisonale Keywords rund um die Steuererklärung (Jan-Mai) bieten enormes Traffic-Potenzial.",
    clusters: [
      {
        name: "Steuerberater + Stadt",
        icon: "📊",
        keywords: [
          { keyword: "Steuerberater [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "7,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Steuerberater Kleinunternehmer [Stadt]", searchVolume: "590/Mo", difficulty: "Mittel", cpc: "5,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Zielgruppen-spezifische Landingpage" },
          { keyword: "Steuerberater Freiberufler [Stadt]", searchVolume: "480/Mo", difficulty: "Mittel", cpc: "6,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Leistungen",
        icon: "📋",
        keywords: [
          { keyword: "Steuererklärung machen lassen [Stadt]", searchVolume: "1.800/Mo", difficulty: "Hoch", cpc: "5,90€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Buchhaltung [Stadt]", searchVolume: "1.300/Mo", difficulty: "Hoch", cpc: "4,80€", trend: "stabil", intent: "Transaktional", opportunity: "Mittel" },
          { keyword: "Lohnbuchhaltung [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "4,20€", trend: "stabil", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  optiker: {
    industry: "Optiker",
    quickWin: "Marken-Keywords wie „Ray-Ban [Stadt]" oder „Gleitsichtbrille [Stadt]" haben oft geringe Konkurrenz.",
    clusters: [
      {
        name: "Optiker + Standort",
        icon: "👓",
        keywords: [
          { keyword: "Optiker [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "2,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Augenarzt [Stadt]", searchVolume: "1.900/Mo", difficulty: "Hoch", cpc: "3,20€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Kontaktlinsen [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,90€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
        ],
      },
      {
        name: "Produkte & Services",
        icon: "🔍",
        keywords: [
          { keyword: "Gleitsichtbrille [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "3,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Sehtest [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "1,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Kostenloser Sehtest als Lead-Magnet" },
          { keyword: "Sportbrille [Stadt]", searchVolume: "390/Mo", difficulty: "Niedrig", cpc: "2,10€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  apotheke: {
    industry: "Apotheken",
    quickWin: "„Apotheke Notdienst [Stadt]" und „Apotheke Sonntagsdienst [Stadt]" bringen regelmäßig Neukunden.",
    clusters: [
      {
        name: "Apotheke + Standort",
        icon: "💊",
        keywords: [
          { keyword: "Apotheke [Stadt]", searchVolume: "3.600/Mo", difficulty: "Hoch", cpc: "1,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Apotheke Notdienst [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "1,20€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Apotheke Lieferservice [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "1,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Wachsendes Service-Keyword" },
        ],
      },
      {
        name: "Beratung & Services",
        icon: "🩺",
        keywords: [
          { keyword: "Impfberatung Apotheke [Stadt]", searchVolume: "320/Mo", difficulty: "Niedrig", cpc: "0,80€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
          { keyword: "Blutdruckmessung Apotheke [Stadt]", searchVolume: "210/Mo", difficulty: "Niedrig", cpc: "0,60€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Naturheilmittel [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "1,40€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  tattoo: {
    industry: "Tattoo & Piercing Studios",
    quickWin: "Stil-spezifische Keywords wie „Watercolor Tattoo [Stadt]" sind hochkonvertierend und wenig umkämpft.",
    clusters: [
      {
        name: "Studio + Standort",
        icon: "🎨",
        keywords: [
          { keyword: "Tattoo Studio [Stadt]", searchVolume: "3.200/Mo", difficulty: "Hoch", cpc: "1,90€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Piercing Studio [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "1,40€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Tattoo stechen lassen [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,70€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Stil & Spezialisierung",
        icon: "✨",
        keywords: [
          { keyword: "Watercolor Tattoo [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "1,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Nischen-Stil mit loyaler Zielgruppe" },
          { keyword: "Fineline Tattoo [Stadt]", searchVolume: "720/Mo", difficulty: "Niedrig", cpc: "1,60€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Tattoo Cover Up [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "1,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Tattoo Preise [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "1,10€", trend: "steigend", intent: "Informational", opportunity: "Gut" },
        ],
      },
    ],
  },

  yoga: {
    industry: "Yoga & Pilates Studios",
    quickWin: "Kurs-spezifische Keywords wie „Hot Yoga [Stadt]" oder „Prenatal Yoga [Stadt]" haben überraschend niedrige Konkurrenz.",
    clusters: [
      {
        name: "Studio + Standort",
        icon: "🧘",
        keywords: [
          { keyword: "Yoga Studio [Stadt]", searchVolume: "1.900/Mo", difficulty: "Hoch", cpc: "2,10€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Pilates [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "2,40€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Yoga Anfänger [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "1,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Einsteiger-Kurse als Einstiegspunkt" },
        ],
      },
      {
        name: "Kurs-Typen",
        icon: "🔥",
        keywords: [
          { keyword: "Hot Yoga [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "2,20€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Prenatal Yoga [Stadt]", searchVolume: "320/Mo", difficulty: "Niedrig", cpc: "1,90€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Yoga Retreat [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "2,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  fotograf: {
    industry: "Fotografen",
    quickWin: "Anlass-Keywords wie „Hochzeitsfotograf [Stadt]" haben die höchsten Conversion-Raten bei Fotografen.",
    clusters: [
      {
        name: "Fotograf + Standort",
        icon: "📸",
        keywords: [
          { keyword: "Fotograf [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "2,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Hochzeitsfotograf [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "4,50€", trend: "steigend", intent: "Transaktional", opportunity: "Gut", tip: "Saisonaler Peak März-September" },
          { keyword: "Bewerbungsfotos [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "2,10€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Anlass & Spezialisierung",
        icon: "🎯",
        keywords: [
          { keyword: "Babyfotograf [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "2,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Business Fotograf [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "3,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Produktfotografie [Stadt]", searchVolume: "590/Mo", difficulty: "Mittel", cpc: "3,20€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  baeckerei: {
    industry: "Bäckereien",
    quickWin: "„Bäckerei Sonntag geöffnet [Stadt]" hat enormes Suchvolumen und kaum Wettbewerb.",
    clusters: [
      {
        name: "Bäckerei + Standort",
        icon: "🥐",
        keywords: [
          { keyword: "Bäckerei [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "0,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Bäckerei in der Nähe", searchVolume: "6.600/Mo", difficulty: "Sehr hoch", cpc: "0,90€", trend: "steigend", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Bäckerei Sonntag geöffnet [Stadt]", searchVolume: "1.300/Mo", difficulty: "Niedrig", cpc: "0,60€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Öffnungszeiten als Wettbewerbsvorteil" },
        ],
      },
      {
        name: "Produkte & Besonderheiten",
        icon: "🎂",
        keywords: [
          { keyword: "Torte bestellen [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Glutenfreie Bäckerei [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "1,10€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
          { keyword: "Hochzeitstorte [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "1,80€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  doener: {
    industry: "Döner & Imbiss",
    quickWin: "„Bester Döner [Stadt]" und „Döner Lieferservice [Stadt]" sind die wichtigsten Keywords für Imbissbetriebe.",
    clusters: [
      {
        name: "Imbiss + Standort",
        icon: "🥙",
        keywords: [
          { keyword: "Döner [Stadt]", searchVolume: "4.400/Mo", difficulty: "Hoch", cpc: "0,60€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Bester Döner [Stadt]", searchVolume: "1.900/Mo", difficulty: "Mittel", cpc: "0,50€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut", tip: "Bewertungen sind entscheidend" },
          { keyword: "Türkisches Restaurant [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "0,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
        ],
      },
      {
        name: "Service & Bestellung",
        icon: "🛵",
        keywords: [
          { keyword: "Döner Lieferservice [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "0,70€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Essen bestellen [Stadt]", searchVolume: "3.200/Mo", difficulty: "Sehr hoch", cpc: "1,20€", trend: "stabil", intent: "Transaktional", opportunity: "Mittel" },
          { keyword: "Mittagstisch [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "0,90€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
        ],
      },
    ],
  },

  autowerkstatt: {
    industry: "Autowerkstätten",
    quickWin: "Marken-spezifische Keywords wie „BMW Werkstatt [Stadt]" haben weniger Wettbewerb und höhere Conversion.",
    clusters: [
      {
        name: "Werkstatt + Standort",
        icon: "🔧",
        keywords: [
          { keyword: "Autowerkstatt [Stadt]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "3,80€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "KFZ Werkstatt [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "3,40€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Freie Werkstatt [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "2,80€", trend: "steigend", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Services & Marken",
        icon: "🚗",
        keywords: [
          { keyword: "TÜV [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "2,20€", trend: "stabil", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Ölwechsel [Stadt]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,90€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "BMW Werkstatt [Stadt]", searchVolume: "590/Mo", difficulty: "Mittel", cpc: "4,20€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut", tip: "Für jede Marke eigene Landingpage" },
          { keyword: "Reifenwechsel [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "1,50€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  sanitaer: {
    industry: "Sanitär & Heizung",
    quickWin: "Notdienst-Keywords haben die höchsten Conversion-Raten – stelle sicher, dass deine Telefonnummer sofort sichtbar ist.",
    clusters: [
      {
        name: "Sanitär + Standort",
        icon: "🔧",
        keywords: [
          { keyword: "Klempner [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "6,20€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Sanitär Notdienst [Stadt]", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "9,80€", trend: "stabil", intent: "Transaktional", opportunity: "Gut", tip: "Höchster CPC im Sanitärbereich" },
          { keyword: "Heizung installieren [Stadt]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "5,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "Energie & Modernisierung",
        icon: "🌱",
        keywords: [
          { keyword: "Wärmepumpe [Stadt]", searchVolume: "1.300/Mo", difficulty: "Mittel", cpc: "4,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Boom-Keyword durch Energiewende" },
          { keyword: "Solar Warmwasser [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "3,20€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
          { keyword: "Heizung Förderung [Stadt]", searchVolume: "590/Mo", difficulty: "Niedrig", cpc: "2,80€", trend: "steigend", intent: "Informational", opportunity: "Sehr gut" },
        ],
      },
    ],
  },

  elektrotechnik: {
    industry: "Elektrotechnik",
    quickWin: "E-Mobilität Keywords wie „Wallbox Installation [Stadt]" sind ein schnell wachsendes Segment mit wenig Wettbewerb.",
    clusters: [
      {
        name: "Elektriker + Standort",
        icon: "⚡",
        keywords: [
          { keyword: "Elektriker [Stadt]", searchVolume: "2.400/Mo", difficulty: "Hoch", cpc: "5,60€", trend: "stabil", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Elektro Notdienst [Stadt]", searchVolume: "890/Mo", difficulty: "Mittel", cpc: "7,20€", trend: "stabil", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Elektriker günstig [Stadt]", searchVolume: "390/Mo", difficulty: "Niedrig", cpc: "4,10€", trend: "stabil", intent: "Lokal", opportunity: "Sehr gut" },
        ],
      },
      {
        name: "E-Mobilität & Smart Home",
        icon: "🔌",
        keywords: [
          { keyword: "Wallbox Installation [Stadt]", searchVolume: "720/Mo", difficulty: "Niedrig", cpc: "4,50€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Wachstumsmarkt E-Mobilität" },
          { keyword: "Smart Home Installation [Stadt]", searchVolume: "480/Mo", difficulty: "Niedrig", cpc: "3,80€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "PV Anlage [Stadt]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "5,20€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },

  ferienwohnungen: {
    industry: "Ferienwohnungen",
    quickWin: "Saison-Keywords und Aktivitäts-basierte Suchen wie „Ferienwohnung Wandern [Region]" konvertieren überdurchschnittlich.",
    clusters: [
      {
        name: "Unterkunft + Region",
        icon: "🏡",
        keywords: [
          { keyword: "Ferienwohnung [Region]", searchVolume: "4.400/Mo", difficulty: "Sehr hoch", cpc: "1,80€", trend: "steigend", intent: "Lokal", opportunity: "Mittel" },
          { keyword: "Ferienhaus [Region]", searchVolume: "2.900/Mo", difficulty: "Hoch", cpc: "2,10€", trend: "steigend", intent: "Lokal", opportunity: "Gut" },
          { keyword: "Ferienwohnung mit Hund [Region]", searchVolume: "1.100/Mo", difficulty: "Mittel", cpc: "1,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut", tip: "Nischen-Zielgruppe mit hoher Loyalität" },
        ],
      },
      {
        name: "Saison & Aktivität",
        icon: "🎿",
        keywords: [
          { keyword: "Skiurlaub Ferienwohnung [Region]", searchVolume: "720/Mo", difficulty: "Mittel", cpc: "2,40€", trend: "steigend", intent: "Transaktional", opportunity: "Sehr gut" },
          { keyword: "Ferienwohnung am See", searchVolume: "1.600/Mo", difficulty: "Hoch", cpc: "1,60€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
          { keyword: "Last Minute Ferienwohnung [Region]", searchVolume: "880/Mo", difficulty: "Mittel", cpc: "1,90€", trend: "steigend", intent: "Transaktional", opportunity: "Gut" },
        ],
      },
    ],
  },
};
