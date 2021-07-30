import React, { useState } from "react";





export default function FunctionalGreeting2() {

    const [name, setName] = useState("Manon");

    const handleChange = (event) => {
        setName(event.target.value)
    };
   
      return (
        <>
        <input type="text" placeholder="Enter your name" onChange={handleChange}/>
        <h3>Hello Functional {name}! </h3>
        </>
      )
    }



