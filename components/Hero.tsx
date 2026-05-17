import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl w-full pt-20">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e2e] bg-[#0f0f17]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#94a3b8]">Open to PM opportunities · Bengaluru</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2e8f0] leading-[1.05] mb-4">
          {profile.name}
        </h1>

        <p className="text-xl sm:text-2xl text-[#6366f1] font-medium mb-6">
          {profile.title}
        </p>

        <p className="text-base sm:text-lg text-[#64748b] max-w-2xl leading-relaxed mb-10">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#4f46e5] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e1e2e] bg-[#0f0f17] text-[#94a3b8] text-sm font-medium hover:text-[#e2e8f0] hover:border-[#6366f1]/40 transition-all"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e1e2e] bg-[#0f0f17] text-[#94a3b8] text-sm font-medium hover:text-[#e2e8f0] hover:border-[#6366f1]/40 transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-3 text-[#64748b] text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#1e1e2e]" />
          scroll
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}
