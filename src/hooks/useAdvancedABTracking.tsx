import { useEffect, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface EngagementData {
  sessionDurationMs: number;
  timeToFirstCtaMs: number | null;
  timeOnOfferSectionMs: number;
  timeToFirstClickMs: number | null;
  scrollToCtaPercent: number;
  scrollPastCta: boolean;
  maxScrollDepth: number;
  ctaHoverCount: number;
  ctaHoverDurationMs: number;
  priceHoverDurationMs: number;
  elementInteractions: number;
  viewedHero: boolean;
  viewedOffer: boolean;
  viewedTestimonials: boolean;
  viewedCta: boolean;
  clickedCta: boolean;
  startedCheckout: boolean;
  completedCheckout: boolean;
  engagementScore: number;
  intentScore: number;
}

interface SectionVisibility {
  hero: boolean;
  pain: boolean;
  solution: boolean;
  offer: boolean;
  testimonials: boolean;
  faq: boolean;
  cta: boolean;
}

const useAdvancedABTracking = (testId: string, variant: string) => {
  const startTime = useRef(Date.now());
  const sessionId = useRef(`${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const firstClickTime = useRef<number | null>(null);
  const firstCtaTime = useRef<number | null>(null);
  const sectionTimes = useRef<Record<string, number>>({});
  const currentSection = useRef<string | null>(null);
  const sectionStartTime = useRef<number>(0);
  
  const engagement = useRef<EngagementData>({
    sessionDurationMs: 0,
    timeToFirstCtaMs: null,
    timeOnOfferSectionMs: 0,
    timeToFirstClickMs: null,
    scrollToCtaPercent: 0,
    scrollPastCta: false,
    maxScrollDepth: 0,
    ctaHoverCount: 0,
    ctaHoverDurationMs: 0,
    priceHoverDurationMs: 0,
    elementInteractions: 0,
    viewedHero: false,
    viewedOffer: false,
    viewedTestimonials: false,
    viewedCta: false,
    clickedCta: false,
    startedCheckout: false,
    completedCheckout: false,
    engagementScore: 0,
    intentScore: 0,
  });

  const visibility = useRef<SectionVisibility>({
    hero: false,
    pain: false,
    solution: false,
    offer: false,
    testimonials: false,
    faq: false,
    cta: false,
  });

  // Calculate Engagement Score (0-100)
  const calculateEngagementScore = useCallback(() => {
    let score = 0;
    const e = engagement.current;
    
    // Session duration: +10 für >30 Sek
    if (e.sessionDurationMs > 30000) score += 10;
    
    // Scroll depth: +15 für >50%, +10 für >75%
    if (e.maxScrollDepth > 50) score += 15;
    if (e.maxScrollDepth > 75) score += 10;
    
    // CTA gehovered: +20
    if (e.ctaHoverCount > 0) score += 20;
    
    // Testimonials gelesen: +10
    if (e.viewedTestimonials) score += 10;
    
    // Offer-Section gesehen: +15
    if (e.viewedOffer) score += 15;
    
    // CTA geklickt: +20
    if (e.clickedCta) score += 20;
    
    return Math.min(score, 100);
  }, []);

  // Calculate Intent Score (0-100) - "Wie nah am Kauf"
  const calculateIntentScore = useCallback(() => {
    let score = 0;
    const e = engagement.current;
    
    // Offer-Section >10 Sek: +20
    if (e.timeOnOfferSectionMs > 10000) score += 20;
    
    // Preis gehovered: +15
    if (e.priceHoverDurationMs > 0) score += 15;
    
    // CTA mehrfach gehovered: +15
    if (e.ctaHoverCount > 2) score += 15;
    
    // Checkout gestartet: +30
    if (e.startedCheckout) score += 30;
    
    // Scroll zurück zum Preis (angenommen wenn >3 Interactions): +10
    if (e.elementInteractions > 3) score += 10;
    
    // CTA sichtbar und verweilt: +10
    if (e.viewedCta && e.ctaHoverDurationMs > 500) score += 10;
    
    return Math.min(score, 100);
  }, []);

  // Track CTA Hover
  const trackCtaHover = useCallback((ctaId: string, isEnter: boolean) => {
    if (isEnter) {
      engagement.current.ctaHoverCount++;
      if (!firstCtaTime.current) {
        firstCtaTime.current = Date.now() - startTime.current;
        engagement.current.timeToFirstCtaMs = firstCtaTime.current;
      }
    }
  }, []);

  // Track CTA Hover Duration
  const trackCtaHoverDuration = useCallback((durationMs: number) => {
    engagement.current.ctaHoverDurationMs += durationMs;
  }, []);

  // Track Price Hover
  const trackPriceHover = useCallback((durationMs: number) => {
    engagement.current.priceHoverDurationMs += durationMs;
  }, []);

  // Track Section View
  const trackSectionView = useCallback((sectionName: keyof SectionVisibility) => {
    if (!visibility.current[sectionName]) {
      visibility.current[sectionName] = true;
      
      if (sectionName === "hero") engagement.current.viewedHero = true;
      if (sectionName === "offer") engagement.current.viewedOffer = true;
      if (sectionName === "testimonials") engagement.current.viewedTestimonials = true;
      if (sectionName === "cta") engagement.current.viewedCta = true;
    }
    
    // Track time on section
    if (currentSection.current && currentSection.current !== sectionName) {
      const timeSpent = Date.now() - sectionStartTime.current;
      sectionTimes.current[currentSection.current] = 
        (sectionTimes.current[currentSection.current] || 0) + timeSpent;
      
      if (currentSection.current === "offer") {
        engagement.current.timeOnOfferSectionMs += timeSpent;
      }
    }
    
    currentSection.current = sectionName;
    sectionStartTime.current = Date.now();
  }, []);

  // Track Click
  const trackClick = useCallback((elementId: string, isCta: boolean = false) => {
    engagement.current.elementInteractions++;
    
    if (!firstClickTime.current) {
      firstClickTime.current = Date.now() - startTime.current;
      engagement.current.timeToFirstClickMs = firstClickTime.current;
    }
    
    if (isCta) {
      engagement.current.clickedCta = true;
    }
  }, []);

  // Track Checkout Start
  const trackCheckoutStart = useCallback(() => {
    engagement.current.startedCheckout = true;
  }, []);

  // Track Checkout Complete
  const trackCheckoutComplete = useCallback(() => {
    engagement.current.completedCheckout = true;
  }, []);

  // Save engagement data to Supabase
  const saveEngagement = useCallback(async () => {
    engagement.current.sessionDurationMs = Date.now() - startTime.current;
    engagement.current.engagementScore = calculateEngagementScore();
    engagement.current.intentScore = calculateIntentScore();
    
    try {
      await supabase.from("ab_test_engagement").upsert({
        session_id: sessionId.current,
        test_id: testId,
        variant: variant,
        session_duration_ms: engagement.current.sessionDurationMs,
        time_to_first_cta_ms: engagement.current.timeToFirstCtaMs,
        time_on_offer_section_ms: engagement.current.timeOnOfferSectionMs,
        time_to_first_click_ms: engagement.current.timeToFirstClickMs,
        scroll_to_cta_percent: engagement.current.scrollToCtaPercent,
        scroll_past_cta: engagement.current.scrollPastCta,
        max_scroll_depth: engagement.current.maxScrollDepth,
        cta_hover_count: engagement.current.ctaHoverCount,
        cta_hover_duration_ms: engagement.current.ctaHoverDurationMs,
        price_hover_duration_ms: engagement.current.priceHoverDurationMs,
        element_interactions: engagement.current.elementInteractions,
        viewed_hero: engagement.current.viewedHero,
        viewed_offer: engagement.current.viewedOffer,
        viewed_testimonials: engagement.current.viewedTestimonials,
        viewed_cta: engagement.current.viewedCta,
        clicked_cta: engagement.current.clickedCta,
        started_checkout: engagement.current.startedCheckout,
        completed_checkout: engagement.current.completedCheckout,
        engagement_score: engagement.current.engagementScore,
        intent_score: engagement.current.intentScore,
      }, { onConflict: "session_id" });
    } catch (error) {
      console.warn("Failed to save engagement data:", error);
    }
  }, [testId, variant, calculateEngagementScore, calculateIntentScore]);

  // Track scroll depth and CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > engagement.current.maxScrollDepth) {
        engagement.current.maxScrollDepth = scrollPercent;
      }
      
      // Check CTA visibility (assuming CTA is around 70-80% of page)
      const ctaPosition = 75;
      if (scrollPercent >= ctaPosition && !engagement.current.scrollPastCta) {
        engagement.current.scrollToCtaPercent = scrollPercent;
      }
      if (scrollPercent > ctaPosition + 10) {
        engagement.current.scrollPastCta = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveEngagement();
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        saveEngagement();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [saveEngagement]);

  // Periodic save (every 30 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      saveEngagement();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [saveEngagement]);

  return {
    sessionId: sessionId.current,
    trackCtaHover,
    trackCtaHoverDuration,
    trackPriceHover,
    trackSectionView,
    trackClick,
    trackCheckoutStart,
    trackCheckoutComplete,
    getEngagementScore: calculateEngagementScore,
    getIntentScore: calculateIntentScore,
    saveEngagement,
  };
};

export default useAdvancedABTracking;
