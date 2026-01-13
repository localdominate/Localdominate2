-- Remove public read access policy from customers table
-- This exposes sensitive customer data (emails, phones, addresses, etc.)
-- Admin-only policy already exists from migration 20260110115550

DROP POLICY IF EXISTS "Allow public read access to customers" ON public.customers;