-- Create auto_test_queue table for test management
CREATE TABLE public.auto_test_queue (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  element_type TEXT NOT NULL,
  element_id TEXT NOT NULL,
  variants_to_test JSONB NOT NULL DEFAULT '[]'::jsonb,
  tested_variants JSONB NOT NULL DEFAULT '[]'::jsonb,
  current_variant_a TEXT,
  current_variant_b TEXT,
  current_winner TEXT,
  status TEXT NOT NULL DEFAULT 'waiting',
  priority INTEGER NOT NULL DEFAULT 0,
  max_variants INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(element_type, element_id)
);

-- Create optimized_elements table for storing winners
CREATE TABLE public.optimized_elements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  element_type TEXT NOT NULL,
  element_id TEXT NOT NULL,
  winning_value TEXT NOT NULL,
  test_history JSONB NOT NULL DEFAULT '[]'::jsonb,
  locked_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(element_type, element_id)
);

-- Add auto-optimizer columns to ab_tests
ALTER TABLE public.ab_tests 
ADD COLUMN IF NOT EXISTS traffic_split_a INTEGER DEFAULT 75,
ADD COLUMN IF NOT EXISTS traffic_split_b INTEGER DEFAULT 25,
ADD COLUMN IF NOT EXISTS auto_managed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS element_type TEXT,
ADD COLUMN IF NOT EXISTS element_id TEXT;

-- Enable RLS
ALTER TABLE public.auto_test_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.optimized_elements ENABLE ROW LEVEL SECURITY;

-- RLS policies for auto_test_queue
CREATE POLICY "Allow public read auto_test_queue" ON public.auto_test_queue FOR SELECT USING (true);
CREATE POLICY "Allow public insert auto_test_queue" ON public.auto_test_queue FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update auto_test_queue" ON public.auto_test_queue FOR UPDATE USING (true);
CREATE POLICY "Allow public delete auto_test_queue" ON public.auto_test_queue FOR DELETE USING (true);

-- RLS policies for optimized_elements
CREATE POLICY "Allow public read optimized_elements" ON public.optimized_elements FOR SELECT USING (true);
CREATE POLICY "Allow public insert optimized_elements" ON public.optimized_elements FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update optimized_elements" ON public.optimized_elements FOR UPDATE USING (true);

-- Triggers for updated_at
CREATE TRIGGER update_auto_test_queue_updated_at
BEFORE UPDATE ON public.auto_test_queue
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_optimized_elements_updated_at
BEFORE UPDATE ON public.optimized_elements
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial test queue with all testable elements
INSERT INTO public.auto_test_queue (element_type, element_id, variants_to_test, priority, status) VALUES
('cta_color', 'all_ctas', '["primary", "green", "orange", "purple", "red"]', 1, 'waiting'),
('cta_text', 'hero_cta', '["Jetzt Local SEO Audit sichern", "Kostenlos starten", "Platz sichern", "Jetzt durchstarten", "Angebot sichern"]', 2, 'waiting'),
('cta_text', 'offer_cta', '["Jetzt Local SEO Audit sichern", "Audit starten", "Platz sichern", "Jetzt kaufen", "Angebot nutzen"]', 3, 'waiting'),
('headline_style', 'hero', '["emotional", "rational", "question", "benefit", "fear"]', 4, 'waiting'),
('price_display', 'offer', '["standard", "daily", "savings", "comparison", "roi"]', 5, 'waiting'),
('urgency_type', 'hero', '["countdown", "spots", "time_limited", "social", "none"]', 6, 'waiting'),
('trust_position', 'global', '["hero", "after_pain", "before_cta", "floating", "multiple"]', 7, 'waiting');

-- Insert default optimized elements (starting values)
INSERT INTO public.optimized_elements (element_type, element_id, winning_value, test_history) VALUES
('cta_color', 'all_ctas', 'primary', '[]'),
('cta_text', 'hero_cta', 'Jetzt Local SEO Audit sichern', '[]'),
('cta_text', 'offer_cta', 'Jetzt Local SEO Audit sichern', '[]'),
('headline_style', 'hero', 'emotional', '[]'),
('price_display', 'offer', 'standard', '[]'),
('urgency_type', 'hero', 'countdown', '[]'),
('trust_position', 'global', 'hero', '[]');