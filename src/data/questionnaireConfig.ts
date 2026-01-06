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
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'slider' | 'file' | 'rating' | 'time-range';
  question: string;
  placeholder?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  helpText?: string;
}

export interface QuestionnaireStep {
  key: string;
  title: string;
  subtitle?: string;
  motivationMessage?: string;
  questions: Question[];
  categories?: BusinessCategory[]; // If empty, applies to all
}

export const universalSteps: QuestionnaireStep[] = [
  {
    key: 'basic_info',
    title: 'Erzähl uns von deinem Unternehmen',
    subtitle: 'Diese Infos helfen uns, dich besser kennenzulernen',
    motivationMessage: 'Super Start! 🚀',
    questions: [
      { id: 'business_name', type: 'text', question: 'Wie heißt dein Unternehmen?', placeholder: 'z.B. Pizzeria Da Luigi', required: true },
      { id: 'owner_name', type: 'text', question: 'Und wie heißt du?', placeholder: 'Dein Name', required: true },
    ]
  },
  {
    key: 'contact',
    title: 'Wie können deine Kunden dich erreichen?',
    subtitle: 'Kontaktdaten für Google & Co.',
    motivationMessage: 'Perfekt! Weiter so 💪',
    questions: [
      { id: 'address', type: 'text', question: 'Wo befindet sich dein Geschäft?', placeholder: 'Straße, PLZ, Stadt', required: true },
      { id: 'phone', type: 'text', question: 'Telefonnummer', placeholder: '+49 ...', required: true },
      { id: 'email', type: 'text', question: 'E-Mail-Adresse', placeholder: 'info@...', required: true },
    ]
  },
  {
    key: 'opening_hours',
    title: 'Wann bist du für deine Kunden da?',
    subtitle: 'Öffnungszeiten sind super wichtig für Google',
    motivationMessage: 'Schon 20% geschafft! 🎉',
    questions: [
      { id: 'opening_hours_mon_fri', type: 'text', question: 'Montag - Freitag', placeholder: 'z.B. 9:00 - 18:00', required: false },
      { id: 'opening_hours_sat', type: 'text', question: 'Samstag', placeholder: 'z.B. 10:00 - 14:00 oder geschlossen', required: false },
      { id: 'opening_hours_sun', type: 'text', question: 'Sonntag', placeholder: 'z.B. geschlossen', required: false },
    ]
  },
  {
    key: 'google_profile',
    title: 'Dein Google Business Profil',
    subtitle: 'Das Herzstück deiner lokalen Sichtbarkeit',
    motivationMessage: 'Du machst das großartig! ⭐',
    questions: [
      { id: 'google_profile_link', type: 'text', question: 'Link zu deinem Google Business Profil', placeholder: 'https://g.page/...', helpText: 'Findest du in der Google Suche unter "Mein Unternehmen"' },
      { id: 'current_rating', type: 'slider', question: 'Aktuelle Bewertung (Sterne)', min: 1, max: 5, step: 0.1 },
      { id: 'review_count', type: 'text', question: 'Anzahl der Bewertungen', placeholder: 'z.B. 45' },
    ]
  },
  {
    key: 'website',
    title: 'Deine Website',
    subtitle: 'Dein digitales Schaufenster',
    motivationMessage: 'Halbzeit! 50% geschafft 🏆',
    questions: [
      { id: 'website_url', type: 'text', question: 'Website-Adresse', placeholder: 'https://www.deine-website.de' },
      { id: 'has_online_booking', type: 'select', question: 'Hast du Online-Buchung / Reservierung?', options: [
        { value: 'yes', label: 'Ja' },
        { value: 'no', label: 'Nein' },
        { value: 'planned', label: 'Geplant' },
      ]},
      { id: 'has_menu_online', type: 'select', question: 'Sind deine Angebote/Preise online?', options: [
        { value: 'yes', label: 'Ja, vollständig' },
        { value: 'partial', label: 'Teilweise' },
        { value: 'no', label: 'Nein' },
      ]},
    ]
  },
  {
    key: 'social_media',
    title: 'Social Media Präsenz',
    subtitle: 'Wo bist du aktiv?',
    motivationMessage: 'Stark! 💯',
    questions: [
      { id: 'instagram', type: 'text', question: 'Instagram', placeholder: '@dein_account' },
      { id: 'facebook', type: 'text', question: 'Facebook', placeholder: 'Link oder Seitenname' },
      { id: 'tiktok', type: 'text', question: 'TikTok (falls vorhanden)', placeholder: '@dein_account' },
    ]
  },
];

