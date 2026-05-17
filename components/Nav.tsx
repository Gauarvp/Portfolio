"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-widest text-[#6366f1] uppercase"
        >
          SGP
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#94a3b8] hover:text-[#e2e8f0] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:Gowravp147@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-[#6366f1]/40 text-[#818cf8] hover:bg-[#6366f1]/10 transition-all duration-200"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#94a3b8] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f17] border-b border-[#1e1e2e] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
