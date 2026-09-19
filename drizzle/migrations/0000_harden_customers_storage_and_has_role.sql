-- 1. Move SECURITY DEFINER helper out of the API-exposed schema
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

ALTER FUNCTION public.has_role(uuid, app_role) SET SCHEMA private;
ALTER FUNCTION private.has_role(uuid, app_role) SET search_path = public;
REVOKE ALL ON FUNCTION private.has_role(uuid, app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, app_role) TO authenticated, service_role;

-- 2. Remove wide-open write access to customers (service_role bypasses RLS)
DROP POLICY IF EXISTS "Customers can insert with session" ON public.customers;
DROP POLICY IF EXISTS "Service role can insert customers" ON public.customers;
DROP POLICY IF EXISTS "Service role can update customers" ON public.customers;

REVOKE INSERT, UPDATE ON public.customers FROM anon;
GRANT ALL ON public.customers TO service_role;

-- 3. Lock down reads of the (now private) customer-uploads bucket
DROP POLICY IF EXISTS "Allow public read for customer-uploads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can view customer-uploads" ON storage.objects;

CREATE POLICY "Admins can view customer-uploads"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'customer-uploads' AND private.has_role(auth.uid(), 'admin'::app_role));
