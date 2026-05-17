import { useState } from "react";
import { ExternalLink, Mail, Download, Eye, X } from "lucide-react";
import { contact } from "../data/content";
import { FadeUp } from "../hooks/useScrollAnimation";

const iconMap = {
  linkedin: ExternalLink,
  mail: Mail,
  download: Download,
  eye: Eye,
};

export default function Contact() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
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

                if (link.action === "preview") {
                  return (
                    <button
                      key={i}
                      onClick={() => setPreviewOpen(true)}
                      className="inline-flex items-center gap-2.5 px-6 py-3 border-2 border-ink text-ink text-sm font-semibold rounded-full hover:bg-ink hover:text-cream transition-colors duration-200"
                    >
                      {Icon && <Icon size={16} />}
                      {link.label}
                    </button>
                  );
                }

                if (link.action === "download") {
                  return (
                    <a
                      key={i}
                      href={link.href}
                      download="Sai_Gowrav_PM_Resume.pdf"
                      className="inline-flex items-center gap-2.5 px-6 py-3 border-2 border-ink text-ink text-sm font-semibold rounded-full hover:bg-ink hover:text-cream transition-colors duration-200"
                    >
                      {Icon && <Icon size={16} />}
                      {link.label}
                    </a>
                  );
                }

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

      {/* Resume Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col"
            style={{ height: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10">
              <span className="text-sm font-semibold text-ink">Sai_Gowrav_PM_Resume.pdf</span>
              <div className="flex items-center gap-3">
                <a
                  href="/Sai_Gowrav_PM_Resume.pdf"
                  download="Sai_Gowrav_PM_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-ink text-cream text-xs font-semibold rounded-full hover:bg-accent transition-colors"
                >
                  <Download size={13} />
                  Download
                </a>
                <button
                  onClick={() => setPreviewOpen(false)}
                  className="p-1.5 rounded-full hover:bg-ink/10 text-ink transition-colors"
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <iframe
              src="/Sai_Gowrav_PM_Resume.pdf"
              className="flex-1 w-full rounded-b-2xl"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}
