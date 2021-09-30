import React, { useState, useEffect } from "react";
import { faBars, faTimes, faShoppingCart, faUser, faSeedling, faTruck, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };


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
    <>
    <nav className="navbar">
      <div className="main-nav">
        <Link to="/">
            <div className="logo-container">
              <img className="logo" src="../assets/images/logo.png" alt="logo" />
              <p>The Greenery</p>
            </div>
          </Link>
     
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/plants" className="nav-link" onClick={closeMenu}>
            Plants
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/driedflowers" className="nav-link" onClick={closeMenu}>
            Flowers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/accessoires" className="nav-link" onClick={closeMenu}>
            Accessoires
          </Link>
        </li>
      </ul>
      <ul className="nav-user-links">
        <li><Link to="/cart"><FontAwesomeIcon className="nav-user-icons" icon={faShoppingCart} /> {cartCount}</Link></li>
        <li><Link to="/dashboard"><FontAwesomeIcon className="nav-user-icons" icon={faUser} /></Link></li>
        <li onClick={handleClick} className="nav-icon">
        {open ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </li>
      </ul>
      </div>
      <div className="shop-info">
        <p><FontAwesomeIcon icon={faSeedling} />  0% plastic</p>
        <p><FontAwesomeIcon icon={faTruck} />  Shipped next day</p>
        <p><FontAwesomeIcon icon={faSun} />  Free delivery on orders above €40</p>
      </div>
       </nav>
    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};


export default connect(mapStateToProps)(Navbar);

