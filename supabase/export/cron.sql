-- Local Dominate: pg_cron jobs as configured in Lovable Cloud (exported 2026-09-28).
-- Authorization bearer tokens were REDACTED during export. Replace <REDACTED_JWT> and the project URL
-- with the values of the new Supabase project before running. Schedules are UTC.

SELECT cron.schedule('auto-optimizer-hourly', '0 * * * *', $cron$
SELECT net.http_post(
    url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/auto-optimizer',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
    body := concat('{"source": "cron", "timestamp": "', now()::text, '"}')::jsonb
  ) AS request_id;
$cron$);

SELECT cron.schedule('daily-sitemap-update', '0 6 * * *', $cron$
SELECT
    net.http_post(
      url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/generate-sitemap?type=all&ping=true',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
      body := '{"source": "cron", "timestamp": "' || now()::text || '"}'::jsonb
    ) AS request_id;
$cron$);

SELECT cron.schedule('ping-google-sitemap-daily', '0 6 * * *', $cron$
SELECT net.http_post(
    url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/ping-google-sitemap',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
    body := '{}'::jsonb
  ) AS request_id;
$cron$);

SELECT cron.schedule('publish-scheduled-posts-job', '* * * * *', $cron$
SELECT net.http_post(
    url:='https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/publish-scheduled-posts',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
    body:=concat('{"timestamp": "', now(), '"}')::jsonb
  );
$cron$);

SELECT cron.schedule('send-daily-analytics-report', '0 8 * * *', $cron$
SELECT
    net.http_post(
      url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/send-daily-analytics-report',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
      body := '{}'::jsonb
    ) AS request_id;
$cron$);

SELECT cron.schedule('weekly-content-freshness-check', '0 9 * * 1', $cron$
SELECT net.http_post(
    url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/check-content-freshness',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
    body := '{"source": "cron", "scheduled": true}'::jsonb
  ) AS request_id;
$cron$);

SELECT cron.schedule('weekly-seo-monitoring', '0 8 * * 1', $cron$
SELECT net.http_post(
    url := 'https://minijgyozgjuhqgkmilj.supabase.co/functions/v1/seo-monitoring',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer <REDACTED_JWT>"}'::jsonb,
    body := '{"source": "cron", "scheduled": true}'::jsonb
  ) AS request_id;
$cron$);
