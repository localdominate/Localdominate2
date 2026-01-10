// Google Tag Manager DataLayer utility functions
import { getSessionId, getVariant, getTestId } from "@/lib/sessionManager";

// Initialize dataLayer if it doesn't exist
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  
  // Push initial session and A/B data
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "session_init",
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string, value?: number) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "button_click",
    button_name: buttonName,
    button_location: location,
    button_value: value,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  
  window.dataLayer.push({
    event: "scroll_depth",
    scroll_percentage: depth,
    session_id: sessionId,
    ab_variant: variant,
    timestamp: new Date().toISOString()
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "form_submit",
    form_name: formName,
    form_success: success,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track purchases / conversions
export const trackPurchase = (productName: string, price: number, currency: string = "EUR") => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "purchase",
    product_name: productName,
    product_price: price,
    currency: currency,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track popup interactions
export const trackPopupInteraction = (popupName: string, action: "view" | "close" | "cta_click") => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  
  window.dataLayer.push({
    event: "popup_interaction",
    popup_name: popupName,
    popup_action: action,
    session_id: sessionId,
    ab_variant: variant,
    timestamp: new Date().toISOString()
  });
};

// Track Exit Intent A/B Test
export const trackExitIntentABTest = (
  variant: "discount" | "bonus",
  action: "view" | "click" | "close" | "expired"
) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const mainVariant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "exit_intent_ab_test",
    ab_variant: variant,
    ab_action: action,
    ab_variant_label: variant === "discount" ? "33% Rabatt" : "Gratis Bonus",
    session_id: sessionId,
    main_ab_variant: mainVariant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track section view
export const trackSectionView = (sectionName: string) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "section_view",
    section_name: sectionName,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track CTA hover
export const trackCtaHover = (ctaId: string, durationMs: number) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: "cta_hover",
    cta_id: ctaId,
    hover_duration_ms: durationMs,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};

// Track checkout events
export const trackCheckoutEvent = (step: "start" | "complete", amount: number) => {
  window.dataLayer = window.dataLayer || [];
  
  const sessionId = getSessionId();
  const variant = getVariant();
  const testId = getTestId();
  
  window.dataLayer.push({
    event: `checkout_${step}`,
    checkout_amount: amount,
    session_id: sessionId,
    ab_variant: variant,
    ab_test_id: testId,
    timestamp: new Date().toISOString()
  });
};
