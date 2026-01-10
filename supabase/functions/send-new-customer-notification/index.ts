import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const INTERNAL_API_SECRET = Deno.env.get("INTERNAL_API_SECRET");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-internal-secret",
};

interface NewCustomerRequest {
  customerId: string;
  recipientEmail: string;
}

const categoryLabels: Record<string, string> = {
  gastronomy: "Gastronomie",
  beauty_wellness: "Beauty & Wellness",
  crafts: "Handwerk",
  health: "Gesundheit",
  retail: "Einzelhandel",
  fitness: "Fitness",
  services: "Dienstleistungen",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("send-new-customer-notification function called");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate internal API secret
    const providedSecret = req.headers.get("x-internal-secret");
    if (!INTERNAL_API_SECRET || providedSecret !== INTERNAL_API_SECRET) {
      console.error("Unauthorized: Invalid or missing internal API secret");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { customerId, recipientEmail }: NewCustomerRequest = await req.json();
    
    console.log(`Processing new customer notification: ${customerId}`);

    if (!customerId || !recipientEmail) {
      throw new Error("customerId and recipientEmail are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
      throw new Error("Invalid email format");
    }

    // Validate customerId format (UUID)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(customerId)) {
      throw new Error("Invalid customerId format");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch customer data
    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .select("*")
      .eq("id", customerId)
      .single();

    if (customerError || !customer) {
      console.error("Customer fetch error:", customerError);
      throw new Error("Customer not found");
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Neuer Kunde</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              🎉 Neuer Kunde!
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">
              Ein neuer Kunde hat gerade bezahlt und startet den Fragebogen
            </p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h2 style="margin: 0 0 10px 0; color: #065f46; font-size: 18px;">
                💰 Zahlungseingang bestätigt
              </h2>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Kunde-ID:</strong> ${customer.id}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Stripe Session:</strong> ${customer.stripe_session_id || "Nicht verfügbar"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Erstellt am:</strong> ${new Date(customer.created_at).toLocaleString("de-DE", { 
                  day: "2-digit",
                  month: "2-digit", 
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>

            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 16px;">
                ⏳ Nächster Schritt
              </h3>
              <p style="margin: 0; color: #374151;">
                Der Kunde füllt jetzt den Fragebogen aus. Du erhältst eine weitere E-Mail mit allen Antworten, sobald der Fragebogen abgeschlossen ist.
              </p>
            </div>

            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Diese E-Mail wurde automatisch generiert.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Neuer Kunde <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `🎉 Neuer Kunde - Zahlung eingegangen!`,
        html: emailHtml,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent:", emailData);

    if (!emailResponse.ok) {
      throw new Error(emailData.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true, emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);