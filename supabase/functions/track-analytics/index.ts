import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Schema validation for all input types
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
  end_time: z.string().max(50).optional(),
});

const EventDataSchema = z.object({
  session_id: z.string().min(1).max(255),
  event_type: z.string().min(1).max(100),
  event_name: z.string().max(255).optional(),
  event_data: z.record(z.unknown()).optional(),
  page_path: z.string().max(2048).optional(),
});

const ConversionDataSchema = z.object({
  session_id: z.string().max(255).optional(),
  ab_variant_color: z.string().max(50).optional(),
  ab_variant_restaurant: z.string().max(50).optional(),
  conversion_type: z.string().min(1).max(100),
  cta_location: z.string().max(255).optional(),
  cta_text: z.string().max(255).optional(),
  amount: z.number().min(0).max(1000000).optional(),
  page_path: z.string().max(2048).optional(),
});

const HeatmapDataSchema = z.object({
  session_id: z.string().max(255).optional(),
  x: z.number().min(0).max(10000),
  y: z.number().min(0).max(100000),
  interaction_type: z.string().max(50).optional(),
  element_path: z.string().max(1024).optional(),
  page_path: z.string().max(2048).optional(),
});

const TrackingRequestSchema = z.object({
  type: z.enum(["session_start", "session_update", "event", "conversion", "heatmap", "batch"]),
  data: z.unknown(),
});

// Sanitize JSONB fields to prevent deeply nested attacks
function sanitizeJsonb(data: unknown, maxDepth = 5, currentDepth = 0): unknown {
  if (currentDepth > maxDepth) {
    return null;
  }
  
  if (typeof data !== 'object' || data === null) {
    // Limit string lengths
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
  
  // Cleanup old entries periodically
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
    // Rate limiting
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
    
    // Parse and validate request body
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
        const { error } = await supabase
          .from("analytics_sessions")
          .update({
            exit_page: sessionData.exit_page,
            page_views: sessionData.page_views,
            scroll_depths: sessionData.scroll_depths,
            end_time: sessionData.end_time || new Date().toISOString(),
          })
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
        const sanitizedEventData = sanitizeJsonb(eventData.event_data || {});
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
        const { error } = await supabase.from("analytics_conversions").insert({
          session_id: conversionData.session_id,
          ab_variant_color: conversionData.ab_variant_color,
          ab_variant_restaurant: conversionData.ab_variant_restaurant,
          conversion_type: conversionData.conversion_type,
          cta_location: conversionData.cta_location,
          cta_text: conversionData.cta_text,
          amount: conversionData.amount,
          page_path: conversionData.page_path,
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

      case "batch": {
        if (!Array.isArray(data)) {
          return new Response(
            JSON.stringify({ error: 'Batch data must be an array' }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        
        // Limit batch size
        const batchData = (data as Array<{ type: string; data: unknown }>).slice(0, 50);
        
        for (const item of batchData) {
          // Recursively handle each item
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
