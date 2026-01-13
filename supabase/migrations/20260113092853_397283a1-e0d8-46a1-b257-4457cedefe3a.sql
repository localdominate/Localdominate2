-- Fix blog_article_views: Restrict to admins only
-- Currently "Allow authenticated read" with USING (true) exposes analytics data to any user

-- Drop existing public read policy
DROP POLICY IF EXISTS "Allow authenticated read" ON public.blog_article_views;

-- Create admin-only read policy
CREATE POLICY "Admins can view blog article views"
ON public.blog_article_views
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Fix storage policies: Remove anonymous upload and require service role uploads
-- The edge function will handle uploads with rate limiting

-- Drop the existing anonymous upload policy
DROP POLICY IF EXISTS "Allow uploads to customer-uploads with file validation" ON storage.objects;

-- Check if read policy exists before creating
DROP POLICY IF EXISTS "Allow public read for customer-uploads" ON storage.objects;

-- Keep public read access for serving uploaded files
CREATE POLICY "Allow public read for customer-uploads"
ON storage.objects
FOR SELECT
USING (bucket_id = 'customer-uploads');