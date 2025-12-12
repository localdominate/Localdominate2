import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const rows = [
    { label: "Kosten", agency: "1.500€+", diy: "Deine Lebenszeit", local: "299€ Festpreis" },
    { label: "Dauer", agency: "Monate", diy: "Ewig", local: "48 Stunden" },
    { label: "Garantie", agency: "Keine", diy: "Keine", local: "100% Geld-zurück" },
    { label: "Ergebnis", agency: "Vielleicht", diy: "Frust", local: "Top-Rankings" },
  ];

  return (
    <section className="bg-pain py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pain-foreground">
            Warum <span className="text-primary">Local Dominator</span> anders ist
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4"></th>
                <th className="p-4 text-center text-pain-foreground/70 font-bold text-lg">
                  Andere Agenturen
                </th>
                <th className="p-4 text-center text-pain-foreground/70 font-bold text-lg">
                  Selber machen
                </th>
                <th className="p-4 text-center relative">
                  {/* Bestseller Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-success-foreground text-xs font-black uppercase px-3 py-1 rounded-full">
                    Bestseller
                  </div>
                  <div className="border-4 border-success bg-success/10 rounded-t-lg pt-6 pb-4 -mb-4">
                    <span className="text-success font-black text-xl">Local Dominator</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-pain-foreground/20">
                  <td className="p-4 font-bold text-pain-foreground">{row.label}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-pain-foreground/60">
                      <X className="w-5 h-5 text-primary" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-pain-foreground/60">
                      <X className="w-5 h-5 text-primary" />
                      <span>{row.diy}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center border-l-4 border-r-4 border-success bg-success/10">
                    <div className="flex items-center justify-center gap-2 text-success font-bold">
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
                <td className="border-l-4 border-r-4 border-b-4 border-success bg-success/10 rounded-b-lg h-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {/* Local Dominator Card - Featured */}
          <div className="relative border-4 border-success bg-success/10 p-6 rounded-lg">
            <div className="absolute -top-3 left-4 bg-success text-success-foreground text-xs font-black uppercase px-3 py-1 rounded-full">
              Bestseller
            </div>
            <h3 className="text-success font-black text-xl mb-4 mt-2">Local Dominator</h3>
            <ul className="space-y-3">
              {rows.map((row, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-pain-foreground/70">{row.label}:</span>
                  <span className="font-bold text-success flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    {row.local}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other options - dimmed */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pain-foreground/5 p-4 rounded-lg">
              <h3 className="text-pain-foreground/50 font-bold text-sm mb-3">Andere Agenturen</h3>
              <ul className="space-y-2 text-sm">
                {rows.map((row, index) => (
                  <li key={index} className="flex items-center gap-1 text-pain-foreground/40">
                    <X className="w-3 h-3 text-primary shrink-0" />
                    <span className="truncate">{row.agency}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-pain-foreground/5 p-4 rounded-lg">
              <h3 className="text-pain-foreground/50 font-bold text-sm mb-3">Selber machen</h3>
              <ul className="space-y-2 text-sm">
                {rows.map((row, index) => (
                  <li key={index} className="flex items-center gap-1 text-pain-foreground/40">
                    <X className="w-3 h-3 text-primary shrink-0" />
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
