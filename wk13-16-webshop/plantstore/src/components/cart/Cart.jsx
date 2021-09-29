import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-container page-container">
      <h2>Shopping Cart</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h4 className="cart-summary-title">Cart Summary</h4>
        <div className="cart-summary-price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>€{totalPrice}</span>
        </div>
        <button className="button checkout-button">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
