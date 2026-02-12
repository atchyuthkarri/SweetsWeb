import React from "react";
import "./SpecialCollection.css";
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
    },
    {
      id: 2,
      name: "Badusha",
      price: "₹950 / kg",
      image: Badusha,
    },
    {
      id: 3,
      name: "Bandar ladoo",
      price: "₹520 / kg",
      image: Bandar_ladoo,
    },
    {
      id: 4,
      name: " DryfruitLaddu",
      price: "₹300 / kg",
      image: DryfruitLaddu,
    },
  ];

  return (
    <section className="products">

      <div className="bestsellers">
        <h2> Winter Specials - Jaggery collection</h2>
      </div>

      <div className="product-grid">
        {bestSellers.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SpecialCollection;