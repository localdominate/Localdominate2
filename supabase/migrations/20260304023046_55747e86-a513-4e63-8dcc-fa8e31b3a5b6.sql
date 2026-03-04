CREATE TABLE public.partner_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT,
  sales_experience TEXT,
  preferred_method TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.partner_applications
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin can view all" ON public.partner_applications
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));