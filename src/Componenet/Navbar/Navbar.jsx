import React, { useState } from "react";
import "./Navbar.css";
import CartSidebar from "../Cart/CartSideBar"; 
import shoppingIcon from "../../icons/shopping-bag.png";
import sellIcon from "../../icons/store.png";
import helpIcon from "../../icons/question.png";
import messageIcon from "../../icons/comment.png";
import signInIcon from "../../icons/user-profile.png";
import cartIcon from "../../icons/cart.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/shopping">
            <img src={shoppingIcon} alt="Shopping" className="navbar-icon" />
            Shopping
          </Link>
        </li>
        <li>
          <Link to="/sell">
            <img src={sellIcon} alt="Sell" className="navbar-icon" />
            Sell
          </Link>
        </li>
        <li>
          <Link to="/help">
            <img src={helpIcon} alt="Help" className="navbar-icon" />
            Help
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={messageIcon} alt="Message" className="navbar-icon" />
            Message
          </Link>
        </li>
        <li className="cart" onClick={toggleCart}>
          <img src={cartIcon} alt="Cart" className="navbar-icon" />
          Add to Cart <span className="cart-count">0</span>
        </li>
        <li
          className="navbar-signin"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <img src={signInIcon} alt="Sign In" className="navbar-icon" />
          Sign In <span className="arrow-down">&#9662;</span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/SignIn">
                <button className="signin-button">Sign In</button>
              </Link>
              <p className="signup-message">
                New to B2B Ecomm? <Link to="/signup">Join Now</Link>
              </p>
            </div>
          )}
        </li>
      </ul>
      <CartSidebar cartItems={[]} isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;
