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

// GMB field labels for copy-paste friendly output
const gmbFieldLabels: Record<string, string> = {
  business_name: "Unternehmensname",
  owner_name: "Inhaber",
  opening_date_year: "Eröffnungsjahr",
  opening_date_month: "Eröffnungsmonat",
  street: "Straße",
  postal_code: "PLZ",
  city: "Stadt",
  address_extra: "Adresszusatz",
  has_physical_location: "Standorttyp",
  service_areas: "Einzugsgebiet",
  service_radius_km: "Einsatzradius (km)",
  hours_monday: "Montag",
  hours_tuesday: "Dienstag",
  hours_wednesday: "Mittwoch",
  hours_thursday: "Donnerstag",
  hours_friday: "Freitag",
  hours_saturday: "Samstag",
  hours_sunday: "Sonntag",
  special_hours_note: "Sonderöffnungszeiten",
  phone_primary: "Telefon (primär)",
  phone_secondary: "Telefon (zusätzlich)",
  email: "E-Mail",
  whatsapp_number: "WhatsApp",
  website_url: "Website",
  booking_url: "Termin-URL",
  menu_url: "Menü-URL",
  order_url: "Bestell-URL",
  instagram_url: "Instagram",
  facebook_url: "Facebook",
  linkedin_url: "LinkedIn",
  youtube_url: "YouTube",
  tiktok_url: "TikTok",
  twitter_url: "X (Twitter)",
  pinterest_url: "Pinterest",
  business_description: "Beschreibung (GMB)",
  unique_selling_points: "USPs (intern)",
  gmb_main_category: "Hauptkategorie",
  gmb_secondary_categories: "Nebenkategorien",
  current_rating: "Aktuelle Bewertung",
  review_count: "Anzahl Bewertungen",
  has_gmb_profile: "GMB-Status",
  gmb_profile_url: "GMB-Profil-URL",
  main_challenges: "Herausforderungen",
  main_goal: "Hauptziel",
  competitor_name: "Konkurrent",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("send-questionnaire-email function called");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerId, recipientEmail }: QuestionnaireEmailRequest = await req.json();
    
    console.log(`Processing email for customer: ${customerId}, recipient: ${recipientEmail}`);

    if (!customerId || !recipientEmail) {
      throw new Error("customerId and recipientEmail are required");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .select("*")
      .eq("id", customerId)
      .single();

    if (customerError || !customer) {
      console.error("Customer fetch error:", customerError);
      throw new Error("Customer not found");
    }

    const { data: responses, error: responsesError } = await supabase
      .from("questionnaire_responses")
      .select("step_key, response_data")
      .eq("customer_id", customerId);

    if (responsesError) {
      console.error("Responses fetch error:", responsesError);
      throw new Error("Failed to fetch questionnaire responses");
    }

    // Build copy-paste friendly sections
    const sections: string[] = [];
    
    responses?.forEach((r) => {
      const data = r.response_data as Record<string, unknown>;
      const stepTitle = formatStepKey(r.step_key);
      
      const fields = Object.entries(data)
        .filter(([_, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => {
          const label = gmbFieldLabels[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          const formattedValue = Array.isArray(value) ? value.join(", ") : String(value);
          return `
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 200px; vertical-align: top;">
                ${label}
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-family: 'Courier New', monospace; background: #f9fafb;">
                ${formattedValue}
              </td>
            </tr>
          `;
        })
        .join("");
      
      if (fields) {
        sections.push(`
          <div style="margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px 0; padding: 10px 15px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border-radius: 8px 8px 0 0; font-size: 16px;">
              📋 ${stepTitle}
            </h3>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-top: none;">
              ${fields}
            </table>
          </div>
        `);
      }
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Fragebogen - Copy-Paste Ready</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              ✅ Fragebogen abgeschlossen - Copy-Paste Ready
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
              Alle Daten für Google Business Profile
            </p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Quick Summary -->
            <div style="background: #ecfdf5; border: 2px solid #10b981; padding: 20px; margin-bottom: 30px; border-radius: 12px;">
              <h2 style="margin: 0 0 15px 0; color: #065f46; font-size: 18px;">🏢 Schnellübersicht</h2>
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 5px 0; font-weight: 600; width: 150px;">Firma:</td>
                  <td style="font-family: 'Courier New', monospace; font-size: 15px;">${customer.business_name || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: 600;">Branche:</td>
                  <td>${categoryLabels[customer.business_category] || customer.business_category || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: 600;">E-Mail:</td>
                  <td style="font-family: 'Courier New', monospace;">${customer.email || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: 600;">Telefon:</td>
                  <td style="font-family: 'Courier New', monospace;">${customer.phone || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: 600;">Abgeschlossen:</td>
                  <td>${new Date(customer.questionnaire_completed_at || new Date()).toLocaleString("de-DE")}</td>
                </tr>
              </table>
            </div>

            <!-- All Sections -->
            ${sections.join("") || "<p>Keine Antworten gefunden</p>"}

            <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 12px; border: 2px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>💡 Tipp:</strong> Alle Felder mit Monospace-Schrift sind copy-paste ready für Google Business Profile.
              </p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                Kunde-ID: ${customerId}
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
        from: "Fragebogen <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `✅ GMB-Ready: ${customer.business_name || "Neuer Kunde"} - Fragebogen komplett`,
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
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

function formatStepKey(key: string): string {
  const labels: Record<string, string> = {
    business_info: "Unternehmensdaten",
    address: "Adresse",
    service_area: "Einzugsgebiet",
    opening_hours: "Öffnungszeiten",
    contact: "Kontaktdaten",
    website_links: "Website & Links",
    social_media: "Social Media",
    description: "Beschreibung",
    gmb_categories: "Google Kategorien",
    gastro_attributes: "Restaurant-Attribute",
    beauty_attributes: "Salon-Attribute",
    crafts_attributes: "Handwerker-Attribute",
    health_attributes: "Praxis-Attribute",
    retail_attributes: "Geschäfts-Attribute",
    fitness_attributes: "Fitness-Attribute",
    services_attributes: "Dienstleistungs-Attribute",
    current_gmb_status: "GMB-Status",
    goals_challenges: "Ziele & Herausforderungen",
    photos_assets: "Fotos & Assets",
  };
  return labels[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

serve(handler);
