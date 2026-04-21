// File logic note: This file is documented for revision-friendly learning.
// Footer component: renders app branding and dynamic year.

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
        <span>Productive · productivity dashboard</span>
        <span className="tabular-nums">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
