import React, { useState } from "react";
import "./Navbar.css";
import all_product from "../Assets/all_product";
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
        <li onClick={() => {setMenu("shop")}}>Shop{menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("t-shirt")}}>T-shirt{menu === "t-shirt" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("cap")}}>Cap{menu === "cap" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("pants")}}>Pants{menu === "pants" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FaShoppingCart />
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
