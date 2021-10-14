import React from "react";
import { useStateValue } from "../StateProvider";
import SubTotal from "../SubTotal/subTotal";
import "./checkOut.css";
import CheckOutproducts from "./checkOutproducts";
function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492663_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckOutproducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
