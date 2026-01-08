-- Neue Tabelle für A/B-Tests
CREATE TABLE IF NOT EXISTS public.ab_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  variants JSONB NOT NULL DEFAULT '[]',
  status TEXT DEFAULT 'running' CHECK (status IN ('running', 'paused', 'completed')),
  start_date TIMESTAMPTZ DEFAULT NOW(),
  end_date TIMESTAMPTZ,
  target_sample_size INTEGER DEFAULT 1000,
  winning_variant TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Erweitere analytics_conversions für Blog-CTA-Tracking
ALTER TABLE public.analytics_conversions
ADD COLUMN IF NOT EXISTS blog_article_slug TEXT,
ADD COLUMN IF NOT EXISTS blog_cta_position TEXT,
ADD COLUMN IF NOT EXISTS blog_cta_variant TEXT,
ADD COLUMN IF NOT EXISTS ab_test_id TEXT;

-- Neue Tabelle für A/B-Test-Views (Impressionen)
CREATE TABLE IF NOT EXISTS public.ab_test_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  test_id TEXT NOT NULL,
  variant TEXT NOT NULL,
  page_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index für schnelle Abfragen
CREATE INDEX IF NOT EXISTS idx_ab_test_views_test_id ON public.ab_test_views(test_id);
CREATE INDEX IF NOT EXISTS idx_ab_test_views_session_id ON public.ab_test_views(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_blog ON public.analytics_conversions(blog_article_slug, blog_cta_position);

-- RLS aktivieren
ALTER TABLE public.ab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_test_views ENABLE ROW LEVEL SECURITY;

-- Öffentliche Lesepolitik für A/B-Tests (für Dashboard)
CREATE POLICY "Allow public read ab_tests" ON public.ab_tests FOR SELECT USING (true);

-- Öffentliche Insert-Politik für Views
CREATE POLICY "Allow public insert ab_test_views" ON public.ab_test_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read ab_test_views" ON public.ab_test_views FOR SELECT USING (true);

-- Trigger für updated_at
CREATE TRIGGER update_ab_tests_updated_at
BEFORE UPDATE ON public.ab_tests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Initiale A/B-Tests einfügen
INSERT INTO public.ab_tests (test_id, name, description, variants, status) VALUES
('color_theme', 'Farbschema Test', 'Globaler Test: Blau vs. Rot Theme', '["blue", "red"]', 'running'),
('exit_intent', 'Exit Intent Popup', 'Rabatt vs. Bonus Angebot', '["discount", "bonus"]', 'running'),
('blog_cta_color', 'Blog CTA Farbe', 'Blau vs. Rot CTA-Buttons in Blog-Artikeln', '["blue", "red"]', 'running')
ON CONFLICT (test_id) DO NOTHING;