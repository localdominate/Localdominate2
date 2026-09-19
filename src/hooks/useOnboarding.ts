import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BusinessCategory, getAllStepsForCategory, QuestionnaireStep } from '@/data/questionnaireConfig';
import type { Json } from '@/integrations/supabase/types';

interface OnboardingState {
  customerId: string | null;
  currentStepIndex: number;
  selectedCategory: BusinessCategory | null;
  responses: Record<string, Record<string, unknown>>;
  isLoading: boolean;
  isSaving: boolean;
  isComplete: boolean;
}

export function useOnboarding(sessionId: string | null, isTestMode: boolean = false) {
  const [state, setState] = useState<OnboardingState>({
    customerId: null,
    currentStepIndex: 0,
    selectedCategory: null,
    responses: {},
    isLoading: true,
    isSaving: false,
    isComplete: false,
  });

  const sessionRef = useRef<string | null>(null);

  // Initialize or fetch customer
  useEffect(() => {
    if (!sessionId && !isTestMode) {
      setState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    async function initCustomer() {
      try {
        const activeSessionId = isTestMode && !sessionId ? `test_${Date.now()}` : sessionId!;
        sessionRef.current = activeSessionId;

        const { data, error } = await supabase.functions.invoke('customer-onboarding', {
          body: { action: 'init', sessionId: activeSessionId },
        });

        if (error) throw error;

        const customer = data?.customer;
        if (!customer) throw new Error('No customer returned');

        if (data?.created) {
          try {
            await supabase.functions.invoke('send-new-customer-notification', {
              body: {
                customerId: customer.id,
                recipientEmail: 'markuswimboeck@googlemail.com',
              },
            });
          } catch (notifyErr) {
            console.error('Failed to send new customer notification:', notifyErr);
          }
        }

        const responsesMap: Record<string, Record<string, unknown>> = {};
        (data?.responses ?? []).forEach((r: { step_key: string; response_data: unknown }) => {
          responsesMap[r.step_key] = r.response_data as Record<string, unknown>;
        });

        setState(prev => ({
          ...prev,
          customerId: customer.id,
          selectedCategory: (customer.business_category as BusinessCategory | null) ?? null,
          responses: responsesMap,
          isComplete: customer.questionnaire_completed || false,
          isLoading: false,
        }));
      } catch (error) {
        console.error('Error initializing customer:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    }

    initCustomer();
  }, [sessionId, isTestMode]);

  const selectCategory = useCallback(async (category: BusinessCategory) => {
    if (!state.customerId) return;

    setState(prev => ({ ...prev, isSaving: true }));

    try {
      await supabase.functions.invoke('customer-onboarding', {
        body: { action: 'set_category', sessionId: sessionRef.current, category },
      });

      setState(prev => ({
        ...prev,
        selectedCategory: category,
        currentStepIndex: 0,
        isSaving: false,
      }));
    } catch (error) {
      console.error('Error selecting category:', error);
      setState(prev => ({ ...prev, isSaving: false }));
    }
  }, [state.customerId]);

  const saveStepResponse = useCallback(async (stepKey: string, data: Record<string, unknown>) => {
    if (!state.customerId) return;

    setState(prev => ({ ...prev, isSaving: true }));

    try {
      // Check if response already exists
      const { data: existing } = await supabase
        .from('questionnaire_responses')
        .select('id')
        .eq('customer_id', state.customerId)
        .eq('step_key', stepKey)
        .single();

      if (existing) {
        await supabase
          .from('questionnaire_responses')
          .update({ response_data: data as unknown as Json })
          .eq('id', existing.id);
      } else {
        await supabase
          .from('questionnaire_responses')
          .insert({
            customer_id: state.customerId,
            step_key: stepKey,
            response_data: data as unknown as Json,
          });
      }

      // Update customer basic info if relevant
      if (stepKey === 'basic_info' || stepKey === 'contact') {
        const updates: Record<string, unknown> = {};
        if (data.business_name) updates.business_name = data.business_name;
        if (data.address) updates.address = data.address;
        if (data.phone) updates.phone = data.phone;
        if (data.email) updates.email = data.email;

        if (Object.keys(updates).length > 0) {
          await supabase
            .from('customers')
            .update(updates)
            .eq('id', state.customerId);
        }
      }

      setState(prev => ({
        ...prev,
        responses: { ...prev.responses, [stepKey]: data },
        isSaving: false,
      }));
    } catch (error) {
      console.error('Error saving response:', error);
      setState(prev => ({ ...prev, isSaving: false }));
    }
  }, [state.customerId]);

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStepIndex: prev.currentStepIndex + 1,
    }));
  }, []);

  const prevStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStepIndex: Math.max(0, prev.currentStepIndex - 1),
    }));
  }, []);

  const completeQuestionnaire = useCallback(async () => {
    if (!state.customerId) return;

    setState(prev => ({ ...prev, isSaving: true }));

    try {
      // Mark questionnaire as complete
      await supabase
        .from('customers')
        .update({
          questionnaire_completed: true,
          questionnaire_completed_at: new Date().toISOString(),
        })
        .eq('id', state.customerId);

      // Get customer email from responses or customer table
      const { data: customer } = await supabase
        .from('customers')
        .select('email')
        .eq('id', state.customerId)
        .single();

      // Send confirmation email with questionnaire results (uses service role in edge function)
      const recipientEmail = 'markuswimboeck@googlemail.com';
      
      try {
        const { error: emailError } = await supabase.functions.invoke('send-questionnaire-email', {
          body: {
            customerId: state.customerId,
            recipientEmail: recipientEmail,
          },
        });

        if (emailError) {
          console.error('Error sending questionnaire email:', emailError);
        } else {
          console.log('Questionnaire completion email sent successfully');
        }
      } catch (emailErr) {
        console.error('Failed to send email:', emailErr);
        // Don't throw - questionnaire is still complete even if email fails
      }

      setState(prev => ({
        ...prev,
        isComplete: true,
        isSaving: false,
      }));
    } catch (error) {
      console.error('Error completing questionnaire:', error);
      setState(prev => ({ ...prev, isSaving: false }));
    }
  }, [state.customerId]);

  const uploadFile = useCallback(async (file: File, assetType: string): Promise<string | null> => {
    if (!state.customerId) return null;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${state.customerId}/${assetType}_${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('customer-uploads')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Save reference in database
      await supabase
        .from('uploaded_assets')
        .insert({
          customer_id: state.customerId,
          asset_type: assetType,
          storage_path: fileName,
          file_name: file.name,
        });

      const { data: { publicUrl } } = supabase.storage
        .from('customer-uploads')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }, [state.customerId]);

  // Get current steps based on category
  const steps: QuestionnaireStep[] = state.selectedCategory 
    ? getAllStepsForCategory(state.selectedCategory)
    : [];

  const currentStep = steps[state.currentStepIndex];
  const totalSteps = steps.length + 1; // +1 for category selection
  const progressPercent = state.selectedCategory 
    ? ((state.currentStepIndex + 1) / steps.length) * 100 
    : 0;

  return {
    ...state,
    steps,
    currentStep,
    totalSteps,
    progressPercent,
    selectCategory,
    saveStepResponse,
    nextStep,
    prevStep,
    completeQuestionnaire,
    uploadFile,
  };
}
