import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, qty = 1, onIncrement, onDecrement }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to product detail page using product ID
    navigate(`/product/${item.id}`);
  };

  const handleButtonClick = (e) => {
    // Stop event propagation to prevent card click when buttons are clicked
    e.stopPropagation();
  };

  return (
    <div className="card-item" onClick={handleCardClick}>
        <div className="item-image">
          <img src={item.image} alt={item.name} />
      </div>
        <div className="item-details">
            <p>{item.name}</p>
            <p style={{color: "#1e3a8a"}}>{item.price}</p>
            {/* <div className="buttons" onClick={handleButtonClick}>
                <div className="countbutton" role="group" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" className="qty-step" onClick={(e) => { e.stopPropagation(); onDecrement(); }} aria-label="Decrease quantity">
                    -
                  </button>
                  <span className="qty-value" aria-live="polite">{qty}</span>
                  <button type="button" className="qty-step" onClick={(e) => { e.stopPropagation(); onIncrement(); }} aria-label="Increase quantity">
                    +
                  </button>
                </div>
                <button className="cartbutton" onClick={(e) => { e.stopPropagation(); }}>ADD TO BAG</button>
            </div> */}

        </div>
    </div>
  );
};

export default ProductCard;