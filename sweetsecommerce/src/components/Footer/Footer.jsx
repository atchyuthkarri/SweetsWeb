import React, { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-logo">
          <h2 className="footer-brand">Kwality Sweets</h2>
        </div>
      </div>
      
      <div className="footer-content">
        {footerData.map((col, index) => (
          <div className="footer-col" key={index}>
            <h3
              className="footer-title"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {col.title}
              <span className="arrow">{openIndex === index ? "−" : "+"}</span>
            </h3>
            <ul
              className={`footer-links ${openIndex === index ? "open" : ""}`}
            >
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col contact">
          <h3 className="footer-title static">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Hyderabad, India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>support@kwalitysweets.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+91 XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p> 1965-2025 Kwality Sweets. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;