-- =============================================
-- PHASE 1-5: Umfassende RLS Policy Härtung (korrigiert)
-- =============================================

-- =============================================
-- PHASE 1: Kritische Kundendaten-Sicherheit
-- =============================================

-- Entferne unsichere Policies für customers
DROP POLICY IF EXISTS "Allow public insert for customers" ON public.customers;
DROP POLICY IF EXISTS "Allow public update for customers" ON public.customers;
DROP POLICY IF EXISTS "Admins can insert customers" ON public.customers;
DROP POLICY IF EXISTS "Admins can update customers" ON public.customers;

-- Neue sichere Policies für customers
CREATE POLICY "Admins can insert customers"
ON public.customers FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update customers"
ON public.customers FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- =============================================
-- PHASE 2: Payment-Daten Schutz
-- =============================================

DROP POLICY IF EXISTS "Allow public select for analytics_conversions" ON public.analytics_conversions;
DROP POLICY IF EXISTS "Admins can view analytics conversions" ON public.analytics_conversions;

CREATE POLICY "Admins can view analytics conversions"
ON public.analytics_conversions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =============================================
-- PHASE 3: Session-Tracking Härtung
-- =============================================

DROP POLICY IF EXISTS "Authenticated users can select analytics_sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Allow public update for analytics_sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Admins can view analytics sessions" ON public.analytics_sessions;

CREATE POLICY "Admins can view analytics sessions"
ON public.analytics_sessions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =============================================
-- PHASE 4: Analytics-Tabellen Konsolidierung
-- =============================================

-- analytics_events
DROP POLICY IF EXISTS "Authenticated users can select analytics_events" ON public.analytics_events;
DROP POLICY IF EXISTS "Admins can view analytics events" ON public.analytics_events;

CREATE POLICY "Admins can view analytics events"
ON public.analytics_events FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- analytics_heatmap
DROP POLICY IF EXISTS "Authenticated users can select analytics_heatmap" ON public.analytics_heatmap;
DROP POLICY IF EXISTS "Admins can view analytics heatmap" ON public.analytics_heatmap;

CREATE POLICY "Admins can view analytics heatmap"
ON public.analytics_heatmap FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- analytics_heatmap_enhanced
DROP POLICY IF EXISTS "Authenticated users can select analytics_heatmap_enhanced" ON public.analytics_heatmap_enhanced;
DROP POLICY IF EXISTS "Admins can view analytics heatmap enhanced" ON public.analytics_heatmap_enhanced;

CREATE POLICY "Admins can view analytics heatmap enhanced"
ON public.analytics_heatmap_enhanced FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- daily_reports
DROP POLICY IF EXISTS "Authenticated users can select daily_reports" ON public.daily_reports;
DROP POLICY IF EXISTS "Allow public update for daily_reports" ON public.daily_reports;
DROP POLICY IF EXISTS "Admins can view daily reports" ON public.daily_reports;

CREATE POLICY "Admins can view daily reports"
ON public.daily_reports FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =============================================
-- PHASE 5: A/B Test und Engagement Härtung
-- =============================================

-- ab_test_engagement
DROP POLICY IF EXISTS "Allow public update ab_test_engagement" ON public.ab_test_engagement;
DROP POLICY IF EXISTS "Allow public select ab_test_engagement" ON public.ab_test_engagement;
DROP POLICY IF EXISTS "Admins can view ab_test_engagement" ON public.ab_test_engagement;

CREATE POLICY "Admins can view ab_test_engagement"
ON public.ab_test_engagement FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- ab_test_views
DROP POLICY IF EXISTS "Allow public update ab_test_views" ON public.ab_test_views;
DROP POLICY IF EXISTS "Allow public select ab_test_views" ON public.ab_test_views;
DROP POLICY IF EXISTS "Admins can view ab_test_views" ON public.ab_test_views;

CREATE POLICY "Admins can view ab_test_views"
ON public.ab_test_views FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- keyword_performance
DROP POLICY IF EXISTS "Allow public update keyword_performance" ON public.keyword_performance;
DROP POLICY IF EXISTS "Allow public select keyword_performance" ON public.keyword_performance;
DROP POLICY IF EXISTS "Admins can view keyword_performance" ON public.keyword_performance;

CREATE POLICY "Admins can view keyword_performance"
ON public.keyword_performance FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- blog_article_views
DROP POLICY IF EXISTS "Authenticated users can view blog_article_views" ON public.blog_article_views;
DROP POLICY IF EXISTS "Anyone can view blog_article_views" ON public.blog_article_views;
DROP POLICY IF EXISTS "Admins can view blog_article_views" ON public.blog_article_views;

CREATE POLICY "Admins can view blog_article_views"
ON public.blog_article_views FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- questionnaire_responses
DROP POLICY IF EXISTS "Allow public select questionnaire_responses" ON public.questionnaire_responses;
DROP POLICY IF EXISTS "Admins can view questionnaire_responses" ON public.questionnaire_responses;

CREATE POLICY "Admins can view questionnaire_responses"
ON public.questionnaire_responses FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- uploaded_assets
DROP POLICY IF EXISTS "Allow public select uploaded_assets" ON public.uploaded_assets;
DROP POLICY IF EXISTS "Admins can view uploaded_assets" ON public.uploaded_assets;

CREATE POLICY "Admins can view uploaded_assets"
ON public.uploaded_assets FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));