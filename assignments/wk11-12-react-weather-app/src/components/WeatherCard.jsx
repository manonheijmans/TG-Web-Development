import React from 'react';
import WeeklyWeatherCard from './WeeklyWeatherCard';
import CurrentWeatherCard from './CurrentWeatherCard';

export default function WeatherCard({ city }) {

return (
   <div className="weather-card">
   <CurrentWeatherCard city={city} />
   <WeeklyWeatherCard />
  
   
   </div>
   );
}




