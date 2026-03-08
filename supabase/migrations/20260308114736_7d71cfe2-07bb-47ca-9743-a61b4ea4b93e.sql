CREATE TABLE public.conversion_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_date date NOT NULL DEFAULT CURRENT_DATE,
  total_sessions integer DEFAULT 0,
  total_conversions integer DEFAULT 0,
  total_leads integer DEFAULT 0,
  conversion_rate numeric DEFAULT 0,
  lead_rate numeric DEFAULT 0,
  cta_click_rate numeric DEFAULT 0,
  checkout_completion_rate numeric DEFAULT 0,
  avg_engagement_score numeric DEFAULT 0,
  avg_time_to_first_cta_seconds numeric DEFAULT 0,
  funnel_data jsonb DEFAULT '[]'::jsonb,
  cta_by_location jsonb DEFAULT '[]'::jsonb,
  lead_sources jsonb DEFAULT '[]'::jsonb,
  top_pages jsonb DEFAULT '[]'::jsonb,
  recommendations jsonb DEFAULT '[]'::jsonb,
  notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

ALTER TABLE public.conversion_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage conversion_reports"
  ON public.conversion_reports
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));