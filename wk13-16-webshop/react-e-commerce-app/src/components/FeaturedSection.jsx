import React from 'react'
import { connect } from "react-redux";

import ProductCard from './ProductCard'

function FeaturedSection({ products }) {

  return (

    <div className="featured-container">
      <h2 className="featured-title">Featured</h2>
      <div className="featured-images">
      {products.map((product) => {
        if (product.featured === true) {
          return (
            <div className="featured-image-wrapper">
            <ProductCard key={product.id} product={product} />
            </div>
          )
        }
      })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(FeaturedSection);

