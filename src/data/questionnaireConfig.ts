export type BusinessCategory = 
  | 'gastronomy' 
  | 'beauty_wellness' 
  | 'crafts' 
  | 'health' 
  | 'retail' 
  | 'fitness' 
  | 'services';

export interface CategoryInfo {
  id: BusinessCategory;
  name: string;
  icon: string;
  customerTerm: string;
  customerTermPlural: string;
}

export const businessCategories: CategoryInfo[] = [
  { id: 'gastronomy', name: 'Gastronomie', icon: '🍽️', customerTerm: 'Gast', customerTermPlural: 'Gäste' },
  { id: 'beauty_wellness', name: 'Beauty & Wellness', icon: '💇', customerTerm: 'Kunde', customerTermPlural: 'Kunden' },
  { id: 'crafts', name: 'Handwerk', icon: '🔧', customerTerm: 'Kunde', customerTermPlural: 'Kunden' },
  { id: 'health', name: 'Gesundheit', icon: '🏥', customerTerm: 'Patient', customerTermPlural: 'Patienten' },
  { id: 'retail', name: 'Einzelhandel', icon: '🛒', customerTerm: 'Kunde', customerTermPlural: 'Kunden' },
  { id: 'fitness', name: 'Fitness & Sport', icon: '🏋️', customerTerm: 'Mitglied', customerTermPlural: 'Mitglieder' },
  { id: 'services', name: 'Dienstleistungen', icon: '📚', customerTerm: 'Kunde', customerTermPlural: 'Kunden' },
];

export interface QuestionOption {
  value: string;
  label: string;
  icon?: string;
}

export interface Question {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'slider' | 'file' | 'toggle' | 'time';
  question: string;
  placeholder?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  helpText?: string;
  maxLength?: number;
  gmbField?: string; // Reference to exact GMB field name
}

export interface QuestionnaireStep {
  key: string;
  title: string;
  subtitle?: string;
  motivationMessage?: string;
  questions: Question[];
  categories?: BusinessCategory[]; // If empty, applies to all
}

