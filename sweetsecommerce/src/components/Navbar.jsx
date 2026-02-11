import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/gprs_new_logo_red.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

      <nav className="navbar">
        <div className="navcontainer">

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* Nav Links */}
          <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
            <li><a href="/">Sweets</a></li>
            <li><a href="/">Snacks & More</a></li>
            <li><a href="/">Traditional Pickles</a></li>
            <li><a href="/">Gifting</a></li>
            <li><a href="/">Our Stores</a></li>
            <li><a href="/">My Account</a></li>
          </ul>

          {/* Social Icons */}
          <div className="socialmediaicons">
            <div className="card">
              {/* keep your social icons here */}
            </div>
          </div>

          <div className="carticon">
          <span class="material-symbols-outlined">
          shopping_cart
          </span>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;