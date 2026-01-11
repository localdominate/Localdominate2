import { trackConversion } from "./analyticsStorage";

// Base product URLs
export const STRIPE_URLS = {
  standard: "https://buy.stripe.com/eVq14n73U74jdLocjd0ZW02",  // 299€
  discount: "https://buy.stripe.com/aFaeVd2NE3S7dLoab50ZW03"   // 199€
};

export const STRIPE_PRICE_IDS = {
  standard: "price_1SmVYZGtUtkmXAhpkAUlMbMY",
  discount: "price_1SmVYZGtUtkmXAhpGjnkvTRG"
};

// Digital Products
export const DIGITAL_PRODUCTS = {
  diy_toolkit: {
    name: "Local SEO DIY-Toolkit",
    price: 49,
    url: "https://buy.stripe.com/diy_toolkit_49",
    priceId: "price_diy_toolkit_49",
  },
};

// Add-On Products
export const ADD_ON_PRODUCTS = {
  express: {
    name: "Express-Setup",
    price: 99,
    priceId: "price_addon_express_99",
  },
  competitor: {
    name: "Konkurrenzanalyse",
    price: 79,
    priceId: "price_addon_competitor_79",
  },
  premium_texts: {
    name: "Premium Texte",
    price: 99,
    priceId: "price_addon_texts_99",
  },
  photo_pack: {
    name: "Foto-Optimierung Pro",
    price: 149,
    priceId: "price_addon_photos_149",
  },
};

export type AddOnId = keyof typeof ADD_ON_PRODUCTS;

// Calculate total price with add-ons
export const calculateTotalPrice = (baseType: "standard" | "discount", addOns: AddOnId[] = []): number => {
  const basePrice = baseType === "standard" ? 299 : 199;
  const addOnTotal = addOns.reduce((sum, id) => sum + (ADD_ON_PRODUCTS[id]?.price || 0), 0);
  return basePrice + addOnTotal;
};

// Get the success URL for Stripe checkout
export const getStripeSuccessUrl = () => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/danke?session_id={CHECKOUT_SESSION_ID}`;
};

// Open Stripe checkout - for now opens base product, add-ons tracked for manual processing
export const openStripeCheckout = (
  type: "standard" | "discount" = "standard", 
  ctaLocation?: string, 
  ctaText?: string,
  addOns: AddOnId[] = []
) => {
  const baseAmount = type === "standard" ? 299 : 199;
  const totalAmount = calculateTotalPrice(type, addOns);
  
  // Track conversion with add-on info
  trackConversion("stripe_checkout", ctaLocation || "unknown", ctaText || "CTA", totalAmount);
  
  // Store add-ons in sessionStorage for the thank you page
  if (addOns.length > 0) {
    sessionStorage.setItem('selected_addons', JSON.stringify(addOns));
    sessionStorage.setItem('addon_total', String(totalAmount - baseAmount));
  }
  
  // Open base checkout (add-ons will be handled manually or via future Stripe integration)
  window.open(STRIPE_URLS[type], "_blank");
};

// Get add-on details for display
export const getAddOnDetails = (addOnIds: AddOnId[]) => {
  return addOnIds.map(id => ({
    id,
    ...ADD_ON_PRODUCTS[id]
  }));
};
