import type { IndustryRankingConfig } from '@/components/blog/IndustryRankingChallenges';

export const industryRankingConfigs: Record<string, IndustryRankingConfig> = {
  aerzte: {
    industry: 'Ärzte & Praxen',
    icon: '🏥',
    overallDifficulty: 'Sehr hoch',
    challenges: [
      {
        title: 'YMYL-Anforderungen verschärfen den Wettbewerb',
        difficulty: 'Sehr hoch',
        description: 'Google klassifiziert medizinische Inhalte als "Your Money or Your Life" und stellt extrem hohe Qualitätsanforderungen. Ohne klare E-E-A-T-Signale ist ein Top-Ranking nahezu unmöglich.',
        impact: 'Praxen ohne verifizierte Arzt-Qualifikationen verlieren bis zu 60% Sichtbarkeit',
        strategies: ['Arzt-Qualifikationen und Fachgebiete als Schema Markup hinterlegen', 'Autoren-Profile mit medizinischen Referenzen erstellen', 'Fachbeiträge auf medizinischen Portalen für E-E-A-T publizieren'],
        quickWin: 'Approbation und Facharzttitel in Google Business Beschreibung aufnehmen'
      },
      {
        title: 'Arztbewertungsportale dominieren Suchergebnisse',
        difficulty: 'Hoch',
        description: 'Jameda, Doctolib und sanego belegen oft die Top-3 für Arzt-Keywords. Die eigene Website muss gegen diese Autoritäts-Domains bestehen.',
        impact: 'Portale belegen 3-5 der Top-10 Ergebnisse für "[Fachgebiet] + [Stadt]"',
        strategies: ['Profile auf allen relevanten Portalen optimieren und verlinken', 'Eigene Website mit Long-Tail-Keywords positionieren', 'FAQ-Content zu spezifischen Behandlungen erstellen'],
        quickWin: 'Jameda-Profil vollständig ausfüllen und mit Website verlinken'
      },
      {
        title: 'Patientenbewertungen als Vertrauensfilter',
        difficulty: 'Hoch',
        description: 'Patienten lesen durchschnittlich 7 Bewertungen bevor sie einen Arzt wählen. Negative Bewertungen haben im medizinischen Bereich überproportionalen Einfluss.',
        impact: 'Praxen mit <4.2 Sternen verlieren bis zu 45% potentieller Neupatienten',
        strategies: ['Systematische Bewertungsanfrage nach erfolgreichen Behandlungen', 'Professionelle, DSGVO-konforme Antworten auf negative Bewertungen', 'Bewertungslinks auf Terminkarten und in E-Mail-Signaturen'],
        quickWin: 'QR-Code zur Google-Bewertung im Wartezimmer aufstellen'
      },
      {
        title: 'Kassenärzte vs. Privatärzte: Verschiedene Suchintents',
        difficulty: 'Mittel',
        description: '"Kassenarzt" und "Privatarzt/Wahlarzt" sind komplett verschiedene Suchintents mit unterschiedlichem Wettbewerb und Conversion-Verhalten.',
        impact: 'Klare Positionierung kann Conversion-Rate um 35% steigern',
        strategies: ['Separate Landing Pages für Kassen- und Privatpatienten', 'Google Business Attribute für Versicherungsarten setzen', 'Transparente Kosteninfos für Selbstzahler-Leistungen'],
        quickWin: 'Akzeptierte Versicherungen in Google Business Services auflisten'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '9.0/10', trend: 'up' },
      { label: 'YMYL-Impact', value: 'Sehr hoch', trend: 'up' },
      { label: 'Portal-Dominanz', value: '70%', trend: 'stable' },
      { label: 'Bewertungs-Einfluss', value: '93%', trend: 'up' }
    ],
    topStrategy: 'E-E-A-T als Fundament: Verifizierte medizinische Expertise, konsistente Portalpräsenz und aktive Bewertungsstrategie.',
    uniqueAdvantage: 'Ärzte haben natürliche Autorität. Wer diese digital sichtbar macht (Publikationen, Vorträge, Zertifizierungen), dominiert die Suchergebnisse.'
  },

  anwaelte: {
    industry: 'Anwälte & Kanzleien',
    icon: '⚖️',
    overallDifficulty: 'Sehr hoch',
    challenges: [
      {
        title: 'YMYL-Anforderungen für juristische Inhalte',
        difficulty: 'Sehr hoch',
        description: 'Juristische Inhalte unterliegen strengsten YMYL-Kriterien. Google prüft Expertise und Autorität besonders genau.',
        impact: 'Kanzleien ohne E-E-A-T-Signale ranken für keine transaktionalen Keywords',
        strategies: ['Anwaltszulassung und Fachanwaltstitel als Schema Markup', 'Autoren-Profile mit Kammer-Zugehörigkeit', 'Rechtsprechungs-Updates als Content-Strategie'],
        quickWin: 'Fachanwaltstitel in Google Business Unternehmensname (wenn zulässig)'
      },
      {
        title: 'Rechtsgebiets-Keywords sind extrem umkämpft',
        difficulty: 'Sehr hoch',
        description: '"Anwalt Arbeitsrecht [Stadt]" oder "Scheidungsanwalt [Stadt]" — generische Rechtsgebiets-Keywords haben enormen Wettbewerb.',
        impact: 'Top-3 für generische Anwalts-Keywords erfordert 12-18 Monate SEO-Arbeit',
        strategies: ['Nischen-Rechtsgebiete als Einstieg (z.B. "IT-Recht" statt "Wirtschaftsrecht")', 'Stadtteil + Rechtsgebiet als Long-Tail-Strategie', 'Häufige Rechtsfragen als FAQ-Content'],
        quickWin: '"Erstberatung kostenlos" oder "Ersteinschätzung" als Google Business Angebot'
      },
      {
        title: 'Anwaltsportale als Ranking-Konkurrenz',
        difficulty: 'Hoch',
        description: 'Anwalt.de, advocado und Klugo belegen regelmässig Top-Positionen. Die eigene Website konkurriert mit hochautoritären Domains.',
        impact: 'Portale kontrollieren 40-60% der Top-10 für lokale Anwalts-Keywords',
        strategies: ['Premium-Profile auf anwalt.de mit vollständiger Optimierung', 'Eigene Expertise-Seiten pro Rechtsgebiet erstellen', 'Mandantenreferenzen (anonymisiert) als Social Proof'],
        quickWin: 'Anwalt.de Profil mit Spezialisierungen und Bewertungen aktualisieren'
      },
      {
        title: 'Vertrauensaufbau bei sensiblen Rechtsfragen',
        difficulty: 'Mittel',
        description: 'Mandanten suchen bei emotionalen Themen (Scheidung, Strafrecht) besonders nach Vertrauen und Empathie — nicht nur Kompetenz.',
        impact: 'Kanzleien mit empathischer Kommunikation haben 40% höhere Kontaktrate',
        strategies: ['Erfahrungsberichte und Mandantenstimmen einbinden', 'Persönliche Anwalts-Videos für Vertrauensaufbau', 'Barrierefreie Erstberatungs-Buchung anbieten'],
        quickWin: 'Google Business Fotos mit professionellen Anwalts-Portraits aktualisieren'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '9.3/10', trend: 'up' },
      { label: 'YMYL-Impact', value: 'Sehr hoch', trend: 'up' },
      { label: 'CPC (Google Ads)', value: '8-25€', trend: 'up' },
      { label: 'Conversion-Rate', value: '3-7%', trend: 'stable' }
    ],
    topStrategy: 'Fachanwalts-Expertise + Nischen-Rechtsgebiete: Spezialisierung schlägt Generalismus im Local SEO für Kanzleien.',
    uniqueAdvantage: 'Fachanwaltstitel sind einzigartige E-E-A-T-Signale, die kein Wettbewerber fälschen kann. Maximale Sichtbarkeit dieser Qualifikationen ist der Schlüssel.'
  },

  restaurant: {
    industry: 'Restaurants & Gastronomie',
    icon: '🍽️',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Extrem hohe Wettbewerbsdichte in allen Städten',
        difficulty: 'Sehr hoch',
        description: 'Gastronomie hat die höchste Dichte an Google Business Profilen pro Quadratkilometer. Hunderte Wettbewerber im gleichen Einzugsgebiet.',
        impact: 'Nur die Top-3 im Local Pack erhalten relevanten Traffic — Position 4+ ist nahezu unsichtbar',
        strategies: ['Küchen-Spezialisierung statt generischer Restaurant-Keywords', 'Stadtteil-fokussierte Optimierung statt stadtweiter Konkurrenz', 'Google Business Posts zu Tagesmenüs und Events regelmässig veröffentlichen'],
        quickWin: 'Speisekarte als Google Business Menü hochladen'
      },
      {
        title: 'Lieferplattformen dominieren die Suchergebnisse',
        difficulty: 'Hoch',
        description: 'Lieferando, Uber Eats und Wolt belegen Top-Positionen für Gastro-Keywords und leiten Traffic von der eigenen Website ab.',
        impact: 'Plattformen nehmen 15-30% Provision — organische Sichtbarkeit spart direkt Marge',
        strategies: ['Eigene Website für direkte Bestellungen optimieren', 'Google Business Bestell-Link auf eigene Seite setzen (nicht Lieferando)', 'Long-Tail-Keywords wie "Restaurant mit Terrasse [Stadtteil]" nutzen'],
        quickWin: 'Direkten Reservierungs-/Bestell-Link in Google Business hinterlegen'
      },
      {
        title: 'Bewertungen als ultimativer Entscheidungsfaktor',
        difficulty: 'Hoch',
        description: '94% der Gäste lesen Bewertungen bevor sie ein Restaurant wählen. Eine einzige schlechte Bewertung kann Umsatz kosten.',
        impact: 'Restaurants mit 4.5+ Sternen erhalten 35% mehr Reservierungen',
        strategies: ['Automatisierte Bewertungsanfrage nach Restaurantbesuch', 'Schnelle, persönliche Antworten auf alle Bewertungen', 'Negative Bewertungen als Feedback nutzen und öffentlich lösen'],
        quickWin: 'Tischkarten mit QR-Code zur Google-Bewertung aufstellen'
      },
      {
        title: 'Saisonale und eventbasierte Nachfrage',
        difficulty: 'Mittel',
        description: 'Valentinstag, Weihnachtsfeiern, Oktoberfest — saisonale Keywords haben enormes Potenzial, werden aber oft zu spät optimiert.',
        impact: 'Event-Keywords bringen 200-500% mehr Traffic in Spitzenzeiten',
        strategies: ['Saisonalen Content-Kalender 3 Monate im Voraus planen', 'Dauerhafte Event-Seiten jährlich aktualisieren', 'Google Business Angebote zu saisonalen Menüs erstellen'],
        quickWin: 'Nächstes saisonales Event als Google Business Angebot eintragen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '8.5/10', trend: 'up' },
      { label: 'Bewertungs-Einfluss', value: '94%', trend: 'up' },
      { label: 'Mobile-Anteil', value: '85%', trend: 'up' },
      { label: 'Saisonalität', value: 'Hoch', trend: 'stable' }
    ],
    topStrategy: 'Spezialisierung + Bewertungsdominanz: Nischen-Küche mit 4.7+ Sternen schlägt generisches "Restaurant [Stadt]".',
    uniqueAdvantage: 'Gastro hat die höchste natürliche Bewertungsfrequenz. Jeder zufriedene Gast ist ein potentieller 5-Sterne-Review.'
  },

  handwerker: {
    industry: 'Handwerker & Gewerbe',
    icon: '🔧',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Notdienst-Keywords als Kampfzone',
        difficulty: 'Sehr hoch',
        description: '"Klempner Notdienst", "Elektriker Notfall" — zeitkritische Keywords haben höchste Conversion aber auch höchsten Wettbewerb und Betrugsrisiko.',
        impact: 'Notdienst-Anfragen haben Conversion-Raten von 25-40%',
        strategies: ['24/7-Erreichbarkeit in Google Business prominent anzeigen', 'Notdienst-Landing-Page mit schneller Kontaktmöglichkeit', 'Google Business Messaging für Sofort-Anfragen aktivieren'],
        quickWin: '"Notdienst" und "24h" in Google Business Beschreibung und Services aufnehmen'
      },
      {
        title: 'Einzugsgebiet vs. Standort-Optimierung',
        difficulty: 'Hoch',
        description: 'Handwerker arbeiten im gesamten Umkreis, haben aber nur einen Google Business Standort. Die Sichtbarkeit sinkt mit der Entfernung.',
        impact: 'Ab 10km Entfernung sinkt die Sichtbarkeit im Local Pack um 70%',
        strategies: ['Service-Area in Google Business auf alle bedienten Orte erweitern', 'Stadtteil-spezifische Landing Pages erstellen', 'Referenzen und Projekte nach Orten kategorisieren'],
        quickWin: 'Google Business Servicegebiet um alle bedienten Postleitzahlen erweitern'
      },
      {
        title: 'Vertrauen durch Qualifikationsnachweise',
        difficulty: 'Mittel',
        description: 'Kunden haben bei Handwerkern hohe Vertrauensanforderungen. Meisterbrief, Innungsmitgliedschaft und Versicherungsnachweise beeinflussen die Entscheidung.',
        impact: 'Handwerker mit sichtbaren Qualifikationen erhalten 50% mehr Anfragen',
        strategies: ['Meisterbrief und Zertifizierungen in Structured Data aufnehmen', 'Gütesiegel und Innungs-Logos auf Website und GBP anzeigen', 'Vorher-Nachher-Fotos als Kompetenznachweis'],
        quickWin: 'Innungs-Mitgliedschaft als Google Business Attribut hinzufügen'
      },
      {
        title: 'Saisonale Nachfrageschwankungen',
        difficulty: 'Mittel',
        description: 'Heizungsbauer im Winter, Gartenbauer im Frühling — saisonale Nachfrage erfordert vorausschauende SEO-Planung.',
        impact: 'Saisonale Spitzen bringen 150-300% mehr Suchanfragen',
        strategies: ['Saisonale Service-Seiten dauerhaft indexiert halten', 'Google Business Angebote saisonal anpassen', 'Content-Marketing zu saisonalen Themen (z.B. "Heizung winterfest machen")'],
        quickWin: 'Saisonales Angebot als Google Business Post veröffentlichen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.8/10', trend: 'up' },
      { label: 'Notdienst-Conversion', value: '25-40%', trend: 'up' },
      { label: 'Einzugsgebiet-Limit', value: '~15km', trend: 'stable' },
      { label: 'Mobile-Anteil', value: '82%', trend: 'up' }
    ],
    topStrategy: 'Notdienst-Sichtbarkeit + Einzugsgebiet-Expansion: Schnelle Erreichbarkeit und breite lokale Abdeckung sind die Schlüssel.',
    uniqueAdvantage: 'Handwerker haben natürliche Monopole in Nischen-Gewerken. Wer als einziger Spezialist in einem Gebiet sichtbar ist, bekommt alle Anfragen.'
  },

  hotels: {
    industry: 'Hotels & Unterkünfte',
    icon: '🏨',
    overallDifficulty: 'Sehr hoch',
    challenges: [
      {
        title: 'OTAs dominieren die Suchergebnisse',
        difficulty: 'Sehr hoch',
        description: 'Booking.com, Expedia und HRS belegen die Top-Positionen für nahezu alle Hotel-Keywords. Direktbuchungen über organische Suche sind hart umkämpft.',
        impact: 'OTAs nehmen 15-25% Provision — jede Direktbuchung steigert die Marge direkt',
        strategies: ['Brand-Keywords konsequent auf eigene Website optimieren', 'Google Hotel Ads für Preisvergleich nutzen', '"Best-Preis-Garantie bei Direktbuchung" als USP kommunizieren'],
        quickWin: 'Google Business Buchungs-Link auf eigene Website statt OTA setzen'
      },
      {
        title: 'Bewertungsquantität als Ranking-Faktor',
        difficulty: 'Hoch',
        description: 'Hotels brauchen hunderte Bewertungen um konkurrenzfähig zu sein. Die Bewertungsgeschwindigkeit ist ein eigenständiger Ranking-Faktor.',
        impact: 'Hotels mit 200+ Bewertungen ranken 40% besser als solche mit <50',
        strategies: ['Automatisierte Post-Stay-Bewertungsanfrage per E-Mail', 'Check-out-Prozess mit Bewertungs-Reminder', 'Auf allen Plattformen (Google, TripAdvisor, Booking) aktiv antworten'],
        quickWin: 'QR-Code zur Bewertung auf Zimmerkarten platzieren'
      },
      {
        title: 'Saisonalität und Event-abhängige Nachfrage',
        difficulty: 'Hoch',
        description: 'Messen, Festivals, Feiertage — Hotel-Nachfrage ist extrem saisonal und event-getrieben.',
        impact: 'Event-Wochen bringen 400%+ mehr Suchanfragen',
        strategies: ['Event-spezifische Landing Pages dauerhaft indexiert halten', 'Google Business Angebote zu Events erstellen', 'Content-Marketing zu lokalen Sehenswürdigkeiten und Events'],
        quickWin: 'Nächste 5 Grossevents als Google Business Events eintragen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '9.5/10', trend: 'up' },
      { label: 'OTA-Dominanz', value: '75%+', trend: 'stable' },
      { label: 'Bewertungs-Minimum', value: '200+', trend: 'up' },
      { label: 'Mobile Buchungen', value: '68%', trend: 'up' }
    ],
    topStrategy: 'Direktbuchungs-Strategie: Brand-SEO + Best-Preis-Garantie um OTA-Provisionen zu umgehen.',
    uniqueAdvantage: 'Hotels haben tausende potenzielle Bewerter pro Jahr. Wer systematisch Bewertungen sammelt, baut einen uneinholbaren Vorsprung auf.'
  },

  fitness: {
    industry: 'Fitnessstudios & Gyms',
    icon: '🏋️',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Ketten vs. Boutique-Studios',
        difficulty: 'Hoch',
        description: 'McFit, FitX und andere Ketten dominieren generische Keywords mit enormem SEO-Budget. Boutique-Studios müssen Nischen besetzen.',
        impact: 'Ketten kontrollieren 50-70% der Top-10 für "Fitnessstudio [Stadt]"',
        strategies: ['Spezialisierung als USP (CrossFit, Yoga, EMS, Kampfsport)', 'Stadtteil-Keywords statt stadtweiter Konkurrenz', 'Community und persönliche Betreuung als Differenzierung'],
        quickWin: 'Spezialisierungen als Google Business Attribute und Services hinzufügen'
      },
      {
        title: 'Saisonale Nachfrage (Neujahrsvorsätze)',
        difficulty: 'Mittel',
        description: 'Januar und September sind Peak-Monate für Fitness-Suchanfragen. Wer hier nicht sichtbar ist, verliert die wichtigsten Neukundenwochen.',
        impact: 'Januar bringt 250% mehr Suchanfragen als Durchschnittsmonate',
        strategies: ['Neujahrs-Angebote ab November vorbereiten und SEO-optimieren', '"Probetraining kostenlos" als ganzjährigen Conversion-Magnet nutzen', 'Content zu saisonalen Fitness-Themen (Sommerfigur, Wintertraining)'],
        quickWin: 'Google Business Angebot "Kostenloses Probetraining" dauerhaft aktivieren'
      },
      {
        title: 'Google Maps Radius-Limitierung',
        difficulty: 'Hoch',
        description: 'Potenzielle Mitglieder suchen "Fitnessstudio in der Nähe" — und Google zeigt nur Studios im unmittelbaren Umkreis.',
        impact: 'Ab 3km Entfernung sinkt die Local Pack Sichtbarkeit um 80%',
        strategies: ['Stadtteil-Name in allen Profilen und auf der Website prominent nutzen', 'Mehrere Service-Standorte (falls vorhanden) separat listen', 'Gute Erreichbarkeit (ÖPNV, Parkplätze) hervorheben'],
        quickWin: 'Nahegelegene ÖPNV-Haltestellen in Google Business Beschreibung aufnehmen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '8.0/10', trend: 'up' },
      { label: 'Saisonalität', value: 'Sehr hoch', trend: 'stable' },
      { label: 'Radius-Limit', value: '~3km', trend: 'stable' },
      { label: 'Probe-Conversion', value: '15-25%', trend: 'up' }
    ],
    topStrategy: 'Nischen-Spezialisierung + Probetraining-Funnel: Wer eine klare Zielgruppe bedient und den Erstkontakt einfach macht, gewinnt.',
    uniqueAdvantage: 'Fitness hat die höchste emotionale Bindung. Zufriedene Mitglieder werden zu Markenbotschaftern — Social Proof durch Community.'
  },

  steuerberater: {
    industry: 'Steuerberater & Kanzleien',
    icon: '📊',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Vertrauensaufbau bei sensiblen Finanzdaten',
        difficulty: 'Hoch',
        description: 'Mandanten vertrauen Steuerberatern ihre gesamte finanzielle Situation an. Vertrauenssignale online sind entscheidend für die Kontaktaufnahme.',
        impact: 'Kanzleien mit starken Vertrauenssignalen erhalten 55% mehr Erstanfragen',
        strategies: ['Kammer-Zugehörigkeit und Berufsbezeichnung prominent anzeigen', 'Mandantenstimmen und Erfolgsgeschichten (anonymisiert) publizieren', 'Transparente Preismodelle oder Erstberatungs-Infos anbieten'],
        quickWin: 'Steuerberater-Kammer-Logo und Qualifikationen in Google Business aufnehmen'
      },
      {
        title: 'Saisonale Spitze rund um Steuererklärung',
        difficulty: 'Mittel',
        description: 'Die Monate März-Juli dominieren das Suchvolumen. Wer ausserhalb dieser Zeit investiert, hat weniger Wettbewerb.',
        impact: 'März-Mai bringt 180% mehr Suchanfragen als Durchschnitt',
        strategies: ['Ganzjährig Content zu Steuer-News und Gesetzesänderungen', 'Steuertipps-Blog als Dauerbrenner für organischen Traffic', 'Google Business Posts zu aktuellen Fristen und Änderungen'],
        quickWin: 'Aktuelle Steuerfristen als Google Business FAQ hinterlegen'
      },
      {
        title: 'Spezialisierung vs. Generalismus',
        difficulty: 'Mittel',
        description: 'Generische "Steuerberater [Stadt]" Keywords sind umkämpft. Spezialisierungen (Freiberufler, E-Commerce, Ärzteberatung) bieten Nischen-Chancen.',
        impact: 'Spezialisierte Keywords haben 60% weniger Wettbewerb bei gleicher Conversion',
        strategies: ['Branchenspezifische Landing Pages erstellen', 'Fach-Content zu Spezialisierungen veröffentlichen', 'Google Business Services nach Spezialisierungen strukturieren'],
        quickWin: 'Spezialisierungen als einzelne Google Business Services anlegen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.5/10', trend: 'up' },
      { label: 'Vertrauens-Impact', value: 'Sehr hoch', trend: 'stable' },
      { label: 'Saisonalität', value: 'Hoch', trend: 'stable' },
      { label: 'Mandant-Lifetime', value: '5-15 Jahre', trend: 'stable' }
    ],
    topStrategy: 'Spezialisierung + Vertrauensaufbau: Wer als Experte für eine Zielgruppe wahrgenommen wird, gewinnt langfristige Mandanten.',
    uniqueAdvantage: 'Steuerberater haben die längste Kundenbindung aller Dienstleister. Jeder gewonnene Mandant ist ein langfristiger Wert.'
  },

  zahnarzt: {
    industry: 'Zahnärzte & Zahnarztpraxen',
    icon: '🦷',
    overallDifficulty: 'Sehr hoch',
    challenges: [
      {
        title: 'Höchster Wettbewerb aller medizinischen Branchen',
        difficulty: 'Sehr hoch',
        description: 'Zahnärzte haben die höchste Google Business Dichte im Gesundheitswesen. In Grossstädten konkurrieren 200+ Praxen um die gleichen Keywords.',
        impact: 'Top-3 für "Zahnarzt [Stadt]" erfordert 12+ Monate konsequente Optimierung',
        strategies: ['Spezialisierung (Implantologie, Kieferorthopädie, Angstpatienten) als Nische', 'Stadtteil-Keywords statt stadtweiter Konkurrenz', 'Vorher-Nachher-Galerien als Content-Strategie'],
        quickWin: 'Behandlungsschwerpunkte als Google Business Services anlegen'
      },
      {
        title: 'Angstpatienten als unerschlossene Zielgruppe',
        difficulty: 'Mittel',
        description: '"Zahnarzt Angstpatienten" und "schmerzfreie Behandlung" sind wachsende Suchbegriffe mit vergleichsweise wenig Wettbewerb.',
        impact: 'Angstpatienten-Keywords wachsen um 30% jährlich',
        strategies: ['Dedizierte Angstpatienten-Seite mit empathischem Content', '"Sanfte Zahnmedizin" als USP in allen Profilen kommunizieren', 'Video-Testimonials von ehemaligen Angstpatienten'],
        quickWin: '"Angstpatienten willkommen" in Google Business Beschreibung aufnehmen'
      },
      {
        title: 'Ästhetische Zahnmedizin als Premium-Segment',
        difficulty: 'Hoch',
        description: 'Bleaching, Veneers und Invisalign sind hochmargige Leistungen mit wachsendem Suchvolumen aber starkem Wettbewerb.',
        impact: 'Ästhetik-Keywords haben 3× höheren Patienten-Wert als Standardbehandlungen',
        strategies: ['Portfolio-Seite mit Vorher-Nachher-Bildern', 'Instagram-Integration für visuelle Social Signals', 'Preis-Transparenz als Conversion-Faktor'],
        quickWin: 'Vorher-Nachher-Fotos auf Google Business hochladen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '9.5/10', trend: 'up' },
      { label: 'Angst-Keywords', value: '+30%/Jahr', trend: 'up' },
      { label: 'Ästhetik-Wert', value: '3× höher', trend: 'up' },
      { label: 'Bewertungs-Einfluss', value: '96%', trend: 'up' }
    ],
    topStrategy: 'Spezialisierungs-Nischen (Angstpatienten, Ästhetik, Kinder) + visuelle Content-Strategie mit Vorher-Nachher-Ergebnissen.',
    uniqueAdvantage: 'Zahnärzte können Ergebnisse visuell zeigen. Vorher-Nachher-Bilder sind der stärkste Content-Typ in dieser Branche.'
  },

  immobilienmakler: {
    industry: 'Immobilienmakler',
    icon: '🏠',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Portale dominieren organische Suche',
        difficulty: 'Sehr hoch',
        description: 'Immoscout24, Immowelt und Immonet belegen fast alle Top-Positionen für Immobilien-Keywords. Eigene Websites haben es schwer.',
        impact: 'Portale kontrollieren 80%+ der organischen Sichtbarkeit für Immobilien-Keywords',
        strategies: ['Hyper-lokale Stadtteil-Expertise als Differenzierung', 'Lokale Marktberichte und Preisanalysen als Content', 'Google Business für "Immobilienmakler [Stadtteil]" optimieren'],
        quickWin: 'Stadtteil-Expertise in Google Business Beschreibung prominent platzieren'
      },
      {
        title: 'Vertrauensaufbau bei Lebens-Entscheidungen',
        difficulty: 'Hoch',
        description: 'Immobilienkauf ist die grösste finanzielle Entscheidung im Leben. Vertrauenssignale sind absolut entscheidend.',
        impact: 'Makler mit IHK-Zertifizierung und Referenzen erhalten 60% mehr Anfragen',
        strategies: ['Zertifizierungen (IHK, §34c) als Structured Data', 'Video-Testimonials von zufriedenen Kunden', 'Transparente Maklergebühren kommunizieren'],
        quickWin: 'IHK-Zertifizierung und Referenzen auf Google Business hinzufügen'
      },
      {
        title: 'Lokale Marktexpertise als SEO-Hebel',
        difficulty: 'Mittel',
        description: 'Wer lokale Immobilienmarkt-Daten teilt, positioniert sich als Experte und generiert organischen Traffic über Long-Tail-Keywords.',
        impact: 'Marktberichte generieren 40% mehr qualifizierte Leads als generische Seiten',
        strategies: ['Quartals-Marktberichte pro Stadtteil veröffentlichen', 'Interaktive Preis-Maps als Link-Magneten', 'Lokale Entwicklungsprojekte und Infrastruktur als Content-Themen'],
        quickWin: 'Aktuellen Stadtteil-Marktbericht als Blog-Beitrag veröffentlichen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '8.8/10', trend: 'up' },
      { label: 'Portal-Dominanz', value: '80%+', trend: 'stable' },
      { label: 'Lead-Wert', value: 'Sehr hoch', trend: 'up' },
      { label: 'Vertrauens-Impact', value: '95%', trend: 'stable' }
    ],
    topStrategy: 'Lokale Marktexpertise als Content-Strategie: Stadtteil-Berichte, Preis-Analysen und lokale Insights schaffen Autorität.',
    uniqueAdvantage: 'Immobilienmakler haben exklusive lokale Marktdaten. Wer diese teilt, wird zur ersten Anlaufstelle für Käufer und Verkäufer.'
  },

  friseur: {
    industry: 'Friseursalons & Beauty',
    icon: '💇',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Extremer lokaler Wettbewerb',
        difficulty: 'Hoch',
        description: 'Friseursalons haben die höchste Geschäftsdichte pro Einwohner. In Innenstädten konkurrieren dutzende Salons im gleichen Kilometer.',
        impact: 'Sichtbarkeit im Local Pack sinkt ab 500m Entfernung drastisch',
        strategies: ['Spezialisierung (Locken, Färben, Herren, Brautfrisuren) als Nische', 'Instagram-Portfolio als Social Signal nutzen', 'Google Business Fotos wöchentlich mit aktuellen Arbeiten aktualisieren'],
        quickWin: 'Portfolio-Fotos (Vorher-Nachher) auf Google Business hochladen'
      },
      {
        title: 'Buchungsplattformen als Wettbewerber',
        difficulty: 'Hoch',
        description: 'Treatwell, Booksy und andere Plattformen ranken für Friseur-Keywords und leiten Kunden über ihre eigenen Systeme.',
        impact: 'Plattformen nehmen 10-20% Provision auf vermittelte Termine',
        strategies: ['Eigenes Online-Buchungssystem mit Google Reserve integrieren', 'Google Business Termin-Link auf eigene Buchung setzen', 'Stammkunden-Programme für Direktbuchungen anbieten'],
        quickWin: 'Google Business Buchungs-Link auf eigenes System umstellen'
      },
      {
        title: 'Visueller Content als Ranking-Differenzierung',
        difficulty: 'Mittel',
        description: 'Im Beauty-Bereich entscheiden Bilder. Salons mit hochwertigem visuellem Content haben massiv bessere Klickraten.',
        impact: 'Salons mit 50+ Google Business Fotos erhalten 3× mehr Profilaufrufe',
        strategies: ['Professionelle Fotos von Ergebnissen regelmässig posten', 'Kurze Video-Reels für Google Business und Social Media', 'Konsistente visuelle Marke über alle Plattformen'],
        quickWin: 'Mindestens 30 hochwertige Fotos auf Google Business hochladen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '8.2/10', trend: 'up' },
      { label: 'Foto-Impact', value: '3× Klicks', trend: 'up' },
      { label: 'Radius-Limit', value: '~1km', trend: 'stable' },
      { label: 'Mobile-Anteil', value: '88%', trend: 'up' }
    ],
    topStrategy: 'Visueller Content + Spezialisierung: Hochwertige Vorher-Nachher-Fotos mit klarer Nischen-Positionierung.',
    uniqueAdvantage: 'Beauty ist die visuellste Branche. Wer die besten Fotos hat, gewinnt — unabhängig vom SEO-Budget.'
  },

  autowerkstatt: {
    industry: 'Autowerkstätten & KFZ',
    icon: '🚗',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Notfall-Suchen vs. geplante Wartung',
        difficulty: 'Hoch',
        description: 'KFZ-Suchen teilen sich in Notfälle ("Autopanne Hilfe") und geplante Termine ("TÜV [Stadt]"). Beide erfordern unterschiedliche Strategien.',
        impact: 'Notfall-Keywords haben 5× höhere Conversion-Rate als Wartungs-Keywords',
        strategies: ['Separate Notdienst-Seite mit Click-to-Call', 'Wartungs-Content mit saisonalem Bezug (Wintercheck, Reifenwechsel)', 'Google Business Öffnungszeiten aktuell halten (Samstags-Service!)'],
        quickWin: 'Telefonnummer als prominent Click-to-Call auf mobiler Website einbauen'
      },
      {
        title: 'Marken-Spezialisierung als Nische',
        difficulty: 'Mittel',
        description: '"BMW Werkstatt [Stadt]" oder "VW Spezialist" haben deutlich weniger Wettbewerb als generische KFZ-Keywords.',
        impact: 'Marken-spezifische Keywords haben 45% weniger Wettbewerb',
        strategies: ['Marken-Spezialisierungen als eigene Landing Pages', 'Google Business Services nach Automarken strukturieren', 'Marken-spezifische Bewertungen hervorheben'],
        quickWin: 'Automarken-Spezialisierungen in Google Business Services aufnehmen'
      },
      {
        title: 'Preistransparenz als Conversion-Faktor',
        difficulty: 'Mittel',
        description: 'Kunden misstrauen Werkstätten. Transparente Preise und klare Kostenvoranschläge online sind ein massiver Wettbewerbsvorteil.',
        impact: 'Werkstätten mit Online-Preislisten erhalten 40% mehr Terminanfragen',
        strategies: ['Preisliste für Standardleistungen auf Website veröffentlichen', 'Online-Kostenrechner für gängige Reparaturen', '"Keine versteckten Kosten" als USP kommunizieren'],
        quickWin: 'Ölwechsel- und Inspektion-Preise auf Google Business Angebote stellen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.5/10', trend: 'stable' },
      { label: 'Notfall-Conversion', value: '30-45%', trend: 'up' },
      { label: 'Preis-Transparenz', value: '+40% Leads', trend: 'up' },
      { label: 'Mobile-Anteil', value: '79%', trend: 'up' }
    ],
    topStrategy: 'Marken-Spezialisierung + Preistransparenz: Vertrauen durch Offenheit und Expertise für spezifische Fahrzeugtypen.',
    uniqueAdvantage: 'Stammkunden-Potenzial ist enorm. Jeder zufriedene Kunde bleibt jahrelang und empfiehlt weiter.'
  },

  sanitaer: {
    industry: 'Sanitär & Heizung',
    icon: '🔧',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Notdienst-Keywords sind Goldgrube und Minenfeld',
        difficulty: 'Sehr hoch',
        description: '"Sanitär Notdienst", "Rohrbruch Hilfe" — höchste Conversion-Rates aber auch Betrugsfirmen und Preistreiber im Wettbewerb.',
        impact: 'Notdienst-Anfragen konvertieren mit 35-50%, Durchschnitts-Auftragswert hoch',
        strategies: ['Transparente Notdienst-Preise online veröffentlichen', '24/7-Erreichbarkeit in Google Business und Website', 'Verifizierte Innungsmitgliedschaft als Vertrauenssignal'],
        quickWin: '"Innungsbetrieb — transparente Preise" in Google Business Beschreibung'
      },
      {
        title: 'Energiewende treibt neue Keywords',
        difficulty: 'Mittel',
        description: 'Wärmepumpe, Solarthermie, Pelletheizung — die Energiewende schafft neue Suchbegriffe mit rapidem Volumenwachstum.',
        impact: '"Wärmepumpe installieren [Stadt]" wächst um 60% jährlich',
        strategies: ['Energiewende-Content als SEO-Strategie', 'Fördermittel-Beratung als Lead-Magnet', 'Referenz-Projekte mit modernen Heizsystemen zeigen'],
        quickWin: 'Wärmepumpe und Solarthermie als Google Business Services hinzufügen'
      },
      {
        title: 'Grosses Einzugsgebiet, ein Standort',
        difficulty: 'Hoch',
        description: 'SHK-Betriebe bedienen oft 30km+ Radius, aber Google zeigt sie nur im unmittelbaren Umkreis des Standorts.',
        impact: 'Service-Area-Expansion kann Sichtbarkeit um 200% steigern',
        strategies: ['Service-Area in Google Business grosszügig definieren', 'Orts-spezifische Landing Pages für alle bedienten Gemeinden', 'Lokale Referenzen nach Orten kategorisiert auf Website zeigen'],
        quickWin: 'Alle bedienten Postleitzahlen in Google Business Servicegebiet eintragen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.8/10', trend: 'up' },
      { label: 'Notdienst-Conversion', value: '35-50%', trend: 'up' },
      { label: 'Energiewende-Wachstum', value: '+60%/Jahr', trend: 'up' },
      { label: 'Einzugsgebiet', value: '~30km', trend: 'stable' }
    ],
    topStrategy: 'Notdienst-Vertrauen + Energiewende-Expertise: Transparente Preise für Notfälle und Kompetenz bei modernen Heizsystemen.',
    uniqueAdvantage: 'Die Energiewende schafft jedes Jahr neue Keyword-Nischen, die von der Konkurrenz noch nicht besetzt sind.'
  },

  elektrotechnik: {
    industry: 'Elektrotechnik & Elektriker',
    icon: '⚡',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'E-Mobilität schafft neue Suchbegriffe',
        difficulty: 'Mittel',
        description: '"Wallbox Installation", "Ladestation Zuhause" — E-Mobilität treibt komplett neue Keywords mit wenig Wettbewerb.',
        impact: 'E-Mobilitäts-Keywords wachsen um 80% jährlich',
        strategies: ['E-Mobilitäts-Landing-Page mit Fördermittel-Infos', 'Smart Home als zweites Wachstumsthema positionieren', 'Referenz-Projekte mit Wallbox-Installationen zeigen'],
        quickWin: '"Wallbox Installation" und "E-Auto Ladestation" als Google Business Services'
      },
      {
        title: 'Notdienst als Türöffner für Stammkunden',
        difficulty: 'Hoch',
        description: 'Elektrische Notfälle (Stromausfall, defekte Sicherung) sind Erstberührungspunkte für langfristige Kundenbeziehungen.',
        impact: '60% der Notdienst-Kunden werden zu Stammkunden',
        strategies: ['24h-Notdienst prominent auf allen Kanälen kommunizieren', 'Schnelle Reaktionszeit als Ranking-Signal nutzen', 'Follow-up nach Notdienst für Elektro-Check oder Smart Home'],
        quickWin: 'Google Business Messaging für schnelle Notdienst-Anfragen aktivieren'
      },
      {
        title: 'Smart Home als Premium-Nische',
        difficulty: 'Niedrig',
        description: '"Smart Home Elektriker" und "KNX Installation" haben wachsendes Volumen und sehr wenig lokalen Wettbewerb.',
        impact: 'Smart Home Aufträge haben 3× höheren Durchschnittswert als Standard-Elektrik',
        strategies: ['Dedizierte Smart Home Seite mit Technologie-Showcase', 'Partnerschaften mit Smart Home Herstellern für Backlinks', 'YouTube-Content zu Smart Home Installationen'],
        quickWin: 'Smart Home Spezialisierung in Google Business Beschreibung aufnehmen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.5/10', trend: 'stable' },
      { label: 'E-Mobilität', value: '+80%/Jahr', trend: 'up' },
      { label: 'Smart Home', value: '3× Wert', trend: 'up' },
      { label: 'Notdienst → Stamm', value: '60%', trend: 'stable' }
    ],
    topStrategy: 'Zukunfts-Nischen besetzen: E-Mobilität und Smart Home sind die SEO-Goldgruben für Elektriker.',
    uniqueAdvantage: 'Elektriker sind an der Schnittstelle aller Zukunfts-Technologien (E-Mobilität, Smart Home, Solar). Frühe Positionierung sichert langfristige Dominanz.'
  },

  physiotherapie: {
    industry: 'Physiotherapie & Reha',
    icon: '🏃',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Kassenpatienten vs. Selbstzahler SEO',
        difficulty: 'Hoch',
        description: 'Kassenpraxen suchen Patientenvolumen, Privatpraxen suchen zahlungskräftige Selbstzahler. Beide brauchen unterschiedliche Keywords.',
        impact: 'Klare Positionierung steigert Conversion um 40%',
        strategies: ['Separate Content-Strategien für Kassen- und Selbstzahler-Leistungen', 'Spezialisierungen (Sport, Neurologie, Orthopädie) als Nische', 'Online-Terminbuchung als Conversion-Tool'],
        quickWin: 'Kassenleistungen und Selbstzahler-Angebote als separate Google Business Services'
      },
      {
        title: 'Ärztekooperationen als Ranking-Hebel',
        difficulty: 'Mittel',
        description: 'Überweisungen von Ärzten sind der wichtigste Akquisitionskanal. Digitale Sichtbarkeit bei zuweisenden Ärzten ist unterschätzt.',
        impact: '70% der Neupatienten kommen über Arzt-Überweisungen',
        strategies: ['Ärzte-Verzeichnisse und Überweiser-Portale optimieren', 'Kooperationen mit lokalen Ärzten für gegenseitige Empfehlungen', 'Fachliche Qualifikationen prominent auf Website und GBP zeigen'],
        quickWin: 'Zusammenarbeit mit lokalen Ärzten auf Website und in Google Business erwähnen'
      },
      {
        title: 'Behandlungsspezifische Long-Tail-Keywords',
        difficulty: 'Niedrig',
        description: '"Physiotherapie nach Kreuzband-OP [Stadt]" hat wenig Wettbewerb aber hohe Conversion. Behandlungsspezifische Keywords sind unterbedient.',
        impact: 'Long-Tail-Keywords haben 3× höhere Conversion-Rate als generische',
        strategies: ['Behandlungsspezifische Unterseiten für die häufigsten Diagnosen', 'FAQ-Content zu spezifischen Rehabilitationsprogrammen', 'Patienten-Erfahrungsberichte nach Behandlungsart kategorisieren'],
        quickWin: 'Die 5 häufigsten Behandlungen als eigene Google Business Services anlegen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.8/10', trend: 'up' },
      { label: 'Ärzte-Überweisungen', value: '70%', trend: 'stable' },
      { label: 'Long-Tail Chance', value: 'Hoch', trend: 'up' },
      { label: 'Online-Buchung', value: '+45%', trend: 'up' }
    ],
    topStrategy: 'Behandlungs-Spezialisierung + Ärzte-Netzwerk: Wer als Spezialist für bestimmte Diagnosen sichtbar ist, bekommt die Überweisungen.',
    uniqueAdvantage: 'Physiotherapie hat natürliche Wiederholungstermine. Jeder Erstpatient bedeutet 6-12 Folgetermine — höchster Lifetime Value.'
  },

  optiker: {
    industry: 'Optiker & Augenoptik',
    icon: '👓',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Filialketten dominieren generische Keywords',
        difficulty: 'Hoch',
        description: 'Fielmann, Apollo und Mister Spex kontrollieren die Top-Positionen für "Optiker [Stadt]" mit enormem Marketing-Budget.',
        impact: 'Ketten belegen 60-80% der Top-10 für generische Optiker-Keywords',
        strategies: ['Spezialisierung (Sportbrillen, Kinderbrillen, Kontaktlinsen-Anpassung) als Nische', 'Persönliche Beratung und individuelle Gläser als USP', 'Stadtteil-Keywords statt stadtweiter Konkurrenz'],
        quickWin: 'Spezialisierungen (z.B. "Gleitsichtgläser-Spezialist") in Google Business aufnehmen'
      },
      {
        title: 'Online-Optiker als wachsende Konkurrenz',
        difficulty: 'Mittel',
        description: 'Online-Händler (Mister Spex, Brille24) konkurrieren zunehmend um lokale Keywords durch Click-and-Collect.',
        impact: 'Online-Optiker wachsen 25% jährlich und investieren in Local SEO',
        strategies: ['Persönliche Beratung und Anpassung als nicht-digital-replizierbar positionieren', 'Same-Day-Service und Express-Reparaturen als USP', 'Spezielle Beratungsleistungen (Sehtest, Anpassung) als Google Business Services'],
        quickWin: '"Kostenloser Sehtest" als Google Business Angebot aktivieren'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.5/10', trend: 'up' },
      { label: 'Ketten-Dominanz', value: '70%', trend: 'stable' },
      { label: 'Online-Wachstum', value: '+25%/Jahr', trend: 'up' },
      { label: 'Beratungs-Wert', value: 'Hoch', trend: 'stable' }
    ],
    topStrategy: 'Persönliche Expertise als Differenzierung: Was online nicht möglich ist (individuelle Anpassung, komplexe Gläser) als USP positionieren.',
    uniqueAdvantage: 'Optiker bieten eine einzigartige Kombination aus Handwerk und Gesundheitsberatung — das kann kein Online-Händler replizieren.'
  },

  apotheke: {
    industry: 'Apotheken',
    icon: '💊',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Online-Apotheken als Preis-Wettbewerber',
        difficulty: 'Hoch',
        description: 'DocMorris, Shop-Apotheke und andere Online-Apotheken dominieren Produkt-Keywords. Lokale Apotheken müssen Beratung und Service als USP nutzen.',
        impact: 'Online-Apotheken wachsen 20% jährlich und investieren in SEO',
        strategies: ['Beratungsleistungen als nicht-digital-replizierbar positionieren', 'Notdienst und sofortige Verfügbarkeit als USP', 'Lokale Gesundheitsberatung als Content-Strategie'],
        quickWin: '"Persönliche Beratung vor Ort" und Notdienst-Info in Google Business'
      },
      {
        title: 'Notdienst als Sichtbarkeits-Boost',
        difficulty: 'Niedrig',
        description: '"Apotheke Notdienst [Stadt]" hat konstantes Suchvolumen und führt zu Erstkontakten mit neuen Kunden.',
        impact: 'Notdienst-Nächte bringen 30+ neue Kundenkontakte pro Einsatz',
        strategies: ['Notdienst-Termine auf Website und Google Business aktuell halten', 'Google Business Posts an Notdienst-Tagen veröffentlichen', 'Notdienst-Seite mit aktueller Kalender-Integration'],
        quickWin: 'Nächste Notdienst-Termine als Google Business Events eintragen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.5/10', trend: 'up' },
      { label: 'Online-Konkurrenz', value: '+20%/Jahr', trend: 'up' },
      { label: 'Beratungs-Wert', value: 'Hoch', trend: 'stable' },
      { label: 'Notdienst-Impact', value: '30+ Kontakte', trend: 'stable' }
    ],
    topStrategy: 'Beratung + Notdienst als Alleinstellungsmerkmal: Was Online-Apotheken nicht bieten können, ist der persönliche Kontakt.',
    uniqueAdvantage: 'Apotheken geniessen höchstes Vertrauen aller Gesundheitsberufe. Dieses Vertrauen digital sichtbar zu machen, ist der Schlüssel.'
  },

  doener: {
    industry: 'Döner & Imbiss',
    icon: '🥙',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Extrem lokaler Wettbewerb im Umkreis von Metern',
        difficulty: 'Hoch',
        description: 'In Innenstädten stehen Dönerläden oft direkt nebeneinander. Der Google Maps Radius-Effekt ist hier am stärksten.',
        impact: 'Schon 200m Entfernung können über Sichtbarkeit entscheiden',
        strategies: ['Google Business Profil maximal optimieren (Fotos, Beschreibung, Attribute)', 'Bewertungen als #1 Differenzierungsmerkmal nutzen', 'Menü und Preise vollständig auf Google Business hinterlegen'],
        quickWin: 'Mindestens 20 hochwertige Fotos (Gerichte, Zubereitung, Laden) hochladen'
      },
      {
        title: 'Lieferplattformen vs. Laufkundschaft',
        difficulty: 'Mittel',
        description: 'Lieferando und Wolt dominieren Online-Bestellungen, aber Laufkundschaft bleibt das Hauptgeschäft. Beide Kanäle optimieren.',
        impact: 'Google Maps "Restaurants in der Nähe" treibt 70% der Laufkundschaft',
        strategies: ['Google Business für Laufkundschaft optimieren (Fotos, Öffnungszeiten)', 'Eigene Bestell-Website für provisionsfreie Lieferungen', 'Google Business "Bestellen" Link auf eigene Seite statt Lieferando'],
        quickWin: 'Aktuelle Öffnungszeiten und Menü auf Google Business pflegen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.0/10', trend: 'stable' },
      { label: 'Radius-Impact', value: '~200m', trend: 'stable' },
      { label: 'Foto-Einfluss', value: '+85% Klicks', trend: 'up' },
      { label: 'Bewertungs-Einfluss', value: '90%', trend: 'up' }
    ],
    topStrategy: 'Fotos + Bewertungen: Im Imbiss-Bereich entscheiden appetitliche Bilder und hohe Sternebewertungen.',
    uniqueAdvantage: 'Imbisse haben die höchste Bewertungsfrequenz aller Branchen. Jeder Besuch ist eine Bewertungs-Chance.'
  },

  tattoo: {
    industry: 'Tattoo-Studios',
    icon: '🎨',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Portfolio als wichtigster Ranking-Faktor',
        difficulty: 'Hoch',
        description: 'Kunden wählen Tattoo-Künstler primär nach Stil und Portfolio. Ohne hochwertige Bilder keine Anfragen.',
        impact: 'Studios mit 100+ Google Business Fotos erhalten 4× mehr Anfragen',
        strategies: ['Professionelle Portfolio-Fotos regelmässig hochladen', 'Instagram als Haupt-Portfolio-Plattform mit Google Business verknüpfen', 'Stil-spezifische Landing Pages (Realistic, Traditional, Watercolor)'],
        quickWin: 'Beste 50 Portfolio-Stücke auf Google Business hochladen'
      },
      {
        title: 'Stil-Keywords als Nischen-Strategie',
        difficulty: 'Niedrig',
        description: '"Watercolor Tattoo [Stadt]" oder "Japanese Tattoo [Stadt]" haben deutlich weniger Wettbewerb als generische Tattoo-Keywords.',
        impact: 'Stil-spezifische Keywords konvertieren 3× besser als generische',
        strategies: ['Pro Tattoo-Stil eine eigene Landing Page erstellen', 'Stil-Bezeichnungen in Google Business Services aufnehmen', 'Portfolio nach Stilen kategorisieren'],
        quickWin: 'Tattoo-Stile als Google Business Services mit Beispielfotos anlegen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.0/10', trend: 'stable' },
      { label: 'Portfolio-Impact', value: '4× Anfragen', trend: 'up' },
      { label: 'Stil-Keywords', value: '-60% Wettb.', trend: 'stable' },
      { label: 'Instagram-Einfluss', value: 'Sehr hoch', trend: 'up' }
    ],
    topStrategy: 'Visuelles Portfolio + Stil-Spezialisierung: Wer den besten visuellen Content hat, gewinnt.',
    uniqueAdvantage: 'Tattoo ist die persönlichste aller Dienstleistungen. Einzigartiger Stil ist ein Alleinstellungsmerkmal, das kein Wettbewerber kopieren kann.'
  },

  baeckerei: {
    industry: 'Bäckereien & Konditoreien',
    icon: '🥐',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Ketten vs. Handwerksbäcker',
        difficulty: 'Hoch',
        description: 'Grossbäckereien mit dutzenden Filialen dominieren "Bäckerei [Stadt]". Handwerksbäcker müssen Qualität und Tradition als USP nutzen.',
        impact: 'Ketten belegen 50-70% der Top-Ergebnisse in Grossstädten',
        strategies: ['"Handwerksbäckerei" und "traditionell" als Differenzierungs-Keywords', 'Herstellungsprozess als Content (Sauerteig, regionale Zutaten)', 'Lokale Lieferkette und Nachhaltigkeit als Story'],
        quickWin: '"Handwerksbäckerei" und "täglich frisch gebacken" in Google Business aufnehmen'
      },
      {
        title: 'Morgens-Suchen als Peak-Moment',
        difficulty: 'Mittel',
        description: '60% der Bäckerei-Suchen erfolgen zwischen 6-9 Uhr morgens. Wer um diese Zeit sichtbar ist, gewinnt.',
        impact: 'Frühe Öffnungszeiten sind ein eigenständiger Suchfilter',
        strategies: ['Öffnungszeiten ab 6:00 Uhr in Google Business hinterlegen', 'Frühstücks-Angebote als Google Business Posts am Vorabend', '"Jetzt geöffnet" Filter-Optimierung durch korrekte Öffnungszeiten'],
        quickWin: 'Exakte Öffnungszeiten (auch Feiertage und Sonderöffnungszeiten) in GBP pflegen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '7.0/10', trend: 'stable' },
      { label: 'Peak-Zeit', value: '6-9 Uhr', trend: 'stable' },
      { label: 'Handwerk-USP', value: 'Hoch', trend: 'up' },
      { label: 'Radius-Limit', value: '~500m', trend: 'stable' }
    ],
    topStrategy: 'Handwerkstradition + Frische-USP: Authentizität und Qualität als Gegenpol zu Filialketten positionieren.',
    uniqueAdvantage: 'Handwerksbäcker haben eine emotionale Verbindung zur Nachbarschaft. Diese Gemeinschaftsrolle ist ein nicht-kopierbarer Vorteil.'
  },

  fotograf: {
    industry: 'Fotografen',
    icon: '📸',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Portfolio-Qualität entscheidet über alles',
        difficulty: 'Hoch',
        description: 'Fotografen verkaufen visuell. Ohne herausragendes Online-Portfolio ist eine Top-Platzierung wertlos.',
        impact: 'Fotografen mit professionellem Portfolio erhalten 5× mehr Anfragen',
        strategies: ['Google Business mit besten Arbeiten als Fotos füllen', 'Website mit schnell ladender Galerie (WebP, Lazy Loading)', 'Spezialisierungs-Portfolios (Hochzeit, Business, Produkt) trennen'],
        quickWin: 'Die 30 besten Arbeiten auf Google Business als Fotos hochladen'
      },
      {
        title: 'Spezialisierung schlägt Generalismus',
        difficulty: 'Mittel',
        description: '"Hochzeitsfotograf [Stadt]" hat klare Suchintention. "Fotograf [Stadt]" ist zu generisch und der Wettbewerb zu gross.',
        impact: 'Spezialisierte Keywords haben 50% weniger Wettbewerb bei höherem Auftrags-Wert',
        strategies: ['Pro Spezialisierung eine eigene Landing Page', 'Google Business Kategorie und Services nach Spezialisierung', 'SEO-optimierte Blog-Posts zu jeder Spezialisierung'],
        quickWin: 'Fotografen-Spezialisierungen als Google Business Services mit Preisrahmen'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.5/10', trend: 'stable' },
      { label: 'Portfolio-Impact', value: '5× Anfragen', trend: 'up' },
      { label: 'Spez.-Vorteil', value: '-50% Wettb.', trend: 'stable' },
      { label: 'Hochzeit-Peak', value: 'Mär-Okt', trend: 'stable' }
    ],
    topStrategy: 'Spezialisierung + visuelles Portfolio: Wer sich klar positioniert und die besten Bilder zeigt, gewinnt.',
    uniqueAdvantage: 'Fotografen produzieren ihren eigenen Content-Marketing-Material. Jeder Auftrag liefert neues SEO-relevantes Bildmaterial.'
  },

  yoga: {
    industry: 'Yoga & Pilates Studios',
    icon: '🧘',
    overallDifficulty: 'Mittel',
    challenges: [
      {
        title: 'Online-Plattformen als neue Konkurrenz',
        difficulty: 'Hoch',
        description: 'Peloton, Yoga With Adriene und Online-Studios konkurrieren um Yoga-Keywords. Lokale Studios müssen Gemeinschafts-Erlebnis betonen.',
        impact: 'Online-Yoga wächst 40% jährlich und nimmt lokale Suchvolumen',
        strategies: ['"Vor Ort" und "Community" als Differenzierungs-Keywords', 'Probeteilnahme und Einsteigerkurse als Conversion-Funnel', 'Google Business Events für regelmässige Kurszeiten nutzen'],
        quickWin: '"Probestunde kostenlos" als dauerhaftes Google Business Angebot'
      },
      {
        title: 'Yoga-Stil als Nischen-Keyword',
        difficulty: 'Niedrig',
        description: '"Yin Yoga [Stadt]", "Ashtanga [Stadt]", "Hot Yoga [Stadt]" haben deutlich weniger Wettbewerb als generisches "Yoga Studio".',
        impact: 'Stil-Keywords konvertieren 2.5× besser und haben 40% weniger Wettbewerb',
        strategies: ['Pro angebotenem Stil eine Landing Page erstellen', 'Kursplan als strukturierte Daten hinterlegen', 'Stil-spezifische Google Business Services anlegen'],
        quickWin: 'Alle angebotenen Yoga-Stile als Google Business Services mit Beschreibung'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '6.0/10', trend: 'up' },
      { label: 'Online-Konkurrenz', value: '+40%/Jahr', trend: 'up' },
      { label: 'Stil-Keywords', value: '-40% Wettb.', trend: 'stable' },
      { label: 'Community-Faktor', value: 'Sehr hoch', trend: 'up' }
    ],
    topStrategy: 'Community-Erlebnis + Stil-Spezialisierung: Was online nicht replizierbar ist — persönlicher Kontakt und Gemeinschaft.',
    uniqueAdvantage: 'Yoga-Studios haben die treuesten Kunden aller Fitness-Branchen. Community-Building ist der stärkste organische Marketing-Kanal.'
  },

  ferienwohnungen: {
    industry: 'Ferienwohnungen & Ferienhaus',
    icon: '🏡',
    overallDifficulty: 'Hoch',
    challenges: [
      {
        title: 'Airbnb und Booking dominieren die Suche',
        difficulty: 'Sehr hoch',
        description: 'Plattformen belegen nahezu alle Top-Positionen für Ferienwohnungs-Keywords. Direktbuchungs-SEO ist extrem herausfordernd.',
        impact: 'Plattform-Provisionen von 15-20% können durch Direktbuchungen eingespart werden',
        strategies: ['Brand-SEO für den eigenen Ferienwohnungs-Namen', 'Long-Tail-Keywords mit Aktivitäten (z.B. "Ferienwohnung nahe Skigebiet")', 'Google Business für Ferienunterkünfte optimieren'],
        quickWin: 'Google Business Profil als Unterkunft mit Direktbuchungs-Link einrichten'
      },
      {
        title: 'Saisonalität und Frühbucher-Keywords',
        difficulty: 'Mittel',
        description: 'Ferienwohnungs-Suchen starten 3-6 Monate vor der Reise. Wer zu spät optimiert, verliert die Buchungssaison.',
        impact: 'Frühbucher-Keywords 6 Monate vor Saison bringen die qualifiziertesten Leads',
        strategies: ['Saisonale Landing Pages ganzjährig indexiert halten', 'Frühbucher-Rabatte als Google Business Angebote', 'Content zu lokalen Aktivitäten und Sehenswürdigkeiten'],
        quickWin: 'Saisonale Angebote 6 Monate im Voraus als Google Business Posts'
      }
    ],
    kpis: [
      { label: 'Wettbewerb', value: '8.5/10', trend: 'up' },
      { label: 'Plattform-Dominanz', value: '85%+', trend: 'stable' },
      { label: 'Direkt-Einsparung', value: '15-20%', trend: 'stable' },
      { label: 'Vorlauf-Suche', value: '3-6 Monate', trend: 'stable' }
    ],
    topStrategy: 'Direktbuchungs-SEO + lokaler Content: Regionale Expertise und Aktivitäten-Guides als Differenzierung zu Plattformen.',
    uniqueAdvantage: 'Vermieter kennen die Region wie kein Portal. Insider-Tipps und lokale Guides sind ein unschlagbarer Content-Vorteil.'
  }
};
