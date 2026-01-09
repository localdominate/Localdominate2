import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
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
