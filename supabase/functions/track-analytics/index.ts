import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Schema validation for all input types - now with ab_test_id support
const SessionDataSchema = z.object({
  session_id: z.string().min(1).max(255),
  entry_page: z.string().max(2048).optional(),
  exit_page: z.string().max(2048).optional(),
  page_views: z.number().int().min(0).max(10000).optional(),
  scroll_depths: z.array(z.number().min(0).max(100)).max(100).optional(),
  device: z.string().max(50).optional(),
  referrer: z.string().max(2048).optional(),
  user_agent: z.string().max(512).optional(),
  ab_variant_color: z.string().max(50).optional(),
  ab_variant_restaurant: z.string().max(50).optional(),
  ab_test_id: z.string().max(100).optional(), // NEW: A/B Test ID
  end_time: z.string().max(50).optional(),
});

const EventDataSchema = z.object({
  session_id: z.string().min(1).max(255),
  event_type: z.string().min(1).max(100),
  event_name: z.string().max(255).optional(),
  event_data: z.record(z.unknown()).optional(),
  page_path: z.string().max(2048).optional(),
  ab_test_id: z.string().max(100).optional(), // NEW: A/B Test ID
  ab_variant: z.string().max(50).optional(), // NEW: Variant for this event
});

const ConversionDataSchema = z.object({
  session_id: z.string().max(255).optional(),
  ab_variant_color: z.string().max(50).optional(),
  ab_variant_restaurant: z.string().max(50).optional(),
  ab_test_id: z.string().max(100).optional(), // NEW: A/B Test ID
  conversion_type: z.string().min(1).max(100),
  cta_location: z.string().max(255).optional(),
  cta_text: z.string().max(255).optional(),
  amount: z.number().min(0).max(1000000).optional(),
  page_path: z.string().max(2048).optional(),
  blog_article_slug: z.string().max(255).optional(),
  blog_cta_position: z.string().max(100).optional(),
  blog_cta_variant: z.string().max(50).optional(),
});

const HeatmapDataSchema = z.object({
  session_id: z.string().max(255).optional(),
  x: z.number().min(0).max(10000),
  y: z.number().min(0).max(100000),
  interaction_type: z.string().max(50).optional(),
  element_path: z.string().max(1024).optional(),
  page_path: z.string().max(2048).optional(),
  ab_test_id: z.string().max(100).optional(), // NEW: A/B Test ID
  ab_variant: z.string().max(50).optional(), // NEW: Variant
});

const EngagementDataSchema = z.object({
  session_id: z.string().min(1).max(255),
  test_id: z.string().min(1).max(100),
  variant: z.string().min(1).max(50),
  viewed_hero: z.boolean().optional(),
  viewed_offer: z.boolean().optional(),
  viewed_testimonials: z.boolean().optional(),
  viewed_cta: z.boolean().optional(),
  clicked_cta: z.boolean().optional(),
  started_checkout: z.boolean().optional(),
  completed_checkout: z.boolean().optional(),
  engagement_score: z.number().int().min(0).max(100).optional(),
  intent_score: z.number().int().min(0).max(100).optional(),
  max_scroll_depth: z.number().int().min(0).max(100).optional(),
  scroll_to_cta_percent: z.number().int().min(0).max(100).optional(),
  scroll_past_cta: z.boolean().optional(),
  cta_hover_count: z.number().int().min(0).max(1000).optional(),
  cta_hover_duration_ms: z.number().int().min(0).max(3600000).optional(),
  price_hover_duration_ms: z.number().int().min(0).max(3600000).optional(),
  element_interactions: z.number().int().min(0).max(10000).optional(),
  session_duration_ms: z.number().int().min(0).max(86400000).optional(),
  time_to_first_click_ms: z.number().int().min(0).max(86400000).optional(),
  time_to_first_cta_ms: z.number().int().min(0).max(86400000).optional(),
  time_on_offer_section_ms: z.number().int().min(0).max(86400000).optional(),
});

const TrackingRequestSchema = z.object({
  type: z.enum(["session_start", "session_update", "event", "conversion", "heatmap", "engagement", "batch"]),
  data: z.unknown(),
});

// Sanitize JSONB fields to prevent deeply nested attacks
function sanitizeJsonb(data: unknown, maxDepth = 5, currentDepth = 0): unknown {
  if (currentDepth > maxDepth) {
    return null;
  }
  
  if (typeof data !== 'object' || data === null) {
    if (typeof data === 'string' && data.length > 1000) {
      return data.substring(0, 1000);
    }
    return data;
  }
  
  if (Array.isArray(data)) {
    return data.slice(0, 50).map(item => sanitizeJsonb(item, maxDepth, currentDepth + 1));
  }
  
  const sanitized: Record<string, unknown> = {};
  const keys = Object.keys(data).slice(0, 30);
  
  for (const key of keys) {
    if (key.length <= 100) {
      sanitized[key] = sanitizeJsonb((data as Record<string, unknown>)[key], maxDepth, currentDepth + 1);
    }
  }
  
  return sanitized;
}

