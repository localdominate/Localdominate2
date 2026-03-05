
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  business_name text,
  phone text,
  source_page text,
  source_cta text,
  lead_type text DEFAULT 'blog_cta',
  status text DEFAULT 'new',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  session_id text,
  ab_variant text,
  notes text
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view leads" ON public.leads FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update leads" ON public.leads FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete leads" ON public.leads FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
