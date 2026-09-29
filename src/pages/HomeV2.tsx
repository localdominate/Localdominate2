import { useEffect } from "react";
import { Play, ArrowRight, TrendingUp, Sparkles, BarChart3 } from "lucide-react";

const NAV_LINKS = ["Work", "Services", "Industries", "Approach", "About"];

const LOGOS = ["KEMPINSKI", "SAVESPACE", "KLOVERS", "DADICATION"];

const PROCESS_STEPS = [
  { n: "01", label: "Strategy" },
  { n: "02", label: "Brand" },
  { n: "03", label: "Build" },
  { n: "04", label: "Launch" },
];

const STATS = [
  { value: "4+", label: "Industries" },
  { value: "50+", label: "Projects" },
  { value: "128%", label: "Ø Growth Lift" },
  { value: "1", label: "Connected System" },
];

const PILLARS = [
  {
    icon: Sparkles,
    title: "Strategy first",
    body: "Clear positioning and roadmap.",
  },
  {
    icon: BarChart3,
    title: "AI-powered",
    body: "Faster execution. More possibilities.",
  },
  {
    icon: TrendingUp,
    title: "Measurable results",
    body: "Data-driven growth and continuous optimisation.",
  },
];

export default function HomeV2() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4ff3d] selection:text-black">
      {/* Nav */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <span className="text-lg font-bold tracking-tight">LOCALDOMINATE</span>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#start"
            className="rounded-full bg-[#d4ff3d] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Start a Project →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Great Ideas Build{" "}
          <span className="text-[#d4ff3d]">Real Businesses.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/60">
          Strategy, branding, websites, content, marketing and AI systems — all
          connected to drive real growth.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#start"
            className="rounded-full bg-[#d4ff3d] px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#showreel"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
          >
            <Play className="h-4 w-4" />
            Watch Showreel
          </a>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-white/10 bg-[#0f0f0f] py-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
            Trusted by ambitious businesses
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-sm font-semibold tracking-wide text-white/50">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* System / process */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            A complete system.
            <br />
            Measurable impact.
          </h2>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="text-sm">
                <span className="text-[#d4ff3d]">{step.n}</span>{" "}
                <span className="text-white/60">{step.label}</span>
              </div>
            ))}
            <div className="text-sm font-semibold text-[#d4ff3d]">Grow</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#d4ff3d] md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Different businesses */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-[#141414] p-10 md:p-14">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Different businesses.
              <br />
              Same growth system.
            </h2>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm font-semibold text-[#d4ff3d] hover:underline"
          >
            See the work <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
          You don't need another agency.
        </h2>
        <p className="mb-12 text-lg text-white/50">You need a growth system.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-7">
              <Icon className="h-6 w-6 text-[#d4ff3d]" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/50">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/30">
        Preview build — dark/lime redesign (Home) — not yet linked from the live site.
      </footer>
    </div>
  );
}
