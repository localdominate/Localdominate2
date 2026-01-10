-- Drop overly permissive public SELECT policies on analytics tables
DROP POLICY IF EXISTS "Allow public select for analytics_sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Allow public select for analytics_events" ON public.analytics_events;
DROP POLICY IF EXISTS "Allow public select for daily_reports" ON public.daily_reports;

-- Create restricted SELECT policies that only allow authenticated users
-- This prevents competitors from reading analytics data while still allowing public INSERT for tracking

CREATE POLICY "Authenticated users can select analytics_sessions"
  ON public.analytics_sessions FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can select analytics_events"
  ON public.analytics_events FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can select daily_reports"
  ON public.daily_reports FOR SELECT
  USING (auth.uid() IS NOT NULL);