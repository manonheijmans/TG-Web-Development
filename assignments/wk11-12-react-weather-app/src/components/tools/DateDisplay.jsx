import React from 'react'

export default function DateDisplay({ weatherData }) {

    const unixTime = backData.current.dt;
    const date = new Date(unixTime*1000);
    const regularDate = date.toLocaleDateString() 
    



    return (
<div>{regularDate}</div>
    )
}



  
