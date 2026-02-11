import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="card-item">
        <div className="item-image">
          <img src={item.image}/>
      </div>
        <div className="item-details">
            <p>{item.name}</p>
            <p style={{color:"var(--primary-color)"}}>{item.price}</p>
            <div className="buttons">
                <button className="countbutton">
                <span >
                    -
                  </span>
                        1
                    <span>
                      +
                    </span>
                </button>
                <button className="cartbutton">ADD TO BAG</button>
            </div>

        </div>

    </div>
  );
};

export default ProductCard;