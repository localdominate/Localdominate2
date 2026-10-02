/**
 * Texte der deutschen Seite /de (Paket DEV-F).
 *
 * Quelle des Wortlauts: Projektdokument claude/LocalDominate_Copy-Deck_DE.md (Stand 02.10.2026).
 * Darüber stehen die Entscheidungen des Inhabers vom 02.10.2026:
 * - Die Seite spricht durchgehend in der Ich-Form (eine Person macht die Arbeit).
 * - Antwortzeit des kostenlosen Checks: innerhalb von zwei Werktagen.
 * - 50 % und 50 % mit einer Korrekturrunde gelten nicht für den Quick-Fix für 79 €.
 * - Kontakt nur per E-Mail. Stationen des Werdegangs mit Zeitraum, nie als Kunden.
 * - Der Einwilligungssatz nennt keinen Formular-Dienst, solange kein Key gesetzt ist.
 *
 * Regeln: keine Kundennamen, Kennzahlen, Bewertungen oder Ranking-Versprechen. Preise und
 * Lieferzeiten stehen nur in PRICE und DELIVERY und stimmen mit src/data/v4Offers.ts überein.
 */
import type { CheckFormTexts } from "@/data/v4Check";
import type { Commitment } from "@/data/v4HowWeWork";

export type SegmentId = "hotel" | "vermieter" | "handwerk";
export type OfferId = "website" | "sprint" | "profil";

export const CONTACT_EMAIL = "info@localdominate.org";

/** Zusage des Inhabers vom 02.10.2026, sinngleich zu CHECK_REPLY_TIME in src/lib/check.ts. */
export const CHECK_REPLY_TIME_DE = "innerhalb von zwei Werktagen";

/** Preise wie in v4Offers.ts, in deutscher Schreibweise. */
export const PRICE = {
  website: "ab 1.490 €",
  sprint: "ab 390 €",
  profil: "390 €",
  quickFix: "79 €",
} as const;

/** Nur die Lieferzeiten, die v4Offers.ts nennt. Das Google-Profil hat dort keine. */
const DELIVERY = { website: "5 Tage", sprint: "72 Stunden" } as const;

/** Ausnahme vom 02.10.2026, einmal bei den Zusagen und einmal in der FAQ. */
const QUICK_FIX_EXCEPTION = `Ausnahme ist der Quick-Fix für ${PRICE.quickFix}: Er wird bei Beauftragung vollständig bezahlt und enthält keine Korrekturrunde.`;

export type DeOffer = {
  id: OfferId;
  name: string;
  price: string;
  /** Zweite Preisangabe, zum Beispiel der Quick-Fix. */
  priceNote?: string;
  delivery?: string;
  summary: string;
  includes: readonly string[];
  bestFor: string;
};

/** Der Rechenweg in der Hero-Karte: nur die Faktoren, ohne fremde Beispielzahlen. */
export type DeCalculation = { title: string; factors: readonly string[]; text: string };

export type DeSegment = {
  id: SegmentId;
  /** Beschriftung des Auswahlfelds, aus Sicht des Besuchers. */
  choice: string;
  /** Kleine Zeile im Auswahlfeld: was dieses Segment bekommt. */
  choiceNote: string;
  /** Kurzname für die Ansage beim Wechsel. */
  shortName: string;
  /** Überschrift der Seite: Aussage und Zusage. Zusammen bilden sie die eine h1. */
  h1: { statement: string; promise: string };
  sub: string;
  /** Angebot, das in der Hero-Karte steht und im Abschnitt „Angebote“ markiert ist. */
  offer: OfferId;
  card: { text: string; calculation?: DeCalculation; hint: string };
};

const SUB_BOOKING =
  "Umfang und Preis stehen schriftlich fest, bevor ich starte. Die Seite gehört Ihnen. Laufende Betreuung ist monatlich kündbar.";
const SPRINT_HINT = `Haben Sie schon eine Buchungsseite? Dann prüft der 72-Stunden-Sprint ${PRICE.sprint} genau diese Seite.`;
const OWN_NUMBERS = "Dafür brauche ich Ihre eigene Abrechnung, keine Durchschnittswerte.";

