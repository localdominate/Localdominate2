import { SearchIntentConfig } from "@/components/blog/SearchIntentAnalysis";

export const searchIntentConfigs: Record<string, SearchIntentConfig> = {
  aerzte: {
    industry: "Aerzte & Praxen",
    insight: "72% der Arzt-Suchen haben lokale oder transaktionale Intention - optimiere dein Google Business Profil und Terminbuchung als Top-Prioritaet.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen einen Arzt in ihrer Naehe",
        queries: [
          { query: "Hausarzt [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil", conversionTip: "Oeffnungszeiten und Telefonnummer prominent" },
          { query: "Arzt in meiner Naehe", volume: "6.600/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Lokale Landingpage" },
          { query: "Kinderarzt [Stadtteil]", volume: "880/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Stadtteil-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 32,
        description: "Nutzer wollen einen Termin buchen oder Leistung anfragen",
        queries: [
          { query: "Arzt Termin online [Stadt]", volume: "1.300/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Terminbuchungs-Seite", conversionTip: "Online-Buchung direkt im GBP verlinken" },
          { query: "Arzt ohne Termin [Stadt]", volume: "1.800/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Offene Sprechstunde-Seite" },
          { query: "Akupunktur [Stadt] Kosten", volume: "480/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Leistungs-Landingpage" },
        ],
      },
      {
        intent: "Informational",
        percentage: 20,
        description: "Nutzer informieren sich ueber Symptome und Behandlungen",
        queries: [
          { query: "Welcher Arzt bei Rueckenschmerzen", volume: "2.900/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Ratgeber-Blogpost" },
          { query: "Vorsorgeuntersuchung ab 35", volume: "1.600/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "FAQ-Seite" },
          { query: "Impfung Nebenwirkungen", volume: "3.200/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Medizin-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen eine bestimmte Praxis oder ein Portal",
        queries: [
          { query: "[Praxisname] Oeffnungszeiten", volume: "320/Mo", intent: "Navigational", funnelStage: "Action", contentType: "GBP + Website" },
          { query: "Jameda [Arztname]", volume: "590/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  anwaelte: {
    industry: "Anwaelte & Kanzleien",
    insight: "Anwalts-Suchen sind stark situationsgetrieben - erstelle Content fuer akute Rechtsprobleme und verlinke zur kostenlosen Erstberatung.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 35,
        description: "Nutzer suchen aktiv einen Anwalt fuer ihr Problem",
        queries: [
          { query: "Anwalt Arbeitsrecht [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Rechtsgebiet-Landingpage", conversionTip: "Kostenlose Erstberatung als CTA" },
          { query: "Anwalt kostenlose Erstberatung", volume: "1.100/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Erstberatungs-Seite" },
          { query: "Scheidungsanwalt [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Familienrecht-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 38,
        description: "Nutzer recherchieren Rechtsfragen vor der Mandatierung",
        queries: [
          { query: "Kuendigung erhalten was tun", volume: "4.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Ratgeber mit CTA", conversionTip: "Blog-Artikel mit Kontakt-CTA am Ende" },
          { query: "Mieterhoehung Widerspruch Muster", volume: "1.800/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Download + Beratungs-CTA" },
          { query: "Anwaltskosten Arbeitsrecht", volume: "980/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Kosten-Transparenz-Seite" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 22,
        description: "Nutzer suchen Kanzleien in ihrer Region",
        queries: [
          { query: "Kanzlei [Stadt]", volume: "880/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Anwalt [Stadtteil]", volume: "390/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Lokale Landingpage" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen eine bestimmte Kanzlei",
        queries: [
          { query: "[Kanzleiname] Bewertungen", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  restaurant: {
    industry: "Restaurants & Gastronomie",
    insight: "Gastro-Suchen sind zu 65% lokal - Google Business Profil mit aktueller Speisekarte, Fotos und Oeffnungszeiten ist der wichtigste Hebel.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 45,
        description: "Nutzer suchen ein Restaurant in der Naehe",
        queries: [
          { query: "Restaurant [Stadt]", volume: "5.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Essen in der Naehe", volume: "12.100/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Maps Optimierung", conversionTip: "Fotos der Gerichte regelmaessig aktualisieren" },
          { query: "Thai Restaurant [Stadtteil]", volume: "590/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Kueche-Landingpage" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen reservieren, bestellen oder buchen",
        queries: [
          { query: "Restaurant reservieren [Stadt]", volume: "1.300/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Reservierungs-Widget" },
          { query: "Essen bestellen [Stadt]", volume: "3.200/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Lieferservice-Seite" },
          { query: "Brunch Reservierung [Stadt]", volume: "480/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Event-Buchungsseite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 20,
        description: "Nutzer vergleichen Optionen oder suchen Inspiration",
        queries: [
          { query: "Bestes Restaurant [Stadt]", volume: "1.900/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Bewertungs-Strategie" },
          { query: "Vegane Restaurants [Stadt]", volume: "1.100/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Spezialisierungs-Seite" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen ein bestimmtes Restaurant",
        queries: [
          { query: "[Restaurantname] Speisekarte", volume: "720/Mo", intent: "Navigational", funnelStage: "Action", contentType: "Speisekarte auf Website" },
        ],
      },
    ],
  },

  handwerker: {
    industry: "Handwerker",
    insight: "Notdienst-Suchen haben die hoechste Conversion-Rate aller Branchen - stelle sicher, dass deine Telefonnummer klickbar und prominent ist.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 42,
        description: "Nutzer brauchen sofort einen Handwerker",
        queries: [
          { query: "Rohrverstopfung Notdienst [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Notdienst-Landingpage", conversionTip: "Click-to-Call Button above the fold" },
          { query: "Elektriker [Stadt] sofort", volume: "480/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Notfall-Seite" },
          { query: "Schluesseldienst [Stadt]", volume: "3.200/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "GBP + Notdienst-Seite" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 30,
        description: "Nutzer suchen Handwerker in ihrer Region",
        queries: [
          { query: "Maler [Stadt]", volume: "1.800/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Gewerk-Landingpage" },
          { query: "Handwerker in der Naehe", volume: "4.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
        ],
      },
      {
        intent: "Informational",
        percentage: 22,
        description: "Nutzer recherchieren Kosten und Projekte",
        queries: [
          { query: "Bad renovieren Kosten", volume: "5.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Kostenrechner-Seite", conversionTip: "Kostenlosen Kostenvoranschlag als CTA" },
          { query: "Heizung erneuern Foerderung", volume: "1.300/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Foerderung-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 6,
        description: "Nutzer suchen einen bestimmten Betrieb",
        queries: [
          { query: "[Firmenname] Bewertungen", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  friseur: {
    industry: "Friseure & Salons",
    insight: "Friseur-Suchen sind extrem lokal - 'in meiner Naehe' Suchen dominieren. Hyper-lokale Stadtteil-Optimierung bringt die besten Ergebnisse.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 50,
        description: "Nutzer suchen einen Salon in der Naehe",
        queries: [
          { query: "Friseur in meiner Naehe", volume: "6.600/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Standort-Seiten", conversionTip: "Stadtteil-spezifische Landingpages" },
          { query: "Friseur [Stadtteil]", volume: "880/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Hyper-lokale Seite" },
          { query: "Herrenfriseur [Stadt]", volume: "1.200/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Zielgruppen-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 25,
        description: "Nutzer wollen einen Termin buchen",
        queries: [
          { query: "Friseur Termin online [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Online-Buchung" },
          { query: "Balayage [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Service-Seite mit Galerie" },
          { query: "Hochzeitsfrisur [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Braut-Service-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 18,
        description: "Nutzer vergleichen Preise und suchen Inspiration",
        queries: [
          { query: "Friseur Preise [Stadt]", volume: "480/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Preisliste-Seite" },
          { query: "Bester Friseur [Stadt]", volume: "1.300/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Bewertungs-Strategie" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 7,
        description: "Nutzer suchen einen bestimmten Salon",
        queries: [
          { query: "[Salonname] Bewertungen", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  fitness: {
    industry: "Fitnessstudios & Gyms",
    insight: "Fitness-Suchen haben einen starken saisonalen Peak im Januar - plane deine Content-Strategie entsprechend vor.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 42,
        description: "Nutzer suchen ein Studio in der Naehe",
        queries: [
          { query: "Fitnessstudio in der Naehe", volume: "8.100/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Maps Optimierung" },
          { query: "Gym [Stadtteil]", volume: "720/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Stadtteil-Landingpage" },
        ],
      },
      {
        intent: "Kommerziell",
        percentage: 28,
        description: "Nutzer vergleichen Angebote und Preise",
        queries: [
          { query: "Fitnessstudio Preise [Stadt]", volume: "1.100/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Preisvergleichs-Seite", conversionTip: "Probetraining als niedrigschwelligen Einstieg" },
          { query: "Fitnessstudio ohne Vertrag [Stadt]", volume: "590/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Flexible-Angebote-Seite" },
          { query: "Bestes Fitnessstudio [Stadt]", volume: "480/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Bewertungs-Strategie" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 20,
        description: "Nutzer wollen sich anmelden oder Probetraining buchen",
        queries: [
          { query: "Probetraining [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Probetraining-Landingpage" },
          { query: "CrossFit [Stadt] Anmeldung", volume: "320/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Kurs-Buchungsseite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 10,
        description: "Nutzer recherchieren Trainingsformen",
        queries: [
          { query: "EMS Training Erfahrungen", volume: "1.300/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Trainings-Ratgeber" },
        ],
      },
    ],
  },

  zahnarzt: {
    industry: "Zahnaerzte",
    insight: "Zahnarzt-Suchen splitten sich in Routine (Kontrolle) und Akut (Schmerzen) - erstelle fuer beide Szenarien optimierte Landingpages.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 38,
        description: "Nutzer suchen einen Zahnarzt in der Naehe",
        queries: [
          { query: "Zahnarzt [Stadt]", volume: "4.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Zahnarzt Notdienst [Stadt]", volume: "2.900/Mo", intent: "Lokal", funnelStage: "Action", contentType: "Notdienst-Seite", conversionTip: "24/7 Erreichbarkeit betonen" },
          { query: "Kinderzahnarzt [Stadt]", volume: "1.300/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Spezial-Landingpage" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen eine Behandlung buchen",
        queries: [
          { query: "Bleaching [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Behandlungs-Landingpage" },
          { query: "Invisalign [Stadt]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Premium-Service-Seite" },
          { query: "Zahnreinigung Termin [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Online-Terminbuchung" },
        ],
      },
      {
        intent: "Informational",
        percentage: 25,
        description: "Nutzer recherchieren Behandlungen und Kosten",
        queries: [
          { query: "Zahnimplantat Kosten", volume: "3.200/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Kosten-Ratgeber", conversionTip: "Transparente Preisinfos mit Beratungs-CTA" },
          { query: "Zahnarzt Angst ueberwinden", volume: "1.100/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Angstpatienten-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 7,
        description: "Nutzer suchen eine bestimmte Praxis",
        queries: [
          { query: "[Praxisname] Bewertungen", volume: "320/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  immobilienmakler: {
    industry: "Immobilienmakler",
    insight: "Immobilien-Suchen haben eine lange Customer Journey - Content fuer jede Funnel-Phase erstellen und mit Retargeting verbinden.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 35,
        description: "Nutzer wollen eine Immobilie kaufen, verkaufen oder bewerten lassen",
        queries: [
          { query: "Haus verkaufen [Stadt]", volume: "1.100/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Verkaufs-Landingpage" },
          { query: "Immobilienbewertung kostenlos [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Bewertungs-Tool", conversionTip: "Kostenlose Bewertung als Lead-Magnet" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 30,
        description: "Nutzer suchen einen Makler in ihrer Region",
        queries: [
          { query: "Immobilienmakler [Stadt]", volume: "2.900/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Makler [Stadtteil]", volume: "480/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Stadtteil-Expertise-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 28,
        description: "Nutzer informieren sich ueber den Immobilienmarkt",
        queries: [
          { query: "Immobilienpreise [Stadt] 2025", volume: "1.300/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Marktbericht" },
          { query: "Haus verkaufen Steuern", volume: "880/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Steuer-Ratgeber" },
          { query: "Maklergebuehren wer zahlt", volume: "2.400/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Kosten-Transparenz-Seite" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 7,
        description: "Nutzer suchen ein bestimmtes Maklerbüro",
        queries: [
          { query: "[Maklername] Erfahrungen", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  hotels: {
    industry: "Hotels & Unterkuenfte",
    insight: "Hotel-Suchen werden stark von OTAs dominiert - differenziere dich durch Direktbuchungs-Vorteile und lokale Erlebnis-Content.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen Unterkuenfte an einem bestimmten Ort",
        queries: [
          { query: "Hotel [Stadt]", volume: "12.100/Mo", intent: "Lokal", funnelStage: "Consideration", contentType: "GBP + Direktbuchung" },
          { query: "Boutique Hotel [Stadt]", volume: "880/Mo", intent: "Lokal", funnelStage: "Consideration", contentType: "Nischen-Landingpage", conversionTip: "Direktbuchungs-Vorteil hervorheben" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen buchen",
        queries: [
          { query: "Hotel buchen [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Buchungs-Engine" },
          { query: "Hotel Hochzeit [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Event-Seite" },
        ],
      },
      {
        intent: "Kommerziell",
        percentage: 20,
        description: "Nutzer vergleichen Hotels",
        queries: [
          { query: "Bestes Hotel [Stadt]", volume: "880/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Bewertungs-Strategie" },
          { query: "Hotel mit Pool [Stadt]", volume: "720/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Ausstattungs-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 10,
        description: "Nutzer planen ihre Reise",
        queries: [
          { query: "Sehenswuerdigkeiten [Stadt]", volume: "5.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Reise-Ratgeber" },
        ],
      },
    ],
  },

  physiotherapie: {
    industry: "Physiotherapie",
    insight: "Viele Physiotherapie-Suchen kommen von Patienten mit Rezept - betone Kassenzulassung und kurze Wartezeiten.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen eine Praxis in der Naehe",
        queries: [
          { query: "Physiotherapie [Stadt]", volume: "2.900/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Krankengymnastik [Stadt]", volume: "1.100/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Synonym-Landingpage" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen einen Termin vereinbaren",
        queries: [
          { query: "Physiotherapie ohne Rezept [Stadt]", volume: "480/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Selbstzahler-Seite", conversionTip: "Preise transparent kommunizieren" },
          { query: "Manuelle Therapie [Stadt]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Behandlungs-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 25,
        description: "Nutzer informieren sich ueber Behandlungen",
        queries: [
          { query: "Physiotherapie Uebungen Ruecken", volume: "2.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Uebungs-Ratgeber" },
          { query: "Osteopathie vs Physiotherapie", volume: "1.300/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Vergleichs-Artikel" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen eine bestimmte Praxis",
        queries: [
          { query: "[Praxisname] Termine", volume: "180/Mo", intent: "Navigational", funnelStage: "Action", contentType: "Terminbuchung" },
        ],
      },
    ],
  },

  steuerberater: {
    industry: "Steuerberater",
    insight: "Steuerberater-Suchen peaken von Januar bis Mai - nutze saisonale Content-Strategien fuer maximale Sichtbarkeit.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 35,
        description: "Nutzer suchen aktiv einen Steuerberater",
        queries: [
          { query: "Steuerberater [Stadt]", volume: "2.400/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Steuerberater Kleinunternehmer [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Zielgruppen-Landingpage", conversionTip: "Erstgespraech kostenlos anbieten" },
        ],
      },
      {
        intent: "Informational",
        percentage: 35,
        description: "Nutzer recherchieren Steuerfragen",
        queries: [
          { query: "Steuererklaerung Frist 2025", volume: "8.100/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Aktueller Ratgeber" },
          { query: "Steuerberater Kosten", volume: "2.900/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Preis-Transparenz-Seite" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 22,
        description: "Nutzer suchen regional",
        queries: [
          { query: "Steuerberater in der Naehe", volume: "1.600/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + lokale Seite" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen eine bestimmte Kanzlei",
        queries: [
          { query: "[Kanzleiname] Erfahrungen", volume: "180/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  optiker: {
    industry: "Optiker",
    insight: "Optiker-Suchen kombinieren Produkt- und Dienstleistungsintent - verknuepfe Sehtest-Angebote mit Brillen-Beratung.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen einen Optiker vor Ort",
        queries: [
          { query: "Optiker [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Optiker in der Naehe", volume: "3.600/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Standort-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen einen Service nutzen",
        queries: [
          { query: "Sehtest [Stadt]", volume: "1.300/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Sehtest-Landingpage", conversionTip: "Kostenloser Sehtest als Lead-Magnet" },
          { query: "Gleitsichtbrille [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Produkt-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 22,
        description: "Nutzer informieren sich",
        queries: [
          { query: "Gleitsichtbrille Kosten", volume: "1.600/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Preis-Ratgeber" },
          { query: "Kontaktlinsen oder Brille", volume: "880/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Vergleichs-Artikel" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen eine bestimmte Filiale",
        queries: [
          { query: "[Optikername] Angebote", volume: "320/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Angebots-Seite" },
        ],
      },
    ],
  },

  apotheke: {
    industry: "Apotheken",
    insight: "Apotheken-Suchen sind stark zeitgetrieben (Notdienst, Sonntag) - optimiere fuer Oeffnungszeiten und Verfuegbarkeit.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 55,
        description: "Nutzer suchen die naechste Apotheke",
        queries: [
          { query: "Apotheke in der Naehe", volume: "8.100/Mo", intent: "Lokal", funnelStage: "Action", contentType: "GBP + Maps", conversionTip: "Oeffnungszeiten immer aktuell halten" },
          { query: "Apotheke Notdienst [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Action", contentType: "Notdienst-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 20,
        description: "Nutzer wollen Produkte bestellen",
        queries: [
          { query: "Apotheke Lieferservice [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Lieferservice-Seite" },
          { query: "Medikament vorbestellen [Stadt]", volume: "320/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Vorbestell-Funktion" },
        ],
      },
      {
        intent: "Informational",
        percentage: 20,
        description: "Nutzer suchen Gesundheitsinformationen",
        queries: [
          { query: "Naturheilmittel gegen Erkaeltung", volume: "1.600/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Gesundheits-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen eine bestimmte Apotheke",
        queries: [
          { query: "[Apothekenname] Oeffnungszeiten", volume: "480/Mo", intent: "Navigational", funnelStage: "Action", contentType: "GBP + Website" },
        ],
      },
    ],
  },

  tattoo: {
    industry: "Tattoo & Piercing Studios",
    insight: "Tattoo-Suchen sind stark visuell gepraegt - investiere in hochwertige Portfolio-Bilder und Google Business Fotos.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 35,
        description: "Nutzer suchen ein Studio in der Naehe",
        queries: [
          { query: "Tattoo Studio [Stadt]", volume: "3.200/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Piercing Studio [Stadt]", volume: "1.100/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Service-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen ein Tattoo stechen lassen",
        queries: [
          { query: "Tattoo stechen lassen [Stadt]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Buchungs-Seite", conversionTip: "Portfolio-Galerie mit Booking-CTA" },
          { query: "Watercolor Tattoo [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Stil-Portfolio-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 28,
        description: "Nutzer recherchieren Stile und Kosten",
        queries: [
          { query: "Tattoo Preise [Stadt]", volume: "1.300/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Preis-Uebersicht" },
          { query: "Tattoo Pflege Tipps", volume: "2.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Pflege-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 7,
        description: "Nutzer suchen ein bestimmtes Studio",
        queries: [
          { query: "[Studioname] Instagram", volume: "480/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Social Media Profil" },
        ],
      },
    ],
  },

  yoga: {
    industry: "Yoga & Pilates Studios",
    insight: "Yoga-Suchen sind saisonabhaengig (Peak im Januar) und stark von Kursangeboten getrieben - Kursplan online stellen.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen ein Studio in der Naehe",
        queries: [
          { query: "Yoga Studio [Stadt]", volume: "1.900/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Pilates [Stadt]", volume: "1.300/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Kursplan" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen einen Kurs buchen",
        queries: [
          { query: "Yoga Anfaenger [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Einsteiger-Seite", conversionTip: "Probestunde als niedrigschwelligen Einstieg" },
          { query: "Hot Yoga [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Kurs-Detail-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 22,
        description: "Nutzer informieren sich ueber Yoga-Stile",
        queries: [
          { query: "Yoga fuer Anfaenger", volume: "4.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Einsteiger-Ratgeber" },
          { query: "Yoga vs Pilates Unterschied", volume: "1.600/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Vergleichs-Artikel" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen ein bestimmtes Studio",
        queries: [
          { query: "[Studioname] Kursplan", volume: "320/Mo", intent: "Navigational", funnelStage: "Action", contentType: "Kursplan-Seite" },
        ],
      },
    ],
  },

  fotograf: {
    industry: "Fotografen",
    insight: "Fotograf-Suchen sind stark anlassbezogen - erstelle fuer jeden Anlass (Hochzeit, Baby, Business) eine eigene Landingpage.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 40,
        description: "Nutzer suchen einen Fotografen fuer einen Anlass",
        queries: [
          { query: "Hochzeitsfotograf [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Hochzeits-Portfolio", conversionTip: "Portfolio + Preis-Transparenz" },
          { query: "Bewerbungsfotos [Stadt]", volume: "1.100/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Express-Buchungs-Seite" },
          { query: "Babyfotograf [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Baby-Portfolio-Seite" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 30,
        description: "Nutzer suchen einen Fotografen vor Ort",
        queries: [
          { query: "Fotograf [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Fotostudio [Stadtteil]", volume: "320/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Standort-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 22,
        description: "Nutzer vergleichen und recherchieren",
        queries: [
          { query: "Hochzeitsfotograf Kosten", volume: "1.300/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Preis-Ratgeber" },
          { query: "Fotograf Tipps Bewerbungsfoto", volume: "590/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Tipps-Blogpost" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen einen bestimmten Fotografen",
        queries: [
          { query: "[Fotografname] Portfolio", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Portfolio-Seite" },
        ],
      },
    ],
  },

  baeckerei: {
    industry: "Baeckereien",
    insight: "Baeckerei-Suchen sind sehr kurzfristig und tageszeit-abhaengig - optimiere fuer Oeffnungszeiten und 'jetzt geoeffnet'.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 55,
        description: "Nutzer suchen eine Baeckerei in der Naehe",
        queries: [
          { query: "Baeckerei in der Naehe", volume: "6.600/Mo", intent: "Lokal", funnelStage: "Action", contentType: "GBP + Maps", conversionTip: "Fotos von frischen Produkten taeglich" },
          { query: "Baeckerei Sonntag geoeffnet [Stadt]", volume: "1.300/Mo", intent: "Lokal", funnelStage: "Action", contentType: "Oeffnungszeiten-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 25,
        description: "Nutzer wollen bestellen",
        queries: [
          { query: "Torte bestellen [Stadt]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Bestell-Seite" },
          { query: "Hochzeitstorte [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Hochzeits-Service-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 15,
        description: "Nutzer suchen nach Spezialitaeten",
        queries: [
          { query: "Glutenfreie Baeckerei [Stadt]", volume: "480/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Allergie-Info-Seite" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen eine bestimmte Baeckerei",
        queries: [
          { query: "[Baeckereiname] Filialen", volume: "320/Mo", intent: "Navigational", funnelStage: "Action", contentType: "Filial-Finder" },
        ],
      },
    ],
  },

  doener: {
    industry: "Doener & Imbiss",
    insight: "Imbiss-Suchen sind fast ausschliesslich lokal und sofort-orientiert - Google Maps Praesenz ist der wichtigste Kanal.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 55,
        description: "Nutzer suchen einen Imbiss in der Naehe",
        queries: [
          { query: "Doener [Stadt]", volume: "4.400/Mo", intent: "Lokal", funnelStage: "Action", contentType: "Google Business Profil" },
          { query: "Bester Doener [Stadt]", volume: "1.900/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Bewertungs-Strategie", conversionTip: "Bewertungen aktiv sammeln" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 25,
        description: "Nutzer wollen bestellen",
        queries: [
          { query: "Doener Lieferservice [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Lieferservice-Seite" },
          { query: "Essen bestellen [Stadt]", volume: "3.200/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Bestell-Plattform" },
        ],
      },
      {
        intent: "Informational",
        percentage: 15,
        description: "Nutzer vergleichen",
        queries: [
          { query: "Doener Kalorien", volume: "2.400/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Naehrwert-Info" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen einen bestimmten Laden",
        queries: [
          { query: "[Ladenname] Speisekarte", volume: "320/Mo", intent: "Navigational", funnelStage: "Action", contentType: "Speisekarte-Seite" },
        ],
      },
    ],
  },

  autowerkstatt: {
    industry: "Autowerkstaetten",
    insight: "Autowerkstatt-Suchen splitten sich in Notfall (Panne) und geplant (TUeV, Wartung) - erstelle fuer beides optimierte Seiten.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 38,
        description: "Nutzer brauchen einen Service",
        queries: [
          { query: "TUeV [Stadt]", volume: "2.400/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "TUeV-Service-Seite", conversionTip: "Online-Terminbuchung fuer TUeV" },
          { query: "Oelwechsel [Stadt]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Wartungs-Seite" },
          { query: "Reifenwechsel [Stadt]", volume: "1.300/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Saisonaler Service" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 32,
        description: "Nutzer suchen eine Werkstatt vor Ort",
        queries: [
          { query: "Autowerkstatt [Stadt]", volume: "2.900/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Freie Werkstatt [Stadt]", volume: "1.100/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Unabhaengigkeit betonen" },
        ],
      },
      {
        intent: "Informational",
        percentage: 22,
        description: "Nutzer recherchieren Probleme und Kosten",
        queries: [
          { query: "Bremsen wechseln Kosten", volume: "2.400/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Kosten-Ratgeber" },
          { query: "Motorkontrollleuchte Bedeutung", volume: "1.800/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Diagnose-Ratgeber" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 8,
        description: "Nutzer suchen eine bestimmte Werkstatt",
        queries: [
          { query: "[Werkstattname] Bewertungen", volume: "210/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  sanitaer: {
    industry: "Sanitaer & Heizung",
    insight: "Energiewende-Keywords (Waermepumpe, Solar) wachsen am staerksten - positioniere dich als Experte fuer nachhaltige Heizsysteme.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 40,
        description: "Nutzer brauchen dringend Hilfe oder planen ein Projekt",
        queries: [
          { query: "Sanitaer Notdienst [Stadt]", volume: "1.600/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Notdienst-Seite", conversionTip: "24/7 Telefonnummer prominent" },
          { query: "Heizung installieren [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Projekt-Landingpage" },
          { query: "Waermepumpe einbauen [Stadt]", volume: "590/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "Energiewende-Seite" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 28,
        description: "Nutzer suchen einen Installateur vor Ort",
        queries: [
          { query: "Klempner [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Sanitaer [Stadt]", volume: "1.300/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "GBP + Service-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 27,
        description: "Nutzer recherchieren Foerderungen und Kosten",
        queries: [
          { query: "Heizung Foerderung 2025", volume: "2.900/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Foerderung-Ratgeber" },
          { query: "Waermepumpe Kosten", volume: "3.600/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Kosten-Kalkulator" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 5,
        description: "Nutzer suchen einen bestimmten Betrieb",
        queries: [
          { query: "[Firmenname] Erfahrungen", volume: "180/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Bewertungsprofil" },
        ],
      },
    ],
  },

  elektrotechnik: {
    industry: "Elektrotechnik",
    insight: "E-Mobilitaet und Smart Home sind die am staerksten wachsenden Suchkategorien - differenziere dich als Zukunfts-Experte.",
    clusters: [
      {
        intent: "Transaktional",
        percentage: 38,
        description: "Nutzer brauchen einen Elektriker",
        queries: [
          { query: "Elektro Notdienst [Stadt]", volume: "890/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Notdienst-Seite" },
          { query: "Wallbox Installation [Stadt]", volume: "720/Mo", intent: "Transaktional", funnelStage: "Decision", contentType: "E-Mobilitaet-Seite", conversionTip: "Foerderung + Festpreis kombinieren" },
        ],
      },
      {
        intent: "Lokal",
        percentage: 30,
        description: "Nutzer suchen einen Elektriker vor Ort",
        queries: [
          { query: "Elektriker [Stadt]", volume: "2.400/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Google Business Profil" },
          { query: "Elektriker guenstig [Stadt]", volume: "390/Mo", intent: "Lokal", funnelStage: "Decision", contentType: "Preis-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 25,
        description: "Nutzer informieren sich ueber Technik",
        queries: [
          { query: "Smart Home nachrüsten", volume: "1.600/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Smart-Home-Ratgeber" },
          { query: "PV Anlage Kosten", volume: "4.400/Mo", intent: "Informational", funnelStage: "Consideration", contentType: "Solar-Kalkulator" },
        ],
      },
      {
        intent: "Navigational",
        percentage: 7,
        description: "Nutzer suchen einen bestimmten Betrieb",
        queries: [
          { query: "[Firmenname] Leistungen", volume: "180/Mo", intent: "Navigational", funnelStage: "Consideration", contentType: "Leistungs-Seite" },
        ],
      },
    ],
  },

  ferienwohnungen: {
    industry: "Ferienwohnungen",
    insight: "Ferienwohnungs-Suchen sind stark saisonal und aktivitaets-basiert - erstelle Content fuer jede Jahreszeit und Zielgruppe.",
    clusters: [
      {
        intent: "Lokal",
        percentage: 40,
        description: "Nutzer suchen Unterkuenfte in einer Region",
        queries: [
          { query: "Ferienwohnung [Region]", volume: "4.400/Mo", intent: "Lokal", funnelStage: "Consideration", contentType: "Regions-Landingpage" },
          { query: "Ferienhaus [Region]", volume: "2.900/Mo", intent: "Lokal", funnelStage: "Consideration", contentType: "Objekt-Seite" },
        ],
      },
      {
        intent: "Transaktional",
        percentage: 30,
        description: "Nutzer wollen direkt buchen",
        queries: [
          { query: "Ferienwohnung buchen [Region]", volume: "1.100/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Buchungs-Seite", conversionTip: "Direktbuchungs-Vorteil (kein Portal-Aufschlag)" },
          { query: "Last Minute Ferienwohnung [Region]", volume: "880/Mo", intent: "Transaktional", funnelStage: "Action", contentType: "Angebots-Seite" },
        ],
      },
      {
        intent: "Kommerziell",
        percentage: 20,
        description: "Nutzer vergleichen Optionen",
        queries: [
          { query: "Ferienwohnung mit Hund [Region]", volume: "1.100/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Haustier-Filter-Seite" },
          { query: "Ferienwohnung am See", volume: "1.600/Mo", intent: "Kommerziell", funnelStage: "Consideration", contentType: "Lage-Filter-Seite" },
        ],
      },
      {
        intent: "Informational",
        percentage: 10,
        description: "Nutzer planen ihre Reise",
        queries: [
          { query: "Wanderurlaub [Region]", volume: "1.300/Mo", intent: "Informational", funnelStage: "Awareness", contentType: "Aktivitaets-Ratgeber" },
        ],
      },
    ],
  },
};
