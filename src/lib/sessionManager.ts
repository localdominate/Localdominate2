// Zentrales Session-Management für einheitliche Session-IDs und A/B-Varianten
// Dieses Modul stellt sicher, dass alle Tracking-Systeme dieselbe Session-ID verwenden

const STORAGE_KEYS = {
  UNIFIED_SESSION_ID: 'unified_session_id',
  AB_VARIANT: 'auto_optimizer_variant',
  AB_TEST_ID: 'current_ab_test_id',
  SESSION_START_TIME: 'session_start_time',
};

export interface SessionInfo {
  sessionId: string;
  variant: 'A' | 'B';
  testId: string | null;
  startTime: number;
}

// Generate a unique session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create a unified session ID - single source of truth
export const getSessionId = (): string => {
  // Try sessionStorage first (current tab)
  let sessionId = sessionStorage.getItem(STORAGE_KEYS.UNIFIED_SESSION_ID);
  
  if (!sessionId) {
    // Generate new session ID
    sessionId = generateSessionId();
    sessionStorage.setItem(STORAGE_KEYS.UNIFIED_SESSION_ID, sessionId);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_START_TIME, Date.now().toString());
    
    // Also save to localStorage for cross-tab consistency
    localStorage.setItem(STORAGE_KEYS.UNIFIED_SESSION_ID, sessionId);
    localStorage.setItem(STORAGE_KEYS.SESSION_START_TIME, Date.now().toString());
    
    console.log('[SessionManager] Created new session:', sessionId);
  }
  
  return sessionId;
};

// Get or set the A/B variant
export const getVariant = (): 'A' | 'B' => {
  const storedVariant = sessionStorage.getItem(STORAGE_KEYS.AB_VARIANT);
  
  if (storedVariant === 'A' || storedVariant === 'B') {
    return storedVariant;
  }
  
  // Determine variant based on 50/50 split
  const variant = Math.random() < 0.5 ? 'A' : 'B';
  sessionStorage.setItem(STORAGE_KEYS.AB_VARIANT, variant);
  localStorage.setItem(STORAGE_KEYS.AB_VARIANT, variant);
  
  console.log('[SessionManager] Assigned variant:', variant);
  return variant;
};

// Set the variant explicitly (used by AutoOptimizer)
export const setVariant = (variant: 'A' | 'B'): void => {
  sessionStorage.setItem(STORAGE_KEYS.AB_VARIANT, variant);
  localStorage.setItem(STORAGE_KEYS.AB_VARIANT, variant);
};

// Get or set the current test ID
export const getTestId = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEYS.AB_TEST_ID);
};

export const setTestId = (testId: string | null): void => {
  if (testId) {
    sessionStorage.setItem(STORAGE_KEYS.AB_TEST_ID, testId);
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.AB_TEST_ID);
  }
};

// Get session start time
export const getSessionStartTime = (): number => {
  const stored = sessionStorage.getItem(STORAGE_KEYS.SESSION_START_TIME);
  return stored ? parseInt(stored, 10) : Date.now();
};

// Get complete session info
export const getSessionInfo = (): SessionInfo => {
  return {
    sessionId: getSessionId(),
    variant: getVariant(),
    testId: getTestId(),
    startTime: getSessionStartTime(),
  };
};

// Calculate current session duration in ms
export const getSessionDuration = (): number => {
  return Date.now() - getSessionStartTime();
};

// Check if this session has already been tracked for a specific test
export const hasTrackedView = (testId: string): boolean => {
  const viewKey = `tracked_view_${testId}`;
  return sessionStorage.getItem(viewKey) === 'true';
};

// Mark a test view as tracked
export const markViewTracked = (testId: string): void => {
  const viewKey = `tracked_view_${testId}`;
  sessionStorage.setItem(viewKey, 'true');
};

// Export all keys for debugging
export const getStorageKeys = () => STORAGE_KEYS;
