-- Add 'legal' to business_category enum
ALTER TYPE public.business_category ADD VALUE IF NOT EXISTS 'legal';