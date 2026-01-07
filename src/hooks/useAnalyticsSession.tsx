import { useEffect, useRef } from "react";
import { getCurrentSession, updateSession, saveEvent } from "@/lib/analyticsStorage";

const useAnalyticsSession = () => {
  const initialized = useRef(false);
  const maxScrollDepth = useRef(0);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Initialize session
    const session = getCurrentSession();
    
    // Track page view
    saveEvent({ type: "page_view", name: window.location.pathname });

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;
      }
    };

    // Track before unload (exit)
    const handleBeforeUnload = () => {
      updateSession({
        exitPage: window.location.pathname,
        scrollDepths: [...(session.scrollDepths || []), maxScrollDepth.current],
      });
    };

    // Track visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateSession({
          scrollDepths: [...(session.scrollDepths || []), maxScrollDepth.current],
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};

export default useAnalyticsSession;
