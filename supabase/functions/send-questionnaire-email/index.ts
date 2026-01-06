import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuestionnaireEmailRequest {
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
  console.log("send-questionnaire-email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerId, recipientEmail }: QuestionnaireEmailRequest = await req.json();
    
    console.log(`Processing email for customer: ${customerId}, recipient: ${recipientEmail}`);

    if (!customerId || !recipientEmail) {
      throw new Error("customerId and recipientEmail are required");
    }

    // Initialize Supabase client
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

    console.log("Customer data:", customer);

    // Fetch questionnaire responses
    const { data: responses, error: responsesError } = await supabase
      .from("questionnaire_responses")
      .select("step_key, response_data")
      .eq("customer_id", customerId);

    if (responsesError) {
      console.error("Responses fetch error:", responsesError);
      throw new Error("Failed to fetch questionnaire responses");
    }

    console.log("Responses count:", responses?.length);

    // Format responses for email
    const formattedResponses = responses?.map((r) => {
      const data = r.response_data as Record<string, unknown>;
      return `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px; font-weight: bold; background-color: #f9fafb; width: 200px;">
            ${formatStepKey(r.step_key)}
          </td>
          <td style="padding: 12px;">
            ${formatResponseData(data)}
          </td>
        </tr>
      `;
    }).join("");

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Fragebogen abgeschlossen</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              🎉 Neuer Fragebogen abgeschlossen!
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">
              Ein Kunde hat seinen Fragebogen erfolgreich ausgefüllt
            </p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
              <h2 style="margin: 0 0 10px 0; color: #1e40af; font-size: 18px;">
                📋 Kundendaten
              </h2>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Firma:</strong> ${customer.business_name || "Nicht angegeben"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>E-Mail:</strong> ${customer.email || "Nicht angegeben"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Telefon:</strong> ${customer.phone || "Nicht angegeben"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Adresse:</strong> ${customer.address || "Nicht angegeben"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Branche:</strong> ${categoryLabels[customer.business_category] || customer.business_category || "Nicht angegeben"}
              </p>
              <p style="margin: 5px 0; color: #374151;">
                <strong>Abgeschlossen am:</strong> ${new Date(customer.questionnaire_completed_at || new Date()).toLocaleString("de-DE", { 
                  day: "2-digit",
                  month: "2-digit", 
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>

            <h2 style="color: #1f2937; font-size: 18px; margin-bottom: 15px;">
              📝 Fragebogen-Antworten
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              ${formattedResponses || "<tr><td style='padding: 20px; text-align: center; color: #6b7280;'>Keine Antworten gefunden</td></tr>"}
            </table>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Diese E-Mail wurde automatisch generiert.<br>
                Kunde-ID: ${customerId}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Fragebogen <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `Neuer Fragebogen abgeschlossen: ${customer.business_name || "Unbekannter Kunde"}`,
        html: emailHtml,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Email sent successfully:", emailData);

    if (!emailResponse.ok) {
      throw new Error(emailData.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true, emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-questionnaire-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function formatStepKey(key: string): string {
  const labels: Record<string, string> = {
    basic_info: "Grundinformationen",
    contact: "Kontaktdaten",
    opening_hours: "Öffnungszeiten",
    services: "Dienstleistungen",
    branding: "Branding & Design",
    photos: "Fotos & Bilder",
    target_audience: "Zielgruppe",
    competition: "Wettbewerb",
    goals: "Ziele",
    additional_info: "Zusätzliche Infos",
    menu: "Speisekarte",
    ambiance: "Ambiente",
    specialties: "Spezialitäten",
    treatments: "Behandlungen",
    products: "Produkte",
    equipment: "Ausstattung",
    certifications: "Zertifizierungen",
    insurance: "Versicherungen",
  };
  return labels[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatResponseData(data: Record<string, unknown>): string {
  if (!data || Object.keys(data).length === 0) {
    return "<em style='color: #9ca3af;'>Keine Angaben</em>";
  }

  return Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => {
      const formattedKey = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      let formattedValue: string;

      if (Array.isArray(value)) {
        formattedValue = value.join(", ");
      } else if (typeof value === "object") {
        formattedValue = JSON.stringify(value, null, 2);
      } else {
        formattedValue = String(value);
      }

      return `<div style="margin-bottom: 8px;"><strong style="color: #4b5563;">${formattedKey}:</strong> ${formattedValue}</div>`;
    })
    .join("");
}

serve(handler);
