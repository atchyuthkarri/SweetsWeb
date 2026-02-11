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
      <div className="footer-top">
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
              className={`footer-links ${
                openIndex === index ? "open" : ""
              }`}
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
          <h3 className="footer-title static">Corporate Office</h3>
          <p>xxxxxxxxxxxxxx</p>
          <p>Begumpet, Hyderabad</p>
          <p>📞 +91 xxxxxxxxxxxx</p>
          <p>✉ support@xxxxxxxxx.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© AK. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;