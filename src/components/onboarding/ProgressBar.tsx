import { motion } from 'framer-motion';

interface ProgressBarProps {
  percent: number;
  currentStep: number;
  totalSteps: number;
  estimatedMinutes?: number;
}

export function ProgressBar({ percent, currentStep, totalSteps, estimatedMinutes = 3 }: ProgressBarProps) {
  const remainingSteps = totalSteps - currentStep;
  const estimatedRemaining = Math.ceil((remainingSteps / totalSteps) * estimatedMinutes);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">
          Schritt {currentStep} von {totalSteps}
        </span>
        <span className="text-sm text-muted-foreground">
          ~{estimatedRemaining} Min. verbleibend
        </span>
      </div>
      
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      
      <div className="flex justify-center mt-2">
        <motion.span 
          key={percent}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-lg font-bold text-primary"
        >
          {Math.round(percent)}%
        </motion.span>
      </div>
    </div>
  );
}
