import type { StatisticBoxData } from "@/components/blog/StatisticBox";

// ═══════════════════════════════════════════════════
// General Local SEO Statistics (usable across all pages)
// ═══════════════════════════════════════════════════

export const generalLocalSeoStats: StatisticBoxData = {
  title: "Local SEO in Zahlen",
  stats: [
    { value: "46%", label: "aller Google-Suchen", context: "haben lokale Kaufabsicht" },
    { value: "88%", label: "der mobilen Suchen", context: "führen innerhalb 24h zu Kontakt" },
    { value: "76%", label: "der Nutzer", context: "besuchen das Geschäft am selben Tag" },
    { value: "28%", label: "Conversion-Rate", context: "bei lokalen Suchanfragen" },
  ],
  source: "Google/Ipsos",
  sourceUrl: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-2023/",
  year: "2025",
};

export const googleBusinessStats: StatisticBoxData = {
  title: "Google Business Profil – Wirkung",
  stats: [
    { value: "5x", label: "mehr Profilaufrufe", context: "mit optimiertem GBP" },
    { value: "70%", label: "mehr Vertrauen", context: "durch >50 Bewertungen" },
    { value: "42%", label: "mehr Klicks", context: "mit regelmäßigen Posts" },
    { value: "2.7x", label: "mehr Umsatz", context: "als nicht-optimierte Profile" },
  ],
  source: "BrightLocal Local Consumer Review Survey",
  sourceUrl: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  year: "2025",
};

export const reviewStats: StatisticBoxData = {
  title: "Die Macht der Bewertungen",
  stats: [
    { value: "93%", label: "lesen Bewertungen", context: "vor einer Kaufentscheidung" },
    { value: "4.0★", label: "Minimum-Rating", context: "für 57% der Verbraucher" },
    { value: "73%", label: "achten auf Aktualität", context: "Reviews < 3 Monate" },
    { value: "+9%", label: "Umsatzsteigerung", context: "pro Stern-Erhöhung" },
  ],
  source: "BrightLocal",
  sourceUrl: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  year: "2025",
};

export const mobileSearchStats: StatisticBoxData = {
  title: "Mobile lokale Suche",
  stats: [
    { value: "61%", label: "der Suchen", context: "erfolgen mobil" },
    { value: "\"in der Nähe\"", label: "Suchanfragen", context: "+400% in 5 Jahren" },
    { value: "3 Sek.", label: "Ladezeit-Grenze", context: "53% brechen bei >3s ab" },
    { value: "78%", label: "klicken Top 3", context: "im Local Pack" },
  ],
  source: "Statista / Google",
  year: "2025",
};

// ═══════════════════════════════════════════════════
// Industry-Specific Statistics
// ═══════════════════════════════════════════════════

