import React from 'react';
import { RotateCcw, Trophy, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AuditProgressBarProps {
  checkedCount: number;
  totalItems: number;
  percentage: number;
  onReset: () => void;
}

export const AuditProgressBar: React.FC<AuditProgressBarProps> = ({
  checkedCount,
  totalItems,
  percentage,
  onReset,
}) => {
  const isComplete = percentage === 100;

  return (
    <div
      className={cn(
        'sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm py-4 px-4 -mx-4 mb-6',
        isComplete && 'bg-green-50/95'
      )}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {isComplete ? (
              <Trophy className="w-5 h-5 text-green-600" />
            ) : (
              <Target className="w-5 h-5 text-primary" />
            )}
            <span className="font-semibold text-foreground">
              {isComplete ? (
                <span className="text-green-600">Audit abgeschlossen! 🎉</span>
              ) : (
                <>
                  {checkedCount} von {totalItems} Punkten erledigt
                </>
              )}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={cn(
                'text-lg font-bold',
                isComplete ? 'text-green-600' : 'text-primary'
              )}
            >
              {percentage}%
            </span>
            {checkedCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onReset}
                className="text-muted-foreground hover:text-destructive"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Zurücksetzen
              </Button>
            )}
          </div>
        </div>

        <Progress
          value={percentage}
          className={cn(
            'h-3',
            isComplete && '[&>div]:bg-green-500'
          )}
        />

        {!isComplete && percentage > 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            Noch {totalItems - checkedCount} Punkte offen. Fortschritt wird automatisch gespeichert.
          </p>
        )}
      </div>
    </div>
  );
};
