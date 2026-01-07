// Analytics data storage and retrieval utilities
import { supabase } from "@/integrations/supabase/client";

export interface HeatmapPoint {
  x: number;
  y: number;
  value: number;
  timestamp: number;
  type: "click" | "move" | "scroll";
  path: string;
}

export interface SessionData {
  id: string;
  startTime: number;
  endTime?: number;
  pageViews: string[];
  scrollDepths: number[];
  exitPage?: string;
  referrer: string;
  device: "mobile" | "tablet" | "desktop";
  userAgent: string;
  abVariantColor?: string;
  abVariantRestaurant?: string;
}

export interface AnalyticsEvent {
  type: string;
  name: string;
  timestamp: number;
  data?: Record<string, any>;
}

const STORAGE_KEYS = {
  HEATMAP: "heatmap_data",
  SESSIONS: "analytics_sessions",
  EVENTS: "analytics_events",
  CURRENT_SESSION: "current_session_id",
  AB_VARIANT_COLOR: "ab_test_variant",
  AB_VARIANT_RESTAURANT: "restaurant_ab_variant",
};

// Device detection
const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Generate session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get A/B variants from localStorage
const getABVariants = () => {
  return {
    color: localStorage.getItem(STORAGE_KEYS.AB_VARIANT_COLOR) || undefined,
    restaurant: localStorage.getItem(STORAGE_KEYS.AB_VARIANT_RESTAURANT) || undefined,
  };
};

// Track to Supabase (non-blocking)
const trackToSupabase = async (type: string, data: Record<string, any>) => {
  try {
    const { error } = await supabase.functions.invoke("track-analytics", {
      body: { type, data },
    });
    if (error) {
      console.warn("Supabase tracking error:", error);
    }
  } catch (e) {
    console.warn("Failed to track to Supabase:", e);
  }
};

// Get or create current session
export const getCurrentSession = (): SessionData => {
  const existingSessionId = sessionStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
  const sessions = getSessions();
  
  if (existingSessionId) {
    const existing = sessions.find(s => s.id === existingSessionId);
    if (existing) return existing;
  }
  
  const variants = getABVariants();
  
  // Create new session
  const newSession: SessionData = {
    id: generateSessionId(),
    startTime: Date.now(),
    pageViews: [window.location.pathname],
    scrollDepths: [],
    referrer: document.referrer || "direct",
    device: getDeviceType(),
    userAgent: navigator.userAgent,
    abVariantColor: variants.color,
    abVariantRestaurant: variants.restaurant,
  };
  
  sessionStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, newSession.id);
  saveSession(newSession);
  
  // Track session start to Supabase
  trackToSupabase("session_start", {
    session_id: newSession.id,
    entry_page: window.location.pathname,
    device: newSession.device,
    referrer: newSession.referrer,
    user_agent: newSession.userAgent,
    ab_variant_color: variants.color,
    ab_variant_restaurant: variants.restaurant,
  });
  
  return newSession;
};

// Update current session
export const updateSession = (updates: Partial<SessionData>): void => {
  const session = getCurrentSession();
  const updatedSession = { ...session, ...updates, endTime: Date.now() };
  saveSession(updatedSession);
  
  // Track session update to Supabase
  trackToSupabase("session_update", {
    session_id: session.id,
    exit_page: updates.exitPage || window.location.pathname,
    page_views: updatedSession.pageViews.length,
    scroll_depths: updatedSession.scrollDepths,
    end_time: new Date().toISOString(),
  });
};

// Save session
const saveSession = (session: SessionData): void => {
  try {
    const sessions = getSessions();
    const index = sessions.findIndex(s => s.id === session.id);
    
    if (index >= 0) {
      sessions[index] = session;
    } else {
      sessions.push(session);
    }
    
    // Keep only last 100 sessions
    const trimmedSessions = sessions.slice(-100);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(trimmedSessions));
  } catch (e) {
    console.warn("Failed to save session:", e);
  }
};

// Get all sessions
export const getSessions = (): SessionData[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Get heatmap data
export const getHeatmapData = (): HeatmapPoint[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HEATMAP);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save analytics event
export const saveEvent = (event: Omit<AnalyticsEvent, "timestamp">): void => {
  try {
    const events = getEvents();
    events.push({ ...event, timestamp: Date.now() });
    
    // Keep only last 500 events
    const trimmedEvents = events.slice(-500);
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(trimmedEvents));
    
    // Track event to Supabase
    const session = getCurrentSession();
    trackToSupabase("event", {
      session_id: session.id,
      event_type: event.type,
      event_name: event.name,
      event_data: event.data,
      page_path: window.location.pathname,
    });
  } catch (e) {
    console.warn("Failed to save event:", e);
  }
};

