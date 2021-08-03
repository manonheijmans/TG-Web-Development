import React from 'react';
import IconConverter from './tools/IconConverter'

export default function Accordion({ weatherData, index }) {
 
function DateDisplay() {
  const unixTime = weatherData.daily[index].dt;
  const date = new Date(unixTime*1000);

  return date.toLocaleDateString()

}

  return (

    
    <div className="accordion">
 
    <DateDisplay />
    <IconConverter iconId={weatherData.daily[index].weather[0].id} />
  
     <p>temp morning: {weatherData.daily[index].temp.morn.toFixed(1)}C°</p>
     <p>temp afternoon: {weatherData.daily[index].temp.day.toFixed(1)}C°</p>
     <p>temp evening: {weatherData.daily[index].temp.eve.toFixed(1)}C°</p>
     <p>temp night: {weatherData.daily[index].temp.night.toFixed(1)}C°</p>
   
    </div>
  );
}



