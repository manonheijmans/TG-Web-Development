import "./App.css";
import React from "react";
import WeatherOverview from "./components/WeatherOverview";


function App() {
  return (
      <div className="App">
      <WeatherOverview city="Nijmegen"/>
      <WeatherOverview city="Amsterdam"/>
      <WeatherOverview city="New York"/>
    </div>
  )
}

export default App
