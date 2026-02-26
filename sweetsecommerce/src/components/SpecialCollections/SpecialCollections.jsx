import React from "react";
// import "./SpecialCollection.css";
import ProductCard from "../Products/ProductCard";

import Ariselu from "../../assets/Ariselu.webp";
import Badusha from "../../assets/Badusha.webp";
import Bandar_ladoo from "../../assets/Bandar_ladoo.webp";

import DryfruitLaddu from "../../assets/Dry-Fruitladdu.webp";

const SpecialCollection = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Ariselu",
      price: "₹450 / kg",
      image: Ariselu,
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "Badusha",
      price: "₹950 / kg",
      image: require("../../assets/Badusha.webp"),
      badge: "NEW"
    },
    {
      id: 3,
      name: "Bandar ladoo",
      price: "₹520 / kg",
      image: require("../../assets/Bandar_ladoo.webp"),
      badge: null
    },
    {
      id: 4,
      name: "Dryfruit Laddu",
      price: "₹300 / kg",
      image: require("../../assets/Dry-Fruitladdu.webp"),
      badge: "LIMITED"
    }
  ];

  return (
    <div className="special-collection">
      {/* Header Section */}
      <div className="collection-header">
        <div className="header-content">
          <h1 className="collection-title">Winter Specials - Jaggery Collection</h1>
          <p className="collection-subtitle">Traditional sweets made with authentic jaggery</p>
        </div>
      </div>

      {/* Products Grid - Scrollable Container */}
      <div className="products-container">
        <div className="product-grid">
          {bestSellers.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                {item.badge && (
                  <div className="product-badge">{item.badge}</div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialCollection;