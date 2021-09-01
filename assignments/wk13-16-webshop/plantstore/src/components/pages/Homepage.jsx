import React from 'react'
import Hero from '../Hero'

export default function Homepage() {

    return (
        <>
        <header>
        <Hero />
        </header>
        <main>
       
            <div className="spotlight-container">
            <h2>Spotlight</h2>
            <div className="spotlight-images">
                <img className="spotlight-images-main" src="../assets/images/spotlight/plants.jpg" alt="plants"/>  
                <img src="../assets/images/spotlight/driedflowers.jpg" alt="driedflowers" />
                <img src="../assets/images/spotlight/driedflowers.jpg" alt="driedflowers" />
            </div>
        </div>
  
        </main>
        </>
        )
        
}

