import React from 'react'
import WeatherIcon from 'react-icons-weather'

export default function WeatherIconConverter({ iconId }) {

    console.log({WeatherIcon})
    return (

        <div className="icon">
        <WeatherIcon name="owm" iconId={iconId} flip="horizontal" rotate="90" />    
        </div>
    )
}
