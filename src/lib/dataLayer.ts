// Google Tag Manager DataLayer utility functions
// Initialize dataLayer if it doesn't exist
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string, value?: number) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "button_click",
    button_name: buttonName,
    button_location: location,
    button_value: value,
    timestamp: new Date().toISOString()
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "scroll_depth",
    scroll_percentage: depth,
    timestamp: new Date().toISOString()
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    form_name: formName,
    form_success: success,
    timestamp: new Date().toISOString()
  });
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle,
    timestamp: new Date().toISOString()
  });
};

// Track purchases / conversions
export const trackPurchase = (productName: string, price: number, currency: string = "EUR") => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    product_name: productName,
    product_price: price,
    currency: currency,
    timestamp: new Date().toISOString()
  });
};

// Track popup interactions
export const trackPopupInteraction = (popupName: string, action: "view" | "close" | "cta_click") => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "popup_interaction",
    popup_name: popupName,
    popup_action: action,
    timestamp: new Date().toISOString()
  });
};

// Track Exit Intent A/B Test
export const trackExitIntentABTest = (
  variant: "discount" | "bonus",
  action: "view" | "click" | "close" | "expired"
) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "exit_intent_ab_test",
    ab_variant: variant,
    ab_action: action,
    ab_variant_label: variant === "discount" ? "33% Rabatt" : "Gratis Bonus",
    timestamp: new Date().toISOString()
  });
};
