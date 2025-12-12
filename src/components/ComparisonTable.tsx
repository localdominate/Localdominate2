import { Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const ComparisonTable = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  
  const rows = [
    t.comparison.rows.cost,
    t.comparison.rows.duration,
    t.comparison.rows.guarantee,
    t.comparison.rows.result,
  ];

  return (
    <section className="bg-pain section-padding px-4">
      <div ref={ref} className="container max-w-5xl">
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pain-foreground">
            {t.comparison.headline} <span className="text-gradient">{t.comparison.headlineHighlight}</span> {t.comparison.headlineEnd}
          </h2>
        </div>

        {/* Desktop Table */}
        <div className={`hidden md:block overflow-hidden reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="bg-pain-foreground/5 rounded-2xl p-6 border border-pain-foreground/10">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4"></th>
                  <th className="p-4 text-center text-pain-foreground/70 font-semibold text-lg">
                    {t.comparison.headers.agencies}
                  </th>
                  <th className="p-4 text-center text-pain-foreground/70 font-semibold text-lg">
                    {t.comparison.headers.diy}
                  </th>
                  <th className="p-4 text-center relative">
                    {/* Bestseller Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-success-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
                      {t.comparison.bestseller}
                    </div>
                    <div className="border-2 border-success bg-success/10 rounded-xl pt-6 pb-4 -mb-4">
                      <span className="text-success font-bold text-xl">{t.comparison.headers.localDominator}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} className="border-t border-pain-foreground/10">
                    <td className="p-4 font-semibold text-pain-foreground">{row.label}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-pain-foreground/60">
                        <X className="w-5 h-5 text-destructive" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-pain-foreground/60">
                        <X className="w-5 h-5 text-destructive" />
                        <span>{row.diy}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-l-2 border-r-2 border-success bg-success/10">
                      <div className="flex items-center justify-center gap-2 text-success font-semibold">
                        <Check className="w-5 h-5" />
                        <span>{row.local}</span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="border-l-2 border-r-2 border-b-2 border-success bg-success/10 rounded-b-xl h-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {/* Local Dominator Card - Featured */}
          <div className={`relative border-2 border-success bg-success/10 p-6 rounded-2xl reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute -top-3 left-4 bg-success text-success-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
              {t.comparison.bestseller}
            </div>
            <h3 className="text-success font-bold text-xl mb-4 mt-2">{t.comparison.headers.localDominator}</h3>
            <ul className="space-y-3">
              {rows.map((row, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-pain-foreground/70">{row.label}:</span>
                  <span className="font-semibold text-success flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    {row.local}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other options - dimmed */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`bg-pain-foreground/5 p-4 rounded-xl reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
              <h3 className="text-pain-foreground/50 font-semibold text-sm mb-3">{t.comparison.headers.agencies}</h3>
              <ul className="space-y-2 text-sm">
                {rows.map((row, index) => (
                  <li key={index} className="flex items-center gap-1 text-pain-foreground/40">
                    <X className="w-3 h-3 text-destructive shrink-0" />
                    <span className="truncate">{row.agency}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-pain-foreground/5 p-4 rounded-xl reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
              <h3 className="text-pain-foreground/50 font-semibold text-sm mb-3">{t.comparison.headers.diy}</h3>
              <ul className="space-y-2 text-sm">
                {rows.map((row, index) => (
                  <li key={index} className="flex items-center gap-1 text-pain-foreground/40">
                    <X className="w-3 h-3 text-destructive shrink-0" />
                    <span className="truncate">{row.diy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
