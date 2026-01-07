import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface CategoryProgressCardProps {
  title: string;
  checked: number;
  total: number;
  percentage: number;
}

export const CategoryProgressCard: React.FC<CategoryProgressCardProps> = ({
  title,
  checked,
  total,
  percentage,
}) => {
  const isComplete = percentage === 100;

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-3 rounded-lg border transition-all',
        isComplete ? 'bg-green-50 border-green-200' : 'bg-muted/30 border-border'
      )}
    >
      {isComplete ? (
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
      ) : (
        <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span
            className={cn(
              'text-sm font-medium truncate',
              isComplete ? 'text-green-700' : 'text-foreground'
            )}
          >
            {title}
          </span>
          <span
            className={cn(
              'text-xs font-medium ml-2',
              isComplete ? 'text-green-600' : 'text-muted-foreground'
            )}
          >
            {checked}/{total}
          </span>
        </div>
        <Progress
          value={percentage}
          className={cn('h-1.5', isComplete && '[&>div]:bg-green-500')}
        />
      </div>
    </div>
  );
};
