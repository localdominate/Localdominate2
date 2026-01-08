import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, stripe-signature",
};

// Stripe webhook signature verification
async function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const parts = signature.split(",");
  
  let timestamp = "";
  let signatures: string[] = [];
  
  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key === "t") timestamp = value;
    if (key === "v1") signatures.push(value);
  }
  
  if (!timestamp || signatures.length === 0) {
    console.error("Invalid signature format");
    return false;
  }
  
  // Check timestamp is within tolerance (5 minutes)
  const tolerance = 300;
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp)) > tolerance) {
    console.error("Timestamp outside tolerance");
    return false;
  }
  
  const signedPayload = `${timestamp}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  
  const signatureBytes = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signedPayload)
  );
  
  const expectedSignature = Array.from(new Uint8Array(signatureBytes))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  
  return signatures.some((sig) => sig === expectedSignature);
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    
    if (!signature || !webhookSecret) {
      console.error("Missing signature or webhook secret");
      return new Response(JSON.stringify({ error: "Missing signature" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = await req.text();
    
    // Verify the webhook signature
    const isValid = await verifyStripeSignature(payload, signature, webhookSecret);
    if (!isValid) {
      console.error("Invalid webhook signature");
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const event = JSON.parse(payload);
    console.log(`Received Stripe event: ${event.type}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Handle checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      
      console.log("Processing completed checkout session:", {
        session_id: session.id,
        customer_email: session.customer_details?.email,
        amount_total: session.amount_total,
        payment_status: session.payment_status,
      });

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;
      const amountPaid = session.amount_total ? session.amount_total / 100 : 0; // Convert cents to euros
      const stripeCustomerId = session.customer;
      const stripeSessionId = session.id;

      if (customerEmail) {
        // Check if customer exists
        const { data: existingCustomer } = await supabase
          .from("customers")
          .select("id")
          .eq("email", customerEmail)
          .single();

        if (existingCustomer) {
          // Update existing customer
          const { error: updateError } = await supabase
            .from("customers")
            .update({
              payment_status: "completed",
              payment_amount: amountPaid,
              payment_completed_at: new Date().toISOString(),
              stripe_customer_id: stripeCustomerId,
              stripe_session_id: stripeSessionId,
              business_name: customerName || undefined,
            })
            .eq("id", existingCustomer.id);

          if (updateError) {
            console.error("Error updating customer:", updateError);
          } else {
            console.log("Customer updated successfully:", existingCustomer.id);
          }
        } else {
          // Create new customer
          const { data: newCustomer, error: insertError } = await supabase
            .from("customers")
            .insert({
              email: customerEmail,
              business_name: customerName,
              payment_status: "completed",
              payment_amount: amountPaid,
              payment_completed_at: new Date().toISOString(),
              stripe_customer_id: stripeCustomerId,
              stripe_session_id: stripeSessionId,
            })
            .select()
            .single();

          if (insertError) {
            console.error("Error creating customer:", insertError);
          } else {
            console.log("New customer created:", newCustomer.id);
          }
        }

        // Track verified conversion in analytics
        const { error: conversionError } = await supabase
          .from("analytics_conversions")
          .insert({
            conversion_type: "payment_completed",
            amount: amountPaid,
            payment_verified: true,
            stripe_session_id: stripeSessionId,
            cta_location: "stripe_webhook",
            cta_text: "Stripe Payment",
            page_path: "/checkout",
          });

        if (conversionError) {
          console.error("Error tracking conversion:", conversionError);
        } else {
          console.log("Payment conversion tracked successfully");
        }

        // Send notification email using existing edge function
        try {
          const notificationResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-new-customer-notification`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${supabaseServiceKey}`,
              },
              body: JSON.stringify({
                customerEmail,
                customerName,
                amountPaid,
                stripeSessionId,
              }),
            }
          );
          
          if (notificationResponse.ok) {
            console.log("Customer notification sent successfully");
          } else {
            console.error("Failed to send notification:", await notificationResponse.text());
          }
        } catch (notifyError) {
          console.error("Error sending notification:", notifyError);
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Webhook error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
