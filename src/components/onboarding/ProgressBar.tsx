import { motion } from 'framer-motion';
import { Trophy, Zap, Star, Rocket, Target, Check } from 'lucide-react';

interface ProgressBarProps {
  percent: number;
  currentStep: number;
  totalSteps: number;
  estimatedMinutes?: number;
}

const milestones = [
  { percent: 25, icon: Zap, label: 'Guter Start!', color: 'text-yellow-500' },
  { percent: 50, icon: Star, label: 'Halbzeit!', color: 'text-amber-500' },
  { percent: 75, icon: Rocket, label: 'Fast da!', color: 'text-orange-500' },
  { percent: 100, icon: Trophy, label: 'Geschafft!', color: 'text-primary' },
];

export function ProgressBar({ percent, currentStep, totalSteps, estimatedMinutes = 5 }: ProgressBarProps) {
  const remainingSteps = totalSteps - currentStep;
  const estimatedRemaining = Math.max(1, Math.ceil((remainingSteps / totalSteps) * estimatedMinutes));
  
  // Find current milestone
  const currentMilestone = milestones.find(m => percent <= m.percent);
  const achievedMilestones = milestones.filter(m => percent >= m.percent);

  return (
    <div className="w-full mb-10">
      {/* Header with step info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
            {currentStep}
          </div>
          <span className="text-sm text-muted-foreground">
            von {totalSteps} Schritten
          </span>
        </div>
        
        <motion.div 
          key={estimatedRemaining}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          ~{estimatedRemaining} Min.
        </motion.div>
      </div>
      
      {/* Progress bar with milestones */}
      <div className="relative">
        {/* Background track */}
        <div className="w-full h-4 bg-muted rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
        
        {/* Milestone markers */}
        <div className="absolute top-0 left-0 right-0 h-4 flex items-center">
          {milestones.slice(0, -1).map((milestone) => (
            <motion.div
              key={milestone.percent}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${milestone.percent}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <div className={`w-4 h-4 rounded-full border-2 border-background shadow-sm flex items-center justify-center
                ${percent >= milestone.percent 
                  ? 'bg-primary' 
                  : 'bg-muted'
                }`}
              >
                {percent >= milestone.percent && (
                  <Check className="w-2.5 h-2.5 text-primary-foreground" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Percentage and milestone badge */}
      <div className="flex justify-between items-center mt-4">
        <motion.div 
          key={percent}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {Math.round(percent)}%
          </span>
        </motion.div>
        
        {/* Current milestone badge */}
        {achievedMilestones.length > 0 && (
          <motion.div
            key={achievedMilestones[achievedMilestones.length - 1].label}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            {(() => {
              const Icon = achievedMilestones[achievedMilestones.length - 1].icon;
              return <Icon className={`w-4 h-4 ${achievedMilestones[achievedMilestones.length - 1].color}`} />;
            })()}
            <span className="text-sm font-medium text-primary">
              {achievedMilestones[achievedMilestones.length - 1].label}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
