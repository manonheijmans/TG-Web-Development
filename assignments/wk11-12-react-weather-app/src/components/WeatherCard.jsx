import React from 'react';
import WeeklyWeatherCard from './WeeklyWeatherCard';
import CurrentWeatherCard from './CurrentWeatherCard';

export default function WeatherCard({ city }) {

return (
   <>
   <CurrentWeatherCard city="Nijmegen" />
   <WeeklyWeatherCard />
   </>
   );
}




