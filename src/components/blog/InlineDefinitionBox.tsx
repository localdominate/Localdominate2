import { getInlineDefinitions, InlineDefinition } from "@/data/articleDefinitions";
import { useEffect, useRef } from "react";

interface InlineDefinitionBoxProps {
  slug: string;
}

/**
 * Injects AI-optimized definition boxes at the start of matching sections.
 * Uses DefinedTerm schema markup and data-featured-snippet attributes
 * for maximum Featured Snippet and AI extraction potential.
 */
const InlineDefinitionBox = ({ slug }: InlineDefinitionBoxProps) => {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    const defs = getInlineDefinitions(slug);
    if (defs.length === 0) return;

    const timer = setTimeout(() => {
      defs.forEach((d: InlineDefinition) => {
        const anchor = document.getElementById(d.sectionId);
        if (!anchor) return;

        const sectionEl = anchor.closest("section") || anchor.parentElement;
        if (!sectionEl) return;

        // Don't double-inject
        if (sectionEl.querySelector(`[data-definition-term="${d.term}"]`)) return;

        // Find the first heading to insert after
        const heading = sectionEl.querySelector("h2, h3");
        if (!heading) return;

        const box = document.createElement("div");
        box.setAttribute("data-definition-term", d.term);
        box.setAttribute("data-featured-snippet", "definition");
        box.setAttribute("data-speakable", "true");
        box.setAttribute("itemscope", "");
        box.setAttribute("itemtype", "https://schema.org/DefinedTerm");
        box.className = "definition-box not-prose my-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3";

        box.innerHTML = `
          <p class="text-sm leading-relaxed text-foreground">
            <strong itemprop="name" class="font-semibold text-primary">${d.term}</strong>
            <span itemprop="description"> — ${d.definition}</span>
          </p>
        `;

        // Insert right after the heading
        heading.insertAdjacentElement("afterend", box);
      });

      injectedRef.current = true;
    }, 150);

    return () => clearTimeout(timer);
  }, [slug]);

  return null;
};

export default InlineDefinitionBox;