export const SEGMENTS: readonly DeSegment[] = [
  {
    id: "hotel",
    choice: "Ich führe ein Hotel oder eine Pension",
    choiceNote: "Eigene Buchungsseite",
    shortName: "Hotel oder Pension",
    h1: { statement: "Ihre eigene Buchungsseite für Hotel und Pension.", promise: "Festpreis, in 5 Tagen." },
    sub: SUB_BOOKING,
    offer: "website",
    card: {
      text: "Eine Direktbuchungsseite, die in einer konzentrierten Woche entsteht. Umfang und Inhalte lege ich vorher mit Ihnen im Gespräch fest.",
      calculation: {
        title: "Was Portale Sie kosten, rechne ich mit Ihren Zahlen",
        factors: ["Zimmer", "Auslastung", "Buchungswert", "Portalanteil", "Provision"],
        text: OWN_NUMBERS,
      },
      hint: SPRINT_HINT,
    },
  },
  {
    id: "vermieter",
    choice: "Ich vermiete mehrere Ferienobjekte",
    choiceNote: "Eigene Buchungsseite",
    shortName: "Ferienvermieter",
    h1: { statement: "Ihre eigene Buchungsseite für Ihre Ferienobjekte.", promise: "Festpreis, in 5 Tagen." },
    sub: SUB_BOOKING,
    offer: "website",
    card: {
      text: "Eine Direktbuchungsseite für Ihre Objekte, in einer konzentrierten Woche gebaut. Umfang und Inhalte lege ich vorher mit Ihnen im Gespräch fest.",
      calculation: {
        title: "Was Plattformen Sie kosten, rechne ich mit Ihren Zahlen",
        factors: ["Objekte", "Nächte", "Preis pro Nacht", "Plattformanteil", "Provision"],
        text: OWN_NUMBERS,
      },
      hint: SPRINT_HINT,
    },
  },
  {
    id: "handwerk",
    choice: "Ich führe einen Handwerksbetrieb",
    choiceNote: "Gepflegtes Google-Profil",
    shortName: "Handwerksbetrieb",
    h1: {
      statement: "Ein vollständiges Google-Profil für Ihren Handwerksbetrieb.",
      promise: "Festpreis, schriftlich vor dem Start.",
    },
    sub: "Wenn Interessenten Sie bei Google nachschlagen, soll dort alles vollständig und einheitlich stehen. Das Profil gehört Ihnen. Laufende Betreuung ist monatlich kündbar.",
    offer: "profil",
    card: {
      text: "Ich prüfe Ihr Google-Unternehmensprofil und korrigiere die Felder, die für die lokale Suche zählen. Den Umfang kläre ich vorher mit Ihnen im Gespräch.",
      hint: `Für eine kleine Korrektur gibt es den Quick-Fix für ${PRICE.quickFix}.`,
    },
  },
] as const;

/** Vorrendern und Browser starten immer mit Variante A. Gewechselt wird nur nach einem Klick. */
export const DEFAULT_SEGMENT: SegmentId = "hotel";

export const HERO = {
  eyebrow: "Für Hotels, Ferienvermieter und lokale Betriebe in DACH",
  choiceLabel: "Was trifft auf Sie zu?",
  cardLabel: "Ihr Einstieg",
  checkLabel: "Kostenlosen Check anfordern",
  callLabel: "15-Minuten-Gespräch buchen",
  actionsNote: "Der Check ist kostenlos und unverbindlich.",
  /** Ansage für Screenreader nach einem Wechsel. */
  status: (shortName: string) => `Ausgewählt: ${shortName}. Überschrift und Angebot wurden angepasst.`,
} as const;

/** „So arbeiten wir“ aus dem Copy-Deck, in der Ich-Form. Sinngleich zu HOW_WE_WORK (v4HowWeWork.ts). */
export const TERMS = {
  label: "So arbeite ich",
  title: "Sie wissen vorher, was es kostet und was Sie bekommen.",
  note: QUICK_FIX_EXCEPTION,
} as const;

