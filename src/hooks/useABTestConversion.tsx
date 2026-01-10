import { useCallback, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAutoOptimizerContext } from '@/components/AutoOptimizerProvider';

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
  const { testQueue, userVariant } = useAutoOptimizerContext();
  const sessionId = useRef<string>('');

  // Initialize session ID
  useEffect(() => {
    const existingId = sessionStorage.getItem('analytics_session_id');
    if (existingId) {
      sessionId.current = existingId;
    } else {
      const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', newId);
      sessionId.current = newId;
    }
  }, []);

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

  // Track CTA click conversion
  const trackCtaClick = useCallback(async (
    ctaLocation: string,
    ctaText: string,
    amount?: number
  ) => {
    const runningTest = getRunningTest();
    if (!runningTest) {
      console.log('[Conversion] No running test to track');
      return;
    }

    const testId = `auto_${runningTest.element_type}_${runningTest.element_id}`;
    
    console.log(`[Conversion] Tracking CTA click for ${testId}, variant ${userVariant}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'cta_click',
        session_id: sessionId.current,
        page_path: window.location.pathname,
        cta_location: ctaLocation,
        cta_text: ctaText,
        amount: amount,
        ab_test_id: testId,
        ab_variant_color: userVariant
      });
    } catch (error) {
      console.error('[Conversion] Error tracking CTA click:', error);
    }
  }, [getRunningTest, userVariant]);

  // Track checkout start
  const trackCheckoutStart = useCallback(async (amount: number) => {
    const runningTest = getRunningTest();
    const testId = runningTest 
      ? `auto_${runningTest.element_type}_${runningTest.element_id}` 
      : null;

    console.log(`[Conversion] Tracking checkout start${testId ? ` for ${testId}` : ''}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'checkout_start',
        session_id: sessionId.current,
        page_path: window.location.pathname,
        amount: amount,
        ab_test_id: testId,
        ab_variant_color: testId ? userVariant : null
      });
    } catch (error) {
      console.error('[Conversion] Error tracking checkout start:', error);
    }
  }, [getRunningTest, userVariant]);

  // Track checkout complete
  const trackCheckoutComplete = useCallback(async (
    stripeSessionId: string, 
    amount: number
  ) => {
    const runningTest = getRunningTest();
    const testId = runningTest 
      ? `auto_${runningTest.element_type}_${runningTest.element_id}` 
      : null;

    console.log(`[Conversion] Tracking checkout complete${testId ? ` for ${testId}` : ''}`);

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: 'checkout_complete',
        session_id: sessionId.current,
        page_path: window.location.pathname,
        amount: amount,
        stripe_session_id: stripeSessionId,
        payment_verified: true,
        ab_test_id: testId,
        ab_variant_color: testId ? userVariant : null
      });
    } catch (error) {
      console.error('[Conversion] Error tracking checkout complete:', error);
    }
  }, [getRunningTest, userVariant]);

  // Track any custom conversion
  const trackConversion = useCallback(async (data: Partial<ConversionData>) => {
    const runningTest = data.elementType && data.elementId 
      ? getRunningTest(data.elementType, data.elementId)
      : getRunningTest();
    
    const testId = runningTest 
      ? `auto_${runningTest.element_type}_${runningTest.element_id}` 
      : data.testId || null;

    try {
      await supabase.from('analytics_conversions').insert({
        conversion_type: data.conversionType || 'custom',
        session_id: sessionId.current,
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
  }, [getRunningTest, userVariant]);

  return {
    trackCtaClick,
    trackCheckoutStart,
    trackCheckoutComplete,
    trackConversion,
    sessionId: sessionId.current,
    userVariant,
    currentTest: getRunningTest()
  };
}