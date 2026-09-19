import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Rate limiting configuration
const RATE_LIMIT_MAX = 5; // 5 uploads per hour per IP
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour

// In-memory rate limit store (resets on function cold start)
const rateLimits = new Map<string, number[]>();

// Allowed file extensions
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'pdf', 'doc', 'docx', 'txt'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const timestamps = rateLimits.get(ip) || [];
  
  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    const oldestTimestamp = Math.min(...recentTimestamps);
    const resetIn = Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW_MS - now) / 1000 / 60);
    return { 
      allowed: false, 
      remaining: 0, 
      resetIn 
    };
  }
  
  // Add current timestamp and update store
  recentTimestamps.push(now);
  rateLimits.set(ip, recentTimestamps);
  
  return { 
    allowed: true, 
    remaining: RATE_LIMIT_MAX - recentTimestamps.length,
    resetIn: 60 
  };
}

function getFileExtension(filename: string): string | null {
  const parts = filename.split('.');
  if (parts.length < 2) return null;
  return parts[parts.length - 1].toLowerCase();
}

function sanitizeFilename(filename: string): string {
  // Remove path traversal attempts and special characters
  return filename
    .replace(/[\/\\:*?"<>|]/g, '_')
    .replace(/\.\./g, '_')
    .substring(0, 200);
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    console.log(`[upload-customer-file] Request from IP: ${ip}`);

    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      console.log(`[upload-customer-file] Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Try again later.',
          resetInMinutes: rateLimit.resetIn 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimit.resetIn)
          } 
        }
      );
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const stripeSessionId = formData.get('stripe_session_id') as string | null;
    const customerId = formData.get('customer_id') as string | null;

    // Validate required fields
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!stripeSessionId && !customerId) {
      return new Response(
        JSON.stringify({ error: 'stripe_session_id or customer_id is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate file type
    const ext = getFileExtension(file.name);
    if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
      console.log(`[upload-customer-file] Invalid file type: ${ext}`);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid file type',
          allowed: ALLOWED_EXTENSIONS.join(', ')
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      console.log(`[upload-customer-file] File too large: ${file.size} bytes`);
      return new Response(
        JSON.stringify({ 
          error: 'File too large',
          maxSizeMB: MAX_FILE_SIZE / (1024 * 1024)
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate identifier format (UUID for customer_id, session ID format for stripe)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const identifier = customerId || stripeSessionId!;
    
    // Stripe session IDs start with 'cs_' and are alphanumeric
    const stripeSessionRegex = /^cs_[a-zA-Z0-9_]+$/;
    
    if (customerId && !uuidRegex.test(customerId)) {
      return new Response(
        JSON.stringify({ error: 'Invalid customer_id format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (stripeSessionId && !stripeSessionRegex.test(stripeSessionId)) {
      return new Response(
        JSON.stringify({ error: 'Invalid stripe_session_id format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate secure file path
    const sanitizedFilename = sanitizeFilename(file.name);
    const timestamp = Date.now();
    const filePath = `${identifier}/${timestamp}_${sanitizedFilename}`;

    console.log(`[upload-customer-file] Uploading file: ${filePath}`);

    // Upload file using service role (bypasses RLS)
    const { data, error } = await supabase.storage
      .from('customer-uploads')
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false
      });

    if (error) {
      console.error(`[upload-customer-file] Upload error:`, error);
      throw error;
    }

    console.log(`[upload-customer-file] Successfully uploaded: ${data.path}`);

    // Bucket is private: hand back a short-lived signed URL instead of a public one
    const { data: urlData } = await supabase.storage
      .from('customer-uploads')
      .createSignedUrl(data.path, 3600);

    return new Response(
      JSON.stringify({
        success: true,
        path: data.path,
        url: urlData?.signedUrl ?? null,
        remaining_uploads: rateLimit.remaining
      }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-RateLimit-Remaining': String(rateLimit.remaining)
        } 
      }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[upload-customer-file] Error:', errorMessage);
    
    return new Response(
      JSON.stringify({ error: 'Upload failed', details: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
