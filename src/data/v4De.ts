/**
 * Texte der deutschen Kurzseite /de (Paket DEV-F).
 *
 * Quellen: claude/LocalDominate_Website-Psychologie-Research.md Abschnitt 4 (Entwürfe, Sie-Form),
 * src/data/v4Offers.ts (Preise, Umfang, Lieferzeiten: nur sinngleich übersetzt, nichts ergänzt) und
 * src/data/v4HowWeWork.ts (vier Zusagen, vom Inhaber am 2026-10-01 bestätigt).
 *
 * Regeln (Dev-Plan 2.3, 2.9): keine Kundennamen, Kennzahlen, Bewertungen oder Ranking-Versprechen.
 * Preise stehen nur hier und stimmen mit v4Offers.ts überein (390 €, 1.490 €, 79 €).
 */
import type { CheckFormTexts } from "@/data/v4Check";
import type { Commitment } from "@/data/v4HowWeWork";

export type SegmentId = "hotel" | "vermieter" | "handwerk";
export type OfferId = "sprint" | "website" | "profil";

export type DeOffer = {
  id: OfferId;
  name: string;
  summary: string;
  /** Preiszeile, fertig formatiert (deutsche Schreibweise). */
  price: string;
  /** Nur gesetzt, wo v4Offers.ts eine Lieferzeit nennt. */
  delivery?: string;
  includes: readonly string[];
  bestFor: string;
  /** Zusatzhinweis unter der Karte (zum Beispiel der 79-€-Quick-Fix). */
  note?: string;
};

export type DeSegment = {
  id: SegmentId;
  /** Beschriftung des Auswahlfelds, aus Sicht des Besuchers. */
  choice: string;
  /** Überschrift der Seite für dieses Segment. */
  h1: string;
  /** Angebot, das in der Hero-Karte steht. */
  offer: OfferId;
  /** Zweites Angebot, das in einer Zeile unter der Karte genannt wird. */
  alternative: { offer: OfferId; text: string };
  /** Was der kostenlose Check bei diesem Segment ansieht. */
  checkLooksAt: string;
};

export const SEGMENTS: readonly DeSegment[] = [
  {
    id: "hotel",
    choice: "Ich führe ein Hotel oder eine Pension",
    h1: "Die eigene Buchungsseite für Ihr Haus. Festpreis, in 5 Tagen live.",
    offer: "website",
    alternative: {
      offer: "sprint",
      text: "Läuft Ihre Buchungsseite schon, bringt aber zu wenige Buchungen? Dann passt der 72-Stunden-Sprint.",
    },
    checkLooksAt: "Der Check schaut auf Ihre Buchungsseite oder Ihr Google-Profil.",
  },
  {
    id: "vermieter",
    choice: "Ich vermiete mehrere Ferienobjekte",
    h1: "Ihre Buchungsseite, geprüft und verbessert. Festpreis, in 72 Stunden.",
    offer: "sprint",
    alternative: {
      offer: "website",
      text: "Noch keine eigene Seite für Direktbuchungen? Dann baut die Website in 5 Tagen sie Ihnen.",
    },
    checkLooksAt: "Der Check schaut auf Ihre Buchungsseite oder Ihr Google-Profil.",
  },
  {
    id: "handwerk",
    choice: "Ich führe einen Handwerksbetrieb",
    h1: "Ein gepflegtes Google-Profil, damit Ihre Empfehlung Sie auch online findet. Festpreis.",
    offer: "profil",
    alternative: {
      offer: "website",
      text: "Brauchen Sie zusätzlich eine eigene Seite? Dann ist die Website in 5 Tagen der nächste Schritt.",
    },
    checkLooksAt: "Der Check schaut auf Ihr Google-Profil.",
  },
] as const;

export const DEFAULT_SEGMENT: SegmentId = "hotel";

export const HERO = {
  eyebrow: "Für Hotels, Ferienvermieter und lokale Betriebe in DACH",
  sub: "Umfang und Preis schriftlich vor dem Start. Website und Profil gehören Ihnen. Die laufende Betreuung ist monatlich kündbar.",
  choiceLabel: "Was beschreibt Sie am besten?",
  cardLabel: "Ihr Einstieg",
  cardCheckLine: "Zuerst der kostenlose Check: bis zu drei konkrete Punkte, ohne Verpflichtung.",
  checkLabel: "Kostenlosen Check anfordern",
  callLabel: "15-Minuten-Gespräch buchen",
} as const;

