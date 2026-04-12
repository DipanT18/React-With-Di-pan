import { useState, useEffect } from "react";

function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time
    .toLocaleTimeString("en-US", { hour: "2-digit", hour12: true })
    .split(":")[0];
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";
  const date = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-72 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-lg shadow-black/30 overflow-hidden text-center ring-1 ring-sky-500/10">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

        <div className="px-6 py-5 flex flex-col gap-1">
          <div className="flex items-end justify-center gap-2">
            <span className="text-slate-100 text-5xl font-light tabular-nums tracking-tight leading-none">
              {hours}:{minutes}
            </span>
            <div className="flex flex-col items-start mb-1 gap-1">
              <span className="text-slate-500 text-xs font-medium leading-none">
                {ampm}
              </span>
              <span className="text-slate-400 text-sm font-light tabular-nums leading-none">
                {seconds}s
              </span>
            </div>
          </div>

          <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em] mt-1">
            {date}
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}

export default ClockWidget;
