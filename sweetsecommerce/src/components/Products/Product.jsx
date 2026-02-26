import React, { useMemo, useState } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";

import Ariselu from "../../assets/Ariselu.webp";
import Badusha from "../../assets/Badusha.webp";
import Bandar_ladoo from "../../assets/Bandar_ladoo.webp";
import KajuKatli from "../../assets/KajuKatli.webp";
import DryfruitLaddu from "../../assets/Dry-Fruitladdu.webp";

const allProducts = [
  { id: "ariselu", name: "Ariselu", price: "₹450 / kg", image: Ariselu, category: "Telugu Special" },
  { id: "badusha", name: "Badusha", price: "₹950 / kg", image: Badusha, category: "Sweets" },
  { id: "bandar-ladoo", name: "Bandar Ladoo", price: "₹520 / kg", image: Bandar_ladoo, category: "Telugu Special" },
  { id: "dryfruit-laddu", name: "Dryfruit Laddu", price: "₹300 / kg", image: DryfruitLaddu, category: "Sweets" },
  { id: "kaju-katli", name: "Kaju Katli", price: "₹850 / kg", image: KajuKatli, category: "Sweets" },
];

const categories = ["All", "Telugu Specials", "Sweets", "Khara & Snacks", "Bakery"];

const Products = ({ variant = "slider" }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? allProducts
        : allProducts.filter((p) => {
          if (activeCategory === "Telugu Specials") return p.category === "Telugu Special";
          return p.category === activeCategory;
        }),
    [activeCategory]
  );

  const [qtyById, setQtyById] = useState(() =>
    allProducts.reduce((acc, item) => { acc[item.id] = 1; return acc; }, {})
  );

  const setQty = (id, nextQty) =>
    setQtyById((prev) => ({
      ...prev,
      [id]: Math.max(1, Number.isFinite(nextQty) ? nextQty : 1),
    }));

  return (
    <section className={`bestsellers bestsellers--${variant}`}>

      {/* ── Section Header ── */}
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">
          <span className="bestsellers__title-arrow">❧</span>
          Our Best Sellers
          <span className="bestsellers__title-arrow bestsellers__title-arrow--right">❧</span>
        </h2>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="bestsellers__filters" role="tablist" aria-label="Product categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`bestseller-pill${activeCategory === cat ? " bestseller-pill--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Product Grid ── */}
      <div key={activeCategory} className={`bestseller-grid bestseller-grid--${variant}`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              qty={qtyById[item.id] || 1}
              onDecrement={() => setQty(item.id, (qtyById[item.id] || 1) - 1)}
              onIncrement={() => setQty(item.id, (qtyById[item.id] || 1) + 1)}
              style={{ animationDelay: `${index * 0.08}s` }}
            />
          ))
        ) : (
          <div className="bestsellers__empty">
            <span>No products in this category yet — check back soon!</span>
          </div>
        )}
      </div>

    </section>
  );
};

export default Products;