import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#e2e8f0] leading-tight mb-6">
              I&apos;m already doing product work.
              <br />
              <span className="text-[#6366f1]">The title is the next step.</span>
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              For the past 1.7+ years at Wipro and DXC Technology, I&apos;ve been
              functioning as an analytical PM — defining KPIs, prioritizing backlogs,
              writing solution briefs, and aligning engineering and business
              stakeholders. My BE in Computer Science means I speak engineering
              natively.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              I build products the way I think about data: ask why, find the signal,
              prioritize ruthlessly. My differentiator isn&apos;t just analytical
              rigor — it&apos;s that I shipped a consumer app with a 40% engagement
              uplift while making real product trade-offs under technical constraints.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl border border-[#1e1e2e] bg-[#0f0f17] hover:border-[#6366f1]/30 transition-colors"
              >
                <div className="text-3xl font-bold text-[#6366f1] mb-1">{s.value}</div>
                <div className="text-xs text-[#64748b] leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-widest text-[#6366f1] uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1e1e2e]" />
    </div>
  );
}