export const categorySpecificSteps: Record<BusinessCategory, QuestionnaireStep[]> = {
  gastronomy: [
    {
      key: 'gastro_details',
      title: 'Details zu deinem Restaurant',
      subtitle: 'Hilft uns, deine Spezialitäten zu verstehen',
      motivationMessage: 'Fast geschafft! 🍕',
      questions: [
        { id: 'cuisine_type', type: 'multiselect', question: 'Küchenstil', options: [
          { value: 'italian', label: 'Italienisch' },
          { value: 'german', label: 'Deutsch' },
          { value: 'asian', label: 'Asiatisch' },
          { value: 'mediterranean', label: 'Mediterran' },
          { value: 'american', label: 'Amerikanisch' },
          { value: 'other', label: 'Andere' },
        ]},
        { id: 'avg_ticket', type: 'select', question: 'Durchschnittlicher Bon pro Gast', options: [
          { value: 'under_15', label: 'Unter 15€' },
          { value: '15_25', label: '15-25€' },
          { value: '25_40', label: '25-40€' },
          { value: 'over_40', label: 'Über 40€' },
        ]},
        { id: 'seating_capacity', type: 'text', question: 'Anzahl Sitzplätze', placeholder: 'z.B. 60' },
        { id: 'has_delivery', type: 'select', question: 'Lieferservice / Take-away?', options: [
          { value: 'both', label: 'Beides' },
          { value: 'delivery', label: 'Nur Lieferung' },
          { value: 'takeaway', label: 'Nur Abholung' },
          { value: 'none', label: 'Weder noch' },
        ]},
      ]
    },
  ],
  beauty_wellness: [
    {
      key: 'beauty_details',
      title: 'Dein Beauty-Angebot',
      subtitle: 'Was machst du am liebsten?',
      motivationMessage: 'Glänzend! ✨',
      questions: [
        { id: 'services_offered', type: 'multiselect', question: 'Welche Behandlungen bietest du an?', options: [
          { value: 'hair', label: 'Haare' },
          { value: 'nails', label: 'Nägel' },
          { value: 'facial', label: 'Gesichtsbehandlung' },
          { value: 'massage', label: 'Massage' },
          { value: 'makeup', label: 'Make-up' },
          { value: 'waxing', label: 'Waxing' },
        ]},
        { id: 'booking_system', type: 'select', question: 'Terminbuchungssystem?', options: [
          { value: 'online', label: 'Online-Buchung' },
          { value: 'phone', label: 'Nur telefonisch' },
          { value: 'walkin', label: 'Walk-in willkommen' },
        ]},
        { id: 'price_segment', type: 'select', question: 'Preissegment', options: [
          { value: 'budget', label: 'Günstig' },
          { value: 'mid', label: 'Mittelklasse' },
          { value: 'premium', label: 'Premium' },
        ]},
      ]
    },
  ],
  crafts: [
    {
      key: 'crafts_details',
      title: 'Dein Handwerksbetrieb',
      subtitle: 'Erzähl uns von deiner Arbeit',
      motivationMessage: 'Handwerk hat goldenen Boden! 🔨',
      questions: [
        { id: 'specializations', type: 'multiselect', question: 'Fachgebiete', options: [
          { value: 'plumbing', label: 'Sanitär' },
          { value: 'electrical', label: 'Elektrik' },
          { value: 'painting', label: 'Maler' },
          { value: 'carpentry', label: 'Tischler' },
          { value: 'roofing', label: 'Dachdecker' },
          { value: 'other', label: 'Andere' },
        ]},
        { id: 'service_radius', type: 'slider', question: 'Einsatzradius (km)', min: 5, max: 100, step: 5 },
        { id: 'emergency_service', type: 'select', question: 'Notdienst angeboten?', options: [
          { value: 'yes', label: 'Ja, 24/7' },
          { value: 'limited', label: 'Eingeschränkt' },
          { value: 'no', label: 'Nein' },
        ]},
      ]
    },
  ],
  health: [
    {
      key: 'health_details',
      title: 'Deine Praxis',
      subtitle: 'Für ein besseres Verständnis deiner Arbeit',
      motivationMessage: 'Gesundheit ist das Wichtigste! 💚',
      questions: [
        { id: 'practice_type', type: 'select', question: 'Art der Praxis', options: [
          { value: 'doctor', label: 'Arztpraxis' },
          { value: 'physio', label: 'Physiotherapie' },
          { value: 'dental', label: 'Zahnarzt' },
          { value: 'alternative', label: 'Naturheilkunde' },
          { value: 'other', label: 'Andere' },
        ]},
        { id: 'accepts_new_patients', type: 'select', question: 'Neue Patienten willkommen?', options: [
          { value: 'yes', label: 'Ja' },
          { value: 'waitlist', label: 'Warteliste' },
          { value: 'no', label: 'Aktuell nicht' },
        ]},
        { id: 'online_booking', type: 'select', question: 'Online-Terminbuchung?', options: [
          { value: 'yes', label: 'Ja' },
          { value: 'doctolib', label: 'Doctolib' },
          { value: 'no', label: 'Nein' },
        ]},
      ]
    },
  ],
  retail: [
    {
      key: 'retail_details',
      title: 'Dein Geschäft',
      subtitle: 'Was verkaufst du?',
      motivationMessage: 'Shopping macht Spaß! 🛍️',
      questions: [
        { id: 'product_category', type: 'multiselect', question: 'Produktkategorien', options: [
          { value: 'fashion', label: 'Mode' },
          { value: 'electronics', label: 'Elektronik' },
          { value: 'food', label: 'Lebensmittel' },
          { value: 'home', label: 'Haus & Garten' },
          { value: 'other', label: 'Andere' },
        ]},
        { id: 'has_online_shop', type: 'select', question: 'Online-Shop vorhanden?', options: [
          { value: 'yes', label: 'Ja' },
          { value: 'planned', label: 'Geplant' },
          { value: 'no', label: 'Nein' },
        ]},
        { id: 'target_audience', type: 'select', question: 'Zielgruppe', options: [
          { value: 'local', label: 'Lokale Kunden' },
          { value: 'tourists', label: 'Touristen' },
          { value: 'both', label: 'Beides' },
        ]},
      ]
    },
  ],
  fitness: [
    {
      key: 'fitness_details',
      title: 'Dein Fitness-Angebot',
      subtitle: 'Was treibt dich an?',
      motivationMessage: 'Stay fit! 💪',
      questions: [
        { id: 'facility_type', type: 'select', question: 'Art des Angebots', options: [
          { value: 'gym', label: 'Fitnessstudio' },
          { value: 'personal', label: 'Personal Training' },
          { value: 'studio', label: 'Boutique Studio' },
          { value: 'outdoor', label: 'Outdoor Training' },
        ]},
        { id: 'offerings', type: 'multiselect', question: 'Angebote', options: [
          { value: 'equipment', label: 'Gerätetraining' },
          { value: 'classes', label: 'Kurse' },
          { value: 'personal', label: 'Personal Training' },
          { value: 'wellness', label: 'Wellness/Sauna' },
        ]},
        { id: 'membership_model', type: 'select', question: 'Mitgliedschaftsmodell', options: [
          { value: 'monthly', label: 'Monatlich' },
          { value: 'yearly', label: 'Jahresabo' },
          { value: 'payperuse', label: 'Pay-per-use' },
          { value: 'mixed', label: 'Gemischt' },
        ]},
      ]
    },
  ],
  services: [
    {
      key: 'services_details',
      title: 'Deine Dienstleistung',
      subtitle: 'Wie hilfst du deinen Kunden?',
      motivationMessage: 'Service ist King! 👑',
      questions: [
        { id: 'service_type', type: 'select', question: 'Art der Dienstleistung', options: [
          { value: 'consulting', label: 'Beratung' },
          { value: 'legal', label: 'Rechtsberatung' },
          { value: 'tax', label: 'Steuerberatung' },
          { value: 'coaching', label: 'Coaching' },
          { value: 'other', label: 'Andere' },
        ]},
        { id: 'client_type', type: 'select', question: 'Hauptzielgruppe', options: [
          { value: 'b2b', label: 'Unternehmen (B2B)' },
          { value: 'b2c', label: 'Privatpersonen (B2C)' },
          { value: 'both', label: 'Beides' },
        ]},
        { id: 'delivery_mode', type: 'multiselect', question: 'Wie arbeitest du?', options: [
          { value: 'office', label: 'Im Büro' },
          { value: 'client_site', label: 'Beim Kunden' },
          { value: 'remote', label: 'Remote/Online' },
        ]},
      ]
    },
  ],
};

