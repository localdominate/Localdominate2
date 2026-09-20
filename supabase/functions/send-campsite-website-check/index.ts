import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.23.8";

const RequestSchema = z.object({
  website: z.string().trim().min(3).max(2048),
  email: z.string().trim().email().max(320),
});

const notificationRecipient = "markuswimboeck@gmail.com";

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

const normalizeWebsite = (value: string) => {
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  const parsed = new URL(candidate);
  if (!parsed.hostname.includes(".") || !["http:", "https:"].includes(parsed.protocol)) {
    throw new Error("Invalid website address");
  }
  return parsed.toString();
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const parsed = RequestSchema.safeParse(await req.json());
    if (!parsed.success) {
      return jsonResponse({ error: "Please enter a valid website and email address." }, 400);
    }

    let website: string;
    try {
      website = normalizeWebsite(parsed.data.website);
    } catch {
      return jsonResponse({ error: "Please enter a valid website address." }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) {
      throw new Error("Website check service is not configured");
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { error: leadError } = await supabase.from("leads").insert({
      email: parsed.data.email,
      business_name: website,
      notes: `Website check requested for: ${website}`,
      source_page: "/campsites",
      source_cta: "website_check",
      lead_type: "campsites_website_check",
    });
    if (leadError) throw leadError;

    const safeWebsite = escapeHtml(website);
    const safeEmail = escapeHtml(parsed.data.email);
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LocalDominate Website Check <onboarding@resend.dev>",
        to: [notificationRecipient],
        reply_to: parsed.data.email,
        subject: `New campsite website check: ${new URL(website).hostname}`,
        html: `<h1>New campsite website check</h1><p><strong>Website:</strong> <a href="${safeWebsite}">${safeWebsite}</a></p><p><strong>Contact:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>`,
      }),
    });

    if (!emailResponse.ok) {
      const details = await emailResponse.text();
      console.error(`Email provider request failed [${emailResponse.status}]: ${details}`);
      return jsonResponse({ error: "Your request was saved, but the notification email could not be sent." }, 502);
    }

    return jsonResponse({ success: true, website }, 200);
  } catch (error) {
    console.error("Campsite website check failed", error);
    return jsonResponse({ error: "We couldn't send your request. Please try again." }, 500);
  }
});