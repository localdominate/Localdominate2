import { useEffect, RefObject } from "react";

interface AutoFaqSchemaProps {
  /** Ref to the article <article> element whose H2s we scan */
  contentRef: RefObject<HTMLElement>;
  /** Article slug, used as a stable @id for the schema */
  slug: string;
  /** Article URL (canonical) */
  url: string;
  /** Skip injection entirely (e.g. when an explicit FAQPage schema already exists) */
  disabled?: boolean;
}

const MIN_QUESTIONS = 2;
const MAX_QUESTIONS = 12;
const MIN_ANSWER_CHARS = 40;
const MAX_ANSWER_CHARS = 1200;

/**
 * Scans the rendered article for question-style H2 headings (ending in "?")
 * and auto-emits a FAQPage JSON-LD block. This activates AI extraction +
 * Google FAQ rich results for every article without author work.
 *
 * Lifecycle: runs after children paint, mutates document.head, cleans up
 * on unmount or slug change. Safe to mount when `faqItems` were also
 * provided manually — pass `disabled` from the parent in that case to
 * avoid duplicate FAQPage schemas.
 */
const AutoFaqSchema = ({ contentRef, slug, url, disabled }: AutoFaqSchemaProps) => {
  useEffect(() => {
    if (disabled) return;
    if (typeof document === "undefined") return;

    // Wait for children to render — RAF is enough since MDX/markdown
    // bodies hydrate synchronously in this codebase.
    let scriptEl: HTMLScriptElement | null = null;
    const rafId = window.requestAnimationFrame(() => {
      const root = contentRef.current;
      if (!root) return;

      const h2s = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2"));
      const faqs: { question: string; answer: string }[] = [];

      for (const h2 of h2s) {
        const raw = (h2.textContent || "").trim();
        // Strip leading numbering/emojis ("1. ", "📌 ", etc.)
        const question = raw.replace(/^[^\p{L}\p{N}]*\s*/u, "").trim();
        if (!/[?？]\s*$/u.test(question)) continue;
        if (question.length < 12) continue;

        // Collect following siblings until next H2/H3 as the answer body
        const parts: string[] = [];
        let node: Element | null = h2.nextElementSibling;
        let chars = 0;
        while (node && chars < MAX_ANSWER_CHARS) {
          const tag = node.tagName;
          if (tag === "H2" || tag === "H3") break;
          const text = (node.textContent || "").trim();
          if (text) {
            parts.push(text);
            chars += text.length;
          }
          node = node.nextElementSibling;
        }
        const answer = parts.join(" ").replace(/\s+/g, " ").slice(0, MAX_ANSWER_CHARS).trim();
        if (answer.length < MIN_ANSWER_CHARS) continue;

        faqs.push({ question, answer });
        if (faqs.length >= MAX_QUESTIONS) break;
      }

      if (faqs.length < MIN_QUESTIONS) return;

      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#auto-faq`,
        "isPartOf": { "@id": `${url}#webpage` },
        "inLanguage": document.documentElement.lang || "de-DE",
        "mainEntity": faqs.map((f, i) => ({
          "@type": "Question",
          "@id": `${url}#faq-${i + 1}`,
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      };

      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.setAttribute("data-auto-faq", slug);
      scriptEl.text = JSON.stringify(schema);
      document.head.appendChild(scriptEl);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
      // Defensive cleanup in case React StrictMode double-mounted
      document
        .querySelectorAll(`script[data-auto-faq="${CSS.escape(slug)}"]`)
        .forEach((n) => n.parentNode?.removeChild(n));
    };
  }, [contentRef, slug, url, disabled]);

  return null;
};

export default AutoFaqSchema;