export const COMMITMENTS_DE: readonly Commitment[] = [
  {
    title: "Schriftlich vorab",
    body: "Sie erhalten Umfang und Preis schriftlich, bevor ich starte.",
  },
  {
    title: "Zahlung in zwei Schritten",
    body: "50 % bei Beauftragung, 50 % bei Abnahme des vereinbarten Umfangs. Eine Korrekturrunde ist inklusive.",
  },
  {
    title: "Alles gehört Ihnen",
    body: "Website und Google-Profil gehören Ihnen. Laufende Betreuung ist monatlich kündbar.",
  },
  {
    title: "Keine Ranking-Versprechen",
    body: "Ich verspreche keine Rankings. Ich zeige Ihnen genau, was ich geändert habe.",
  },
] as const;

/** Sinngleich zu OFFERS in v4Offers.ts. „AI Automation Starter“ steht bewusst nicht auf dieser Seite. */
export const OFFERS_DE: Record<OfferId, DeOffer> = {
  website: {
    id: "website",
    name: "Website in 5 Tagen",
    price: PRICE.website,
    delivery: DELIVERY.website,
    summary: "Eine Direktbuchungsseite für Ferienwohnungen und Hotels, in einer konzentrierten Woche gebaut.",
    includes: [
      "Direktbuchungsseite, zuerst für das Handy gebaut",
      "Umfang und Inhalte lege ich mit Ihnen vor dem Start in einem Gespräch fest",
      "Livegang und kurze Übergabe",
    ],
    bestFor: "Gastgeber und Hotels, deren Gäste direkt buchen sollen, statt Plattformgebühren zu zahlen.",
  },
  sprint: {
    id: "sprint",
    name: "72-Stunden-Sprint für Buchungen und Conversion",
    price: PRICE.sprint,
    delivery: DELIVERY.sprint,
    summary:
      "Für den Funnel eines Hotels vor der Eröffnung, eine Buchungsseite oder einen Shopify-Shop, der Besuche bekommt, aber zu wenige Buchungen oder Bestellungen.",
    includes: [
      "Prüfung einer Seite: Handyansicht, Geschwindigkeit und Tracking",
      "Fünf Verbesserungen, zuerst auf einer Kopie umgesetzt, danach live, sobald Sie zustimmen",
      "Ein kurzer schriftlicher Bericht darüber, was ich geändert habe und warum",
    ],
    bestFor: "Hotels, Ferienvermieter und Online-Shops mit Besuchern, aber schwacher Umsetzung in Buchungen oder Bestellungen.",
  },
  profil: {
    id: "profil",
    name: "Google-Profil",
    price: PRICE.profil,
    priceNote: `Quick-Fix für ${PRICE.quickFix}`,
    summary:
      "Ihr Google-Unternehmensprofil wird geprüft und korrigiert, damit es für die lokale Suche vollständig und einheitlich ist.",
    includes: [
      "Prüfung Ihres aktuellen Google-Unternehmensprofils",
      "Korrektur der Felder, die für die lokale Suche zählen",
      "Den Umfang des Quick-Fix und der Optimierung bestätige ich im Gespräch",
    ],
    bestFor: "Lokale Betriebe, besonders in DACH, die ein sauberes Profil möchten, ohne ein langes Projekt.",
  },
};

/** Reihenfolge der drei Karten. Das Angebot des gewählten Segments rückt nach vorn. */
export const OFFER_ORDER: readonly OfferId[] = ["website", "sprint", "profil"];

export const OFFERS_SECTION = {
  label: "Angebote",
  title: "Drei Angebote mit klarem Umfang",
  intro: "Die Preise sind Startpreise. Den genauen Preis für Ihren Betrieb nenne ich schriftlich, bevor Sie beauftragen.",
  deliveryLabel: "Lieferzeit",
  includesLabel: "Das ist enthalten",
  bestForLabel: "Geeignet für",
  /** Markiert die Karte des gewählten Segments, wie die Karte im Hero. */
  matchBadge: HERO.cardLabel,
} as const;

export type DeStation = { period: string; place: string; role: string };

