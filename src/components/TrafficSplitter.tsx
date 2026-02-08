import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "bc_test_variant_2026";
const TEST_ID = "bc_test_2026";

type Variant = "A" | "B";

/**
 * TrafficSplitter – Renders on the "/" route.
 * Assigns new visitors to variant A or B (50/50), persists in localStorage.
 * Variant B users get redirected to /test-b.
 * Variant A users see the normal Index page (children).
 */
const TrafficSplitter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only run on the root path
    if (location.pathname !== "/") {
      setReady(true);
      return;
    }

    // Check if user already has a variant assigned
    let variant = localStorage.getItem(STORAGE_KEY) as Variant | null;

    if (!variant) {
      // Assign 50/50 split
      variant = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem(STORAGE_KEY, variant);

      // Track assignment in GA4
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "ab_test_assignment", {
          test_id: TEST_ID,
          test_variant: variant,
        });
      }

      // Track assignment in database
      const sessionId = sessionStorage.getItem("unified_session_id") || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      supabase.from("ab_test_views").insert({
        session_id: sessionId,
        test_id: TEST_ID,
        variant: variant,
        page_url: "/",
      }).then(() => {});
    }

    if (variant === "B") {
      navigate("/test-b", { replace: true });
      return;
    }

    setReady(true);
  }, [location.pathname, navigate]);

  if (!ready) return null;

  return <>{children}</>;
};

export default TrafficSplitter;
