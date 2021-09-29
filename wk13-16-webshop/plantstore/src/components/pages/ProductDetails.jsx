import React from "react";


import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

import ImageViewer from "../ImageViewer";

const ProductDetails = ({ current, addToCart }) => {
  console.log(current.id)
  return (
    <div className="product-details-container page-container">

      <ImageViewer current={current} />
      <div className="product-details">
        <h2 className="product-details-title">{current.title}</h2>
        <p className="product-details-caption">{current.caption}</p>
        <p className="product-details-description">{current.description}</p>


        <div className="product-details-info">
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-heightplant.svg" alt="aircleaner-icon" />
          </div>
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-widthplant.svg" alt="width-icon" />
          </div>
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-aircleaner.svg" alt="benefits-icon" />
          </div>
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-water.svg" alt="care-icon" />
          </div>
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-suncloud.svg" alt="placing-icon" />
          </div>
          <div className="product-details-logo">
            <img src="../assets/images/icons/mos-icons-sun.svg" alt="placing-icon" />
          </div>

        </div>


        <p className="product-details-price">€{current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="button"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
