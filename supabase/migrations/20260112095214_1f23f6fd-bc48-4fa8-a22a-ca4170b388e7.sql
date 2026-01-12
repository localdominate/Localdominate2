-- Add engagement tracking columns to blog_article_views
ALTER TABLE public.blog_article_views
ADD COLUMN IF NOT EXISTS max_scroll_depth integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS reading_time_seconds integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS scroll_milestones integer[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS engagement_score integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS finished_reading boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS exit_time timestamp with time zone;

-- Drop and recreate the stats view with engagement metrics
DROP VIEW IF EXISTS public.blog_article_stats;

CREATE VIEW public.blog_article_stats AS
SELECT 
  article_slug,
  article_title,
  COUNT(*) as total_views,
  COUNT(DISTINCT session_id) as unique_visitors,
  ROUND(AVG(max_scroll_depth)::numeric, 1) as avg_scroll_depth,
  ROUND(AVG(reading_time_seconds)::numeric, 1) as avg_reading_time,
  ROUND(AVG(engagement_score)::numeric, 1) as avg_engagement_score,
  COUNT(*) FILTER (WHERE finished_reading = true) as finished_count,
  ROUND(COUNT(*) FILTER (WHERE finished_reading = true)::numeric / NULLIF(COUNT(*), 0) * 100, 1) as completion_rate,
  MIN(created_at) as first_view,
  MAX(created_at) as last_view,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '1 day') as views_today,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as views_week,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') as views_month
FROM public.blog_article_views
GROUP BY article_slug, article_title;