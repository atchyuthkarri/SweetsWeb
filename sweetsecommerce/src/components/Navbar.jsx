import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/gprs_new_logo_red.svg";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Nav Links */}
         <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Sweets</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Snacks & More</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Traditional Pickles</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Gifting</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Our Stores</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>My Account</Link></li>
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