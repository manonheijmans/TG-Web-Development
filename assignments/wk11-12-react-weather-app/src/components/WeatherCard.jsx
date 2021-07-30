import React from 'react';
import weathercardbackground from '../images/weathercardbackground.png';
import WeatherIconConverter from './WeatherIconConverter'

export default function WeatherCard({ weatherData }) {
 

   return (
      <div className="weather-card-container">

         <img className="background-image" src={weathercardbackground} alt="background"/>

        <div className="weather-card-info">

      
         <WeatherIconConverter iconId={weatherData.weather[0].id}/>

            {/* <img src={`${process.env.REACT_APP_ICON_URL}${weatherData.weather[0].icon}@4x.png`} alt="icon" /> */}
    
         <div className="text-container">
         <p>{weatherData.name}, {weatherData.sys.country}</p>

         <hr />
         <p className="temperature-main">{weatherData.main.temp.toFixed(1)}C°</p>
         <p>min temp: {weatherData.main.temp_min.toFixed(1)}C°</p>
         <p>max temp: {weatherData.main.temp_max.toFixed(1)}C°</p>
         <p>humidity: {weatherData.main.humidity.toFixed(1)}%</p>
         </div>
         </div>
        
      </div>
   )
}


