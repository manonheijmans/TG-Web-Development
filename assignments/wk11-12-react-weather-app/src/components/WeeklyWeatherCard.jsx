import React, { useState, useEffect } from 'react';
import WeeklyWeatherAccordion from './WeeklyWeatherAccordion';
import weathercardbackground from '../images/weathercardbackground.png'


export default function WeeklyWeatherCard({ lat, lon }) {

  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeeklyData(result);
      });
  },
    [lat, lon]);

  //array to map
  const dailyArray = weeklyData.daily

  return (
    <div className="weekly-weather-card">
      <div className="weather-card-container">
        <img className="background-image" src={weathercardbackground} alt="background" />
        
        {typeof weeklyData.daily != "undefined" ? (
          <div className="weather-card-info">
            <div className="accordion-wrapper">
              {dailyArray.map((item, i) => (<WeeklyWeatherAccordion index={i} item={item} />))}
            </div>
          </div>

      ) : (

      <div></div>

      )}
    </div>
</div >
);
}
