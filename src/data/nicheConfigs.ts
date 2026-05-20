import { LucideIcon, Scissors, Dumbbell, UtensilsCrossed, Stethoscope, Sparkles, Wrench, Scale, HeartPulse, Croissant } from "lucide-react";

export interface NicheConfig {
  // Core variables
  slug: string;
  city: string;
  niche: string;
  nicheLabel: string; // "Hair Salons", "Dental Practices"
  keyword: string;
  service: string; // "salon", "practice", "gym", "restaurant"
  icon: LucideIcon;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroEyebrow: string;
  heroH1: string;
  heroH1Highlight: string;
  heroSubheadline: string;

  // Problem
  problemHeadline: string;
  problemHighlight: string;
  problemBullets: string[];
  problemClosing: string;

  // Solution
  solutionSteps: { title: string; desc: string }[];
  solutionCta: string;

  // What You Get
  whatYouGetClosingPrefix: string;
  whatYouGetClosingSuffix: string;
  visibilityLabel: string;

  // Proof
  proofStats: { value: string; label: string }[];
  proofTestimonial: string;
  proofAuthor: string;

  // Demo
  demoCta: string;

  // Pricing
  pricingPackageName: string;

  // Final CTA
  finalHeadline: string;
  finalCta: string;

  // FAQ overrides (optional)
  faqs?: { q: string; a: string }[];

  // AI Visibility / GEO layer (Phase 4 — optional)
  aiSearch?: {
    queries: string[];           // Natural-language queries users ask AI assistants
    localEntities: string[];     // Districts, landmarks, neighborhoods for semantic grounding
    aiOverviewAnswer: string;    // Curated 40-60 word answer LLMs can quote verbatim
    benchmarks: { label: string; value: string }[]; // Local market benchmarks
  };
}

const defaultFaqs = [
  {
    q: "Ich habe keine Zeit für Marketing",
    a: "Musst du auch nicht. Wir übernehmen alles für dich."
  },
  {
    q: "Ich hatte schon schlechte Erfahrungen",
    a: "Deshalb arbeiten wir transparent und nachvollziehbar. Du siehst jederzeit, was passiert."
  },
  {
    q: "Ich bin mir unsicher",
    a: "Du hast 30 Tage Zeit, es in Ruhe zu testen – komplett risikofrei."
  }
];

