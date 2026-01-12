-- Create table for blog article view tracking
CREATE TABLE public.blog_article_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL,
  article_title TEXT,
  session_id TEXT,
  page_path TEXT,
  referrer TEXT,
  device TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_article_views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for tracking)
CREATE POLICY "Allow anonymous insert" 
ON public.blog_article_views 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated read for admin dashboard
CREATE POLICY "Allow authenticated read" 
ON public.blog_article_views 
FOR SELECT 
USING (true);

-- Create index for faster queries
CREATE INDEX idx_blog_article_views_slug ON public.blog_article_views(article_slug);
CREATE INDEX idx_blog_article_views_created ON public.blog_article_views(created_at DESC);

-- Create a view for article statistics
CREATE OR REPLACE VIEW public.blog_article_stats AS
SELECT 
  article_slug,
  MAX(article_title) as article_title,
  COUNT(*) as total_views,
  COUNT(DISTINCT session_id) as unique_visitors,
  MIN(created_at) as first_view,
  MAX(created_at) as last_view,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours') as views_today,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as views_week,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') as views_month
FROM public.blog_article_views
GROUP BY article_slug
ORDER BY total_views DESC;