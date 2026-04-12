import { useState } from 'react'
import './App.css'
import useFind from './Find'

function App() {
  const [amount, setAmount] = useState(1)
  const [Coin, setCoin] = useState("bitcoin")
  const currency = "usd"
  const { rate, loading, error } = useFind(Coin, currency)

  const ConvertedAmount = amount * rate

  const COINS = ["bitcoin", "ethereum", "binancecoin", "solana", "ripple", "dogecoin"]
  const COIN_LABELS = {
    bitcoin: "BTC",
    ethereum: "ETH",
    binancecoin: "BNB",
    solana: "SOL",
    ripple: "XRP",
    dogecoin: "DOGE",
  }
  const COIN_COLORS = {
    bitcoin: "bg-orange-400/20 text-orange-300 border-orange-400/30",
    ethereum: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    binancecoin: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
    solana: "bg-purple-400/20 text-purple-300 border-purple-400/30",
    ripple: "bg-sky-400/20 text-sky-300 border-sky-400/30",
    dogecoin: "bg-amber-400/20 text-amber-300 border-amber-400/30",
  }

  
  const isLoading = rate === null || rate === undefined || isNaN(ConvertedAmount)

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
        style={{
          background: "#07080f",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56,189,248,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 100%, rgba(139,92,246,0.06) 0%, transparent 60%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] text-sky-400/50 uppercase mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            live · real-time
          </p>
          <h1 className="text-5xl font-black text-white tracking-tight leading-none">
            Crypto{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #38bdf8, #818cf8)" }}
            >
              Tracker
            </span>
          </h1>
        </div>

        {/* ── Main Card ── */}
        <div
          className="w-full max-w-md rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: "rgba(15, 18, 30, 0.95)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.05), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* top glow line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }}
          />

          {/* ── Coin Pills ── */}
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Select Coin
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {COINS.map((c) => (
              <button
                key={c}
                onClick={() => setCoin(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-widest transition-all duration-150
                  ${Coin === c
                    ? (COIN_COLORS[c] || "bg-sky-400/20 text-sky-300 border-sky-400/30") + " scale-105"
                    : "bg-white/[0.03] text-white/30 border-white/[0.07] hover:text-white/60 hover:border-white/20"
                  }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {COIN_LABELS[c]}
              </button>
            ))}
          </div>

          {/* ── Amount Input ── */}
          <div className="flex flex-col gap-1.5 mb-5">
            <label
              className="text-[10px] tracking-[0.25em] uppercase text-white/25"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Amount
            </label>
            <input
              type="number"
              value={amount}
              min={0}
              onChange={(e) =>
                setAmount(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="rounded-xl px-4 py-2.5 text-white text-sm font-semibold outline-none transition-all duration-150"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid rgba(56,189,248,0.4)")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
            />
          </div>

          {/* ── Divider ── */}
          <div
            className="h-px mb-5"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(56,189,248,0.12), transparent)",
            }}
          />

          {/* ── Result Panel ── */}
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "rgba(56,189,248,0.04)",
              border: "1px solid rgba(56,189,248,0.14)",
            }}
          >
            {/* inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 120%, rgba(56,189,248,0.07) 0%, transparent 65%)",
              }}
            />

            <p
              className="text-[10px] tracking-[0.3em] uppercase text-sky-400/50 mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Converted Value
            </p>

            {isLoading ? (
              <p className="text-white/40 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {loading ? "Fetching rate..." : error ? `Error: ${error}` : "—"}
              </p>
            ) : (
              <>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-4xl font-black text-white tracking-tight leading-none">
                    {ConvertedAmount.toFixed(4)}
                  </span>
                  <span
                    className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-md"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "rgba(56,189,248,0.12)",
                      border: "1px solid rgba(56,189,248,0.25)",
                      color: "#7dd3fc",
                    }}
                  >
                    {currency}
                  </span>
                </div>
                <p
                  className="mt-2 text-[11px] text-white/25"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {amount} <span className="text-white/45">{COIN_LABELS[Coin]}</span>
                  {" "}→ converted at live rate
                </p>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <p
          className="mt-6 text-[10px] tracking-[0.2em] uppercase text-white/15"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Prices update in real-time
        </p>
      </div>
    </>
  )
}

export default App