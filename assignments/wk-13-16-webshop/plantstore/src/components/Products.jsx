//map functie voor producten 

import React from "react";


// Redux
import { connect } from "react-redux";

import Product from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
