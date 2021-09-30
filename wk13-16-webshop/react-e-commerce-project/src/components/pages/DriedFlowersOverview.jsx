import React from 'react'
import Products from '../utilities/Products'

export default function DriedFlowersOverview() {



    return (
        <div className="driedflowers-overview page-container">
            <Products category="driedflowers" includeDetails={true} />
        </div>
    )
}
