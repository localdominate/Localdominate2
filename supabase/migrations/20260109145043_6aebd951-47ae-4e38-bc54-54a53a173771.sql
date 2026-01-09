-- Add new columns to ab_tests for test management
ALTER TABLE public.ab_tests 
ADD COLUMN IF NOT EXISTS is_ready boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS config jsonb DEFAULT '{}'::jsonb;

-- Add INSERT policy for ab_tests
CREATE POLICY "Allow public insert ab_tests" 
ON public.ab_tests 
FOR INSERT 
WITH CHECK (true);

-- Add UPDATE policy for ab_tests
CREATE POLICY "Allow public update ab_tests" 
ON public.ab_tests 
FOR UPDATE 
USING (true);

-- Add DELETE policy for ab_tests
CREATE POLICY "Allow public delete ab_tests" 
ON public.ab_tests 
FOR DELETE 
USING (true);

-- Insert pre-configured tests that are ready to be activated
INSERT INTO public.ab_tests (test_id, name, description, variants, status, is_ready, config, target_sample_size)
VALUES 
  ('headline_emotional_rational', 'Headline: Emotional vs. Rational', 'Testet emotionale gegen rationale Ansprache in der Hero-Section', 
   '["emotional", "rational"]'::jsonb, 'paused', true, 
   '{"component": "HeroSection", "type": "headline", "variants": {"emotional": "Schluss mit Unsichtbarkeit – Dein Business verdient mehr Kunden!", "rational": "Steigern Sie Ihre lokale Sichtbarkeit um durchschnittlich 340%"}}'::jsonb, 
   1000),
  ('price_display_variant', 'Preis-Darstellung', 'Verschiedene Preisdarstellungen testen: Einmalpreis, Tagespreis, Ersparnis',
   '["einmalpreis", "tagespreis", "ersparnis"]'::jsonb, 'paused', true,
   '{"component": "OfferSection", "type": "price", "variants": {"einmalpreis": "299€", "tagespreis": "unter 1€/Tag", "ersparnis": "spart 2.000€/Jahr"}}'::jsonb,
   1000),
  ('social_proof_position', 'Social Proof Position', 'Testet verschiedene Positionen für Trust-Elemente',
   '["hero", "after_pain", "before_cta"]'::jsonb, 'paused', true,
   '{"component": "TrustBadges", "type": "position", "variants": {"hero": "In Hero-Section", "after_pain": "Nach Pain-Section", "before_cta": "Direkt vor CTA"}}'::jsonb,
   1000),
  ('urgency_elements', 'Urgency-Elemente', 'Verschiedene Dringlichkeitselemente testen',
   '["countdown", "spots", "keine"]'::jsonb, 'paused', true,
   '{"component": "HeroSection", "type": "urgency", "variants": {"countdown": "Countdown-Timer", "spots": "Nur noch X Plätze", "keine": "Keine Urgency"}}'::jsonb,
   1000),
  ('cta_text_variant', 'CTA-Text Varianten', 'Verschiedene CTA-Texte A/B testen',
   '["jetzt_starten", "kostenlos", "sichern"]'::jsonb, 'paused', true,
   '{"component": "AllCTAs", "type": "cta_text", "variants": {"jetzt_starten": "Jetzt starten", "kostenlos": "Kostenlos testen", "sichern": "Platz sichern"}}'::jsonb,
   1000),
  ('exit_intent_timing', 'Exit-Intent Timing', 'Wann soll das Exit-Intent Popup erscheinen?',
   '["sofort", "30s", "50_scroll"]'::jsonb, 'paused', true,
   '{"component": "ExitIntentPopup", "type": "timing", "variants": {"sofort": "Bei erstem Exit-Intent", "30s": "Nach 30 Sekunden", "50_scroll": "Nach 50% Scroll"}}'::jsonb,
   1000),
  ('mobile_cta_style', 'Mobile Sticky CTA', 'Verschiedene Mobile CTA Styles testen',
   '["footer", "floating", "minimal"]'::jsonb, 'paused', true,
   '{"component": "MobileStickyBar", "type": "style", "variants": {"footer": "Footer-Bar", "floating": "Floating Button", "minimal": "Nur im Content"}}'::jsonb,
   1000),
  ('testimonial_format', 'Testimonial-Format', 'Video vs. Text Testimonials',
   '["text", "video", "mixed"]'::jsonb, 'paused', true,
   '{"component": "TestimonialsSection", "type": "format", "variants": {"text": "Nur Text", "video": "Mit Video", "mixed": "Gemischt"}}'::jsonb,
   1000)
ON CONFLICT (test_id) DO NOTHING;