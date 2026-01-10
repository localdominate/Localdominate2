import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAutoOptimizerContext } from '@/components/AutoOptimizerProvider';
import { getSessionId, getTestId } from '@/lib/sessionManager';
import { useAdvancedTrackingContext } from '@/components/AdvancedTrackingProvider';

interface ConversionData {
  testId: string;
  variant: 'A' | 'B';
  elementType: string;
  elementId: string;
  conversionType: 'cta_click' | 'checkout_start' | 'checkout_complete';
  amount?: number;
  ctaLocation?: string;
  ctaText?: string;
}

export function useABTestConversion() {
  const { testQueue, userVariant, currentTest } = useAutoOptimizerContext();
  const advancedTracking = useAdvancedTrackingContext();
  
  // Use central session manager for consistent session ID
  const sessionId = getSessionId();

  // Get current running test info
  const getRunningTest = useCallback((elementType?: string, elementId?: string) => {
    if (elementType && elementId) {
      return testQueue.find(
        t => t.status === 'testing' && t.element_type === elementType && t.element_id === elementId
      );
    }
    // Return any running test
    return testQueue.find(t => t.status === 'testing');
  }, [testQueue]);

  // Get the current test ID from context or session manager
  const getCurrentTestId = useCallback(() => {
    if (currentTest?.testId) {
      return currentTest.testId;
    }
    const runningTest = getRunningTest();
    if (runningTest) {
      return `auto_${runningTest.element_type}_${runningTest.element_id}`;
    }
    return getTestId();
  }, [currentTest, getRunningTest]);

  // Track CTA click conversion
  const trackCtaClick = useCallback(async (
    ctaLocation: string,
    ctaText: string,
    amount?: number
  ) => {
    const testId = getCurrentTestId();
    
    console.log(`[Conversion] Tracking CTA click for ${testId || 'no test'}, variant ${userVariant}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'cta_click',
        session_id: sessionId,
        page_path: window.location.pathname,
        cta_location: ctaLocation,
        cta_text: ctaText,
        amount: amount,
        ab_test_id: testId,
        ab_variant_color: userVariant
      });
      
      // Also track click in advanced tracking
      advancedTracking.trackClick(ctaLocation, true);
    } catch (error) {
      console.error('[Conversion] Error tracking CTA click:', error);
    }
  }, [getCurrentTestId, userVariant, sessionId, advancedTracking]);

  // Track checkout start
  const trackCheckoutStart = useCallback(async (amount: number) => {
    const testId = getCurrentTestId();

    console.log(`[Conversion] Tracking checkout start${testId ? ` for ${testId}` : ''}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'checkout_start',
        session_id: sessionId,
        page_path: window.location.pathname,
        amount: amount,
        ab_test_id: testId,
        ab_variant_color: testId ? userVariant : null
      });
      
      // Sync with advanced tracking
      advancedTracking.trackCheckoutStart();
    } catch (error) {
      console.error('[Conversion] Error tracking checkout start:', error);
    }
  }, [getCurrentTestId, userVariant, sessionId, advancedTracking]);

  // Track checkout complete
  const trackCheckoutComplete = useCallback(async (
    stripeSessionId: string, 
    amount: number
  ) => {
    const testId = getCurrentTestId();

    console.log(`[Conversion] Tracking checkout complete${testId ? ` for ${testId}` : ''}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'checkout_complete',
        session_id: sessionId,
        page_path: window.location.pathname,
        amount: amount,
        stripe_session_id: stripeSessionId,
        payment_verified: true,
        ab_test_id: testId,
        ab_variant_color: testId ? userVariant : null
      });
      
      // Sync with advanced tracking
      advancedTracking.trackCheckoutComplete();
    } catch (error) {
      console.error('[Conversion] Error tracking checkout complete:', error);
    }
  }, [getCurrentTestId, userVariant, sessionId, advancedTracking]);

  // Track any custom conversion
  const trackConversion = useCallback(async (data: Partial<ConversionData>) => {
    const runningTest = data.elementType && data.elementId 
      ? getRunningTest(data.elementType, data.elementId)
      : getRunningTest();
    
    const testId = runningTest 
      ? `auto_${runningTest.element_type}_${runningTest.element_id}` 
      : data.testId || getCurrentTestId();

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: data.conversionType || 'custom',
        session_id: sessionId,
        page_path: window.location.pathname,
        cta_location: data.ctaLocation,
        cta_text: data.ctaText,
        amount: data.amount,
        ab_test_id: testId,
        ab_variant_color: testId ? data.variant || userVariant : null
      });
    } catch (error) {
      console.error('[Conversion] Error tracking conversion:', error);
    }
  }, [getRunningTest, getCurrentTestId, userVariant, sessionId]);

  return {
    trackCtaClick,
    trackCheckoutStart,
    trackCheckoutComplete,
    trackConversion,
    sessionId,
    userVariant,
    currentTest: getRunningTest()
  };
}