/** Sinngleich zu OFFERS in v4Offers.ts. AI Automation steht bewusst nicht auf dieser Seite. */
export const OFFERS_DE: Record<OfferId, DeOffer> = {
  sprint: {
    id: "sprint",
    name: "72-Stunden-Sprint",
    summary:
      "Für den Buchungsfunnel eines Hotels vor der Eröffnung, eine Buchungsseite oder einen Shopify-Shop mit Besuchern, aber zu wenigen Buchungen oder Bestellungen.",
    price: "ab 390 €",
    delivery: "72 Stunden",
    includes: [
      "Prüfung einer Seite: mobile Ansicht, Geschwindigkeit und Tracking",
      "Fünf Verbesserungen umgesetzt, zuerst auf einer Kopie, nach Ihrer Freigabe live",
      "Ein kurzer schriftlicher Bericht, was geändert wurde und warum",
    ],
    bestFor: "Hotels, Ferienvermieter und Online-Shops mit Besuchern, aber zu wenigen Buchungen oder Bestellungen.",
  },
  website: {
    id: "website",
    name: "Website in 5 Tagen",
    summary: "Eine Website mit Direktbuchung für Ferienwohnungen und Hotels, in einer konzentrierten Woche gebaut.",
    price: "ab 1.490 €",
    delivery: "5 Tage",
    includes: [
      "Website mit Direktbuchung, zuerst für das Handy gebaut",
      "Umfang und Inhalte vor dem Start im Gespräch festgelegt",
      "Livegang und kurze Übergabe",
    ],
    bestFor: "Gastgeber und Hotels, deren Gäste direkt buchen sollen statt über Portale mit Gebühren.",
  },
  profil: {
    id: "profil",
    name: "Google-Profil",
    summary:
      "Ihr Google-Unternehmensprofil geprüft und korrigiert, damit es für die lokale Suche vollständig und stimmig ist.",
    price: "390 €",
    includes: [
      "Prüfung Ihres aktuellen Google-Unternehmensprofils",
      "Korrekturen an den Feldern, die für die lokale Suche zählen",
      "Der Umfang wird im Gespräch bestätigt",
    ],
    bestFor: "Lokale Betriebe, besonders in DACH, die ein sauberes Profil ohne langes Projekt möchten.",
    note: "Nur eine kurze Korrektur? Der Quick-Fix kostet 79 €. Den Umfang bestätigen wir im Gespräch.",
  },
};

/** Reihenfolge der drei Karten im Abschnitt „Angebote“. */
export const OFFER_ORDER: readonly OfferId[] = ["website", "sprint", "profil"];

export const OFFERS_SECTION = {
  label: "Angebote",
  title: "Drei Angebote. Jedes mit festem Umfang und festem Preis.",
  intro: "Alle Preise sind Startpreise. Was darin steckt, steht vorher schriftlich fest.",
  deliveryLabel: "Lieferzeit",
  includesLabel: "Enthalten",
  bestForLabel: "Passt für",
  matchBadge: "Passt zu Ihrer Auswahl",
} as const;

export const PROCESS = {
  label: "So arbeiten wir",
  title: "Erst prüfen, dann schriftlich festlegen, dann bauen.",
  steps: [
    {
      title: "Sie bekommen den kostenlosen Check",
      body: "Wir sehen Ihr Google-Profil oder Ihre Buchungsseite an und senden Ihnen bis zu drei konkrete Punkte mit Erklärung. Ohne Verpflichtung.",
    },
    {
      title: "Umfang und Preis stehen schriftlich fest",
      body: "Wenn ein Angebot passt, nennen wir es und den Festpreis. Gestartet wird erst, wenn Sie zugestimmt haben.",
    },
    {
      title: "Wir setzen um, Sie nehmen ab",
      body: "50 % bei Beauftragung, 50 % bei Abnahme des vereinbarten Umfangs. Eine Korrekturrunde ist inklusive.",
    },
  ],
  commitmentsLabel: "Vier Zusagen",
} as const;

/** Die vier Zusagen aus HOW_WE_WORK (v4HowWeWork.ts), sinngleich auf Deutsch. */
export const COMMITMENTS_DE: readonly Commitment[] = [
  {
    title: "Umfang und Preis zuerst schriftlich",
    body: "Sie erhalten den genauen Umfang und einen Festpreis schriftlich, bevor die Arbeit beginnt. Abgerechnet wird nur, was vereinbart war.",
  },
  {
    title: "Zahlung in zwei Schritten",
    body: "Die Hälfte bei Beauftragung, die Hälfte bei Abnahme des vereinbarten Umfangs. Eine Korrekturrunde ist inklusive.",
  },
  {
    title: "Alles gehört Ihnen",
    body: "Website und Google-Profil gehören Ihnen. Die laufende Betreuung ist monatlich kündbar.",
  },
  {
    title: "Keine Ranking-Versprechen",
    body: "Wir versprechen weder Platzierungen noch Umsatz. Sie erhalten eine schriftliche Liste, was wir geändert haben und warum.",
  },
] as const;

/**
 * Das Porträt kommt von Markus. Eine einzige Stelle zum Austauschen: den Pfad hier eintragen
 * (zum Beispiel "/images/v4/de/markus.webp", Seitenverhältnis 4:5). Solange er leer ist, zeigt die
 * Fläche die Initialen. Es wird kein KI-Porträt erzeugt.
 */