// Track conversion
export const trackConversion = (
  conversionType: string,
  ctaLocation?: string,
  ctaText?: string,
  amount?: number
): void => {
  try {
    const session = getCurrentSession();
    const variants = getABVariants();
    
    trackToSupabase("conversion", {
      session_id: session.id,
      ab_variant_color: variants.color,
      ab_variant_restaurant: variants.restaurant,
      conversion_type: conversionType,
      cta_location: ctaLocation,
      cta_text: ctaText,
      amount: amount,
      page_path: window.location.pathname,
    });
    
    // Also save as local event
    saveEvent({
      type: "conversion",
      name: conversionType,
      data: { ctaLocation, ctaText, amount },
    });
  } catch (e) {
    console.warn("Failed to track conversion:", e);
  }
};

// Track heatmap click
export const trackHeatmapClick = (
  x: number,
  y: number,
  elementPath?: string
): void => {
  try {
    const session = getCurrentSession();
    
    // Save locally
    const heatmapData = getHeatmapData();
    heatmapData.push({
      x,
      y,
      value: 1,
      timestamp: Date.now(),
      type: "click",
      path: elementPath || "",
    });
    
    // Keep only last 1000 points
    const trimmed = heatmapData.slice(-1000);
    localStorage.setItem(STORAGE_KEYS.HEATMAP, JSON.stringify(trimmed));
    
    // Track to Supabase
    trackToSupabase("heatmap", {
      session_id: session.id,
      x: x / window.innerWidth,
      y: y / document.documentElement.scrollHeight,
      interaction_type: "click",
      element_path: elementPath,
      page_path: window.location.pathname,
    });
  } catch (e) {
    console.warn("Failed to track heatmap click:", e);
  }
};

// Get all events
export const getEvents = (): AnalyticsEvent[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Calculate analytics metrics
export const calculateMetrics = () => {
  const sessions = getSessions();
  const heatmap = getHeatmapData();
  const events = getEvents();
  
  // Session metrics
  const totalSessions = sessions.length;
  const avgSessionDuration = sessions.reduce((acc, s) => {
    const duration = (s.endTime || Date.now()) - s.startTime;
    return acc + duration;
  }, 0) / (totalSessions || 1);
  
  // Device breakdown
  const deviceBreakdown = sessions.reduce((acc, s) => {
    acc[s.device] = (acc[s.device] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Scroll depth analysis
  const scrollDepths = sessions.flatMap(s => s.scrollDepths);
  const avgScrollDepth = scrollDepths.length > 0 
    ? scrollDepths.reduce((a, b) => a + b, 0) / scrollDepths.length 
    : 0;
  
  // Click hotspots
  const clicks = heatmap.filter(p => p.type === "click");
  const clicksByElement = clicks.reduce((acc, c) => {
    if (c.path) {
      acc[c.path] = (acc[c.path] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  // Top clicked elements
  const topClickedElements = Object.entries(clicksByElement)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  // Exit pages (last page in session)
  const exitPages = sessions
    .filter(s => s.exitPage || s.pageViews.length > 0)
    .map(s => s.exitPage || s.pageViews[s.pageViews.length - 1]);
  
  const exitPageBreakdown = exitPages.reduce((acc, page) => {
    acc[page] = (acc[page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Bounce rate (single page sessions)
  const bounces = sessions.filter(s => s.pageViews.length === 1).length;
  const bounceRate = (bounces / (totalSessions || 1)) * 100;
  
  // Events by type
  const eventsByType = events.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // A/B variant breakdown
  const variantBreakdown = {
    blue: sessions.filter(s => s.abVariantColor === "blue").length,
    red: sessions.filter(s => s.abVariantColor === "red").length,
  };
  
  return {
    totalSessions,
    avgSessionDuration,
    deviceBreakdown,
    avgScrollDepth,
    topClickedElements,
    exitPageBreakdown,
    bounceRate,
    eventsByType,
    totalClicks: clicks.length,
    totalEvents: events.length,
    variantBreakdown,
  };
};

// Clear all analytics data
export const clearAllAnalytics = (): void => {
  localStorage.removeItem(STORAGE_KEYS.HEATMAP);
  localStorage.removeItem(STORAGE_KEYS.SESSIONS);
  localStorage.removeItem(STORAGE_KEYS.EVENTS);
  sessionStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
};
