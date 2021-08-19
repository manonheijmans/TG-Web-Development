import React from "react";


import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductDetails= ({ current, addToCart }) => {
  return (
    <div className="single-item">
      <h2>product details</h2>
      <img
        className="single-item-image"
        src={current.image}
        alt={current.title}
      />
      <div className="single-item-details">
        <p className="single-item-title">test test test {current.title}</p>
        <p className="single-item-caption">{current.caption}</p>
        <p className="single-item-caption">{current.description}</p>
        <p className="single-item-price">€{current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="single-item-details-add-btn"
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
