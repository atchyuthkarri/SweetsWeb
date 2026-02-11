import React, { useMemo, useState } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";

import Ariselu from "../../assets/Ariselu.webp";
import Badusha from "../../assets/Badusha.webp";
import Bandar_ladoo from "../../assets/Bandar_ladoo.webp";
import KajuKatli from "../../assets/KajuKatli.webp";
import DryfruitLaddu from "../../assets/Dry-Fruitladdu.webp";

const Products = ({ variant = "slider" }) => {
  const bestSellers = useMemo(
    () => [
      {
        id: "ariselu",
        name: "Ariselu",
        price: "₹450 / kg",
        image: Ariselu,
      },
      {
        id: "badusha",
        name: "Badusha",
        price: "₹950 / kg",
        image: Badusha,
      },
      {
        id: "bandar-ladoo",
        name: "Bandar ladoo",
        price: "₹520 / kg",
        image: Bandar_ladoo,
      },
      {
        id: "dryfruit-laddu",
        name: "DryfruitLaddu",
        price: "₹300 / kg",
        image: DryfruitLaddu,
      },
    ],
    []
  );

  const [qtyById, setQtyById] = useState(() =>
    bestSellers.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const setQty = (id, nextQty) => {
    setQtyById((prev) => ({
      ...prev,
      [id]: Math.max(1, Number.isFinite(nextQty) ? nextQty : 1),
    }));
  };

  return (
    <section className={`products products--${variant}`}>

      <div className="bestsellers">
     
        <h2> Our Best Sellers</h2>
     
      </div>

      <div className="bestsellerbuttons">
        <button>Telugu Special</button>
        <button>Khara and Snacks</button>
        <button>Sweets</button>
        <button>Bakery</button>
      </div>

      <div className="product-grid">
        {bestSellers.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            qty={qtyById[item.id] || 1}
            onDecrement={() => setQty(item.id, (qtyById[item.id] || 1) - 1)}
            onIncrement={() => setQty(item.id, (qtyById[item.id] || 1) + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;