export const NICHE_CONFIGS: Record<string, NicheConfig> = {
  "hairdressers-munich": {
    slug: "hairdressers-munich",
    city: "München",
    niche: "Friseur",
    nicheLabel: "Friseursalons",
    keyword: "Friseur München",
    service: "Salon",
    icon: Scissors,
    metaTitle: "Friseur München mehr Kunden | Mehr Buchungen für deinen Salon",
    metaDescription: "Mehr Kunden für deinen Friseursalon in München. Einfaches System, komplett umgesetzt für dich. Jetzt kostenlose Analyse sichern.",
    heroEyebrow: "Für Friseursalons in München",
    heroH1: "Mehr Kunden für deinen Friseursalon in München –",
    heroH1Highlight: "ohne Mehraufwand",
    heroSubheadline: "Wir sorgen dafür, dass dein Salon online besser gefunden wird und regelmäßig neue Kunden gewinnt.",
    problemHeadline: "Volle Termine sind heute keine Selbstverständlichkeit mehr –",
    problemHighlight: "und das merkt man",
    problemBullets: [
      "Kosten steigen, aber Preise lassen sich nicht beliebig erhöhen",
      "Kunden vergleichen mehr und buchen bewusster",
      "Andere Salons werden online besser gefunden",
      "Leere Termine fallen schneller auf"
    ],
    problemClosing: "Wer online nicht sichtbar ist, wird nicht gebucht.",
    solutionSteps: [
      { title: "Wir verbessern deine Sichtbarkeit bei Google", desc: "Dein Salon erscheint, wenn Kunden in München nach einem Friseur suchen." },
      { title: "Wir optimieren deinen Salon-Auftritt", desc: "Bessere Bewertungen, bessere Fotos, ein stärkerer erster Eindruck." },
      { title: "Wir bringen dir buchungsbereite Kunden", desc: "Menschen finden dich, vertrauen dir und vereinbaren einen Termin." }
    ],
    solutionCta: "Kostenlose Analyse ansehen",
    whatYouGetClosingPrefix: "Du konzentrierst dich auf deinen Salon –",
    whatYouGetClosingSuffix: "wir kümmern uns um den Rest.",
    visibilityLabel: "Mehr Sichtbarkeit in München",
    proofStats: [
      { value: "+40%", label: "Mehr Buchungen" },
      { value: "Top 3", label: "Google Maps" },
      { value: "100%", label: "Wochenenden ausgebucht" }
    ],
    proofTestimonial: "Wir sind endlich wieder konstant ausgelastet.",
    proofAuthor: "Saloninhaber, München",
    demoCta: "Kostenlose Salon-Analyse",
    pricingPackageName: "Salon Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Salon wieder voll auslasten",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Bester Friseur in München in meiner Nähe",
        "Wo bekomme ich kurzfristig einen Termin beim Friseur in München?",
        "Friseur in Schwabing mit guten Bewertungen"
      ],
      localEntities: ["Schwabing", "Maxvorstadt", "Sendling", "Marienplatz", "Glockenbachviertel"],
      aiOverviewAnswer: "Top-Friseursalons in München werden über Google Maps, AI Overviews und ChatGPT vor allem nach Bewertungsanzahl, NAP-Konsistenz und Nähe zum Suchstandort gerankt. Salons mit über 100 echten Bewertungen, vollständigem Google-Profil und Schema-Markup erscheinen am häufigsten in lokalen AI-Antworten.",
      benchmarks: [
        { label: "Top-3 Salons Bewertungen", value: "180+" },
        { label: "Durchschnittliche Antwortzeit", value: "<2 Std." },
        { label: "AI Overview Coverage", value: "42 %" }
      ]
    }
  },

  "dentists-munich": {
    slug: "dentists-munich",
    city: "Munich",
    niche: "Dentist",
    nicheLabel: "Dental Practices",
    keyword: "dentist Munich",
    service: "practice",
    icon: Stethoscope,
    metaTitle: "Dentist Marketing Munich | Get More Patients for Your Practice",
    metaDescription: "Get more patients for your dental practice in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Dental Practices in Munich",
    heroH1: "Get More Patients for Your Practice in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help dental practices appear on Google, attract new patients, and fill your appointment book – fully done for you.",
    problemHeadline: "Empty appointment slots cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on referrals or existing patients",
      "New patients go to competitors on Google",
      "Your practice is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll book elsewhere.",
    solutionSteps: [
      { title: "We put your practice on top of Google", desc: "Your practice appears when people search for dentists in Munich." },
      { title: "We make you look more trustworthy than competitors", desc: "More reviews, professional profile, stronger first impression." },
      { title: "We send you ready-to-book patients", desc: "People find you, trust you, and book an appointment." }
    ],
    solutionCta: "See your practice potential",
    whatYouGetClosingPrefix: "You treat patients.",
    whatYouGetClosingSuffix: "We bring them in.",
    visibilityLabel: "More visibility in Munich",
    proofStats: [
      { value: "+35%", label: "More patients" },
      { value: "Top 3", label: "Google Maps" },
      { value: "2x", label: "New patient calls" }
    ],
    proofTestimonial: "We now have a steady stream of new patients every week.",
    proofAuthor: "Dental Practice Owner, Munich",
    demoCta: "Get Free Practice Analysis",
    pricingPackageName: "Practice Growth Package",
    finalHeadline: "Let's fill your appointment book",
    finalCta: "Get My Free Practice Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best dentist in Munich for new patients",
        "Emergency dentist Munich open today",
        "Dental practice Munich with English speaking staff"
      ],
      localEntities: ["Schwabing", "Bogenhausen", "Altstadt", "Lehel", "Maxvorstadt"],
      aiOverviewAnswer: "Dental practices in Munich that appear in AI-generated answers from ChatGPT, Gemini and Google AI Overviews share three traits: 50+ verified Google reviews, structured Dentist + LocalBusiness schema, and consistent NAP citations across major German health directories like Jameda and Doctolib.",
      benchmarks: [
        { label: "Top-3 reviews threshold", value: "120+" },
        { label: "Schema coverage", value: "76 %" },
        { label: "AI citation rate", value: "38 %" }
      ]
    }
  },

  "gyms-munich": {
    slug: "gyms-munich",
    city: "Munich",
    niche: "Gym",
    nicheLabel: "Gyms & Fitness Studios",
    keyword: "gym Munich",
    service: "gym",
    icon: Dumbbell,
    metaTitle: "Gym Marketing Munich | Get More Members for Your Studio",
    metaDescription: "Get more members for your gym in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Gyms & Studios in Munich",
    heroH1: "Get More Members for Your Gym in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help gyms appear on Google, attract new members, and keep your classes full – fully done for you.",
    problemHeadline: "Empty gym floors cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on word of mouth or old members",
      "New members go to competitors on Google",
      "Your gym is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll join somewhere else.",
    solutionSteps: [
      { title: "We put your gym on top of Google", desc: "Your gym appears when people search for fitness studios in Munich." },
      { title: "We make you stand out from competitors", desc: "More reviews, better photos, stronger online presence." },
      { title: "We send you ready-to-sign-up members", desc: "People find you, trust you, and sign up." }
    ],
    solutionCta: "See your gym potential",
    whatYouGetClosingPrefix: "You train members.",
    whatYouGetClosingSuffix: "We bring them in.",
    visibilityLabel: "More visibility in Munich",
    proofStats: [
      { value: "+50%", label: "More sign-ups" },
      { value: "Top 3", label: "Google Maps" },
      { value: "Full", label: "Peak hour classes" }
    ],
    proofTestimonial: "Our membership sign-ups have never been this consistent.",
    proofAuthor: "Gym Owner, Munich",
    demoCta: "Get Free Gym Analysis",
    pricingPackageName: "Gym Growth Package",
    finalHeadline: "Let's fill your gym",
    finalCta: "Get My Free Gym Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best gym in Munich with personal training",
        "24/7 fitness studio near Marienplatz",
        "Affordable gym Munich with group classes"
      ],
      localEntities: ["Marienplatz", "Schwabing", "Pasing", "Giesing", "Olympiapark"],
      aiOverviewAnswer: "Gyms and fitness studios in Munich rank in AI-generated answers when they combine SportsActivityLocation schema with 100+ Google reviews and weekly Google Posts. Studios with class schedules marked up as Event schema appear in 3x more AI Overview citations than those without.",
      benchmarks: [
        { label: "Top-3 review average", value: "150+" },
        { label: "Class schedule schema", value: "12 %" },
        { label: "AI visibility index", value: "48 / 100" }
      ]
    }
  },

  "restaurants-munich": {
    slug: "restaurants-munich",
    city: "Munich",
    niche: "Restaurant",
    nicheLabel: "Restaurants",
    keyword: "restaurant Munich",
    service: "restaurant",
    icon: UtensilsCrossed,
    metaTitle: "Restaurant Marketing Munich | Get More Guests for Your Restaurant",
    metaDescription: "Get more guests for your restaurant in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Restaurants in Munich",
    heroH1: "Get More Guests for Your Restaurant in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help restaurants appear on Google, attract new guests, and fill empty tables – fully done for you.",
    problemHeadline: "Empty tables cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on regulars or random walk-ins",
      "New guests go to competitors on Google",
      "Your restaurant is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll eat somewhere else.",
    solutionSteps: [
      { title: "We put your restaurant on top of Google", desc: "Your restaurant appears when people search for dining options in Munich." },
      { title: "We make your restaurant irresistible online", desc: "More reviews, better photos, mouth-watering presentation." },
      { title: "We send you ready-to-reserve guests", desc: "People find you, get hungry, and make a reservation." }
    ],
    solutionCta: "See your restaurant potential",
    whatYouGetClosingPrefix: "You cook.",
    whatYouGetClosingSuffix: "We bring guests.",
    visibilityLabel: "More visibility in Munich",
    proofStats: [
      { value: "+45%", label: "More reservations" },
      { value: "Top 3", label: "Google Maps" },
      { value: "Full", label: "Weekend tables" }
    ],
    proofTestimonial: "We went from empty weekdays to fully booked – consistently.",
    proofAuthor: "Restaurant Owner, Munich",
    demoCta: "Get Free Restaurant Analysis",
    pricingPackageName: "Restaurant Growth Package",
    finalHeadline: "Let's fill your tables",
    finalCta: "Get My Free Restaurant Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best Italian restaurant in Munich for dinner",
        "Romantic restaurant Munich Altstadt with terrace",
        "Where to eat lunch near Marienplatz Munich"
      ],
      localEntities: ["Altstadt", "Glockenbachviertel", "Haidhausen", "Marienplatz", "Viktualienmarkt"],
      aiOverviewAnswer: "Restaurants in Munich gain visibility in ChatGPT, Gemini and Google AI Overviews through Restaurant + Menu schema, 200+ Google reviews with 4.5★+, and recent Google Posts. Establishments with menu items marked up as structured data appear in roughly 60 % of AI-driven dining recommendations.",
      benchmarks: [
        { label: "Top-3 review count", value: "320+" },
        { label: "Menu schema usage", value: "18 %" },
        { label: "AI Overview coverage", value: "55 %" }
      ]
    }
  },

  "barbers-munich": {
    slug: "barbers-munich",
    city: "Munich",
    niche: "Barber",
    nicheLabel: "Barbershops",
    keyword: "barber Munich",
    service: "shop",
    icon: Scissors,
    metaTitle: "Barber Marketing Munich | Get More Clients for Your Barbershop",
    metaDescription: "Get more clients for your barbershop in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Barbershops in Munich",
    heroH1: "Get More Clients for Your Barbershop in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help barbershops appear on Google, attract new clients, and keep your chairs busy – fully done for you.",
    problemHeadline: "Empty chairs cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on walk-ins or regulars",
      "New clients go to competitors on Google",
      "Your barbershop is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they won't book.",
    solutionSteps: [
      { title: "We put your barbershop on top of Google", desc: "Your shop appears when people search for barbers in Munich." },
      { title: "We make you look better than competitors", desc: "More reviews, better photos, stronger street cred." },
      { title: "We send you ready-to-book clients", desc: "People find you, trust you, and book a cut." }
    ],
    solutionCta: "See your barbershop potential",
    whatYouGetClosingPrefix: "You cut hair.",
    whatYouGetClosingSuffix: "We bring clients.",
    visibilityLabel: "More visibility in Munich",
    proofStats: [
      { value: "+40%", label: "More bookings" },
      { value: "Top 3", label: "Google Maps" },
      { value: "100%", label: "Weekends booked" }
    ],
    proofTestimonial: "We finally have a full schedule without even trying.",
    proofAuthor: "Barbershop Owner, Munich",
    demoCta: "Get Free Barbershop Analysis",
    pricingPackageName: "Barbershop Growth Package",
    finalHeadline: "Let's fill your chairs",
    finalCta: "Get My Free Barbershop Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best barbershop in Munich for skin fade",
        "Walk-in barber near Marienplatz Munich",
        "Barbershop Munich with beard trim"
      ],
      localEntities: ["Maxvorstadt", "Schwabing", "Glockenbachviertel", "Marienplatz", "Sendling"],
      aiOverviewAnswer: "Barbershops in Munich that dominate AI search results combine HairSalon schema, 80+ five-star Google reviews, and Instagram-grade portfolio photos uploaded weekly. AI assistants prioritize shops with consistent NAP data and Google Posts updated at least twice per month.",
      benchmarks: [
        { label: "Top-3 review count", value: "140+" },
        { label: "Weekly photo uploads", value: "24 %" },
        { label: "AI citation share", value: "31 %" }
      ]
    }
  },

  "plumbers-berlin": {
    slug: "plumbers-berlin",
    city: "Berlin",
    niche: "Klempner",
    nicheLabel: "Sanitär- & Klempnerbetriebe",
    keyword: "Klempner Berlin",
    service: "Betrieb",
    icon: Wrench,
    metaTitle: "Klempner Berlin – Mehr Aufträge für deinen Sanitärbetrieb",
    metaDescription: "Mehr Notdienst- und Sanitäranfragen für deinen Klempnerbetrieb in Berlin. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Sanitärbetriebe in Berlin",
    heroH1: "Mehr Aufträge für deinen Sanitärbetrieb in Berlin –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir sorgen dafür, dass dein Betrieb bei Google Maps, ChatGPT und AI Overviews gefunden wird – wenn ein Notfall passiert.",
    problemHeadline: "Notdienst-Anfragen gehen an die Konkurrenz –",
    problemHighlight: "weil du in der AI-Suche fehlst",
    problemBullets: [
      "Kunden googeln 'Klempner Notdienst Berlin' und finden dich nicht",
      "ChatGPT und Gemini empfehlen drei andere Betriebe",
      "Deine Google-Bewertungen sind veraltet oder unvollständig",
      "Bei AI Overviews tauchst du gar nicht erst auf"
    ],
    problemClosing: "Wer in der AI-Suche fehlt, verliert Notdienst-Umsatz täglich.",
    solutionSteps: [
      { title: "Wir machen dich AI-sichtbar", desc: "Optimiert für Google Maps, ChatGPT, Gemini und Perplexity – nicht nur klassisches SEO." },
      { title: "Wir bauen Vertrauen auf", desc: "Echte 5-Sterne-Bewertungen, Notdienst-Verfügbarkeit, Schema-Markup." },
      { title: "Wir bringen dir Notdienst-Anfragen", desc: "Kunden im Notfall finden dich zuerst – nicht die Konkurrenz." }
    ],
    solutionCta: "Kostenlose AI-Sichtbarkeits-Analyse",
    whatYouGetClosingPrefix: "Du reparierst.",
    whatYouGetClosingSuffix: "Wir bringen die Aufträge.",
    visibilityLabel: "Mehr Sichtbarkeit in Berlin",
    proofStats: [
      { value: "+60%", label: "Mehr Notdienst-Anrufe" },
      { value: "Top 3", label: "Google Maps" },
      { value: "AI Overview", label: "regelmäßig gelistet" }
    ],
    proofTestimonial: "Unsere Notdienst-Anrufe haben sich fast verdoppelt – ohne Werbung.",
    proofAuthor: "Sanitär-Meister, Berlin-Friedrichshain",
    demoCta: "Kostenlose Betriebs-Analyse",
    pricingPackageName: "Sanitärbetrieb Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Notdienst-Anrufe verdoppeln",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Klempner Notdienst Berlin sofort verfügbar",
        "Sanitärbetrieb Berlin Friedrichshain mit guten Bewertungen",
        "Heizung kaputt – wer kommt heute noch in Berlin?"
      ],
      localEntities: ["Mitte", "Friedrichshain", "Kreuzberg", "Charlottenburg", "Prenzlauer Berg", "Neukölln"],
      aiOverviewAnswer: "Klempner- und Sanitärbetriebe in Berlin erscheinen in AI Overviews und ChatGPT-Empfehlungen vor allem dann, wenn sie Plumber + EmergencyService Schema verwenden, 24/7-Öffnungszeiten korrekt hinterlegt haben und mindestens 60 verifizierte Google-Bewertungen aufweisen.",
      benchmarks: [
        { label: "Top-3 Notdienst-Bewertungen", value: "95+" },
        { label: "24/7-Schema-Nutzung", value: "9 %" },
        { label: "AI-Antwort-Quote", value: "27 %" }
      ]
    }
  },

  "lawyers-hamburg": {
    slug: "lawyers-hamburg",
    city: "Hamburg",
    niche: "Anwalt",
    nicheLabel: "Anwaltskanzleien",
    keyword: "Anwalt Hamburg",
    service: "Kanzlei",
    icon: Scale,
    metaTitle: "Anwalt Hamburg – Mehr Mandanten über AI-Suche & Google",
    metaDescription: "Mehr Mandantenanfragen für deine Kanzlei in Hamburg. AI-optimiertes Local-SEO-System für Anwälte. Kostenlose Analyse.",
    heroEyebrow: "Für Anwaltskanzleien in Hamburg",
    heroH1: "Mehr Mandantenanfragen für deine Kanzlei in Hamburg –",
    heroH1Highlight: "über AI-Suche & Google",
    heroSubheadline: "Wir sorgen dafür, dass deine Kanzlei bei Google, ChatGPT und Gemini empfohlen wird – wenn Mandanten Rechtsrat suchen.",
    problemHeadline: "Mandanten finden dich nicht –",
    problemHighlight: "sondern die Großkanzleien",
    problemBullets: [
      "Mandanten suchen 'Fachanwalt Familienrecht Hamburg' und sehen dich nicht",
      "AI-Assistenten empfehlen drei andere Kanzleien",
      "Deine Bewertungen reichen nicht für E-E-A-T-Signale",
      "Schema-Markup für Attorney fehlt komplett"
    ],
    problemClosing: "Mandanten vertrauen heute AI-Empfehlungen mehr als Anzeigen.",
    solutionSteps: [
      { title: "Wir machen deine Kanzlei AI-zitierfähig", desc: "Strukturierte Daten für Attorney, LegalService und FAQPage." },
      { title: "Wir bauen E-E-A-T-Signale auf", desc: "Echte Bewertungen, Author-Schema, Fachartikel mit klarer Expertise." },
      { title: "Wir bringen dir qualifizierte Mandanten", desc: "Genau die Anfragen, die zu deiner Spezialisierung passen." }
    ],
    solutionCta: "Kostenlose Kanzlei-Analyse",
    whatYouGetClosingPrefix: "Du berätst Mandanten.",
    whatYouGetClosingSuffix: "Wir bringen sie zu dir.",
    visibilityLabel: "Mehr Sichtbarkeit in Hamburg",
    proofStats: [
      { value: "+38%", label: "Mehr Mandantenanfragen" },
      { value: "Top 3", label: "Google Maps" },
      { value: "AI Overview", label: "regelmäßig zitiert" }
    ],
    proofTestimonial: "Wir bekommen endlich Anfragen, die zu unserer Spezialisierung passen.",
    proofAuthor: "Fachanwältin, Hamburg-Eimsbüttel",
    demoCta: "Kostenlose Kanzlei-Analyse",
    pricingPackageName: "Kanzlei Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Mandantenakquise modernisieren",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Fachanwalt Familienrecht Hamburg mit guten Bewertungen",
        "Anwalt Arbeitsrecht Hamburg Altona Erstberatung",
        "Welcher Anwalt für Mietrecht in Hamburg ist empfehlenswert?"
      ],
      localEntities: ["Altstadt", "Eimsbüttel", "Altona", "Winterhude", "St. Pauli", "Harvestehude"],
      aiOverviewAnswer: "Anwaltskanzleien in Hamburg, die in AI Overviews und ChatGPT empfohlen werden, kombinieren Attorney + LegalService Schema mit Author-Person-Markup, 40+ verifizierten Google-Bewertungen und mindestens einer aktuellen Fachpublikation auf der eigenen Website pro Quartal.",
      benchmarks: [
        { label: "Top-3 Bewertungen", value: "70+" },
        { label: "Attorney-Schema-Nutzung", value: "11 %" },
        { label: "E-E-A-T-Score Top-3", value: "82 / 100" }
      ]
    }
  },

  "physiotherapy-vienna": {
    slug: "physiotherapy-vienna",
    city: "Wien",
    niche: "Physiotherapie",
    nicheLabel: "Physiotherapie-Praxen",
    keyword: "Physiotherapie Wien",
    service: "Praxis",
    icon: HeartPulse,
    metaTitle: "Physiotherapie Wien – Mehr Patienten über AI- & Google-Suche",
    metaDescription: "Mehr Patientenanfragen für deine Physiotherapie-Praxis in Wien. AI-optimiertes Local-SEO. Kostenlose Analyse.",
    heroEyebrow: "Für Physiotherapie-Praxen in Wien",
    heroH1: "Mehr Patienten für deine Praxis in Wien –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir sorgen dafür, dass deine Praxis bei Google Maps, ChatGPT und AI Overviews empfohlen wird.",
    problemHeadline: "Patienten finden andere Praxen –",
    problemHighlight: "weil du in AI-Antworten fehlst",
    problemBullets: [
      "Patienten googeln 'Physiotherapie Wien in der Nähe'",
      "AI-Assistenten empfehlen drei andere Praxen",
      "Deine Online-Termine werden nicht gebucht",
      "Wahlarzt-Status wird in der Suche nicht hervorgehoben"
    ],
    problemClosing: "Wer in der AI-Suche fehlt, verliert Patienten – jede Woche.",
    solutionSteps: [
      { title: "Wir machen deine Praxis AI-sichtbar", desc: "Optimiert für ChatGPT, Gemini, Perplexity und Google Maps." },
      { title: "Wir stärken deine Reputation", desc: "Echte 5-Sterne-Bewertungen, vollständiges Profil, MedicalBusiness Schema." },
      { title: "Wir füllen deinen Terminkalender", desc: "Patienten finden dich, vertrauen dir und buchen online." }
    ],
    solutionCta: "Kostenlose Praxis-Analyse",
    whatYouGetClosingPrefix: "Du behandelst Patienten.",
    whatYouGetClosingSuffix: "Wir bringen sie in deine Praxis.",
    visibilityLabel: "Mehr Sichtbarkeit in Wien",
    proofStats: [
      { value: "+42%", label: "Mehr Terminbuchungen" },
      { value: "Top 3", label: "Google Maps" },
      { value: "AI Overview", label: "regelmäßig gelistet" }
    ],
    proofTestimonial: "Unser Terminkalender ist erstmals seit Jahren konstant voll.",
    proofAuthor: "Physiotherapeut, Wien-Neubau",
    demoCta: "Kostenlose Praxis-Analyse",
    pricingPackageName: "Praxis Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Terminkalender füllen",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Physiotherapie Wien Wahlarzt mit kurzfristigen Terminen",
        "Beste Physio in Wien Neubau bei Rückenschmerzen",
        "Physiotherapie in der Nähe von Stephansplatz Wien"
      ],
      localEntities: ["Innere Stadt", "Neubau", "Mariahilf", "Leopoldstadt", "Wieden", "Josefstadt"],
      aiOverviewAnswer: "Physiotherapie-Praxen in Wien, die in AI-Antworten empfohlen werden, nutzen MedicalBusiness + Physiotherapist Schema, haben 50+ Google-Bewertungen mit 4,7★+ und pflegen Öffnungszeiten sowie Wahlarzt-/Kassenstatus konsistent über alle Verzeichnisse.",
      benchmarks: [
        { label: "Top-3 Bewertungen", value: "85+" },
        { label: "MedicalBusiness Schema", value: "14 %" },
        { label: "AI Overview Coverage", value: "33 %" }
      ]
    }
  },

  "dentists-zurich": {
    slug: "dentists-zurich",
    city: "Zürich",
    niche: "Zahnarzt",
    nicheLabel: "Zahnarztpraxen",
    keyword: "Zahnarzt Zürich",
    service: "Praxis",
    icon: Stethoscope,
    metaTitle: "Zahnarzt Zürich – Mehr Patienten über AI- & Google-Suche",
    metaDescription: "Mehr Patientenanfragen für deine Zahnarztpraxis in Zürich. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Zahnarztpraxen in Zürich",
    heroH1: "Mehr Patienten für deine Zahnarztpraxis in Zürich –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir sorgen dafür, dass deine Praxis bei Google Maps, ChatGPT und Google AI Overviews empfohlen wird.",
    problemHeadline: "Neue Patienten finden andere Praxen –",
    problemHighlight: "weil du in AI-Empfehlungen fehlst",
    problemBullets: [
      "Patienten googeln 'Zahnarzt Zürich Notfall' und sehen dich nicht",
      "ChatGPT empfiehlt drei andere Praxen in deinem Kreis",
      "Deine Bewertungen reichen für klassisches Local SEO – aber nicht für AI Retrieval",
      "Dentist-Schema und Service-Markup fehlen"
    ],
    problemClosing: "Wer in AI-Antworten fehlt, verliert Patientenanfragen.",
    solutionSteps: [
      { title: "Wir machen deine Praxis AI-sichtbar", desc: "Strukturierte Daten für Dentist, MedicalBusiness und FAQPage." },
      { title: "Wir bauen Vertrauen auf", desc: "Echte 5-Sterne-Bewertungen, klare Spezialisierungen, vollständiges Profil." },
      { title: "Wir bringen dir Patienten", desc: "Genau die Anfragen, die zu deiner Spezialisierung passen." }
    ],
    solutionCta: "Kostenlose Praxis-Analyse",
    whatYouGetClosingPrefix: "Du behandelst Patienten.",
    whatYouGetClosingSuffix: "Wir bringen sie zu dir.",
    visibilityLabel: "Mehr Sichtbarkeit in Zürich",
    proofStats: [
      { value: "+44%", label: "Mehr Neupatienten" },
      { value: "Top 3", label: "Google Maps" },
      { value: "AI Overview", label: "regelmäßig gelistet" }
    ],
    proofTestimonial: "Wir haben spürbar mehr Anfragen über Google – und auch über ChatGPT.",
    proofAuthor: "Zahnärztin, Zürich Kreis 4",
    demoCta: "Kostenlose Praxis-Analyse",
    pricingPackageName: "Praxis Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Terminkalender füllen",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Zahnarzt Zürich Notfall heute geöffnet",
        "Beste Zahnarztpraxis in Zürich Kreis 4 mit Implantaten",
        "Zahnarzt in der Nähe von Hauptbahnhof Zürich"
      ],
      localEntities: ["Altstadt", "Kreis 4", "Kreis 5", "Oerlikon", "Wiedikon", "Seefeld"],
      aiOverviewAnswer: "Zahnarztpraxen in Zürich, die in AI Overviews und ChatGPT empfohlen werden, kombinieren Dentist + MedicalBusiness Schema mit 60+ verifizierten Google-Bewertungen, klar deklarierten Spezialisierungen (Implantologie, Kieferorthopädie) und konsistenten NAP-Daten über local.ch, search.ch und Google.",
      benchmarks: [
        { label: "Top-3 Bewertungen", value: "110+" },
        { label: "Dentist-Schema-Nutzung", value: "16 %" },
        { label: "AI Citation Rate", value: "36 %" }
      ]
    }
  },

  "bakeries-cologne": {
    slug: "bakeries-cologne",
    city: "Köln",
    niche: "Bäckerei",
    nicheLabel: "Bäckereien & Konditoreien",
    keyword: "Bäckerei Köln",
    service: "Bäckerei",
    icon: Croissant,
    metaTitle: "Bäckerei Köln – Mehr Stammkunden über AI- & Google-Suche",
    metaDescription: "Mehr Stammkunden für deine Bäckerei in Köln. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Bäckereien in Köln",
    heroH1: "Mehr Stammkunden für deine Bäckerei in Köln –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir sorgen dafür, dass deine Bäckerei bei Google Maps, ChatGPT und AI Overviews empfohlen wird.",
    problemHeadline: "Kunden gehen zur Filiale nebenan –",
    problemHighlight: "weil du in AI-Empfehlungen fehlst",
    problemBullets: [
      "Kunden googeln 'beste Bäckerei in der Nähe' – und sehen die Kette",
      "AI-Assistenten empfehlen drei andere Bäckereien",
      "Deine Sortimentsinfo fehlt im Google-Profil",
      "Sonntagsöffnungszeiten werden falsch angezeigt"
    ],
    problemClosing: "Wer in AI-Antworten fehlt, verliert Laufkundschaft täglich.",
    solutionSteps: [
      { title: "Wir machen deine Bäckerei AI-sichtbar", desc: "Strukturierte Daten für Bakery, FoodEstablishment und Menu Schema." },
      { title: "Wir stärken deine lokale Reputation", desc: "Echte 5-Sterne-Bewertungen, schöne Produktfotos, korrekte Öffnungszeiten." },
      { title: "Wir bringen dir Stammkunden", desc: "Mehr Laufkundschaft – auch sonntags und an Feiertagen." }
    ],
    solutionCta: "Kostenlose Bäckerei-Analyse",
    whatYouGetClosingPrefix: "Du backst.",
    whatYouGetClosingSuffix: "Wir bringen die Kunden.",
    visibilityLabel: "Mehr Sichtbarkeit in Köln",
    proofStats: [
      { value: "+33%", label: "Mehr Laufkundschaft" },
      { value: "Top 3", label: "Google Maps" },
      { value: "AI Overview", label: "regelmäßig zitiert" }
    ],
    proofTestimonial: "Sonntag und Feiertag sind jetzt unsere stärksten Tage.",
    proofAuthor: "Bäckermeister, Köln-Ehrenfeld",
    demoCta: "Kostenlose Bäckerei-Analyse",
    pricingPackageName: "Bäckerei Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Filiale füllen – jeden Tag",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Beste Bäckerei Köln sonntags geöffnet",
        "Bio-Bäckerei in Köln Ehrenfeld mit Sauerteig",
        "Bäckerei in der Nähe vom Kölner Dom"
      ],
      localEntities: ["Altstadt", "Ehrenfeld", "Sülz", "Lindenthal", "Nippes", "Kalk", "Kölner Dom"],
      aiOverviewAnswer: "Bäckereien in Köln, die in AI Overviews und ChatGPT empfohlen werden, nutzen Bakery + FoodEstablishment Schema, pflegen Sonntags- und Feiertagsöffnungszeiten korrekt im Google-Profil und haben mindestens 40 verifizierte Bewertungen mit aktuellen Produktfotos.",
      benchmarks: [
        { label: "Top-3 Bewertungen", value: "75+" },
        { label: "Sonntagsöffnung gepflegt", value: "38 %" },
        { label: "AI Overview Coverage", value: "29 %" }
      ]
    }
  }
};
