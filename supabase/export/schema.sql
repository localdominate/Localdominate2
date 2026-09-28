-- Local Dominate: schema exported read-only from Lovable Cloud (Supabase project minijgyozgjuhqgkmilj)
-- Exported 2026-09-28 via the Lovable Cloud SQL editor (pg_catalog queries). Contains NO data and NO secrets.
-- Use this as the reference when recreating the backend in a Supabase project you own.
-- Note: the default Supabase extensions (pg_graphql, pgsodium, supabase_vault, ...) already exist in new projects.


-- ===== Extensions =====

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
-- (default in Supabase) CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- (default in Supabase) CREATE EXTENSION IF NOT EXISTS plpgsql;
-- (default in Supabase) CREATE EXTENSION IF NOT EXISTS supabase_vault;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===== Enum types =====

CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
CREATE TYPE public.business_category AS ENUM ('gastronomy', 'beauty_wellness', 'crafts', 'health', 'retail', 'fitness', 'services', 'legal');

-- ===== Tables =====

CREATE TABLE public.ab_test_engagement (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text NOT NULL, test_id text NOT NULL, variant text NOT NULL, session_duration_ms integer, time_to_first_cta_ms integer, time_on_offer_section_ms integer, time_to_first_click_ms integer, scroll_to_cta_percent integer, scroll_past_cta boolean DEFAULT false, max_scroll_depth integer, cta_hover_count integer DEFAULT 0, cta_hover_duration_ms integer DEFAULT 0, price_hover_duration_ms integer DEFAULT 0, element_interactions integer DEFAULT 0, viewed_hero boolean DEFAULT false, viewed_offer boolean DEFAULT false, viewed_testimonials boolean DEFAULT false, viewed_cta boolean DEFAULT false, clicked_cta boolean DEFAULT false, started_checkout boolean DEFAULT false, completed_checkout boolean DEFAULT false, engagement_score integer DEFAULT 0, intent_score integer DEFAULT 0, created_at timestamp with time zone DEFAULT now());
CREATE TABLE public.ab_test_views (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text NOT NULL, test_id text NOT NULL, variant text NOT NULL, page_url text, created_at timestamp with time zone DEFAULT now());
CREATE TABLE public.ab_tests (id uuid NOT NULL DEFAULT gen_random_uuid(), test_id text NOT NULL, name text NOT NULL, description text, variants jsonb NOT NULL DEFAULT '[]'::jsonb, status text DEFAULT 'running'::text, start_date timestamp with time zone DEFAULT now(), end_date timestamp with time zone, target_sample_size integer DEFAULT 1000, winning_variant text, created_at timestamp with time zone DEFAULT now(), updated_at timestamp with time zone DEFAULT now(), is_ready boolean DEFAULT false, config jsonb DEFAULT '{}'::jsonb, traffic_split_a integer DEFAULT 75, traffic_split_b integer DEFAULT 25, auto_managed boolean DEFAULT false, element_type text, element_id text);
CREATE TABLE public.analytics_conversions (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text, ab_variant_color text, ab_variant_restaurant text, conversion_type text NOT NULL, cta_location text, cta_text text, amount numeric(10,2), page_path text, created_at timestamp with time zone NOT NULL DEFAULT now(), payment_verified boolean DEFAULT false, stripe_session_id text, blog_article_slug text, blog_cta_position text, blog_cta_variant text, ab_test_id text);
CREATE TABLE public.analytics_events (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text NOT NULL, event_type text NOT NULL, event_name text, event_data jsonb DEFAULT '{}'::jsonb, page_path text, created_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.analytics_heatmap (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text, x numeric(10,4) NOT NULL, y numeric(10,4) NOT NULL, interaction_type text DEFAULT 'click'::text, element_path text, page_path text, created_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.analytics_heatmap_enhanced (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text NOT NULL, x_percent numeric(5,2), y_percent numeric(5,2), element_selector text, element_type text, element_text text, section_name text, interaction_type text, hover_duration_ms integer, page_path text, device text, ab_variant text, viewport_width integer, viewport_height integer, is_dead_click boolean DEFAULT false, is_rage_click boolean DEFAULT false, is_missed_cta boolean DEFAULT false, created_at timestamp with time zone DEFAULT now());
CREATE TABLE public.analytics_sessions (id uuid NOT NULL DEFAULT gen_random_uuid(), session_id text NOT NULL, start_time timestamp with time zone NOT NULL DEFAULT now(), end_time timestamp with time zone, page_views integer DEFAULT 0, scroll_depths integer[] DEFAULT '{}'::integer[], entry_page text, exit_page text, device text, referrer text, user_agent text, ab_variant_color text, ab_variant_restaurant text, created_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.auto_test_queue (id uuid NOT NULL DEFAULT gen_random_uuid(), element_type text NOT NULL, element_id text NOT NULL, variants_to_test jsonb NOT NULL DEFAULT '[]'::jsonb, tested_variants jsonb NOT NULL DEFAULT '[]'::jsonb, current_variant_a text, current_variant_b text, current_winner text, status text NOT NULL DEFAULT 'waiting'::text, priority integer NOT NULL DEFAULT 0, max_variants integer NOT NULL DEFAULT 5, created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.blog_article_views (id uuid NOT NULL DEFAULT gen_random_uuid(), article_slug text NOT NULL, article_title text, session_id text, page_path text, referrer text, device text, created_at timestamp with time zone NOT NULL DEFAULT now(), max_scroll_depth integer DEFAULT 0, reading_time_seconds integer DEFAULT 0, scroll_milestones integer[] DEFAULT '{}'::integer[], engagement_score integer DEFAULT 0, finished_reading boolean DEFAULT false, exit_time timestamp with time zone);
CREATE TABLE public.conversion_reports (id uuid NOT NULL DEFAULT gen_random_uuid(), report_date date NOT NULL DEFAULT CURRENT_DATE, total_sessions integer DEFAULT 0, total_conversions integer DEFAULT 0, total_leads integer DEFAULT 0, conversion_rate numeric DEFAULT 0, lead_rate numeric DEFAULT 0, cta_click_rate numeric DEFAULT 0, checkout_completion_rate numeric DEFAULT 0, avg_engagement_score numeric DEFAULT 0, avg_time_to_first_cta_seconds numeric DEFAULT 0, funnel_data jsonb DEFAULT '[]'::jsonb, cta_by_location jsonb DEFAULT '[]'::jsonb, lead_sources jsonb DEFAULT '[]'::jsonb, top_pages jsonb DEFAULT '[]'::jsonb, recommendations jsonb DEFAULT '[]'::jsonb, notes text, created_at timestamp with time zone NOT NULL DEFAULT now(), created_by uuid);
CREATE TABLE public.customers (id uuid NOT NULL DEFAULT gen_random_uuid(), stripe_session_id text, email text, business_category business_category, business_name text, address text, phone text, website text, created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now(), questionnaire_completed boolean DEFAULT false, questionnaire_completed_at timestamp with time zone, payment_status text DEFAULT 'pending'::text, payment_amount numeric, payment_completed_at timestamp with time zone, stripe_customer_id text, is_seeded boolean DEFAULT false);
CREATE TABLE public.daily_reports (id uuid NOT NULL DEFAULT gen_random_uuid(), report_date date NOT NULL, total_sessions integer DEFAULT 0, total_conversions integer DEFAULT 0, total_revenue numeric(10,2) DEFAULT 0, variant_analysis jsonb DEFAULT '{}'::jsonb, sent_at timestamp with time zone, created_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.internal_linking_audits (id uuid NOT NULL DEFAULT gen_random_uuid(), article_slug text NOT NULL, article_title text NOT NULL, audit_score integer NOT NULL DEFAULT 0, has_pillar_link boolean NOT NULL DEFAULT false, pillar_link_count integer NOT NULL DEFAULT 0, sibling_links_count integer NOT NULL DEFAULT 0, missing_pillar_links jsonb DEFAULT '[]'::jsonb, missing_sibling_links jsonb DEFAULT '[]'::jsonb, recommendations jsonb DEFAULT '[]'::jsonb, total_outbound_links integer NOT NULL DEFAULT 0, link_density numeric(5,2) DEFAULT 0.0, primary_hub text, hub_category text, is_orphan_page boolean NOT NULL DEFAULT false, audit_date timestamp with time zone NOT NULL DEFAULT now(), created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.keyword_performance (id uuid NOT NULL DEFAULT gen_random_uuid(), keyword text NOT NULL, source text, impressions integer DEFAULT 0, sessions integer DEFAULT 0, conversions integer DEFAULT 0, revenue numeric(10,2) DEFAULT 0, avg_session_duration_ms integer DEFAULT 0, avg_scroll_depth integer DEFAULT 0, bounce_rate numeric(5,2) DEFAULT 0, date date NOT NULL, created_at timestamp with time zone DEFAULT now());
CREATE TABLE public.leads (id uuid NOT NULL DEFAULT gen_random_uuid(), email text NOT NULL, business_name text, phone text, source_page text, source_cta text, lead_type text DEFAULT 'blog_cta'::text, status text DEFAULT 'new'::text, created_at timestamp with time zone NOT NULL DEFAULT now(), session_id text, ab_variant text, notes text);
CREATE TABLE public.lexikon_article_links (id uuid NOT NULL DEFAULT gen_random_uuid(), term_name text NOT NULL, term_slug text NOT NULL, article_slug text NOT NULL, article_title text NOT NULL, link_type text DEFAULT 'auto'::text, relevance_score integer DEFAULT 50, created_at timestamp with time zone DEFAULT now(), updated_at timestamp with time zone DEFAULT now());
CREATE TABLE public.lexikon_sync_log (id uuid NOT NULL DEFAULT gen_random_uuid(), run_at timestamp with time zone DEFAULT now(), new_links_created integer DEFAULT 0, links_updated integer DEFAULT 0, articles_scanned integer DEFAULT 0, terms_processed integer DEFAULT 0, duration_ms integer, status text DEFAULT 'completed'::text, error_message text);
CREATE TABLE public.optimized_elements (id uuid NOT NULL DEFAULT gen_random_uuid(), element_type text NOT NULL, element_id text NOT NULL, winning_value text NOT NULL, test_history jsonb NOT NULL DEFAULT '[]'::jsonb, locked_until timestamp with time zone, created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.partner_applications (id uuid NOT NULL DEFAULT gen_random_uuid(), full_name text NOT NULL, email text NOT NULL, country text, sales_experience text, preferred_method text, message text, status text DEFAULT 'new'::text, created_at timestamp with time zone DEFAULT now());
CREATE TABLE public.questionnaire_responses (id uuid NOT NULL DEFAULT gen_random_uuid(), customer_id uuid NOT NULL, step_key text NOT NULL, response_data jsonb NOT NULL DEFAULT '{}'::jsonb, created_at timestamp with time zone NOT NULL DEFAULT now(), updated_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.scheduled_posts (id uuid NOT NULL DEFAULT gen_random_uuid(), slug text NOT NULL, title text NOT NULL, scheduled_at timestamp with time zone NOT NULL, published_at timestamp with time zone, status text DEFAULT 'scheduled'::text, created_at timestamp with time zone DEFAULT now(), updated_at timestamp with time zone DEFAULT now());
CREATE TABLE public.uploaded_assets (id uuid NOT NULL DEFAULT gen_random_uuid(), customer_id uuid NOT NULL, asset_type text NOT NULL, storage_path text NOT NULL, file_name text, created_at timestamp with time zone NOT NULL DEFAULT now());
CREATE TABLE public.user_roles (id uuid NOT NULL DEFAULT gen_random_uuid(), user_id uuid NOT NULL, role app_role NOT NULL, created_at timestamp with time zone DEFAULT now());

-- ===== Constraints (PK, FK, unique, check) =====

ALTER TABLE ab_test_engagement ADD CONSTRAINT ab_test_engagement_pkey PRIMARY KEY (id);
ALTER TABLE ab_test_engagement ADD CONSTRAINT ab_test_engagement_session_test_unique UNIQUE (session_id, test_id);
ALTER TABLE ab_test_views ADD CONSTRAINT ab_test_views_pkey PRIMARY KEY (id);
ALTER TABLE ab_tests ADD CONSTRAINT ab_tests_pkey PRIMARY KEY (id);
ALTER TABLE ab_tests ADD CONSTRAINT ab_tests_status_check CHECK ((status = ANY (ARRAY['running'::text, 'paused'::text, 'completed'::text])));
ALTER TABLE ab_tests ADD CONSTRAINT ab_tests_test_id_key UNIQUE (test_id);
ALTER TABLE analytics_conversions ADD CONSTRAINT analytics_conversions_pkey PRIMARY KEY (id);
ALTER TABLE analytics_events ADD CONSTRAINT analytics_events_pkey PRIMARY KEY (id);
ALTER TABLE analytics_heatmap ADD CONSTRAINT analytics_heatmap_pkey PRIMARY KEY (id);
ALTER TABLE analytics_heatmap_enhanced ADD CONSTRAINT analytics_heatmap_enhanced_pkey PRIMARY KEY (id);
ALTER TABLE analytics_sessions ADD CONSTRAINT analytics_sessions_pkey PRIMARY KEY (id);
ALTER TABLE analytics_sessions ADD CONSTRAINT analytics_sessions_session_id_key UNIQUE (session_id);
ALTER TABLE auto_test_queue ADD CONSTRAINT auto_test_queue_element_type_element_id_key UNIQUE (element_type, element_id);
ALTER TABLE auto_test_queue ADD CONSTRAINT auto_test_queue_pkey PRIMARY KEY (id);
ALTER TABLE blog_article_views ADD CONSTRAINT blog_article_views_pkey PRIMARY KEY (id);
ALTER TABLE conversion_reports ADD CONSTRAINT conversion_reports_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);
ALTER TABLE conversion_reports ADD CONSTRAINT conversion_reports_pkey PRIMARY KEY (id);
ALTER TABLE customers ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
ALTER TABLE customers ADD CONSTRAINT customers_stripe_session_id_key UNIQUE (stripe_session_id);
ALTER TABLE daily_reports ADD CONSTRAINT daily_reports_pkey PRIMARY KEY (id);
ALTER TABLE daily_reports ADD CONSTRAINT daily_reports_report_date_key UNIQUE (report_date);
ALTER TABLE internal_linking_audits ADD CONSTRAINT internal_linking_audits_pkey PRIMARY KEY (id);
ALTER TABLE keyword_performance ADD CONSTRAINT keyword_performance_keyword_source_date_key UNIQUE (keyword, source, date);
ALTER TABLE keyword_performance ADD CONSTRAINT keyword_performance_pkey PRIMARY KEY (id);
ALTER TABLE leads ADD CONSTRAINT leads_pkey PRIMARY KEY (id);
ALTER TABLE lexikon_article_links ADD CONSTRAINT lexikon_article_links_pkey PRIMARY KEY (id);
ALTER TABLE lexikon_article_links ADD CONSTRAINT lexikon_article_links_relevance_score_check CHECK (((relevance_score >= 0) AND (relevance_score <= 100)));
ALTER TABLE lexikon_article_links ADD CONSTRAINT lexikon_article_links_term_slug_article_slug_key UNIQUE (term_slug, article_slug);
ALTER TABLE lexikon_sync_log ADD CONSTRAINT lexikon_sync_log_pkey PRIMARY KEY (id);
ALTER TABLE optimized_elements ADD CONSTRAINT optimized_elements_element_type_element_id_key UNIQUE (element_type, element_id);
ALTER TABLE optimized_elements ADD CONSTRAINT optimized_elements_pkey PRIMARY KEY (id);
ALTER TABLE partner_applications ADD CONSTRAINT partner_applications_pkey PRIMARY KEY (id);
ALTER TABLE questionnaire_responses ADD CONSTRAINT questionnaire_responses_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE;
ALTER TABLE questionnaire_responses ADD CONSTRAINT questionnaire_responses_customer_id_step_key_key UNIQUE (customer_id, step_key);
ALTER TABLE questionnaire_responses ADD CONSTRAINT questionnaire_responses_pkey PRIMARY KEY (id);
ALTER TABLE scheduled_posts ADD CONSTRAINT scheduled_posts_pkey PRIMARY KEY (id);
ALTER TABLE scheduled_posts ADD CONSTRAINT scheduled_posts_slug_key UNIQUE (slug);
ALTER TABLE scheduled_posts ADD CONSTRAINT scheduled_posts_status_check CHECK ((status = ANY (ARRAY['scheduled'::text, 'published'::text, 'failed'::text])));
ALTER TABLE uploaded_assets ADD CONSTRAINT uploaded_assets_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE;
ALTER TABLE uploaded_assets ADD CONSTRAINT uploaded_assets_pkey PRIMARY KEY (id);
ALTER TABLE user_roles ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
ALTER TABLE user_roles ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE user_roles ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);

-- ===== Indexes =====

CREATE INDEX idx_ab_test_engagement_session ON public.ab_test_engagement USING btree (session_id);
CREATE INDEX idx_ab_test_engagement_test ON public.ab_test_engagement USING btree (test_id, variant);
CREATE INDEX idx_ab_test_views_session_id ON public.ab_test_views USING btree (session_id);
CREATE INDEX idx_ab_test_views_test_id ON public.ab_test_views USING btree (test_id);
CREATE INDEX idx_analytics_conversions_blog ON public.analytics_conversions USING btree (blog_article_slug, blog_cta_position);
CREATE INDEX idx_analytics_conversions_created_at ON public.analytics_conversions USING btree (created_at);
CREATE INDEX idx_analytics_events_created_at ON public.analytics_events USING btree (created_at);
CREATE INDEX idx_analytics_events_session_id ON public.analytics_events USING btree (session_id);
CREATE INDEX idx_analytics_heatmap_page_path ON public.analytics_heatmap USING btree (page_path);
CREATE INDEX idx_analytics_sessions_created_at ON public.analytics_sessions USING btree (created_at);
CREATE INDEX idx_analytics_sessions_session_id ON public.analytics_sessions USING btree (session_id);
CREATE INDEX idx_blog_article_views_created ON public.blog_article_views USING btree (created_at DESC);
CREATE INDEX idx_blog_article_views_slug ON public.blog_article_views USING btree (article_slug);
CREATE INDEX idx_daily_reports_report_date ON public.daily_reports USING btree (report_date);
CREATE INDEX idx_heatmap_enhanced_flags ON public.analytics_heatmap_enhanced USING btree (is_rage_click, is_dead_click);
CREATE INDEX idx_heatmap_enhanced_session ON public.analytics_heatmap_enhanced USING btree (session_id);
CREATE INDEX idx_heatmap_enhanced_type ON public.analytics_heatmap_enhanced USING btree (interaction_type);
CREATE INDEX idx_internal_linking_audits_article_slug ON public.internal_linking_audits USING btree (article_slug);
CREATE INDEX idx_internal_linking_audits_audit_date ON public.internal_linking_audits USING btree (audit_date);
CREATE INDEX idx_internal_linking_audits_orphan ON public.internal_linking_audits USING btree (is_orphan_page);
CREATE INDEX idx_internal_linking_audits_score ON public.internal_linking_audits USING btree (audit_score);
CREATE INDEX idx_keyword_performance_date ON public.keyword_performance USING btree (date);
CREATE INDEX idx_keyword_performance_keyword ON public.keyword_performance USING btree (keyword);
CREATE INDEX idx_lexikon_article_links_article_slug ON public.lexikon_article_links USING btree (article_slug);
CREATE INDEX idx_lexikon_article_links_relevance ON public.lexikon_article_links USING btree (relevance_score DESC);
CREATE INDEX idx_lexikon_article_links_term_slug ON public.lexikon_article_links USING btree (term_slug);
CREATE INDEX idx_scheduled_posts_status_scheduled_at ON public.scheduled_posts USING btree (status, scheduled_at);

-- ===== Functions =====

CREATE SCHEMA IF NOT EXISTS private;
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role app_role)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$
;

-- ===== Views =====

CREATE OR REPLACE VIEW public.blog_article_stats AS  SELECT article_slug,
    article_title,
    count(*) AS total_views,
    count(DISTINCT session_id) AS unique_visitors,
    min(created_at) AS first_view,
    max(created_at) AS last_view,
    count(*) FILTER (WHERE created_at >= (now() - '1 day'::interval)) AS views_today,
    count(*) FILTER (WHERE created_at >= (now() - '7 days'::interval)) AS views_week,
    count(*) FILTER (WHERE created_at >= (now() - '30 days'::interval)) AS views_month,
    avg(max_scroll_depth)::numeric(5,1) AS avg_scroll_depth,
    avg(reading_time_seconds)::numeric(5,1) AS avg_reading_time,
    avg(engagement_score)::numeric(5,1) AS avg_engagement_score,
    (count(*) FILTER (WHERE finished_reading = true)::double precision / NULLIF(count(*), 0)::double precision * 100::double precision)::numeric(5,1) AS completion_rate,
    count(*) FILTER (WHERE finished_reading = true) AS finished_count
   FROM blog_article_views
  GROUP BY article_slug, article_title;
CREATE OR REPLACE VIEW public.latest_internal_linking_audits AS  SELECT DISTINCT ON (article_slug) id,
    article_slug,
    article_title,
    audit_score,
    has_pillar_link,
    pillar_link_count,
    sibling_links_count,
    missing_pillar_links,
    missing_sibling_links,
    recommendations,
    total_outbound_links,
    link_density,
    primary_hub,
    hub_category,
    is_orphan_page,
    audit_date,
    created_at,
    updated_at
   FROM internal_linking_audits
  ORDER BY article_slug, audit_date DESC;

-- ===== Triggers =====

CREATE TRIGGER update_ab_tests_updated_at BEFORE UPDATE ON public.ab_tests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_auto_test_queue_updated_at BEFORE UPDATE ON public.auto_test_queue FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_internal_linking_audits_updated_at BEFORE UPDATE ON public.internal_linking_audits FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_lexikon_article_links_updated_at BEFORE UPDATE ON public.lexikon_article_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_optimized_elements_updated_at BEFORE UPDATE ON public.optimized_elements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_questionnaire_responses_updated_at BEFORE UPDATE ON public.questionnaire_responses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_scheduled_posts_updated_at BEFORE UPDATE ON public.scheduled_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===== Row level security =====

ALTER TABLE public.ab_test_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_test_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_heatmap ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_heatmap_enhanced ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auto_test_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_article_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversion_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internal_linking_audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keyword_performance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lexikon_article_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lexikon_sync_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.optimized_elements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questionnaire_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scheduled_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uploaded_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- ===== Policies (public + storage) =====

CREATE POLICY "Admins can view ab_test_engagement" ON public.ab_test_engagement AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert ab_test_engagement" ON public.ab_test_engagement AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can view ab_test_views" ON public.ab_test_views AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert ab_test_views" ON public.ab_test_views AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read ab_test_views" ON public.ab_test_views AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admins can delete ab_tests" ON public.ab_tests AS PERMISSIVE FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert ab_tests" ON public.ab_tests AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update ab_tests" ON public.ab_tests AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public read ab_tests" ON public.ab_tests AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admins can view analytics conversions" ON public.analytics_conversions AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert for analytics_conversions" ON public.analytics_conversions AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can view analytics events" ON public.analytics_events AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert for analytics_events" ON public.analytics_events AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can view analytics heatmap" ON public.analytics_heatmap AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert for analytics_heatmap" ON public.analytics_heatmap AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can view analytics heatmap enhanced" ON public.analytics_heatmap_enhanced AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view analytics_heatmap_enhanced" ON public.analytics_heatmap_enhanced AS PERMISSIVE FOR SELECT TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert analytics_heatmap_enhanced" ON public.analytics_heatmap_enhanced AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can view analytics sessions" ON public.analytics_sessions AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert for analytics_sessions" ON public.analytics_sessions AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can delete auto_test_queue" ON public.auto_test_queue AS PERMISSIVE FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert auto_test_queue" ON public.auto_test_queue AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update auto_test_queue" ON public.auto_test_queue AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public read auto_test_queue" ON public.auto_test_queue AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Allow anonymous insert" ON public.blog_article_views AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can view blog analytics" ON public.blog_article_views AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admins can manage conversion_reports" ON public.conversion_reports AS PERMISSIVE FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert customers" ON public.customers AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update customers" ON public.customers AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view all customers" ON public.customers AS PERMISSIVE FOR SELECT TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view daily reports" ON public.daily_reports AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert for daily_reports" ON public.daily_reports AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can manage internal_linking_audits" ON public.internal_linking_audits AS PERMISSIVE FOR ALL TO public USING (private.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view keyword_performance" ON public.keyword_performance AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert keyword_performance" ON public.keyword_performance AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can delete leads" ON public.leads AS PERMISSIVE FOR DELETE TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update leads" ON public.leads AS PERMISSIVE FOR UPDATE TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view leads" ON public.leads AS PERMISSIVE FOR SELECT TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public insert leads" ON public.leads AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can delete lexikon_article_links" ON public.lexikon_article_links AS PERMISSIVE FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert lexikon_article_links" ON public.lexikon_article_links AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update lexikon_article_links" ON public.lexikon_article_links AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public read lexikon_article_links" ON public.lexikon_article_links AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Allow public insert lexikon_sync_log" ON public.lexikon_sync_log AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read lexikon_sync_log" ON public.lexikon_sync_log AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admins can delete optimized_elements" ON public.optimized_elements AS PERMISSIVE FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert optimized_elements" ON public.optimized_elements AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update optimized_elements" ON public.optimized_elements AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public read optimized_elements" ON public.optimized_elements AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admin can view all" ON public.partner_applications AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public inserts" ON public.partner_applications AS PERMISSIVE FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can view questionnaire_responses" ON public.questionnaire_responses AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Insert responses" ON public.questionnaire_responses AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can delete scheduled_posts" ON public.scheduled_posts AS PERMISSIVE FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert scheduled_posts" ON public.scheduled_posts AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update scheduled_posts" ON public.scheduled_posts AS PERMISSIVE FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Allow public read scheduled_posts" ON public.scheduled_posts AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Admins can view uploaded_assets" ON public.uploaded_assets AS PERMISSIVE FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Insert assets" ON public.uploaded_assets AS PERMISSIVE FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Admins can manage all roles" ON public.user_roles AS PERMISSIVE FOR ALL TO public USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Users can view own roles" ON public.user_roles AS PERMISSIVE FOR SELECT TO public USING ((auth.uid() = user_id));
CREATE POLICY "Admins can view customer-uploads" ON storage.objects AS PERMISSIVE FOR SELECT TO authenticated USING (((bucket_id = 'customer-uploads'::text) AND private.has_role(auth.uid(), 'admin'::app_role)));
CREATE POLICY "Anyone can view downloads" ON storage.objects AS PERMISSIVE FOR SELECT TO public USING ((bucket_id = 'downloads'::text));

-- ===== Storage buckets =====

INSERT INTO storage.buckets (id, name, public) VALUES ('customer-uploads', 'customer-uploads', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('downloads', 'downloads', true);

-- ===== Grants to anon / authenticated =====

GRANT TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, INSERT, SELECT ON public.ab_test_engagement TO anon;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, SELECT, UPDATE, DELETE ON public.ab_test_engagement TO authenticated;
GRANT TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT, INSERT ON public.ab_test_views TO anon;
GRANT INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.ab_test_views TO authenticated;
GRANT REFERENCES, TRIGGER, TRUNCATE, DELETE, UPDATE, SELECT, INSERT ON public.ab_tests TO anon;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.ab_tests TO authenticated;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.analytics_conversions TO anon;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.analytics_conversions TO authenticated;
GRANT DELETE, TRUNCATE, REFERENCES, TRIGGER, UPDATE, SELECT, INSERT ON public.analytics_events TO anon;
GRANT DELETE, TRIGGER, REFERENCES, TRUNCATE, INSERT, SELECT, UPDATE ON public.analytics_events TO authenticated;
GRANT REFERENCES, TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE ON public.analytics_heatmap TO anon;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.analytics_heatmap TO authenticated;
GRANT INSERT, DELETE, UPDATE, SELECT, TRUNCATE, REFERENCES, TRIGGER ON public.analytics_heatmap_enhanced TO anon;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRIGGER, TRUNCATE ON public.analytics_heatmap_enhanced TO authenticated;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.analytics_sessions TO anon;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.analytics_sessions TO authenticated;
GRANT TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES ON public.auto_test_queue TO anon;
GRANT TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES ON public.auto_test_queue TO authenticated;
GRANT TRUNCATE, DELETE, INSERT, SELECT, UPDATE, TRIGGER, REFERENCES ON public.blog_article_stats TO anon;
GRANT SELECT, DELETE, TRUNCATE, REFERENCES, TRIGGER, UPDATE, INSERT ON public.blog_article_stats TO authenticated;
GRANT SELECT, DELETE, TRUNCATE, REFERENCES, TRIGGER, INSERT, UPDATE ON public.blog_article_views TO anon;
GRANT TRUNCATE, DELETE, UPDATE, SELECT, INSERT, TRIGGER, REFERENCES ON public.blog_article_views TO authenticated;
GRANT DELETE, TRIGGER, REFERENCES, TRUNCATE, UPDATE, SELECT, INSERT ON public.conversion_reports TO anon;
GRANT TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES ON public.conversion_reports TO authenticated;
GRANT SELECT, TRIGGER, REFERENCES, TRUNCATE, DELETE ON public.customers TO anon;
GRANT UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER, INSERT, SELECT ON public.customers TO authenticated;
GRANT DELETE, TRUNCATE, REFERENCES, TRIGGER, INSERT, SELECT, UPDATE ON public.daily_reports TO anon;
GRANT DELETE, UPDATE, SELECT, INSERT, TRIGGER, REFERENCES, TRUNCATE ON public.daily_reports TO authenticated;
GRANT TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES ON public.internal_linking_audits TO anon;
GRANT SELECT, TRIGGER, REFERENCES, TRUNCATE, INSERT, DELETE, UPDATE ON public.internal_linking_audits TO authenticated;
GRANT UPDATE, TRIGGER, REFERENCES, TRUNCATE, INSERT, SELECT, DELETE ON public.keyword_performance TO anon;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRIGGER, TRUNCATE ON public.keyword_performance TO authenticated;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.latest_internal_linking_audits TO anon;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.latest_internal_linking_audits TO authenticated;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.leads TO anon;
GRANT INSERT, REFERENCES, TRIGGER, TRUNCATE, DELETE, UPDATE, SELECT ON public.leads TO authenticated;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.lexikon_article_links TO anon;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.lexikon_article_links TO authenticated;
GRANT TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT, INSERT ON public.lexikon_sync_log TO anon;
GRANT TRIGGER, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES ON public.lexikon_sync_log TO authenticated;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.optimized_elements TO anon;
GRANT SELECT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, INSERT ON public.optimized_elements TO authenticated;
GRANT SELECT, INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE ON public.partner_applications TO anon;
GRANT SELECT, TRIGGER, REFERENCES, INSERT, TRUNCATE, DELETE, UPDATE ON public.partner_applications TO authenticated;
GRANT REFERENCES, INSERT, SELECT, UPDATE, DELETE, TRUNCATE, TRIGGER ON public.questionnaire_responses TO anon;
GRANT INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT ON public.questionnaire_responses TO authenticated;
GRANT TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT, INSERT ON public.scheduled_posts TO anon;
GRANT REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT, INSERT, TRIGGER ON public.scheduled_posts TO authenticated;
GRANT TRIGGER, REFERENCES, TRUNCATE, INSERT, DELETE, UPDATE, SELECT ON public.uploaded_assets TO anon;
GRANT TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE, SELECT, INSERT ON public.uploaded_assets TO authenticated;
GRANT INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.user_roles TO anon;
GRANT SELECT, INSERT, TRIGGER, REFERENCES, TRUNCATE, DELETE, UPDATE ON public.user_roles TO authenticated;
