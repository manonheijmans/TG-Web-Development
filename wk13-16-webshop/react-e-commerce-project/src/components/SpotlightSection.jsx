import React from 'react'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons';

export default function SpotlightSection() {
    return (
        <div className="spotlight-container">
            <h2 className="spotlight-title">In the spotlight</h2>
            <div className="spotlight-images">
                <div className="spotlight-images-main">
                    <img src="../assets/images/spotlight/plants.jpg" alt="plants" />
                    <Link to="/plants"><button className="button">Plants <ArrowRight className="button-arrow" /></button> </Link>

                </div>
                <div className="spotlight-images-secondary">
                    <img src="../assets/images/spotlight/driedflowers.jpg" alt="driedflowers" />
                    <Link to="/driedflowers"><button className="button">Flowers <ArrowRight className="button-arrow" /></button> </Link>

                </div>
                <div className="spotlight-images-secondary">
                    <img src="../assets/images/spotlight/accessoires.jpg" alt="accessoires" />
                    <Link to="/accessoires"><button className="button">Accessoires <ArrowRight className="button-arrow" /></button> </Link>

                </div>


            </div>

        </div>
    )
}
