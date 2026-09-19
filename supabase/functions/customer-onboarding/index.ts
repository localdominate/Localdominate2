import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_CATEGORIES = [
  "gastronomy",
  "beauty_wellness",
  "crafts",
  "health",
  "retail",
  "fitness",
  "services",
  "legal",
];

const SESSION_REGEX = /^(cs_[a-zA-Z0-9_]+|test_[0-9]+)$/;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function str(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json();
    const action = String(body?.action ?? "");
    const sessionId = str(body?.sessionId, 200);

    if (!sessionId || !SESSION_REGEX.test(sessionId)) {
      return json({ error: "Invalid session identifier" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // The stripe session id is the shared secret that authorises access to this record.
    const { data: customer } = await supabase
      .from("customers")
      .select("*")
      .eq("stripe_session_id", sessionId)
      .maybeSingle();

    if (action === "init") {
      if (customer) {
        const { data: responses } = await supabase
          .from("questionnaire_responses")
          .select("step_key, response_data")
          .eq("customer_id", customer.id);

        return json({ customer, responses: responses ?? [], created: false });
      }

      const { data: created, error } = await supabase
        .from("customers")
        .insert({ stripe_session_id: sessionId })
        .select()
        .single();

      if (error) throw error;
      return json({ customer: created, responses: [], created: true });
    }

    if (!customer) return json({ error: "Customer not found" }, 404);

    if (action === "set_category") {
      const category = str(body?.category, 50);
      if (!category || !ALLOWED_CATEGORIES.includes(category)) {
        return json({ error: "Invalid category" }, 400);
      }
      const { error } = await supabase
        .from("customers")
        .update({ business_category: category })
        .eq("id", customer.id);
      if (error) throw error;
      return json({ success: true });
    }

    if (action === "update_profile") {
      const updates: Record<string, string> = {};
      const fields: Array<[string, number]> = [
        ["business_name", 200],
        ["address", 300],
        ["phone", 50],
        ["email", 255],
        ["website", 300],
      ];
      for (const [key, max] of fields) {
        const value = str(body?.[key], max);
        if (value) updates[key] = value;
      }
      if (updates.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(updates.email)) {
        return json({ error: "Invalid email" }, 400);
      }
      if (Object.keys(updates).length === 0) return json({ success: true });

      const { error } = await supabase.from("customers").update(updates).eq("id", customer.id);
      if (error) throw error;
      return json({ success: true });
    }

    if (action === "complete") {
      const { error } = await supabase
        .from("customers")
        .update({
          questionnaire_completed: true,
          questionnaire_completed_at: new Date().toISOString(),
        })
        .eq("id", customer.id);
      if (error) throw error;
      return json({ success: true, customerId: customer.id });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (error: unknown) {
    console.error("[customer-onboarding]", error instanceof Error ? error.message : error);
    return json({ error: "Request failed" }, 500);
  }
});
