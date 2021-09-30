import React from 'react'
import Products from '../utilities/Products'

export default function PlantsOverview() {



    return (
        <div className="plants-overview page-container">
            <Products category="plants" includeDetails="true" />
        </div>
    )
}
