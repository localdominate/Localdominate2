-- Add payment tracking columns to customers table
ALTER TABLE public.customers 
ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS payment_amount numeric,
ADD COLUMN IF NOT EXISTS payment_completed_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS stripe_customer_id text;

-- Add payment_verified column to analytics_conversions
ALTER TABLE public.analytics_conversions
ADD COLUMN IF NOT EXISTS payment_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS stripe_session_id text;