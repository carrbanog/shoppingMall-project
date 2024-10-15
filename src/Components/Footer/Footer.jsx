import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook , FaWhatsapp } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <FaOpencart />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram />
        </div>
        <div className="footer-icons-container">
          <FaFacebook />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - all Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
