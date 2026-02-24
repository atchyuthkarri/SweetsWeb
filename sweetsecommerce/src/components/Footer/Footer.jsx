import React, { useState, useEffect } from "react";
import "./Footer.css";

const footerData = [
  {
    title: "PRODUCTS",
    links: [
      "All Products",
      "Cake & Cookie Treats", 
      "Classic Baklavas",
      "Jaggery Sweets",
      "Khara & Snacks",
    ],
  },
  {
    title: "SHOP ONLINE",
    links: ["Pan India", "International", "Hyderabad", "Store Locations"],
  },
  {
    title: "QUICK LINKS",
    links: [
      "About Us",
      "Contact Us", 
      "Store Locations",
      "Gifting",
      "Brand Gallery",
      "Blogs",
      "Safety Guidelines",
    ],
  },
  {
    title: "POLICIES",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Shipping Policy", 
      "Payment Policy",
      "Refund Policy",
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (index) => {
    if (isMobile) {
      setExpandedSections(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  return (
    <footer className="premium-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerData.map((section, index) => (
            <div key={index} className="footer-section">
              <div className="section-header" onClick={() => toggleSection(index)}>
                <h3 className="section-title">{section.title}</h3>
                {isMobile && (
                  <button className={`expand-button ${expandedSections[index] ? 'expanded' : ''}`}>
                    <span className="material-symbols-outlined">
                      {expandedSections[index] ? 'remove' : 'add'}
                    </span>
                  </button>
                )}
              </div>
              <ul className={`section-links ${isMobile && expandedSections[index] ? 'expanded' : ''}`}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brand">
            <h4 className="brand-name">Kwality Sweets</h4>
            <p className="brand-tagline">Crafting memories since 1950</p>
          </div>
          
          <div className="footer-legal">
            <p className="copyright">
              © {currentYear} Kwality Sweets. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Terms</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;