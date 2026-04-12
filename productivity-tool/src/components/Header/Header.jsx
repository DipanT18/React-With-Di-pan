import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors rounded-lg px-3 py-2 ${
    isActive
      ? "text-sky-300 bg-white/10"
      : "text-slate-400 hover:text-sky-200 hover:bg-white/5"
  }`;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xl font-extrabold tracking-tight">
          <span className="text-sky-400">Pro</span>
          <span className="text-slate-100">ductive</span>
        </span>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          <NavLink to="/" className={linkClass} end>
            Dashboard
          </NavLink>
          <NavLink to="/tasks" className={linkClass}>
            Tasks
          </NavLink>
          <NavLink to="/insights" className={linkClass}>
            Insights
          </NavLink>
          <NavLink to="/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