export const finalSteps: QuestionnaireStep[] = [
  {
    key: 'current_situation',
    title: 'Deine aktuelle Situation',
    subtitle: 'Wo stehst du gerade?',
    motivationMessage: 'Fast am Ziel! 🎯',
    questions: [
      { id: 'weekly_customers', type: 'slider', question: 'Wie viele Kunden pro Woche (ca.)?', min: 0, max: 500, step: 10 },
      { id: 'main_acquisition', type: 'multiselect', question: 'Woher kommen die meisten Kunden?', options: [
        { value: 'google', label: 'Google-Suche' },
        { value: 'referral', label: 'Empfehlungen' },
        { value: 'social', label: 'Social Media' },
        { value: 'walkin', label: 'Laufkundschaft' },
        { value: 'ads', label: 'Werbung' },
      ]},
    ]
  },
  {
    key: 'challenges',
    title: 'Deine größten Herausforderungen',
    subtitle: 'Wo drückt der Schuh?',
    motivationMessage: 'Ehrlichkeit hilft uns! 🤝',
    questions: [
      { id: 'main_challenges', type: 'multiselect', question: 'Was sind deine größten Probleme?', options: [
        { value: 'few_reviews', label: 'Zu wenig Bewertungen' },
        { value: 'bad_reviews', label: 'Negative Bewertungen' },
        { value: 'low_visibility', label: 'Schlechte Sichtbarkeit' },
        { value: 'competition', label: 'Starke Konkurrenz' },
        { value: 'no_time', label: 'Keine Zeit für Marketing' },
        { value: 'no_knowledge', label: 'Fehlendes Know-how' },
      ]},
      { id: 'competitor_name', type: 'text', question: 'Wer ist dein stärkster Konkurrent?', placeholder: 'Name oder Website' },
    ]
  },
  {
    key: 'goals',
    title: 'Deine Ziele',
    subtitle: 'Wo willst du hin?',
    motivationMessage: 'Letzte Fragen! 🏁',
    questions: [
      { id: 'main_goal', type: 'select', question: 'Was ist dein Hauptziel?', options: [
        { value: 'more_customers', label: 'Mehr Neukunden' },
        { value: 'better_reviews', label: 'Bessere Bewertungen' },
        { value: 'visibility', label: 'Mehr Sichtbarkeit' },
        { value: 'reputation', label: 'Besserer Ruf' },
      ]},
      { id: 'six_month_vision', type: 'textarea', question: 'Wo siehst du dich in 6 Monaten?', placeholder: 'Beschreibe deine Vision...' },
    ]
  },
  {
    key: 'qr_assets',
    title: 'Grafiken für deinen QR-Code',
    subtitle: 'Logo und Bilder für deine Bewertungskarte',
    motivationMessage: 'Der letzte Schritt! 🎨',
    questions: [
      { id: 'logo', type: 'file', question: 'Dein Logo hochladen', helpText: 'PNG oder JPG, min. 500x500px empfohlen' },
      { id: 'additional_image_1', type: 'file', question: 'Zusätzliches Bild (optional)', helpText: 'z.B. Foto deines Geschäfts' },
      { id: 'additional_image_2', type: 'file', question: 'Weiteres Bild (optional)', helpText: 'z.B. Produktfoto oder Team' },
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
