-- Analytics Sessions Table
CREATE TABLE public.analytics_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_time TIMESTAMP WITH TIME ZONE,
  page_views INTEGER DEFAULT 0,
  scroll_depths INTEGER[] DEFAULT '{}',
  entry_page TEXT,
  exit_page TEXT,
  device TEXT,
  referrer TEXT,
  user_agent TEXT,
  ab_variant_color TEXT,
  ab_variant_restaurant TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Analytics Events Table
CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_name TEXT,
  event_data JSONB DEFAULT '{}',
  page_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Analytics Conversions Table
CREATE TABLE public.analytics_conversions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT,
  ab_variant_color TEXT,
  ab_variant_restaurant TEXT,
  conversion_type TEXT NOT NULL,
  cta_location TEXT,
  cta_text TEXT,
  amount DECIMAL(10,2),
  page_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Analytics Heatmap Table
CREATE TABLE public.analytics_heatmap (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT,
  x DECIMAL(10,4) NOT NULL,
  y DECIMAL(10,4) NOT NULL,
  interaction_type TEXT DEFAULT 'click',
  element_path TEXT,
  page_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Daily Reports Table
CREATE TABLE public.daily_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  report_date DATE NOT NULL UNIQUE,
  total_sessions INTEGER DEFAULT 0,
  total_conversions INTEGER DEFAULT 0,
  total_revenue DECIMAL(10,2) DEFAULT 0,
  variant_analysis JSONB DEFAULT '{}',
  sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_heatmap ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_reports ENABLE ROW LEVEL SECURITY;

-- Public insert policies (for tracking from frontend)
CREATE POLICY "Allow public insert for analytics_sessions"
ON public.analytics_sessions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for analytics_sessions"
ON public.analytics_sessions FOR UPDATE
USING (true);

CREATE POLICY "Allow public select for analytics_sessions"
ON public.analytics_sessions FOR SELECT
USING (true);

CREATE POLICY "Allow public insert for analytics_events"
ON public.analytics_events FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public select for analytics_events"
ON public.analytics_events FOR SELECT
USING (true);

CREATE POLICY "Allow public insert for analytics_conversions"
ON public.analytics_conversions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public select for analytics_conversions"
ON public.analytics_conversions FOR SELECT
USING (true);

CREATE POLICY "Allow public insert for analytics_heatmap"
ON public.analytics_heatmap FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public select for analytics_heatmap"
ON public.analytics_heatmap FOR SELECT
USING (true);

CREATE POLICY "Allow public insert for daily_reports"
ON public.daily_reports FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for daily_reports"
ON public.daily_reports FOR UPDATE
USING (true);

CREATE POLICY "Allow public select for daily_reports"
ON public.daily_reports FOR SELECT
USING (true);

-- Indexes for performance
CREATE INDEX idx_analytics_sessions_session_id ON public.analytics_sessions(session_id);
CREATE INDEX idx_analytics_sessions_created_at ON public.analytics_sessions(created_at);
CREATE INDEX idx_analytics_events_session_id ON public.analytics_events(session_id);
CREATE INDEX idx_analytics_events_created_at ON public.analytics_events(created_at);
CREATE INDEX idx_analytics_conversions_created_at ON public.analytics_conversions(created_at);
CREATE INDEX idx_analytics_heatmap_page_path ON public.analytics_heatmap(page_path);
CREATE INDEX idx_daily_reports_report_date ON public.daily_reports(report_date);