// Simple in-memory rate limiter
const rateLimits = new Map<string, number[]>();
const RATE_LIMIT_MAX = 100;
const RATE_LIMIT_WINDOW_MS = 60000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimits.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimits.set(ip, recentRequests);
  
  if (rateLimits.size > 1000) {
    const oldestAllowed = now - RATE_LIMIT_WINDOW_MS;
    for (const [key, times] of rateLimits.entries()) {
      const filtered = times.filter(t => t > oldestAllowed);
      if (filtered.length === 0) {
        rateLimits.delete(key);
      } else {
        rateLimits.set(key, filtered);
      }
    }
  }
  
  return true;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('cf-connecting-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip.substring(0, 10)}...`);
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded' }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const requestResult = TrackingRequestSchema.safeParse(body);
    if (!requestResult.success) {
      console.warn('Invalid tracking request:', requestResult.error.errors);
      return new Response(
        JSON.stringify({ error: 'Invalid request format', details: requestResult.error.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { type, data } = requestResult.data;
    console.log(`Tracking ${type} from IP: ${ip.substring(0, 10)}...`);

    switch (type) {
      case "session_start": {
        const parseResult = SessionDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid session_start data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid session data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const sessionData = parseResult.data;
        console.log(`Session start: ${sessionData.session_id}, ab_test_id: ${sessionData.ab_test_id}, variant: ${sessionData.ab_variant_color}`);
        
        const { error } = await supabase.from("analytics_sessions").insert({
          session_id: sessionData.session_id,
          entry_page: sessionData.entry_page,
          device: sessionData.device,
          referrer: sessionData.referrer,
          user_agent: sessionData.user_agent,
          ab_variant_color: sessionData.ab_variant_color,
          ab_variant_restaurant: sessionData.ab_variant_restaurant,
          page_views: 1,
          scroll_depths: [],
        });
        if (error) {
          console.error("Error inserting session:", error);
          throw error;
        }
        break;
      }

      case "session_update": {
        const parseResult = SessionDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid session_update data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid session data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const sessionData = parseResult.data;
        
        // Build update object dynamically to include ab_variant if provided
        const updateData: Record<string, unknown> = {
          exit_page: sessionData.exit_page,
          page_views: sessionData.page_views,
          scroll_depths: sessionData.scroll_depths,
          end_time: sessionData.end_time || new Date().toISOString(),
        };
        
        // Update A/B variant if provided (in case it wasn't set during session_start)
        if (sessionData.ab_variant_color) {
          updateData.ab_variant_color = sessionData.ab_variant_color;
        }
        if (sessionData.ab_variant_restaurant) {
          updateData.ab_variant_restaurant = sessionData.ab_variant_restaurant;
        }
        
        const { error } = await supabase
          .from("analytics_sessions")
          .update(updateData)
          .eq("session_id", sessionData.session_id);
        if (error) {
          console.error("Error updating session:", error);
          throw error;
        }
        break;
      }

      case "event": {
        const parseResult = EventDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid event data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid event data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const eventData = parseResult.data;
        
        // Include ab_test_id and ab_variant in event_data for tracking
        const enrichedEventData = {
          ...(eventData.event_data || {}),
          ab_test_id: eventData.ab_test_id,
          ab_variant: eventData.ab_variant,
        };
        const sanitizedEventData = sanitizeJsonb(enrichedEventData);
        
        const { error } = await supabase.from("analytics_events").insert({
          session_id: eventData.session_id,
          event_type: eventData.event_type,
          event_name: eventData.event_name,
          event_data: sanitizedEventData,
          page_path: eventData.page_path,
        });
        if (error) {
          console.error("Error inserting event:", error);
          throw error;
        }
        break;
      }

      case "conversion": {
        const parseResult = ConversionDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid conversion data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid conversion data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const conversionData = parseResult.data;
        console.log(`Conversion: ${conversionData.conversion_type}, ab_test_id: ${conversionData.ab_test_id}, session: ${conversionData.session_id}`);
        
        const { error } = await supabase.from("analytics_conversions").insert({
          session_id: conversionData.session_id,
          ab_variant_color: conversionData.ab_variant_color,
          ab_variant_restaurant: conversionData.ab_variant_restaurant,
          ab_test_id: conversionData.ab_test_id,
          conversion_type: conversionData.conversion_type,
          cta_location: conversionData.cta_location,
          cta_text: conversionData.cta_text,
          amount: conversionData.amount,
          page_path: conversionData.page_path,
          blog_article_slug: conversionData.blog_article_slug,
          blog_cta_position: conversionData.blog_cta_position,
          blog_cta_variant: conversionData.blog_cta_variant,
        });
        if (error) {
          console.error("Error inserting conversion:", error);
          throw error;
        }
        break;
      }

      case "heatmap": {
        const parseResult = HeatmapDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid heatmap data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid heatmap data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const heatmapData = parseResult.data;
        const { error } = await supabase.from("analytics_heatmap").insert({
          session_id: heatmapData.session_id,
          x: heatmapData.x,
          y: heatmapData.y,
          interaction_type: heatmapData.interaction_type || "click",
          element_path: heatmapData.element_path,
          page_path: heatmapData.page_path,
        });
        if (error) {
          console.error("Error inserting heatmap:", error);
          throw error;
        }
        break;
      }

      case "engagement": {
        const parseResult = EngagementDataSchema.safeParse(data);
        if (!parseResult.success) {
          console.warn('Invalid engagement data:', parseResult.error.errors);
          return new Response(
            JSON.stringify({ error: 'Invalid engagement data', details: parseResult.error.errors }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const engagementData = parseResult.data;
        console.log(`Engagement: test=${engagementData.test_id}, variant=${engagementData.variant}, session=${engagementData.session_id}, score=${engagementData.engagement_score}`);
        
        // Check if entry exists
        const { data: existing } = await supabase
          .from("ab_test_engagement")
          .select("id")
          .eq("session_id", engagementData.session_id)
          .eq("test_id", engagementData.test_id)
          .single();
        
        if (existing) {
          // Update existing entry
          const { error } = await supabase
            .from("ab_test_engagement")
            .update({
              variant: engagementData.variant,
              viewed_hero: engagementData.viewed_hero,
              viewed_offer: engagementData.viewed_offer,
              viewed_testimonials: engagementData.viewed_testimonials,
              viewed_cta: engagementData.viewed_cta,
              clicked_cta: engagementData.clicked_cta,
              started_checkout: engagementData.started_checkout,
              completed_checkout: engagementData.completed_checkout,
              engagement_score: engagementData.engagement_score,
              intent_score: engagementData.intent_score,
              max_scroll_depth: engagementData.max_scroll_depth,
              scroll_to_cta_percent: engagementData.scroll_to_cta_percent,
              scroll_past_cta: engagementData.scroll_past_cta,
              cta_hover_count: engagementData.cta_hover_count,
              cta_hover_duration_ms: engagementData.cta_hover_duration_ms,
              price_hover_duration_ms: engagementData.price_hover_duration_ms,
              element_interactions: engagementData.element_interactions,
              session_duration_ms: engagementData.session_duration_ms,
              time_to_first_click_ms: engagementData.time_to_first_click_ms,
              time_to_first_cta_ms: engagementData.time_to_first_cta_ms,
              time_on_offer_section_ms: engagementData.time_on_offer_section_ms,
            })
            .eq("id", existing.id);
          if (error) {
            console.error("Error updating engagement:", error);
            throw error;
          }
        } else {
          // Insert new entry
          const { error } = await supabase.from("ab_test_engagement").insert({
            session_id: engagementData.session_id,
            test_id: engagementData.test_id,
            variant: engagementData.variant,
            viewed_hero: engagementData.viewed_hero,
            viewed_offer: engagementData.viewed_offer,
            viewed_testimonials: engagementData.viewed_testimonials,
            viewed_cta: engagementData.viewed_cta,
            clicked_cta: engagementData.clicked_cta,
            started_checkout: engagementData.started_checkout,
            completed_checkout: engagementData.completed_checkout,
            engagement_score: engagementData.engagement_score,
            intent_score: engagementData.intent_score,
            max_scroll_depth: engagementData.max_scroll_depth,
            scroll_to_cta_percent: engagementData.scroll_to_cta_percent,
            scroll_past_cta: engagementData.scroll_past_cta,
            cta_hover_count: engagementData.cta_hover_count,
            cta_hover_duration_ms: engagementData.cta_hover_duration_ms,
            price_hover_duration_ms: engagementData.price_hover_duration_ms,
            element_interactions: engagementData.element_interactions,
            session_duration_ms: engagementData.session_duration_ms,
            time_to_first_click_ms: engagementData.time_to_first_click_ms,
            time_to_first_cta_ms: engagementData.time_to_first_cta_ms,
            time_on_offer_section_ms: engagementData.time_on_offer_section_ms,
          });
          if (error) {
            console.error("Error inserting engagement:", error);
            throw error;
          }
        }
        break;
      }

      case "batch": {
        if (!Array.isArray(data)) {
          return new Response(
            JSON.stringify({ error: 'Batch data must be an array' }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        
        const batchData = (data as Array<{ type: string; data: unknown }>).slice(0, 50);
        
        for (const item of batchData) {
          await fetch(req.url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          });
        }
        break;
      }

      default:
        console.warn(`Unknown tracking type: ${type}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error in track-analytics:", errorMessage);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
