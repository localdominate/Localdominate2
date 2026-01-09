-- Tabelle für erweiterte A/B-Test Engagement-Metriken
CREATE TABLE public.ab_test_engagement (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  test_id TEXT NOT NULL,
  variant TEXT NOT NULL,
  
  -- Zeit-Metriken
  session_duration_ms INTEGER,
  time_to_first_cta_ms INTEGER,
  time_on_offer_section_ms INTEGER,
  time_to_first_click_ms INTEGER,
  
  -- Scroll-Metriken
  scroll_to_cta_percent INTEGER,
  scroll_past_cta BOOLEAN DEFAULT FALSE,
  max_scroll_depth INTEGER,
  
  -- Engagement-Metriken
  cta_hover_count INTEGER DEFAULT 0,
  cta_hover_duration_ms INTEGER DEFAULT 0,
  price_hover_duration_ms INTEGER DEFAULT 0,
  element_interactions INTEGER DEFAULT 0,
  
  -- Conversion-Funnel
  viewed_hero BOOLEAN DEFAULT FALSE,
  viewed_offer BOOLEAN DEFAULT FALSE,
  viewed_testimonials BOOLEAN DEFAULT FALSE,
  viewed_cta BOOLEAN DEFAULT FALSE,
  clicked_cta BOOLEAN DEFAULT FALSE,
  started_checkout BOOLEAN DEFAULT FALSE,
  completed_checkout BOOLEAN DEFAULT FALSE,
  
  -- Qualitative Signale
  engagement_score INTEGER DEFAULT 0,
  intent_score INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Erweiterte Heatmap-Tabelle
CREATE TABLE public.analytics_heatmap_enhanced (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  
  -- Position (normalisiert 0-100)
  x_percent DECIMAL(5,2),
  y_percent DECIMAL(5,2),
  
  -- Element-Info
  element_selector TEXT,
  element_type TEXT,
  element_text TEXT,
  section_name TEXT,
  
  -- Interaktion
  interaction_type TEXT,
  hover_duration_ms INTEGER,
  
  -- Kontext
  page_path TEXT,
  device TEXT,
  ab_variant TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER,
  
  -- Analyse-Flags
  is_dead_click BOOLEAN DEFAULT FALSE,
  is_rage_click BOOLEAN DEFAULT FALSE,
  is_missed_cta BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Keyword-Performance-Tabelle
CREATE TABLE public.keyword_performance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword TEXT NOT NULL,
  source TEXT,
  
  -- Performance-Metriken
  impressions INTEGER DEFAULT 0,
  sessions INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  
  -- Engagement
  avg_session_duration_ms INTEGER DEFAULT 0,
  avg_scroll_depth INTEGER DEFAULT 0,
  bounce_rate DECIMAL(5,2) DEFAULT 0,
  
  -- Zeitraum
  date DATE NOT NULL,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(keyword, source, date)
);

-- RLS aktivieren
ALTER TABLE public.ab_test_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_heatmap_enhanced ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keyword_performance ENABLE ROW LEVEL SECURITY;

-- RLS Policies für ab_test_engagement
CREATE POLICY "Allow public insert ab_test_engagement" 
ON public.ab_test_engagement FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select ab_test_engagement" 
ON public.ab_test_engagement FOR SELECT 
USING (true);

CREATE POLICY "Allow public update ab_test_engagement" 
ON public.ab_test_engagement FOR UPDATE 
USING (true);

-- RLS Policies für analytics_heatmap_enhanced
CREATE POLICY "Allow public insert analytics_heatmap_enhanced" 
ON public.analytics_heatmap_enhanced FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select analytics_heatmap_enhanced" 
ON public.analytics_heatmap_enhanced FOR SELECT 
USING (true);

-- RLS Policies für keyword_performance
CREATE POLICY "Allow public insert keyword_performance" 
ON public.keyword_performance FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select keyword_performance" 
ON public.keyword_performance FOR SELECT 
USING (true);

CREATE POLICY "Allow public update keyword_performance" 
ON public.keyword_performance FOR UPDATE 
USING (true);

-- Indizes für Performance
CREATE INDEX idx_ab_test_engagement_session ON public.ab_test_engagement(session_id);
CREATE INDEX idx_ab_test_engagement_test ON public.ab_test_engagement(test_id, variant);
CREATE INDEX idx_heatmap_enhanced_session ON public.analytics_heatmap_enhanced(session_id);
CREATE INDEX idx_heatmap_enhanced_type ON public.analytics_heatmap_enhanced(interaction_type);
CREATE INDEX idx_heatmap_enhanced_flags ON public.analytics_heatmap_enhanced(is_rage_click, is_dead_click);
CREATE INDEX idx_keyword_performance_date ON public.keyword_performance(date);
CREATE INDEX idx_keyword_performance_keyword ON public.keyword_performance(keyword);