import React from 'react';
import { connect } from "react-redux";
import Product from "./ProductCard";


const Products = ({ products, category }) => {

  // const filteredArray = products.filter(function (product) {
  //   return product.details.position === "sunny"
  // });

  // console.log(filteredArray)



// const filter = true

  return (

    <div className="products-container">
      {products.map((product) => {
      if(product.category === category) {
        return (
          <Product key={product.id} product={product} />
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







