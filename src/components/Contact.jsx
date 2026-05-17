import { ExternalLink, Mail, Download } from "lucide-react";
import { contact } from "../data/content";
import { FadeUp } from "../hooks/useScrollAnimation";

const iconMap = {
  linkedin: ExternalLink,
  mail: Mail,
  download: Download,
};

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            <span className="text-sm font-medium text-muted">
              {contact.openToWork}
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <span className="inline-block text-sm text-accent tracking-wider uppercase font-semibold mb-4">
            {contact.label}
          </span>
          <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight mb-6">
            {contact.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < contact.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12">
            {contact.desc}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {contact.links.map((link, i) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2.5 px-6 py-3 border-2 border-ink text-ink text-sm font-semibold rounded-full hover:bg-ink hover:text-cream transition-colors duration-200"
                >
                  {Icon && <Icon size={16} />}
                  {link.label}
                </a>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
