import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting for security
const rateLimits = new Map<string, number[]>();
const RATE_LIMIT_MAX = 10; // 10 calls per hour
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimits.get(ip) || [];
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  recentTimestamps.push(now);
  rateLimits.set(ip, recentTimestamps);
  return true;
}

// Helper function to verify admin role
async function verifyAdminAccess(req: Request, supabase: any): Promise<{ authorized: boolean; error?: string }> {
  const authHeader = req.headers.get('Authorization');
  
  // If no auth header, check rate limit instead (for scheduled/cron calls)
  if (!authHeader) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return { authorized: false, error: 'Rate limit exceeded' };
    }
    return { authorized: true }; // Allow scheduled calls with rate limiting
  }

  // Verify JWT token
  const token = authHeader.replace('Bearer ', '');
  const { data: claims, error: claimsError } = await supabase.auth.getClaims(token);
  
  if (claimsError || !claims?.claims?.sub) {
    return { authorized: false, error: 'Invalid token' };
  }

  // Check admin role
  const { data: role } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', claims.claims.sub)
    .eq('role', 'admin')
    .single();

  if (!role) {
    return { authorized: false, error: 'Admin access required' };
  }

  return { authorized: true };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify admin access or rate limit for scheduled calls
    const authCheck = await verifyAdminAccess(req, supabase);
    if (!authCheck.authorized) {
      console.log('[publish-scheduled-posts] Authorization failed:', authCheck.error);
      return new Response(
        JSON.stringify({ error: authCheck.error }),
        { status: authCheck.error === 'Rate limit exceeded' ? 429 : 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    console.log('[publish-scheduled-posts] Starting scheduled posts check...');
    
    // Get all posts that should be published (scheduled_at <= now and status = 'scheduled')
    const { data: postsToPublish, error: fetchError } = await supabase
      .from('scheduled_posts')
      .select('*')
      .eq('status', 'scheduled')
      .lte('scheduled_at', new Date().toISOString());
    
    if (fetchError) {
      console.error('[publish-scheduled-posts] Error fetching posts:', fetchError);
      throw fetchError;
    }
    
    console.log(`[publish-scheduled-posts] Found ${postsToPublish?.length || 0} posts to publish`);
    
    const results = [];
    
    for (const post of postsToPublish || []) {
      console.log(`[publish-scheduled-posts] Publishing: ${post.slug} (${post.title})`);
      
      const { error: updateError } = await supabase
        .from('scheduled_posts')
        .update({
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', post.id);
      
      if (updateError) {
        console.error(`[publish-scheduled-posts] Failed to publish ${post.slug}:`, updateError);
        results.push({ slug: post.slug, status: 'failed', error: updateError.message });
        
        // Mark as failed
        await supabase
          .from('scheduled_posts')
          .update({ status: 'failed' })
          .eq('id', post.id);
      } else {
        console.log(`[publish-scheduled-posts] Successfully published: ${post.slug}`);
        results.push({ slug: post.slug, status: 'published' });
      }
    }
    
    const response = {
      success: true,
      timestamp: new Date().toISOString(),
      postsProcessed: postsToPublish?.length || 0,
      results
    };
    
    console.log('[publish-scheduled-posts] Completed:', JSON.stringify(response));
    
    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[publish-scheduled-posts] Error:', errorMessage);
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });
  }
});
