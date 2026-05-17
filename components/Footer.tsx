export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748b]">
        <span>© {new Date().getFullYear()} Sai Gowrav P</span>
        <span>Bengaluru, India</span>
      </div>
    </footer>
  );
}
