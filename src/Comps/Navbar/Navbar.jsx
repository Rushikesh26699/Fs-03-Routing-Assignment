import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 style={{ margin: 0 }}>SHOPIFY</h2>
        <NavLink  id="links" to="/">
          Home
        </NavLink>
        <NavLink id="links" to="/products">
          Products
        </NavLink>
        <NavLink id="links" to="/cart">
          Cart
        </NavLink>
        
      </div>
    </>
  );
}

export default Navbar;