export const ABOUT = {
  label: "Wer dahinter steht",
  title: "Eine Person am Projekt: ich.",
  portraitAlt: "Markus Wimböck",
  name: "Markus Wimböck",
  paragraphs: [
    "Ich bin Markus Wimböck. Ich habe über sieben Jahre in der Hotellerie und im Digital Marketing gearbeitet, unter anderem im Kempinski St. Moritz und im VAYA Resort Galtür. Das ist mein Werdegang, keine Kundenliste.",
    "Heute baue ich Direktbuchungsseiten und Google-Profile für Betriebe. Ich arbeite remote, Termine finden per Video statt.",
  ],
  statement: "Sie sprechen von Anfang bis Ende mit mir.",
  /** Stationen des Werdegangs (Entscheidung vom 02.10.2026). Keine Kunden, keine Ergebniszahlen. */
  stationsLabel: "Stationen meines Werdegangs",
  stations: [
    {
      period: "07/2023 bis 10/2025",
      place: "Grand Hotel des Bains Kempinski, St. Moritz",
      role: "Assistant Manager eCommerce & Digital Strategy",
    },
    {
      period: "11/2019 bis 03/2020",
      place: "VAYA Resort, Galtür",
      role: "Stellvertretender Resort Manager",
    },
  ] as readonly DeStation[],
  careerLink: "Ganzer Werdegang (Englisch)",
  contactLabel: "Kontakt",
} as const;

/**
 * Fallstudien-Partner (Copy-Deck Abschnitt 6): bleibt unsichtbar, bis der Inhaber den Mehrwert für
 * die ersten Betriebe festlegt. Dann hier Überschrift und Text eintragen.
 */
export const CASE_PARTNER: { label: string; title: string; body: string } | null = null;

export const FAQ = {
  label: "Häufige Fragen",
  title: "Fünf Antworten vorab",
  items: [
    {
      question: "Was kostet das?",
      answer: `Die Startpreise stehen oben: Website in 5 Tagen ${PRICE.website}, 72-Stunden-Sprint ${PRICE.sprint}, Google-Profil ${PRICE.profil}, Quick-Fix für das Profil ${PRICE.quickFix}. Den genauen Preis für Ihren Betrieb nenne ich schriftlich, bevor Sie beauftragen. Der Check ist kostenlos.`,
    },
    {
      question: "Wie lange dauert es?",
      answer: `Die Website dauert ${DELIVERY.website}, der Sprint ${DELIVERY.sprint}. Beim Google-Profil nenne ich Ihnen die Dauer im schriftlichen Angebot, bevor Sie beauftragen.`,
    },
    {
      question: "Wem gehören Website und Profil?",
      answer: "Ihnen. Das gilt für die Website und für das Google-Profil.",
    },
    {
      question: "Kann ich kündigen?",
      answer: `Laufende Betreuung ist monatlich kündbar. Die Projekte oben haben einen festen Umfang: 50 % zahlen Sie bei Beauftragung, 50 % bei Abnahme. Eine Korrekturrunde ist inklusive. ${QUICK_FIX_EXCEPTION}`,
    },
    {
      question: "Was enthält der kostenlose Check?",
      answer: `Ich prüfe Ihr Google-Profil oder Ihre Buchungsseite und sende Ihnen bis zu drei konkrete Punkte mit Erklärung. Ohne Verpflichtung. Die Antwort kommt ${CHECK_REPLY_TIME_DE} per E-Mail.`,
    },
  ],
} as const;

export const CHECK_SECTION = {
  label: "Kostenloser Check",
  title: "Kostenlosen Check anfordern",
  intro: `Ich prüfe Ihr Google-Profil oder Ihre Buchungsseite und sende Ihnen ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte mit Erklärung. Ohne Verpflichtung.`,
  callTitle: "Lieber direkt sprechen?",
  backLabel: "Diese Seite auf Englisch",
} as const;

/** Vorbelegte E-Mail für das 15-Minuten-Gespräch, solange kein Buchungslink gesetzt ist. */
export const CALL_MAIL = {
  subject: "Anfrage 15-Minuten-Gespräch",
  body: "Guten Tag Herr Wimböck, ich möchte ein 15-Minuten-Gespräch vereinbaren.",
} as const;

