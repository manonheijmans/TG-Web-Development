import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSeedling, faTruck, faSun } from '@fortawesome/free-solid-svg-icons'
// import Modal from "./Modal";


import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);



  // const [isModalOpen, setModalIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalIsOpen(!isModalOpen);
  // };



  return (
    <div className="navbar-container">
      <div className="navbar">
        

          <Link to="/">
            <div className="logo-container">
              <img className="logo" src="../assets/images/logo.png" alt="logo" />
              <p>The Greenery</p>
            </div>
          </Link>

          <ul className="main-nav">
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/driedflowers">Dried Flowers</Link></li>
          <li><Link to="/accessoires">Accessoires</Link></li>
        </ul>
        <ul className="user-nav">
          <li><Link to="/cart"><FontAwesomeIcon className="nav-icons" icon={faShoppingCart} /> {cartCount}</Link></li>
          <li><Link to="/dashboard"><FontAwesomeIcon className="nav-icons" icon={faUser} /></Link></li>
        </ul>
      </div>


      <div className="shop-info">
        <p><FontAwesomeIcon icon={faSeedling} />  0% plastic</p>
        <p><FontAwesomeIcon icon={faTruck} />  Shipped next day</p>
        <p><FontAwesomeIcon icon={faSun} />  Free delivery on orders above €40</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);