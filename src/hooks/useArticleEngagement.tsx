import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface EngagementData {
  maxScrollDepth: number;
  readingTimeSeconds: number;
  scrollMilestones: number[];
  finishedReading: boolean;
  engagementScore: number;
}

const SCROLL_THROTTLE_MS = 250;
const MILESTONES = [25, 50, 75, 100];

export const useArticleEngagement = (
  viewId: string | null,
  expectedReadingTimeMinutes: number = 5
) => {
  const engagementRef = useRef<EngagementData>({
    maxScrollDepth: 0,
    readingTimeSeconds: 0,
    scrollMilestones: [],
    finishedReading: false,
    engagementScore: 0
  });
  
  const startTimeRef = useRef<number>(Date.now());
  const lastUpdateRef = useRef<number>(Date.now());
  const isVisibleRef = useRef<boolean>(true);
  const hasUpdatedRef = useRef<boolean>(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  const calculateEngagementScore = useCallback((scrollDepth: number, readingTimeSeconds: number) => {
    const expectedReadingTimeSeconds = expectedReadingTimeMinutes * 60;
    
    // Scroll-Tiefe: 40% Gewicht
    const scrollScore = scrollDepth * 0.4;
    
    // Lesezeit-Ratio: 40% Gewicht (max 100%)
    const readingRatio = Math.min((readingTimeSeconds / expectedReadingTimeSeconds) * 100, 100);
    const readingScore = readingRatio * 0.4;
    
    // Meilensteine: 20% Gewicht
    const milestoneScore = (engagementRef.current.scrollMilestones.length / MILESTONES.length) * 100 * 0.2;
    
    return Math.round(scrollScore + readingScore + milestoneScore);
  }, [expectedReadingTimeMinutes]);

  const updateEngagement = useCallback(async (isFinal: boolean = false) => {
    if (!viewId || hasUpdatedRef.current) return;
    
    const now = Date.now();
    const activeTime = isVisibleRef.current 
      ? engagementRef.current.readingTimeSeconds + Math.floor((now - lastUpdateRef.current) / 1000)
      : engagementRef.current.readingTimeSeconds;
    
    const engagement = engagementRef.current;
    const engagementScore = calculateEngagementScore(engagement.maxScrollDepth, activeTime);
    
    const updateData = {
      max_scroll_depth: engagement.maxScrollDepth,
      reading_time_seconds: activeTime,
      scroll_milestones: engagement.scrollMilestones,
      engagement_score: engagementScore,
      finished_reading: engagement.maxScrollDepth >= 90,
      exit_time: isFinal ? new Date().toISOString() : null
    };

    if (isFinal) {
      hasUpdatedRef.current = true;
      // Use sendBeacon for reliable final update
      const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/blog_article_views?id=eq.${viewId}`;
      const headers = {
        'Content-Type': 'application/json',
        'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        'Prefer': 'return=minimal'
      };
      
      try {
        navigator.sendBeacon(url, new Blob([JSON.stringify(updateData)], { type: 'application/json' }));
      } catch {
        // Fallback to regular update
        await supabase
          .from('blog_article_views')
          .update(updateData)
          .eq('id', viewId);
      }
    } else {
      await supabase
        .from('blog_article_views')
        .update(updateData)
        .eq('id', viewId);
    }
  }, [viewId, calculateEngagementScore]);

  const handleScroll = useCallback(() => {
    if (throttleRef.current) return;
    
    throttleRef.current = setTimeout(() => {
      throttleRef.current = null;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercent = Math.round((currentScroll / scrollHeight) * 100);
      
      // Update max scroll depth
      if (scrollPercent > engagementRef.current.maxScrollDepth) {
        engagementRef.current.maxScrollDepth = scrollPercent;
        
        // Check for new milestones
        MILESTONES.forEach(milestone => {
          if (scrollPercent >= milestone && !engagementRef.current.scrollMilestones.includes(milestone)) {
            engagementRef.current.scrollMilestones.push(milestone);
          }
        });
        
        // Mark as finished if scrolled 90%+
        if (scrollPercent >= 90) {
          engagementRef.current.finishedReading = true;
        }
      }
    }, SCROLL_THROTTLE_MS);
  }, []);

  const handleVisibilityChange = useCallback(() => {
    const now = Date.now();
    
    if (document.hidden) {
      // Tab became hidden - save accumulated time
      if (isVisibleRef.current) {
        engagementRef.current.readingTimeSeconds += Math.floor((now - lastUpdateRef.current) / 1000);
      }
      isVisibleRef.current = false;
      // Update on tab switch
      updateEngagement(false);
    } else {
      // Tab became visible - reset timer
      isVisibleRef.current = true;
      lastUpdateRef.current = now;
    }
  }, [updateEngagement]);

  const handleBeforeUnload = useCallback(() => {
    updateEngagement(true);
  }, [updateEngagement]);

  useEffect(() => {
    if (!viewId) return;

    // Reset state
    startTimeRef.current = Date.now();
    lastUpdateRef.current = Date.now();
    isVisibleRef.current = true;
    hasUpdatedRef.current = false;
    engagementRef.current = {
      maxScrollDepth: 0,
      readingTimeSeconds: 0,
      scrollMilestones: [],
      finishedReading: false,
      engagementScore: 0
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    // Periodic update every 30 seconds
    const intervalId = setInterval(() => {
      if (isVisibleRef.current) {
        const now = Date.now();
        engagementRef.current.readingTimeSeconds += Math.floor((now - lastUpdateRef.current) / 1000);
        lastUpdateRef.current = now;
        updateEngagement(false);
      }
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
      clearInterval(intervalId);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
      // Final update on unmount
      if (!hasUpdatedRef.current) {
        updateEngagement(true);
      }
    };
  }, [viewId, handleScroll, handleVisibilityChange, handleBeforeUnload, updateEngagement]);

  return engagementRef.current;
};
