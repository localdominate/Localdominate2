import type { CaseStudyData } from "@/components/blog/CaseStudyCard";

export const industryCaseStudies: Record<string, CaseStudyData[]> = {
  // === HIGH-INTENT ===
  "handwerker": [
    {
      title: "Elektro Müller GmbH – Von Seite 3 ins Local Pack",
      industry: "Elektroinstallation",
      location: "Stuttgart",
      duration: "6 Monate",
      challenge: "Kleiner 3-Mann-Betrieb, keine Website, nur über Mundpropaganda bekannt. Null Google-Sichtbarkeit.",
      measures: [
        "Google Business Profil vollständig eingerichtet",
        "20 Vorher-Nachher-Fotos von Projekten hochgeladen",
        "Notdienst-Keywords in Beschreibung integriert",
        "Bewertungskampagne per QR-Code auf Rechnungen",
        "One-Page-Website mit lokalem Content erstellt"
      ],
      metrics: [
        { label: "Google Maps Position", before: "Nicht sichtbar", after: "Platz 2", change: "Top 3" },
        { label: "Monatliche Anfragen", before: "2-3", after: "18-22", change: "+600%" },
        { label: "Google Bewertungen", before: "0", after: "47", change: "4,8 ★" },
      ],
      quote: { text: "Wir mussten innerhalb von 3 Monaten einen zusätzlichen Mitarbeiter einstellen, weil wir die Aufträge allein nicht mehr geschafft haben.", author: "Thomas M.", role: "Geschäftsführer" },
      result: "Umsatzsteigerung von 40% innerhalb eines Jahres, Notdienst-Anfragen verdreifacht."
    },
    {
      title: "Sanitär Becker – Notdienst-Keywords als Umsatztreiber",
      industry: "Sanitär & Heizung",
      location: "Köln",
      duration: "4 Monate",
      challenge: "Viel Konkurrenz in der Großstadt, Notdienst-Aufträge gingen an MyHammer und Check24 statt direkt an den Betrieb.",
      measures: [
        "Landingpages für 'Klempner Notdienst Köln' + Stadtteile",
        "Google Business: Notdienst-Zeiten & Attribute ergänzt",
        "15 echte Bewertungen mit Fotos gesammelt",
        "NAP-Konsistenz in 30 Verzeichnissen hergestellt"
      ],
      metrics: [
        { label: "Notdienst-Anfragen/Woche", before: "1-2", after: "8-10", change: "+400%" },
        { label: "Direkte Anrufe (GMB)", before: "12/Mo.", after: "58/Mo.", change: "+383%" },
        { label: "Durchschnittl. Auftragswert", before: "180€", after: "320€", change: "+78%" },
      ],
      result: "Die direkte Auffindbarkeit über Google ersetzte innerhalb von 6 Monaten die kostenpflichtigen Plattform-Leads vollständig."
    }
  ],
  "anwaelte": [
    {
      title: "Kanzlei Weber & Partner – Fachanwalt-Strategie",
      industry: "Familienrecht",
      location: "München",
      duration: "8 Monate",
      challenge: "Etablierte Kanzlei mit gutem Ruf, aber Online-Sichtbarkeit auf Seite 4 bei 'Familienrecht Anwalt München'. Keine neuen Mandanten über Google.",
      measures: [
        "Fachanwalt-Titel als E-E-A-T-Signal auf allen Profilen",
        "Rechtsgebiets-Landingpages mit Schema Markup",
        "Fachbeiträge auf anwalt.de mit Backlink-Strategie",
        "Google Business mit 8 Anwaltsprofilen verknüpft",
        "Bewertungsprozess nach abgeschlossenen Mandaten"
      ],
      metrics: [
        { label: "Ranking 'Familienrecht München'", before: "Seite 4", after: "Platz 3", change: "Top 3" },
        { label: "Website-Besucher/Monat", before: "120", after: "890", change: "+642%" },
        { label: "Mandatsanfragen/Monat", before: "2-3", after: "14-18", change: "+500%" },
      ],
      quote: { text: "Die Kombination aus Fachanwalt-Expertise und lokaler Sichtbarkeit hat unsere Mandanten-Akquise grundlegend verändert.", author: "Dr. Sarah W.", role: "Partnerin" },
      result: "ROI von 1:12 – jeder investierte Euro brachte 12€ zurück durch hochwertige Mandate im Familienrecht."
    }
  ],
  "aerzte": [
    {
      title: "Orthopädie-Praxis Dr. Klein – YMYL-konforme Optimierung",
      industry: "Orthopädie",
      location: "Hamburg",
      duration: "6 Monate",
      challenge: "Trotz exzellenter Jameda-Bewertungen (1,2) kaum Google-Sichtbarkeit. Website veraltet, nicht mobilfreundlich, keine strukturierten Daten.",
      measures: [
        "Website-Relaunch mit MedicalBusiness Schema",
        "Fachspezifische Landingpages (Knie, Rücken, Schulter)",
        "Jameda + Google Bewertungen synchronisiert",
        "Online-Terminbuchung integriert",
        "Praxisblog mit ärztlich geprüften Inhalten"
      ],
      metrics: [
        { label: "Neupatienten/Monat", before: "8-10", after: "35-40", change: "+300%" },
        { label: "Online-Terminbuchungen", before: "0", after: "120/Mo.", change: "Neu" },
        { label: "Google Maps Position", before: "Seite 2", after: "Platz 1", change: "#1" },
      ],
      quote: { text: "Wir haben mittlerweile ein Neupatientenproblem – im positiven Sinne. Die Wartezeit für Ersttermine liegt bei 3 Wochen.", author: "Dr. Martin K.", role: "Praxisinhaber" },
      result: "Praxis konnte einen weiteren Arzt einstellen und die Öffnungszeiten erweitern. Online-Terminbuchung machte 60% aller Termine aus."
    }
  ],
  "zahnarzt": [
    {
      title: "Zahnärzte am Marktplatz – Bewertungsstrategie",
      industry: "Zahnarztpraxis",
      location: "Düsseldorf",
      duration: "5 Monate",
      challenge: "Gute Praxis, aber nur 12 Google-Bewertungen bei einem Durchschnitt von 3,8 Sternen. Konkurrenz hatte 100+ Bewertungen.",
      measures: [
        "Systematisches Bewertungs-Follow-up nach Behandlungen",
        "QR-Code in Wartezimmer und auf Terminzetteln",
        "Professionelle Antworten auf alle Bewertungen",
        "Fotoserie: moderne Praxisräume & Team",
        "Notdienst-Keywords optimiert"
      ],
      metrics: [
        { label: "Google Bewertungen", before: "12 (3,8★)", after: "87 (4,9★)", change: "+625%" },
        { label: "Klicks auf Wegbeschreibung", before: "45/Mo.", after: "210/Mo.", change: "+367%" },
        { label: "Anrufe über Google", before: "22/Mo.", after: "95/Mo.", change: "+332%" },
      ],
      result: "Die Praxis konnte eine zweite Behandlungseinheit rentabel betreiben und einen Assistenzzahnarzt einstellen."
    }
  ],
  "steuerberater": [
    {
      title: "Steuerkanzlei Hoffmann – Content als Mandantenmagneten",
      industry: "Steuerberatung",
      location: "Frankfurt",
      duration: "10 Monate",
      challenge: "Kanzlei in wettbewerbsstarkem Markt, überwiegend Bestandsmandanten. Neukundengewinnung fast ausschließlich über Empfehlungen.",
      measures: [
        "Fachbeiträge zu aktuellen Steueränderungen (Blog)",
        "Landingpages pro Leistung + Stadtteil-Bezug",
        "Profil auf steuerberater.de und DATEV-Verzeichnis",
        "Google Business mit aktuellen Beiträgen bespielt",
        "FAQ-Schema für häufige Steuerfragen"
      ],
      metrics: [
        { label: "Organischer Traffic", before: "200/Mo.", after: "1.800/Mo.", change: "+800%" },
        { label: "Mandatsanfragen online", before: "1/Mo.", after: "8-12/Mo.", change: "+900%" },
        { label: "Ranking 'Steuerberater Frankfurt'", before: "Nicht sichtbar", after: "Platz 5", change: "Top 5" },
      ],
      quote: { text: "Unsere Blog-Artikel zu Steuertipps haben sich als bester Lead-Magnet erwiesen. Mandanten kommen informiert und vertrauensvoll.", author: "Stefan H.", role: "Kanzleiinhaber" },
      result: "Anteil der Online-Mandantengewinnung stieg von 5% auf 35%. ROI innerhalb von 12 Monaten positiv."
    }
  ],
  "elektrotechnik": [
    {
      title: "ElektroTech Schmidt – Smart Home als Nische",
      industry: "Elektrotechnik",
      location: "Nürnberg",
      duration: "5 Monate",
      challenge: "Generische Keywords wie 'Elektriker Nürnberg' zu umkämpft. Betrieb brauchte eine Nischenstrategie für höherwertige Aufträge.",
      measures: [
        "Fokus auf 'Smart Home Installation Nürnberg'",
        "Referenzprojekte mit Fotos + Videos dokumentiert",
        "Blog: 'KNX vs. Loxone' Vergleichsartikel",
        "Partnerschaften mit Smart-Home-Herstellern (Backlinks)",
        "Google Business mit Smart-Home-Attributen"
      ],
      metrics: [
        { label: "Smart-Home-Anfragen", before: "0-1/Mo.", after: "12-15/Mo.", change: "Neu" },
        { label: "Ø Auftragswert", before: "800€", after: "4.500€", change: "+463%" },
        { label: "Ranking 'Smart Home Nürnberg'", before: "Nicht sichtbar", after: "Platz 1", change: "#1" },
      ],
      result: "Smart-Home-Bereich wurde zum profitabelsten Geschäftsfeld mit 60% höherer Marge als klassische Elektroinstallation."
    }
  ],
  // === GASTRO & LIFESTYLE ===
  "restaurant": [
    {
      title: "Trattoria Bella Vista – Vom leeren Mittagstisch zur Warteliste",
      industry: "Italienisches Restaurant",
      location: "Berlin-Kreuzberg",
      duration: "4 Monate",
      challenge: "Neueröffnung in stark umkämpfter Gastro-Szene. Trotz hervorragender Küche kaum Laufkundschaft und keine Online-Sichtbarkeit.",
      measures: [
        "Google Business mit 30+ professionellen Food-Fotos",
        "Speisekarte als Text (nicht nur PDF) mit Keywords",
        "Reservierung über Google direkt aktiviert",
        "Wöchentliche Google Posts mit Tagesgerichten",
        "Bewertungsanreiz über kostenlose Nachspeise"
      ],
      metrics: [
        { label: "Google Maps Aufrufe", before: "80/Mo.", after: "2.400/Mo.", change: "+2.900%" },
        { label: "Tischreservierungen", before: "5/Woche", after: "35/Woche", change: "+600%" },
        { label: "Google Bewertungen", before: "3", after: "124", change: "4,7★" },
      ],
      quote: { text: "Freitags und Samstags sind wir seit 3 Monaten komplett ausgebucht. Ohne die Google-Optimierung wäre das undenkbar gewesen.", author: "Marco B.", role: "Inhaber" },
      result: "Umsatz im ersten Jahr verdreifacht. Mittagsgeschäft von 20% auf 85% Auslastung gestiegen."
    }
  ],
  "friseur": [
    {
      title: "Hair by Lisa – Instagram + Local SEO Kombi",
      industry: "Friseursalon",
      location: "Hannover",
      duration: "6 Monate",
      challenge: "Salon in Seitenstraße, wenig Laufkundschaft. Gute Instagram-Follower (2.500), aber kaum Google-Anfragen.",
      measures: [
        "Google Business Fotos mit Instagram-Highlights verknüpft",
        "Vorher-Nachher-Galerie mit Alt-Tags optimiert",
        "Online-Buchung über Treatwell integriert",
        "Lokale Keywords: 'Balayage Hannover', 'Brautfrisur Hannover'",
        "Bewertungskarten mit QR-Code am Spiegel"
      ],
      metrics: [
        { label: "Online-Buchungen", before: "8/Mo.", after: "65/Mo.", change: "+713%" },
        { label: "Google-Sichtbarkeit", before: "Seite 3", after: "Local Pack", change: "Top 3" },
        { label: "Neukunden/Monat", before: "10", after: "45", change: "+350%" },
      ],
      result: "Salon konnte zweiten Stuhl besetzen und eine Auszubildende einstellen. 60% der Neukunden kommen über Google."
    }
  ],
  "fitness": [
    {
      title: "FitZone Gym – Community-SEO-Strategie",
      industry: "Fitnessstudio",
      location: "Leipzig",
      duration: "7 Monate",
      challenge: "Kleines Boutique-Gym in Konkurrenz mit McFit, FitX und John Reed. Budget für Google Ads nicht vorhanden.",
      measures: [
        "Google Business: Kurspläne, Trainer-Profile, Virtual Tour",
        "Content: 'Fitness Leipzig' + Stadtteil-Seiten",
        "Community-Events (Outdoor-Bootcamps) mit Google Posts",
        "Trainings-Transformationen als Bewertungs-Testimonials",
        "Lokale Partnerschaften mit Physios und Ernährungsberatern"
      ],
      metrics: [
        { label: "Probetrainings/Monat", before: "12", after: "55", change: "+358%" },
        { label: "Conversion Probe→Mitglied", before: "30%", after: "52%", change: "+73%" },
        { label: "Mitgliederzahl", before: "180", after: "340", change: "+89%" },
      ],
      result: "Studio konnte den Break-Even-Point nach 14 Monaten erreichen statt der geplanten 24 Monate."
    }
  ],
  "baeckerei": [
    {
      title: "Bäckerei Krüger – Morgenroutine-Keywords erobert",
      industry: "Handwerksbäckerei",
      location: "Dresden",
      duration: "3 Monate",
      challenge: "Traditionsbäckerei gegen Backshop-Ketten. Kunden wussten nicht, dass es noch echte Handwerksbäckereien gibt.",
      measures: [
        "Google Business: 'Handwerksbäckerei' als Kategorie",
        "Fotos vom Backprozess (4 Uhr morgens) gepostet",
        "Saisonale Posts: Stollen, Osterbrot, Sonntagsbrötchen",
        "Bewertungsprogramm über Treuekarte",
        "Website mit Brot-Lexikon für Long-Tail-Keywords"
      ],
      metrics: [
        { label: "Tägliche Kunden", before: "80-100", after: "150-180", change: "+75%" },
        { label: "Google Bewertungen", before: "8", after: "92", change: "4,9★" },
        { label: "Umsatz Sonntagsverkauf", before: "400€", after: "1.200€", change: "+200%" },
      ],
      result: "Die Bäckerei konnte eine zweite Filialmitarbeiterin einstellen und plant mittlerweile die Eröffnung eines Cafés."
    }
  ],
  "doener": [
    {
      title: "Sultan Döner – Lieferdienst-Unabhängigkeit",
      industry: "Döner & Imbiss",
      location: "Dortmund",
      duration: "4 Monate",
      challenge: "80% des Lieferumsatzes über Lieferando (30% Provision). Kaum direkte Bestellungen über eigene Kanäle.",
      measures: [
        "Google Business: Speisekarte mit Fotos aller Gerichte",
        "Eigene Bestell-Website mit lokalen Keywords",
        "Google Posts: Tagesangebote und Combo-Deals",
        "'Döner Dortmund' und 'Türkisches Restaurant Dortmund' optimiert",
        "Treueprogramm für Direktbestellungen"
      ],
      metrics: [
        { label: "Direktbestellungen", before: "15%", after: "55%", change: "+267%" },
        { label: "Provision gespart/Monat", before: "0€", after: "2.800€", change: "Neu" },
        { label: "Google Maps Klicks", before: "150/Mo.", after: "1.100/Mo.", change: "+633%" },
      ],
      result: "Lieferando-Abhängigkeit von 80% auf 45% reduziert. Die eingesparte Provision finanzierte bessere Zutaten."
    }
  ],
  "tattoo": [
    {
      title: "InkArt Studio – Portfolio-SEO zum Erfolg",
      industry: "Tattoo Studio",
      location: "Hamburg-St. Pauli",
      duration: "5 Monate",
      challenge: "Hervorragende Arbeit, aber Warteliste schrumpfte. Neue Konkurrenz in der Nachbarschaft zog Kunden ab.",
      measures: [
        "Portfolio-Galerie mit Style-Kategorien (Realism, Geometric, etc.)",
        "Alt-Tags: 'Realistisches Portrait Tattoo Hamburg'",
        "Google Business: Künstlerprofile mit Spezialisierungen",
        "Instagram-Highlights → Google-Fotos synchronisiert",
        "Blog: 'Tattoo-Pflege' und 'Tattoo-Styles erklärt'"
      ],
      metrics: [
        { label: "Website-Besucher", before: "300/Mo.", after: "2.100/Mo.", change: "+600%" },
        { label: "Terminanfragen", before: "15/Mo.", after: "65/Mo.", change: "+333%" },
        { label: "Warteliste", before: "2 Wochen", after: "8 Wochen", change: "Ausgebucht" },
      ],
      result: "Studio konnte einen dritten Artist einstellen und die Preise um 20% erhöhen – die Nachfrage blieb stabil."
    }
  ],
  "yoga": [
    {
      title: "Lotus Yoga Studio – Kursplan-SEO",
      industry: "Yoga Studio",
      location: "Freiburg",
      duration: "4 Monate",
      challenge: "Studio mit 3 Kursräumen, aber nur 40% Auslastung. Online-Buchungen minimal, die meisten Anmeldungen per Telefon.",
      measures: [
        "Kursplan als strukturierte Daten (Event-Schema)",
        "Landingpages pro Kursart: 'Vinyasa Yoga Freiburg'",
        "Google Business: Kursbeschreibungen als Attribute",
        "Online-Buchungssystem mit Google Reserve verknüpft",
        "Community-Events: 'Yoga im Park' mit lokaler PR"
      ],
      metrics: [
        { label: "Kursauslastung", before: "40%", after: "78%", change: "+95%" },
        { label: "Online-Buchungen", before: "10/Mo.", after: "85/Mo.", change: "+750%" },
        { label: "Neukunden/Monat", before: "8", after: "32", change: "+300%" },
      ],
      result: "Studio konnte den Stundenplan um Abendkurse erweitern und einen zweiten Yoga-Lehrer festanstellen."
    }
  ],
  "hotels": [
    {
      title: "Hotel Alpenblick – OTA-Abhängigkeit reduziert",
      industry: "Boutique-Hotel",
      location: "Garmisch-Partenkirchen",
      duration: "8 Monate",
      challenge: "70% der Buchungen über Booking.com (15-25% Provision). Eigene Website kaum besucht, kein lokales Ranking.",
      measures: [
        "Website-Relaunch mit Buchungsmaschine + Schema Markup",
        "Saisonale Landingpages: Ski, Wandern, Wellness",
        "Google Business: Virtual Tour + 50 Fotos",
        "Bestpreis-Garantie für Direktbucher",
        "'Hotel Garmisch' und umliegende Keywords optimiert"
      ],
      metrics: [
        { label: "Direktbuchungen", before: "30%", after: "58%", change: "+93%" },
        { label: "Provision gespart/Jahr", before: "0€", after: "45.000€", change: "Neu" },
        { label: "Ranking 'Hotel Garmisch'", before: "Seite 3", after: "Platz 4", change: "Top 5" },
      ],
      quote: { text: "Die eingesparte OTA-Provision haben wir in die Renovierung der Zimmer investiert – das zieht wiederum bessere Bewertungen an.", author: "Familie Bergmann", role: "Hoteliers" },
      result: "Direktbuchungsanteil fast verdoppelt. Die eingesparten 45.000€ Provision finanzierten den Wellness-Bereich-Ausbau."
    }
  ],
  "ferienwohnungen": [
    {
      title: "FeWo Strandperle – Saisonverlängerung durch SEO",
      industry: "Ferienwohnung",
      location: "Kühlungsborn",
      duration: "6 Monate",
      challenge: "Ferienwohnung nur in der Hauptsaison (Juli-August) ausgebucht. Nebensaison mit 25% Auslastung unrentabel.",
      measures: [
        "Nebensaison-Content: 'Ostsee im Herbst', 'Winterurlaub Kühlungsborn'",
        "Google Business: Saisonale Fotos & Angebote",
        "Long-Tail-Keywords: 'Ferienwohnung mit Hund Kühlungsborn'",
        "Bewertungsmanagement nach Abreise",
        "Lokale Erlebnis-Tipps als Blog-Content"
      ],
      metrics: [
        { label: "Auslastung Nebensaison", before: "25%", after: "62%", change: "+148%" },
        { label: "Direktbuchungen", before: "20%", after: "65%", change: "+225%" },
        { label: "Jahresumsatz", before: "18.000€", after: "32.000€", change: "+78%" },
      ],
      result: "Die Nebensaison wurde profitabel. Der Vermieter konnte eine zweite Ferienwohnung im gleichen Haus einrichten."
    }
  ],
  // === REMAINING ===
  "optiker": [
    {
      title: "Optik Schuster – Nischenbrille als Rankingfaktor",
      industry: "Augenoptiker",
      location: "Augsburg",
      duration: "5 Monate",
      challenge: "Kampf gegen Fielmann und Apollo – als Einzeloptiker kaum Chance auf generische Keywords.",
      measures: [
        "Nischenstrategie: 'Sportbrille Augsburg', 'Gleitsichtbrille Anpassung'",
        "Google Business: Marken-Attribute, Team-Fotos, 3D-Tour",
        "Kooperation mit lokalem Augenarzt (Cross-Referral)",
        "Kundenbewertungen mit Brillen-Fotos",
        "Content: Brillen-Beratung für verschiedene Gesichtsformen"
      ],
      metrics: [
        { label: "Neukunden/Monat", before: "12", after: "38", change: "+217%" },
        { label: "Ø Brillenpreis", before: "280€", after: "420€", change: "+50%" },
        { label: "Google Bewertungen", before: "15", after: "89", change: "5,0★" },
      ],
      result: "Durch die Nischenstrategie gewann der Optiker Kunden, die bewusst nicht zu Ketten gehen wollen – mit höherem Durchschnittsumsatz."
    }
  ],
  "tierarzt": [
    {
      title: "Tierarztpraxis Dr. Wolf – Notdienst-SEO",
      industry: "Tierarztpraxis",
      location: "Karlsruhe",
      duration: "4 Monate",
      challenge: "Praxis bot 24h-Notdienst an, wurde dafür aber bei Google nicht gefunden. Die meisten Notfälle landeten in der Tierklinik.",
      measures: [
        "Notdienst-Landingpage mit strukturierten Daten",
        "'Tierarzt Notdienst Karlsruhe' als primäres Keyword",
        "Google Business: Notdienst-Attribute & -Zeiten",
        "Click-to-Call Button prominent platziert",
        "Bewertungen speziell für Notdienst-Erfahrungen"
      ],
      metrics: [
        { label: "Notdienst-Anrufe/Woche", before: "2-3", after: "12-15", change: "+400%" },
        { label: "Ranking 'Tierarzt Notdienst'", before: "Seite 2", after: "Platz 1", change: "#1" },
        { label: "Neupatienten (danach regulär)", before: "3/Mo.", after: "18/Mo.", change: "+500%" },
      ],
      result: "Notdienst-Patienten wurden zu regulären Patienten – 65% kamen für Routinebehandlungen zurück."
    }
  ],
  "apotheke": [
    {
      title: "Markt-Apotheke – Lokale Gesundheitskompetenz",
      industry: "Apotheke",
      location: "Mainz",
      duration: "5 Monate",
      challenge: "Konkurrenz durch Online-Apotheken und DocMorris-Filialen. Stammkunden wanderten ab, Neukunden blieben aus.",
      measures: [
        "Google Business: Dienstleistungen (Impfungen, Blutdruck, Beratung)",
        "Notdienst-Plan automatisch aktualisiert",
        "Gesundheits-Blog mit lokalen Allergie-/Grippewarnungen",
        "Bewertungsprogramm über Rezeptabholung",
        "Click & Collect auf Website integriert"
      ],
      metrics: [
        { label: "Neukunden/Monat", before: "20", after: "65", change: "+225%" },
        { label: "Click & Collect Bestellungen", before: "0", after: "40/Woche", change: "Neu" },
        { label: "Google Bewertungen", before: "22", after: "110", change: "4,8★" },
      ],
      result: "Die Apotheke konnte den Umsatzrückgang stoppen und neue Stammkunden gewinnen – vor allem jüngere Zielgruppen über Click & Collect."
    }
  ],
  "physiotherapie": [
    {
      title: "Physio Plus – Spezialisierung als SEO-Hebel",
      industry: "Physiotherapie",
      location: "Mannheim",
      duration: "5 Monate",
      challenge: "Allgemeine Physio-Praxis in einem Markt mit Überangebot. Wartezeiten kurz, aber Umsatz stagnierte.",
      measures: [
        "Spezialisierungs-Landingpages: Sportphysio, CMD, Rücken",
        "Kooperationen mit Sportvereinen (lokale Backlinks)",
        "Google Business: Behandlungsspektrum als Dienstleistungen",
        "Patienten-Erfolgsgeschichten als Testimonials",
        "Blog: Übungsvideos für häufige Beschwerden"
      ],
      metrics: [
        { label: "Privatpatienten/Monat", before: "8", after: "28", change: "+250%" },
        { label: "Ø Umsatz/Patient", before: "45€", after: "72€", change: "+60%" },
        { label: "Wartezeit Neutermin", before: "2 Tage", after: "2 Wochen", change: "Ausgebucht" },
      ],
      result: "Die Praxis konnte einen weiteren Therapeuten einstellen und sich als Sportphysio-Spezialist in Mannheim etablieren."
    }
  ],
  "autowerkstatt": [
    {
      title: "Auto Meier – Markenunabhängige Werkstatt vs. Vertragswerkstätten",
      industry: "Freie Autowerkstatt",
      location: "Braunschweig",
      duration: "6 Monate",
      challenge: "Vertragswerkstätten dominierten die Google-Suche. Als freie Werkstatt kaum sichtbar, trotz besserer Preise.",
      measures: [
        "Keywords: 'Freie Werkstatt Braunschweig', 'Günstige Inspektion'",
        "Preisvergleich-Content: Vertragswerkstatt vs. freie Werkstatt",
        "Google Business: Marken-Erfahrung als Attribute",
        "Bewertungen mit konkreten Kostenersparnissen",
        "Saisonale Angebote: Reifenwechsel, HU/AU, Klimaservice"
      ],
      metrics: [
        { label: "Werkstattauslastung", before: "55%", after: "88%", change: "+60%" },
        { label: "Neue Kunden/Monat", before: "8", after: "32", change: "+300%" },
        { label: "Durchschnittl. Rechnungsbetrag", before: "320€", after: "480€", change: "+50%" },
      ],
      result: "Die Werkstatt konnte eine zweite Hebebühne installieren und einen Gesellen einstellen. Wartezeiten stiegen auf 5 Tage."
    }
  ],
  "immobilienmakler": [
    {
      title: "Immobilien Schmidt – Stadtteil-Expertise als USP",
      industry: "Immobilienmakler",
      location: "Berlin-Charlottenburg",
      duration: "8 Monate",
      challenge: "Großer Makler-Wettbewerb in Berlin. Generische Keywords unmöglich zu ranken. Abhängigkeit von ImmoScout24.",
      measures: [
        "Stadtteil-Landingpages für 12 Berliner Bezirke",
        "Marktberichte: 'Immobilienpreise Charlottenburg 2026'",
        "Google Business: Lokalexpertise als Attribut",
        "Verkäufer-Akquise über informative Blog-Inhalte",
        "Video-Tours von Verkaufsobjekten auf YouTube + Website"
      ],
      metrics: [
        { label: "Verkäufer-Leads/Monat", before: "2", after: "12", change: "+500%" },
        { label: "Organischer Traffic", before: "150/Mo.", after: "3.200/Mo.", change: "+2.033%" },
        { label: "ImmoScout-Kosten/Monat", before: "2.500€", after: "800€", change: "-68%" },
      ],
      result: "Die Stadtteil-Expertise machte den Makler zur ersten Anlaufstelle für Verkäufer in Charlottenburg. Akquisekosten um 70% gesenkt."
    }
  ],
  "fotograf": [
    {
      title: "Fotostudio Lichtblick – Hochzeits-SEO Dominanz",
      industry: "Hochzeitsfotograf",
      location: "Heidelberg",
      duration: "6 Monate",
      challenge: "Starker Preisdruck durch Hobby-Fotografen. Schwierig, Premiumpreise zu rechtfertigen, wenn die Sichtbarkeit fehlt.",
      measures: [
        "Portfolio mit Alt-Tags: 'Hochzeitsfotograf Heidelberg Schloss'",
        "Location-spezifische Landingpages (Schloss, Kirche, Weinberg)",
        "Blog: Hochzeitslocations in der Region vorgestellt",
        "Google Business: Hochzeits-Kategorie + Beispielfotos",
        "Schema Markup für Portfolio und Preise"
      ],
      metrics: [
        { label: "Buchungsanfragen/Monat", before: "3-4", after: "15-18", change: "+375%" },
        { label: "Ø Buchungswert", before: "1.200€", after: "2.800€", change: "+133%" },
        { label: "Ranking 'Hochzeitsfotograf Heidelberg'", before: "Seite 2", after: "Platz 2", change: "Top 3" },
      ],
      quote: { text: "Durch die Location-Seiten kommen Brautpaare, die genau wissen, was sie wollen – und bereit sind, für Qualität zu zahlen.", author: "Julia L.", role: "Inhaberin" },
      result: "Saison 2026 war bereits im Februar ausgebucht. Der Durchschnittspreis pro Hochzeit stieg um 133%."
    }
  ],

  // === COMPARISON ARTICLE CASE STUDIES ===
  "local-seo-vs-organisch": [
    {
      title: "Café Sonnenschein – Local SEO schlägt reine Content-Strategie",
      industry: "Gastronomie",
      location: "Freiburg",
      duration: "4 Monate",
      challenge: "Das Café investierte 12 Monate in Blog-Content und organisches SEO, bekam aber kaum lokale Laufkundschaft über Google.",
      measures: [
        "Google Business Profil vollständig optimiert mit Speisekarte & Fotos",
        "Local Citations in 35 Branchenverzeichnissen aufgebaut",
        "Bewertungskampagne: 60 Google-Bewertungen in 3 Monaten",
        "Lokale Landing-Pages für 'Café Freiburg Altstadt' erstellt",
        "Organische Blog-Artikel mit lokalem Fokus umgeschrieben"
      ],
      metrics: [
        { label: "Google Maps Sichtbarkeit", before: "Nicht im Local Pack", after: "Platz 1", change: "Top 3" },
        { label: "Organische Besucher/Monat", before: "1.200", after: "2.800", change: "+133%" },
        { label: "Laufkunden über Google", before: "~5/Woche", after: "~28/Woche", change: "+460%" },
      ],
      quote: { text: "Wir haben jahrelang nur Bloggen versucht. Erst die Kombination aus Local SEO und Content hat uns wirklich nach vorne gebracht.", author: "Lisa K.", role: "Inhaberin" },
      result: "Umsatz stieg um 35%. Die Kombination beider Strategien brachte 5x mehr Neukunden als rein organisches SEO allein."
    },
    {
      title: "Rechtsanwalt Weber – Vom nationalen Blog zum lokalen Marktführer",
      industry: "Rechtsberatung",
      location: "Düsseldorf",
      duration: "6 Monate",
      challenge: "Die Kanzlei hatte 200+ organische Blog-Artikel, aber keine lokale Sichtbarkeit für 'Anwalt Düsseldorf'.",
      measures: [
        "Google Business Profil mit allen Fachgebieten & Fotos eingerichtet",
        "Lokale Landingpages: 'Arbeitsrecht Düsseldorf', 'Mietrecht Düsseldorf'",
        "NAP-Konsistenz auf 50+ Verzeichnissen hergestellt",
        "Bestehende Blog-Artikel um lokale Keywords ergänzt",
        "Schema Markup für Anwalt & lokale Geschäftstätigkeit implementiert"
      ],
      metrics: [
        { label: "Local Pack Ranking", before: "Nicht sichtbar", after: "Platz 2", change: "Top 3" },
        { label: "Mandatsanfragen/Monat", before: "8", after: "32", change: "+300%" },
        { label: "Organischer Traffic", before: "3.500", after: "5.200", change: "+49%" },
      ],
      quote: { text: "Unser Blog brachte Leser aus ganz Deutschland – aber keine Mandanten. Local SEO hat das komplett geändert.", author: "Dr. Martin W.", role: "Kanzleiinhaber" },
      result: "Mandatsanfragen vervierfacht. 70% der neuen Mandanten kommen jetzt über lokale Google-Suchen."
    }
  ],

  "google-maps-seo-vs-organic-seo": [
    {
      title: "Pizzeria Da Marco – Maps-Optimierung verdreifacht Walk-Ins",
      industry: "Gastronomie",
      location: "München",
      duration: "3 Monate",
      challenge: "Trotz guter Website mit SEO-optimierten Texten war die Pizzeria auf Google Maps kaum sichtbar. Walk-In-Kunden blieben aus.",
      measures: [
        "Google Business Profil komplett überarbeitet mit 40+ Fotos",
        "Kategorie-Optimierung: Pizzeria + Italienisches Restaurant",
        "Bewertungsstrategie: QR-Code auf jeder Rechnung",
        "Google Posts 3x/Woche mit Tagesangeboten",
        "Lokale Backlinks von Food-Blogs und Stadtmagazin"
      ],
      metrics: [
        { label: "Google Maps Position", before: "Position 12", after: "Platz 2", change: "Top 3" },
        { label: "Maps-Aufrufe/Monat", before: "180", after: "1.400", change: "+678%" },
        { label: "Walk-In Neukunden/Woche", before: "~8", after: "~25", change: "+213%" },
      ],
      quote: { text: "Unsere Website war schon gut, aber die Leute suchen 'Pizza in der Nähe' – da zählt nur Maps.", author: "Marco R.", role: "Inhaber" },
      result: "Umsatz +45% in 3 Monaten. Google Maps bringt jetzt 3x mehr Neukunden als die organische Suche."
    },
    {
      title: "IT-Beratung Schneider – Organic SEO für B2B, Maps für lokale Leads",
      industry: "IT-Dienstleistung",
      location: "Hamburg",
      duration: "5 Monate",
      challenge: "B2B IT-Beratung mit guter Maps-Präsenz, aber ohne organischen Content. Konkurrenz dominierte bei 'IT Beratung' + Fachthemen.",
      measures: [
        "Fach-Blog mit 15 Artikeln zu IT-Sicherheit, Cloud-Migration, Digitalisierung",
        "Pillar-Page: 'IT-Beratung Hamburg – Ihr Partner für Digitalisierung'",
        "Technische SEO: Core Web Vitals optimiert, Schema Markup",
        "Google Business weiter gepflegt mit Case-Study-Posts",
        "Interne Verlinkung zwischen Blog und lokalen Landingpages"
      ],
      metrics: [
        { label: "Organischer Traffic", before: "120/Monat", after: "2.100/Monat", change: "+1.650%" },
        { label: "Qualifizierte Leads/Monat", before: "3", after: "14", change: "+367%" },
        { label: "Ø Auftragswert", before: "5.000€", after: "12.000€", change: "+140%" },
      ],
      quote: { text: "Maps brachte uns lokale Anfragen, aber erst der Fach-Content hat uns als Experten positioniert – und die großen Aufträge gebracht.", author: "Stefan S.", role: "Geschäftsführer" },
      result: "Jahresumsatz +120%. Die Kombination aus Maps-Präsenz und organischem Content erzeugt einen Vertrauens-Funnel, der größere Projekte anzieht."
    }
  ],

  "ai-search-vs-traditional-search": [
    {
      title: "Bäckerei Mühlenstein – Von AI Overview zitiert werden",
      industry: "Bäckerei / Gastronomie",
      location: "Berlin",
      duration: "4 Monate",
      challenge: "Die Bäckerei war gut in der traditionellen Suche positioniert, aber AI Overviews zeigten Konkurrenten als empfohlene Quelle.",
      measures: [
        "FAQ-Schema auf Website implementiert mit 25+ lokalen Fragen",
        "Strukturierte Daten: Öffnungszeiten, Produkte, Bewertungen",
        "Conversational Content: 'Welche Bäckerei in Berlin hat sonntags offen?'",
        "Google Business mit detaillierten Produktbeschreibungen ergänzt",
        "Autoritative Erwähnungen in lokalen Food-Blogs aufgebaut"
      ],
      metrics: [
        { label: "AI Overview Erwähnungen", before: "0", after: "12/Monat", change: "Neu" },
        { label: "Voice Search Anfragen", before: "~3/Woche", after: "~18/Woche", change: "+500%" },
        { label: "Website-Traffic", before: "800/Monat", after: "1.900/Monat", change: "+138%" },
      ],
      quote: { text: "Seit Google AI uns als Antwort zeigt, kommen Kunden und sagen: 'Google hat mir empfohlen, zu euch zu gehen.'", author: "Hans M.", role: "Bäckermeister" },
      result: "Trotz Zero-Click-Trend stieg der Traffic um 138%. Die AI-Erwähnungen wirken wie kostenlose Empfehlungen."
    },
    {
      title: "Yoga Studio Harmonie – Doppelstrategie für AI + traditionelle Suche",
      industry: "Fitness & Wellness",
      location: "Köln",
      duration: "5 Monate",
      challenge: "AI-Chatbots empfahlen Konkurrenz-Studios. Traditionelle Rankings allein reichten nicht mehr für Neukunden-Gewinnung.",
      measures: [
        "Umfassende 'Yoga in Köln'-Pillar-Page mit E-E-A-T-Signalen",
        "Trainer-Profile mit Zertifikaten und Expertise veröffentlicht",
        "Strukturierte FAQ-Sektion: 'Bestes Yoga-Studio Köln für Anfänger?'",
        "Bewertungen aktiv auf Google, Yelp und Trustpilot gesammelt",
        "Content-Cluster: Yoga-Stile, Preise, Standort-Vorteile"
      ],
      metrics: [
        { label: "ChatGPT/Perplexity Erwähnungen", before: "0", after: "8/Monat", change: "Neu" },
        { label: "Probestunden-Buchungen", before: "15/Monat", after: "42/Monat", change: "+180%" },
        { label: "Google Ranking 'Yoga Köln'", before: "Platz 9", after: "Platz 2", change: "+7 Plätze" },
      ],
      quote: { text: "Wenn jemand ChatGPT fragt 'Welches Yoga-Studio in Köln?' und unser Name fällt – das ist unbezahlbar.", author: "Nina H.", role: "Studio-Inhaberin" },
      result: "Probestunden fast verdreifacht. 25% der Neukunden geben an, über AI-Empfehlungen auf das Studio aufmerksam geworden zu sein."
    }
  ],
};
