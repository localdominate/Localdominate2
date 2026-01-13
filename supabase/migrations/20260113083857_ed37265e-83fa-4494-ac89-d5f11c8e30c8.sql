-- =============================================================
-- FIX 1: Remove public write access from configuration tables
-- Keep public SELECT for frontend needs, restrict writes to admins
-- =============================================================

-- ab_tests: Remove public INSERT/UPDATE/DELETE, keep SELECT
DROP POLICY IF EXISTS "Allow public insert ab_tests" ON public.ab_tests;
DROP POLICY IF EXISTS "Allow public update ab_tests" ON public.ab_tests;
DROP POLICY IF EXISTS "Allow public delete ab_tests" ON public.ab_tests;

-- Create admin-only write policies for ab_tests
CREATE POLICY "Admins can insert ab_tests"
ON public.ab_tests FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update ab_tests"
ON public.ab_tests FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete ab_tests"
ON public.ab_tests FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- scheduled_posts: Remove public INSERT/UPDATE, keep SELECT
DROP POLICY IF EXISTS "Allow public insert scheduled_posts" ON public.scheduled_posts;
DROP POLICY IF EXISTS "Allow public update scheduled_posts" ON public.scheduled_posts;

-- Create admin-only write policies for scheduled_posts
CREATE POLICY "Admins can insert scheduled_posts"
ON public.scheduled_posts FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update scheduled_posts"
ON public.scheduled_posts FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete scheduled_posts"
ON public.scheduled_posts FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- optimized_elements: Remove public INSERT/UPDATE, keep SELECT
DROP POLICY IF EXISTS "Allow public insert optimized_elements" ON public.optimized_elements;
DROP POLICY IF EXISTS "Allow public update optimized_elements" ON public.optimized_elements;

-- Create admin-only write policies for optimized_elements
CREATE POLICY "Admins can insert optimized_elements"
ON public.optimized_elements FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update optimized_elements"
ON public.optimized_elements FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete optimized_elements"
ON public.optimized_elements FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- auto_test_queue: Remove public INSERT/UPDATE/DELETE, keep SELECT
DROP POLICY IF EXISTS "Allow public insert auto_test_queue" ON public.auto_test_queue;
DROP POLICY IF EXISTS "Allow public update auto_test_queue" ON public.auto_test_queue;
DROP POLICY IF EXISTS "Allow public delete auto_test_queue" ON public.auto_test_queue;

-- Create admin-only write policies for auto_test_queue
CREATE POLICY "Admins can insert auto_test_queue"
ON public.auto_test_queue FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update auto_test_queue"
ON public.auto_test_queue FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete auto_test_queue"
ON public.auto_test_queue FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- lexikon_article_links: Remove public INSERT/UPDATE/DELETE, keep SELECT
DROP POLICY IF EXISTS "Allow public insert lexikon_article_links" ON public.lexikon_article_links;
DROP POLICY IF EXISTS "Allow public update lexikon_article_links" ON public.lexikon_article_links;
DROP POLICY IF EXISTS "Allow public delete lexikon_article_links" ON public.lexikon_article_links;

-- Create admin-only write policies for lexikon_article_links
CREATE POLICY "Admins can insert lexikon_article_links"
ON public.lexikon_article_links FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update lexikon_article_links"
ON public.lexikon_article_links FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete lexikon_article_links"
ON public.lexikon_article_links FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =============================================================
-- FIX 2: Recreate blog_article_stats view with SECURITY INVOKER
-- This ensures the view respects the RLS policies of the querying user
-- =============================================================

DROP VIEW IF EXISTS public.blog_article_stats;

CREATE VIEW public.blog_article_stats
WITH (security_invoker = true)
AS
SELECT 
    article_slug,
    article_title,
    count(*) AS total_views,
    count(DISTINCT session_id) AS unique_visitors,
    round(avg(max_scroll_depth), 1) AS avg_scroll_depth,
    round(avg(reading_time_seconds), 1) AS avg_reading_time,
    round(avg(engagement_score), 1) AS avg_engagement_score,
    count(*) FILTER (WHERE finished_reading = true) AS finished_count,
    round(count(*) FILTER (WHERE finished_reading = true)::numeric / NULLIF(count(*), 0)::numeric * 100::numeric, 1) AS completion_rate,
    min(created_at) AS first_view,
    max(created_at) AS last_view,
    count(*) FILTER (WHERE created_at > (now() - '1 day'::interval)) AS views_today,
    count(*) FILTER (WHERE created_at > (now() - '7 days'::interval)) AS views_week,
    count(*) FILTER (WHERE created_at > (now() - '30 days'::interval)) AS views_month
FROM blog_article_views
GROUP BY article_slug, article_title;

-- Grant SELECT on the view to authenticated and anon roles
GRANT SELECT ON public.blog_article_stats TO authenticated;
GRANT SELECT ON public.blog_article_stats TO anon;