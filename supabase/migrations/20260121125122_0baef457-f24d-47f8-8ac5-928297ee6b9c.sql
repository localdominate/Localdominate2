-- Phase 1 & 3: RLS-Policies für blog_article_views anpassen
-- Alte restriktive Policies entfernen
DROP POLICY IF EXISTS "Admins can view blog article views" ON blog_article_views;
DROP POLICY IF EXISTS "Admins can view blog_article_views" ON blog_article_views;

-- Neue Policy: Jeder kann lesen (Analytics-Daten sind nicht sensitiv)
CREATE POLICY "Anyone can view blog analytics"
ON blog_article_views
FOR SELECT
TO public
USING (true);

-- Phase 2: blog_article_stats View als SECURITY DEFINER neu erstellen
DROP VIEW IF EXISTS blog_article_stats;

CREATE VIEW blog_article_stats 
WITH (security_invoker = false) AS
SELECT 
  article_slug,
  article_title,
  COUNT(*) as total_views,
  COUNT(DISTINCT session_id) as unique_visitors,
  MIN(created_at) as first_view,
  MAX(created_at) as last_view,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as views_today,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as views_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as views_month,
  AVG(max_scroll_depth)::numeric(5,1) as avg_scroll_depth,
  AVG(reading_time_seconds)::numeric(5,1) as avg_reading_time,
  AVG(engagement_score)::numeric(5,1) as avg_engagement_score,
  (COUNT(*) FILTER (WHERE finished_reading = true)::float / NULLIF(COUNT(*), 0) * 100)::numeric(5,1) as completion_rate,
  COUNT(*) FILTER (WHERE finished_reading = true) as finished_count
FROM blog_article_views
GROUP BY article_slug, article_title;