import { getSectionSummaries, SectionSummaryData } from "@/data/sectionSummaries";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface SectionAiSummaryProps {
  slug: string;
}

/**
 * Injects short AI-readable summaries after each <section> matching a sectionId.
 * Uses a portal-free DOM injection approach to avoid restructuring article children.
 * Renders both a visible TL;DR and a hidden speakable block for AI crawlers.
 */
const SectionAiSummary = ({ slug }: SectionAiSummaryProps) => {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    const summaries = getSectionSummaries(slug);
    if (summaries.length === 0) return;

    // Small delay to ensure article DOM is rendered
    const timer = setTimeout(() => {
      summaries.forEach((s: SectionSummaryData) => {
        const section = document.getElementById(s.sectionId);
        if (!section) return;

        // Find the parent section element
        const sectionEl = section.closest("section") || section.parentElement;
        if (!sectionEl) return;

        // Don't double-inject
        if (sectionEl.querySelector(`[data-section-summary="${s.sectionId}"]`)) return;

        const wrapper = document.createElement("div");
        wrapper.setAttribute("data-section-summary", s.sectionId);
        wrapper.setAttribute("data-speakable", "true");
        wrapper.setAttribute("data-ai-summary", "section");
        wrapper.className = "section-ai-summary my-4 not-prose";

        wrapper.innerHTML = `
          <div class="flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-0.5 shrink-0"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
            <p class="text-xs leading-relaxed text-muted-foreground"><strong class="text-foreground font-medium">Kurzfassung:</strong> ${s.summary}</p>
          </div>
        `;

        // Insert after the section
        sectionEl.appendChild(wrapper);
      });

      injectedRef.current = true;
    }, 200);

    return () => clearTimeout(timer);
  }, [slug]);

  return null;
};

export default SectionAiSummary;
