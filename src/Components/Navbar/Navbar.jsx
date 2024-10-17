import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
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
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("jewelery");
          }}
        >
          <Link to="/jewelery" style={{ textDecoration: "none" }}>
            Jewelery
          </Link>
          {menu === "jewelery" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("electronics");
          }}
        >
          <Link to="/electronics" style={{ textDecoration: "none" }}>
            Eletronics
          </Link>
          {menu === "electronics" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women's clothing");
          }}
        >
          <Link to="/women's clothing" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women's clothing" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        <div className="userProfile">
          {
            isAuthenticated&&
            <Link to="/admin">{user.email}</Link>
          }
        </div>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