/**
 * Texte des Formulars (Copy-Deck Abschnitt 8), auf die Schlüssel von CheckFormTexts verteilt.
 * Die Beschriftungen tragen kein Sternchen, weil die Komponente sie auch in die vorbereitete
 * E-Mail schreibt. Das einzige freiwillige Feld ist als „optional“ beschriftet.
 */
export const CHECK_FORM_DE: CheckFormTexts = {
  formLabel: "Kostenlosen Check anfordern",
  name: "Ihr Name",
  email: "E-Mail-Adresse",
  link: "Link zu Ihrem Profil oder Ihrer Website",
  linkHint: "Kopieren Sie den Link aus Google Maps oder aus der Adresszeile Ihres Browsers.",
  businessType: "Art Ihres Betriebs",
  businessTypePlaceholder: "Bitte wählen",
  businessTypes: ["Hotel oder Pension", "Ferienvermieter", "Handwerksbetrieb", "Anderes"],
  goal: "Was soll sich verbessern? (optional)",
  goalHint: "Ein Satz genügt. Zum Beispiel: mehr Direktbuchungen, ein vollständiges Profil.",
  consentBefore:
    "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden. Mehr dazu in der ",
  consentBeforeWithService:
    "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet und über den Formular-Dienst Web3Forms an LocalDominate übermittelt werden. Ich kann meine Einwilligung jederzeit widerrufen. Mehr dazu in der ",
  consentLink: "Datenschutzerklärung",
  consentAfter: ".",
  submit: "Kostenlosen Check anfordern",
  sending: "Wird gesendet …",
  mailNote: "Ihr E-Mail-Programm öffnet sich mit einer vorbereiteten Nachricht. Ich nutze Ihre Angaben nur für Ihre Anfrage.",
  errors: {
    summary: "Bitte prüfen Sie die markierten Felder.",
    name: "Bitte geben Sie Ihren Namen an.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    link: "Bitte geben Sie den Link zu Ihrem Google-Profil oder Ihrer Website an.",
    businessType: "Bitte wählen Sie die Art Ihres Betriebs.",
    consent: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu. Sonst kann ich Ihre Anfrage nicht bearbeiten.",
    failed: `Das Senden hat nicht geklappt. Bitte versuchen Sie es in einem Moment noch einmal. Oder schreiben Sie mir direkt an ${CONTACT_EMAIL}.`,
  },
  success: {
    title: "Danke, Ihre Anfrage ist angekommen.",
    body: `Ich sehe mir Ihr Profil oder Ihre Seite an und melde mich ${CHECK_REPLY_TIME_DE} per E-Mail mit bis zu drei konkreten Punkten und einer kurzen Erklärung. Sie gehen dabei keine Verpflichtung ein.`,
  },
  mailOpened: {
    title: "Ihr E-Mail-Programm öffnet sich mit einer vorbereiteten Nachricht.",
    body: `Bitte senden Sie sie dort ab. Danach melde ich mich ${CHECK_REPLY_TIME_DE}. Wenn sich nichts öffnet, schreiben Sie mir an ${CONTACT_EMAIL}.`,
  },
  subject: "Anfrage Kostenloser Check",
};

export const FORM_ID_PREFIX = "de-check";

/** Anker der Abschnitte, wie im Copy-Deck Abschnitt 0. */
export const ANCHORS = {
  terms: "so-arbeiten-wir",
  offers: "angebote",
  about: "wer",
  partner: "partner",
  faq: "fragen",
  check: "check",
} as const;

export const SEO_DE = {
  /** SEOHead hängt „ | Local Dominator“ an (zusammen 55 Zeichen). */
  title: "Direktbuchung & Google-Profil in DACH",
  description:
    "Eigene Buchungsseite für Hotels und Ferienvermieter, Google-Profil für Handwerker. Umfang und Preis schriftlich vor dem Start. Kostenlosen Check anfordern.",
  breadcrumb: "Deutsch",
} as const;
