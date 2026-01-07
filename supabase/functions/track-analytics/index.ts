import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SessionData {
  session_id: string;
  entry_page?: string;
  exit_page?: string;
  page_views?: number;
  scroll_depths?: number[];
  device?: string;
  referrer?: string;
  user_agent?: string;
  ab_variant_color?: string;
  ab_variant_restaurant?: string;
  end_time?: string;
}

interface EventData {
  session_id: string;
  event_type: string;
  event_name?: string;
  event_data?: Record<string, any>;
  page_path?: string;
}

interface ConversionData {
  session_id?: string;
  ab_variant_color?: string;
  ab_variant_restaurant?: string;
  conversion_type: string;
  cta_location?: string;
  cta_text?: string;
  amount?: number;
  page_path?: string;
}

interface HeatmapData {
  session_id?: string;
  x: number;
  y: number;
  interaction_type?: string;
  element_path?: string;
  page_path?: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const body = await req.json();
    const { type, data } = body;

    console.log(`Tracking ${type}:`, JSON.stringify(data).substring(0, 200));

    switch (type) {
      case "session_start": {
        const sessionData = data as SessionData;
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
        const sessionData = data as SessionData;
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
        const eventData = data as EventData;
        const { error } = await supabase.from("analytics_events").insert({
          session_id: eventData.session_id,
          event_type: eventData.event_type,
          event_name: eventData.event_name,
          event_data: eventData.event_data || {},
          page_path: eventData.page_path,
        });
        if (error) {
          console.error("Error inserting event:", error);
          throw error;
        }
        break;
      }

      case "conversion": {
        const conversionData = data as ConversionData;
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
        const heatmapData = data as HeatmapData;
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
        const batchData = data as Array<{ type: string; data: any }>;
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

  } catch (error: any) {
    console.error("Error in track-analytics:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
