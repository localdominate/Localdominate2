import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionnaireStep } from '@/data/questionnaireConfig';
import { QuestionCard } from './QuestionCard';
import { MotivationMessage } from './MotivationMessage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';

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
    const timer = setTimeout(() => setShowMotivation(false), 2500);
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
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-2xl mx-auto"
    >
      {/* Motivation Message */}
      <AnimatePresence>
        {showMotivation && step.motivationMessage && (
          <MotivationMessage 
            message={step.motivationMessage} 
            showConfetti={showConfetti}
          />
        )}
      </AnimatePresence>

      {/* Step Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-10"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          {step.title}
        </motion.h2>
        {step.subtitle && (
          <p className="text-lg text-muted-foreground">{step.subtitle}</p>
        )}
      </motion.div>

      {/* Questions */}
      <div className="space-y-10 mb-12">
        {step.questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.1 }}
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-between items-center pt-8 border-t border-border/50"
      >
        <Button
          variant="ghost"
          onClick={onPrev}
          disabled={stepIndex === 0 || isSaving}
          className="gap-2 text-base px-6 py-5 rounded-xl hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Button>

        <Button
          onClick={handleSubmit}
          disabled={!isValid || isSaving}
          className="gap-3 min-w-[180px] text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 
                     hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50"
        >
          {isSaving ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
            />
          ) : isLastStep ? (
            <>
              <Sparkles className="w-5 h-5" />
              Abschließen
            </>
          ) : (
            <>
              Weiter
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
}
