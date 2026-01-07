import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AuditItem, getItemsByCategory } from '@/data/localSeoAuditItems';
import { InteractiveChecklistItem } from './InteractiveChecklistItem';
import { CategoryProgressCard } from './CategoryProgressCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

interface AuditCategorySectionProps {
  categoryId: string;
  title: string;
  isChecked: (id: string) => boolean;
  onToggle: (id: string) => void;
  checkedCount: number;
  totalCount: number;
  percentage: number;
  defaultOpen?: boolean;
}

export const AuditCategorySection: React.FC<AuditCategorySectionProps> = ({
  categoryId,
  title,
  isChecked,
  onToggle,
  checkedCount,
  totalCount,
  percentage,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const items = getItemsByCategory(categoryId);
  const isComplete = percentage === 100;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <CollapsibleTrigger className="w-full">
        <div
          className={cn(
            'flex items-center justify-between p-4 rounded-lg border transition-all hover:bg-muted/50',
            isComplete ? 'bg-green-50 border-green-200' : 'bg-card border-border'
          )}
        >
          <div className="flex items-center gap-3">
            <ChevronDown
              className={cn(
                'w-5 h-5 transition-transform',
                isOpen && 'rotate-180'
              )}
            />
            <span className="font-semibold text-left">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-sm font-medium px-2 py-0.5 rounded-full',
                isComplete
                  ? 'bg-green-100 text-green-700'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {checkedCount}/{totalCount}
            </span>
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="mt-3 space-y-2 pl-2">
          {items.map((item) => (
            <InteractiveChecklistItem
              key={item.id}
              item={item}
              isChecked={isChecked(item.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
