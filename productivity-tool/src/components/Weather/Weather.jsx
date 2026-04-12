import React from 'react'
import useWeather from "./Mount";
import {
  WiDaySunny, WiCloudy, WiRain, WiSnow,
  WiThunderstorm, WiFog, WiHumidity, WiStrongWind
} from 'react-icons/wi';
import { TbEye } from 'react-icons/tb';
import { MdCompress } from 'react-icons/md';

const getWeatherIcon = (main) => {
  const iconClass = "text-4xl drop-shadow-lg";
  switch (main?.toLowerCase()) {
    case 'clear':        return <WiDaySunny className={`${iconClass} text-yellow-300`} />;
    case 'clouds':       return <WiCloudy className={`${iconClass} text-blue-200`} />;
    case 'rain':
    case 'drizzle':      return <WiRain className={`${iconClass} text-blue-300`} />;
    case 'snow':         return <WiSnow className={`${iconClass} text-sky-200`} />;
    case 'thunderstorm': return <WiThunderstorm className={`${iconClass} text-blue-400`} />;
    default:             return <WiFog className={`${iconClass} text-blue-300`} />;
  }
};

function StatCard({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2">
      <span className="text-slate-500 text-[10px] uppercase tracking-widest">{label}</span>
      <span className="text-sky-300/90 text-lg">{icon}</span>
      <span className="text-slate-100 font-semibold text-xs">{value}</span>
    </div>
  );
}

function WeatherBox() {
  const data = useWeather();

  const isLoading = !data || !data.weather;
  const weatherMain = data?.weather?.[0]?.main;

  return (
    <div className="w-72 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-lg shadow-black/30 overflow-hidden ring-1 ring-sky-500/10">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="p-5 bg-gradient-to-br from-slate-900/40 to-blue-950/30">
        {isLoading ? (
          <div className="flex flex-col items-center gap-3 py-6 text-slate-500">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-sky-400/80 animate-spin" />
            <span className="text-xs tracking-wider">Fetching weather…</span>
          </div>
        ) : (
          <>
            {/* Location + Icon */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-slate-100 text-lg font-bold tracking-tight leading-none">
                  {data.name}
                </h2>
                <p className="text-slate-500 text-[10px] mt-0.5 tracking-widest uppercase">
                  {data.sys?.country} · {data.weather?.[0]?.description}
                </p>
              </div>
              <div className="flex flex-col items-end">
                {getWeatherIcon(weatherMain)}
              </div>
            </div>

            {/* Temperature */}
            <div className="mb-4">
              <div className="flex items-end gap-1">
                <span className="text-slate-100 text-6xl font-thin tracking-tighter leading-none">
                  {Math.round(data.main?.temp)}°
                </span>
                <span className="text-slate-500 text-base mb-2">C</span>
              </div>
              <div className="flex gap-2 mt-1 text-slate-500 text-[11px]">
                <span>Feels {Math.round(data.main?.feels_like)}°C</span>
                <span>·</span>
                <span>↑{Math.round(data.main?.temp_max)}° ↓{Math.round(data.main?.temp_min)}°</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1.5">
              <StatCard
                icon={<WiHumidity />}
                label="Humidity"
                value={`${data.main?.humidity}%`}
              />
              <StatCard
                icon={<WiStrongWind />}
                label="Wind"
                value={`${data.wind?.speed} m/s`}
              />
              <StatCard
                icon={<MdCompress />}
                label="Pressure"
                value={`${data.main?.pressure}`}
              />
            </div>

            {/* Visibility */}
            {data.visibility && (
              <div className="mt-3 flex items-center gap-1.5 text-slate-600 text-[10px] justify-center">
                <TbEye />
                <span>Visibility {(data.visibility / 1000).toFixed(1)} km</span>
              </div>
            )}
          </>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default WeatherBox;