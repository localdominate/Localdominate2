export const STRIPE_URLS = {
  standard: "https://buy.stripe.com/6oU5kDbka60fePsdnh0ZW00",
  discount: "https://buy.stripe.com/00w8wPgEuewLazc1Ez0ZW01"
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

export const openStripeCheckout = (type: "standard" | "discount" = "standard") => {
  window.open(STRIPE_URLS[type], "_blank");
};
