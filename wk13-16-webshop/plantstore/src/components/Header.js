import React, { useState } from "react";
import { Link } from "react-router-dom"








const Header = () => {

    const [toggle, toggleNav] = useState(false);


    let overlayClass = "overlay"


    if (toggle) overlayClass = "overlay active"
   


    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <div className="logo-container">
                        <img className="logo" src="../assets/images/logo.png" alt="logo" />
                        <p>The Greenery</p>
                    </div>
                </Link>
                <ul className="menu">
                    <li className="item">
                        <Link to="/plants" className="product-links">
                            Plants
                        </Link>    
                    </li>
                    <li className="item">
                        <Link to="/driedflowers" className="product-links">
                            Flowers
                        </Link>    
                    </li>
                   
                    <li className="item">
                        <Link to="/accessoires" className="product-links">
                            Accessoires
                        </Link>
                    </li>
                </ul>
                <button className="nav-icon" onClick={() => toggleNav(!toggle)}>
                    <span className="line" open={toggle} />
                    <span className="line" open={toggle} />
                    <span className="line" open={toggle} />
                </button>
            </nav>
            <div className={overlayClass} open={toggle}>
                <div className="overlay-menu" open={toggle}>
                <li className="item">
                        <Link to="/plants" className="product-links">
                            Plants
                        </Link>   
                    </li>
                    <li className="item">
                        <Link to="/driedflowers" className="product-links">
                            Dried Flowers
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/accessoires" className="product-links">
                            Accessoires
                        </Link>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Header;
