import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <FaOpencart />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{textDecoration:"none"}}>Shop</Link>{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("t-shirt");
          }}
        >
          <Link to="/t-shirt" style={{textDecoration:"none"}}>T-shirt</Link>{menu === "t-shirt" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("cap");
          }}
        >
          <Link to="/cap" style={{textDecoration:"none"}}>Cap</Link>{menu === "cap" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link to="/pants" style={{textDecoration:"none"}}>Pants</Link>{menu === "pants" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
