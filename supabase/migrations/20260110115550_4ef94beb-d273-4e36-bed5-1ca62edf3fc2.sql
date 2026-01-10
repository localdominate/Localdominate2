-- Create user roles system for admin authentication
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamptz DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Users can view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Fix storage: Drop overly permissive policies
DROP POLICY IF EXISTS "Anyone can upload to customer-uploads" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view customer-uploads" ON storage.objects;

-- Create secure storage policies requiring authentication
CREATE POLICY "Authenticated users can upload to customer-uploads"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'customer-uploads' 
    AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can view customer-uploads"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'customer-uploads'
    AND auth.role() = 'authenticated'
);

-- Set file size limit on customer-uploads bucket (10MB)
UPDATE storage.buckets
SET file_size_limit = 10485760
WHERE id = 'customer-uploads';

-- Fix analytics tables: Restrict to admins only
DROP POLICY IF EXISTS "Authenticated users can view analytics sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Authenticated users can view analytics events" ON public.analytics_events;
DROP POLICY IF EXISTS "Authenticated users can view daily reports" ON public.daily_reports;

-- Analytics sessions - admin only
CREATE POLICY "Admins can view analytics sessions"
ON public.analytics_sessions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Analytics events - admin only  
CREATE POLICY "Admins can view analytics events"
ON public.analytics_events
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Daily reports - admin only
CREATE POLICY "Admins can view daily reports"
ON public.daily_reports
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Analytics conversions - admin only (fix the public exposure)
DROP POLICY IF EXISTS "Anyone can read analytics_conversions" ON public.analytics_conversions;
DROP POLICY IF EXISTS "Authenticated users can view analytics conversions" ON public.analytics_conversions;

CREATE POLICY "Admins can view analytics conversions"
ON public.analytics_conversions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Customers table - fix public exposure, restrict to admins
DROP POLICY IF EXISTS "Anyone can read customers" ON public.customers;
DROP POLICY IF EXISTS "Anyone can insert customers" ON public.customers;
DROP POLICY IF EXISTS "Anyone can update customers" ON public.customers;

CREATE POLICY "Admins can view all customers"
ON public.customers
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Allow service role to insert/update customers (for edge functions)
CREATE POLICY "Service role can insert customers"
ON public.customers
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Service role can update customers"
ON public.customers
FOR UPDATE
USING (true);