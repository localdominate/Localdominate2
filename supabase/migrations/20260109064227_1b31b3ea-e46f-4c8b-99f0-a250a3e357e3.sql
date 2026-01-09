-- Add is_seeded column to mark test customers
ALTER TABLE public.customers ADD COLUMN is_seeded boolean DEFAULT false;

-- Mark existing seeded customers (Pizzeria Bella Italia)
UPDATE public.customers SET is_seeded = true WHERE business_name = 'Pizzeria Bella Italia';