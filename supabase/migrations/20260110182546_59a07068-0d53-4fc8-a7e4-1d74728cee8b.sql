-- Fix: Allow anonymous uploads to customer-uploads bucket with file type validation
-- This is needed because customers uploading during onboarding are not authenticated
-- Customer verification happens via Stripe payment, so anonymous uploads are acceptable

-- First, drop existing restrictive policy
DROP POLICY IF EXISTS "Authenticated users can upload to customer-uploads" ON storage.objects;

-- Create new policy that allows anonymous uploads with file type restrictions
-- Only allow common image and document formats
CREATE POLICY "Allow uploads to customer-uploads with file validation"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'customer-uploads' 
  AND (
    -- Allow common image formats
    storage.extension(name) IN ('jpg', 'jpeg', 'png', 'gif', 'webp', 'svg')
    -- Allow common document formats
    OR storage.extension(name) IN ('pdf', 'doc', 'docx', 'txt')
  )
);

-- Keep existing read policy for public access
-- Already exists: "Allow public read for customer-uploads"