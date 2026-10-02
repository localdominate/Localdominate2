/**
 * Die einzige Bewegung auf /de: Wechselt der Besucher das Segment, steigen Überschrift und Karte
 * kurz ein (Reaktion auf eine Handlung, nicht beim Laden). Nur transform und opacity. Unter
 * prefers-reduced-motion entfällt sie, der Endzustand steht sofort da.
 */
const CSS = `
@keyframes de-rise {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.de-swap { animation: de-rise 360ms cubic-bezier(0.2, 0, 0, 1) both; }
.de-swap-late { animation-delay: 90ms; }
@media (prefers-reduced-motion: reduce) {
  .de-swap { animation: none; }
}
`;

export function DeStyles() {
  return <style>{CSS}</style>;
}
