
DROP POLICY IF EXISTS "Allow public select for analytics_heatmap" ON public.analytics_heatmap;
DROP POLICY IF EXISTS "Allow public select analytics_heatmap_enhanced" ON public.analytics_heatmap_enhanced;
CREATE POLICY "Admins can view analytics_heatmap_enhanced"
  ON public.analytics_heatmap_enhanced FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));
DROP POLICY IF EXISTS "View responses by customer" ON public.questionnaire_responses;
DROP POLICY IF EXISTS "Update responses" ON public.questionnaire_responses;
DROP POLICY IF EXISTS "Customers can update own data" ON public.customers;
DROP POLICY IF EXISTS "View assets by customer" ON public.uploaded_assets;
ALTER VIEW public.latest_internal_linking_audits SET (security_invoker = true);
