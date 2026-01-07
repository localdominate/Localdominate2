import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuditItem, getPriorityColor, getPriorityLabel } from '@/data/localSeoAuditItems';

interface InteractiveChecklistItemProps {
  item: AuditItem;
  isChecked: boolean;
  onToggle: (id: string) => void;
  showPriority?: boolean;
}

export const InteractiveChecklistItem: React.FC<InteractiveChecklistItemProps> = ({
  item,
  isChecked,
  onToggle,
  showPriority = true,
}) => {
  return (
    <button
      onClick={() => onToggle(item.id)}
      className={cn(
        'w-full flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 text-left group',
        isChecked
          ? 'bg-green-50 border-green-300 hover:bg-green-100'
          : 'bg-white border-border hover:bg-muted/50 hover:border-primary/30'
      )}
    >
      {/* Checkbox */}
      <div
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200',
          isChecked
            ? 'bg-green-500 border-green-500'
            : 'border-muted-foreground/30 group-hover:border-primary/50'
        )}
      >
        {isChecked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
      </div>

      {/* Text */}
      <span
        className={cn(
          'flex-1 text-sm transition-all duration-200',
          isChecked ? 'text-green-700 line-through' : 'text-foreground'
        )}
      >
        {item.text}
      </span>

      {/* Priority Badge */}
      {showPriority && (
        <span
          className={cn(
            'flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium',
            getPriorityColor(item.priority)
          )}
        >
          {getPriorityLabel(item.priority)}
        </span>
      )}
    </button>
  );
};
