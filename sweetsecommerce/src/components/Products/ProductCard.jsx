import React from "react";

import "./ProductCard.css";

const ProductCard = ({ item, style }) => {
  return (
    <article
      className="bestseller-card"
      style={style}
    >
      {/* ── Image ── */}
      <div className="bestseller-card__image-wrap">
        <img
          src={item.image}
          alt={item.name}
          className="bestseller-card__image"
          loading="lazy"
        />
      </div>

      {/* ── Details ── */}
      <div className="bestseller-card__details">
        <h3 className="bestseller-card__name">{item.name}</h3>
        <p className="bestseller-card__price">{item.price}</p>

      </div>
    </article>
  );
};

export default ProductCard;