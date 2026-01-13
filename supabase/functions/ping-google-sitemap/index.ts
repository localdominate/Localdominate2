import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('🔔 [ping-google-sitemap] Starting daily sitemap ping...');

  const sitemapUrls = [
    'https://localdominate.org/sitemap-index.xml',
    'https://localdominate.org/sitemap.xml',
    'https://localdominate.org/sitemap-blog.xml',
    'https://localdominate.org/sitemap-lexikon.xml',
  ];

  const results: { sitemap: string; success: boolean; status?: number; error?: string }[] = [];

  for (const sitemapUrl of sitemapUrls) {
    try {
      const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
      
      console.log(`📡 Pinging Google for: ${sitemapUrl}`);
      
      const response = await fetch(googlePingUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'LocalDominate-Sitemap-Pinger/1.0'
        }
      });

      const success = response.ok;
      
      results.push({
        sitemap: sitemapUrl,
        success,
        status: response.status
      });

      console.log(`${success ? '✅' : '❌'} ${sitemapUrl}: Status ${response.status}`);
      
      // Small delay between pings to be respectful
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ Error pinging ${sitemapUrl}:`, errorMessage);
      results.push({
        sitemap: sitemapUrl,
        success: false,
        error: errorMessage
      });
    }
  }

  const successCount = results.filter(r => r.success).length;
  const totalCount = results.length;

  console.log(`🏁 [ping-google-sitemap] Completed: ${successCount}/${totalCount} successful`);

  return new Response(
    JSON.stringify({
      success: successCount === totalCount,
      message: `Pinged ${successCount}/${totalCount} sitemaps successfully`,
      timestamp: new Date().toISOString(),
      results
    }),
    { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200 
    }
  );
});