// =============================================================================
// STEP 1: UNTERNEHMENSINFO (für GMB: Unternehmensname, Eröffnungsdatum)
// =============================================================================
export const universalSteps: QuestionnaireStep[] = [
  {
    key: 'business_info',
    title: 'Grundlegende Unternehmensdaten',
    subtitle: 'Diese Daten werden für Google Business verwendet',
    motivationMessage: 'Los geht\'s! 🚀',
    questions: [
      { 
        id: 'business_name', 
        type: 'text', 
        question: 'Offizieller Unternehmensname', 
        placeholder: 'Wie auf Schild/Briefkopf',
        helpText: 'Genau so wie er auf deinem Firmenschild steht',
        required: true,
        gmbField: 'Unternehmensname'
      },
      { 
        id: 'owner_name', 
        type: 'text', 
        question: 'Inhaber / Ansprechpartner', 
        placeholder: 'Vor- und Nachname',
        required: true,
        gmbField: 'Intern'
      },
      { 
        id: 'opening_date_year', 
        type: 'text', 
        question: 'Eröffnungsjahr', 
        placeholder: 'z.B. 2015',
        helpText: 'Wann wurde das Unternehmen gegründet?',
        gmbField: 'Eröffnungsdatum'
      },
      { 
        id: 'opening_date_month', 
        type: 'select', 
        question: 'Eröffnungsmonat (optional)', 
        options: [
          { value: '', label: 'Nicht angeben' },
          { value: '01', label: 'Januar' },
          { value: '02', label: 'Februar' },
          { value: '03', label: 'März' },
          { value: '04', label: 'April' },
          { value: '05', label: 'Mai' },
          { value: '06', label: 'Juni' },
          { value: '07', label: 'Juli' },
          { value: '08', label: 'August' },
          { value: '09', label: 'September' },
          { value: '10', label: 'Oktober' },
          { value: '11', label: 'November' },
          { value: '12', label: 'Dezember' },
        ],
        gmbField: 'Eröffnungsdatum'
      },
    ]
  },

  // =============================================================================
  // STEP 2: ADRESSE (für GMB: Einzelne Felder für copy-paste)
  // =============================================================================
  {
    key: 'address',
    title: 'Unternehmensadresse',
    subtitle: 'Jedes Feld einzeln für einfaches Kopieren',
    motivationMessage: 'Perfekt! 📍',
    questions: [
      { 
        id: 'street', 
        type: 'text', 
        question: 'Straße und Hausnummer', 
        placeholder: 'Musterstraße 123',
        required: true,
        gmbField: 'Adresse - Straße'
      },
      { 
        id: 'postal_code', 
        type: 'text', 
        question: 'Postleitzahl', 
        placeholder: '12345',
        required: true,
        gmbField: 'Adresse - PLZ'
      },
      { 
        id: 'city', 
        type: 'text', 
        question: 'Stadt', 
        placeholder: 'München',
        required: true,
        gmbField: 'Adresse - Stadt'
      },
      { 
        id: 'address_extra', 
        type: 'text', 
        question: 'Adresszusatz (optional)', 
        placeholder: 'z.B. 2. OG links, Hinterhaus',
        gmbField: 'Adresse - Zusatz'
      },
    ]
  },

  // =============================================================================
  // STEP 3: EINZUGSGEBIET (für mobile Dienste)
  // =============================================================================
  {
    key: 'service_area',
    title: 'Einzugsgebiet',
    subtitle: 'Für Unternehmen die Kunden vor Ort besuchen',
    motivationMessage: 'Weiter so! 🗺️',
    questions: [
      { 
        id: 'has_physical_location', 
        type: 'select', 
        question: 'Können Kunden zu deinem Standort kommen?', 
        options: [
          { value: 'yes', label: 'Ja, Kunden kommen zu mir' },
          { value: 'no', label: 'Nein, ich komme zum Kunden' },
          { value: 'both', label: 'Beides' },
        ],
        required: true,
        gmbField: 'Standorttyp'
      },
      { 
        id: 'service_areas', 
        type: 'textarea', 
        question: 'Einzugsgebiet (Städte/Regionen)', 
        placeholder: 'z.B. München, Freising, Erding, Landkreis München',
        helpText: 'Alle Gebiete kommasepariert auflisten',
        gmbField: 'Einzugsgebiet'
      },
      { 
        id: 'service_radius_km', 
        type: 'text', 
        question: 'Maximaler Einsatzradius (km)', 
        placeholder: 'z.B. 50',
        gmbField: 'Einzugsgebiet - Radius'
      },
    ]
  },

  // =============================================================================
  // STEP 4: ÖFFNUNGSZEITEN (Alle 7 Tage einzeln für GMB)
  // =============================================================================
  {
    key: 'opening_hours',
    title: 'Öffnungszeiten',
    subtitle: 'Jeden Tag einzeln angeben (wie bei Google)',
    motivationMessage: 'Das schaffst du! ⏰',
    questions: [
      { 
        id: 'hours_monday', 
        type: 'text', 
        question: 'Montag', 
        placeholder: '09:00 - 18:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Montag'
      },
      { 
        id: 'hours_tuesday', 
        type: 'text', 
        question: 'Dienstag', 
        placeholder: '09:00 - 18:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Dienstag'
      },
      { 
        id: 'hours_wednesday', 
        type: 'text', 
        question: 'Mittwoch', 
        placeholder: '09:00 - 18:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Mittwoch'
      },
      { 
        id: 'hours_thursday', 
        type: 'text', 
        question: 'Donnerstag', 
        placeholder: '09:00 - 18:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Donnerstag'
      },
      { 
        id: 'hours_friday', 
        type: 'text', 
        question: 'Freitag', 
        placeholder: '09:00 - 18:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Freitag'
      },
      { 
        id: 'hours_saturday', 
        type: 'text', 
        question: 'Samstag', 
        placeholder: '10:00 - 14:00 oder "Geschlossen"',
        gmbField: 'Öffnungszeiten - Samstag'
      },
      { 
        id: 'hours_sunday', 
        type: 'text', 
        question: 'Sonntag', 
        placeholder: 'Geschlossen',
        gmbField: 'Öffnungszeiten - Sonntag'
      },
      { 
        id: 'special_hours_note', 
        type: 'textarea', 
        question: 'Sonderöffnungszeiten / Feiertage (optional)', 
        placeholder: 'z.B. 24.12. 09:00-14:00, 31.12. geschlossen',
        helpText: 'Besondere Zeiten an Feiertagen oder saisonale Änderungen',
        gmbField: 'Sonderöffnungszeiten'
      },
    ]
  },

  // =============================================================================
  // STEP 5: KONTAKTDATEN (Telefon, E-Mail, WhatsApp)
  // =============================================================================
  {
    key: 'contact',
    title: 'Kontaktdaten',
    subtitle: 'Wie können Kunden dich erreichen?',
    motivationMessage: 'Super! 📞',
    questions: [
      { 
        id: 'phone_primary', 
        type: 'text', 
        question: 'Primäre Telefonnummer', 
        placeholder: '+49 89 12345678',
        helpText: 'Hauptnummer für Google Business',
        required: true,
        gmbField: 'Telefonnummer (primär)'
      },
      { 
        id: 'phone_secondary', 
        type: 'text', 
        question: 'Zusätzliche Telefonnummer (optional)', 
        placeholder: '+49 170 1234567',
        gmbField: 'Telefonnummer (zusätzlich)'
      },
      { 
        id: 'email', 
        type: 'text', 
        question: 'E-Mail-Adresse', 
        placeholder: 'info@dein-unternehmen.de',
        required: true,
        gmbField: 'E-Mail'
      },
      { 
        id: 'whatsapp_number', 
        type: 'text', 
        question: 'WhatsApp-Nummer (falls verfügbar)', 
        placeholder: '+49 170 1234567',
        helpText: 'Leer lassen wenn nicht vorhanden',
        gmbField: 'WhatsApp'
      },
    ]
  },

  // =============================================================================
  // STEP 6: WEBSITE UND LINKS
  // =============================================================================
  {
    key: 'website_links',
    title: 'Website und Links',
    subtitle: 'Alle wichtigen URLs für dein Profil',
    motivationMessage: 'Toll! 🌐',
    questions: [
      { 
        id: 'website_url', 
        type: 'text', 
        question: 'Website-URL', 
        placeholder: 'https://www.dein-unternehmen.de',
        helpText: 'Mit https:// eingeben',
        gmbField: 'Website'
      },
      { 
        id: 'booking_url', 
        type: 'text', 
        question: 'Termin-/Reservierungs-URL (optional)', 
        placeholder: 'https://buchung.dein-unternehmen.de',
        helpText: 'Link zur Online-Terminbuchung',
        gmbField: 'Termin-URL'
      },
      { 
        id: 'menu_url', 
        type: 'text', 
        question: 'Speisekarten-/Produktlisten-URL (optional)', 
        placeholder: 'https://www.dein-unternehmen.de/menu',
        helpText: 'Nur relevant für Gastronomie/Retail',
        gmbField: 'Menü-URL'
      },
      { 
        id: 'order_url', 
        type: 'text', 
        question: 'Online-Bestell-URL (optional)', 
        placeholder: 'https://bestellen.dein-unternehmen.de',
        helpText: 'Für Online-Bestellungen/Shop',
        gmbField: 'Bestell-URL'
      },
    ]
  },

  // =============================================================================
  // STEP 7: SOCIAL MEDIA (Alle Plattformen)
  // =============================================================================
  {
    key: 'social_media',
    title: 'Social Media Profile',
    subtitle: 'Alle deine Social Media Kanäle',
    motivationMessage: 'Fast Halbzeit! 📱',
    questions: [
      { 
        id: 'instagram_url', 
        type: 'text', 
        question: 'Instagram', 
        placeholder: 'https://instagram.com/dein_account',
        gmbField: 'Social Media - Instagram'
      },
      { 
        id: 'facebook_url', 
        type: 'text', 
        question: 'Facebook', 
        placeholder: 'https://facebook.com/deine-seite',
        gmbField: 'Social Media - Facebook'
      },
      { 
        id: 'linkedin_url', 
        type: 'text', 
        question: 'LinkedIn', 
        placeholder: 'https://linkedin.com/company/...',
        gmbField: 'Social Media - LinkedIn'
      },
      { 
        id: 'youtube_url', 
        type: 'text', 
        question: 'YouTube', 
        placeholder: 'https://youtube.com/@dein-kanal',
        gmbField: 'Social Media - YouTube'
      },
      { 
        id: 'tiktok_url', 
        type: 'text', 
        question: 'TikTok', 
        placeholder: 'https://tiktok.com/@dein_account',
        gmbField: 'Social Media - TikTok'
      },
      { 
        id: 'twitter_url', 
        type: 'text', 
        question: 'X (Twitter)', 
        placeholder: 'https://x.com/dein_account',
        gmbField: 'Social Media - X'
      },
      { 
        id: 'pinterest_url', 
        type: 'text', 
        question: 'Pinterest', 
        placeholder: 'https://pinterest.com/dein_account',
        gmbField: 'Social Media - Pinterest'
      },
    ]
  },

  // =============================================================================
  // STEP 8: UNTERNEHMENSBESCHREIBUNG (max 750 Zeichen für GMB)
  // =============================================================================
  {
    key: 'description',
    title: 'Unternehmensbeschreibung',
    subtitle: 'Diese Beschreibung erscheint bei Google',
    motivationMessage: 'Das Herzstück! ✨',
    questions: [
      { 
        id: 'business_description', 
        type: 'textarea', 
        question: 'Unternehmensbeschreibung (max. 750 Zeichen)', 
        placeholder: 'Beschreibe dein Unternehmen: Was bietest du an? Was macht dich besonders? Wie lange gibt es dich schon? Was können Kunden erwarten?',
        helpText: 'Tipp: Beginne mit dem Wichtigsten. Diese Beschreibung wird auf Google angezeigt.',
        required: true,
        maxLength: 750,
        gmbField: 'Unternehmensbeschreibung'
      },
      { 
        id: 'unique_selling_points', 
        type: 'textarea', 
        question: 'Was macht dich einzigartig? (für interne Nutzung)', 
        placeholder: 'z.B. Familienrezepte seit 3 Generationen, einziger Anbieter in der Region, besondere Qualifikationen...',
        helpText: 'Diese Info nutze ich um bessere Texte für dich zu schreiben',
        gmbField: 'Intern - USPs'
      },
    ]
  },

  // =============================================================================
  // STEP 9: HAUPTKATEGORIE UND NEBENKATEGORIEN (GMB)
  // =============================================================================
  {
    key: 'gmb_categories',
    title: 'Google Kategorien',
    subtitle: 'Welche Kategorien passen zu deinem Unternehmen?',
    motivationMessage: 'Wichtig für Google! 📊',
    questions: [
      { 
        id: 'gmb_main_category', 
        type: 'text', 
        question: 'Hauptkategorie bei Google', 
        placeholder: 'z.B. Restaurant, Friseur, Zahnarzt',
        helpText: 'Die wichtigste Kategorie für dein Unternehmen',
        required: true,
        gmbField: 'Hauptkategorie'
      },
      { 
        id: 'gmb_secondary_categories', 
        type: 'textarea', 
        question: 'Nebenkategorien (kommasepariert)', 
        placeholder: 'z.B. Pizzeria, Italienisches Restaurant, Lieferservice',
        helpText: 'Bis zu 9 weitere Kategorien möglich',
        gmbField: 'Nebenkategorien'
      },
    ]
  },
];

