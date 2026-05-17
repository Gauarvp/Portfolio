import { projects } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-xl border border-[#1e1e2e] bg-[#0f0f17] hover:border-[#6366f1]/30 hover:bg-[#141420] transition-all duration-200 group"
            >
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-[#e2e8f0] leading-snug group-hover:text-[#818cf8] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-[#64748b] mt-1">{p.context}</p>
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2.5 text-xs text-[#94a3b8] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6366f1]/40 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
