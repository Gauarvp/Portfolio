import { profile } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0f17]/50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>

        <div className="mt-10 max-w-xl">
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-[#94a3b8] leading-relaxed mb-8">
            I&apos;m actively looking for PM and APM roles — full-time or contract.
            If you&apos;re building something interesting in B2B SaaS, fintech, or
            AI/ML products, I&apos;d love to talk.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#6366f1]/30 hover:bg-[#0f0f17] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                <MailIcon />
              </div>
              <div>
                <p className="text-xs text-[#64748b]">Email</p>
                <p className="text-sm text-[#e2e8f0]">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#6366f1]/30 hover:bg-[#0f0f17] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                <LinkedInIcon />
              </div>
              <div>
                <p className="text-xs text-[#64748b]">LinkedIn</p>
                <p className="text-sm text-[#e2e8f0]">linkedin.com/in/saigauravp</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#6366f1]/30 hover:bg-[#0f0f17] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                <GitHubIcon />
              </div>
              <div>
                <p className="text-xs text-[#64748b]">GitHub</p>
                <p className="text-sm text-[#e2e8f0]">github.com/Gauarvp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#818cf8">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#818cf8">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}
