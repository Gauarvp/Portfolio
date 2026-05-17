import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 relative">
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="absolute -top-5 right-12 w-10 h-10 rounded-full bg-accent text-cream flex items-center justify-center shadow-lg hover:bg-accent/80 transition-colors duration-200"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-cream/60 italic mb-3">
          "This portfolio is a product. Current version: v1.0. Next iteration: your team."
        </p>
        <p className="text-xs text-cream/25">
          Sai Gowrav P · Bengaluru, India · 2025
        </p>
      </div>
    </footer>
  );
}
