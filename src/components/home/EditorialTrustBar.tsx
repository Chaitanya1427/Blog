import { ShieldCheck, Terminal, Award, Users } from "lucide-react";

export function EditorialTrustBar() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Empirical Benchmarks",
      description: "Tested on isolated bare metal & AWS c6i instances with reproducible loads.",
    },
    {
      icon: Award,
      title: "Zero Pay-to-Play Bias",
      description: "No vendor influence or paid editorial placements. Strict architectural integrity.",
    },
    {
      icon: Terminal,
      title: "Reproducible Source Code",
      description: "Every benchmark and tutorial includes complete open-source GitHub repositories.",
    },
    {
      icon: Users,
      title: "45,000+ Senior Engineers",
      description: "Read weekly by staff architects and engineers across top tech organizations.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-zinc-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Editorial Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              The TechPilot Publishing Charter
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Independent, reproducible engineering analysis built for practitioners who ship production code every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
