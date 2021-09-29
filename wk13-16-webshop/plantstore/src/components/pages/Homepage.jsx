import React from 'react'



import Hero from '../Hero'
import SpotlightSection from '../SpotlightSection';
import FeaturedSection from '../FeaturedSection';


export default function Homepage() {

    return (
        <div className="homepage-container page-container">
            <header>
                <Hero />
            </header>
            <main>
                <SpotlightSection />
                <FeaturedSection />
            </main>
        </div>
    )

}

