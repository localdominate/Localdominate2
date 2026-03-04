import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const rateLimits = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimits.get(ip) || [];
  const recent = timestamps.filter(t => now - t < 3600000);
  if (recent.length >= 10) return false;
  recent.push(now);
  rateLimits.set(ip, recent);
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
      status: 429,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { full_name, email, country, sales_experience, preferred_method, message } = await req.json();

    if (!full_name || !email) {
      throw new Error("full_name and email are required");
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"><title>New Partner Application</title></head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background: linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🤝 New Partner Application</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Someone wants to join the LocalDominate partner network</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; width: 140px;">Full Name</td>
                <td style="padding: 12px 0; color: #111827;">${full_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; color: #111827;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Country</td>
                <td style="padding: 12px 0; color: #111827;">${country || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Sales Experience</td>
                <td style="padding: 12px 0; color: #111827;">${sales_experience || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Preferred Method</td>
                <td style="padding: 12px 0; color: #111827;">${preferred_method || "Not specified"}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827;">${message}</td>
              </tr>
              ` : ""}
            </table>

            <div style="margin-top: 25px; padding: 15px; background-color: #eff6ff; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af; font-weight: 600;">Reply directly to ${email} to follow up.</p>
            </div>

            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">LocalDominate Partner Network – Automated notification</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Partner Application <onboarding@resend.dev>",
        to: ["markuswimboeck@gmail.com"],
        reply_to: email,
        subject: `🤝 New Partner Application: ${full_name}`,
        html: emailHtml,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent:", emailData);

    if (!emailResponse.ok) {
      throw new Error(emailData.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
