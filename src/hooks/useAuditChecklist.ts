import { useState, useEffect, useCallback, useMemo } from 'react';
import { auditItems, auditCategories, getItemsByCategory } from '@/data/localSeoAuditItems';

const STORAGE_KEY = 'local-seo-audit-progress';

export const useAuditChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCheckedItems(new Set(parsed));
        }
      }
    } catch (e) {
      console.error('Error loading audit progress:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedItems]));
      } catch (e) {
        console.error('Error saving audit progress:', e);
      }
    }
  }, [checkedItems, isLoaded]);

  const toggleItem = useCallback((itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const isChecked = useCallback((itemId: string): boolean => {
    return checkedItems.has(itemId);
  }, [checkedItems]);

  const resetAll = useCallback(() => {
    setCheckedItems(new Set());
  }, []);

  const totalItems = auditItems.length;
  const checkedCount = checkedItems.size;
  const percentage = Math.round((checkedCount / totalItems) * 100);

  const categoryProgress = useMemo(() => {
    return auditCategories.map(category => {
      const items = getItemsByCategory(category.id);
      const checkedInCategory = items.filter(item => checkedItems.has(item.id)).length;
      return {
        ...category,
        total: items.length,
        checked: checkedInCategory,
        percentage: Math.round((checkedInCategory / items.length) * 100),
      };
    });
  }, [checkedItems]);

  return {
    checkedItems,
    isChecked,
    toggleItem,
    resetAll,
    totalItems,
    checkedCount,
    percentage,
    categoryProgress,
    isLoaded,
  };
};