// =============================================================================
// BRANCHENSPEZIFISCHE ATTRIBUTE (für GMB Attribute)
// =============================================================================
export const categorySpecificSteps: Record<BusinessCategory, QuestionnaireStep[]> = {
  gastronomy: [
    {
      key: 'gastro_attributes',
      title: 'Restaurant-Attribute',
      subtitle: 'Diese Infos erscheinen als Icons bei Google',
      motivationMessage: 'Für deine Gäste! 🍕',
      questions: [
        { 
          id: 'seating_outdoor', 
          type: 'select', 
          question: 'Sitzplätze im Freien', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Sitzplätze im Freien'
        },
        { 
          id: 'seating_indoor_count', 
          type: 'text', 
          question: 'Anzahl Sitzplätze (innen)', 
          placeholder: 'z.B. 60',
          gmbField: 'Attribut - Sitzplätze'
        },
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Eingang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'wifi_available', 
          type: 'select', 
          question: 'WLAN verfügbar', 
          options: [
            { value: 'yes', label: 'Ja, kostenlos' },
            { value: 'paid', label: 'Ja, kostenpflichtig' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - WLAN'
        },
        { 
          id: 'reservations_accepted', 
          type: 'select', 
          question: 'Reservierungen möglich', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'required', label: 'Ja, empfohlen' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Reservierungen'
        },
        { 
          id: 'takeaway', 
          type: 'select', 
          question: 'Zum Mitnehmen', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Mitnahme'
        },
        { 
          id: 'delivery', 
          type: 'select', 
          question: 'Lieferung', 
          options: [
            { value: 'yes', label: 'Ja, eigener Lieferdienst' },
            { value: 'partner', label: 'Ja, über Partner (Lieferando etc.)' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Lieferung'
        },
        { 
          id: 'payment_methods', 
          type: 'multiselect', 
          question: 'Akzeptierte Zahlungsarten', 
          options: [
            { value: 'cash', label: 'Bargeld' },
            { value: 'ec', label: 'EC-Karte' },
            { value: 'credit', label: 'Kreditkarte' },
            { value: 'mobile', label: 'Mobile Payment (Apple/Google Pay)' },
          ],
          gmbField: 'Attribut - Zahlungsarten'
        },
        { 
          id: 'price_range', 
          type: 'select', 
          question: 'Preisklasse', 
          options: [
            { value: '€', label: '€ (günstig)' },
            { value: '€€', label: '€€ (moderat)' },
            { value: '€€€', label: '€€€ (gehoben)' },
            { value: '€€€€', label: '€€€€ (exklusiv)' },
          ],
          gmbField: 'Attribut - Preisklasse'
        },
        { 
          id: 'cuisine_types', 
          type: 'textarea', 
          question: 'Küchenstil / Spezialitäten', 
          placeholder: 'z.B. Italienisch, Pizza, Pasta, Mediterran',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Küchenstil'
        },
      ]
    },
  ],
  beauty_wellness: [
    {
      key: 'beauty_attributes',
      title: 'Salon-Attribute',
      subtitle: 'Infos für deine Kunden bei Google',
      motivationMessage: 'Schön! ✨',
      questions: [
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Zugang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'appointment_required', 
          type: 'select', 
          question: 'Termin erforderlich?', 
          options: [
            { value: 'yes', label: 'Ja, nur mit Termin' },
            { value: 'recommended', label: 'Empfohlen' },
            { value: 'no', label: 'Nein, Walk-ins willkommen' },
          ],
          gmbField: 'Attribut - Terminpflicht'
        },
        { 
          id: 'online_booking_available', 
          type: 'select', 
          question: 'Online-Terminbuchung', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Online-Buchung'
        },
        { 
          id: 'payment_methods', 
          type: 'multiselect', 
          question: 'Akzeptierte Zahlungsarten', 
          options: [
            { value: 'cash', label: 'Bargeld' },
            { value: 'ec', label: 'EC-Karte' },
            { value: 'credit', label: 'Kreditkarte' },
            { value: 'mobile', label: 'Mobile Payment' },
          ],
          gmbField: 'Attribut - Zahlungsarten'
        },
        { 
          id: 'services_list', 
          type: 'textarea', 
          question: 'Angebotene Dienstleistungen', 
          placeholder: 'z.B. Damenhaarschnitt, Herrenhaarschnitt, Färben, Highlights, Maniküre, Pediküre',
          helpText: 'Kommasepariert auflisten - für GMB Services',
          gmbField: 'Services'
        },
      ]
    },
  ],
  crafts: [
    {
      key: 'crafts_attributes',
      title: 'Handwerker-Attribute',
      subtitle: 'Wichtige Infos für Kundenanfragen',
      motivationMessage: 'Handwerk rockt! 🔧',
      questions: [
        { 
          id: 'onsite_service', 
          type: 'select', 
          question: 'Vor-Ort-Service', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein, nur in Werkstatt' },
          ],
          gmbField: 'Attribut - Vor-Ort-Service'
        },
        { 
          id: 'emergency_service', 
          type: 'select', 
          question: 'Notdienst', 
          options: [
            { value: 'yes_24h', label: 'Ja, 24/7' },
            { value: 'yes_limited', label: 'Ja, eingeschränkt' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Notdienst'
        },
        { 
          id: 'free_estimates', 
          type: 'select', 
          question: 'Kostenlose Kostenvoranschläge', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Kostenvoranschlag'
        },
        { 
          id: 'licensed_insured', 
          type: 'select', 
          question: 'Meisterbetrieb / Versichert', 
          options: [
            { value: 'meister', label: 'Meisterbetrieb' },
            { value: 'insured', label: 'Versichert' },
            { value: 'both', label: 'Beides' },
          ],
          gmbField: 'Attribut - Qualifikation'
        },
        { 
          id: 'services_list', 
          type: 'textarea', 
          question: 'Angebotene Leistungen', 
          placeholder: 'z.B. Heizungsinstallation, Sanitärreparatur, Notdienst, Wartung',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Services'
        },
      ]
    },
  ],
  health: [
    {
      key: 'health_attributes',
      title: 'Praxis-Attribute',
      subtitle: 'Wichtige Infos für Patienten',
      motivationMessage: 'Für die Gesundheit! 💚',
      questions: [
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Zugang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'appointment_required', 
          type: 'select', 
          question: 'Termin erforderlich?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'recommended', label: 'Empfohlen' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Terminpflicht'
        },
        { 
          id: 'accepts_new_patients', 
          type: 'select', 
          question: 'Nimmt neue Patienten an?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'waitlist', label: 'Warteliste' },
            { value: 'no', label: 'Aktuell nicht' },
          ],
          gmbField: 'Attribut - Neue Patienten'
        },
        { 
          id: 'online_booking_available', 
          type: 'select', 
          question: 'Online-Terminbuchung', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'doctolib', label: 'Über Doctolib' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Online-Buchung'
        },
        { 
          id: 'insurance_types', 
          type: 'multiselect', 
          question: 'Akzeptierte Versicherungen', 
          options: [
            { value: 'public', label: 'Gesetzlich (GKV)' },
            { value: 'private', label: 'Privat (PKV)' },
            { value: 'self', label: 'Selbstzahler' },
          ],
          gmbField: 'Attribut - Versicherungen'
        },
        { 
          id: 'specializations', 
          type: 'textarea', 
          question: 'Fachgebiete / Spezialisierungen', 
          placeholder: 'z.B. Allgemeinmedizin, Sportmedizin, Ernährungsberatung',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Spezialisierungen'
        },
      ]
    },
  ],
  retail: [
    {
      key: 'retail_attributes',
      title: 'Geschäfts-Attribute',
      subtitle: 'Infos für Kunden',
      motivationMessage: 'Shopping time! 🛍️',
      questions: [
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Zugang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'has_online_shop', 
          type: 'select', 
          question: 'Online-Shop vorhanden?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Online-Shop'
        },
        { 
          id: 'delivery_available', 
          type: 'select', 
          question: 'Lieferung möglich?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'local', label: 'Ja, lokal' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Lieferung'
        },
        { 
          id: 'pickup_available', 
          type: 'select', 
          question: 'Click & Collect / Abholung', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Abholung'
        },
        { 
          id: 'payment_methods', 
          type: 'multiselect', 
          question: 'Akzeptierte Zahlungsarten', 
          options: [
            { value: 'cash', label: 'Bargeld' },
            { value: 'ec', label: 'EC-Karte' },
            { value: 'credit', label: 'Kreditkarte' },
            { value: 'mobile', label: 'Mobile Payment' },
          ],
          gmbField: 'Attribut - Zahlungsarten'
        },
        { 
          id: 'product_categories', 
          type: 'textarea', 
          question: 'Hauptprodukte / -kategorien', 
          placeholder: 'z.B. Damenmode, Herrenschuhe, Accessoires, Schmuck',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Produkte'
        },
      ]
    },
  ],
  fitness: [
    {
      key: 'fitness_attributes',
      title: 'Fitness-Attribute',
      subtitle: 'Infos für Mitglieder',
      motivationMessage: 'Stay fit! 💪',
      questions: [
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Zugang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'trial_available', 
          type: 'select', 
          question: 'Probetraining möglich?', 
          options: [
            { value: 'yes_free', label: 'Ja, kostenlos' },
            { value: 'yes_paid', label: 'Ja, kostenpflichtig' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Probetraining'
        },
        { 
          id: 'personal_training', 
          type: 'select', 
          question: 'Personal Training', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Personal Training'
        },
        { 
          id: 'facilities', 
          type: 'multiselect', 
          question: 'Ausstattung', 
          options: [
            { value: 'sauna', label: 'Sauna' },
            { value: 'pool', label: 'Pool' },
            { value: 'locker', label: 'Umkleiden' },
            { value: 'shower', label: 'Duschen' },
            { value: 'parking', label: 'Parkplätze' },
          ],
          gmbField: 'Attribut - Ausstattung'
        },
        { 
          id: 'offerings', 
          type: 'textarea', 
          question: 'Angebote / Kurse', 
          placeholder: 'z.B. Krafttraining, Cardio, Yoga, Spinning, CrossFit',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Angebote'
        },
      ]
    },
  ],
  services: [
    {
      key: 'services_attributes',
      title: 'Dienstleistungs-Attribute',
      subtitle: 'Infos für Kunden',
      motivationMessage: 'Service ist King! 👑',
      questions: [
        { 
          id: 'wheelchair_accessible', 
          type: 'select', 
          question: 'Rollstuhlgerechter Zugang', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Rollstuhlgerecht'
        },
        { 
          id: 'appointment_required', 
          type: 'select', 
          question: 'Termin erforderlich?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'recommended', label: 'Empfohlen' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Terminpflicht'
        },
        { 
          id: 'online_consultation', 
          type: 'select', 
          question: 'Online-Beratung möglich?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Online-Beratung'
        },
        { 
          id: 'free_initial_consultation', 
          type: 'select', 
          question: 'Kostenloses Erstgespräch?', 
          options: [
            { value: 'yes', label: 'Ja' },
            { value: 'no', label: 'Nein' },
          ],
          gmbField: 'Attribut - Erstgespräch'
        },
        { 
          id: 'services_list', 
          type: 'textarea', 
          question: 'Angebotene Dienstleistungen', 
          placeholder: 'z.B. Steuerberatung, Buchhaltung, Lohnabrechnung, Gründungsberatung',
          helpText: 'Kommasepariert auflisten',
          gmbField: 'Services'
        },
      ]
    },
  ],
};

// =============================================================================
// FINALE SCHRITTE (GMB-Status, Ziele, Fotos)
// =============================================================================
export const finalSteps: QuestionnaireStep[] = [
  {
    key: 'current_gmb_status',
    title: 'Aktueller Google-Status',
    subtitle: 'Für meine interne Planung',
    motivationMessage: 'Fast geschafft! 🎯',
    questions: [
      { 
        id: 'has_gmb_profile', 
        type: 'select', 
        question: 'Bestehendes Google Business Profil?', 
        options: [
          { value: 'yes_verified', label: 'Ja, verifiziert' },
          { value: 'yes_unverified', label: 'Ja, nicht verifiziert' },
          { value: 'no', label: 'Nein, noch nicht' },
          { value: 'unknown', label: 'Weiß nicht' },
        ],
        gmbField: 'Intern - Status'
      },
      { 
        id: 'gmb_profile_url', 
        type: 'text', 
        question: 'Link zum bestehenden Profil (falls vorhanden)', 
        placeholder: 'https://g.page/...',
        gmbField: 'Intern - Profil-URL'
      },
      { 
        id: 'current_rating', 
        type: 'text', 
        question: 'Aktuelle Sternebewertung', 
        placeholder: 'z.B. 4.5',
        gmbField: 'Intern - Bewertung'
      },
      { 
        id: 'review_count', 
        type: 'text', 
        question: 'Anzahl der Bewertungen', 
        placeholder: 'z.B. 47',
        gmbField: 'Intern - Anzahl Bewertungen'
      },
    ]
  },
  {
    key: 'goals_challenges',
    title: 'Ziele und Herausforderungen',
    subtitle: 'Was willst du erreichen?',
    motivationMessage: 'Letzte Infos! 🏁',
    questions: [
      { 
        id: 'main_challenges', 
        type: 'multiselect', 
        question: 'Größte Herausforderungen', 
        options: [
          { value: 'few_reviews', label: 'Zu wenig Bewertungen' },
          { value: 'bad_reviews', label: 'Negative Bewertungen' },
          { value: 'low_visibility', label: 'Schlechte Sichtbarkeit' },
          { value: 'competition', label: 'Starke Konkurrenz' },
          { value: 'no_time', label: 'Keine Zeit für Marketing' },
          { value: 'no_knowledge', label: 'Fehlendes Know-how' },
        ],
        gmbField: 'Intern - Herausforderungen'
      },
      { 
        id: 'main_goal', 
        type: 'select', 
        question: 'Hauptziel', 
        options: [
          { value: 'more_customers', label: 'Mehr Neukunden' },
          { value: 'better_reviews', label: 'Bessere Bewertungen' },
          { value: 'visibility', label: 'Mehr Sichtbarkeit bei Google' },
          { value: 'reputation', label: 'Besserer Online-Ruf' },
        ],
        gmbField: 'Intern - Hauptziel'
      },
      { 
        id: 'competitor_name', 
        type: 'text', 
        question: 'Stärkster Konkurrent (Name/Website)', 
        placeholder: 'z.B. Restaurant XY oder www.konkurrent.de',
        gmbField: 'Intern - Konkurrent'
      },
    ]
  },
  {
    key: 'photos_assets',
    title: 'Fotos und Grafiken',
    subtitle: 'Für dein Google-Profil und QR-Materialien',
    motivationMessage: 'Der letzte Schritt! 🎨',
    questions: [
      { 
        id: 'logo', 
        type: 'file', 
        question: 'Logo hochladen', 
        helpText: 'PNG oder JPG, min. 500x500px für Google',
        gmbField: 'Foto - Logo'
      },
      { 
        id: 'cover_photo', 
        type: 'file', 
        question: 'Titelbild / Cover-Foto', 
        helpText: 'Querformat, min. 1200x675px empfohlen',
        gmbField: 'Foto - Titelbild'
      },
      { 
        id: 'exterior_photo', 
        type: 'file', 
        question: 'Außenansicht des Geschäfts', 
        helpText: 'Hilft Kunden, dich zu finden',
        gmbField: 'Foto - Außenansicht'
      },
      { 
        id: 'interior_photo', 
        type: 'file', 
        question: 'Innenansicht (optional)', 
        helpText: 'Zeige die Atmosphäre deines Geschäfts',
        gmbField: 'Foto - Innenansicht'
      },
      { 
        id: 'product_photo', 
        type: 'file', 
        question: 'Produkt-/Dienstleistungsfoto (optional)', 
        helpText: 'Dein bestes Produkt oder Arbeit',
        gmbField: 'Foto - Produkt'
      },
    ]
  },
];

export function getAllStepsForCategory(category: BusinessCategory): QuestionnaireStep[] {
  const categorySteps = categorySpecificSteps[category] || [];
  return [
    ...universalSteps,
    ...categorySteps,
    ...finalSteps,
  ];
}

export function getTotalStepCount(category: BusinessCategory): number {
  return getAllStepsForCategory(category).length + 1; // +1 for category selection
}

export const motivationMessages = [
  "Du machst das großartig! 🌟",
  "Weiter so! 💪",
  "Fast geschafft! 🎯",
  "Super Fortschritt! 🚀",
  "Du bist ein Star! ⭐",
];
