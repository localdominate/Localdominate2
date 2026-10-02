import { CHECK_REPLY_TIME } from "@/lib/check";

/**
 * Copy of the free-check form. The form component (src/components/v4/check/CheckForm.tsx) takes
 * these texts as a prop, so the German page can pass its own set without copying the component.
 */
export type CheckFormTexts = {
  formLabel: string;
  name: string;
  email: string;
  link: string;
  linkHint: string;
  businessType: string;
  businessTypePlaceholder: string;
  businessTypes: readonly string[];
  goal: string;
  goalHint: string;
  consentBefore: string;
  /** Used instead of consentBefore when the form service is active (VITE_WEB3FORMS_KEY is set). */
  consentBeforeWithService?: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  sending: string;
  /** Shown under the button when no form key is configured and the request goes by email. */
  mailNote: string;
  errors: {
    summary: string;
    name: string;
    email: string;
    link: string;
    businessType: string;
    consent: string;
    failed: string;
  };
  success: { title: string; body: string };
  mailOpened: { title: string; body: string };
  /** Subject line of the notification and of the fallback email. */
  subject: string;
};

export const CHECK_FORM_EN: CheckFormTexts = {
  formLabel: "Request your free check",
  name: "Your name",
  email: "Email",
  link: "Link to your Google profile or website",
  linkHint: "For example the address of your website or of your Google Maps listing.",
  businessType: "Type of business",
  businessTypePlaceholder: "Please choose",
  businessTypes: ["Hotel or guesthouse", "Holiday rentals", "Trade or craft business", "Practice, law firm or tax adviser", "Other business"],
  goal: "What should improve?",
  goalHint: "Optional. One or two sentences are enough. For example: more direct bookings, a complete Google profile, a faster website.",
  consentBefore: "I agree that my details are used to answer this request. See the ",
  consentBeforeWithService:
    "I agree that my details are used to answer this request and are sent to LocalDominate through the form service Web3Forms. I can withdraw my consent at any time. See the ",
  consentLink: "privacy policy",
  consentAfter: ".",
  submit: "Send request",
  sending: "Sending…",
  mailNote: "This opens your email program with your request filled in. Just press send.",
  errors: {
    summary: "Please check the marked fields.",
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    link: "Please enter the link to your profile or website.",
    businessType: "Please choose the type of business.",
    consent: "Please confirm the privacy notice.",
    failed: "The request could not be sent. Please email us at info@localdominate.org.",
  },
  success: {
    title: "Thank you. Your request has arrived.",
    body: `We look at your profile or website and reply by email within ${CHECK_REPLY_TIME} with up to three concrete points.`,
  },
  mailOpened: {
    title: "Your email program should have opened.",
    body: "Send the prepared email and the request is on its way. If nothing opened, write to info@localdominate.org.",
  },
  subject: "Free check request",
};