export const PORTRAIT_SRC: string = "";
export const PORTRAIT_ALT = "Porträt von Markus Wimböck";

export const ABOUT = {
  label: "Wer dahinter steht",
  title: "Markus Wimböck. Die Person, die auch die Arbeit macht.",
  paragraphs: [
    "Ich habe über sieben Jahre in der Hotellerie und im Digital Marketing gearbeitet, unter anderem im Kempinski St. Moritz und im VAYA Resort Galtür. Das sind meine Stationen, keine Kunden.",
    "Heute baue ich Direktbuchungsseiten und Google-Profile für Betriebe. Ich arbeite remote, Termine finden per Video statt.",
  ],
  facts: [
    { term: "Ansprechperson", detail: "Eine Person am Projekt, von der Anfrage bis zur Übergabe" },
    { term: "Termine", detail: "Per Video, 15 Minuten reichen für das erste Gespräch" },
    { term: "Kontakt", detail: "info@localdominate.org" },
  ],
  contactEmail: "info@localdominate.org",
} as const;

/**
 * Fallstudien-Partner: bleibt unsichtbar, bis der Inhaber den Mehrwert festlegt
 * (Research Abschnitt 4: „Die ersten Betriebe erhalten [Mehrwert] zum regulären Preis …“).
 */
export const CASE_PARTNER: { title: string; body: string } | null = null;

export const CHECK_SECTION = {
  label: "Kostenloser Check",
  title: "Kostenlosen Check anfordern.",
  body: "Wir prüfen Ihr Google-Profil oder Ihre Buchungsseite und senden Ihnen bis zu drei konkrete Punkte mit Erklärung. Ohne Verpflichtung.",
  points: [
    "Ein Mensch sieht sich Ihr Profil oder Ihre Seite an, ohne automatische Auswertung und ohne Standardbericht.",
    "Sie entscheiden danach, ob Sie die Punkte selbst beheben oder zum Festpreis von uns umsetzen lassen.",
  ],
  callTitle: "Lieber erst sprechen?",
  callBody: "Fünfzehn Minuten per Video. Sie schildern, wo es hakt, wir sagen Ihnen, ob wir helfen können.",
  backLabel: "English version of this site",
} as const;

export const CHECK_FORM_DE: CheckFormTexts = {
  formLabel: "Kostenlosen Check anfordern",
  name: "Ihr Name",
  email: "E-Mail",
  link: "Link zu Ihrem Google-Profil oder Ihrer Website",
  linkHint: "Zum Beispiel die Adresse Ihrer Website oder Ihres Eintrags in Google Maps.",
  businessType: "Art des Betriebs",
  businessTypePlaceholder: "Bitte auswählen",
  businessTypes: ["Hotel oder Pension", "Ferienvermieter", "Handwerksbetrieb", "Anderer lokaler Betrieb"],
  goal: "Was soll besser werden?",
  goalHint: "Freiwillig. Ein bis zwei Sätze genügen.",
  consentBefore: "Ich bin einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet werden. Siehe ",
  consentLink: "Datenschutzerklärung",
  consentAfter: ".",
  submit: "Anfrage senden",
  sending: "Wird gesendet …",
  mailNote: "Öffnet Ihr E-Mail-Programm mit der ausgefüllten Anfrage.",
  errors: {
    summary: "Bitte prüfen Sie die markierten Felder.",
    name: "Bitte geben Sie Ihren Namen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    link: "Bitte geben Sie den Link zu Ihrem Profil oder Ihrer Website ein.",
    businessType: "Bitte wählen Sie die Art des Betriebs.",
    consent: "Bitte bestätigen Sie den Datenschutzhinweis.",
    failed: "Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns an info@localdominate.org.",
  },
  success: {
    title: "Vielen Dank. Ihre Anfrage ist angekommen.",
    body: "Wir sehen uns Ihr Profil oder Ihre Website an und antworten per E-Mail mit bis zu drei konkreten Punkten.",
  },
  mailOpened: {
    title: "Ihr E-Mail-Programm sollte sich geöffnet haben.",
    body: "Senden Sie die vorbereitete E-Mail ab, dann ist die Anfrage unterwegs. Falls sich nichts geöffnet hat, schreiben Sie an info@localdominate.org.",
  },
  subject: "Anfrage kostenloser Check",
};

export const FORM_ID_PREFIX = "de-check";
export const CHECK_ANCHOR = "kostenlos-pruefen";

export const SEO_DE = {
  title: "Buchungsseite & Google-Profil zum Festpreis | LocalDominate",
  description:
    "Buchungsseite für Hotels und Ferienvermieter, Google-Profil für Handwerker. Festpreis, schriftlich vor dem Start. Jetzt den kostenlosen Check anfordern.",
  breadcrumb: "Deutsch",
} as const;
