import React from 'react'

export default function FunctionalGreeting3( {textProp, handleChange2 }) {

  


    return (
        <div>
            <input value={textProp}
                   onChange={handleChange2} />
            <h3>Hello Functional {textProp}!</h3>
        </div>
    )
}

