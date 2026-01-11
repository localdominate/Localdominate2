
-- Drop restrictive policies and create permissive ones for customers table
-- The current RESTRICTIVE policies block all access when user is not logged in

DROP POLICY IF EXISTS "Customers can view own data by session" ON public.customers;

CREATE POLICY "Allow public read access to customers"
ON public.customers
FOR SELECT
USING (true);
