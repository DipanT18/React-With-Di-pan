// File logic note: This file is documented for revision-friendly learning.
// Global layout: composes header, side widgets, routed content, and footer.

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import WeatherBox from "./components/Weather/Weather"
import Clock from "./components/Clock/Clock"

function layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100">
      <Header />

      <aside
        className="fixed top-20 right-3 z-30 max-w-[calc(100vw-1.5rem)] sm:right-4 sm:max-w-[calc(100vw-2rem)]"
        aria-label="Current time"
      >
        <Clock />
      </aside>

      <aside
        className="fixed top-20 left-3 z-30 max-w-[calc(100vw-1.5rem)] sm:left-4 sm:max-w-[calc(100vw-2rem)]"
        aria-label="Current weather"
      >
        <WeatherBox />
      </aside>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default layout
