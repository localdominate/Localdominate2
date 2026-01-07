import { trackConversion } from "./analyticsStorage";

export const STRIPE_URLS = {
  standard: "https://buy.stripe.com/eVq14n73U74jdLocjd0ZW02",  // 299€
  discount: "https://buy.stripe.com/aFaeVd2NE3S7dLoab50ZW03"   // 199€
};

export const STRIPE_PRICE_IDS = {
  standard: "price_1SmVYZGtUtkmXAhpkAUlMbMY",
  discount: "price_1SmVYZGtUtkmXAhpGjnkvTRG"
};

// Get the success URL for Stripe checkout
export const getStripeSuccessUrl = () => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/danke?session_id={CHECKOUT_SESSION_ID}`;
};

export const openStripeCheckout = (type: "standard" | "discount" = "standard", ctaLocation?: string, ctaText?: string) => {
  // Track conversion with A/B variant info
  const amount = type === "standard" ? 299 : 199;
  trackConversion("stripe_checkout", ctaLocation || "unknown", ctaText || "CTA", amount);
  
  window.open(STRIPE_URLS[type], "_blank");
};
