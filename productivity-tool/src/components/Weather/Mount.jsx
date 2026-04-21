// File logic note: This file is documented for revision-friendly learning.
// Custom weather hook: gets geolocation and fetches current weather data.

import React, { use } from 'react'
import {useState, useEffect} from 'react'

function useWeather() {
    const[weather, setWeather] = useState({})
    const key = import.meta.env.VITE_API_KEY;
    useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
      .then((res) => res.json())
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  });
}, []);
  return weather
}

export default useWeather