import { skills } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f0f17]/50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest text-[#6366f1] uppercase mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-[#94a3b8] px-3 py-2 rounded-lg border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#6366f1]/20 hover:text-[#e2e8f0] transition-all"
                  >
                    {skill}
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
