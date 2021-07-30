import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";


export default function WeatherOverview({ city }) {

    const [data, setData] = useState([]);
 
    useEffect(() => {
        fetch(
         `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&lang=nl&APPID=${process.env.REACT_APP_API_KEY}`
       )
         .then((res) => res.json())
         .then((result) => {
           setData(result);
           console.log(result);
         });
     },
     [city]);

   return (
     <div className="App">
       {typeof data.main != "undefined" ? (
         <WeatherCard weatherData={data} />
       ) : (
         <div></div>
       )}
     </div>
   );
       }
