import { education, certifications } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Education & Certifications</SectionLabel>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {education.map((e, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[#1e1e2e] bg-[#0f0f17]"
            >
              <p className="text-xs text-[#64748b] mb-2">{e.period}</p>
              <h3 className="text-base font-semibold text-[#e2e8f0] leading-snug mb-1">
                {e.degree}
              </h3>
              <p className="text-sm text-[#94a3b8]">{e.institution}</p>
              {e.gpa && (
                <p className="text-xs text-[#6366f1] font-semibold mt-3">
                  GPA: {e.gpa}
                </p>
              )}
            </div>
          ))}

          {certifications.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center shrink-0">
                  <CertIcon />
                </div>
                <div>
                  <p className="text-xs text-[#64748b] mb-1">{c.issuer} · {c.date}</p>
                  <h3 className="text-sm font-semibold text-[#e2e8f0] leading-snug">
                    {c.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
