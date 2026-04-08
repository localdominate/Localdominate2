import { LucideIcon, Scissors, Dumbbell, UtensilsCrossed, Stethoscope, Sparkles } from "lucide-react";

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
}

const defaultFaqs = [
  {
    q: "I've tried marketing before – it didn't work",
    a: "That's exactly why we keep it simple and measurable. You see what happens – and you decide if it's worth it."
  },
  {
    q: "I don't want long-term contracts",
    a: "You stay because it works – not because you're locked in. No contracts, no commitments."
  },
  {
    q: "I'm not sure if this is worth it",
    a: "That's why we give you 30 days to decide – completely risk-free. If you're not satisfied, you get your money back."
  },
  {
    q: "I don't understand marketing – can I still use this?",
    a: "Absolutely. You don't need to understand marketing at all. We handle everything for you – from setup to optimization. You just focus on your clients."
  },
  {
    q: "How much effort is needed from my side?",
    a: "Almost none. The initial setup takes about 15 minutes of your time. After that, we do all the work."
  }
];

export const NICHE_CONFIGS: Record<string, NicheConfig> = {
  "hairdressers-munich": {
    slug: "hairdressers-munich",
    city: "Munich",
    niche: "Hairdresser",
    nicheLabel: "Hair Salons",
    keyword: "hairdresser Munich",
    service: "salon",
    icon: Scissors,
    metaTitle: "Hairdresser Marketing Munich | Get More Clients for Your Salon",
    metaDescription: "Get more clients for your hair salon in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Hair Salons in Munich",
    heroH1: "Get More Clients for Your Salon in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help hair salons appear on Google, attract new clients, and fill empty chairs – fully done for you.",
    problemHeadline: "Empty chairs cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on walk-ins or old clients",
      "New clients go to competitors on Google",
      "Your salon is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they won't book.",
    solutionSteps: [
      { title: "We put your salon on top of Google", desc: "Your salon appears when people search for hairdressers in Munich." },
      { title: "We make you look better than competitors", desc: "More reviews, better photos, stronger first impression." },
      { title: "We send you ready-to-book clients", desc: "People find you, trust you, and book an appointment." }
    ],
    solutionCta: "See your salon potential",
    whatYouGetClosingPrefix: "You cut hair.",
    whatYouGetClosingSuffix: "We bring clients.",
    visibilityLabel: "More visibility in Munich",
    proofStats: [
      { value: "+40%", label: "More bookings" },
      { value: "Top 3", label: "Google Maps" },
      { value: "100%", label: "Weekends booked" }
    ],
    proofTestimonial: "We finally have consistent new clients every week.",
    proofAuthor: "Salon Owner, Munich",
    demoCta: "Get Free Salon Analysis",
    pricingPackageName: "Salon Growth Package",
    finalHeadline: "Let's fill your chairs",
    finalCta: "Get My Free Salon Demo",
    faqs: defaultFaqs
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
    faqs: defaultFaqs
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
    faqs: defaultFaqs
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
    faqs: defaultFaqs
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
    faqs: defaultFaqs
  }
};
