import { useState, useEffect, useCallback } from 'react';
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

export function useOnboarding(sessionId: string | null) {
  const [state, setState] = useState<OnboardingState>({
    customerId: null,
    currentStepIndex: 0,
    selectedCategory: null,
    responses: {},
    isLoading: true,
    isSaving: false,
    isComplete: false,
  });

  // Initialize or fetch customer
  useEffect(() => {
    if (!sessionId) {
      setState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    async function initCustomer() {
      try {
        // Check if customer already exists
        const { data: existing } = await supabase
          .from('customers')
          .select('*')
          .eq('stripe_session_id', sessionId)
          .single();

        if (existing) {
          // Fetch existing responses
          const { data: responses } = await supabase
            .from('questionnaire_responses')
            .select('step_key, response_data')
            .eq('customer_id', existing.id);

          const responsesMap: Record<string, Record<string, unknown>> = {};
          responses?.forEach(r => {
            responsesMap[r.step_key] = r.response_data as Record<string, unknown>;
          });

          setState(prev => ({
            ...prev,
            customerId: existing.id,
            selectedCategory: existing.business_category as BusinessCategory | null,
            responses: responsesMap,
            isComplete: existing.questionnaire_completed || false,
            isLoading: false,
          }));
        } else {
          // Create new customer
          const { data: newCustomer, error } = await supabase
            .from('customers')
            .insert({ stripe_session_id: sessionId })
            .select()
            .single();

          if (error) throw error;

          setState(prev => ({
            ...prev,
            customerId: newCustomer.id,
            isLoading: false,
          }));
        }
      } catch (error) {
        console.error('Error initializing customer:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    }

    initCustomer();
  }, [sessionId]);

  const selectCategory = useCallback(async (category: BusinessCategory) => {
    if (!state.customerId) return;

    setState(prev => ({ ...prev, isSaving: true }));

    try {
      await supabase
        .from('customers')
        .update({ business_category: category })
        .eq('id', state.customerId);

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
      await supabase
        .from('customers')
        .update({
          questionnaire_completed: true,
          questionnaire_completed_at: new Date().toISOString(),
        })
        .eq('id', state.customerId);

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
