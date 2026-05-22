// IndexNow: pushes URLs to Bing, Yandex, Seznam, Naver, Yep (and indirectly LLM crawlers
// that consume those indexes such as ChatGPT search, You.com, Brave). One ping forces
// near-instant recrawl — much faster than waiting for Google to discover URLs organically.
//
// Invoke: POST /functions/v1/submit-indexnow  { "urls": ["https://..."] }  (optional;
// if omitted, all URLs from sitemap-blog.xml + sitemap.xml are submitted).

import "https://deno.land/x/xhr@0.1.0/mod.ts";

const KEY = "1b38d21b88e127527ed522fb0b28dc5f1cff7434de37c0c49d8ae0b7653956fd";
const HOST = "localdominate.org";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function extractLocsFromSitemap(url: string): Promise<string[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const xml = await res.text();
    return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
  } catch {
    return [];
  }
}

async function submitToEndpoint(endpoint: string, urls: string[]) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });
  return { endpoint, status: res.status, ok: res.ok };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    let urls: string[] = [];
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      if (Array.isArray(body?.urls) && body.urls.length > 0) urls = body.urls;
    }

    if (urls.length === 0) {
      const [blog, main, lex, ai] = await Promise.all([
        extractLocsFromSitemap(`https://${HOST}/sitemap-blog.xml`),
        extractLocsFromSitemap(`https://${HOST}/sitemap.xml`),
        extractLocsFromSitemap(`https://${HOST}/sitemap-lexikon.xml`),
        extractLocsFromSitemap(`https://${HOST}/sitemap-ai.xml`),
      ]);
      urls = Array.from(new Set([...blog, ...main, ...lex, ...ai]));
    }

    if (urls.length === 0) {
      return new Response(JSON.stringify({ error: "no urls" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // IndexNow accepts max 10,000 URLs per request; chunk defensively at 1,000.
    const chunks: string[][] = [];
    for (let i = 0; i < urls.length; i += 1000) chunks.push(urls.slice(i, i + 1000));

    const endpoints = [
      "https://api.indexnow.org/IndexNow",
      "https://www.bing.com/IndexNow",
      "https://yandex.com/indexnow",
    ];

    const results = [];
    for (const chunk of chunks) {
      for (const ep of endpoints) {
        results.push(await submitToEndpoint(ep, chunk));
      }
    }

    return new Response(
      JSON.stringify({ submitted: urls.length, chunks: chunks.length, results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});