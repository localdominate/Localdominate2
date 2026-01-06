import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QuestionnaireStep } from '@/data/questionnaireConfig';
import { QuestionCard } from './QuestionCard';
import { MotivationMessage } from './MotivationMessage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface StepRendererProps {
  step: QuestionnaireStep;
  stepIndex: number;
  totalSteps: number;
  initialData: Record<string, unknown>;
  onNext: (data: Record<string, unknown>) => void;
  onPrev: () => void;
  onComplete: (data: Record<string, unknown>) => void;
  onFileUpload: (file: File, assetType: string) => Promise<string | null>;
  isSaving: boolean;
}

export function StepRenderer({
  step,
  stepIndex,
  totalSteps,
  initialData,
  onNext,
  onPrev,
  onComplete,
  onFileUpload,
  isSaving,
}: StepRendererProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>(initialData);
  const [showMotivation, setShowMotivation] = useState(true);

  useEffect(() => {
    setFormData(initialData);
    setShowMotivation(true);
    const timer = setTimeout(() => setShowMotivation(false), 2000);
    return () => clearTimeout(timer);
  }, [step.key, initialData]);

  const handleChange = (questionId: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const isLastStep = stepIndex === totalSteps - 1;
    if (isLastStep) {
      onComplete(formData);
    } else {
      onNext(formData);
    }
  };

  const isValid = step.questions.every(q => {
    if (!q.required) return true;
    const val = formData[q.id];
    if (Array.isArray(val)) return val.length > 0;
    return val !== undefined && val !== '' && val !== null;
  });

  const isLastStep = stepIndex === totalSteps - 1;
  const showConfetti = stepIndex === Math.floor(totalSteps * 0.25) || 
                       stepIndex === Math.floor(totalSteps * 0.5) || 
                       stepIndex === Math.floor(totalSteps * 0.75);

  return (
    <motion.div
      key={step.key}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      {/* Motivation Message */}
      {showMotivation && step.motivationMessage && (
        <MotivationMessage 
          message={step.motivationMessage} 
          showConfetti={showConfetti}
        />
      )}

      {/* Step Header */}
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          {step.title}
        </motion.h2>
        {step.subtitle && (
          <p className="text-muted-foreground">{step.subtitle}</p>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-8 mb-10">
        {step.questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <QuestionCard
              question={question}
              value={formData[question.id]}
              onChange={(value) => handleChange(question.id, value)}
              onFileUpload={question.type === 'file' ? (file) => onFileUpload(file, question.id) : undefined}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={stepIndex === 0 || isSaving}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Button>

        <Button
          onClick={handleSubmit}
          disabled={!isValid || isSaving}
          className="gap-2 min-w-[140px]"
        >
          {isSaving ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
          ) : isLastStep ? (
            <>
              Abschließen
              <Check className="w-4 h-4" />
            </>
          ) : (
            <>
              Weiter
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
