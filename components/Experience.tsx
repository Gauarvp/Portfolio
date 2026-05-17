import { experience } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f0f17]/50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>

        <div className="mt-10 relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-[#1e1e2e] hidden md:block" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-8 relative group">
                {/* dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#6366f1] hidden md:block group-hover:scale-125 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#e2e8f0]">{job.title}</h3>
                    <p className="text-[#6366f1] text-sm font-medium">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#64748b] px-3 py-1 rounded-full border border-[#1e1e2e] bg-[#0a0a0f]">
                      {job.period}
                    </span>
                    <p className="text-xs text-[#64748b] mt-1">{job.location}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#6366f1]/50 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
