import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const userTier = "kwality"; // String value to control cart visibility
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle navigation click
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Handle close button click
  const handleCloseClick = (e) => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  // Handle cart click
  const handleCartClick = () => {
    // Add cart functionality here
    console.log('Cart clicked');
  };

  // Handle hamburger click
  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Overlay - Only show when menu is open */}
      {menuOpen && (
        <div 
          className="menu-overlay active" 
          onClick={handleNavClick}
          style={{ zIndex: 1050 }}
        ></div>
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navcontainer">

          {/* Left side - Logo on desktop, Hamburger on mobile */}
          <div className="nav-left">
            {/* Hamburger - Only visible on mobile */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={handleHamburgerClick}
              aria-label="Toggle navigation menu"
              role="button"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Logo - Left on desktop, hidden on mobile */}
            <div className="logo desktop-logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'M-Heading-Font', fontSize: '24px' }}>
                <p>Kwality Sweets</p>
              </Link>
            </div>
          </div>

          {/* Center - Logo on mobile only */}
          <div className="logo mobile-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'M-Heading-Font', fontSize: '24px' }}>
              <p>Kwality Sweets</p>
            </Link>
          </div>

          {/* Nav Links */}
          <ul className={`navlinks ${menuOpen ? "open" : ""}`} onClick={handleCloseClick}>
            <li><Link to="/products" onClick={handleNavClick}>Sweets</Link></li>
            <li><Link to="/products" onClick={handleNavClick}>Snacks & More</Link></li>
            <li><Link to="/products" onClick={handleNavClick}>Traditional Pickles</Link></li>
            <li><Link to="/gifting" onClick={handleNavClick}>Gifting</Link></li>
            <li><Link to="/stores" onClick={handleNavClick}>Our Stores</Link></li>
            <li><Link to="/account" onClick={handleNavClick}>My Account</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
          </ul>

          {/* Right side - Cart Icon */}
          <div className="nav-right">
            {/* Cart Icon - Only visible if userTier is "kwality" */}
            {userTier === "kwality" && (
              <div className="carticon" onClick={handleCartClick} aria-label="Shopping cart">
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined">
            keyboard_arrow_up
          </span>
        </button>
      )}
    </>
  );
};

export default Navbar;