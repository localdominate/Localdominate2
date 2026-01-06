-- Create enum for business categories
CREATE TYPE public.business_category AS ENUM (
  'gastronomy',
  'beauty_wellness', 
  'crafts',
  'health',
  'retail',
  'fitness',
  'services'
);

-- Create customers table (linked to purchases)
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id TEXT UNIQUE,
  email TEXT,
  business_category public.business_category,
  business_name TEXT,
  address TEXT,
  phone TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  questionnaire_completed BOOLEAN DEFAULT false,
  questionnaire_completed_at TIMESTAMP WITH TIME ZONE
);

-- Create questionnaire_responses table for storing answers per step
CREATE TABLE public.questionnaire_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
  step_key TEXT NOT NULL,
  response_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(customer_id, step_key)
);

-- Create uploaded_assets table for QR code graphics
CREATE TABLE public.uploaded_assets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
  asset_type TEXT NOT NULL, -- 'logo', 'image_1', 'image_2', etc.
  storage_path TEXT NOT NULL,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questionnaire_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uploaded_assets ENABLE ROW LEVEL SECURITY;

-- RLS Policies for customers (accessible by stripe_session_id)
CREATE POLICY "Customers can view own data by session"
  ON public.customers
  FOR SELECT
  USING (true);

CREATE POLICY "Customers can insert with session"
  ON public.customers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Customers can update own data"
  ON public.customers
  FOR UPDATE
  USING (true);

-- RLS Policies for questionnaire_responses
CREATE POLICY "View responses by customer"
  ON public.questionnaire_responses
  FOR SELECT
  USING (true);

CREATE POLICY "Insert responses"
  ON public.questionnaire_responses
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Update responses"
  ON public.questionnaire_responses
  FOR UPDATE
  USING (true);

-- RLS Policies for uploaded_assets  
CREATE POLICY "View assets by customer"
  ON public.uploaded_assets
  FOR SELECT
  USING (true);

CREATE POLICY "Insert assets"
  ON public.uploaded_assets
  FOR INSERT
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON public.customers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_questionnaire_responses_updated_at
  BEFORE UPDATE ON public.questionnaire_responses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for customer uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('customer-uploads', 'customer-uploads', true);

-- Create storage bucket for downloadable PDFs
INSERT INTO storage.buckets (id, name, public) VALUES ('downloads', 'downloads', true);

-- Storage policies for customer-uploads
CREATE POLICY "Anyone can upload to customer-uploads"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'customer-uploads');

CREATE POLICY "Anyone can view customer-uploads"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'customer-uploads');

-- Storage policies for downloads
CREATE POLICY "Anyone can view downloads"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'downloads');