import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import shoppingCart from "../images/shopping-cart.png";

const Navbar = () => {
  const items =  useSelector((state) => state.cart)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>
        <img className="logoImage" src={logo} alt="Store" />
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">
          <img className="shoppingCartImage" src={shoppingCart} alt="Cart Items" />{" "}
          <span>{items.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
