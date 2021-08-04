import React, { useState, useEffect } from 'react';
import weathercardbackground from '../images/weathercardbackground.png'
import IconConverter from './tools/IconConverter'

export default function WeeklyWeatherCard({ city }) {

  const [weeklyData, setWeeklyData] = useState([]);
  const [isOpen, setOpen] = useState(false);


  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=51.8333&lon=5.85&exclude=minutely,hourly&appid=bd2eba57d16153bcc8d30de6e03da549&units=metric'
    )
      .then((res) => res.json())
      .then((result) => {
        setWeeklyData(result);
        console.log(result);
      });
  },
    [city]);

    const dailyArray = weeklyData.daily
    // console.log(dailyArray)

        

  function DateDisplay({param}) {
    const unixTime = param.dt;
    const date = new Date(unixTime * 1000);

    return date.toLocaleDateString()

  }

  // let ceos = ['Sundar', 'Mark', 'Tim', 'Jeff'];

  // ceos.map((ceo, index) => console.log(`The ${index} is ${ceo}`));

  



  return (
    <div className="weekly-weather-card">
      {typeof weeklyData.daily != "undefined" ? (

        <div>

         
            <div className="weather-card-container">
              <img className="background-image" src={weathercardbackground} alt="background" />

              <div className="weather-card-info">

                <div className="accordion-wrapper">
                {dailyArray.map((x, index) => <div>


                  <div
                    className={`accordion-title ${isOpen ? "open" : ""}`}
                    onClick={() => setOpen(!isOpen)}
                  >

                    
                    <p className="title">
                      <DateDisplay param={x}/>
                      <IconConverter iconId={x.weather[0].id} />
                    </p>


                  </div>
                  <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                    <div className="accordion-content">
                      <p>morning: {x.temp.morn.toFixed(1)}C°</p>
                      <p>afternoon: {x.temp.day.toFixed(1)}C°</p>
                      <p>evening: {x.temp.eve.toFixed(1)}C°</p>
                      <p>night: {x.temp.night.toFixed(1)}C°</p>
                    </div>
                  </div>
                  </div>)}
                </div>
              </div>
            </div>
        </div>  
      ) : (
        <div></div>
    )}
</div>
);
}


         