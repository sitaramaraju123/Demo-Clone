import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkOutProduct.css";

function CheckOutproducts({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkOutProduct">
      <img className="checkOutProduct_image" src={image} />
      <div className="checkOutProduct_info">
        <p className="checkOutProduct_title">{title}</p>
        <p className="checkOutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkOutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckOutproducts;
