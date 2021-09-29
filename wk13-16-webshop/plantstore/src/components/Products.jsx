import React from 'react';
import { connect } from "react-redux";
import ProductCard from "./ProductCard";


const Products = ({ products, category, includeDetails }) => {


  return (

    <div className="products-container">
      {products.map((product) => {
      if(product.category === category) {
        return (
          <ProductCard key={product.id} product={product} includeDetails={includeDetails}/>
        )
      }})}
    </div>

  );
}


const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);







