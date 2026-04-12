import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";

function Dashboard() {
  const [showTodos, setShowTodos] = useState(false);

  const toggleTodos = () => setShowTodos((open) => !open);

  return (
    <div className="relative min-h-[50vh]">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center sm:text-left">
        Productivity Dashboard for Dipan
      </h1>
      <p className="mt-2 text-slate-400 text-sm text-center sm:text-left max-w-xl">
        Your overview — open todos when you need them.
      </p>

      <div className="mt-8 max-w-2xl mx-auto sm:mx-0">
        <div
          role="button"
          tabIndex={0}
          onClick={toggleTodos}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTodos();
            }
          }}
          className="cursor-pointer select-none rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl px-5 py-4 shadow-lg shadow-black/20 transition hover:border-sky-500/30 hover:bg-slate-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
          aria-expanded={showTodos}
          aria-controls="dashboard-todo-panel"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-100 font-medium tracking-tight">
              Todos
            </span>
            <span className="text-sky-400/90 text-sm font-medium tabular-nums">
              {showTodos ? "Hide" : "Open"}
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Click to {showTodos ? "collapse" : "open"} your task list
          </p>
        </div>

        {showTodos && (
          <div id="dashboard-todo-panel" className="mt-4">
            <Tasks />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
