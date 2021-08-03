import React, { useEffect, useState } from 'react'
import Accordion from './AccordionInfo'

export default function WeatherForecast() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
           `https://api.openweathermap.org/data/2.5/onecall?lat=51.8333&lon=5.85&exclude=minutely,hourly&appid=bd2eba57d16153bcc8d30de6e03da549&units=metric`
       )
         .then((res) => res.json())
         .then((result) => {
           setData(result);
           console.log(result);
         });
     },[]);

     return (
        <div className="App">
          {typeof data.daily != "undefined" ? (
            <div>
            <Accordion weatherData={data} index='0' />
            <Accordion weatherData={data} index='1' />
            <Accordion weatherData={data} index='2' />
            <Accordion weatherData={data} index='3' />
            <Accordion weatherData={data} index='4' />
            <Accordion weatherData={data} index='5' />
            <Accordion weatherData={data} index='6' />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
    }
