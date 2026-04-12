import React from "react";

function Settings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
        Settings
      </h1>
      <p className="mt-2 text-slate-400 text-sm">
        Preferences and account options will live here.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-6 shadow-lg shadow-black/20">
        <p className="text-slate-500 text-sm">
          No settings configured yet.
        </p>
      </div>
    </div>
  );
}

export default Settings;