export const industryStats: Record<string, StatisticBoxData[]> = {
  handwerker: [
    {
      title: "Handwerker & lokale Suche",
      stats: [
        { value: "86%", label: "suchen online", context: "nach Handwerkern in der Nähe" },
        { value: "72%", label: "rufen direkt an", context: "über Google Maps" },
        { value: "340%", label: "mehr Anfragen", context: "mit optimiertem Notdienst-Profil" },
        { value: "€47", label: "pro Lead", context: "durchschnittliche Akquise-Kosten" },
      ],
      source: "Handwerker-Studie IFH Köln",
      year: "2024",
    },
  ],
  anwaelte: [
    {
      title: "Mandantengewinnung online",
      stats: [
        { value: "96%", label: "der Mandanten", context: "recherchieren vorab online" },
        { value: "74%", label: "besuchen Websites", context: "bevor sie kontaktieren" },
        { value: "62%", label: "vergleichen Reviews", context: "auf Google & Anwalt.de" },
        { value: "€180", label: "pro qualifiziertem Lead", context: "ø Akquise-Kosten" },
      ],
      source: "BRAK / Soldan Institut",
      year: "2024",
    },
  ],
  aerzte: [
    {
      title: "Arztsuche & Online-Präsenz",
      stats: [
        { value: "77%", label: "der Patienten", context: "suchen online nach Ärzten" },
        { value: "84%", label: "lesen Bewertungen", context: "vor der Terminbuchung" },
        { value: "3.2x", label: "mehr Terminanfragen", context: "mit Jameda + GBP" },
        { value: "67%", label: "buchen online", context: "statt per Telefon" },
      ],
      source: "Jameda Patientenstudie",
      year: "2024",
    },
  ],
  zahnarzt: [
    {
      title: "Zahnarzt-Suche in Deutschland",
      stats: [
        { value: "82%", label: "googeln Zahnärzte", context: "bei Neuzuzug oder Wechsel" },
        { value: "91%", label: "lesen Bewertungen", context: "höchster Wert aller Ärzte" },
        { value: "€850", label: "ø Patient/Jahr", context: "Lebenszeitwert eines Patienten" },
        { value: "4.5★", label: "erwartetes Rating", context: "unter dem Nutzer abspringen" },
      ],
      source: "THE DENTAL MARKETER / Ahrefs",
      year: "2024",
    },
  ],
  restaurant: [
    {
      title: "Gastronomie & lokale Suche",
      stats: [
        { value: "90%", label: "suchen per Handy", context: "nach Restaurants in der Nähe" },
        { value: "33%", label: "entscheiden sich", context: "anhand von Google-Fotos" },
        { value: "94%", label: "lesen Reviews", context: "vor dem Restaurantbesuch" },
        { value: "+18%", label: "mehr Umsatz", context: "durch Top-3-Maps-Platzierung" },
      ],
      source: "Gastro-Digital Report",
      year: "2024",
    },
  ],
  friseur: [
    {
      title: "Friseur & Beauty-Branche digital",
      stats: [
        { value: "71%", label: "buchen online", context: "ihren Friseurtermin" },
        { value: "89%", label: "schauen Fotos an", context: "Vorher/Nachher entscheidet" },
        { value: "4.3★", label: "Mindest-Rating", context: "für 63% der Kunden" },
        { value: "56%", label: "folgen auf Instagram", context: "ihrem Friseur/Salon" },
      ],
      source: "Treatwell / Booksy Report",
      year: "2024",
    },
  ],
  steuerberater: [
    {
      title: "Mandantenakquise Steuerberater",
      stats: [
        { value: "68%", label: "googeln vorab", context: "Steuerberater in der Nähe" },
        { value: "83%", label: "prüfen Bewertungen", context: "vor dem Erstgespräch" },
        { value: "€3.200", label: "ø Mandantenwert/Jahr", context: "Lebenszeitwert hoch" },
        { value: "41%", label: "wechseln wegen", context: "besserer Online-Präsenz" },
      ],
      source: "DATEV / Soldan Institut",
      year: "2024",
    },
  ],
  immobilienmakler: [
    {
      title: "Immobilien & Online-Akquise",
      stats: [
        { value: "95%", label: "starten online", context: "ihre Immobiliensuche" },
        { value: "61%", label: "kontaktieren", context: "über Google gefundene Makler" },
        { value: "€4.800", label: "ø Provision/Deal", context: "hoher ROI pro Lead" },
        { value: "73%", label: "vergleichen Makler", context: "anhand von Google-Bewertungen" },
      ],
      source: "IVD Marktforschung",
      year: "2024",
    },
  ],
  physiotherapie: [
    {
      title: "Physiotherapie & Patientenakquise",
      stats: [
        { value: "64%", label: "suchen online", context: "nach Physiotherapeuten" },
        { value: "78%", label: "über Arzt-Empfehlung", context: "aber googeln trotzdem" },
        { value: "3.8x", label: "mehr Terminanfragen", context: "mit Behandlungs-Keywords" },
        { value: "€42", label: "pro Patient/Sitzung", context: "hohe Wiederholungsrate" },
      ],
      source: "ZVK Bundesverband",
      year: "2024",
    },
  ],
  apotheke: [
    {
      title: "Apothekensuche digital",
      stats: [
        { value: "58%", label: "suchen Apotheken", context: "über Google Maps" },
        { value: "82%", label: "prüfen Öffnungszeiten", context: "vor dem Besuch" },
        { value: "91%", label: "wollen Notdienst-Info", context: "als erstes finden" },
        { value: "+34%", label: "mehr Laufkunden", context: "mit optimiertem Profil" },
      ],
      source: "ABDA Statistik",
      year: "2024",
    },
  ],
  autowerkstatt: [
    {
      title: "Autowerkstatt & Online-Suche",
      stats: [
        { value: "79%", label: "suchen per Handy", context: "nach Werkstätten" },
        { value: "87%", label: "vertrauen Reviews", context: "mehr als Empfehlungen" },
        { value: "€320", label: "ø Reparaturwert", context: "pro Auftrag" },
        { value: "4.1★", label: "Mindest-Rating", context: "für Vertrauensaufbau" },
      ],
      source: "DAT Report / AutoScout24",
      year: "2024",
    },
  ],
  elektrotechnik: [
    {
      title: "Elektrotechniker & lokale Sichtbarkeit",
      stats: [
        { value: "73%", label: "finden über Google", context: "ihren Elektriker" },
        { value: "68%", label: "rufen sofort an", context: "bei Notdienst-Bedarf" },
        { value: "290%", label: "mehr Anfragen", context: "als Branchenbuch-Einträge" },
        { value: "€95", label: "ø Stundensatz", context: "hoher Auftragswert" },
      ],
      source: "ZVEH Branchenbericht",
      year: "2024",
    },
  ],
  baeckerei: [
    {
      title: "Bäckereien & lokale Suche",
      stats: [
        { value: "67%", label: "suchen mobil", context: "nach Bäckereien" },
        { value: "500m", label: "Suchradius", context: "bei 73% der Nutzer" },
        { value: "92%", label: "wollen Öffnungszeiten", context: "als erstes sehen" },
        { value: "+27%", label: "mehr Umsatz", context: "durch GBP-Optimierung" },
      ],
      source: "Zentralverband des Deutschen Bäckerhandwerks",
      year: "2024",
    },
  ],
  doener: [
    {
      title: "Imbiss & Schnellgastronomie digital",
      stats: [
        { value: "85%", label: "suchen mobil", context: "nach Imbiss in der Nähe" },
        { value: "44%", label: "entscheiden nach Fotos", context: "Menü-Bilder entscheidend" },
        { value: "97%", label: "wählen aus Top 3", context: "im Google Maps Pack" },
        { value: "€12", label: "ø Bestellwert", context: "Frequenz > Wert" },
      ],
      source: "Lieferando / DEHOGA",
      year: "2024",
    },
  ],
  hotels: [
    {
      title: "Hotelsuche & Direktbuchung",
      stats: [
        { value: "65%", label: "starten bei Google", context: "ihre Hotelsuche" },
        { value: "52%", label: "buchen über OTAs", context: "Rest direkt oder Maps" },
        { value: "€15-25", label: "Provision pro Buchung", context: "an OTAs gespart" },
        { value: "4.0★", label: "Mindest-Rating", context: "für 72% der Gäste" },
      ],
      source: "DEHOGA / Phocuswright",
      year: "2024",
    },
  ],
  ferienwohnungen: [
    {
      title: "Ferienwohnungen & Direktbuchung",
      stats: [
        { value: "43%", label: "suchen direkt", context: "über Google statt OTAs" },
        { value: "18%", label: "Provisionsersparnis", context: "bei Direktbuchung" },
        { value: "89%", label: "lesen Bewertungen", context: "vor jeder Buchung" },
        { value: "3.5x", label: "mehr Buchungen", context: "in der Hochsaison" },
      ],
      source: "DTV / Booking.com Insights",
      year: "2024",
    },
  ],
  tierarzt: [
    {
      title: "Tierarzt-Suche online",
      stats: [
        { value: "71%", label: "suchen online", context: "nach Tierärzten" },
        { value: "88%", label: "werten Bewertungen", context: "als wichtigstes Kriterium" },
        { value: "€380", label: "ø Jahresumsatz/Tier", context: "hoher Lebenszeitwert" },
        { value: "92%", label: "bleiben treu", context: "höchste Wiederkehrrate" },
      ],
      source: "Bundestierärztekammer",
      year: "2024",
    },
  ],
  optiker: [
    {
      title: "Optiker & Online-Präsenz",
      stats: [
        { value: "59%", label: "googeln Optiker", context: "vor dem Besuch" },
        { value: "74%", label: "vergleichen Preise", context: "online vs. Filiale" },
        { value: "€340", label: "ø Auftragswert", context: "Brille + Gläser" },
        { value: "3.9★", label: "ø Google-Rating", context: "branchenübergreifend" },
      ],
      source: "ZVA Branchenreport",
      year: "2024",
    },
  ],
  tattoo: [
    {
      title: "Tattoo-Studios & Online-Akquise",
      stats: [
        { value: "93%", label: "suchen online", context: "nach Tattoo-Studios" },
        { value: "81%", label: "bewerten Portfolio", context: "als wichtigstes Kriterium" },
        { value: "€250", label: "ø Sitzungspreis", context: "hoher Einzelwert" },
        { value: "67%", label: "über Instagram", context: "+ Google entdeckt" },
      ],
      source: "Tattoo-Branchenreport",
      year: "2024",
    },
  ],
  yoga: [
    {
      title: "Yoga-Studios & lokale Suche",
      stats: [
        { value: "64%", label: "suchen lokal", context: "nach Yoga in der Nähe" },
        { value: "78%", label: "wollen Probestunde", context: "als erstes Angebot" },
        { value: "€75", label: "ø Monatsbeitrag", context: "hohe Lifetime Value" },
        { value: "3.2x", label: "mehr Anmeldungen", context: "durch Google-Kursplan" },
      ],
      source: "BDY Yoga-Studie",
      year: "2024",
    },
  ],
  fitness: [
    {
      title: "Fitnessstudios & Mitgliedergewinnung",
      stats: [
        { value: "72%", label: "googeln Studios", context: "vor der Anmeldung" },
        { value: "68%", label: "vergleichen Preise", context: "Google ist Nr. 1 Kanal" },
        { value: "€49", label: "ø Monatsbeitrag", context: "x 18 Monate Binding" },
        { value: "4.2★", label: "Mindest-Rating", context: "für 55% der Suchenden" },
      ],
      source: "DSSV Eckdatenstudie",
      year: "2024",
    },
  ],
  fotograf: [
    {
      title: "Fotografen & Kundenakquise",
      stats: [
        { value: "83%", label: "suchen online", context: "nach Fotografen" },
        { value: "91%", label: "bewerten Portfolio", context: "als Entscheidungsfaktor" },
        { value: "€650", label: "ø Auftragsvolumen", context: "Hochzeit/Event" },
        { value: "58%", label: "buchen lokal", context: "im Umkreis von 30km" },
      ],
      source: "Freelens / BPP Branchendaten",
      year: "2024",
    },
  ],
};
