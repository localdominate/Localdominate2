// Phase 7: AI Visibility Audit — narrative report generator
// Uses Lovable AI Gateway (google/gemini-3-flash-preview) to produce a
// language-localized executive summary + 3 prioritized recommendations.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Payload {
  business: string;
  city: string;
  category: string;
  website?: string;
  hasGbp: string;
  reviewCount: string;
  hasSchema: string;
  publishesContent: string;
  score: {
    total: number;
    entityAuthority: number;
    citationDensity: number;
    reviewVelocity: number;
    schemaCoverage: number;
    aiRetrievability: number;
    grade: string;
  };
  language?: "de" | "en" | "ar";
}

const SYSTEM_PROMPTS: Record<string, string> = {
  de: "Du bist Senior AI-Visibility-Strategist bei LocalDominate. Schreibe nüchtern, B2B, ohne Hype. Sprache: Deutsch.",
  en: "You are a senior AI Visibility strategist at LocalDominate. Tone: calm, B2B, no hype. Language: English.",
  ar: "أنت خبير استراتيجي أول في الظهور بالذكاء الاصطناعي في LocalDominate. النبرة: هادئة، احترافية، بدون مبالغة. اللغة: العربية.",
};

function buildPrompt(p: Payload): string {
  const lang = p.language || "de";
  const askDe = `Analysiere das lokale Unternehmen "${p.business}" (Kategorie: ${p.category}, Stadt: ${p.city}${p.website ? `, Website: ${p.website}` : ""}) für KI-Sichtbarkeit in ChatGPT, Gemini, Perplexity und Google AI Overviews.

Audit-Daten:
- Google Business Profil: ${p.hasGbp}
- Bewertungen: ${p.reviewCount}
- Strukturierte Daten (Schema.org): ${p.hasSchema}
- Content-Frequenz: ${p.publishesContent}

AI Visibility Index™ (0–100):
- Gesamt: ${p.score.total} (${p.score.grade})
- Entity Authority: ${p.score.entityAuthority}
- Citation Density: ${p.score.citationDensity}
- Review Velocity: ${p.score.reviewVelocity}
- Schema Coverage: ${p.score.schemaCoverage}
- AI Retrievability: ${p.score.aiRetrievability}

Gib genau zurück (Markdown, max. 350 Wörter):
1. Executive Summary (3–4 Sätze, kontextspezifisch für die Branche und Stadt).
2. "Top 3 Maßnahmen" als nummerierte Liste — jede Maßnahme: **Titel**, 1 Satz Begründung, 1 Satz konkreter nächster Schritt. Priorisiere nach Impact für die schwächsten Index-Dimensionen.
3. "Kategorie-Benchmark" — 1 Satz Einordnung gegen typische Wettbewerber in ${p.city}.

Keine Selbstreferenz auf KI. Keine Phrasen wie "Als KI...". Keine Floskeln.`;

  const askEn = `Analyze the local business "${p.business}" (category: ${p.category}, city: ${p.city}${p.website ? `, website: ${p.website}` : ""}) for AI visibility in ChatGPT, Gemini, Perplexity and Google AI Overviews.

Audit data:
- Google Business Profile: ${p.hasGbp}
- Reviews: ${p.reviewCount}
- Structured data (Schema.org): ${p.hasSchema}
- Content cadence: ${p.publishesContent}

AI Visibility Index™ (0–100):
- Total: ${p.score.total} (${p.score.grade})
- Entity Authority: ${p.score.entityAuthority}
- Citation Density: ${p.score.citationDensity}
- Review Velocity: ${p.score.reviewVelocity}
- Schema Coverage: ${p.score.schemaCoverage}
- AI Retrievability: ${p.score.aiRetrievability}

Return exactly (Markdown, max 350 words):
1. Executive Summary (3–4 sentences, specific to the category and city).
2. "Top 3 Actions" as numbered list — each: **Title**, 1 sentence why, 1 sentence concrete next step. Prioritize by impact on the weakest index dimensions.
3. "Category Benchmark" — 1 sentence positioning vs typical competitors in ${p.city}.

No self-reference to AI. No filler phrases.`;

  const askAr = `حلل النشاط التجاري المحلي "${p.business}" (الفئة: ${p.category}، المدينة: ${p.city}${p.website ? `، الموقع: ${p.website}` : ""}) من حيث الظهور في ChatGPT وGemini وPerplexity وGoogle AI Overviews.

بيانات التدقيق:
- ملف Google التجاري: ${p.hasGbp}
- التقييمات: ${p.reviewCount}
- البيانات المنظمة: ${p.hasSchema}
- وتيرة المحتوى: ${p.publishesContent}

مؤشر الظهور (0-100):
- الإجمالي: ${p.score.total} (${p.score.grade})
- Entity Authority: ${p.score.entityAuthority}
- Citation Density: ${p.score.citationDensity}
- Review Velocity: ${p.score.reviewVelocity}
- Schema Coverage: ${p.score.schemaCoverage}
- AI Retrievability: ${p.score.aiRetrievability}

أعد بالضبط (Markdown، حتى 350 كلمة):
1. ملخص تنفيذي (3-4 جمل خاصة بالفئة والمدينة).
2. "أهم 3 إجراءات" كقائمة مرقمة — كل إجراء: **العنوان**، جملة سبب، جملة خطوة تالية ملموسة. رتّب حسب التأثير على أضعف الأبعاد.
3. "مقارنة الفئة" — جملة واحدة مقابل المنافسين في ${p.city}.`;

  return lang === "en" ? askEn : lang === "ar" ? askAr : askDe;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: "LOVABLE_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Minimal validation
  if (
    !payload?.business || !payload?.city || !payload?.category ||
    !payload?.score || typeof payload.score.total !== "number"
  ) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const language = (payload.language === "en" || payload.language === "ar") ? payload.language : "de";

  try {
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPTS[language] },
          { role: "user", content: buildPrompt(payload) },
        ],
      }),
    });

    if (aiResponse.status === 429) {
      return new Response(JSON.stringify({ error: "rate_limit", message: "Zu viele Anfragen. Bitte gleich nochmal." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiResponse.status === 402) {
      return new Response(JSON.stringify({ error: "credits_exhausted", message: "AI-Credits aufgebraucht." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiResponse.ok) {
      const text = await aiResponse.text();
      console.error("[generate-ai-audit-report] gateway error", aiResponse.status, text);
      return new Response(JSON.stringify({ error: "gateway_error", status: aiResponse.status }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiResponse.json();
    const report: string = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ report, language }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[generate-ai-audit-report] exception", err);
    return new Response(JSON.stringify({ error: "internal_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});