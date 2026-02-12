import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item, qty = 1, onIncrement, onDecrement }) => {
  return (
    <div className="card-item">
        <div className="item-image">
          <img src={item.image} alt={item.name} />
      </div>
        <div className="item-details">
            <p>{item.name}</p>
            <p style={{color:"var(--primary-color)"}}>{item.price}</p>
            {/* <div className="buttons">
                <div className="countbutton" role="group" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" className="qty-step" onClick={onDecrement} aria-label="Decrease quantity">
                    -
                  </button>
                  <span className="qty-value" aria-live="polite">{qty}</span>
                  <button type="button" className="qty-step" onClick={onIncrement} aria-label="Increase quantity">
                    +
                  </button>
                </div>
                <button className="cartbutton">ADD TO BAG</button>
            </div> */}

        </div>
    </div>
  );
};

export default ProductCard;