import "./App.css";
import React from "react";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast"


function App() {
  return (
      <div className="App">
      <WeatherOverview city="Nijmegen"/>
      <WeatherForecast />

      <WeatherOverview city="Amsterdam"/>
      <WeatherForecast />

      <WeatherOverview city="New York"/>
      <WeatherForecast />
    </div>
  )
}

export default App
