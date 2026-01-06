import { AnimatePresence } from 'framer-motion';
import { useOnboarding } from '@/hooks/useOnboarding';
import { ProgressBar } from './ProgressBar';
import { CategorySelector } from './CategorySelector';
import { StepRenderer } from './StepRenderer';
import { CompletionScreen } from './CompletionScreen';
import { Loader2 } from 'lucide-react';

interface OnboardingWizardProps {
  sessionId: string | null;
  isTestMode?: boolean;
}

export function OnboardingWizard({ sessionId, isTestMode = false }: OnboardingWizardProps) {
  const {
    isLoading,
    isSaving,
    isComplete,
    selectedCategory,
    currentStepIndex,
    currentStep,
    steps,
    totalSteps,
    progressPercent,
    responses,
    selectCategory,
    saveStepResponse,
    nextStep,
    prevStep,
    completeQuestionnaire,
    uploadFile,
  } = useOnboarding(sessionId, isTestMode);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Lade Fragebogen...</p>
        </div>
      </div>
    );
  }

  if (!sessionId && !isTestMode) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Keine Sitzung gefunden</h2>
          <p className="text-muted-foreground">
            Bitte stelle sicher, dass du über den Kaufprozess hierher gekommen bist.
          </p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return <CompletionScreen />;
  }

  // Show category selection if no category selected yet
  if (!selectedCategory) {
    return (
      <CategorySelector 
        onSelect={selectCategory} 
        isLoading={isSaving} 
      />
    );
  }

  // Show step renderer
  if (!currentStep) {
    return <CompletionScreen />;
  }

  const handleNext = async (data: Record<string, unknown>) => {
    await saveStepResponse(currentStep.key, data);
    nextStep();
  };

  const handleComplete = async (data: Record<string, unknown>) => {
    await saveStepResponse(currentStep.key, data);
    await completeQuestionnaire();
  };

  const handleFileUpload = async (file: File, assetType: string) => {
    return await uploadFile(file, assetType);
  };

  return (
    <div className="py-8">
      <ProgressBar
        percent={progressPercent}
        currentStep={currentStepIndex + 1}
        totalSteps={steps.length}
        estimatedMinutes={5}
      />

      <AnimatePresence mode="wait">
        <StepRenderer
          key={currentStep.key}
          step={currentStep}
          stepIndex={currentStepIndex}
          totalSteps={steps.length}
          initialData={responses[currentStep.key] || {}}
          onNext={handleNext}
          onPrev={prevStep}
          onComplete={handleComplete}
          onFileUpload={handleFileUpload}
          isSaving={isSaving}
        />
      </AnimatePresence>
    </div>
  );
}
