import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item, qty = 1, onIncrement, onDecrement, style }) => {
  const navigate = useNavigate();

  return (
    <article
      className="bestseller-card"
      style={style}
      onClick={() => navigate(`/product/${item.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${item.id}`)}
      aria-label={`View ${item.name}`}
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

        {/* ── Quantity + Add to Bag row ── */}
        <div
          className="bestseller-card__actions"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bestseller-card__qty" role="group" aria-label={`Quantity for ${item.name}`}>
            <button
              type="button"
              className="bestseller-card__qty-btn"
              onClick={(e) => { e.stopPropagation(); onDecrement(); }}
              aria-label="Decrease quantity"
            >−</button>
            <span className="bestseller-card__qty-val" aria-live="polite">{qty}</span>
            <button
              type="button"
              className="bestseller-card__qty-btn"
              onClick={(e) => { e.stopPropagation(); onIncrement(); }}
              aria-label="Increase quantity"
            >+</button>
          </div>

          <button
            type="button"
            className="bestseller-card__add-btn"
            onClick={(e) => { e.stopPropagation(); }}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;